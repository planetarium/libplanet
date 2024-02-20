window.BENCHMARK_DATA = {
  "lastUpdate": 1708420396899,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c4a796309df66c22cce3355051ffa8b893e3816f",
          "message": "tmp: add logs",
          "timestamp": "2024-02-20T17:59:14+09:00",
          "tree_id": "804a9bc27afc1ff196a1dd7da9418e50258aec91",
          "url": "https://github.com/planetarium/libplanet/commit/c4a796309df66c22cce3355051ffa8b893e3816f"
        },
        "date": 1708420329705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008041.052631579,
            "unit": "ns",
            "range": "± 119969.48680742794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760834.375,
            "unit": "ns",
            "range": "± 80318.37090208614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569388.775510204,
            "unit": "ns",
            "range": "± 147654.97389526348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11315659.550561797,
            "unit": "ns",
            "range": "± 858018.5272579943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34574.444444444445,
            "unit": "ns",
            "range": "± 2182.698109268605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5533433.333333333,
            "unit": "ns",
            "range": "± 83880.67772281109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14584271.42857143,
            "unit": "ns",
            "range": "± 140385.22510781337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35215088.461538464,
            "unit": "ns",
            "range": "± 252716.4238775072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69930921.42857143,
            "unit": "ns",
            "range": "± 749275.7140461318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140314033.33333334,
            "unit": "ns",
            "range": "± 1345348.3901771992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356839.6484375,
            "unit": "ns",
            "range": "± 6179.042106446866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083534.375,
            "unit": "ns",
            "range": "± 2916.2364878629633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742074.0443638393,
            "unit": "ns",
            "range": "± 2036.2778607062448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967216.5104166667,
            "unit": "ns",
            "range": "± 5640.563705523922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647264.58984375,
            "unit": "ns",
            "range": "± 1369.632909379495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586148.3463541666,
            "unit": "ns",
            "range": "± 1351.3775535778575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295683.870967742,
            "unit": "ns",
            "range": "± 64303.846939221265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2413896.7741935486,
            "unit": "ns",
            "range": "± 72208.83825807368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2936869.696969697,
            "unit": "ns",
            "range": "± 84516.63846858975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3059421.4285714286,
            "unit": "ns",
            "range": "± 41542.604239900116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12986050,
            "unit": "ns",
            "range": "± 1602837.3871233598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177924,
            "unit": "ns",
            "range": "± 8941.08101572342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171110.7142857143,
            "unit": "ns",
            "range": "± 7368.105185593785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143884.2105263158,
            "unit": "ns",
            "range": "± 4890.049262770124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3015714.285714286,
            "unit": "ns",
            "range": "± 34902.63065119342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2664364.285714286,
            "unit": "ns",
            "range": "± 33741.200725131675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10866.304347826086,
            "unit": "ns",
            "range": "± 1018.3241106183252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57282.47422680412,
            "unit": "ns",
            "range": "± 6027.212773283601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47102.15053763441,
            "unit": "ns",
            "range": "± 2746.3801667959883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65785.85858585859,
            "unit": "ns",
            "range": "± 18293.07335232862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.505154639175,
            "unit": "ns",
            "range": "± 558.0248673467153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11379.591836734693,
            "unit": "ns",
            "range": "± 2134.1097848876693"
          }
        ]
      }
    ]
  }
}