window.BENCHMARK_DATA = {
  "lastUpdate": 1715675879009,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715675854905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2379981.2083333335,
            "unit": "ns",
            "range": "± 55684.308856093354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486987.6896551726,
            "unit": "ns",
            "range": "± 54976.13543172519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3047047,
            "unit": "ns",
            "range": "± 25149.932297660827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3137124.8928571427,
            "unit": "ns",
            "range": "± 88940.78922200172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8994397.14864865,
            "unit": "ns",
            "range": "± 263619.1879693569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198514.14814814815,
            "unit": "ns",
            "range": "± 7519.412427259388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194523.11111111112,
            "unit": "ns",
            "range": "± 10751.914661416915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167625.56666666668,
            "unit": "ns",
            "range": "± 3136.3948017398816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169839.9166666665,
            "unit": "ns",
            "range": "± 12394.17808678614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888067.6666666665,
            "unit": "ns",
            "range": "± 47532.63887157159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13070.274193548386,
            "unit": "ns",
            "range": "± 830.2241332921498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61815.92307692308,
            "unit": "ns",
            "range": "± 4738.444489798944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100810.5294117647,
            "unit": "ns",
            "range": "± 1924.9241906386553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89095.28571428571,
            "unit": "ns",
            "range": "± 20352.733872569283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7012.061224489796,
            "unit": "ns",
            "range": "± 644.4000296979926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22881.115384615383,
            "unit": "ns",
            "range": "± 948.6651747989487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5843224.5,
            "unit": "ns",
            "range": "± 51599.053929535155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14643284.566666666,
            "unit": "ns",
            "range": "± 82032.62143759524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37553994.266666666,
            "unit": "ns",
            "range": "± 114414.62171010603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75884748.85714285,
            "unit": "ns",
            "range": "± 250346.5968117178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153775391.35714287,
            "unit": "ns",
            "range": "± 756663.0614844473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999891.9285714285,
            "unit": "ns",
            "range": "± 98003.28396107264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889390.4428571428,
            "unit": "ns",
            "range": "± 91895.67216436347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1616708.8969072164,
            "unit": "ns",
            "range": "± 143380.4923890221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7771810.5,
            "unit": "ns",
            "range": "± 209244.19518734564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36523.75,
            "unit": "ns",
            "range": "± 1918.5636669925232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707689.662409856,
            "unit": "ns",
            "range": "± 3733.4648269289564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1186807.439732143,
            "unit": "ns",
            "range": "± 734.5775282728905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766600.0558733259,
            "unit": "ns",
            "range": "± 1747.7726396011321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920800.5817307692,
            "unit": "ns",
            "range": "± 2063.7403105344993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613826.5670340402,
            "unit": "ns",
            "range": "± 1522.2470077223754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579054.2512019231,
            "unit": "ns",
            "range": "± 416.3080947223985"
          }
        ]
      }
    ]
  }
}