namespace Libplanet.Node.Options
{
    public class StoreOption
    {
        public const string Position = "Store";

        public string RootPath { get; set; } =
            Path.Combine(Directory.GetCurrentDirectory(), "db");

        public StoreType Type { get; set; } = StoreType.RocksDB;

        public string StorePath => Path.Combine(RootPath, "store");

        public string StateStorePath => Path.Combine(RootPath, "state");
    }
}
