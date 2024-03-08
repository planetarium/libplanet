window.BENCHMARK_DATA = {
  "lastUpdate": 1709892131960,
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
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "9b6139980788f2ec99acaf0bbf8ba477ad54a74d",
          "message": "Version bump",
          "timestamp": "2024-03-08T18:51:42+09:00",
          "tree_id": "eef6bb61ac6238a8d895425e39d5afc73e6b5ad5",
          "url": "https://github.com/planetarium/libplanet/commit/9b6139980788f2ec99acaf0bbf8ba477ad54a74d"
        },
        "date": 1709892068452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970038.775510204,
            "unit": "ns",
            "range": "± 101695.76077354408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724383.3333333333,
            "unit": "ns",
            "range": "± 66421.11436856705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545908.4210526317,
            "unit": "ns",
            "range": "± 137893.36973797242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6821151.3513513515,
            "unit": "ns",
            "range": "± 177109.86016472252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37054.166666666664,
            "unit": "ns",
            "range": "± 4780.24259826273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5117030,
            "unit": "ns",
            "range": "± 43619.18319795939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12976840,
            "unit": "ns",
            "range": "± 149004.01624500882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32049335.714285713,
            "unit": "ns",
            "range": "± 196405.6070292482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66479733.333333336,
            "unit": "ns",
            "range": "± 957942.2952100929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128031150,
            "unit": "ns",
            "range": "± 1040483.8783728685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3346097.3958333335,
            "unit": "ns",
            "range": "± 5724.12867619349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087368.45703125,
            "unit": "ns",
            "range": "± 1972.3318018928048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738936.6796875,
            "unit": "ns",
            "range": "± 1877.692813097596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904701.953125,
            "unit": "ns",
            "range": "± 6213.015701576942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617793.359375,
            "unit": "ns",
            "range": "± 1420.8177824551228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554302.7994791666,
            "unit": "ns",
            "range": "± 1550.8256579493927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2115946.6666666665,
            "unit": "ns",
            "range": "± 94215.485910283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2304526.086956522,
            "unit": "ns",
            "range": "± 87006.17713647337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801738.4615384615,
            "unit": "ns",
            "range": "± 32905.15507894212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2920076.923076923,
            "unit": "ns",
            "range": "± 79381.11265379093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883944.444444444,
            "unit": "ns",
            "range": "± 298062.1332080364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176697.64705882352,
            "unit": "ns",
            "range": "± 8949.088494028292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165795.8904109589,
            "unit": "ns",
            "range": "± 8064.711167180488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141044,
            "unit": "ns",
            "range": "± 3466.3958227530798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2846206.6666666665,
            "unit": "ns",
            "range": "± 42353.73936378272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538356.25,
            "unit": "ns",
            "range": "± 46527.22455724175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10977.41935483871,
            "unit": "ns",
            "range": "± 1395.966941823766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53002.29885057471,
            "unit": "ns",
            "range": "± 4365.48239193574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45378.37837837838,
            "unit": "ns",
            "range": "± 1515.1338655810682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54580.434782608696,
            "unit": "ns",
            "range": "± 9315.76991126638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2311.2244897959185,
            "unit": "ns",
            "range": "± 373.3058371548195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9555.434782608696,
            "unit": "ns",
            "range": "± 1094.3776524808072"
          }
        ]
      }
    ]
  }
}