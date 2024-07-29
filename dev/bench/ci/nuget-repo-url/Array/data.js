window.BENCHMARK_DATA = {
  "lastUpdate": 1722222735128,
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
          "id": "3c21032a2ddf0191867b4f0190c5394e34d887be",
          "message": "WIP",
          "timestamp": "2024-07-29T10:26:35+09:00",
          "tree_id": "d6ebfe99044609b56ab10db35fe919ac8cf2d5ca",
          "url": "https://github.com/planetarium/libplanet/commit/3c21032a2ddf0191867b4f0190c5394e34d887be"
        },
        "date": 1722218475410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10847364.133333333,
            "unit": "ns",
            "range": "± 176404.62806929604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26565586.785714287,
            "unit": "ns",
            "range": "± 202575.58779006175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68330326.92857143,
            "unit": "ns",
            "range": "± 129896.44172035618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138647357.2142857,
            "unit": "ns",
            "range": "± 290299.9499298901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273137190.78571427,
            "unit": "ns",
            "range": "± 402181.7044748992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13750.423076923076,
            "unit": "ns",
            "range": "± 368.13966622214707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111812.84848484848,
            "unit": "ns",
            "range": "± 5255.917424835551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105737.71428571429,
            "unit": "ns",
            "range": "± 3435.3196235527175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94692.07142857143,
            "unit": "ns",
            "range": "± 3438.5560525431074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063405.5555555555,
            "unit": "ns",
            "range": "± 64036.4423123751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2752580.84,
            "unit": "ns",
            "range": "± 165633.32375746078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5024.444444444444,
            "unit": "ns",
            "range": "± 491.94507574835905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26803.227272727272,
            "unit": "ns",
            "range": "± 2041.781714200382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23879.041666666668,
            "unit": "ns",
            "range": "± 2260.520973565568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30926.797872340427,
            "unit": "ns",
            "range": "± 5976.101938392613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1298.6,
            "unit": "ns",
            "range": "± 349.2066814695543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4814.365591397849,
            "unit": "ns",
            "range": "± 631.0410443645836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685453.6315789474,
            "unit": "ns",
            "range": "± 31458.594092273997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1295181.7916666667,
            "unit": "ns",
            "range": "± 50867.0836843574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1102964.7345679011,
            "unit": "ns",
            "range": "± 57843.56689928267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9581736.06060606,
            "unit": "ns",
            "range": "± 1364923.1967373216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2176878.5384615385,
            "unit": "ns",
            "range": "± 71300.98121855507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274378.9142857143,
            "unit": "ns",
            "range": "± 73007.28151934833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2589625.4285714286,
            "unit": "ns",
            "range": "± 34226.12459626595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2304551.1304347827,
            "unit": "ns",
            "range": "± 53136.98582078755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2923564.5,
            "unit": "ns",
            "range": "± 143078.18125638095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3024849.841015625,
            "unit": "ns",
            "range": "± 44768.515516156105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917309.3593098958,
            "unit": "ns",
            "range": "± 6054.066288574223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611274.4811662947,
            "unit": "ns",
            "range": "± 2831.7886707729645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633100.6255580357,
            "unit": "ns",
            "range": "± 15029.763498076674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467143.1426757813,
            "unit": "ns",
            "range": "± 922.4084669778001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424940.563406808,
            "unit": "ns",
            "range": "± 1062.0561566015115"
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
          "id": "f668118be938b78aa7c3b66b59ae208789bd1d89",
          "message": "WIP",
          "timestamp": "2024-07-29T10:32:52+09:00",
          "tree_id": "daee49a6df6ca377f96b8fd83d87df9a5e798207",
          "url": "https://github.com/planetarium/libplanet/commit/f668118be938b78aa7c3b66b59ae208789bd1d89"
        },
        "date": 1722219591387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10920503.461538462,
            "unit": "ns",
            "range": "± 92443.42536619843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27256693.64285714,
            "unit": "ns",
            "range": "± 463016.2808836884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66984396.28571428,
            "unit": "ns",
            "range": "± 151122.07114597972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137760708.7857143,
            "unit": "ns",
            "range": "± 245271.9370990802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272813261.4,
            "unit": "ns",
            "range": "± 273045.4659905039"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14184.727272727272,
            "unit": "ns",
            "range": "± 449.76829261904913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110120,
            "unit": "ns",
            "range": "± 3670.3109850900546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104218.26530612246,
            "unit": "ns",
            "range": "± 3429.404222890558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90476.44444444444,
            "unit": "ns",
            "range": "± 1363.2901043052914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024036,
            "unit": "ns",
            "range": "± 145388.3009879972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2718793.2,
            "unit": "ns",
            "range": "± 166733.75742315783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4941.443181818182,
            "unit": "ns",
            "range": "± 443.00499096730675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26398.823529411766,
            "unit": "ns",
            "range": "± 1369.4014175167629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23096.57608695652,
            "unit": "ns",
            "range": "± 1539.4177808630336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29712.336842105262,
            "unit": "ns",
            "range": "± 5016.133818098859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1136.627659574468,
            "unit": "ns",
            "range": "± 179.12235165140658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5033.053191489362,
            "unit": "ns",
            "range": "± 715.9848524711954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692167.5,
            "unit": "ns",
            "range": "± 26231.34414153606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1290673.0612244897,
            "unit": "ns",
            "range": "± 51495.11986926859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1091918.5584415584,
            "unit": "ns",
            "range": "± 55806.407782075556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9420657.61,
            "unit": "ns",
            "range": "± 1245208.304410416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163265.052631579,
            "unit": "ns",
            "range": "± 69407.71229323828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2331115.4454545453,
            "unit": "ns",
            "range": "± 94484.02808537384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586532.4615384615,
            "unit": "ns",
            "range": "± 39318.52110353632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2346556.8571428573,
            "unit": "ns",
            "range": "± 40422.61503522149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3007978.8857142855,
            "unit": "ns",
            "range": "± 137783.15623540364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039610.513802083,
            "unit": "ns",
            "range": "± 54942.32371116455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 927115.9296875,
            "unit": "ns",
            "range": "± 941.1061601749461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609941.6745442708,
            "unit": "ns",
            "range": "± 6776.415572725594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633682.8387276786,
            "unit": "ns",
            "range": "± 10226.295615252759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468222.7580217634,
            "unit": "ns",
            "range": "± 394.75054644319107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419733.82698567706,
            "unit": "ns",
            "range": "± 1265.9207898658174"
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
          "id": "3b0fb11b2e9562e2d28554d8431025f68e29ad5a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:50:55+09:00",
          "tree_id": "6cd3d7f6cd76520db6a3217252c3d7bdb9a10f7e",
          "url": "https://github.com/planetarium/libplanet/commit/3b0fb11b2e9562e2d28554d8431025f68e29ad5a"
        },
        "date": 1722220655038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11000465.166666666,
            "unit": "ns",
            "range": "± 74510.2633233513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26868190.85714286,
            "unit": "ns",
            "range": "± 386637.3028091269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68079984.7,
            "unit": "ns",
            "range": "± 134413.3710186602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135836467.42857143,
            "unit": "ns",
            "range": "± 243537.9007643888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272972797.85714287,
            "unit": "ns",
            "range": "± 361267.82994420273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13992.76,
            "unit": "ns",
            "range": "± 521.1945290799368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110704.34375,
            "unit": "ns",
            "range": "± 4543.138745156051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106621.4512195122,
            "unit": "ns",
            "range": "± 3631.0129988146523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90994.025,
            "unit": "ns",
            "range": "± 3233.7464379570642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2994862.707070707,
            "unit": "ns",
            "range": "± 191093.50948622054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868229.6428571427,
            "unit": "ns",
            "range": "± 39903.5411434338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4928.2307692307695,
            "unit": "ns",
            "range": "± 494.88048112477685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26314.022727272728,
            "unit": "ns",
            "range": "± 1676.8804437007543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22816.40860215054,
            "unit": "ns",
            "range": "± 1309.1109847373448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28902.042553191488,
            "unit": "ns",
            "range": "± 4951.662105363877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1161.032967032967,
            "unit": "ns",
            "range": "± 245.36034500525736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4901.072916666667,
            "unit": "ns",
            "range": "± 561.2229643197297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688164.0727272728,
            "unit": "ns",
            "range": "± 25552.891020648352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1300523.1612903227,
            "unit": "ns",
            "range": "± 39440.89275620484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1087840.7580645161,
            "unit": "ns",
            "range": "± 49260.13470024629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9541658.95959596,
            "unit": "ns",
            "range": "± 1318955.3376261182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166405.4,
            "unit": "ns",
            "range": "± 40386.81830003448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273928.5588235296,
            "unit": "ns",
            "range": "± 79289.6522114738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2593690.6428571427,
            "unit": "ns",
            "range": "± 37188.660973695776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303359.4545454546,
            "unit": "ns",
            "range": "± 52628.46039723707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3227787.9393939395,
            "unit": "ns",
            "range": "± 453369.10883044364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3005236.8602120536,
            "unit": "ns",
            "range": "± 35915.44421007696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918886.5993088942,
            "unit": "ns",
            "range": "± 4237.279667664816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610027.7147135417,
            "unit": "ns",
            "range": "± 5514.142905221645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632053.9615885417,
            "unit": "ns",
            "range": "± 8349.137710312758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459482.19398716517,
            "unit": "ns",
            "range": "± 638.1629283977716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423902.08949497767,
            "unit": "ns",
            "range": "± 532.3910584187367"
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
          "id": "5b6099a8011c3269a73563aeea9654fb55b49e3c",
          "message": "WIP",
          "timestamp": "2024-07-29T10:52:11+09:00",
          "tree_id": "4c2914b18b02e2330979313cd7e579dc8882501d",
          "url": "https://github.com/planetarium/libplanet/commit/5b6099a8011c3269a73563aeea9654fb55b49e3c"
        },
        "date": 1722221702311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10619271.333333334,
            "unit": "ns",
            "range": "± 47267.29923690918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27020228.714285713,
            "unit": "ns",
            "range": "± 320956.2474985861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67268588.6,
            "unit": "ns",
            "range": "± 144547.58366948136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135684458.69230768,
            "unit": "ns",
            "range": "± 136902.705271776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272483987.56666666,
            "unit": "ns",
            "range": "± 437177.40929210006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14073.882352941177,
            "unit": "ns",
            "range": "± 280.81441432753707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111438.25423728813,
            "unit": "ns",
            "range": "± 4886.977779114544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104390.77272727272,
            "unit": "ns",
            "range": "± 3655.60354106835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91400.55263157895,
            "unit": "ns",
            "range": "± 2732.241409315193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2975928.98,
            "unit": "ns",
            "range": "± 182001.9576439826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2737805.55,
            "unit": "ns",
            "range": "± 186308.30193614788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5018.619565217391,
            "unit": "ns",
            "range": "± 547.4510132611756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27014.736263736264,
            "unit": "ns",
            "range": "± 1562.1237384134376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22937.824175824175,
            "unit": "ns",
            "range": "± 1669.9025094192148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30960.5,
            "unit": "ns",
            "range": "± 4830.054724305403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1226.1979166666667,
            "unit": "ns",
            "range": "± 317.9257152491234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4889.462365591397,
            "unit": "ns",
            "range": "± 613.7898230973053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688925.6666666666,
            "unit": "ns",
            "range": "± 33860.08744861963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289023.1935483871,
            "unit": "ns",
            "range": "± 33453.70266046232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1112437.5802469135,
            "unit": "ns",
            "range": "± 57938.035744203524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9631838.65,
            "unit": "ns",
            "range": "± 1364498.040936062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2217771.285714286,
            "unit": "ns",
            "range": "± 32583.88553925337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308793,
            "unit": "ns",
            "range": "± 82270.0331490756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2559392.5,
            "unit": "ns",
            "range": "± 38357.6348768554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2331959.6829268294,
            "unit": "ns",
            "range": "± 80556.29202937502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2934085.5,
            "unit": "ns",
            "range": "± 141467.45625213813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3032627.334542411,
            "unit": "ns",
            "range": "± 19544.807230310882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928000.04921875,
            "unit": "ns",
            "range": "± 5944.922583799581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618393.9557291666,
            "unit": "ns",
            "range": "± 5280.357251888041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639603.034029447,
            "unit": "ns",
            "range": "± 13848.288376860326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459893.47205528844,
            "unit": "ns",
            "range": "± 621.6932113940344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422229.4765625,
            "unit": "ns",
            "range": "± 1336.80118895519"
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
          "id": "e065fcf5ede5377003d03b932d7069463702803a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:58:47+09:00",
          "tree_id": "88820a8b1d001575fe0e4ba98afd4e29d8cb3c30",
          "url": "https://github.com/planetarium/libplanet/commit/e065fcf5ede5377003d03b932d7069463702803a"
        },
        "date": 1722222722548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10900466.933333334,
            "unit": "ns",
            "range": "± 197346.320572116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26812339.35714286,
            "unit": "ns",
            "range": "± 373231.3662978949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67206146.93333334,
            "unit": "ns",
            "range": "± 120283.67790083733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135168797.85714287,
            "unit": "ns",
            "range": "± 195320.0042753734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273143830.38461536,
            "unit": "ns",
            "range": "± 347808.74410144304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13945.59375,
            "unit": "ns",
            "range": "± 436.4232822043297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111425.43137254902,
            "unit": "ns",
            "range": "± 4462.764081843906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105497.2,
            "unit": "ns",
            "range": "± 4187.308652953832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92756.90476190476,
            "unit": "ns",
            "range": "± 3314.2425766021015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169690.1428571427,
            "unit": "ns",
            "range": "± 72798.44729476426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2680124.91,
            "unit": "ns",
            "range": "± 185179.5638772801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5087.260869565217,
            "unit": "ns",
            "range": "± 739.7811507327389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27382.571428571428,
            "unit": "ns",
            "range": "± 2041.6411870130212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22567.63157894737,
            "unit": "ns",
            "range": "± 917.9293590852604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30796.572916666668,
            "unit": "ns",
            "range": "± 5221.692679269096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1210.3505154639174,
            "unit": "ns",
            "range": "± 244.3141352694106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4863.225806451613,
            "unit": "ns",
            "range": "± 563.3800580084202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689844.9875,
            "unit": "ns",
            "range": "± 29906.462277182683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1296974.4761904762,
            "unit": "ns",
            "range": "± 46996.47072231145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1110360.7901234569,
            "unit": "ns",
            "range": "± 58460.90226440147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9784204.7,
            "unit": "ns",
            "range": "± 1550115.278907949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205298,
            "unit": "ns",
            "range": "± 25264.82500053567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298634.159090909,
            "unit": "ns",
            "range": "± 86174.9886767571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2571056.55,
            "unit": "ns",
            "range": "± 52157.087781426926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312109.2093023257,
            "unit": "ns",
            "range": "± 85283.46141671934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3099941.6,
            "unit": "ns",
            "range": "± 256946.72612878933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2999280.1182725695,
            "unit": "ns",
            "range": "± 62687.79800025447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924976.6197916666,
            "unit": "ns",
            "range": "± 5126.357685100926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 607843.7733677456,
            "unit": "ns",
            "range": "± 2004.8595953329589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648375.3888221155,
            "unit": "ns",
            "range": "± 10345.168143301385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464002.4548828125,
            "unit": "ns",
            "range": "± 530.3027703436675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420883.46044921875,
            "unit": "ns",
            "range": "± 1343.4690667668654"
          }
        ]
      }
    ]
  }
}