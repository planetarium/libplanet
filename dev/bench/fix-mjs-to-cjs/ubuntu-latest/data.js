window.BENCHMARK_DATA = {
  "lastUpdate": 1698202466306,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "903830ec9de8928bce70a91d615bdb45ec64ca90",
          "message": "fix import mjs to require cjs",
          "timestamp": "2023-10-25T11:37:00+09:00",
          "tree_id": "9a6a722acee171995d2b938d04e19ddfd597e5ab",
          "url": "https://github.com/planetarium/libplanet/commit/903830ec9de8928bce70a91d615bdb45ec64ca90"
        },
        "date": 1698202432456,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6068299.330357143,
            "unit": "ns",
            "range": "± 12702.391287323548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918984.1837439905,
            "unit": "ns",
            "range": "± 1671.7582732675114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274239.2826021635,
            "unit": "ns",
            "range": "± 525.6385576217342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093885.03828125,
            "unit": "ns",
            "range": "± 2743.9462574125882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976658.8233723958,
            "unit": "ns",
            "range": "± 436.08607176783613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903269.1104166667,
            "unit": "ns",
            "range": "± 437.69415695608353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4293049.466666667,
            "unit": "ns",
            "range": "± 53585.956451649676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4441165.5,
            "unit": "ns",
            "range": "± 72410.10100993667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5193609.823529412,
            "unit": "ns",
            "range": "± 105080.0926539105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5199716.066666666,
            "unit": "ns",
            "range": "± 155430.7110992644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12760398.705882354,
            "unit": "ns",
            "range": "± 514080.87762258935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59619.936170212764,
            "unit": "ns",
            "range": "± 4406.901617559632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10032012,
            "unit": "ns",
            "range": "± 230849.4474177922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27056426.8,
            "unit": "ns",
            "range": "± 395047.4429850528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67602187.78571428,
            "unit": "ns",
            "range": "± 443413.8697763383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134456681.2142857,
            "unit": "ns",
            "range": "± 584449.7644026689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268831419.28571427,
            "unit": "ns",
            "range": "± 530188.0342539483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322082,
            "unit": "ns",
            "range": "± 5361.952353244249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315938.86486486485,
            "unit": "ns",
            "range": "± 10700.467064474236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279762.1176470588,
            "unit": "ns",
            "range": "± 5725.02397246458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5263228.5,
            "unit": "ns",
            "range": "± 67406.66264347144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4969688.933333334,
            "unit": "ns",
            "range": "± 53770.012867591475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23242.526315789473,
            "unit": "ns",
            "range": "± 1971.506696974425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101985.32608695653,
            "unit": "ns",
            "range": "± 5842.7889774795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83508.4074074074,
            "unit": "ns",
            "range": "± 2235.022960805467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91144.74285714286,
            "unit": "ns",
            "range": "± 4132.962848119221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6866.154639175258,
            "unit": "ns",
            "range": "± 806.8734842511736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22120.860215053763,
            "unit": "ns",
            "range": "± 1807.8307057583024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651632.2222222222,
            "unit": "ns",
            "range": "± 69927.38205452853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3182413.6923076925,
            "unit": "ns",
            "range": "± 110887.16637174686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2468923.813559322,
            "unit": "ns",
            "range": "± 108344.00275152871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10774482.725490196,
            "unit": "ns",
            "range": "± 437300.74673597707"
          }
        ]
      }
    ]
  }
}