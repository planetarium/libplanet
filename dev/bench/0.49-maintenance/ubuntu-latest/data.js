window.BENCHMARK_DATA = {
  "lastUpdate": 1678785289670,
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
          "id": "cedb884830acb875c5ff0009511f65e0face4775",
          "message": "Merge pull request #2912 from colibrishin/benchmark/fix/0.49-maintenance\n\nci/bench: cherrypick of bench pr update to 0.49-maintenance",
          "timestamp": "2023-03-10T12:16:38+09:00",
          "tree_id": "cfd9e36e7209a775f765f31706e0f3fb5c221461",
          "url": "https://github.com/planetarium/libplanet/commit/cedb884830acb875c5ff0009511f65e0face4775"
        },
        "date": 1678418886890,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86505.13253012048,
            "unit": "ns",
            "range": "± 4478.8773086161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193892.84848484848,
            "unit": "ns",
            "range": "± 8247.434148765811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173957.64285714287,
            "unit": "ns",
            "range": "± 2517.768994326368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742876.6666666665,
            "unit": "ns",
            "range": "± 31305.719848585104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9589792.6,
            "unit": "ns",
            "range": "± 74666.88971099765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18127.907216494845,
            "unit": "ns",
            "range": "± 2118.9788769322076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48395.48837209302,
            "unit": "ns",
            "range": "± 2888.311661300487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43823.0625,
            "unit": "ns",
            "range": "± 1710.0079433217275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86673.62765957447,
            "unit": "ns",
            "range": "± 12782.423518660671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4977.329896907217,
            "unit": "ns",
            "range": "± 681.3738376992698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14328.29347826087,
            "unit": "ns",
            "range": "± 1317.6884316992093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5934948.3453125,
            "unit": "ns",
            "range": "± 38315.74163811551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861069.2940104166,
            "unit": "ns",
            "range": "± 3233.702149060965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347767.2807291667,
            "unit": "ns",
            "range": "± 1933.0490383440708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561719.9984375,
            "unit": "ns",
            "range": "± 1159.3713773063903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795111.1237229567,
            "unit": "ns",
            "range": "± 472.302610374716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762439.1138822115,
            "unit": "ns",
            "range": "± 1154.4316092181461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103333.10447761194,
            "unit": "ns",
            "range": "± 4858.555703007024"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4472273.7015625,
            "unit": "ns",
            "range": "± 33052.390900770835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5531395.777777778,
            "unit": "ns",
            "range": "± 220563.4362120919"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26035701.46153846,
            "unit": "ns",
            "range": "± 416843.16842501156"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6785726.153846154,
            "unit": "ns",
            "range": "± 66898.76215950755"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28801721.76470588,
            "unit": "ns",
            "range": "± 584529.0969721406"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1678785269375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85731.35483870968,
            "unit": "ns",
            "range": "± 6026.230151604916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196253.02631578947,
            "unit": "ns",
            "range": "± 9319.387200130966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171342.42105263157,
            "unit": "ns",
            "range": "± 3782.475781163406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773853,
            "unit": "ns",
            "range": "± 44857.900777263945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9413055.933333334,
            "unit": "ns",
            "range": "± 70682.2356359449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15873.267441860466,
            "unit": "ns",
            "range": "± 871.0355084869639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48111.620689655174,
            "unit": "ns",
            "range": "± 4367.7606716352075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40897.44736842105,
            "unit": "ns",
            "range": "± 2096.417613579488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87025.89690721649,
            "unit": "ns",
            "range": "± 14414.479901217193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4486.032258064516,
            "unit": "ns",
            "range": "± 506.40524354239966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14940.681318681318,
            "unit": "ns",
            "range": "± 1139.0054129138855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095877.486607143,
            "unit": "ns",
            "range": "± 33162.492433168554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840207.44921875,
            "unit": "ns",
            "range": "± 2546.472136504142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360271.7897135417,
            "unit": "ns",
            "range": "± 2250.152112843791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586436.500558036,
            "unit": "ns",
            "range": "± 2883.448001116114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834095.7469200721,
            "unit": "ns",
            "range": "± 575.165800206496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748231.0164388021,
            "unit": "ns",
            "range": "± 790.6901005518673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103719.14285714286,
            "unit": "ns",
            "range": "± 2395.0710487522974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4480020.83046875,
            "unit": "ns",
            "range": "± 34106.306880081436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6056883.6,
            "unit": "ns",
            "range": "± 52761.91859232241"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25693083.6,
            "unit": "ns",
            "range": "± 266375.1798127167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6741511.375,
            "unit": "ns",
            "range": "± 131107.62098463232"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28578412.42857143,
            "unit": "ns",
            "range": "± 477757.31458309287"
          }
        ]
      }
    ]
  }
}