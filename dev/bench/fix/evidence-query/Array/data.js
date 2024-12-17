window.BENCHMARK_DATA = {
  "lastUpdate": 1733823064102,
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
      },
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
          "id": "06aafad226f4675eaa37563c63a49445551e0060",
          "message": "wip: evidence",
          "timestamp": "2024-12-10T18:21:09+09:00",
          "tree_id": "816a26fa78c41eec5017845f94d0f8e07d5a5f10",
          "url": "https://github.com/planetarium/libplanet/commit/06aafad226f4675eaa37563c63a49445551e0060"
        },
        "date": 1733822955099,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10561278.615384616,
            "unit": "ns",
            "range": "± 92059.93520486029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26366287.692307692,
            "unit": "ns",
            "range": "± 200733.9379524485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66216214.06666667,
            "unit": "ns",
            "range": "± 129764.78434705656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133731894.26666667,
            "unit": "ns",
            "range": "± 223445.88479714937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269907190.78571427,
            "unit": "ns",
            "range": "± 381300.5666533704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12818.804347826086,
            "unit": "ns",
            "range": "± 466.36627806265074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54153.4756097561,
            "unit": "ns",
            "range": "± 2868.6831020763716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105662.14285714286,
            "unit": "ns",
            "range": "± 3866.6743798232974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94355.71052631579,
            "unit": "ns",
            "range": "± 2861.8072999502187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2848203.25,
            "unit": "ns",
            "range": "± 144933.57558515097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2710299.79,
            "unit": "ns",
            "range": "± 173884.47790097547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5179.569892473119,
            "unit": "ns",
            "range": "± 697.5066525761828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27310.274725274725,
            "unit": "ns",
            "range": "± 1896.6853312844614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22817.139784946237,
            "unit": "ns",
            "range": "± 1847.1010105815158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30389.25,
            "unit": "ns",
            "range": "± 5584.1468405515725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1476.7604166666667,
            "unit": "ns",
            "range": "± 297.4128884331349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4745.191011235955,
            "unit": "ns",
            "range": "± 529.6228477203139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 670464.8918918918,
            "unit": "ns",
            "range": "± 30607.574399009343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271476.025,
            "unit": "ns",
            "range": "± 44837.83636788472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1035586.1492537314,
            "unit": "ns",
            "range": "± 45439.12893499748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8617455.74,
            "unit": "ns",
            "range": "± 1353711.345517858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114293.8260869565,
            "unit": "ns",
            "range": "± 46909.217690471196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226576.3846153845,
            "unit": "ns",
            "range": "± 19108.496729371735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2510577.6428571427,
            "unit": "ns",
            "range": "± 29306.906648846034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2289510.362745098,
            "unit": "ns",
            "range": "± 91849.2164007989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2836233.3469387754,
            "unit": "ns",
            "range": "± 112665.0178940412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037675.759635417,
            "unit": "ns",
            "range": "± 45897.12812005622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920512.7527994792,
            "unit": "ns",
            "range": "± 7992.386563052743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614124.3302734375,
            "unit": "ns",
            "range": "± 5347.335361169786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651681.0372395834,
            "unit": "ns",
            "range": "± 2471.6019189390213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465843.05550130206,
            "unit": "ns",
            "range": "± 1157.9453415184594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420225.1749023438,
            "unit": "ns",
            "range": "± 878.422310998798"
          }
        ]
      }
    ]
  }
}