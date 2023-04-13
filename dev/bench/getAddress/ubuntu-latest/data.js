window.BENCHMARK_DATA = {
  "lastUpdate": 1681375352376,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "1a2a110d339b3b459fb1798d0943487ca75d6cba",
          "message": "tslib: Account.getAddress() async\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:28:20+09:00",
          "tree_id": "ef04124a7bf47b271ebd0039c0734c3f5d9f27ca",
          "url": "https://github.com/planetarium/libplanet/commit/1a2a110d339b3b459fb1798d0943487ca75d6cba"
        },
        "date": 1681375331990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598680.285714285,
            "unit": "ns",
            "range": "± 78177.17381831974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20658757.933333334,
            "unit": "ns",
            "range": "± 284931.39302081295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52293694.61904762,
            "unit": "ns",
            "range": "± 1239654.5811845118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102074462.93333334,
            "unit": "ns",
            "range": "± 1903691.592079545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202048095,
            "unit": "ns",
            "range": "± 1829918.053074971"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49011.03703703704,
            "unit": "ns",
            "range": "± 2587.01481656196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383911.0531914893,
            "unit": "ns",
            "range": "± 81510.97782116671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656713.08,
            "unit": "ns",
            "range": "± 70061.12409765252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235615.9859154928,
            "unit": "ns",
            "range": "± 109110.33829326727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5433256.384615385,
            "unit": "ns",
            "range": "± 148039.33108929583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5936873.747395833,
            "unit": "ns",
            "range": "± 20369.561164071325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841000.0419170673,
            "unit": "ns",
            "range": "± 4216.8157334359985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340712.1869791667,
            "unit": "ns",
            "range": "± 3983.013867425444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649058.69453125,
            "unit": "ns",
            "range": "± 8221.059614304895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817014.4370814732,
            "unit": "ns",
            "range": "± 1335.1156887084464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757851.0370442708,
            "unit": "ns",
            "range": "± 1666.1322386458157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327162.04761904763,
            "unit": "ns",
            "range": "± 11756.959062101094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277290.65625,
            "unit": "ns",
            "range": "± 7930.011018213779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232211.66666666666,
            "unit": "ns",
            "range": "± 3654.638279280311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5675632.923076923,
            "unit": "ns",
            "range": "± 56477.21375543347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927750.2666666666,
            "unit": "ns",
            "range": "± 46329.15354668571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19260.885416666668,
            "unit": "ns",
            "range": "± 1641.0521969298375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86105,
            "unit": "ns",
            "range": "± 3734.8540466797363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78468.5,
            "unit": "ns",
            "range": "± 2855.460633037911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 186828.5,
            "unit": "ns",
            "range": "± 15719.521059340566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5675.693877551021,
            "unit": "ns",
            "range": "± 536.0289345968329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17723.621052631577,
            "unit": "ns",
            "range": "± 1318.6132236537842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254856.121212121,
            "unit": "ns",
            "range": "± 101291.16805704162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3492222.730769231,
            "unit": "ns",
            "range": "± 93780.49151910337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197541.714285715,
            "unit": "ns",
            "range": "± 71810.61857995074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4386338.846153846,
            "unit": "ns",
            "range": "± 149897.79538625618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7314566.735294118,
            "unit": "ns",
            "range": "± 230351.22213675684"
          }
        ]
      }
    ]
  }
}