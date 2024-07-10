namespace Libplanet.SDK.Action
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class ActionAttribute : SchemaAttribute
    {
        public ActionAttribute(string name)
            : base(name)
        {
            Version = 1.0;
        }

        public double Version;
    }
}
