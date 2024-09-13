namespace Libplanet.SDK.Action.Attributes
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
    public class ExecutableAttribute : Attribute
    {
        public ExecutableAttribute(string? description = null)
        {
            Description = description;
        }

        public string? Description { get; set; }
    }
}
