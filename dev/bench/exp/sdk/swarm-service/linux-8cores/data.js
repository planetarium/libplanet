window.BENCHMARK_DATA = {
  "lastUpdate": 1724230551758,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "1085c8b269b560d46725f1b537d683c464c9662a",
          "message": "refactor: Rename Node to Swarm and add ValidatorService",
          "timestamp": "2024-08-21T17:45:33+09:00",
          "tree_id": "5f4ca9a4fa40489737e6620682c1b5d4c145ebaf",
          "url": "https://github.com/planetarium/libplanet/commit/1085c8b269b560d46725f1b537d683c464c9662a"
        },
        "date": 1724230525721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198773.58333333334,
            "unit": "ns",
            "range": "± 6501.575059168355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193891.6,
            "unit": "ns",
            "range": "± 6932.5854497569535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161319.08333333334,
            "unit": "ns",
            "range": "± 1708.9083415142456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034530.6428571427,
            "unit": "ns",
            "range": "± 26648.52533835205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720726.933333333,
            "unit": "ns",
            "range": "± 32812.89209499973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12775.514925373134,
            "unit": "ns",
            "range": "± 613.4934118965946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60522.29710144927,
            "unit": "ns",
            "range": "± 2899.768026116157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49738.61538461538,
            "unit": "ns",
            "range": "± 600.168662191657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59637.45918367347,
            "unit": "ns",
            "range": "± 6824.6017687804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3287.3061224489797,
            "unit": "ns",
            "range": "± 248.68372693966816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12139.797101449276,
            "unit": "ns",
            "range": "± 593.4050937475954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2356961.9,
            "unit": "ns",
            "range": "± 37927.48009557186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511628.294117647,
            "unit": "ns",
            "range": "± 49535.079920401746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3049353,
            "unit": "ns",
            "range": "± 56483.35705438667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2523099.1153846155,
            "unit": "ns",
            "range": "± 68797.18558332277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3245924.533333333,
            "unit": "ns",
            "range": "± 56547.69836274337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10220293.8,
            "unit": "ns",
            "range": "± 57357.630241195584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26981341.6,
            "unit": "ns",
            "range": "± 159414.20360306668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68030951.33333333,
            "unit": "ns",
            "range": "± 255757.63968750535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134961532.4,
            "unit": "ns",
            "range": "± 372982.35655204154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279057785.6333333,
            "unit": "ns",
            "range": "± 887092.5042541155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017141.4659090909,
            "unit": "ns",
            "range": "± 52918.446089936704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924865.4047619049,
            "unit": "ns",
            "range": "± 70308.75748346544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1676050.1833333333,
            "unit": "ns",
            "range": "± 74050.86371908223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8207323.625,
            "unit": "ns",
            "range": "± 205607.37342583475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742950.83203125,
            "unit": "ns",
            "range": "± 5261.0891248815715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204350.8355189732,
            "unit": "ns",
            "range": "± 2152.6401820171823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765329.6006510417,
            "unit": "ns",
            "range": "± 1283.4028006377991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963957.2455357143,
            "unit": "ns",
            "range": "± 1541.7775324274717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631616.6983816965,
            "unit": "ns",
            "range": "± 1133.0099341993978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583461.7178431919,
            "unit": "ns",
            "range": "± 568.9501233457464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32387.804347826088,
            "unit": "ns",
            "range": "± 1030.50422651708"
          }
        ]
      }
    ]
  }
}