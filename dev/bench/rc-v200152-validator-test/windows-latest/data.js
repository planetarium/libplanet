window.BENCHMARK_DATA = {
  "lastUpdate": 1711424644936,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "e1940cdbab6abe40cbabf296f61b5da7ce7faea1",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T14:49:36+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/e1940cdbab6abe40cbabf296f61b5da7ce7faea1"
        },
        "date": 1711087301415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970094.9494949495,
            "unit": "ns",
            "range": "± 114149.40028960738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675403.3333333333,
            "unit": "ns",
            "range": "± 74508.53202575372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560062,
            "unit": "ns",
            "range": "± 186372.15228535284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526236.363636363,
            "unit": "ns",
            "range": "± 126803.81282931498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34419.17808219178,
            "unit": "ns",
            "range": "± 1731.1410442446604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5136250,
            "unit": "ns",
            "range": "± 26508.27882292334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13375300,
            "unit": "ns",
            "range": "± 53613.58376042739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32418685.714285713,
            "unit": "ns",
            "range": "± 255018.4513901897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65986313.333333336,
            "unit": "ns",
            "range": "± 718091.1878690883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130836642.85714285,
            "unit": "ns",
            "range": "± 1823467.695064833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329486.690848214,
            "unit": "ns",
            "range": "± 7925.673353810216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068856.7758413462,
            "unit": "ns",
            "range": "± 2348.977991332332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746147.6004464285,
            "unit": "ns",
            "range": "± 1378.5161937305618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943349.8177083333,
            "unit": "ns",
            "range": "± 2424.915061066143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619269.0885416666,
            "unit": "ns",
            "range": "± 1369.4989219590586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569563.2486979166,
            "unit": "ns",
            "range": "± 1633.975856889907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2201204,
            "unit": "ns",
            "range": "± 45917.43931594327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2350020,
            "unit": "ns",
            "range": "± 38382.06798567715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767872,
            "unit": "ns",
            "range": "± 73509.30507992394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2832778.16091954,
            "unit": "ns",
            "range": "± 171993.77383626104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7835560,
            "unit": "ns",
            "range": "± 243734.59483206054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163557.8947368421,
            "unit": "ns",
            "range": "± 7749.034574842551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158469.49152542374,
            "unit": "ns",
            "range": "± 6340.027581722015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142537.5,
            "unit": "ns",
            "range": "± 5571.111848997698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806828.5714285714,
            "unit": "ns",
            "range": "± 36907.0647515002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431869.230769231,
            "unit": "ns",
            "range": "± 27374.23924712748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9998.979591836734,
            "unit": "ns",
            "range": "± 1630.0967587472169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49903.260869565216,
            "unit": "ns",
            "range": "± 3583.8603745049118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42651.6129032258,
            "unit": "ns",
            "range": "± 1062.6604875631524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48136.0824742268,
            "unit": "ns",
            "range": "± 9012.666845046133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2056.701030927835,
            "unit": "ns",
            "range": "± 262.56238008600195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9366.326530612245,
            "unit": "ns",
            "range": "± 1490.5159888096193"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "f7dd8105fd12ce3e1087ffad6082c4a982d00246",
          "message": "increase context timeout",
          "timestamp": "2024-03-23T10:50:31+09:00",
          "tree_id": "384d510b58e6353a80c50d262356495c857f2b4f",
          "url": "https://github.com/planetarium/libplanet/commit/f7dd8105fd12ce3e1087ffad6082c4a982d00246"
        },
        "date": 1711159360304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991205,
            "unit": "ns",
            "range": "± 101268.5861479464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732633.8235294118,
            "unit": "ns",
            "range": "± 82783.31472647567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1526027.551020408,
            "unit": "ns",
            "range": "± 125469.7834249488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6892129.72972973,
            "unit": "ns",
            "range": "± 231011.69386570607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35286.95652173913,
            "unit": "ns",
            "range": "± 2748.194907723272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5053503.846153846,
            "unit": "ns",
            "range": "± 51509.151539388535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13477107.692307692,
            "unit": "ns",
            "range": "± 141857.71898595238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33024060,
            "unit": "ns",
            "range": "± 381492.55338173284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66703142.85714286,
            "unit": "ns",
            "range": "± 744972.4493762641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133612327.27272727,
            "unit": "ns",
            "range": "± 3198496.1704766992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358251.3541666665,
            "unit": "ns",
            "range": "± 10426.018890079682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072404.1927083333,
            "unit": "ns",
            "range": "± 2979.143832743888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740451.6531808035,
            "unit": "ns",
            "range": "± 1680.9781859040756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943419.8307291667,
            "unit": "ns",
            "range": "± 12692.969846499314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630749.9790736607,
            "unit": "ns",
            "range": "± 881.9782335939592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581253.8783482143,
            "unit": "ns",
            "range": "± 1231.448990720214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134469.4915254237,
            "unit": "ns",
            "range": "± 92638.38716926801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293342.6666666665,
            "unit": "ns",
            "range": "± 110117.6731444083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2797959.090909091,
            "unit": "ns",
            "range": "± 60299.51953603823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2840487.5,
            "unit": "ns",
            "range": "± 156238.1352276879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8107997.5,
            "unit": "ns",
            "range": "± 258643.7927576289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174826.66666666666,
            "unit": "ns",
            "range": "± 6200.784407857386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168843.661971831,
            "unit": "ns",
            "range": "± 8265.776817601014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142625.8064516129,
            "unit": "ns",
            "range": "± 4232.333299882031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2860257.1428571427,
            "unit": "ns",
            "range": "± 35448.135771438385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421476.6666666665,
            "unit": "ns",
            "range": "± 45141.64163523309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11122.727272727272,
            "unit": "ns",
            "range": "± 1450.3053402429791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59514.28571428572,
            "unit": "ns",
            "range": "± 7649.21665688177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46062.36559139785,
            "unit": "ns",
            "range": "± 3485.1521699201076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59468.131868131866,
            "unit": "ns",
            "range": "± 11565.051559868534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2465.625,
            "unit": "ns",
            "range": "± 485.4359137062167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10820,
            "unit": "ns",
            "range": "± 2215.9768030124687"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "c763fb4efba51247f6c4eb516c9d8d13c92447c1",
          "message": "update context timeout",
          "timestamp": "2024-03-25T12:03:07+09:00",
          "tree_id": "bc5851537e4d36c6aaf26859b9671e2ff0dc5705",
          "url": "https://github.com/planetarium/libplanet/commit/c763fb4efba51247f6c4eb516c9d8d13c92447c1"
        },
        "date": 1711336511158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051195,
            "unit": "ns",
            "range": "± 147671.98251256708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1766446.9696969697,
            "unit": "ns",
            "range": "± 82068.60585875128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607471.7171717172,
            "unit": "ns",
            "range": "± 125505.3662080679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6841520,
            "unit": "ns",
            "range": "± 224135.63881773752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35274.72527472527,
            "unit": "ns",
            "range": "± 2011.8865335021815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5126738.461538462,
            "unit": "ns",
            "range": "± 30086.86143101721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13307733.333333334,
            "unit": "ns",
            "range": "± 211765.62403706962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33196335.714285713,
            "unit": "ns",
            "range": "± 414653.45235443366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65208630.76923077,
            "unit": "ns",
            "range": "± 600486.200763758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132067578.57142857,
            "unit": "ns",
            "range": "± 1253095.5572738019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357092.0052083335,
            "unit": "ns",
            "range": "± 15647.464904395207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065356.9140625,
            "unit": "ns",
            "range": "± 3140.9009490310073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753239.1080729166,
            "unit": "ns",
            "range": "± 2154.8808635932323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988127.265625,
            "unit": "ns",
            "range": "± 6657.227272139336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614315.1157924107,
            "unit": "ns",
            "range": "± 1788.8287826905694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566849.70703125,
            "unit": "ns",
            "range": "± 1263.025376735668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205981.25,
            "unit": "ns",
            "range": "± 62168.327365462836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2363104.6511627906,
            "unit": "ns",
            "range": "± 86749.96899543394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2809495.3125,
            "unit": "ns",
            "range": "± 125046.26499970714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888095.588235294,
            "unit": "ns",
            "range": "± 137525.37614827105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7894735,
            "unit": "ns",
            "range": "± 253571.78071378323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177969.0909090909,
            "unit": "ns",
            "range": "± 7579.843463820803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173265.7894736842,
            "unit": "ns",
            "range": "± 8056.228276004084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145917.24137931035,
            "unit": "ns",
            "range": "± 5790.468209140322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2890546.153846154,
            "unit": "ns",
            "range": "± 65179.91856864647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2497436,
            "unit": "ns",
            "range": "± 66236.86586788358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11993.548387096775,
            "unit": "ns",
            "range": "± 1036.1725611294617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58407.44680851064,
            "unit": "ns",
            "range": "± 5702.107502516812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47857.44680851064,
            "unit": "ns",
            "range": "± 3411.759844871225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66404.16666666667,
            "unit": "ns",
            "range": "± 12142.642707822071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2956.25,
            "unit": "ns",
            "range": "± 692.7918347640866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12898.979591836734,
            "unit": "ns",
            "range": "± 2239.2236733683003"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "30a335fdf7d17ea6fad0fc66dc32fd9a2414e3b5",
          "message": "update context timeout",
          "timestamp": "2024-03-26T12:30:40+09:00",
          "tree_id": "b0ce734e7708dc5275658fb9e27bbb876b4f6aab",
          "url": "https://github.com/planetarium/libplanet/commit/30a335fdf7d17ea6fad0fc66dc32fd9a2414e3b5"
        },
        "date": 1711424583736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970602.0618556701,
            "unit": "ns",
            "range": "± 111057.67362368289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752416.1290322582,
            "unit": "ns",
            "range": "± 74739.19285558541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518759.5959595959,
            "unit": "ns",
            "range": "± 127137.76387807331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6831915,
            "unit": "ns",
            "range": "± 241173.84574575012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34871.739130434784,
            "unit": "ns",
            "range": "± 2311.7153179877096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5079484.615384615,
            "unit": "ns",
            "range": "± 62818.639035372384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13360246.666666666,
            "unit": "ns",
            "range": "± 92741.9142926577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32812846.666666668,
            "unit": "ns",
            "range": "± 381521.6355345426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66879135.71428572,
            "unit": "ns",
            "range": "± 574118.093731116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129319973.33333333,
            "unit": "ns",
            "range": "± 764608.6239439913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3449233.173076923,
            "unit": "ns",
            "range": "± 9455.15150167222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041442.4525669643,
            "unit": "ns",
            "range": "± 3767.3934981810135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730186.3688151041,
            "unit": "ns",
            "range": "± 1531.4804908424958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922469.365985577,
            "unit": "ns",
            "range": "± 3330.875051505646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616845.2604166666,
            "unit": "ns",
            "range": "± 1059.6768995894436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566386.3071986607,
            "unit": "ns",
            "range": "± 1284.5727128594922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2088741.1764705882,
            "unit": "ns",
            "range": "± 44847.18238943161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284337.8048780486,
            "unit": "ns",
            "range": "± 80744.5267343922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801727.272727273,
            "unit": "ns",
            "range": "± 68161.92333119563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2918830,
            "unit": "ns",
            "range": "± 102806.68490686032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7790326.470588235,
            "unit": "ns",
            "range": "± 225672.94155658566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171887.07865168538,
            "unit": "ns",
            "range": "± 9812.542785343572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159261.66666666666,
            "unit": "ns",
            "range": "± 6475.588885377867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139621.05263157896,
            "unit": "ns",
            "range": "± 4781.165632768421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796014.285714286,
            "unit": "ns",
            "range": "± 25473.81331554357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481869.230769231,
            "unit": "ns",
            "range": "± 26295.670892607162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10311.95652173913,
            "unit": "ns",
            "range": "± 1322.9871620903584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53518.47826086957,
            "unit": "ns",
            "range": "± 5285.683116732523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44533.333333333336,
            "unit": "ns",
            "range": "± 2847.638485450747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54261.05263157895,
            "unit": "ns",
            "range": "± 11103.960331809185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2547.3684210526317,
            "unit": "ns",
            "range": "± 401.8155883950592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9932.608695652174,
            "unit": "ns",
            "range": "± 1467.794090991624"
          }
        ]
      }
    ]
  }
}