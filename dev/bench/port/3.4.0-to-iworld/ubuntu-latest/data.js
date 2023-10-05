window.BENCHMARK_DATA = {
  "lastUpdate": 1696516729147,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "2d615446e6d6534540c757d28a329c858cfdfc67",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-05T23:23:43+09:00",
          "tree_id": "559c6d26dcc589082e62d5606f201d093138ef2e",
          "url": "https://github.com/planetarium/libplanet/commit/2d615446e6d6534540c757d28a329c858cfdfc67"
        },
        "date": 1696516700714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48936.73863636364,
            "unit": "ns",
            "range": "± 2539.4742350876454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986143.357142857,
            "unit": "ns",
            "range": "± 36004.21363077285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22167433.466666665,
            "unit": "ns",
            "range": "± 282992.9566775891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55224564.28571428,
            "unit": "ns",
            "range": "± 714483.3158795381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110280287.33333333,
            "unit": "ns",
            "range": "± 1554315.0839724352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219159786.86666667,
            "unit": "ns",
            "range": "± 3580037.432797633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274566.30555555556,
            "unit": "ns",
            "range": "± 8851.45451750145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270456.26923076925,
            "unit": "ns",
            "range": "± 11138.120440437937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231160.82352941178,
            "unit": "ns",
            "range": "± 4441.714030575557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4370821.733333333,
            "unit": "ns",
            "range": "± 79678.28489213595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4238600,
            "unit": "ns",
            "range": "± 83393.30038513285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19512.40243902439,
            "unit": "ns",
            "range": "± 1051.1381469362605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88369.59793814433,
            "unit": "ns",
            "range": "± 6198.227524965964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73535.07407407407,
            "unit": "ns",
            "range": "± 3089.130132503579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85286.9387755102,
            "unit": "ns",
            "range": "± 14137.345219378461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5801.226804123711,
            "unit": "ns",
            "range": "± 778.7066802444862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22830.74193548387,
            "unit": "ns",
            "range": "± 1875.7832213633822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667307.7692307692,
            "unit": "ns",
            "range": "± 19764.69901598068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2782778.9310344825,
            "unit": "ns",
            "range": "± 121953.54662082881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271491.5901639345,
            "unit": "ns",
            "range": "± 100834.30754681614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8738888.319444444,
            "unit": "ns",
            "range": "± 431737.5644170703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5124026.264583333,
            "unit": "ns",
            "range": "± 46347.48764083047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578415.15078125,
            "unit": "ns",
            "range": "± 2257.7984648279075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080833.9920479911,
            "unit": "ns",
            "range": "± 1446.1926629559364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603432.4787946427,
            "unit": "ns",
            "range": "± 2219.3786399261085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828593.5536411831,
            "unit": "ns",
            "range": "± 875.6193471174485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757588.4054987981,
            "unit": "ns",
            "range": "± 407.06871030264756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3480720.0576923075,
            "unit": "ns",
            "range": "± 138715.7630523391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605422.466666667,
            "unit": "ns",
            "range": "± 101911.42461309853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4398910.133333334,
            "unit": "ns",
            "range": "± 73991.2790139744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4400421.05882353,
            "unit": "ns",
            "range": "± 179632.8127022913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10041205.909090908,
            "unit": "ns",
            "range": "± 425846.71463086223"
          }
        ]
      }
    ]
  }
}