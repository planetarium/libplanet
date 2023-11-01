window.BENCHMARK_DATA = {
  "lastUpdate": 1698808846847,
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
          "id": "0bcbff442cb85c7188c18209025a39ac1d4c2a3e",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T13:55:20+09:00",
          "tree_id": "02d979dbbc51901a561318d48bdc42129807dccd",
          "url": "https://github.com/planetarium/libplanet/commit/0bcbff442cb85c7188c18209025a39ac1d4c2a3e"
        },
        "date": 1698037753341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5024870.324479166,
            "unit": "ns",
            "range": "± 30620.10636648054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556243.6072916666,
            "unit": "ns",
            "range": "± 7174.111638770455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062001.7368489583,
            "unit": "ns",
            "range": "± 4082.1071102768947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609462.252511161,
            "unit": "ns",
            "range": "± 14449.724462639186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806842.6021484375,
            "unit": "ns",
            "range": "± 3412.218986342717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756487.5828125,
            "unit": "ns",
            "range": "± 3081.7849193492066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479924.382352941,
            "unit": "ns",
            "range": "± 110679.50802751615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610140.7804878047,
            "unit": "ns",
            "range": "± 127276.60555469575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4254843.94117647,
            "unit": "ns",
            "range": "± 84538.43208377964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4327377.428571428,
            "unit": "ns",
            "range": "± 121645.8702930974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10740479.794871794,
            "unit": "ns",
            "range": "± 340750.5892496878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48575.36363636364,
            "unit": "ns",
            "range": "± 2598.3819597544607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8082120.571428572,
            "unit": "ns",
            "range": "± 99458.51621015304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21974568.266666666,
            "unit": "ns",
            "range": "± 221141.6067288969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56159500.86666667,
            "unit": "ns",
            "range": "± 756649.5591283484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111557241.86666666,
            "unit": "ns",
            "range": "± 1557833.861865336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220460212.64285713,
            "unit": "ns",
            "range": "± 3409390.04329023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264950.16,
            "unit": "ns",
            "range": "± 6653.0663962817425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265583.03846153844,
            "unit": "ns",
            "range": "± 6845.964238765898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233801.9375,
            "unit": "ns",
            "range": "± 4352.199451139619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289768.045454546,
            "unit": "ns",
            "range": "± 100841.28279367546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4076406.705882353,
            "unit": "ns",
            "range": "± 80065.7447123649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18990.59574468085,
            "unit": "ns",
            "range": "± 1278.8078396437775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81258.33695652174,
            "unit": "ns",
            "range": "± 5439.602616136251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68900.38461538461,
            "unit": "ns",
            "range": "± 493.3392238040573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71355.6530612245,
            "unit": "ns",
            "range": "± 6902.865774373073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4986.378947368421,
            "unit": "ns",
            "range": "± 423.42549845700245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18729.364583333332,
            "unit": "ns",
            "range": "± 1841.0553044655876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415290.8260869565,
            "unit": "ns",
            "range": "± 81692.52849175385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2701291.023809524,
            "unit": "ns",
            "range": "± 92879.45923076544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202038.411764706,
            "unit": "ns",
            "range": "± 103958.49400849594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9566930.532608695,
            "unit": "ns",
            "range": "± 564484.0006712432"
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
          "id": "bd633356d388be0f006d5b4d7facdf0c669c2b96",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-25T18:00:47+09:00",
          "tree_id": "722b91f6a5ac3e1d291ba8b521e5b0e97bd1c629",
          "url": "https://github.com/planetarium/libplanet/commit/bd633356d388be0f006d5b4d7facdf0c669c2b96"
        },
        "date": 1698225446666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028409.015364584,
            "unit": "ns",
            "range": "± 25712.545874571017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891260.1510416667,
            "unit": "ns",
            "range": "± 8303.986418206441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288221.1766183036,
            "unit": "ns",
            "range": "± 1162.9137314783347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3154011.4021935095,
            "unit": "ns",
            "range": "± 3054.5534643185324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000006.7764423077,
            "unit": "ns",
            "range": "± 705.53122630163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902015.1154436384,
            "unit": "ns",
            "range": "± 1165.3892693571026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4344398.2,
            "unit": "ns",
            "range": "± 67835.69257741194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4561806.45,
            "unit": "ns",
            "range": "± 103257.57833611766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5445090.277777778,
            "unit": "ns",
            "range": "± 112644.50610493253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5400064.052631579,
            "unit": "ns",
            "range": "± 179770.27776926977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12840545.7,
            "unit": "ns",
            "range": "± 360478.10428645875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57230.215053763444,
            "unit": "ns",
            "range": "± 3298.793273599428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10498627.142857144,
            "unit": "ns",
            "range": "± 121457.83790451549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26575878.666666668,
            "unit": "ns",
            "range": "± 305346.9430396621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67370472.13333334,
            "unit": "ns",
            "range": "± 530342.9378784565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134917440.13333333,
            "unit": "ns",
            "range": "± 863405.318756564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268233547.06666666,
            "unit": "ns",
            "range": "± 1411434.170122942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323941.8125,
            "unit": "ns",
            "range": "± 8873.370881599581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322425.96774193546,
            "unit": "ns",
            "range": "± 9654.60875949537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283623.06976744183,
            "unit": "ns",
            "range": "± 10487.511960139269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5241862.4,
            "unit": "ns",
            "range": "± 36059.5923057533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4962566.8,
            "unit": "ns",
            "range": "± 49207.53802329767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23064.685393258427,
            "unit": "ns",
            "range": "± 1479.6485423872673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102574.37096774194,
            "unit": "ns",
            "range": "± 4321.43649171548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87775.02127659574,
            "unit": "ns",
            "range": "± 3409.713181163239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92943.57894736843,
            "unit": "ns",
            "range": "± 3795.0586688944454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6375.714285714285,
            "unit": "ns",
            "range": "± 817.6091622945779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23798.572916666668,
            "unit": "ns",
            "range": "± 1681.0449992085387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707524.5479452056,
            "unit": "ns",
            "range": "± 81072.6259756305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3266908.9032258065,
            "unit": "ns",
            "range": "± 98765.07567703434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2646963.6,
            "unit": "ns",
            "range": "± 114019.44179637192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11040128.378378378,
            "unit": "ns",
            "range": "± 307947.13817556336"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-27T11:59:10+09:00",
          "tree_id": "a34bdee629d9c80af766ac7e66843b4956cc0e06",
          "url": "https://github.com/planetarium/libplanet/commit/e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6"
        },
        "date": 1698383775504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49674.307692307695,
            "unit": "ns",
            "range": "± 3241.685421341833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5022616.472956731,
            "unit": "ns",
            "range": "± 6719.564062698903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568601.3075520834,
            "unit": "ns",
            "range": "± 2074.225693566063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105103.7611979167,
            "unit": "ns",
            "range": "± 535.079515975675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568078.566080729,
            "unit": "ns",
            "range": "± 1279.7206055407437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843756.6518554688,
            "unit": "ns",
            "range": "± 470.86060075562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752456.5852050781,
            "unit": "ns",
            "range": "± 493.9657511743308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8325711.45,
            "unit": "ns",
            "range": "± 188207.3371981228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22380879.533333335,
            "unit": "ns",
            "range": "± 238234.49247443659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57070356.8,
            "unit": "ns",
            "range": "± 312678.0951115699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113827474.4,
            "unit": "ns",
            "range": "± 1162987.6919938824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225467665.66666666,
            "unit": "ns",
            "range": "± 1878146.1015060516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3671665.8333333335,
            "unit": "ns",
            "range": "± 92819.54934765332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3906125.466666667,
            "unit": "ns",
            "range": "± 71100.93713252878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484659.769230769,
            "unit": "ns",
            "range": "± 119940.1461510891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4593227.733333333,
            "unit": "ns",
            "range": "± 72604.55574890076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10954481.162790697,
            "unit": "ns",
            "range": "± 328062.80895627645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277742.5961538461,
            "unit": "ns",
            "range": "± 11341.493271083138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266046.8947368421,
            "unit": "ns",
            "range": "± 5584.765268067693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246226.85294117648,
            "unit": "ns",
            "range": "± 7901.092111441047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4475906.533333333,
            "unit": "ns",
            "range": "± 61827.21911778093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4086457.466666667,
            "unit": "ns",
            "range": "± 56172.66189026558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21712.915789473685,
            "unit": "ns",
            "range": "± 2136.523272740273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90815.88421052632,
            "unit": "ns",
            "range": "± 5696.949134747209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77399.3294117647,
            "unit": "ns",
            "range": "± 4143.81534391698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86514.78125,
            "unit": "ns",
            "range": "± 8374.239063879962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5846.979166666667,
            "unit": "ns",
            "range": "± 745.225744380667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20006.541666666668,
            "unit": "ns",
            "range": "± 1853.2552294851444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471991.456521739,
            "unit": "ns",
            "range": "± 81472.56722794719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808857.48,
            "unit": "ns",
            "range": "± 69456.02683780101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2300599.222222222,
            "unit": "ns",
            "range": "± 112537.37099883845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9637444.149253732,
            "unit": "ns",
            "range": "± 457915.1919486526"
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
          "id": "05971d07e3cc38e9764c88ccea78c307710241fb",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:00:37+09:00",
          "tree_id": "b7fb4bf620c736e0b47ca6ce687f8d744b842edf",
          "url": "https://github.com/planetarium/libplanet/commit/05971d07e3cc38e9764c88ccea78c307710241fb"
        },
        "date": 1698401740584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51818.04210526316,
            "unit": "ns",
            "range": "± 4460.417917438712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5135108.503348215,
            "unit": "ns",
            "range": "± 36484.01895378276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596902.3472377232,
            "unit": "ns",
            "range": "± 1246.1474246460155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094746.4640066964,
            "unit": "ns",
            "range": "± 1068.0640568234517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611877.574776786,
            "unit": "ns",
            "range": "± 6494.310297492104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837845.221875,
            "unit": "ns",
            "range": "± 2214.7351494021354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762381.3712439904,
            "unit": "ns",
            "range": "± 304.25390510431157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8752932.590909092,
            "unit": "ns",
            "range": "± 210085.9044059424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23705572.133333333,
            "unit": "ns",
            "range": "± 233154.95087169166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58819458.23076923,
            "unit": "ns",
            "range": "± 173298.31524193278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117524289.71428572,
            "unit": "ns",
            "range": "± 481610.3720965621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235284785.93333334,
            "unit": "ns",
            "range": "± 596392.7862384064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838522.3666666667,
            "unit": "ns",
            "range": "± 114148.52630960254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988153.222222222,
            "unit": "ns",
            "range": "± 131170.8569727963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4681709.625,
            "unit": "ns",
            "range": "± 77090.03346034212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4730791.714285715,
            "unit": "ns",
            "range": "± 82887.6306216189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11146017.378378378,
            "unit": "ns",
            "range": "± 221842.04494644274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290607.2037037037,
            "unit": "ns",
            "range": "± 11309.986277588108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281952.1666666667,
            "unit": "ns",
            "range": "± 11057.101232862022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269651.69444444444,
            "unit": "ns",
            "range": "± 13228.015986820334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4622523.266666667,
            "unit": "ns",
            "range": "± 50884.7380198855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4328619.866666666,
            "unit": "ns",
            "range": "± 30618.028048069667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28158.56842105263,
            "unit": "ns",
            "range": "± 2854.6445717299116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105845.09375,
            "unit": "ns",
            "range": "± 7977.862764950371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87903.01030927835,
            "unit": "ns",
            "range": "± 6437.508018595079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107255,
            "unit": "ns",
            "range": "± 9705.219798300981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7191.747368421053,
            "unit": "ns",
            "range": "± 1101.3577014585908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25354.869565217392,
            "unit": "ns",
            "range": "± 2021.1944744825844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550357.7032967033,
            "unit": "ns",
            "range": "± 100814.18808299361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2867885.56097561,
            "unit": "ns",
            "range": "± 103356.1136237351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2458809.5606060605,
            "unit": "ns",
            "range": "± 115495.4490709321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9539682.45945946,
            "unit": "ns",
            "range": "± 323551.58308654715"
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
          "id": "d82c1d18d1df9b139da7b37ba29f1bb72f4769e9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:04:54+09:00",
          "tree_id": "ed08d121b65f76bb7c1ad1a5934f4f112474c902",
          "url": "https://github.com/planetarium/libplanet/commit/d82c1d18d1df9b139da7b37ba29f1bb72f4769e9"
        },
        "date": 1698402097793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56366.343373493975,
            "unit": "ns",
            "range": "± 2686.281664771221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5976856.5296875,
            "unit": "ns",
            "range": "± 66667.10822279348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880850.7938802084,
            "unit": "ns",
            "range": "± 20438.9106118152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286953.8059244792,
            "unit": "ns",
            "range": "± 5515.63918064884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100388.316145833,
            "unit": "ns",
            "range": "± 27929.55098915083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977654.341657366,
            "unit": "ns",
            "range": "± 5159.112027031266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901253.8014973958,
            "unit": "ns",
            "range": "± 7259.784610834042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9930586.27586207,
            "unit": "ns",
            "range": "± 287253.69310977863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26522104.866666667,
            "unit": "ns",
            "range": "± 434527.40983820026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66549787.333333336,
            "unit": "ns",
            "range": "± 1120738.3169718117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133025214.06666666,
            "unit": "ns",
            "range": "± 1624317.1648300826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265360932.66666666,
            "unit": "ns",
            "range": "± 2935258.1576579465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317984.583333333,
            "unit": "ns",
            "range": "± 45521.19068872976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4526497.192307692,
            "unit": "ns",
            "range": "± 120535.31564119099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5332966.458333333,
            "unit": "ns",
            "range": "± 137138.95496427643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5374051.291666667,
            "unit": "ns",
            "range": "± 208605.72313245686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12663639.161290323,
            "unit": "ns",
            "range": "± 370651.2689366378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321262.0714285714,
            "unit": "ns",
            "range": "± 5645.879620290641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305088.64705882355,
            "unit": "ns",
            "range": "± 9631.14350768366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273667.89361702127,
            "unit": "ns",
            "range": "± 10678.76061086158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5251371.722222222,
            "unit": "ns",
            "range": "± 99834.20415327755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4701044.458333333,
            "unit": "ns",
            "range": "± 117211.28880340283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24666,
            "unit": "ns",
            "range": "± 1822.5063964818864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104921.34939759035,
            "unit": "ns",
            "range": "± 5601.422612057724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87087.05319148937,
            "unit": "ns",
            "range": "± 6372.340388695374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98718.19387755102,
            "unit": "ns",
            "range": "± 11950.278397877024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6034.152173913043,
            "unit": "ns",
            "range": "± 462.2797767296814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23698.287234042553,
            "unit": "ns",
            "range": "± 2544.337066930767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700595.9642857143,
            "unit": "ns",
            "range": "± 71239.98631123686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3256690.4576271186,
            "unit": "ns",
            "range": "± 142743.63368318768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2661791.4142857143,
            "unit": "ns",
            "range": "± 125268.34325911656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11270800.492063493,
            "unit": "ns",
            "range": "± 480151.6330196613"
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
          "id": "91a635f42faf65291f9d9bdc4df4613fe0fe281b",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:02:49+09:00",
          "tree_id": "6dd5899d6a7b02e453602c1f164d19799f21e4ca",
          "url": "https://github.com/planetarium/libplanet/commit/91a635f42faf65291f9d9bdc4df4613fe0fe281b"
        },
        "date": 1698650584208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59015.01190476191,
            "unit": "ns",
            "range": "± 11832.2622738819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199432.1359375,
            "unit": "ns",
            "range": "± 100573.29002225782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002211.3736979167,
            "unit": "ns",
            "range": "± 43856.34182710535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473625.7268629808,
            "unit": "ns",
            "range": "± 60847.28567911885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3240658.33125,
            "unit": "ns",
            "range": "± 57912.73146811613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029401.5693359375,
            "unit": "ns",
            "range": "± 16119.340845543144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963108.0787963867,
            "unit": "ns",
            "range": "± 18569.879729418197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9841836,
            "unit": "ns",
            "range": "± 715243.4812892593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26739866.776119404,
            "unit": "ns",
            "range": "± 1254947.1517484349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69925162.93023255,
            "unit": "ns",
            "range": "± 2472742.2778221676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141377209.65789473,
            "unit": "ns",
            "range": "± 4794066.159456992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 321838990.41935486,
            "unit": "ns",
            "range": "± 9821123.414187238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3885345.9574468085,
            "unit": "ns",
            "range": "± 339962.7119954629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4198695.6,
            "unit": "ns",
            "range": "± 470905.16342195123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5300722.410526316,
            "unit": "ns",
            "range": "± 386075.50397328153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5035538.867346939,
            "unit": "ns",
            "range": "± 450006.7498789218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15060717.212765958,
            "unit": "ns",
            "range": "± 1406488.8478402013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357559.5,
            "unit": "ns",
            "range": "± 32581.980785199306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337575.9569892473,
            "unit": "ns",
            "range": "± 30026.79337688475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277494.77894736844,
            "unit": "ns",
            "range": "± 33087.84494637414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4989604.066666666,
            "unit": "ns",
            "range": "± 275859.044992828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4602552.189473684,
            "unit": "ns",
            "range": "± 353739.547840543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23699.31182795699,
            "unit": "ns",
            "range": "± 7243.5710565788195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100152.07608695653,
            "unit": "ns",
            "range": "± 13358.254312179883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102602.4255319149,
            "unit": "ns",
            "range": "± 17573.209401122072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111988.76842105263,
            "unit": "ns",
            "range": "± 24145.67906080719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6002.159574468085,
            "unit": "ns",
            "range": "± 1186.229975555897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18620.443037974685,
            "unit": "ns",
            "range": "± 1741.8189707434967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1741100.694736842,
            "unit": "ns",
            "range": "± 201771.7727575514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3293368.6842105263,
            "unit": "ns",
            "range": "± 354292.448316427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2656325.7291666665,
            "unit": "ns",
            "range": "± 301476.7017644797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12757428.96875,
            "unit": "ns",
            "range": "± 1378387.482168291"
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
          "id": "b9972efc5511ef243f5c0d7fa09b0d8b8494a450",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:15:06+09:00",
          "tree_id": "759b3c702fe49903a3487f8e56917b84415befe3",
          "url": "https://github.com/planetarium/libplanet/commit/b9972efc5511ef243f5c0d7fa09b0d8b8494a450"
        },
        "date": 1698650940907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48016.22988505747,
            "unit": "ns",
            "range": "± 2632.610441602789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5219625.547916667,
            "unit": "ns",
            "range": "± 27140.916414966094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1622500.3247395833,
            "unit": "ns",
            "range": "± 5633.044049172664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1129557.3260323661,
            "unit": "ns",
            "range": "± 2874.461592220497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588671.9419270833,
            "unit": "ns",
            "range": "± 5196.544983658838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818592.5190429688,
            "unit": "ns",
            "range": "± 1299.4537140282753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741017.8063802083,
            "unit": "ns",
            "range": "± 852.0402835670143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8019321.714285715,
            "unit": "ns",
            "range": "± 74048.85403094841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22096315.533333335,
            "unit": "ns",
            "range": "± 244914.41931297048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54762938.9375,
            "unit": "ns",
            "range": "± 1002875.6048272699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108427143.33333333,
            "unit": "ns",
            "range": "± 1761593.4413483506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219631381.2,
            "unit": "ns",
            "range": "± 4075854.203483261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365748.34375,
            "unit": "ns",
            "range": "± 102682.61273728596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619970.512195122,
            "unit": "ns",
            "range": "± 129218.10110838225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4291788.695652174,
            "unit": "ns",
            "range": "± 105935.0643269197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4305745.304347826,
            "unit": "ns",
            "range": "± 155455.38901289256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10986055.881355932,
            "unit": "ns",
            "range": "± 482706.1039697174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271121.347826087,
            "unit": "ns",
            "range": "± 6529.170500069081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258953.45652173914,
            "unit": "ns",
            "range": "± 9732.798628478453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225986.33333333334,
            "unit": "ns",
            "range": "± 5821.398813423414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4308634.647058823,
            "unit": "ns",
            "range": "± 83247.03896906872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3990270.4444444445,
            "unit": "ns",
            "range": "± 83750.04616484925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18703,
            "unit": "ns",
            "range": "± 960.4203524151981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83625.25,
            "unit": "ns",
            "range": "± 4857.13492771654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70897.29629629629,
            "unit": "ns",
            "range": "± 1948.6645291823443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77776.68085106384,
            "unit": "ns",
            "range": "± 8201.476802778332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4638.635416666667,
            "unit": "ns",
            "range": "± 466.61051310807653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18413.478260869564,
            "unit": "ns",
            "range": "± 1254.352978681285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403895.1797752809,
            "unit": "ns",
            "range": "± 72488.92330737688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2688163.054054054,
            "unit": "ns",
            "range": "± 90374.82967186837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247741.4838709678,
            "unit": "ns",
            "range": "± 101846.11155405032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9683210.043010753,
            "unit": "ns",
            "range": "± 571695.8173321778"
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
          "id": "6a11229c1a22ebfe5865a13fd81843db40f6d41c",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-31T13:03:55+09:00",
          "tree_id": "41f1594f08294afba15b0f8a6d4393124dee777d",
          "url": "https://github.com/planetarium/libplanet/commit/6a11229c1a22ebfe5865a13fd81843db40f6d41c"
        },
        "date": 1698726224227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46318.989130434784,
            "unit": "ns",
            "range": "± 3082.8506484680174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5166526.934709822,
            "unit": "ns",
            "range": "± 7827.533518896097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1663590.9949776786,
            "unit": "ns",
            "range": "± 1489.1075160674407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134408.0598958333,
            "unit": "ns",
            "range": "± 806.6752972934183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577897.7821514425,
            "unit": "ns",
            "range": "± 2857.541981322182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798430.6065755208,
            "unit": "ns",
            "range": "± 489.3882315364172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727549.9800502232,
            "unit": "ns",
            "range": "± 1029.6879662905853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7488288.642857143,
            "unit": "ns",
            "range": "± 12322.996373929034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18923605.933333334,
            "unit": "ns",
            "range": "± 190162.37629362463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48720818.266666666,
            "unit": "ns",
            "range": "± 251269.5636865108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98157784.73333333,
            "unit": "ns",
            "range": "± 830941.2242777521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194286287.4,
            "unit": "ns",
            "range": "± 1982324.0889436463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258106,
            "unit": "ns",
            "range": "± 55861.95773639568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323496.9285714286,
            "unit": "ns",
            "range": "± 52576.90443306582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4120104.5217391304,
            "unit": "ns",
            "range": "± 100026.26586864324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4001772.40625,
            "unit": "ns",
            "range": "± 183754.08450328896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10049192.89361702,
            "unit": "ns",
            "range": "± 337413.58018263336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262204.62264150946,
            "unit": "ns",
            "range": "± 10902.940963912188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253118.96363636362,
            "unit": "ns",
            "range": "± 8671.690934605538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218766.1875,
            "unit": "ns",
            "range": "± 3182.762075488312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081838.923076923,
            "unit": "ns",
            "range": "± 31721.527454978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702446.5,
            "unit": "ns",
            "range": "± 27877.37866153239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17857.125,
            "unit": "ns",
            "range": "± 1537.8109612795647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82009.8085106383,
            "unit": "ns",
            "range": "± 2693.2964982994504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70196.19354838709,
            "unit": "ns",
            "range": "± 1996.5935059388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79392.04081632652,
            "unit": "ns",
            "range": "± 8745.30405466992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4866.958762886598,
            "unit": "ns",
            "range": "± 439.861576652383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16748.204301075268,
            "unit": "ns",
            "range": "± 1509.055697816265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310276.965116279,
            "unit": "ns",
            "range": "± 65066.29401418176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2513767.8125,
            "unit": "ns",
            "range": "± 78179.74138687432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037964.831460674,
            "unit": "ns",
            "range": "± 112645.67947452798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8263460.820512821,
            "unit": "ns",
            "range": "± 249629.23810016114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b046b46ea91f5ea9322b6380c3bf5de452b582c6",
          "message": "Merge pull request #3471 from greymistcube/fix/build-warnings\n\n🧹 Fix build warnings",
          "timestamp": "2023-10-31T18:10:47+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/planetarium/libplanet/commit/b046b46ea91f5ea9322b6380c3bf5de452b582c6"
        },
        "date": 1698744305696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50762.40476190476,
            "unit": "ns",
            "range": "± 2725.1880630100068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5340028.978645833,
            "unit": "ns",
            "range": "± 21764.08028377937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1643384.4552083334,
            "unit": "ns",
            "range": "± 4360.296345498388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157151.9940104166,
            "unit": "ns",
            "range": "± 577.8482807175892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593728.743389423,
            "unit": "ns",
            "range": "± 2965.3555029106606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820881.9050641741,
            "unit": "ns",
            "range": "± 351.63832706234126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752480.1123046875,
            "unit": "ns",
            "range": "± 379.82942622530624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8165539.238095238,
            "unit": "ns",
            "range": "± 187023.06377474003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23176732.466666665,
            "unit": "ns",
            "range": "± 311407.62199495436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57131883.06666667,
            "unit": "ns",
            "range": "± 556246.4942853851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115004886.92857143,
            "unit": "ns",
            "range": "± 528920.6071809708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235449814.4,
            "unit": "ns",
            "range": "± 1479149.25829791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3632103.327586207,
            "unit": "ns",
            "range": "± 159353.4520709416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815703.7608695654,
            "unit": "ns",
            "range": "± 96446.49494843214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540897.791666667,
            "unit": "ns",
            "range": "± 115312.630776164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4505331.097560976,
            "unit": "ns",
            "range": "± 162393.52566601985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10898313.027027028,
            "unit": "ns",
            "range": "± 278932.8886002157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279164.6041666667,
            "unit": "ns",
            "range": "± 10972.73154909446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277053.2631578947,
            "unit": "ns",
            "range": "± 5163.4708378732275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256566.76923076922,
            "unit": "ns",
            "range": "± 7011.106778862762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4518982.692307692,
            "unit": "ns",
            "range": "± 19800.47555567212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4161071.6,
            "unit": "ns",
            "range": "± 61135.76056122963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21671.16304347826,
            "unit": "ns",
            "range": "± 1560.787144868332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98379.82105263158,
            "unit": "ns",
            "range": "± 5828.573121944164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78731.15625,
            "unit": "ns",
            "range": "± 5052.29809790216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94986.35051546391,
            "unit": "ns",
            "range": "± 11239.786974405954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6036.867346938776,
            "unit": "ns",
            "range": "± 610.777865331133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21065.252631578947,
            "unit": "ns",
            "range": "± 1631.3483130456975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497011.537313433,
            "unit": "ns",
            "range": "± 67343.19815135284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2878725.5,
            "unit": "ns",
            "range": "± 99027.97614181179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2357498.576923077,
            "unit": "ns",
            "range": "± 115169.38901636621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9777766.315068493,
            "unit": "ns",
            "range": "± 486684.4821513637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f157765a7eabcf08721902ed40f5b8be1fbc33fa",
          "message": "Merge pull request #3472 from greymistcube/refactor/blockchain\n\n🧹 Reorganize and cleanup `BlockChain`",
          "timestamp": "2023-10-31T20:04:52+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/planetarium/libplanet/commit/f157765a7eabcf08721902ed40f5b8be1fbc33fa"
        },
        "date": 1698751433032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64548.27368421053,
            "unit": "ns",
            "range": "± 16214.177052776013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6022001.624441965,
            "unit": "ns",
            "range": "± 72718.61305444759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925396.6666015624,
            "unit": "ns",
            "range": "± 41970.97677399535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323528.6114032452,
            "unit": "ns",
            "range": "± 11469.593760529277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3103524.4260253906,
            "unit": "ns",
            "range": "± 57088.13367790424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010270.2883429276,
            "unit": "ns",
            "range": "± 21160.777194611284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909824.6112630208,
            "unit": "ns",
            "range": "± 10032.096882059846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8916133.074468086,
            "unit": "ns",
            "range": "± 648242.3576501397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24653510.897959184,
            "unit": "ns",
            "range": "± 1923814.8883932454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65232762.0125,
            "unit": "ns",
            "range": "± 3390524.2541158977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129345182.86956522,
            "unit": "ns",
            "range": "± 4947765.491801991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258012599.65853658,
            "unit": "ns",
            "range": "± 9260274.209791455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3680274.2210526317,
            "unit": "ns",
            "range": "± 325518.3650685433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3953725.585106383,
            "unit": "ns",
            "range": "± 358762.8892764514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5217818.936170213,
            "unit": "ns",
            "range": "± 447993.54145099275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4877270.872340426,
            "unit": "ns",
            "range": "± 406691.79059438274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14672241.410526317,
            "unit": "ns",
            "range": "± 1397128.161451086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366788.1458333333,
            "unit": "ns",
            "range": "± 68258.07865153812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351055.5,
            "unit": "ns",
            "range": "± 47463.239877999215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273330.40206185565,
            "unit": "ns",
            "range": "± 38014.72557873126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4775137.612903226,
            "unit": "ns",
            "range": "± 375901.9170102474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4430663.744680851,
            "unit": "ns",
            "range": "± 350005.79923124705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28728.908163265307,
            "unit": "ns",
            "range": "± 11739.948250721696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115855.5625,
            "unit": "ns",
            "range": "± 25234.05323297218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110831.74747474748,
            "unit": "ns",
            "range": "± 25333.80057549292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114657.6105263158,
            "unit": "ns",
            "range": "± 21805.680420523815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5456.875,
            "unit": "ns",
            "range": "± 1018.095729894731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26286.98969072165,
            "unit": "ns",
            "range": "± 11386.354963923965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683845.0860215053,
            "unit": "ns",
            "range": "± 230404.17799572088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3191076.474226804,
            "unit": "ns",
            "range": "± 316454.6525482592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2648517.3263157895,
            "unit": "ns",
            "range": "± 381951.9919358375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12549081.210526315,
            "unit": "ns",
            "range": "± 1334386.4665314045"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d4826df7dca5172f5b131d5119f0b3746cecf324",
          "message": "Remove unused class",
          "timestamp": "2023-11-01T11:57:09+09:00",
          "tree_id": "139a0925b41f00920d848e073ab1a6ff557c8317",
          "url": "https://github.com/planetarium/libplanet/commit/d4826df7dca5172f5b131d5119f0b3746cecf324"
        },
        "date": 1698808446411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55630.3125,
            "unit": "ns",
            "range": "± 9135.671716510073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5353681.390625,
            "unit": "ns",
            "range": "± 104454.8688407341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1709114.569921875,
            "unit": "ns",
            "range": "± 26702.054566218118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223589.5444335938,
            "unit": "ns",
            "range": "± 46947.06963794664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2746030.5736979167,
            "unit": "ns",
            "range": "± 45414.45192793243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885225.0508422852,
            "unit": "ns",
            "range": "± 15599.655307305307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810348.3706752232,
            "unit": "ns",
            "range": "± 10323.387899553016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8849427.53125,
            "unit": "ns",
            "range": "± 704881.6032894112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23038287.737373736,
            "unit": "ns",
            "range": "± 1779375.5312866378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57887798.928571425,
            "unit": "ns",
            "range": "± 6239615.906839725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108630482.36231884,
            "unit": "ns",
            "range": "± 5227852.545983158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215921873.92307693,
            "unit": "ns",
            "range": "± 8852387.341301333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3359521.6836734693,
            "unit": "ns",
            "range": "± 266827.5774533831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3515807.4574468085,
            "unit": "ns",
            "range": "± 207807.33222721147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4342032.891304348,
            "unit": "ns",
            "range": "± 282782.05140492786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4506867.540816327,
            "unit": "ns",
            "range": "± 381166.1024119821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12545504.329545455,
            "unit": "ns",
            "range": "± 760159.3891424929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285747.8404255319,
            "unit": "ns",
            "range": "± 25360.034153034558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285722.64130434784,
            "unit": "ns",
            "range": "± 23450.9230304441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242013.36842105264,
            "unit": "ns",
            "range": "± 17917.877056556834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4267971.969072165,
            "unit": "ns",
            "range": "± 269665.78145187633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3950108.3684210526,
            "unit": "ns",
            "range": "± 273291.6106485405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20662.755102040817,
            "unit": "ns",
            "range": "± 5737.372603641405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82251.53125,
            "unit": "ns",
            "range": "± 9625.697808146171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83778.52631578948,
            "unit": "ns",
            "range": "± 10246.447609472358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89062.73195876289,
            "unit": "ns",
            "range": "± 17540.832591125927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10748.77,
            "unit": "ns",
            "range": "± 6382.5378677634435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20775.62,
            "unit": "ns",
            "range": "± 6239.303918667126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423335.7052631578,
            "unit": "ns",
            "range": "± 159860.53415484985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2732879.3163265307,
            "unit": "ns",
            "range": "± 253738.7093934457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349190.214285714,
            "unit": "ns",
            "range": "± 204877.7409935587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10912833.891304348,
            "unit": "ns",
            "range": "± 1145356.6141296604"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aa59f7490c6a5704ae2c2405e96ee7823133c3a",
          "message": "Merge pull request #3473 from OnedgeLee/fix/account-metrics\n\nFix `AccountMetrics` to initialize",
          "timestamp": "2023-11-01T12:07:01+09:00",
          "tree_id": "f2d6cb2245d13faa4e2030824ebd87dfb679755f",
          "url": "https://github.com/planetarium/libplanet/commit/7aa59f7490c6a5704ae2c2405e96ee7823133c3a"
        },
        "date": 1698808817258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7885728.214285715,
            "unit": "ns",
            "range": "± 94612.37493395279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21399614.470588237,
            "unit": "ns",
            "range": "± 436436.642134932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53414111.75,
            "unit": "ns",
            "range": "± 1367487.72784336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106283401.86666666,
            "unit": "ns",
            "range": "± 1670605.6135690035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211719966.46153846,
            "unit": "ns",
            "range": "± 1545338.045885841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379069.9893617022,
            "unit": "ns",
            "range": "± 76994.82519819733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619000.5,
            "unit": "ns",
            "range": "± 89649.3063938891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2172196.2837837837,
            "unit": "ns",
            "range": "± 105374.76157700909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9521427.139784947,
            "unit": "ns",
            "range": "± 611349.1854452915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338304.388888889,
            "unit": "ns",
            "range": "± 109986.93678751848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3666903.785714286,
            "unit": "ns",
            "range": "± 58477.87817256996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4213020.388888889,
            "unit": "ns",
            "range": "± 89447.35035377213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4208297.8,
            "unit": "ns",
            "range": "± 147367.86463015364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10537822.725,
            "unit": "ns",
            "range": "± 347735.01444177266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47637.77333333333,
            "unit": "ns",
            "range": "± 2421.833739987975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5195668.583333333,
            "unit": "ns",
            "range": "± 13236.646557747308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1604311.237890625,
            "unit": "ns",
            "range": "± 5459.830469960846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140883.433314732,
            "unit": "ns",
            "range": "± 3275.448146299826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560379.4809895833,
            "unit": "ns",
            "range": "± 6850.451062306785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840179.0634114583,
            "unit": "ns",
            "range": "± 1352.0220760090062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744023.5004882812,
            "unit": "ns",
            "range": "± 1370.416674531179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262059.675,
            "unit": "ns",
            "range": "± 9290.596225485207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251116.13513513515,
            "unit": "ns",
            "range": "± 8094.992712103514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219118.41666666666,
            "unit": "ns",
            "range": "± 1071.0898831931836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245593.466666667,
            "unit": "ns",
            "range": "± 47024.72924789781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3918779.933333333,
            "unit": "ns",
            "range": "± 45480.40486763293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18244.808510638297,
            "unit": "ns",
            "range": "± 1142.6383286212297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80733.79120879121,
            "unit": "ns",
            "range": "± 4623.65412613704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68180.85,
            "unit": "ns",
            "range": "± 1576.9571390564338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77063.79591836735,
            "unit": "ns",
            "range": "± 10172.382565097758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4533.714285714285,
            "unit": "ns",
            "range": "± 558.6785956127873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18596.02105263158,
            "unit": "ns",
            "range": "± 1165.76482956467"
          }
        ]
      }
    ]
  }
}