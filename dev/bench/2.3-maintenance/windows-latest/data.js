window.BENCHMARK_DATA = {
  "lastUpdate": 1688029787019,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109",
          "message": "Merge pull request #3252 from greymistcube/release/2.3.0\n\n🚀 Release 2.3.0",
          "timestamp": "2023-06-29T14:35:16+09:00",
          "tree_id": "e73d3fb6303de55230d2e5a46b9e5b507b528da9",
          "url": "https://github.com/planetarium/libplanet/commit/4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109"
        },
        "date": 1688021106820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1841117.3469387756,
            "unit": "ns",
            "range": "± 181050.80281825908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3319078.2608695654,
            "unit": "ns",
            "range": "± 362198.56214970787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2712244.4444444445,
            "unit": "ns",
            "range": "± 200916.59855654184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6751709.375,
            "unit": "ns",
            "range": "± 542023.2486911521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75263.82978723405,
            "unit": "ns",
            "range": "± 12800.887074972577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8884935.051546391,
            "unit": "ns",
            "range": "± 877336.9726338094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23933384.69387755,
            "unit": "ns",
            "range": "± 2331584.372581086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62771291.76470588,
            "unit": "ns",
            "range": "± 3366703.164401827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132588446.15384616,
            "unit": "ns",
            "range": "± 3522210.096996574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250477300,
            "unit": "ns",
            "range": "± 15026152.186112119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6351372.7890625,
            "unit": "ns",
            "range": "± 446282.49485403637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947903.61328125,
            "unit": "ns",
            "range": "± 21010.354220473786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476677.8255208333,
            "unit": "ns",
            "range": "± 10544.987245509903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3148850.9765625,
            "unit": "ns",
            "range": "± 173678.55968541658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027442.4731809702,
            "unit": "ns",
            "range": "± 48602.70649563004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996840.8658854166,
            "unit": "ns",
            "range": "± 10528.122704734866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594044,
            "unit": "ns",
            "range": "± 528734.2741783524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3802619.1919191917,
            "unit": "ns",
            "range": "± 468943.89609966805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5304559.375,
            "unit": "ns",
            "range": "± 507784.8053484499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4581719.587628866,
            "unit": "ns",
            "range": "± 647484.4214083415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8669075.789473685,
            "unit": "ns",
            "range": "± 672389.4658375584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336328.5714285714,
            "unit": "ns",
            "range": "± 65661.62556748766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300979.38144329895,
            "unit": "ns",
            "range": "± 46267.5460819648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274511.1111111111,
            "unit": "ns",
            "range": "± 49029.69714177377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5219553.846153846,
            "unit": "ns",
            "range": "± 74511.37066900836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4705781.481481481,
            "unit": "ns",
            "range": "± 129542.91251294367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32906.31578947369,
            "unit": "ns",
            "range": "± 6177.943101311787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142559.78260869565,
            "unit": "ns",
            "range": "± 9980.619238894054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134584.94623655913,
            "unit": "ns",
            "range": "± 16597.504698759356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138259,
            "unit": "ns",
            "range": "± 37016.731393118745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8600,
            "unit": "ns",
            "range": "± 2521.530814219573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29117.525773195877,
            "unit": "ns",
            "range": "± 8186.574506334522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00a04b95448b57c36f51eef24e613fe85f2b0121",
          "message": "Merge pull request #3254 from greymistcube/prepare/2.3.1\n\n🔧 Prepare 2.3.1",
          "timestamp": "2023-06-29T17:51:53+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/planetarium/libplanet/commit/00a04b95448b57c36f51eef24e613fe85f2b0121"
        },
        "date": 1688029733272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430141.836734694,
            "unit": "ns",
            "range": "± 125275.5617667431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662095.081967213,
            "unit": "ns",
            "range": "± 116224.44726509352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235932.9896907215,
            "unit": "ns",
            "range": "± 125537.43359523076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5299103.125,
            "unit": "ns",
            "range": "± 163400.32274689767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46376.666666666664,
            "unit": "ns",
            "range": "± 2601.7301935442883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7429320,
            "unit": "ns",
            "range": "± 133287.3276582801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20374540,
            "unit": "ns",
            "range": "± 333621.8492331015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52043166.666666664,
            "unit": "ns",
            "range": "± 663023.1828166953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103117193.33333333,
            "unit": "ns",
            "range": "± 1287264.9230423542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208267894.11764705,
            "unit": "ns",
            "range": "± 4152642.8854812733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4874046.763392857,
            "unit": "ns",
            "range": "± 17745.647753302837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579246.568080357,
            "unit": "ns",
            "range": "± 5992.294804715081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212857.3046875,
            "unit": "ns",
            "range": "± 8775.982942532559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676779.011418269,
            "unit": "ns",
            "range": "± 6894.168226901519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846255.4966517857,
            "unit": "ns",
            "range": "± 3110.6099162747714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784450.78125,
            "unit": "ns",
            "range": "± 2799.2696404276585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262481.081081081,
            "unit": "ns",
            "range": "± 110169.2935587918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455258.620689655,
            "unit": "ns",
            "range": "± 99460.1913087463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4330778.048780488,
            "unit": "ns",
            "range": "± 155197.42509493371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4463200,
            "unit": "ns",
            "range": "± 97497.538430465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6826000,
            "unit": "ns",
            "range": "± 116944.79960154771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268867.85714285716,
            "unit": "ns",
            "range": "± 11334.582755168636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254561.40350877194,
            "unit": "ns",
            "range": "± 10566.080405611374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233489.13043478262,
            "unit": "ns",
            "range": "± 13084.488396501576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104328.5714285714,
            "unit": "ns",
            "range": "± 60649.008217795264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785116.6666666665,
            "unit": "ns",
            "range": "± 66584.97971622071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19591.57894736842,
            "unit": "ns",
            "range": "± 1791.4491434575043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88731.46067415731,
            "unit": "ns",
            "range": "± 5384.860838617542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75211.82795698925,
            "unit": "ns",
            "range": "± 4989.006380606428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97852.04081632652,
            "unit": "ns",
            "range": "± 14227.200821483182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5848.958333333333,
            "unit": "ns",
            "range": "± 831.7381662476373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18657.291666666668,
            "unit": "ns",
            "range": "± 1962.5303104151653"
          }
        ]
      }
    ]
  }
}