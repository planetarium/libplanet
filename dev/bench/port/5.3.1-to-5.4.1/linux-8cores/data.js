window.BENCHMARK_DATA = {
  "lastUpdate": 1732170629121,
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
          "id": "59e1e9931fc0bce80211118d7993f66e33140ae3",
          "message": "Merge remote-tracking branch 'origin/5.3-maintenance' into port/5.3.1-to-5.4.1",
          "timestamp": "2024-11-21T15:20:43+09:00",
          "tree_id": "ba7a58da7d784e0910c6b85c10e0307923c0f2fd",
          "url": "https://github.com/planetarium/libplanet/commit/59e1e9931fc0bce80211118d7993f66e33140ae3"
        },
        "date": 1732170602759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10351778,
            "unit": "ns",
            "range": "± 212224.6418980369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26855808,
            "unit": "ns",
            "range": "± 638678.6765384863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67309815.93333334,
            "unit": "ns",
            "range": "± 1175497.838676233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137922826.7,
            "unit": "ns",
            "range": "± 1806310.1139399072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293517737.6,
            "unit": "ns",
            "range": "± 8644919.381064355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109526.79347826086,
            "unit": "ns",
            "range": "± 6712.265837343288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190505.77692307692,
            "unit": "ns",
            "range": "± 8803.173792920676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159553.99180327868,
            "unit": "ns",
            "range": "± 7207.361508954928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851500.6153846155,
            "unit": "ns",
            "range": "± 75297.06740654747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2852902.8235294116,
            "unit": "ns",
            "range": "± 49966.561496458926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13807.044943820225,
            "unit": "ns",
            "range": "± 1008.7086581605257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73486.91836734694,
            "unit": "ns",
            "range": "± 10039.328990056407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52338.29230769231,
            "unit": "ns",
            "range": "± 2451.531222541568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74245.293814433,
            "unit": "ns",
            "range": "± 14345.927384437182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3574.0515463917527,
            "unit": "ns",
            "range": "± 744.3334878032105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14111.597826086956,
            "unit": "ns",
            "range": "± 1563.8522530743662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737981.2625558036,
            "unit": "ns",
            "range": "± 10434.468921650701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207036.0170572917,
            "unit": "ns",
            "range": "± 6061.032098262537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767237.5571614583,
            "unit": "ns",
            "range": "± 2877.3022526466807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909614.4209635416,
            "unit": "ns",
            "range": "± 19948.08171456023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618876.3337890625,
            "unit": "ns",
            "range": "± 9908.159401048766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551374.7483132102,
            "unit": "ns",
            "range": "± 13122.670212296938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2268885.0789473685,
            "unit": "ns",
            "range": "± 77832.62689992064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2460654.2363636363,
            "unit": "ns",
            "range": "± 104350.80797162991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2957232.4583333335,
            "unit": "ns",
            "range": "± 116609.70025742236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2485267.2317073173,
            "unit": "ns",
            "range": "± 88322.80061117411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3196109.5490196077,
            "unit": "ns",
            "range": "± 128024.62473419927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961987.565934066,
            "unit": "ns",
            "range": "± 62498.1740323138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877163.119402985,
            "unit": "ns",
            "range": "± 88893.96673114352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545599.1323529412,
            "unit": "ns",
            "range": "± 69966.87002632552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7558364.184210527,
            "unit": "ns",
            "range": "± 257854.4042884766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30340.382352941175,
            "unit": "ns",
            "range": "± 983.0376550235987"
          }
        ]
      }
    ]
  }
}