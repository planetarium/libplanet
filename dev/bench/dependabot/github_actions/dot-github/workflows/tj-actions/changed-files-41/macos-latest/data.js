window.BENCHMARK_DATA = {
  "lastUpdate": 1704215697820,
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
          "id": "ad1adcfa5e73650cc1450919baf5390f1434ea58",
          "message": "chore(deps): bump tj-actions/changed-files in /.github/workflows\n\nBumps [tj-actions/changed-files](https://github.com/tj-actions/changed-files) from 35 to 41.\n- [Release notes](https://github.com/tj-actions/changed-files/releases)\n- [Changelog](https://github.com/tj-actions/changed-files/blob/main/HISTORY.md)\n- [Commits](https://github.com/tj-actions/changed-files/compare/v35...v41)\n\n---\nupdated-dependencies:\n- dependency-name: tj-actions/changed-files\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-02T16:49:39Z",
          "tree_id": "d9a90a0fa421cca9442baba4591fba8de5eabfcd",
          "url": "https://github.com/planetarium/libplanet/commit/ad1adcfa5e73650cc1450919baf5390f1434ea58"
        },
        "date": 1704215589930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7946987.358695652,
            "unit": "ns",
            "range": "± 605425.3950684897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21195175.98,
            "unit": "ns",
            "range": "± 2651028.5853870786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54463505.13402062,
            "unit": "ns",
            "range": "± 7135494.9470511675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107298434.1,
            "unit": "ns",
            "range": "± 12815188.25540458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208362620.28,
            "unit": "ns",
            "range": "± 17711629.469505906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43612.11827956989,
            "unit": "ns",
            "range": "± 11170.126072475114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229390.82631578948,
            "unit": "ns",
            "range": "± 22700.3655338655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226379.1875,
            "unit": "ns",
            "range": "± 27076.297523193116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202184.54736842104,
            "unit": "ns",
            "range": "± 19311.795233587396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4999209.592783505,
            "unit": "ns",
            "range": "± 693894.139524735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4676481.255555555,
            "unit": "ns",
            "range": "± 396305.13852034585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22565.220430107525,
            "unit": "ns",
            "range": "± 4048.8510296282266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94275.02083333333,
            "unit": "ns",
            "range": "± 16571.322055050197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93255.4255319149,
            "unit": "ns",
            "range": "± 12377.129877526027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101026.4574468085,
            "unit": "ns",
            "range": "± 18528.82459680133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7669.1373626373625,
            "unit": "ns",
            "range": "± 1414.072452304443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21580.886597938144,
            "unit": "ns",
            "range": "± 3026.393552551069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1136581.8737373736,
            "unit": "ns",
            "range": "± 140807.0181816078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201271.2682926827,
            "unit": "ns",
            "range": "± 115403.30815457468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682308.8101265824,
            "unit": "ns",
            "range": "± 83065.27409275497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18578847.5,
            "unit": "ns",
            "range": "± 2416924.2139688754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2953980.536082474,
            "unit": "ns",
            "range": "± 215854.3022868214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3152599.242424242,
            "unit": "ns",
            "range": "± 346788.4024117998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3555912.897959184,
            "unit": "ns",
            "range": "± 141565.98895041918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3829630.3263157895,
            "unit": "ns",
            "range": "± 333395.8737640949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23910648.69387755,
            "unit": "ns",
            "range": "± 4124172.3699699305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6457679.28415891,
            "unit": "ns",
            "range": "± 525883.6917017447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919655.2966105144,
            "unit": "ns",
            "range": "± 192730.2595436191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1251347.4926304768,
            "unit": "ns",
            "range": "± 118397.82724090245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2739578.309950658,
            "unit": "ns",
            "range": "± 164272.45422921175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878123.8178865132,
            "unit": "ns",
            "range": "± 67034.72452919309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807379.8270786831,
            "unit": "ns",
            "range": "± 34461.22011866529"
          }
        ]
      }
    ]
  }
}