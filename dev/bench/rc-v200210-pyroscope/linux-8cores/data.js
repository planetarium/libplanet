window.BENCHMARK_DATA = {
  "lastUpdate": 1722299377247,
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
          "id": "bc059152bb158e6b435e0ec3320b91fa1572d4bc",
          "message": "use cache",
          "timestamp": "2024-07-30T09:20:05+09:00",
          "tree_id": "11512283d7a990c058267a16d6a6a1fe8e4d4321",
          "url": "https://github.com/planetarium/libplanet/commit/bc059152bb158e6b435e0ec3320b91fa1572d4bc"
        },
        "date": 1722299350906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022161.0131578947,
            "unit": "ns",
            "range": "± 49113.27736881841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1923712.543478261,
            "unit": "ns",
            "range": "± 68641.44829246361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1685176.0166666666,
            "unit": "ns",
            "range": "± 73270.26187619707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8372985.256410256,
            "unit": "ns",
            "range": "± 290168.34954608843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201687.11538461538,
            "unit": "ns",
            "range": "± 8142.999911276726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193356.515625,
            "unit": "ns",
            "range": "± 7960.570175782731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166255.2857142857,
            "unit": "ns",
            "range": "± 2178.55771550359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073605.5,
            "unit": "ns",
            "range": "± 44902.020738810534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2711731.6153846155,
            "unit": "ns",
            "range": "± 27819.985548577788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12815.648648648648,
            "unit": "ns",
            "range": "± 656.4917016331717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61568.489583333336,
            "unit": "ns",
            "range": "± 4752.799305882337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51920.125,
            "unit": "ns",
            "range": "± 1334.9805832328407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51547.270833333336,
            "unit": "ns",
            "range": "± 7616.614231200751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2736.221649484536,
            "unit": "ns",
            "range": "± 245.06898443210682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12254.577922077922,
            "unit": "ns",
            "range": "± 638.3136451915553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31970.5,
            "unit": "ns",
            "range": "± 242.14527320047637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10347853.5,
            "unit": "ns",
            "range": "± 49462.86319553287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27433873.4,
            "unit": "ns",
            "range": "± 182671.75303016687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69959128.2,
            "unit": "ns",
            "range": "± 364496.10463256575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140881742.5,
            "unit": "ns",
            "range": "± 537648.0222518127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284127049.8666667,
            "unit": "ns",
            "range": "± 787015.848014862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3806979.6505408655,
            "unit": "ns",
            "range": "± 6124.426386594154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205207.4201822917,
            "unit": "ns",
            "range": "± 2140.0682959705255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766532.7392578125,
            "unit": "ns",
            "range": "± 1018.7427141753732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955943.9329427083,
            "unit": "ns",
            "range": "± 2462.7399079346505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622148.1311197917,
            "unit": "ns",
            "range": "± 1033.4930913681912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573264.6395833333,
            "unit": "ns",
            "range": "± 395.06290794392476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393283.925,
            "unit": "ns",
            "range": "± 77834.63497282688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2557158.888888889,
            "unit": "ns",
            "range": "± 82608.87599206889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3067628.6428571427,
            "unit": "ns",
            "range": "± 38011.57234642173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2566439.404761905,
            "unit": "ns",
            "range": "± 59672.6806000072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3219819,
            "unit": "ns",
            "range": "± 72082.37315446092"
          }
        ]
      }
    ]
  }
}