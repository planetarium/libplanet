window.BENCHMARK_DATA = {
  "lastUpdate": 1678851680104,
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
        "date": 1678851625412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2260296.93877551,
            "unit": "ns",
            "range": "± 233428.98452264784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3458982.222222222,
            "unit": "ns",
            "range": "± 114353.89703755954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3367222.727272727,
            "unit": "ns",
            "range": "± 81211.94453443986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5859686.666666667,
            "unit": "ns",
            "range": "± 106349.55750238163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 212173.33333333334,
            "unit": "ns",
            "range": "± 6350.125349473267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7321406.666666667,
            "unit": "ns",
            "range": "± 64854.00600763298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18960726.666666668,
            "unit": "ns",
            "range": "± 83809.3369045535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49035080,
            "unit": "ns",
            "range": "± 322129.50634355564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95295806.66666667,
            "unit": "ns",
            "range": "± 455324.1788105743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 189495900,
            "unit": "ns",
            "range": "± 877887.3007722249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4892953.7109375,
            "unit": "ns",
            "range": "± 5788.13492374195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516677.0638020833,
            "unit": "ns",
            "range": "± 2152.339217178811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137347.65625,
            "unit": "ns",
            "range": "± 550.6109427982548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625565.5338541665,
            "unit": "ns",
            "range": "± 11895.087610935092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834684.7721354166,
            "unit": "ns",
            "range": "± 3927.7164724927065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744029.1471354166,
            "unit": "ns",
            "range": "± 767.6945669565789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3688768.5185185187,
            "unit": "ns",
            "range": "± 101492.67513181975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5642184.615384615,
            "unit": "ns",
            "range": "± 33719.30322910618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23774300,
            "unit": "ns",
            "range": "± 245294.72651718964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6662642.105263158,
            "unit": "ns",
            "range": "± 188304.06639920207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26360041.17647059,
            "unit": "ns",
            "range": "± 484615.183752562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182625.92592592593,
            "unit": "ns",
            "range": "± 7391.477376393048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182395.38461538462,
            "unit": "ns",
            "range": "± 8407.575281577003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158976.19047619047,
            "unit": "ns",
            "range": "± 8526.028455048327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10867320,
            "unit": "ns",
            "range": "± 66090.0381514275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8689253.333333334,
            "unit": "ns",
            "range": "± 87681.54934328029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18509.375,
            "unit": "ns",
            "range": "± 1618.8415692450542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50329.67032967033,
            "unit": "ns",
            "range": "± 2883.2656834258273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36926.041666666664,
            "unit": "ns",
            "range": "± 2411.911004366135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93433.67346938775,
            "unit": "ns",
            "range": "± 14740.203413650157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5434.375,
            "unit": "ns",
            "range": "± 711.6812008047897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19341.052631578947,
            "unit": "ns",
            "range": "± 1820.0125517945776"
          }
        ]
      }
    ]
  }
}