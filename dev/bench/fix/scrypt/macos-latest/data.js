window.BENCHMARK_DATA = {
  "lastUpdate": 1690779077967,
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
          "id": "8b36a4b4c6b388a0ed70890fe17a32959a6524fa",
          "message": "Use @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T12:29:40+09:00",
          "tree_id": "c4ed2918319de0bffb1c1319964c0b7dad95ce9a",
          "url": "https://github.com/planetarium/libplanet/commit/8b36a4b4c6b388a0ed70890fe17a32959a6524fa"
        },
        "date": 1690775086690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7549495.65,
            "unit": "ns",
            "range": "± 163493.35001099715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18912055.533333335,
            "unit": "ns",
            "range": "± 306650.7709689283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46933243.11111111,
            "unit": "ns",
            "range": "± 970651.8683105904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92922573,
            "unit": "ns",
            "range": "± 1104014.5990777735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188050273.85714287,
            "unit": "ns",
            "range": "± 2017730.8263611705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54505.75,
            "unit": "ns",
            "range": "± 5421.95736011844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301092.8214285714,
            "unit": "ns",
            "range": "± 15994.344983451363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291597.4285714286,
            "unit": "ns",
            "range": "± 13530.108885420907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280087.06666666665,
            "unit": "ns",
            "range": "± 10577.260713436159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4038487.785714286,
            "unit": "ns",
            "range": "± 67640.63783239796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3666860.0625,
            "unit": "ns",
            "range": "± 68381.657831584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17640.307228915663,
            "unit": "ns",
            "range": "± 2041.4330359908722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86487.66315789474,
            "unit": "ns",
            "range": "± 7089.557552455983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78121.82417582418,
            "unit": "ns",
            "range": "± 5253.727281323247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98863.5052631579,
            "unit": "ns",
            "range": "± 14424.265106007177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4954.068181818182,
            "unit": "ns",
            "range": "± 701.5377001438292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17478.366666666665,
            "unit": "ns",
            "range": "± 2396.9279376323034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534396.9292929294,
            "unit": "ns",
            "range": "± 161849.84163536553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800277.090909091,
            "unit": "ns",
            "range": "± 147443.8423980299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1928426.4166666667,
            "unit": "ns",
            "range": "± 170061.4256028603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5889463.898876404,
            "unit": "ns",
            "range": "± 359417.6852872904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143192.64,
            "unit": "ns",
            "range": "± 124366.58171363022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306119.5757575757,
            "unit": "ns",
            "range": "± 91243.2156659573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4168123.44,
            "unit": "ns",
            "range": "± 166824.31986428116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3695384.0784313725,
            "unit": "ns",
            "range": "± 149288.81605865096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6971780.25,
            "unit": "ns",
            "range": "± 271144.2268407814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014735.619791667,
            "unit": "ns",
            "range": "± 40609.910181483436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882591.0736607143,
            "unit": "ns",
            "range": "± 9622.837917674098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228629.734765625,
            "unit": "ns",
            "range": "± 6435.357614305484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2401675.27265625,
            "unit": "ns",
            "range": "± 12039.47064655704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846289.7029947917,
            "unit": "ns",
            "range": "± 4510.140123792864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771765.9503255208,
            "unit": "ns",
            "range": "± 7501.603951050974"
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
          "id": "39759bf5cc67fefc7d2450be0131a9f86b89606c",
          "message": "Fix Wrong Test Object",
          "timestamp": "2023-07-31T13:18:27+09:00",
          "tree_id": "7c6138a7d289091af8a013c4b8572d03bac8501a",
          "url": "https://github.com/planetarium/libplanet/commit/39759bf5cc67fefc7d2450be0131a9f86b89606c"
        },
        "date": 1690778033972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8360239.785714285,
            "unit": "ns",
            "range": "± 140140.58807232915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19983009.17647059,
            "unit": "ns",
            "range": "± 626168.3366274247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51494342.225,
            "unit": "ns",
            "range": "± 1821836.6846972567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100463049.33333333,
            "unit": "ns",
            "range": "± 1872592.8656485777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204045479.33333334,
            "unit": "ns",
            "range": "± 1509589.7744523021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57484.18279569892,
            "unit": "ns",
            "range": "± 6639.832464076571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319464.4375,
            "unit": "ns",
            "range": "± 21995.013811896693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291425.3777777778,
            "unit": "ns",
            "range": "± 16468.097893054648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283327.44444444444,
            "unit": "ns",
            "range": "± 15740.981045416447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4109888.466666667,
            "unit": "ns",
            "range": "± 75915.84852873671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3623167.6470588236,
            "unit": "ns",
            "range": "± 72905.25767386497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17031.080459770114,
            "unit": "ns",
            "range": "± 1847.458060186651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81873.58762886598,
            "unit": "ns",
            "range": "± 8311.630724914658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82544.33333333333,
            "unit": "ns",
            "range": "± 10266.052731586728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97400.41489361702,
            "unit": "ns",
            "range": "± 12968.698418710905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5190.25,
            "unit": "ns",
            "range": "± 798.6801836243877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16661.293478260868,
            "unit": "ns",
            "range": "± 2151.231472201438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511663.305263158,
            "unit": "ns",
            "range": "± 157343.45238431223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758513.0793650793,
            "unit": "ns",
            "range": "± 126020.18150322787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037701.6326530613,
            "unit": "ns",
            "range": "± 221031.48121274664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5648187.047619048,
            "unit": "ns",
            "range": "± 258944.23409369183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332651.695652174,
            "unit": "ns",
            "range": "± 160147.70608899702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494941.4814814813,
            "unit": "ns",
            "range": "± 94525.31788540138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499868.328358209,
            "unit": "ns",
            "range": "± 211492.86252448248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943976.6875,
            "unit": "ns",
            "range": "± 204568.2897029491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7264662,
            "unit": "ns",
            "range": "± 306815.75306121184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6415436.068080357,
            "unit": "ns",
            "range": "± 32166.813711531693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932436.962611607,
            "unit": "ns",
            "range": "± 10814.601357163034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317457.4350260417,
            "unit": "ns",
            "range": "± 18866.845201553413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2530778.4384014425,
            "unit": "ns",
            "range": "± 10753.32778345768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893341.2410807292,
            "unit": "ns",
            "range": "± 4893.3323737336805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799935.1104166667,
            "unit": "ns",
            "range": "± 8558.284475552768"
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
          "id": "ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5",
          "message": "Merge branch 'main' into fix/scrypt",
          "timestamp": "2023-07-31T13:17:28+09:00",
          "tree_id": "0874d36bad6c9de9057cad90ff4491eea015c87f",
          "url": "https://github.com/planetarium/libplanet/commit/ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5"
        },
        "date": 1690778188577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8537258.233333332,
            "unit": "ns",
            "range": "± 74590.34820601951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21444359.714285713,
            "unit": "ns",
            "range": "± 160791.78585766346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53870310.333333336,
            "unit": "ns",
            "range": "± 993641.2561128506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110201567.14705883,
            "unit": "ns",
            "range": "± 2111166.1272956748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225189155.92857143,
            "unit": "ns",
            "range": "± 2990700.5591595853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77298.43010752689,
            "unit": "ns",
            "range": "± 5040.190167215159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391323.0306122449,
            "unit": "ns",
            "range": "± 51835.105162826876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353572.67391304346,
            "unit": "ns",
            "range": "± 34106.261055064875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355904.0882352941,
            "unit": "ns",
            "range": "± 35746.20841341882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4459005.857142857,
            "unit": "ns",
            "range": "± 261728.347160537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047214.948979592,
            "unit": "ns",
            "range": "± 247187.15082735763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26104.290322580644,
            "unit": "ns",
            "range": "± 3766.8075907412895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128109.76842105263,
            "unit": "ns",
            "range": "± 17056.033362815055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123486.32558139534,
            "unit": "ns",
            "range": "± 9550.740408861271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139539.01041666666,
            "unit": "ns",
            "range": "± 22177.64375292085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8616.150537634408,
            "unit": "ns",
            "range": "± 982.7290080073221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25246.197674418603,
            "unit": "ns",
            "range": "± 2224.8997800020907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688926.6333333333,
            "unit": "ns",
            "range": "± 156368.23523712557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3061665.157303371,
            "unit": "ns",
            "range": "± 180499.60074174547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235353.897959184,
            "unit": "ns",
            "range": "± 211156.91213869426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6123669.465116279,
            "unit": "ns",
            "range": "± 353979.6787056202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505742.64,
            "unit": "ns",
            "range": "± 237541.16981470774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3793190.8192771086,
            "unit": "ns",
            "range": "± 404976.4346589524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4686341.866666666,
            "unit": "ns",
            "range": "± 292419.85708045535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4089808.1486486485,
            "unit": "ns",
            "range": "± 135312.1355114857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7896744.03125,
            "unit": "ns",
            "range": "± 726156.4709616243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7251463.126116072,
            "unit": "ns",
            "range": "± 205466.08442084497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251224.8724264707,
            "unit": "ns",
            "range": "± 120744.7197101301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391448.1983072916,
            "unit": "ns",
            "range": "± 15069.828361468704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3314901.351432292,
            "unit": "ns",
            "range": "± 58896.60267769056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856075.9345052083,
            "unit": "ns",
            "range": "± 11209.79860897625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782775.696484375,
            "unit": "ns",
            "range": "± 5282.875560026689"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3150b9d9e76a8fa7d1e755f58624771bea6aac10",
          "message": "Update @planetarium/account-web3-secret-storage/src/Web3Account.ts",
          "timestamp": "2023-07-31T13:29:40+09:00",
          "tree_id": "696aa64766922f1ddad28e9cdd0ed350e9125bbe",
          "url": "https://github.com/planetarium/libplanet/commit/3150b9d9e76a8fa7d1e755f58624771bea6aac10"
        },
        "date": 1690778938021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9033254.1,
            "unit": "ns",
            "range": "± 535481.7801892486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23210174.136363637,
            "unit": "ns",
            "range": "± 1177402.121600984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55987405.05405405,
            "unit": "ns",
            "range": "± 2782596.4420567723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111640084.6111111,
            "unit": "ns",
            "range": "± 3718370.2908657882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226281735.1885246,
            "unit": "ns",
            "range": "± 10129230.970492693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70870.48351648351,
            "unit": "ns",
            "range": "± 7877.915363516243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360412.5168539326,
            "unit": "ns",
            "range": "± 38234.91244064073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368991.7173913043,
            "unit": "ns",
            "range": "± 53423.06597605469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322827.1779661017,
            "unit": "ns",
            "range": "± 14283.064112052038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4555518.348484849,
            "unit": "ns",
            "range": "± 347278.4128246785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3994254.6770833335,
            "unit": "ns",
            "range": "± 241760.06937710158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26557.697674418603,
            "unit": "ns",
            "range": "± 4404.719928519907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127875.7191011236,
            "unit": "ns",
            "range": "± 13110.021764239584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132601.58333333334,
            "unit": "ns",
            "range": "± 20229.82266783201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127620.39583333333,
            "unit": "ns",
            "range": "± 18918.719140731417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8479.894736842105,
            "unit": "ns",
            "range": "± 1272.1028701351345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24293.217391304348,
            "unit": "ns",
            "range": "± 2893.1637093197796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619768.4222222222,
            "unit": "ns",
            "range": "± 262349.6473914337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954422.131868132,
            "unit": "ns",
            "range": "± 250844.1154950048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091465.7474747475,
            "unit": "ns",
            "range": "± 205503.78407148828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5743945,
            "unit": "ns",
            "range": "± 306477.6632620012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687574.194736842,
            "unit": "ns",
            "range": "± 398262.35729115544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4039385.654639175,
            "unit": "ns",
            "range": "± 457893.8400998901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5170957.78125,
            "unit": "ns",
            "range": "± 634481.7397093584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269214.134020618,
            "unit": "ns",
            "range": "± 452635.55786654557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8001612.693877551,
            "unit": "ns",
            "range": "± 825675.7127491068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7530172.463541667,
            "unit": "ns",
            "range": "± 225285.76066089835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2186771.785495924,
            "unit": "ns",
            "range": "± 55022.81507471372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427112.6557291667,
            "unit": "ns",
            "range": "± 23469.204574538835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3332056.5517064147,
            "unit": "ns",
            "range": "± 74051.27103260056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876419.6023995535,
            "unit": "ns",
            "range": "± 12326.57291377308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789764.588984375,
            "unit": "ns",
            "range": "± 20986.632777761668"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fed8bcc083a27d054ad48147c38c3c20e1020bd5",
          "message": "Update Web3Account.ts",
          "timestamp": "2023-07-31T13:31:01+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/planetarium/libplanet/commit/fed8bcc083a27d054ad48147c38c3c20e1020bd5"
        },
        "date": 1690779029640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8719636.722222222,
            "unit": "ns",
            "range": "± 283854.7778379049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21561467.588235293,
            "unit": "ns",
            "range": "± 333995.4539090051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53050699.6,
            "unit": "ns",
            "range": "± 1584829.5986719998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112755590.45652173,
            "unit": "ns",
            "range": "± 2779571.666932735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224212155.4,
            "unit": "ns",
            "range": "± 6287842.184210111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76674.3908045977,
            "unit": "ns",
            "range": "± 8030.612219061366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356186.06701030926,
            "unit": "ns",
            "range": "± 51729.31379947673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334039.13440860214,
            "unit": "ns",
            "range": "± 35132.584878659225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318720.6789473684,
            "unit": "ns",
            "range": "± 23543.782484110885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4529951.354166667,
            "unit": "ns",
            "range": "± 382137.6164429712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4030040.2448979593,
            "unit": "ns",
            "range": "± 294412.0930808615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17129.629213483146,
            "unit": "ns",
            "range": "± 2016.9023581518993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94308.07368421053,
            "unit": "ns",
            "range": "± 14320.835537583444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102594.13265306123,
            "unit": "ns",
            "range": "± 18680.22800771891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113940.03846153847,
            "unit": "ns",
            "range": "± 14446.796131020954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6243.489583333333,
            "unit": "ns",
            "range": "± 1079.7907935267315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18310.76595744681,
            "unit": "ns",
            "range": "± 2349.9650016864557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675420.6875,
            "unit": "ns",
            "range": "± 169984.7537533146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3277682.2741935486,
            "unit": "ns",
            "range": "± 354540.32549400366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408173.6979166665,
            "unit": "ns",
            "range": "± 332574.86620478233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6383698.394736842,
            "unit": "ns",
            "range": "± 544599.1215689675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4251831.460674157,
            "unit": "ns",
            "range": "± 897782.6718287552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765322.448979592,
            "unit": "ns",
            "range": "± 431327.8174941544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4596784.27118644,
            "unit": "ns",
            "range": "± 201595.12319915832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4087590.489361702,
            "unit": "ns",
            "range": "± 256720.7386613998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7483182.48989899,
            "unit": "ns",
            "range": "± 468066.6488332944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6865277.542824074,
            "unit": "ns",
            "range": "± 189353.07863574353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112272.3120117188,
            "unit": "ns",
            "range": "± 40093.14570395858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387991.334493886,
            "unit": "ns",
            "range": "± 34814.204223159875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661283.8036458334,
            "unit": "ns",
            "range": "± 113911.42967386651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895289.3163452148,
            "unit": "ns",
            "range": "± 17134.99457122402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729467.1386067708,
            "unit": "ns",
            "range": "± 3469.4979582333326"
          }
        ]
      }
    ]
  }
}