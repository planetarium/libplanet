window.BENCHMARK_DATA = {
  "lastUpdate": 1742891081785,
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
          "id": "b1d96ff91b659d5ed066e72a3e1fb9a6002a2811",
          "message": "test: Change tx.bin",
          "timestamp": "2025-03-11T18:13:38+09:00",
          "tree_id": "56b1a3806a7626d429197468352950372021272a",
          "url": "https://github.com/planetarium/libplanet/commit/b1d96ff91b659d5ed066e72a3e1fb9a6002a2811"
        },
        "date": 1742890877470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2985897.727272727,
            "unit": "ns",
            "range": "± 110871.92168430384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5175060,
            "unit": "ns",
            "range": "± 92721.74040028123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4206438.095238095,
            "unit": "ns",
            "range": "± 98173.55792773569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11204779,
            "unit": "ns",
            "range": "± 4727196.942800161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21008.97435897436,
            "unit": "ns",
            "range": "± 1109.6022333327899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4036707.1428571427,
            "unit": "ns",
            "range": "± 9038.07878544263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10088842.857142856,
            "unit": "ns",
            "range": "± 118698.56919807555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21283190.322580647,
            "unit": "ns",
            "range": "± 968477.2921853061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41300700,
            "unit": "ns",
            "range": "± 284586.2833424455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82307040,
            "unit": "ns",
            "range": "± 157647.36779099284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4089175.2604166665,
            "unit": "ns",
            "range": "± 7091.270214297692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 949491.2174479166,
            "unit": "ns",
            "range": "± 3975.579326064371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724845.7942708334,
            "unit": "ns",
            "range": "± 4158.646951438527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648916.571514423,
            "unit": "ns",
            "range": "± 5590.50861056024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 489355.5013020833,
            "unit": "ns",
            "range": "± 2472.0860725571297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 399992.10379464284,
            "unit": "ns",
            "range": "± 1552.6332083604716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957323.076923077,
            "unit": "ns",
            "range": "± 41454.89825995946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255223.076923077,
            "unit": "ns",
            "range": "± 43093.312587263346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876759.090909091,
            "unit": "ns",
            "range": "± 91565.21828256731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3287881.4814814813,
            "unit": "ns",
            "range": "± 89601.97043264788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4447580,
            "unit": "ns",
            "range": "± 36983.76477784349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225047.42268041236,
            "unit": "ns",
            "range": "± 39312.83477012604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389242.42424242425,
            "unit": "ns",
            "range": "± 66820.9717338115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160615,
            "unit": "ns",
            "range": "± 3695.41323093486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1448036.8421052631,
            "unit": "ns",
            "range": "± 49310.409081777376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1261508.3333333333,
            "unit": "ns",
            "range": "± 42006.430630151306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18359.79381443299,
            "unit": "ns",
            "range": "± 5219.527832129838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78442.85714285714,
            "unit": "ns",
            "range": "± 20611.66844990137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43706.12244897959,
            "unit": "ns",
            "range": "± 15203.97273318555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53436.17021276596,
            "unit": "ns",
            "range": "± 28944.04632101534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3117.1717171717173,
            "unit": "ns",
            "range": "± 888.0200866500486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17968.367346938776,
            "unit": "ns",
            "range": "± 5191.877020662728"
          }
        ]
      }
    ]
  }
}