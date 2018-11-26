using System;
using System.Linq;
using System.Reflection;

namespace Libplanet.Action
{
    public class ActionTypeAttribute : Attribute
    {
        private readonly string _value;

        public ActionTypeAttribute(string value)
        {
            _value = value;
        }

        public static string ValueOf(Type t)
        {
            return t
                .GetCustomAttributes()
                .OfType<ActionTypeAttribute>()
                .Select(attr => attr._value)
                .FirstOrDefault();
        }
    }
}
