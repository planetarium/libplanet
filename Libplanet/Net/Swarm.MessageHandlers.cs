using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private void TransferBlockStates(GetBlockStates getBlockStates)
        {
            IImmutableDictionary<string, IValue> states =
                BlockChain.Store.GetBlockStates(getBlockStates.BlockHash);
            _logger.Debug(
                (states is null ? "Not found" : "Found") + " the block {BlockHash}'s states.",
                getBlockStates.BlockHash
            );
            var reply = new BlockStates(getBlockStates.BlockHash, states)
            {
                Identity = getBlockStates.Identity,
            };
            Transport.ReplyMessage(reply);
        }
    }
}
