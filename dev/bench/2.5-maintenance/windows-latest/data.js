window.BENCHMARK_DATA = {
  "lastUpdate": 1689147671471,
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
          "id": "6f008d9dca7f4cc5df0bac2519b9e2f45108d698",
          "message": "Merge pull request #3294 from OnedgeLee/release/2.5.0\n\n🚀 Release 2.5.0",
          "timestamp": "2023-07-12T16:14:03+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/planetarium/libplanet/commit/6f008d9dca7f4cc5df0bac2519b9e2f45108d698"
        },
        "date": 1689147601233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753990.9090909092,
            "unit": "ns",
            "range": "± 191681.4391123604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335773.4693877553,
            "unit": "ns",
            "range": "± 323010.75675523846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309853.5353535353,
            "unit": "ns",
            "range": "± 247717.1639778125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6101752.577319588,
            "unit": "ns",
            "range": "± 461691.12602763245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57552.10526315789,
            "unit": "ns",
            "range": "± 11654.411811397984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9689685.714285715,
            "unit": "ns",
            "range": "± 589677.998493429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25476141.93548387,
            "unit": "ns",
            "range": "± 1442638.388985429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63455880.43478261,
            "unit": "ns",
            "range": "± 2396759.1646146365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129156690.9090909,
            "unit": "ns",
            "range": "± 8460035.131628351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259556967.44186047,
            "unit": "ns",
            "range": "± 9545947.836141957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918032.914402174,
            "unit": "ns",
            "range": "± 145842.64128267742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918605.6587837837,
            "unit": "ns",
            "range": "± 64220.28723245916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396064.1031901042,
            "unit": "ns",
            "range": "± 54528.44447364533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248019.7679924243,
            "unit": "ns",
            "range": "± 100654.75894385866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014640.6358506945,
            "unit": "ns",
            "range": "± 33598.92698764015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927162.6674107143,
            "unit": "ns",
            "range": "± 13203.235260670534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3770582.2916666665,
            "unit": "ns",
            "range": "± 361323.3433089483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976403.125,
            "unit": "ns",
            "range": "± 358363.8954597393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5411596.842105263,
            "unit": "ns",
            "range": "± 445238.06958406285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785166.666666667,
            "unit": "ns",
            "range": "± 384557.66665038915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8302753.684210527,
            "unit": "ns",
            "range": "± 520118.8478772262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333930.10752688174,
            "unit": "ns",
            "range": "± 36719.36103730989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303791.01123595505,
            "unit": "ns",
            "range": "± 29066.501495588596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285924.7311827957,
            "unit": "ns",
            "range": "± 40354.409962971346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4777552.105263158,
            "unit": "ns",
            "range": "± 379381.3684954471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4669637.373737373,
            "unit": "ns",
            "range": "± 513508.9889692448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24904,
            "unit": "ns",
            "range": "± 9310.230280652991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101688.29787234042,
            "unit": "ns",
            "range": "± 21241.60482558302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109794,
            "unit": "ns",
            "range": "± 25761.649595842846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133645.91836734695,
            "unit": "ns",
            "range": "± 28745.987325055237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7443.820224719101,
            "unit": "ns",
            "range": "± 1696.383523329166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23916.494845360823,
            "unit": "ns",
            "range": "± 8268.296383530933"
          }
        ]
      }
    ]
  }
}