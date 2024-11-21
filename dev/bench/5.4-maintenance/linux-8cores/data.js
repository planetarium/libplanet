window.BENCHMARK_DATA = {
  "lastUpdate": 1732176708761,
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
      }
    ]
  }
}