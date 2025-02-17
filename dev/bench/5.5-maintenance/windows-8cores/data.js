window.BENCHMARK_DATA = {
  "lastUpdate": 1739773564599,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "79e20a5451de75539aeea33f19e0b51f59f33164",
          "message": "prepare: 5.5.1",
          "timestamp": "2025-01-15T12:02:42+09:00",
          "tree_id": "860edf44725926acf94cf81d1be19f20d09ce560",
          "url": "https://github.com/planetarium/libplanet/commit/79e20a5451de75539aeea33f19e0b51f59f33164"
        },
        "date": 1736910821713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1106165.9574468085,
            "unit": "ns",
            "range": "± 125924.85005312254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927063.6363636365,
            "unit": "ns",
            "range": "± 76978.38167817796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1587240.4761904762,
            "unit": "ns",
            "range": "± 80783.85875851121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6661818.75,
            "unit": "ns",
            "range": "± 168962.9419906301"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37348.48484848485,
            "unit": "ns",
            "range": "± 4860.804578490919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10374985.714285715,
            "unit": "ns",
            "range": "± 90050.13865912407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25500371.42857143,
            "unit": "ns",
            "range": "± 161040.89986264802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63903806.666666664,
            "unit": "ns",
            "range": "± 357622.03205273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126805700,
            "unit": "ns",
            "range": "± 576268.3737386849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254232120,
            "unit": "ns",
            "range": "± 1444779.2106161313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3366140.3459821427,
            "unit": "ns",
            "range": "± 16318.424400943448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099915.625,
            "unit": "ns",
            "range": "± 25963.565565384033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745264.6158854166,
            "unit": "ns",
            "range": "± 5476.286450157132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923235.0306919643,
            "unit": "ns",
            "range": "± 2451.359191393643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623198.1896033654,
            "unit": "ns",
            "range": "± 725.9883234708938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567486.0142299107,
            "unit": "ns",
            "range": "± 1333.4975163450054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2333583.3333333335,
            "unit": "ns",
            "range": "± 33416.48567924992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2473164.285714286,
            "unit": "ns",
            "range": "± 31458.88298527649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2934645.8333333335,
            "unit": "ns",
            "range": "± 75114.14779703862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2518184,
            "unit": "ns",
            "range": "± 57796.60226460837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3166250,
            "unit": "ns",
            "range": "± 35954.82207951015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112875,
            "unit": "ns",
            "range": "± 7137.471943701526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185841.50943396226,
            "unit": "ns",
            "range": "± 6472.172205867925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183087.14285714287,
            "unit": "ns",
            "range": "± 8593.92979954956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2762957.1428571427,
            "unit": "ns",
            "range": "± 23822.862783653673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705013.3333333335,
            "unit": "ns",
            "range": "± 47386.885869203856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14805.376344086022,
            "unit": "ns",
            "range": "± 1915.1209288300859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58848.958333333336,
            "unit": "ns",
            "range": "± 6717.690624356066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50438.709677419356,
            "unit": "ns",
            "range": "± 3292.812735075424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68622.44897959183,
            "unit": "ns",
            "range": "± 16045.31939080803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3497.938144329897,
            "unit": "ns",
            "range": "± 669.7293267686734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13528.57142857143,
            "unit": "ns",
            "range": "± 1961.3082773317813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ad43b37f2cb99d5b640b76f5844ff04fa8944a5",
          "message": "Merge pull request #4032 from planetarium/feature/nonce-command\n\nIntroduce tx nonce command",
          "timestamp": "2025-02-13T17:14:37+09:00",
          "tree_id": "2d09e898a704c2bf5e1b2d4bac3330249e705cec",
          "url": "https://github.com/planetarium/libplanet/commit/7ad43b37f2cb99d5b640b76f5844ff04fa8944a5"
        },
        "date": 1739435093138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970405.376344086,
            "unit": "ns",
            "range": "± 88448.80902876434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793562.7450980393,
            "unit": "ns",
            "range": "± 73105.18438738612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496009.2783505155,
            "unit": "ns",
            "range": "± 92212.38402287477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6609626.923076923,
            "unit": "ns",
            "range": "± 270661.3679927009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29286.666666666668,
            "unit": "ns",
            "range": "± 1252.2772050142087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9912353.333333334,
            "unit": "ns",
            "range": "± 65209.167482874094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24228903.333333332,
            "unit": "ns",
            "range": "± 144887.74406744135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60486650,
            "unit": "ns",
            "range": "± 282401.3939549384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119935864.28571428,
            "unit": "ns",
            "range": "± 783932.9029443025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238422169.23076922,
            "unit": "ns",
            "range": "± 1286379.050140753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288508.9006696427,
            "unit": "ns",
            "range": "± 8487.287560394976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057792.2916666667,
            "unit": "ns",
            "range": "± 3246.4244002665596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744433.3723958334,
            "unit": "ns",
            "range": "± 1762.2243607585067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951934.4791666667,
            "unit": "ns",
            "range": "± 4861.52030042103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634483.10546875,
            "unit": "ns",
            "range": "± 2183.036589069286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 542204.9739583334,
            "unit": "ns",
            "range": "± 1886.4168975164027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204600,
            "unit": "ns",
            "range": "± 27394.946193104246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2343812.5,
            "unit": "ns",
            "range": "± 68560.7418467788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2792363.1578947366,
            "unit": "ns",
            "range": "± 56319.04365632084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2387127.5862068967,
            "unit": "ns",
            "range": "± 67770.80543246861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3031983.3333333335,
            "unit": "ns",
            "range": "± 54436.53797466061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97703.26086956522,
            "unit": "ns",
            "range": "± 8785.770852330532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170470.65217391305,
            "unit": "ns",
            "range": "± 11873.421588966505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145283.33333333334,
            "unit": "ns",
            "range": "± 3904.6465099693846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2581090,
            "unit": "ns",
            "range": "± 47096.64531577594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2560293.3333333335,
            "unit": "ns",
            "range": "± 46872.93563708267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11645.360824742267,
            "unit": "ns",
            "range": "± 2136.733323447885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54803.06122448979,
            "unit": "ns",
            "range": "± 6004.1601399282845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44384.61538461538,
            "unit": "ns",
            "range": "± 1590.8296781417903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54559.782608695656,
            "unit": "ns",
            "range": "± 9275.787455480782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2842.2680412371133,
            "unit": "ns",
            "range": "± 509.86825331533595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11409.183673469388,
            "unit": "ns",
            "range": "± 3012.2460276120737"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43a58ed17be69dd63aa48fbf0cfb0b4f5a54882f",
          "message": "Merge pull request #4033 from planetarium/release/5.5.1\n\n🚀 Release 5.5.1",
          "timestamp": "2025-02-17T15:15:52+09:00",
          "tree_id": "b045a2baf8742693d6e215fc173f5320169ddadb",
          "url": "https://github.com/planetarium/libplanet/commit/43a58ed17be69dd63aa48fbf0cfb0b4f5a54882f"
        },
        "date": 1739773496851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932530.303030303,
            "unit": "ns",
            "range": "± 128790.84250509639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1646731.8181818181,
            "unit": "ns",
            "range": "± 77185.98499546586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1411971,
            "unit": "ns",
            "range": "± 128401.26993220129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6258307.575757576,
            "unit": "ns",
            "range": "± 195642.72608236523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29350,
            "unit": "ns",
            "range": "± 4294.140097302105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9290340,
            "unit": "ns",
            "range": "± 149099.56788286526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22650916.666666668,
            "unit": "ns",
            "range": "± 278564.7902749958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56142200,
            "unit": "ns",
            "range": "± 375274.4906509545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111504820,
            "unit": "ns",
            "range": "± 1455192.838571085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225937166.66666666,
            "unit": "ns",
            "range": "± 1941478.873240215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3084175.7552083335,
            "unit": "ns",
            "range": "± 21351.35974170516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1015131.5848214285,
            "unit": "ns",
            "range": "± 6194.335100876104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 691599.9674479166,
            "unit": "ns",
            "range": "± 4851.174656790088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1819599.4401041667,
            "unit": "ns",
            "range": "± 7588.37308750789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 585966.4411272322,
            "unit": "ns",
            "range": "± 4442.822765107855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523051.5169270833,
            "unit": "ns",
            "range": "± 4802.1630773283905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2020002.6315789474,
            "unit": "ns",
            "range": "± 69313.18460765739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2142083.673469388,
            "unit": "ns",
            "range": "± 85032.50933941573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2604858,
            "unit": "ns",
            "range": "± 104439.86667465833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2193314.6341463416,
            "unit": "ns",
            "range": "± 77449.07862904378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2893939.024390244,
            "unit": "ns",
            "range": "± 102450.74640540394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87594.68085106384,
            "unit": "ns",
            "range": "± 9942.624294120642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156176.3440860215,
            "unit": "ns",
            "range": "± 12698.959199473125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 133947.88732394367,
            "unit": "ns",
            "range": "± 6014.004113137688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2412063.4146341463,
            "unit": "ns",
            "range": "± 86999.65447085856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2301577.777777778,
            "unit": "ns",
            "range": "± 59642.00464394802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8962.637362637362,
            "unit": "ns",
            "range": "± 1057.108041534739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46312.63736263736,
            "unit": "ns",
            "range": "± 3363.7164747624793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40686.021505376346,
            "unit": "ns",
            "range": "± 2394.676677724331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44956.84210526316,
            "unit": "ns",
            "range": "± 9312.57046389539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2202.0833333333335,
            "unit": "ns",
            "range": "± 340.5812884394675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9363.829787234043,
            "unit": "ns",
            "range": "± 1442.656678942266"
          }
        ]
      }
    ]
  }
}