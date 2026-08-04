window.BENCHMARK_DATA = {
  "lastUpdate": 1785840887616,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1740886bc7424f7cb23088e6a65feb7968df6ba",
          "message": "Merge pull request #4037 from Atralupus/change-changed-files-action\n\nUse step-security/changed-files",
          "timestamp": "2025-03-16T13:44:44+09:00",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/a1740886bc7424f7cb23088e6a65feb7968df6ba"
        },
        "date": 1785840628007,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558337,
            "unit": "ns",
            "range": "± 601662.9778540492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2682065,
            "unit": "ns",
            "range": "± 1465311.3920362843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599490,
            "unit": "ns",
            "range": "± 853883.3910760623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7249095.95959596,
            "unit": "ns",
            "range": "± 4261313.927099203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 20726.404494382023,
            "unit": "ns",
            "range": "± 1163.363313054606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8055742.105263158,
            "unit": "ns",
            "range": "± 178336.2034528836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18344416.666666668,
            "unit": "ns",
            "range": "± 380130.23967799125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39628824,
            "unit": "ns",
            "range": "± 270835.39785879786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77975664.28571428,
            "unit": "ns",
            "range": "± 87628.66239152274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158342160,
            "unit": "ns",
            "range": "± 1219765.9633833745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3621541.640625,
            "unit": "ns",
            "range": "± 40416.442112675184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 748839.21875,
            "unit": "ns",
            "range": "± 9031.405371890318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 569659.9609375,
            "unit": "ns",
            "range": "± 5638.3463718727535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1383927.1744791667,
            "unit": "ns",
            "range": "± 7096.567753064061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 312611.01422991074,
            "unit": "ns",
            "range": "± 1926.710631902598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 272928.91845703125,
            "unit": "ns",
            "range": "± 638.052292844982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1903657.2916666667,
            "unit": "ns",
            "range": "± 430573.1386602579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1725127.0833333333,
            "unit": "ns",
            "range": "± 214106.07429086548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 1845900,
            "unit": "ns",
            "range": "± 64527.991617031286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 1987667,
            "unit": "ns",
            "range": "± 305277.86715175945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2132564,
            "unit": "ns",
            "range": "± 85601.71360100551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110949,
            "unit": "ns",
            "range": "± 42006.631258611655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174734,
            "unit": "ns",
            "range": "± 73526.62023259523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 119828.125,
            "unit": "ns",
            "range": "± 10405.542077232336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1901403.0303030303,
            "unit": "ns",
            "range": "± 43700.425375850784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1861270.3703703703,
            "unit": "ns",
            "range": "± 51646.19886835678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16767.676767676767,
            "unit": "ns",
            "range": "± 6849.442525845656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72511.34020618557,
            "unit": "ns",
            "range": "± 23473.95221431912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47731.31313131313,
            "unit": "ns",
            "range": "± 11196.269845898354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91531.63265306123,
            "unit": "ns",
            "range": "± 28216.594506679692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5295.360824742268,
            "unit": "ns",
            "range": "± 1396.0525165143247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20947,
            "unit": "ns",
            "range": "± 9056.795595830043"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-advanced-security[bot]@users.noreply.github.com",
            "name": "github-advanced-security[bot]",
            "username": "github-advanced-security[bot]"
          },
          "committer": {
            "email": "github-advanced-security[bot]@users.noreply.github.com",
            "name": "github-advanced-security[bot]",
            "username": "github-advanced-security[bot]"
          },
          "distinct": true,
          "id": "2c5dbdc4ff1b9cd043cc04be2315978a22d444af",
          "message": "Add CodeQL Analysis",
          "timestamp": "2026-08-04T19:39:40+09:00",
          "tree_id": "4174475e05469ad7dcf2e9cf3f3aaf7e72aa8081",
          "url": "https://github.com/planetarium/libplanet/commit/2c5dbdc4ff1b9cd043cc04be2315978a22d444af"
        },
        "date": 1785840780709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3256100,
            "unit": "ns",
            "range": "± 40346.850352082416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022485,
            "unit": "ns",
            "range": "± 2033604.5547564705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4786879.310344827,
            "unit": "ns",
            "range": "± 139605.14311880374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5932770.689655173,
            "unit": "ns",
            "range": "± 235783.8238344017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 24197.777777777777,
            "unit": "ns",
            "range": "± 1637.961035726065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11343607.142857144,
            "unit": "ns",
            "range": "± 99862.74784219293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21833046.464646466,
            "unit": "ns",
            "range": "± 1271912.9777311997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56668194.44444445,
            "unit": "ns",
            "range": "± 1207095.386587266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102021613.33333333,
            "unit": "ns",
            "range": "± 706476.4245047051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208721838.46153846,
            "unit": "ns",
            "range": "± 1566212.2272851262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4099452.7604166665,
            "unit": "ns",
            "range": "± 56154.287541563506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 927539.375,
            "unit": "ns",
            "range": "± 9504.89020284394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731049.8567708334,
            "unit": "ns",
            "range": "± 6777.706369622914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1712048.6328125,
            "unit": "ns",
            "range": "± 10733.763317226298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 453178.6051432292,
            "unit": "ns",
            "range": "± 1680.3844911816257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 400486.328125,
            "unit": "ns",
            "range": "± 1547.9132745516522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2789985.714285714,
            "unit": "ns",
            "range": "± 42421.90756859292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3038582.7586206896,
            "unit": "ns",
            "range": "± 87495.20014984299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5449442.857142857,
            "unit": "ns",
            "range": "± 61754.53535864906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2426663,
            "unit": "ns",
            "range": "± 369481.31748534605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2658583.3333333335,
            "unit": "ns",
            "range": "± 115436.46993714463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111831.3953488372,
            "unit": "ns",
            "range": "± 18692.06979775684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165769.51219512196,
            "unit": "ns",
            "range": "± 22847.885003689615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136873.33333333334,
            "unit": "ns",
            "range": "± 11538.845481944016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2468916,
            "unit": "ns",
            "range": "± 64804.106608557864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2265050,
            "unit": "ns",
            "range": "± 78837.63906493734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17466.279069767443,
            "unit": "ns",
            "range": "± 3117.714489630326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80958.33333333333,
            "unit": "ns",
            "range": "± 26343.886404196186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47571.57894736842,
            "unit": "ns",
            "range": "± 6468.88893676092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77138.14432989691,
            "unit": "ns",
            "range": "± 24284.140243252426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4717.525773195876,
            "unit": "ns",
            "range": "± 1273.12037180294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17643.25842696629,
            "unit": "ns",
            "range": "± 4607.375454657875"
          }
        ]
      }
    ]
  }
}