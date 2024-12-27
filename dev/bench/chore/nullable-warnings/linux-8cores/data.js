window.BENCHMARK_DATA = {
  "lastUpdate": 1735260645877,
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
        "date": 1735260618316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10710070.42857143,
            "unit": "ns",
            "range": "± 47738.27832360734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27837942.566666666,
            "unit": "ns",
            "range": "± 132678.74577848698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71280618.9,
            "unit": "ns",
            "range": "± 335650.3616264571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144912110.35714287,
            "unit": "ns",
            "range": "± 416242.09216357354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298972812.23333335,
            "unit": "ns",
            "range": "± 3205060.5499005667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109716.12790697675,
            "unit": "ns",
            "range": "± 5911.654849027941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192822.13725490196,
            "unit": "ns",
            "range": "± 6919.583377688596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173995.2068965517,
            "unit": "ns",
            "range": "± 5107.3276656424205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2985639.3333333335,
            "unit": "ns",
            "range": "± 45641.158378104716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746151.269230769,
            "unit": "ns",
            "range": "± 22953.080403850832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13851.70652173913,
            "unit": "ns",
            "range": "± 1298.4011599905061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60493.91780821918,
            "unit": "ns",
            "range": "± 2907.739255243499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58123.4,
            "unit": "ns",
            "range": "± 5036.599118131963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63741.395833333336,
            "unit": "ns",
            "range": "± 8005.416568245551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2862.6134020618556,
            "unit": "ns",
            "range": "± 381.57212829207936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14343.591836734693,
            "unit": "ns",
            "range": "± 2271.2790612237177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763363.7896634615,
            "unit": "ns",
            "range": "± 4319.505891709243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208820.2420479911,
            "unit": "ns",
            "range": "± 1839.9384089483713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766410.6727120535,
            "unit": "ns",
            "range": "± 963.3540220543738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945134.1555524555,
            "unit": "ns",
            "range": "± 961.365268614599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626751.9049479166,
            "unit": "ns",
            "range": "± 1261.2082400818417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591551.0434895833,
            "unit": "ns",
            "range": "± 708.1563134901754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2449185.8235294116,
            "unit": "ns",
            "range": "± 46792.02797650912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2612067.5,
            "unit": "ns",
            "range": "± 38064.270103339695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3031375.033333333,
            "unit": "ns",
            "range": "± 45131.64171916048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622701.0625,
            "unit": "ns",
            "range": "± 42150.839288549956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3398525.5714285714,
            "unit": "ns",
            "range": "± 59880.39200801016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013757.9069767442,
            "unit": "ns",
            "range": "± 54904.62035682006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2012808.6923076923,
            "unit": "ns",
            "range": "± 68948.29595091102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625463.1417910447,
            "unit": "ns",
            "range": "± 74922.82446841075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7814954.88,
            "unit": "ns",
            "range": "± 206508.0535133194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35713.25,
            "unit": "ns",
            "range": "± 6542.493852160318"
          }
        ]
      }
    ]
  }
}