window.BENCHMARK_DATA = {
  "lastUpdate": 1731477962163,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731477626594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1068185.5670103093,
            "unit": "ns",
            "range": "± 116847.7303210703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899163.6363636365,
            "unit": "ns",
            "range": "± 69798.25776098816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584165.4320987654,
            "unit": "ns",
            "range": "± 83234.78263396533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6980116.279069767,
            "unit": "ns",
            "range": "± 248220.69762347004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32422.105263157893,
            "unit": "ns",
            "range": "± 3916.2014527586584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10292871.42857143,
            "unit": "ns",
            "range": "± 70203.36863023716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24651953.333333332,
            "unit": "ns",
            "range": "± 360663.79450489156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60533483.333333336,
            "unit": "ns",
            "range": "± 299029.6270920122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123027300,
            "unit": "ns",
            "range": "± 1521278.7149537816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250320546.66666666,
            "unit": "ns",
            "range": "± 2276128.5699521415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364675.1953125,
            "unit": "ns",
            "range": "± 7723.4196051731915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086300.5078125,
            "unit": "ns",
            "range": "± 3856.8349814889325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735918.0803571428,
            "unit": "ns",
            "range": "± 2166.352322165806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970434.5982142857,
            "unit": "ns",
            "range": "± 4532.075567496395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620009.8958333334,
            "unit": "ns",
            "range": "± 1576.5750473137432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576684.4168526785,
            "unit": "ns",
            "range": "± 685.479969514604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244490,
            "unit": "ns",
            "range": "± 77616.37020034448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2376533.3333333335,
            "unit": "ns",
            "range": "± 56459.15632856493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2908346.6666666665,
            "unit": "ns",
            "range": "± 86888.91335704352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2458000,
            "unit": "ns",
            "range": "± 58130.24579502891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3117738.4615384615,
            "unit": "ns",
            "range": "± 48968.07699004081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102046.29629629629,
            "unit": "ns",
            "range": "± 5359.371335437685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179255.38461538462,
            "unit": "ns",
            "range": "± 8358.43568590347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163238.63636363635,
            "unit": "ns",
            "range": "± 8998.191795599081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724347.8260869565,
            "unit": "ns",
            "range": "± 67106.81356522205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2644820,
            "unit": "ns",
            "range": "± 49151.634182976486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12670.114942528735,
            "unit": "ns",
            "range": "± 1734.2054639764435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60759.278350515466,
            "unit": "ns",
            "range": "± 5529.3927197113835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50765.625,
            "unit": "ns",
            "range": "± 5863.245519873425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62438.14432989691,
            "unit": "ns",
            "range": "± 14192.467509937042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3269.7916666666665,
            "unit": "ns",
            "range": "± 736.1521283949064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12202.127659574468,
            "unit": "ns",
            "range": "± 1832.501006962082"
          }
        ]
      }
    ]
  }
}