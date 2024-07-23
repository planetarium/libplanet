window.BENCHMARK_DATA = {
  "lastUpdate": 1721714204345,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714138550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10807594.857142856,
            "unit": "ns",
            "range": "± 142839.9880958018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26656174.733333334,
            "unit": "ns",
            "range": "± 172505.03808190094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67240648.78571428,
            "unit": "ns",
            "range": "± 78462.898674301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136488529.5,
            "unit": "ns",
            "range": "± 489728.16265568737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274304019.8,
            "unit": "ns",
            "range": "± 537304.2917052549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14088.034482758621,
            "unit": "ns",
            "range": "± 412.4244937612062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111269.06666666667,
            "unit": "ns",
            "range": "± 4326.601973783586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105553.33333333333,
            "unit": "ns",
            "range": "± 3832.066224127565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90384.23076923077,
            "unit": "ns",
            "range": "± 1467.6170682348852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2953712.02,
            "unit": "ns",
            "range": "± 212122.07891997695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766056.7608695654,
            "unit": "ns",
            "range": "± 154731.65933001277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4926.3125,
            "unit": "ns",
            "range": "± 600.386039188647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26581.147727272728,
            "unit": "ns",
            "range": "± 1866.042468746944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22436.752688172044,
            "unit": "ns",
            "range": "± 1547.6515424564066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28900.717391304348,
            "unit": "ns",
            "range": "± 4501.83416180045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1312.4255319148936,
            "unit": "ns",
            "range": "± 232.50605215208574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4825.738636363636,
            "unit": "ns",
            "range": "± 500.8859735409579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690878.0898876404,
            "unit": "ns",
            "range": "± 46080.365014593706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270440.847826087,
            "unit": "ns",
            "range": "± 44492.81303859579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1092339.0256410257,
            "unit": "ns",
            "range": "± 49772.73252376697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9509067.16,
            "unit": "ns",
            "range": "± 1460708.6852949483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204813.846153846,
            "unit": "ns",
            "range": "± 31085.02093143404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292206.6315789474,
            "unit": "ns",
            "range": "± 78232.97793110463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547134.769230769,
            "unit": "ns",
            "range": "± 22344.856164800905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2328454.066666667,
            "unit": "ns",
            "range": "± 87295.17123384005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3165213.64,
            "unit": "ns",
            "range": "± 320130.6186720727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033329.6765625,
            "unit": "ns",
            "range": "± 32432.19931126035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917280.1353515625,
            "unit": "ns",
            "range": "± 8129.203435521332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615865.4652994792,
            "unit": "ns",
            "range": "± 4745.168987173333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1649829.0853794643,
            "unit": "ns",
            "range": "± 10766.498312413753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468709.0625,
            "unit": "ns",
            "range": "± 1010.006738534644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425113.50364583335,
            "unit": "ns",
            "range": "± 1281.4455533483808"
          }
        ]
      }
    ]
  }
}