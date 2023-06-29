window.BENCHMARK_DATA = {
  "lastUpdate": 1688030010372,
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
          "id": "4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109",
          "message": "Merge pull request #3252 from greymistcube/release/2.3.0\n\n🚀 Release 2.3.0",
          "timestamp": "2023-06-29T14:35:16+09:00",
          "tree_id": "e73d3fb6303de55230d2e5a46b9e5b507b528da9",
          "url": "https://github.com/planetarium/libplanet/commit/4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109"
        },
        "date": 1688021187255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8467166.989130436,
            "unit": "ns",
            "range": "± 479750.6083695297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22106899.84567901,
            "unit": "ns",
            "range": "± 1731272.370017953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57368960.43333333,
            "unit": "ns",
            "range": "± 9124612.310240882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119264800.94565217,
            "unit": "ns",
            "range": "± 24819330.645698547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274563217.9368421,
            "unit": "ns",
            "range": "± 64363341.87301436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72811.65217391304,
            "unit": "ns",
            "range": "± 14874.2993377764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389991.15555555554,
            "unit": "ns",
            "range": "± 53562.68222722241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382813.9550561798,
            "unit": "ns",
            "range": "± 56144.50240266995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 367261.22340425535,
            "unit": "ns",
            "range": "± 57600.32008501158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4738131.016129033,
            "unit": "ns",
            "range": "± 501389.19608609553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4296675.095744681,
            "unit": "ns",
            "range": "± 478921.2476226683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21930.90425531915,
            "unit": "ns",
            "range": "± 4463.144809759698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103895.89583333333,
            "unit": "ns",
            "range": "± 16449.888887469355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116855.84946236559,
            "unit": "ns",
            "range": "± 12761.061747895972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133520.19791666666,
            "unit": "ns",
            "range": "± 25737.410799567224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7763.532258064516,
            "unit": "ns",
            "range": "± 1766.144514075867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19950.141304347828,
            "unit": "ns",
            "range": "± 3948.0251749465156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2072659.4157894736,
            "unit": "ns",
            "range": "± 471147.72156178905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3724988.9891304346,
            "unit": "ns",
            "range": "± 724299.4002784519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2811296.6222222224,
            "unit": "ns",
            "range": "± 418003.7526741009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7926461.133333334,
            "unit": "ns",
            "range": "± 1679223.5723163106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992504.9891304346,
            "unit": "ns",
            "range": "± 793571.7412302694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3864735.788888889,
            "unit": "ns",
            "range": "± 582547.8651535035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4969016.9130434785,
            "unit": "ns",
            "range": "± 759809.3140164703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5099297.287234043,
            "unit": "ns",
            "range": "± 931107.7915512082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644339.43678161,
            "unit": "ns",
            "range": "± 1217772.319028963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7102020.162560096,
            "unit": "ns",
            "range": "± 248422.72377100112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2397076.5748697915,
            "unit": "ns",
            "range": "± 100886.27922773342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1498711.4326923077,
            "unit": "ns",
            "range": "± 59590.92627449098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3546815.6914465204,
            "unit": "ns",
            "range": "± 231711.4037326751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1095198.476629849,
            "unit": "ns",
            "range": "± 31774.283747891932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736056.9592341933,
            "unit": "ns",
            "range": "± 26379.688179120807"
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
          "id": "00a04b95448b57c36f51eef24e613fe85f2b0121",
          "message": "Merge pull request #3254 from greymistcube/prepare/2.3.1\n\n🔧 Prepare 2.3.1",
          "timestamp": "2023-06-29T17:51:53+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/planetarium/libplanet/commit/00a04b95448b57c36f51eef24e613fe85f2b0121"
        },
        "date": 1688029927938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8439899.038461538,
            "unit": "ns",
            "range": "± 96178.00976454666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21087502.847826086,
            "unit": "ns",
            "range": "± 407442.8637931513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56740350.90860215,
            "unit": "ns",
            "range": "± 3309955.6302700127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112453141.60526316,
            "unit": "ns",
            "range": "± 4512768.536451408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240788430.3901099,
            "unit": "ns",
            "range": "± 17081415.384882484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67431.95833333333,
            "unit": "ns",
            "range": "± 10116.642497875693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365899.75531914894,
            "unit": "ns",
            "range": "± 41578.69169733541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340460.6666666667,
            "unit": "ns",
            "range": "± 26934.132821747768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316732.78571428574,
            "unit": "ns",
            "range": "± 14382.65703662504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4324812.166666667,
            "unit": "ns",
            "range": "± 58967.105325894634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772476.25,
            "unit": "ns",
            "range": "± 45730.61294362891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19765.935483870966,
            "unit": "ns",
            "range": "± 3917.4828675479303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115451.79166666667,
            "unit": "ns",
            "range": "± 8880.616786209659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106621.51,
            "unit": "ns",
            "range": "± 17303.45890539831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113088.1170212766,
            "unit": "ns",
            "range": "± 14328.94159014146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8207.625,
            "unit": "ns",
            "range": "± 973.0665715312489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23706.195652173912,
            "unit": "ns",
            "range": "± 2499.201220694194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648386.2783505155,
            "unit": "ns",
            "range": "± 157661.195311916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989859.2025316455,
            "unit": "ns",
            "range": "± 154644.4933069509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2563060.7731958763,
            "unit": "ns",
            "range": "± 255043.8576491349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6612486.510989011,
            "unit": "ns",
            "range": "± 435836.17459661496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3612450.067010309,
            "unit": "ns",
            "range": "± 264689.5105491096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3839391.8626373624,
            "unit": "ns",
            "range": "± 375446.9980520558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4780076.510638298,
            "unit": "ns",
            "range": "± 319333.4809851639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4524860.08045977,
            "unit": "ns",
            "range": "± 259259.81767440014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8290861.978723404,
            "unit": "ns",
            "range": "± 529160.245780189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6743059.489583333,
            "unit": "ns",
            "range": "± 175351.4683954279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111252.4387335526,
            "unit": "ns",
            "range": "± 42603.24902164846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330395.3821149555,
            "unit": "ns",
            "range": "± 20398.189392005843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639628.796181956,
            "unit": "ns",
            "range": "± 148798.35765709882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858274.0365234375,
            "unit": "ns",
            "range": "± 11470.108422711066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730078.724984976,
            "unit": "ns",
            "range": "± 6571.2187326306785"
          }
        ]
      }
    ]
  }
}