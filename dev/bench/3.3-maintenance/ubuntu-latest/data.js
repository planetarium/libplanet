window.BENCHMARK_DATA = {
  "lastUpdate": 1694144848906,
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
          "id": "aa72117b8887ec9e189cac97cefc3fa77966dd81",
          "message": "Merge pull request #3417 from greymistcube/release/3.3.0\n\n🚀 Release 3.3.0",
          "timestamp": "2023-09-07T19:23:55+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/planetarium/libplanet/commit/aa72117b8887ec9e189cac97cefc3fa77966dd81"
        },
        "date": 1694089106901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736927.2236842106,
            "unit": "ns",
            "range": "± 87824.78803945935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3357672.5517241377,
            "unit": "ns",
            "range": "± 95587.59902294044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2136954.277777778,
            "unit": "ns",
            "range": "± 115271.47059836937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5661359.78125,
            "unit": "ns",
            "range": "± 161422.43879391864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330071.8823529412,
            "unit": "ns",
            "range": "± 6215.684363792463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321327.14285714284,
            "unit": "ns",
            "range": "± 10370.918392433767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287471.4492753623,
            "unit": "ns",
            "range": "± 13912.319040138314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5350138.333333333,
            "unit": "ns",
            "range": "± 58115.609182616914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4812263.071428572,
            "unit": "ns",
            "range": "± 66282.55000719301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25106.882978723403,
            "unit": "ns",
            "range": "± 1789.9613070629293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102855.9109589041,
            "unit": "ns",
            "range": "± 5138.594586924242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89551.81333333334,
            "unit": "ns",
            "range": "± 4510.173415175402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92814.2530120482,
            "unit": "ns",
            "range": "± 7672.398411606617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7518.443298969072,
            "unit": "ns",
            "range": "± 790.747891886116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24991.5206185567,
            "unit": "ns",
            "range": "± 2564.700222002001"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60050.25,
            "unit": "ns",
            "range": "± 4143.855375899794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10526366.857142856,
            "unit": "ns",
            "range": "± 134422.1667244696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27080376.2,
            "unit": "ns",
            "range": "± 255963.80343913584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67933342.8,
            "unit": "ns",
            "range": "± 426324.4061674496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135761363.66666666,
            "unit": "ns",
            "range": "± 787978.4602800898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273009969,
            "unit": "ns",
            "range": "± 1141282.1750572592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4420758.153846154,
            "unit": "ns",
            "range": "± 54179.19796817187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4723282.652173913,
            "unit": "ns",
            "range": "± 109266.31338723365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5471521.25,
            "unit": "ns",
            "range": "± 100624.69286578386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5057381.8,
            "unit": "ns",
            "range": "± 114517.39284382688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7578179.648148148,
            "unit": "ns",
            "range": "± 176717.12586170973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000493.7671875,
            "unit": "ns",
            "range": "± 34932.69716723725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885875.2426060268,
            "unit": "ns",
            "range": "± 3187.9708679071537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276342.6450520833,
            "unit": "ns",
            "range": "± 3105.537493344535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107176.0139508927,
            "unit": "ns",
            "range": "± 6297.520338806512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992317.2156808035,
            "unit": "ns",
            "range": "± 2420.4999071877664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891010.9182942709,
            "unit": "ns",
            "range": "± 1183.9533610793278"
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
          "id": "ea788e75329d8be22b7ea0ca2b05cdd1880a5eed",
          "message": "Merge pull request #3419 from greymistcube/prepare/3.3.1\n\n🔧 Prepare 3.3.1",
          "timestamp": "2023-09-08T10:21:16+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/planetarium/libplanet/commit/ea788e75329d8be22b7ea0ca2b05cdd1880a5eed"
        },
        "date": 1694137175000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678189.2947368422,
            "unit": "ns",
            "range": "± 144276.24490700263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3241818.494845361,
            "unit": "ns",
            "range": "± 221280.8434961254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047006.1134020619,
            "unit": "ns",
            "range": "± 161217.26031138827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5923491.886597938,
            "unit": "ns",
            "range": "± 409691.9598058012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341267.45652173914,
            "unit": "ns",
            "range": "± 22838.376908424903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321351.688172043,
            "unit": "ns",
            "range": "± 22917.827030112196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278996.1041666667,
            "unit": "ns",
            "range": "± 19923.189563119213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5104279.6,
            "unit": "ns",
            "range": "± 165368.58982822727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4718915.529411765,
            "unit": "ns",
            "range": "± 150094.56970679786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20525.674418604653,
            "unit": "ns",
            "range": "± 1477.4832292617261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98151.53191489361,
            "unit": "ns",
            "range": "± 9126.066544477928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92638.85393258427,
            "unit": "ns",
            "range": "± 8114.559936746923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103131.90425531915,
            "unit": "ns",
            "range": "± 16631.918123249536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6082.806451612903,
            "unit": "ns",
            "range": "± 642.1017503355766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19841.93023255814,
            "unit": "ns",
            "range": "± 1784.784071900725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57574.467391304344,
            "unit": "ns",
            "range": "± 6258.847693423641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9559325.6,
            "unit": "ns",
            "range": "± 158139.34762408573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25307705.181818184,
            "unit": "ns",
            "range": "± 597017.2175629712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65606449.823529415,
            "unit": "ns",
            "range": "± 1323562.1225160833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132836531,
            "unit": "ns",
            "range": "± 4281418.589398228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285621519.6857143,
            "unit": "ns",
            "range": "± 9220511.797391219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3946438.1666666665,
            "unit": "ns",
            "range": "± 153518.67506909932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4209561,
            "unit": "ns",
            "range": "± 183581.36969202512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5295090.4,
            "unit": "ns",
            "range": "± 213902.1768476498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4530607.802325581,
            "unit": "ns",
            "range": "± 238560.42465218547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7919919.673469388,
            "unit": "ns",
            "range": "± 311537.6746611333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6013433.6,
            "unit": "ns",
            "range": "± 45965.964573385936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995230.3938210227,
            "unit": "ns",
            "range": "± 48825.04237489881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343674.7850260416,
            "unit": "ns",
            "range": "± 10449.991936175336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245272.3030133927,
            "unit": "ns",
            "range": "± 32310.186886178493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043254.1242487981,
            "unit": "ns",
            "range": "± 36327.68760631054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928985.0846819197,
            "unit": "ns",
            "range": "± 12706.996955263461"
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
          "id": "26d069a674528cfe43ded5bc1c63450d0bade836",
          "message": "Merge pull request #3420 from greymistcube/fix/trie-value-resolve\n\n🐛 Fix `ITrie.Get()`",
          "timestamp": "2023-09-08T12:21:13+09:00",
          "tree_id": "cfd07e45b9754e4748b068efa5c64f79ca076066",
          "url": "https://github.com/planetarium/libplanet/commit/26d069a674528cfe43ded5bc1c63450d0bade836"
        },
        "date": 1694144292273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693477.1363636365,
            "unit": "ns",
            "range": "± 74473.32101443832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3297002.09375,
            "unit": "ns",
            "range": "± 100392.51253771911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215818.5384615385,
            "unit": "ns",
            "range": "± 140225.8866498628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5653028.447368421,
            "unit": "ns",
            "range": "± 174655.33436204796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340944.35135135136,
            "unit": "ns",
            "range": "± 11581.45655351264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327291.2272727273,
            "unit": "ns",
            "range": "± 12235.272675160042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303136.8088235294,
            "unit": "ns",
            "range": "± 14381.538045181245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5389593.6,
            "unit": "ns",
            "range": "± 45086.867821699794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5008909.307692308,
            "unit": "ns",
            "range": "± 36890.89877007746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26842.978494623654,
            "unit": "ns",
            "range": "± 2996.493729919276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107292.85365853658,
            "unit": "ns",
            "range": "± 5663.119875038892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90999.30681818182,
            "unit": "ns",
            "range": "± 5817.507074336308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100654.73195876289,
            "unit": "ns",
            "range": "± 15280.772514363887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7728.164948453608,
            "unit": "ns",
            "range": "± 811.5345890196288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23107.489361702126,
            "unit": "ns",
            "range": "± 2288.586114418991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56487.936842105264,
            "unit": "ns",
            "range": "± 3896.691989887544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10206726.25,
            "unit": "ns",
            "range": "± 195788.66333455913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27091618.85714286,
            "unit": "ns",
            "range": "± 386401.8817685619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68307034,
            "unit": "ns",
            "range": "± 338765.1774272051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137113664.66666666,
            "unit": "ns",
            "range": "± 482336.102728417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275212519.6,
            "unit": "ns",
            "range": "± 589937.420113693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4398043.083333333,
            "unit": "ns",
            "range": "± 41660.88711022134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4677835.733333333,
            "unit": "ns",
            "range": "± 53453.75357990262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5504824.214285715,
            "unit": "ns",
            "range": "± 44873.80361752718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5037025.041666667,
            "unit": "ns",
            "range": "± 126503.14599163452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7638533.5,
            "unit": "ns",
            "range": "± 174185.27543120136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6190728.873325893,
            "unit": "ns",
            "range": "± 17727.85794072891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898832.435546875,
            "unit": "ns",
            "range": "± 5858.312674336026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291560.1268229166,
            "unit": "ns",
            "range": "± 4449.973380649083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3100916.333854167,
            "unit": "ns",
            "range": "± 8982.484614631396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025270.4686197917,
            "unit": "ns",
            "range": "± 5478.882784807342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890172.4725911458,
            "unit": "ns",
            "range": "± 7766.598034954189"
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
          "id": "7fbe52e2b3351d4811ecc6da2a09a2f45f4aabeb",
          "message": "Merge pull request #3421 from greymistcube/release/3.3.1\n\n🚀 Release 3.3.1",
          "timestamp": "2023-09-08T12:30:12+09:00",
          "tree_id": "fab2e0507c99a95eceeee8893e42c3adbf3b822b",
          "url": "https://github.com/planetarium/libplanet/commit/7fbe52e2b3351d4811ecc6da2a09a2f45f4aabeb"
        },
        "date": 1694144816846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2015483.7142857143,
            "unit": "ns",
            "range": "± 35561.46218207953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3396245.9285714286,
            "unit": "ns",
            "range": "± 121355.62510772813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163657.054945055,
            "unit": "ns",
            "range": "± 111722.57607130287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5673252.948717949,
            "unit": "ns",
            "range": "± 194604.9331426903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344807.1142857143,
            "unit": "ns",
            "range": "± 11098.273680732376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334228.5238095238,
            "unit": "ns",
            "range": "± 14847.330111740783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304857.7704918033,
            "unit": "ns",
            "range": "± 13718.087683047568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5368908.6,
            "unit": "ns",
            "range": "± 37155.97601578667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4753342.315789473,
            "unit": "ns",
            "range": "± 100626.71845933731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25214.382978723403,
            "unit": "ns",
            "range": "± 2028.3825385557611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109009.63917525773,
            "unit": "ns",
            "range": "± 8639.151301615184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93875.16279069768,
            "unit": "ns",
            "range": "± 3171.6111868397843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92875.82432432432,
            "unit": "ns",
            "range": "± 3776.2434271071675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6692.226804123711,
            "unit": "ns",
            "range": "± 798.4828387995501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25101.425531914894,
            "unit": "ns",
            "range": "± 1599.1766126606835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59212,
            "unit": "ns",
            "range": "± 3627.5708720600046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10204743.684210526,
            "unit": "ns",
            "range": "± 223327.40102570204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27041945.666666668,
            "unit": "ns",
            "range": "± 184041.53437031803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67802136,
            "unit": "ns",
            "range": "± 304040.44943136856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137075166.41666666,
            "unit": "ns",
            "range": "± 650466.199622514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272927559.3684211,
            "unit": "ns",
            "range": "± 5117603.778101027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4448896.642857143,
            "unit": "ns",
            "range": "± 57568.07221903895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4666829.357142857,
            "unit": "ns",
            "range": "± 63786.45487587367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5468385.428571428,
            "unit": "ns",
            "range": "± 72341.19455502759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5050907.2,
            "unit": "ns",
            "range": "± 87212.89536301383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7682465.722222222,
            "unit": "ns",
            "range": "± 148180.41985475025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6051905.007552084,
            "unit": "ns",
            "range": "± 100524.01352121448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918937.1011439732,
            "unit": "ns",
            "range": "± 19972.21247328899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299657.852734375,
            "unit": "ns",
            "range": "± 1039.691444012507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3073296.34921875,
            "unit": "ns",
            "range": "± 28736.862112017458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1017497.7298177084,
            "unit": "ns",
            "range": "± 1905.0565644122257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906145.4421875,
            "unit": "ns",
            "range": "± 2667.713431470413"
          }
        ]
      }
    ]
  }
}