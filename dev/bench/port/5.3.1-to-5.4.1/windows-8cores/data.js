window.BENCHMARK_DATA = {
  "lastUpdate": 1732170975811,
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
          "id": "59e1e9931fc0bce80211118d7993f66e33140ae3",
          "message": "Merge remote-tracking branch 'origin/5.3-maintenance' into port/5.3.1-to-5.4.1",
          "timestamp": "2024-11-21T15:20:43+09:00",
          "tree_id": "ba7a58da7d784e0910c6b85c10e0307923c0f2fd",
          "url": "https://github.com/planetarium/libplanet/commit/59e1e9931fc0bce80211118d7993f66e33140ae3"
        },
        "date": 1732170751322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014864.5833333334,
            "unit": "ns",
            "range": "± 95266.10705549363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2064627,
            "unit": "ns",
            "range": "± 138883.77879043727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1526777.7777777778,
            "unit": "ns",
            "range": "± 100387.72002633037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6586662.790697674,
            "unit": "ns",
            "range": "± 225771.9097876647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29332.14285714286,
            "unit": "ns",
            "range": "± 1529.167086797893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10044600,
            "unit": "ns",
            "range": "± 124907.77740854592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24402923.076923076,
            "unit": "ns",
            "range": "± 272778.18569259456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61751726.666666664,
            "unit": "ns",
            "range": "± 775447.661001296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123832392.85714285,
            "unit": "ns",
            "range": "± 1162864.5826739082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251520660,
            "unit": "ns",
            "range": "± 3192503.8985992526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3434405.3185096155,
            "unit": "ns",
            "range": "± 16241.192115991138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080593.275669643,
            "unit": "ns",
            "range": "± 2974.810117903498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739263.8151041666,
            "unit": "ns",
            "range": "± 1693.3401637981926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981293.9603365385,
            "unit": "ns",
            "range": "± 7790.473807971779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647840.2994791666,
            "unit": "ns",
            "range": "± 2179.426229704332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560548.9127604166,
            "unit": "ns",
            "range": "± 1042.7318713376592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2262160.714285714,
            "unit": "ns",
            "range": "± 63564.15446463701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298123.529411765,
            "unit": "ns",
            "range": "± 44850.14673069315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764278.947368421,
            "unit": "ns",
            "range": "± 82380.76775655418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2401955.882352941,
            "unit": "ns",
            "range": "± 77450.133286958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3031936.8421052634,
            "unit": "ns",
            "range": "± 62055.48780931032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100714.28571428571,
            "unit": "ns",
            "range": "± 5986.594318294973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175995,
            "unit": "ns",
            "range": "± 7881.095703741037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152797.46835443037,
            "unit": "ns",
            "range": "± 7943.437457222549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756923.076923077,
            "unit": "ns",
            "range": "± 27516.121148826973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2692140,
            "unit": "ns",
            "range": "± 47781.82260471623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15381.443298969072,
            "unit": "ns",
            "range": "± 3182.8096175950695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61235.78947368421,
            "unit": "ns",
            "range": "± 4278.892175911834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47079.76190476191,
            "unit": "ns",
            "range": "± 2527.4292745413027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71226.26262626263,
            "unit": "ns",
            "range": "± 14791.873015885403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3261.7021276595747,
            "unit": "ns",
            "range": "± 619.7218215654963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12127.586206896553,
            "unit": "ns",
            "range": "± 1350.42539853812"
          }
        ]
      }
    ]
  }
}