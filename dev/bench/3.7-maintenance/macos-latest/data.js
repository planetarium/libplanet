window.BENCHMARK_DATA = {
  "lastUpdate": 1698414777286,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414729900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9731679.931818182,
            "unit": "ns",
            "range": "± 2393431.324901955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19362560.147058822,
            "unit": "ns",
            "range": "± 389108.3276760697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48466406,
            "unit": "ns",
            "range": "± 641827.7425209197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97612386.4736842,
            "unit": "ns",
            "range": "± 1660311.956905869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205742757.67333335,
            "unit": "ns",
            "range": "± 9895095.324903002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50079.416666666664,
            "unit": "ns",
            "range": "± 10429.959449551961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268706.3023255814,
            "unit": "ns",
            "range": "± 42855.52326241927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298723.3144329897,
            "unit": "ns",
            "range": "± 75181.26967665799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247596.29245283018,
            "unit": "ns",
            "range": "± 10260.504754712625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504160.076086956,
            "unit": "ns",
            "range": "± 812935.8881338031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716758.765957447,
            "unit": "ns",
            "range": "± 144089.30606190232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18609.9375,
            "unit": "ns",
            "range": "± 3846.586384978929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82638.4,
            "unit": "ns",
            "range": "± 11930.940996934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70730.55,
            "unit": "ns",
            "range": "± 17442.827263287018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87695.7258064516,
            "unit": "ns",
            "range": "± 14539.165490322303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.721649484536,
            "unit": "ns",
            "range": "± 2326.7328074212955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19128.784090909092,
            "unit": "ns",
            "range": "± 3765.7430627854055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139544.2978723405,
            "unit": "ns",
            "range": "± 113567.33543186224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498581.8214285714,
            "unit": "ns",
            "range": "± 174967.92980395976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715328.2872340425,
            "unit": "ns",
            "range": "± 175502.87903809026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7868845.9125,
            "unit": "ns",
            "range": "± 623343.1712084503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138700.3139534886,
            "unit": "ns",
            "range": "± 307642.2908426665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532919.092783505,
            "unit": "ns",
            "range": "± 692378.501661469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4024036.817647059,
            "unit": "ns",
            "range": "± 442703.7847167705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5134558.221649485,
            "unit": "ns",
            "range": "± 1255686.4354156533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14075847.868131869,
            "unit": "ns",
            "range": "± 2988812.5106910127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739845.506510417,
            "unit": "ns",
            "range": "± 177025.45631780883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408261.0536458334,
            "unit": "ns",
            "range": "± 23276.223736130403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 901269.2815104167,
            "unit": "ns",
            "range": "± 16128.109787414725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2115173.998545545,
            "unit": "ns",
            "range": "± 122796.02725080057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658704.5162179129,
            "unit": "ns",
            "range": "± 33236.33861793769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558074.2448828125,
            "unit": "ns",
            "range": "± 14727.193043061716"
          }
        ]
      }
    ]
  }
}