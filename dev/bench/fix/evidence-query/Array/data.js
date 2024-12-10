window.BENCHMARK_DATA = {
  "lastUpdate": 1733820675298,
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
        "date": 1733820566689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10599570.346153846,
            "unit": "ns",
            "range": "± 132670.21262315952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26261985.64285714,
            "unit": "ns",
            "range": "± 99087.55335762963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67093903.13333333,
            "unit": "ns",
            "range": "± 121901.36886719213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134409731.15384614,
            "unit": "ns",
            "range": "± 219984.84721030452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269970027.56666666,
            "unit": "ns",
            "range": "± 185806.69096727794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12954.42857142857,
            "unit": "ns",
            "range": "± 510.0131942737692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55475.63636363636,
            "unit": "ns",
            "range": "± 3617.6483603789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106344.84905660378,
            "unit": "ns",
            "range": "± 4439.725543302746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 96000.33333333333,
            "unit": "ns",
            "range": "± 2868.1022721789677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2827703.6565656564,
            "unit": "ns",
            "range": "± 166801.04608846852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760708.1666666665,
            "unit": "ns",
            "range": "± 146854.63466059626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4819.539325842697,
            "unit": "ns",
            "range": "± 460.6302761182911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27549.932584269663,
            "unit": "ns",
            "range": "± 2190.098626866715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23018.958333333332,
            "unit": "ns",
            "range": "± 1544.8573561585529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31424.852631578946,
            "unit": "ns",
            "range": "± 5487.042566536884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1424.936170212766,
            "unit": "ns",
            "range": "± 289.1808530563916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4888.126373626374,
            "unit": "ns",
            "range": "± 554.8228675963297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685616.2783505154,
            "unit": "ns",
            "range": "± 55126.81150911321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264489.3214285714,
            "unit": "ns",
            "range": "± 35705.334111361684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1043389.7831325302,
            "unit": "ns",
            "range": "± 53726.43434579826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8631766.23,
            "unit": "ns",
            "range": "± 1351789.0649534091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137954.4615384615,
            "unit": "ns",
            "range": "± 30788.97995120815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222749.8076923075,
            "unit": "ns",
            "range": "± 26319.300764472624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2570768.379310345,
            "unit": "ns",
            "range": "± 70356.2162693805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2213120.2,
            "unit": "ns",
            "range": "± 38895.22719414569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2719879.25,
            "unit": "ns",
            "range": "± 69832.38909865398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038750.938939145,
            "unit": "ns",
            "range": "± 63779.576983203275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925596.7901041667,
            "unit": "ns",
            "range": "± 8961.449529863756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617202.1922526042,
            "unit": "ns",
            "range": "± 5358.90547182941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627802.6680989584,
            "unit": "ns",
            "range": "± 9195.125021528149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467448.07393973216,
            "unit": "ns",
            "range": "± 386.0751489046862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420498.1611002604,
            "unit": "ns",
            "range": "± 1131.1305565939954"
          }
        ]
      }
    ]
  }
}