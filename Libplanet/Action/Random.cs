namespace Libplanet.Action
{
    internal class Random : System.Random, IRandom
    {
        public Random(int seed)
            : base(seed)
        {
        }
    }
}
