window.BENCHMARK_DATA = {
  "lastUpdate": 1696408773456,
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
          "id": "f4de791ec79e187d4f37220ca3f714d0fa1503b4",
          "message": "Merge pull request #3441 from greymistcube/release/3.5.0\n\n🚀 Release 3.5.0",
          "timestamp": "2023-10-04T17:16:25+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/planetarium/libplanet/commit/f4de791ec79e187d4f37220ca3f714d0fa1503b4"
        },
        "date": 1696408693189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640380.412371134,
            "unit": "ns",
            "range": "± 210951.35282372925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941993.75,
            "unit": "ns",
            "range": "± 278944.8195998251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2431348.4536082475,
            "unit": "ns",
            "range": "± 241790.06394727106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10655722.727272727,
            "unit": "ns",
            "range": "± 768441.4517482059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60801.063829787236,
            "unit": "ns",
            "range": "± 13625.312423612284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9068717.391304348,
            "unit": "ns",
            "range": "± 819553.9029947933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25221955.789473683,
            "unit": "ns",
            "range": "± 1959994.6930407847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59214512.5,
            "unit": "ns",
            "range": "± 1474740.1968136036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115991772.97297297,
            "unit": "ns",
            "range": "± 3847412.2663918645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236042328.2051282,
            "unit": "ns",
            "range": "± 8197485.873342949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5331694.692095588,
            "unit": "ns",
            "range": "± 169909.07505305004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1628487.96875,
            "unit": "ns",
            "range": "± 19108.37909372561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1233100.9410511365,
            "unit": "ns",
            "range": "± 29769.588120283934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3062109.9051339286,
            "unit": "ns",
            "range": "± 54170.219045626116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985932.7837775735,
            "unit": "ns",
            "range": "± 19862.422679841995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886034.8557692308,
            "unit": "ns",
            "range": "± 7777.821397043946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3413157.2916666665,
            "unit": "ns",
            "range": "± 262494.9919300885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528083.505154639,
            "unit": "ns",
            "range": "± 209055.0269867225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4985607.142857143,
            "unit": "ns",
            "range": "± 265321.36766784533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4658487.368421053,
            "unit": "ns",
            "range": "± 318855.84591950587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12218311.494252874,
            "unit": "ns",
            "range": "± 733153.0175042916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309342.1052631579,
            "unit": "ns",
            "range": "± 46161.039985489864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282411.7021276596,
            "unit": "ns",
            "range": "± 45275.56749644749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237587.36842105264,
            "unit": "ns",
            "range": "± 29816.26802176625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189793.6170212766,
            "unit": "ns",
            "range": "± 293374.32868779276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4041138.144329897,
            "unit": "ns",
            "range": "± 343363.7410007361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26142,
            "unit": "ns",
            "range": "± 10153.977973526862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97080.41237113402,
            "unit": "ns",
            "range": "± 18140.652087549446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102205,
            "unit": "ns",
            "range": "± 23773.21884691752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123738.94736842105,
            "unit": "ns",
            "range": "± 24893.22857058548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7794.505494505494,
            "unit": "ns",
            "range": "± 1717.9679622780861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22960.416666666668,
            "unit": "ns",
            "range": "± 6662.9293252279385"
          }
        ]
      }
    ]
  }
}