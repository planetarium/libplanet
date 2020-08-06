using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public interface IStateStore
    {
        void SetStates(HashDigest<SHA256> blockHash, IImmutableDictionary<string, IValue> states);

        IValue GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null);

        /// <summary>
        /// Check the states corresponded to the block derived from <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of <see cref="Block{T}"/>.
        /// </param>
        /// <returns>Whether to exist the states corresponded to <paramref name="blockHash"/>.
        /// </returns>
        bool BlockStateExists(HashDigest<SHA256> blockHash);

        void ForkStates<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new();
    }
}
