window.BENCHMARK_DATA = {
  "lastUpdate": 1698649863629,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "a381be89165f734ede0b4e80f1913b9bb346623f",
          "message": "WebCrypto Export",
          "timestamp": "2023-10-30T14:25:11+09:00",
          "tree_id": "f5448df3776d0350106e7cc9f5afdd6618627f63",
          "url": "https://github.com/planetarium/libplanet/commit/a381be89165f734ede0b4e80f1913b9bb346623f"
        },
        "date": 1698644708998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53121.989130434784,
            "unit": "ns",
            "range": "± 4073.894377065383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5294965.776442308,
            "unit": "ns",
            "range": "± 17951.35759500713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633593.3705357143,
            "unit": "ns",
            "range": "± 4626.258755119366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161092.0955636161,
            "unit": "ns",
            "range": "± 863.788539818641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615596.014423077,
            "unit": "ns",
            "range": "± 3389.1181753257297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834752.328264509,
            "unit": "ns",
            "range": "± 487.65007241822883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761949.9181189904,
            "unit": "ns",
            "range": "± 711.2571751132454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8786462.642857144,
            "unit": "ns",
            "range": "± 134862.33678636161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23227559.933333334,
            "unit": "ns",
            "range": "± 226487.1926692755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57906586.06666667,
            "unit": "ns",
            "range": "± 425514.47143973625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115971796.4,
            "unit": "ns",
            "range": "± 1277133.7412910096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232833996.93333334,
            "unit": "ns",
            "range": "± 763267.7803690493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640175.882352941,
            "unit": "ns",
            "range": "± 72341.80511889578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3963501.9375,
            "unit": "ns",
            "range": "± 76893.17432513651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4620183.7,
            "unit": "ns",
            "range": "± 90581.39351991957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4679912.947368421,
            "unit": "ns",
            "range": "± 161047.80336401836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10817971,
            "unit": "ns",
            "range": "± 260501.7284910956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299866.43137254904,
            "unit": "ns",
            "range": "± 11898.597475761422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271559.4736842105,
            "unit": "ns",
            "range": "± 11740.431718311334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251263.50561797753,
            "unit": "ns",
            "range": "± 13885.908536684683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4535503.071428572,
            "unit": "ns",
            "range": "± 44665.02464666076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4210346.714285715,
            "unit": "ns",
            "range": "± 39524.78314138645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24787.172043010753,
            "unit": "ns",
            "range": "± 2080.1404458418915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98731.69387755102,
            "unit": "ns",
            "range": "± 8420.722625415761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83329.72164948453,
            "unit": "ns",
            "range": "± 7055.97757481536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101914.82474226804,
            "unit": "ns",
            "range": "± 13637.66509601435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6475.714285714285,
            "unit": "ns",
            "range": "± 1015.5178456557821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23912.26595744681,
            "unit": "ns",
            "range": "± 1789.93995919928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426295.5595238095,
            "unit": "ns",
            "range": "± 72359.39879091005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717346.1363636362,
            "unit": "ns",
            "range": "± 64325.19229686095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130376.222222222,
            "unit": "ns",
            "range": "± 105110.61346474882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9548927.346153846,
            "unit": "ns",
            "range": "± 491841.4559953297"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "153f10d1a5dcf12948f46957c81beb7853fb3d83",
          "message": "yarn upgrade (4.0.1)",
          "timestamp": "2023-10-30T14:47:58+09:00",
          "tree_id": "e2fc737c227c1dd8d8923e12dbb9a0f244f2acda",
          "url": "https://github.com/planetarium/libplanet/commit/153f10d1a5dcf12948f46957c81beb7853fb3d83"
        },
        "date": 1698645910585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65007.76530612245,
            "unit": "ns",
            "range": "± 6792.933746364325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6312133.920200893,
            "unit": "ns",
            "range": "± 19697.621571649237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977781.8609375,
            "unit": "ns",
            "range": "± 16385.409217548684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379504.883563702,
            "unit": "ns",
            "range": "± 10784.877103157278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078806.166341146,
            "unit": "ns",
            "range": "± 4201.812488390977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978449.6498697917,
            "unit": "ns",
            "range": "± 11700.206816938005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906108.027483259,
            "unit": "ns",
            "range": "± 2590.1681841208856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11097488.235294119,
            "unit": "ns",
            "range": "± 216151.49421630465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27427696.266666666,
            "unit": "ns",
            "range": "± 198363.00741982635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69224995.73333333,
            "unit": "ns",
            "range": "± 137820.95034006293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135822318,
            "unit": "ns",
            "range": "± 578729.63550176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271911143.5714286,
            "unit": "ns",
            "range": "± 1170419.4793949674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4466587,
            "unit": "ns",
            "range": "± 96320.83173609608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4568697.6,
            "unit": "ns",
            "range": "± 162228.81745757148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5442359.65,
            "unit": "ns",
            "range": "± 124364.46874336102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5507011.256756756,
            "unit": "ns",
            "range": "± 266104.4674052706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12921018.11627907,
            "unit": "ns",
            "range": "± 304869.4675391115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331804.27906976745,
            "unit": "ns",
            "range": "± 12128.164842385482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322337.7916666667,
            "unit": "ns",
            "range": "± 15118.198645338985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301935.31707317074,
            "unit": "ns",
            "range": "± 10900.765829608084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5350281.166666667,
            "unit": "ns",
            "range": "± 113072.95243402402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5045330.285714285,
            "unit": "ns",
            "range": "± 117967.84438190894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28902.847826086956,
            "unit": "ns",
            "range": "± 2126.4889182513443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114906.0425531915,
            "unit": "ns",
            "range": "± 9416.465649674674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101015.29787234042,
            "unit": "ns",
            "range": "± 6411.245855190264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110634.24210526315,
            "unit": "ns",
            "range": "± 8991.946340695822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8314.770833333334,
            "unit": "ns",
            "range": "± 1287.1849045528666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26309.05319148936,
            "unit": "ns",
            "range": "± 2091.342488867472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705410.956043956,
            "unit": "ns",
            "range": "± 100763.59291374506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3342927.285714286,
            "unit": "ns",
            "range": "± 108154.942518095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555505.1379310344,
            "unit": "ns",
            "range": "± 139928.008003715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10574948.85,
            "unit": "ns",
            "range": "± 299957.9128393703"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "cf8e10509c02d89de48f6ebe2c11e23be726c70d",
          "message": "Use NodeNext (implies EsNext)",
          "timestamp": "2023-10-30T15:12:24+09:00",
          "tree_id": "affbedf496d272d446e7be97a62d12dd1f674a6c",
          "url": "https://github.com/planetarium/libplanet/commit/cf8e10509c02d89de48f6ebe2c11e23be726c70d"
        },
        "date": 1698647352075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57227.72222222222,
            "unit": "ns",
            "range": "± 4175.195378669413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6129577.369791667,
            "unit": "ns",
            "range": "± 51825.57061599787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927957.779296875,
            "unit": "ns",
            "range": "± 42861.6581328656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330900.7776041667,
            "unit": "ns",
            "range": "± 10130.880115973003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2950133.943359375,
            "unit": "ns",
            "range": "± 34585.995126185335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 970814.9768229167,
            "unit": "ns",
            "range": "± 8166.583565443756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849847.8926432292,
            "unit": "ns",
            "range": "± 8588.010947953702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9600854.56097561,
            "unit": "ns",
            "range": "± 334329.7892852242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26768450.263157893,
            "unit": "ns",
            "range": "± 588216.3424253059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65319396.84615385,
            "unit": "ns",
            "range": "± 819273.4198232038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130082012.35714285,
            "unit": "ns",
            "range": "± 2255046.116501274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262246730.6153846,
            "unit": "ns",
            "range": "± 3703511.26835756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4073646.7551020407,
            "unit": "ns",
            "range": "± 160078.56231479626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4291226.488372093,
            "unit": "ns",
            "range": "± 157089.49025413327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4982761.565217392,
            "unit": "ns",
            "range": "± 189962.34781949726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4831686.253333333,
            "unit": "ns",
            "range": "± 242182.68403809224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12080900.870370371,
            "unit": "ns",
            "range": "± 500333.759112366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314008.8043478261,
            "unit": "ns",
            "range": "± 12086.002878664714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301124,
            "unit": "ns",
            "range": "± 10992.611499158358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265314.8965517241,
            "unit": "ns",
            "range": "± 14540.768937022267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5093761.222222222,
            "unit": "ns",
            "range": "± 166426.48982283202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4798509.916666667,
            "unit": "ns",
            "range": "± 120913.08123891478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22497.945054945056,
            "unit": "ns",
            "range": "± 2173.6987748108436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96987.6,
            "unit": "ns",
            "range": "± 6177.1275831670655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84870.30107526881,
            "unit": "ns",
            "range": "± 6618.0902141238175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97568.58947368422,
            "unit": "ns",
            "range": "± 11490.124498422534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6073.333333333333,
            "unit": "ns",
            "range": "± 638.667802072023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22423.369565217392,
            "unit": "ns",
            "range": "± 1528.686239933639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1661881.0967741935,
            "unit": "ns",
            "range": "± 69595.00843762507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257207.1612903224,
            "unit": "ns",
            "range": "± 97287.51174468959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2445941.0860215053,
            "unit": "ns",
            "range": "± 142745.93473444317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10969412.923076924,
            "unit": "ns",
            "range": "± 564436.5770109501"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "ecf3e8d45c618765f46ab7dab8dea6cb293fa510",
          "message": "Add isDigest",
          "timestamp": "2023-10-30T15:23:12+09:00",
          "tree_id": "a71f804da94f8f0cbfcb113455d1dfd5b71d4d27",
          "url": "https://github.com/planetarium/libplanet/commit/ecf3e8d45c618765f46ab7dab8dea6cb293fa510"
        },
        "date": 1698647822706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49267.101265822785,
            "unit": "ns",
            "range": "± 2557.8537757916715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5298088.30390625,
            "unit": "ns",
            "range": "± 16443.46703765993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1635429.2466517857,
            "unit": "ns",
            "range": "± 3795.9085252445616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132260.6763392857,
            "unit": "ns",
            "range": "± 1083.1565801880524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633456.619140625,
            "unit": "ns",
            "range": "± 5469.459165937595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815833.546499399,
            "unit": "ns",
            "range": "± 1011.1573359459304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762947.3060825893,
            "unit": "ns",
            "range": "± 1273.0517872174944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8312782.615384615,
            "unit": "ns",
            "range": "± 79308.55059569393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22446243.933333334,
            "unit": "ns",
            "range": "± 367441.9206287606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58763680.76923077,
            "unit": "ns",
            "range": "± 432708.5916773077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112552159.73333333,
            "unit": "ns",
            "range": "± 1416057.6420483873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223002292,
            "unit": "ns",
            "range": "± 2447696.6948808366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3403793.5555555555,
            "unit": "ns",
            "range": "± 61095.347073456775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542122.882352941,
            "unit": "ns",
            "range": "± 68106.66719830221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322988.03125,
            "unit": "ns",
            "range": "± 129282.3185075067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4348881.296296297,
            "unit": "ns",
            "range": "± 173350.54790479227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10513539.294117646,
            "unit": "ns",
            "range": "± 243716.72722520592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268921.2619047619,
            "unit": "ns",
            "range": "± 9004.708795441888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261042.57627118644,
            "unit": "ns",
            "range": "± 10754.06438836417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226019.14285714287,
            "unit": "ns",
            "range": "± 3978.6921673632105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333069.066666666,
            "unit": "ns",
            "range": "± 68973.47318505516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4015737.5,
            "unit": "ns",
            "range": "± 56294.886321597085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22515.242105263158,
            "unit": "ns",
            "range": "± 1877.076578969188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88598.46753246753,
            "unit": "ns",
            "range": "± 4330.42748462434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71120.81578947368,
            "unit": "ns",
            "range": "± 2423.8140689469224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83947.66326530612,
            "unit": "ns",
            "range": "± 9524.426447481339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5061.134020618557,
            "unit": "ns",
            "range": "± 674.1128835499594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17783.13186813187,
            "unit": "ns",
            "range": "± 1212.726828348149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375936.9684210527,
            "unit": "ns",
            "range": "± 82854.90053566892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577567.3333333335,
            "unit": "ns",
            "range": "± 71732.91331738868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2058221.8048780488,
            "unit": "ns",
            "range": "± 108245.57826368925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8794602.945945946,
            "unit": "ns",
            "range": "± 297277.12643068575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "5b3289554573f72c8ebf9f440dee3837e67fceb8",
          "message": "Add",
          "timestamp": "2023-10-30T15:30:35+09:00",
          "tree_id": "f1df10c43957acef2c74f777f14639b39d88a0b6",
          "url": "https://github.com/planetarium/libplanet/commit/5b3289554573f72c8ebf9f440dee3837e67fceb8"
        },
        "date": 1698648228829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49459.98529411765,
            "unit": "ns",
            "range": "± 2241.099919799824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5237889.92109375,
            "unit": "ns",
            "range": "± 20545.535085486255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1638705.1951729911,
            "unit": "ns",
            "range": "± 5055.515108577323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1129804.857421875,
            "unit": "ns",
            "range": "± 2415.4887952843383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587676.1203125,
            "unit": "ns",
            "range": "± 9013.45335942968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809445.4992838542,
            "unit": "ns",
            "range": "± 3669.3313477104552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764472.33046875,
            "unit": "ns",
            "range": "± 1137.2797834895005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8253634.5,
            "unit": "ns",
            "range": "± 105637.50005761722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22646399,
            "unit": "ns",
            "range": "± 155582.62667309612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55888658.666666664,
            "unit": "ns",
            "range": "± 790639.1038143642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110179213.26666667,
            "unit": "ns",
            "range": "± 1326993.2320660907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218550911.4,
            "unit": "ns",
            "range": "± 3466864.3729079454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430994.2352941176,
            "unit": "ns",
            "range": "± 109237.67683804549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3609711.4285714286,
            "unit": "ns",
            "range": "± 58859.0380011225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312789.642857143,
            "unit": "ns",
            "range": "± 155416.02634641115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4216382.076923077,
            "unit": "ns",
            "range": "± 146590.8903266403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10663313.166666666,
            "unit": "ns",
            "range": "± 367172.5296184868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267385.11904761905,
            "unit": "ns",
            "range": "± 8120.442004677804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261723.3404255319,
            "unit": "ns",
            "range": "± 10197.046335510477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223661.75,
            "unit": "ns",
            "range": "± 4260.163369324389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241809.533333333,
            "unit": "ns",
            "range": "± 57213.069678011096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879179.5714285714,
            "unit": "ns",
            "range": "± 65652.35065885278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18883.15053763441,
            "unit": "ns",
            "range": "± 1079.0546884057173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85765.11956521739,
            "unit": "ns",
            "range": "± 6156.332460091272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69795.83333333333,
            "unit": "ns",
            "range": "± 1479.1159223552108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82446.08602150538,
            "unit": "ns",
            "range": "± 7845.688695150702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5083.659793814433,
            "unit": "ns",
            "range": "± 806.5985407690683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17243.613636363636,
            "unit": "ns",
            "range": "± 976.8648470833027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340780.202247191,
            "unit": "ns",
            "range": "± 79688.63174870904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476701.2,
            "unit": "ns",
            "range": "± 45964.968633266166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070097.0531914893,
            "unit": "ns",
            "range": "± 117499.56502883267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9318908.11235955,
            "unit": "ns",
            "range": "± 583680.7838746364"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f98901371f4e74a124d0244830aa002bb3ced93",
          "message": "Merge branch 'main' into update-ts-packages",
          "timestamp": "2023-10-30T15:27:54+09:00",
          "tree_id": "d413bfb4e826aabe3d588f7f59678a4c2064b70b",
          "url": "https://github.com/planetarium/libplanet/commit/1f98901371f4e74a124d0244830aa002bb3ced93"
        },
        "date": 1698648384407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60040.51612903226,
            "unit": "ns",
            "range": "± 11732.763983275083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6130548.902901785,
            "unit": "ns",
            "range": "± 45620.90317800801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1975026.4125,
            "unit": "ns",
            "range": "± 32845.02410128863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359257.4774169922,
            "unit": "ns",
            "range": "± 21466.95345165543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078835.71875,
            "unit": "ns",
            "range": "± 63030.071283767815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992084.1857096354,
            "unit": "ns",
            "range": "± 10418.482187410129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938329.5825892857,
            "unit": "ns",
            "range": "± 12610.139307751891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9270594.94047619,
            "unit": "ns",
            "range": "± 497258.6831526497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25225590.783505153,
            "unit": "ns",
            "range": "± 1784022.7376319263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66029284.04918033,
            "unit": "ns",
            "range": "± 2931149.2481866186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131407099.79310344,
            "unit": "ns",
            "range": "± 3329010.0076949876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272150043.3142857,
            "unit": "ns",
            "range": "± 8457175.175228883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783684.9793814435,
            "unit": "ns",
            "range": "± 299571.9471149967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3922843.4375,
            "unit": "ns",
            "range": "± 286517.2666909242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5229835.020618557,
            "unit": "ns",
            "range": "± 435452.54840484104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4909695.5360824745,
            "unit": "ns",
            "range": "± 370136.46751091635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13977181.87671233,
            "unit": "ns",
            "range": "± 691202.0260538268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338022.87096774194,
            "unit": "ns",
            "range": "± 43280.46784893043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319549.72340425535,
            "unit": "ns",
            "range": "± 39555.29203869892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284973.21276595746,
            "unit": "ns",
            "range": "± 44398.666771340366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5047502.968421052,
            "unit": "ns",
            "range": "± 384285.9743095657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4439584.804123712,
            "unit": "ns",
            "range": "± 303801.4639601769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19604.01265822785,
            "unit": "ns",
            "range": "± 2228.995246188296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108350.45263157894,
            "unit": "ns",
            "range": "± 20909.062906629046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102673.83870967742,
            "unit": "ns",
            "range": "± 18783.968724680883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119128.52631578948,
            "unit": "ns",
            "range": "± 21423.317391085668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6405.651685393258,
            "unit": "ns",
            "range": "± 1047.4468971257033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25151.23469387755,
            "unit": "ns",
            "range": "± 9193.975712278077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639575.78125,
            "unit": "ns",
            "range": "± 188813.20982702248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3170004.6666666665,
            "unit": "ns",
            "range": "± 283659.57450091623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2417225.0104166665,
            "unit": "ns",
            "range": "± 228554.55892559563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11853405.576086957,
            "unit": "ns",
            "range": "± 935629.3096596083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "86e2ef9ead11f1c5a1c17c66aa6df7178af32dac",
          "message": "use 20 in CI",
          "timestamp": "2023-10-30T15:31:57+09:00",
          "tree_id": "86e11692b4e5bd82639ce4c5491c54aee2006c59",
          "url": "https://github.com/planetarium/libplanet/commit/86e2ef9ead11f1c5a1c17c66aa6df7178af32dac"
        },
        "date": 1698648444312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49831.82608695652,
            "unit": "ns",
            "range": "± 11234.319986178045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789785.010817308,
            "unit": "ns",
            "range": "± 68526.15412292069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500916.55078125,
            "unit": "ns",
            "range": "± 30008.63439354613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097198.4290647644,
            "unit": "ns",
            "range": "± 52735.83289980407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2425192.710186298,
            "unit": "ns",
            "range": "± 64020.57291321579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794182.1205078125,
            "unit": "ns",
            "range": "± 17397.222123660988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730927.2019042969,
            "unit": "ns",
            "range": "± 9026.739842169209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7396997.742268041,
            "unit": "ns",
            "range": "± 454509.8770995723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18508776.65,
            "unit": "ns",
            "range": "± 957581.5638158467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47448735.14606742,
            "unit": "ns",
            "range": "± 2628236.4977343455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98110106.05319148,
            "unit": "ns",
            "range": "± 6319972.293293204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180147456,
            "unit": "ns",
            "range": "± 2396638.565602376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2871102.361702128,
            "unit": "ns",
            "range": "± 227686.12882234246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3223520.836734694,
            "unit": "ns",
            "range": "± 319169.9856767888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3741507.2580645164,
            "unit": "ns",
            "range": "± 253025.3834579475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3677048.085106383,
            "unit": "ns",
            "range": "± 328272.7078978617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10961003.989130436,
            "unit": "ns",
            "range": "± 1288181.7083479282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260996.02083333334,
            "unit": "ns",
            "range": "± 37074.27552501633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275254.7551020408,
            "unit": "ns",
            "range": "± 59107.05893076191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236530.61224489796,
            "unit": "ns",
            "range": "± 37852.778194525854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3926915.84375,
            "unit": "ns",
            "range": "± 293967.30833680445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3596601.875,
            "unit": "ns",
            "range": "± 267753.5526207184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20054.70707070707,
            "unit": "ns",
            "range": "± 8233.870393576448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80514.95918367348,
            "unit": "ns",
            "range": "± 15688.681827446591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72088.95789473684,
            "unit": "ns",
            "range": "± 14011.919875375856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81615.83673469388,
            "unit": "ns",
            "range": "± 22122.920398133283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4219.123595505618,
            "unit": "ns",
            "range": "± 476.2311036629342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19160.30612244898,
            "unit": "ns",
            "range": "± 8290.156254864272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1235394.1836734693,
            "unit": "ns",
            "range": "± 202998.65955391814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2482524.3131313133,
            "unit": "ns",
            "range": "± 296417.32644122577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835903.1354166667,
            "unit": "ns",
            "range": "± 188711.67955474017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9287682.591836736,
            "unit": "ns",
            "range": "± 1401004.5216032898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "0210fa0572d5a03a2570706b74437ffd4df0a30b",
          "message": "use lts/*",
          "timestamp": "2023-10-30T15:33:54+09:00",
          "tree_id": "91dd897a10ca0011b52c0f8eedfef594eebe0aa4",
          "url": "https://github.com/planetarium/libplanet/commit/0210fa0572d5a03a2570706b74437ffd4df0a30b"
        },
        "date": 1698648591515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50862.709677419356,
            "unit": "ns",
            "range": "± 4173.3555849831055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5315350.253605769,
            "unit": "ns",
            "range": "± 11340.46464432334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636445.5018136161,
            "unit": "ns",
            "range": "± 3955.906132284073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145461.4598214286,
            "unit": "ns",
            "range": "± 511.24778271533575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602931.7973958333,
            "unit": "ns",
            "range": "± 2182.654395507627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826928.5458286831,
            "unit": "ns",
            "range": "± 1084.619112953421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740375.3260216346,
            "unit": "ns",
            "range": "± 374.4876423586767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8380183.205882353,
            "unit": "ns",
            "range": "± 269780.16336704645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22678483.285714287,
            "unit": "ns",
            "range": "± 181032.19855825417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56981121.21428572,
            "unit": "ns",
            "range": "± 364094.9794080953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115131948.13333334,
            "unit": "ns",
            "range": "± 1158756.7068421016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231012730.53333333,
            "unit": "ns",
            "range": "± 550042.5756124788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3652720.533333333,
            "unit": "ns",
            "range": "± 40113.349555383444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3889709.6875,
            "unit": "ns",
            "range": "± 74634.11652563793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4535017.769230769,
            "unit": "ns",
            "range": "± 63279.03153646007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4478654.782608695,
            "unit": "ns",
            "range": "± 107743.4090597389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10927472.606060605,
            "unit": "ns",
            "range": "± 272535.5966106698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282643.23529411765,
            "unit": "ns",
            "range": "± 5770.463017919486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272431.49019607843,
            "unit": "ns",
            "range": "± 11129.031811209003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229390.0588235294,
            "unit": "ns",
            "range": "± 4578.712830460492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4478834.733333333,
            "unit": "ns",
            "range": "± 49237.11971160822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166160.5,
            "unit": "ns",
            "range": "± 28889.87742538632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22180.21052631579,
            "unit": "ns",
            "range": "± 1740.1382183714472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94181.31182795699,
            "unit": "ns",
            "range": "± 5528.962264016983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76374.1052631579,
            "unit": "ns",
            "range": "± 2606.7445555346208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89972.08163265306,
            "unit": "ns",
            "range": "± 9513.433085139788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5488.701030927835,
            "unit": "ns",
            "range": "± 552.6057622178998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19897.945054945056,
            "unit": "ns",
            "range": "± 1443.0455014204226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426923.6703296704,
            "unit": "ns",
            "range": "± 75565.23589809374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2814597.2807017546,
            "unit": "ns",
            "range": "± 121130.04334462117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128884.75,
            "unit": "ns",
            "range": "± 104780.12122249816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9220004.323529411,
            "unit": "ns",
            "range": "± 294419.01039769634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "c73166861a28830884f5991f777063c8a63b6560",
          "message": "Add",
          "timestamp": "2023-10-30T15:27:28+09:00",
          "tree_id": "d956490b9c8b4fa8affdb6dffd32759f8d715160",
          "url": "https://github.com/planetarium/libplanet/commit/c73166861a28830884f5991f777063c8a63b6560"
        },
        "date": 1698648873635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72261.83146067416,
            "unit": "ns",
            "range": "± 11461.768304430756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7013342.78463153,
            "unit": "ns",
            "range": "± 330307.5339647531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2274398.7425031564,
            "unit": "ns",
            "range": "± 161539.34672001563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1488078.0313251202,
            "unit": "ns",
            "range": "± 37236.78670043622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3389055.0360863097,
            "unit": "ns",
            "range": "± 115905.64136937226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081868.245727539,
            "unit": "ns",
            "range": "± 42667.367482198824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1068617.2052014803,
            "unit": "ns",
            "range": "± 61146.73114635743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11175262.684210526,
            "unit": "ns",
            "range": "± 887678.598060434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29731220.416666668,
            "unit": "ns",
            "range": "± 2357154.3862525052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78185845.9,
            "unit": "ns",
            "range": "± 9986613.305083238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 157430155.96875,
            "unit": "ns",
            "range": "± 12460991.692411995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 314984412.6060606,
            "unit": "ns",
            "range": "± 28179655.874264665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4732018.733333333,
            "unit": "ns",
            "range": "± 555298.0969727193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4823143.157303371,
            "unit": "ns",
            "range": "± 552573.2150079526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5910679.725274725,
            "unit": "ns",
            "range": "± 453659.0282140704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5880791.482758621,
            "unit": "ns",
            "range": "± 710338.5104291434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15910097.639175259,
            "unit": "ns",
            "range": "± 2404486.299734715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381516.7912087912,
            "unit": "ns",
            "range": "± 63419.39336293425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381320.41237113404,
            "unit": "ns",
            "range": "± 63132.19062622236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342000.7415730337,
            "unit": "ns",
            "range": "± 35011.86721427728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5535327.65060241,
            "unit": "ns",
            "range": "± 308201.9847153389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5419489.329545454,
            "unit": "ns",
            "range": "± 531488.9020058612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25432.978260869564,
            "unit": "ns",
            "range": "± 2927.3064128456135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122071.30526315789,
            "unit": "ns",
            "range": "± 19318.52603297348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127236.4,
            "unit": "ns",
            "range": "± 10331.461772423878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126346.24444444444,
            "unit": "ns",
            "range": "± 12616.881968764425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8875.691489361701,
            "unit": "ns",
            "range": "± 851.6440145117396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23401.58620689655,
            "unit": "ns",
            "range": "± 4068.9393782647567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780709.5638297873,
            "unit": "ns",
            "range": "± 235189.17413584364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3619830.9770114943,
            "unit": "ns",
            "range": "± 328798.206322803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687652.6195652173,
            "unit": "ns",
            "range": "± 262390.6102811014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13111678.340425532,
            "unit": "ns",
            "range": "± 1423729.5927713723"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "3426d62ac83f110ff826053396831dd18f110eae",
          "message": "WebCrypto Shim",
          "timestamp": "2023-10-30T15:41:40+09:00",
          "tree_id": "572ab003fe64fc8ac9fc402b2ab477ced8258de6",
          "url": "https://github.com/planetarium/libplanet/commit/3426d62ac83f110ff826053396831dd18f110eae"
        },
        "date": 1698648972719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52115.01063829787,
            "unit": "ns",
            "range": "± 4354.937831475284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5211291.578125,
            "unit": "ns",
            "range": "± 20500.833071560894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1659592.23203125,
            "unit": "ns",
            "range": "± 5018.662107031398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159115.5051618305,
            "unit": "ns",
            "range": "± 794.4189227976282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590273.0161458333,
            "unit": "ns",
            "range": "± 2066.7656736982726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852097.240373884,
            "unit": "ns",
            "range": "± 566.5599068420564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758662.5809849331,
            "unit": "ns",
            "range": "± 852.9545972372773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8012489.642857143,
            "unit": "ns",
            "range": "± 141960.88159045632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22198714.5,
            "unit": "ns",
            "range": "± 299947.2459790606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55722259.6,
            "unit": "ns",
            "range": "± 1026546.9943872725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111969387.93333334,
            "unit": "ns",
            "range": "± 1769110.0842852949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222378433.46666667,
            "unit": "ns",
            "range": "± 3002984.6190086543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3523281.85,
            "unit": "ns",
            "range": "± 118816.09039907224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580405.0172413792,
            "unit": "ns",
            "range": "± 139623.61005386367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4395409.052631579,
            "unit": "ns",
            "range": "± 151486.4225845228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4243038.9,
            "unit": "ns",
            "range": "± 189399.03875963727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10744540.666666666,
            "unit": "ns",
            "range": "± 364827.6915666622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277243.6875,
            "unit": "ns",
            "range": "± 8344.487372636906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266912.25,
            "unit": "ns",
            "range": "± 4416.826741753254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227558.29411764705,
            "unit": "ns",
            "range": "± 6879.181274089419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378467.966666667,
            "unit": "ns",
            "range": "± 60044.133213907946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4049623.2,
            "unit": "ns",
            "range": "± 89598.10814884784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21026.172043010753,
            "unit": "ns",
            "range": "± 1960.1085020081653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95247.84782608696,
            "unit": "ns",
            "range": "± 5389.445558416754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72066.02222222222,
            "unit": "ns",
            "range": "± 2741.0655317768214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92276.5306122449,
            "unit": "ns",
            "range": "± 11562.066774902343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5308.40625,
            "unit": "ns",
            "range": "± 711.7526415106363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19337.79120879121,
            "unit": "ns",
            "range": "± 1851.6697420705545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435892.1081081082,
            "unit": "ns",
            "range": "± 68403.12768795739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2744941.793103448,
            "unit": "ns",
            "range": "± 77404.53730119964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177447.225,
            "unit": "ns",
            "range": "± 107743.54220678468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9119899.297297297,
            "unit": "ns",
            "range": "± 281833.19167351705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "83309adbbf6e2324d3332ba9c7bcd9293cb7e767",
          "message": "WebCrypto Shim",
          "timestamp": "2023-10-30T15:40:39+09:00",
          "tree_id": "f62b6e8e47d9412dbb4f308acca8320b7eee424d",
          "url": "https://github.com/planetarium/libplanet/commit/83309adbbf6e2324d3332ba9c7bcd9293cb7e767"
        },
        "date": 1698649113231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58029.108695652176,
            "unit": "ns",
            "range": "± 4150.86469068351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6304234.490384615,
            "unit": "ns",
            "range": "± 11582.24398347314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950365.3079427083,
            "unit": "ns",
            "range": "± 2125.4773624191134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403243.817157452,
            "unit": "ns",
            "range": "± 1450.9748421624633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3137982.400390625,
            "unit": "ns",
            "range": "± 7344.444343191321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 979541.2287946428,
            "unit": "ns",
            "range": "± 2436.8882086439176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896055.7804129465,
            "unit": "ns",
            "range": "± 7513.779335946245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9960222.047619049,
            "unit": "ns",
            "range": "± 230647.7609822988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27588017.466666665,
            "unit": "ns",
            "range": "± 179303.35054150416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68246836.08333333,
            "unit": "ns",
            "range": "± 322131.87711513386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135522786.66666666,
            "unit": "ns",
            "range": "± 1692606.3733392975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268726814.8,
            "unit": "ns",
            "range": "± 1015199.6353385167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4381739.9,
            "unit": "ns",
            "range": "± 96889.14529659791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4455972.810810811,
            "unit": "ns",
            "range": "± 148707.87954088565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5413216.769230769,
            "unit": "ns",
            "range": "± 39759.31842799841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5284320.318181818,
            "unit": "ns",
            "range": "± 119610.76837029363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12795082.875,
            "unit": "ns",
            "range": "± 501200.2877070639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318870.08771929826,
            "unit": "ns",
            "range": "± 13769.580091741442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305683.24742268043,
            "unit": "ns",
            "range": "± 18531.025338172134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275962.72,
            "unit": "ns",
            "range": "± 17642.652245743615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5088604.666666667,
            "unit": "ns",
            "range": "± 220326.5023604039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4844933.068965517,
            "unit": "ns",
            "range": "± 141263.05502802992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25488.387096774193,
            "unit": "ns",
            "range": "± 2293.3595824934005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109731.06451612903,
            "unit": "ns",
            "range": "± 9496.100145536235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96415.47474747474,
            "unit": "ns",
            "range": "± 9430.884572686457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110259.04210526316,
            "unit": "ns",
            "range": "± 9658.247379572384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7945.773195876289,
            "unit": "ns",
            "range": "± 852.2861841486824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26897.957446808512,
            "unit": "ns",
            "range": "± 1989.9785102578453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595529.8620689656,
            "unit": "ns",
            "range": "± 88712.12755733114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3287719.0967741935,
            "unit": "ns",
            "range": "± 186264.1070369813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2489431.4567901236,
            "unit": "ns",
            "range": "± 127373.62171639477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11153598.735632183,
            "unit": "ns",
            "range": "± 648614.1399354088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "d850cb6a94435f8867f6618c025640573a31d540",
          "message": "Webcrypto Shim 2.0 Electric Boogaloo",
          "timestamp": "2023-10-30T15:45:30+09:00",
          "tree_id": "7ec4d5a5810b7c7a18cb31a859e349f5c9b816a0",
          "url": "https://github.com/planetarium/libplanet/commit/d850cb6a94435f8867f6618c025640573a31d540"
        },
        "date": 1698649206090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51744.247191011236,
            "unit": "ns",
            "range": "± 3584.229993003755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5349446.527901785,
            "unit": "ns",
            "range": "± 35663.75509664253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1624248.7293526786,
            "unit": "ns",
            "range": "± 2836.542170274833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126152.2401041666,
            "unit": "ns",
            "range": "± 1106.800233452138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581681.284598214,
            "unit": "ns",
            "range": "± 1980.3489679403904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817049.8649338942,
            "unit": "ns",
            "range": "± 572.6338538878144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764340.1582782452,
            "unit": "ns",
            "range": "± 353.6616680896094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8996264.42857143,
            "unit": "ns",
            "range": "± 62409.31372641585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23095407.8,
            "unit": "ns",
            "range": "± 172264.67974527704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57867884.14285714,
            "unit": "ns",
            "range": "± 200084.9212086082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115056928.6,
            "unit": "ns",
            "range": "± 861339.0589990681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229155178.06666666,
            "unit": "ns",
            "range": "± 900477.2705253483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3641129.8,
            "unit": "ns",
            "range": "± 61392.197890983785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3879447.5625,
            "unit": "ns",
            "range": "± 74840.05073040214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505824.9130434785,
            "unit": "ns",
            "range": "± 91075.92078985184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4564853.928571428,
            "unit": "ns",
            "range": "± 130297.8753400947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10737146.513513513,
            "unit": "ns",
            "range": "± 261513.28786343848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278454.98,
            "unit": "ns",
            "range": "± 10910.632063267463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270044.64705882355,
            "unit": "ns",
            "range": "± 10108.331272417876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246764.33333333334,
            "unit": "ns",
            "range": "± 6171.8383398104015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4523962.933333334,
            "unit": "ns",
            "range": "± 35036.13515351312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4130037.6,
            "unit": "ns",
            "range": "± 27545.788368252805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23277.395604395606,
            "unit": "ns",
            "range": "± 1418.7699905913873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95330.94252873563,
            "unit": "ns",
            "range": "± 5175.283534208474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85344.76344086022,
            "unit": "ns",
            "range": "± 4970.532244262941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99598.89690721649,
            "unit": "ns",
            "range": "± 8748.612317919977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6278.683673469388,
            "unit": "ns",
            "range": "± 1084.8596336296919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19557.83695652174,
            "unit": "ns",
            "range": "± 1430.9271203223984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408561.3804347827,
            "unit": "ns",
            "range": "± 74651.782423513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657592.1153846155,
            "unit": "ns",
            "range": "± 70873.30115710819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124998.2816901407,
            "unit": "ns",
            "range": "± 103947.43812210135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9122742.525,
            "unit": "ns",
            "range": "± 320573.26628721034"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fab5fde321e7cfd59ab0b12397aa41b269a35bbc",
          "message": "Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-10-30T15:46:27+09:00",
          "tree_id": "f20262a90ad26e81db7511026143f08ae1cc2fc3",
          "url": "https://github.com/planetarium/libplanet/commit/fab5fde321e7cfd59ab0b12397aa41b269a35bbc"
        },
        "date": 1698649385918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63209.52127659575,
            "unit": "ns",
            "range": "± 7904.170679027519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6311123.219791667,
            "unit": "ns",
            "range": "± 18032.60127886766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976865.144810268,
            "unit": "ns",
            "range": "± 6176.318968954072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382691.8396935095,
            "unit": "ns",
            "range": "± 2724.0268973983907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3135837.19453125,
            "unit": "ns",
            "range": "± 3313.9780168003012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986162.5713820684,
            "unit": "ns",
            "range": "± 18973.823499768405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915931.6764090402,
            "unit": "ns",
            "range": "± 426.0273801377268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10147304.05882353,
            "unit": "ns",
            "range": "± 207820.82909668566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26785360.35714286,
            "unit": "ns",
            "range": "± 264869.072964973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67689959.73333333,
            "unit": "ns",
            "range": "± 169031.9295350804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134573792.7142857,
            "unit": "ns",
            "range": "± 708481.550617226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272841881.93333334,
            "unit": "ns",
            "range": "± 838424.6725113598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4326111.19047619,
            "unit": "ns",
            "range": "± 103004.83969921949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4484108.673469388,
            "unit": "ns",
            "range": "± 147573.37941207245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5363187.846153846,
            "unit": "ns",
            "range": "± 145842.05107051734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5244299.039215687,
            "unit": "ns",
            "range": "± 213491.7114120322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13014851.352941176,
            "unit": "ns",
            "range": "± 500374.2991550555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331679.05263157893,
            "unit": "ns",
            "range": "± 7301.940719757577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317117.1724137931,
            "unit": "ns",
            "range": "± 9202.729389654562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292771.9090909091,
            "unit": "ns",
            "range": "± 6835.524426246913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5319273.933333334,
            "unit": "ns",
            "range": "± 73420.77862320785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4973856.866666666,
            "unit": "ns",
            "range": "± 54611.50428234835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28253.864583333332,
            "unit": "ns",
            "range": "± 2174.313653933081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108990.6338028169,
            "unit": "ns",
            "range": "± 5295.900396234907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95186.25,
            "unit": "ns",
            "range": "± 5260.3307405523465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109341.17391304347,
            "unit": "ns",
            "range": "± 7648.775112178068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8403.540816326531,
            "unit": "ns",
            "range": "± 975.0184684306087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27302.59375,
            "unit": "ns",
            "range": "± 2256.6650036030696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665302.3466666667,
            "unit": "ns",
            "range": "± 78762.66218966016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3276059.8620689656,
            "unit": "ns",
            "range": "± 95979.1330869536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2520928.3333333335,
            "unit": "ns",
            "range": "± 115469.6515528928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10908961.88095238,
            "unit": "ns",
            "range": "± 375757.52938870376"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a321d204ba0d9be15eada617eb9781c21ed0074",
          "message": "Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-10-30T15:52:05+09:00",
          "tree_id": "a5d52bafc26e0c2f9f01f55e86cb626c7ae8c00c",
          "url": "https://github.com/planetarium/libplanet/commit/4a321d204ba0d9be15eada617eb9781c21ed0074"
        },
        "date": 1698649496670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46765.432098765436,
            "unit": "ns",
            "range": "± 2462.8824826728523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5222637.233774038,
            "unit": "ns",
            "range": "± 3970.1548634243163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1638112.3931790865,
            "unit": "ns",
            "range": "± 2546.5469619115765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141549.5090680805,
            "unit": "ns",
            "range": "± 579.6308347966054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2499605.8153645834,
            "unit": "ns",
            "range": "± 4373.728851368269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837626.4067708333,
            "unit": "ns",
            "range": "± 1500.348267256727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724371.5357840402,
            "unit": "ns",
            "range": "± 1183.456801516033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787344.357142857,
            "unit": "ns",
            "range": "± 52122.41617961603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19462163.533333335,
            "unit": "ns",
            "range": "± 162118.63752109205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50236944.6,
            "unit": "ns",
            "range": "± 307228.60244793986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100313558.14285715,
            "unit": "ns",
            "range": "± 502002.62546951463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200978335.13333333,
            "unit": "ns",
            "range": "± 1175583.3935970361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3195987.2666666666,
            "unit": "ns",
            "range": "± 39517.21214224554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354962.7297297297,
            "unit": "ns",
            "range": "± 111830.99627777838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4119967.066666667,
            "unit": "ns",
            "range": "± 59452.53949696426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153387.8125,
            "unit": "ns",
            "range": "± 76531.47732727909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9907902.11627907,
            "unit": "ns",
            "range": "± 263446.155201744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263536.73333333334,
            "unit": "ns",
            "range": "± 7874.008140858051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255293.3777777778,
            "unit": "ns",
            "range": "± 9595.204802136821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220411.11111111112,
            "unit": "ns",
            "range": "± 4716.540218633456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4125015,
            "unit": "ns",
            "range": "± 32847.507410409744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3784554.3846153845,
            "unit": "ns",
            "range": "± 25014.23254382213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17845.054945054944,
            "unit": "ns",
            "range": "± 1137.9575989233945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83590.27956989247,
            "unit": "ns",
            "range": "± 4674.513481695859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69868,
            "unit": "ns",
            "range": "± 1869.875218653195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79257.70103092784,
            "unit": "ns",
            "range": "± 9069.98728082183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4867.34693877551,
            "unit": "ns",
            "range": "± 608.4923925528205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17149.484210526316,
            "unit": "ns",
            "range": "± 1424.2481246232066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1272982.879120879,
            "unit": "ns",
            "range": "± 78903.14953351006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2467559.7352941176,
            "unit": "ns",
            "range": "± 79127.85026866286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1942704.9468085107,
            "unit": "ns",
            "range": "± 114429.68393389975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8186675.224489796,
            "unit": "ns",
            "range": "± 326325.86047418823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "796599859d4faaf424806b74bab01ccc8d6ef297",
          "message": "Webcrypto Shim 2.0 Electric Boogaloo",
          "timestamp": "2023-10-30T15:50:41+09:00",
          "tree_id": "01451c5b3f2173daf2f29c8777eb7db91ccb191b",
          "url": "https://github.com/planetarium/libplanet/commit/796599859d4faaf424806b74bab01ccc8d6ef297"
        },
        "date": 1698649829586,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74764.86734693877,
            "unit": "ns",
            "range": "± 18916.52642785202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6034123.66015625,
            "unit": "ns",
            "range": "± 70924.5148423077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981260.593828125,
            "unit": "ns",
            "range": "± 51548.14482154046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1416730.7981770833,
            "unit": "ns",
            "range": "± 24620.72706044867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168526.036979167,
            "unit": "ns",
            "range": "± 58830.31357981499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024458.062397204,
            "unit": "ns",
            "range": "± 22292.878891766246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938088.2259765625,
            "unit": "ns",
            "range": "± 20869.262330112437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9796208.602040816,
            "unit": "ns",
            "range": "± 691082.611802368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26853969.11764706,
            "unit": "ns",
            "range": "± 1280795.3504147392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71384529.9,
            "unit": "ns",
            "range": "± 2871205.424642532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139677235.3181818,
            "unit": "ns",
            "range": "± 3373414.4405871257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281645244.64285713,
            "unit": "ns",
            "range": "± 4275869.879628393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3960040.56122449,
            "unit": "ns",
            "range": "± 434903.97248152114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4273895.323232323,
            "unit": "ns",
            "range": "± 457263.73801506136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6171631.333333333,
            "unit": "ns",
            "range": "± 405132.6127976438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5797509.708333333,
            "unit": "ns",
            "range": "± 498118.199674396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14271797.711538462,
            "unit": "ns",
            "range": "± 542621.1802793351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352621.3617021277,
            "unit": "ns",
            "range": "± 44187.86956101056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338159.0729166667,
            "unit": "ns",
            "range": "± 54531.309961244864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287389.18947368424,
            "unit": "ns",
            "range": "± 43821.87536537187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4910877.909090909,
            "unit": "ns",
            "range": "± 433951.6212783918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4653315.636363637,
            "unit": "ns",
            "range": "± 475826.7537140917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32303.878787878788,
            "unit": "ns",
            "range": "± 11089.592347518337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121267.63265306123,
            "unit": "ns",
            "range": "± 29723.497526086197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 137145.0202020202,
            "unit": "ns",
            "range": "± 26154.438767140036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148800.41666666666,
            "unit": "ns",
            "range": "± 28537.4677524005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8221.416666666666,
            "unit": "ns",
            "range": "± 1686.4651576334586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30376.676767676767,
            "unit": "ns",
            "range": "± 9686.760560670471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1694584.9270833333,
            "unit": "ns",
            "range": "± 196036.89333164037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3413025.696969697,
            "unit": "ns",
            "range": "± 362493.06484168133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728751.3263157895,
            "unit": "ns",
            "range": "± 224320.6066709006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12524854.011235954,
            "unit": "ns",
            "range": "± 1119511.335730161"
          }
        ]
      }
    ]
  }
}