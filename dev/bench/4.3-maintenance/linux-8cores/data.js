window.BENCHMARK_DATA = {
  "lastUpdate": 1713418926510,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565608492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5767401.233333333,
            "unit": "ns",
            "range": "± 48590.625776505294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14468820.866666667,
            "unit": "ns",
            "range": "± 78772.28857632854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37524071.53333333,
            "unit": "ns",
            "range": "± 238113.04190802996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79237232,
            "unit": "ns",
            "range": "± 333503.3087882799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153275032.2,
            "unit": "ns",
            "range": "± 362887.6106522317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198101.83333333334,
            "unit": "ns",
            "range": "± 7621.5527214948015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775063.0303030303,
            "unit": "ns",
            "range": "± 261784.27690123627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2839103.1774193547,
            "unit": "ns",
            "range": "± 128671.35022699689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2439934.5625,
            "unit": "ns",
            "range": "± 257862.764845212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8490695.708333334,
            "unit": "ns",
            "range": "± 216158.9208428713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2839765.511627907,
            "unit": "ns",
            "range": "± 96552.22683860747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2831692.0849056602,
            "unit": "ns",
            "range": "± 102133.84253054982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3892063.1333333333,
            "unit": "ns",
            "range": "± 83019.86969134447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3478786.222222222,
            "unit": "ns",
            "range": "± 177736.11205285083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9340131.631578946,
            "unit": "ns",
            "range": "± 205137.2815493757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200979.66129032258,
            "unit": "ns",
            "range": "± 8194.731538613842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193755.88888888888,
            "unit": "ns",
            "range": "± 5795.589104915555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168504.76,
            "unit": "ns",
            "range": "± 3531.3031857941623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3411726.7333333334,
            "unit": "ns",
            "range": "± 47655.822789885315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2852885.285714286,
            "unit": "ns",
            "range": "± 27299.292147567525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12095.065217391304,
            "unit": "ns",
            "range": "± 849.6407230925992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60082.34444444445,
            "unit": "ns",
            "range": "± 3588.987682100924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51702.51282051282,
            "unit": "ns",
            "range": "± 1793.8850352149525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79539.4375,
            "unit": "ns",
            "range": "± 9513.020940467115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.6129032258063,
            "unit": "ns",
            "range": "± 362.48259425253076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12636.672043010753,
            "unit": "ns",
            "range": "± 1308.9038113898137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3806019.809795673,
            "unit": "ns",
            "range": "± 2610.8990908414917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216773.1377604166,
            "unit": "ns",
            "range": "± 2360.6630676233376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770756.6998046875,
            "unit": "ns",
            "range": "± 1455.0739124940333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959487.8731770834,
            "unit": "ns",
            "range": "± 4528.11018800783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617646.7278878348,
            "unit": "ns",
            "range": "± 809.5788283301836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586699.2317940848,
            "unit": "ns",
            "range": "± 361.9642027725689"
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
          "id": "874b142ae7f1399060e48180fbbcdb8621b5b584",
          "message": "Merge pull request #3734 from greymistcube/prepare/4.3.1\n\n🔧 Prepare 4.3.1",
          "timestamp": "2024-04-08T18:52:58+09:00",
          "tree_id": "561996de58eafd7fac18dc1e3e932ec689e9634f",
          "url": "https://github.com/planetarium/libplanet/commit/874b142ae7f1399060e48180fbbcdb8621b5b584"
        },
        "date": 1712570645949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5711342.133333334,
            "unit": "ns",
            "range": "± 22025.109968483914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14711723.233333332,
            "unit": "ns",
            "range": "± 48198.33606711019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37444190.4,
            "unit": "ns",
            "range": "± 163628.91737875325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77825377.96666667,
            "unit": "ns",
            "range": "± 234096.79428935453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152537729.64285713,
            "unit": "ns",
            "range": "± 439426.425183418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 207089.73711340205,
            "unit": "ns",
            "range": "± 17194.722545360877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774143.7448979593,
            "unit": "ns",
            "range": "± 250659.13347985625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269693.2325581396,
            "unit": "ns",
            "range": "± 176779.8158793072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291500.3402061854,
            "unit": "ns",
            "range": "± 283248.0827877483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8453436.91935484,
            "unit": "ns",
            "range": "± 160833.58023264798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2654336.724137931,
            "unit": "ns",
            "range": "± 80398.22836002879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2918995.734939759,
            "unit": "ns",
            "range": "± 155587.59604449352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3847774.9615384615,
            "unit": "ns",
            "range": "± 92200.83859682873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3588677.61,
            "unit": "ns",
            "range": "± 277442.15434496186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9452511.454545455,
            "unit": "ns",
            "range": "± 190579.664927689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200659.78431372548,
            "unit": "ns",
            "range": "± 7372.555454694731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194364.27777777778,
            "unit": "ns",
            "range": "± 8197.629324629477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163441.23529411765,
            "unit": "ns",
            "range": "± 3357.2223364228457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3231815.769230769,
            "unit": "ns",
            "range": "± 29393.660419535612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841051.285714286,
            "unit": "ns",
            "range": "± 21333.50316423071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14046.82,
            "unit": "ns",
            "range": "± 2545.8669967719297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61643.25,
            "unit": "ns",
            "range": "± 4441.317530927767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51611.6875,
            "unit": "ns",
            "range": "± 1563.0650294502536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58099.27551020408,
            "unit": "ns",
            "range": "± 10416.253987374595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2569.8229166666665,
            "unit": "ns",
            "range": "± 348.4553280979136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11458.107142857143,
            "unit": "ns",
            "range": "± 630.0777541969776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676873.904854911,
            "unit": "ns",
            "range": "± 4650.200249248785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218797.2322916666,
            "unit": "ns",
            "range": "± 2820.778044153966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768335.1723632812,
            "unit": "ns",
            "range": "± 895.5694893962066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968290.2820870536,
            "unit": "ns",
            "range": "± 1801.11340511758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615054.1835239956,
            "unit": "ns",
            "range": "± 645.2818041983606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587985.2026692708,
            "unit": "ns",
            "range": "± 341.21230889494035"
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
          "id": "cdc436ea389868eb8150dfb8456734dc81d9da4e",
          "message": "Merge pull request #3753 from greymistcube/revert/litedb-upgrade\n\n⏪ Revert litedb upgrade",
          "timestamp": "2024-04-18T14:32:00+09:00",
          "tree_id": "871891c019c0fcd630e6a00dcf3713b975ddb4e8",
          "url": "https://github.com/planetarium/libplanet/commit/cdc436ea389868eb8150dfb8456734dc81d9da4e"
        },
        "date": 1713418903310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202522.06626506025,
            "unit": "ns",
            "range": "± 10814.926198898842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190673.54716981133,
            "unit": "ns",
            "range": "± 7543.232592519443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171189.5625,
            "unit": "ns",
            "range": "± 3282.0945947925798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3266673.0714285714,
            "unit": "ns",
            "range": "± 30769.139188764813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876567.4,
            "unit": "ns",
            "range": "± 27759.257358839513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13250.279569892473,
            "unit": "ns",
            "range": "± 1608.8029263317883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62025.90425531915,
            "unit": "ns",
            "range": "± 4744.724971507886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55816.1914893617,
            "unit": "ns",
            "range": "± 4425.860465580337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64559.56122448979,
            "unit": "ns",
            "range": "± 14896.243781582543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3503.03125,
            "unit": "ns",
            "range": "± 652.251056816638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12149.873626373626,
            "unit": "ns",
            "range": "± 957.0258286117657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5777931.928571428,
            "unit": "ns",
            "range": "± 26960.03584357434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14734218.285714285,
            "unit": "ns",
            "range": "± 71411.9707401288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38410606.571428575,
            "unit": "ns",
            "range": "± 96798.92303176668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78336639.03333333,
            "unit": "ns",
            "range": "± 281077.4125886895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153770167,
            "unit": "ns",
            "range": "± 665443.713424144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3630237.038762019,
            "unit": "ns",
            "range": "± 4396.239863040215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184783.5567801339,
            "unit": "ns",
            "range": "± 1044.288005487865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765692.3688802083,
            "unit": "ns",
            "range": "± 3015.333563901953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920487.620703125,
            "unit": "ns",
            "range": "± 3509.4185408746857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621340.8313802084,
            "unit": "ns",
            "range": "± 843.5590330571282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567629.9848958333,
            "unit": "ns",
            "range": "± 497.07583892511417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005108.1428571428,
            "unit": "ns",
            "range": "± 107724.19767250793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927308.7272727273,
            "unit": "ns",
            "range": "± 71901.85532582579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539374.8133333332,
            "unit": "ns",
            "range": "± 77752.23449621159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7572892.756097561,
            "unit": "ns",
            "range": "± 271509.0228896437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423435.6666666665,
            "unit": "ns",
            "range": "± 32965.73390369952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502949.404255319,
            "unit": "ns",
            "range": "± 139754.54109261304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3089407.285714286,
            "unit": "ns",
            "range": "± 48854.3497082101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3161328.121212121,
            "unit": "ns",
            "range": "± 148058.47584911174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8686074.096774194,
            "unit": "ns",
            "range": "± 178558.82106061574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35892.825,
            "unit": "ns",
            "range": "± 1883.8451505540002"
          }
        ]
      }
    ]
  }
}