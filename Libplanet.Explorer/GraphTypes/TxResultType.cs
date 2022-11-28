using System.Collections.Generic;
using System.Linq;
using GraphQL.Types;
using Libplanet.Assets;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResultType : ObjectGraphType<TxResult>
    {
        public TxResultType()
        {
            Field<NonNullGraphType<TxStatusType>>(nameof(TxResult.TxStatus))
                .Description("The transaction status.")
                .Resolve(context => context.Source.TxStatus);

            Field<LongGraphType>(nameof(TxResult.BlockIndex))
                .Description("The block index which the target transaction executed.")
                .Resolve(context => context.Source.BlockIndex);

            Field<StringGraphType>(nameof(TxResult.BlockHash))
                .Description("The block hash which the target transaction executed.")
                .Resolve(context => context.Source.BlockHash);

            Field<StringGraphType>(nameof(TxResult.ExceptionName))
                .Description("The name of exception. (when only failed)")
                .Resolve(context => context.Source.ExceptionName);

            Field<BencodexValueType>(nameof(TxResult.ExceptionMetadata))
                .Description(
                    "The hexadecimal string of the exception metadata. (when only failed)")
                .Resolve(context => context.Source.ExceptionMetadata);

            Field<ListGraphType<NonNullGraphType<UpdatedStateType>>>(
                nameof(TxResult.UpdatedStates))
                .Resolve(context =>
                    context.Source.UpdatedStates?.Select(pair =>
                        new UpdatedState(pair.Key, pair.Value)
                    )
                );

            Field<ListGraphType<NonNullGraphType<FungibleAssetBalancesType>>>(
                nameof(TxResult.UpdatedFungibleAssets))
                .Resolve(context =>
                    context.Source.UpdatedFungibleAssets?.Select(pair =>
                        new FungibleAssetBalances(pair.Key, pair.Value.Values)
                    ));

            Field<ListGraphType<NonNullGraphType<FungibleAssetBalancesType>>>(
                nameof(TxResult.FungibleAssetsDelta))
                .Resolve(context =>
                    context.Source.FungibleAssetsDelta?.Select(pair =>
                        new FungibleAssetBalances(pair.Key, pair.Value.Values)
                    ));
        }

        public record UpdatedState(Address Address, Bencodex.Types.IValue? State);

        public class UpdatedStateType : ObjectGraphType<UpdatedState>
        {
            public UpdatedStateType()
            {
                Field<NonNullGraphType<AddressType>>(nameof(UpdatedState.Address))
                    .Resolve(context => context.Source.Address);
                Field<BencodexValueType>(nameof(UpdatedState.State))
                    .Resolve(context => context.Source.State);
            }
        }

        public record FungibleAssetBalances(
            Address Address, IEnumerable<FungibleAssetValue> FungibleAssetValues);

        public class FungibleAssetBalancesType : ObjectGraphType<FungibleAssetBalances>
        {
            public FungibleAssetBalancesType()
            {
                Field<NonNullGraphType<AddressType>>(nameof(FungibleAssetBalances.Address))
                    .Resolve(context => context.Source.Address);
                Field<NonNullGraphType<ListGraphType<NonNullGraphType<FungibleAssetValueType>>>>(
                    nameof(FungibleAssetBalances.FungibleAssetValues))
                    .Resolve(context => context.Source.FungibleAssetValues);
            }
        }
    }
}
