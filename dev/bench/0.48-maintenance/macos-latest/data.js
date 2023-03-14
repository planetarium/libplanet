window.BENCHMARK_DATA = {
  "lastUpdate": 1678784166582,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f40550f24d6e65b9022bce3b49fb4398fca7dca5",
          "message": "Merge pull request #2909 from colibrishin/benchmark/fix/0.48-maintenance\n\nci/bench: cherrypick of bench pr update to 0.48-maintenance",
          "timestamp": "2023-03-10T11:50:41+09:00",
          "tree_id": "b8377ad036a6e981a456e455b5c1b38f0ac2e7e7",
          "url": "https://github.com/planetarium/libplanet/commit/f40550f24d6e65b9022bce3b49fb4398fca7dca5"
        },
        "date": 1678417869095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147758.01612903227,
            "unit": "ns",
            "range": "± 10654.675920451346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121908.12765957447,
            "unit": "ns",
            "range": "± 16211.524653500512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240935.9793814433,
            "unit": "ns",
            "range": "± 29969.493344267106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241003.41304347827,
            "unit": "ns",
            "range": "± 26229.764723990036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021148.0104166665,
            "unit": "ns",
            "range": "± 396431.8927584965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12194166.693181818,
            "unit": "ns",
            "range": "± 2333920.5795749985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23978.488764044945,
            "unit": "ns",
            "range": "± 4569.682499649138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67251.43478260869,
            "unit": "ns",
            "range": "± 12062.745789608225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64215.142857142855,
            "unit": "ns",
            "range": "± 10357.777768497801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143772.4835164835,
            "unit": "ns",
            "range": "± 23059.956986739613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10586.511363636364,
            "unit": "ns",
            "range": "± 1349.0559363531274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27365.876404494382,
            "unit": "ns",
            "range": "± 5837.911867541931"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5377572.406447785,
            "unit": "ns",
            "range": "± 278913.055357549"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6569139.619565218,
            "unit": "ns",
            "range": "± 1127089.5428805067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27491084.666666668,
            "unit": "ns",
            "range": "± 926170.3713902833"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7334505.777777778,
            "unit": "ns",
            "range": "± 593645.5781754266"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32254967.684210528,
            "unit": "ns",
            "range": "± 2228842.3145304164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7473755.152260638,
            "unit": "ns",
            "range": "± 502508.3716222506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174490.7822048613,
            "unit": "ns",
            "range": "± 82258.52798699212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345693.8981933594,
            "unit": "ns",
            "range": "± 31551.840282615623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3170508.5890213815,
            "unit": "ns",
            "range": "± 253902.78717995205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853334.4245605469,
            "unit": "ns",
            "range": "± 9701.617034853765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793745.6598815918,
            "unit": "ns",
            "range": "± 23948.72113916975"
          }
        ]
      },
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
          "id": "b553911468123a8bca1195ba2e674552abf06cc3",
          "message": "Merge pull request #2931 from greymistcube/port/0.47.1-to-0.48.1\n\n🔀🚀 Port 0.47.1 to 0.48.1 and release 0.48.1",
          "timestamp": "2023-03-14T17:37:17+09:00",
          "tree_id": "7177f2855a73fc46fa2a4893941bbfd749f80bb2",
          "url": "https://github.com/planetarium/libplanet/commit/b553911468123a8bca1195ba2e674552abf06cc3"
        },
        "date": 1678784130567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140518.97191011236,
            "unit": "ns",
            "range": "± 10287.471360934274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120528.67032967033,
            "unit": "ns",
            "range": "± 13332.857204044569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251333.7373737374,
            "unit": "ns",
            "range": "± 28110.718448403724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243984.75,
            "unit": "ns",
            "range": "± 20198.079228839626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3934135.112244898,
            "unit": "ns",
            "range": "± 284841.37320055166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11351532.672413792,
            "unit": "ns",
            "range": "± 2101559.4388226974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20562.53846153846,
            "unit": "ns",
            "range": "± 2662.480198393522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60091.284946236556,
            "unit": "ns",
            "range": "± 9626.574349898241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60830.86363636364,
            "unit": "ns",
            "range": "± 8382.125727124901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129898.80412371134,
            "unit": "ns",
            "range": "± 26523.53879247293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7975.884615384615,
            "unit": "ns",
            "range": "± 986.5871788840869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19327.641304347828,
            "unit": "ns",
            "range": "± 2927.0472710679637"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5321467.409722222,
            "unit": "ns",
            "range": "± 669293.3145568566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6235890.411764706,
            "unit": "ns",
            "range": "± 123253.49417818691"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27323715,
            "unit": "ns",
            "range": "± 722149.7414992129"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7498735.127906977,
            "unit": "ns",
            "range": "± 630013.8027808046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31866050.554545455,
            "unit": "ns",
            "range": "± 1338534.628892764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7124473.454927885,
            "unit": "ns",
            "range": "± 294112.69019557454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2099012.3493652344,
            "unit": "ns",
            "range": "± 28787.47524290595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341543.2657752405,
            "unit": "ns",
            "range": "± 15399.073168277484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996853.6362723215,
            "unit": "ns",
            "range": "± 97195.63843312234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804108.419921875,
            "unit": "ns",
            "range": "± 12490.192254347245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795572.5872628348,
            "unit": "ns",
            "range": "± 13483.849761963529"
          }
        ]
      }
    ]
  }
}