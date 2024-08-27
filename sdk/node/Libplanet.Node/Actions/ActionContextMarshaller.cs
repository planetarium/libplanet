using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Node.Actions;

public static class ActionContextMarshaller
{
    private static readonly Codec Codec = new Codec();

    public static byte[] Serialize(this ICommittedActionContext actionContext)
    {
        return Codec.Encode(Marshal(actionContext));
    }

    public static Dictionary Marshal(this ICommittedActionContext actionContext)
    {
        var dictionary = Bencodex.Types.Dictionary.Empty
            .Add("signer", actionContext.Signer.ToHex())
            .Add("miner", actionContext.Miner.ToHex())
            .Add("block_index", actionContext.BlockIndex)
            .Add("block_protocol_version", actionContext.BlockProtocolVersion)
            .Add("previous_states", actionContext.PreviousState.ByteArray)
            .Add("random_seed", actionContext.RandomSeed)
            .Add("block_action", actionContext.IsPolicyAction);

        if (actionContext.TxId is { } txId)
        {
            dictionary = dictionary.Add("tx_id", txId.ByteArray);
        }

        return dictionary;
    }

    public static ICommittedActionContext Unmarshal(Dictionary dictionary)
    {
        return new CommittedActionContext(
            signer: new Address(((Text)dictionary["signer"]).Value),
            txId: GetTxId(dictionary, "tx_id"),
            miner: new Address(((Text)dictionary["miner"]).Value),
            blockIndex: (Integer)dictionary["block_index"],
            blockProtocolVersion: (Integer)dictionary["block_protocol_version"],
            previousState: new HashDigest<SHA256>(dictionary["previous_states"]),
            randomSeed: (Integer)dictionary["random_seed"],
            isPolicyAction: (Boolean)dictionary["block_action"]
        );

        static TxId? GetTxId(Dictionary dictionary, string key)
        {
            if (dictionary.TryGetValue((Text)key, out IValue txIdValue)
                && txIdValue is Binary txIdBinaryValue)
            {
                return new TxId(txIdBinaryValue.ByteArray);
            }
            else
            {
                return null;
            }
        }
    }

    public static ICommittedActionContext Deserialize(byte[] serialized)
    {
        var decoded = Codec.Decode(serialized);
        if (decoded is not Dictionary dictionary)
        {
            throw new ArgumentException(
                message: $"Expected 'Dictionary' but {decoded.GetType().Name}",
                paramName: nameof(serialized));
        }

        return Unmarshal(dictionary);
    }
}
