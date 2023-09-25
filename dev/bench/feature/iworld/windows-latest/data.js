window.BENCHMARK_DATA = {
  "lastUpdate": 1695608595065,
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
          "id": "dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-09-25T11:02:16+09:00",
          "tree_id": "2c97b4e23f376902560b604a8b270dc00b79067d",
          "url": "https://github.com/planetarium/libplanet/commit/dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9"
        },
        "date": 1695608518246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622277.1739130435,
            "unit": "ns",
            "range": "± 116791.3722758634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3143758.947368421,
            "unit": "ns",
            "range": "± 236895.3124091597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195654.255319149,
            "unit": "ns",
            "range": "± 164964.54338158673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5505983.333333333,
            "unit": "ns",
            "range": "± 196560.16383827646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59506.593406593405,
            "unit": "ns",
            "range": "± 5836.471578650964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9447775,
            "unit": "ns",
            "range": "± 238060.9261622272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24985191.666666668,
            "unit": "ns",
            "range": "± 363361.64919548214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63819995.652173914,
            "unit": "ns",
            "range": "± 1594955.30387026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129647981.96721311,
            "unit": "ns",
            "range": "± 5827454.707260229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255391990,
            "unit": "ns",
            "range": "± 5191948.510702843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5672387.060546875,
            "unit": "ns",
            "range": "± 110000.7054453915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1811207.6583059211,
            "unit": "ns",
            "range": "± 36605.457405434456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304419.4661458333,
            "unit": "ns",
            "range": "± 19942.314309565667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3322324.094460227,
            "unit": "ns",
            "range": "± 79836.3232093227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046370.9134615385,
            "unit": "ns",
            "range": "± 28388.258103450295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942132.3567708334,
            "unit": "ns",
            "range": "± 13982.217392110608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4086333.3333333335,
            "unit": "ns",
            "range": "± 47045.34240946963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4318546.153846154,
            "unit": "ns",
            "range": "± 50839.3321386866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4991350,
            "unit": "ns",
            "range": "± 142202.77082498439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4657790.476190476,
            "unit": "ns",
            "range": "± 107383.20122236022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7429181.818181818,
            "unit": "ns",
            "range": "± 235476.61568421376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312366.6666666667,
            "unit": "ns",
            "range": "± 11249.252911056385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293257.5,
            "unit": "ns",
            "range": "± 9868.69922324996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271172.9166666667,
            "unit": "ns",
            "range": "± 17314.195448679897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4992940,
            "unit": "ns",
            "range": "± 131280.64504985447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4658007.692307692,
            "unit": "ns",
            "range": "± 57405.52327576243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26316.304347826088,
            "unit": "ns",
            "range": "± 2148.2053421562846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106183.87096774194,
            "unit": "ns",
            "range": "± 7833.210934756391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90107.21649484536,
            "unit": "ns",
            "range": "± 8135.829288588744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106896.39175257731,
            "unit": "ns",
            "range": "± 18178.97745253927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7602.105263157895,
            "unit": "ns",
            "range": "± 1007.8393729001408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26523.958333333332,
            "unit": "ns",
            "range": "± 2407.039885164333"
          }
        ]
      }
    ]
  }
}