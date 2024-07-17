window.BENCHMARK_DATA = {
  "lastUpdate": 1721208878930,
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
        "date": 1721208825500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10761387.07142857,
            "unit": "ns",
            "range": "± 119180.55101687866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26413696.35714286,
            "unit": "ns",
            "range": "± 228805.72610702433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67374041.85714285,
            "unit": "ns",
            "range": "± 109933.285636095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135915264.13333333,
            "unit": "ns",
            "range": "± 346459.79583554785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273231425.78571427,
            "unit": "ns",
            "range": "± 357958.338321263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14143.55,
            "unit": "ns",
            "range": "± 322.68372571622706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110479.41025641025,
            "unit": "ns",
            "range": "± 3660.8257532531525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107855.6,
            "unit": "ns",
            "range": "± 4196.76225113987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91845.66666666667,
            "unit": "ns",
            "range": "± 2889.9972066018795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041886.6195652173,
            "unit": "ns",
            "range": "± 170785.34147831504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2741009.6565656564,
            "unit": "ns",
            "range": "± 188424.21032016777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4991.04347826087,
            "unit": "ns",
            "range": "± 543.6060490377256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27594.9010989011,
            "unit": "ns",
            "range": "± 2227.8283100362064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21933.119402985074,
            "unit": "ns",
            "range": "± 972.050091027363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28863.574468085106,
            "unit": "ns",
            "range": "± 4986.536340706902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1061.9893617021276,
            "unit": "ns",
            "range": "± 177.2743147816644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4723.9775280898875,
            "unit": "ns",
            "range": "± 403.8176337252456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684141.3461538461,
            "unit": "ns",
            "range": "± 34795.36423774096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272398.142857143,
            "unit": "ns",
            "range": "± 46466.830959230785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077515.5144927537,
            "unit": "ns",
            "range": "± 51639.30494089943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9310674.54,
            "unit": "ns",
            "range": "± 1349468.9541360256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182992.878787879,
            "unit": "ns",
            "range": "± 67716.69468997176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292295.5416666665,
            "unit": "ns",
            "range": "± 89039.9784951892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586225.5,
            "unit": "ns",
            "range": "± 29884.89750997681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2329115.769230769,
            "unit": "ns",
            "range": "± 35840.470016807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2742010.5833333335,
            "unit": "ns",
            "range": "± 38998.33803092437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045373.39375,
            "unit": "ns",
            "range": "± 55256.31863790884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917972.8572126116,
            "unit": "ns",
            "range": "± 5137.973540498049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616279.676953125,
            "unit": "ns",
            "range": "± 6088.778925977532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644546.5653645834,
            "unit": "ns",
            "range": "± 21053.4186980989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468236.6996419271,
            "unit": "ns",
            "range": "± 877.2610334233348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418873.7168317522,
            "unit": "ns",
            "range": "± 512.0833710825958"
          }
        ]
      }
    ]
  }
}