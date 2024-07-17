window.BENCHMARK_DATA = {
  "lastUpdate": 1721202465433,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "715d6e23f0a76bef6c53ea636e4fda4898d195fc",
          "message": "Release 5.1.2",
          "timestamp": "2024-07-17T16:31:46+09:00",
          "tree_id": "d6f06a4a7daaac8e7abdd7aac090c2dad3a510ce",
          "url": "https://github.com/planetarium/libplanet/commit/715d6e23f0a76bef6c53ea636e4fda4898d195fc"
        },
        "date": 1721202410944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10790178.285714285,
            "unit": "ns",
            "range": "± 153539.59898116416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26484407.5,
            "unit": "ns",
            "range": "± 154901.8475500634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67300430.86666666,
            "unit": "ns",
            "range": "± 118517.51562283747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135962183,
            "unit": "ns",
            "range": "± 258291.8796120002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273900883.73333335,
            "unit": "ns",
            "range": "± 581652.915853416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14144.615384615385,
            "unit": "ns",
            "range": "± 204.4926805786858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110435.48,
            "unit": "ns",
            "range": "± 4438.581866924136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106253.2,
            "unit": "ns",
            "range": "± 3532.2852994008904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92083.73170731707,
            "unit": "ns",
            "range": "± 3098.1603172236764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3029060.939759036,
            "unit": "ns",
            "range": "± 160467.55567261914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2725815.836734694,
            "unit": "ns",
            "range": "± 164781.0349392283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5073.494505494506,
            "unit": "ns",
            "range": "± 430.67795066812647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26971.17391304348,
            "unit": "ns",
            "range": "± 1977.5168779024152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24026.427083333332,
            "unit": "ns",
            "range": "± 2202.2492389411022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30218.542553191488,
            "unit": "ns",
            "range": "± 5389.3195625822855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1326.2978723404256,
            "unit": "ns",
            "range": "± 259.6736922505576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4947.208791208791,
            "unit": "ns",
            "range": "± 570.4137974894194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687733.0857142857,
            "unit": "ns",
            "range": "± 30769.935103171996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1314621.112244898,
            "unit": "ns",
            "range": "± 51808.517827998265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082253.6533333333,
            "unit": "ns",
            "range": "± 52026.13919749492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9432304.5,
            "unit": "ns",
            "range": "± 1356704.1208112447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171080.6346153845,
            "unit": "ns",
            "range": "± 76040.51408141476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283779.8723404254,
            "unit": "ns",
            "range": "± 87439.09667718713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2558841.2666666666,
            "unit": "ns",
            "range": "± 40030.953863348346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2306807,
            "unit": "ns",
            "range": "± 59521.21816839773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2998558.193548387,
            "unit": "ns",
            "range": "± 172861.47273531774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036655.9322916665,
            "unit": "ns",
            "range": "± 44226.524611162204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923864.556640625,
            "unit": "ns",
            "range": "± 6325.937902211162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615964.616015625,
            "unit": "ns",
            "range": "± 4631.740874304385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1668469.0369591345,
            "unit": "ns",
            "range": "± 7265.835785683347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466333.16380208335,
            "unit": "ns",
            "range": "± 720.9575675733646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416047.91555989586,
            "unit": "ns",
            "range": "± 828.8342547590921"
          }
        ]
      }
    ]
  }
}