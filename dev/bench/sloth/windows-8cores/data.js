window.BENCHMARK_DATA = {
  "lastUpdate": 1713837745433,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713837477598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1927369.4444444445,
            "unit": "ns",
            "range": "± 63263.00575237789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860001.1764705884,
            "unit": "ns",
            "range": "± 186955.30182252606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421302,
            "unit": "ns",
            "range": "± 310003.3339605667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8180677.5,
            "unit": "ns",
            "range": "± 184146.09513254443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 183263.26530612246,
            "unit": "ns",
            "range": "± 7247.2320543073265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069226.666666667,
            "unit": "ns",
            "range": "± 24859.590465155256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13588092.857142856,
            "unit": "ns",
            "range": "± 78507.24086434237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32574373.333333332,
            "unit": "ns",
            "range": "± 259167.55602358506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64645160,
            "unit": "ns",
            "range": "± 522186.78486315056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131180593.33333333,
            "unit": "ns",
            "range": "± 1099447.7311467833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3250566.0907451925,
            "unit": "ns",
            "range": "± 6886.996096999566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062544.2447916667,
            "unit": "ns",
            "range": "± 2211.529460988667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731017.0522836539,
            "unit": "ns",
            "range": "± 1981.0065056820877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958769.2447916667,
            "unit": "ns",
            "range": "± 5709.918748654327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608807.5544084822,
            "unit": "ns",
            "range": "± 1042.2695930339871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554616.1263020834,
            "unit": "ns",
            "range": "± 1035.784051083236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015807.1428571427,
            "unit": "ns",
            "range": "± 85024.05728651343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2702629.487179487,
            "unit": "ns",
            "range": "± 80688.2375158505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3442029.1666666665,
            "unit": "ns",
            "range": "± 102747.99777172931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3380306,
            "unit": "ns",
            "range": "± 372179.7990110683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8848465.625,
            "unit": "ns",
            "range": "± 235128.59982924513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172057.97101449277,
            "unit": "ns",
            "range": "± 7820.9824453780875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164525.67567567568,
            "unit": "ns",
            "range": "± 7667.241485890598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146018.75,
            "unit": "ns",
            "range": "± 2686.439713325675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748986.6666666665,
            "unit": "ns",
            "range": "± 37460.05237328859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457660,
            "unit": "ns",
            "range": "± 35157.25489040024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9991.666666666666,
            "unit": "ns",
            "range": "± 1281.0083747346662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53664.583333333336,
            "unit": "ns",
            "range": "± 7568.897286946816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42874.509803921566,
            "unit": "ns",
            "range": "± 1759.9821745977886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49511.34020618557,
            "unit": "ns",
            "range": "± 9835.45749961862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2128.865979381443,
            "unit": "ns",
            "range": "± 309.5557175502356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8973.333333333334,
            "unit": "ns",
            "range": "± 878.9421629679036"
          }
        ]
      }
    ]
  }
}