window.BENCHMARK_DATA = {
  "lastUpdate": 1719883874750,
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
          "id": "aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9",
          "message": "Merge pull request #3825 from greymistcube/chore/fix-javascript-ci\n\n👷 Updated javascript ci version parsing",
          "timestamp": "2024-06-13T16:43:39+09:00",
          "tree_id": "6dbc8b89f1ed7f6ea5506c8543a0ecca4ea0cf98",
          "url": "https://github.com/planetarium/libplanet/commit/aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9"
        },
        "date": 1719883541819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3689129.449776786,
            "unit": "ns",
            "range": "± 7926.826024114251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1253533.0502604167,
            "unit": "ns",
            "range": "± 2010.9613497060257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772868.7320963541,
            "unit": "ns",
            "range": "± 2725.626869222729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911737.4870256695,
            "unit": "ns",
            "range": "± 2247.6769413765487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620506.788671875,
            "unit": "ns",
            "range": "± 1000.3228643993267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574748.6356119792,
            "unit": "ns",
            "range": "± 864.3266567440008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377160.310810811,
            "unit": "ns",
            "range": "± 80193.49572746527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501543.3170731706,
            "unit": "ns",
            "range": "± 89463.9227885853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3150226.409090909,
            "unit": "ns",
            "range": "± 73376.3842349574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2577248.725490196,
            "unit": "ns",
            "range": "± 104844.15017445246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3269204.6428571427,
            "unit": "ns",
            "range": "± 42245.27183485862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036359.4736842106,
            "unit": "ns",
            "range": "± 100461.06444616348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911188.6888888888,
            "unit": "ns",
            "range": "± 71462.32199838605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1692562.0133333334,
            "unit": "ns",
            "range": "± 80609.86948870656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8404658.944444444,
            "unit": "ns",
            "range": "± 167107.4854015583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199211.59322033898,
            "unit": "ns",
            "range": "± 8360.652158852954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196484.3125,
            "unit": "ns",
            "range": "± 6094.381391442025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170833.63636363635,
            "unit": "ns",
            "range": "± 4053.65257156995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3437438,
            "unit": "ns",
            "range": "± 42243.51944888791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881183.2,
            "unit": "ns",
            "range": "± 29243.381136836517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12521.219101123595,
            "unit": "ns",
            "range": "± 999.696158257871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66579.44565217392,
            "unit": "ns",
            "range": "± 4557.722918937159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62898.75,
            "unit": "ns",
            "range": "± 15213.783944389563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87335.36170212766,
            "unit": "ns",
            "range": "± 15766.816242567953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2989.1444444444446,
            "unit": "ns",
            "range": "± 469.6496557287063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12270.875,
            "unit": "ns",
            "range": "± 1160.4006499571828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5970453,
            "unit": "ns",
            "range": "± 35804.264932890546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14617598,
            "unit": "ns",
            "range": "± 113734.7308533577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37494758.4,
            "unit": "ns",
            "range": "± 176252.7548010851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74787448.86666666,
            "unit": "ns",
            "range": "± 455171.7359223356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151637867.56666666,
            "unit": "ns",
            "range": "± 703766.8649546289"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38869.75,
            "unit": "ns",
            "range": "± 427.39722315854647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d400bc7958ab39576ac40edb6563289d452b22e",
          "message": "Merge pull request #3856 from OnedgeLee/chore/reduce-cache-size\n\nReduce cache size",
          "timestamp": "2024-07-02T10:21:38+09:00",
          "tree_id": "ef1c4af39266ff021274f1bf49a1c0269d14b60f",
          "url": "https://github.com/planetarium/libplanet/commit/0d400bc7958ab39576ac40edb6563289d452b22e"
        },
        "date": 1719883849037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737200.2081473214,
            "unit": "ns",
            "range": "± 13740.448984226774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201221.9535757212,
            "unit": "ns",
            "range": "± 1477.56249787138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760759.2153645833,
            "unit": "ns",
            "range": "± 2978.415011306601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922565.4311197917,
            "unit": "ns",
            "range": "± 4242.925341359529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624376.9403599331,
            "unit": "ns",
            "range": "± 360.96452437024516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592210.4133649553,
            "unit": "ns",
            "range": "± 321.2693642506833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465318.111111111,
            "unit": "ns",
            "range": "± 52309.70659097589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2588367.814814815,
            "unit": "ns",
            "range": "± 108922.02837096907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121695.153846154,
            "unit": "ns",
            "range": "± 83902.20129922328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619576.789473684,
            "unit": "ns",
            "range": "± 57316.734640435556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3343872.6315789474,
            "unit": "ns",
            "range": "± 69494.45348068397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082492.1414141415,
            "unit": "ns",
            "range": "± 83349.73137672151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2073413.887755102,
            "unit": "ns",
            "range": "± 82101.28724194289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1795563.59,
            "unit": "ns",
            "range": "± 166484.36621285148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8362292.342105263,
            "unit": "ns",
            "range": "± 184585.24715554513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210178.61320754717,
            "unit": "ns",
            "range": "± 8586.227159415912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212326.2373737374,
            "unit": "ns",
            "range": "± 18071.011501446887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176665.33333333334,
            "unit": "ns",
            "range": "± 686.9037028359193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3182162.3076923075,
            "unit": "ns",
            "range": "± 21005.146156694616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868519.8666666667,
            "unit": "ns",
            "range": "± 33011.223612727896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23208.365853658535,
            "unit": "ns",
            "range": "± 1240.1330326109046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97876.65934065935,
            "unit": "ns",
            "range": "± 5189.987180929962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94188.27272727272,
            "unit": "ns",
            "range": "± 2914.337706417267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88591.09183673469,
            "unit": "ns",
            "range": "± 16504.88369577522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6260.712765957447,
            "unit": "ns",
            "range": "± 435.3884156973518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18478.863636363636,
            "unit": "ns",
            "range": "± 3219.0893136532322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5745838.928571428,
            "unit": "ns",
            "range": "± 52582.77459757255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14855153.857142856,
            "unit": "ns",
            "range": "± 109798.68636797012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40031881.192307696,
            "unit": "ns",
            "range": "± 325252.6128299829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75811113.07142857,
            "unit": "ns",
            "range": "± 370247.8171656351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153623456.8,
            "unit": "ns",
            "range": "± 805461.1239095279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49201.846153846156,
            "unit": "ns",
            "range": "± 743.6020268658326"
          }
        ]
      }
    ]
  }
}