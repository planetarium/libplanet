window.BENCHMARK_DATA = {
  "lastUpdate": 1785840738198,
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
      }
    ]
  }
}