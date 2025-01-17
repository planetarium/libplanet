window.BENCHMARK_DATA = {
  "lastUpdate": 1737105102693,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "1680bad8311980bd3941de6425a6470945e1db37",
          "message": "chore: fix solo proposer",
          "timestamp": "2025-01-17T18:02:05+09:00",
          "tree_id": "58b779eacc834d3e06d37e171dab2fdd1b08994c",
          "url": "https://github.com/planetarium/libplanet/commit/1680bad8311980bd3941de6425a6470945e1db37"
        },
        "date": 1737105076866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3538007.3333333335,
            "unit": "ns",
            "range": "± 64103.99827586717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3370763.83,
            "unit": "ns",
            "range": "± 2286058.317611851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3790689.05,
            "unit": "ns",
            "range": "± 1648027.6779699347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7294119.344155844,
            "unit": "ns",
            "range": "± 450419.1665281897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791008.648177083,
            "unit": "ns",
            "range": "± 31399.725174801628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920180.9059895833,
            "unit": "ns",
            "range": "± 5986.738191150809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713302.8751953125,
            "unit": "ns",
            "range": "± 3524.9489451101635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1718542.760516827,
            "unit": "ns",
            "range": "± 2755.7654973216463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 478436.852734375,
            "unit": "ns",
            "range": "± 2260.4618560408103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427888.7872070313,
            "unit": "ns",
            "range": "± 2048.1309405544243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11265855.733333332,
            "unit": "ns",
            "range": "± 99937.23349573446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22931508.28,
            "unit": "ns",
            "range": "± 860465.3518745857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56630262.92307692,
            "unit": "ns",
            "range": "± 191323.90807539865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113508877.4,
            "unit": "ns",
            "range": "± 360103.33938186604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227623585.7142857,
            "unit": "ns",
            "range": "± 695884.3543365331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115434.06097560975,
            "unit": "ns",
            "range": "± 18468.2144351359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175271.15853658537,
            "unit": "ns",
            "range": "± 22891.294453131915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137090.91304347827,
            "unit": "ns",
            "range": "± 4472.003804292195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2641083.4714285713,
            "unit": "ns",
            "range": "± 86362.32451047217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458479.16,
            "unit": "ns",
            "range": "± 64886.457697067526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15740.401098901099,
            "unit": "ns",
            "range": "± 4612.041502788458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54590.77647058824,
            "unit": "ns",
            "range": "± 9710.437572133242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44438.625,
            "unit": "ns",
            "range": "± 1028.394889323696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59856.81578947369,
            "unit": "ns",
            "range": "± 18111.570053223797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3233.942105263158,
            "unit": "ns",
            "range": "± 883.8200538401405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12275,
            "unit": "ns",
            "range": "± 3234.1302454360807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25233.4375,
            "unit": "ns",
            "range": "± 492.31006066637855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2635045.3571428573,
            "unit": "ns",
            "range": "± 36053.64225408737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581879,
            "unit": "ns",
            "range": "± 555289.6878647116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5996515.115384615,
            "unit": "ns",
            "range": "± 64918.21321804133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2679531.2525252528,
            "unit": "ns",
            "range": "± 787570.237279065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2854772.6403508773,
            "unit": "ns",
            "range": "± 71796.98691733881"
          }
        ]
      }
    ]
  }
}