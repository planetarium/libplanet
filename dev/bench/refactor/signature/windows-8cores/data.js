window.BENCHMARK_DATA = {
  "lastUpdate": 1741252350406,
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
          "id": "bca1dbb3b7a668312e83c14e723eca926c034760",
          "message": "wip",
          "timestamp": "2025-03-06T17:58:03+09:00",
          "tree_id": "86937a2eddc8cf0a325db9685622660ba201d61d",
          "url": "https://github.com/planetarium/libplanet/commit/bca1dbb3b7a668312e83c14e723eca926c034760"
        },
        "date": 1741252030778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3118806.25,
            "unit": "ns",
            "range": "± 59630.22129479872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4867651,
            "unit": "ns",
            "range": "± 952216.7607713799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4427280,
            "unit": "ns",
            "range": "± 278693.1225661239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11069176.767676767,
            "unit": "ns",
            "range": "± 4276497.616489749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22645.78313253012,
            "unit": "ns",
            "range": "± 1235.4816583036356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3874353.846153846,
            "unit": "ns",
            "range": "± 13179.694949973575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9754114.285714285,
            "unit": "ns",
            "range": "± 102557.96002668522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21070741.666666668,
            "unit": "ns",
            "range": "± 904669.3337837314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41289486.36363637,
            "unit": "ns",
            "range": "± 399638.61210021394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82180106.66666667,
            "unit": "ns",
            "range": "± 203382.1085917788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4125927.9427083335,
            "unit": "ns",
            "range": "± 56434.26273723866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919907.4934895834,
            "unit": "ns",
            "range": "± 4744.866312499911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725833.0208333334,
            "unit": "ns",
            "range": "± 8792.625433180514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1718082.6450892857,
            "unit": "ns",
            "range": "± 5986.194403611978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 446594.8172433036,
            "unit": "ns",
            "range": "± 1033.8989254177675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 396045.2799479167,
            "unit": "ns",
            "range": "± 1113.4885635536652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060560.975609756,
            "unit": "ns",
            "range": "± 101568.81134986464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176271.4285714286,
            "unit": "ns",
            "range": "± 89621.47914316927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952960.465116279,
            "unit": "ns",
            "range": "± 145140.0065282368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168900,
            "unit": "ns",
            "range": "± 30257.584645365012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4433560,
            "unit": "ns",
            "range": "± 59300.43121982455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221506.3829787234,
            "unit": "ns",
            "range": "± 39868.95148047947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351098,
            "unit": "ns",
            "range": "± 98265.52462228514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163831.0344827586,
            "unit": "ns",
            "range": "± 4701.1475383506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1469056.0606060605,
            "unit": "ns",
            "range": "± 45617.909992909714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1254630.2325581396,
            "unit": "ns",
            "range": "± 33575.03703422218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20740.20618556701,
            "unit": "ns",
            "range": "± 5766.2390218447135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82081.44329896907,
            "unit": "ns",
            "range": "± 22262.22664953326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34153.75,
            "unit": "ns",
            "range": "± 3335.8977213929893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60653.68421052631,
            "unit": "ns",
            "range": "± 28337.33275683434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3654.040404040404,
            "unit": "ns",
            "range": "± 1535.094173267502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19713.541666666668,
            "unit": "ns",
            "range": "± 4237.715864190757"
          }
        ]
      }
    ]
  }
}