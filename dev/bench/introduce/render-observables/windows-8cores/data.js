window.BENCHMARK_DATA = {
  "lastUpdate": 1723892583891,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "e07908e64433b84ba9bc6fe1bfdbb90a501b6359",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:46:06+09:00",
          "tree_id": "27025bb6988dc06d706f41a31b8c6998a1d232bb",
          "url": "https://github.com/planetarium/libplanet/commit/e07908e64433b84ba9bc6fe1bfdbb90a501b6359"
        },
        "date": 1723892300911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011956.1224489796,
            "unit": "ns",
            "range": "± 126641.06031617656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720063.6363636365,
            "unit": "ns",
            "range": "± 53826.01208678774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511517.2413793104,
            "unit": "ns",
            "range": "± 81929.07483872518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7052926.0869565215,
            "unit": "ns",
            "range": "± 268371.61253653286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30804,
            "unit": "ns",
            "range": "± 523.9910940719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9891353.333333334,
            "unit": "ns",
            "range": "± 67974.03776092612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24023593.333333332,
            "unit": "ns",
            "range": "± 124539.16461824178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59826157.14285714,
            "unit": "ns",
            "range": "± 415780.2687335366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117882493.33333333,
            "unit": "ns",
            "range": "± 588448.5503261542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241885593.33333334,
            "unit": "ns",
            "range": "± 1710231.9485407597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334053.6979166665,
            "unit": "ns",
            "range": "± 5963.548756193475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071798.1510416667,
            "unit": "ns",
            "range": "± 4108.451217674173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730965.37109375,
            "unit": "ns",
            "range": "± 1213.2591605857863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921428.1700721155,
            "unit": "ns",
            "range": "± 1374.7156950991086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608400,
            "unit": "ns",
            "range": "± 975.3307920203737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574847.9817708334,
            "unit": "ns",
            "range": "± 1747.950428284224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2094672,
            "unit": "ns",
            "range": "± 21623.03016076455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255592.3076923075,
            "unit": "ns",
            "range": "± 21207.288901792766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2664095.238095238,
            "unit": "ns",
            "range": "± 60361.81306248576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2301080,
            "unit": "ns",
            "range": "± 59528.256595782594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2928864.285714286,
            "unit": "ns",
            "range": "± 41207.57225303392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174189.6551724138,
            "unit": "ns",
            "range": "± 7094.986855202699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165685.91549295775,
            "unit": "ns",
            "range": "± 7393.361805887531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142562.5,
            "unit": "ns",
            "range": "± 2094.078954258093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2644143.3333333335,
            "unit": "ns",
            "range": "± 38799.364255960005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389707.1428571427,
            "unit": "ns",
            "range": "± 34318.585776082466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11091.208791208792,
            "unit": "ns",
            "range": "± 1072.2404738208838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52386.95652173913,
            "unit": "ns",
            "range": "± 4156.716196296111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45211.76470588235,
            "unit": "ns",
            "range": "± 785.7181054147031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52324.489795918365,
            "unit": "ns",
            "range": "± 10411.116790709426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2585.0515463917527,
            "unit": "ns",
            "range": "± 425.25512859767537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9617.582417582418,
            "unit": "ns",
            "range": "± 966.5049757408744"
          }
        ]
      }
    ]
  }
}