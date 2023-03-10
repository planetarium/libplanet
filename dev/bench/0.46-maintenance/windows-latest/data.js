window.BENCHMARK_DATA = {
  "lastUpdate": 1678418644189,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "817a98f02924626bbd45d526378b982a9c85b128",
          "message": "Merge pull request #2911 from colibrishin/benchmark/fix/0.46-maintenance\n\nci/bench: cherrypick of bench pr update to 0.46-maintenance",
          "timestamp": "2023-03-10T12:04:29+09:00",
          "tree_id": "03862efdee3eb379f92abe122d993e0ea57039ee",
          "url": "https://github.com/planetarium/libplanet/commit/817a98f02924626bbd45d526378b982a9c85b128"
        },
        "date": 1678418590765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142761.11111111112,
            "unit": "ns",
            "range": "± 11385.144020588323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5963943.694196428,
            "unit": "ns",
            "range": "± 48289.053672217684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926094.43359375,
            "unit": "ns",
            "range": "± 28677.257066925282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408090.744357639,
            "unit": "ns",
            "range": "± 27849.31129252123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3114445.0260416665,
            "unit": "ns",
            "range": "± 42938.91221440661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048613.7890625,
            "unit": "ns",
            "range": "± 24143.174180931557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944406.3616071428,
            "unit": "ns",
            "range": "± 8225.230726088555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5810430.588329081,
            "unit": "ns",
            "range": "± 365698.2848306657"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6180653.76344086,
            "unit": "ns",
            "range": "± 346881.5637245469"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30034616.666666668,
            "unit": "ns",
            "range": "± 986533.9900016478"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7214620.202020202,
            "unit": "ns",
            "range": "± 611385.9008775026"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35179389.02439024,
            "unit": "ns",
            "range": "± 1857166.106773881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106129.34782608696,
            "unit": "ns",
            "range": "± 11884.291396106782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226755.68181818182,
            "unit": "ns",
            "range": "± 12847.405551894048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182244.44444444444,
            "unit": "ns",
            "range": "± 11418.37776619278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4230102.2727272725,
            "unit": "ns",
            "range": "± 156123.38067923902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11030405.263157895,
            "unit": "ns",
            "range": "± 210229.52661234132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26802.04081632653,
            "unit": "ns",
            "range": "± 5798.96861771511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61272.04301075269,
            "unit": "ns",
            "range": "± 7549.940477614461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50167.67676767677,
            "unit": "ns",
            "range": "± 7221.761731509815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120090.4255319149,
            "unit": "ns",
            "range": "± 19366.68278171337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6944.047619047619,
            "unit": "ns",
            "range": "± 1535.2368201976683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30229.166666666668,
            "unit": "ns",
            "range": "± 6567.558493184779"
          }
        ]
      }
    ]
  }
}