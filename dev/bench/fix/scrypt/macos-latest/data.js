window.BENCHMARK_DATA = {
  "lastUpdate": 1690778082301,
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
      }
    ]
  }
}