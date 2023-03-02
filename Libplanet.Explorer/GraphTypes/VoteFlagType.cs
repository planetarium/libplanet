#nullable disable
using System;
using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Consensus;

namespace Libplanet.Explorer.GraphTypes
{
    public class VoteFlagType : StringGraphType
    {
        public VoteFlagType()
        {
            Name = "VoteFlag";
        }

        public override object Serialize(object value)
        {
            if (value is VoteFlag flag)
            {
                switch (flag)
                {
                    case VoteFlag.Null:
                        return "Null";
                    case VoteFlag.PreVote:
                        return "PreVote";
                    case VoteFlag.PreCommit:
                        return "PreCommit";
                    case VoteFlag.Unknown:
                        return "Unknown";
                }
            }

            throw new ArgumentException($"Expected a voteflag, but {value}", nameof(value));
        }

        public override object ParseValue(object value)
        {
            if (value is string flag)
            {
                switch (flag)
                {
                    case "Null":
                        return VoteFlag.Null;
                    case "PreVote":
                        return VoteFlag.PreVote;
                    case "PreCommit":
                        return VoteFlag.PreCommit;
                    case "Unknown":
                        return VoteFlag.Unknown;
                }
            }
            else if (value is null)
            {
                return null;
            }

            throw new ArgumentException(
                $"Expected a voteflag string but {value}", nameof(value));
        }

        public override object ParseLiteral(IValue value)
        {
            if (value is StringValue)
            {
                return ParseValue(value.Value);
            }

            return null;
        }
    }
}
