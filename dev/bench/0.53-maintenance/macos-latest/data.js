window.BENCHMARK_DATA = {
  "lastUpdate": 1679908624550,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908571835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8988346.652173912,
            "unit": "ns",
            "range": "± 504995.6929134884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21262707.915384617,
            "unit": "ns",
            "range": "± 984047.3282265171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50749275.38888889,
            "unit": "ns",
            "range": "± 854801.4591011859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108728424.40526316,
            "unit": "ns",
            "range": "± 7600784.717485576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226199689.56382978,
            "unit": "ns",
            "range": "± 13985629.1463243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67473.81868131868,
            "unit": "ns",
            "range": "± 10387.007785240517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268679.6144578313,
            "unit": "ns",
            "range": "± 59301.896418454904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249060.9065934066,
            "unit": "ns",
            "range": "± 42369.838349409205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231614.25531914894,
            "unit": "ns",
            "range": "± 29706.29600618747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14101670.357142856,
            "unit": "ns",
            "range": "± 1135755.0727511202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10442146.14,
            "unit": "ns",
            "range": "± 416698.0867703153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25078.117021276597,
            "unit": "ns",
            "range": "± 3644.9882667374113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61352.14444444444,
            "unit": "ns",
            "range": "± 5482.640113973451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61768.175,
            "unit": "ns",
            "range": "± 2081.0136815861442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126458.75,
            "unit": "ns",
            "range": "± 15250.88821572111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9115.893617021276,
            "unit": "ns",
            "range": "± 937.0411045262224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24287.40625,
            "unit": "ns",
            "range": "± 2685.1820209913635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462948.852631579,
            "unit": "ns",
            "range": "± 122277.31324912589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716272.6951219514,
            "unit": "ns",
            "range": "± 94888.20086006992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2478576.3608247424,
            "unit": "ns",
            "range": "± 216534.18023659228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6109011.192982456,
            "unit": "ns",
            "range": "± 264858.32029855665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3535653.4886363638,
            "unit": "ns",
            "range": "± 276716.8255988523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5679004.791666667,
            "unit": "ns",
            "range": "± 465789.6806708935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25436627.240740743,
            "unit": "ns",
            "range": "± 697011.146249613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7074549.4375,
            "unit": "ns",
            "range": "± 669440.7597101331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32134150.666666668,
            "unit": "ns",
            "range": "± 2344679.772619259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6901757.947716346,
            "unit": "ns",
            "range": "± 71337.05864385652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002024.2591145833,
            "unit": "ns",
            "range": "± 11487.855532034277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315263.8462611607,
            "unit": "ns",
            "range": "± 6154.887758390947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3008120.6651475695,
            "unit": "ns",
            "range": "± 98029.22496418023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794767.3770182292,
            "unit": "ns",
            "range": "± 8498.449694700643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805482.9636579241,
            "unit": "ns",
            "range": "± 5553.313203179224"
          }
        ]
      }
    ]
  }
}