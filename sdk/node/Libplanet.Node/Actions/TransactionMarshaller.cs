using Bencodex;
using Bencodex.Types;
using Libplanet.Types.Tx;

namespace Libplanet.Node.Actions;

public static class TransactionMarshaller
{
    private static readonly Codec Codec = new();

    // Copied from Libplanet/Tx/TxMarshaler.cs
    private static readonly Binary SignatureKey = new("S"u8.ToArray()); // 'S'

    public static Dictionary Marshal(this ITransaction transaction)
    {
        return transaction.MarshalUnsignedTx().Add(SignatureKey, transaction.Signature);
    }

    public static byte[] Serialize(this ITransaction transaction)
    {
        return Codec.Encode(Marshal(transaction));
    }
}
