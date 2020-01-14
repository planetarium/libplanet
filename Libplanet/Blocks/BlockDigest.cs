using System.Collections.Generic;
using System.Linq;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Class that store uses to save blocks. This contains:
    /// <see cref="BlockHeader"/>, and list of <see cref="Libplanet.Tx.TxId"/>s.
    /// </summary>
    internal struct BlockDigest
    {
        public BlockDigest(BlockHeader header, IEnumerable<byte[]> txIds)
        {
            Header = header;
            TxIds = txIds;
        }

        public BlockDigest(Bencodex.Types.Dictionary dict)
        {
            Header = new BlockHeader(dict.GetValue<Bencodex.Types.Dictionary>("header"));
            TxIds = dict.GetValue<Bencodex.Types.List>("transaction_ids")
                .Select(txId => (byte[])(Binary)txId);
        }

        public BlockHeader Header { get; }

        public IEnumerable<byte[]> TxIds { get; }

        public static BlockDigest Deserialize(byte[] bytes)
        {
            var value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return new BlockDigest(dict);
        }

        public byte[] Serialize()
        {
            return new Codec().Encode(ToBencodex());
        }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("header", Header.ToBencodex())
                .Add("transaction_ids", TxIds.Select(txId => (IValue)(Binary)txId));

            return dict;
        }
    }
}
