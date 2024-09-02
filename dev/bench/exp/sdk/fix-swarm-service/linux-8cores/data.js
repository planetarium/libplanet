window.BENCHMARK_DATA = {
  "lastUpdate": 1725240252863,
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
          "id": "e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-08-30T13:42:40+09:00",
          "tree_id": "6f53356f3fc4dd0ec5911b2d8387c704cd4c58c1",
          "url": "https://github.com/planetarium/libplanet/commit/e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765"
        },
        "date": 1724993855438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212404.1794871795,
            "unit": "ns",
            "range": "± 6997.238650360187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201184.61363636365,
            "unit": "ns",
            "range": "± 4153.578380009158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177801.59302325582,
            "unit": "ns",
            "range": "± 6493.043243546836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162925.5,
            "unit": "ns",
            "range": "± 46378.21406610585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905991.6666666665,
            "unit": "ns",
            "range": "± 43549.07486579556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13725.45652173913,
            "unit": "ns",
            "range": "± 881.6414562788702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64679.4175257732,
            "unit": "ns",
            "range": "± 5913.932961782751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51256.566666666666,
            "unit": "ns",
            "range": "± 534.1087993319428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58523.38775510204,
            "unit": "ns",
            "range": "± 10951.128183544643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2823.25,
            "unit": "ns",
            "range": "± 349.65935302504744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15548.717171717171,
            "unit": "ns",
            "range": "± 2694.8657837935657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2519511.75,
            "unit": "ns",
            "range": "± 43953.657841716275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593183.6333333333,
            "unit": "ns",
            "range": "± 47186.024501611355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113575.7916666665,
            "unit": "ns",
            "range": "± 80928.87956207043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2698937.5,
            "unit": "ns",
            "range": "± 39047.546062460824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282285.0714285714,
            "unit": "ns",
            "range": "± 38770.95000813066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10594779.933333334,
            "unit": "ns",
            "range": "± 93697.63537911772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27010972.733333334,
            "unit": "ns",
            "range": "± 149253.06842572865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69734656.73333333,
            "unit": "ns",
            "range": "± 496642.9332303422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140200092.13333333,
            "unit": "ns",
            "range": "± 740792.3191694211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290186066,
            "unit": "ns",
            "range": "± 823124.8003601884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029977.7752808989,
            "unit": "ns",
            "range": "± 56511.38671657903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1969664.2631578948,
            "unit": "ns",
            "range": "± 66786.1252314347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714846.5833333333,
            "unit": "ns",
            "range": "± 70304.87658455287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8561542.105263159,
            "unit": "ns",
            "range": "± 290056.22778544814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710982.6853966345,
            "unit": "ns",
            "range": "± 7333.267065177828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194510.6360212055,
            "unit": "ns",
            "range": "± 1785.4501878792878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755004.9162248884,
            "unit": "ns",
            "range": "± 1071.2018658785712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912717.2396763393,
            "unit": "ns",
            "range": "± 2356.3964113214083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627815.1284505208,
            "unit": "ns",
            "range": "± 1724.8832993959834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579542.741796875,
            "unit": "ns",
            "range": "± 545.6714271573502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32071.633333333335,
            "unit": "ns",
            "range": "± 556.5865183248264"
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
          "id": "da1fae297a3e2e99d2c996065670ec30d01172e9",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-09-02T09:58:48+09:00",
          "tree_id": "fa305714238f66f840a797993ef0cba8f8df58f8",
          "url": "https://github.com/planetarium/libplanet/commit/da1fae297a3e2e99d2c996065670ec30d01172e9"
        },
        "date": 1725239292969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200996.77192982455,
            "unit": "ns",
            "range": "± 8716.737463100892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197042.60638297873,
            "unit": "ns",
            "range": "± 7656.510946883115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166456.5,
            "unit": "ns",
            "range": "± 3999.314369810334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108650.2333333334,
            "unit": "ns",
            "range": "± 20118.773171438897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2866572.4,
            "unit": "ns",
            "range": "± 27087.53887939724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13613.252747252747,
            "unit": "ns",
            "range": "± 886.9300184519957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62227.885416666664,
            "unit": "ns",
            "range": "± 4553.398959180855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59043.234042553195,
            "unit": "ns",
            "range": "± 4532.964930695434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56877.611764705885,
            "unit": "ns",
            "range": "± 9921.017008272456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.3061224489797,
            "unit": "ns",
            "range": "± 386.6088798016809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12283.816091954022,
            "unit": "ns",
            "range": "± 814.9526384973867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481411.222222222,
            "unit": "ns",
            "range": "± 46445.21722455336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2583414.5,
            "unit": "ns",
            "range": "± 42251.37757911963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048513.8076923075,
            "unit": "ns",
            "range": "± 49025.0781647934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2652298.6428571427,
            "unit": "ns",
            "range": "± 35046.65941911668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295019,
            "unit": "ns",
            "range": "± 75986.177669363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10433087.166666666,
            "unit": "ns",
            "range": "± 71419.73486735868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26987776.266666666,
            "unit": "ns",
            "range": "± 218340.39578716358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68781019.78571428,
            "unit": "ns",
            "range": "± 477786.02363214834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142342465.7142857,
            "unit": "ns",
            "range": "± 435487.0469867712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283735391.64285713,
            "unit": "ns",
            "range": "± 1460476.8287480955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003030.6904761905,
            "unit": "ns",
            "range": "± 48581.757674526496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1969656.1923076923,
            "unit": "ns",
            "range": "± 80502.38465827069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1761497.1984126985,
            "unit": "ns",
            "range": "± 79913.2971527701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8354825.620689655,
            "unit": "ns",
            "range": "± 242354.81512140323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733832.6579241073,
            "unit": "ns",
            "range": "± 6196.668143093805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198510.732421875,
            "unit": "ns",
            "range": "± 1418.9532028676344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763472.1458984375,
            "unit": "ns",
            "range": "± 1413.692793455284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920349.2626201923,
            "unit": "ns",
            "range": "± 1836.295741413541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609980.0165318081,
            "unit": "ns",
            "range": "± 430.02790956827846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573498.4358072917,
            "unit": "ns",
            "range": "± 336.24672382245006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32832.9375,
            "unit": "ns",
            "range": "± 646.0813126070124"
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
          "id": "8e29db9a69b335b53e042354661b6638baea3d7b",
          "message": "chore: Rename file",
          "timestamp": "2024-09-02T10:12:41+09:00",
          "tree_id": "2917cdee1ab0781b708649aee66eab86044a615a",
          "url": "https://github.com/planetarium/libplanet/commit/8e29db9a69b335b53e042354661b6638baea3d7b"
        },
        "date": 1725240226783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211800.58974358975,
            "unit": "ns",
            "range": "± 7394.820533454297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194798.5,
            "unit": "ns",
            "range": "± 6363.362295369301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172387.14285714287,
            "unit": "ns",
            "range": "± 5606.538342406476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143969,
            "unit": "ns",
            "range": "± 30664.321536367217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2871319.8,
            "unit": "ns",
            "range": "± 38427.88561188347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13337.02688172043,
            "unit": "ns",
            "range": "± 915.2598299579938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62858.3052631579,
            "unit": "ns",
            "range": "± 5499.225688383822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60827.52,
            "unit": "ns",
            "range": "± 2426.8701645350134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59566.78125,
            "unit": "ns",
            "range": "± 10128.41773188906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3661.642105263158,
            "unit": "ns",
            "range": "± 425.755696499652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12994.78125,
            "unit": "ns",
            "range": "± 1322.9361141684253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2447475.6333333333,
            "unit": "ns",
            "range": "± 36361.12565416664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585574.923076923,
            "unit": "ns",
            "range": "± 61770.84910080034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3081258.6333333333,
            "unit": "ns",
            "range": "± 54559.05708609534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2648868.76,
            "unit": "ns",
            "range": "± 70167.72814672948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3319300.5833333335,
            "unit": "ns",
            "range": "± 80490.18563014599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10497010.833333334,
            "unit": "ns",
            "range": "± 82854.23491346255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27138686.8,
            "unit": "ns",
            "range": "± 219696.25177575124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68062819.08333333,
            "unit": "ns",
            "range": "± 214939.94804530797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137721980.23076922,
            "unit": "ns",
            "range": "± 487033.11054830655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286181214.21428573,
            "unit": "ns",
            "range": "± 2013612.9906137597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007936.4833333333,
            "unit": "ns",
            "range": "± 44831.15930420537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1981360.2777777778,
            "unit": "ns",
            "range": "± 82768.04848323579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715381.485915493,
            "unit": "ns",
            "range": "± 83285.13260557596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8322577.041666667,
            "unit": "ns",
            "range": "± 185990.63456318327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3692826.236886161,
            "unit": "ns",
            "range": "± 5550.491500049504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218802.7586495536,
            "unit": "ns",
            "range": "± 2195.2151510606686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768570.6777994792,
            "unit": "ns",
            "range": "± 797.8765169989691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915453.4650065105,
            "unit": "ns",
            "range": "± 2478.5412128597673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630389.8727213541,
            "unit": "ns",
            "range": "± 1068.774012378858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575994.1203962053,
            "unit": "ns",
            "range": "± 512.3268454260534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32258,
            "unit": "ns",
            "range": "± 302.11677453353275"
          }
        ]
      }
    ]
  }
}