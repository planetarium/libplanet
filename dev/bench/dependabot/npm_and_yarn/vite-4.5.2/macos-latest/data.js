window.BENCHMARK_DATA = {
  "lastUpdate": 1705706009975,
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
          "id": "5d0510f102af048b9756cde98c5824afb734fbeb",
          "message": "Bump vite from 4.1.4 to 4.5.2\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.2.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-19T22:56:24Z",
          "tree_id": "812bb093a755767b10a763f8b7c0eec6c7cfc204",
          "url": "https://github.com/planetarium/libplanet/commit/5d0510f102af048b9756cde98c5824afb734fbeb"
        },
        "date": 1705705923912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8391610.73,
            "unit": "ns",
            "range": "± 502244.1995099506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245593.86170213,
            "unit": "ns",
            "range": "± 2233589.2647529026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59175549.42307692,
            "unit": "ns",
            "range": "± 574675.320403394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119564610.59523809,
            "unit": "ns",
            "range": "± 2752392.2183637074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245985079.40625,
            "unit": "ns",
            "range": "± 11341492.426071608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39260.37362637363,
            "unit": "ns",
            "range": "± 7334.235360657504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286903.4516129032,
            "unit": "ns",
            "range": "± 21502.036479647453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285462.9520547945,
            "unit": "ns",
            "range": "± 14238.646601026354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246540.73711340205,
            "unit": "ns",
            "range": "± 33283.36777981021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3943604.3181818184,
            "unit": "ns",
            "range": "± 122351.68363738773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3456992.1923076925,
            "unit": "ns",
            "range": "± 52899.43382870402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12404.931818181818,
            "unit": "ns",
            "range": "± 843.6056821892225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57500.36666666667,
            "unit": "ns",
            "range": "± 3699.0239418624897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51409.7,
            "unit": "ns",
            "range": "± 2656.5519738701555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59594.71276595745,
            "unit": "ns",
            "range": "± 10987.950479221035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3229.053191489362,
            "unit": "ns",
            "range": "± 352.3468894052789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12179.696629213484,
            "unit": "ns",
            "range": "± 869.5931703505536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066880.857142857,
            "unit": "ns",
            "range": "± 107781.04716297012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2178552.448979592,
            "unit": "ns",
            "range": "± 85615.1103437309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1747567.994736842,
            "unit": "ns",
            "range": "± 112870.43632600542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18627574.994382024,
            "unit": "ns",
            "range": "± 1885664.912906917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290059.1458333335,
            "unit": "ns",
            "range": "± 295287.7456367274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690834.712328767,
            "unit": "ns",
            "range": "± 181454.4711618439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372465.4,
            "unit": "ns",
            "range": "± 147883.74456915783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4425255.189189189,
            "unit": "ns",
            "range": "± 220875.00925219108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27623565.688172042,
            "unit": "ns",
            "range": "± 3866177.6274518617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4223962.642447917,
            "unit": "ns",
            "range": "± 76515.2508564732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1330777.4580078125,
            "unit": "ns",
            "range": "± 16304.704556773462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 873300.7335486779,
            "unit": "ns",
            "range": "± 10646.832214352518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939956.6356534092,
            "unit": "ns",
            "range": "± 45584.715443495195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 714090.7224414062,
            "unit": "ns",
            "range": "± 59857.09598204317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 660826.7279958418,
            "unit": "ns",
            "range": "± 37440.882081006916"
          }
        ]
      }
    ]
  }
}