#nullable disable
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Node;
using Libplanet.Tx;
using NetMQ;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// Temp.
    /// </summary>
    public abstract class Agent : MonoSingleton<Agent>
    {
        private readonly ConcurrentQueue<System.Action> _actions =
            new ConcurrentQueue<System.Action>();

        private PrivateKey _privateKey;

        private NodeConfig<PolymorphicAction<IAction>> _nodeConfig;

        private Swarm<PolymorphicAction<IAction>> _swarm;

        private BlockChain<PolymorphicAction<IAction>> _blockChain;

        private CancellationTokenSource _cancellationTokenSource;

        /// <summary>
        /// Temp.
        /// </summary>
        /// <param name="renderers">T1.</param>
        /// <param name="privateKey">T2.</param>
        /// <param name="nodeConfig">T3.</param>
        public static void Initialize(
            IEnumerable<IRenderer<PolymorphicAction<IAction>>> renderers,
            PrivateKey privateKey,
            NodeConfig<PolymorphicAction<IAction>> nodeConfig)
        {
            Instance.InitAgent(
                renderers,
                privateKey,
                nodeConfig);
        }

        /// <summary>
        /// Temp.
        /// </summary>
        /// <param name="address">T.</param>
        /// <returns>T2.</returns>
        public IValue GetState(Address address)
        {
            return _blockChain.GetState(address);
        }

        /// <summary>
        /// Temp.
        /// </summary>
        /// <param name="gameActions">T.</param>
        public void MakeTransaction(IEnumerable<IAction> gameActions)
        {
            var actions = gameActions.Select(
                gameAction => (PolymorphicAction<IAction>)gameAction).ToList();
            Task.Run(() => MakeTransaction(actions, true));
        }

        /// <summary>
        /// Temp.
        /// </summary>
        /// <param name="action">T.</param>
        public void RunOnMainThread(System.Action action)
        {
            _actions.Enqueue(action);
        }

        /// <summary>
        /// Temp.
        /// </summary>
        protected override void OnDestroy()
        {
            NetMQConfig.Cleanup(false);

            base.OnDestroy();
            _swarm.Dispose();
        }

        /// <summary>
        /// Temp.
        /// </summary>
        /// <param name="renderers">T1.</param>
        /// <param name="privateKey">T2.</param>
        /// <param name="nodeConfig">T3.</param>
        private void InitAgent(
            IEnumerable<IRenderer<PolymorphicAction<IAction>>> renderers,
            PrivateKey privateKey,
            NodeConfig<PolymorphicAction<IAction>> nodeConfig)
        {
            _privateKey = privateKey;
            _nodeConfig = nodeConfig;
            _swarm = nodeConfig.GetSwarm();
            _blockChain = _swarm.BlockChain;

            _cancellationTokenSource = new CancellationTokenSource();
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

        [RuntimeInitializeOnLoadMethod]
        private void RunOnStart()
        {
            Application.wantsToQuit += () => true;
        }

        private Transaction<PolymorphicAction<IAction>> MakeTransaction(
                    IEnumerable<PolymorphicAction<IAction>> actions, bool broadcast)
        {
            var polymorphicActions = actions.ToArray();
            Debug.LogFormat(
                "Make Transaction with Actions: `{0}`",
                string.Join(",", polymorphicActions.Select(i => i.InnerAction)));
            return _blockChain.MakeTransaction(_privateKey, polymorphicActions);
        }
    }
}
