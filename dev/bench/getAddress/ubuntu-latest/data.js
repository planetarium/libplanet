window.BENCHMARK_DATA = {
  "lastUpdate": 1681376573863,
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
      },
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
          "id": "74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63",
          "message": "temp: account-web3: Web3KeyMetadata, need changelog\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:46:52+09:00",
          "tree_id": "4ea28583e3815c059ee13bdf2975491a7576b2ba",
          "url": "https://github.com/planetarium/libplanet/commit/74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63"
        },
        "date": 1681376552532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8594024.933333334,
            "unit": "ns",
            "range": "± 84391.70808579536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22496959.64285714,
            "unit": "ns",
            "range": "± 251370.93379631598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56169137.538461536,
            "unit": "ns",
            "range": "± 377852.75907457556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112232286.53333333,
            "unit": "ns",
            "range": "± 403065.4688829572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224593126.2,
            "unit": "ns",
            "range": "± 648404.5171660314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58852.36842105263,
            "unit": "ns",
            "range": "± 5362.176979414857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571709.0638297873,
            "unit": "ns",
            "range": "± 90841.28208528933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872836.1379310344,
            "unit": "ns",
            "range": "± 83070.37197793041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503136.85,
            "unit": "ns",
            "range": "± 127630.39128662582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5997096.136363637,
            "unit": "ns",
            "range": "± 143946.47488870742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995488.079799107,
            "unit": "ns",
            "range": "± 29312.893293967474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887395.4795572916,
            "unit": "ns",
            "range": "± 3759.627218929587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371606.2391927084,
            "unit": "ns",
            "range": "± 3423.134975938885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666507.381610577,
            "unit": "ns",
            "range": "± 9621.76632481077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837621.3739536831,
            "unit": "ns",
            "range": "± 687.8614530080786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775661.4139322917,
            "unit": "ns",
            "range": "± 930.5011053264612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377229.55102040817,
            "unit": "ns",
            "range": "± 14868.107976276528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307016.7843137255,
            "unit": "ns",
            "range": "± 12541.118905924983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272192.4555555555,
            "unit": "ns",
            "range": "± 15157.327609881742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6001690.533333333,
            "unit": "ns",
            "range": "± 52409.233144915364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4426980.676470588,
            "unit": "ns",
            "range": "± 87262.79425407722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28358.697916666668,
            "unit": "ns",
            "range": "± 2764.974297471827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124105.52525252526,
            "unit": "ns",
            "range": "± 11984.509142837846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110822.23,
            "unit": "ns",
            "range": "± 11319.22622980543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247363.49462365592,
            "unit": "ns",
            "range": "± 16625.834225963215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11306.29797979798,
            "unit": "ns",
            "range": "± 1724.7249054813676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28590.808510638297,
            "unit": "ns",
            "range": "± 3174.287312363543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3768262.6,
            "unit": "ns",
            "range": "± 42176.88909445212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4001572.4,
            "unit": "ns",
            "range": "± 58943.978592025356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4463972.777777778,
            "unit": "ns",
            "range": "± 145425.78434123532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924230.275862069,
            "unit": "ns",
            "range": "± 140072.1026063507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7881702.538461538,
            "unit": "ns",
            "range": "± 194317.2951716302"
          }
        ]
      }
    ]
  }
}