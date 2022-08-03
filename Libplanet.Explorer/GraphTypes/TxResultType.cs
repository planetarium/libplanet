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

            Field<StringGraphType>(
                nameof(TxResult.ExceptionName),
                description: "The name of exception. (when only failed)",
                resolve: context => context.Source.ExceptionName
            );

            Field<BencodexValueType>(
                nameof(TxResult.ExceptionMetadata),
                description: "The hexadecimal string of the exception metadata. (when only failed)",
                resolve: context => context.Source.ExceptionMetadata
            );
        }
    }
}
