window.BENCHMARK_DATA = {
  "lastUpdate": 1678783750709,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f40550f24d6e65b9022bce3b49fb4398fca7dca5",
          "message": "Merge pull request #2909 from colibrishin/benchmark/fix/0.48-maintenance\n\nci/bench: cherrypick of bench pr update to 0.48-maintenance",
          "timestamp": "2023-03-10T11:50:41+09:00",
          "tree_id": "b8377ad036a6e981a456e455b5c1b38f0ac2e7e7",
          "url": "https://github.com/planetarium/libplanet/commit/f40550f24d6e65b9022bce3b49fb4398fca7dca5"
        },
        "date": 1678417413254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94012.28888888888,
            "unit": "ns",
            "range": "± 5438.269939794953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199333.21126760563,
            "unit": "ns",
            "range": "± 9691.807693563367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169296.21739130435,
            "unit": "ns",
            "range": "± 4252.689437355247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3842881.6,
            "unit": "ns",
            "range": "± 51187.333303129926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9704122,
            "unit": "ns",
            "range": "± 122007.59170389609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17804.712643678162,
            "unit": "ns",
            "range": "± 1516.683490981234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48958.86956521739,
            "unit": "ns",
            "range": "± 4422.882281398353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40150.444444444445,
            "unit": "ns",
            "range": "± 825.6977243677882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94847.8163265306,
            "unit": "ns",
            "range": "± 15742.359204602753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5487.857142857143,
            "unit": "ns",
            "range": "± 481.6676357616382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18369.21111111111,
            "unit": "ns",
            "range": "± 1218.798049419351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6052692.658333333,
            "unit": "ns",
            "range": "± 33263.23195572819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891616.1711774555,
            "unit": "ns",
            "range": "± 3932.7847043784773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371491.0783854167,
            "unit": "ns",
            "range": "± 2270.85370165272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562704.56640625,
            "unit": "ns",
            "range": "± 7910.727258128828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824279.9416666667,
            "unit": "ns",
            "range": "± 1420.9856506455383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759457.3887369792,
            "unit": "ns",
            "range": "± 561.7024922285844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111406.0985915493,
            "unit": "ns",
            "range": "± 5478.339415122406"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5024502.548098644,
            "unit": "ns",
            "range": "± 265752.7438018439"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5675555.682926829,
            "unit": "ns",
            "range": "± 197901.7599669643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27091873.315789472,
            "unit": "ns",
            "range": "± 601262.4677787981"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6702171.461538462,
            "unit": "ns",
            "range": "± 41607.44939434"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30358016.36,
            "unit": "ns",
            "range": "± 797968.6036205665"
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
          "id": "b553911468123a8bca1195ba2e674552abf06cc3",
          "message": "Merge pull request #2931 from greymistcube/port/0.47.1-to-0.48.1\n\n🔀🚀 Port 0.47.1 to 0.48.1 and release 0.48.1",
          "timestamp": "2023-03-14T17:37:17+09:00",
          "tree_id": "7177f2855a73fc46fa2a4893941bbfd749f80bb2",
          "url": "https://github.com/planetarium/libplanet/commit/b553911468123a8bca1195ba2e674552abf06cc3"
        },
        "date": 1678783732143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101602.8350515464,
            "unit": "ns",
            "range": "± 7780.165855773378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211548.8,
            "unit": "ns",
            "range": "± 13340.685125677464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189307.671875,
            "unit": "ns",
            "range": "± 8779.845889479266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979477.0714285714,
            "unit": "ns",
            "range": "± 47596.732139708096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10261422.533333333,
            "unit": "ns",
            "range": "± 127500.96526125746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20672.40860215054,
            "unit": "ns",
            "range": "± 2508.1264323783125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54747.294117647056,
            "unit": "ns",
            "range": "± 3281.63658293617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42463.971830985916,
            "unit": "ns",
            "range": "± 2011.4120198211222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105599.5,
            "unit": "ns",
            "range": "± 14977.336788768907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6761.418367346939,
            "unit": "ns",
            "range": "± 809.6737401153371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22107.729166666668,
            "unit": "ns",
            "range": "± 2796.2559685527117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207353.418526785,
            "unit": "ns",
            "range": "± 41829.288284688075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874858.6110677083,
            "unit": "ns",
            "range": "± 2555.13160603723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370294.8178013393,
            "unit": "ns",
            "range": "± 3530.2779894523455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637435.47578125,
            "unit": "ns",
            "range": "± 3046.1334746472553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828626.9243489583,
            "unit": "ns",
            "range": "± 790.9015018916958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767324.8776041666,
            "unit": "ns",
            "range": "± 384.4717841528424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110201.66666666667,
            "unit": "ns",
            "range": "± 2360.2693764508667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5075568.274753289,
            "unit": "ns",
            "range": "± 289081.8818300487"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6268176.315789473,
            "unit": "ns",
            "range": "± 488971.5121461742"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27930616.85714286,
            "unit": "ns",
            "range": "± 658592.213786064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6894042.5,
            "unit": "ns",
            "range": "± 276492.647529897"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31560497.666666668,
            "unit": "ns",
            "range": "± 802650.1751268116"
          }
        ]
      }
    ]
  }
}