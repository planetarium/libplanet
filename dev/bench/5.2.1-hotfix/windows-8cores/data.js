window.BENCHMARK_DATA = {
  "lastUpdate": 1723120213249,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "adc55a38752c6ea162d1cf133286314e43c44f73",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:11:23+09:00",
          "tree_id": "9bbfc5a58234aa086670bb18a2080a94277a9e87",
          "url": "https://github.com/planetarium/libplanet/commit/adc55a38752c6ea162d1cf133286314e43c44f73"
        },
        "date": 1723119963627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079662.5,
            "unit": "ns",
            "range": "± 123370.47949378456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915858.064516129,
            "unit": "ns",
            "range": "± 83848.2832622622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633743.8356164384,
            "unit": "ns",
            "range": "± 80310.3424678661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7010735.897435897,
            "unit": "ns",
            "range": "± 244578.16906405622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29914.516129032258,
            "unit": "ns",
            "range": "± 1375.648493774523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9781700,
            "unit": "ns",
            "range": "± 139689.7480643648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23916935,
            "unit": "ns",
            "range": "± 531798.9403158422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60743250,
            "unit": "ns",
            "range": "± 1163738.859022934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117461846.66666667,
            "unit": "ns",
            "range": "± 808236.2180051313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240164315.3846154,
            "unit": "ns",
            "range": "± 1313870.482484324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3383611.027644231,
            "unit": "ns",
            "range": "± 18881.08872329127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094105.5208333333,
            "unit": "ns",
            "range": "± 6416.107840149626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736463.1966145834,
            "unit": "ns",
            "range": "± 1562.1519269403143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948976.060267857,
            "unit": "ns",
            "range": "± 3360.0709485628454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626310.2748325893,
            "unit": "ns",
            "range": "± 1208.3333573890059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576191.1848958334,
            "unit": "ns",
            "range": "± 2080.600758842289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141376.923076923,
            "unit": "ns",
            "range": "± 21768.063527645027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2166181.8181818184,
            "unit": "ns",
            "range": "± 69624.10125586616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2672081.25,
            "unit": "ns",
            "range": "± 81990.62667709783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2232552.1739130435,
            "unit": "ns",
            "range": "± 41523.157499107074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2931542.8571428573,
            "unit": "ns",
            "range": "± 64583.369155135995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169247.8260869565,
            "unit": "ns",
            "range": "± 7787.086004398417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162208.69565217392,
            "unit": "ns",
            "range": "± 6204.508256527185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146561.76470588235,
            "unit": "ns",
            "range": "± 2724.6289547709926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2662066.6666666665,
            "unit": "ns",
            "range": "± 17758.830496574392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2586573.3333333335,
            "unit": "ns",
            "range": "± 45622.41721326208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9594.565217391304,
            "unit": "ns",
            "range": "± 1235.3194301884232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51333.50515463918,
            "unit": "ns",
            "range": "± 4536.419302259289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44539.28571428572,
            "unit": "ns",
            "range": "± 1033.6341088119486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50323.71134020619,
            "unit": "ns",
            "range": "± 8884.698611422198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2192.6315789473683,
            "unit": "ns",
            "range": "± 293.63535979863906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9270.652173913044,
            "unit": "ns",
            "range": "± 832.5174378239391"
          }
        ]
      }
    ]
  }
}