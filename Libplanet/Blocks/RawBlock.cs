using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct RawBlock
    {
        public const string HeaderKey = "header";

        public const string TransactionsKey = "transactions";

        public RawBlock(
            BlockHeader header,
            IEnumerable<byte[]> transactions)
        {
            Header = header;
            Transactions = transactions;
        }

        public RawBlock(Bencodex.Types.Dictionary dict)
        {
            Header = new BlockHeader(dict.GetValue<Bencodex.Types.Dictionary>(HeaderKey));
            Transactions = dict.GetValue<Bencodex.Types.List>(TransactionsKey)
                .Select(tx => (byte[])(Binary)tx);
        }

        public BlockHeader Header { get; }

        public IEnumerable<byte[]> Transactions { get; }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var transactions = new Bencodex.Types.List(
                Transactions.Select(tx => (IValue)(Binary)tx));
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(HeaderKey, Header.ToBencodex())
                .Add(TransactionsKey, (IValue)transactions);

            return dict;
        }
    }
}
