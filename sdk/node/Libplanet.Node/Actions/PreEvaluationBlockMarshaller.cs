using Bencodex;
using Bencodex.Types;
using Libplanet.Types.Blocks;

namespace Libplanet.Node.Actions;

public static class PreEvaluationBlockMarshaller
{
    private static readonly Codec Codec = new Codec();

    // Copied form Libplanet/Blocks/BlockMarshaler.cs
    // Block fields:
    private static readonly byte[] HeaderKey = { 0x48 }; // 'H'
    private static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

    public static Dictionary Marshal(this IPreEvaluationBlock block)
    {
        return Dictionary.Empty
            .Add(HeaderKey, BlockMarshaler.MarshalPreEvaluationBlockHeader(block))
            .Add(TransactionsKey, new List(block.Transactions.Select(TransactionMarshaller.Serialize)));
    }

    public static IPreEvaluationBlock Unmarshal(Dictionary dictionary)
    {
        return new PreEvaluationBlock(
            BlockMarshaler.UnmarshalPreEvaluationBlockHeader((Dictionary)dictionary[HeaderKey]),
            BlockMarshaler.UnmarshalBlockTransactions(dictionary),
            BlockMarshaler.UnmarshalBlockEvidence(dictionary));
    }

    public static byte[] Serialize(this IPreEvaluationBlock block)
    {
        return Codec.Encode(Marshal(block));
    }

    public static IPreEvaluationBlock Deserialize(byte[] serialized)
    {
        return Unmarshal((Dictionary)Codec.Decode(serialized));
    }
}
