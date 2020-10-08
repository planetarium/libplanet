namespace Libplanet.Tools.Configuration
{
    public class ToolConfiguration
    {
        public ToolConfiguration(MptConfiguration? mpt = null)
        {
            Mpt = mpt ?? new MptConfiguration();
        }

        public MptConfiguration Mpt { get; }
    }
}
