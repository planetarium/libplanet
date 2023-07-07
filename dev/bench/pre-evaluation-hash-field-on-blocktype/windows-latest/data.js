window.BENCHMARK_DATA = {
  "lastUpdate": 1688717594865,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "4b03a2c3b9a0cec0213d3552868c5dacaa04105c",
          "message": "Remove unused using",
          "timestamp": "2023-07-07T15:01:46+09:00",
          "tree_id": "9bac88ba713d96d76306b1cfb700e32e50c08e00",
          "url": "https://github.com/planetarium/libplanet/commit/4b03a2c3b9a0cec0213d3552868c5dacaa04105c"
        },
        "date": 1688710660490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188603.0303030303,
            "unit": "ns",
            "range": "± 149287.65374990704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994764.1791044776,
            "unit": "ns",
            "range": "± 94207.26135156129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1884326.530612245,
            "unit": "ns",
            "range": "± 199331.55436914825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3944675.925925926,
            "unit": "ns",
            "range": "± 142512.98111702784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34497.84946236559,
            "unit": "ns",
            "range": "± 2122.292571654718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5175492.307692308,
            "unit": "ns",
            "range": "± 40919.34060926979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13519550,
            "unit": "ns",
            "range": "± 73876.50558143013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33566386.666666664,
            "unit": "ns",
            "range": "± 365719.1054555915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65394653.333333336,
            "unit": "ns",
            "range": "± 660363.2072759728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134318992.85714287,
            "unit": "ns",
            "range": "± 1432272.3803395487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3643740.4296875,
            "unit": "ns",
            "range": "± 8807.092329174937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139519.0625,
            "unit": "ns",
            "range": "± 2329.6822108652505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816331.34765625,
            "unit": "ns",
            "range": "± 1530.08122005071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999360.15625,
            "unit": "ns",
            "range": "± 4925.477688689144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638061.30859375,
            "unit": "ns",
            "range": "± 1414.2692549409674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593545.7310267857,
            "unit": "ns",
            "range": "± 2693.826786434073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381560,
            "unit": "ns",
            "range": "± 94961.54753480002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2445117.8571428573,
            "unit": "ns",
            "range": "± 64865.028262804226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2982346.153846154,
            "unit": "ns",
            "range": "± 48148.40972425111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3015658.695652174,
            "unit": "ns",
            "range": "± 103334.85499113379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4830428.571428572,
            "unit": "ns",
            "range": "± 207830.69833119254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188169.23076923078,
            "unit": "ns",
            "range": "± 8075.733772329202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188555.4347826087,
            "unit": "ns",
            "range": "± 11256.776851462058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152134.73684210525,
            "unit": "ns",
            "range": "± 10511.430135516337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851340,
            "unit": "ns",
            "range": "± 43548.11460573564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2588391.1764705884,
            "unit": "ns",
            "range": "± 50713.7685794441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13976.288659793814,
            "unit": "ns",
            "range": "± 2468.795809527571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62638.46153846154,
            "unit": "ns",
            "range": "± 6093.580761401829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52980.434782608696,
            "unit": "ns",
            "range": "± 5982.138967131538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77871.13402061856,
            "unit": "ns",
            "range": "± 15922.265324871378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3631.958762886598,
            "unit": "ns",
            "range": "± 867.7732988988465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12021.739130434782,
            "unit": "ns",
            "range": "± 1752.4755543407368"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710714778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1306772,
            "unit": "ns",
            "range": "± 123721.2695594987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2301547.0588235296,
            "unit": "ns",
            "range": "± 68415.73554289411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005492.7083333333,
            "unit": "ns",
            "range": "± 153526.80633056042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4717472.0930232555,
            "unit": "ns",
            "range": "± 173275.69599255812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52148.48484848485,
            "unit": "ns",
            "range": "± 11700.177598829678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7681319.230769231,
            "unit": "ns",
            "range": "± 127778.24791812431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18233686.666666668,
            "unit": "ns",
            "range": "± 246374.4648951692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44957357.14285714,
            "unit": "ns",
            "range": "± 531215.0292045089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93066343.75,
            "unit": "ns",
            "range": "± 1703994.7683678493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190318430,
            "unit": "ns",
            "range": "± 1182629.7338679472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5124661.901041667,
            "unit": "ns",
            "range": "± 34111.39376861791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547837.7371651786,
            "unit": "ns",
            "range": "± 17403.533976043913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070997.94921875,
            "unit": "ns",
            "range": "± 7187.98899097238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630899.832589286,
            "unit": "ns",
            "range": "± 10614.6041264481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855895.0716145834,
            "unit": "ns",
            "range": "± 3805.7825909529943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748734.8214285715,
            "unit": "ns",
            "range": "± 4094.0421997215467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3061982.1428571427,
            "unit": "ns",
            "range": "± 86382.13572849351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3147532.7868852457,
            "unit": "ns",
            "range": "± 141414.38366412316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3939023.6842105263,
            "unit": "ns",
            "range": "± 135315.47010938774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3922696.9696969697,
            "unit": "ns",
            "range": "± 111308.21365932662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6103647.619047619,
            "unit": "ns",
            "range": "± 144811.75235127713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239364.58333333334,
            "unit": "ns",
            "range": "± 19008.66272971168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230500.50505050505,
            "unit": "ns",
            "range": "± 21191.538423689995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216215.625,
            "unit": "ns",
            "range": "± 17046.829173439295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110028.5714285714,
            "unit": "ns",
            "range": "± 69664.79553019398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575078.5714285714,
            "unit": "ns",
            "range": "± 35328.68040757621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17800,
            "unit": "ns",
            "range": "± 4728.992326178235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88903.0303030303,
            "unit": "ns",
            "range": "± 16881.256690728213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82096.84210526316,
            "unit": "ns",
            "range": "± 13109.753171569817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104359.59595959596,
            "unit": "ns",
            "range": "± 19442.263658371063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5568.421052631579,
            "unit": "ns",
            "range": "± 1615.3033545472647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18444,
            "unit": "ns",
            "range": "± 5879.468126841531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "f6abe65a3231448c9ab61a23e7eb63932210c01f",
          "message": "Fix temp description",
          "timestamp": "2023-07-07T15:05:43+09:00",
          "tree_id": "9a9a49f5658176777a6afc0989df1ce0dfc944b3",
          "url": "https://github.com/planetarium/libplanet/commit/f6abe65a3231448c9ab61a23e7eb63932210c01f"
        },
        "date": 1688710855604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506924.4897959183,
            "unit": "ns",
            "range": "± 123426.16981040491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746797.8260869565,
            "unit": "ns",
            "range": "± 105462.76960589863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2432011.111111111,
            "unit": "ns",
            "range": "± 194393.72936939241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5525581.967213115,
            "unit": "ns",
            "range": "± 246952.53896798115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68530.33707865169,
            "unit": "ns",
            "range": "± 5303.1166756913735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598556.25,
            "unit": "ns",
            "range": "± 147149.11017400003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19190367.85714286,
            "unit": "ns",
            "range": "± 548214.7727640324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48490007.14285714,
            "unit": "ns",
            "range": "± 706943.1624572481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97175638.46153846,
            "unit": "ns",
            "range": "± 874907.3508458496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194479557.14285713,
            "unit": "ns",
            "range": "± 1716166.6614711564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5221648.151041667,
            "unit": "ns",
            "range": "± 77235.3270099854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1557163.490513393,
            "unit": "ns",
            "range": "± 8680.4954705697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182447.0182291667,
            "unit": "ns",
            "range": "± 9398.833759471381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2868593.5302734375,
            "unit": "ns",
            "range": "± 52087.12415487728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831162.5651041666,
            "unit": "ns",
            "range": "± 6246.258420350086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750973.7095424107,
            "unit": "ns",
            "range": "± 3277.4793890962255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412028.5714285714,
            "unit": "ns",
            "range": "± 94908.05046110705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3492296,
            "unit": "ns",
            "range": "± 139762.72489253976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286882.051282051,
            "unit": "ns",
            "range": "± 149345.79597239717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4403413.793103448,
            "unit": "ns",
            "range": "± 191561.42201107147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6940839.583333333,
            "unit": "ns",
            "range": "± 263634.5941846148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305848.275862069,
            "unit": "ns",
            "range": "± 13392.682492451528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293278.8461538461,
            "unit": "ns",
            "range": "± 12010.344177832078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274616.6666666667,
            "unit": "ns",
            "range": "± 4753.444866119527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4196572.7272727275,
            "unit": "ns",
            "range": "± 100496.76579405396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774318,
            "unit": "ns",
            "range": "± 96513.0246823367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26836.17021276596,
            "unit": "ns",
            "range": "± 2647.8983779930927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121841.48936170213,
            "unit": "ns",
            "range": "± 7347.992331673816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119241.77215189874,
            "unit": "ns",
            "range": "± 6186.474237065989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120448.3870967742,
            "unit": "ns",
            "range": "± 10774.89647789699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8299.473684210527,
            "unit": "ns",
            "range": "± 1122.580015080243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25777.659574468085,
            "unit": "ns",
            "range": "± 2625.0306400800278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "25446122a78d2ef1cae0a1b4318910cfc99602fb",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:39:42+09:00",
          "tree_id": "668234520b2c9d9535169db861b8bda977b011e1",
          "url": "https://github.com/planetarium/libplanet/commit/25446122a78d2ef1cae0a1b4318910cfc99602fb"
        },
        "date": 1688712944150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436665.306122449,
            "unit": "ns",
            "range": "± 56617.85845701429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2468310.769230769,
            "unit": "ns",
            "range": "± 114095.64946114965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219560,
            "unit": "ns",
            "range": "± 182859.01120753656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146783.333333333,
            "unit": "ns",
            "range": "± 165205.68254106652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43193.333333333336,
            "unit": "ns",
            "range": "± 2625.193411815252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6752661.538461538,
            "unit": "ns",
            "range": "± 15644.942657908043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17080420,
            "unit": "ns",
            "range": "± 112428.08622149793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44732580,
            "unit": "ns",
            "range": "± 577143.5525809106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91699323.07692307,
            "unit": "ns",
            "range": "± 923738.1637977345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179990346.66666666,
            "unit": "ns",
            "range": "± 3067925.297997857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4837784.84375,
            "unit": "ns",
            "range": "± 22253.496433887947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497134.7098214286,
            "unit": "ns",
            "range": "± 3492.280650677038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146234.3489583333,
            "unit": "ns",
            "range": "± 3352.8292454722946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560953.8802083335,
            "unit": "ns",
            "range": "± 11530.107409186834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895090.6770833334,
            "unit": "ns",
            "range": "± 2355.5522372300106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762142.9387019231,
            "unit": "ns",
            "range": "± 1319.037819972939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3103753.3333333335,
            "unit": "ns",
            "range": "± 41418.17866359558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3091776.086956522,
            "unit": "ns",
            "range": "± 115234.66961867684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3906181.4814814813,
            "unit": "ns",
            "range": "± 86614.01128897652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3885156,
            "unit": "ns",
            "range": "± 55350.45227156384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6433835.185185186,
            "unit": "ns",
            "range": "± 150815.21475915154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258003.125,
            "unit": "ns",
            "range": "± 11910.086011844072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240920.5128205128,
            "unit": "ns",
            "range": "± 7720.109744487871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224446,
            "unit": "ns",
            "range": "± 16589.250018057362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880126.6666666665,
            "unit": "ns",
            "range": "± 56951.67709391466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3489434.782608696,
            "unit": "ns",
            "range": "± 86186.20754820055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19569.791666666668,
            "unit": "ns",
            "range": "± 2163.4825625009353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103727.27272727272,
            "unit": "ns",
            "range": "± 21629.065941609533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68246.875,
            "unit": "ns",
            "range": "± 4753.988976029554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89484.61538461539,
            "unit": "ns",
            "range": "± 10592.52276190797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4885.567010309278,
            "unit": "ns",
            "range": "± 799.4776537842341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17992.85714285714,
            "unit": "ns",
            "range": "± 3357.504289132985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99e92387c0d3d3da5d1d023d5b4c51e06047ba1d",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:02:04+09:00",
          "tree_id": "190ab4d57c02bd1a48746975f3a726ba096e15c7",
          "url": "https://github.com/planetarium/libplanet/commit/99e92387c0d3d3da5d1d023d5b4c51e06047ba1d"
        },
        "date": 1688714146415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369455.5555555555,
            "unit": "ns",
            "range": "± 122235.73262784397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2507524.5283018867,
            "unit": "ns",
            "range": "± 100816.51250903674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791444.8979591837,
            "unit": "ns",
            "range": "± 140938.6428775836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4711867.2727272725,
            "unit": "ns",
            "range": "± 178479.76340786635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43802.739726027394,
            "unit": "ns",
            "range": "± 2194.0558968583305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6996907.142857143,
            "unit": "ns",
            "range": "± 50590.00303017787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17895071.42857143,
            "unit": "ns",
            "range": "± 84035.45431791026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45352807.14285714,
            "unit": "ns",
            "range": "± 338126.8548119994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91404657.14285715,
            "unit": "ns",
            "range": "± 417490.5263122021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181794950,
            "unit": "ns",
            "range": "± 1070209.485424376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4808392.299107143,
            "unit": "ns",
            "range": "± 12098.817201174565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525221.7838541667,
            "unit": "ns",
            "range": "± 2346.8738759714015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155993.4375,
            "unit": "ns",
            "range": "± 1189.702178029704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595938.8020833335,
            "unit": "ns",
            "range": "± 5169.101741295153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827381.6145833334,
            "unit": "ns",
            "range": "± 1138.5923099352292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741777.6627604166,
            "unit": "ns",
            "range": "± 1055.0995253200394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3086313.6363636362,
            "unit": "ns",
            "range": "± 73067.5766504936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3193552.7027027025,
            "unit": "ns",
            "range": "± 156542.20685438768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3986692.8571428573,
            "unit": "ns",
            "range": "± 50946.81184689222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3547733.3333333335,
            "unit": "ns",
            "range": "± 63017.648781678734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5966483.870967742,
            "unit": "ns",
            "range": "± 179228.9189775173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252707.14285714287,
            "unit": "ns",
            "range": "± 7054.5456095069485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244944.89795918367,
            "unit": "ns",
            "range": "± 9510.193242526888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217217.02127659574,
            "unit": "ns",
            "range": "± 12000.292454302511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3882106.6666666665,
            "unit": "ns",
            "range": "± 46174.95404385781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553396.6666666665,
            "unit": "ns",
            "range": "± 47765.84055378408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17831.57894736842,
            "unit": "ns",
            "range": "± 1654.9257975198623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81734.44444444444,
            "unit": "ns",
            "range": "± 4628.251328746899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67597.36842105263,
            "unit": "ns",
            "range": "± 2331.2781370933267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87957.8947368421,
            "unit": "ns",
            "range": "± 12392.650352316054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4497.916666666667,
            "unit": "ns",
            "range": "± 688.7026960225813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16162.637362637362,
            "unit": "ns",
            "range": "± 1441.1144107289833"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57557949aa623e9cadc21ca71db515d8b616eacb",
          "message": "Update CHANGES.md",
          "timestamp": "2023-07-07T16:10:43+09:00",
          "tree_id": "c05701aca8ee1715a6a3a0ef563cbccbbdcd37fb",
          "url": "https://github.com/planetarium/libplanet/commit/57557949aa623e9cadc21ca71db515d8b616eacb"
        },
        "date": 1688714724208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393081.914893617,
            "unit": "ns",
            "range": "± 89516.44525162572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553037.3493975904,
            "unit": "ns",
            "range": "± 134908.24407617902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791383.5051546392,
            "unit": "ns",
            "range": "± 128236.4650756013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4980029.333333333,
            "unit": "ns",
            "range": "± 250334.48260673555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47055.913978494624,
            "unit": "ns",
            "range": "± 3441.7027625237115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7931311.111111111,
            "unit": "ns",
            "range": "± 262187.3406312776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20573029.411764707,
            "unit": "ns",
            "range": "± 409638.0395616139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52157884.615384616,
            "unit": "ns",
            "range": "± 480374.849893556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105741853.84615384,
            "unit": "ns",
            "range": "± 1013941.9145225435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204231586.66666666,
            "unit": "ns",
            "range": "± 2719043.572357926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4944131.975446428,
            "unit": "ns",
            "range": "± 42557.99137318194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594549.4140625,
            "unit": "ns",
            "range": "± 12889.527279653677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1205740.4017857143,
            "unit": "ns",
            "range": "± 10026.561495838692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696834.1666666665,
            "unit": "ns",
            "range": "± 17169.09365846393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853282.2330729166,
            "unit": "ns",
            "range": "± 10759.239711947916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788410.1143973215,
            "unit": "ns",
            "range": "± 8195.602605316526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3223491.0714285714,
            "unit": "ns",
            "range": "± 137057.043567846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3327277.272727273,
            "unit": "ns",
            "range": "± 123119.77787511198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4171673.076923077,
            "unit": "ns",
            "range": "± 169566.15357259754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3867652.6315789474,
            "unit": "ns",
            "range": "± 167150.51825190283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6263285.714285715,
            "unit": "ns",
            "range": "± 110539.42462128341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269622.5806451613,
            "unit": "ns",
            "range": "± 8020.337053491761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266815,
            "unit": "ns",
            "range": "± 6064.328400356335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225117.1875,
            "unit": "ns",
            "range": "± 10385.667087538219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188426.3157894737,
            "unit": "ns",
            "range": "± 92971.62555261007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750820,
            "unit": "ns",
            "range": "± 68096.90783833622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23284.375,
            "unit": "ns",
            "range": "± 2142.911355830513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87708.51063829787,
            "unit": "ns",
            "range": "± 5088.964649003797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78540.4255319149,
            "unit": "ns",
            "range": "± 5964.470416043426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103419.38775510204,
            "unit": "ns",
            "range": "± 14249.041625672859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5019.3877551020405,
            "unit": "ns",
            "range": "± 930.6530423360479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19516.494845360823,
            "unit": "ns",
            "range": "± 2474.228853449896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "50f1e74d0270105d2f9cb5107a2a1152ae149490",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:58:07+09:00",
          "tree_id": "650bf13dc78942724a855e7756ff220182351046",
          "url": "https://github.com/planetarium/libplanet/commit/50f1e74d0270105d2f9cb5107a2a1152ae149490"
        },
        "date": 1688717536138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383246,
            "unit": "ns",
            "range": "± 117183.596707789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2445165.789473684,
            "unit": "ns",
            "range": "± 84012.90852011097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1795508.5858585858,
            "unit": "ns",
            "range": "± 142644.12833692174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4656220.37037037,
            "unit": "ns",
            "range": "± 192878.7480880441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43878.651685393255,
            "unit": "ns",
            "range": "± 2432.239517498242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7183980,
            "unit": "ns",
            "range": "± 58415.09345072678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17908184.615384616,
            "unit": "ns",
            "range": "± 48907.08616267255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45495673.333333336,
            "unit": "ns",
            "range": "± 231573.08462731482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91773213.33333333,
            "unit": "ns",
            "range": "± 385314.0071360475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183248840,
            "unit": "ns",
            "range": "± 481894.9541727355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4956562.5,
            "unit": "ns",
            "range": "± 13464.079862107292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511028.90625,
            "unit": "ns",
            "range": "± 1317.3289620825815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174864.6484375,
            "unit": "ns",
            "range": "± 1437.397636417788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653544.921875,
            "unit": "ns",
            "range": "± 36034.61307072832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817446.4564732143,
            "unit": "ns",
            "range": "± 1081.345722735097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747101.3671875,
            "unit": "ns",
            "range": "± 647.3832542553517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088837.5,
            "unit": "ns",
            "range": "± 39667.06232295673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3209142.8571428573,
            "unit": "ns",
            "range": "± 50543.98472157089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4063172.222222222,
            "unit": "ns",
            "range": "± 78516.5816549042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3673460.8695652173,
            "unit": "ns",
            "range": "± 76317.05837628628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6090587.179487179,
            "unit": "ns",
            "range": "± 210663.04122121705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268246.34146341466,
            "unit": "ns",
            "range": "± 8820.206844540993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250706.77966101695,
            "unit": "ns",
            "range": "± 10659.395473684555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236266.66666666666,
            "unit": "ns",
            "range": "± 10221.866151493456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956426.6666666665,
            "unit": "ns",
            "range": "± 37992.244822682784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3446635.714285714,
            "unit": "ns",
            "range": "± 35713.89747041721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18862.105263157893,
            "unit": "ns",
            "range": "± 1728.3726786955892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87226.80412371134,
            "unit": "ns",
            "range": "± 5945.613149343765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68360.86956521739,
            "unit": "ns",
            "range": "± 4551.535341049412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90944.32989690722,
            "unit": "ns",
            "range": "± 11728.153174734474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4604.081632653061,
            "unit": "ns",
            "range": "± 788.1752862956336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17574.468085106382,
            "unit": "ns",
            "range": "± 1658.6000166102494"
          }
        ]
      }
    ]
  }
}