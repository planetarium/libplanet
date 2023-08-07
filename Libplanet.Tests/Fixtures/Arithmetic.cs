using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.Tests.Fixtures
{
    /// <summary>
    /// A simple arithmetic action.  This assumes that every address has an integer state or
    /// a <see langword="null"/> state (not <see cref="Bencodex.Types.Null"/>,
    /// but <see langword="null"/> reference).
    /// </summary>
    public sealed class Arithmetic : IAction, IEquatable<Arithmetic>
    {
        public Arithmetic()
        {
            Error = "An uninitialized action.";
        }

        public Arithmetic(OperatorType @operator, BigInteger operand)
        {
            Error = null;
            Operator = @operator;
            Operand = operand;
        }

        public string Error { get; private set; }

        public OperatorType Operator { get; private set; }

        public BigInteger Operand { get; private set; }

        public IValue PlainValue => (Error is null)
            ? (IValue)Bencodex.Types.Dictionary.Empty
                .Add(
                    "op",
                    Operator is OperatorType op ? new Text(op.ToString()) : (IValue)Null.Value
                )
                .Add("operand", Operand)
            : (Text)Error;

        public static Arithmetic Add(BigInteger operand) =>
            new Arithmetic(OperatorType.Add, operand);

        public static Arithmetic Sub(BigInteger operand) =>
            new Arithmetic(OperatorType.Sub, operand);

        public static Arithmetic Mul(BigInteger operand) =>
            new Arithmetic(OperatorType.Mul, operand);

        public static Arithmetic Div(BigInteger operand) =>
            new Arithmetic(OperatorType.Div, operand);

        public static Arithmetic Mod(BigInteger operand) =>
            new Arithmetic(OperatorType.Mod, operand);

        public void LoadPlainValue(IValue plainValue)
        {
            if (plainValue is Text t)
            {
                Error = t;
                return;
            }

            if (!(plainValue is Dictionary d))
            {
                Error =
                    "The action serialization is invalid; " +
                    "the serialization should be a dictionary.";
                return;
            }

            if (!d.TryGetValue((Text)"op", out IValue opValue))
            {
                Error = "The serialized dictionary lacks the key \"op\".";
                return;
            }

            if (!(opValue is Text opText))
            {
                Error = "The serialized \"op\" field is not a text.";
                return;
            }

            string opStr = opText.Value;
            if (!OperatorType.TryParse(opStr, true, out OperatorType op))
            {
                Error = $"The serialized operator \"{opStr}\" is invalid.";
                return;
            }

            if (!d.TryGetValue((Text)"operand", out IValue operandValue))
            {
                Error = "The serialized dictionary lacks the key \"operand\".";
                return;
            }

            if (!(operandValue is Bencodex.Types.Integer operandInt))
            {
                Error = "The serialized \"operand\" field is not an integer.";
                return;
            }

            Operator = op;
            Operand = operandInt.Value;
            Error = null;
        }

        public IWorld Execute(IActionContext context)
        {
            if (Error != null)
            {
                throw new InvalidOperationException(Error);
            }

            IValue v = context.PreviousState.GetAccount(ReservedAddresses.LegacyAccount)
                .GetState(context.Signer) ?? (Bencodex.Types.Integer)0;
            if (!(v is Bencodex.Types.Integer value))
            {
                throw new InvalidOperationException(
                    $"The state of the address {context.Signer} is not an integer."
                );
            }

            Func<BigInteger, BigInteger, BigInteger> func = Operator.ToFunc();
            BigInteger result = func(value, Operand);
            return context.PreviousState.SetAccount(
                context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).SetState(
                    context.Signer, (Bencodex.Types.Integer)result));
        }

        public bool Equals(Arithmetic other)
        {
            if (ReferenceEquals(null, other))
            {
                return false;
            }
            else if (ReferenceEquals(this, other))
            {
                return true;
            }
            else
            {
                return Error == other.Error &&
                   Operator == other.Operator &&
                   Operand.Equals(other.Operand);
            }
        }

        public override bool Equals(object obj) =>
            ReferenceEquals(this, obj) || (obj is Arithmetic other && Equals(other));

        public override int GetHashCode() =>
            (Error, (int)Operator, Operand).GetHashCode();
    }
}
