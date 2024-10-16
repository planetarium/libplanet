window.BENCHMARK_DATA = {
  "lastUpdate": 1729059529351,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728551208515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971381.6326530612,
            "unit": "ns",
            "range": "± 93822.14073528873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1707750,
            "unit": "ns",
            "range": "± 60173.129650325594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490963.7362637362,
            "unit": "ns",
            "range": "± 118960.8754698447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608128.571428572,
            "unit": "ns",
            "range": "± 238969.02777752138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32783.83838383838,
            "unit": "ns",
            "range": "± 4720.660345339692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9628237.5,
            "unit": "ns",
            "range": "± 187391.20888309213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23638728.57142857,
            "unit": "ns",
            "range": "± 338118.9672939926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60029196.666666664,
            "unit": "ns",
            "range": "± 1059008.5254389509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122258864.28571428,
            "unit": "ns",
            "range": "± 1610803.5178884352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249162405.55555555,
            "unit": "ns",
            "range": "± 5252943.034424463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3330433.426339286,
            "unit": "ns",
            "range": "± 12169.374573177836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085881.3671875,
            "unit": "ns",
            "range": "± 1944.0517582761845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739018.8997395834,
            "unit": "ns",
            "range": "± 1713.7945339496378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970386.9891826923,
            "unit": "ns",
            "range": "± 3006.0477963089734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616211.5931919643,
            "unit": "ns",
            "range": "± 1572.9847496486655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559053.9341517857,
            "unit": "ns",
            "range": "± 1484.9741921229047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181655.5555555555,
            "unit": "ns",
            "range": "± 45452.227308683796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2345970,
            "unit": "ns",
            "range": "± 53929.85795408114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2629964.285714286,
            "unit": "ns",
            "range": "± 95462.06645785634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2206307.407407407,
            "unit": "ns",
            "range": "± 52894.495321608236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2888786.6666666665,
            "unit": "ns",
            "range": "± 33732.13530716596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174443.58974358975,
            "unit": "ns",
            "range": "± 5418.671174831027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168946.92307692306,
            "unit": "ns",
            "range": "± 7803.283948736927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145621.73913043478,
            "unit": "ns",
            "range": "± 3528.9654061700103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2625300,
            "unit": "ns",
            "range": "± 26226.26399388451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389260,
            "unit": "ns",
            "range": "± 34690.46390168753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10319.78021978022,
            "unit": "ns",
            "range": "± 1138.9293003342882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58332.291666666664,
            "unit": "ns",
            "range": "± 8283.05174871737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43519.354838709674,
            "unit": "ns",
            "range": "± 1316.9204873083543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51952.12765957447,
            "unit": "ns",
            "range": "± 10396.915679154168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2418.75,
            "unit": "ns",
            "range": "± 468.21328922887943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10196.808510638299,
            "unit": "ns",
            "range": "± 1443.7445435476334"
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
          "id": "0e380da42ce0f6a81121b41fc301539ed994ffc8",
          "message": "Merge pull request #3968 from riemannulus/bump/bouncycastle\n\n🔧 Patch:  CVE-2024-29857 to `5.3-maintenance`",
          "timestamp": "2024-10-14T15:38:33+09:00",
          "tree_id": "fc020f10caa797606022ceeb9067c6e9edf55986",
          "url": "https://github.com/planetarium/libplanet/commit/0e380da42ce0f6a81121b41fc301539ed994ffc8"
        },
        "date": 1728888476735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984262.7659574468,
            "unit": "ns",
            "range": "± 87647.60451497493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748222.2222222222,
            "unit": "ns",
            "range": "± 71975.05442248374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1448758.024691358,
            "unit": "ns",
            "range": "± 71660.08977142983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6528896.428571428,
            "unit": "ns",
            "range": "± 168932.38288372214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30983.673469387755,
            "unit": "ns",
            "range": "± 3988.1446446576574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9761740,
            "unit": "ns",
            "range": "± 66577.7504662245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24147883.333333332,
            "unit": "ns",
            "range": "± 216131.87662914995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61080150,
            "unit": "ns",
            "range": "± 239477.49452634456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121429728.57142857,
            "unit": "ns",
            "range": "± 347196.4826757575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246539876.92307693,
            "unit": "ns",
            "range": "± 823679.2399086008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3366697.098214286,
            "unit": "ns",
            "range": "± 6169.673452044391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076575.2278645833,
            "unit": "ns",
            "range": "± 20710.082155913784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732214.1751802885,
            "unit": "ns",
            "range": "± 1158.0326640429505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971135.5989583333,
            "unit": "ns",
            "range": "± 2804.713772892679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616062.7994791666,
            "unit": "ns",
            "range": "± 2627.642134966293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583655.625,
            "unit": "ns",
            "range": "± 1993.4349808168602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121523.8095238097,
            "unit": "ns",
            "range": "± 50154.76951160183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2191873.6842105263,
            "unit": "ns",
            "range": "± 46052.793884425766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2632730.2325581396,
            "unit": "ns",
            "range": "± 93076.88459108805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599806.25,
            "unit": "ns",
            "range": "± 42002.92797333697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2848473.3333333335,
            "unit": "ns",
            "range": "± 46215.23352233341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177534.61538461538,
            "unit": "ns",
            "range": "± 9151.283735410787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170311.95652173914,
            "unit": "ns",
            "range": "± 10311.519669195164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147317.64705882352,
            "unit": "ns",
            "range": "± 4706.312368944714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2690510,
            "unit": "ns",
            "range": "± 27808.909158243307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2436286.6666666665,
            "unit": "ns",
            "range": "± 41094.74882454425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10354.945054945056,
            "unit": "ns",
            "range": "± 1031.2089707677785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51101.086956521736,
            "unit": "ns",
            "range": "± 4455.210422016381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44008.333333333336,
            "unit": "ns",
            "range": "± 1610.8453355413924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54142.10526315789,
            "unit": "ns",
            "range": "± 12336.708576416973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2281.25,
            "unit": "ns",
            "range": "± 298.8794863626827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10332.978723404256,
            "unit": "ns",
            "range": "± 1340.8702276075692"
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
          "id": "866c901166f62fbf6e3294afb4ca779f76656073",
          "message": "Merge pull request #3969 from riemannulus/release/5.3.1\n\n🚀 release: 5.3.1",
          "timestamp": "2024-10-14T15:48:36+09:00",
          "tree_id": "3760144b41867ff68c42b61e7d6b211a9db2f29c",
          "url": "https://github.com/planetarium/libplanet/commit/866c901166f62fbf6e3294afb4ca779f76656073"
        },
        "date": 1728889065819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975705.2083333334,
            "unit": "ns",
            "range": "± 108443.74177647347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1746835,
            "unit": "ns",
            "range": "± 75283.40539002366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1505069,
            "unit": "ns",
            "range": "± 121112.6970756134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6744486.79245283,
            "unit": "ns",
            "range": "± 257136.33246986364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28157.894736842107,
            "unit": "ns",
            "range": "± 1397.3558991080008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9796806.666666666,
            "unit": "ns",
            "range": "± 56329.8508362848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24332233.333333332,
            "unit": "ns",
            "range": "± 150695.14006130138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61021092.307692304,
            "unit": "ns",
            "range": "± 140961.480917888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119307384.61538461,
            "unit": "ns",
            "range": "± 592931.2366626137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242242521.42857143,
            "unit": "ns",
            "range": "± 960901.7817242714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281709.8046875,
            "unit": "ns",
            "range": "± 8445.805705541923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057275.7254464286,
            "unit": "ns",
            "range": "± 1499.7297863832418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728163.2291666666,
            "unit": "ns",
            "range": "± 2819.462824434126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960255.7692307692,
            "unit": "ns",
            "range": "± 1542.7919379990378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615091.3671875,
            "unit": "ns",
            "range": "± 1027.7506242681181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568545.7291666666,
            "unit": "ns",
            "range": "± 1306.9506465369036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2131182.9787234045,
            "unit": "ns",
            "range": "± 75758.16018365666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2209453.846153846,
            "unit": "ns",
            "range": "± 29181.88980014304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2681192.1052631577,
            "unit": "ns",
            "range": "± 58631.90557091926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2207918.1818181816,
            "unit": "ns",
            "range": "± 53862.00742783213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2854607.1428571427,
            "unit": "ns",
            "range": "± 30819.66066517416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174801.96078431373,
            "unit": "ns",
            "range": "± 7123.5241333508075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165704.41176470587,
            "unit": "ns",
            "range": "± 7862.90049068578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153455.55555555556,
            "unit": "ns",
            "range": "± 3161.946947172268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2687540,
            "unit": "ns",
            "range": "± 39397.04122320427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2376853.3333333335,
            "unit": "ns",
            "range": "± 43145.019024989044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10327.173913043478,
            "unit": "ns",
            "range": "± 1148.2526869805904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52972.04301075269,
            "unit": "ns",
            "range": "± 5499.157358205336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44676.74418604651,
            "unit": "ns",
            "range": "± 1654.55176051981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51356.043956043955,
            "unit": "ns",
            "range": "± 8477.279553032839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2502.0408163265306,
            "unit": "ns",
            "range": "± 529.1462861357769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9993.684210526315,
            "unit": "ns",
            "range": "± 1290.1270369837812"
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
          "id": "57a4569717082553221fedeaa74ac656edb9d5c2",
          "message": "Merge pull request #3971 from riemannulus/prepare/5.3.2\n\n🧹  prepare: 5.3.2",
          "timestamp": "2024-10-16T15:08:31+09:00",
          "tree_id": "6dbfc866a79fbd44fcbac641b75e9992b736d867",
          "url": "https://github.com/planetarium/libplanet/commit/57a4569717082553221fedeaa74ac656edb9d5c2"
        },
        "date": 1729059458163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047062.8865979381,
            "unit": "ns",
            "range": "± 123685.3023803317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887727.5,
            "unit": "ns",
            "range": "± 66933.03575694909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548097.8260869565,
            "unit": "ns",
            "range": "± 88870.3079975186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6666308.695652174,
            "unit": "ns",
            "range": "± 136314.36232288246"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29629.87012987013,
            "unit": "ns",
            "range": "± 1533.2340205784615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10153926.666666666,
            "unit": "ns",
            "range": "± 112678.10325161209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25044460,
            "unit": "ns",
            "range": "± 286763.9292917733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61546250,
            "unit": "ns",
            "range": "± 294608.9631254388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124354100,
            "unit": "ns",
            "range": "± 787188.8493972616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247908380,
            "unit": "ns",
            "range": "± 2284430.39483744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3291966.3151041665,
            "unit": "ns",
            "range": "± 7734.9203796074535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090905.6901041667,
            "unit": "ns",
            "range": "± 1607.3834729146793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730997.1354166666,
            "unit": "ns",
            "range": "± 1112.35022396429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975593.1901041667,
            "unit": "ns",
            "range": "± 3047.0205238923645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627299.0559895834,
            "unit": "ns",
            "range": "± 1131.938890567416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556122.5520833334,
            "unit": "ns",
            "range": "± 745.8419947668009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2070907.6923076923,
            "unit": "ns",
            "range": "± 24826.614131426966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241278.947368421,
            "unit": "ns",
            "range": "± 49012.601315572894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2652394.4444444445,
            "unit": "ns",
            "range": "± 54518.85234887018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2232023.076923077,
            "unit": "ns",
            "range": "± 24328.17823862396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2895306.25,
            "unit": "ns",
            "range": "± 56108.495717374804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180089.0625,
            "unit": "ns",
            "range": "± 7889.77874410635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171007.9365079365,
            "unit": "ns",
            "range": "± 7748.67942104313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145404.34782608695,
            "unit": "ns",
            "range": "± 2807.5350335172807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754040,
            "unit": "ns",
            "range": "± 26350.733250844136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2507480,
            "unit": "ns",
            "range": "± 40226.27428506328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12453.846153846154,
            "unit": "ns",
            "range": "± 1417.455285777822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59063.15789473684,
            "unit": "ns",
            "range": "± 5459.854503391853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47664.89361702128,
            "unit": "ns",
            "range": "± 3059.2959850339494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67376.5306122449,
            "unit": "ns",
            "range": "± 13598.186666712758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3071.4285714285716,
            "unit": "ns",
            "range": "± 578.3018153963565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12000.537634408602,
            "unit": "ns",
            "range": "± 1621.9033140052768"
          }
        ]
      }
    ]
  }
}