window.BENCHMARK_DATA = {
  "lastUpdate": 1700827825962,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "64549cf36514ad8e12634c0b5de0965cc846df15",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T20:57:00+09:00",
          "tree_id": "cfa4c98881ec3188cd6ce0622c3b63905a3f30b3",
          "url": "https://github.com/planetarium/libplanet/commit/64549cf36514ad8e12634c0b5de0965cc846df15"
        },
        "date": 1700827801103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197286.28181818183,
            "unit": "ns",
            "range": "± 7630.808123533302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187784.66,
            "unit": "ns",
            "range": "± 7562.176299997568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168140.77777777778,
            "unit": "ns",
            "range": "± 3458.967842572075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117535.1333333333,
            "unit": "ns",
            "range": "± 34569.15828940727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2803752.6428571427,
            "unit": "ns",
            "range": "± 46652.39558134204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13784.785714285714,
            "unit": "ns",
            "range": "± 2864.3068861671104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63782.68041237113,
            "unit": "ns",
            "range": "± 8745.5912256624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75819.1,
            "unit": "ns",
            "range": "± 18944.19064200971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61155.86734693877,
            "unit": "ns",
            "range": "± 13090.244467516073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3266.2808988764045,
            "unit": "ns",
            "range": "± 408.3707648238536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12640.969387755102,
            "unit": "ns",
            "range": "± 2431.2208441167295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648428.599158654,
            "unit": "ns",
            "range": "± 29137.872619524664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1153719.0732421875,
            "unit": "ns",
            "range": "± 5874.401627573473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742938.0072866586,
            "unit": "ns",
            "range": "± 1085.4486726500513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942966.84609375,
            "unit": "ns",
            "range": "± 3086.9288041095533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614940.3584681919,
            "unit": "ns",
            "range": "± 9403.806104753365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570779.4867788461,
            "unit": "ns",
            "range": "± 822.7574465465582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39577.43157894737,
            "unit": "ns",
            "range": "± 5178.683819175695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2541435.75,
            "unit": "ns",
            "range": "± 55017.08198855801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2494332.6960784313,
            "unit": "ns",
            "range": "± 88633.35096520263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111032.8529411764,
            "unit": "ns",
            "range": "± 60229.86382698907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3032287.4285714286,
            "unit": "ns",
            "range": "± 133482.8206744845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776523.657894737,
            "unit": "ns",
            "range": "± 227468.18607177841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5627027.071428572,
            "unit": "ns",
            "range": "± 20271.968025080598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14602749.807692308,
            "unit": "ns",
            "range": "± 225126.9377345385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37170578.461538464,
            "unit": "ns",
            "range": "± 160489.0347160907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79431080.23076923,
            "unit": "ns",
            "range": "± 299948.5165810831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154086299.7142857,
            "unit": "ns",
            "range": "± 1048424.5037907836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953705.1333333333,
            "unit": "ns",
            "range": "± 76647.59566627139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865733.6764705882,
            "unit": "ns",
            "range": "± 80475.29104553717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1407642.855670103,
            "unit": "ns",
            "range": "± 147406.8512010911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5667456.364197531,
            "unit": "ns",
            "range": "± 297049.5080691833"
          }
        ]
      }
    ]
  }
}