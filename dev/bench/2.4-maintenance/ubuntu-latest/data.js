window.BENCHMARK_DATA = {
  "lastUpdate": 1689323818273,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387275994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604834.5,
            "unit": "ns",
            "range": "± 85331.87393911807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20434145.8,
            "unit": "ns",
            "range": "± 366231.19730207894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50753724.4,
            "unit": "ns",
            "range": "± 491827.74864519393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103360155.5,
            "unit": "ns",
            "range": "± 212194.62825860528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207953784.07692307,
            "unit": "ns",
            "range": "± 590133.9680554834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46580.89887640449,
            "unit": "ns",
            "range": "± 2779.5362801804968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294840.5319148936,
            "unit": "ns",
            "range": "± 11338.058832114122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265007.26785714284,
            "unit": "ns",
            "range": "± 10685.27895495152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235218.8125,
            "unit": "ns",
            "range": "± 4508.589864081673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127668.3333333335,
            "unit": "ns",
            "range": "± 35752.205729490444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936574.8666666667,
            "unit": "ns",
            "range": "± 36163.03199572472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20168.42105263158,
            "unit": "ns",
            "range": "± 1351.3006467289008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86281.96721311475,
            "unit": "ns",
            "range": "± 3137.329448045546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71765.1,
            "unit": "ns",
            "range": "± 1659.5313510937833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90225.02083333333,
            "unit": "ns",
            "range": "± 8250.18156224987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5126.373626373626,
            "unit": "ns",
            "range": "± 542.7983388239472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.967391304348,
            "unit": "ns",
            "range": "± 1764.8468317631216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404806.112244898,
            "unit": "ns",
            "range": "± 118600.77624629774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700896.117647059,
            "unit": "ns",
            "range": "± 54497.803517529894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1859631.5833333333,
            "unit": "ns",
            "range": "± 106709.11983140421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4959310.907407408,
            "unit": "ns",
            "range": "± 206495.59853002746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6023657.721875,
            "unit": "ns",
            "range": "± 32886.15886920263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887541.9790364583,
            "unit": "ns",
            "range": "± 7996.395148923393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366666.6983816964,
            "unit": "ns",
            "range": "± 2135.299654838433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568533.10859375,
            "unit": "ns",
            "range": "± 8094.934013897683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820997.6015625,
            "unit": "ns",
            "range": "± 1319.1837927506451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738675.2580729167,
            "unit": "ns",
            "range": "± 1546.7721064786476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215367.2666666666,
            "unit": "ns",
            "range": "± 43876.43944479065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3408877.933333333,
            "unit": "ns",
            "range": "± 50765.00406701264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4418401.866666666,
            "unit": "ns",
            "range": "± 64735.42903328755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952715.975,
            "unit": "ns",
            "range": "± 140427.90927503808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6183408.2105263155,
            "unit": "ns",
            "range": "± 133463.88397972393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37086a72265685660e5a23d42ee195af04bd0226",
          "message": "Merge pull request #3264 from OnedgeLee/prepare/2.4.1\n\n🔧 Prepare 2.4.1",
          "timestamp": "2023-07-03T21:30:42+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/planetarium/libplanet/commit/37086a72265685660e5a23d42ee195af04bd0226"
        },
        "date": 1688388396638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10833166.458333334,
            "unit": "ns",
            "range": "± 270533.2462872056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28218918.333333332,
            "unit": "ns",
            "range": "± 169285.54638440537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70151297.8,
            "unit": "ns",
            "range": "± 541839.661242301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141508990.07142857,
            "unit": "ns",
            "range": "± 1171830.2960917733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278646038.85714287,
            "unit": "ns",
            "range": "± 1875553.7019180746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59076.14634146341,
            "unit": "ns",
            "range": "± 3149.9751326549344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358082.53571428574,
            "unit": "ns",
            "range": "± 9869.809992850598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341150.5789473684,
            "unit": "ns",
            "range": "± 7252.754988552737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310221.8095238095,
            "unit": "ns",
            "range": "± 7249.934507421757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5596583.9,
            "unit": "ns",
            "range": "± 38231.39745549461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5113394.933333334,
            "unit": "ns",
            "range": "± 62235.61869387597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23713.441176470587,
            "unit": "ns",
            "range": "± 1151.0833363551121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112720.21176470588,
            "unit": "ns",
            "range": "± 6096.230953267292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98425.43333333333,
            "unit": "ns",
            "range": "± 4394.32227036425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113770.5054945055,
            "unit": "ns",
            "range": "± 11511.679644192893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6558.724489795918,
            "unit": "ns",
            "range": "± 815.2584534931269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23739.978723404256,
            "unit": "ns",
            "range": "± 2004.1705064433206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1879266.3902439023,
            "unit": "ns",
            "range": "± 96654.6110362143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3486229,
            "unit": "ns",
            "range": "± 69154.8647366908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352453.338983051,
            "unit": "ns",
            "range": "± 104038.82888326044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6152225.966666667,
            "unit": "ns",
            "range": "± 182828.49990548112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7616120.677455357,
            "unit": "ns",
            "range": "± 14212.329205624734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2338331.925911458,
            "unit": "ns",
            "range": "± 3603.5585465652002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1721721.7221354167,
            "unit": "ns",
            "range": "± 6884.257504691997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3307775.8035714286,
            "unit": "ns",
            "range": "± 4614.667266035885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058585.1569475445,
            "unit": "ns",
            "range": "± 1351.8798398909505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949803.5407366072,
            "unit": "ns",
            "range": "± 395.3780270154809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4458626.3,
            "unit": "ns",
            "range": "± 101848.52784823466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4609716.05,
            "unit": "ns",
            "range": "± 100658.04370006247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5719927.857142857,
            "unit": "ns",
            "range": "± 84839.13693650984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5076747.2727272725,
            "unit": "ns",
            "range": "± 113583.34743856888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8103695.590909091,
            "unit": "ns",
            "range": "± 197587.40650024064"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65c0ba956f666688c1ec9d0d81756d8a9a7af778",
          "message": "Merge pull request #3298 from greymistcube/chore/rocksdb-optimization\n\n⚡ `RocksDBStore` Concat optimization",
          "timestamp": "2023-07-14T16:34:29+09:00",
          "tree_id": "75da47c8ef65a8990e003614dab5a1d38ddb5f49",
          "url": "https://github.com/planetarium/libplanet/commit/65c0ba956f666688c1ec9d0d81756d8a9a7af778"
        },
        "date": 1689320875729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302636.76086956525,
            "unit": "ns",
            "range": "± 10309.451226228792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285328.63636363635,
            "unit": "ns",
            "range": "± 11041.074653082893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271334.51020408166,
            "unit": "ns",
            "range": "± 19761.688434398646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4379160.933333334,
            "unit": "ns",
            "range": "± 17068.28170055568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959134.5833333335,
            "unit": "ns",
            "range": "± 20353.66932055756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20839.375,
            "unit": "ns",
            "range": "± 1900.8734349739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100657.07368421053,
            "unit": "ns",
            "range": "± 6733.757150867063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89468.03191489361,
            "unit": "ns",
            "range": "± 11444.700673897047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101428.71134020618,
            "unit": "ns",
            "range": "± 13859.28960793593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5586.13829787234,
            "unit": "ns",
            "range": "± 716.721487291583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21052.916666666668,
            "unit": "ns",
            "range": "± 2108.7586853365788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460009.255319149,
            "unit": "ns",
            "range": "± 99681.88781943257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2846808.46,
            "unit": "ns",
            "range": "± 114888.12739324696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012410.51,
            "unit": "ns",
            "range": "± 305515.10392726376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5036223.757575758,
            "unit": "ns",
            "range": "± 138273.1222825025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6191914.363020834,
            "unit": "ns",
            "range": "± 20033.55725315316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018711.260044643,
            "unit": "ns",
            "range": "± 2628.969484769848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394341.0953125,
            "unit": "ns",
            "range": "± 10387.343954672522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663908.806510417,
            "unit": "ns",
            "range": "± 6492.974559512247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817313.9228515625,
            "unit": "ns",
            "range": "± 489.96202124157963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753206.9710518973,
            "unit": "ns",
            "range": "± 617.0530643769466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484455.6,
            "unit": "ns",
            "range": "± 92971.87825134723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639221.727272727,
            "unit": "ns",
            "range": "± 70260.28798226385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505006.352941177,
            "unit": "ns",
            "range": "± 92029.4287632638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3997087.875,
            "unit": "ns",
            "range": "± 76848.0551511661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6563569.161290322,
            "unit": "ns",
            "range": "± 191309.98296414065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8120183.571428572,
            "unit": "ns",
            "range": "± 42260.14361931671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20111248.933333334,
            "unit": "ns",
            "range": "± 115945.17100427048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51550700.14285714,
            "unit": "ns",
            "range": "± 174187.2822730475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102316379.46153846,
            "unit": "ns",
            "range": "± 214324.10455608869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204650714.93333334,
            "unit": "ns",
            "range": "± 1221578.8251802586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50255.27272727273,
            "unit": "ns",
            "range": "± 3278.767271600199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b914d88509225b995a693d4b9d3a4e33cdfa6c55",
          "message": "Merge pull request #3297 from greymistcube/chore/optimization\n\n⚡ Faster `Hex` for netstandard2.1 and up",
          "timestamp": "2023-07-14T16:50:04+09:00",
          "tree_id": "131e2ac4e3ab8806b23bbe508d3fb4215ff40af3",
          "url": "https://github.com/planetarium/libplanet/commit/b914d88509225b995a693d4b9d3a4e33cdfa6c55"
        },
        "date": 1689321747784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289767.1785714286,
            "unit": "ns",
            "range": "± 12359.649265554928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278642.6037735849,
            "unit": "ns",
            "range": "± 10885.968269607833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236299.36363636365,
            "unit": "ns",
            "range": "± 7492.00618917499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256116.785714285,
            "unit": "ns",
            "range": "± 29533.695752423253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959781.066666667,
            "unit": "ns",
            "range": "± 30654.32122525228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19197.924731182797,
            "unit": "ns",
            "range": "± 1599.440141428292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86830.46575342465,
            "unit": "ns",
            "range": "± 4278.5476964937525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72213.53333333334,
            "unit": "ns",
            "range": "± 1316.810424942822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91701.38775510204,
            "unit": "ns",
            "range": "± 11939.539029621224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4892.80412371134,
            "unit": "ns",
            "range": "± 574.1386599212348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19446.322580645163,
            "unit": "ns",
            "range": "± 1498.91283182824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408918.3368421053,
            "unit": "ns",
            "range": "± 88310.73793033451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2673507.2,
            "unit": "ns",
            "range": "± 77677.57013955964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1802532.1477272727,
            "unit": "ns",
            "range": "± 94714.02391452585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4888396.653846154,
            "unit": "ns",
            "range": "± 126429.574141794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6155285.119419643,
            "unit": "ns",
            "range": "± 15179.391994902451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989783.1448317308,
            "unit": "ns",
            "range": "± 8913.989641480759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346823.7582310268,
            "unit": "ns",
            "range": "± 437.16605567362575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550176.776141827,
            "unit": "ns",
            "range": "± 763.7473437280403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820948.691266741,
            "unit": "ns",
            "range": "± 343.5124168684341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744478.7990885417,
            "unit": "ns",
            "range": "± 470.74362346668846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400400.75,
            "unit": "ns",
            "range": "± 65367.90150269983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3439493.6666666665,
            "unit": "ns",
            "range": "± 45305.95025832174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4425753,
            "unit": "ns",
            "range": "± 67704.38166709062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3898409.25,
            "unit": "ns",
            "range": "± 76398.0715633582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6310201.846153846,
            "unit": "ns",
            "range": "± 89051.27110813388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7601303.2,
            "unit": "ns",
            "range": "± 59774.69067160209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20039832.066666666,
            "unit": "ns",
            "range": "± 106283.11093050799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50945064.64285714,
            "unit": "ns",
            "range": "± 264244.00837588526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100017279.5,
            "unit": "ns",
            "range": "± 245360.67617465643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200568339.57142857,
            "unit": "ns",
            "range": "± 408434.4799572583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46152.52380952381,
            "unit": "ns",
            "range": "± 2383.45774173892"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec6313b2e9cdf179e04316d728f6157f628e56a1",
          "message": "Merge pull request #3302 from greymistcube/bump/bencodex-to-0.11.0\n\n⬆️ Bump Bencodex to 0.11.0",
          "timestamp": "2023-07-14T17:03:05+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/planetarium/libplanet/commit/ec6313b2e9cdf179e04316d728f6157f628e56a1"
        },
        "date": 1689322784779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305635.8367346939,
            "unit": "ns",
            "range": "± 23819.152976748996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303087.52040816325,
            "unit": "ns",
            "range": "± 25365.74340319019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274307.57575757575,
            "unit": "ns",
            "range": "± 24570.53965256323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4859666.49,
            "unit": "ns",
            "range": "± 341258.2592133458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4451846.82,
            "unit": "ns",
            "range": "± 313245.61479195766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20868.072164948455,
            "unit": "ns",
            "range": "± 2106.966026894589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99853.4247311828,
            "unit": "ns",
            "range": "± 9333.31985326783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85420.66292134831,
            "unit": "ns",
            "range": "± 7162.487193299387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104464.8947368421,
            "unit": "ns",
            "range": "± 14300.071171131985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5722.715789473684,
            "unit": "ns",
            "range": "± 857.4903840805408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20446.57608695652,
            "unit": "ns",
            "range": "± 2021.4590815356569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632316.471264368,
            "unit": "ns",
            "range": "± 107100.60289473101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3154773.12,
            "unit": "ns",
            "range": "± 238807.59255320203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2025949.0303030303,
            "unit": "ns",
            "range": "± 198931.46895963408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5816015.83,
            "unit": "ns",
            "range": "± 445357.0675398767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6547284.22421875,
            "unit": "ns",
            "range": "± 115712.08645318964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2122991.2641927083,
            "unit": "ns",
            "range": "± 25061.144882065037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1510438.7748161764,
            "unit": "ns",
            "range": "± 30955.144896870162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954491.67578125,
            "unit": "ns",
            "range": "± 27558.295362831264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938523.748203125,
            "unit": "ns",
            "range": "± 24705.745796177638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839153.7006510417,
            "unit": "ns",
            "range": "± 13649.390019975308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3745291.32,
            "unit": "ns",
            "range": "± 300439.0971099468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3888407.35,
            "unit": "ns",
            "range": "± 301254.62332826375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4706184.36,
            "unit": "ns",
            "range": "± 318019.212069973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4334188.5,
            "unit": "ns",
            "range": "± 353568.307744553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7440544.47,
            "unit": "ns",
            "range": "± 524032.47226286307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8858521.775510205,
            "unit": "ns",
            "range": "± 544658.6709956172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23985524.07,
            "unit": "ns",
            "range": "± 1456468.6242059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60151573.31034483,
            "unit": "ns",
            "range": "± 2612108.8096348927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117526641,
            "unit": "ns",
            "range": "± 4350197.428894337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244775966.04347825,
            "unit": "ns",
            "range": "± 9394808.064666187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53293.77272727273,
            "unit": "ns",
            "range": "± 4100.130266299713"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "486af198bfe709e115b0c35089053641ed291098",
          "message": "Merge pull request #3306 from greymistcube/prepare/2.4.2\n\n🔧 Prepare 2.4.2",
          "timestamp": "2023-07-14T17:24:19+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/planetarium/libplanet/commit/486af198bfe709e115b0c35089053641ed291098"
        },
        "date": 1689323791034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287955.0444444445,
            "unit": "ns",
            "range": "± 10934.563297085979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272532.94444444444,
            "unit": "ns",
            "range": "± 5620.66706813788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239026.20588235295,
            "unit": "ns",
            "range": "± 6809.429423787291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296249.866666666,
            "unit": "ns",
            "range": "± 38329.21013659475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3948560.4,
            "unit": "ns",
            "range": "± 44874.43216481169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20813.935483870966,
            "unit": "ns",
            "range": "± 1896.4627932620267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92109.31578947368,
            "unit": "ns",
            "range": "± 5555.787638327696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78489.95,
            "unit": "ns",
            "range": "± 1732.4196791588467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92856.97959183673,
            "unit": "ns",
            "range": "± 11288.24607286894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4925.530612244898,
            "unit": "ns",
            "range": "± 611.8008604665921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20292.677083333332,
            "unit": "ns",
            "range": "± 2262.7008895741883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362822.6630434783,
            "unit": "ns",
            "range": "± 79479.97358313175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2634231.564102564,
            "unit": "ns",
            "range": "± 91456.62881871352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1780022.9325842697,
            "unit": "ns",
            "range": "± 97851.53385019732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4786152.25,
            "unit": "ns",
            "range": "± 135853.55404656637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079419.213942308,
            "unit": "ns",
            "range": "± 8366.432940848348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992809.3247395833,
            "unit": "ns",
            "range": "± 2454.092362211161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369836.4515904018,
            "unit": "ns",
            "range": "± 802.6488875071005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549213.630859375,
            "unit": "ns",
            "range": "± 2007.2862017041386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804995.5053013393,
            "unit": "ns",
            "range": "± 535.8629633958315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738491.5986979167,
            "unit": "ns",
            "range": "± 335.55408092917264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365641.066666667,
            "unit": "ns",
            "range": "± 49571.37363505944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507455.1304347827,
            "unit": "ns",
            "range": "± 77205.61974853218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394605.4375,
            "unit": "ns",
            "range": "± 86323.383902601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931577.277777778,
            "unit": "ns",
            "range": "± 80050.32144169255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6445579.966666667,
            "unit": "ns",
            "range": "± 186447.3944100834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7658831.466666667,
            "unit": "ns",
            "range": "± 44931.86298777718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19668629.6,
            "unit": "ns",
            "range": "± 104458.76983069855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50010655.93333333,
            "unit": "ns",
            "range": "± 258859.90609082818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101576587.33333333,
            "unit": "ns",
            "range": "± 204221.04183338978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201631170.4,
            "unit": "ns",
            "range": "± 1094952.966373951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47585.44736842105,
            "unit": "ns",
            "range": "± 2421.036997623053"
          }
        ]
      }
    ]
  }
}