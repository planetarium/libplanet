window.BENCHMARK_DATA = {
  "lastUpdate": 1689147414320,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f008d9dca7f4cc5df0bac2519b9e2f45108d698",
          "message": "Merge pull request #3294 from OnedgeLee/release/2.5.0\n\n🚀 Release 2.5.0",
          "timestamp": "2023-07-12T16:14:03+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/planetarium/libplanet/commit/6f008d9dca7f4cc5df0bac2519b9e2f45108d698"
        },
        "date": 1689147352004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8637589.92857143,
            "unit": "ns",
            "range": "± 412246.8026762951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21202994.033333335,
            "unit": "ns",
            "range": "± 939580.1611875482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51461270.44444445,
            "unit": "ns",
            "range": "± 2064232.8606376552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105221832.5862069,
            "unit": "ns",
            "range": "± 3036017.1980953403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224470892.94444445,
            "unit": "ns",
            "range": "± 4480114.007111039"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72773.28888888888,
            "unit": "ns",
            "range": "± 11666.587608019989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393389.9479166667,
            "unit": "ns",
            "range": "± 62319.80043113268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362037.94444444444,
            "unit": "ns",
            "range": "± 44369.3789913216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337589.3163265306,
            "unit": "ns",
            "range": "± 37545.727845596586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4550834.138297873,
            "unit": "ns",
            "range": "± 275580.0080569308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961157.376923077,
            "unit": "ns",
            "range": "± 182853.5075209206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23556.425531914894,
            "unit": "ns",
            "range": "± 4108.39431128215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118160.22988505747,
            "unit": "ns",
            "range": "± 14622.894331183445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119059.04347826086,
            "unit": "ns",
            "range": "± 4530.43104991872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133500.25,
            "unit": "ns",
            "range": "± 28295.128880134238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7799.370967741936,
            "unit": "ns",
            "range": "± 704.4942253876095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25085.8202247191,
            "unit": "ns",
            "range": "± 3457.8024371826546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1847890.3636363635,
            "unit": "ns",
            "range": "± 317245.4317671944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258378.7558139535,
            "unit": "ns",
            "range": "± 288829.07161744055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309072.5384615385,
            "unit": "ns",
            "range": "± 296838.6493653228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6692981.372093023,
            "unit": "ns",
            "range": "± 833784.6793747002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3652043.282608696,
            "unit": "ns",
            "range": "± 349389.3964223439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576114.74,
            "unit": "ns",
            "range": "± 139425.0331908799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600539.397058823,
            "unit": "ns",
            "range": "± 219428.44482421668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4212850.79032258,
            "unit": "ns",
            "range": "± 370659.82922801154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8204986.222222222,
            "unit": "ns",
            "range": "± 716989.2642903258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7405014.079166667,
            "unit": "ns",
            "range": "± 216462.74144750173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2082482.4921025815,
            "unit": "ns",
            "range": "± 50095.04236319573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480581.9978101326,
            "unit": "ns",
            "range": "± 44396.46361455999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106177.130095109,
            "unit": "ns",
            "range": "± 76998.3236043323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880646.8585759943,
            "unit": "ns",
            "range": "± 21070.44065925616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809189.8572591146,
            "unit": "ns",
            "range": "± 9728.749599289546"
          }
        ]
      }
    ]
  }
}