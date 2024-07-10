window.BENCHMARK_DATA = {
  "lastUpdate": 1720602829816,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "75d926d458b48de17425f08b183e0106ce522d4f",
          "message": "Release 5.1.0",
          "timestamp": "2024-07-10T18:05:01+09:00",
          "tree_id": "0d6de7376dc1957e144a0ef6b1a65bada361e378",
          "url": "https://github.com/planetarium/libplanet/commit/75d926d458b48de17425f08b183e0106ce522d4f"
        },
        "date": 1720602774847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10801452.307692308,
            "unit": "ns",
            "range": "± 136245.89945535033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26393452.785714287,
            "unit": "ns",
            "range": "± 139067.52904209387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67793758.8,
            "unit": "ns",
            "range": "± 135501.8744447049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135793314.2,
            "unit": "ns",
            "range": "± 334660.5902205141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273532361.53846157,
            "unit": "ns",
            "range": "± 287891.5362382204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14402.277777777777,
            "unit": "ns",
            "range": "± 303.0862439006925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111720.10638297872,
            "unit": "ns",
            "range": "± 3984.6212041561175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104931.63414634146,
            "unit": "ns",
            "range": "± 3486.3582486320706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91188.74242424243,
            "unit": "ns",
            "range": "± 2844.768257590403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3022227.616883117,
            "unit": "ns",
            "range": "± 153187.81363909345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736192,
            "unit": "ns",
            "range": "± 185831.90039121406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5107.983146067416,
            "unit": "ns",
            "range": "± 429.8691691126803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26618.747252747253,
            "unit": "ns",
            "range": "± 1748.0438946523216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22249.616666666665,
            "unit": "ns",
            "range": "± 991.8800004590951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31085.202127659573,
            "unit": "ns",
            "range": "± 4998.791659539263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1031.9157894736843,
            "unit": "ns",
            "range": "± 175.034808888142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4837.159574468085,
            "unit": "ns",
            "range": "± 690.34241625554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680136.0757575758,
            "unit": "ns",
            "range": "± 31746.01780444795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1277504.7173913044,
            "unit": "ns",
            "range": "± 44391.6714814655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076711.0921052631,
            "unit": "ns",
            "range": "± 52664.42415095227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9404657.4,
            "unit": "ns",
            "range": "± 1372646.7545371582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210611.923076923,
            "unit": "ns",
            "range": "± 34328.2744407132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259757.5384615385,
            "unit": "ns",
            "range": "± 89148.28428390082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2567127.6428571427,
            "unit": "ns",
            "range": "± 43249.542611378056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282723.214285714,
            "unit": "ns",
            "range": "± 34257.514498346136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3029630.9166666665,
            "unit": "ns",
            "range": "± 187948.10410097483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3019225.2243303573,
            "unit": "ns",
            "range": "± 32874.565869266604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925455.1212239583,
            "unit": "ns",
            "range": "± 6019.084714925168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 604446.5576171875,
            "unit": "ns",
            "range": "± 1042.810465129284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1656516.0868489584,
            "unit": "ns",
            "range": "± 15298.478511381587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468514.29964192706,
            "unit": "ns",
            "range": "± 967.3841238512761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418438.4063802083,
            "unit": "ns",
            "range": "± 1068.699975559126"
          }
        ]
      }
    ]
  }
}