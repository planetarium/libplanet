#nullable disable
using System;
using System.Security.Cryptography;
using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Common;

namespace Libplanet.Explorer.GraphTypes
{
    public class HashDigestSHA256Type : StringGraphType
    {
        public HashDigestSHA256Type()
        {
            Name = "HashDigest_SHA256";
        }

        public override object Serialize(object value)
        {
            if (value is HashDigest<SHA256> hash)
            {
                return hash.ToString();
            }

            return value;
        }

        public override object ParseValue(object value) =>
            value switch
            {
                null => null,
                string hex => HashDigest<SHA256>.Parse(hex),
                _ => throw new ArgumentException(
                    $"Expected a hexadecimal string but {value}", nameof(value)),
            };

        public override object ParseLiteral(IValue value) =>
            value switch
            {
                StringValue str => ParseValue(str.Value),
                _ => throw new ArgumentException(
                    $"Expected a hexadecimal string but {value}", nameof(value)),
            };
    }
}
