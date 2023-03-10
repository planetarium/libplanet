window.BENCHMARK_DATA = {
  "lastUpdate": 1678416458487,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c69a2b5739e671425ebdf5609da2f2aa9e466bf",
          "message": "Merge pull request #2910 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: missing cherry pick in 2909",
          "timestamp": "2023-03-10T11:34:30+09:00",
          "tree_id": "31e4b557c4ea549ee4b7a3ea7aa4be393e583997",
          "url": "https://github.com/planetarium/libplanet/commit/5c69a2b5739e671425ebdf5609da2f2aa9e466bf"
        },
        "date": 1678416412599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93218.6046511628,
            "unit": "ns",
            "range": "± 3441.086194375361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4809381.529017857,
            "unit": "ns",
            "range": "± 6792.883772381341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514015.8984375,
            "unit": "ns",
            "range": "± 1495.9621883885666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1118329.1666666667,
            "unit": "ns",
            "range": "± 2111.693384392414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556810.1004464286,
            "unit": "ns",
            "range": "± 4712.930050594658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807304.345703125,
            "unit": "ns",
            "range": "± 717.0147321558767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728342.4128605769,
            "unit": "ns",
            "range": "± 286.8370688871828"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3960900.8072916665,
            "unit": "ns",
            "range": "± 16463.316201319987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5516446.153846154,
            "unit": "ns",
            "range": "± 72012.07786874614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23293727.777777776,
            "unit": "ns",
            "range": "± 432094.4706148734"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5778431.666666667,
            "unit": "ns",
            "range": "± 256314.609046645"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26187920,
            "unit": "ns",
            "range": "± 388985.11209115887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89035.85858585859,
            "unit": "ns",
            "range": "± 10192.053828601185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186645.16129032258,
            "unit": "ns",
            "range": "± 14558.469193065655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172336.5671641791,
            "unit": "ns",
            "range": "± 8191.715984112243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3442653.3333333335,
            "unit": "ns",
            "range": "± 33169.238474110025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8543014.285714285,
            "unit": "ns",
            "range": "± 92214.13088060818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18307.14285714286,
            "unit": "ns",
            "range": "± 2752.140685087785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47541.05263157895,
            "unit": "ns",
            "range": "± 5147.7426314189515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40126,
            "unit": "ns",
            "range": "± 3387.9054045682906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85729.59183673469,
            "unit": "ns",
            "range": "± 13673.9515264297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4544.791666666667,
            "unit": "ns",
            "range": "± 647.0776072655902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16447.31182795699,
            "unit": "ns",
            "range": "± 2083.297521898849"
          }
        ]
      }
    ]
  }
}