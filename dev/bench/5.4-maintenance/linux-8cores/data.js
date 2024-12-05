window.BENCHMARK_DATA = {
  "lastUpdate": 1733372341396,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731482507616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10963336,
            "unit": "ns",
            "range": "± 172959.0705059602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29284284.192307692,
            "unit": "ns",
            "range": "± 114173.74484923159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71732196.13333334,
            "unit": "ns",
            "range": "± 521471.33512233116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145089791.6,
            "unit": "ns",
            "range": "± 717109.8588434989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302241960.56666666,
            "unit": "ns",
            "range": "± 1791905.118642465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111561.69230769231,
            "unit": "ns",
            "range": "± 8209.779812573548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194278.25,
            "unit": "ns",
            "range": "± 8882.473811718952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165522.3,
            "unit": "ns",
            "range": "± 3795.8784587607925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2900707.2,
            "unit": "ns",
            "range": "± 45143.109724519425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2889576.466666667,
            "unit": "ns",
            "range": "± 43380.11775796878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14309.68085106383,
            "unit": "ns",
            "range": "± 1899.785833785754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66341.18279569893,
            "unit": "ns",
            "range": "± 6282.606143580304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58383.234042553195,
            "unit": "ns",
            "range": "± 4218.936222303071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57753.978494623654,
            "unit": "ns",
            "range": "± 10137.046512645215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2864.543956043956,
            "unit": "ns",
            "range": "± 445.8226082719426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13437.317647058824,
            "unit": "ns",
            "range": "± 2268.4990643687775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813479.691964286,
            "unit": "ns",
            "range": "± 8947.309899561738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210570.2403846155,
            "unit": "ns",
            "range": "± 2020.5093645425327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777233.4025390625,
            "unit": "ns",
            "range": "± 1261.4732623131752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957144.1841145833,
            "unit": "ns",
            "range": "± 1544.5328647334063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621016.8103376116,
            "unit": "ns",
            "range": "± 474.1087999024066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585910.3370442708,
            "unit": "ns",
            "range": "± 678.225260618556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517443.189189189,
            "unit": "ns",
            "range": "± 79212.09456082583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2688888.466666667,
            "unit": "ns",
            "range": "± 42931.559877931075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3104534.4375,
            "unit": "ns",
            "range": "± 95369.45501606101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2664324,
            "unit": "ns",
            "range": "± 45377.642026069996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3285267.5714285714,
            "unit": "ns",
            "range": "± 57131.7853667012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052891.1397849463,
            "unit": "ns",
            "range": "± 98915.31508783613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2005672.517857143,
            "unit": "ns",
            "range": "± 85949.50101531418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699524.7207792208,
            "unit": "ns",
            "range": "± 87002.86278451193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8083451.928571428,
            "unit": "ns",
            "range": "± 295137.30989766255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31477.75581395349,
            "unit": "ns",
            "range": "± 1152.3534116676444"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "449e3cfb04ed1e9749816e6a0cdea7d55cbd77e7",
          "message": "Merge pull request #3985 from planetarium/prepare/5.4.1\n\n🔧 Prepare 5.4.1",
          "timestamp": "2024-11-21T15:08:58+09:00",
          "tree_id": "fab508f993e275a5d9142bada18e2d94b1a43499",
          "url": "https://github.com/planetarium/libplanet/commit/449e3cfb04ed1e9749816e6a0cdea7d55cbd77e7"
        },
        "date": 1732169843860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10713348.214285715,
            "unit": "ns",
            "range": "± 56313.81166446931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27969165.933333334,
            "unit": "ns",
            "range": "± 106102.38795782298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70761331.33333333,
            "unit": "ns",
            "range": "± 335754.34969412355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141766698.96666667,
            "unit": "ns",
            "range": "± 523887.0838023981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294990933.64285713,
            "unit": "ns",
            "range": "± 707230.7763360293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117844.89024390244,
            "unit": "ns",
            "range": "± 6109.534691635584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190782,
            "unit": "ns",
            "range": "± 6729.867114929936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168434.13333333333,
            "unit": "ns",
            "range": "± 4899.151668178491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2862380.8,
            "unit": "ns",
            "range": "± 41866.13637740446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853642.566666667,
            "unit": "ns",
            "range": "± 49854.855818045406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14428.030303030304,
            "unit": "ns",
            "range": "± 2267.0569587406485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59488.89411764706,
            "unit": "ns",
            "range": "± 3225.518832475709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49228.25,
            "unit": "ns",
            "range": "± 911.2906963934907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52573.61224489796,
            "unit": "ns",
            "range": "± 9309.479242727615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3558.46875,
            "unit": "ns",
            "range": "± 425.67875095329566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16894.875,
            "unit": "ns",
            "range": "± 2308.1517338155627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750705.4363839286,
            "unit": "ns",
            "range": "± 4482.168090887732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216050.584765625,
            "unit": "ns",
            "range": "± 2397.0948444209416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759924.6869140625,
            "unit": "ns",
            "range": "± 1011.9240056163264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990476.8901041667,
            "unit": "ns",
            "range": "± 3186.240366517599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635225.623046875,
            "unit": "ns",
            "range": "± 437.41505517597574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558404.5615885417,
            "unit": "ns",
            "range": "± 966.8173663100335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407472.6666666665,
            "unit": "ns",
            "range": "± 37952.23318041973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509372.230769231,
            "unit": "ns",
            "range": "± 67528.03767994903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3077609.285714286,
            "unit": "ns",
            "range": "± 50510.98634368654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2581550.8,
            "unit": "ns",
            "range": "± 37299.312648205356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3231249.533333333,
            "unit": "ns",
            "range": "± 48385.93437274731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982987.1395348837,
            "unit": "ns",
            "range": "± 55226.63730737461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893803.7051282052,
            "unit": "ns",
            "range": "± 59720.58453074332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538011.8235294118,
            "unit": "ns",
            "range": "± 52577.49701030123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7661554.235294118,
            "unit": "ns",
            "range": "± 201910.5431742677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30479.458333333332,
            "unit": "ns",
            "range": "± 796.6579637660595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dea6bfac0d9675f332eeb52028913d6e7853b747",
          "message": "Merge pull request #3990 from planetarium/port/5.3.2-to-5.4.1\n\n🔀 Port 5.3.2 to 5.4.1",
          "timestamp": "2024-11-21T16:59:52+09:00",
          "tree_id": "a6817dda74909352d820c37eb73962ef30f8f415",
          "url": "https://github.com/planetarium/libplanet/commit/dea6bfac0d9675f332eeb52028913d6e7853b747"
        },
        "date": 1732176681896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11015632.42857143,
            "unit": "ns",
            "range": "± 135738.2820202252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28409029.214285713,
            "unit": "ns",
            "range": "± 238094.21029352373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71907658.33333333,
            "unit": "ns",
            "range": "± 293200.9007418114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145915027.5,
            "unit": "ns",
            "range": "± 416424.89848438127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300590619.06666666,
            "unit": "ns",
            "range": "± 3280128.7797766957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142307.07575757575,
            "unit": "ns",
            "range": "± 20346.966199718016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218472.96391752578,
            "unit": "ns",
            "range": "± 22524.32097851021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180552.24747474748,
            "unit": "ns",
            "range": "± 14061.85217598499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2948706.066666667,
            "unit": "ns",
            "range": "± 35963.77766083668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929842.888888889,
            "unit": "ns",
            "range": "± 60385.40864157878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19399.74,
            "unit": "ns",
            "range": "± 5051.154198774571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91454.48453608247,
            "unit": "ns",
            "range": "± 17254.471256335153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51893.67647058824,
            "unit": "ns",
            "range": "± 2126.0401097428276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66720.34042553192,
            "unit": "ns",
            "range": "± 9630.574901388361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3993.5425531914893,
            "unit": "ns",
            "range": "± 540.4234284713451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15863.5,
            "unit": "ns",
            "range": "± 2911.159140009618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3839757.8904747595,
            "unit": "ns",
            "range": "± 20439.426978108375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195383.8752604167,
            "unit": "ns",
            "range": "± 1698.311771444567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773957.5291015625,
            "unit": "ns",
            "range": "± 737.6784312100433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952122.542689732,
            "unit": "ns",
            "range": "± 2586.7162089255053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625946.5582449777,
            "unit": "ns",
            "range": "± 1571.8651119086078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589769.3435546875,
            "unit": "ns",
            "range": "± 1947.6489167446641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435890.3636363638,
            "unit": "ns",
            "range": "± 73347.20943900071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2605114.1481481483,
            "unit": "ns",
            "range": "± 70950.40632111316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162073.222222222,
            "unit": "ns",
            "range": "± 119716.17738234212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2714190.012820513,
            "unit": "ns",
            "range": "± 93970.9704177647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3444185.9838709678,
            "unit": "ns",
            "range": "± 103201.73370794083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070592.914893617,
            "unit": "ns",
            "range": "± 91347.54388923015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054104.3780487804,
            "unit": "ns",
            "range": "± 73721.23392829068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683507.880952381,
            "unit": "ns",
            "range": "± 89047.06962597706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7970508.625,
            "unit": "ns",
            "range": "± 240032.25871277816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36621.02040816326,
            "unit": "ns",
            "range": "± 6257.875537832459"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "368bb486af3cd1d3684a857b856596719a4a4076",
          "message": "Merge pull request #3991 from planetarium/release/5.4.1\n\n🚀 Release 5.4.1",
          "timestamp": "2024-11-22T10:19:44+09:00",
          "tree_id": "1c9ba778bdd76c9a61f06055f9578e53c5c85f81",
          "url": "https://github.com/planetarium/libplanet/commit/368bb486af3cd1d3684a857b856596719a4a4076"
        },
        "date": 1732238883642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10793004.26923077,
            "unit": "ns",
            "range": "± 61010.359145194685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27626166.666666668,
            "unit": "ns",
            "range": "± 165733.78923858874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72187442.21428572,
            "unit": "ns",
            "range": "± 318853.2104363479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141109010.57142857,
            "unit": "ns",
            "range": "± 535330.3839517761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293035552.9230769,
            "unit": "ns",
            "range": "± 2769034.680995451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110881.07608695653,
            "unit": "ns",
            "range": "± 7051.550265579429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193117.8775510204,
            "unit": "ns",
            "range": "± 7715.391220996329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164033.40740740742,
            "unit": "ns",
            "range": "± 4566.848823180943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2998554.466666667,
            "unit": "ns",
            "range": "± 51370.02805676069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2783743.933333333,
            "unit": "ns",
            "range": "± 40248.45865277091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13367.430107526881,
            "unit": "ns",
            "range": "± 1027.8665896118066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59847.52702702703,
            "unit": "ns",
            "range": "± 2976.227428261992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50372.05,
            "unit": "ns",
            "range": "± 1144.6809012949739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59607.551546391755,
            "unit": "ns",
            "range": "± 9968.046337099628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2675.1938775510203,
            "unit": "ns",
            "range": "± 404.04267428396906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12798.123655913978,
            "unit": "ns",
            "range": "± 957.3352272116607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743085.4249441964,
            "unit": "ns",
            "range": "± 4761.310436689078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222910.6895926339,
            "unit": "ns",
            "range": "± 1709.0076136071914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748079.3814603365,
            "unit": "ns",
            "range": "± 673.1256761479075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944859.2017299107,
            "unit": "ns",
            "range": "± 2809.630101274696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616947.736328125,
            "unit": "ns",
            "range": "± 911.7537174257403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571965.8172526042,
            "unit": "ns",
            "range": "± 439.0283109789901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444549.466666667,
            "unit": "ns",
            "range": "± 32158.228309111688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548222.8666666667,
            "unit": "ns",
            "range": "± 42712.82167463914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3052275.3571428573,
            "unit": "ns",
            "range": "± 41868.66045671345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554313.1333333333,
            "unit": "ns",
            "range": "± 45586.684402773746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3286672.3571428573,
            "unit": "ns",
            "range": "± 30240.515954738457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012799.1944444445,
            "unit": "ns",
            "range": "± 49796.81609190728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1934509.6363636365,
            "unit": "ns",
            "range": "± 69203.78543638461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1583738.1267605633,
            "unit": "ns",
            "range": "± 77007.9343340541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7765275.159090909,
            "unit": "ns",
            "range": "± 283678.3792111373"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30228.685185185186,
            "unit": "ns",
            "range": "± 853.3934991476467"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bff17d33958cd1fe198ae447e68755a454971d9f",
          "message": "Merge pull request #3992 from planetarium/prepare/5.4.2\n\n🔧 Prepare 5.4.2",
          "timestamp": "2024-12-05T13:10:08+09:00",
          "tree_id": "aa9bcb4db8fdd915feab73d8f0255ce4140d0672",
          "url": "https://github.com/planetarium/libplanet/commit/bff17d33958cd1fe198ae447e68755a454971d9f"
        },
        "date": 1733372313950,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10626439.366666667,
            "unit": "ns",
            "range": "± 78828.5045017407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28045683,
            "unit": "ns",
            "range": "± 126274.69026859093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70269463.9,
            "unit": "ns",
            "range": "± 374569.6025409506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140336083.76666668,
            "unit": "ns",
            "range": "± 616677.6725709268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295988462.28571427,
            "unit": "ns",
            "range": "± 1545059.1340766107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122543.1,
            "unit": "ns",
            "range": "± 17359.84549604243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201080.09375,
            "unit": "ns",
            "range": "± 15198.708076383282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166381.88888888888,
            "unit": "ns",
            "range": "± 5431.164698966658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997115.933333333,
            "unit": "ns",
            "range": "± 42569.15354617819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848773.5714285714,
            "unit": "ns",
            "range": "± 30898.772286947897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24355.392473118278,
            "unit": "ns",
            "range": "± 1727.135253523727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68428.64141414141,
            "unit": "ns",
            "range": "± 15609.56579558627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51248.27472527473,
            "unit": "ns",
            "range": "± 3381.887983774527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57473.61224489796,
            "unit": "ns",
            "range": "± 11209.882075979847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2779.846153846154,
            "unit": "ns",
            "range": "± 566.7326417099047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18472.41,
            "unit": "ns",
            "range": "± 6623.2692011581485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683713.1310096155,
            "unit": "ns",
            "range": "± 3287.282515988572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211586.2479073661,
            "unit": "ns",
            "range": "± 1273.9231825985487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761855.1588792067,
            "unit": "ns",
            "range": "± 790.810679718854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928908.212139423,
            "unit": "ns",
            "range": "± 1324.3076122416528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614259.6062360491,
            "unit": "ns",
            "range": "± 605.1182815829783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575647.0740094866,
            "unit": "ns",
            "range": "± 598.049423769479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424377.1333333333,
            "unit": "ns",
            "range": "± 30550.758423755484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2557886.710526316,
            "unit": "ns",
            "range": "± 45528.78310058246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2983781.6,
            "unit": "ns",
            "range": "± 35218.35313907468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2551963.2,
            "unit": "ns",
            "range": "± 42337.27183531247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3337485.090909091,
            "unit": "ns",
            "range": "± 80584.81621937467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995402.0568181818,
            "unit": "ns",
            "range": "± 61067.63151938627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918201.2325581396,
            "unit": "ns",
            "range": "± 60618.734467724076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561369.8636363635,
            "unit": "ns",
            "range": "± 88303.79105283663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7743170.9,
            "unit": "ns",
            "range": "± 270862.12671079993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31129.394736842107,
            "unit": "ns",
            "range": "± 683.3499912389813"
          }
        ]
      }
    ]
  }
}