window.BENCHMARK_DATA = {
  "lastUpdate": 1698202497785,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "903830ec9de8928bce70a91d615bdb45ec64ca90",
          "message": "fix import mjs to require cjs",
          "timestamp": "2023-10-25T11:37:00+09:00",
          "tree_id": "9a6a722acee171995d2b938d04e19ddfd597e5ab",
          "url": "https://github.com/planetarium/libplanet/commit/903830ec9de8928bce70a91d615bdb45ec64ca90"
        },
        "date": 1698202430913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407117.7083333333,
            "unit": "ns",
            "range": "± 130336.90190772338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2672101.923076923,
            "unit": "ns",
            "range": "± 107747.04307008573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106386.597938144,
            "unit": "ns",
            "range": "± 141844.4751515326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9077570.786516855,
            "unit": "ns",
            "range": "± 693411.6593800158"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59951.041666666664,
            "unit": "ns",
            "range": "± 6817.639579049669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7771363.333333333,
            "unit": "ns",
            "range": "± 101734.47839959712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21560906.666666668,
            "unit": "ns",
            "range": "± 221215.61061767858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53950756.666666664,
            "unit": "ns",
            "range": "± 435163.52667977696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108963300,
            "unit": "ns",
            "range": "± 1005341.1177689506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218719493.33333334,
            "unit": "ns",
            "range": "± 1459077.4494603805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4507538.616071428,
            "unit": "ns",
            "range": "± 13593.387752530984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1440576.5474759615,
            "unit": "ns",
            "range": "± 4339.731239093511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1101229.0364583333,
            "unit": "ns",
            "range": "± 9389.56250473347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688304.268973214,
            "unit": "ns",
            "range": "± 15310.071494672857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839295.0946514423,
            "unit": "ns",
            "range": "± 2296.498360460389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776773.9676339285,
            "unit": "ns",
            "range": "± 3537.3133207980136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484253.3333333335,
            "unit": "ns",
            "range": "± 54816.458251496835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743585.714285714,
            "unit": "ns",
            "range": "± 60091.7997367727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382048.387096774,
            "unit": "ns",
            "range": "± 132240.67168353248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199828,
            "unit": "ns",
            "range": "± 148133.85430696365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10365560,
            "unit": "ns",
            "range": "± 301664.45172724186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277438.1818181818,
            "unit": "ns",
            "range": "± 11641.34539299142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262809.756097561,
            "unit": "ns",
            "range": "± 8206.424461300086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262384.5070422535,
            "unit": "ns",
            "range": "± 12720.14878492638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262607.142857143,
            "unit": "ns",
            "range": "± 49207.714596637954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908323.076923077,
            "unit": "ns",
            "range": "± 51907.773243291056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25200,
            "unit": "ns",
            "range": "± 2273.4358663260928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100275.51020408163,
            "unit": "ns",
            "range": "± 8730.91805879424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82418.94736842105,
            "unit": "ns",
            "range": "± 7071.959834547689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95972.1052631579,
            "unit": "ns",
            "range": "± 12235.935729656772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6742.268041237114,
            "unit": "ns",
            "range": "± 1435.3306131592697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25491.75257731959,
            "unit": "ns",
            "range": "± 3302.0722692693544"
          }
        ]
      }
    ]
  }
}