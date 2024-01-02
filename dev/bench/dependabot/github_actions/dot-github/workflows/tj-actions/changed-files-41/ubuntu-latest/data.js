window.BENCHMARK_DATA = {
  "lastUpdate": 1704214875357,
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
        "date": 1704214841304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754500.00625,
            "unit": "ns",
            "range": "± 83572.10337651704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218514.1316964286,
            "unit": "ns",
            "range": "± 2750.954842160006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775973.1150390625,
            "unit": "ns",
            "range": "± 11780.358692157422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932286.5802083334,
            "unit": "ns",
            "range": "± 4767.444107177108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632297.6796123798,
            "unit": "ns",
            "range": "± 1235.8628238682802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575463.125390625,
            "unit": "ns",
            "range": "± 984.4924741361857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2366213.9444444445,
            "unit": "ns",
            "range": "± 56687.369584504944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461046.7333333334,
            "unit": "ns",
            "range": "± 28747.083043245242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3093521.153846154,
            "unit": "ns",
            "range": "± 30087.783791338952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3362772.8571428573,
            "unit": "ns",
            "range": "± 117911.24730368514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14351030.8,
            "unit": "ns",
            "range": "± 1079823.720452966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41348.0625,
            "unit": "ns",
            "range": "± 5361.365175346766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201053.22916666666,
            "unit": "ns",
            "range": "± 7907.030111262243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194227.5588235294,
            "unit": "ns",
            "range": "± 5495.616298144817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164773.07692307694,
            "unit": "ns",
            "range": "± 4146.36133421174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3236103.25,
            "unit": "ns",
            "range": "± 74014.09564604996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840940.6,
            "unit": "ns",
            "range": "± 35234.832839920535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12985.364583333334,
            "unit": "ns",
            "range": "± 1208.3538704395085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67568,
            "unit": "ns",
            "range": "± 6996.601031929718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52093.1875,
            "unit": "ns",
            "range": "± 619.6887088154289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64432.891304347824,
            "unit": "ns",
            "range": "± 9088.769893987723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3395.2473118279568,
            "unit": "ns",
            "range": "± 470.22197940033976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14236.474747474747,
            "unit": "ns",
            "range": "± 2353.366868818749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5488567.233333333,
            "unit": "ns",
            "range": "± 17298.34462958261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14174952.266666668,
            "unit": "ns",
            "range": "± 158410.96269895442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36298108.384615384,
            "unit": "ns",
            "range": "± 183576.03701896864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75657744.73076923,
            "unit": "ns",
            "range": "± 913760.4888272741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148510995.8,
            "unit": "ns",
            "range": "± 1078945.2701888476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025269.6770833334,
            "unit": "ns",
            "range": "± 108256.3647254924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877530.3,
            "unit": "ns",
            "range": "± 83415.76892682964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656273.244680851,
            "unit": "ns",
            "range": "± 131062.05772278599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12619619.268421052,
            "unit": "ns",
            "range": "± 987649.9849108667"
          }
        ]
      }
    ]
  }
}