window.BENCHMARK_DATA = {
  "lastUpdate": 1708465602034,
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
          "id": "5caa4179f59387bf28ad0c8d9f09e1bb45d595b4",
          "message": "Bump ip from 2.0.0 to 2.0.1\n\nBumps [ip](https://github.com/indutny/node-ip) from 2.0.0 to 2.0.1.\n- [Commits](https://github.com/indutny/node-ip/compare/v2.0.0...v2.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: ip\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-02-20T21:35:36Z",
          "tree_id": "7d09dc671c198c475b6593a51610c79165be84a3",
          "url": "https://github.com/planetarium/libplanet/commit/5caa4179f59387bf28ad0c8d9f09e1bb45d595b4"
        },
        "date": 1708465574683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5644068.428571428,
            "unit": "ns",
            "range": "± 27656.588018782422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14483132.42857143,
            "unit": "ns",
            "range": "± 88970.39396140917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37159126.928571425,
            "unit": "ns",
            "range": "± 283609.189932396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76384501.25,
            "unit": "ns",
            "range": "± 502017.40851544996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153330659.92857143,
            "unit": "ns",
            "range": "± 825366.77975214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231749.88764044945,
            "unit": "ns",
            "range": "± 13315.58433022801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230861.1976744186,
            "unit": "ns",
            "range": "± 12513.34540595361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173750.84375,
            "unit": "ns",
            "range": "± 5404.67900696672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3282469.9285714286,
            "unit": "ns",
            "range": "± 40486.88568957434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2916336.433333333,
            "unit": "ns",
            "range": "± 54010.40345878702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17043.055555555555,
            "unit": "ns",
            "range": "± 3266.9373107377264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82448.08,
            "unit": "ns",
            "range": "± 16946.480538448097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97538.9,
            "unit": "ns",
            "range": "± 2211.6124363054782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89102.77083333333,
            "unit": "ns",
            "range": "± 13884.044549109845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5969.949494949495,
            "unit": "ns",
            "range": "± 1799.8763867630723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15434.848484848484,
            "unit": "ns",
            "range": "± 3433.929591006866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39073.12365591398,
            "unit": "ns",
            "range": "± 4346.472922692052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002908.4042553192,
            "unit": "ns",
            "range": "± 73904.9361801484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2001994.5714285714,
            "unit": "ns",
            "range": "± 102528.44776520738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642464.2631578948,
            "unit": "ns",
            "range": "± 100049.88650277042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8003841.821428572,
            "unit": "ns",
            "range": "± 149200.70128994493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728291.6150841345,
            "unit": "ns",
            "range": "± 12111.336084244509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1235087.2771809895,
            "unit": "ns",
            "range": "± 3192.445109635709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782785.8473557692,
            "unit": "ns",
            "range": "± 2002.6366160553089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979989.094951923,
            "unit": "ns",
            "range": "± 5376.662719633365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632128.1624348959,
            "unit": "ns",
            "range": "± 891.7284573280868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566420.849233774,
            "unit": "ns",
            "range": "± 1154.0213702697622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2495894.214285714,
            "unit": "ns",
            "range": "± 22002.872334096508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535373.9782608696,
            "unit": "ns",
            "range": "± 96539.23207610448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3125045.6666666665,
            "unit": "ns",
            "range": "± 79919.12123796954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3296612.5,
            "unit": "ns",
            "range": "± 149274.57048928965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8954880.594594594,
            "unit": "ns",
            "range": "± 194421.72912118124"
          }
        ]
      }
    ]
  }
}