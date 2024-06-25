namespace Libplanet.Extensions.Cocona.Configuration
{
    public struct ToolConfiguration
    {
        public ToolConfiguration(MptConfiguration mpt)
        {
            Mpt = mpt;
        }

        public MptConfiguration Mpt { get; set; }
    }
}
