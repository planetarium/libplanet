window.BENCHMARK_DATA = {
  "lastUpdate": 1690509238178,
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
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509209219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308285.4948453608,
            "unit": "ns",
            "range": "± 44667.70014043605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279452.376344086,
            "unit": "ns",
            "range": "± 31183.471497041915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242298.52747252746,
            "unit": "ns",
            "range": "± 28097.175547390947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977097.0212765955,
            "unit": "ns",
            "range": "± 231658.78386067296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649443.2210526317,
            "unit": "ns",
            "range": "± 251201.06422918706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26968.87,
            "unit": "ns",
            "range": "± 10478.30365700403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94110.20833333333,
            "unit": "ns",
            "range": "± 16886.12803950825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88621.6170212766,
            "unit": "ns",
            "range": "± 14837.595419414993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112206.40425531915,
            "unit": "ns",
            "range": "± 20472.168245010707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.707317073171,
            "unit": "ns",
            "range": "± 806.3592999938305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24126.161616161615,
            "unit": "ns",
            "range": "± 9629.580411003433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382372.8510638298,
            "unit": "ns",
            "range": "± 187442.05574580678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700167.9793814435,
            "unit": "ns",
            "range": "± 231956.91068233183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1749941.4845360825,
            "unit": "ns",
            "range": "± 190904.4995964995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234887.826530612,
            "unit": "ns",
            "range": "± 506519.73653988406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878083.1484375,
            "unit": "ns",
            "range": "± 101853.44730633617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819521.6183035714,
            "unit": "ns",
            "range": "± 23407.122079064993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354149.430480957,
            "unit": "ns",
            "range": "± 42068.07021116209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578229.3326480263,
            "unit": "ns",
            "range": "± 56082.072764770135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832406.1469401042,
            "unit": "ns",
            "range": "± 9431.63584975913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773336.6622924805,
            "unit": "ns",
            "range": "± 14627.854585037445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183890.4591836734,
            "unit": "ns",
            "range": "± 351276.4115071544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320652.787234043,
            "unit": "ns",
            "range": "± 297674.07893999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212913.107526882,
            "unit": "ns",
            "range": "± 373225.8573749268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3741284.12371134,
            "unit": "ns",
            "range": "± 417591.35978178616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705644.958333333,
            "unit": "ns",
            "range": "± 579409.3801125586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8006018.263888889,
            "unit": "ns",
            "range": "± 394447.0683476863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20362479.108433735,
            "unit": "ns",
            "range": "± 1080347.6683615306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52893735.061855674,
            "unit": "ns",
            "range": "± 4010705.6381442393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96644734.58333333,
            "unit": "ns",
            "range": "± 2439958.319306329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194117314.625,
            "unit": "ns",
            "range": "± 3731493.1646782523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56076.010416666664,
            "unit": "ns",
            "range": "± 12988.603654536048"
          }
        ]
      }
    ]
  }
}