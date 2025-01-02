window.BENCHMARK_DATA = {
  "lastUpdate": 1735800352398,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1735800325764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11117111.5,
            "unit": "ns",
            "range": "± 67220.20551675133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28014177.6,
            "unit": "ns",
            "range": "± 189693.90754159715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71455149,
            "unit": "ns",
            "range": "± 372521.71117514366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144394903.64285713,
            "unit": "ns",
            "range": "± 512137.333823444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293873772,
            "unit": "ns",
            "range": "± 1123633.4284536166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108585.57462686567,
            "unit": "ns",
            "range": "± 5150.983784568915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194552.4716981132,
            "unit": "ns",
            "range": "± 7946.331421585914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167250.95454545456,
            "unit": "ns",
            "range": "± 3899.8668686345686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2938132,
            "unit": "ns",
            "range": "± 36956.973047817955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2696804.1923076925,
            "unit": "ns",
            "range": "± 30809.991483782807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12691.044943820225,
            "unit": "ns",
            "range": "± 799.5638428957315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60228.86021505376,
            "unit": "ns",
            "range": "± 4218.54872425855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50037.40476190476,
            "unit": "ns",
            "range": "± 1173.3242478003215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52804.6,
            "unit": "ns",
            "range": "± 9237.397749297332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2595.063157894737,
            "unit": "ns",
            "range": "± 369.79251832202186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11876.693181818182,
            "unit": "ns",
            "range": "± 978.2901381674747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738914.518028846,
            "unit": "ns",
            "range": "± 6440.63412464289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219241.3251953125,
            "unit": "ns",
            "range": "± 1814.326800021208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769191.8439592634,
            "unit": "ns",
            "range": "± 1864.6143887392984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947804.0935997595,
            "unit": "ns",
            "range": "± 3760.310432464283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642890.9734825721,
            "unit": "ns",
            "range": "± 739.1023521623122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581713.5979352678,
            "unit": "ns",
            "range": "± 1049.388720762218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387934.94,
            "unit": "ns",
            "range": "± 62955.048221647805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2622431.9583333335,
            "unit": "ns",
            "range": "± 66264.66116000565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3088348.375,
            "unit": "ns",
            "range": "± 59681.94885990794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2620358.1578947366,
            "unit": "ns",
            "range": "± 58254.41072119505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3321018.6470588236,
            "unit": "ns",
            "range": "± 64814.93584520197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987236.947368421,
            "unit": "ns",
            "range": "± 49879.88387593934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900002.891304348,
            "unit": "ns",
            "range": "± 72917.45675281766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586470.1333333333,
            "unit": "ns",
            "range": "± 84190.36658484086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7667230.717391305,
            "unit": "ns",
            "range": "± 148217.26417660006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30463.375,
            "unit": "ns",
            "range": "± 788.2041675750063"
          }
        ]
      }
    ]
  }
}