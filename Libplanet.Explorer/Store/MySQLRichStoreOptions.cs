#nullable disable
namespace Libplanet.Explorer.Store
{
    public readonly struct MySQLRichStoreOptions
    {
        public MySQLRichStoreOptions(
            string database, string server, uint port, string username, string password)
        {
            Database = database;
            Server = server;
            Port = port;
            Username = username;
            Password = password;
        }

        public string Database { get; }

        public string Server { get; }

        public uint Port { get; }

        public string Username { get; }

        public string Password { get; }
    }
}
