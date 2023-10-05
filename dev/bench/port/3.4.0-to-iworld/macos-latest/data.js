window.BENCHMARK_DATA = {
  "lastUpdate": 1696525707101,
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
          "id": "2d615446e6d6534540c757d28a329c858cfdfc67",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-05T23:23:43+09:00",
          "tree_id": "559c6d26dcc589082e62d5606f201d093138ef2e",
          "url": "https://github.com/planetarium/libplanet/commit/2d615446e6d6534540c757d28a329c858cfdfc67"
        },
        "date": 1696516999133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8721078.739583334,
            "unit": "ns",
            "range": "± 512233.7621910988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22395892.53012048,
            "unit": "ns",
            "range": "± 1191572.5923195286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56204889.20930233,
            "unit": "ns",
            "range": "± 3042366.700564649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110711119.26923077,
            "unit": "ns",
            "range": "± 1322452.8344563087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226464407.50980392,
            "unit": "ns",
            "range": "± 9236957.710002368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77518.6282051282,
            "unit": "ns",
            "range": "± 4006.5380207757175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394833.4583333333,
            "unit": "ns",
            "range": "± 76056.12490909407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352000.9,
            "unit": "ns",
            "range": "± 50403.460968089305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355055.13265306124,
            "unit": "ns",
            "range": "± 55281.308226606845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445924.914141414,
            "unit": "ns",
            "range": "± 401666.2928270541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010736.989473684,
            "unit": "ns",
            "range": "± 302926.8104663024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24940.208333333332,
            "unit": "ns",
            "range": "± 3223.0403590616656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118361.44444444444,
            "unit": "ns",
            "range": "± 9834.056671326258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108985.3125,
            "unit": "ns",
            "range": "± 6554.045928099038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110161.70652173914,
            "unit": "ns",
            "range": "± 9437.245892409668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8228.202127659575,
            "unit": "ns",
            "range": "± 962.4200548258061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21815.827956989247,
            "unit": "ns",
            "range": "± 2845.2881019543443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577876.8673469387,
            "unit": "ns",
            "range": "± 193218.97274905155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894273.14516129,
            "unit": "ns",
            "range": "± 119567.19369405652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464853.569892473,
            "unit": "ns",
            "range": "± 143797.9770742997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9313918.566666666,
            "unit": "ns",
            "range": "± 351602.9563921498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3416847.3279569894,
            "unit": "ns",
            "range": "± 236173.42926215968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579401.2604166665,
            "unit": "ns",
            "range": "± 262997.5734800106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4606576.416666667,
            "unit": "ns",
            "range": "± 355674.8164234962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4697740.626262627,
            "unit": "ns",
            "range": "± 407105.40408706135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15983027.386597939,
            "unit": "ns",
            "range": "± 2016040.6852752247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5465329.379464285,
            "unit": "ns",
            "range": "± 22598.27597803266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1685197.1986607143,
            "unit": "ns",
            "range": "± 3352.9337370041226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025395.8984375,
            "unit": "ns",
            "range": "± 17809.46889029025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627986.378808594,
            "unit": "ns",
            "range": "± 92226.52309800182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764091.5382161458,
            "unit": "ns",
            "range": "± 7802.210478224212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728981.4852213542,
            "unit": "ns",
            "range": "± 8916.251325291907"
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
          "id": "fb0f4b18ee997fa83110fd08cd3e6259d15a24a1",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:41:33+09:00",
          "tree_id": "2ff067d40cf5b031399b266fa1335de8fb5642bb",
          "url": "https://github.com/planetarium/libplanet/commit/fb0f4b18ee997fa83110fd08cd3e6259d15a24a1"
        },
        "date": 1696525250250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9238492.406593407,
            "unit": "ns",
            "range": "± 731078.7607542401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24326349.56451613,
            "unit": "ns",
            "range": "± 3551663.130337039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57183275.447916664,
            "unit": "ns",
            "range": "± 3753472.8938352666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110428247.11904761,
            "unit": "ns",
            "range": "± 4961373.080791295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229652659.91379312,
            "unit": "ns",
            "range": "± 6544673.621337635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76064.92307692308,
            "unit": "ns",
            "range": "± 8544.246364569639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360907.18947368424,
            "unit": "ns",
            "range": "± 49071.19810774622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348043.7315789474,
            "unit": "ns",
            "range": "± 56547.48494368639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336582.94086021505,
            "unit": "ns",
            "range": "± 40836.075111475286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4324917.894736842,
            "unit": "ns",
            "range": "± 255700.15528646187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835198.1666666665,
            "unit": "ns",
            "range": "± 144001.61805656593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21328.255102040817,
            "unit": "ns",
            "range": "± 5223.9822218150475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99480.08163265306,
            "unit": "ns",
            "range": "± 22863.983607084305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86569.64835164836,
            "unit": "ns",
            "range": "± 15421.704763362019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98472.64948453609,
            "unit": "ns",
            "range": "± 19941.656676436367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5909.239130434783,
            "unit": "ns",
            "range": "± 1883.6976313527791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24347.47894736842,
            "unit": "ns",
            "range": "± 7963.743991443611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481403.8617021276,
            "unit": "ns",
            "range": "± 149044.17317498912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2837650.6875,
            "unit": "ns",
            "range": "± 147008.25466426284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2591040.69,
            "unit": "ns",
            "range": "± 274622.7347765208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10988916.175,
            "unit": "ns",
            "range": "± 389657.05771593616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3628170.383838384,
            "unit": "ns",
            "range": "± 335026.3841675484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3888957.602040816,
            "unit": "ns",
            "range": "± 400666.5597985872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4689758.354166667,
            "unit": "ns",
            "range": "± 413086.82861209643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4724533.044444445,
            "unit": "ns",
            "range": "± 456221.593690535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16927647.93956044,
            "unit": "ns",
            "range": "± 1542267.2658885915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6118063.61276727,
            "unit": "ns",
            "range": "± 301310.2689803831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1727986.185546875,
            "unit": "ns",
            "range": "± 55080.719741870766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046425.9909040178,
            "unit": "ns",
            "range": "± 33967.69771136009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498745.775287829,
            "unit": "ns",
            "range": "± 54453.4054002497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943106.1775251116,
            "unit": "ns",
            "range": "± 12098.445472734988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771191.4232627467,
            "unit": "ns",
            "range": "± 15277.734736291011"
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
          "id": "1890b8363f092438cc98105e0751e64f7e02f3d6",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:43:22+09:00",
          "tree_id": "99f81ceb4e3a987f7f91a204bba1b75a97a31e0c",
          "url": "https://github.com/planetarium/libplanet/commit/1890b8363f092438cc98105e0751e64f7e02f3d6"
        },
        "date": 1696525327980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8538844.869565217,
            "unit": "ns",
            "range": "± 213612.78344797462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24538102.40625,
            "unit": "ns",
            "range": "± 2676664.940567901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49837040.78571428,
            "unit": "ns",
            "range": "± 879531.4523300005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98294540.11538461,
            "unit": "ns",
            "range": "± 1585895.0451449354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216661692.86507937,
            "unit": "ns",
            "range": "± 9859738.799497072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77220.29213483146,
            "unit": "ns",
            "range": "± 7182.818980358375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355913.2111111111,
            "unit": "ns",
            "range": "± 55466.59709995008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342489.9157894737,
            "unit": "ns",
            "range": "± 43839.77743106822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304188.68292682926,
            "unit": "ns",
            "range": "± 15817.935774809594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4143385.214285714,
            "unit": "ns",
            "range": "± 97626.5336218299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3633937.966666667,
            "unit": "ns",
            "range": "± 55349.80872836569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23375.543010752688,
            "unit": "ns",
            "range": "± 3993.1601409376813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108381.48958333333,
            "unit": "ns",
            "range": "± 13769.118942110848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93906.29,
            "unit": "ns",
            "range": "± 17985.222484137896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82795.78494623656,
            "unit": "ns",
            "range": "± 11455.987311416513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5963.59375,
            "unit": "ns",
            "range": "± 1180.7581113141719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16935.23157894737,
            "unit": "ns",
            "range": "± 2487.0490223189595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576723.9591836734,
            "unit": "ns",
            "range": "± 240107.3506722112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3091454.7684210525,
            "unit": "ns",
            "range": "± 279981.8934468325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2584500.4795918367,
            "unit": "ns",
            "range": "± 256240.5488867805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14042236.777777778,
            "unit": "ns",
            "range": "± 3662959.800862355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3389918.3402061854,
            "unit": "ns",
            "range": "± 225382.74249489125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450130.7333333334,
            "unit": "ns",
            "range": "± 217170.30635104762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4794599.581632653,
            "unit": "ns",
            "range": "± 541494.8818294435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5215381.833333333,
            "unit": "ns",
            "range": "± 735773.4112928868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17396947.63829787,
            "unit": "ns",
            "range": "± 2279698.2953030723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5566851.914362981,
            "unit": "ns",
            "range": "± 225985.96975756032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1684459.6313476562,
            "unit": "ns",
            "range": "± 72034.00110699605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991975.8216145834,
            "unit": "ns",
            "range": "± 6273.844935364356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2519600.731015625,
            "unit": "ns",
            "range": "± 64864.077414379455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827758.8623046875,
            "unit": "ns",
            "range": "± 8369.267642010582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714698.6737670898,
            "unit": "ns",
            "range": "± 13806.960818453283"
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
          "id": "9ab368f1b8a524c29bf8e6d03020c4a2efde28ea",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:48:55+09:00",
          "tree_id": "99f81ceb4e3a987f7f91a204bba1b75a97a31e0c",
          "url": "https://github.com/planetarium/libplanet/commit/9ab368f1b8a524c29bf8e6d03020c4a2efde28ea"
        },
        "date": 1696525658940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8783084.582474226,
            "unit": "ns",
            "range": "± 497564.4965423174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20547275.953846153,
            "unit": "ns",
            "range": "± 836773.5868807986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51831164.4117647,
            "unit": "ns",
            "range": "± 1615245.678157245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117332012.66666667,
            "unit": "ns",
            "range": "± 1320252.1871848502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208873962.7,
            "unit": "ns",
            "range": "± 3389787.035557021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72762.60638297872,
            "unit": "ns",
            "range": "± 7741.072759794466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297349.9252873563,
            "unit": "ns",
            "range": "± 16660.94276181202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304793.91752577317,
            "unit": "ns",
            "range": "± 23974.809227460537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314555.6777777778,
            "unit": "ns",
            "range": "± 27376.87407758919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4077492.75,
            "unit": "ns",
            "range": "± 74595.89292045508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3753701.8571428573,
            "unit": "ns",
            "range": "± 61670.052238140226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23331.639175257733,
            "unit": "ns",
            "range": "± 3834.356394781178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101993.37,
            "unit": "ns",
            "range": "± 15400.752597807968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95105.47,
            "unit": "ns",
            "range": "± 17441.230296387243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93609.30612244898,
            "unit": "ns",
            "range": "± 14637.064138902782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8044.63829787234,
            "unit": "ns",
            "range": "± 1041.2173794197222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22228.918604651164,
            "unit": "ns",
            "range": "± 3077.788944585788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635409.8585858585,
            "unit": "ns",
            "range": "± 243952.11622206657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2849292.431372549,
            "unit": "ns",
            "range": "± 114410.3564263751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2525463.8232323234,
            "unit": "ns",
            "range": "± 243866.2061235179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13916942.555555556,
            "unit": "ns",
            "range": "± 3545086.7683687154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344120.9210526315,
            "unit": "ns",
            "range": "± 169856.38588142736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386028.238095238,
            "unit": "ns",
            "range": "± 125885.95068344462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4443764.185393258,
            "unit": "ns",
            "range": "± 244796.4274324594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511506.737373738,
            "unit": "ns",
            "range": "± 363573.6428159514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16670228.283505155,
            "unit": "ns",
            "range": "± 1957574.4547306187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5860205.748883928,
            "unit": "ns",
            "range": "± 101632.06360223284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863409.6192642406,
            "unit": "ns",
            "range": "± 96376.7268383114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1101412.7255859375,
            "unit": "ns",
            "range": "± 25172.011522225137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3117459.245721726,
            "unit": "ns",
            "range": "± 113087.13324851543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 780778.4637920673,
            "unit": "ns",
            "range": "± 7641.923997091187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772569.976171875,
            "unit": "ns",
            "range": "± 8557.1520301771"
          }
        ]
      }
    ]
  }
}