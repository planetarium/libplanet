window.BENCHMARK_DATA = {
  "lastUpdate": 1713417387564,
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415809526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780925.466666667,
            "unit": "ns",
            "range": "± 62517.241238907925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14309099.692307692,
            "unit": "ns",
            "range": "± 65431.64767193397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36628208.06666667,
            "unit": "ns",
            "range": "± 663210.9733103106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72576603.85714285,
            "unit": "ns",
            "range": "± 239533.1641309683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146381875.42857143,
            "unit": "ns",
            "range": "± 397064.34922483366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85463.59433962264,
            "unit": "ns",
            "range": "± 3533.8189533102905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110547.76712328767,
            "unit": "ns",
            "range": "± 5346.020317645817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106795.7435897436,
            "unit": "ns",
            "range": "± 5437.097263630581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91131.19444444444,
            "unit": "ns",
            "range": "± 2748.9992653893364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083443.586956522,
            "unit": "ns",
            "range": "± 147060.0218032979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863072.39,
            "unit": "ns",
            "range": "± 187170.6431236781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5323.0625,
            "unit": "ns",
            "range": "± 954.3386336262296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27906.62222222222,
            "unit": "ns",
            "range": "± 2713.3735235223903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25061.58510638298,
            "unit": "ns",
            "range": "± 1792.121554114573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29588.84375,
            "unit": "ns",
            "range": "± 5455.30649691921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1188.9891304347825,
            "unit": "ns",
            "range": "± 217.7064509417512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5124.891304347826,
            "unit": "ns",
            "range": "± 596.7162606697848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1178087.2626262626,
            "unit": "ns",
            "range": "± 130636.9700379086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858996.5172413792,
            "unit": "ns",
            "range": "± 113511.44365953245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571314.09375,
            "unit": "ns",
            "range": "± 148503.62902119532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10616258.63,
            "unit": "ns",
            "range": "± 2001244.4437067416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2500142.9484536084,
            "unit": "ns",
            "range": "± 142374.85541493763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671025.310810811,
            "unit": "ns",
            "range": "± 132983.2207017498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3526282.933333333,
            "unit": "ns",
            "range": "± 65965.88911536743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3360113.714285714,
            "unit": "ns",
            "range": "± 121081.2078868187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12831184.53,
            "unit": "ns",
            "range": "± 1969243.6672622655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031895.382512019,
            "unit": "ns",
            "range": "± 25570.063614858584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926220.8543526785,
            "unit": "ns",
            "range": "± 3991.9186203451204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617191.6772135417,
            "unit": "ns",
            "range": "± 5895.316921679685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651609.892299107,
            "unit": "ns",
            "range": "± 14143.03371802876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454263.0899739583,
            "unit": "ns",
            "range": "± 781.7087547445644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428408.3519856771,
            "unit": "ns",
            "range": "± 930.4888425379921"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713416317557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700487,
            "unit": "ns",
            "range": "± 36047.72023535839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14360980.384615384,
            "unit": "ns",
            "range": "± 112423.37119681302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36076086.5,
            "unit": "ns",
            "range": "± 188142.3682666932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72939416.33333333,
            "unit": "ns",
            "range": "± 210284.62098704858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145682729,
            "unit": "ns",
            "range": "± 458927.0320026167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87275.44444444444,
            "unit": "ns",
            "range": "± 3260.3321815949116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112028.53846153847,
            "unit": "ns",
            "range": "± 5198.03176415399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106316.41379310345,
            "unit": "ns",
            "range": "± 5306.162502336589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90987.83333333333,
            "unit": "ns",
            "range": "± 2336.7265038132273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3202022.2352941176,
            "unit": "ns",
            "range": "± 64358.57724745146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2630796.79,
            "unit": "ns",
            "range": "± 186157.02884253574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5069.108695652174,
            "unit": "ns",
            "range": "± 819.2391465647952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27418.155555555557,
            "unit": "ns",
            "range": "± 2745.048072320558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22784.923076923078,
            "unit": "ns",
            "range": "± 273.7168432092009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30783.81818181818,
            "unit": "ns",
            "range": "± 6740.38380691812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1146.2043010752689,
            "unit": "ns",
            "range": "± 190.39864125039168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4901.271739130435,
            "unit": "ns",
            "range": "± 656.7635783703793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1141226.84375,
            "unit": "ns",
            "range": "± 109129.73913344255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870200.7415730336,
            "unit": "ns",
            "range": "± 111422.64608325284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511142.8723404256,
            "unit": "ns",
            "range": "± 140183.82900452756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10525031.33,
            "unit": "ns",
            "range": "± 1959309.459050846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2717256.5,
            "unit": "ns",
            "range": "± 37433.78240792181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2826986.4166666665,
            "unit": "ns",
            "range": "± 17096.263943055103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3519522.846153846,
            "unit": "ns",
            "range": "± 30029.28606612261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3325541.316666667,
            "unit": "ns",
            "range": "± 146794.31032472473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12572178.71,
            "unit": "ns",
            "range": "± 1831977.646654252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3053060.65625,
            "unit": "ns",
            "range": "± 56911.35839171198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920009.9287109375,
            "unit": "ns",
            "range": "± 8276.687969041246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616505.5335286459,
            "unit": "ns",
            "range": "± 4865.118415138186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1608797.9815204327,
            "unit": "ns",
            "range": "± 4593.127151880596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463759.15390625,
            "unit": "ns",
            "range": "± 1004.5793809045508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426015.4202799479,
            "unit": "ns",
            "range": "± 1404.0163300236431"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713417355064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5790503.2,
            "unit": "ns",
            "range": "± 76143.6792857518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14274128.615384616,
            "unit": "ns",
            "range": "± 41274.34457088823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36604612.384615384,
            "unit": "ns",
            "range": "± 206697.60212910807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72812360.73333333,
            "unit": "ns",
            "range": "± 293320.60858737264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146718230.86666667,
            "unit": "ns",
            "range": "± 404708.3620943899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86110.5,
            "unit": "ns",
            "range": "± 2651.1952021682596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112263.9827586207,
            "unit": "ns",
            "range": "± 4875.620836730146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106514.51111111112,
            "unit": "ns",
            "range": "± 4046.545494291858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90476.89743589744,
            "unit": "ns",
            "range": "± 3028.733023236925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160444.477272727,
            "unit": "ns",
            "range": "± 117023.15183091478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2781424.5974025973,
            "unit": "ns",
            "range": "± 142329.7220621761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5195.21875,
            "unit": "ns",
            "range": "± 1090.4834389352757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27521.79120879121,
            "unit": "ns",
            "range": "± 1794.128079885315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22698.157303370786,
            "unit": "ns",
            "range": "± 1460.814840320886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29546.43157894737,
            "unit": "ns",
            "range": "± 5524.141898613163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1323.4736842105262,
            "unit": "ns",
            "range": "± 330.52169729870735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5363.89010989011,
            "unit": "ns",
            "range": "± 613.3748074845057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1265912.6666666667,
            "unit": "ns",
            "range": "± 17186.516820584748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843031.6627906978,
            "unit": "ns",
            "range": "± 108834.64640524882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574124.2222222222,
            "unit": "ns",
            "range": "± 164103.51896552517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10553169.69,
            "unit": "ns",
            "range": "± 1980605.142083793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2680056,
            "unit": "ns",
            "range": "± 19010.117746275868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2831861.846153846,
            "unit": "ns",
            "range": "± 23094.27404086041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3285092.220338983,
            "unit": "ns",
            "range": "± 145577.25337642222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3376108.9137931033,
            "unit": "ns",
            "range": "± 147312.0596065331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12691857.85,
            "unit": "ns",
            "range": "± 1923833.675633626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3125602.0375,
            "unit": "ns",
            "range": "± 43191.57603926152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925700.787109375,
            "unit": "ns",
            "range": "± 6476.727382655055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 624533.3687133789,
            "unit": "ns",
            "range": "± 11952.001755018331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642752.96171875,
            "unit": "ns",
            "range": "± 16238.520209356318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461286.07955729164,
            "unit": "ns",
            "range": "± 1566.972005669323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429406.7884765625,
            "unit": "ns",
            "range": "± 1029.4830544764336"
          }
        ]
      }
    ]
  }
}