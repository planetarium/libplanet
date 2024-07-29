window.BENCHMARK_DATA = {
  "lastUpdate": 1722217514825,
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
          "id": "4b2b797430752f80612f1efbee6968213f1606e1",
          "message": "WIP",
          "timestamp": "2024-07-29T10:14:55+09:00",
          "tree_id": "de80609a63b1284dac24b7b1e72bcfa6411bc926",
          "url": "https://github.com/planetarium/libplanet/commit/4b2b797430752f80612f1efbee6968213f1606e1"
        },
        "date": 1722216324092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10698237.615384616,
            "unit": "ns",
            "range": "± 154332.50133534113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26648874.533333335,
            "unit": "ns",
            "range": "± 107434.66278618346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67634883.11538461,
            "unit": "ns",
            "range": "± 70671.81767453754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136195633.57142857,
            "unit": "ns",
            "range": "± 238768.13849123887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273313727.84615386,
            "unit": "ns",
            "range": "± 207010.00998415757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13893.42857142857,
            "unit": "ns",
            "range": "± 419.4745512658234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110406.01886792453,
            "unit": "ns",
            "range": "± 4460.921375553253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104603.12068965517,
            "unit": "ns",
            "range": "± 4487.092271767308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94905.86111111111,
            "unit": "ns",
            "range": "± 4681.0995467255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2988123.5918367347,
            "unit": "ns",
            "range": "± 191583.63732284732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770082.9452054794,
            "unit": "ns",
            "range": "± 136370.33532911306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5252.061224489796,
            "unit": "ns",
            "range": "± 852.9963659574579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27265.543478260868,
            "unit": "ns",
            "range": "± 2023.8130718367295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22140.63157894737,
            "unit": "ns",
            "range": "± 1123.4719856125207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31202.457446808512,
            "unit": "ns",
            "range": "± 5071.6682981171725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1178.1666666666667,
            "unit": "ns",
            "range": "± 238.06490407181946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4849.5989010989015,
            "unit": "ns",
            "range": "± 618.6350576505785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680044.641025641,
            "unit": "ns",
            "range": "± 33769.61330744548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1302226.838028169,
            "unit": "ns",
            "range": "± 63468.632908805244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077923.8846153845,
            "unit": "ns",
            "range": "± 53654.01476196747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9428182.91,
            "unit": "ns",
            "range": "± 1208898.2286416884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207324.214285714,
            "unit": "ns",
            "range": "± 31316.819354605777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2322972.4,
            "unit": "ns",
            "range": "± 97846.08653307008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2595958,
            "unit": "ns",
            "range": "± 66476.03548319124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318960,
            "unit": "ns",
            "range": "± 82949.17967767976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3080949.3105263156,
            "unit": "ns",
            "range": "± 171725.4329016573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3014714.224739583,
            "unit": "ns",
            "range": "± 44413.856623145584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920599.0397135416,
            "unit": "ns",
            "range": "± 4309.496493324086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611857.2539713542,
            "unit": "ns",
            "range": "± 5179.852316358703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639202.133951823,
            "unit": "ns",
            "range": "± 12415.929444058964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472029.0322265625,
            "unit": "ns",
            "range": "± 694.4022831958655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427294.4463239397,
            "unit": "ns",
            "range": "± 919.825497897234"
          }
        ]
      },
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
          "id": "16a5a20d3edf18373ac114ffb51e43f643666293",
          "message": "WIP",
          "timestamp": "2024-07-29T10:20:52+09:00",
          "tree_id": "b11047ac0f18c23dcf799fe0b21d38222f09cdb8",
          "url": "https://github.com/planetarium/libplanet/commit/16a5a20d3edf18373ac114ffb51e43f643666293"
        },
        "date": 1722217460135,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10650562.416666666,
            "unit": "ns",
            "range": "± 80632.62238805235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26656942.615384616,
            "unit": "ns",
            "range": "± 217974.8547870214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67334844.13333334,
            "unit": "ns",
            "range": "± 107463.68776865093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136251512.2857143,
            "unit": "ns",
            "range": "± 207976.6349470827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273523755.21428573,
            "unit": "ns",
            "range": "± 226764.44052438022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14098.315789473685,
            "unit": "ns",
            "range": "± 598.672464645579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110379.05263157895,
            "unit": "ns",
            "range": "± 4571.879597140753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105029.87234042553,
            "unit": "ns",
            "range": "± 3384.3083720698082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94292.31914893616,
            "unit": "ns",
            "range": "± 3624.3895924236435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3049923.364864865,
            "unit": "ns",
            "range": "± 151983.26280663718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2751257.43,
            "unit": "ns",
            "range": "± 174895.72360217504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4985.844086021505,
            "unit": "ns",
            "range": "± 707.242939851703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26922.577777777777,
            "unit": "ns",
            "range": "± 1827.5563547638424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22854.63953488372,
            "unit": "ns",
            "range": "± 1236.813611548936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30569.031578947368,
            "unit": "ns",
            "range": "± 5593.5615865382615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1148.1684210526316,
            "unit": "ns",
            "range": "± 216.89234767857295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4882.444444444444,
            "unit": "ns",
            "range": "± 418.09681452637693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688047.2857142857,
            "unit": "ns",
            "range": "± 33263.711652966165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1293289.2413793104,
            "unit": "ns",
            "range": "± 36906.12658842815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1099512.9529411765,
            "unit": "ns",
            "range": "± 59067.26473971089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9728824.63,
            "unit": "ns",
            "range": "± 1549268.5430787483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209116.3333333335,
            "unit": "ns",
            "range": "± 40013.55231965909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301271.5090909093,
            "unit": "ns",
            "range": "± 96905.2095243504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583855.6818181816,
            "unit": "ns",
            "range": "± 51975.43676940224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2356623.7333333334,
            "unit": "ns",
            "range": "± 88202.67977721435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954407.4918032787,
            "unit": "ns",
            "range": "± 131973.0387487817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3009784.250558036,
            "unit": "ns",
            "range": "± 18553.313656922735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918055.797265625,
            "unit": "ns",
            "range": "± 8034.351304462148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616086.490234375,
            "unit": "ns",
            "range": "± 6080.292002462164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643605.408203125,
            "unit": "ns",
            "range": "± 17783.3688098186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465100.98580496653,
            "unit": "ns",
            "range": "± 654.243390701152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425210.3505859375,
            "unit": "ns",
            "range": "± 897.591123373843"
          }
        ]
      }
    ]
  }
}