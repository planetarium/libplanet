window.BENCHMARK_DATA = {
  "lastUpdate": 1715825070200,
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
      },
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
          "id": "5d7e7f99624c8cc65b7e7c1de35af6543a32877d",
          "message": "Merge pull request #3786 from greymistcube/prepare/4.5.1\n\n🔧 Prepare 4.5.1",
          "timestamp": "2024-05-16T10:53:36+09:00",
          "tree_id": "ac6b6cc61d413b1bdbf0295b78f75e998968191e",
          "url": "https://github.com/planetarium/libplanet/commit/5d7e7f99624c8cc65b7e7c1de35af6543a32877d"
        },
        "date": 1715825046358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998688.67,
            "unit": "ns",
            "range": "± 95901.77860044298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868047.2045454546,
            "unit": "ns",
            "range": "± 69106.17809946755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586893.6979166667,
            "unit": "ns",
            "range": "± 88694.24447375908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7777780.0625,
            "unit": "ns",
            "range": "± 143364.26986269103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697226.366666666,
            "unit": "ns",
            "range": "± 31773.182114721185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14784092,
            "unit": "ns",
            "range": "± 80597.67292191861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37936708.36666667,
            "unit": "ns",
            "range": "± 158130.30552945283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76250885.6923077,
            "unit": "ns",
            "range": "± 257127.9427429675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157254871.07142857,
            "unit": "ns",
            "range": "± 841199.7922504649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743183.9630408655,
            "unit": "ns",
            "range": "± 4751.285430657435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197698.13671875,
            "unit": "ns",
            "range": "± 1253.583039216945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776564.2014322917,
            "unit": "ns",
            "range": "± 1192.3226105509527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972542.2635416666,
            "unit": "ns",
            "range": "± 2286.0304456393674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620152.7122395834,
            "unit": "ns",
            "range": "± 531.5211189054897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581026.7113932292,
            "unit": "ns",
            "range": "± 484.1718397894461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395929.8666666667,
            "unit": "ns",
            "range": "± 35489.05228953745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586867.75,
            "unit": "ns",
            "range": "± 49250.182851098805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3160043.785714286,
            "unit": "ns",
            "range": "± 36043.84859110139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3304820.1395348837,
            "unit": "ns",
            "range": "± 122271.06466578212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9000264.903225806,
            "unit": "ns",
            "range": "± 224594.64201851224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202732.37037037036,
            "unit": "ns",
            "range": "± 5570.8105483171985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194297.95614035087,
            "unit": "ns",
            "range": "± 7918.499077815403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168562.56666666668,
            "unit": "ns",
            "range": "± 3149.683509421829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121591.8571428573,
            "unit": "ns",
            "range": "± 47936.49504028484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2826612.2352941176,
            "unit": "ns",
            "range": "± 57310.08235089334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14145.887755102041,
            "unit": "ns",
            "range": "± 2148.343883292301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61400.52631578947,
            "unit": "ns",
            "range": "± 4310.3858341445175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51943.782608695656,
            "unit": "ns",
            "range": "± 1079.8232581189866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71263.77956989247,
            "unit": "ns",
            "range": "± 7857.499245895732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2960.4835164835163,
            "unit": "ns",
            "range": "± 399.14331490880045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12094.95652173913,
            "unit": "ns",
            "range": "± 700.389607635973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36452.42682926829,
            "unit": "ns",
            "range": "± 1576.9311893869774"
          }
        ]
      }
    ]
  }
}