window.BENCHMARK_DATA = {
  "lastUpdate": 1735265960608,
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
          "id": "c655e2e08574bfcfd4fa53ac88af3760e024d06c",
          "message": "test: Add test code for evidence query",
          "timestamp": "2024-12-26T11:28:57+09:00",
          "tree_id": "b1b16f957f28dc3a3de7787113cfe5f954b6ff6b",
          "url": "https://github.com/planetarium/libplanet/commit/c655e2e08574bfcfd4fa53ac88af3760e024d06c"
        },
        "date": 1735180611557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10801751.944444444,
            "unit": "ns",
            "range": "± 223990.87467638237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26348268.07142857,
            "unit": "ns",
            "range": "± 225616.92760635883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66173341.86666667,
            "unit": "ns",
            "range": "± 125672.2022689338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134820097.6,
            "unit": "ns",
            "range": "± 174886.78945118425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272154135.0833333,
            "unit": "ns",
            "range": "± 260448.26313124713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13191.864864864865,
            "unit": "ns",
            "range": "± 446.4732891202988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54081.20289855073,
            "unit": "ns",
            "range": "± 2581.0864195694016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106263.61363636363,
            "unit": "ns",
            "range": "± 3509.9917194357313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91340.92105263157,
            "unit": "ns",
            "range": "± 1815.4770513494816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2866676.4516129033,
            "unit": "ns",
            "range": "± 130339.90697273628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2731548.68,
            "unit": "ns",
            "range": "± 175265.04262902844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5034.379310344828,
            "unit": "ns",
            "range": "± 464.1166463588931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26829.566666666666,
            "unit": "ns",
            "range": "± 1903.4021111234522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22532.008771929824,
            "unit": "ns",
            "range": "± 974.4318147150277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29846.666666666668,
            "unit": "ns",
            "range": "± 4910.426897082799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1234.1473684210525,
            "unit": "ns",
            "range": "± 242.16509967028745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4783.252747252747,
            "unit": "ns",
            "range": "± 552.4634244988852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 668252.552631579,
            "unit": "ns",
            "range": "± 29994.65759782109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254735.2564102565,
            "unit": "ns",
            "range": "± 32828.88752360924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1043024.1043956043,
            "unit": "ns",
            "range": "± 55299.64373802845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8630073.68,
            "unit": "ns",
            "range": "± 1263581.0590247142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128429.779411765,
            "unit": "ns",
            "range": "± 95955.20426442866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2216743.846153846,
            "unit": "ns",
            "range": "± 19621.831743605362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2554747.6666666665,
            "unit": "ns",
            "range": "± 73969.50577717509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2246462.2,
            "unit": "ns",
            "range": "± 49215.13001699247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2865021.525,
            "unit": "ns",
            "range": "± 93906.25409144237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3006642.069091797,
            "unit": "ns",
            "range": "± 57175.57637207607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914133.8563802083,
            "unit": "ns",
            "range": "± 5490.364974652701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610970.0471354167,
            "unit": "ns",
            "range": "± 2223.342010035201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635112.2414899555,
            "unit": "ns",
            "range": "± 15641.02570814859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465914.48392159597,
            "unit": "ns",
            "range": "± 672.4668561369726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422022.5491861979,
            "unit": "ns",
            "range": "± 1281.6538468828967"
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
          "id": "344a3cca1fa970db5a68907dfd7f3d40d68df274",
          "message": "chore: Changes",
          "timestamp": "2024-12-26T11:59:27+09:00",
          "tree_id": "7b9007158a6b3706a199a411ccf87c03427f47e7",
          "url": "https://github.com/planetarium/libplanet/commit/344a3cca1fa970db5a68907dfd7f3d40d68df274"
        },
        "date": 1735182438385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10600560.615384616,
            "unit": "ns",
            "range": "± 95530.21418338324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26272196.714285713,
            "unit": "ns",
            "range": "± 200699.35944224504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66831378.28571428,
            "unit": "ns",
            "range": "± 112637.53624274266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133662145.64285715,
            "unit": "ns",
            "range": "± 190123.45127861897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270869075.3333333,
            "unit": "ns",
            "range": "± 512722.8228754606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13094.564516129032,
            "unit": "ns",
            "range": "± 364.2989555739325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54328.194805194806,
            "unit": "ns",
            "range": "± 2757.5073938869286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103903.87719298246,
            "unit": "ns",
            "range": "± 4213.888775187253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91164.28571428571,
            "unit": "ns",
            "range": "± 1506.9836622345174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2831423.3673469387,
            "unit": "ns",
            "range": "± 179426.95489661497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2648168.09,
            "unit": "ns",
            "range": "± 175377.6800468868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5447.336842105263,
            "unit": "ns",
            "range": "± 880.558932875317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27066.0989010989,
            "unit": "ns",
            "range": "± 1790.7886037841604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22209.191176470587,
            "unit": "ns",
            "range": "± 1057.7560204163121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29647.416666666668,
            "unit": "ns",
            "range": "± 5108.305611899254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1460.8052631578948,
            "unit": "ns",
            "range": "± 315.3000622063429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4863.926315789474,
            "unit": "ns",
            "range": "± 788.8339663248354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 703184.4210526316,
            "unit": "ns",
            "range": "± 71710.07687202016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268718.7692307692,
            "unit": "ns",
            "range": "± 37536.06038511258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1028028.9285714285,
            "unit": "ns",
            "range": "± 49810.38178128855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8958495.34,
            "unit": "ns",
            "range": "± 1234181.8526757415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128298.777777778,
            "unit": "ns",
            "range": "± 58105.984729056385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273219.5263157897,
            "unit": "ns",
            "range": "± 48088.41997516245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2546434.25,
            "unit": "ns",
            "range": "± 29894.700047530467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2271759.675,
            "unit": "ns",
            "range": "± 75952.30331558714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2784510.066666667,
            "unit": "ns",
            "range": "± 83159.44552274609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3028513.9518229165,
            "unit": "ns",
            "range": "± 49781.32708881677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922516.4083333333,
            "unit": "ns",
            "range": "± 6463.524550136181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617724.3624348958,
            "unit": "ns",
            "range": "± 5023.945415091894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645943.4686197916,
            "unit": "ns",
            "range": "± 7041.871418399003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 451924.81015625,
            "unit": "ns",
            "range": "± 1165.1188788681718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417343.1068359375,
            "unit": "ns",
            "range": "± 1291.3046234983192"
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
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3fb22a1b7828a5ea39243a2f0c2dcd19e3b1b67e",
          "message": "chore: Changes",
          "timestamp": "2024-12-27T10:58:27+09:00",
          "tree_id": "16cda9125d3440d815d32cd7101ebb6ac4f3f923",
          "url": "https://github.com/planetarium/libplanet/commit/3fb22a1b7828a5ea39243a2f0c2dcd19e3b1b67e"
        },
        "date": 1735265684790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10602661.07142857,
            "unit": "ns",
            "range": "± 187270.64313055843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26277830.07142857,
            "unit": "ns",
            "range": "± 145693.27813355767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66406607.428571425,
            "unit": "ns",
            "range": "± 114168.29588524417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133643782.15384616,
            "unit": "ns",
            "range": "± 152639.47187127263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271465165.7692308,
            "unit": "ns",
            "range": "± 220921.3478960155"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13273.558139534884,
            "unit": "ns",
            "range": "± 482.8275992390374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54197.69512195122,
            "unit": "ns",
            "range": "± 2854.9865340497736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105372.83673469388,
            "unit": "ns",
            "range": "± 4151.32053963424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91465.6,
            "unit": "ns",
            "range": "± 2701.9667498400827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2846168.534883721,
            "unit": "ns",
            "range": "± 154062.90725349422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705311.736842105,
            "unit": "ns",
            "range": "± 137224.6737890693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5489.020833333333,
            "unit": "ns",
            "range": "± 827.2787219383379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27333.21978021978,
            "unit": "ns",
            "range": "± 2142.8465792657817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22618.968421052632,
            "unit": "ns",
            "range": "± 1356.0934227893692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31325.092783505155,
            "unit": "ns",
            "range": "± 6503.80988838221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1332.3578947368421,
            "unit": "ns",
            "range": "± 306.2842135743898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5173.698924731183,
            "unit": "ns",
            "range": "± 706.3159439770722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 666948.632183908,
            "unit": "ns",
            "range": "± 39614.864767083345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271601.1162790698,
            "unit": "ns",
            "range": "± 45107.23792581054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1042494.0804597702,
            "unit": "ns",
            "range": "± 56240.997420614294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8820470.31,
            "unit": "ns",
            "range": "± 1571281.3662439869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123089.1960784313,
            "unit": "ns",
            "range": "± 86271.77929868367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237573.846153846,
            "unit": "ns",
            "range": "± 26690.921280609487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2539675.32,
            "unit": "ns",
            "range": "± 65835.33785052928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270204.245614035,
            "unit": "ns",
            "range": "± 97728.49736647967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2750933.6,
            "unit": "ns",
            "range": "± 59210.957522902354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041317.480729167,
            "unit": "ns",
            "range": "± 37695.922697222355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918580.6641927083,
            "unit": "ns",
            "range": "± 7582.790308194876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616697.9142578125,
            "unit": "ns",
            "range": "± 5366.688111097297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639059.5966145834,
            "unit": "ns",
            "range": "± 13916.404824189834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466763.7857747396,
            "unit": "ns",
            "range": "± 658.2382337721883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418549.4344726562,
            "unit": "ns",
            "range": "± 1044.4391622247485"
          }
        ]
      }
    ]
  }
}