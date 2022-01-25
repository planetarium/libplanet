#nullable disable
using System.Runtime.Serialization;

namespace Libplanet.Serialization
{
    public static class SerializationInfoExtensions
    {
        public static T GetValue<T>(this SerializationInfo info, string name)
        {
            return (T)info.GetValue(name, typeof(T));
        }

        public static bool TryGetValue<T>(
            this SerializationInfo serializationInfo,
            string name,
            out T value)
        {
            try
            {
                value = serializationInfo.GetValue<T>(name);
                return true;
            }
            catch (SerializationException)
            {
                value = default;
                return false;
            }
        }
    }
}
