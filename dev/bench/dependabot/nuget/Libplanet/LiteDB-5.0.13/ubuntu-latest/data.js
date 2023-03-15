window.BENCHMARK_DATA = {
  "lastUpdate": 1678851472642,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "distinct": true,
          "id": "682324937d2810f2b62b4684bf95825d14620761",
          "message": "chore: changelog",
          "timestamp": "2023-03-15T12:24:55+09:00",
          "tree_id": "b75741e53bb982ca40dc7a04594824063593e94d",
          "url": "https://github.com/planetarium/libplanet/commit/682324937d2810f2b62b4684bf95825d14620761"
        },
        "date": 1678851453887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3968022.0263157897,
            "unit": "ns",
            "range": "± 135727.99636026556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6069355.4375,
            "unit": "ns",
            "range": "± 187377.4857691213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26617397.75,
            "unit": "ns",
            "range": "± 509153.8329278621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7160977.527272727,
            "unit": "ns",
            "range": "± 296009.1350540369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30104471.10526316,
            "unit": "ns",
            "range": "± 661343.2025161532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7974120.733333333,
            "unit": "ns",
            "range": "± 113071.18055547807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21911661.666666668,
            "unit": "ns",
            "range": "± 394896.17063976754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53817011.733333334,
            "unit": "ns",
            "range": "± 691882.1906303812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108814823.6,
            "unit": "ns",
            "range": "± 1319011.5368824382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 214837431.4,
            "unit": "ns",
            "range": "± 2485199.063940432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2365363.9693877553,
            "unit": "ns",
            "range": "± 271074.7596751823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3867075.0727272728,
            "unit": "ns",
            "range": "± 164301.06874856458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3158531.6875,
            "unit": "ns",
            "range": "± 268464.1400590172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6583793.536585365,
            "unit": "ns",
            "range": "± 205691.2556676994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 225280.46153846153,
            "unit": "ns",
            "range": "± 3251.694471486741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902696.782366072,
            "unit": "ns",
            "range": "± 15309.610348528913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904502.6265345982,
            "unit": "ns",
            "range": "± 2781.641424728881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360568.562779018,
            "unit": "ns",
            "range": "± 3301.632480396247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626430.4036458335,
            "unit": "ns",
            "range": "± 2512.2850093651023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840666.7470005581,
            "unit": "ns",
            "range": "± 490.9926491941876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755432.1047014509,
            "unit": "ns",
            "range": "± 321.72369945162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199366.55,
            "unit": "ns",
            "range": "± 8350.725734066065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202523.56818181818,
            "unit": "ns",
            "range": "± 7368.554007268578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166653.84615384616,
            "unit": "ns",
            "range": "± 2084.240862846464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11997341.083333334,
            "unit": "ns",
            "range": "± 114849.85099326094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9689398.733333332,
            "unit": "ns",
            "range": "± 138679.4471966951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20546.58064516129,
            "unit": "ns",
            "range": "± 1356.0911082848174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54966.55263157895,
            "unit": "ns",
            "range": "± 2812.0432305578656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41064.333333333336,
            "unit": "ns",
            "range": "± 1380.7453473706564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99520.16326530612,
            "unit": "ns",
            "range": "± 13551.430432119512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6156.173469387755,
            "unit": "ns",
            "range": "± 934.7813573734736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19977.68817204301,
            "unit": "ns",
            "range": "± 1400.1984640267701"
          }
        ]
      }
    ]
  }
}