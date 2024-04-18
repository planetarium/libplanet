window.BENCHMARK_DATA = {
  "lastUpdate": 1713421298072,
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
        "date": 1712565789023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1870912.121212121,
            "unit": "ns",
            "range": "± 245049.3441657553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3160171.875,
            "unit": "ns",
            "range": "± 341728.03212130547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403590.909090909,
            "unit": "ns",
            "range": "± 300156.62921109906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8092060.606060606,
            "unit": "ns",
            "range": "± 180226.58818032706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 202776,
            "unit": "ns",
            "range": "± 20403.025721344828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5103592.857142857,
            "unit": "ns",
            "range": "± 23579.667391329214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13472780,
            "unit": "ns",
            "range": "± 173713.98989636468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33598766.666666664,
            "unit": "ns",
            "range": "± 362238.7051707886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66392963.333333336,
            "unit": "ns",
            "range": "± 997666.6104084117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133663926.66666667,
            "unit": "ns",
            "range": "± 2156792.565185186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3424095.2604166665,
            "unit": "ns",
            "range": "± 9056.853343822744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078397.65625,
            "unit": "ns",
            "range": "± 4309.301903884334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738803.8643973215,
            "unit": "ns",
            "range": "± 1398.1109611479774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918947.75390625,
            "unit": "ns",
            "range": "± 3501.336517652085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631570.703125,
            "unit": "ns",
            "range": "± 1440.2495749416164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580224.7526041666,
            "unit": "ns",
            "range": "± 1498.7324421935652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544110.638297872,
            "unit": "ns",
            "range": "± 93459.69657754259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2877089.6551724137,
            "unit": "ns",
            "range": "± 71719.91327791142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251892.307692308,
            "unit": "ns",
            "range": "± 48025.34854182843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3372367.9245283017,
            "unit": "ns",
            "range": "± 135808.88547681898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8682847.05882353,
            "unit": "ns",
            "range": "± 269000.2571084657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184115.7142857143,
            "unit": "ns",
            "range": "± 8343.888429268622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179158.24175824175,
            "unit": "ns",
            "range": "± 10885.516023434951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146484.50704225354,
            "unit": "ns",
            "range": "± 6852.604257555225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2858085.714285714,
            "unit": "ns",
            "range": "± 35021.11137240282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485950,
            "unit": "ns",
            "range": "± 45404.610632254815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11678.494623655914,
            "unit": "ns",
            "range": "± 1436.5454836520896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54564.83516483517,
            "unit": "ns",
            "range": "± 4233.973012730179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45586.153846153844,
            "unit": "ns",
            "range": "± 2136.2113749490095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66285.41666666667,
            "unit": "ns",
            "range": "± 14216.93563226372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2672.7272727272725,
            "unit": "ns",
            "range": "± 664.3729868659472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11247.368421052632,
            "unit": "ns",
            "range": "± 1689.0033637686895"
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
        "date": 1712570765914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2005593.75,
            "unit": "ns",
            "range": "± 38363.810529369126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2986409.4736842103,
            "unit": "ns",
            "range": "± 309966.22708058235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2347500,
            "unit": "ns",
            "range": "± 302267.5797963096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8103804.918032787,
            "unit": "ns",
            "range": "± 364472.79707646655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 184160.63829787233,
            "unit": "ns",
            "range": "± 14596.267147526394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5044006.666666667,
            "unit": "ns",
            "range": "± 15550.538193105669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13370871.42857143,
            "unit": "ns",
            "range": "± 90988.36298012068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32564266.666666668,
            "unit": "ns",
            "range": "± 165160.34056406547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64798780,
            "unit": "ns",
            "range": "± 309239.004193012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131094700,
            "unit": "ns",
            "range": "± 512554.23127704253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344506.7708333335,
            "unit": "ns",
            "range": "± 21161.058531692917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083037.6432291667,
            "unit": "ns",
            "range": "± 2323.478943570622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765210.83984375,
            "unit": "ns",
            "range": "± 1391.9273650047462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940100.6901041667,
            "unit": "ns",
            "range": "± 8845.672330673511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606464.3033854166,
            "unit": "ns",
            "range": "± 982.6690540496688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570356.5848214285,
            "unit": "ns",
            "range": "± 613.0480588027724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517381.5789473685,
            "unit": "ns",
            "range": "± 83275.84853239801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2870955.5555555555,
            "unit": "ns",
            "range": "± 79260.77860859699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3557371.4285714286,
            "unit": "ns",
            "range": "± 120138.98028255998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3341617.4418604653,
            "unit": "ns",
            "range": "± 168801.71952836227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8550410,
            "unit": "ns",
            "range": "± 195417.3560680616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182777.63157894736,
            "unit": "ns",
            "range": "± 8593.72792501152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173739.13043478262,
            "unit": "ns",
            "range": "± 8347.352827857258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143880,
            "unit": "ns",
            "range": "± 2477.9599904529764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757013.3333333335,
            "unit": "ns",
            "range": "± 47000.4083062305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2510286.6666666665,
            "unit": "ns",
            "range": "± 32086.108847169067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10551.546391752578,
            "unit": "ns",
            "range": "± 1458.1747581924305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52343.956043956045,
            "unit": "ns",
            "range": "± 4526.10229155307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44565.11627906977,
            "unit": "ns",
            "range": "± 1574.4815807312627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55622.82608695652,
            "unit": "ns",
            "range": "± 6898.209725716618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2085.483870967742,
            "unit": "ns",
            "range": "± 227.77046096717766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10162.921348314607,
            "unit": "ns",
            "range": "± 648.141052001083"
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
        "date": 1713418902899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026152,
            "unit": "ns",
            "range": "± 111253.7566997087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1774530.357142857,
            "unit": "ns",
            "range": "± 75320.31699745695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554157.142857143,
            "unit": "ns",
            "range": "± 139980.04349663414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756705.882352941,
            "unit": "ns",
            "range": "± 146484.91274298207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36172.52747252747,
            "unit": "ns",
            "range": "± 3286.7432693597048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5108926.666666667,
            "unit": "ns",
            "range": "± 74069.53746954534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13753013.333333334,
            "unit": "ns",
            "range": "± 134345.49206465855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33658026.666666664,
            "unit": "ns",
            "range": "± 422897.4909000097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69566203.33333333,
            "unit": "ns",
            "range": "± 507431.6644586127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136727773.33333334,
            "unit": "ns",
            "range": "± 1425413.7291460664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3432121.875,
            "unit": "ns",
            "range": "± 4075.363279393167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082875.9114583333,
            "unit": "ns",
            "range": "± 3770.383397582051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742784.8567708334,
            "unit": "ns",
            "range": "± 2359.474716884685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964164.5833333333,
            "unit": "ns",
            "range": "± 4927.998457643578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619667.0768229166,
            "unit": "ns",
            "range": "± 1523.2958189051724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560286.1588541666,
            "unit": "ns",
            "range": "± 1006.8936652531335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2247254.761904762,
            "unit": "ns",
            "range": "± 81206.80375911365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2377177.1428571427,
            "unit": "ns",
            "range": "± 65486.71210394421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2915522.727272727,
            "unit": "ns",
            "range": "± 58336.1762448865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2910638.5714285714,
            "unit": "ns",
            "range": "± 140608.7647430532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7901759.459459459,
            "unit": "ns",
            "range": "± 246570.69243194003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184309.8765432099,
            "unit": "ns",
            "range": "± 8438.462610841378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176213.5593220339,
            "unit": "ns",
            "range": "± 7229.548028681075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150375.67567567568,
            "unit": "ns",
            "range": "± 5082.5630785507665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2934235.714285714,
            "unit": "ns",
            "range": "± 36589.14524077529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2634133.3333333335,
            "unit": "ns",
            "range": "± 40921.713877435126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13160.869565217392,
            "unit": "ns",
            "range": "± 1875.343574191499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59203.260869565216,
            "unit": "ns",
            "range": "± 5269.577856749257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47520,
            "unit": "ns",
            "range": "± 1068.0035481904395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65741.41414141415,
            "unit": "ns",
            "range": "± 15532.112949424349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2939.5833333333335,
            "unit": "ns",
            "range": "± 481.76848920719414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11171.42857142857,
            "unit": "ns",
            "range": "± 1401.6883243896123"
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
        "date": 1713419674672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966739.3939393939,
            "unit": "ns",
            "range": "± 114717.56695020986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729803.7037037036,
            "unit": "ns",
            "range": "± 72834.02678502593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1446155.2083333333,
            "unit": "ns",
            "range": "± 129026.05111885183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6525035.483870967,
            "unit": "ns",
            "range": "± 193494.16795412224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35616.12903225807,
            "unit": "ns",
            "range": "± 3595.5676313852523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4983164.285714285,
            "unit": "ns",
            "range": "± 25492.55116372555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13792566.666666666,
            "unit": "ns",
            "range": "± 210405.86176878883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33084757.14285714,
            "unit": "ns",
            "range": "± 182191.74478590372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67722953.33333333,
            "unit": "ns",
            "range": "± 376610.1448953483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133610120,
            "unit": "ns",
            "range": "± 783055.0465963425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3422625.691105769,
            "unit": "ns",
            "range": "± 4210.444959846163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088142.5,
            "unit": "ns",
            "range": "± 2508.087403139653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749453.7760416666,
            "unit": "ns",
            "range": "± 1652.215917800658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907652.5390625,
            "unit": "ns",
            "range": "± 2465.9037572752572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616697.9752604166,
            "unit": "ns",
            "range": "± 1536.5903684373327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571937.7720424107,
            "unit": "ns",
            "range": "± 1423.227599540866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145442.8571428573,
            "unit": "ns",
            "range": "± 77146.07665239461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2232457.1428571427,
            "unit": "ns",
            "range": "± 45443.03655598481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2832478.947368421,
            "unit": "ns",
            "range": "± 42925.614975823366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2771563.0434782607,
            "unit": "ns",
            "range": "± 131866.31366769492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7759055.882352941,
            "unit": "ns",
            "range": "± 213859.39758179052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169830.13698630137,
            "unit": "ns",
            "range": "± 8438.843472161383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168024.39024390245,
            "unit": "ns",
            "range": "± 8599.37998017069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143722.22222222222,
            "unit": "ns",
            "range": "± 3060.287482757818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2867106.25,
            "unit": "ns",
            "range": "± 53254.51428439345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2525161.5384615385,
            "unit": "ns",
            "range": "± 29916.48203642764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10367.777777777777,
            "unit": "ns",
            "range": "± 890.1240637904508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52489.36170212766,
            "unit": "ns",
            "range": "± 4472.002945088821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43902.380952380954,
            "unit": "ns",
            "range": "± 1583.3721494111162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61542.391304347824,
            "unit": "ns",
            "range": "± 11299.783462825151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2754.639175257732,
            "unit": "ns",
            "range": "± 475.44291160907295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11318.279569892473,
            "unit": "ns",
            "range": "± 1305.335725311203"
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
        "date": 1713421235757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987398.9795918367,
            "unit": "ns",
            "range": "± 98185.599805966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728569.3548387096,
            "unit": "ns",
            "range": "± 73209.04178840852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480727.8350515463,
            "unit": "ns",
            "range": "± 133329.92970312093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6844611.428571428,
            "unit": "ns",
            "range": "± 332272.40986914403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40417.24137931035,
            "unit": "ns",
            "range": "± 3785.044219475397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5235769.230769231,
            "unit": "ns",
            "range": "± 17056.298182557308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13224566.666666666,
            "unit": "ns",
            "range": "± 71504.94155417978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33055721.42857143,
            "unit": "ns",
            "range": "± 438000.0055823172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65800820,
            "unit": "ns",
            "range": "± 749794.2538742593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136345933.33333334,
            "unit": "ns",
            "range": "± 1373452.9180482447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3293628.1770833335,
            "unit": "ns",
            "range": "± 6495.863618885265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055797.767857143,
            "unit": "ns",
            "range": "± 2279.6151766357016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747147.55859375,
            "unit": "ns",
            "range": "± 1280.767442698663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946476.09375,
            "unit": "ns",
            "range": "± 5954.962213777731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618737.65625,
            "unit": "ns",
            "range": "± 1428.1761943946049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570856.6731770834,
            "unit": "ns",
            "range": "± 1025.7241795562736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155893.103448276,
            "unit": "ns",
            "range": "± 62310.254436021794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278064.285714286,
            "unit": "ns",
            "range": "± 90906.82271791632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2797990.5405405406,
            "unit": "ns",
            "range": "± 94706.46305371214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2795450,
            "unit": "ns",
            "range": "± 127064.81339567885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7594122.222222222,
            "unit": "ns",
            "range": "± 247810.49973271467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173234.24657534246,
            "unit": "ns",
            "range": "± 8415.812154280413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161092.59259259258,
            "unit": "ns",
            "range": "± 6199.691162480013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143769.23076923078,
            "unit": "ns",
            "range": "± 1936.6571781399582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2855420,
            "unit": "ns",
            "range": "± 47350.73087382827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2596578.5714285714,
            "unit": "ns",
            "range": "± 34439.18114302659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9990.425531914894,
            "unit": "ns",
            "range": "± 1391.3766022301743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51729.26829268293,
            "unit": "ns",
            "range": "± 3473.9769008122803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44823.80952380953,
            "unit": "ns",
            "range": "± 1624.8166161153836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52660.416666666664,
            "unit": "ns",
            "range": "± 9677.0208461148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2245.8333333333335,
            "unit": "ns",
            "range": "± 431.37885819572284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10285.416666666666,
            "unit": "ns",
            "range": "± 1272.4596295254046"
          }
        ]
      }
    ]
  }
}