window.BENCHMARK_DATA = {
  "lastUpdate": 1688387474004,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387394027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8519380.9,
            "unit": "ns",
            "range": "± 100540.21974300347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19492997.576923076,
            "unit": "ns",
            "range": "± 212462.92700981253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48399638.11111111,
            "unit": "ns",
            "range": "± 1338070.987343788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92571545.66666667,
            "unit": "ns",
            "range": "± 1711015.1950324974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195180512.80769232,
            "unit": "ns",
            "range": "± 2172998.926248215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60090.354166666664,
            "unit": "ns",
            "range": "± 9115.051666544296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301129.5287356322,
            "unit": "ns",
            "range": "± 16482.561517625352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290725.64444444445,
            "unit": "ns",
            "range": "± 16149.820499445023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285497.6632653061,
            "unit": "ns",
            "range": "± 20203.44426372393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4092166.111111111,
            "unit": "ns",
            "range": "± 85717.36087393739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685752.565217391,
            "unit": "ns",
            "range": "± 92274.09071093383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16956.088888888888,
            "unit": "ns",
            "range": "± 2229.9910560330763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84134.5,
            "unit": "ns",
            "range": "± 8431.472612838912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87788.73469387754,
            "unit": "ns",
            "range": "± 10274.026374019177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104250.7741935484,
            "unit": "ns",
            "range": "± 13972.243512958603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5321.252747252747,
            "unit": "ns",
            "range": "± 1020.9459730335782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16648.41489361702,
            "unit": "ns",
            "range": "± 1821.0005264716988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540880.6315789474,
            "unit": "ns",
            "range": "± 186703.3254356347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2875507.222222222,
            "unit": "ns",
            "range": "± 275735.6842412992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2046172.1630434783,
            "unit": "ns",
            "range": "± 220836.35070262878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5831889.830985916,
            "unit": "ns",
            "range": "± 283948.11453266727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225062.880952381,
            "unit": "ns",
            "range": "± 108305.20948671439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284589.046875,
            "unit": "ns",
            "range": "± 150656.89404225114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4327787,
            "unit": "ns",
            "range": "± 204990.16024020655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798552.4505494507,
            "unit": "ns",
            "range": "± 241097.10281868052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6970142.743589744,
            "unit": "ns",
            "range": "± 215248.73162322285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6303209.626302083,
            "unit": "ns",
            "range": "± 107788.22186083751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920288.067578125,
            "unit": "ns",
            "range": "± 17203.931622656444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240699.0071149555,
            "unit": "ns",
            "range": "± 13521.88138220755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630383.905949519,
            "unit": "ns",
            "range": "± 24486.444498388897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 771901.4920372596,
            "unit": "ns",
            "range": "± 3996.793232046036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705740.112109375,
            "unit": "ns",
            "range": "± 7330.929401609103"
          }
        ]
      }
    ]
  }
}