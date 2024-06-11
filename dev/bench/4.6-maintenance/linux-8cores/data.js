window.BENCHMARK_DATA = {
  "lastUpdate": 1718102772411,
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
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786526589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951439.0235294118,
            "unit": "ns",
            "range": "± 51325.479692044646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860910.1142857142,
            "unit": "ns",
            "range": "± 60886.37492458508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635777.8144329898,
            "unit": "ns",
            "range": "± 160851.1650085601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8009369.117021277,
            "unit": "ns",
            "range": "± 306398.3288414774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5712803.6,
            "unit": "ns",
            "range": "± 31032.601890822585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14616248.666666666,
            "unit": "ns",
            "range": "± 93213.52867526923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37900908.71428572,
            "unit": "ns",
            "range": "± 449427.63057529903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76502235.64285715,
            "unit": "ns",
            "range": "± 243540.57249282277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151917835.76923078,
            "unit": "ns",
            "range": "± 742085.7608492379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707799.5872395835,
            "unit": "ns",
            "range": "± 5015.110276579915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1256275.6493489584,
            "unit": "ns",
            "range": "± 2450.8906953574633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775188.6356026785,
            "unit": "ns",
            "range": "± 1132.7063107111294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952032.29140625,
            "unit": "ns",
            "range": "± 4793.200194471136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618256.9569561298,
            "unit": "ns",
            "range": "± 581.9881290702442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580567.3005859375,
            "unit": "ns",
            "range": "± 1705.6667779885804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387862.5,
            "unit": "ns",
            "range": "± 77087.92397187848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2498698.4285714286,
            "unit": "ns",
            "range": "± 99691.91366969039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136670.966666667,
            "unit": "ns",
            "range": "± 52146.217853354654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3115843.46,
            "unit": "ns",
            "range": "± 114010.34865348936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8788597.8125,
            "unit": "ns",
            "range": "± 168604.1244688155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200452.45762711865,
            "unit": "ns",
            "range": "± 8873.479781060963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193385.08181818182,
            "unit": "ns",
            "range": "± 7692.680459710961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167815.19565217392,
            "unit": "ns",
            "range": "± 3904.423428914052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186859.3,
            "unit": "ns",
            "range": "± 50994.13935682077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2831619.1,
            "unit": "ns",
            "range": "± 51328.788456381866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12545.094736842106,
            "unit": "ns",
            "range": "± 878.6532377485711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60306.96511627907,
            "unit": "ns",
            "range": "± 3270.8384550094806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52769.86363636364,
            "unit": "ns",
            "range": "± 1948.311595714549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94974.78571428571,
            "unit": "ns",
            "range": "± 16083.417664736266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5475.663265306122,
            "unit": "ns",
            "range": "± 2063.4989249514592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11815.626373626374,
            "unit": "ns",
            "range": "± 897.0623247064914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38573.54255319149,
            "unit": "ns",
            "range": "± 3964.340286450181"
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
          "id": "96bc91e80ec0fc970e057b6927c7bd47681c3836",
          "message": "Merge pull request #3807 from greymistcube/prepare/4.6.1\n\n🔧 Prepare 4.6.1",
          "timestamp": "2024-05-28T13:30:49+09:00",
          "tree_id": "55f0afe5fac922701956f1aae5f98ce7429ef7a4",
          "url": "https://github.com/planetarium/libplanet/commit/96bc91e80ec0fc970e057b6927c7bd47681c3836"
        },
        "date": 1716871213072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971123.1521739131,
            "unit": "ns",
            "range": "± 74424.9799615243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836964.0777777778,
            "unit": "ns",
            "range": "± 67579.05990107536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633875.28,
            "unit": "ns",
            "range": "± 135391.47363565382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7928205.72,
            "unit": "ns",
            "range": "± 316027.11158483644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5783796.769230769,
            "unit": "ns",
            "range": "± 20305.387569779956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14779443.666666666,
            "unit": "ns",
            "range": "± 187383.05184936273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37615372.86666667,
            "unit": "ns",
            "range": "± 92737.43294058513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75548739.7,
            "unit": "ns",
            "range": "± 330647.12940172333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149332357.2,
            "unit": "ns",
            "range": "± 321163.363778178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711316.6400240385,
            "unit": "ns",
            "range": "± 5321.548333835917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190789.7801339286,
            "unit": "ns",
            "range": "± 2251.6415234384303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763837.992047991,
            "unit": "ns",
            "range": "± 1882.1368790247793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2004372.80625,
            "unit": "ns",
            "range": "± 3244.9704446805026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621600.3567057292,
            "unit": "ns",
            "range": "± 726.2735460649548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583193.0233677456,
            "unit": "ns",
            "range": "± 900.8222101522284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2353719.3571428573,
            "unit": "ns",
            "range": "± 35805.751950053935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497641.5,
            "unit": "ns",
            "range": "± 92759.44745528244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048741.2666666666,
            "unit": "ns",
            "range": "± 41544.58361200937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3131523.1764705884,
            "unit": "ns",
            "range": "± 126779.6145797432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8926020.58064516,
            "unit": "ns",
            "range": "± 192632.91253846424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198117.74509803922,
            "unit": "ns",
            "range": "± 8027.396456742715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192680.3918918919,
            "unit": "ns",
            "range": "± 6531.663701554927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167530.7857142857,
            "unit": "ns",
            "range": "± 1636.9346201206238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141110.9285714286,
            "unit": "ns",
            "range": "± 46235.55802079721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2847814.6666666665,
            "unit": "ns",
            "range": "± 34001.09902775553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12227.657303370786,
            "unit": "ns",
            "range": "± 854.0795803201937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59065.808988764045,
            "unit": "ns",
            "range": "± 3486.770203459997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52097.46153846154,
            "unit": "ns",
            "range": "± 822.9829499433363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55803.56989247312,
            "unit": "ns",
            "range": "± 8713.271656798646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790.1758241758243,
            "unit": "ns",
            "range": "± 281.36637220719075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11537.308641975309,
            "unit": "ns",
            "range": "± 621.6126133287378"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36316.46575342466,
            "unit": "ns",
            "range": "± 1730.297518429448"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24818acb264e776eeba334578af431523b027dac",
          "message": "Merge pull request #3816 from s2quake/port/4.5.2-to-4.6\n\n🔀 Port 4.5.2 to 4.6.1",
          "timestamp": "2024-06-11T17:57:55+09:00",
          "tree_id": "5e1b2cb9e6f7b34c5685e98a1a9646f710b7c193",
          "url": "https://github.com/planetarium/libplanet/commit/24818acb264e776eeba334578af431523b027dac"
        },
        "date": 1718096911049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968699.6578947369,
            "unit": "ns",
            "range": "± 84214.13387429813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852093.5277777778,
            "unit": "ns",
            "range": "± 61741.94142187354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557080.1022727273,
            "unit": "ns",
            "range": "± 84583.61630655883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7981844.661290322,
            "unit": "ns",
            "range": "± 362489.2299948516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5674862.153846154,
            "unit": "ns",
            "range": "± 14877.67522075808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14524915.666666666,
            "unit": "ns",
            "range": "± 96214.52767247832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37134377.571428575,
            "unit": "ns",
            "range": "± 96214.89753648364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76169058.46666667,
            "unit": "ns",
            "range": "± 454129.909176543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149043923.1153846,
            "unit": "ns",
            "range": "± 317449.4668876551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744100.7042410714,
            "unit": "ns",
            "range": "± 5031.1132259702845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210150.6333333333,
            "unit": "ns",
            "range": "± 2539.5485624293397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763635.3185546875,
            "unit": "ns",
            "range": "± 1608.475200262098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904804.1233072917,
            "unit": "ns",
            "range": "± 1251.2758060017818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622589.2774135044,
            "unit": "ns",
            "range": "± 550.5090801910253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580551.86015625,
            "unit": "ns",
            "range": "± 505.50610654637296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416701.5517241377,
            "unit": "ns",
            "range": "± 65975.95750541372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2448759.197674419,
            "unit": "ns",
            "range": "± 83255.47352935362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3062406.1428571427,
            "unit": "ns",
            "range": "± 29516.256620083743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3096823.7358490564,
            "unit": "ns",
            "range": "± 117630.53197212137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8901604.741935484,
            "unit": "ns",
            "range": "± 236094.62740081822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199919.26363636364,
            "unit": "ns",
            "range": "± 8339.220444878696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193364.6,
            "unit": "ns",
            "range": "± 7401.558945690469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169857.07142857142,
            "unit": "ns",
            "range": "± 2738.2104407043694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145832.1666666665,
            "unit": "ns",
            "range": "± 46111.78762012821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788884.3571428573,
            "unit": "ns",
            "range": "± 27954.741041705096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12325.371794871795,
            "unit": "ns",
            "range": "± 648.3073086637743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65581.96907216495,
            "unit": "ns",
            "range": "± 4934.819800943445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53122.230769230766,
            "unit": "ns",
            "range": "± 760.5032493735266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60046.82653061225,
            "unit": "ns",
            "range": "± 8707.393285913846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3073.4270833333335,
            "unit": "ns",
            "range": "± 294.22822308332684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11837.224137931034,
            "unit": "ns",
            "range": "± 528.4045845951505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36878.84705882353,
            "unit": "ns",
            "range": "± 4106.71934733299"
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
          "id": "a96e60b263df173dff0cbd445e51f7b5898b0455",
          "message": "Merge pull request #3817 from greymistcube/release/4.6.2\n\n🚀 Release 4.6.2",
          "timestamp": "2024-06-11T19:36:12+09:00",
          "tree_id": "36ea731aa4373cde9bc2d0bdc7ee0b9ff3cfe69f",
          "url": "https://github.com/planetarium/libplanet/commit/a96e60b263df173dff0cbd445e51f7b5898b0455"
        },
        "date": 1718102747176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976576.9408602151,
            "unit": "ns",
            "range": "± 78350.93115432121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1914843.6851851852,
            "unit": "ns",
            "range": "± 78990.16626276828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615274.5952380951,
            "unit": "ns",
            "range": "± 86586.70008991394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7822421.3,
            "unit": "ns",
            "range": "± 180080.6468298082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577008.428571428,
            "unit": "ns",
            "range": "± 34615.863781518725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14793191.714285715,
            "unit": "ns",
            "range": "± 115837.6649275771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37222356.3,
            "unit": "ns",
            "range": "± 144210.40461135746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 81143366.14285715,
            "unit": "ns",
            "range": "± 512877.8923829436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153593602.16666666,
            "unit": "ns",
            "range": "± 550354.2315014248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3802306.7327008927,
            "unit": "ns",
            "range": "± 5717.9799102656325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214709.8754185268,
            "unit": "ns",
            "range": "± 1380.1931339557632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768860.7313151042,
            "unit": "ns",
            "range": "± 2273.2227896811683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929098.015904018,
            "unit": "ns",
            "range": "± 1894.5532244430367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620903.8434244791,
            "unit": "ns",
            "range": "± 1213.625980298539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580262.5145833333,
            "unit": "ns",
            "range": "± 740.6943178768374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2369120.275,
            "unit": "ns",
            "range": "± 83970.6600476947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544416.311111111,
            "unit": "ns",
            "range": "± 95901.32587191857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3150429.8571428573,
            "unit": "ns",
            "range": "± 40071.6584975872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3170346.686746988,
            "unit": "ns",
            "range": "± 168512.78158129883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8900988.8,
            "unit": "ns",
            "range": "± 193760.69103428416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205917.04166666666,
            "unit": "ns",
            "range": "± 10162.404373283262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198589.21739130435,
            "unit": "ns",
            "range": "± 8928.205864940164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166120.7857142857,
            "unit": "ns",
            "range": "± 2937.5379586044087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113759.785714286,
            "unit": "ns",
            "range": "± 33707.369679067495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853946.966666667,
            "unit": "ns",
            "range": "± 23333.397281477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12443.357142857143,
            "unit": "ns",
            "range": "± 682.6166724558008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60314.494505494506,
            "unit": "ns",
            "range": "± 3718.4436749611205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53189.53703703704,
            "unit": "ns",
            "range": "± 2071.1119218772315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66446.82474226804,
            "unit": "ns",
            "range": "± 8880.896292522963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3859.9891304347825,
            "unit": "ns",
            "range": "± 383.60446360273085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14723.479591836734,
            "unit": "ns",
            "range": "± 1847.3795482941512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37588.244680851065,
            "unit": "ns",
            "range": "± 3616.8339053137784"
          }
        ]
      }
    ]
  }
}