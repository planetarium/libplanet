window.BENCHMARK_DATA = {
  "lastUpdate": 1733820881468,
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
          "id": "a73925dcf3caaf85703b7ea02ac3f2d1166e45e7",
          "message": "wip",
          "timestamp": "2024-12-10T17:41:03+09:00",
          "tree_id": "363a86ec81a63578daa0784fd34f35c32609b0f2",
          "url": "https://github.com/planetarium/libplanet/commit/a73925dcf3caaf85703b7ea02ac3f2d1166e45e7"
        },
        "date": 1733820696319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010717.8947368421,
            "unit": "ns",
            "range": "± 78317.1335007611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740488.7096774194,
            "unit": "ns",
            "range": "± 78780.08632634558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493743.8775510204,
            "unit": "ns",
            "range": "± 142881.4699205788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6518436.363636363,
            "unit": "ns",
            "range": "± 204435.46019798922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29792.85714285714,
            "unit": "ns",
            "range": "± 1880.5142666453764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9641846.666666666,
            "unit": "ns",
            "range": "± 141189.37569634555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23958738.46153846,
            "unit": "ns",
            "range": "± 256048.18081258825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59339555.88235294,
            "unit": "ns",
            "range": "± 1163675.564467277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122492420,
            "unit": "ns",
            "range": "± 1600660.9394693358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243629600,
            "unit": "ns",
            "range": "± 4904012.305500466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3280671.5625,
            "unit": "ns",
            "range": "± 19733.287082149058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084307.3828125,
            "unit": "ns",
            "range": "± 6753.5790235178865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745579.7526041666,
            "unit": "ns",
            "range": "± 3226.472478468671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918919.4411057692,
            "unit": "ns",
            "range": "± 5041.305505904565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622723.6049107143,
            "unit": "ns",
            "range": "± 2600.632807628692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557533.5867745535,
            "unit": "ns",
            "range": "± 2671.7978498073485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190362.5,
            "unit": "ns",
            "range": "± 41778.25391277141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2322871.4285714286,
            "unit": "ns",
            "range": "± 32302.474984277753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2729568.4210526315,
            "unit": "ns",
            "range": "± 89590.76057955601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2286473.3333333335,
            "unit": "ns",
            "range": "± 16241.105990957754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3030826.6666666665,
            "unit": "ns",
            "range": "± 56018.293780650245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99569.23076923077,
            "unit": "ns",
            "range": "± 10422.770929371607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176087.62886597938,
            "unit": "ns",
            "range": "± 10528.871593266365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152058.57142857142,
            "unit": "ns",
            "range": "± 6644.066609992138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2605033.3333333335,
            "unit": "ns",
            "range": "± 61119.10775963056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2471892.3076923075,
            "unit": "ns",
            "range": "± 34491.79761282532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10810.204081632653,
            "unit": "ns",
            "range": "± 1732.8535429228525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57882.291666666664,
            "unit": "ns",
            "range": "± 7181.071534053464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46428.35820895522,
            "unit": "ns",
            "range": "± 2199.435600478288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54834.408602150535,
            "unit": "ns",
            "range": "± 13037.641946566939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2668.0851063829787,
            "unit": "ns",
            "range": "± 786.0631135509873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10770.652173913044,
            "unit": "ns",
            "range": "± 1283.413892065561"
          }
        ]
      }
    ]
  }
}