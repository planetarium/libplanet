window.BENCHMARK_DATA = {
  "lastUpdate": 1720674185661,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f587277e33b1b4b848999929378dca07a5670fc",
          "message": "Bump tar from 6.1.13 to 6.2.1\n\nBumps [tar](https://github.com/isaacs/node-tar) from 6.1.13 to 6.2.1.\n- [Release notes](https://github.com/isaacs/node-tar/releases)\n- [Changelog](https://github.com/isaacs/node-tar/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/isaacs/node-tar/compare/v6.1.13...v6.2.1)\n\n---\nupdated-dependencies:\n- dependency-name: tar\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "fc5c9cddcc331385dcc8f851b22e5f7d8ffc9227",
          "url": "https://github.com/planetarium/libplanet/commit/7f587277e33b1b4b848999929378dca07a5670fc"
        },
        "date": 1720674131745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10759884.357142856,
            "unit": "ns",
            "range": "± 99250.03595938675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26608041.214285713,
            "unit": "ns",
            "range": "± 216393.10533491822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67739560.28571428,
            "unit": "ns",
            "range": "± 118651.67795204232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135930191.33333334,
            "unit": "ns",
            "range": "± 201922.8050481763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274864789.26666665,
            "unit": "ns",
            "range": "± 438239.12433550745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14175.842105263158,
            "unit": "ns",
            "range": "± 314.1335991718412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110203.53571428571,
            "unit": "ns",
            "range": "± 4736.833748648738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104605.5,
            "unit": "ns",
            "range": "± 3751.822683284554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90474.96666666666,
            "unit": "ns",
            "range": "± 2691.4396318613617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075652.640625,
            "unit": "ns",
            "range": "± 141279.19017471877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743983.5823529414,
            "unit": "ns",
            "range": "± 147877.50417323472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5121.61797752809,
            "unit": "ns",
            "range": "± 436.2106847514371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27423.05376344086,
            "unit": "ns",
            "range": "± 2034.9378708900235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24243.342465753423,
            "unit": "ns",
            "range": "± 1202.2245031974185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30298.197916666668,
            "unit": "ns",
            "range": "± 5424.859852897083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1416.8602150537633,
            "unit": "ns",
            "range": "± 186.93596854200072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4823.758241758242,
            "unit": "ns",
            "range": "± 491.67410933709925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676083.6756756756,
            "unit": "ns",
            "range": "± 31951.94246420456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1277771.0833333333,
            "unit": "ns",
            "range": "± 41772.94085230295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1042358.1363636364,
            "unit": "ns",
            "range": "± 40661.282957097785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9681562.4,
            "unit": "ns",
            "range": "± 1410179.0398195768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159408.2027027025,
            "unit": "ns",
            "range": "± 72724.42714753369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282743.588235294,
            "unit": "ns",
            "range": "± 72932.09977203896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2571080.1666666665,
            "unit": "ns",
            "range": "± 32507.914974198164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2293948.25,
            "unit": "ns",
            "range": "± 76955.70838250952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3214551.53,
            "unit": "ns",
            "range": "± 391752.3071457903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034700.562239583,
            "unit": "ns",
            "range": "± 36946.434891899655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 943573.3537109375,
            "unit": "ns",
            "range": "± 5832.518292820224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617055.3471354167,
            "unit": "ns",
            "range": "± 4920.157639530677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1653224.7821614584,
            "unit": "ns",
            "range": "± 14013.634691063957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460587.3458909255,
            "unit": "ns",
            "range": "± 419.9302233188183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427066.71902901784,
            "unit": "ns",
            "range": "± 1185.7415290818446"
          }
        ]
      }
    ]
  }
}