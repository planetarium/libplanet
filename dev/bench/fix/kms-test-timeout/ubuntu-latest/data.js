window.BENCHMARK_DATA = {
  "lastUpdate": 1700181283668,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "01ff9fffa47ffe6a16b043f6cc4a11a213eb0774",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-10-31T11:11:19+09:00",
          "tree_id": "60c8942383c478ab7c838a2edc9fc55c303cea77",
          "url": "https://github.com/planetarium/libplanet/commit/01ff9fffa47ffe6a16b043f6cc4a11a213eb0774"
        },
        "date": 1698719126563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58473.06060606061,
            "unit": "ns",
            "range": "± 9111.139059166702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5174881.275,
            "unit": "ns",
            "range": "± 32400.70802355602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1637873.223858173,
            "unit": "ns",
            "range": "± 1328.8901567181817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1120787.8735677083,
            "unit": "ns",
            "range": "± 646.2931003890684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600612.89609375,
            "unit": "ns",
            "range": "± 4961.847613961902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808913.1722935268,
            "unit": "ns",
            "range": "± 1095.8198738929514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736988.4294084822,
            "unit": "ns",
            "range": "± 467.2924558397289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8303261.466666667,
            "unit": "ns",
            "range": "± 106124.9183549184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160205.333333332,
            "unit": "ns",
            "range": "± 69754.19608747221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52207491.46666667,
            "unit": "ns",
            "range": "± 195710.13821095825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104120042,
            "unit": "ns",
            "range": "± 318336.67629481305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205702483.26666668,
            "unit": "ns",
            "range": "± 539502.631637361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362191.466666667,
            "unit": "ns",
            "range": "± 56447.80676729694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577032.6666666665,
            "unit": "ns",
            "range": "± 41135.32458616954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286123.071428572,
            "unit": "ns",
            "range": "± 29550.0068995548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229813.94117647,
            "unit": "ns",
            "range": "± 171206.69086053988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10130527.1,
            "unit": "ns",
            "range": "± 228457.55304166378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276323.09803921566,
            "unit": "ns",
            "range": "± 10358.222745731822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257625.80487804877,
            "unit": "ns",
            "range": "± 8136.295518291823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253501.45,
            "unit": "ns",
            "range": "± 5577.099816731764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4313194.571428572,
            "unit": "ns",
            "range": "± 33691.88636341508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879314.1333333333,
            "unit": "ns",
            "range": "± 41242.78421540058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23755.505376344085,
            "unit": "ns",
            "range": "± 1395.2379929732413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104005.91489361702,
            "unit": "ns",
            "range": "± 7140.106597890408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79991.27956989247,
            "unit": "ns",
            "range": "± 5461.405463649666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91378.63541666667,
            "unit": "ns",
            "range": "± 9670.792723311713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6923.731958762886,
            "unit": "ns",
            "range": "± 886.3218179112474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23118.274725274725,
            "unit": "ns",
            "range": "± 1626.698162713757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328990.1022727273,
            "unit": "ns",
            "range": "± 72708.63074637295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564496.75,
            "unit": "ns",
            "range": "± 28073.475893625997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2052830.0470588235,
            "unit": "ns",
            "range": "± 109684.74373033032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8751274.68292683,
            "unit": "ns",
            "range": "± 315065.7705282692"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "e1c134eb179d05060b8275c62ab87dd03e5faf60",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-11-17T09:23:34+09:00",
          "tree_id": "36d60f8fa4c10a68909ab13bc15530f3f97cceed",
          "url": "https://github.com/planetarium/libplanet/commit/e1c134eb179d05060b8275c62ab87dd03e5faf60"
        },
        "date": 1700181261029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5644991.166666667,
            "unit": "ns",
            "range": "± 101229.54492895742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14294415.2,
            "unit": "ns",
            "range": "± 72725.35484390178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36993141.166666664,
            "unit": "ns",
            "range": "± 328609.22864718095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76333552,
            "unit": "ns",
            "range": "± 1423421.5994523214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152395252.5,
            "unit": "ns",
            "range": "± 733931.4233309644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036320.7,
            "unit": "ns",
            "range": "± 119356.37372614551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943938.551724138,
            "unit": "ns",
            "range": "± 85283.04368404554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572854.6933333334,
            "unit": "ns",
            "range": "± 79042.6743262646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6677546.858823529,
            "unit": "ns",
            "range": "± 488720.00645447365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445451.934782609,
            "unit": "ns",
            "range": "± 93059.52534215273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2592556.1951219514,
            "unit": "ns",
            "range": "± 91797.25361447899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3221425.625,
            "unit": "ns",
            "range": "± 61355.943317524936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3143776.343137255,
            "unit": "ns",
            "range": "± 126751.15557033356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7734578.066666666,
            "unit": "ns",
            "range": "± 291234.0975424784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40529.22680412371,
            "unit": "ns",
            "range": "± 5728.776562788724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3798564.8854166665,
            "unit": "ns",
            "range": "± 10004.39169288758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201172.4444110577,
            "unit": "ns",
            "range": "± 3157.23689194277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 785320.6105608259,
            "unit": "ns",
            "range": "± 9705.796386632112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2025307.194110577,
            "unit": "ns",
            "range": "± 9387.667234047396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623500.6759314904,
            "unit": "ns",
            "range": "± 1191.1222940825708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576376.029296875,
            "unit": "ns",
            "range": "± 2593.945793113992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205027.9,
            "unit": "ns",
            "range": "± 15245.3552678366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194285.54545454544,
            "unit": "ns",
            "range": "± 7773.895314682103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169114.35185185185,
            "unit": "ns",
            "range": "± 4700.281012087745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3098145.6428571427,
            "unit": "ns",
            "range": "± 29913.906479472676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807479.6428571427,
            "unit": "ns",
            "range": "± 33125.78955542539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14216.632653061224,
            "unit": "ns",
            "range": "± 2722.32563701963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70104.75,
            "unit": "ns",
            "range": "± 3772.7120374433403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56289.72727272727,
            "unit": "ns",
            "range": "± 6752.358452404523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84992.95918367348,
            "unit": "ns",
            "range": "± 20769.070083724182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3053.516853932584,
            "unit": "ns",
            "range": "± 444.1786626705609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14795.979166666666,
            "unit": "ns",
            "range": "± 3031.5903763681063"
          }
        ]
      }
    ]
  }
}