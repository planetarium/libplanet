window.BENCHMARK_DATA = {
  "lastUpdate": 1719883567891,
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
      }
    ]
  }
}