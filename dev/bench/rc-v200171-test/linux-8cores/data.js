window.BENCHMARK_DATA = {
  "lastUpdate": 1714519326245,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "c9be7a2535a3b615b281fc92bb7cf17c68b811fc",
          "message": "increase context timeout",
          "timestamp": "2024-05-01T08:12:18+09:00",
          "tree_id": "4d114093a815defdd158fe0beb2131183af54f87",
          "url": "https://github.com/planetarium/libplanet/commit/c9be7a2535a3b615b281fc92bb7cf17c68b811fc"
        },
        "date": 1714519302816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2461103.3,
            "unit": "ns",
            "range": "± 83084.2686477302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2519451.3666666667,
            "unit": "ns",
            "range": "± 30372.683071815576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3167191.588235294,
            "unit": "ns",
            "range": "± 62678.426648507644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3213862.709677419,
            "unit": "ns",
            "range": "± 181161.94808642665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8812690.807692308,
            "unit": "ns",
            "range": "± 146023.75659139885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196874.35,
            "unit": "ns",
            "range": "± 8535.370494922481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193923.89583333334,
            "unit": "ns",
            "range": "± 6445.419880483114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169395.66666666666,
            "unit": "ns",
            "range": "± 2964.2983671560137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145242.8,
            "unit": "ns",
            "range": "± 39613.78518034203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798960.294117647,
            "unit": "ns",
            "range": "± 56531.47652941314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13514.752577319588,
            "unit": "ns",
            "range": "± 2008.0801207814554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60256.34065934066,
            "unit": "ns",
            "range": "± 3632.8880100786055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51755.829268292684,
            "unit": "ns",
            "range": "± 1747.5858191007248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62411.1914893617,
            "unit": "ns",
            "range": "± 8260.654854768125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2878.426315789474,
            "unit": "ns",
            "range": "± 321.9592032469815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11696.5,
            "unit": "ns",
            "range": "± 782.2221335989764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5857901.076923077,
            "unit": "ns",
            "range": "± 31033.677468898037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15137392.933333334,
            "unit": "ns",
            "range": "± 139122.99856266277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37820026.13333333,
            "unit": "ns",
            "range": "± 212582.58000694582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77309088.26666667,
            "unit": "ns",
            "range": "± 185255.29206725463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151848472.73333332,
            "unit": "ns",
            "range": "± 654646.074612018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964000.2528089888,
            "unit": "ns",
            "range": "± 66041.7902179234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834433.8717948718,
            "unit": "ns",
            "range": "± 61235.605174294455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1613667.5537634408,
            "unit": "ns",
            "range": "± 106136.83079775162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7736164.982758621,
            "unit": "ns",
            "range": "± 224303.89726099928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36105.9,
            "unit": "ns",
            "range": "± 1855.0878282800818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714517.087890625,
            "unit": "ns",
            "range": "± 5369.422164702002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216531.864453125,
            "unit": "ns",
            "range": "± 1496.274567671876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766941.6654947917,
            "unit": "ns",
            "range": "± 1504.1808272892204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952931.9518229167,
            "unit": "ns",
            "range": "± 2008.9751820969373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630361.3185221354,
            "unit": "ns",
            "range": "± 623.5944445731616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574527.5350911458,
            "unit": "ns",
            "range": "± 619.428247336844"
          }
        ]
      }
    ]
  }
}