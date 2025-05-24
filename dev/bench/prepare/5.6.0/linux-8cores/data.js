window.BENCHMARK_DATA = {
  "lastUpdate": 1748057285328,
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
          "id": "62a746cd388bb9087225d7eb619689cca58ed12d",
          "message": "prepare: 5.6.0",
          "timestamp": "2025-05-24T12:18:20+09:00",
          "tree_id": "79b0852bfd537157ef86214a4d55c3fbc3eb4d7b",
          "url": "https://github.com/planetarium/libplanet/commit/62a746cd388bb9087225d7eb619689cca58ed12d"
        },
        "date": 1748057258022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407407.6666666665,
            "unit": "ns",
            "range": "± 27982.326730243414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2537312.466666667,
            "unit": "ns",
            "range": "± 40989.547988074555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3036994.3571428573,
            "unit": "ns",
            "range": "± 41965.63003011126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605993.057142857,
            "unit": "ns",
            "range": "± 73130.93353260015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295405.6,
            "unit": "ns",
            "range": "± 55465.71518617861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3886929.3580729165,
            "unit": "ns",
            "range": "± 16317.314783674685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1252419.8888113839,
            "unit": "ns",
            "range": "± 3068.623116449059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768864.1748046875,
            "unit": "ns",
            "range": "± 1729.511633953238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974887.6568080357,
            "unit": "ns",
            "range": "± 4103.174679516121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628939.4916992188,
            "unit": "ns",
            "range": "± 1557.6762653665526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589255.8013020833,
            "unit": "ns",
            "range": "± 991.378891348564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11520097.6,
            "unit": "ns",
            "range": "± 178250.4026330055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28751472.222222224,
            "unit": "ns",
            "range": "± 606741.5781412706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70347342.57142857,
            "unit": "ns",
            "range": "± 425300.57356243127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138521682.53333333,
            "unit": "ns",
            "range": "± 728345.7719311487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285614987.46153843,
            "unit": "ns",
            "range": "± 1208851.6180662687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018341.2083333334,
            "unit": "ns",
            "range": "± 88061.56628738623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2022506.5675675676,
            "unit": "ns",
            "range": "± 100932.55085941564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642166.1860465116,
            "unit": "ns",
            "range": "± 88838.02451130294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7998972.829787234,
            "unit": "ns",
            "range": "± 310162.04152712616"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31057.20588235294,
            "unit": "ns",
            "range": "± 1001.2920374230355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108844.25531914894,
            "unit": "ns",
            "range": "± 9717.977121395206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191291.1883116883,
            "unit": "ns",
            "range": "± 9782.992584151954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166503.725,
            "unit": "ns",
            "range": "± 4536.980010397178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2959535.1,
            "unit": "ns",
            "range": "± 39858.41461222461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2873413.2,
            "unit": "ns",
            "range": "± 46587.314179475325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12013.043010752688,
            "unit": "ns",
            "range": "± 1035.7771280538745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57746.16049382716,
            "unit": "ns",
            "range": "± 3047.690475822595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51006.1,
            "unit": "ns",
            "range": "± 1124.8561498675003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58936.65625,
            "unit": "ns",
            "range": "± 9566.803777787929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3066.0752688172042,
            "unit": "ns",
            "range": "± 457.3796405365815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11492.822916666666,
            "unit": "ns",
            "range": "± 1297.5556533631077"
          }
        ]
      }
    ]
  }
}