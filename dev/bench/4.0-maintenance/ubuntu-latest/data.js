window.BENCHMARK_DATA = {
  "lastUpdate": 1705914860225,
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
          "id": "42fbee9dc6e6cde218c38433906f0c4d6353aca9",
          "message": "Merge pull request #3627 from greymistcube/release/4.0.0\n\n🚀 Release 4.0.0",
          "timestamp": "2024-01-22T18:01:32+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/planetarium/libplanet/commit/42fbee9dc6e6cde218c38433906f0c4d6353aca9"
        },
        "date": 1705914821033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764089.2878289474,
            "unit": "ns",
            "range": "± 81309.26350947516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233648.3430524555,
            "unit": "ns",
            "range": "± 3671.034295830251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775810.80078125,
            "unit": "ns",
            "range": "± 1730.3257403475654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964916.271205357,
            "unit": "ns",
            "range": "± 13034.062896134485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628854.7516276041,
            "unit": "ns",
            "range": "± 2883.9931638978474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572983.2393391927,
            "unit": "ns",
            "range": "± 1643.6733411301834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420186.44,
            "unit": "ns",
            "range": "± 63452.73916144204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2677015.0454545454,
            "unit": "ns",
            "range": "± 65140.745054533574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3202393.28125,
            "unit": "ns",
            "range": "± 98980.356340892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3208330.4235294117,
            "unit": "ns",
            "range": "± 172811.96596950994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13830500.043478262,
            "unit": "ns",
            "range": "± 937876.4341021667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40249.762886597935,
            "unit": "ns",
            "range": "± 5359.99777630006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204674.21641791044,
            "unit": "ns",
            "range": "± 9643.685878721559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194647.31967213115,
            "unit": "ns",
            "range": "± 8534.209677347979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165013,
            "unit": "ns",
            "range": "± 2744.3039971131893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3272154.4,
            "unit": "ns",
            "range": "± 30765.85043703953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819184.714285714,
            "unit": "ns",
            "range": "± 31962.660783094467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15042.198924731183,
            "unit": "ns",
            "range": "± 1739.7110816163788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70447.83684210526,
            "unit": "ns",
            "range": "± 6719.614881965043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55092.058139534885,
            "unit": "ns",
            "range": "± 5788.771011708081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71607.6649484536,
            "unit": "ns",
            "range": "± 13698.159579605644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.772727272727,
            "unit": "ns",
            "range": "± 1997.773811113525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16892.18085106383,
            "unit": "ns",
            "range": "± 3056.149752716189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5630946.1,
            "unit": "ns",
            "range": "± 80081.21386068022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14950466.5,
            "unit": "ns",
            "range": "± 68177.73176988008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36966644.807692304,
            "unit": "ns",
            "range": "± 279146.96116364485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75423347.35714285,
            "unit": "ns",
            "range": "± 327021.8162877392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151756971.08333334,
            "unit": "ns",
            "range": "± 691771.2368140022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062483.452631579,
            "unit": "ns",
            "range": "± 119099.76198439588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011616.3684210526,
            "unit": "ns",
            "range": "± 101094.02196277048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709062.543478261,
            "unit": "ns",
            "range": "± 155822.84160386623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13057605.47368421,
            "unit": "ns",
            "range": "± 998034.2140382107"
          }
        ]
      }
    ]
  }
}