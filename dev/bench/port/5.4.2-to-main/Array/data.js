window.BENCHMARK_DATA = {
  "lastUpdate": 1734396519053,
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
          "id": "e3907087caea5ec63a7917f9c21501807ca66be6",
          "message": "Merge tag '5.4.2' into port/5.4.2-to-main",
          "timestamp": "2024-12-17T09:36:02+09:00",
          "tree_id": "4b8563b19539133165ce73d22e42fd051eda60b0",
          "url": "https://github.com/planetarium/libplanet/commit/e3907087caea5ec63a7917f9c21501807ca66be6"
        },
        "date": 1734396242117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10800600.666666666,
            "unit": "ns",
            "range": "± 95803.64126675822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26145244.42857143,
            "unit": "ns",
            "range": "± 137062.35215108053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67336764.71428572,
            "unit": "ns",
            "range": "± 103856.32211890587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134354791.2857143,
            "unit": "ns",
            "range": "± 183326.5323394418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270563304.84615386,
            "unit": "ns",
            "range": "± 290392.4437845121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13242.529411764706,
            "unit": "ns",
            "range": "± 429.9233536548408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53791.01190476191,
            "unit": "ns",
            "range": "± 2797.9242886750476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106546.37288135593,
            "unit": "ns",
            "range": "± 4568.1163698954815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93194.69444444444,
            "unit": "ns",
            "range": "± 3051.5892517033008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2867481.188235294,
            "unit": "ns",
            "range": "± 154110.46205250174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715954.06,
            "unit": "ns",
            "range": "± 162429.54682487337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5062.547368421053,
            "unit": "ns",
            "range": "± 749.2551871681106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27041.03370786517,
            "unit": "ns",
            "range": "± 1841.1009209501785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22120.14285714286,
            "unit": "ns",
            "range": "± 840.3156426134047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30479.94680851064,
            "unit": "ns",
            "range": "± 5423.680491364609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1447.7105263157894,
            "unit": "ns",
            "range": "± 262.47520226282626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4874.450549450549,
            "unit": "ns",
            "range": "± 645.2932195476249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 671992.9411764706,
            "unit": "ns",
            "range": "± 34360.47861568403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264391.6020408163,
            "unit": "ns",
            "range": "± 48499.31533032403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1024755.8676470588,
            "unit": "ns",
            "range": "± 46395.854404327925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8724317.99,
            "unit": "ns",
            "range": "± 1322571.1562312013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128041.9830508474,
            "unit": "ns",
            "range": "± 93502.1830125928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244867.3333333335,
            "unit": "ns",
            "range": "± 72791.46056143306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2551835.3333333335,
            "unit": "ns",
            "range": "± 47213.48901633132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264584.403508772,
            "unit": "ns",
            "range": "± 97444.9273915894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2692170.153846154,
            "unit": "ns",
            "range": "± 32549.5828643168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3007319.929129464,
            "unit": "ns",
            "range": "± 49358.07965581301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917519.9993722098,
            "unit": "ns",
            "range": "± 5105.657888256387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614258.4249348958,
            "unit": "ns",
            "range": "± 5692.696444262096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619467.2428850445,
            "unit": "ns",
            "range": "± 2405.332094729146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463830.4762486049,
            "unit": "ns",
            "range": "± 716.1413697207232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425473.6750139509,
            "unit": "ns",
            "range": "± 599.5234861881859"
          }
        ]
      }
    ]
  }
}