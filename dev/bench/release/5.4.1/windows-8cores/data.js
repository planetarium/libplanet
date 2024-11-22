window.BENCHMARK_DATA = {
  "lastUpdate": 1732235820987,
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
          "id": "127a9c3f980fa3a9414c9b8ca62105e2d607e012",
          "message": "Release 5.4.1",
          "timestamp": "2024-11-22T09:26:19+09:00",
          "tree_id": "1c9ba778bdd76c9a61f06055f9578e53c5c85f81",
          "url": "https://github.com/planetarium/libplanet/commit/127a9c3f980fa3a9414c9b8ca62105e2d607e012"
        },
        "date": 1732235746706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990290.9090909091,
            "unit": "ns",
            "range": "± 113183.05300680234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1763072.7272727273,
            "unit": "ns",
            "range": "± 65091.60222917469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1475787.5,
            "unit": "ns",
            "range": "± 98739.82958952492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6974364.47368421,
            "unit": "ns",
            "range": "± 354303.59851552825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33027.83505154639,
            "unit": "ns",
            "range": "± 4001.034821040084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10253140,
            "unit": "ns",
            "range": "± 118573.61667516333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25243493.333333332,
            "unit": "ns",
            "range": "± 180145.32810510308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62989466.666666664,
            "unit": "ns",
            "range": "± 770420.3311612868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124165635.71428572,
            "unit": "ns",
            "range": "± 1069053.7149972636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252531366.66666666,
            "unit": "ns",
            "range": "± 1275636.693502317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3437420.15625,
            "unit": "ns",
            "range": "± 10145.695624290793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090645.5775669643,
            "unit": "ns",
            "range": "± 2622.779250676451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737317.7525111607,
            "unit": "ns",
            "range": "± 1389.793641087969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1996094.810267857,
            "unit": "ns",
            "range": "± 2431.676759311048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642641.5234375,
            "unit": "ns",
            "range": "± 1844.6738685825637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578254.3489583334,
            "unit": "ns",
            "range": "± 1347.2504660433472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2222432.6086956523,
            "unit": "ns",
            "range": "± 80708.77428369738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2408392.8571428573,
            "unit": "ns",
            "range": "± 38243.70162897041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2860507.1428571427,
            "unit": "ns",
            "range": "± 49913.54778762227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2503257.1428571427,
            "unit": "ns",
            "range": "± 42269.969596278745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3217860.714285714,
            "unit": "ns",
            "range": "± 92002.73884524555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106102.35294117648,
            "unit": "ns",
            "range": "± 5445.027798927425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172897.2972972973,
            "unit": "ns",
            "range": "± 5071.515579219911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151922.72727272726,
            "unit": "ns",
            "range": "± 4773.51238131268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2681757.1428571427,
            "unit": "ns",
            "range": "± 37837.19607203217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2619315.789473684,
            "unit": "ns",
            "range": "± 55947.72622882397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12970.652173913044,
            "unit": "ns",
            "range": "± 1606.753469842952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59324.21052631579,
            "unit": "ns",
            "range": "± 5992.241717944212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47074.1935483871,
            "unit": "ns",
            "range": "± 2684.4521433540076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59307.31707317073,
            "unit": "ns",
            "range": "± 6477.745006355161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2923.404255319149,
            "unit": "ns",
            "range": "± 572.1916988184568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12463.736263736264,
            "unit": "ns",
            "range": "± 1108.6043762333177"
          }
        ]
      }
    ]
  }
}