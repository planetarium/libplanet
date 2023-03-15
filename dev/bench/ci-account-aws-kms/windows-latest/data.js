window.BENCHMARK_DATA = {
  "lastUpdate": 1678868366494,
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
        "date": 1678868312821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737595.744680851,
            "unit": "ns",
            "range": "± 165198.61029050036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102390,
            "unit": "ns",
            "range": "± 157381.38680095688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617840.659340659,
            "unit": "ns",
            "range": "± 177074.86801916553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6448864.516129033,
            "unit": "ns",
            "range": "± 384744.71452853474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55332.22222222222,
            "unit": "ns",
            "range": "± 7349.108755531123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8802064.130434783,
            "unit": "ns",
            "range": "± 788064.100642336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24114130.769230768,
            "unit": "ns",
            "range": "± 1734692.3513786597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57177093.87755102,
            "unit": "ns",
            "range": "± 5176043.708184301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115231245.91836734,
            "unit": "ns",
            "range": "± 9796851.28051927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 232925870.40816328,
            "unit": "ns",
            "range": "± 15901359.699517684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5717341.927083333,
            "unit": "ns",
            "range": "± 169538.72181963548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839440.9237132352,
            "unit": "ns",
            "range": "± 36120.18021721291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417116.4663461538,
            "unit": "ns",
            "range": "± 38598.93891902139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172972.3214285714,
            "unit": "ns",
            "range": "± 39872.17766918569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031352.6302083334,
            "unit": "ns",
            "range": "± 9770.57433951956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929086.07421875,
            "unit": "ns",
            "range": "± 10427.062016891381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394771.5789473685,
            "unit": "ns",
            "range": "± 339364.05596574745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5519094.565217392,
            "unit": "ns",
            "range": "± 540042.4161941541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27796509.18367347,
            "unit": "ns",
            "range": "± 2520796.292537636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6684437.6344086025,
            "unit": "ns",
            "range": "± 569096.1195107283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32652438,
            "unit": "ns",
            "range": "± 2774684.3991533616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202185.26315789475,
            "unit": "ns",
            "range": "± 16710.965748866773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203989.24731182796,
            "unit": "ns",
            "range": "± 20380.35852377816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182461.05263157896,
            "unit": "ns",
            "range": "± 20753.898863324826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12711030.208333334,
            "unit": "ns",
            "range": "± 1138468.72495885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10152033.673469387,
            "unit": "ns",
            "range": "± 1133679.8508009834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24689.36170212766,
            "unit": "ns",
            "range": "± 5800.731657320301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61375.78947368421,
            "unit": "ns",
            "range": "± 8124.2965756319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45793.81443298969,
            "unit": "ns",
            "range": "± 7743.4086813801105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111898.94736842105,
            "unit": "ns",
            "range": "± 19091.38434810288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11143,
            "unit": "ns",
            "range": "± 5885.322524052629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23960,
            "unit": "ns",
            "range": "± 6891.013031917775"
          }
        ]
      }
    ]
  }
}