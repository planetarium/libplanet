#nullable enable

using System;

namespace Libplanet.Misc.Either
{
    internal interface IEither<TLeft, TRight>
    {
        TLeft GetLeftOrElse(Func<TRight, TLeft> f);

        TRight GetRightOrElse(Func<TLeft, TRight> f);
    }
}
