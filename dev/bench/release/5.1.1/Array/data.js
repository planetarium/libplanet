window.BENCHMARK_DATA = {
  "lastUpdate": 1721003663368,
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
          "id": "a22f1afc49e01313b5c85f785ba6e4909d1b14f3",
          "message": "Release 5.1.1",
          "timestamp": "2024-07-15T09:25:23+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/a22f1afc49e01313b5c85f785ba6e4909d1b14f3"
        },
        "date": 1721003618714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10932005.642857144,
            "unit": "ns",
            "range": "± 104819.57653078648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26371804.14285714,
            "unit": "ns",
            "range": "± 133296.21725999645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67500850.26666667,
            "unit": "ns",
            "range": "± 118111.64920983308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135345101.57142857,
            "unit": "ns",
            "range": "± 208511.04082101677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273418606.15384614,
            "unit": "ns",
            "range": "± 290631.5370148963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14156.078947368422,
            "unit": "ns",
            "range": "± 489.3927501190964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111449.73333333334,
            "unit": "ns",
            "range": "± 4947.945925011323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104749.56,
            "unit": "ns",
            "range": "± 4223.674786297846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91525.9,
            "unit": "ns",
            "range": "± 2422.5898504149095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063698.8363636364,
            "unit": "ns",
            "range": "± 129230.4875854914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2801950.52020202,
            "unit": "ns",
            "range": "± 169827.80669326353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5194.618279569892,
            "unit": "ns",
            "range": "± 621.2675655720252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27464.406593406595,
            "unit": "ns",
            "range": "± 1997.1342077977745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23098.32978723404,
            "unit": "ns",
            "range": "± 1355.8246122999221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28736.078651685395,
            "unit": "ns",
            "range": "± 3373.86855857809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1102.6736842105263,
            "unit": "ns",
            "range": "± 188.92064314546187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4668.954022988506,
            "unit": "ns",
            "range": "± 358.704772954869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 707347.306122449,
            "unit": "ns",
            "range": "± 66722.13789119247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263995.2758620689,
            "unit": "ns",
            "range": "± 54992.94884523373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1097164.8854166667,
            "unit": "ns",
            "range": "± 63150.728083625414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9320117.16,
            "unit": "ns",
            "range": "± 1357436.0062357218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2187246.9183673467,
            "unit": "ns",
            "range": "± 86545.04638068468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289205.738095238,
            "unit": "ns",
            "range": "± 79712.45319425821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2579118.076923077,
            "unit": "ns",
            "range": "± 35341.490370058295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259951.1818181816,
            "unit": "ns",
            "range": "± 53521.74676364772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2967262.056338028,
            "unit": "ns",
            "range": "± 142703.89005818882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034250.9309895835,
            "unit": "ns",
            "range": "± 39086.71189950833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914659.6348307292,
            "unit": "ns",
            "range": "± 6250.968347310181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612883.3247395833,
            "unit": "ns",
            "range": "± 4799.182954048559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1650406.1986607143,
            "unit": "ns",
            "range": "± 1182.3279275652453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468850.0301432292,
            "unit": "ns",
            "range": "± 728.7792512311781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426793.1096888951,
            "unit": "ns",
            "range": "± 1242.251955895705"
          }
        ]
      }
    ]
  }
}