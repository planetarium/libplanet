Libplanet.Explorer
==================

Explore your block, transaction, and address with Libplanet.Explorer. 

The goal of this project is to give you the UI of the web or
native application. But we **only provide JSON API** for the present.


Getting started
---------------

1.  Create store getter class that implements `IBlockchainStore`. You may want
to change the path of data directory or use another store that implements
`IStore`.

    ~~~~~~~~ csharp
    namespace MyExplorer
    {
        public class MyStore : IBlockchainStore
        {
            public IStore Store { get; private set; }

            public MyStore()
            {
                Store = new FileStore("./data");
            }
        }
    }
    ~~~~~~~~
2.  Create `Program` class to run your explorer program.
Note that `ExplorerStartup` needs two generic types.\
The first is an action class that implements `IAction` in your game and
the latter is the store getter class which is added on step 1.

    ~~~~~~~~ csharp
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }
    
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<ExplorerStartup<DummyAction, MyStore>>()
                .Build();
    }
    ~~~~~~~~


Endpoints
---------

- `/blocks/`: Show a list of blocks. It contains the hash of block and
the creation timestamp.
- `/blocks/{hashString}/`: Show the details of the block that includes index,
difficulty, nonce, the hash of the previous block, reward beneficiary,
creation timestamp, and transaction ids. `{hashString}` is
- `/tx/{txIdString}/`: Show the details of the transaction that includes id,
signature, creation timestamp, sender address, recipient address, and actions.
- `/address/{addressIdString}/`: Show the details of address. The list of
transactions sent/received and state of it.
