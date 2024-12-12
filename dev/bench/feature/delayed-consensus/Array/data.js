window.BENCHMARK_DATA = {
  "lastUpdate": 1733968677587,
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
      }
    ]
  }
}