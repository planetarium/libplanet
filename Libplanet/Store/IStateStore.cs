using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    /// <summary>
    /// An interface to store states.
    /// </summary>
    public interface IStateStore
    {
        /// <summary>
        /// Sets states mapped as relation <see cref="Block{T}.Hash"/> → states.
        /// It guarantees <see cref="GetState"/> will return the same state if you passed same
        /// <paramref name="block"/> unless it has overwritten.
        /// </summary>
        /// <param name="block">The <see cref="Block{T}"/> to set states.</param>
        /// <param name="states">The dictionary of state keys to states.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type. It should match to
        /// <paramref name="block"/>'s type parameter.</typeparam>
        void SetStates<T>(
            Block<T> block,
            IImmutableDictionary<string, IValue> states)
            where T : IAction, new();

        /// <summary>
        /// Gets state queried by <paramref name="stateKey"/> in the point,
        /// <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="stateKey">The key to query state.</param>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> which the point to query by
        /// <paramref name="stateKey"/> at.</param>
        /// <param name="chainId">The <see cref="BlockChain{T}.Id"/> of wanted got.</param>
        /// <returns>The state queried from <paramref name="blockHash"/> and
        /// <paramref name="stateKey"/>. If it couldn't find state, returns <c>null</c>.</returns>
        IValue GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null);

        /// <summary>
        /// Checks if the states corresponded to the block derived from <paramref name="blockHash"/>
        /// exist.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of <see cref="Block{T}"/>.
        /// </param>
        /// <returns>Whether it contains the block states corresponded to
        /// <paramref name="blockHash"/>.
        /// </returns>
        bool ContainsBlockStates(HashDigest<SHA256> blockHash);

        /// <summary>
        /// Copies metadata related to states from <paramref name="sourceChainId"/> to
        /// <paramref name="destinationChainId"/>, with <paramref name="branchpoint"/>.
        /// </summary>
        /// <param name="sourceChainId">The <see cref="BlockChain{T}.Id"/> of the chain which
        /// copies from.</param>
        /// <param name="destinationChainId">The <see cref="BlockChain{T}.Id"/> of the chain which
        /// copies to.</param>
        /// <param name="branchpoint">The branchpoint to begin coping.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
        /// <paramref name="branchpoint"/>'s type parameter.</typeparam>
        void ForkStates<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchpoint)
            where T : IAction, new();
    }
}
