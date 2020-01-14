using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct RawBlock
    {
        public static readonly byte[] HeaderKey = { 0x48 }; // 'H'

        public static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

        public RawBlock(
            BlockHeader header,
            ImmutableArray<ImmutableArray<byte>> transactions)
        {
            Header = header;
            Transactions = transactions;
        }

        public RawBlock(Bencodex.Types.Dictionary dict)
        {
            Header = new BlockHeader(dict.GetValue<Bencodex.Types.Dictionary>(HeaderKey));
            Transactions = dict.ContainsKey((Binary)TransactionsKey)
                ? dict.GetValue<Bencodex.Types.List>(TransactionsKey)
                    .Select(tx => ((Binary)tx).ToImmutableArray()).ToImmutableArray()
                : ImmutableArray<ImmutableArray<byte>>.Empty;
        }

        public BlockHeader Header { get; }

        public ImmutableArray<ImmutableArray<byte>> Transactions { get; }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(HeaderKey, Header.ToBencodex());

            if (Transactions.Any())
            {
                var transactions = new Bencodex.Types.List(
                        Transactions.Select(tx => (IValue)(Binary)tx.ToArray()));
                dict = dict.Add(TransactionsKey, (IValue)transactions);
            }

            return dict;
        }
    }
}
