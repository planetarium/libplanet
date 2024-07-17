window.BENCHMARK_DATA = {
  "lastUpdate": 1721190176843,
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
          "id": "6b9b285ddd52ebd31c646c91d934ca74df26b63b",
          "message": "Changelog",
          "timestamp": "2024-07-16T13:15:44+09:00",
          "tree_id": "b598aa425f39661f629bed871eb1b3b4af844f38",
          "url": "https://github.com/planetarium/libplanet/commit/6b9b285ddd52ebd31c646c91d934ca74df26b63b"
        },
        "date": 1721104017403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052301.0416666667,
            "unit": "ns",
            "range": "± 91596.61852502689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879414.8936170214,
            "unit": "ns",
            "range": "± 72880.57825238134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592563.1578947369,
            "unit": "ns",
            "range": "± 78148.59835314644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6998032.432432433,
            "unit": "ns",
            "range": "± 234450.7541918796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31265.47619047619,
            "unit": "ns",
            "range": "± 1794.7375582632503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10198920,
            "unit": "ns",
            "range": "± 136213.07468185906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24871621.05263158,
            "unit": "ns",
            "range": "± 541403.333506697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61427980,
            "unit": "ns",
            "range": "± 1067305.9644330137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126980766.66666667,
            "unit": "ns",
            "range": "± 3001984.188887965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251903778.57142857,
            "unit": "ns",
            "range": "± 2967592.2180418284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3416821.2239583335,
            "unit": "ns",
            "range": "± 12037.308741107712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076208.9322916667,
            "unit": "ns",
            "range": "± 3501.8670800540635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749569.9934895834,
            "unit": "ns",
            "range": "± 2508.377687991145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919370.8426339286,
            "unit": "ns",
            "range": "± 6911.257390920046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629296.3997395834,
            "unit": "ns",
            "range": "± 2284.7044372278633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572989.453125,
            "unit": "ns",
            "range": "± 391.1583404536731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2281680.9523809524,
            "unit": "ns",
            "range": "± 52481.4216561215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274305.6603773586,
            "unit": "ns",
            "range": "± 88011.73963453865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778314.285714286,
            "unit": "ns",
            "range": "± 65766.58183085301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348456.25,
            "unit": "ns",
            "range": "± 91572.96801318979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3084255,
            "unit": "ns",
            "range": "± 68802.58926431247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189923.80952380953,
            "unit": "ns",
            "range": "± 8715.350089866732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178675,
            "unit": "ns",
            "range": "± 8519.273583355549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154534.52380952382,
            "unit": "ns",
            "range": "± 8281.06410203887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2819914.285714286,
            "unit": "ns",
            "range": "± 39617.315700293264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2525557.1428571427,
            "unit": "ns",
            "range": "± 36901.50537445727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13909.89010989011,
            "unit": "ns",
            "range": "± 1484.2921953319437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59657.291666666664,
            "unit": "ns",
            "range": "± 5880.5611044787875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45481.25,
            "unit": "ns",
            "range": "± 851.836251870041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66094.9494949495,
            "unit": "ns",
            "range": "± 15677.335608550884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3391.6666666666665,
            "unit": "ns",
            "range": "± 997.9628372646966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11283.720930232557,
            "unit": "ns",
            "range": "± 1245.68530301397"
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
          "id": "5298df772ab431b6c4cf8e36533a442c11f6dbcf",
          "message": "Changelog",
          "timestamp": "2024-07-16T13:40:54+09:00",
          "tree_id": "41ba7dc6567919ba3d2f66e5537293575fce26ee",
          "url": "https://github.com/planetarium/libplanet/commit/5298df772ab431b6c4cf8e36533a442c11f6dbcf"
        },
        "date": 1721105512041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011438.947368421,
            "unit": "ns",
            "range": "± 87065.12394403869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814721.6666666667,
            "unit": "ns",
            "range": "± 81142.2774120607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579077.6595744682,
            "unit": "ns",
            "range": "± 107142.20291778778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6822164.705882353,
            "unit": "ns",
            "range": "± 213674.30452337323"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32420.987654320987,
            "unit": "ns",
            "range": "± 1609.3256390009076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9666946.666666666,
            "unit": "ns",
            "range": "± 79418.31262972276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23608707.14285714,
            "unit": "ns",
            "range": "± 115061.19752472671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59302600,
            "unit": "ns",
            "range": "± 551337.7950818484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118461885.71428572,
            "unit": "ns",
            "range": "± 926632.5401126405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238467580,
            "unit": "ns",
            "range": "± 1611997.4043757904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354920.78125,
            "unit": "ns",
            "range": "± 6023.111760824094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084039.8697916667,
            "unit": "ns",
            "range": "± 2559.3716771501076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730595.5603966346,
            "unit": "ns",
            "range": "± 919.148230036668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926391.1979166667,
            "unit": "ns",
            "range": "± 3598.3321121722947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621901.9921875,
            "unit": "ns",
            "range": "± 923.658577926347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569903.5993303572,
            "unit": "ns",
            "range": "± 1421.767999155968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147657.1428571427,
            "unit": "ns",
            "range": "± 22956.303450944975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266420,
            "unit": "ns",
            "range": "± 35661.227444623146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764348.1481481483,
            "unit": "ns",
            "range": "± 75432.96754465246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2233445,
            "unit": "ns",
            "range": "± 73015.53031148008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3016507.1428571427,
            "unit": "ns",
            "range": "± 51485.89746098088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176321.66666666666,
            "unit": "ns",
            "range": "± 6972.125898750151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167174.2857142857,
            "unit": "ns",
            "range": "± 7530.506761905025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143572.72727272726,
            "unit": "ns",
            "range": "± 2842.5645393153627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748928.5714285714,
            "unit": "ns",
            "range": "± 22216.052012744458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2627280,
            "unit": "ns",
            "range": "± 42323.502420556564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11910.63829787234,
            "unit": "ns",
            "range": "± 1128.6558839274057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56466.666666666664,
            "unit": "ns",
            "range": "± 5392.0344108433965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45658.333333333336,
            "unit": "ns",
            "range": "± 1167.2772729236433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60800,
            "unit": "ns",
            "range": "± 12853.009194769322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2817.5257731958764,
            "unit": "ns",
            "range": "± 611.6933990431723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11737.894736842105,
            "unit": "ns",
            "range": "± 1692.9251373633408"
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
          "id": "b9064f873d32a8748d5c95736224df15d4ed0401",
          "message": "Changelog",
          "timestamp": "2024-07-17T09:51:22+09:00",
          "tree_id": "17028deb9b286154a6a89a4c50252f2a98152dc1",
          "url": "https://github.com/planetarium/libplanet/commit/b9064f873d32a8748d5c95736224df15d4ed0401"
        },
        "date": 1721178077302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988371.5789473684,
            "unit": "ns",
            "range": "± 91455.38926823181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1745614.5454545454,
            "unit": "ns",
            "range": "± 74111.8984253911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532855.2083333333,
            "unit": "ns",
            "range": "± 113326.58615912886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6760631.0344827585,
            "unit": "ns",
            "range": "± 197013.29197987827"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31058,
            "unit": "ns",
            "range": "± 1144.4346255880664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9682946.666666666,
            "unit": "ns",
            "range": "± 113521.22436334266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23365380,
            "unit": "ns",
            "range": "± 249275.80307763527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60360953.333333336,
            "unit": "ns",
            "range": "± 867238.2090510632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119600938.46153846,
            "unit": "ns",
            "range": "± 584765.1031802734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243182146.66666666,
            "unit": "ns",
            "range": "± 2472466.010705757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371678.6979166665,
            "unit": "ns",
            "range": "± 17677.230610262402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065891.5597098214,
            "unit": "ns",
            "range": "± 2647.070174684758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746917.138671875,
            "unit": "ns",
            "range": "± 1977.2130120387335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925582.109375,
            "unit": "ns",
            "range": "± 7531.5156989678035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627277.001953125,
            "unit": "ns",
            "range": "± 1575.0669461648904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558992.4869791666,
            "unit": "ns",
            "range": "± 1129.2755850097546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2136733.3333333335,
            "unit": "ns",
            "range": "± 19229.16931073603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242356.25,
            "unit": "ns",
            "range": "± 59201.55805218687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2684758.3333333335,
            "unit": "ns",
            "range": "± 68869.47905224444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2239608.3333333335,
            "unit": "ns",
            "range": "± 55979.00162729241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2989086.6666666665,
            "unit": "ns",
            "range": "± 48850.46960830961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174018.6567164179,
            "unit": "ns",
            "range": "± 8086.187417821112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168111.86440677967,
            "unit": "ns",
            "range": "± 7164.401573916134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143371.42857142858,
            "unit": "ns",
            "range": "± 1786.0263463594567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754085.714285714,
            "unit": "ns",
            "range": "± 43663.67716187797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450757.1428571427,
            "unit": "ns",
            "range": "± 24185.5555838831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10571.134020618556,
            "unit": "ns",
            "range": "± 1398.061065285791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56263.15789473684,
            "unit": "ns",
            "range": "± 5502.7082815874255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45939.28571428572,
            "unit": "ns",
            "range": "± 1298.8140703803563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50197.67441860465,
            "unit": "ns",
            "range": "± 7796.046912969434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2170.2127659574467,
            "unit": "ns",
            "range": "± 390.7064974467483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11257.446808510638,
            "unit": "ns",
            "range": "± 1231.5292846135137"
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
          "id": "a9f0615a9c8a09a2d116816e927e0a55d2aa612a",
          "message": "Changelog",
          "timestamp": "2024-07-17T13:07:43+09:00",
          "tree_id": "a89426d116c187bbcf064240180c86d8c1973a2c",
          "url": "https://github.com/planetarium/libplanet/commit/a9f0615a9c8a09a2d116816e927e0a55d2aa612a"
        },
        "date": 1721189862659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989630.2083333334,
            "unit": "ns",
            "range": "± 73737.68888473115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1780972.2222222222,
            "unit": "ns",
            "range": "± 58841.55291294027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553811.4285714286,
            "unit": "ns",
            "range": "± 75569.79218367104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6851614.814814814,
            "unit": "ns",
            "range": "± 186240.4209280692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30216.666666666668,
            "unit": "ns",
            "range": "± 279.067711996189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9747815.384615384,
            "unit": "ns",
            "range": "± 117717.28736081946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24470757.14285714,
            "unit": "ns",
            "range": "± 193749.3293855817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58982757.14285714,
            "unit": "ns",
            "range": "± 985520.1927559223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118064600,
            "unit": "ns",
            "range": "± 797309.2140801728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240435450,
            "unit": "ns",
            "range": "± 3166460.7339449804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352712.96875,
            "unit": "ns",
            "range": "± 6853.716850774078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073702.064732143,
            "unit": "ns",
            "range": "± 2253.361910112056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735043.7955729166,
            "unit": "ns",
            "range": "± 2379.0620578918333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918975.7161458333,
            "unit": "ns",
            "range": "± 3664.518255852156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603426.3606770834,
            "unit": "ns",
            "range": "± 1269.6926609414277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556276.3881138393,
            "unit": "ns",
            "range": "± 728.8046990032966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180926.923076923,
            "unit": "ns",
            "range": "± 58986.47002621742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311478.947368421,
            "unit": "ns",
            "range": "± 51313.70381126672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780581.4814814813,
            "unit": "ns",
            "range": "± 76331.71050415435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2238241.4285714286,
            "unit": "ns",
            "range": "± 70806.69780311402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3012529.411764706,
            "unit": "ns",
            "range": "± 58323.41687420545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174218.33333333334,
            "unit": "ns",
            "range": "± 7601.326638598467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167528.57142857142,
            "unit": "ns",
            "range": "± 8099.3315676449565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141832,
            "unit": "ns",
            "range": "± 3393.095931446678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783586.6666666665,
            "unit": "ns",
            "range": "± 34312.03176452138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2572400,
            "unit": "ns",
            "range": "± 41245.39801169164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11426.595744680852,
            "unit": "ns",
            "range": "± 1185.864371645715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54048.913043478264,
            "unit": "ns",
            "range": "± 3971.394821409766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47090.90909090909,
            "unit": "ns",
            "range": "± 1153.8379398087027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58893.54838709677,
            "unit": "ns",
            "range": "± 10810.972751667963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2740.816326530612,
            "unit": "ns",
            "range": "± 504.584494716213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10347.727272727272,
            "unit": "ns",
            "range": "± 874.8040532950463"
          }
        ]
      }
    ]
  }
}