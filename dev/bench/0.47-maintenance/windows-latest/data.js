window.BENCHMARK_DATA = {
  "lastUpdate": 1678782738701,
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
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52939420ad5a4cad7ecdb67a3942742a2e6e5dac",
          "message": "Merge pull request #2929 from greymistcube/port/0.46.3-to-0.47.1\n\n🚀🔀 Port 0.46.3 to 0.47.1 and release 0.47.1",
          "timestamp": "2023-03-14T17:18:47+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/planetarium/libplanet/commit/52939420ad5a4cad7ecdb67a3942742a2e6e5dac"
        },
        "date": 1678782690728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 95838.88888888889,
            "unit": "ns",
            "range": "± 1934.8624784354872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4809225.558035715,
            "unit": "ns",
            "range": "± 7468.484229639906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526908.0357142857,
            "unit": "ns",
            "range": "± 2058.259186878176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141102.83203125,
            "unit": "ns",
            "range": "± 1154.098913776015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587222.7734375,
            "unit": "ns",
            "range": "± 2542.172220853911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794161.0807291666,
            "unit": "ns",
            "range": "± 627.2534339082588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721468.84765625,
            "unit": "ns",
            "range": "± 567.7527735336985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3983467.8645833335,
            "unit": "ns",
            "range": "± 20784.266162649103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4895913.513513514,
            "unit": "ns",
            "range": "± 65893.09592127304"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23316066.666666668,
            "unit": "ns",
            "range": "± 391947.8603565725"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6268317.857142857,
            "unit": "ns",
            "range": "± 179243.3707717205"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26143940,
            "unit": "ns",
            "range": "± 451228.38816470123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83800,
            "unit": "ns",
            "range": "± 4360.060387457779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190938,
            "unit": "ns",
            "range": "± 20815.576820829116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179037.5,
            "unit": "ns",
            "range": "± 5364.804659282392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3475243.3333333335,
            "unit": "ns",
            "range": "± 29830.79584845803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8564628.57142857,
            "unit": "ns",
            "range": "± 97914.39297492657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18971,
            "unit": "ns",
            "range": "± 2793.871178421826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46489.65517241379,
            "unit": "ns",
            "range": "± 2743.1112230525555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39768.42105263158,
            "unit": "ns",
            "range": "± 3471.073877545947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89130.10752688172,
            "unit": "ns",
            "range": "± 14714.19593266428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4909.183673469388,
            "unit": "ns",
            "range": "± 713.9387964605379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16309.333333333334,
            "unit": "ns",
            "range": "± 806.5899747625105"
          }
        ]
      }
    ]
  }
}