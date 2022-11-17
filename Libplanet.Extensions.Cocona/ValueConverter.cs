using System;
using Cocona.Command.Binder;
using Libplanet.Blocks;

namespace Libplanet.Extensions.Cocona
{
    public class ValueConverter : ICoconaValueConverter
    {
        private readonly CoconaValueConverter _baseConverter = new CoconaValueConverter();

        public object? ConvertTo(Type t, string? value)
        {
            if (t == typeof(BlockHash) || t == typeof(BlockHash?))
            {
                return value is { } v ? BlockHash.FromString(v) : null;
            }

            return _baseConverter.ConvertTo(t, value);
        }
    }
}
