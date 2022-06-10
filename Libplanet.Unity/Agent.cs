#nullable disable
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Tx;
using Libplanet.Unity.Miner;
using NetMQ;
using Serilog;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Node;
using UnityEngine;
using UnityEditor;

namespace Libplanet.Unity
{
    /// <summary>
    /// T.
    /// </summary>
    public class Agent : MonoSingleton<Agent>
    {
        private readonly ConcurrentQueue<System.Action> _actions = new ConcurrentQueue<System.Action>();

        private BaseMiner<PolymorphicAction<ActionBase>> _miner;

        private SwarmRunner _swarmRunner;

        private PrivateKey PrivateKey { get; set; }

        private NodeConfig<PolymorphicAction<ActionBase>> _nodeConfig;

        private Swarm<PolymorphicAction<ActionBase>> _swarm;

        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// T.
        /// </summary>
        public Address Address { get; private set; }

        /// <summary>
        /// T.
        /// </summary>
        public static void Initialize(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers,
            BaseMiner<PolymorphicAction<ActionBase>> miner = null)
        {
            Instance.InitAgent(renderers, miner);
        }

        /// <summary>
        /// T.
        /// </summary>
        public IValue GetState(Address address)
        {
            return _blockChain.GetState(address);
        }

        /// <summary>
        /// T.
        /// </summary>
        public void MakeTransaction(IEnumerable<ActionBase> gameActions)
        {
            var actions = gameActions.Select(gameAction => (PolymorphicAction<ActionBase>)gameAction).ToList();
            Task.Run(() => MakeTransaction(actions, true));
        }

        /// <summary>
        /// T.
        /// </summary>
        public void RunOnMainThread(System.Action action)
        {
            _actions.Enqueue(action);
        }

        private void InitAgent(
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers,
            BaseMiner<PolymorphicAction<ActionBase>> miner)
        {
            var storagePath = Paths.StorePath;

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .CreateLogger();

            Init(storagePath, renderers, miner);

            StartCoroutines();
        }

        private void Init(
            string storagePath,
            IEnumerable<IRenderer<PolymorphicAction<ActionBase>>> renderers,
            BaseMiner<PolymorphicAction<ActionBase>> miner)
        {
            PrivateKey = GetPrivateKey();
            Address = PrivateKey.PublicKey.ToAddress();

            SwarmConfig swarmConfig = GetSwarmConfig();
            Block<PolymorphicAction<ActionBase>> genesis = GetGenesisBlock();
            (IStore store, IStateStore stateStore) = NodeUtils<PolymorphicAction<ActionBase>>.LoadStore(storagePath);
            _nodeConfig = new NodeConfig<PolymorphicAction<ActionBase>>(
                PrivateKey,
                new NetworkConfig<PolymorphicAction<ActionBase>>(
                    NodeUtils<PolymorphicAction<ActionBase>>.DefaultBlockPolicy,
                    NodeUtils<PolymorphicAction<ActionBase>>.DefaultStagePolicy,
                    genesis),
                swarmConfig,
                store,
                stateStore,
                renderers);
            _nodeConfig.SwarmConfig.InitConfig.Host = "localhost";
            _swarm = _nodeConfig.GetSwarm();
            _blockChain = _swarm.BlockChain;

            // NOTE: Agent private key doesn't necessarily have to match swarm private key.
            _swarmRunner = new SwarmRunner(_swarm, PrivateKey);
            if (miner is null)
            {
                _miner = new SoloMiner<PolymorphicAction<ActionBase>>(
                    _blockChain,
                    PrivateKey,
                    new DefaultMineHandler(_blockChain, PrivateKey));
            } else
            {
                _miner = miner;
            }
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

        private static bool WantsToQuit()
        {
            return true;
        }

        [RuntimeInitializeOnLoadMethod]
        private static void RunOnStart()
        {
            Application.wantsToQuit += WantsToQuit;
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
