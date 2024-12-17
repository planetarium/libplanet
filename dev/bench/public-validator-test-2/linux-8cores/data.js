window.BENCHMARK_DATA = {
  "lastUpdate": 1734416203549,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de309156e1253938e2fa83de1eb5e8965feebb3e",
          "message": "Merge pull request #4009 from planetarium/release/5.4.2\n\nRelease/5.4.2",
          "timestamp": "2024-12-13T13:43:30+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/de309156e1253938e2fa83de1eb5e8965feebb3e"
        },
        "date": 1734416176191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10864205.5,
            "unit": "ns",
            "range": "± 199011.48617030698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28340433.733333334,
            "unit": "ns",
            "range": "± 198113.50698651327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71093571.8,
            "unit": "ns",
            "range": "± 664343.5471010031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142769903.1,
            "unit": "ns",
            "range": "± 637260.9827916211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301847329.1666667,
            "unit": "ns",
            "range": "± 580047.1368898837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114661.40816326531,
            "unit": "ns",
            "range": "± 12223.788249634046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195351.54237288135,
            "unit": "ns",
            "range": "± 8654.24831358412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165618.875,
            "unit": "ns",
            "range": "± 4152.303198618914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2924334.6842105263,
            "unit": "ns",
            "range": "± 61574.46957506246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2987737.8,
            "unit": "ns",
            "range": "± 45911.049796940424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17111.257575757576,
            "unit": "ns",
            "range": "± 2682.698150967087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72147.55319148937,
            "unit": "ns",
            "range": "± 6492.616967643948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58567.375,
            "unit": "ns",
            "range": "± 2725.7271667027844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61645.510204081635,
            "unit": "ns",
            "range": "± 11053.43499555345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2860.721649484536,
            "unit": "ns",
            "range": "± 370.32698789572106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12972.19387755102,
            "unit": "ns",
            "range": "± 1732.8999332098865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695894.5153459823,
            "unit": "ns",
            "range": "± 4740.873284176981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208068.0821707589,
            "unit": "ns",
            "range": "± 1132.5424681633463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748811.3793945312,
            "unit": "ns",
            "range": "± 869.5254502046168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994529.0714285714,
            "unit": "ns",
            "range": "± 3018.9944377626725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622375.9859793527,
            "unit": "ns",
            "range": "± 451.1889814633786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570806.4123883928,
            "unit": "ns",
            "range": "± 412.36555002894966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435894,
            "unit": "ns",
            "range": "± 46600.3863689276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559326.6923076925,
            "unit": "ns",
            "range": "± 68089.51442080886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148167.3,
            "unit": "ns",
            "range": "± 51213.194548726555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619723.529411765,
            "unit": "ns",
            "range": "± 77531.67022861369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3321116.9285714286,
            "unit": "ns",
            "range": "± 47538.96438220933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017537.1770833334,
            "unit": "ns",
            "range": "± 77072.64660114607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927872.3414634147,
            "unit": "ns",
            "range": "± 68692.72765424654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591427.7435897435,
            "unit": "ns",
            "range": "± 81442.15418502287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7849907.2,
            "unit": "ns",
            "range": "± 278077.0537779145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34616.65,
            "unit": "ns",
            "range": "± 6128.9734922074695"
          }
        ]
      }
    ]
  }
}