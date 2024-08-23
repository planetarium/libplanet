window.BENCHMARK_DATA = {
  "lastUpdate": 1724391580074,
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
          "id": "1bcadcb5202d8c1fbe53819c4b6e7e6a640bb093",
          "message": "tmp",
          "timestamp": "2024-08-23T14:26:04+09:00",
          "tree_id": "756406cf733ee7849a986a1d3c04269577e8207c",
          "url": "https://github.com/planetarium/libplanet/commit/1bcadcb5202d8c1fbe53819c4b6e7e6a640bb093"
        },
        "date": 1724391320846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924294.8453608247,
            "unit": "ns",
            "range": "± 79479.93506111833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727153.488372093,
            "unit": "ns",
            "range": "± 63243.22417625618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1360692.1348314607,
            "unit": "ns",
            "range": "± 78568.37240252347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5944882.608695652,
            "unit": "ns",
            "range": "± 132498.16689014612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28331.25,
            "unit": "ns",
            "range": "± 546.160843219895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9513564.285714285,
            "unit": "ns",
            "range": "± 59890.16366062714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23787678.57142857,
            "unit": "ns",
            "range": "± 164703.94502104225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59982360,
            "unit": "ns",
            "range": "± 661161.0045972161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117122420,
            "unit": "ns",
            "range": "± 733036.8195780774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245051633.33333334,
            "unit": "ns",
            "range": "± 2867205.565072193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333837.667410714,
            "unit": "ns",
            "range": "± 15517.742287017032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077215.5729166667,
            "unit": "ns",
            "range": "± 4124.72264366684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734583.6538461539,
            "unit": "ns",
            "range": "± 995.8299438906715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942009.0234375,
            "unit": "ns",
            "range": "± 3781.342874766793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603840.1436941965,
            "unit": "ns",
            "range": "± 912.9779335550419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565626.953125,
            "unit": "ns",
            "range": "± 2798.784395472762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170305,
            "unit": "ns",
            "range": "± 47481.11508245867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257103.4482758623,
            "unit": "ns",
            "range": "± 64694.90752071063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2732907.1428571427,
            "unit": "ns",
            "range": "± 55492.635289996564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2198464.285714286,
            "unit": "ns",
            "range": "± 29194.67436004401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898100,
            "unit": "ns",
            "range": "± 36082.84119316865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172809.61538461538,
            "unit": "ns",
            "range": "± 6142.563162240304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171008.13953488372,
            "unit": "ns",
            "range": "± 9294.023571360622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145795.65217391305,
            "unit": "ns",
            "range": "± 3634.866292510204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2694460,
            "unit": "ns",
            "range": "± 44589.64966382733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2437017.6470588236,
            "unit": "ns",
            "range": "± 49107.0798777289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11237.64705882353,
            "unit": "ns",
            "range": "± 856.6235588452067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51856.25,
            "unit": "ns",
            "range": "± 4847.480354727978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44066.666666666664,
            "unit": "ns",
            "range": "± 730.8335289645813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48445.26315789474,
            "unit": "ns",
            "range": "± 7864.433382641829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2531.6326530612246,
            "unit": "ns",
            "range": "± 381.6937129023445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9362.35294117647,
            "unit": "ns",
            "range": "± 809.9054134351027"
          }
        ]
      }
    ]
  }
}