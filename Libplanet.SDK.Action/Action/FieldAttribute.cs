namespace Libplanet.SDK.Action;

[AttributeUsage(AttributeTargets.Field)]
public class FieldAttribute : Attribute
{
    public FieldAttribute(byte[] key)
    {
        Key = key;
    }

    public byte[] Key { get; }
}
