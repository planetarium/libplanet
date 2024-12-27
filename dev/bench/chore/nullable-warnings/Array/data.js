window.BENCHMARK_DATA = {
  "lastUpdate": 1735260758911,
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
          "id": "ef269073cd238a3cbdcce238645f5f8fc42b02c8",
          "message": "chore: Remove nullable-related warnings",
          "timestamp": "2024-12-27T09:40:11+09:00",
          "tree_id": "45d702457db5b59ce8829a9a2cfd613143f538c3",
          "url": "https://github.com/planetarium/libplanet/commit/ef269073cd238a3cbdcce238645f5f8fc42b02c8"
        },
        "date": 1735260482861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10657025.923076924,
            "unit": "ns",
            "range": "± 118172.09200036865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26254312.714285713,
            "unit": "ns",
            "range": "± 158002.1725568396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66629519.13333333,
            "unit": "ns",
            "range": "± 152654.18256394635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134503002.64285713,
            "unit": "ns",
            "range": "± 400817.79918885016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270280824.6333333,
            "unit": "ns",
            "range": "± 408235.9867303411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12719.32,
            "unit": "ns",
            "range": "± 340.1462577578455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54126.67741935484,
            "unit": "ns",
            "range": "± 2457.338662877366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106076.08163265306,
            "unit": "ns",
            "range": "± 3789.157232797809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92660.16279069768,
            "unit": "ns",
            "range": "± 3302.742106984614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845158.887755102,
            "unit": "ns",
            "range": "± 178757.97728564532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2689090.626262626,
            "unit": "ns",
            "range": "± 164506.11658379558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5226.903225806452,
            "unit": "ns",
            "range": "± 793.9136830821932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27917.48888888889,
            "unit": "ns",
            "range": "± 2852.017993405129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22842.22105263158,
            "unit": "ns",
            "range": "± 1650.221282253727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30749.850515463917,
            "unit": "ns",
            "range": "± 5870.003160563525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1473.8229166666667,
            "unit": "ns",
            "range": "± 267.7205532401145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4796.06043956044,
            "unit": "ns",
            "range": "± 557.3906910037003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677500.7747252748,
            "unit": "ns",
            "range": "± 41880.432504151606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270934.5897435897,
            "unit": "ns",
            "range": "± 43208.40075769742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1043888.8108108108,
            "unit": "ns",
            "range": "± 52176.10455005731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8748775.72,
            "unit": "ns",
            "range": "± 1486466.8065555776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120282.9,
            "unit": "ns",
            "range": "± 77264.37770521076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253062.214285714,
            "unit": "ns",
            "range": "± 32484.070941779286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2527465.4565217393,
            "unit": "ns",
            "range": "± 49426.4337930426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2228242.476190476,
            "unit": "ns",
            "range": "± 37397.77456295902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2790381.96,
            "unit": "ns",
            "range": "± 111902.18957606118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3056383.6606770833,
            "unit": "ns",
            "range": "± 31498.225333815903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920326.2483072917,
            "unit": "ns",
            "range": "± 7057.448235929703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612705.5830729167,
            "unit": "ns",
            "range": "± 5029.013007538295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630660.9313802083,
            "unit": "ns",
            "range": "± 21613.686889112716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469112.44036458334,
            "unit": "ns",
            "range": "± 511.5093609856586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424518.92900390626,
            "unit": "ns",
            "range": "± 1566.861223921724"
          }
        ]
      }
    ]
  }
}