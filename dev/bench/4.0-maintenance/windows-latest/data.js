window.BENCHMARK_DATA = {
  "lastUpdate": 1705914976375,
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
          "id": "42fbee9dc6e6cde218c38433906f0c4d6353aca9",
          "message": "Merge pull request #3627 from greymistcube/release/4.0.0\n\n🚀 Release 4.0.0",
          "timestamp": "2024-01-22T18:01:32+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/planetarium/libplanet/commit/42fbee9dc6e6cde218c38433906f0c4d6353aca9"
        },
        "date": 1705914907742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055541.836734694,
            "unit": "ns",
            "range": "± 133246.3565378515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1816072.8813559322,
            "unit": "ns",
            "range": "± 79629.59039008411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631338.7096774194,
            "unit": "ns",
            "range": "± 153437.25883342992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11241306.593406593,
            "unit": "ns",
            "range": "± 1105201.7639631033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37382.02247191011,
            "unit": "ns",
            "range": "± 2562.427905759799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5378200,
            "unit": "ns",
            "range": "± 45760.48009430778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13978985.714285715,
            "unit": "ns",
            "range": "± 129197.29014271073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34650450,
            "unit": "ns",
            "range": "± 171821.53047081537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69964966.66666667,
            "unit": "ns",
            "range": "± 569694.2559286474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140691840,
            "unit": "ns",
            "range": "± 1110202.27745089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3436123.8020833335,
            "unit": "ns",
            "range": "± 9471.424686908096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077495.8426339286,
            "unit": "ns",
            "range": "± 4292.351612351821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751438.0143229166,
            "unit": "ns",
            "range": "± 1617.6753481392166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956232.8385416667,
            "unit": "ns",
            "range": "± 7898.297136993689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626415.1517427885,
            "unit": "ns",
            "range": "± 696.1486199341266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567587.9231770834,
            "unit": "ns",
            "range": "± 761.5395858610664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2308875,
            "unit": "ns",
            "range": "± 69805.69512173467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501715.3846153845,
            "unit": "ns",
            "range": "± 50764.554108611585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2933258.8235294116,
            "unit": "ns",
            "range": "± 56376.580452608265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009384.5679012346,
            "unit": "ns",
            "range": "± 156651.015126374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12723489.01098901,
            "unit": "ns",
            "range": "± 1423086.6924830491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188102.77777777778,
            "unit": "ns",
            "range": "± 9226.858715334198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180390.25974025973,
            "unit": "ns",
            "range": "± 9182.538631616042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159209.5744680851,
            "unit": "ns",
            "range": "± 11841.50772466579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2955616.6666666665,
            "unit": "ns",
            "range": "± 38061.222611296485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2612433.3333333335,
            "unit": "ns",
            "range": "± 45164.819853299006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15703.030303030304,
            "unit": "ns",
            "range": "± 2187.6021046936553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60465.591397849465,
            "unit": "ns",
            "range": "± 5931.117180189798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48922.82608695652,
            "unit": "ns",
            "range": "± 3865.971673513775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69176.76767676767,
            "unit": "ns",
            "range": "± 15446.483176008047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3260.4166666666665,
            "unit": "ns",
            "range": "± 788.5335045001564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11821.176470588236,
            "unit": "ns",
            "range": "± 1236.748243777769"
          }
        ]
      }
    ]
  }
}