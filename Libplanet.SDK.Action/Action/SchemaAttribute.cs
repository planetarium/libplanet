namespace Libplanet.SDK.Action
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class SchemaAttribute : Attribute
    {
        protected SchemaAttribute(string name)
        {
            Name = name;
        }

        public string Name { get; }
    }
}
