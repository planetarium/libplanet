window.BENCHMARK_DATA = {
  "lastUpdate": 1716871616798,
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
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786588888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009524,
            "unit": "ns",
            "range": "± 82379.67793924506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809460.3448275863,
            "unit": "ns",
            "range": "± 78326.36834953076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596201.0416666667,
            "unit": "ns",
            "range": "± 114827.82029932024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993274.193548387,
            "unit": "ns",
            "range": "± 164986.445842766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36374.73684210526,
            "unit": "ns",
            "range": "± 5016.419177678577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5211064.285714285,
            "unit": "ns",
            "range": "± 40945.24687626443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13347260,
            "unit": "ns",
            "range": "± 127086.99944751008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33756806.666666664,
            "unit": "ns",
            "range": "± 392523.7162382979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66934321.428571425,
            "unit": "ns",
            "range": "± 822600.6753242766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136436720,
            "unit": "ns",
            "range": "± 1907412.0141475166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332059.8772321427,
            "unit": "ns",
            "range": "± 26710.077198203002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081041.7447916667,
            "unit": "ns",
            "range": "± 3651.6462062383453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753727.98828125,
            "unit": "ns",
            "range": "± 1843.3853205513599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009205.3013392857,
            "unit": "ns",
            "range": "± 4659.114726491391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618777.783203125,
            "unit": "ns",
            "range": "± 1432.1065776040446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553342.9966517857,
            "unit": "ns",
            "range": "± 446.0879291807978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2248564.0625,
            "unit": "ns",
            "range": "± 97112.67938595785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317025.641025641,
            "unit": "ns",
            "range": "± 80210.38362347882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2926712.5,
            "unit": "ns",
            "range": "± 52331.327456250656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2953769.4444444445,
            "unit": "ns",
            "range": "± 97445.2251104455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884225.806451613,
            "unit": "ns",
            "range": "± 154054.2328050784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183062.29508196723,
            "unit": "ns",
            "range": "± 7340.348854889352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176888.7323943662,
            "unit": "ns",
            "range": "± 7510.479332159349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151344.44444444444,
            "unit": "ns",
            "range": "± 5025.686545391113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845646.6666666665,
            "unit": "ns",
            "range": "± 44555.773502218006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2621110,
            "unit": "ns",
            "range": "± 30105.523935460275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12418.556701030928,
            "unit": "ns",
            "range": "± 1770.6125291893584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57992.47311827957,
            "unit": "ns",
            "range": "± 4582.415267822146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49119.354838709674,
            "unit": "ns",
            "range": "± 2783.1893678841734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54959.52380952381,
            "unit": "ns",
            "range": "± 8067.189520425463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2721.4285714285716,
            "unit": "ns",
            "range": "± 568.095026173339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10846.666666666666,
            "unit": "ns",
            "range": "± 1201.889897554138"
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
          "id": "96bc91e80ec0fc970e057b6927c7bd47681c3836",
          "message": "Merge pull request #3807 from greymistcube/prepare/4.6.1\n\n🔧 Prepare 4.6.1",
          "timestamp": "2024-05-28T13:30:49+09:00",
          "tree_id": "55f0afe5fac922701956f1aae5f98ce7429ef7a4",
          "url": "https://github.com/planetarium/libplanet/commit/96bc91e80ec0fc970e057b6927c7bd47681c3836"
        },
        "date": 1716871344221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953241.4141414141,
            "unit": "ns",
            "range": "± 95630.11758759126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754276.923076923,
            "unit": "ns",
            "range": "± 89661.56558780548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484284,
            "unit": "ns",
            "range": "± 106539.78791081203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7688860,
            "unit": "ns",
            "range": "± 499715.74364776444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35202.63157894737,
            "unit": "ns",
            "range": "± 5446.29177192607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5098176.923076923,
            "unit": "ns",
            "range": "± 28674.121719945608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13301192.857142856,
            "unit": "ns",
            "range": "± 170939.63605853435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33289496.666666668,
            "unit": "ns",
            "range": "± 557291.7841370592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64423900,
            "unit": "ns",
            "range": "± 973384.0257259523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132738407.6923077,
            "unit": "ns",
            "range": "± 763034.4765709458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3367906.8489583335,
            "unit": "ns",
            "range": "± 10116.470423329003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087760.4166666667,
            "unit": "ns",
            "range": "± 4270.020437326761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761940.4752604166,
            "unit": "ns",
            "range": "± 2420.9202272634116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931747.0572916667,
            "unit": "ns",
            "range": "± 6337.186963291791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626138.1068638393,
            "unit": "ns",
            "range": "± 996.0273365121814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576322.55859375,
            "unit": "ns",
            "range": "± 1402.5667863994584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2157815.476190476,
            "unit": "ns",
            "range": "± 115652.07741590241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303158.1818181816,
            "unit": "ns",
            "range": "± 97935.62453054839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815909.6774193547,
            "unit": "ns",
            "range": "± 84066.74473234035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2895532,
            "unit": "ns",
            "range": "± 294160.31562549167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8698233.333333334,
            "unit": "ns",
            "range": "± 676357.0736018335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168714.4927536232,
            "unit": "ns",
            "range": "± 8150.1763849970985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161991.66666666666,
            "unit": "ns",
            "range": "± 6932.710274590482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146336.58536585365,
            "unit": "ns",
            "range": "± 5197.920550449044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824558.620689655,
            "unit": "ns",
            "range": "± 81415.9624452521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2587913.4146341463,
            "unit": "ns",
            "range": "± 136403.6102145187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8713.636363636364,
            "unit": "ns",
            "range": "± 645.2624554114676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49141.573033707864,
            "unit": "ns",
            "range": "± 3060.815733099892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42721.739130434784,
            "unit": "ns",
            "range": "± 910.5225880774235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45553.60824742268,
            "unit": "ns",
            "range": "± 8218.044955255351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1968.75,
            "unit": "ns",
            "range": "± 214.87450437773893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9120.833333333334,
            "unit": "ns",
            "range": "± 1448.5503945717714"
          }
        ]
      }
    ]
  }
}