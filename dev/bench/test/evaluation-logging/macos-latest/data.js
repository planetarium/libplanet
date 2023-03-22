window.BENCHMARK_DATA = {
  "lastUpdate": 1679470262610,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470070837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115651.87634408602,
            "unit": "ns",
            "range": "± 7615.834504096197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94884.52688172043,
            "unit": "ns",
            "range": "± 13388.30313597218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204997.97872340426,
            "unit": "ns",
            "range": "± 21534.301304342545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180393.3085106383,
            "unit": "ns",
            "range": "± 15229.536098828425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3490600.1363636362,
            "unit": "ns",
            "range": "± 84459.47108710694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9653495.510869564,
            "unit": "ns",
            "range": "± 581183.7909471713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17055.2183908046,
            "unit": "ns",
            "range": "± 2652.3446074873355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51335.76315789474,
            "unit": "ns",
            "range": "± 7523.2474176120895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43936.74725274725,
            "unit": "ns",
            "range": "± 4150.241807127779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100468.92631578947,
            "unit": "ns",
            "range": "± 16061.62204670215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5555.576470588236,
            "unit": "ns",
            "range": "± 728.5324514207375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15654.85393258427,
            "unit": "ns",
            "range": "± 1814.5296695297313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4525636.079769737,
            "unit": "ns",
            "range": "± 98470.7781600471"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5667849.357142857,
            "unit": "ns",
            "range": "± 480386.7435347725"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25866524.16923077,
            "unit": "ns",
            "range": "± 1191134.3208971617"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6670823.631868131,
            "unit": "ns",
            "range": "± 658245.2468847121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29289264.184210528,
            "unit": "ns",
            "range": "± 993173.9540225583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6263007.756696428,
            "unit": "ns",
            "range": "± 56655.45334848442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905620.6535644531,
            "unit": "ns",
            "range": "± 33599.9854372677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231394.9555989583,
            "unit": "ns",
            "range": "± 18506.885894773503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642078.8624441964,
            "unit": "ns",
            "range": "± 27261.8103100122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836811.6605747768,
            "unit": "ns",
            "range": "± 6212.059035465578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710594.0339192708,
            "unit": "ns",
            "range": "± 7311.210162143289"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470217664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125266.6182795699,
            "unit": "ns",
            "range": "± 11820.58056568166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98145.56842105264,
            "unit": "ns",
            "range": "± 11678.763929833473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219977.78282828283,
            "unit": "ns",
            "range": "± 29421.655605214415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201246.57894736843,
            "unit": "ns",
            "range": "± 17712.94459558773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3644194.709677419,
            "unit": "ns",
            "range": "± 111103.77765440548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10042473.333333334,
            "unit": "ns",
            "range": "± 361618.9015317204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20186.141414141413,
            "unit": "ns",
            "range": "± 3728.291579563884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56850.13684210526,
            "unit": "ns",
            "range": "± 9197.675020294388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54588.45918367347,
            "unit": "ns",
            "range": "± 7759.103540748043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116287.06382978724,
            "unit": "ns",
            "range": "± 14256.146310448496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6455.057894736842,
            "unit": "ns",
            "range": "± 771.7258458721011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17335.864583333332,
            "unit": "ns",
            "range": "± 1883.493211085758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4537722.014539931,
            "unit": "ns",
            "range": "± 91594.4362243306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5422575.295698925,
            "unit": "ns",
            "range": "± 370172.25933456974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26066611.63917526,
            "unit": "ns",
            "range": "± 1616364.2071522046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6410056.225,
            "unit": "ns",
            "range": "± 327965.4903866508"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29890007.5625,
            "unit": "ns",
            "range": "± 565197.9632863714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6681766.71765625,
            "unit": "ns",
            "range": "± 152302.90542172958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941801.529203869,
            "unit": "ns",
            "range": "± 44747.97141541099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226101.5546875,
            "unit": "ns",
            "range": "± 9351.846060034208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2445990.0733173075,
            "unit": "ns",
            "range": "± 23269.109333009026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821093.9247295673,
            "unit": "ns",
            "range": "± 4979.9153670305295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708366.7197265625,
            "unit": "ns",
            "range": "± 6541.041951550179"
          }
        ]
      }
    ]
  }
}