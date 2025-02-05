using GraphQL.Types;
using Libplanet.Types.Evidence;

namespace Libplanet.Explorer.GraphTypes
{
    public class EvidenceType : ObjectGraphType<EvidenceBase>
    {
        public EvidenceType()
        {
            Name = "Evidence";

            Field<NonNullGraphType<IdGraphType>>(
                name: "Id",
                description: "A unique identifier derived from this Evidence content",
                resolve: ctx => ctx.Source.Id.ToString()
            );
            Field<NonNullGraphType<StringGraphType>>(
                name: "Type",
                description: "Evidence type.",
                resolve: x => x.Source.GetType().FullName
            );
            Field<NonNullGraphType<LongGraphType>>(
                name: "Height",
                description: "Indicates the block height that infraction has been occurred.",
                resolve: x => x.Source.Height
            );
            Field<NonNullGraphType<AddressType>>(
                name: "TargetAddress",
                description: "Indicates the address of the target that caused the infraction.",
                resolve: x => x.Source.TargetAddress
            );
            Field<NonNullGraphType<DateTimeOffsetGraphType>>(
                name: "Timestamp",
                description: "Indicates the timestamp the infraction occurred.",
                resolve: x => x.Source.Timestamp
            );
            Field<NonNullGraphType<IValueType>>(
                name: "Bencoded",
                description: "The bencoded form of evidence.",
                resolve: x => x.Source.Bencoded
            );
        }
    }
}
