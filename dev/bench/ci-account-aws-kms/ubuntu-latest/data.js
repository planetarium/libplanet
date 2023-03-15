window.BENCHMARK_DATA = {
  "lastUpdate": 1678867955144,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "3cb319c420cf611c832339023617574c5baa3b58",
          "message": "@planetarium/account-aws-kms: WIP need tests, created IAM policy\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:57:35+09:00",
          "tree_id": "8b36d094389e4ba162c0254bc3ee3474e56a7137",
          "url": "https://github.com/planetarium/libplanet/commit/3cb319c420cf611c832339023617574c5baa3b58"
        },
        "date": 1678867935542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200835.05555555556,
            "unit": "ns",
            "range": "± 6697.927615291355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212614.58823529413,
            "unit": "ns",
            "range": "± 8632.759943787318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180688.9292929293,
            "unit": "ns",
            "range": "± 18789.097731838596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11455727.07142857,
            "unit": "ns",
            "range": "± 43278.50140385797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9431951.6,
            "unit": "ns",
            "range": "± 129628.521775991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21596.691489361703,
            "unit": "ns",
            "range": "± 1772.381248742643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59100.71428571428,
            "unit": "ns",
            "range": "± 5714.116882999272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40325.875,
            "unit": "ns",
            "range": "± 2230.665344857253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99050.56521739131,
            "unit": "ns",
            "range": "± 9890.552278832327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6481.571428571428,
            "unit": "ns",
            "range": "± 1388.4795659838278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20979.48979591837,
            "unit": "ns",
            "range": "± 2180.699746983234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371975.153846154,
            "unit": "ns",
            "range": "± 88710.55941823039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5259965.666666667,
            "unit": "ns",
            "range": "± 138659.4769930999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24884807.35,
            "unit": "ns",
            "range": "± 572268.8409611136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6216269.696969697,
            "unit": "ns",
            "range": "± 193293.6599483227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27835715.5,
            "unit": "ns",
            "range": "± 370268.13266911416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001234.611458333,
            "unit": "ns",
            "range": "± 50268.72614988306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835773.830891927,
            "unit": "ns",
            "range": "± 1570.4353196761438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369235.9310825893,
            "unit": "ns",
            "range": "± 1549.4916464344305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559652.7052283655,
            "unit": "ns",
            "range": "± 3884.49888652744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837957.1047014509,
            "unit": "ns",
            "range": "± 2014.6088960141935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743841.640485491,
            "unit": "ns",
            "range": "± 888.7679079137788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7700424.714285715,
            "unit": "ns",
            "range": "± 46158.82562069056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20126330.2,
            "unit": "ns",
            "range": "± 297597.26027209515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49810158.666666664,
            "unit": "ns",
            "range": "± 586612.3336415464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102621398.76923077,
            "unit": "ns",
            "range": "± 203363.3333634466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203352502.53333333,
            "unit": "ns",
            "range": "± 1672183.3162108269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46343.73626373626,
            "unit": "ns",
            "range": "± 3218.9324484133103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407163.4,
            "unit": "ns",
            "range": "± 88282.09030213828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2491810.5,
            "unit": "ns",
            "range": "± 65768.65686708222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202402.989473684,
            "unit": "ns",
            "range": "± 138785.51219406145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5197017.703703703,
            "unit": "ns",
            "range": "± 144111.27645965776"
          }
        ]
      }
    ]
  }
}