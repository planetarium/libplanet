#nullable disable
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Node;
using Libplanet.Store;
using Libplanet.Tx;
using Libplanet.Unity.Action;
using Libplanet.Unity.Miner;
using NetMQ;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// Agent
    /// </summary>
    public class Agent : MonoSingleton<Agent>
    {
        private readonly ConcurrentQueue<System.Action> _actions =
            new ConcurrentQueue<System.Action>();

        private BaseMiner<PolymorphicAction<ActionBase>> _miner;

        private SwarmRunner _swarmRunner;

        private Swarm<PolymorphicAction<ActionBase>> _swarm;

        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// PrivateKey's Address.
        /// </summary>
        public Address Address { get; private set; }

        private PrivateKey PrivateKey { get; set; }

        /// <summary>
        /// Initialize Agent
        /// m
        /// </summary>
        /// <param name="renderers">T1.</param>
        /// <param name="miner">T2.</param>
        public static void Initialize(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers,
            BaseMiner<PolymorphicAction<ActionBase>> miner = null)
        {
            if (Instance is { } instance)
            {
                instance.InitAgent(renderers, miner);
            }
        }

        /// <summary>
        /// Get blockchain now state
        /// </summary>
        /// <param name="address"><see cref="Address"/> to be use.</param>
        /// <returns>Return <see cref="IValue"/>.</returns>
        public IValue GetState(Address address)
        {
            return _blockChain.GetState(address);
        }

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="gameActions">T1.</param>
        public void MakeTransaction(IEnumerable<ActionBase> gameActions)
        {
            var actions = gameActions.Select(
                gameAction => (PolymorphicAction<ActionBase>)gameAction).ToList();
            Task.Run(() => MakeTransaction(actions, true));
        }

        /// <summary>
        /// T.
        /// </summary>
        /// <param name="action">T1.</param>
        public void RunOnMainThread(System.Action action)
        {
            _actions.Enqueue(action);
        }

        /// <summary>
        /// T.
        /// </summary>
        protected override void OnDestroy()
        {
            NetMQConfig.Cleanup(false);

            base.OnDestroy();
            _swarm?.Dispose();
        }

        private void InitAgent(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers,
            BaseMiner<PolymorphicAction<ActionBase>> miner)
        {
            ConfigureKeys();
            ConfigureNode(renderers);
            ConfigureMiner(miner);

            StartCoroutines();
        }

        private void ConfigureKeys()
        {
            PrivateKey = InitHelper.GetPrivateKey(Paths.PrivateKeyPath);
            Address = PrivateKey.PublicKey.ToAddress();
        }

        private void ConfigureNode(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers)
        {
            SwarmConfig swarmConfig = InitHelper.GetSwarmConfig(Paths.SwarmConfigPath);
            Block<PolymorphicAction<ActionBase>> genesis = InitHelper.GetGenesisBlock(
                Paths.GenesisBlockPath);
            (IStore store, IStateStore stateStore) = InitHelper.GetStore(Paths.StorePath);

            var nodeConfig = new NodeConfig<PolymorphicAction<ActionBase>>(
                PrivateKey,
                new NetworkConfig<PolymorphicAction<ActionBase>>(
                    NodeUtils<PolymorphicAction<ActionBase>>.DefaultBlockPolicy,
                    NodeUtils<PolymorphicAction<ActionBase>>.DefaultStagePolicy,
                    genesis),
                swarmConfig,
                store,
                stateStore,
                renderers);
            _swarm = nodeConfig.GetSwarm();
            _swarmRunner = new SwarmRunner(_swarm, PrivateKey);

            _blockChain = _swarm.BlockChain;
        }

        private void ConfigureMiner(BaseMiner<PolymorphicAction<ActionBase>> miner)
        {
            if (miner is null)
            {
                _miner = new SoloMiner<PolymorphicAction<ActionBase>>(
                    _blockChain,
                    PrivateKey,
                    new MineHandler(_blockChain, PrivateKey));
            }
            else
            {
                _miner = miner;
            }
        }

        private void StartCoroutines()
        {
            StartCoroutine(_swarmRunner.CoSwarmRunner());
            StartCoroutine(_miner.CoStart());
            StartCoroutine(CoProcessActions());
        }

        private IEnumerator CoProcessActions()
        {
            while (true)
            {
                if (_actions.TryDequeue(out System.Action action))
                {
                    action();
                }

                yield return new WaitForSeconds(0.1f);
            }
        }

        private Transaction<PolymorphicAction<ActionBase>> MakeTransaction(
                    IEnumerable<PolymorphicAction<ActionBase>> actions, bool broadcast)
        {
            var polymorphicActions = actions.ToArray();
            Debug.LogFormat(
                "Make Transaction with Actions: `{0}`",
                string.Join(",", polymorphicActions.Select(i => i.InnerAction)));
            return _blockChain.MakeTransaction(PrivateKey, polymorphicActions);
        }
    }
}
