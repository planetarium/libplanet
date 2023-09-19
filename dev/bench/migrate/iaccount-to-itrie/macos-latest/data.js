window.BENCHMARK_DATA = {
  "lastUpdate": 1695085795602,
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
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695085701235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8656885.07142857,
            "unit": "ns",
            "range": "± 88493.60606690901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21316156.033333335,
            "unit": "ns",
            "range": "± 382526.9449228132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52204249.28571428,
            "unit": "ns",
            "range": "± 536459.2484577683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103825868.83333333,
            "unit": "ns",
            "range": "± 586922.6142401772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213319963.96153846,
            "unit": "ns",
            "range": "± 399060.3518179958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73656.93406593407,
            "unit": "ns",
            "range": "± 5826.6929267184705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317028.62666666665,
            "unit": "ns",
            "range": "± 15839.609330745207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308173.1369863014,
            "unit": "ns",
            "range": "± 15160.91021006459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306650.1034482759,
            "unit": "ns",
            "range": "± 8915.53614422129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104013.8571428573,
            "unit": "ns",
            "range": "± 33040.43696769889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751286.5714285714,
            "unit": "ns",
            "range": "± 54542.90293495047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22931.864583333332,
            "unit": "ns",
            "range": "± 3096.8930189696543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107087.3469387755,
            "unit": "ns",
            "range": "± 10168.756755910075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112229.86206896552,
            "unit": "ns",
            "range": "± 6123.834425731729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103865.70967741935,
            "unit": "ns",
            "range": "± 9757.40915316089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.1875,
            "unit": "ns",
            "range": "± 615.1267445349009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20556.31182795699,
            "unit": "ns",
            "range": "± 2614.873618936631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597022.23,
            "unit": "ns",
            "range": "± 165797.44437472185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957840.231884058,
            "unit": "ns",
            "range": "± 135760.88451847815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055161.07,
            "unit": "ns",
            "range": "± 201868.16878065158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334143.739130435,
            "unit": "ns",
            "range": "± 205441.39523498446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333856.1585365855,
            "unit": "ns",
            "range": "± 119173.0782713969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587819.35,
            "unit": "ns",
            "range": "± 78029.2976612159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4948287.5,
            "unit": "ns",
            "range": "± 52018.617033881696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217932.110169492,
            "unit": "ns",
            "range": "± 173114.80326142523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6702209.8,
            "unit": "ns",
            "range": "± 237103.52989620596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5550239.608816965,
            "unit": "ns",
            "range": "± 36198.79554758796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1617749.2181919643,
            "unit": "ns",
            "range": "± 2429.8691910167277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002478.9754464285,
            "unit": "ns",
            "range": "± 1727.9196828435436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548655.7098958334,
            "unit": "ns",
            "range": "± 35083.1705936676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789555.3970102164,
            "unit": "ns",
            "range": "± 1890.0855371448952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710428.0555943081,
            "unit": "ns",
            "range": "± 1878.3729076116947"
          }
        ]
      }
    ]
  }
}