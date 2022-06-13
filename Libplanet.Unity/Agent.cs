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
using NetMQ;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// Agent runs <see cref="Miner"/>, <see cref="SwarmRunner"/> and Action Controller
    /// You can use <c>RunOnMainThread</c>, <c>MakeTransaction</c> to manage actions.
    /// </summary>
    public class Agent : MonoSingleton<Agent>
    {
        private readonly ConcurrentQueue<System.Action> _actions =
            new ConcurrentQueue<System.Action>();

        private Miner _miner;

        private Swarm<PolymorphicAction<ActionBase>> _swarm;

        private SwarmRunner _swarmRunner;

        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// Address of the <see cref="PrivateKey"/>.
        /// </summary>
        public Address Address { get; private set; }

        private PrivateKey PrivateKey { get; set; }

        /// <summary>
        /// Initialize Agent.
        /// Because it is <see cref="MonoSingleton{T}"/>, use Initialize instead of constructor.
        /// </summary>
        /// <param name="renderers">Listener to check status.</param>
        public static void Initialize(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers)
        {
            if (Instance is { } instance)
            {
                instance.InitAgent(renderers);
            }
        }

        /// <summary>
        /// Returns the status of the current <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <param name="address"><see cref="Address"/> to be use.</param>
        /// <returns>This can be <c>null</c>.</returns>
        public IValue GetState(Address address)
        {
            return _blockChain.GetState(address);
        }

        /// <summary>
        /// Stage the action transactions.
        /// </summary>
        /// <param name="gameActions"><see cref="Action"/> list to be use.</param>
        public void MakeTransaction(IEnumerable<ActionBase> gameActions)
        {
            var actions = gameActions.Select(
                gameAction => (PolymorphicAction<ActionBase>)gameAction).ToList();
            Task.Run(() => MakeTransaction(actions, true));
        }

        /// <summary>
        /// Append action.
        /// </summary>
        /// <param name="action"><see cref="Action"/> to be use.</param>
        public void RunOnMainThread(System.Action action)
        {
            _actions.Enqueue(action);
        }

        /// <summary>
        /// Dispose <see cref="Swarm{T}"/> and <see cref="NetMQConfig"/> clean up.
        /// </summary>
        protected override void OnDestroy()
        {
            NetMQConfig.Cleanup(false);

            base.OnDestroy();
            _swarm?.Dispose();
        }

        private void InitAgent(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers)
        {
            ConfigureKeys();
            ConfigureNode(renderers);
            ConfigureMiner();

            StartCoroutines();
        }

        private void ConfigureKeys()
        {
            PrivateKey = Utils.LoadPrivateKey(Paths.PrivateKeyPath);
            Address = PrivateKey.PublicKey.ToAddress();
        }

        private void ConfigureNode(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers)
        {
            SwarmConfig swarmConfig = Utils.LoadSwarmConfig(Paths.SwarmConfigPath);
            Block<PolymorphicAction<ActionBase>> genesis = Utils.LoadGenesisBlock(
                Paths.GenesisBlockPath);
            (IStore store, IStateStore stateStore) = Utils.LoadStore(Paths.StorePath);

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

        private void ConfigureMiner()
        {
            _miner = new Miner(
                _swarm,
                PrivateKey);
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
