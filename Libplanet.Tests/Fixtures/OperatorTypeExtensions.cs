using System;
using System.Numerics;

namespace Libplanet.Tests.Fixtures
{
    public static class OperatorTypeExtensions
    {
        public static Func<BigInteger, BigInteger, BigInteger> ToFunc(this OperatorType @operator)
        {
            switch (@operator)
            {
                case OperatorType.Add:
                    return BigInteger.Add;
                case OperatorType.Sub:
                    return BigInteger.Subtract;
                case OperatorType.Mul:
                    return BigInteger.Multiply;
                case OperatorType.Div:
                    return BigInteger.Divide;
                case OperatorType.Mod:
                    return BigInteger.Remainder;
            }

            throw new ArgumentException("Unsupported operator: " + @operator, nameof(@operator));
        }
    }
}
