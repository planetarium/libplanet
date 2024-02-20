window.BENCHMARK_DATA = {
  "lastUpdate": 1708465982808,
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
        "date": 1708465917145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7830875.466666667,
            "unit": "ns",
            "range": "± 228983.57776332335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18872044.411764707,
            "unit": "ns",
            "range": "± 282959.5278926959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49110771.7962963,
            "unit": "ns",
            "range": "± 2066768.8002736678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101838406.30722892,
            "unit": "ns",
            "range": "± 5417861.773958733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203198083.2,
            "unit": "ns",
            "range": "± 8198597.359910251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44523.10824742268,
            "unit": "ns",
            "range": "± 8580.477098667918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274247.9157894737,
            "unit": "ns",
            "range": "± 42232.54418821881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220271.74444444446,
            "unit": "ns",
            "range": "± 25308.073970622434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232587.35714285713,
            "unit": "ns",
            "range": "± 36033.76429114353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263059.5,
            "unit": "ns",
            "range": "± 154694.86789227146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852995.6428571427,
            "unit": "ns",
            "range": "± 186227.27964990895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18958.323529411766,
            "unit": "ns",
            "range": "± 4375.5318212175525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83039.69101123596,
            "unit": "ns",
            "range": "± 15950.27028046604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77677.37755102041,
            "unit": "ns",
            "range": "± 21147.656908677134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88265.97916666667,
            "unit": "ns",
            "range": "± 23242.36878360821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7487.731182795699,
            "unit": "ns",
            "range": "± 1616.5676476907925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14652.641304347826,
            "unit": "ns",
            "range": "± 3995.1651400533096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078751.4742268042,
            "unit": "ns",
            "range": "± 85042.32776009897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2239496.4516129033,
            "unit": "ns",
            "range": "± 100960.70997636678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797187.9191919193,
            "unit": "ns",
            "range": "± 120283.62903466333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8661074.32142857,
            "unit": "ns",
            "range": "± 237068.75479974214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3057940.819587629,
            "unit": "ns",
            "range": "± 267016.0437175525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3231677.413043478,
            "unit": "ns",
            "range": "± 122346.79354647336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3868491.5,
            "unit": "ns",
            "range": "± 171002.21750699708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3764738.404761905,
            "unit": "ns",
            "range": "± 201530.41287051915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17552349.19767442,
            "unit": "ns",
            "range": "± 2358913.1294113398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4752058.784886854,
            "unit": "ns",
            "range": "± 258856.34275912208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406956.940086571,
            "unit": "ns",
            "range": "± 68899.45880195814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 913811.5256510417,
            "unit": "ns",
            "range": "± 11071.645049554894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2077764.5916666666,
            "unit": "ns",
            "range": "± 36194.605263995436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627121.142578125,
            "unit": "ns",
            "range": "± 5743.333497904534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566225.4159505208,
            "unit": "ns",
            "range": "± 6438.322846198337"
          }
        ]
      }
    ]
  }
}