window.BENCHMARK_DATA = {
  "lastUpdate": 1720673729217,
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
        "date": 1720673397096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994467.3684210526,
            "unit": "ns",
            "range": "± 105872.62664536266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798550.847457627,
            "unit": "ns",
            "range": "± 79677.56655005472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548101.5873015872,
            "unit": "ns",
            "range": "± 70412.8642298603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6832266.666666667,
            "unit": "ns",
            "range": "± 210328.97842823912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30633.333333333332,
            "unit": "ns",
            "range": "± 576.5248931147314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9517280,
            "unit": "ns",
            "range": "± 85319.72808207959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23830900,
            "unit": "ns",
            "range": "± 311458.85022682435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58997264.28571428,
            "unit": "ns",
            "range": "± 312081.2359901551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116077506.66666667,
            "unit": "ns",
            "range": "± 734698.9037953543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237971180,
            "unit": "ns",
            "range": "± 3954235.1883229488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311794.1927083335,
            "unit": "ns",
            "range": "± 9236.626517496086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057504.8270089286,
            "unit": "ns",
            "range": "± 3432.0029865555694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738463.2286658654,
            "unit": "ns",
            "range": "± 1341.620013973125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978165.6529017857,
            "unit": "ns",
            "range": "± 7333.612127838384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609877.6216947115,
            "unit": "ns",
            "range": "± 1645.3481975696334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576916.9782366072,
            "unit": "ns",
            "range": "± 1155.6633971567885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151560,
            "unit": "ns",
            "range": "± 55938.20235544418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262070.3703703703,
            "unit": "ns",
            "range": "± 91357.01402290353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2742872.222222222,
            "unit": "ns",
            "range": "± 55529.6614491174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296370.588235294,
            "unit": "ns",
            "range": "± 45985.29336518745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3055025,
            "unit": "ns",
            "range": "± 79406.82398668375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176186.11111111112,
            "unit": "ns",
            "range": "± 8035.1745303981625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169067.46987951806,
            "unit": "ns",
            "range": "± 8998.415964039814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146593.33333333334,
            "unit": "ns",
            "range": "± 2557.4727108351844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2747828.5714285714,
            "unit": "ns",
            "range": "± 29100.26245114079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2412843.75,
            "unit": "ns",
            "range": "± 47365.35961719985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10664.444444444445,
            "unit": "ns",
            "range": "± 984.978310502216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55406.18556701031,
            "unit": "ns",
            "range": "± 5482.107533318993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44581.25,
            "unit": "ns",
            "range": "± 681.3895117087338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54486.868686868685,
            "unit": "ns",
            "range": "± 10642.89210410985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2501.0309278350514,
            "unit": "ns",
            "range": "± 602.1653367502196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10104.347826086956,
            "unit": "ns",
            "range": "± 1365.7838423634817"
          }
        ]
      }
    ]
  }
}