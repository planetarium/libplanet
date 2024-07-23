window.BENCHMARK_DATA = {
  "lastUpdate": 1721724403178,
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
          "id": "465171f774506f2ff13ccdacfe2262db6385f6ab",
          "message": "Prepare 5.3.",
          "timestamp": "2024-07-23T17:32:08+09:00",
          "tree_id": "7a6d3f72a275c5a24f37cd9fa89e57ad8ebff2ee",
          "url": "https://github.com/planetarium/libplanet/commit/465171f774506f2ff13ccdacfe2262db6385f6ab"
        },
        "date": 1721724149419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015989.898989899,
            "unit": "ns",
            "range": "± 93478.235483846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776627.2727272727,
            "unit": "ns",
            "range": "± 65590.20546433836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542501.0526315789,
            "unit": "ns",
            "range": "± 117095.14179897786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6725991.176470588,
            "unit": "ns",
            "range": "± 214652.23617643415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30688.235294117647,
            "unit": "ns",
            "range": "± 997.8050777892605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9661878.57142857,
            "unit": "ns",
            "range": "± 86094.63646808335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23341314.285714287,
            "unit": "ns",
            "range": "± 83221.75064380573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58414342.85714286,
            "unit": "ns",
            "range": "± 196370.44158851996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115217913.33333333,
            "unit": "ns",
            "range": "± 404817.93062113854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235386684.6153846,
            "unit": "ns",
            "range": "± 513810.5322751988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307714.7395833335,
            "unit": "ns",
            "range": "± 4547.685943103891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054000.5078125,
            "unit": "ns",
            "range": "± 1979.501533681421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740633.61328125,
            "unit": "ns",
            "range": "± 1187.7144086204455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914149.90234375,
            "unit": "ns",
            "range": "± 2622.7022366591464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602705.17578125,
            "unit": "ns",
            "range": "± 1427.5817868279205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565868.9290364584,
            "unit": "ns",
            "range": "± 866.9601543155844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113434.6153846155,
            "unit": "ns",
            "range": "± 39093.26225638062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2178276.923076923,
            "unit": "ns",
            "range": "± 30158.47459245228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2663315.3846153845,
            "unit": "ns",
            "range": "± 70681.53191496455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282853.846153846,
            "unit": "ns",
            "range": "± 104311.43135600463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2949168.75,
            "unit": "ns",
            "range": "± 56113.95214204752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174644.44444444444,
            "unit": "ns",
            "range": "± 7250.131206793659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171667.2131147541,
            "unit": "ns",
            "range": "± 7585.308636029593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144269.5652173913,
            "unit": "ns",
            "range": "± 3637.361029223934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752080,
            "unit": "ns",
            "range": "± 43603.73837184147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2480385.714285714,
            "unit": "ns",
            "range": "± 31319.417843662643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10144.086021505376,
            "unit": "ns",
            "range": "± 1281.0883930395821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51958.333333333336,
            "unit": "ns",
            "range": "± 4574.935528258217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43918.181818181816,
            "unit": "ns",
            "range": "± 1208.1635199380466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52516.16161616162,
            "unit": "ns",
            "range": "± 11592.148178926336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2356.122448979592,
            "unit": "ns",
            "range": "± 395.0900527729423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9817.582417582418,
            "unit": "ns",
            "range": "± 782.956420895031"
          }
        ]
      }
    ]
  }
}