window.BENCHMARK_DATA = {
  "lastUpdate": 1719884307746,
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
        "date": 1719884042102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005442.4242424242,
            "unit": "ns",
            "range": "± 97376.33716135066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750398.5714285714,
            "unit": "ns",
            "range": "± 84951.88662653624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565123.2323232323,
            "unit": "ns",
            "range": "± 147177.0486129718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6745417.647058823,
            "unit": "ns",
            "range": "± 212093.82782239682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39325.53191489362,
            "unit": "ns",
            "range": "± 4088.219008353248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4997184.615384615,
            "unit": "ns",
            "range": "± 14778.46666346265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12814706.666666666,
            "unit": "ns",
            "range": "± 181899.9782716812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32910478.57142857,
            "unit": "ns",
            "range": "± 330987.1091577003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64463406.666666664,
            "unit": "ns",
            "range": "± 801586.5299219922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130620026.66666667,
            "unit": "ns",
            "range": "± 2053269.2518680221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350666.71875,
            "unit": "ns",
            "range": "± 14353.809020307539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054287.109375,
            "unit": "ns",
            "range": "± 3006.9647380172446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728295.7096354166,
            "unit": "ns",
            "range": "± 3386.9063787735013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930262.8004807692,
            "unit": "ns",
            "range": "± 3642.1348133662896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608503.7876674107,
            "unit": "ns",
            "range": "± 1764.681166311236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554208.7332589285,
            "unit": "ns",
            "range": "± 1981.3510526373557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163300,
            "unit": "ns",
            "range": "± 66169.16248915449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2206808.3333333335,
            "unit": "ns",
            "range": "± 51235.1016672861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2693767.8571428573,
            "unit": "ns",
            "range": "± 76975.35465892786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2237346.6666666665,
            "unit": "ns",
            "range": "± 33369.65830268712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2934040,
            "unit": "ns",
            "range": "± 41802.71351411122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169167.1052631579,
            "unit": "ns",
            "range": "± 8404.227319754344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164120,
            "unit": "ns",
            "range": "± 7817.2221425079415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141164,
            "unit": "ns",
            "range": "± 3761.302965728765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2773392.8571428573,
            "unit": "ns",
            "range": "± 30722.26614953131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518233.3333333335,
            "unit": "ns",
            "range": "± 38056.53063285622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9609.574468085106,
            "unit": "ns",
            "range": "± 1382.2273710021675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52116.666666666664,
            "unit": "ns",
            "range": "± 5002.35032479032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44484.745762711864,
            "unit": "ns",
            "range": "± 1828.1150608285814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53871.134020618556,
            "unit": "ns",
            "range": "± 9285.214038581342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2440.217391304348,
            "unit": "ns",
            "range": "± 472.7891946220447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10519.58762886598,
            "unit": "ns",
            "range": "± 1411.0899433341217"
          }
        ]
      }
    ]
  }
}