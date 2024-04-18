window.BENCHMARK_DATA = {
  "lastUpdate": 1713423735107,
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
          "id": "cfa261fe1d2342cbc4854094862fd53fb11a0324",
          "message": "Merge pull request #3754 from greymistcube/chore/changelog-typo\n\n🧹 Fixed typo",
          "timestamp": "2024-04-18T14:45:14+09:00",
          "tree_id": "be750d0ebe2ae0c8533bc6f40c090030474fa174",
          "url": "https://github.com/planetarium/libplanet/commit/cfa261fe1d2342cbc4854094862fd53fb11a0324"
        },
        "date": 1713419695083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198637.5285714286,
            "unit": "ns",
            "range": "± 6472.256118531276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190884.89024390245,
            "unit": "ns",
            "range": "± 6713.152113121111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167332.32,
            "unit": "ns",
            "range": "± 4455.061463474251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205650.9,
            "unit": "ns",
            "range": "± 29294.871037679713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2923892.033333333,
            "unit": "ns",
            "range": "± 46078.94184652289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12643.677419354839,
            "unit": "ns",
            "range": "± 728.6537789603974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60468,
            "unit": "ns",
            "range": "± 3798.525933393988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52566.2,
            "unit": "ns",
            "range": "± 1553.7644254053357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64863.229166666664,
            "unit": "ns",
            "range": "± 9416.44291593355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2926.1075268817203,
            "unit": "ns",
            "range": "± 375.97980583969127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11812.445652173914,
            "unit": "ns",
            "range": "± 743.9406121300899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666241.214285715,
            "unit": "ns",
            "range": "± 26282.980177084388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14985001.466666667,
            "unit": "ns",
            "range": "± 107043.59168773031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37606404,
            "unit": "ns",
            "range": "± 156645.58512806986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76079844.06666666,
            "unit": "ns",
            "range": "± 227494.0597634103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 158808568.63333333,
            "unit": "ns",
            "range": "± 739274.4618416537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3768984.648737981,
            "unit": "ns",
            "range": "± 9663.886623916644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216564.7931082589,
            "unit": "ns",
            "range": "± 1572.9282117179114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760768.4763532366,
            "unit": "ns",
            "range": "± 984.862983618478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934673.5814732143,
            "unit": "ns",
            "range": "± 1865.3431462828223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625700.4431315104,
            "unit": "ns",
            "range": "± 840.1372484877971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569346.2578125,
            "unit": "ns",
            "range": "± 521.9986565521201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981399.8571428572,
            "unit": "ns",
            "range": "± 96835.58017449972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861021.7567567567,
            "unit": "ns",
            "range": "± 57699.65394003937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558507.5858585858,
            "unit": "ns",
            "range": "± 107941.68579319927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7475806.161290322,
            "unit": "ns",
            "range": "± 225051.80076108355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416705.409090909,
            "unit": "ns",
            "range": "± 51340.5643778309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2499246.933333333,
            "unit": "ns",
            "range": "± 32452.976285403354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146171.9444444445,
            "unit": "ns",
            "range": "± 104445.68111906493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3186377.325,
            "unit": "ns",
            "range": "± 111918.25549042423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8782928.983870968,
            "unit": "ns",
            "range": "± 214212.9406985599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36928.244680851065,
            "unit": "ns",
            "range": "± 2543.3469806966395"
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
          "id": "9b2a26e6b7a76432eadfd57e4b6681bc15c4b225",
          "message": "Merge pull request #3755 from greymistcube/release/4.3.1\n\n🚀 Release 4.3.1",
          "timestamp": "2024-04-18T15:11:09+09:00",
          "tree_id": "72d4e38df0c2e164ee4261779a3009cbba094a87",
          "url": "https://github.com/planetarium/libplanet/commit/9b2a26e6b7a76432eadfd57e4b6681bc15c4b225"
        },
        "date": 1713421277085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210062.68367346938,
            "unit": "ns",
            "range": "± 8291.574495317192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200470.77380952382,
            "unit": "ns",
            "range": "± 9445.522898587431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168834.47619047618,
            "unit": "ns",
            "range": "± 3488.7848402996656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3268636.5714285714,
            "unit": "ns",
            "range": "± 32936.390062955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2995380.6428571427,
            "unit": "ns",
            "range": "± 23949.150685461584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15513.387096774193,
            "unit": "ns",
            "range": "± 2595.2302487793877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65990.48863636363,
            "unit": "ns",
            "range": "± 5776.6950480383075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98129.55813953489,
            "unit": "ns",
            "range": "± 5330.3181200830695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93203.59183673469,
            "unit": "ns",
            "range": "± 15157.519296148977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4836.896907216495,
            "unit": "ns",
            "range": "± 1613.89336107682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13914.885057471265,
            "unit": "ns",
            "range": "± 1868.0687728568673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6062943.714285715,
            "unit": "ns",
            "range": "± 25814.66122314864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14911232.3125,
            "unit": "ns",
            "range": "± 279046.2961775862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38841443.416666664,
            "unit": "ns",
            "range": "± 243302.34336780471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79133333.06666666,
            "unit": "ns",
            "range": "± 777082.040903153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153675862.46153846,
            "unit": "ns",
            "range": "± 1194572.154745554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3804036.773995536,
            "unit": "ns",
            "range": "± 17571.09449069195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206036.0190104167,
            "unit": "ns",
            "range": "± 2755.242925337287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775407.8401692709,
            "unit": "ns",
            "range": "± 1138.5742948009504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928140.8485677084,
            "unit": "ns",
            "range": "± 5847.665699952965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628659.894921875,
            "unit": "ns",
            "range": "± 788.4995343249702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578885.8225285456,
            "unit": "ns",
            "range": "± 739.9179682916006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035796.4081632653,
            "unit": "ns",
            "range": "± 119364.40358886521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2002971.5128205128,
            "unit": "ns",
            "range": "± 103083.3268102682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1721156.2653061224,
            "unit": "ns",
            "range": "± 164167.80456718142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7977949.025641026,
            "unit": "ns",
            "range": "± 409836.50749868556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2507016.934782609,
            "unit": "ns",
            "range": "± 96401.11464625344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2613170.586956522,
            "unit": "ns",
            "range": "± 99081.2627046498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3248136.7647058824,
            "unit": "ns",
            "range": "± 63327.65566039198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3291387.9215686275,
            "unit": "ns",
            "range": "± 133332.03013392442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8725795.176470589,
            "unit": "ns",
            "range": "± 252215.0747430948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36992.060975609755,
            "unit": "ns",
            "range": "± 2776.971296692824"
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
          "id": "400051f8386c7a4f3d02bd7086b4c07add9b63fc",
          "message": "Merge pull request #3756 from greymistcube/prepare/4.3.2\n\n🔧 Prepare 4.3.2",
          "timestamp": "2024-04-18T15:51:37+09:00",
          "tree_id": "8392f38b5c378df9621e4e8dc325a08cfbbe54d5",
          "url": "https://github.com/planetarium/libplanet/commit/400051f8386c7a4f3d02bd7086b4c07add9b63fc"
        },
        "date": 1713423711612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197839.05128205128,
            "unit": "ns",
            "range": "± 6562.918878656605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193590.47435897434,
            "unit": "ns",
            "range": "± 6385.879585325158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163307.45,
            "unit": "ns",
            "range": "± 3660.8371558400336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275177.566666667,
            "unit": "ns",
            "range": "± 37447.935131834645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2886782.466666667,
            "unit": "ns",
            "range": "± 37791.11729884733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12433.966666666667,
            "unit": "ns",
            "range": "± 883.3325617267494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60421.12903225807,
            "unit": "ns",
            "range": "± 4552.633473978231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51786.5,
            "unit": "ns",
            "range": "± 743.9335258671241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59587.09574468085,
            "unit": "ns",
            "range": "± 10692.41514613986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3674.3863636363635,
            "unit": "ns",
            "range": "± 360.94338180576676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11968.431818181818,
            "unit": "ns",
            "range": "± 966.1567160122144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5856580.133333334,
            "unit": "ns",
            "range": "± 58035.48648747673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14958562.333333334,
            "unit": "ns",
            "range": "± 109780.31210602034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37784575.35714286,
            "unit": "ns",
            "range": "± 138232.11308067042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75947529.1,
            "unit": "ns",
            "range": "± 316201.4428458994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153761050.26666668,
            "unit": "ns",
            "range": "± 997481.4481586302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3747227.622721354,
            "unit": "ns",
            "range": "± 2705.973520460899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208410.9854910714,
            "unit": "ns",
            "range": "± 1145.0793084290995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769597.2780412947,
            "unit": "ns",
            "range": "± 1822.3381526991739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962209.5680338542,
            "unit": "ns",
            "range": "± 1963.9194008710556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609412.9776692708,
            "unit": "ns",
            "range": "± 1423.063453053426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566943.0574669471,
            "unit": "ns",
            "range": "± 641.3116165999759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989738.3571428572,
            "unit": "ns",
            "range": "± 88831.57427007002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836345.105263158,
            "unit": "ns",
            "range": "± 55065.085725790166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598157.1290322582,
            "unit": "ns",
            "range": "± 111699.2863682612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7636926.735294118,
            "unit": "ns",
            "range": "± 233503.64959685112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407678.1153846155,
            "unit": "ns",
            "range": "± 15066.045923081818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519784.66,
            "unit": "ns",
            "range": "± 47509.72529710803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3237073.9545454546,
            "unit": "ns",
            "range": "± 78575.66122169388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3183508.255319149,
            "unit": "ns",
            "range": "± 122525.92904706513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8648954.38235294,
            "unit": "ns",
            "range": "± 187421.50641430388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36171.106741573036,
            "unit": "ns",
            "range": "± 2196.522994199001"
          }
        ]
      }
    ]
  }
}