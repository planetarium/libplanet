window.BENCHMARK_DATA = {
  "lastUpdate": 1684203391342,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "504188a71083bab92fecacb7191512bf3d7b5793",
          "message": "Merge pull request #3158 from greymistcube/feature/exposed-polymorphic-action-api-for-testing\n\n🔧 Added `ReloadLoader()` method",
          "timestamp": "2023-05-15T15:26:16+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/planetarium/libplanet/commit/504188a71083bab92fecacb7191512bf3d7b5793"
        },
        "date": 1684139951408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491825.7731958763,
            "unit": "ns",
            "range": "± 118388.87042844451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2818453.3333333335,
            "unit": "ns",
            "range": "± 142216.51112313237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2364800,
            "unit": "ns",
            "range": "± 182573.5562475032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5771510,
            "unit": "ns",
            "range": "± 253888.13144401924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63224.742268041235,
            "unit": "ns",
            "range": "± 7856.407031417032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7014451.851851852,
            "unit": "ns",
            "range": "± 181541.8883012326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19482253.333333332,
            "unit": "ns",
            "range": "± 284677.3834828939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52346153.333333336,
            "unit": "ns",
            "range": "± 589923.2115485959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104777228.57142857,
            "unit": "ns",
            "range": "± 936709.9053672844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202464809.52380952,
            "unit": "ns",
            "range": "± 7278689.516356419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5021907.864583333,
            "unit": "ns",
            "range": "± 46278.78654914183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548496.7708333333,
            "unit": "ns",
            "range": "± 4313.156828444006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162989.5963541667,
            "unit": "ns",
            "range": "± 6349.401274333173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720854.765625,
            "unit": "ns",
            "range": "± 15978.11567066169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927589.1276041666,
            "unit": "ns",
            "range": "± 4248.043964340307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770619.4905598959,
            "unit": "ns",
            "range": "± 1055.36147320418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407958.3333333335,
            "unit": "ns",
            "range": "± 113738.93258561153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3638800,
            "unit": "ns",
            "range": "± 77639.80937637598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243122.033898305,
            "unit": "ns",
            "range": "± 182935.19774800658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442071.212121212,
            "unit": "ns",
            "range": "± 202043.4186125893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066936.842105263,
            "unit": "ns",
            "range": "± 238946.01496035428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290776.2886597938,
            "unit": "ns",
            "range": "± 20075.05071182821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293429.1666666667,
            "unit": "ns",
            "range": "± 14039.245169508848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279200,
            "unit": "ns",
            "range": "± 7497.692978510123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214106.666666667,
            "unit": "ns",
            "range": "± 56857.748142267505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927593.3333333335,
            "unit": "ns",
            "range": "± 65480.2202049996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27855.78947368421,
            "unit": "ns",
            "range": "± 3546.2211169816132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107275.51020408163,
            "unit": "ns",
            "range": "± 12267.964410118577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107948.97959183673,
            "unit": "ns",
            "range": "± 16935.500716395814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118260.82474226804,
            "unit": "ns",
            "range": "± 25792.20875857762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9215.463917525773,
            "unit": "ns",
            "range": "± 1592.4522629020923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27307.070707070707,
            "unit": "ns",
            "range": "± 4464.468625401504"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f",
          "message": "Merge pull request #3156 from riemannulus/introduce/transaction/fee-and-gas-field\n\nIntroduce: Fee and Gas field on `ITxInvoice`",
          "timestamp": "2023-05-15T18:32:46+09:00",
          "tree_id": "12d5306695a10248ae95f0cdf41fe25b6cec0366",
          "url": "https://github.com/planetarium/libplanet/commit/46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f"
        },
        "date": 1684144379460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1872501.030927835,
            "unit": "ns",
            "range": "± 267428.8104239322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3520812.6315789474,
            "unit": "ns",
            "range": "± 322977.1305526483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2815256.5217391304,
            "unit": "ns",
            "range": "± 255647.70673135231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7012707.368421053,
            "unit": "ns",
            "range": "± 714189.9346934744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71146.39175257731,
            "unit": "ns",
            "range": "± 18258.668385726578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10319476.80412371,
            "unit": "ns",
            "range": "± 972018.2196204219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26587500,
            "unit": "ns",
            "range": "± 1436902.7142966017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75619776,
            "unit": "ns",
            "range": "± 3032111.574434623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140813824.3243243,
            "unit": "ns",
            "range": "± 4751203.873371078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282176266.6666667,
            "unit": "ns",
            "range": "± 4253764.105835588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6527138.511029412,
            "unit": "ns",
            "range": "± 125925.93621418916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044522.3388671875,
            "unit": "ns",
            "range": "± 39199.16322274829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1524833.1575520833,
            "unit": "ns",
            "range": "± 26745.850342331185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3441954.0885416665,
            "unit": "ns",
            "range": "± 63037.38623097238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1133718.7602796052,
            "unit": "ns",
            "range": "± 38284.00305160955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1019090.6475360577,
            "unit": "ns",
            "range": "± 27294.458699409057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4151478.2608695654,
            "unit": "ns",
            "range": "± 366019.69166569726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3904602.0408163266,
            "unit": "ns",
            "range": "± 404363.47102183086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5445777.419354838,
            "unit": "ns",
            "range": "± 457467.3288712235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5412320.4301075265,
            "unit": "ns",
            "range": "± 446158.83956451213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9144404.225352112,
            "unit": "ns",
            "range": "± 423272.9262836787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349778.94736842107,
            "unit": "ns",
            "range": "± 39007.770351769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320193.6842105263,
            "unit": "ns",
            "range": "± 44592.90042368952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304545.1612903226,
            "unit": "ns",
            "range": "± 41924.345723885504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5367852.173913044,
            "unit": "ns",
            "range": "± 305458.5720289929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987612.631578947,
            "unit": "ns",
            "range": "± 340739.4625342176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29691.20879120879,
            "unit": "ns",
            "range": "± 5716.441168568048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134425,
            "unit": "ns",
            "range": "± 18413.8482586424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 137565.21739130435,
            "unit": "ns",
            "range": "± 19335.63830711131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151555.68181818182,
            "unit": "ns",
            "range": "± 24389.345977925073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8726.966292134832,
            "unit": "ns",
            "range": "± 1650.052619336166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28617.894736842107,
            "unit": "ns",
            "range": "± 4932.415120909026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f993944ff20a46e8bbf34dfcf036165c0443cafb",
          "message": "temp",
          "timestamp": "2023-05-15T22:08:38+09:00",
          "tree_id": "95b2bce846a55c64a89e430edd5bb15ba5de6df9",
          "url": "https://github.com/planetarium/libplanet/commit/f993944ff20a46e8bbf34dfcf036165c0443cafb"
        },
        "date": 1684157128168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1419453,
            "unit": "ns",
            "range": "± 128730.49873297471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564468.8524590163,
            "unit": "ns",
            "range": "± 115472.16048465765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162742.7083333335,
            "unit": "ns",
            "range": "± 134872.38002511984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5324689.130434782,
            "unit": "ns",
            "range": "± 203007.2130390783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48951.64835164835,
            "unit": "ns",
            "range": "± 3368.0314935635834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7277900,
            "unit": "ns",
            "range": "± 151342.4321355577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19693213.333333332,
            "unit": "ns",
            "range": "± 154907.31268668218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50334173.333333336,
            "unit": "ns",
            "range": "± 548609.6198139264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101799586.66666667,
            "unit": "ns",
            "range": "± 1300310.1865470775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201459535.7142857,
            "unit": "ns",
            "range": "± 1701649.4792303247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4833505.078125,
            "unit": "ns",
            "range": "± 22794.526359218475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540410.0167410714,
            "unit": "ns",
            "range": "± 3485.622488911502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179708.1612723214,
            "unit": "ns",
            "range": "± 7252.2144904802135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654743.2756696427,
            "unit": "ns",
            "range": "± 6940.173518673625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826993.7044270834,
            "unit": "ns",
            "range": "± 2672.7895304798826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780423.92578125,
            "unit": "ns",
            "range": "± 2708.747278403636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097514.814814815,
            "unit": "ns",
            "range": "± 84196.92897607875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3378696,
            "unit": "ns",
            "range": "± 88851.01049884951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073616.6666666665,
            "unit": "ns",
            "range": "± 159608.86011418776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4111994.382022472,
            "unit": "ns",
            "range": "± 225802.91001806228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6717190.425531914,
            "unit": "ns",
            "range": "± 260895.56352950927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271302.0833333333,
            "unit": "ns",
            "range": "± 10157.07466646484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257516.39344262294,
            "unit": "ns",
            "range": "± 11633.947170928544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238181,
            "unit": "ns",
            "range": "± 15401.231060594415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4031785.714285714,
            "unit": "ns",
            "range": "± 58427.372499050965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3686042.8571428573,
            "unit": "ns",
            "range": "± 58314.97319643642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20870.212765957447,
            "unit": "ns",
            "range": "± 1958.7591961883631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91507.07070707071,
            "unit": "ns",
            "range": "± 8026.210284796047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76585.86956521739,
            "unit": "ns",
            "range": "± 4473.083886462144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94410,
            "unit": "ns",
            "range": "± 11124.535591872205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5490.217391304348,
            "unit": "ns",
            "range": "± 885.792596294563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20878.260869565216,
            "unit": "ns",
            "range": "± 2595.4239564311683"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c6244e68eb6a975411eef63d837338b8b5188fa6",
          "message": "feat(tx): Add support for gas limit and max gas price in transaction metadata\n\nThis commit adds support for encoding and decoding the `gasLimit` and `maxGasPrice` fields in transaction metadata. The `gasLimit` field is represented using a `bigint` while the `maxGasPrice` field is represented by a `FungibleAssetValue` object.\n\nAdditionally, some helper functions have been added to the `assets.ts` file to support encoding a `FungibleAssetValue` object.\n\nNo breaking changes have been introduced.",
          "timestamp": "2023-05-15T22:32:41+09:00",
          "tree_id": "cfab06bf6dbf36305a29a343e53397c9a4d43499",
          "url": "https://github.com/planetarium/libplanet/commit/c6244e68eb6a975411eef63d837338b8b5188fa6"
        },
        "date": 1684159091701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1806595.8762886599,
            "unit": "ns",
            "range": "± 253598.5910833981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3393417.7083333335,
            "unit": "ns",
            "range": "± 267125.3161443507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2812640,
            "unit": "ns",
            "range": "± 252935.25931402945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7139881.318681318,
            "unit": "ns",
            "range": "± 475300.4434418503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77322.63157894737,
            "unit": "ns",
            "range": "± 17772.692668902127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9522626.80412371,
            "unit": "ns",
            "range": "± 819861.7121090534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25351475.409836065,
            "unit": "ns",
            "range": "± 1125725.5271832084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65331869.56521739,
            "unit": "ns",
            "range": "± 1651798.5405542273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129251260,
            "unit": "ns",
            "range": "± 2311792.790949421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260709153.33333334,
            "unit": "ns",
            "range": "± 4089335.043372257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6090936.886160715,
            "unit": "ns",
            "range": "± 142770.53072988827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948261.3560267857,
            "unit": "ns",
            "range": "± 26197.12360100699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1481232.8125,
            "unit": "ns",
            "range": "± 22238.9150332414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3298665.3125,
            "unit": "ns",
            "range": "± 56009.20754509587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081045.1692708333,
            "unit": "ns",
            "range": "± 17868.316047588898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 979411.0212053572,
            "unit": "ns",
            "range": "± 12466.217498722637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3973067.0212765955,
            "unit": "ns",
            "range": "± 322242.1978295201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4104893.75,
            "unit": "ns",
            "range": "± 358999.5419473694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5037965.59139785,
            "unit": "ns",
            "range": "± 441996.28109163005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5328958.695652174,
            "unit": "ns",
            "range": "± 328474.6263310683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8773000,
            "unit": "ns",
            "range": "± 508751.9729691473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362785.2631578947,
            "unit": "ns",
            "range": "± 43567.023368552145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342342.7083333333,
            "unit": "ns",
            "range": "± 55588.321842085665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314718.08510638296,
            "unit": "ns",
            "range": "± 24559.90246717157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5244516.25,
            "unit": "ns",
            "range": "± 271134.40893268876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4691422.352941177,
            "unit": "ns",
            "range": "± 253219.1810686237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30106.451612903227,
            "unit": "ns",
            "range": "± 9217.785342473311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125155.67010309278,
            "unit": "ns",
            "range": "± 22164.8791685563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110377.31958762887,
            "unit": "ns",
            "range": "± 18534.801192366478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130410.75268817204,
            "unit": "ns",
            "range": "± 21740.207502537534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7417.204301075269,
            "unit": "ns",
            "range": "± 1594.8711039586142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30129.591836734693,
            "unit": "ns",
            "range": "± 10619.28035676631"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5e352895d98c7089c05550832d123dcaa496cb06",
          "message": "temp",
          "timestamp": "2023-05-15T23:39:48+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/5e352895d98c7089c05550832d123dcaa496cb06"
        },
        "date": 1684162519209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1108640,
            "unit": "ns",
            "range": "± 106154.17699237884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2066898.245614035,
            "unit": "ns",
            "range": "± 89009.8178598215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1754908.4210526317,
            "unit": "ns",
            "range": "± 128286.32094302739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4580204.054054054,
            "unit": "ns",
            "range": "± 229273.72851262146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31919.78021978022,
            "unit": "ns",
            "range": "± 1571.0732198949427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7040100,
            "unit": "ns",
            "range": "± 47474.16522316494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17599426.923076924,
            "unit": "ns",
            "range": "± 155464.40725476982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43137220,
            "unit": "ns",
            "range": "± 379056.4511294553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85750313.33333333,
            "unit": "ns",
            "range": "± 496497.4016140707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178378228.57142857,
            "unit": "ns",
            "range": "± 693025.8030811433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4806904.6875,
            "unit": "ns",
            "range": "± 8151.530119201842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1471551.09375,
            "unit": "ns",
            "range": "± 2938.983158139525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1019706.93359375,
            "unit": "ns",
            "range": "± 2504.0791279981045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2451563.90625,
            "unit": "ns",
            "range": "± 6411.165932535357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807445.5013020834,
            "unit": "ns",
            "range": "± 1786.1588516123031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732813.5184151785,
            "unit": "ns",
            "range": "± 1708.6255090736158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2674270.7317073173,
            "unit": "ns",
            "range": "± 88317.27250063387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2908507.1428571427,
            "unit": "ns",
            "range": "± 104649.85612393159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3593430.5555555555,
            "unit": "ns",
            "range": "± 119619.02098972254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3575688.6363636362,
            "unit": "ns",
            "range": "± 132540.598810255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5938584.375,
            "unit": "ns",
            "range": "± 184216.1355220914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198130.13698630137,
            "unit": "ns",
            "range": "± 9762.409267347704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182550,
            "unit": "ns",
            "range": "± 7413.778904651717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158488.46153846153,
            "unit": "ns",
            "range": "± 2306.345760988748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3541140,
            "unit": "ns",
            "range": "± 61441.09606537213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3326706.6666666665,
            "unit": "ns",
            "range": "± 40539.318950278146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8495.833333333334,
            "unit": "ns",
            "range": "± 1108.3336631050822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50349.4623655914,
            "unit": "ns",
            "range": "± 4703.0430402285465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41573.913043478264,
            "unit": "ns",
            "range": "± 1001.0073977132636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56273.19587628866,
            "unit": "ns",
            "range": "± 10050.865587350316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2284.020618556701,
            "unit": "ns",
            "range": "± 467.4591332267598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8411.702127659575,
            "unit": "ns",
            "range": "± 915.676655962679"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f05b96465410478afc7754ef48bf600c8bea1b56",
          "message": "temp",
          "timestamp": "2023-05-16T11:00:12+09:00",
          "tree_id": "a2a79cfb4a44a1e01fe91ffe47e80432fd778521",
          "url": "https://github.com/planetarium/libplanet/commit/f05b96465410478afc7754ef48bf600c8bea1b56"
        },
        "date": 1684203335851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319635.1063829786,
            "unit": "ns",
            "range": "± 91977.06347727426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563985.8585858587,
            "unit": "ns",
            "range": "± 164824.52698533365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154046.93877551,
            "unit": "ns",
            "range": "± 147862.52406022334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5387853,
            "unit": "ns",
            "range": "± 370043.02546863357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48896.77419354839,
            "unit": "ns",
            "range": "± 3518.165641504947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6719092.857142857,
            "unit": "ns",
            "range": "± 72424.62887810933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19275706.666666668,
            "unit": "ns",
            "range": "± 287716.74678571004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47648985,
            "unit": "ns",
            "range": "± 1044709.3941303536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97026425,
            "unit": "ns",
            "range": "± 2781933.778617153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186989153.33333334,
            "unit": "ns",
            "range": "± 3427198.999571905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835291.25,
            "unit": "ns",
            "range": "± 17253.34698530036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506203.5435267857,
            "unit": "ns",
            "range": "± 7126.607019345166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170159.9609375,
            "unit": "ns",
            "range": "± 8510.66289035163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659623.8020833335,
            "unit": "ns",
            "range": "± 43293.354709169114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821012.0052083334,
            "unit": "ns",
            "range": "± 3578.690227423508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773688.8392857143,
            "unit": "ns",
            "range": "± 2786.5465419650595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951305.5555555555,
            "unit": "ns",
            "range": "± 59350.69722790044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3214564.4578313255,
            "unit": "ns",
            "range": "± 170993.20634952214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3827964.285714286,
            "unit": "ns",
            "range": "± 34851.94194220542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4019043.0379746836,
            "unit": "ns",
            "range": "± 208831.43041485382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6687849.206349206,
            "unit": "ns",
            "range": "± 307291.6177609376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274784.2105263158,
            "unit": "ns",
            "range": "± 11917.196300689728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262785.4166666667,
            "unit": "ns",
            "range": "± 17140.55197272902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217113.33333333334,
            "unit": "ns",
            "range": "± 3726.711815042981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854253.846153846,
            "unit": "ns",
            "range": "± 47081.51823140752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3538706.25,
            "unit": "ns",
            "range": "± 67697.8135417484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23938.144329896906,
            "unit": "ns",
            "range": "± 2916.492017353249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100624.74226804124,
            "unit": "ns",
            "range": "± 9815.623504221843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88813.26530612246,
            "unit": "ns",
            "range": "± 10666.0786884722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111217.70833333333,
            "unit": "ns",
            "range": "± 16408.386782320973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6837.755102040816,
            "unit": "ns",
            "range": "± 1282.1144991346234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21481.81818181818,
            "unit": "ns",
            "range": "± 2906.304324008015"
          }
        ]
      }
    ]
  }
}