Libplanet.Store.Remote
======================
A remote store service for Libplanet.

# Table of Contents
- [RemoteKeyValueStore](#remotekeyvaluestore)
    * [Usage](#usage)
        + [Server](#server)
        + [Client](#client)

# RemoteKeyValueStore
## Usage
### Server
First, we need to make a server project.

```csharp
using Libplanet.Store.Remote.Server;
using Libplanet.Store.Trie;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddSingleton<IKeyValueStore, MemoryKeyValueStore>();

// If use `RocksDBStore`, try this:
// builder.Services.AddSingleton<IKeyValueStore>(_ => new RocksDBKeyValueStore("path/to/rocksdb"));

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<RemoteKeyValueService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
```

Then you can test with any other gRPC client tool.

![GRPC localhost:5239/libplanet.rpc.v1.KeyValueStore/Get is return some value](https://github.com/planetarium/libplanet/assets/16367497/e2692856-6971-41f0-a5a3-5536cc7cc64b)

### Client
Just use any project if you want to use the remote store.

Async example:
```csharp
using Libplanet.Store.Remote.Client;
using Libplanet.Store.Trie;

var channel = GrpcChannel.ForAddress("https://localhost:5239");
var client = new RemoteKeyValueStoreClient(channel);

await client
        .SetAsync(new KeyBytes(1, 2, 3), new byte[] { 1, 2, 3, 4, 5 })
        .ConfigureAwait(false);

byte[] value = await client
        .GetAsync(new KeyBytes(1, 2, 3))
        .ConfigureAwait(false);
```

Sync example:
```csharp
using Libplanet.Store.Remote.Client;
using Libplanet.Store.Trie;

var channel = GrpcChannel.ForAddress("https://localhost:5239");
var client = new RemoteKeyValueStoreClient(channel);

client.Set(new KeyBytes(1, 2, 3), new byte[] { 1, 2, 3, 4, 5 });

byte[] value = client.Get(new KeyBytes(1, 2, 3));
```
