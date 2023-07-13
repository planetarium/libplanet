window.BENCHMARK_DATA = {
  "lastUpdate": 1689232775208,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "c36ff21ec0d4c6950d939d947c0c4b66abf52dde",
          "message": "upgrade bencodex to 0.11.0-dev.20230713023748",
          "timestamp": "2023-07-13T16:04:43+09:00",
          "tree_id": "ed6ad96f66b3a43c2b3855d8a84bec52fa144294",
          "url": "https://github.com/planetarium/libplanet/commit/c36ff21ec0d4c6950d939d947c0c4b66abf52dde"
        },
        "date": 1689232749758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339005.6458333333,
            "unit": "ns",
            "range": "± 13311.831572254338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319833.6119402985,
            "unit": "ns",
            "range": "± 15163.460950543024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308635.53846153844,
            "unit": "ns",
            "range": "± 4933.721374638428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4798171.357142857,
            "unit": "ns",
            "range": "± 29343.501428653784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4342128.357142857,
            "unit": "ns",
            "range": "± 45334.29942041192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29924.416666666668,
            "unit": "ns",
            "range": "± 3297.853865667526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128603.08510638298,
            "unit": "ns",
            "range": "± 8303.202449501649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124337.33333333333,
            "unit": "ns",
            "range": "± 12442.381084873765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136316.78125,
            "unit": "ns",
            "range": "± 17634.917231807394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9590.938775510203,
            "unit": "ns",
            "range": "± 1432.9436418606983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28060.452631578948,
            "unit": "ns",
            "range": "± 2167.825323537545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1715020.606060606,
            "unit": "ns",
            "range": "± 122130.43027317383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171653.052631579,
            "unit": "ns",
            "range": "± 109358.38945510022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2665900.711111111,
            "unit": "ns",
            "range": "± 149469.33761453163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5954440.055555556,
            "unit": "ns",
            "range": "± 116711.61645670883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6308777.228236607,
            "unit": "ns",
            "range": "± 54410.79610907002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1944654.680889423,
            "unit": "ns",
            "range": "± 1982.5709484669958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406540.5131510417,
            "unit": "ns",
            "range": "± 3460.6826483601776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2791776.2877604165,
            "unit": "ns",
            "range": "± 50442.45362644532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843668.854296875,
            "unit": "ns",
            "range": "± 913.6974968339576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781731.2089146206,
            "unit": "ns",
            "range": "± 437.3027355736848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3984246.75,
            "unit": "ns",
            "range": "± 112940.03787543882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4173311.1333333333,
            "unit": "ns",
            "range": "± 39253.901447347824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4987475.333333333,
            "unit": "ns",
            "range": "± 78978.44080115124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5102069.285714285,
            "unit": "ns",
            "range": "± 87878.48122215181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7649972.066666666,
            "unit": "ns",
            "range": "± 130308.14968509215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9320206.266666668,
            "unit": "ns",
            "range": "± 108578.31646424401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23848551,
            "unit": "ns",
            "range": "± 265864.4958099628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58923422.85714286,
            "unit": "ns",
            "range": "± 172930.83496271304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118531159.33333333,
            "unit": "ns",
            "range": "± 376388.886666184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236273394.33333334,
            "unit": "ns",
            "range": "± 357629.2000893157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63461.67021276596,
            "unit": "ns",
            "range": "± 6096.1107015678335"
          }
        ]
      }
    ]
  }
}