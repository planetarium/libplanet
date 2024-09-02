window.BENCHMARK_DATA = {
  "lastUpdate": 1725285716272,
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
          "id": "bbb93deb32b1925dea7ad9cac7628dce59232c62",
          "message": "Bump micromatch from 4.0.5 to 4.0.8\n\nBumps [micromatch](https://github.com/micromatch/micromatch) from 4.0.5 to 4.0.8.\n- [Release notes](https://github.com/micromatch/micromatch/releases)\n- [Changelog](https://github.com/micromatch/micromatch/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/micromatch/micromatch/compare/4.0.5...4.0.8)\n\n---\nupdated-dependencies:\n- dependency-name: micromatch\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-09-02T13:53:00Z",
          "tree_id": "cecb61529e6d42fdf28c2ada2f6283de918c10a0",
          "url": "https://github.com/planetarium/libplanet/commit/bbb93deb32b1925dea7ad9cac7628dce59232c62"
        },
        "date": 1725285690100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198199.73913043478,
            "unit": "ns",
            "range": "± 7644.579187414896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191752.19090909092,
            "unit": "ns",
            "range": "± 7717.7803680916595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171746.8409090909,
            "unit": "ns",
            "range": "± 6254.016190336031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3138671.2666666666,
            "unit": "ns",
            "range": "± 56138.75824555065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814656.2666666666,
            "unit": "ns",
            "range": "± 37676.147193581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12784.58988764045,
            "unit": "ns",
            "range": "± 841.3869858811785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59775.65882352941,
            "unit": "ns",
            "range": "± 2838.298851479196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50704.61538461538,
            "unit": "ns",
            "range": "± 349.071276976861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55201.62886597938,
            "unit": "ns",
            "range": "± 9028.79592530614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2860.0154639175257,
            "unit": "ns",
            "range": "± 350.72131367018886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13528.535353535353,
            "unit": "ns",
            "range": "± 2332.4012296743354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2476276.537037037,
            "unit": "ns",
            "range": "± 67039.99283635533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2545509.3571428573,
            "unit": "ns",
            "range": "± 26692.291726861302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130984.1666666665,
            "unit": "ns",
            "range": "± 63766.69671475671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2593744.8333333335,
            "unit": "ns",
            "range": "± 70603.24737682995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3212067.730769231,
            "unit": "ns",
            "range": "± 25947.521603401245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10526029.15,
            "unit": "ns",
            "range": "± 240841.07210669576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27131214.2,
            "unit": "ns",
            "range": "± 186891.85616370308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69410425.93333334,
            "unit": "ns",
            "range": "± 654058.1862913887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137146948.85714287,
            "unit": "ns",
            "range": "± 809611.3770994467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287557888.2,
            "unit": "ns",
            "range": "± 1321404.6670470568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998583.9788732395,
            "unit": "ns",
            "range": "± 41706.901552161486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1966931.0606060605,
            "unit": "ns",
            "range": "± 57692.853511580724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666161.4810126582,
            "unit": "ns",
            "range": "± 86212.92759460339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8090223.578947368,
            "unit": "ns",
            "range": "± 163987.37979298414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734762.2208533655,
            "unit": "ns",
            "range": "± 6144.507353670848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209802.7704326923,
            "unit": "ns",
            "range": "± 2985.311228914075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767691.3000837053,
            "unit": "ns",
            "range": "± 1114.5490017713073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904066.5951450893,
            "unit": "ns",
            "range": "± 2541.478130994305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625025.2910853794,
            "unit": "ns",
            "range": "± 634.1327927497565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577209.3979166667,
            "unit": "ns",
            "range": "± 729.5817215065327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32206.5,
            "unit": "ns",
            "range": "± 350.0746623661433"
          }
        ]
      }
    ]
  }
}