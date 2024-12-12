window.BENCHMARK_DATA = {
  "lastUpdate": 1734001042384,
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
          "id": "842da15cd149225a24bb4c8280524d97d16dfe45",
          "message": "chore: add logging",
          "timestamp": "2024-12-09T14:14:16+09:00",
          "tree_id": "7e1b1e7376fbd4b87456ff2648c111f2a1d790b9",
          "url": "https://github.com/planetarium/libplanet/commit/842da15cd149225a24bb4c8280524d97d16dfe45"
        },
        "date": 1733721731093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10637570.76923077,
            "unit": "ns",
            "range": "± 102761.72548680584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26148602.230769232,
            "unit": "ns",
            "range": "± 83132.88804092903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66349827.78571428,
            "unit": "ns",
            "range": "± 103575.5533483268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134436738.42857143,
            "unit": "ns",
            "range": "± 248072.02429217525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269787649.21428573,
            "unit": "ns",
            "range": "± 218903.01934776036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12920.857142857143,
            "unit": "ns",
            "range": "± 373.0015603468222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53945.17567567567,
            "unit": "ns",
            "range": "± 2634.773787997894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107830.02173913043,
            "unit": "ns",
            "range": "± 4148.858330186914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93231.03389830509,
            "unit": "ns",
            "range": "± 4136.283188989935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2921505.8947368423,
            "unit": "ns",
            "range": "± 55030.9023053762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2739619.845238095,
            "unit": "ns",
            "range": "± 147033.08774955565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5085.597701149425,
            "unit": "ns",
            "range": "± 505.16219959695184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27253.543478260868,
            "unit": "ns",
            "range": "± 2051.601847568385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22319.191011235955,
            "unit": "ns",
            "range": "± 1166.6735139275693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30745.915789473685,
            "unit": "ns",
            "range": "± 5420.564930249052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1356.2978723404256,
            "unit": "ns",
            "range": "± 243.51555247355276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5061.967391304348,
            "unit": "ns",
            "range": "± 804.0002385200969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682363.5561797753,
            "unit": "ns",
            "range": "± 43518.16717223852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272352.9189189188,
            "unit": "ns",
            "range": "± 40948.54954450522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1038274.9266666666,
            "unit": "ns",
            "range": "± 51132.39175327212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8757179.52,
            "unit": "ns",
            "range": "± 1270492.3172702615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114833.0833333335,
            "unit": "ns",
            "range": "± 21962.899160581663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2268944.1304347827,
            "unit": "ns",
            "range": "± 87050.36938861155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2571070.527777778,
            "unit": "ns",
            "range": "± 83746.92474199912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2240252.714285714,
            "unit": "ns",
            "range": "± 65054.68985109258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2799839.535714286,
            "unit": "ns",
            "range": "± 78456.58802896558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3026219.363839286,
            "unit": "ns",
            "range": "± 26888.117418927126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913405.8126302083,
            "unit": "ns",
            "range": "± 6273.135299689472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615789.0834635417,
            "unit": "ns",
            "range": "± 4728.481818839867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631751.2621372768,
            "unit": "ns",
            "range": "± 8560.77836781815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465646.2152944711,
            "unit": "ns",
            "range": "± 328.0206889852173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414267.4905482701,
            "unit": "ns",
            "range": "± 956.1282548381395"
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
          "id": "e8bab4f85bdad8168f7881cf95d35cda7d6f1f13",
          "message": "chore: rebuild connection via seed peer",
          "timestamp": "2024-12-11T14:55:49+09:00",
          "tree_id": "18c9f91fcd2649c219d65b8127e518443705f1f3",
          "url": "https://github.com/planetarium/libplanet/commit/e8bab4f85bdad8168f7881cf95d35cda7d6f1f13"
        },
        "date": 1733897055568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10643249.5,
            "unit": "ns",
            "range": "± 174497.59960182832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26378140.35714286,
            "unit": "ns",
            "range": "± 175657.15302810632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66895207.85714286,
            "unit": "ns",
            "range": "± 108002.90702274007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133998463.83333333,
            "unit": "ns",
            "range": "± 267167.91540384875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271455930.6666667,
            "unit": "ns",
            "range": "± 225576.42005289203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12858.156862745098,
            "unit": "ns",
            "range": "± 523.7981432784587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54617.53846153846,
            "unit": "ns",
            "range": "± 3134.9717925638406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106929.34,
            "unit": "ns",
            "range": "± 4299.923072923657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93990,
            "unit": "ns",
            "range": "± 3861.23614261283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863072.4507042253,
            "unit": "ns",
            "range": "± 138841.36903426243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2641394.564102564,
            "unit": "ns",
            "range": "± 134092.75423286518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5262.2967032967035,
            "unit": "ns",
            "range": "± 643.7166818908506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27779.59574468085,
            "unit": "ns",
            "range": "± 2545.78527639903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22091.115384615383,
            "unit": "ns",
            "range": "± 851.2972258955718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30479.364583333332,
            "unit": "ns",
            "range": "± 6698.82542747496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1534.3191489361702,
            "unit": "ns",
            "range": "± 234.6913879680392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4899.965909090909,
            "unit": "ns",
            "range": "± 452.5718447788377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679231.2083333334,
            "unit": "ns",
            "range": "± 47852.84021926888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1284724.5454545454,
            "unit": "ns",
            "range": "± 54106.66492758409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1036873.275,
            "unit": "ns",
            "range": "± 52283.12717879741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9029942.636363637,
            "unit": "ns",
            "range": "± 1356083.0306548073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2102565.375,
            "unit": "ns",
            "range": "± 75949.72225899239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249040.2714285715,
            "unit": "ns",
            "range": "± 72797.50414721556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2566581.714285714,
            "unit": "ns",
            "range": "± 51734.170656484726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2260131.4285714286,
            "unit": "ns",
            "range": "± 35604.1829364392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2827173.180327869,
            "unit": "ns",
            "range": "± 119599.93522176454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021487.9076286764,
            "unit": "ns",
            "range": "± 57762.331973911736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913860.8944010417,
            "unit": "ns",
            "range": "± 4326.714537939937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613881.4674479166,
            "unit": "ns",
            "range": "± 5852.272057506166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640483.5027901786,
            "unit": "ns",
            "range": "± 12811.130237014437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469259.45755440847,
            "unit": "ns",
            "range": "± 528.0310924950445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424163.5808268229,
            "unit": "ns",
            "range": "± 1208.8101296080856"
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
          "id": "323abe7931a3f0be1678cee6794e1d9cb4679150",
          "message": "logging: add log when failed to receive multipart message",
          "timestamp": "2024-12-11T16:56:18+09:00",
          "tree_id": "c4762782f3d13ee0c2cb7fa841c45666f3a5c231",
          "url": "https://github.com/planetarium/libplanet/commit/323abe7931a3f0be1678cee6794e1d9cb4679150"
        },
        "date": 1733904269090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10567597.666666666,
            "unit": "ns",
            "range": "± 89472.10533033423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26301624.64285714,
            "unit": "ns",
            "range": "± 138332.96913862866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66777544.928571425,
            "unit": "ns",
            "range": "± 139218.29101006713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134380902.14285713,
            "unit": "ns",
            "range": "± 202635.01624457596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269829655.8666667,
            "unit": "ns",
            "range": "± 239996.63648085532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13173.613636363636,
            "unit": "ns",
            "range": "± 493.4934893144707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54222.93421052631,
            "unit": "ns",
            "range": "± 2756.398385988626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108158.0945945946,
            "unit": "ns",
            "range": "± 3360.6454527157216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92267.98148148147,
            "unit": "ns",
            "range": "± 3876.6875205162023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2877652.883116883,
            "unit": "ns",
            "range": "± 147031.68701623948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2703319.93,
            "unit": "ns",
            "range": "± 171722.9257324904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5248.075268817204,
            "unit": "ns",
            "range": "± 752.1852113004561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26913.704545454544,
            "unit": "ns",
            "range": "± 1991.4031797571574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24069.53125,
            "unit": "ns",
            "range": "± 1814.6600084813626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30873.945652173912,
            "unit": "ns",
            "range": "± 4384.021292069821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1314.779569892473,
            "unit": "ns",
            "range": "± 237.0161600430488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4870.177777777778,
            "unit": "ns",
            "range": "± 530.0440002464451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 693552.7204301076,
            "unit": "ns",
            "range": "± 58667.703930765405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1265842.8378378379,
            "unit": "ns",
            "range": "± 40144.10764740333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1064168.197802198,
            "unit": "ns",
            "range": "± 59063.11390711537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8727717.27,
            "unit": "ns",
            "range": "± 1396015.3853806523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2101455.5384615385,
            "unit": "ns",
            "range": "± 31574.857591696236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257870.94,
            "unit": "ns",
            "range": "± 59792.46220893288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2543371.576923077,
            "unit": "ns",
            "range": "± 38192.592103403025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2274108.0166666666,
            "unit": "ns",
            "range": "± 100806.24079727248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2769314.5675675673,
            "unit": "ns",
            "range": "± 92246.65885594765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031829.100830078,
            "unit": "ns",
            "range": "± 56563.947747941034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921569.9647135417,
            "unit": "ns",
            "range": "± 8076.06828969562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613970.1027994792,
            "unit": "ns",
            "range": "± 5487.994185539859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617508.1485770089,
            "unit": "ns",
            "range": "± 13411.687023334824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467854.8909505208,
            "unit": "ns",
            "range": "± 904.3718418014911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417359.0574869792,
            "unit": "ns",
            "range": "± 612.8817013606067"
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
          "id": "9af4ea2da47c0391dbf2c0d261a4b107f23c870e",
          "message": "logs: ReceiveMessage",
          "timestamp": "2024-12-12T10:48:12+09:00",
          "tree_id": "37ae023bde8a5c8bb388de481e61a2c8f4dd94dd",
          "url": "https://github.com/planetarium/libplanet/commit/9af4ea2da47c0391dbf2c0d261a4b107f23c870e"
        },
        "date": 1733968568698,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10769263.05,
            "unit": "ns",
            "range": "± 244984.41985530322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25981571.785714287,
            "unit": "ns",
            "range": "± 85216.76636146431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66663300.13333333,
            "unit": "ns",
            "range": "± 128041.86887993578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134628893.2142857,
            "unit": "ns",
            "range": "± 247420.3313280641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270448613,
            "unit": "ns",
            "range": "± 958844.7872939241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12929.125,
            "unit": "ns",
            "range": "± 401.06348544194185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54684.91860465116,
            "unit": "ns",
            "range": "± 2961.5270989816613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106653.38333333333,
            "unit": "ns",
            "range": "± 4758.223860663987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93266.87096774194,
            "unit": "ns",
            "range": "± 2828.487425485401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2844435.26,
            "unit": "ns",
            "range": "± 179696.13002896376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2777664.3333333335,
            "unit": "ns",
            "range": "± 111755.04262603394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5097.284090909091,
            "unit": "ns",
            "range": "± 463.12250927218633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27124.25,
            "unit": "ns",
            "range": "± 2119.2871475418956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23483.270833333332,
            "unit": "ns",
            "range": "± 2158.467441102192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30890.010416666668,
            "unit": "ns",
            "range": "± 5046.311980039517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1442.3260869565217,
            "unit": "ns",
            "range": "± 224.62501640135955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4752.1648351648355,
            "unit": "ns",
            "range": "± 525.8524774906248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675874.747311828,
            "unit": "ns",
            "range": "± 45701.56232907806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268104.9795918367,
            "unit": "ns",
            "range": "± 45972.236435651124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1028663.1230769231,
            "unit": "ns",
            "range": "± 47707.792783421304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8831620.68,
            "unit": "ns",
            "range": "± 1399879.1779653581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114500.272727273,
            "unit": "ns",
            "range": "± 44001.632006726875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272859.7291666665,
            "unit": "ns",
            "range": "± 87965.96470195938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2532141.966666667,
            "unit": "ns",
            "range": "± 58306.58537331269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2260220.3157894737,
            "unit": "ns",
            "range": "± 92784.12019982535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2818131.0178571427,
            "unit": "ns",
            "range": "± 94228.95773930666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042642.740234375,
            "unit": "ns",
            "range": "± 31501.996969546697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919552.1697916667,
            "unit": "ns",
            "range": "± 7246.75529683957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614332.7986979167,
            "unit": "ns",
            "range": "± 4281.2999816293295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1638917.6905691964,
            "unit": "ns",
            "range": "± 1485.4851085098694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460584.2655273437,
            "unit": "ns",
            "range": "± 1011.5513347870367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424306.08587239584,
            "unit": "ns",
            "range": "± 881.9518929605252"
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
          "id": "1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4",
          "message": "logs: frames",
          "timestamp": "2024-12-12T11:19:26+09:00",
          "tree_id": "d4d1c291bc792c56419bc282ddcfa3c4ec54d0bc",
          "url": "https://github.com/planetarium/libplanet/commit/1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4"
        },
        "date": 1733970467040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10685972.416666666,
            "unit": "ns",
            "range": "± 109812.68919429727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26081643.214285713,
            "unit": "ns",
            "range": "± 136978.89289296113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66313574.6,
            "unit": "ns",
            "range": "± 137076.98568677175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134038765.35714285,
            "unit": "ns",
            "range": "± 173850.3813936248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270129203.06666666,
            "unit": "ns",
            "range": "± 999681.5334116922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12770.478260869566,
            "unit": "ns",
            "range": "± 492.42860685610214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55387.48780487805,
            "unit": "ns",
            "range": "± 2938.784767086023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105651.84090909091,
            "unit": "ns",
            "range": "± 3788.856672015744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91962.39130434782,
            "unit": "ns",
            "range": "± 3498.471294584796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824036.95,
            "unit": "ns",
            "range": "± 185078.5993219018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740264.1,
            "unit": "ns",
            "range": "± 179376.9526161276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5030.956043956044,
            "unit": "ns",
            "range": "± 690.3454354659125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26850.35632183908,
            "unit": "ns",
            "range": "± 1803.5942988416828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22993.4,
            "unit": "ns",
            "range": "± 1346.9376485990294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32120.541666666668,
            "unit": "ns",
            "range": "± 6079.775501251181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1192.3870967741937,
            "unit": "ns",
            "range": "± 198.28432770722395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4814.516853932584,
            "unit": "ns",
            "range": "± 562.5707048968793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 672260.5730337079,
            "unit": "ns",
            "range": "± 39185.01325903927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1269872.8902439023,
            "unit": "ns",
            "range": "± 39367.03050388615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1035418.2878787878,
            "unit": "ns",
            "range": "± 48168.74445171176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8768699.95,
            "unit": "ns",
            "range": "± 1465082.8785489514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105115,
            "unit": "ns",
            "range": "± 30338.78502840877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271896.2045454546,
            "unit": "ns",
            "range": "± 84632.19614790611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555565.4210526315,
            "unit": "ns",
            "range": "± 37613.9065245168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2262764.9206349207,
            "unit": "ns",
            "range": "± 97995.86269201197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2717134.727272727,
            "unit": "ns",
            "range": "± 65099.230511275426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034912.29921875,
            "unit": "ns",
            "range": "± 54822.21495507283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916727.6574519231,
            "unit": "ns",
            "range": "± 2896.5648109279246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617948.81953125,
            "unit": "ns",
            "range": "± 9325.69458591052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1614782.0358072917,
            "unit": "ns",
            "range": "± 13975.264153996457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457375.3106770833,
            "unit": "ns",
            "range": "± 801.4645861900873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416638.31888253347,
            "unit": "ns",
            "range": "± 1794.1606521344368"
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
          "id": "4778de3804f90328ce6ac25da8c86f586d3cd4e3",
          "message": "logs: frames",
          "timestamp": "2024-12-12T11:23:40+09:00",
          "tree_id": "24ee351552c4a575cd39f297454b53df3d2e8260",
          "url": "https://github.com/planetarium/libplanet/commit/4778de3804f90328ce6ac25da8c86f586d3cd4e3"
        },
        "date": 1733971569099,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10664125.307692308,
            "unit": "ns",
            "range": "± 168967.40072293265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26104304.153846152,
            "unit": "ns",
            "range": "± 138787.2594379891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66549354.428571425,
            "unit": "ns",
            "range": "± 109810.14776402063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134154771.35714285,
            "unit": "ns",
            "range": "± 237930.8352007452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270050256.28571427,
            "unit": "ns",
            "range": "± 282444.0834238573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13271.530612244898,
            "unit": "ns",
            "range": "± 528.7034101633612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54306.59459459459,
            "unit": "ns",
            "range": "± 2697.3689154937174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106456.6875,
            "unit": "ns",
            "range": "± 4911.029539606628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91730.40909090909,
            "unit": "ns",
            "range": "± 2607.1101382042284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2798981.23,
            "unit": "ns",
            "range": "± 184403.34633529183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2708240.32,
            "unit": "ns",
            "range": "± 176576.74480204482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5133.159090909091,
            "unit": "ns",
            "range": "± 542.6867576492904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27816.434782608696,
            "unit": "ns",
            "range": "± 2101.332216383702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22195.11111111111,
            "unit": "ns",
            "range": "± 727.3763725208478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31502.042105263157,
            "unit": "ns",
            "range": "± 5359.618891095033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1237.5108695652175,
            "unit": "ns",
            "range": "± 270.8937383236678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5037.94623655914,
            "unit": "ns",
            "range": "± 712.6939608700794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678354.275862069,
            "unit": "ns",
            "range": "± 36789.02410340828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266326.8604651163,
            "unit": "ns",
            "range": "± 45603.124690133634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1023002.3387096775,
            "unit": "ns",
            "range": "± 45231.86916901334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8693160.32,
            "unit": "ns",
            "range": "± 1398533.0043214718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2162940.785714286,
            "unit": "ns",
            "range": "± 30633.88942677844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250887,
            "unit": "ns",
            "range": "± 24538.38046136433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2561862.1666666665,
            "unit": "ns",
            "range": "± 85493.593400408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2268520.5,
            "unit": "ns",
            "range": "± 64778.824753784174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2793999.6,
            "unit": "ns",
            "range": "± 91506.53800315624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3079986.566145833,
            "unit": "ns",
            "range": "± 26789.947608194423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914887.6983173077,
            "unit": "ns",
            "range": "± 11431.0075116786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613676.6630859375,
            "unit": "ns",
            "range": "± 5010.135430288897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642181.60859375,
            "unit": "ns",
            "range": "± 16065.587055693843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456985.372000558,
            "unit": "ns",
            "range": "± 981.0079386361539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423179.85888671875,
            "unit": "ns",
            "range": "± 648.5806630174242"
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
          "id": "87973e47176007bcc71d1faab68416d715c2e1af",
          "message": "feat: force reply Pong",
          "timestamp": "2024-12-12T14:41:22+09:00",
          "tree_id": "dbd6ad137bbecd6caaf254e3b46ec6176e2974da",
          "url": "https://github.com/planetarium/libplanet/commit/87973e47176007bcc71d1faab68416d715c2e1af"
        },
        "date": 1733982627620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10676842,
            "unit": "ns",
            "range": "± 184318.79140034993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26553985.64285714,
            "unit": "ns",
            "range": "± 253329.08832389634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65989494.733333334,
            "unit": "ns",
            "range": "± 92820.18563519673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134140634.84615384,
            "unit": "ns",
            "range": "± 189871.51688481614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270466558.23333335,
            "unit": "ns",
            "range": "± 565387.6245179644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14131.364583333334,
            "unit": "ns",
            "range": "± 1657.9312989372067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54915.2027027027,
            "unit": "ns",
            "range": "± 2735.762857121127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106315.76,
            "unit": "ns",
            "range": "± 4222.088296575716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92606.91666666667,
            "unit": "ns",
            "range": "± 3019.1513885764084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2835399.712121212,
            "unit": "ns",
            "range": "± 168385.88887265505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2734336.1919191917,
            "unit": "ns",
            "range": "± 161848.38053124052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5072.75,
            "unit": "ns",
            "range": "± 745.1048399570846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27410.55681818182,
            "unit": "ns",
            "range": "± 2331.9758794811137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24484.225806451614,
            "unit": "ns",
            "range": "± 2353.7534831257894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30271.373626373625,
            "unit": "ns",
            "range": "± 4197.406648153521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1424,
            "unit": "ns",
            "range": "± 269.01218911926065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5115.184210526316,
            "unit": "ns",
            "range": "± 744.0145454875036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 667426.6666666666,
            "unit": "ns",
            "range": "± 35259.46963303919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270540.875,
            "unit": "ns",
            "range": "± 42498.1333666626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1020408.0615384616,
            "unit": "ns",
            "range": "± 46017.895835776806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8633927.25,
            "unit": "ns",
            "range": "± 1421606.7313463523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133005.714285714,
            "unit": "ns",
            "range": "± 25201.344068028688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2228035.0833333335,
            "unit": "ns",
            "range": "± 21328.573828033575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2544356.789473684,
            "unit": "ns",
            "range": "± 56463.40908606107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2262157.711111111,
            "unit": "ns",
            "range": "± 85922.75973105735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2707712.25,
            "unit": "ns",
            "range": "± 28137.231078235116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3084984.8921875,
            "unit": "ns",
            "range": "± 39198.300526080115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919450.905859375,
            "unit": "ns",
            "range": "± 7734.099297870663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613444.4989583333,
            "unit": "ns",
            "range": "± 5410.295413460219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630145.4005408655,
            "unit": "ns",
            "range": "± 3028.606303849004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469992.2644391741,
            "unit": "ns",
            "range": "± 1132.297763257994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420348.32191685267,
            "unit": "ns",
            "range": "± 836.7614725219504"
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
          "id": "d789611f32ed336db3841a704ea16459735c44ce",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-12-12T19:29:35+09:00",
          "tree_id": "1bbdb3cef786ee346da06b34cc1838945d8e792f",
          "url": "https://github.com/planetarium/libplanet/commit/d789611f32ed336db3841a704ea16459735c44ce"
        },
        "date": 1733999849583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10813243.615384616,
            "unit": "ns",
            "range": "± 87767.1561391641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26341565.85714286,
            "unit": "ns",
            "range": "± 154693.21213533336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66753089.428571425,
            "unit": "ns",
            "range": "± 106317.91756202375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134360375.5,
            "unit": "ns",
            "range": "± 150624.11048840446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269144690.4285714,
            "unit": "ns",
            "range": "± 245441.17381233964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13668.105263157895,
            "unit": "ns",
            "range": "± 301.92694015768524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53307,
            "unit": "ns",
            "range": "± 2450.035142030232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107003.22727272728,
            "unit": "ns",
            "range": "± 4010.3052418977277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90521.64705882352,
            "unit": "ns",
            "range": "± 1771.974108909907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2877878.9036144577,
            "unit": "ns",
            "range": "± 151858.3761753047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2524384.49,
            "unit": "ns",
            "range": "± 177762.5157563602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5326.11797752809,
            "unit": "ns",
            "range": "± 498.9964133961554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27496.7311827957,
            "unit": "ns",
            "range": "± 2186.338999430351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23186.478260869564,
            "unit": "ns",
            "range": "± 1799.0666595977102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30238.94680851064,
            "unit": "ns",
            "range": "± 5280.8271358827615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1338.5,
            "unit": "ns",
            "range": "± 253.4460598690733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4846.531914893617,
            "unit": "ns",
            "range": "± 700.629927043808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 666292.6153846154,
            "unit": "ns",
            "range": "± 33589.85602526754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272184.0681818181,
            "unit": "ns",
            "range": "± 47661.675205702195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1032377.3766233766,
            "unit": "ns",
            "range": "± 47825.596494213656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8602890.74,
            "unit": "ns",
            "range": "± 1324485.8404765078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114036.3103448274,
            "unit": "ns",
            "range": "± 83454.6966393453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253401.8292682925,
            "unit": "ns",
            "range": "± 80057.71978544681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2538397.1578947366,
            "unit": "ns",
            "range": "± 55805.12836973474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2287688.8846153845,
            "unit": "ns",
            "range": "± 22491.823412588783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2804112.5,
            "unit": "ns",
            "range": "± 78245.075998921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025595.2511160714,
            "unit": "ns",
            "range": "± 23145.097582567258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919181.3479166667,
            "unit": "ns",
            "range": "± 5094.977592318319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616321.1288411458,
            "unit": "ns",
            "range": "± 5025.826392322227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1653750.2380208333,
            "unit": "ns",
            "range": "± 16676.065619472145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459449.1562151228,
            "unit": "ns",
            "range": "± 363.9910903015914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417893.0957782452,
            "unit": "ns",
            "range": "± 1116.3759157489308"
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
          "id": "1f4e1c99d1172dc8b13aaa7897bf9f0488bef421",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-12-12T19:32:15+09:00",
          "tree_id": "d172abcbeb7bc6aaa678a15c2dbafdba9893de9d",
          "url": "https://github.com/planetarium/libplanet/commit/1f4e1c99d1172dc8b13aaa7897bf9f0488bef421"
        },
        "date": 1734000934467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10657330.25,
            "unit": "ns",
            "range": "± 86394.08179975481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26125524.07142857,
            "unit": "ns",
            "range": "± 153481.28594991853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66661857.35714286,
            "unit": "ns",
            "range": "± 44666.197884731824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134394987.46153846,
            "unit": "ns",
            "range": "± 238346.94284928968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269700220.71428573,
            "unit": "ns",
            "range": "± 351651.88643128495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13340.354838709678,
            "unit": "ns",
            "range": "± 391.8779187780379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54292.96629213483,
            "unit": "ns",
            "range": "± 3276.6662223885082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105223.64,
            "unit": "ns",
            "range": "± 4197.752799014331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93750.2564102564,
            "unit": "ns",
            "range": "± 3017.199980444999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813135.16,
            "unit": "ns",
            "range": "± 183236.9202895153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2688758.3,
            "unit": "ns",
            "range": "± 182862.73097701932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5108.301075268817,
            "unit": "ns",
            "range": "± 707.9780269395837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27428.236559139787,
            "unit": "ns",
            "range": "± 2168.8599008507827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23061.94680851064,
            "unit": "ns",
            "range": "± 1790.4041615390565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30984.208333333332,
            "unit": "ns",
            "range": "± 5277.801725233451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1321.3684210526317,
            "unit": "ns",
            "range": "± 255.54685012573043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4779.76404494382,
            "unit": "ns",
            "range": "± 453.2841528644014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687776.6157894736,
            "unit": "ns",
            "range": "± 60586.3413381413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276408.1707317072,
            "unit": "ns",
            "range": "± 45911.6421923146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1051475.8695652173,
            "unit": "ns",
            "range": "± 61738.00350456802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8552678.21,
            "unit": "ns",
            "range": "± 1311918.4952188449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2107102.846153846,
            "unit": "ns",
            "range": "± 28230.56656901686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2234581.9615384615,
            "unit": "ns",
            "range": "± 59070.073358668364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2531962.076923077,
            "unit": "ns",
            "range": "± 31749.600759856126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264305.49122807,
            "unit": "ns",
            "range": "± 98072.57963968806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2891578.5614035088,
            "unit": "ns",
            "range": "± 125670.69263058362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039555.7591145835,
            "unit": "ns",
            "range": "± 40838.72914703595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921864.946484375,
            "unit": "ns",
            "range": "± 5893.459049949297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612773.1876302083,
            "unit": "ns",
            "range": "± 4443.339091028454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632592.7893229167,
            "unit": "ns",
            "range": "± 8032.2647245824555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468622.5272135417,
            "unit": "ns",
            "range": "± 739.2104216219142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416495.2916782924,
            "unit": "ns",
            "range": "± 811.9916429981444"
          }
        ]
      }
    ]
  }
}