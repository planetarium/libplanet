window.BENCHMARK_DATA = {
  "lastUpdate": 1731482961185,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "d257534143323bead2c439d84f8e44859b76b7e7",
          "message": "Prepare 5.4.1",
          "timestamp": "2024-11-13T16:19:14+09:00",
          "tree_id": "fab508f993e275a5d9142bada18e2d94b1a43499",
          "url": "https://github.com/planetarium/libplanet/commit/d257534143323bead2c439d84f8e44859b76b7e7"
        },
        "date": 1731482934522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11077743.692307692,
            "unit": "ns",
            "range": "± 45070.35105880698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28060276.7,
            "unit": "ns",
            "range": "± 133871.03849611597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75587528,
            "unit": "ns",
            "range": "± 890929.8871347846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140831838.07142857,
            "unit": "ns",
            "range": "± 597914.8071285824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299595179.9285714,
            "unit": "ns",
            "range": "± 1660652.2088638023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113007.33684210526,
            "unit": "ns",
            "range": "± 7645.960316528338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236698.5,
            "unit": "ns",
            "range": "± 7786.596480057461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181328.56603773584,
            "unit": "ns",
            "range": "± 7444.438805912654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3023871.4285714286,
            "unit": "ns",
            "range": "± 20491.835123416222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869049.966666667,
            "unit": "ns",
            "range": "± 32144.376244124098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22329.755319148935,
            "unit": "ns",
            "range": "± 2564.740699069991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74937.0808080808,
            "unit": "ns",
            "range": "± 8372.095814067949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52789.5243902439,
            "unit": "ns",
            "range": "± 1910.8931745103503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74716.17525773196,
            "unit": "ns",
            "range": "± 10331.167831907878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4034.030612244898,
            "unit": "ns",
            "range": "± 517.0210309802785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14037.28947368421,
            "unit": "ns",
            "range": "± 1355.1024291562019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3689261.9151785714,
            "unit": "ns",
            "range": "± 8027.020428080448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199951.9733072917,
            "unit": "ns",
            "range": "± 2328.8348443949426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758186.6392299107,
            "unit": "ns",
            "range": "± 618.0275487127049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936309.2181490385,
            "unit": "ns",
            "range": "± 1165.4136792960016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618276.3217075893,
            "unit": "ns",
            "range": "± 300.38155759211605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576958.654296875,
            "unit": "ns",
            "range": "± 1106.8019097927986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419761.55,
            "unit": "ns",
            "range": "± 54290.276399404014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504476.6666666665,
            "unit": "ns",
            "range": "± 43176.368410222254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3055859.4,
            "unit": "ns",
            "range": "± 39015.97201110628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626457.4285714286,
            "unit": "ns",
            "range": "± 28618.299155137905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3273094,
            "unit": "ns",
            "range": "± 41649.39165393484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987398.6142857143,
            "unit": "ns",
            "range": "± 46772.307149278626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1955590.1463414633,
            "unit": "ns",
            "range": "± 69307.15333519367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1705681.5882352942,
            "unit": "ns",
            "range": "± 67842.83794847137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7935294.637931035,
            "unit": "ns",
            "range": "± 228884.3760301139"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30911.7,
            "unit": "ns",
            "range": "± 1057.8738522052086"
          }
        ]
      }
    ]
  }
}