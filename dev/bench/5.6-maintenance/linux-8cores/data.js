window.BENCHMARK_DATA = {
  "lastUpdate": 1748057333224,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4",
          "message": "Merge pull request #4034 from planetarium/prepare/5.5.2\n\nPrepare 5.5.2",
          "timestamp": "2025-02-18T09:27:55+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4"
        },
        "date": 1748055974127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2680412.0625,
            "unit": "ns",
            "range": "± 52082.44251692855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2674307.3666666667,
            "unit": "ns",
            "range": "± 40800.482134522914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3019315.066666667,
            "unit": "ns",
            "range": "± 33861.65120112525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2587729.214285714,
            "unit": "ns",
            "range": "± 40079.01568810632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3250200.5,
            "unit": "ns",
            "range": "± 31740.649604028495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3891428.49921875,
            "unit": "ns",
            "range": "± 13537.766306456506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236117.9444010416,
            "unit": "ns",
            "range": "± 1696.7749121394872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786530.8130258414,
            "unit": "ns",
            "range": "± 1026.5569213666538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010808.5162259615,
            "unit": "ns",
            "range": "± 6501.654180944035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621082.6052594866,
            "unit": "ns",
            "range": "± 1524.131739184636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581498.3015625,
            "unit": "ns",
            "range": "± 2246.1176204672292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11691666.266666668,
            "unit": "ns",
            "range": "± 178603.72823474987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27950301.14285714,
            "unit": "ns",
            "range": "± 160870.87571791004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70064007.07692307,
            "unit": "ns",
            "range": "± 834149.5187793034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141389562.42857143,
            "unit": "ns",
            "range": "± 1022822.9092683764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283544839.21428573,
            "unit": "ns",
            "range": "± 2094638.2044052077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977432.9850746269,
            "unit": "ns",
            "range": "± 46043.2253653589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954738.0555555555,
            "unit": "ns",
            "range": "± 68289.9596718273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596783.5443037974,
            "unit": "ns",
            "range": "± 82012.63509468707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7832000.629032258,
            "unit": "ns",
            "range": "± 233428.44234550654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33885.89473684211,
            "unit": "ns",
            "range": "± 5614.4119971648115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105485.5617977528,
            "unit": "ns",
            "range": "± 6668.35610271489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191022.77173913043,
            "unit": "ns",
            "range": "± 11047.653978101047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172271.66,
            "unit": "ns",
            "range": "± 6905.044915871588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2954436.8125,
            "unit": "ns",
            "range": "± 57297.95084552181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862568.5,
            "unit": "ns",
            "range": "± 50628.20727276294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12056.627659574468,
            "unit": "ns",
            "range": "± 1130.751907361166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68101.37894736842,
            "unit": "ns",
            "range": "± 7616.437359183136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50732.3125,
            "unit": "ns",
            "range": "± 837.0490402797994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59170.989795918365,
            "unit": "ns",
            "range": "± 11829.722965179044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.0520833333335,
            "unit": "ns",
            "range": "± 364.24027263077363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11770.09677419355,
            "unit": "ns",
            "range": "± 1203.736511184672"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98333f41b86cc92bc328c569c756a88830127ed2",
          "message": "Merge pull request #4041 from planetarium/prepare/5.6.0\n\n🔧 Prepare 5.6.0",
          "timestamp": "2025-05-24T12:20:29+09:00",
          "tree_id": "79b0852bfd537157ef86214a4d55c3fbc3eb4d7b",
          "url": "https://github.com/planetarium/libplanet/commit/98333f41b86cc92bc328c569c756a88830127ed2"
        },
        "date": 1748057306203,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2455233.088235294,
            "unit": "ns",
            "range": "± 48879.67579559374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2506303.257142857,
            "unit": "ns",
            "range": "± 81702.34340124806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3010464.923076923,
            "unit": "ns",
            "range": "± 31475.548159011567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609631.1578947366,
            "unit": "ns",
            "range": "± 56222.88100375659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3440815.5,
            "unit": "ns",
            "range": "± 60292.96555628549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3856333.546316964,
            "unit": "ns",
            "range": "± 9615.782197968523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1249643.2267020089,
            "unit": "ns",
            "range": "± 2537.1764211283044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772380.5011858259,
            "unit": "ns",
            "range": "± 2012.2446305367544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999082.3380208334,
            "unit": "ns",
            "range": "± 3106.5896667133284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634630.5447916667,
            "unit": "ns",
            "range": "± 1514.6059767555014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569266.6611328125,
            "unit": "ns",
            "range": "± 1403.8597779015988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11631712.533333333,
            "unit": "ns",
            "range": "± 145925.9234851058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28574692.07142857,
            "unit": "ns",
            "range": "± 342227.7098295057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70373654,
            "unit": "ns",
            "range": "± 454569.72786563047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141072809.66666666,
            "unit": "ns",
            "range": "± 750043.0135140504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280651248.28571427,
            "unit": "ns",
            "range": "± 1409213.8914989464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993241.1162790698,
            "unit": "ns",
            "range": "± 59578.73697754309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1948654.657142857,
            "unit": "ns",
            "range": "± 63670.060413936204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1611061.1296296297,
            "unit": "ns",
            "range": "± 81864.09925074673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7993778.078947368,
            "unit": "ns",
            "range": "± 271563.2416435747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31408.970588235294,
            "unit": "ns",
            "range": "± 641.8459820750476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106848.13483146067,
            "unit": "ns",
            "range": "± 6598.1600813322675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196136.25,
            "unit": "ns",
            "range": "± 9933.32220342157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170012.9,
            "unit": "ns",
            "range": "± 3700.502539129687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2947239.1666666665,
            "unit": "ns",
            "range": "± 43604.89608922811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2764602.714285714,
            "unit": "ns",
            "range": "± 39204.12843140291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11590.01724137931,
            "unit": "ns",
            "range": "± 881.7909347494195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58093.032608695656,
            "unit": "ns",
            "range": "± 4475.130213468254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61035.75,
            "unit": "ns",
            "range": "± 1177.8120676350138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59069.57142857143,
            "unit": "ns",
            "range": "± 11446.459811959508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2887.3979591836733,
            "unit": "ns",
            "range": "± 445.17251931645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11506.943820224718,
            "unit": "ns",
            "range": "± 754.1231717508776"
          }
        ]
      }
    ]
  }
}