namespace Libplanet.SDK.Action.Attributes
{
    [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false)]
    public class ParameterAttribute : Attribute
    {
        public ParameterAttribute(string description)
        {
            Description = description;
        }

        public string Description { get; set; }
    }
}
