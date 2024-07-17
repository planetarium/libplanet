window.BENCHMARK_DATA = {
  "lastUpdate": 1721208502550,
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
          "id": "6a69ab2054a19d10f1f642720181d720a9e4e4e2",
          "message": "Merge branch '5.1-maintenance' into port/5.1.2-to-main",
          "timestamp": "2024-07-17T18:18:35+09:00",
          "tree_id": "15551f907768d43d161cb699a8026392c40db99c",
          "url": "https://github.com/planetarium/libplanet/commit/6a69ab2054a19d10f1f642720181d720a9e4e4e2"
        },
        "date": 1721208476439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203461.7931034483,
            "unit": "ns",
            "range": "± 5800.645791506508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194313.8153846154,
            "unit": "ns",
            "range": "± 8437.544279314012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167578,
            "unit": "ns",
            "range": "± 3240.4126486195137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090225.7,
            "unit": "ns",
            "range": "± 23593.111900964414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785747.5,
            "unit": "ns",
            "range": "± 43974.10943465972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13758.673913043478,
            "unit": "ns",
            "range": "± 1111.2267907186606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60652.38888888889,
            "unit": "ns",
            "range": "± 3747.4444736408327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50677.5,
            "unit": "ns",
            "range": "± 311.38970030260384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57570.09375,
            "unit": "ns",
            "range": "± 9696.637796113308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3199.40625,
            "unit": "ns",
            "range": "± 587.175461593354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12363.692307692309,
            "unit": "ns",
            "range": "± 835.077064870964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014611.2631578947,
            "unit": "ns",
            "range": "± 48478.07335098166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1969673.956521739,
            "unit": "ns",
            "range": "± 47978.29410120435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701345.3051948051,
            "unit": "ns",
            "range": "± 87023.18846343846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8271925.35,
            "unit": "ns",
            "range": "± 185353.02659016446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760100.271484375,
            "unit": "ns",
            "range": "± 9971.68158029263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209413.5126953125,
            "unit": "ns",
            "range": "± 1590.5228878939622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760113.1753627232,
            "unit": "ns",
            "range": "± 1712.740985062252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952427.2806490385,
            "unit": "ns",
            "range": "± 1441.0307377022466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623073.6827566965,
            "unit": "ns",
            "range": "± 636.5559830050596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584705.7580729167,
            "unit": "ns",
            "range": "± 397.1991084022793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2502240.411764706,
            "unit": "ns",
            "range": "± 50907.29665413744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2636946.1818181816,
            "unit": "ns",
            "range": "± 63674.8575384099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3063569.814814815,
            "unit": "ns",
            "range": "± 75401.00127066107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622148.0588235296,
            "unit": "ns",
            "range": "± 51754.41986375486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3358887.6052631577,
            "unit": "ns",
            "range": "± 72278.7629143772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32037.85714285714,
            "unit": "ns",
            "range": "± 254.92830278421334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10656069.214285715,
            "unit": "ns",
            "range": "± 81536.9082196981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27201167.866666667,
            "unit": "ns",
            "range": "± 208016.43115281154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68879082.71428572,
            "unit": "ns",
            "range": "± 345341.15808600246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139051587.85714287,
            "unit": "ns",
            "range": "± 478001.23866042553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285879566.3666667,
            "unit": "ns",
            "range": "± 1437460.50722813"
          }
        ]
      }
    ]
  }
}