window.BENCHMARK_DATA = {
  "lastUpdate": 1739760937916,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6411524690be1adb2182a94b1d381145fc6b1c77",
          "message": "release: 5.5.1",
          "timestamp": "2025-02-17T11:43:07+09:00",
          "tree_id": "b045a2baf8742693d6e215fc173f5320169ddadb",
          "url": "https://github.com/planetarium/libplanet/commit/6411524690be1adb2182a94b1d381145fc6b1c77"
        },
        "date": 1739760739653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971431.9587628866,
            "unit": "ns",
            "range": "± 103161.49005563211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723491.8918918918,
            "unit": "ns",
            "range": "± 57578.51344217049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1454724.4680851065,
            "unit": "ns",
            "range": "± 135267.35985516658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6443177.142857143,
            "unit": "ns",
            "range": "± 211528.3350310506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28310,
            "unit": "ns",
            "range": "± 845.8213718649158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9814600,
            "unit": "ns",
            "range": "± 60796.963486927285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23744850,
            "unit": "ns",
            "range": "± 346295.84006475424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60177057.14285714,
            "unit": "ns",
            "range": "± 375513.571841768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118109407.14285715,
            "unit": "ns",
            "range": "± 735961.5494390636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238958193.33333334,
            "unit": "ns",
            "range": "± 1651702.0323060115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3212186.953125,
            "unit": "ns",
            "range": "± 15255.786139905973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052759.21875,
            "unit": "ns",
            "range": "± 10761.05764503844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733381.9661458334,
            "unit": "ns",
            "range": "± 6332.848000872592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897097.96875,
            "unit": "ns",
            "range": "± 7920.635291804095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612121.9140625,
            "unit": "ns",
            "range": "± 4267.6511481690195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568719.2903645834,
            "unit": "ns",
            "range": "± 2196.129724951994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180414.285714286,
            "unit": "ns",
            "range": "± 30591.67451203921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306971.4285714286,
            "unit": "ns",
            "range": "± 17610.243023327625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2720157.1428571427,
            "unit": "ns",
            "range": "± 37444.61477735051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317746.6666666665,
            "unit": "ns",
            "range": "± 21363.61615546617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2918392.3076923075,
            "unit": "ns",
            "range": "± 47605.382425703036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86612.67605633802,
            "unit": "ns",
            "range": "± 4208.220851668613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162233.89830508476,
            "unit": "ns",
            "range": "± 5469.905444857958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144945,
            "unit": "ns",
            "range": "± 3249.0443939232673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2539121.4285714286,
            "unit": "ns",
            "range": "± 40747.66965628319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2437115,
            "unit": "ns",
            "range": "± 54909.61257040136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9859.139784946237,
            "unit": "ns",
            "range": "± 1242.9135265961206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48439.50617283951,
            "unit": "ns",
            "range": "± 2368.157459521309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42642,
            "unit": "ns",
            "range": "± 1024.2558274181308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44424.17582417582,
            "unit": "ns",
            "range": "± 6435.463216675767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2190.425531914894,
            "unit": "ns",
            "range": "± 390.221648880595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9077.894736842105,
            "unit": "ns",
            "range": "± 1074.9744130916752"
          }
        ]
      }
    ]
  }
}