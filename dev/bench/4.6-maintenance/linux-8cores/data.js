window.BENCHMARK_DATA = {
  "lastUpdate": 1716871237355,
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
      }
    ]
  }
}