window.BENCHMARK_DATA = {
  "lastUpdate": 1719883859177,
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
        "date": 1719883628463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976243.0107526882,
            "unit": "ns",
            "range": "± 84901.8069632175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1746341.4285714286,
            "unit": "ns",
            "range": "± 75795.66063992484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537571.7171717172,
            "unit": "ns",
            "range": "± 144566.4934507782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6886391.891891892,
            "unit": "ns",
            "range": "± 204662.02271927134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32934.117647058825,
            "unit": "ns",
            "range": "± 2452.479451939378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5028642.857142857,
            "unit": "ns",
            "range": "± 18327.14314409575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13535614.285714285,
            "unit": "ns",
            "range": "± 64884.499241022444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32204953.333333332,
            "unit": "ns",
            "range": "± 445002.9949604941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64968976.92307692,
            "unit": "ns",
            "range": "± 214219.31967746725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135091853.33333334,
            "unit": "ns",
            "range": "± 1508342.985751804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3363073.9583333335,
            "unit": "ns",
            "range": "± 7677.780891084664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065281.591796875,
            "unit": "ns",
            "range": "± 1467.1490740575302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737534.765625,
            "unit": "ns",
            "range": "± 1336.3486473012686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1873502.5,
            "unit": "ns",
            "range": "± 5007.593946223849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638763.0183293269,
            "unit": "ns",
            "range": "± 596.9092692240497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561023.974609375,
            "unit": "ns",
            "range": "± 1143.4253712979084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134543.75,
            "unit": "ns",
            "range": "± 40079.27093066107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277800,
            "unit": "ns",
            "range": "± 37825.086157960606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2786571.4285714286,
            "unit": "ns",
            "range": "± 36057.24996065666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2232595.4545454546,
            "unit": "ns",
            "range": "± 40720.259112197484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3006353.3333333335,
            "unit": "ns",
            "range": "± 53834.32079294857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171657.14285714287,
            "unit": "ns",
            "range": "± 7845.786094904997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161787.9518072289,
            "unit": "ns",
            "range": "± 8609.260436642733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144996,
            "unit": "ns",
            "range": "± 1972.8321435607913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2790964.285714286,
            "unit": "ns",
            "range": "± 35846.69509802193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488742.8571428573,
            "unit": "ns",
            "range": "± 20171.980349206948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9743.157894736842,
            "unit": "ns",
            "range": "± 1339.9470163849483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50984.69387755102,
            "unit": "ns",
            "range": "± 4072.116702822431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43469.444444444445,
            "unit": "ns",
            "range": "± 1381.88679388404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50248.45360824742,
            "unit": "ns",
            "range": "± 8802.273775873457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1946.3157894736842,
            "unit": "ns",
            "range": "± 303.8093349159681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9267.34693877551,
            "unit": "ns",
            "range": "± 1417.9828500121844"
          }
        ]
      }
    ]
  }
}