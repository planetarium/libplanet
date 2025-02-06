window.BENCHMARK_DATA = {
  "lastUpdate": 1738830256135,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "1ddde113784aeadba3e94cd44b0cfbc92bfbd526",
          "message": "Downsize HashNodeCache",
          "timestamp": "2025-02-06T17:15:52+09:00",
          "tree_id": "3d1242376298f6cd86715c298a11e950b6bd82bd",
          "url": "https://github.com/planetarium/libplanet/commit/1ddde113784aeadba3e94cd44b0cfbc92bfbd526"
        },
        "date": 1738830230654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30973.153846153848,
            "unit": "ns",
            "range": "± 468.35809771189787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3977579.447716346,
            "unit": "ns",
            "range": "± 8067.010344247705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1230566.248046875,
            "unit": "ns",
            "range": "± 2879.348726975287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 794712.2181222098,
            "unit": "ns",
            "range": "± 1980.965987791195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2070352.2767857143,
            "unit": "ns",
            "range": "± 3787.2266085838182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644546.2047293527,
            "unit": "ns",
            "range": "± 1078.6307680160899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569751.0750558035,
            "unit": "ns",
            "range": "± 977.4977382435511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2446084.6764705884,
            "unit": "ns",
            "range": "± 49807.40395668511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529568.4285714286,
            "unit": "ns",
            "range": "± 34129.4561350079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3062080.46875,
            "unit": "ns",
            "range": "± 93170.00914664594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2581596.714285714,
            "unit": "ns",
            "range": "± 102754.94965731988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295431.1875,
            "unit": "ns",
            "range": "± 61354.82115500379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11522475.933333334,
            "unit": "ns",
            "range": "± 155279.75161967083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27860856.285714287,
            "unit": "ns",
            "range": "± 145888.53220520457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72118159.35714285,
            "unit": "ns",
            "range": "± 704642.6341694946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140553877.2857143,
            "unit": "ns",
            "range": "± 1164260.3661930892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285865670.46666664,
            "unit": "ns",
            "range": "± 2166892.644098749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115808.52808988764,
            "unit": "ns",
            "range": "± 7832.460129733256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200749.02380952382,
            "unit": "ns",
            "range": "± 7223.6456568713875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175412.58571428573,
            "unit": "ns",
            "range": "± 5663.499335899237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027253.933333333,
            "unit": "ns",
            "range": "± 41906.96147840333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2965123.8125,
            "unit": "ns",
            "range": "± 55051.84239753017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15210.142857142857,
            "unit": "ns",
            "range": "± 2863.774706049746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61584.0989010989,
            "unit": "ns",
            "range": "± 4436.19612594931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51222.083333333336,
            "unit": "ns",
            "range": "± 629.6604363873557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61777.802083333336,
            "unit": "ns",
            "range": "± 9603.674901466014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3116.2291666666665,
            "unit": "ns",
            "range": "± 366.1840629826155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11999.279569892473,
            "unit": "ns",
            "range": "± 1062.4357920813216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038767.183908046,
            "unit": "ns",
            "range": "± 56733.4917504497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1995877.7,
            "unit": "ns",
            "range": "± 83595.55486884234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1741328.3820224719,
            "unit": "ns",
            "range": "± 106547.08181304227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8798958.30357143,
            "unit": "ns",
            "range": "± 248658.80463126904"
          }
        ]
      }
    ]
  }
}