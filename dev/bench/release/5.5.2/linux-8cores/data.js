window.BENCHMARK_DATA = {
  "lastUpdate": 1757930640611,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "c6233b1e4d5650722581ed3c1ceafd03604f343d",
          "message": "Release 5.5.2",
          "timestamp": "2025-09-15T18:55:30+09:00",
          "tree_id": "7a4acedbfbec4265cf50057d07c43ba42d4a84b9",
          "url": "https://github.com/planetarium/libplanet/commit/c6233b1e4d5650722581ed3c1ceafd03604f343d"
        },
        "date": 1757930613742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047508.2236842106,
            "unit": "ns",
            "range": "± 53290.64504709964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1992999.1063829786,
            "unit": "ns",
            "range": "± 77293.81276048979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608647.8051948051,
            "unit": "ns",
            "range": "± 82034.84155368294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8054044.363636363,
            "unit": "ns",
            "range": "± 194693.1505208707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114050.11578947368,
            "unit": "ns",
            "range": "± 12974.020180987194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198983.04081632654,
            "unit": "ns",
            "range": "± 14342.550976689447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166088.1,
            "unit": "ns",
            "range": "± 4868.160470749245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2984778.0714285714,
            "unit": "ns",
            "range": "± 26843.40697370667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2906313,
            "unit": "ns",
            "range": "± 21701.5096142748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13800.619565217392,
            "unit": "ns",
            "range": "± 960.6886820343102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72604.16315789474,
            "unit": "ns",
            "range": "± 6456.155510087775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50287,
            "unit": "ns",
            "range": "± 715.0798323730481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64580.183673469386,
            "unit": "ns",
            "range": "± 12679.437662411867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2646.6145833333335,
            "unit": "ns",
            "range": "± 379.26728166687735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11254.346153846154,
            "unit": "ns",
            "range": "± 1108.7536739067473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3910358.4796875,
            "unit": "ns",
            "range": "± 18729.293384600118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1248824.181640625,
            "unit": "ns",
            "range": "± 4597.482224203046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 822740.8580729166,
            "unit": "ns",
            "range": "± 3150.1588180806834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2028759.0401041666,
            "unit": "ns",
            "range": "± 9125.359812111365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654268.5570591518,
            "unit": "ns",
            "range": "± 819.1023783988419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584678.1244791667,
            "unit": "ns",
            "range": "± 1397.1187450249497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11751532.8,
            "unit": "ns",
            "range": "± 160254.38289491046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28647518.633333333,
            "unit": "ns",
            "range": "± 411019.42598649353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70894762.96666667,
            "unit": "ns",
            "range": "± 850345.0009839591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142516365.9,
            "unit": "ns",
            "range": "± 1472886.6684067233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282319046.21428573,
            "unit": "ns",
            "range": "± 2352055.1135716783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31244.35714285714,
            "unit": "ns",
            "range": "± 448.31356765667374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2504039.6785714286,
            "unit": "ns",
            "range": "± 67416.78008508716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2494354.8157894737,
            "unit": "ns",
            "range": "± 85882.9006493821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2998383.117647059,
            "unit": "ns",
            "range": "± 60551.84735815493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2663050.714285714,
            "unit": "ns",
            "range": "± 43118.436009578174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3301169.8571428573,
            "unit": "ns",
            "range": "± 91258.88806260616"
          }
        ]
      }
    ]
  }
}