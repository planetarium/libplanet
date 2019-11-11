using System.Runtime.Serialization;

namespace Libplanet.Serialization
{
    public static class SerializationInfoExtension
    {
        public static T GetValue<T>(this SerializationInfo info, string name)
        {
            return (T)info.GetValue(name, typeof(T));
        }

        public static T GetValueOrDefault<T>(
            this SerializationInfo serializationInfo,
            string name,
            T defaultValue)
        {
            try
            {
                return serializationInfo.GetValue<T>(name);
            }
            catch (SerializationException)
            {
                return defaultValue;
            }
        }
    }
}
