window.BENCHMARK_DATA = {
  "lastUpdate": 1721090887787,
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
          "id": "2aa539ec15069490d113a2698b55e2015ca1f9e6",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T17:48:21+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/2aa539ec15069490d113a2698b55e2015ca1f9e6"
        },
        "date": 1721033915873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 926844.4444444445,
            "unit": "ns",
            "range": "± 41306.79385570845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1663148.4848484849,
            "unit": "ns",
            "range": "± 49637.76360552091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489754.054054054,
            "unit": "ns",
            "range": "± 65615.18824590069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6904700,
            "unit": "ns",
            "range": "± 264090.77311493567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30414.285714285714,
            "unit": "ns",
            "range": "± 804.4847836943637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9462821.42857143,
            "unit": "ns",
            "range": "± 81382.20537469079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23255838.46153846,
            "unit": "ns",
            "range": "± 54657.80728711954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57424638.461538464,
            "unit": "ns",
            "range": "± 210387.15715897654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113003000,
            "unit": "ns",
            "range": "± 503587.0377753826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235803073.33333334,
            "unit": "ns",
            "range": "± 986766.1964117702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335250.362723214,
            "unit": "ns",
            "range": "± 3931.5045389325996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064654.3247767857,
            "unit": "ns",
            "range": "± 1680.561945446759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733503.4480168269,
            "unit": "ns",
            "range": "± 1226.2995563261716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908065.806361607,
            "unit": "ns",
            "range": "± 3561.7009902374907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622946.19140625,
            "unit": "ns",
            "range": "± 1593.980164563966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555413.8541666666,
            "unit": "ns",
            "range": "± 962.9381699593948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142145.4545454546,
            "unit": "ns",
            "range": "± 58941.32724004595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204754.5454545454,
            "unit": "ns",
            "range": "± 76510.93083342985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712046.6666666665,
            "unit": "ns",
            "range": "± 45773.149750647906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264242.8571428573,
            "unit": "ns",
            "range": "± 29644.81312228068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2889464.285714286,
            "unit": "ns",
            "range": "± 35231.445900215054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168807.35294117648,
            "unit": "ns",
            "range": "± 7565.126512964301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160214.54545454544,
            "unit": "ns",
            "range": "± 6573.781204649218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141286.36363636365,
            "unit": "ns",
            "range": "± 2909.96570991832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695926.6666666665,
            "unit": "ns",
            "range": "± 29524.359595490117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440238.4615384615,
            "unit": "ns",
            "range": "± 24926.610227543926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9185.393258426966,
            "unit": "ns",
            "range": "± 770.2642052329354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48617.857142857145,
            "unit": "ns",
            "range": "± 2445.2639601416536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43250,
            "unit": "ns",
            "range": "± 853.2291603080616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45204.166666666664,
            "unit": "ns",
            "range": "± 6944.106424522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2140.625,
            "unit": "ns",
            "range": "± 258.9769853623453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8964.835164835165,
            "unit": "ns",
            "range": "± 708.7349647824991"
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
          "id": "ea9808e6ccf719ba5399cd4ef6a316741a346114",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T18:09:05+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/ea9808e6ccf719ba5399cd4ef6a316741a346114"
        },
        "date": 1721035197887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023613.4020618557,
            "unit": "ns",
            "range": "± 127214.0794331105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1778950,
            "unit": "ns",
            "range": "± 72798.4903420286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1541468.9189189188,
            "unit": "ns",
            "range": "± 76299.65246276383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6998097.872340426,
            "unit": "ns",
            "range": "± 272292.4885912219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30552.702702702703,
            "unit": "ns",
            "range": "± 1369.4537430082005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9758500,
            "unit": "ns",
            "range": "± 150194.42637556733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23193007.692307692,
            "unit": "ns",
            "range": "± 80515.0447798263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59158871.428571425,
            "unit": "ns",
            "range": "± 306767.09388412227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116107338.46153846,
            "unit": "ns",
            "range": "± 462194.45319486747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243024533.33333334,
            "unit": "ns",
            "range": "± 2526677.157472881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3338101.4322916665,
            "unit": "ns",
            "range": "± 13022.530984010577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065374.204799107,
            "unit": "ns",
            "range": "± 4039.7686294465007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727650.7552083334,
            "unit": "ns",
            "range": "± 2401.8521276426072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926854.39453125,
            "unit": "ns",
            "range": "± 4066.074839364856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618918.2942708334,
            "unit": "ns",
            "range": "± 2643.9662997316723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562363.8151041666,
            "unit": "ns",
            "range": "± 2160.553354130316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174241.1764705884,
            "unit": "ns",
            "range": "± 42867.6314196319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312200,
            "unit": "ns",
            "range": "± 24275.533742052685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2742000,
            "unit": "ns",
            "range": "± 53589.31796543039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263968,
            "unit": "ns",
            "range": "± 57930.523905795984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2929756.25,
            "unit": "ns",
            "range": "± 55744.78712549422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179291.66666666666,
            "unit": "ns",
            "range": "± 8003.734121458911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173305.45454545456,
            "unit": "ns",
            "range": "± 7195.148009746212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149184.84848484848,
            "unit": "ns",
            "range": "± 4620.952364781069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815433.3333333335,
            "unit": "ns",
            "range": "± 40633.63607840653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2566500,
            "unit": "ns",
            "range": "± 39699.78409441111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12258.510638297872,
            "unit": "ns",
            "range": "± 1593.2930377638277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55462.244897959186,
            "unit": "ns",
            "range": "± 6001.6581094825815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46780,
            "unit": "ns",
            "range": "± 1869.6283598837585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55926.88172043011,
            "unit": "ns",
            "range": "± 10828.11497289776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2610.204081632653,
            "unit": "ns",
            "range": "± 468.70952381525973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10047.872340425532,
            "unit": "ns",
            "range": "± 1434.7251599533151"
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
          "id": "f36cbd1a34020e003725426cd4d6b82d75836175",
          "message": "Changelog",
          "timestamp": "2024-07-16T09:33:33+09:00",
          "tree_id": "c1eea56039119650a0171132e2666f8147bf07f0",
          "url": "https://github.com/planetarium/libplanet/commit/f36cbd1a34020e003725426cd4d6b82d75836175"
        },
        "date": 1721090632829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992685.1648351648,
            "unit": "ns",
            "range": "± 79158.53624724159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798775,
            "unit": "ns",
            "range": "± 82110.11189975614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530431.8181818181,
            "unit": "ns",
            "range": "± 86246.94236853029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6894632.432432433,
            "unit": "ns",
            "range": "± 219924.34943515115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29860.526315789473,
            "unit": "ns",
            "range": "± 461.753586092199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9797906.666666666,
            "unit": "ns",
            "range": "± 156725.70883401297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23483630,
            "unit": "ns",
            "range": "± 156506.5229128988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58775200,
            "unit": "ns",
            "range": "± 575955.1966702172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117769350,
            "unit": "ns",
            "range": "± 668954.077704085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232371907.14285713,
            "unit": "ns",
            "range": "± 828536.9092231528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3362166.6015625,
            "unit": "ns",
            "range": "± 5432.183551272791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057807.7864583333,
            "unit": "ns",
            "range": "± 3138.652059692299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744779.1666666666,
            "unit": "ns",
            "range": "± 2270.3023979620607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936180.9505208333,
            "unit": "ns",
            "range": "± 3689.164277676596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608283.3426339285,
            "unit": "ns",
            "range": "± 1088.473526762687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557466.7903645834,
            "unit": "ns",
            "range": "± 1330.728766545353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150188,
            "unit": "ns",
            "range": "± 56412.95891311972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2214202.0833333335,
            "unit": "ns",
            "range": "± 86218.57303384757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2694186.9565217393,
            "unit": "ns",
            "range": "± 67169.0966844658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299722.580645161,
            "unit": "ns",
            "range": "± 70235.62111292446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2950922.222222222,
            "unit": "ns",
            "range": "± 62260.21820747041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183484.72222222222,
            "unit": "ns",
            "range": "± 8581.172639296725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168740.2985074627,
            "unit": "ns",
            "range": "± 7530.384104282333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142245.45454545456,
            "unit": "ns",
            "range": "± 3006.6160812016324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774568.75,
            "unit": "ns",
            "range": "± 52383.657995600115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2471807.1428571427,
            "unit": "ns",
            "range": "± 27646.99077478594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12143.157894736842,
            "unit": "ns",
            "range": "± 1628.3167546664365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52597.84946236559,
            "unit": "ns",
            "range": "± 3623.533541298906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45813.51351351351,
            "unit": "ns",
            "range": "± 1546.7101578228264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54378.260869565216,
            "unit": "ns",
            "range": "± 9780.321418648691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2441.6666666666665,
            "unit": "ns",
            "range": "± 468.0680712228144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10472.043010752688,
            "unit": "ns",
            "range": "± 1322.9056944434237"
          }
        ]
      }
    ]
  }
}