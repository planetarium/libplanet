window.BENCHMARK_DATA = {
  "lastUpdate": 1711087358554,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "e1940cdbab6abe40cbabf296f61b5da7ce7faea1",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T14:49:36+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/e1940cdbab6abe40cbabf296f61b5da7ce7faea1"
        },
        "date": 1711087301415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970094.9494949495,
            "unit": "ns",
            "range": "± 114149.40028960738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675403.3333333333,
            "unit": "ns",
            "range": "± 74508.53202575372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560062,
            "unit": "ns",
            "range": "± 186372.15228535284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526236.363636363,
            "unit": "ns",
            "range": "± 126803.81282931498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34419.17808219178,
            "unit": "ns",
            "range": "± 1731.1410442446604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5136250,
            "unit": "ns",
            "range": "± 26508.27882292334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13375300,
            "unit": "ns",
            "range": "± 53613.58376042739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32418685.714285713,
            "unit": "ns",
            "range": "± 255018.4513901897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65986313.333333336,
            "unit": "ns",
            "range": "± 718091.1878690883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130836642.85714285,
            "unit": "ns",
            "range": "± 1823467.695064833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329486.690848214,
            "unit": "ns",
            "range": "± 7925.673353810216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068856.7758413462,
            "unit": "ns",
            "range": "± 2348.977991332332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746147.6004464285,
            "unit": "ns",
            "range": "± 1378.5161937305618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943349.8177083333,
            "unit": "ns",
            "range": "± 2424.915061066143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619269.0885416666,
            "unit": "ns",
            "range": "± 1369.4989219590586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569563.2486979166,
            "unit": "ns",
            "range": "± 1633.975856889907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2201204,
            "unit": "ns",
            "range": "± 45917.43931594327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2350020,
            "unit": "ns",
            "range": "± 38382.06798567715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767872,
            "unit": "ns",
            "range": "± 73509.30507992394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2832778.16091954,
            "unit": "ns",
            "range": "± 171993.77383626104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7835560,
            "unit": "ns",
            "range": "± 243734.59483206054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163557.8947368421,
            "unit": "ns",
            "range": "± 7749.034574842551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158469.49152542374,
            "unit": "ns",
            "range": "± 6340.027581722015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142537.5,
            "unit": "ns",
            "range": "± 5571.111848997698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806828.5714285714,
            "unit": "ns",
            "range": "± 36907.0647515002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431869.230769231,
            "unit": "ns",
            "range": "± 27374.23924712748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9998.979591836734,
            "unit": "ns",
            "range": "± 1630.0967587472169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49903.260869565216,
            "unit": "ns",
            "range": "± 3583.8603745049118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42651.6129032258,
            "unit": "ns",
            "range": "± 1062.6604875631524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48136.0824742268,
            "unit": "ns",
            "range": "± 9012.666845046133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2056.701030927835,
            "unit": "ns",
            "range": "± 262.56238008600195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9366.326530612245,
            "unit": "ns",
            "range": "± 1490.5159888096193"
          }
        ]
      }
    ]
  }
}