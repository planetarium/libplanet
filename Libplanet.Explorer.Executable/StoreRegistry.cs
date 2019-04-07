using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Libplanet.Store;

namespace Libplanet.Explorer.Executable
{
    internal class StoreRegistry
    {
        private static (string, Parser)[] stores = new (string, Parser)[]
        {
            ("file", s => new FileStore(s)),
        };

        private delegate IStore Parser(string connectionString);

        internal static IEnumerable<string> List()
        {
            return stores.Select(t => t.Item1).OrderBy(t => t);
        }

        internal static IStore Get(string typeName, string connectionString)
        {
            CultureInfo c = CultureInfo.InvariantCulture;
            string typeNameLower = typeName.ToLower(c);
            foreach ((string n, Parser parse) in stores)
            {
                if (!typeNameLower.Equals(n?.ToLower(c)))
                {
                    continue;
                }

                return parse(connectionString);
            }

            throw new StoreNotFoundException(typeName);
        }

        internal class StoreNotFoundException : Exception
        {
            internal StoreNotFoundException(string typeName)
            {
                TypeName = typeName;
            }

            public string TypeName { get; }
        }
    }
}
