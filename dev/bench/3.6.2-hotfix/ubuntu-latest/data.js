window.BENCHMARK_DATA = {
  "lastUpdate": 1700827929319,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "5cc74a89fb99e1bdb908452acd61ba8458802aeb",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T21:00:19+09:00",
          "tree_id": "73552d92c9b5a98233efa35f2a153f97611fae00",
          "url": "https://github.com/planetarium/libplanet/commit/5cc74a89fb99e1bdb908452acd61ba8458802aeb"
        },
        "date": 1700827904450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195249.9262295082,
            "unit": "ns",
            "range": "± 8160.37103008398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191991.29411764705,
            "unit": "ns",
            "range": "± 8496.566722881826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167474.1379310345,
            "unit": "ns",
            "range": "± 4893.560847277763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3122782.076923077,
            "unit": "ns",
            "range": "± 45676.70839618652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876699.2666666666,
            "unit": "ns",
            "range": "± 45183.08085756163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15906.978260869566,
            "unit": "ns",
            "range": "± 1821.2448886893717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61456.886597938144,
            "unit": "ns",
            "range": "± 6278.207033853112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83903.16666666667,
            "unit": "ns",
            "range": "± 10091.069014015016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60262.0918367347,
            "unit": "ns",
            "range": "± 12691.785499962016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2721.9578947368423,
            "unit": "ns",
            "range": "± 404.9644564332087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12575.030927835052,
            "unit": "ns",
            "range": "± 2096.609094931664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717045.521354167,
            "unit": "ns",
            "range": "± 60558.691403897785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1153048.4176432292,
            "unit": "ns",
            "range": "± 3315.8192488639797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736469.6003766741,
            "unit": "ns",
            "range": "± 8879.666407579673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949990.8626302083,
            "unit": "ns",
            "range": "± 21478.788455151738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627633.8861979167,
            "unit": "ns",
            "range": "± 11502.359925549916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578143.8177083334,
            "unit": "ns",
            "range": "± 2678.349230369645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41865.9693877551,
            "unit": "ns",
            "range": "± 5267.406522500426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2401964.923076923,
            "unit": "ns",
            "range": "± 20876.862194231275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2454157.595744681,
            "unit": "ns",
            "range": "± 65891.88927249121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146504.3529411764,
            "unit": "ns",
            "range": "± 60153.8419023893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2900280.3625,
            "unit": "ns",
            "range": "± 202655.95542225605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776402.3125,
            "unit": "ns",
            "range": "± 210813.36122962285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5965853.230769231,
            "unit": "ns",
            "range": "± 16787.02277630872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14874104.766666668,
            "unit": "ns",
            "range": "± 94504.42758824029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37271479.692307696,
            "unit": "ns",
            "range": "± 174655.5761522205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76317105.46153846,
            "unit": "ns",
            "range": "± 322504.0500406197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149402811.19230768,
            "unit": "ns",
            "range": "± 489643.44880507776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951424.2021276596,
            "unit": "ns",
            "range": "± 76859.61783581354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827788.7631578948,
            "unit": "ns",
            "range": "± 62772.4709353892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404040.5212765958,
            "unit": "ns",
            "range": "± 96455.4547038331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5636887.30952381,
            "unit": "ns",
            "range": "± 301802.1455705299"
          }
        ]
      }
    ]
  }
}