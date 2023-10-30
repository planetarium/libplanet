window.BENCHMARK_DATA = {
  "lastUpdate": 1698634233916,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:51:50+09:00",
          "tree_id": "f230a237a3484e05deb8f4db80ecb1330c00e43d",
          "url": "https://github.com/planetarium/libplanet/commit/5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d"
        },
        "date": 1698631709393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296729.797979798,
            "unit": "ns",
            "range": "± 89606.96376432366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436821.875,
            "unit": "ns",
            "range": "± 73316.77066597449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911901.1235955057,
            "unit": "ns",
            "range": "± 100525.48014217141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8669053.409090908,
            "unit": "ns",
            "range": "± 609484.4069269493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53602.04081632653,
            "unit": "ns",
            "range": "± 5327.176571610986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7370652.631578947,
            "unit": "ns",
            "range": "± 118735.80555362329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20764813.333333332,
            "unit": "ns",
            "range": "± 363435.83412180137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53405613.333333336,
            "unit": "ns",
            "range": "± 573050.4563507559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105598553.33333333,
            "unit": "ns",
            "range": "± 1451059.106242583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209905353.33333334,
            "unit": "ns",
            "range": "± 2152085.8273732844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4663360.677083333,
            "unit": "ns",
            "range": "± 16264.748519023919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473812.9427083333,
            "unit": "ns",
            "range": "± 3964.183512296118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104474.8307291667,
            "unit": "ns",
            "range": "± 2552.0695917617777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710267.0479910714,
            "unit": "ns",
            "range": "± 6556.802062919858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846156.6861979166,
            "unit": "ns",
            "range": "± 3073.550065638635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772446.9921875,
            "unit": "ns",
            "range": "± 2278.259571248907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248924.242424242,
            "unit": "ns",
            "range": "± 94070.79126349153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400003.703703704,
            "unit": "ns",
            "range": "± 95203.25415204882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4129518.1818181816,
            "unit": "ns",
            "range": "± 129378.7450050854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021164.814814815,
            "unit": "ns",
            "range": "± 169384.30476554917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10435727.586206896,
            "unit": "ns",
            "range": "± 597898.4771661441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264258.3333333333,
            "unit": "ns",
            "range": "± 4094.887795850585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243208.33333333334,
            "unit": "ns",
            "range": "± 8037.725764231627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224745.33333333334,
            "unit": "ns",
            "range": "± 11308.479159502434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4133023.8095238097,
            "unit": "ns",
            "range": "± 95767.60884955782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801100,
            "unit": "ns",
            "range": "± 88444.67197067328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21805.434782608696,
            "unit": "ns",
            "range": "± 1822.892528791571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87152.12765957447,
            "unit": "ns",
            "range": "± 5600.052394597526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72254.73684210527,
            "unit": "ns",
            "range": "± 4369.1804679969555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83694.84536082474,
            "unit": "ns",
            "range": "± 11107.433426295545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5270.103092783505,
            "unit": "ns",
            "range": "± 653.2235688704404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19686.956521739132,
            "unit": "ns",
            "range": "± 1411.2746472451768"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "3da86109b54ecccfef8918889c1ecc7b1169a808",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:56:23+09:00",
          "tree_id": "21c37b93f74becf0df3b37da10da8f8884aba749",
          "url": "https://github.com/planetarium/libplanet/commit/3da86109b54ecccfef8918889c1ecc7b1169a808"
        },
        "date": 1698632528817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611339.393939394,
            "unit": "ns",
            "range": "± 144115.4928139813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3044100,
            "unit": "ns",
            "range": "± 105893.65320676062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335772.727272727,
            "unit": "ns",
            "range": "± 128392.76282758104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10524447.701149425,
            "unit": "ns",
            "range": "± 647706.5959315673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68639.17525773196,
            "unit": "ns",
            "range": "± 6605.309680808421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9856778.57142857,
            "unit": "ns",
            "range": "± 280822.67946443945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25672134.48275862,
            "unit": "ns",
            "range": "± 686369.9342378101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63721721.428571425,
            "unit": "ns",
            "range": "± 597476.9865906924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126213746.15384616,
            "unit": "ns",
            "range": "± 840900.2196211952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255424121.42857143,
            "unit": "ns",
            "range": "± 3216604.5492768567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5579308.426339285,
            "unit": "ns",
            "range": "± 81668.40291843681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1812619.4661458333,
            "unit": "ns",
            "range": "± 33143.7550073674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330858.5026041667,
            "unit": "ns",
            "range": "± 21367.334844367564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3278209.787326389,
            "unit": "ns",
            "range": "± 67089.18145831166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014565.1506696428,
            "unit": "ns",
            "range": "± 14248.784017991333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 951071.1669921875,
            "unit": "ns",
            "range": "± 18550.344953885553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4035295.3846153845,
            "unit": "ns",
            "range": "± 187114.67358845854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4217127.777777778,
            "unit": "ns",
            "range": "± 124869.01734242761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5143220,
            "unit": "ns",
            "range": "± 136110.71167741844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4985433.333333333,
            "unit": "ns",
            "range": "± 77977.4112590734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11927007.142857144,
            "unit": "ns",
            "range": "± 217522.14179092704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319411.62790697673,
            "unit": "ns",
            "range": "± 11789.99190803724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299683.3333333333,
            "unit": "ns",
            "range": "± 10802.00786815765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284519.04761904763,
            "unit": "ns",
            "range": "± 13034.56765362974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5043642.857142857,
            "unit": "ns",
            "range": "± 49919.17643375314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4646880,
            "unit": "ns",
            "range": "± 58916.0322589943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27375.25773195876,
            "unit": "ns",
            "range": "± 2293.4703929414413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112690.8163265306,
            "unit": "ns",
            "range": "± 7819.471951147484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99518.68686868687,
            "unit": "ns",
            "range": "± 8014.714101927912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110218.94736842105,
            "unit": "ns",
            "range": "± 11602.212690073868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7888.541666666667,
            "unit": "ns",
            "range": "± 1198.9354744646707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26694.845360824744,
            "unit": "ns",
            "range": "± 2423.469067181925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "a121fa6f3c7372670ea82fc6be01e72757763bf6",
          "message": "Use Nodejs 18",
          "timestamp": "2023-10-30T10:51:25+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/a121fa6f3c7372670ea82fc6be01e72757763bf6"
        },
        "date": 1698634166968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1257852.0833333333,
            "unit": "ns",
            "range": "± 113545.39920148488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2298619.35483871,
            "unit": "ns",
            "range": "± 69804.40492000888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1865677.2727272727,
            "unit": "ns",
            "range": "± 151724.3895062937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7464354.054054054,
            "unit": "ns",
            "range": "± 225802.89166856543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43196.470588235294,
            "unit": "ns",
            "range": "± 2249.8913761517006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6971960,
            "unit": "ns",
            "range": "± 81496.87811724535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17916640,
            "unit": "ns",
            "range": "± 136923.40820431587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45843300,
            "unit": "ns",
            "range": "± 378512.8380536499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91258080,
            "unit": "ns",
            "range": "± 953836.9066939214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181902860,
            "unit": "ns",
            "range": "± 1211920.1493026323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4433486.104910715,
            "unit": "ns",
            "range": "± 6433.33478530589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1459649.609375,
            "unit": "ns",
            "range": "± 1555.4455409645363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075381.849888393,
            "unit": "ns",
            "range": "± 1091.0294479538043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2460005.234375,
            "unit": "ns",
            "range": "± 2627.1003377498146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802562.8155048077,
            "unit": "ns",
            "range": "± 1031.5510436827378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718815.8658854166,
            "unit": "ns",
            "range": "± 649.4976553454217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2966840.909090909,
            "unit": "ns",
            "range": "± 69157.98792888856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3141677.1428571427,
            "unit": "ns",
            "range": "± 95392.09822286826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3927291.304347826,
            "unit": "ns",
            "range": "± 96534.6659968865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3638822.222222222,
            "unit": "ns",
            "range": "± 129757.90199950496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9082535.135135135,
            "unit": "ns",
            "range": "± 282449.12935903284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239155.31914893616,
            "unit": "ns",
            "range": "± 9275.582918765063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228851.35135135136,
            "unit": "ns",
            "range": "± 7711.341633580359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207270.49180327868,
            "unit": "ns",
            "range": "± 9225.134945034592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3743771.4285714286,
            "unit": "ns",
            "range": "± 29306.140825941075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3436380,
            "unit": "ns",
            "range": "± 46554.80947994832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16841.489361702126,
            "unit": "ns",
            "range": "± 1905.1379073763053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78408.76288659793,
            "unit": "ns",
            "range": "± 5657.917619313804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63422.22222222222,
            "unit": "ns",
            "range": "± 1300.0251380173863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74950.51546391753,
            "unit": "ns",
            "range": "± 10267.060230328636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3896.875,
            "unit": "ns",
            "range": "± 467.57000601654914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16361.290322580646,
            "unit": "ns",
            "range": "± 1771.6997646613218"
          }
        ]
      }
    ]
  }
}