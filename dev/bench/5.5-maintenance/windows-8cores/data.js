window.BENCHMARK_DATA = {
  "lastUpdate": 1757985061311,
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
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4",
          "message": "Merge pull request #4034 from planetarium/prepare/5.5.2\n\nPrepare 5.5.2",
          "timestamp": "2025-02-18T09:27:55+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4"
        },
        "date": 1739839054732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014860,
            "unit": "ns",
            "range": "± 91413.00992188543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1810743.5483870967,
            "unit": "ns",
            "range": "± 77722.22844051704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555129.120879121,
            "unit": "ns",
            "range": "± 103653.00822829077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6887798.039215687,
            "unit": "ns",
            "range": "± 279422.7052264695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32035,
            "unit": "ns",
            "range": "± 4147.930602460495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10042896.666666666,
            "unit": "ns",
            "range": "± 161580.93888056168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24569985.714285713,
            "unit": "ns",
            "range": "± 210634.48419968164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60068515.384615384,
            "unit": "ns",
            "range": "± 596511.4595799954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120865292.3076923,
            "unit": "ns",
            "range": "± 1043802.6812745297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240459020,
            "unit": "ns",
            "range": "± 4356009.442499276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3327248.270089286,
            "unit": "ns",
            "range": "± 11020.001775918281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082064.7005208333,
            "unit": "ns",
            "range": "± 3000.2751410122673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742532.24609375,
            "unit": "ns",
            "range": "± 2858.662097024332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948775.6770833333,
            "unit": "ns",
            "range": "± 3589.811080523838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632613.3333333334,
            "unit": "ns",
            "range": "± 1414.629880584896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590439.7005208334,
            "unit": "ns",
            "range": "± 2267.2367478916126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2281155,
            "unit": "ns",
            "range": "± 50005.69941200913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2405692.98245614,
            "unit": "ns",
            "range": "± 103750.01180662433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2805194.117647059,
            "unit": "ns",
            "range": "± 55821.98794592767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2456250,
            "unit": "ns",
            "range": "± 43175.59406744652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3048060,
            "unit": "ns",
            "range": "± 36180.33799099805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100587.5,
            "unit": "ns",
            "range": "± 6117.54237522256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169429.26829268291,
            "unit": "ns",
            "range": "± 5541.80674069563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153013.1313131313,
            "unit": "ns",
            "range": "± 9937.556535222537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2637871.4285714286,
            "unit": "ns",
            "range": "± 43502.20911404612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421636.3636363638,
            "unit": "ns",
            "range": "± 57918.70777181333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12301.030927835052,
            "unit": "ns",
            "range": "± 2236.4170957397096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56116.84210526316,
            "unit": "ns",
            "range": "± 5409.205168960632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44801.333333333336,
            "unit": "ns",
            "range": "± 2217.5889837616214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58815.217391304344,
            "unit": "ns",
            "range": "± 10224.82364804109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2850.5154639175257,
            "unit": "ns",
            "range": "± 514.6041584194037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11091.397849462366,
            "unit": "ns",
            "range": "± 1545.9382907124648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "35055316+sky1045@users.noreply.github.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17b33343e723e1c9153e928e6387797b0c672584",
          "message": "Merge pull request #4042 from planetarium/prepare/5.5.2\n\nDecrease HashNodeCache size & ActivitySource as singleton",
          "timestamp": "2025-09-15T18:52:17+09:00",
          "tree_id": "17d589884225dde825743dcc01cd57a12aefd454",
          "url": "https://github.com/planetarium/libplanet/commit/17b33343e723e1c9153e928e6387797b0c672584"
        },
        "date": 1757930505125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054544.3298969073,
            "unit": "ns",
            "range": "± 112793.1079538552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1848658.3333333333,
            "unit": "ns",
            "range": "± 82200.00266334003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559683.5164835164,
            "unit": "ns",
            "range": "± 111725.247583064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806556.25,
            "unit": "ns",
            "range": "± 268219.33895581355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32655.670103092783,
            "unit": "ns",
            "range": "± 4059.0682703506855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10272600,
            "unit": "ns",
            "range": "± 132477.01106810366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25131753.333333332,
            "unit": "ns",
            "range": "± 219021.62928632894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62049028.571428575,
            "unit": "ns",
            "range": "± 557808.5299132275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124883733.33333333,
            "unit": "ns",
            "range": "± 1088993.5062555086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253417261.53846154,
            "unit": "ns",
            "range": "± 1147842.7240832122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320083.0208333335,
            "unit": "ns",
            "range": "± 9578.575294726568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079044.5963541667,
            "unit": "ns",
            "range": "± 1999.2689644969817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739853.7318638393,
            "unit": "ns",
            "range": "± 1302.2360290579265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984898.046875,
            "unit": "ns",
            "range": "± 9409.05982199718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643048.2942708334,
            "unit": "ns",
            "range": "± 1213.6487975851173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556563.7125651041,
            "unit": "ns",
            "range": "± 474.11825385337085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2258172.222222222,
            "unit": "ns",
            "range": "± 45929.62398580163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270085.714285714,
            "unit": "ns",
            "range": "± 27228.487828936617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858346.6666666665,
            "unit": "ns",
            "range": "± 33121.65598574587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2448350,
            "unit": "ns",
            "range": "± 68845.4979834745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3017750,
            "unit": "ns",
            "range": "± 56257.100292614916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105615.9574468085,
            "unit": "ns",
            "range": "± 10304.131160166378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174081.35593220338,
            "unit": "ns",
            "range": "± 7667.744230086483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157341.93548387097,
            "unit": "ns",
            "range": "± 4702.323836398934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2680561.5384615385,
            "unit": "ns",
            "range": "± 40757.791452709556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585061.5384615385,
            "unit": "ns",
            "range": "± 40654.92053986287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12989.473684210527,
            "unit": "ns",
            "range": "± 1828.5835515915524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57038.94736842105,
            "unit": "ns",
            "range": "± 4520.527523745998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46607.608695652176,
            "unit": "ns",
            "range": "± 2935.281168390172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65056.043956043955,
            "unit": "ns",
            "range": "± 11077.266096642446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2928.865979381443,
            "unit": "ns",
            "range": "± 585.9391967329386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12406.122448979591,
            "unit": "ns",
            "range": "± 2367.643411719311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "35055316+sky1045@users.noreply.github.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a90d2fdac0d7c67f7a6ec7ee6761714ac5766f26",
          "message": "Merge pull request #4043 from planetarium/release/5.5.2\n\nRelease 5.5.2",
          "timestamp": "2025-09-16T09:59:48+09:00",
          "tree_id": "7a4acedbfbec4265cf50057d07c43ba42d4a84b9",
          "url": "https://github.com/planetarium/libplanet/commit/a90d2fdac0d7c67f7a6ec7ee6761714ac5766f26"
        },
        "date": 1757984989071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976404.3478260869,
            "unit": "ns",
            "range": "± 56297.73659503409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1808190.566037736,
            "unit": "ns",
            "range": "± 74999.80324115457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1509042.105263158,
            "unit": "ns",
            "range": "± 63093.81888270045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6822734.482758621,
            "unit": "ns",
            "range": "± 372094.8821943842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31918.279569892475,
            "unit": "ns",
            "range": "± 2526.2941684093216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10084043.333333334,
            "unit": "ns",
            "range": "± 182503.59083225369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25963480,
            "unit": "ns",
            "range": "± 373531.089163176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64493680,
            "unit": "ns",
            "range": "± 537119.4575830275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129103486.66666667,
            "unit": "ns",
            "range": "± 802331.4757333037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261061823.07692307,
            "unit": "ns",
            "range": "± 1477327.880078221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418704.1015625,
            "unit": "ns",
            "range": "± 7226.316120015736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071071.1848958333,
            "unit": "ns",
            "range": "± 1532.797144460213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777357.1498325893,
            "unit": "ns",
            "range": "± 1814.439152581769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926757.0870535714,
            "unit": "ns",
            "range": "± 2360.410575002561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601208.7434895834,
            "unit": "ns",
            "range": "± 723.1664754234532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 613599.8372395834,
            "unit": "ns",
            "range": "± 691.6115938585866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2237900,
            "unit": "ns",
            "range": "± 51385.9390966255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284330,
            "unit": "ns",
            "range": "± 67947.34853115163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2718248.936170213,
            "unit": "ns",
            "range": "± 105374.79872040279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348922.727272727,
            "unit": "ns",
            "range": "± 55460.04938622105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2944866.6666666665,
            "unit": "ns",
            "range": "± 78683.08879002185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105537.25490196078,
            "unit": "ns",
            "range": "± 3626.4010139152406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175729.41176470587,
            "unit": "ns",
            "range": "± 6528.745487998351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175564.2857142857,
            "unit": "ns",
            "range": "± 10295.302201619943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2758490,
            "unit": "ns",
            "range": "± 35671.93374549321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2665260,
            "unit": "ns",
            "range": "± 29726.750819518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15032.967032967033,
            "unit": "ns",
            "range": "± 1161.7089848872502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62248.913043478264,
            "unit": "ns",
            "range": "± 4114.848335907449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61255.208333333336,
            "unit": "ns",
            "range": "± 6278.44884952807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71412.76595744681,
            "unit": "ns",
            "range": "± 9316.94010458246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5311.458333333333,
            "unit": "ns",
            "range": "± 997.5622699642066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13600,
            "unit": "ns",
            "range": "± 1271.5557135195727"
          }
        ]
      }
    ]
  }
}