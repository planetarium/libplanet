namespace Libplanet.Action
{
    public interface IRandom
    {
        int Next();

        int Next(int maxValue);

        int Next(int minValue, int maxValue);

        void NextBytes(byte[] buffer);

        double NextDouble();
    }
}
