window.BENCHMARK_DATA = {
  "lastUpdate": 1698032507435,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "582769981f960a65c5fc10d5a8a917e7fd8b9d4a",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>\n(cherry picked from commit 9ab368f1b8a524c29bf8e6d03020c4a2efde28ea)",
          "timestamp": "2023-10-18T19:04:17+09:00",
          "tree_id": "60b507f13188cb08f123b870814e041ea22f4f73",
          "url": "https://github.com/planetarium/libplanet/commit/582769981f960a65c5fc10d5a8a917e7fd8b9d4a"
        },
        "date": 1697628332906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70263.95833333333,
            "unit": "ns",
            "range": "± 12648.867949276948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9042307.52631579,
            "unit": "ns",
            "range": "± 488798.43544544163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24676813.27,
            "unit": "ns",
            "range": "± 1562297.6926058724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66569272.10769231,
            "unit": "ns",
            "range": "± 3094203.195698299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134525029.91304347,
            "unit": "ns",
            "range": "± 3379217.563896276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271055984.72727275,
            "unit": "ns",
            "range": "± 6411087.652071662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366722,
            "unit": "ns",
            "range": "± 30222.424005242996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351005.86315789475,
            "unit": "ns",
            "range": "± 32663.155449973903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289887.3510638298,
            "unit": "ns",
            "range": "± 28144.739200432738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5039005.97979798,
            "unit": "ns",
            "range": "± 349946.14287213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4535173.24742268,
            "unit": "ns",
            "range": "± 266060.1889755959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35319.41573033708,
            "unit": "ns",
            "range": "± 8166.251976063922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125943.6170212766,
            "unit": "ns",
            "range": "± 15344.055654805601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125116.44329896907,
            "unit": "ns",
            "range": "± 13918.018922552246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127673.95833333333,
            "unit": "ns",
            "range": "± 17075.220398618687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7832.962025316456,
            "unit": "ns",
            "range": "± 1186.339829411087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31010.438775510203,
            "unit": "ns",
            "range": "± 9502.838720821523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578300.3229166667,
            "unit": "ns",
            "range": "± 183090.39273720246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3174855.536082474,
            "unit": "ns",
            "range": "± 282279.0563097189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569660.8645833335,
            "unit": "ns",
            "range": "± 258485.63125488054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11859721.505263157,
            "unit": "ns",
            "range": "± 937567.2886700927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5489980.3167317705,
            "unit": "ns",
            "range": "± 201478.48224868998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841251.3220402645,
            "unit": "ns",
            "range": "± 49756.34061459261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277861.6923036317,
            "unit": "ns",
            "range": "± 41034.202541624414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2942777.2728949655,
            "unit": "ns",
            "range": "± 97347.52721012788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920368.7119140625,
            "unit": "ns",
            "range": "± 14593.723424005175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906341.3864118303,
            "unit": "ns",
            "range": "± 28977.664928001057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4157560.397959184,
            "unit": "ns",
            "range": "± 302756.0111023954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4629628.381578947,
            "unit": "ns",
            "range": "± 234046.57772007503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5589496.311111111,
            "unit": "ns",
            "range": "± 309546.0275354189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5567893.909090909,
            "unit": "ns",
            "range": "± 259062.97907359112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13840567.530612245,
            "unit": "ns",
            "range": "± 552124.9362385104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7c0bebbfbe90ce56325d4e67173700a68f2d140d",
          "message": "fix: Remove GetAccountState, GetState from BlockChain",
          "timestamp": "2023-10-20T16:52:22+09:00",
          "tree_id": "d7fea795e4c5aa85d969933e29e4af1236e14e4a",
          "url": "https://github.com/planetarium/libplanet/commit/7c0bebbfbe90ce56325d4e67173700a68f2d140d"
        },
        "date": 1697789148830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5014567.340625,
            "unit": "ns",
            "range": "± 45589.6077688075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551285.7967447916,
            "unit": "ns",
            "range": "± 6879.461073110417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065685.7000558036,
            "unit": "ns",
            "range": "± 2889.9762622831813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602753.76796875,
            "unit": "ns",
            "range": "± 12644.791562452814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815175.3508649553,
            "unit": "ns",
            "range": "± 2359.6703441324617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746657.5057291667,
            "unit": "ns",
            "range": "± 1998.8171946081163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361727.125,
            "unit": "ns",
            "range": "± 62867.595377242375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3496566.785714286,
            "unit": "ns",
            "range": "± 47100.782853494995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4175013.1923076925,
            "unit": "ns",
            "range": "± 112733.69408336417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4164530.5,
            "unit": "ns",
            "range": "± 110219.23825435544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10356152,
            "unit": "ns",
            "range": "± 290516.0207929916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49667.09411764706,
            "unit": "ns",
            "range": "± 2686.642681079551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7927580.5,
            "unit": "ns",
            "range": "± 7575.966395000826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21715440.533333335,
            "unit": "ns",
            "range": "± 357221.4266399697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52749048,
            "unit": "ns",
            "range": "± 616890.1948815526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103754808.07142857,
            "unit": "ns",
            "range": "± 1037035.5696977703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208308734.25,
            "unit": "ns",
            "range": "± 1297171.2415814039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264545.1489361702,
            "unit": "ns",
            "range": "± 9672.152615445346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262410.2631578947,
            "unit": "ns",
            "range": "± 5779.761114268625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222818.64285714287,
            "unit": "ns",
            "range": "± 2120.8924684286476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4177118.285714286,
            "unit": "ns",
            "range": "± 42775.316984715115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852583.933333333,
            "unit": "ns",
            "range": "± 70224.39148642083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18476.329545454544,
            "unit": "ns",
            "range": "± 954.7456268507311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79345.63636363637,
            "unit": "ns",
            "range": "± 4041.0316911881064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68347.38461538461,
            "unit": "ns",
            "range": "± 754.7644818596879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72043.86458333333,
            "unit": "ns",
            "range": "± 7082.953908942662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4775.114583333333,
            "unit": "ns",
            "range": "± 499.0998185110062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17684.365853658535,
            "unit": "ns",
            "range": "± 950.209691116249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349879.9456521738,
            "unit": "ns",
            "range": "± 73209.46143446545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2568679.4444444445,
            "unit": "ns",
            "range": "± 95823.86315184456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138831.6515151514,
            "unit": "ns",
            "range": "± 100590.63700525435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9532814.442105263,
            "unit": "ns",
            "range": "± 821287.0214961357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "141cc92b4583b8cb649ba7ffaaee1630e5caaab4",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T12:25:25+09:00",
          "tree_id": "65a3a471159be7156a9f48e9c5bb82429af83fb9",
          "url": "https://github.com/planetarium/libplanet/commit/141cc92b4583b8cb649ba7ffaaee1630e5caaab4"
        },
        "date": 1698032478349,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5059459.140625,
            "unit": "ns",
            "range": "± 23134.467686977154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596918.3311197916,
            "unit": "ns",
            "range": "± 3238.547732357903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080403.161358173,
            "unit": "ns",
            "range": "± 1092.5266564035069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682750.7946428573,
            "unit": "ns",
            "range": "± 7077.318489902849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823732.1202473958,
            "unit": "ns",
            "range": "± 2252.2854527145246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755620.605844351,
            "unit": "ns",
            "range": "± 502.81381677226966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3843846.5,
            "unit": "ns",
            "range": "± 73305.92797311825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4089734.6666666665,
            "unit": "ns",
            "range": "± 72412.92883838067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4492934.714285715,
            "unit": "ns",
            "range": "± 128742.64626071516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4398744.254237288,
            "unit": "ns",
            "range": "± 166820.47767601834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11122109.125,
            "unit": "ns",
            "range": "± 437656.71951095463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52745.08888888889,
            "unit": "ns",
            "range": "± 2979.570682612538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8755838.705882354,
            "unit": "ns",
            "range": "± 174106.22387201036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22972371.384615384,
            "unit": "ns",
            "range": "± 108342.58413133965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57991042.53333333,
            "unit": "ns",
            "range": "± 466429.3678965868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116829924.57142857,
            "unit": "ns",
            "range": "± 563387.1919320078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229513546.6,
            "unit": "ns",
            "range": "± 1561707.6873892979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294155.1818181818,
            "unit": "ns",
            "range": "± 9530.927620909235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280592,
            "unit": "ns",
            "range": "± 6277.454299315926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255610.42105263157,
            "unit": "ns",
            "range": "± 11120.114898473988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4577339.2,
            "unit": "ns",
            "range": "± 51719.13097850184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166748.2,
            "unit": "ns",
            "range": "± 51487.43885121052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24882.13829787234,
            "unit": "ns",
            "range": "± 2484.3874457636516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94014.98888888888,
            "unit": "ns",
            "range": "± 5951.1265395522205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83682.96875,
            "unit": "ns",
            "range": "± 5643.04548132268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92996.25806451614,
            "unit": "ns",
            "range": "± 10639.394673553346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6549.546391752578,
            "unit": "ns",
            "range": "± 1220.9187372342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23325.94845360825,
            "unit": "ns",
            "range": "± 2392.3687371303417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504348.120879121,
            "unit": "ns",
            "range": "± 84015.73236653495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843893.4418604653,
            "unit": "ns",
            "range": "± 105259.96045060066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2322873.2613636362,
            "unit": "ns",
            "range": "± 127356.55355718994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9634049.661016949,
            "unit": "ns",
            "range": "± 426858.8301547194"
          }
        ]
      }
    ]
  }
}