window.BENCHMARK_DATA = {
  "lastUpdate": 1689147281317,
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
        "date": 1689147253882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352092.975,
            "unit": "ns",
            "range": "± 11568.471765940347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342996.35294117645,
            "unit": "ns",
            "range": "± 5818.8073191717785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311308.64705882355,
            "unit": "ns",
            "range": "± 9900.563782178824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5473229.533333333,
            "unit": "ns",
            "range": "± 36009.598735945525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5001943.466666667,
            "unit": "ns",
            "range": "± 30513.564124047865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25486.978260869564,
            "unit": "ns",
            "range": "± 1800.8613383494514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114757.4,
            "unit": "ns",
            "range": "± 7722.849296977757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101763.56701030929,
            "unit": "ns",
            "range": "± 6736.91231807275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117562.09638554217,
            "unit": "ns",
            "range": "± 7008.6620093515885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7871.051546391753,
            "unit": "ns",
            "range": "± 1142.6860659131005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24816.78947368421,
            "unit": "ns",
            "range": "± 1982.5696783909643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816431.1290322582,
            "unit": "ns",
            "range": "± 99490.3259912879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3437990.7,
            "unit": "ns",
            "range": "± 78085.1863618729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349070.3333333335,
            "unit": "ns",
            "range": "± 111667.59487015248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6247036.9655172415,
            "unit": "ns",
            "range": "± 181539.06586412797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7354682.185416667,
            "unit": "ns",
            "range": "± 38021.400430582304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291817.474609375,
            "unit": "ns",
            "range": "± 2381.138155039816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1651654.45703125,
            "unit": "ns",
            "range": "± 2671.1268474380972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150642.2805989585,
            "unit": "ns",
            "range": "± 4151.2864077174945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008867.6208333333,
            "unit": "ns",
            "range": "± 606.833908943782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933861.6140485491,
            "unit": "ns",
            "range": "± 327.42154540599745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4397218.933333334,
            "unit": "ns",
            "range": "± 60138.94623698721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4649074.571428572,
            "unit": "ns",
            "range": "± 62616.20000473493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5548673.307692308,
            "unit": "ns",
            "range": "± 47474.410599087685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5157203.866666666,
            "unit": "ns",
            "range": "± 81469.17996910302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8157983.95,
            "unit": "ns",
            "range": "± 130960.83387891407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10931055.857142856,
            "unit": "ns",
            "range": "± 152692.70064507247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27206930.2,
            "unit": "ns",
            "range": "± 204674.3367000367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71080339.26666667,
            "unit": "ns",
            "range": "± 253428.02135220813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136673872.5,
            "unit": "ns",
            "range": "± 326681.6163380345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273605254.8666667,
            "unit": "ns",
            "range": "± 271183.15993224597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59052.93548387097,
            "unit": "ns",
            "range": "± 3935.1218831089423"
          }
        ]
      }
    ]
  }
}