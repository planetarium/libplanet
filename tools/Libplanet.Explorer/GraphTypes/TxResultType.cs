using System.Security.Cryptography;
using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResultType : ObjectGraphType<TxResult>
    {
        public TxResultType()
        {
            Field<NonNullGraphType<TxStatusType>>(
                nameof(TxResult.TxStatus),
                description: "The transaction status.",
                resolve: context => context.Source.TxStatus
            );

            Field<LongGraphType>(
                nameof(TxResult.BlockIndex),
                description: "The block index which the target transaction executed.",
                resolve: context => context.Source.BlockIndex
            );

            Field<StringGraphType>(
                nameof(TxResult.BlockHash),
                description: "The block hash which the target transaction executed.",
                resolve: context => context.Source.BlockHash
            );

            Field<HashDigestSHA256Type>(
                nameof(TxResult.InputState),
                description: "The input state's root hash " +
                "which the target transaction executed.",
                resolve: context => context.Source.InputState
            );

            Field<HashDigestSHA256Type>(
                nameof(TxResult.OutputState),
                description: "The output state's root hash " +
                "which the target transaction executed.",
                resolve: context => context.Source.OutputState
            );

            Field<ListGraphType<StringGraphType>>(
                nameof(TxResult.ExceptionNames),
                description: "The name of exception. (when only failed)",
                resolve: context => context.Source.ExceptionNames
            );
        }
    }
}
