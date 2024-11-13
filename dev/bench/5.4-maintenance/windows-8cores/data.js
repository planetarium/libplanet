window.BENCHMARK_DATA = {
  "lastUpdate": 1731483034037,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731482677594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041814.1414141414,
            "unit": "ns",
            "range": "± 111757.38117439667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831215.625,
            "unit": "ns",
            "range": "± 84642.50352380758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532506.6666666667,
            "unit": "ns",
            "range": "± 85007.30411446413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6638034.285714285,
            "unit": "ns",
            "range": "± 172088.8175996835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36463.63636363636,
            "unit": "ns",
            "range": "± 4750.627338711936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10134180,
            "unit": "ns",
            "range": "± 144801.0714246075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25521364.285714287,
            "unit": "ns",
            "range": "± 223570.81000862367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63871453.333333336,
            "unit": "ns",
            "range": "± 634047.2062942347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125093600,
            "unit": "ns",
            "range": "± 1080479.2732857026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251411778.57142857,
            "unit": "ns",
            "range": "± 3400800.853911771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368889.1741071427,
            "unit": "ns",
            "range": "± 8934.678204844915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072516.4341517857,
            "unit": "ns",
            "range": "± 3665.085800738355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754814.3815104166,
            "unit": "ns",
            "range": "± 1676.8851647985402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960457.533482143,
            "unit": "ns",
            "range": "± 3481.6926497180943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627287.7178485577,
            "unit": "ns",
            "range": "± 1163.8144046717712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560360.0811298077,
            "unit": "ns",
            "range": "± 552.7190651777544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2291372.4137931033,
            "unit": "ns",
            "range": "± 56296.935317194446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2353300,
            "unit": "ns",
            "range": "± 81165.37339184634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2849965.217391304,
            "unit": "ns",
            "range": "± 70145.07439906662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2407596,
            "unit": "ns",
            "range": "± 63169.2797172803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3063623.076923077,
            "unit": "ns",
            "range": "± 46565.977455759006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107553.93258426966,
            "unit": "ns",
            "range": "± 8806.222698903099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176263.82978723405,
            "unit": "ns",
            "range": "± 6781.157575027608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164927.55102040817,
            "unit": "ns",
            "range": "± 11120.30538604104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2718846.6666666665,
            "unit": "ns",
            "range": "± 46675.10603961735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2587275,
            "unit": "ns",
            "range": "± 18342.207907149317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12442.222222222223,
            "unit": "ns",
            "range": "± 2107.822657283293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61092.708333333336,
            "unit": "ns",
            "range": "± 7100.648521777749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48820,
            "unit": "ns",
            "range": "± 4156.954373447145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69289.79591836735,
            "unit": "ns",
            "range": "± 15066.009327998023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3232.6530612244896,
            "unit": "ns",
            "range": "± 684.2522459769883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13947.916666666666,
            "unit": "ns",
            "range": "± 2753.2556486215854"
          }
        ]
      }
    ]
  }
}