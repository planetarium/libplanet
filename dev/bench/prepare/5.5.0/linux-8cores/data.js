window.BENCHMARK_DATA = {
  "lastUpdate": 1732169576757,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3c035d5dca56c4b8435bd3fd60228ed8d59a6810",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-13T16:14:39+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/3c035d5dca56c4b8435bd3fd60228ed8d59a6810"
        },
        "date": 1731482618792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10649393,
            "unit": "ns",
            "range": "± 47573.21532769658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27324554.666666668,
            "unit": "ns",
            "range": "± 71515.72815189144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70844783.86666666,
            "unit": "ns",
            "range": "± 287339.9817192336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143496530.7142857,
            "unit": "ns",
            "range": "± 587270.5344638453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292392974.6,
            "unit": "ns",
            "range": "± 1354444.855251711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109776.23684210527,
            "unit": "ns",
            "range": "± 5455.66895713299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193284.4423076923,
            "unit": "ns",
            "range": "± 7955.721747649179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167311.42857142858,
            "unit": "ns",
            "range": "± 2063.8680531127325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909511.785714286,
            "unit": "ns",
            "range": "± 29788.926143731722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2710222.1428571427,
            "unit": "ns",
            "range": "± 33744.530355319795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13066.184210526315,
            "unit": "ns",
            "range": "± 648.7515746524513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60975.35211267605,
            "unit": "ns",
            "range": "± 2780.179465423007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49662.38461538462,
            "unit": "ns",
            "range": "± 614.4285337424712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59415.634020618556,
            "unit": "ns",
            "range": "± 6008.979559495498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2423.3736842105263,
            "unit": "ns",
            "range": "± 232.4246957483843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12324.21505376344,
            "unit": "ns",
            "range": "± 1005.9015624051797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3735520.1344866073,
            "unit": "ns",
            "range": "± 9409.776509478752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204178.1421274038,
            "unit": "ns",
            "range": "± 1507.324740717695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759439.3835286458,
            "unit": "ns",
            "range": "± 1504.9763183135701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960457.23671875,
            "unit": "ns",
            "range": "± 2245.122640515363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611525.3055943081,
            "unit": "ns",
            "range": "± 414.18619888158577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576277.5533621652,
            "unit": "ns",
            "range": "± 364.621851219054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2447465.269230769,
            "unit": "ns",
            "range": "± 26074.74248244153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2566853.230769231,
            "unit": "ns",
            "range": "± 70204.77672028176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3096109,
            "unit": "ns",
            "range": "± 40934.97296134631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2646132.8125,
            "unit": "ns",
            "range": "± 51046.909070277376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3164542,
            "unit": "ns",
            "range": "± 38001.5834892746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014646.5494505494,
            "unit": "ns",
            "range": "± 62857.32839680381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925782.5,
            "unit": "ns",
            "range": "± 61528.73646799912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1577703.6538461538,
            "unit": "ns",
            "range": "± 69049.00331201176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7779444.088235294,
            "unit": "ns",
            "range": "± 205452.29160932297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30909.85714285714,
            "unit": "ns",
            "range": "± 720.0872367785925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "0ae5af9eb145976d099875f790ea3ac5ac0f6f28",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-21T15:03:56+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/0ae5af9eb145976d099875f790ea3ac5ac0f6f28"
        },
        "date": 1732169550026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10823927.142857144,
            "unit": "ns",
            "range": "± 69976.22036515982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27736509.866666667,
            "unit": "ns",
            "range": "± 97591.49802391796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70622017.57142857,
            "unit": "ns",
            "range": "± 359448.3641487144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142603824.23333332,
            "unit": "ns",
            "range": "± 581950.7955535008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296572837.76666665,
            "unit": "ns",
            "range": "± 1789326.350365948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107881.66470588236,
            "unit": "ns",
            "range": "± 5615.947053336807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190271.40677966102,
            "unit": "ns",
            "range": "± 6874.312793538095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172622.9375,
            "unit": "ns",
            "range": "± 3370.710735512616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2918758.1333333333,
            "unit": "ns",
            "range": "± 26357.348584588774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799638.7333333334,
            "unit": "ns",
            "range": "± 37546.87131053031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12696.483516483517,
            "unit": "ns",
            "range": "± 924.588573518422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61026.066666666666,
            "unit": "ns",
            "range": "± 3387.39748897507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52955.59595959596,
            "unit": "ns",
            "range": "± 5310.428942126168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48878.43010752688,
            "unit": "ns",
            "range": "± 5323.0288766540025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3058.7244897959185,
            "unit": "ns",
            "range": "± 573.6160715482062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12354.684782608696,
            "unit": "ns",
            "range": "± 1039.8365671389388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757031.1155133927,
            "unit": "ns",
            "range": "± 8117.703758487823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211315.6868489583,
            "unit": "ns",
            "range": "± 1682.5108658232093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756363.1836688702,
            "unit": "ns",
            "range": "± 508.0884210397089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973161.0278645833,
            "unit": "ns",
            "range": "± 3647.958255860279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624405.9343098958,
            "unit": "ns",
            "range": "± 390.0042614486492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581253.2393973215,
            "unit": "ns",
            "range": "± 447.3922729009041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2401742.8333333335,
            "unit": "ns",
            "range": "± 38944.99505101791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563403.9285714286,
            "unit": "ns",
            "range": "± 27070.54815296871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3004527.5,
            "unit": "ns",
            "range": "± 27877.072547304753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2548553.269230769,
            "unit": "ns",
            "range": "± 35828.91188726837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3287416.375,
            "unit": "ns",
            "range": "± 59898.82417975053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985476.6829268293,
            "unit": "ns",
            "range": "± 51931.296623371956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928042.836734694,
            "unit": "ns",
            "range": "± 76557.20478704876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1568199.1202531646,
            "unit": "ns",
            "range": "± 80847.88133616274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7547308.8125,
            "unit": "ns",
            "range": "± 132351.22564133097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30526,
            "unit": "ns",
            "range": "± 754.3346255294975"
          }
        ]
      }
    ]
  }
}