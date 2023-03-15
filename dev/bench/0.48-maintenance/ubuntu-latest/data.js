window.BENCHMARK_DATA = {
  "lastUpdate": 1678846441616,
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
          "id": "3f5dcef6b1e6a68c8739fde60af639cf5709804a",
          "message": "Merge pull request #2932 from greymistcube/prepare/0.48.2\n\n🔧 Prepare 0.48.2",
          "timestamp": "2023-03-15T10:59:40+09:00",
          "tree_id": "2707579eaddea6b47f6fd7f83e96f64d1a52c34d",
          "url": "https://github.com/planetarium/libplanet/commit/3f5dcef6b1e6a68c8739fde60af639cf5709804a"
        },
        "date": 1678846421480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90779.88775510204,
            "unit": "ns",
            "range": "± 10256.507830844688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242013.46153846153,
            "unit": "ns",
            "range": "± 3679.2718168904153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172879.03921568627,
            "unit": "ns",
            "range": "± 6943.3062699575175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3874451.1764705884,
            "unit": "ns",
            "range": "± 75059.56218666887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9793847.58974359,
            "unit": "ns",
            "range": "± 337563.68694153713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20844.105263157893,
            "unit": "ns",
            "range": "± 3454.1427623716345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52023.70114942529,
            "unit": "ns",
            "range": "± 3507.4690507840505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53028.47457627119,
            "unit": "ns",
            "range": "± 2357.8942340932254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110416.1237113402,
            "unit": "ns",
            "range": "± 19505.22423996204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6787.427083333333,
            "unit": "ns",
            "range": "± 907.9753734753601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17388.14893617021,
            "unit": "ns",
            "range": "± 2377.9430252516445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5906241.822544643,
            "unit": "ns",
            "range": "± 36358.29348635183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867976.8356770833,
            "unit": "ns",
            "range": "± 6119.343829593898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351995.7147135416,
            "unit": "ns",
            "range": "± 5048.838856682673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549878.835379464,
            "unit": "ns",
            "range": "± 3513.4636580520896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803946.6921223958,
            "unit": "ns",
            "range": "± 1810.8546253073932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735339.2742745535,
            "unit": "ns",
            "range": "± 1255.8332855127287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119899.71578947369,
            "unit": "ns",
            "range": "± 8028.530819551775"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4734891.129085848,
            "unit": "ns",
            "range": "± 257926.25818465446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6086954.571428572,
            "unit": "ns",
            "range": "± 105205.49627621777"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26206930.257142857,
            "unit": "ns",
            "range": "± 759603.6505995332"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6782806.731707317,
            "unit": "ns",
            "range": "± 242245.01776703523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28865822.55172414,
            "unit": "ns",
            "range": "± 603924.4938119681"
          }
        ]
      }
    ]
  }
}