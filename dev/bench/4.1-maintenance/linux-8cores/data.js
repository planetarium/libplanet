window.BENCHMARK_DATA = {
  "lastUpdate": 1709892108730,
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
        "date": 1709892085809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962893.2765957447,
            "unit": "ns",
            "range": "± 69443.78191404055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843137.075,
            "unit": "ns",
            "range": "± 64438.2269716559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570487.0161290322,
            "unit": "ns",
            "range": "± 99700.18325182812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7532133.454545454,
            "unit": "ns",
            "range": "± 182016.76382233307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5658411.866666666,
            "unit": "ns",
            "range": "± 12767.136908410406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14312310.733333332,
            "unit": "ns",
            "range": "± 214868.87842604538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37256109.333333336,
            "unit": "ns",
            "range": "± 117441.20645586678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74809305.07142857,
            "unit": "ns",
            "range": "± 245322.48448003302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149444801.35714287,
            "unit": "ns",
            "range": "± 543278.8926605189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685420.5691964286,
            "unit": "ns",
            "range": "± 6456.192462659372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201109.3311197916,
            "unit": "ns",
            "range": "± 2721.2997252211035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763741.8138020834,
            "unit": "ns",
            "range": "± 1565.4661435667601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918704.0916573661,
            "unit": "ns",
            "range": "± 3076.0224773907985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611146.7869140625,
            "unit": "ns",
            "range": "± 313.35335952603776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559832.6211588542,
            "unit": "ns",
            "range": "± 619.3165581525933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384411.433333333,
            "unit": "ns",
            "range": "± 39296.85227028217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508116.474576271,
            "unit": "ns",
            "range": "± 111128.32711800691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3117257.2666666666,
            "unit": "ns",
            "range": "± 43216.98469098639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3225450.2615384613,
            "unit": "ns",
            "range": "± 138064.8308283645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9055309.554054054,
            "unit": "ns",
            "range": "± 223468.625981733"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36017.27777777778,
            "unit": "ns",
            "range": "± 1680.0491957082684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197635,
            "unit": "ns",
            "range": "± 6643.555728744227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192425.13333333333,
            "unit": "ns",
            "range": "± 7165.997413923873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163243,
            "unit": "ns",
            "range": "± 1834.0470401422492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3254640,
            "unit": "ns",
            "range": "± 62467.44748014129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788642.8571428573,
            "unit": "ns",
            "range": "± 31546.725049720095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12231.3875,
            "unit": "ns",
            "range": "± 647.4798661402239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60708.81052631579,
            "unit": "ns",
            "range": "± 4507.134973111573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51587.03846153846,
            "unit": "ns",
            "range": "± 788.4579480843831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57560.010204081635,
            "unit": "ns",
            "range": "± 9984.821720677302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2840.4,
            "unit": "ns",
            "range": "± 288.0816004375119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11763.719101123595,
            "unit": "ns",
            "range": "± 763.3080515511541"
          }
        ]
      }
    ]
  }
}