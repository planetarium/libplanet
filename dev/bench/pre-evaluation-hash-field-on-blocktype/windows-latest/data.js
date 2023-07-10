window.BENCHMARK_DATA = {
  "lastUpdate": 1688952093632,
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
          "id": "fe6fd533d5919657d140a182ba7fd45fa0e599d5",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:58:35+09:00",
          "tree_id": "19788048610843b39a405e6d772abd301fe67ad7",
          "url": "https://github.com/planetarium/libplanet/commit/fe6fd533d5919657d140a182ba7fd45fa0e599d5"
        },
        "date": 1688717565408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410091.9191919193,
            "unit": "ns",
            "range": "± 137127.23101213205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505968.3673469387,
            "unit": "ns",
            "range": "± 98774.3633942815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1812371.7171717172,
            "unit": "ns",
            "range": "± 133081.2810097066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4698134,
            "unit": "ns",
            "range": "± 177592.4402693322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58125.77319587629,
            "unit": "ns",
            "range": "± 10164.821673613236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7376193.333333333,
            "unit": "ns",
            "range": "± 24012.65935967546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18457278.57142857,
            "unit": "ns",
            "range": "± 63291.87794011814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46632426.666666664,
            "unit": "ns",
            "range": "± 222311.35652074826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93751891.66666667,
            "unit": "ns",
            "range": "± 363169.6284316071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187792086.66666666,
            "unit": "ns",
            "range": "± 620395.2195020142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4916783.515625,
            "unit": "ns",
            "range": "± 62971.34028398152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538223.9713541667,
            "unit": "ns",
            "range": "± 9992.182650581932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134153.0436197917,
            "unit": "ns",
            "range": "± 7431.805793683656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676185.78125,
            "unit": "ns",
            "range": "± 49274.18936129883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809482.529296875,
            "unit": "ns",
            "range": "± 5576.015562558842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765350.3190104166,
            "unit": "ns",
            "range": "± 8203.36508142666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145276.3157894737,
            "unit": "ns",
            "range": "± 93149.80214747532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3269955.882352941,
            "unit": "ns",
            "range": "± 55752.82675902724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4077444.4444444445,
            "unit": "ns",
            "range": "± 120807.84611332031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3716615.3846153845,
            "unit": "ns",
            "range": "± 77107.92276962307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6143001.515151516,
            "unit": "ns",
            "range": "± 178594.74747527592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270722.22222222225,
            "unit": "ns",
            "range": "± 11215.061750293356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256259.52380952382,
            "unit": "ns",
            "range": "± 9013.000353792739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236969.44444444444,
            "unit": "ns",
            "range": "± 11619.17597729014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3945246.6666666665,
            "unit": "ns",
            "range": "± 34001.02659514576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3600790,
            "unit": "ns",
            "range": "± 33840.440726613306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21262.5,
            "unit": "ns",
            "range": "± 1748.277347622661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93838.29787234042,
            "unit": "ns",
            "range": "± 6289.82975619618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75429.56989247311,
            "unit": "ns",
            "range": "± 5420.684200753728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107915.9574468085,
            "unit": "ns",
            "range": "± 9640.130093169051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6875.257731958763,
            "unit": "ns",
            "range": "± 1042.9356531600129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23263.978494623654,
            "unit": "ns",
            "range": "± 1483.3563145968105"
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
          "id": "dbd7b93e3217c097f9b691f044b7e3cdb2031e0d",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T16:55:53+09:00",
          "tree_id": "8dadd36e29b0bb0ebf59968212a4f1eff612f1f8",
          "url": "https://github.com/planetarium/libplanet/commit/dbd7b93e3217c097f9b691f044b7e3cdb2031e0d"
        },
        "date": 1688717857278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1817263.829787234,
            "unit": "ns",
            "range": "± 182983.78320006194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3405928.4210526315,
            "unit": "ns",
            "range": "± 226514.25189446734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359990.3225806453,
            "unit": "ns",
            "range": "± 207851.78773876152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6672983.838383839,
            "unit": "ns",
            "range": "± 468918.81693849096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62029.5918367347,
            "unit": "ns",
            "range": "± 14741.841770984975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10528820.430107526,
            "unit": "ns",
            "range": "± 904679.6283238396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23658292,
            "unit": "ns",
            "range": "± 1643861.064730646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63657403.06122449,
            "unit": "ns",
            "range": "± 3736431.849763713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127712862.5,
            "unit": "ns",
            "range": "± 7457225.478494335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264515173.7704918,
            "unit": "ns",
            "range": "± 11529155.980786301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6065122.017045454,
            "unit": "ns",
            "range": "± 146548.9358618342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958182.001201923,
            "unit": "ns",
            "range": "± 65142.66307451914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497800.4095262096,
            "unit": "ns",
            "range": "± 44921.458040788966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202916.0688920454,
            "unit": "ns",
            "range": "± 75943.46614525076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1077748.7840221773,
            "unit": "ns",
            "range": "± 32381.6442025879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1018669.2464192709,
            "unit": "ns",
            "range": "± 25302.63816285172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4170221.052631579,
            "unit": "ns",
            "range": "± 285702.86897282937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4179176.595744681,
            "unit": "ns",
            "range": "± 277956.2557157371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5313758.947368421,
            "unit": "ns",
            "range": "± 401688.3481524369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4766669.072164948,
            "unit": "ns",
            "range": "± 496055.62531686417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8209969.230769231,
            "unit": "ns",
            "range": "± 539489.5947286775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348545.652173913,
            "unit": "ns",
            "range": "± 47767.31931012551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327229.347826087,
            "unit": "ns",
            "range": "± 42251.977099311756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277627.6595744681,
            "unit": "ns",
            "range": "± 38303.00362813115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4875430.52631579,
            "unit": "ns",
            "range": "± 415334.1899932867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4689469.230769231,
            "unit": "ns",
            "range": "± 295473.5753149538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28437,
            "unit": "ns",
            "range": "± 8575.354102297932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116041.83673469388,
            "unit": "ns",
            "range": "± 17208.490612745383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121789,
            "unit": "ns",
            "range": "± 26677.792735766674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141655.4347826087,
            "unit": "ns",
            "range": "± 27330.699094529213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7268.9655172413795,
            "unit": "ns",
            "range": "± 1597.185776850601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31843.877551020407,
            "unit": "ns",
            "range": "± 11398.209900388098"
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
          "id": "30f8d6a18a6cc9efff4192b480e6dbc3125034b2",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T17:13:24+09:00",
          "tree_id": "a729cec235e4bf751c0832f83ff3a15818d0c231",
          "url": "https://github.com/planetarium/libplanet/commit/30f8d6a18a6cc9efff4192b480e6dbc3125034b2"
        },
        "date": 1688718584588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474486.4583333333,
            "unit": "ns",
            "range": "± 113328.70089378035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2765082.6530612246,
            "unit": "ns",
            "range": "± 171616.81545077692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1812648.9583333333,
            "unit": "ns",
            "range": "± 115349.27097599267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5164018.309859155,
            "unit": "ns",
            "range": "± 251451.6376731939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50192.63157894737,
            "unit": "ns",
            "range": "± 4233.58512387785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7293769.230769231,
            "unit": "ns",
            "range": "± 74862.85666264885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20679058.333333332,
            "unit": "ns",
            "range": "± 531201.3839988736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51525651.428571425,
            "unit": "ns",
            "range": "± 1662470.8946362357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104669741.1764706,
            "unit": "ns",
            "range": "± 2142455.18887176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210414266.66666666,
            "unit": "ns",
            "range": "± 2734594.218439696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4896421.40625,
            "unit": "ns",
            "range": "± 21597.770153579833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1561505,
            "unit": "ns",
            "range": "± 5235.093936335018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216197.3828125,
            "unit": "ns",
            "range": "± 4405.633257371173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664909.8307291665,
            "unit": "ns",
            "range": "± 4244.830986320045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863860.7747395834,
            "unit": "ns",
            "range": "± 3065.368339994022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786726.3509114584,
            "unit": "ns",
            "range": "± 938.6743141248169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352423.076923077,
            "unit": "ns",
            "range": "± 116435.17162044895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504983.3333333335,
            "unit": "ns",
            "range": "± 90929.34986387324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231947.826086956,
            "unit": "ns",
            "range": "± 158127.6119526117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3810850,
            "unit": "ns",
            "range": "± 142221.54106950905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6443078.260869565,
            "unit": "ns",
            "range": "± 159050.72077377117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282051.78571428574,
            "unit": "ns",
            "range": "± 12143.700066236044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265860,
            "unit": "ns",
            "range": "± 12368.467973035302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233248.45360824742,
            "unit": "ns",
            "range": "± 15171.513282863258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4107969.230769231,
            "unit": "ns",
            "range": "± 109461.98159810838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822941.6666666665,
            "unit": "ns",
            "range": "± 97080.75937372817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21997.938144329895,
            "unit": "ns",
            "range": "± 2572.084894490723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97098.94736842105,
            "unit": "ns",
            "range": "± 6907.01916703553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74079.16666666667,
            "unit": "ns",
            "range": "± 5040.340770991512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109410.20408163265,
            "unit": "ns",
            "range": "± 15127.618558679034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5761.855670103093,
            "unit": "ns",
            "range": "± 1278.9516620857453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22712.244897959183,
            "unit": "ns",
            "range": "± 2606.109606216299"
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
          "id": "b067d4a65140f7cb80842dd61704970b66c2856c",
          "message": "Add testcase for BlockType.PreEvaluationHash",
          "timestamp": "2023-07-07T17:35:48+09:00",
          "tree_id": "420190d535fca666c82612da15236887a375ab80",
          "url": "https://github.com/planetarium/libplanet/commit/b067d4a65140f7cb80842dd61704970b66c2856c"
        },
        "date": 1688719817758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365374.2424242424,
            "unit": "ns",
            "range": "± 114487.58785848762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2453315.714285714,
            "unit": "ns",
            "range": "± 80512.67325472337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1754557.731958763,
            "unit": "ns",
            "range": "± 127509.15313146113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4648700,
            "unit": "ns",
            "range": "± 137074.79148821806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42457.53424657534,
            "unit": "ns",
            "range": "± 2116.595655516134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6927080,
            "unit": "ns",
            "range": "± 82992.58314538027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17495640,
            "unit": "ns",
            "range": "± 90404.07544542922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45884890,
            "unit": "ns",
            "range": "± 237712.59898096632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90833893.33333333,
            "unit": "ns",
            "range": "± 581662.3252942094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181381040,
            "unit": "ns",
            "range": "± 1908378.982951612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4879984.947916667,
            "unit": "ns",
            "range": "± 10515.685730638595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514730.1532451923,
            "unit": "ns",
            "range": "± 1280.0483031359365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153204.1796875,
            "unit": "ns",
            "range": "± 1130.4954241395312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634740.9635416665,
            "unit": "ns",
            "range": "± 33847.385151064125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848710.9933035715,
            "unit": "ns",
            "range": "± 4183.853693511136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755814.2578125,
            "unit": "ns",
            "range": "± 1162.6831672152944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992831.5789473685,
            "unit": "ns",
            "range": "± 65597.22260915539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3041818.604651163,
            "unit": "ns",
            "range": "± 53145.71279494551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3977126.6666666665,
            "unit": "ns",
            "range": "± 59508.96050976173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3564305.5555555555,
            "unit": "ns",
            "range": "± 118403.77152401485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827571.428571428,
            "unit": "ns",
            "range": "± 158834.94622675813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256351.61290322582,
            "unit": "ns",
            "range": "± 7375.629734368084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239144.64285714287,
            "unit": "ns",
            "range": "± 8794.428394115264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220371.21212121213,
            "unit": "ns",
            "range": "± 10293.773549713142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3835971.4285714286,
            "unit": "ns",
            "range": "± 30244.29834559867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3538080,
            "unit": "ns",
            "range": "± 47196.73414851619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16188.947368421053,
            "unit": "ns",
            "range": "± 1499.5243740147332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78572.22222222222,
            "unit": "ns",
            "range": "± 4363.743053069061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66568.57142857143,
            "unit": "ns",
            "range": "± 3035.802921614311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82882.75862068965,
            "unit": "ns",
            "range": "± 7186.634993797988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4238.775510204082,
            "unit": "ns",
            "range": "± 691.5741274997614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16221.978021978022,
            "unit": "ns",
            "range": "± 1550.3979559241627"
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
          "id": "f6eac08c103fc977a1a5d6467fa1e809fb0286c2",
          "message": "Changelog",
          "timestamp": "2023-07-07T17:46:13+09:00",
          "tree_id": "71dfea0053205aaabb82b766cf72e2f00fcc64cf",
          "url": "https://github.com/planetarium/libplanet/commit/f6eac08c103fc977a1a5d6467fa1e809fb0286c2"
        },
        "date": 1688720913799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1923855.7894736843,
            "unit": "ns",
            "range": "± 262463.02544694504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3525125,
            "unit": "ns",
            "range": "± 280238.83610798465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2396544.6808510637,
            "unit": "ns",
            "range": "± 266148.23083735514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717511.235955056,
            "unit": "ns",
            "range": "± 399425.20105265646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71498.96907216495,
            "unit": "ns",
            "range": "± 13895.693988646872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10031682.02247191,
            "unit": "ns",
            "range": "± 602896.3116719833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26881206.410256412,
            "unit": "ns",
            "range": "± 1376809.2726790442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68638803.7037037,
            "unit": "ns",
            "range": "± 2882677.974866162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137614067.5,
            "unit": "ns",
            "range": "± 4766889.455366665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280134180,
            "unit": "ns",
            "range": "± 6250968.640610408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6729491.536458333,
            "unit": "ns",
            "range": "± 142135.47586616792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2068482.578125,
            "unit": "ns",
            "range": "± 33066.49833229099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1583470.859375,
            "unit": "ns",
            "range": "± 25812.798572841573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3514255.625,
            "unit": "ns",
            "range": "± 42640.67704968106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1113037.0192307692,
            "unit": "ns",
            "range": "± 13294.524416493825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1040772.4379595588,
            "unit": "ns",
            "range": "± 21024.738921346645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114890.8163265307,
            "unit": "ns",
            "range": "± 269727.268549783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4402731.521739131,
            "unit": "ns",
            "range": "± 293180.3506486239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5568359.302325581,
            "unit": "ns",
            "range": "± 299457.0004988076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4957762.5,
            "unit": "ns",
            "range": "± 358487.2257138321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8794689.361702127,
            "unit": "ns",
            "range": "± 666956.5531251474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343232.2916666667,
            "unit": "ns",
            "range": "± 29815.349260659146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342424.4680851064,
            "unit": "ns",
            "range": "± 34474.009802524604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303578.8888888889,
            "unit": "ns",
            "range": "± 24547.557577511117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5381245.833333333,
            "unit": "ns",
            "range": "± 332892.3922599635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4762200,
            "unit": "ns",
            "range": "± 239728.73113862122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25246.236559139787,
            "unit": "ns",
            "range": "± 4838.737688870143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120360.41666666667,
            "unit": "ns",
            "range": "± 14949.13818439513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122182.47422680413,
            "unit": "ns",
            "range": "± 22955.917947545306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134939.13043478262,
            "unit": "ns",
            "range": "± 19475.41677541732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9312.37113402062,
            "unit": "ns",
            "range": "± 1654.8072478362571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25196.808510638297,
            "unit": "ns",
            "range": "± 4453.256682610729"
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
          "id": "87dc63ea2ccd8f0beb8a3aebb7f9629accfd45b6",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T18:48:06+09:00",
          "tree_id": "cd72b03faf95084b623960ffeb40f4e97d72bbb7",
          "url": "https://github.com/planetarium/libplanet/commit/87dc63ea2ccd8f0beb8a3aebb7f9629accfd45b6"
        },
        "date": 1688724580218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711860.6382978724,
            "unit": "ns",
            "range": "± 195656.14901926945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3434172.0430107526,
            "unit": "ns",
            "range": "± 330121.7033042813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2372920.212765957,
            "unit": "ns",
            "range": "± 308347.7765567333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6492947.311827957,
            "unit": "ns",
            "range": "± 671299.5080263286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63404.08163265306,
            "unit": "ns",
            "range": "± 17507.082033076073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9027933.70786517,
            "unit": "ns",
            "range": "± 807834.8043527188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25097879,
            "unit": "ns",
            "range": "± 2299069.9500034987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64408053.65853658,
            "unit": "ns",
            "range": "± 3414413.7089116387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130919810.41666667,
            "unit": "ns",
            "range": "± 5140024.824397359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263449520.754717,
            "unit": "ns",
            "range": "± 10899849.486352455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6070972.65625,
            "unit": "ns",
            "range": "± 70804.12718585854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988976.6644021738,
            "unit": "ns",
            "range": "± 50298.088642364186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1513174.31640625,
            "unit": "ns",
            "range": "± 28597.21487751585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3284812.8385416665,
            "unit": "ns",
            "range": "± 46369.0499826837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050807.3701746324,
            "unit": "ns",
            "range": "± 21194.284948071174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972069.0863715278,
            "unit": "ns",
            "range": "± 20525.338928918998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3782152.0408163266,
            "unit": "ns",
            "range": "± 402673.860568926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4152078.350515464,
            "unit": "ns",
            "range": "± 556061.0188764516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448985.263157895,
            "unit": "ns",
            "range": "± 664155.093712244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738106.382978723,
            "unit": "ns",
            "range": "± 449884.87650659826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8399447.826086957,
            "unit": "ns",
            "range": "± 705360.1915938637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358882.4742268041,
            "unit": "ns",
            "range": "± 52380.09523805551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330088.6597938144,
            "unit": "ns",
            "range": "± 58942.3851391634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278213.9784946237,
            "unit": "ns",
            "range": "± 56820.335825717884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5043147.872340426,
            "unit": "ns",
            "range": "± 468715.48853112676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4542903.260869565,
            "unit": "ns",
            "range": "± 461698.247027137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31118.75,
            "unit": "ns",
            "range": "± 11094.050681618315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114269.07216494845,
            "unit": "ns",
            "range": "± 26053.592046110545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114014.43298969071,
            "unit": "ns",
            "range": "± 27860.6390125131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134954.73684210525,
            "unit": "ns",
            "range": "± 27908.279746115815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7021.978021978022,
            "unit": "ns",
            "range": "± 1725.2247646032931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27231.25,
            "unit": "ns",
            "range": "± 12017.849115728697"
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
          "id": "0fefde7e3a07e1d5b811634639b7526811da1f01",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-10T10:09:44+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/planetarium/libplanet/commit/0fefde7e3a07e1d5b811634639b7526811da1f01"
        },
        "date": 1688952052783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042949.4845360825,
            "unit": "ns",
            "range": "± 119581.18504781538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1802245.8333333333,
            "unit": "ns",
            "range": "± 69917.05407377094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1339669.7916666667,
            "unit": "ns",
            "range": "± 130480.79602179954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3564993.75,
            "unit": "ns",
            "range": "± 226837.74577414303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36030.769230769234,
            "unit": "ns",
            "range": "± 606.0591491823982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092178.571428572,
            "unit": "ns",
            "range": "± 32059.924146256748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13036633.333333334,
            "unit": "ns",
            "range": "± 89387.50045781143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32340273.333333332,
            "unit": "ns",
            "range": "± 167540.2615435921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64412833.333333336,
            "unit": "ns",
            "range": "± 557448.3892403553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131235092.85714285,
            "unit": "ns",
            "range": "± 858004.6301330023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3621945.535714286,
            "unit": "ns",
            "range": "± 18072.127752878318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1142357.32421875,
            "unit": "ns",
            "range": "± 4588.391093100046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 814859.5177283654,
            "unit": "ns",
            "range": "± 1646.1980904570175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976587.8305288462,
            "unit": "ns",
            "range": "± 2894.068107268225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630066.2760416666,
            "unit": "ns",
            "range": "± 1260.0007267962123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559598.4299879808,
            "unit": "ns",
            "range": "± 803.3149786077086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174490.625,
            "unit": "ns",
            "range": "± 39975.987626243186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316019.14893617,
            "unit": "ns",
            "range": "± 89447.01525702454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2898356.6666666665,
            "unit": "ns",
            "range": "± 85174.20559565305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2591781.395348837,
            "unit": "ns",
            "range": "± 83490.80147740814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4343262.7450980395,
            "unit": "ns",
            "range": "± 160367.32580021943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179491.0447761194,
            "unit": "ns",
            "range": "± 6953.5848906372075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173260,
            "unit": "ns",
            "range": "± 8633.15070754823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143573.33333333334,
            "unit": "ns",
            "range": "± 2486.6692199654963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765900,
            "unit": "ns",
            "range": "± 35189.83213535247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2489935.714285714,
            "unit": "ns",
            "range": "± 32468.76859485025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10760.60606060606,
            "unit": "ns",
            "range": "± 1802.3124704632614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56030.33707865168,
            "unit": "ns",
            "range": "± 4092.3266469194295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46530,
            "unit": "ns",
            "range": "± 2011.7704488790591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66905.0505050505,
            "unit": "ns",
            "range": "± 14026.471865997783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2661.3636363636365,
            "unit": "ns",
            "range": "± 692.3941170858766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10375,
            "unit": "ns",
            "range": "± 1513.3789312243262"
          }
        ]
      }
    ]
  }
}