window.BENCHMARK_DATA = {
  "lastUpdate": 1686719080560,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686719009892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591230.9278350514,
            "unit": "ns",
            "range": "± 274419.97670876386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2939579.1666666665,
            "unit": "ns",
            "range": "± 389587.15068961936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2524544.3298969073,
            "unit": "ns",
            "range": "± 374320.37385804066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6552272.916666667,
            "unit": "ns",
            "range": "± 742580.9445836673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62098.94736842105,
            "unit": "ns",
            "range": "± 18370.515777843826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9026222.916666666,
            "unit": "ns",
            "range": "± 953658.1246060838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22233511.111111112,
            "unit": "ns",
            "range": "± 2674439.2986609777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61920586.59793814,
            "unit": "ns",
            "range": "± 5026225.356683947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132981005,
            "unit": "ns",
            "range": "± 7871690.2642339375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225087412.96296296,
            "unit": "ns",
            "range": "± 5937038.358872995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5579238.020833333,
            "unit": "ns",
            "range": "± 96134.56121912318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898503.0838815789,
            "unit": "ns",
            "range": "± 41744.268952659346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407397.021484375,
            "unit": "ns",
            "range": "± 27321.47242241673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2992171.319901316,
            "unit": "ns",
            "range": "± 63393.00268775536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007476.1513157894,
            "unit": "ns",
            "range": "± 21534.36315875864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938765.0607638889,
            "unit": "ns",
            "range": "± 19462.703901203902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276027.419354839,
            "unit": "ns",
            "range": "± 396895.5848147492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643976.595744681,
            "unit": "ns",
            "range": "± 444666.4457711399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4900799.462365591,
            "unit": "ns",
            "range": "± 576275.7481984334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5015378,
            "unit": "ns",
            "range": "± 708631.4747355346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8412715.151515152,
            "unit": "ns",
            "range": "± 1100452.4851691816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321743.8775510204,
            "unit": "ns",
            "range": "± 59887.089750882136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306987.36842105264,
            "unit": "ns",
            "range": "± 49190.07044348648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277039.175257732,
            "unit": "ns",
            "range": "± 62242.53227747658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4487613.978494624,
            "unit": "ns",
            "range": "± 526705.2761788624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876463.829787234,
            "unit": "ns",
            "range": "± 450797.8091108624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28170.70707070707,
            "unit": "ns",
            "range": "± 11125.364039219281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104468.08510638298,
            "unit": "ns",
            "range": "± 23958.760324644394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100803.2258064516,
            "unit": "ns",
            "range": "± 23130.454475943065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130677.31958762887,
            "unit": "ns",
            "range": "± 28905.375455796282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5790.588235294118,
            "unit": "ns",
            "range": "± 1762.4133568309494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28609,
            "unit": "ns",
            "range": "± 10555.127960504613"
          }
        ]
      }
    ]
  }
}