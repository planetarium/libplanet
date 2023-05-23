window.BENCHMARK_DATA = {
  "lastUpdate": 1684818390761,
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
          "id": "3b71f497ebd3178d7c2bc1980cc3b786f397d35a",
          "message": "temp",
          "timestamp": "2023-05-16T10:59:19+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/3b71f497ebd3178d7c2bc1980cc3b786f397d35a"
        },
        "date": 1684203389190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422254.5454545454,
            "unit": "ns",
            "range": "± 141926.05165117246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2466574.285714286,
            "unit": "ns",
            "range": "± 79700.92014694001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217677.551020408,
            "unit": "ns",
            "range": "± 146355.82647935863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549925.555555556,
            "unit": "ns",
            "range": "± 308306.08261195663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57923.59550561798,
            "unit": "ns",
            "range": "± 7204.560147950332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7606940,
            "unit": "ns",
            "range": "± 124515.75803889241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20247086.666666668,
            "unit": "ns",
            "range": "± 150855.70620708418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50599207.692307696,
            "unit": "ns",
            "range": "± 320077.7938291941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100932961.53846154,
            "unit": "ns",
            "range": "± 628141.20431962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202801340,
            "unit": "ns",
            "range": "± 1576584.8225108057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4848804.296875,
            "unit": "ns",
            "range": "± 31924.332864175547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521752.36328125,
            "unit": "ns",
            "range": "± 3549.283922764889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163901.4192708333,
            "unit": "ns",
            "range": "± 4298.954869285578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620185.9895833335,
            "unit": "ns",
            "range": "± 7043.970474916973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829233.65234375,
            "unit": "ns",
            "range": "± 2298.31154101676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781975.390625,
            "unit": "ns",
            "range": "± 2219.1407088011283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384458.3333333335,
            "unit": "ns",
            "range": "± 84843.59480662135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498673.6842105263,
            "unit": "ns",
            "range": "± 76573.10843679075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140926.923076923,
            "unit": "ns",
            "range": "± 97323.93049067554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4437410,
            "unit": "ns",
            "range": "± 87319.61195275061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827034.375,
            "unit": "ns",
            "range": "± 191806.5383011764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290518.75,
            "unit": "ns",
            "range": "± 8485.640147312248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270089.85507246375,
            "unit": "ns",
            "range": "± 12649.705238690187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241183.33333333334,
            "unit": "ns",
            "range": "± 10766.28709691077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053178.5714285714,
            "unit": "ns",
            "range": "± 41314.35173569421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654050,
            "unit": "ns",
            "range": "± 78883.74005106784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24788.775510204083,
            "unit": "ns",
            "range": "± 2758.4502840731698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104275.25252525252,
            "unit": "ns",
            "range": "± 9726.613432441516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102045,
            "unit": "ns",
            "range": "± 9461.889266148093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105924.35897435897,
            "unit": "ns",
            "range": "± 6024.348558788374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8089.690721649485,
            "unit": "ns",
            "range": "± 1024.2359485736258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23274.468085106382,
            "unit": "ns",
            "range": "± 3035.840964079894"
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
          "id": "25d6148d4f0c008a025d3adc6b43a7b283559b8d",
          "message": "temp",
          "timestamp": "2023-05-16T11:06:39+09:00",
          "tree_id": "ded0a2f16c988061a7c74e1a5b0181d6e7c21070",
          "url": "https://github.com/planetarium/libplanet/commit/25d6148d4f0c008a025d3adc6b43a7b283559b8d"
        },
        "date": 1684203791253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1421983.8383838383,
            "unit": "ns",
            "range": "± 141064.27736454678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495608.620689655,
            "unit": "ns",
            "range": "± 109561.33471590602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191392.7083333335,
            "unit": "ns",
            "range": "± 140341.95774666485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5004054.054054054,
            "unit": "ns",
            "range": "± 169122.56665670773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51169.14893617021,
            "unit": "ns",
            "range": "± 4287.516929230684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6968446.666666667,
            "unit": "ns",
            "range": "± 119174.63696289617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19118260.714285713,
            "unit": "ns",
            "range": "± 536374.6813281191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48977245.45454545,
            "unit": "ns",
            "range": "± 1171165.2730862184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97000335.71428572,
            "unit": "ns",
            "range": "± 1387091.0427704684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190818800,
            "unit": "ns",
            "range": "± 2542542.0238566212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834237.864583333,
            "unit": "ns",
            "range": "± 20758.360594028403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579544.140625,
            "unit": "ns",
            "range": "± 8361.110761007069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160249.232700893,
            "unit": "ns",
            "range": "± 6437.174713469667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608611.3411458335,
            "unit": "ns",
            "range": "± 8492.66713517848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837256.9140625,
            "unit": "ns",
            "range": "± 3121.569917801308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753207.5544084822,
            "unit": "ns",
            "range": "± 2871.4015274039716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3032824.4444444445,
            "unit": "ns",
            "range": "± 112978.60247038647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3246075.2577319588,
            "unit": "ns",
            "range": "± 188218.48177435523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3791364.285714286,
            "unit": "ns",
            "range": "± 31961.770605205525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4091148.717948718,
            "unit": "ns",
            "range": "± 139568.34370337194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6618212.765957447,
            "unit": "ns",
            "range": "± 256905.98907925808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269170.4918032787,
            "unit": "ns",
            "range": "± 11266.030715714904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260572.15189873418,
            "unit": "ns",
            "range": "± 12440.617272887914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211812.12121212122,
            "unit": "ns",
            "range": "± 6656.892930252708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872673.076923077,
            "unit": "ns",
            "range": "± 50186.405095506256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519334.6153846155,
            "unit": "ns",
            "range": "± 42454.796473304916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21300,
            "unit": "ns",
            "range": "± 2509.8542629110225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93112.24489795919,
            "unit": "ns",
            "range": "± 8816.248650605516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89252.04081632652,
            "unit": "ns",
            "range": "± 11338.050429624513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106958.16326530612,
            "unit": "ns",
            "range": "± 16785.222535334422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6321.428571428572,
            "unit": "ns",
            "range": "± 1343.0423994044038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21727.894736842107,
            "unit": "ns",
            "range": "± 3200.8369566168703"
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
          "id": "76cf17ff4ea8dc310210758823136e61f9054a63",
          "message": "temp",
          "timestamp": "2023-05-16T11:48:36+09:00",
          "tree_id": "3fa254aa0f7f198534facc7622794230ffe5f00f",
          "url": "https://github.com/planetarium/libplanet/commit/76cf17ff4ea8dc310210758823136e61f9054a63"
        },
        "date": 1684206181963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366713,
            "unit": "ns",
            "range": "± 113449.78745567298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2428465.625,
            "unit": "ns",
            "range": "± 74400.0893572781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145420.618556701,
            "unit": "ns",
            "range": "± 129408.81115202344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5011682.352941177,
            "unit": "ns",
            "range": "± 159045.75570073258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43168.831168831166,
            "unit": "ns",
            "range": "± 2156.035576082062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7080750,
            "unit": "ns",
            "range": "± 21609.60434621606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18078740,
            "unit": "ns",
            "range": "± 112144.12155793098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46321864.28571428,
            "unit": "ns",
            "range": "± 195939.35426414612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93007146.66666667,
            "unit": "ns",
            "range": "± 585095.0360737094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186516770,
            "unit": "ns",
            "range": "± 994822.7453026135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4796167.131696428,
            "unit": "ns",
            "range": "± 7796.42476241825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521166.50390625,
            "unit": "ns",
            "range": "± 2255.090766119744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148213.2114955357,
            "unit": "ns",
            "range": "± 1260.1216295179063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578879.9088541665,
            "unit": "ns",
            "range": "± 3292.8999959282887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818719.5442708334,
            "unit": "ns",
            "range": "± 2894.6754766739614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740042.0619419643,
            "unit": "ns",
            "range": "± 914.0328683185759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2970927.272727273,
            "unit": "ns",
            "range": "± 37961.51160894892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3152513.6363636362,
            "unit": "ns",
            "range": "± 68596.72729562975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3961585.714285714,
            "unit": "ns",
            "range": "± 91694.58700334653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031643.5897435895,
            "unit": "ns",
            "range": "± 119204.60913658586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6436906.25,
            "unit": "ns",
            "range": "± 118449.4630281905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259738.52459016393,
            "unit": "ns",
            "range": "± 11647.97691104419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245794.44444444444,
            "unit": "ns",
            "range": "± 10309.61113529537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230880.24691358025,
            "unit": "ns",
            "range": "± 12178.653658687877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956620,
            "unit": "ns",
            "range": "± 31272.01396045444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3558380,
            "unit": "ns",
            "range": "± 48114.034186651676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18930.927835051545,
            "unit": "ns",
            "range": "± 1785.8448528603967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85128.125,
            "unit": "ns",
            "range": "± 5252.4821826396865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77977.77777777778,
            "unit": "ns",
            "range": "± 7987.6633904984565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90538.94736842105,
            "unit": "ns",
            "range": "± 11273.186930102342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5314.432989690722,
            "unit": "ns",
            "range": "± 867.8265104464584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17626.315789473683,
            "unit": "ns",
            "range": "± 1517.9921317260123"
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
          "id": "f3c4ea398480ddfccbfdecaa80a8b707b6040388",
          "message": "Fixed tests",
          "timestamp": "2023-05-17T17:37:32+09:00",
          "tree_id": "7a13d5b06a382a1cc5e0378461912ebdae9ae39a",
          "url": "https://github.com/planetarium/libplanet/commit/f3c4ea398480ddfccbfdecaa80a8b707b6040388"
        },
        "date": 1684313578711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026504.0404040404,
            "unit": "ns",
            "range": "± 92053.14339010022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1828309.5238095238,
            "unit": "ns",
            "range": "± 66002.43180857626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1685636,
            "unit": "ns",
            "range": "± 147138.2580219617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4109558.762886598,
            "unit": "ns",
            "range": "± 259538.29147183706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35271.739130434784,
            "unit": "ns",
            "range": "± 2169.484978988419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5178878.571428572,
            "unit": "ns",
            "range": "± 57704.504937742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13308673.333333334,
            "unit": "ns",
            "range": "± 89582.5115798412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33666635.71428572,
            "unit": "ns",
            "range": "± 155005.06992771785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68097165.38461539,
            "unit": "ns",
            "range": "± 910867.1270151992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134443000,
            "unit": "ns",
            "range": "± 343756.8564605459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3514951.4322916665,
            "unit": "ns",
            "range": "± 8149.717970528264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1100771.9140625,
            "unit": "ns",
            "range": "± 2934.7787905801383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 835124.599609375,
            "unit": "ns",
            "range": "± 1492.4117687660614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933973.3203125,
            "unit": "ns",
            "range": "± 5662.193543542194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 583623.73046875,
            "unit": "ns",
            "range": "± 1488.9652253781333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 541713.8221153846,
            "unit": "ns",
            "range": "± 717.3550286030704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2246113.698630137,
            "unit": "ns",
            "range": "± 111526.33136402823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2330394.4444444445,
            "unit": "ns",
            "range": "± 99006.91532996128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2990705.5555555555,
            "unit": "ns",
            "range": "± 62562.90455328773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995700,
            "unit": "ns",
            "range": "± 110151.6573595133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4816984.090909091,
            "unit": "ns",
            "range": "± 180480.89500538562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193580,
            "unit": "ns",
            "range": "± 6683.917264598657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183418.5185185185,
            "unit": "ns",
            "range": "± 7238.0043656911275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160552.9411764706,
            "unit": "ns",
            "range": "± 6547.010094422536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2794314.285714286,
            "unit": "ns",
            "range": "± 31059.145987141204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490412.5,
            "unit": "ns",
            "range": "± 48924.60696486653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14610,
            "unit": "ns",
            "range": "± 1648.2007330921972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70396.875,
            "unit": "ns",
            "range": "± 5624.821927005895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59160.43956043956,
            "unit": "ns",
            "range": "± 3674.8357218272467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79554.08163265306,
            "unit": "ns",
            "range": "± 14692.414540306005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3562.8865979381444,
            "unit": "ns",
            "range": "± 705.6792808512096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13470.526315789473,
            "unit": "ns",
            "range": "± 1543.9569008020121"
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
          "id": "d420255984fcc2bc382c2bc0dedacab6f396d32a",
          "message": "Added gas refund",
          "timestamp": "2023-05-17T18:12:16+09:00",
          "tree_id": "0657e678c1da33711f7572cd769d7b92cebb3050",
          "url": "https://github.com/planetarium/libplanet/commit/d420255984fcc2bc382c2bc0dedacab6f396d32a"
        },
        "date": 1684315776781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422624,
            "unit": "ns",
            "range": "± 162396.7893646903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665298,
            "unit": "ns",
            "range": "± 169766.60745288106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227744.3298969073,
            "unit": "ns",
            "range": "± 171727.37719097102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5553533.333333333,
            "unit": "ns",
            "range": "± 260344.75269613223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50547.42268041237,
            "unit": "ns",
            "range": "± 4075.2068654932805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7072065.384615385,
            "unit": "ns",
            "range": "± 71203.47423819812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19695946.153846152,
            "unit": "ns",
            "range": "± 209612.0448804752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49783533.333333336,
            "unit": "ns",
            "range": "± 872164.990671135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101906046.66666667,
            "unit": "ns",
            "range": "± 1252223.9523952499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201879120,
            "unit": "ns",
            "range": "± 3117083.84441979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4792387.239583333,
            "unit": "ns",
            "range": "± 16573.67519001392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519244.3880208333,
            "unit": "ns",
            "range": "± 7662.015661079259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172101.3932291667,
            "unit": "ns",
            "range": "± 5886.728620626432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652349.909855769,
            "unit": "ns",
            "range": "± 7002.029052488591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852804.0299479166,
            "unit": "ns",
            "range": "± 2322.3019106681277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767299.9609375,
            "unit": "ns",
            "range": "± 3446.3287281903436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143390.1960784313,
            "unit": "ns",
            "range": "± 128050.74658884574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3277573.770491803,
            "unit": "ns",
            "range": "± 147654.14194623794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4066512.5,
            "unit": "ns",
            "range": "± 102795.90294872397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312993.1034482755,
            "unit": "ns",
            "range": "± 125355.54558088673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6672242.307692308,
            "unit": "ns",
            "range": "± 157803.66326058953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270063.46153846156,
            "unit": "ns",
            "range": "± 10614.991781810453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258246.8085106383,
            "unit": "ns",
            "range": "± 9638.686791842047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240414.14141414143,
            "unit": "ns",
            "range": "± 18438.186916161474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4073903.4482758623,
            "unit": "ns",
            "range": "± 119092.48651710815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3613607.1428571427,
            "unit": "ns",
            "range": "± 58997.73743100681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20664.21052631579,
            "unit": "ns",
            "range": "± 2210.656771066573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93731.9587628866,
            "unit": "ns",
            "range": "± 8331.323254138473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75659.793814433,
            "unit": "ns",
            "range": "± 4979.9945572638935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107270.10309278351,
            "unit": "ns",
            "range": "± 16798.24001785885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6100,
            "unit": "ns",
            "range": "± 1197.0449727001348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20969.791666666668,
            "unit": "ns",
            "range": "± 3099.1720385550398"
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
          "id": "df4badab7d81f606aad63841845c4060683c156d",
          "message": "Build fix",
          "timestamp": "2023-05-18T17:20:51+09:00",
          "tree_id": "6d70aa867d3f20c9db40ed799159b4abeeba1b89",
          "url": "https://github.com/planetarium/libplanet/commit/df4badab7d81f606aad63841845c4060683c156d"
        },
        "date": 1684398974202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425161.4583333333,
            "unit": "ns",
            "range": "± 112547.0899058342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2482382.3529411764,
            "unit": "ns",
            "range": "± 111655.7568696851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088376.8041237113,
            "unit": "ns",
            "range": "± 133576.213042299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4967094.444444444,
            "unit": "ns",
            "range": "± 139551.59505551946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45844.186046511626,
            "unit": "ns",
            "range": "± 2284.248088471426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6697915.384615385,
            "unit": "ns",
            "range": "± 24157.705677272905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17384793.333333332,
            "unit": "ns",
            "range": "± 178512.85454581483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45183526.666666664,
            "unit": "ns",
            "range": "± 830840.3641293956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88049853.33333333,
            "unit": "ns",
            "range": "± 1010123.4492212655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178264306.66666666,
            "unit": "ns",
            "range": "± 2478556.6120704394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906591.685267857,
            "unit": "ns",
            "range": "± 13352.460067275122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523784.3424479167,
            "unit": "ns",
            "range": "± 2258.22585592004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154402.8059895833,
            "unit": "ns",
            "range": "± 1897.9124760662487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616925.5729166665,
            "unit": "ns",
            "range": "± 9964.02101133943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827447.5390625,
            "unit": "ns",
            "range": "± 3272.883574842948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736130.087890625,
            "unit": "ns",
            "range": "± 1063.3045361274255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2925360.465116279,
            "unit": "ns",
            "range": "± 102965.03830943894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3117164.864864865,
            "unit": "ns",
            "range": "± 155153.6255320349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4031925,
            "unit": "ns",
            "range": "± 78406.05843938337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4298540.384615385,
            "unit": "ns",
            "range": "± 166353.60785660165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6572087.5,
            "unit": "ns",
            "range": "± 129613.53909267747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267914.28571428574,
            "unit": "ns",
            "range": "± 11772.450852661947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260738.23529411765,
            "unit": "ns",
            "range": "± 8222.585846530583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227993.6170212766,
            "unit": "ns",
            "range": "± 15270.484627377615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983550,
            "unit": "ns",
            "range": "± 41537.24464029472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3592970.588235294,
            "unit": "ns",
            "range": "± 64918.84130113809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21562.76595744681,
            "unit": "ns",
            "range": "± 2893.531311392956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92621.05263157895,
            "unit": "ns",
            "range": "± 7983.025805284532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75886.17021276595,
            "unit": "ns",
            "range": "± 7310.922761637552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106850,
            "unit": "ns",
            "range": "± 18420.93861293293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5152.631578947368,
            "unit": "ns",
            "range": "± 988.534495062429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21379.381443298967,
            "unit": "ns",
            "range": "± 2399.9539120717977"
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
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "82417d30726fa37747a38b298d39fe3f3ae9c04c",
          "message": "Build fix",
          "timestamp": "2023-05-22T20:35:39+09:00",
          "tree_id": "b56424f38a27a48b6abdcd04dd91a775421f0e68",
          "url": "https://github.com/planetarium/libplanet/commit/82417d30726fa37747a38b298d39fe3f3ae9c04c"
        },
        "date": 1684756302391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349135.0515463918,
            "unit": "ns",
            "range": "± 87619.91668711933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2526340.625,
            "unit": "ns",
            "range": "± 116882.48978632681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191794.3298969073,
            "unit": "ns",
            "range": "± 143077.01012702924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5572584.343434343,
            "unit": "ns",
            "range": "± 357833.7985432925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49281.57894736842,
            "unit": "ns",
            "range": "± 4035.6724019328285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7022750,
            "unit": "ns",
            "range": "± 142440.96145421092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18865450,
            "unit": "ns",
            "range": "± 228795.08046755256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48003221.05263158,
            "unit": "ns",
            "range": "± 1041198.8195125781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98532443.33333333,
            "unit": "ns",
            "range": "± 1164946.2209945675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192206986.66666666,
            "unit": "ns",
            "range": "± 3203984.649924588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4790924.114583333,
            "unit": "ns",
            "range": "± 33356.458298003956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507319.84375,
            "unit": "ns",
            "range": "± 7065.518094458746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161312.2526041667,
            "unit": "ns",
            "range": "± 7028.657315294721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576624.2447916665,
            "unit": "ns",
            "range": "± 7165.572649686667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833040.4231770834,
            "unit": "ns",
            "range": "± 2394.598574761454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756981.5559895834,
            "unit": "ns",
            "range": "± 2829.964170163324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3035226.8656716417,
            "unit": "ns",
            "range": "± 142992.7234661595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256419.35483871,
            "unit": "ns",
            "range": "± 89555.04608658238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4039729.1666666665,
            "unit": "ns",
            "range": "± 152918.84784035844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4054509.8591549294,
            "unit": "ns",
            "range": "± 196832.65564936085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6635222.857142857,
            "unit": "ns",
            "range": "± 216978.55828699414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264985.18518518517,
            "unit": "ns",
            "range": "± 10883.7321465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254047.22222222222,
            "unit": "ns",
            "range": "± 8371.328145559395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235600,
            "unit": "ns",
            "range": "± 14646.236543834706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3971793.75,
            "unit": "ns",
            "range": "± 75305.59491166643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657013.6363636362,
            "unit": "ns",
            "range": "± 84518.2555397384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20673.684210526317,
            "unit": "ns",
            "range": "± 1777.4719392892837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88132.96703296703,
            "unit": "ns",
            "range": "± 6066.59441248282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72686.66666666667,
            "unit": "ns",
            "range": "± 2776.328510821441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101626.80412371134,
            "unit": "ns",
            "range": "± 16822.322195671524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5318.888888888889,
            "unit": "ns",
            "range": "± 817.49060324386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18334.375,
            "unit": "ns",
            "range": "± 1842.2428050155547"
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
          "id": "48c70f3038a84ea1ceac05f49a7983ed5276ac78",
          "message": "fix: bug",
          "timestamp": "2023-05-23T13:43:49+09:00",
          "tree_id": "1e001bff5449be49deae2edafe712b8fffdbeaab",
          "url": "https://github.com/planetarium/libplanet/commit/48c70f3038a84ea1ceac05f49a7983ed5276ac78"
        },
        "date": 1684818321423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757906.1855670102,
            "unit": "ns",
            "range": "± 172804.4534380028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3426950.5154639175,
            "unit": "ns",
            "range": "± 242570.47692531167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2800046.875,
            "unit": "ns",
            "range": "± 213234.90479213418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7205719.411764706,
            "unit": "ns",
            "range": "± 388318.549899536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60772.63157894737,
            "unit": "ns",
            "range": "± 12391.593256181859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9193838.94736842,
            "unit": "ns",
            "range": "± 616725.6739193047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25286570.689655174,
            "unit": "ns",
            "range": "± 1071989.4400842518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62845625,
            "unit": "ns",
            "range": "± 716246.0675760683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127877542.42424242,
            "unit": "ns",
            "range": "± 4051899.5827597873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252917290.9090909,
            "unit": "ns",
            "range": "± 11869192.068255818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991038.720703125,
            "unit": "ns",
            "range": "± 109461.66174661994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909901.669921875,
            "unit": "ns",
            "range": "± 42164.65889114129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456850.767299107,
            "unit": "ns",
            "range": "± 16377.851521994528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174754.131610577,
            "unit": "ns",
            "range": "± 86113.4702905453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053801.329985119,
            "unit": "ns",
            "range": "± 24403.181856235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002400.7727581522,
            "unit": "ns",
            "range": "± 25078.38722871763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3844664.9484536084,
            "unit": "ns",
            "range": "± 235865.97493829214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4159948.484848485,
            "unit": "ns",
            "range": "± 413168.7305086505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5402409.183673469,
            "unit": "ns",
            "range": "± 374153.1507605796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5156883.870967742,
            "unit": "ns",
            "range": "± 427836.9699888037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9110261.627906976,
            "unit": "ns",
            "range": "± 494470.31182363804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337520.4081632653,
            "unit": "ns",
            "range": "± 43491.97807105025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323378.125,
            "unit": "ns",
            "range": "± 39167.78268753408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292015.306122449,
            "unit": "ns",
            "range": "± 37992.7810615638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5484752.127659574,
            "unit": "ns",
            "range": "± 392323.829302319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4407088.888888889,
            "unit": "ns",
            "range": "± 347177.83330234076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25928.571428571428,
            "unit": "ns",
            "range": "± 9212.273301495308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108559.5744680851,
            "unit": "ns",
            "range": "± 18470.227826045022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120953.60824742269,
            "unit": "ns",
            "range": "± 24869.090846938187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134311.70212765958,
            "unit": "ns",
            "range": "± 21517.823851592606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8801.052631578947,
            "unit": "ns",
            "range": "± 2072.1812301031823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26929.29292929293,
            "unit": "ns",
            "range": "± 8451.883651000619"
          }
        ]
      }
    ]
  }
}