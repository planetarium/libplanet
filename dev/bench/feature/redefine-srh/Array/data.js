window.BENCHMARK_DATA = {
  "lastUpdate": 1713415820653,
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415809526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780925.466666667,
            "unit": "ns",
            "range": "± 62517.241238907925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14309099.692307692,
            "unit": "ns",
            "range": "± 65431.64767193397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36628208.06666667,
            "unit": "ns",
            "range": "± 663210.9733103106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72576603.85714285,
            "unit": "ns",
            "range": "± 239533.1641309683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146381875.42857143,
            "unit": "ns",
            "range": "± 397064.34922483366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85463.59433962264,
            "unit": "ns",
            "range": "± 3533.8189533102905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110547.76712328767,
            "unit": "ns",
            "range": "± 5346.020317645817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106795.7435897436,
            "unit": "ns",
            "range": "± 5437.097263630581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91131.19444444444,
            "unit": "ns",
            "range": "± 2748.9992653893364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083443.586956522,
            "unit": "ns",
            "range": "± 147060.0218032979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863072.39,
            "unit": "ns",
            "range": "± 187170.6431236781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5323.0625,
            "unit": "ns",
            "range": "± 954.3386336262296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27906.62222222222,
            "unit": "ns",
            "range": "± 2713.3735235223903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25061.58510638298,
            "unit": "ns",
            "range": "± 1792.121554114573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29588.84375,
            "unit": "ns",
            "range": "± 5455.30649691921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1188.9891304347825,
            "unit": "ns",
            "range": "± 217.7064509417512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5124.891304347826,
            "unit": "ns",
            "range": "± 596.7162606697848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1178087.2626262626,
            "unit": "ns",
            "range": "± 130636.9700379086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858996.5172413792,
            "unit": "ns",
            "range": "± 113511.44365953245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571314.09375,
            "unit": "ns",
            "range": "± 148503.62902119532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10616258.63,
            "unit": "ns",
            "range": "± 2001244.4437067416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2500142.9484536084,
            "unit": "ns",
            "range": "± 142374.85541493763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671025.310810811,
            "unit": "ns",
            "range": "± 132983.2207017498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3526282.933333333,
            "unit": "ns",
            "range": "± 65965.88911536743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3360113.714285714,
            "unit": "ns",
            "range": "± 121081.2078868187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12831184.53,
            "unit": "ns",
            "range": "± 1969243.6672622655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031895.382512019,
            "unit": "ns",
            "range": "± 25570.063614858584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926220.8543526785,
            "unit": "ns",
            "range": "± 3991.9186203451204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617191.6772135417,
            "unit": "ns",
            "range": "± 5895.316921679685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651609.892299107,
            "unit": "ns",
            "range": "± 14143.03371802876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454263.0899739583,
            "unit": "ns",
            "range": "± 781.7087547445644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428408.3519856771,
            "unit": "ns",
            "range": "± 930.4888425379921"
          }
        ]
      }
    ]
  }
}