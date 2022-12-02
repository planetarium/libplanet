using System;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;
using Libplanet.Tx;

namespace Libplanet.Explorer.Mutations
{
    public class TransactionMutation<T> : ObjectGraphType
        where T : IAction, new()
    {
        private readonly IBlockChainContext<T> _context;

        public TransactionMutation(IBlockChainContext<T> context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));

            Field<TransactionType<T>>(
                "stage",
                description: "Stage transaction to current chain",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "payload",
                        #pragma warning disable MEN002
                        Description = "The hexadecimal string of the serialized transaction to stage.",
                        #pragma warning restore MEN002
                    }
                ),
                resolve: context =>
                {
                    BlockChain<T> chain = _context.BlockChain;
                    byte[] payload = ByteUtil.ParseHex(context.GetArgument<string>("payload"));
                    Transaction<T> tx = Transaction<T>.Deserialize(payload);
                    if (!chain.StageTransaction(tx))
                    {
                        throw new ExecutionError(
                            "Failed to stage given tx; it may be already expired or ignored."
                        );
                    }

                    return tx;
                }
            );
        }
    }
}
