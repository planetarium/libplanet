window.BENCHMARK_DATA = {
  "lastUpdate": 1720673567315,
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
          "id": "9068da120aca20e5d3b559519f08bd0034ca8eb2",
          "message": "Bump vite from 4.1.4 to 4.5.3\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.3.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.3/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.3/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "17f3ae096d1ed211125c1f4b083f9dc8ffd1d478",
          "url": "https://github.com/planetarium/libplanet/commit/9068da120aca20e5d3b559519f08bd0034ca8eb2"
        },
        "date": 1720673303973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977659.595959596,
            "unit": "ns",
            "range": "± 80974.39746446432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741570,
            "unit": "ns",
            "range": "± 67076.02829199543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1500780.5882352942,
            "unit": "ns",
            "range": "± 77869.53378129682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6855566.666666667,
            "unit": "ns",
            "range": "± 224221.12045287542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30060,
            "unit": "ns",
            "range": "± 465.67922742714524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9481060,
            "unit": "ns",
            "range": "± 75997.10332825662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23212192.307692308,
            "unit": "ns",
            "range": "± 122138.54470462674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57510220,
            "unit": "ns",
            "range": "± 209022.11502955513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114533250,
            "unit": "ns",
            "range": "± 337689.2768393863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230266233.33333334,
            "unit": "ns",
            "range": "± 778869.1139509042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3245453.3723958335,
            "unit": "ns",
            "range": "± 5738.178876441013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067729.4921875,
            "unit": "ns",
            "range": "± 1569.4449920160362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746709.5703125,
            "unit": "ns",
            "range": "± 1196.3904385764483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913582.734375,
            "unit": "ns",
            "range": "± 3953.8947784682096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612505.9012276785,
            "unit": "ns",
            "range": "± 2085.228188767379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558162.1920072115,
            "unit": "ns",
            "range": "± 839.2981217666611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166884.6153846155,
            "unit": "ns",
            "range": "± 9161.226824125519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2231833.3333333335,
            "unit": "ns",
            "range": "± 36235.23607392856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2700705,
            "unit": "ns",
            "range": "± 59688.246881521605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2275968.75,
            "unit": "ns",
            "range": "± 43597.778517565166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2884950,
            "unit": "ns",
            "range": "± 44328.22941509082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168392.72727272726,
            "unit": "ns",
            "range": "± 6894.518878963968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160163.07692307694,
            "unit": "ns",
            "range": "± 7222.459960748511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141885.7142857143,
            "unit": "ns",
            "range": "± 1124.4534691998617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2703057.1428571427,
            "unit": "ns",
            "range": "± 30761.332227970237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2370000,
            "unit": "ns",
            "range": "± 37394.8239351766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9746.59090909091,
            "unit": "ns",
            "range": "± 759.7562923888498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48278.57142857143,
            "unit": "ns",
            "range": "± 2155.523665364155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44157.89473684211,
            "unit": "ns",
            "range": "± 716.7176644441769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44623.456790123455,
            "unit": "ns",
            "range": "± 3360.330028618405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2182.9896907216494,
            "unit": "ns",
            "range": "± 338.7235996737531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9441.304347826086,
            "unit": "ns",
            "range": "± 787.8405837956014"
          }
        ]
      }
    ]
  }
}