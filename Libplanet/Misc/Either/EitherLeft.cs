#nullable enable

using System;

namespace Libplanet.Misc.Either
{
    internal class EitherLeft<TLeft, TRight> : IEither<TLeft, TRight>
    {
        private readonly TLeft _value;

        internal EitherLeft(TLeft value)
        {
            _value = value;
        }

        public TLeft GetLeftOrElse(Func<TRight, TLeft> f) => _value;

        public TRight GetRightOrElse(Func<TLeft, TRight> f) => f(_value);
    }
}
