window.BENCHMARK_DATA = {
  "lastUpdate": 1731482534162,
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
        "date": 1731482507616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10963336,
            "unit": "ns",
            "range": "± 172959.0705059602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29284284.192307692,
            "unit": "ns",
            "range": "± 114173.74484923159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71732196.13333334,
            "unit": "ns",
            "range": "± 521471.33512233116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145089791.6,
            "unit": "ns",
            "range": "± 717109.8588434989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302241960.56666666,
            "unit": "ns",
            "range": "± 1791905.118642465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111561.69230769231,
            "unit": "ns",
            "range": "± 8209.779812573548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194278.25,
            "unit": "ns",
            "range": "± 8882.473811718952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165522.3,
            "unit": "ns",
            "range": "± 3795.8784587607925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2900707.2,
            "unit": "ns",
            "range": "± 45143.109724519425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2889576.466666667,
            "unit": "ns",
            "range": "± 43380.11775796878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14309.68085106383,
            "unit": "ns",
            "range": "± 1899.785833785754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66341.18279569893,
            "unit": "ns",
            "range": "± 6282.606143580304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58383.234042553195,
            "unit": "ns",
            "range": "± 4218.936222303071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57753.978494623654,
            "unit": "ns",
            "range": "± 10137.046512645215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2864.543956043956,
            "unit": "ns",
            "range": "± 445.8226082719426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13437.317647058824,
            "unit": "ns",
            "range": "± 2268.4990643687775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813479.691964286,
            "unit": "ns",
            "range": "± 8947.309899561738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210570.2403846155,
            "unit": "ns",
            "range": "± 2020.5093645425327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777233.4025390625,
            "unit": "ns",
            "range": "± 1261.4732623131752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957144.1841145833,
            "unit": "ns",
            "range": "± 1544.5328647334063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621016.8103376116,
            "unit": "ns",
            "range": "± 474.1087999024066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585910.3370442708,
            "unit": "ns",
            "range": "± 678.225260618556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517443.189189189,
            "unit": "ns",
            "range": "± 79212.09456082583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2688888.466666667,
            "unit": "ns",
            "range": "± 42931.559877931075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3104534.4375,
            "unit": "ns",
            "range": "± 95369.45501606101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2664324,
            "unit": "ns",
            "range": "± 45377.642026069996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3285267.5714285714,
            "unit": "ns",
            "range": "± 57131.7853667012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052891.1397849463,
            "unit": "ns",
            "range": "± 98915.31508783613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2005672.517857143,
            "unit": "ns",
            "range": "± 85949.50101531418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699524.7207792208,
            "unit": "ns",
            "range": "± 87002.86278451193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8083451.928571428,
            "unit": "ns",
            "range": "± 295137.30989766255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31477.75581395349,
            "unit": "ns",
            "range": "± 1152.3534116676444"
          }
        ]
      }
    ]
  }
}