window.BENCHMARK_DATA = {
  "lastUpdate": 1733551959654,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cd60cf1a4a53da7d0e90c16c4efe9949c841034b",
          "message": "feat: delayed consensus step transition",
          "timestamp": "2024-12-06T19:00:24+09:00",
          "tree_id": "c1104c807c075cc1878d91a6db932c71b4c684eb",
          "url": "https://github.com/planetarium/libplanet/commit/cd60cf1a4a53da7d0e90c16c4efe9949c841034b"
        },
        "date": 1733479716975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10628569.666666666,
            "unit": "ns",
            "range": "± 83278.15376777812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26427122.153846152,
            "unit": "ns",
            "range": "± 170000.41260040426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66646085.86666667,
            "unit": "ns",
            "range": "± 127269.85921927955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134485374.57142857,
            "unit": "ns",
            "range": "± 255728.95454870068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270615107.53333336,
            "unit": "ns",
            "range": "± 470794.15448805626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12851.702702702703,
            "unit": "ns",
            "range": "± 438.14538840592786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53633.06470588235,
            "unit": "ns",
            "range": "± 2782.718157481564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106029.84,
            "unit": "ns",
            "range": "± 4263.457452991573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91520,
            "unit": "ns",
            "range": "± 3347.496931636693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2794629.8192771086,
            "unit": "ns",
            "range": "± 148528.0325205251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666262.62,
            "unit": "ns",
            "range": "± 163004.56448580718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5330.397849462365,
            "unit": "ns",
            "range": "± 605.8807304746887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27562.13186813187,
            "unit": "ns",
            "range": "± 2121.4884408452017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23186.27659574468,
            "unit": "ns",
            "range": "± 2386.446011925149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30406.958333333332,
            "unit": "ns",
            "range": "± 5794.845408076801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1276.3333333333333,
            "unit": "ns",
            "range": "± 221.97117582819334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4824.930232558139,
            "unit": "ns",
            "range": "± 454.442924409466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678905.4659090909,
            "unit": "ns",
            "range": "± 47299.5356128813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268841.8333333333,
            "unit": "ns",
            "range": "± 40257.86201725074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1049448.2272727273,
            "unit": "ns",
            "range": "± 54397.05192141259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8789765.27,
            "unit": "ns",
            "range": "± 1345045.931263946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129849.1153846155,
            "unit": "ns",
            "range": "± 20262.669191308687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270828.1578947366,
            "unit": "ns",
            "range": "± 78097.19849649808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2569266.565217391,
            "unit": "ns",
            "range": "± 64045.213270020206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263090.6666666665,
            "unit": "ns",
            "range": "± 22787.231820925637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2792157.1428571427,
            "unit": "ns",
            "range": "± 64741.44251813186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036987.4383680555,
            "unit": "ns",
            "range": "± 64708.29565250631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923264.6776041667,
            "unit": "ns",
            "range": "± 8593.19322750295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613349.1639322917,
            "unit": "ns",
            "range": "± 6505.070432935919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1656563.4585658482,
            "unit": "ns",
            "range": "± 5605.343625807438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460220.1199869792,
            "unit": "ns",
            "range": "± 859.9501721703485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425780.47662760416,
            "unit": "ns",
            "range": "± 1163.8067472727705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "611edf443e1eb2c1703d360689f141598fedf0b1",
          "message": "test: add unit test for delayed consensus",
          "timestamp": "2024-12-07T15:02:44+09:00",
          "tree_id": "67ef8e106f212a77f0d1174f03d314824b774db5",
          "url": "https://github.com/planetarium/libplanet/commit/611edf443e1eb2c1703d360689f141598fedf0b1"
        },
        "date": 1733551851087,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10548190.73076923,
            "unit": "ns",
            "range": "± 129134.87259847992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26303318.92857143,
            "unit": "ns",
            "range": "± 120786.31832573925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66459360.733333334,
            "unit": "ns",
            "range": "± 101656.03539982032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134270881.42857143,
            "unit": "ns",
            "range": "± 126440.91831956341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270520991.8666667,
            "unit": "ns",
            "range": "± 384585.2779625767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12692.39393939394,
            "unit": "ns",
            "range": "± 399.3952412236796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53811.33734939759,
            "unit": "ns",
            "range": "± 2847.160469391576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105660.04166666667,
            "unit": "ns",
            "range": "± 4169.726859559669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92530.16326530612,
            "unit": "ns",
            "range": "± 3436.1494095070693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839702.815217391,
            "unit": "ns",
            "range": "± 159016.96927064244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2706687.1494252873,
            "unit": "ns",
            "range": "± 147147.1747156669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5045.652173913043,
            "unit": "ns",
            "range": "± 607.9405233123813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27164.393617021276,
            "unit": "ns",
            "range": "± 2084.7258050183377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22822.055555555555,
            "unit": "ns",
            "range": "± 1712.4691573445723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30160.23404255319,
            "unit": "ns",
            "range": "± 5297.183902234985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1364.5111111111112,
            "unit": "ns",
            "range": "± 217.4447750860772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4870.659090909091,
            "unit": "ns",
            "range": "± 491.10358685297103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679069.3863636364,
            "unit": "ns",
            "range": "± 40490.476114599325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279459.775,
            "unit": "ns",
            "range": "± 44840.06125392526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1045831.7701149426,
            "unit": "ns",
            "range": "± 56506.525852329905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8595827.38,
            "unit": "ns",
            "range": "± 1183996.4880282495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114759.8076923075,
            "unit": "ns",
            "range": "± 55566.915907233306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251320.8076923075,
            "unit": "ns",
            "range": "± 60427.295114720626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2541979.6818181816,
            "unit": "ns",
            "range": "± 49204.36887627954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2278695.9166666665,
            "unit": "ns",
            "range": "± 75646.60058016959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2792971.9318181816,
            "unit": "ns",
            "range": "± 91899.47524722964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045115.314453125,
            "unit": "ns",
            "range": "± 39012.6377723199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918846.1266927083,
            "unit": "ns",
            "range": "± 6272.150921184397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615353.6923828125,
            "unit": "ns",
            "range": "± 5941.839765852663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1652245.6641927084,
            "unit": "ns",
            "range": "± 8271.674136837197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454386.4582356771,
            "unit": "ns",
            "range": "± 937.8612453064482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422747.5585588728,
            "unit": "ns",
            "range": "± 1541.9479809060138"
          }
        ]
      }
    ]
  }
}