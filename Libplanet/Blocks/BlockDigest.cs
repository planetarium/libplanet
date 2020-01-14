using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Class that store uses to save blocks. This contains:
    /// <see cref="BlockHeader"/>, and list of <see cref="Libplanet.Tx.TxId"/>s.
    /// </summary>
    internal readonly struct BlockDigest
    {
        public BlockDigest(BlockHeader header, ImmutableArray<ImmutableArray<byte>> txIds)
        {
            Header = header;
            TxIds = txIds;
        }

        public BlockDigest(Bencodex.Types.Dictionary dict)
        {
            Header = new BlockHeader(dict.GetValue<Bencodex.Types.Dictionary>("header"));
            TxIds = dict.ContainsKey((Text)"transaction_ids")
                ? dict.GetValue<Bencodex.Types.List>("transaction_ids")
                    .Select(txId => ((Binary)txId).ToImmutableArray()).ToImmutableArray()
                : ImmutableArray<ImmutableArray<byte>>.Empty;
        }

        public BlockHeader Header { get; }

        public ImmutableArray<ImmutableArray<byte>> TxIds { get; }

        public static BlockDigest Deserialize(byte[] bytes)
        {
            IValue value = new Codec().Decode(bytes);
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
                .Add("header", Header.ToBencodex());

            if (TxIds.Any())
            {
                dict = dict.Add(
                    "transaction_ids",
                    TxIds.Select(txId => (IValue)(Binary)txId.ToArray()));
            }

            return dict;
        }
    }
}
