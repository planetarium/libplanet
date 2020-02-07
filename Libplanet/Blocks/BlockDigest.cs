using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Class that store uses to save blocks. This contains:
    /// <see cref="BlockHeader"/>, and list of <see cref="Libplanet.Tx.TxId"/>s.
    /// </summary>
    public readonly struct BlockDigest
    {
        private static readonly byte[] HeaderKey = { 0x48 }; // 'H'

        private static readonly byte[] TransactionIdsKey = { 0x54 }; // 'T'

        /// <summary>
        /// Creates <see cref="BlockDigest"/> instance from <see cref="BlockHeader"/> and
        /// <see cref="Transaction{T}"/> ids the <see cref="Block{T}"/> has.
        /// </summary>
        /// <param name="header"><see cref="BlockHeader"/> of the <see cref="Block{T}"/>.</param>
        /// <param name="txIds"><see cref="Transaction{T}"/> ids the <see cref="Block{T}"/> has.
        /// </param>
        public BlockDigest(BlockHeader header, ImmutableArray<ImmutableArray<byte>> txIds)
        {
            Header = header;
            TxIds = txIds;
        }

        /// <summary>
        /// Creates <see cref="BlockDigest"/> instance from
        /// <see cref="Bencodex.Types.Dictionary"/> representation of the <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="dict">
        /// <see cref="Bencodex.Types.Dictionary"/> representation of the <see cref="Block{T}"/>.
        /// </param>
        public BlockDigest(Bencodex.Types.Dictionary dict)
        {
            Header = new BlockHeader(dict.GetValue<Bencodex.Types.Dictionary>(HeaderKey));
            TxIds = dict.ContainsKey((Binary)TransactionIdsKey)
                ? dict.GetValue<Bencodex.Types.List>(TransactionIdsKey)
                    .Select(txId => ((Binary)txId).ToImmutableArray()).ToImmutableArray()
                : ImmutableArray<ImmutableArray<byte>>.Empty;
        }

        public BlockHeader Header { get; }

        public ImmutableArray<ImmutableArray<byte>> TxIds { get; }

        /// <summary>
        /// Gets <see cref="BlockDigest"/> instance from serialized <paramref name="bytes"/>.
        /// </summary>
        /// <param name="bytes">Serialized <see cref="BlockDigest"/>.</param>
        /// <returns>Deserialized <see cref="BlockDigest"/>.</returns>
        /// <exception cref="DecodingException">Thrown when decoded value is not
        /// <see cref="Bencodex.Types.Dictionary"/> type.</exception>
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

        /// <summary>
        /// Gets serialized byte array of the <see cref="BlockDigest"/>.
        /// </summary>
        /// <returns>Serialized byte array of <see cref="BlockDigest"/>.</returns>
        public byte[] Serialize()
        {
            return new Codec().Encode(ToBencodex());
        }

        /// <summary>
        /// Gets <see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockDigest"/>.
        /// </summary>
        /// <returns><see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockDigest"/>.</returns>
        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(HeaderKey, Header.ToBencodex());

            if (TxIds.Any())
            {
                dict = dict.Add(
                    TransactionIdsKey,
                    TxIds.Select(txId => (IValue)(Binary)txId.ToArray()));
            }

            return dict;
        }
    }
}
