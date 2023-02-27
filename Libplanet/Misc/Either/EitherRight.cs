#nullable enable

using System;

namespace Libplanet.Misc.Either
{
    internal class EitherRight<TLeft, TRight> : IEither<TLeft, TRight>
    {
        private readonly TRight _value;

        internal EitherRight(TRight value)
        {
            _value = value;
        }

        public TLeft GetLeftOrElse(Func<TRight, TLeft> f) => f(_value);

        public TRight GetRightOrElse(Func<TLeft, TRight> f) => _value;
    }
}
