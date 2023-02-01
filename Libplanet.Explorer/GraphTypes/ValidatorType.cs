using GraphQL.Types;
using Libplanet.Consensus;

namespace Libplanet.Explorer.GraphTypes;

public class ValidatorType : ObjectGraphType<Validator>
{
    public ValidatorType()
    {
        Name = "Validator";
        Description = "A data type holds validator's public key and its voting power.";
        Field<NonNullGraphType<PublicKeyType>>(
            "publicKey",
            "The public key of the validator.",
            resolve: ctx => ctx.Source.PublicKey
        );
        Field<NonNullGraphType<BigIntGraphType>>(
            "power",
            "Gets the voting power of the validator.",
            resolve: ctx => ctx.Source.Power
        );
    }
}
