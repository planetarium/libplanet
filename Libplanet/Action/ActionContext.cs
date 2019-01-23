namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(int randomSeed)
        {
            Random = new Random(randomSeed);
        }

        public IRandom Random { get; }
    }
}
