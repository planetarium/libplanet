window.BENCHMARK_DATA = {
  "lastUpdate": 1721004133783,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "a22f1afc49e01313b5c85f785ba6e4909d1b14f3",
          "message": "Release 5.1.1",
          "timestamp": "2024-07-15T09:25:23+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/a22f1afc49e01313b5c85f785ba6e4909d1b14f3"
        },
        "date": 1721003906428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980255.7894736842,
            "unit": "ns",
            "range": "± 74480.53253544657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775560,
            "unit": "ns",
            "range": "± 70836.8720684676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538100,
            "unit": "ns",
            "range": "± 129627.34086603798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6720695.161290322,
            "unit": "ns",
            "range": "± 198997.57425441092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30110.843373493975,
            "unit": "ns",
            "range": "± 1910.2427408126707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9545226.666666666,
            "unit": "ns",
            "range": "± 93343.49366465672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23703323.076923076,
            "unit": "ns",
            "range": "± 153797.29708204753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59818806.666666664,
            "unit": "ns",
            "range": "± 400332.5215486793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118898166.66666667,
            "unit": "ns",
            "range": "± 957841.5270556925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234565643.33333334,
            "unit": "ns",
            "range": "± 1618020.5797149034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304391.171875,
            "unit": "ns",
            "range": "± 4814.407967587411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1109866.9401041667,
            "unit": "ns",
            "range": "± 2267.547986144737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728332.71484375,
            "unit": "ns",
            "range": "± 3384.421020992589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911286.4192708333,
            "unit": "ns",
            "range": "± 4686.338958161422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611169.1476004465,
            "unit": "ns",
            "range": "± 1604.4163305273444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554781.5299479166,
            "unit": "ns",
            "range": "± 1147.862716315603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126195.4545454546,
            "unit": "ns",
            "range": "± 38923.66739037938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2360446.6666666665,
            "unit": "ns",
            "range": "± 38606.34416159875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2725873.3333333335,
            "unit": "ns",
            "range": "± 48492.64254453846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2255067.5,
            "unit": "ns",
            "range": "± 67825.13862490204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898940,
            "unit": "ns",
            "range": "± 43475.277046681535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176741.17647058822,
            "unit": "ns",
            "range": "± 8430.740398677086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165938.70967741936,
            "unit": "ns",
            "range": "± 7501.832668737746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148613.04347826086,
            "unit": "ns",
            "range": "± 3693.0283640968305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2711926.6666666665,
            "unit": "ns",
            "range": "± 36806.18089914998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2441537.5,
            "unit": "ns",
            "range": "± 46053.344069676416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10732.291666666666,
            "unit": "ns",
            "range": "± 1613.0060065582463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55611.22448979592,
            "unit": "ns",
            "range": "± 6112.651788481749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45157.77777777778,
            "unit": "ns",
            "range": "± 2751.4236469315088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54886.458333333336,
            "unit": "ns",
            "range": "± 10211.187051894209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2579.381443298969,
            "unit": "ns",
            "range": "± 490.73459908120935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9977.659574468085,
            "unit": "ns",
            "range": "± 1004.0942267524829"
          }
        ]
      }
    ]
  }
}