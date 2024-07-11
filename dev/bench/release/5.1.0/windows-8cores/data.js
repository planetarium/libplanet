window.BENCHMARK_DATA = {
  "lastUpdate": 1720659860545,
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
          "id": "75d926d458b48de17425f08b183e0106ce522d4f",
          "message": "Release 5.1.0",
          "timestamp": "2024-07-10T18:05:01+09:00",
          "tree_id": "0d6de7376dc1957e144a0ef6b1a65bada361e378",
          "url": "https://github.com/planetarium/libplanet/commit/75d926d458b48de17425f08b183e0106ce522d4f"
        },
        "date": 1720603031642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026432.2916666666,
            "unit": "ns",
            "range": "± 94505.31758337775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839048.9361702127,
            "unit": "ns",
            "range": "± 60773.742443449984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564537.3493975904,
            "unit": "ns",
            "range": "± 82730.36383460247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7274111.428571428,
            "unit": "ns",
            "range": "± 351202.02959569084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34455.555555555555,
            "unit": "ns",
            "range": "± 5035.8758276464605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9970850,
            "unit": "ns",
            "range": "± 150528.97369967325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24088378.57142857,
            "unit": "ns",
            "range": "± 102289.25184962514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61323386.666666664,
            "unit": "ns",
            "range": "± 834437.1318154418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121912878.26086956,
            "unit": "ns",
            "range": "± 3046089.8145232503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243246080,
            "unit": "ns",
            "range": "± 2401290.2579952423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3392603.4598214286,
            "unit": "ns",
            "range": "± 8568.102545856778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065898.6979166667,
            "unit": "ns",
            "range": "± 2996.980867231509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740702.3828125,
            "unit": "ns",
            "range": "± 1392.7605849532251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922960.142299107,
            "unit": "ns",
            "range": "± 5118.592456398139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622561.23046875,
            "unit": "ns",
            "range": "± 831.3583100480788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563680.0455729166,
            "unit": "ns",
            "range": "± 1271.715464505352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166312.5,
            "unit": "ns",
            "range": "± 67397.51957721656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301857.8947368423,
            "unit": "ns",
            "range": "± 78698.64393755615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2755195.8333333335,
            "unit": "ns",
            "range": "± 69696.64379148469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2313480.3571428573,
            "unit": "ns",
            "range": "± 98908.62159248139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2989700,
            "unit": "ns",
            "range": "± 69551.57079462691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186421.97802197802,
            "unit": "ns",
            "range": "± 12487.912397352733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176350.84745762713,
            "unit": "ns",
            "range": "± 7716.247365615239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147085.24590163934,
            "unit": "ns",
            "range": "± 6546.903493651885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811618.75,
            "unit": "ns",
            "range": "± 54044.84827437301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2586576.470588235,
            "unit": "ns",
            "range": "± 52157.87967090596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12596.875,
            "unit": "ns",
            "range": "± 2052.903111257452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60464.64646464647,
            "unit": "ns",
            "range": "± 8119.544487214774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47514.47368421053,
            "unit": "ns",
            "range": "± 2413.280143835684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67048.48484848485,
            "unit": "ns",
            "range": "± 15343.05243049675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3167.3469387755104,
            "unit": "ns",
            "range": "± 609.3812156782158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12452.68817204301,
            "unit": "ns",
            "range": "± 1791.0763947153134"
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
          "id": "fd189cb5c0cf54aae174d19a9c92786d4d8de449",
          "message": "Release 5.1.0",
          "timestamp": "2024-07-11T09:49:02+09:00",
          "tree_id": "c283794015c8a338ecd8399ae7406c3a8089667a",
          "url": "https://github.com/planetarium/libplanet/commit/fd189cb5c0cf54aae174d19a9c92786d4d8de449"
        },
        "date": 1720659530246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998755.1020408163,
            "unit": "ns",
            "range": "± 97816.28595710985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767421.1538461538,
            "unit": "ns",
            "range": "± 69522.0781310667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544176.7676767677,
            "unit": "ns",
            "range": "± 114244.6156711713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806985.714285715,
            "unit": "ns",
            "range": "± 175126.88672795636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30415.384615384617,
            "unit": "ns",
            "range": "± 411.99950211570615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9753107.692307692,
            "unit": "ns",
            "range": "± 126099.038203697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23664161.53846154,
            "unit": "ns",
            "range": "± 98342.17930658864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58597714.28571428,
            "unit": "ns",
            "range": "± 424861.58625195513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116834364.28571428,
            "unit": "ns",
            "range": "± 379719.6265407146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242830765.2173913,
            "unit": "ns",
            "range": "± 5847336.8097722065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317998.7165178573,
            "unit": "ns",
            "range": "± 4894.620140249894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093979.8697916667,
            "unit": "ns",
            "range": "± 1767.1804466233682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724944.62890625,
            "unit": "ns",
            "range": "± 2231.5544903713876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945173.1026785714,
            "unit": "ns",
            "range": "± 3288.647096065146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608589.4182477678,
            "unit": "ns",
            "range": "± 1766.883562375451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564088.9908854166,
            "unit": "ns",
            "range": "± 1109.8018296199173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225594.4444444445,
            "unit": "ns",
            "range": "± 72217.14851531138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275076.470588235,
            "unit": "ns",
            "range": "± 103794.18083600367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2760629.411764706,
            "unit": "ns",
            "range": "± 55354.55903430496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2266125.714285714,
            "unit": "ns",
            "range": "± 65215.33265609689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2965231.5789473685,
            "unit": "ns",
            "range": "± 63061.37268682152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170444.06779661018,
            "unit": "ns",
            "range": "± 7150.916777165364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168376.2711864407,
            "unit": "ns",
            "range": "± 7029.821672900114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142734.61538461538,
            "unit": "ns",
            "range": "± 3834.364855638264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2682620,
            "unit": "ns",
            "range": "± 37370.48491600213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484778.5714285714,
            "unit": "ns",
            "range": "± 29343.120765585525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9964.044943820225,
            "unit": "ns",
            "range": "± 830.1488353700136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52952.04081632653,
            "unit": "ns",
            "range": "± 7336.144519479425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43342.857142857145,
            "unit": "ns",
            "range": "± 766.3241789561042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49444.565217391304,
            "unit": "ns",
            "range": "± 8677.853131605878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2574.226804123711,
            "unit": "ns",
            "range": "± 514.837828535085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9313.333333333334,
            "unit": "ns",
            "range": "± 919.3549277325201"
          }
        ]
      }
    ]
  }
}