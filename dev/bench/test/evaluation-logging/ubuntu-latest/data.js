window.BENCHMARK_DATA = {
  "lastUpdate": 1679748449029,
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679469888178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101832.82857142857,
            "unit": "ns",
            "range": "± 3348.395414538259"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4402345.159635416,
            "unit": "ns",
            "range": "± 42964.66278555664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5452597.583333333,
            "unit": "ns",
            "range": "± 217777.3375803121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25526996.133333333,
            "unit": "ns",
            "range": "± 322683.53709585994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6698944.714285715,
            "unit": "ns",
            "range": "± 65556.77079322291"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28345433.125,
            "unit": "ns",
            "range": "± 554354.9258374547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5890813.116145833,
            "unit": "ns",
            "range": "± 27799.320339083853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822175.1474609375,
            "unit": "ns",
            "range": "± 3468.6971124858633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338430.9600360577,
            "unit": "ns",
            "range": "± 1315.0861089895488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563176.681510417,
            "unit": "ns",
            "range": "± 2358.351015627408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822965.8002115885,
            "unit": "ns",
            "range": "± 600.6546693847212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746605.1708286831,
            "unit": "ns",
            "range": "± 2173.5859591037633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90082.76842105263,
            "unit": "ns",
            "range": "± 8167.375950972508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196118.58666666667,
            "unit": "ns",
            "range": "± 9911.63612655475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170690.7142857143,
            "unit": "ns",
            "range": "± 2445.2978245092054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760215.6,
            "unit": "ns",
            "range": "± 34370.732640680544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9483764.8,
            "unit": "ns",
            "range": "± 61482.74731081651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15532.38202247191,
            "unit": "ns",
            "range": "± 1123.9343084331645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47905.08045977011,
            "unit": "ns",
            "range": "± 3177.7361629559373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40508.43820224719,
            "unit": "ns",
            "range": "± 2243.8732541738477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91112.3125,
            "unit": "ns",
            "range": "± 13692.493759500034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5087.693877551021,
            "unit": "ns",
            "range": "± 576.78601882199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15033.954545454546,
            "unit": "ns",
            "range": "± 1093.8792922238324"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470137846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110158.7843137255,
            "unit": "ns",
            "range": "± 4356.882731099039"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5011884.51953125,
            "unit": "ns",
            "range": "± 284685.6939765789"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6313265.153846154,
            "unit": "ns",
            "range": "± 100133.46290147478"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28213629.125,
            "unit": "ns",
            "range": "± 524992.7417302548"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6573279.294736842,
            "unit": "ns",
            "range": "± 403691.0899086786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32047025.30612245,
            "unit": "ns",
            "range": "± 1157138.5940096339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923498.542668269,
            "unit": "ns",
            "range": "± 35124.48610295226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886084.4194711538,
            "unit": "ns",
            "range": "± 1882.4402854339526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370286.48671875,
            "unit": "ns",
            "range": "± 4901.407475837059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642196.255108173,
            "unit": "ns",
            "range": "± 2619.17436447447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819655.3367745535,
            "unit": "ns",
            "range": "± 691.1978147919352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763645.4968610491,
            "unit": "ns",
            "range": "± 375.4763612481701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100196.47916666667,
            "unit": "ns",
            "range": "± 9792.976918479753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207044.1012658228,
            "unit": "ns",
            "range": "± 10322.599299464551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181976.26923076922,
            "unit": "ns",
            "range": "± 4923.479367745475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3955985.8,
            "unit": "ns",
            "range": "± 49358.14410032626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9841690.285714285,
            "unit": "ns",
            "range": "± 142598.60192778273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18835.935483870966,
            "unit": "ns",
            "range": "± 1553.8155897971853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53126.455555555556,
            "unit": "ns",
            "range": "± 3241.977639475083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41167.2962962963,
            "unit": "ns",
            "range": "± 1133.4145081537679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101069.81914893616,
            "unit": "ns",
            "range": "± 18296.28298108472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6321.561224489796,
            "unit": "ns",
            "range": "± 705.4840710912144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19587.574468085106,
            "unit": "ns",
            "range": "± 2006.817731726868"
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
          "id": "8aa2e534c2706a35f0f5712c365b5c388ee9039f",
          "message": "Merge pull request #2978 from greymistcube/refactor/additional-evaluation-logging\n\n♻️ Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:32:51+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/planetarium/libplanet/commit/8aa2e534c2706a35f0f5712c365b5c388ee9039f"
        },
        "date": 1679470976041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103470.78571428571,
            "unit": "ns",
            "range": "± 1629.824444466403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4374897.129947917,
            "unit": "ns",
            "range": "± 29618.419752480702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5445007.018518519,
            "unit": "ns",
            "range": "± 165029.22826606804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25557731.583333332,
            "unit": "ns",
            "range": "± 646600.5968861751"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6923152.647058823,
            "unit": "ns",
            "range": "± 135328.63253250456"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27875223.666666668,
            "unit": "ns",
            "range": "± 494296.2624015027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887920.085416666,
            "unit": "ns",
            "range": "± 34243.129126843705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926762.9625,
            "unit": "ns",
            "range": "± 9617.200971320495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343811.656529018,
            "unit": "ns",
            "range": "± 1042.9213113448584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568562.6676897323,
            "unit": "ns",
            "range": "± 5849.2455763764365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810050.4674729567,
            "unit": "ns",
            "range": "± 701.2572750320936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736106.9455915178,
            "unit": "ns",
            "range": "± 1756.7443217595708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82487.5,
            "unit": "ns",
            "range": "± 4391.516637050801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209506.47252747254,
            "unit": "ns",
            "range": "± 13070.071299083482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199563.2323232323,
            "unit": "ns",
            "range": "± 21349.59985947654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3948885.153846154,
            "unit": "ns",
            "range": "± 14701.503856443587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9552031.92857143,
            "unit": "ns",
            "range": "± 73832.42372318992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15853.244444444445,
            "unit": "ns",
            "range": "± 1089.5884215333676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59836.114583333336,
            "unit": "ns",
            "range": "± 5194.478469074622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46525.72,
            "unit": "ns",
            "range": "± 5638.355190491408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94828.70707070707,
            "unit": "ns",
            "range": "± 24173.05826034875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5135.440860215053,
            "unit": "ns",
            "range": "± 737.8699582370987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14509.866666666667,
            "unit": "ns",
            "range": "± 916.2861679481111"
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
          "id": "f96f3225123873e5c62fdd47de65bfabd23754a6",
          "message": "Merge pull request #2979 from limebell/log/getstate-logging\n\nAdd time measure for `AccountStateDeltaImpl.GetState()` method",
          "timestamp": "2023-03-22T18:06:30+09:00",
          "tree_id": "5419d5b724fb3ad6d51fee9bcfc63f452a315433",
          "url": "https://github.com/planetarium/libplanet/commit/f96f3225123873e5c62fdd47de65bfabd23754a6"
        },
        "date": 1679476719721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108111.37288135593,
            "unit": "ns",
            "range": "± 4790.436348631133"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5179968.491927084,
            "unit": "ns",
            "range": "± 29890.157963750185"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5951209.533333333,
            "unit": "ns",
            "range": "± 96912.59822855605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27839625.09090909,
            "unit": "ns",
            "range": "± 663577.8078879823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6957839.944444444,
            "unit": "ns",
            "range": "± 146768.45164627102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30897109.777777776,
            "unit": "ns",
            "range": "± 631050.5760170709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897009.569754465,
            "unit": "ns",
            "range": "± 10431.206192895643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826191.3863002232,
            "unit": "ns",
            "range": "± 2126.905043763411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360442.7543247768,
            "unit": "ns",
            "range": "± 2348.6428846121757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673645.961197917,
            "unit": "ns",
            "range": "± 2885.9827061008245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835025.5359933035,
            "unit": "ns",
            "range": "± 1087.1469184045184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765225.9694661458,
            "unit": "ns",
            "range": "± 441.79889419970664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97819.57731958762,
            "unit": "ns",
            "range": "± 8063.618482928756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203052.1896551724,
            "unit": "ns",
            "range": "± 8910.01359491923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185912.1012658228,
            "unit": "ns",
            "range": "± 9620.285288955616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967302.466666667,
            "unit": "ns",
            "range": "± 58526.69230343496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9946018.733333332,
            "unit": "ns",
            "range": "± 179574.23173219906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19193.947916666668,
            "unit": "ns",
            "range": "± 2070.6256434115535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52132.05617977528,
            "unit": "ns",
            "range": "± 3459.289530181906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40921.42105263158,
            "unit": "ns",
            "range": "± 1403.368315423288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98827.36842105263,
            "unit": "ns",
            "range": "± 15276.877938015827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.1875,
            "unit": "ns",
            "range": "± 700.685518654861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19113.51111111111,
            "unit": "ns",
            "range": "± 1859.1673456083186"
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
          "id": "7944e4a33f6c9e7c3358b07f63623d18f1032d57",
          "message": "Merge pull request #2981 from greymistcube/chore/more-logging\n\n🔧 Added logging info",
          "timestamp": "2023-03-23T11:54:01+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/planetarium/libplanet/commit/7944e4a33f6c9e7c3358b07f63623d18f1032d57"
        },
        "date": 1679540783709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100813.54,
            "unit": "ns",
            "range": "± 3535.8275780406284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4362257.770572917,
            "unit": "ns",
            "range": "± 36902.73529238804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6027300.642857143,
            "unit": "ns",
            "range": "± 49572.92704476622"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24638684.307692308,
            "unit": "ns",
            "range": "± 397534.5960190938"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6155543.939393939,
            "unit": "ns",
            "range": "± 172264.66650675557"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27714582.714285713,
            "unit": "ns",
            "range": "± 351560.45514477935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962596.2890625,
            "unit": "ns",
            "range": "± 31428.675803184055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827924.3731971155,
            "unit": "ns",
            "range": "± 2901.499014658912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335306.8025841345,
            "unit": "ns",
            "range": "± 3086.8320733543665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553139.999441964,
            "unit": "ns",
            "range": "± 5461.105302598777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811580.0397135416,
            "unit": "ns",
            "range": "± 1143.1515045059573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731803.6210239956,
            "unit": "ns",
            "range": "± 885.2816026243077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84016.02173913043,
            "unit": "ns",
            "range": "± 5499.343826948334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190173.59677419355,
            "unit": "ns",
            "range": "± 8254.050982495128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167851.85714285713,
            "unit": "ns",
            "range": "± 3791.850066731467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715033.6666666665,
            "unit": "ns",
            "range": "± 41554.67769211113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9410005.933333334,
            "unit": "ns",
            "range": "± 60885.70749652484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14528.7,
            "unit": "ns",
            "range": "± 771.5274083090968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44058.12727272727,
            "unit": "ns",
            "range": "± 1879.3486367133953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37125.57142857143,
            "unit": "ns",
            "range": "± 1179.879337941317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76598.63440860216,
            "unit": "ns",
            "range": "± 9286.789269177349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4123.947916666667,
            "unit": "ns",
            "range": "± 578.1653809984543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13697.782608695652,
            "unit": "ns",
            "range": "± 979.4501241146916"
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
          "id": "4ac5b5442c64be640ce105c95625a639758a24c6",
          "message": "Merge pull request #2983 from greymistcube/refactor/state-caching\n\n🔧 Added state caching",
          "timestamp": "2023-03-23T18:20:56+09:00",
          "tree_id": "d4cdb454c29ceb38ec313af5f3988a6cad100edc",
          "url": "https://github.com/planetarium/libplanet/commit/4ac5b5442c64be640ce105c95625a639758a24c6"
        },
        "date": 1679563830646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103507.35714285714,
            "unit": "ns",
            "range": "± 1395.8026423830543"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4427975.544270833,
            "unit": "ns",
            "range": "± 44499.08630778063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6133701.142857143,
            "unit": "ns",
            "range": "± 63731.662169608426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25502989.733333334,
            "unit": "ns",
            "range": "± 383232.7410795591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6783186.076923077,
            "unit": "ns",
            "range": "± 47034.492105017176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28739271.214285713,
            "unit": "ns",
            "range": "± 471167.11602657154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910702.571354167,
            "unit": "ns",
            "range": "± 39421.48773289945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995494.9033854166,
            "unit": "ns",
            "range": "± 4343.982256052345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348052.1587239583,
            "unit": "ns",
            "range": "± 4028.352051764334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578446.3270833334,
            "unit": "ns",
            "range": "± 890.1582050457433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792876.746233259,
            "unit": "ns",
            "range": "± 454.07575155315834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745304.6506510417,
            "unit": "ns",
            "range": "± 589.050865124984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88729.60869565218,
            "unit": "ns",
            "range": "± 6262.117018986789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194202.01612903227,
            "unit": "ns",
            "range": "± 8491.570915107108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170933.6,
            "unit": "ns",
            "range": "± 2440.984426707506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3825073.785714286,
            "unit": "ns",
            "range": "± 24816.896301259603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9560393.538461538,
            "unit": "ns",
            "range": "± 42272.50302228661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16029.958762886597,
            "unit": "ns",
            "range": "± 2389.1363193523416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47311.8023255814,
            "unit": "ns",
            "range": "± 2624.406343267514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44329.67346938775,
            "unit": "ns",
            "range": "± 2962.269117630647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88673.91397849462,
            "unit": "ns",
            "range": "± 11715.975733323461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4951.623655913979,
            "unit": "ns",
            "range": "± 616.555613239328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14918.117021276596,
            "unit": "ns",
            "range": "± 1500.0786707425839"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8361ae9a1d1b251f68d46b145a61d4163ecaecab",
          "message": "More logging",
          "timestamp": "2023-03-23T19:37:21+09:00",
          "tree_id": "c7a804c87d04f2578052416c55966df9db654b5d",
          "url": "https://github.com/planetarium/libplanet/commit/8361ae9a1d1b251f68d46b145a61d4163ecaecab"
        },
        "date": 1679568807730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126425.3,
            "unit": "ns",
            "range": "± 7451.224172780854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5858825.277180989,
            "unit": "ns",
            "range": "± 337761.63514312153"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6846434.02247191,
            "unit": "ns",
            "range": "± 430388.036383896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35162595.39622641,
            "unit": "ns",
            "range": "± 1453962.6229036096"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7623815.03125,
            "unit": "ns",
            "range": "± 351115.6830814835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39643079.7628866,
            "unit": "ns",
            "range": "± 2611083.3793987725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7081086.000901442,
            "unit": "ns",
            "range": "± 31495.39652917896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2183688.2899739584,
            "unit": "ns",
            "range": "± 9142.39991921974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1594143.398046875,
            "unit": "ns",
            "range": "± 7042.846780756561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118996.486458333,
            "unit": "ns",
            "range": "± 14279.629948650243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002648.9764322917,
            "unit": "ns",
            "range": "± 4487.799064506541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893052.6505859375,
            "unit": "ns",
            "range": "± 3418.991989656117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114382.10309278351,
            "unit": "ns",
            "range": "± 12453.778933256677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244168.9,
            "unit": "ns",
            "range": "± 12127.243173005776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212173.97,
            "unit": "ns",
            "range": "± 12808.386554535438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4662054.7727272725,
            "unit": "ns",
            "range": "± 112872.45177419207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11784487.533333333,
            "unit": "ns",
            "range": "± 203189.16120131811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22682.58510638298,
            "unit": "ns",
            "range": "± 2299.858235039971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62459.125,
            "unit": "ns",
            "range": "± 7094.159602688754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47450.69014084507,
            "unit": "ns",
            "range": "± 2340.7224806001936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111967.14285714286,
            "unit": "ns",
            "range": "± 15459.532710755542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6910.677083333333,
            "unit": "ns",
            "range": "± 825.9137267904421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21163.404494382023,
            "unit": "ns",
            "range": "± 1772.8298239044339"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "57902588f81bc45ac7d3c895aaeeb0004042e7c6",
          "message": "Even more logging",
          "timestamp": "2023-03-23T20:14:42+09:00",
          "tree_id": "8ffc356651c118f2d476bd744f639d6cffea2f23",
          "url": "https://github.com/planetarium/libplanet/commit/57902588f81bc45ac7d3c895aaeeb0004042e7c6"
        },
        "date": 1679571183575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107543.03225806452,
            "unit": "ns",
            "range": "± 3226.5835335420547"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4876363.287560096,
            "unit": "ns",
            "range": "± 132103.07753582718"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6049768.357142857,
            "unit": "ns",
            "range": "± 54339.110756302536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27087834.06451613,
            "unit": "ns",
            "range": "± 824250.7076887846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6749515.928571428,
            "unit": "ns",
            "range": "± 110562.28218621972"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29027262.846153848,
            "unit": "ns",
            "range": "± 389593.2525457044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5972738.017857143,
            "unit": "ns",
            "range": "± 45604.11740828173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814858.0763020834,
            "unit": "ns",
            "range": "± 13276.162913210717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337748.4690104167,
            "unit": "ns",
            "range": "± 11394.605538294149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601890.523177083,
            "unit": "ns",
            "range": "± 2901.757963136761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821186.9154897836,
            "unit": "ns",
            "range": "± 573.1222464749583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772005.3195963542,
            "unit": "ns",
            "range": "± 487.95215897563867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88820.92631578947,
            "unit": "ns",
            "range": "± 8113.671739123883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196441.3818181818,
            "unit": "ns",
            "range": "± 7926.807230533216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170124.42352941175,
            "unit": "ns",
            "range": "± 9084.145156438733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3678696.1333333333,
            "unit": "ns",
            "range": "± 36184.808576186195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9339594.266666668,
            "unit": "ns",
            "range": "± 158416.45735775356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16506.760869565216,
            "unit": "ns",
            "range": "± 1260.1256554260658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47754.82608695652,
            "unit": "ns",
            "range": "± 4036.0192841126977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39575.625,
            "unit": "ns",
            "range": "± 741.5705742993492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81119.94382022473,
            "unit": "ns",
            "range": "± 9992.063826265903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5123.03125,
            "unit": "ns",
            "range": "± 443.3044445887107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15645.86170212766,
            "unit": "ns",
            "range": "± 1219.0190891892648"
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
          "id": "fda564fa603611e27aef86aea50d932277227ee3",
          "message": "Merge pull request #2985 from greymistcube/refactor/account-state-delta-caching\n\n🔧 Added caching to `AccountStateDeltaImpl`",
          "timestamp": "2023-03-24T09:44:57+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/planetarium/libplanet/commit/fda564fa603611e27aef86aea50d932277227ee3"
        },
        "date": 1679619313223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100989.46666666666,
            "unit": "ns",
            "range": "± 3019.850918144154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4290635.788020833,
            "unit": "ns",
            "range": "± 17920.689615562802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6016716.615384615,
            "unit": "ns",
            "range": "± 40918.799425485064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24290302.42857143,
            "unit": "ns",
            "range": "± 218862.39480786317"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6788410.3125,
            "unit": "ns",
            "range": "± 129183.90075068371"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28154191.230769232,
            "unit": "ns",
            "range": "± 369899.3390133668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6206909.053125,
            "unit": "ns",
            "range": "± 38978.58957089865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882130.2359095982,
            "unit": "ns",
            "range": "± 13200.662336149659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372857.678013393,
            "unit": "ns",
            "range": "± 2802.6444257393223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537895.2391183036,
            "unit": "ns",
            "range": "± 6395.938939356268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805666.9236188616,
            "unit": "ns",
            "range": "± 1653.503817337627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751996.7401041667,
            "unit": "ns",
            "range": "± 3699.0826538609026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80390.8875,
            "unit": "ns",
            "range": "± 3881.524537345989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189155.41666666666,
            "unit": "ns",
            "range": "± 14024.675721303482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168765.88888888888,
            "unit": "ns",
            "range": "± 3593.2687869352885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3720495.6,
            "unit": "ns",
            "range": "± 38793.63960165193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9204849,
            "unit": "ns",
            "range": "± 44959.79275233965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14305.290322580646,
            "unit": "ns",
            "range": "± 1181.6127757235686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44867.80412371134,
            "unit": "ns",
            "range": "± 4570.910598646199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37199.8,
            "unit": "ns",
            "range": "± 856.4431710645827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74588.20833333333,
            "unit": "ns",
            "range": "± 9127.312675258245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3906.1020408163267,
            "unit": "ns",
            "range": "± 377.12084775337604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13617.282608695652,
            "unit": "ns",
            "range": "± 868.4287355363178"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "646fe97a1595f131c8571ad0153d8023f8e9beef",
          "message": "Remove logging from AccountStateDeltaImpl",
          "timestamp": "2023-03-24T15:00:36+09:00",
          "tree_id": "56d480473e97842fdb4390a3251fc9ebaf2cabd7",
          "url": "https://github.com/planetarium/libplanet/commit/646fe97a1595f131c8571ad0153d8023f8e9beef"
        },
        "date": 1679638676318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149360.89583333334,
            "unit": "ns",
            "range": "± 27253.832270740688"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6524756.02015625,
            "unit": "ns",
            "range": "± 533503.8803173418"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8174699.242105263,
            "unit": "ns",
            "range": "± 554340.7353045926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35858934.08695652,
            "unit": "ns",
            "range": "± 864057.7543606211"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8386715.234693877,
            "unit": "ns",
            "range": "± 503377.80079905683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40662839.568627454,
            "unit": "ns",
            "range": "± 1656317.0754271208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6993632.263020833,
            "unit": "ns",
            "range": "± 74200.14021280999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2285250.4616109915,
            "unit": "ns",
            "range": "± 64634.344396711545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1724192.5851779515,
            "unit": "ns",
            "range": "± 36063.07747047063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3257254.5377604165,
            "unit": "ns",
            "range": "± 47194.82692921017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029681.2986979167,
            "unit": "ns",
            "range": "± 15584.455027678554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965201.851964614,
            "unit": "ns",
            "range": "± 19150.57922390625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142235.84375,
            "unit": "ns",
            "range": "± 20100.321364976455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259345.2474226804,
            "unit": "ns",
            "range": "± 45384.18755745931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259775.04123711342,
            "unit": "ns",
            "range": "± 38229.438871306345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4863638.8877551025,
            "unit": "ns",
            "range": "± 329529.13399385475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12415924.662921349,
            "unit": "ns",
            "range": "± 685049.6800772082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24565.061855670105,
            "unit": "ns",
            "range": "± 9412.241699437707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69715.14893617021,
            "unit": "ns",
            "range": "± 13266.324272307293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67389.76041666667,
            "unit": "ns",
            "range": "± 16632.976741366463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142443.88888888888,
            "unit": "ns",
            "range": "± 36901.29613726294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7278.313253012048,
            "unit": "ns",
            "range": "± 1462.794535092125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23989.897959183672,
            "unit": "ns",
            "range": "± 8906.964846286612"
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
          "id": "b06a0868901ad6b9134bda33c895d740cf67a057",
          "message": "Merge pull request #2987 from greymistcube/optimization/state-cache\n\n♻️ Refactored to more granular caching scheme for `BlockChainStates<T>`",
          "timestamp": "2023-03-24T21:56:45+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/planetarium/libplanet/commit/b06a0868901ad6b9134bda33c895d740cf67a057"
        },
        "date": 1679663643811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129498.89247311828,
            "unit": "ns",
            "range": "± 8620.30022989511"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6027563.599609375,
            "unit": "ns",
            "range": "± 362237.0506571265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6740400.793814433,
            "unit": "ns",
            "range": "± 387159.6308483948"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33210885.18367347,
            "unit": "ns",
            "range": "± 1302747.1911726845"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7960764.791208792,
            "unit": "ns",
            "range": "± 918467.3099217764"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39132467.73,
            "unit": "ns",
            "range": "± 2819457.725294416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7202410.79,
            "unit": "ns",
            "range": "± 190422.74275995817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2161875.2397161988,
            "unit": "ns",
            "range": "± 86158.5693388192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1614434.5223067433,
            "unit": "ns",
            "range": "± 35680.10913822981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996662.527173913,
            "unit": "ns",
            "range": "± 73435.64436165136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016058.9994055707,
            "unit": "ns",
            "range": "± 25393.611564816256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916707.3702799479,
            "unit": "ns",
            "range": "± 16280.995777738086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113526.31914893616,
            "unit": "ns",
            "range": "± 11068.952879746033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229231.93258426967,
            "unit": "ns",
            "range": "± 23732.03332274264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214317.75510204083,
            "unit": "ns",
            "range": "± 18852.51929625575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4535740.8301886795,
            "unit": "ns",
            "range": "± 181526.49440675383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11359631.253333334,
            "unit": "ns",
            "range": "± 571174.1021212381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22059.510416666668,
            "unit": "ns",
            "range": "± 4098.186543735994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61244.68041237113,
            "unit": "ns",
            "range": "± 7694.45836103598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58904.54081632653,
            "unit": "ns",
            "range": "± 7510.014910919577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118058.93617021276,
            "unit": "ns",
            "range": "± 22647.73162930167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12915.11,
            "unit": "ns",
            "range": "± 5835.0421564523185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23614.418367346938,
            "unit": "ns",
            "range": "± 6233.348324827375"
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
          "id": "7c95388b8da3e5f1957ec79c31457793bae6918f",
          "message": "Merge pull request #2988 from greymistcube/optimization/account-state-delta-cache\n\n♻️ Reduced call to lower level `GetStates()` with empty addresses",
          "timestamp": "2023-03-25T09:28:13+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/planetarium/libplanet/commit/7c95388b8da3e5f1957ec79c31457793bae6918f"
        },
        "date": 1679704770395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102632.46031746031,
            "unit": "ns",
            "range": "± 4724.80153816145"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4489982.278245192,
            "unit": "ns",
            "range": "± 21619.319974354516"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5520211.177777777,
            "unit": "ns",
            "range": "± 203775.34491848983"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25873806,
            "unit": "ns",
            "range": "± 319983.5682649009"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6762313.571428572,
            "unit": "ns",
            "range": "± 71991.42194276107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29060415.466666665,
            "unit": "ns",
            "range": "± 518994.9438651136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6013780.356770833,
            "unit": "ns",
            "range": "± 31996.56625348385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841042.4828725962,
            "unit": "ns",
            "range": "± 3086.260597053027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331111.7791666666,
            "unit": "ns",
            "range": "± 561.6069002070835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506133.1018415177,
            "unit": "ns",
            "range": "± 2269.9868636009214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824538.017578125,
            "unit": "ns",
            "range": "± 209.321532980117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730777.151968149,
            "unit": "ns",
            "range": "± 328.78034827712094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88603.52631578948,
            "unit": "ns",
            "range": "± 7112.189927941226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205299.42857142858,
            "unit": "ns",
            "range": "± 18311.405842193708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170079.57142857142,
            "unit": "ns",
            "range": "± 3836.9732937750373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772817.8666666667,
            "unit": "ns",
            "range": "± 28231.453400840164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9553872.5,
            "unit": "ns",
            "range": "± 88053.63039014698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18427.774193548386,
            "unit": "ns",
            "range": "± 1748.9141856855088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50897.56565656565,
            "unit": "ns",
            "range": "± 6042.794878371581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44668.479166666664,
            "unit": "ns",
            "range": "± 2917.6465713569337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99295.17346938775,
            "unit": "ns",
            "range": "± 15768.37582587671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6449.464646464647,
            "unit": "ns",
            "range": "± 1264.143553856832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16488.76767676768,
            "unit": "ns",
            "range": "± 2894.147369519315"
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
          "id": "a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640",
          "message": "Merge pull request #2990 from greymistcube/refactor/faster-key-bytes-conversion\n\n♻️ Improved `KeyConverters` performance",
          "timestamp": "2023-03-25T12:11:30+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/planetarium/libplanet/commit/a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640"
        },
        "date": 1679714611810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103503.71428571429,
            "unit": "ns",
            "range": "± 5531.3493605728"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4477068.088727678,
            "unit": "ns",
            "range": "± 29655.322701575114"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6036826.8,
            "unit": "ns",
            "range": "± 63032.10247417014"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25488089.785714287,
            "unit": "ns",
            "range": "± 300878.28600952163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6840781.928571428,
            "unit": "ns",
            "range": "± 72815.80212422648"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28865769.2,
            "unit": "ns",
            "range": "± 422447.89281066536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6217312.818229167,
            "unit": "ns",
            "range": "± 32819.92364468131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862278.2133091518,
            "unit": "ns",
            "range": "± 1557.7047052847156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367146.9061197916,
            "unit": "ns",
            "range": "± 935.4254216846483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590382.013113839,
            "unit": "ns",
            "range": "± 2504.4781813009713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815490.6310847356,
            "unit": "ns",
            "range": "± 469.28045844362157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738062.6704477164,
            "unit": "ns",
            "range": "± 1132.0369871669147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90589.8350515464,
            "unit": "ns",
            "range": "± 8070.101109032562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195148.70588235295,
            "unit": "ns",
            "range": "± 9730.11015674874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177487.5357142857,
            "unit": "ns",
            "range": "± 4245.048274228351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777522.4,
            "unit": "ns",
            "range": "± 27178.388320239195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9484011.2,
            "unit": "ns",
            "range": "± 66954.51592280496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17883.373626373625,
            "unit": "ns",
            "range": "± 1338.308456791231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48588.22471910113,
            "unit": "ns",
            "range": "± 3168.7574771394984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47434.59793814433,
            "unit": "ns",
            "range": "± 2787.2210871665175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97855.09183673469,
            "unit": "ns",
            "range": "± 16100.470529774555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5998.8877551020405,
            "unit": "ns",
            "range": "± 1213.968051709009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16044.5,
            "unit": "ns",
            "range": "± 1839.523294664382"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "e4bb87e69b9e18864d0aefdf5507f2f8c642026b",
          "message": "Minor logging change",
          "timestamp": "2023-03-25T13:50:51+09:00",
          "tree_id": "859926b9eb3eeee5989fcf06a37bb87c324663b7",
          "url": "https://github.com/planetarium/libplanet/commit/e4bb87e69b9e18864d0aefdf5507f2f8c642026b"
        },
        "date": 1679720518149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102026.43478260869,
            "unit": "ns",
            "range": "± 3903.5786182662587"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4472528.611049107,
            "unit": "ns",
            "range": "± 29577.446750860796"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5999699.416666667,
            "unit": "ns",
            "range": "± 25244.43683254638"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24946302.85714286,
            "unit": "ns",
            "range": "± 218222.8784106382"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6271781.024390244,
            "unit": "ns",
            "range": "± 224052.12320869532"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28224456.153846152,
            "unit": "ns",
            "range": "± 274179.5423662039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095680.221153846,
            "unit": "ns",
            "range": "± 18718.204483970767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844689.126953125,
            "unit": "ns",
            "range": "± 2213.4080474308644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361827.655970982,
            "unit": "ns",
            "range": "± 1198.607927757337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569301.1853966345,
            "unit": "ns",
            "range": "± 1997.210892855766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806996.4049944197,
            "unit": "ns",
            "range": "± 1132.6723188646192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741338.037484976,
            "unit": "ns",
            "range": "± 647.7193561369636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86499.23232323233,
            "unit": "ns",
            "range": "± 8434.884539848616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195066.8260869565,
            "unit": "ns",
            "range": "± 12141.871065878227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169423.53846153847,
            "unit": "ns",
            "range": "± 1549.424711271069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3720803.4,
            "unit": "ns",
            "range": "± 28997.11826519515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9435698.8,
            "unit": "ns",
            "range": "± 65753.39106431807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14542.384615384615,
            "unit": "ns",
            "range": "± 765.9683834438365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44429.882978723406,
            "unit": "ns",
            "range": "± 2475.317874042973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38231.95744680851,
            "unit": "ns",
            "range": "± 1450.469203807285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84640.86458333333,
            "unit": "ns",
            "range": "± 13206.845996336255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4774.530612244898,
            "unit": "ns",
            "range": "± 567.4016778276947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13721.275,
            "unit": "ns",
            "range": "± 736.4316286464654"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "06084a521d1c6ce05229fb0a0d7e546cf9eac9b8",
          "message": "Increased cache count",
          "timestamp": "2023-03-25T13:53:05+09:00",
          "tree_id": "eae3ce2e84a24477f1735d138701afa6166a7122",
          "url": "https://github.com/planetarium/libplanet/commit/06084a521d1c6ce05229fb0a0d7e546cf9eac9b8"
        },
        "date": 1679720735976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108549.70707070707,
            "unit": "ns",
            "range": "± 7631.515530408613"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4540472.202566965,
            "unit": "ns",
            "range": "± 105929.87479320574"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6249527.846153846,
            "unit": "ns",
            "range": "± 158995.6350179947"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25836681.846153848,
            "unit": "ns",
            "range": "± 416493.10761600966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7027611.588235294,
            "unit": "ns",
            "range": "± 139184.96320861083"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29188331.866666667,
            "unit": "ns",
            "range": "± 404146.66161005513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133231.592708333,
            "unit": "ns",
            "range": "± 38474.038305490125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931183.3680245536,
            "unit": "ns",
            "range": "± 2458.216761602394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350496.78125,
            "unit": "ns",
            "range": "± 894.0496975412651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509582.771484375,
            "unit": "ns",
            "range": "± 4489.952152513092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826486.535016741,
            "unit": "ns",
            "range": "± 582.5847006214225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743012.8036358173,
            "unit": "ns",
            "range": "± 565.8137521327805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95604.49484536082,
            "unit": "ns",
            "range": "± 8105.800973330396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201707.45569620252,
            "unit": "ns",
            "range": "± 8767.20607455883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174237.51612903227,
            "unit": "ns",
            "range": "± 5200.398118548027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3798955.4166666665,
            "unit": "ns",
            "range": "± 10915.777159342539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9513423.866666667,
            "unit": "ns",
            "range": "± 74925.28404242519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18283.166666666668,
            "unit": "ns",
            "range": "± 1409.6629434141653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52872.784946236556,
            "unit": "ns",
            "range": "± 4972.362693689692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50357.86734693877,
            "unit": "ns",
            "range": "± 3329.8643408723883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103797.04301075269,
            "unit": "ns",
            "range": "± 13245.4450997101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7764.541666666667,
            "unit": "ns",
            "range": "± 791.9177511341713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17564.46875,
            "unit": "ns",
            "range": "± 1947.3707345958874"
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
          "id": "ca4d3168f49854f75a6d927521318b1e412b79ca",
          "message": "Merge pull request #2991 from greymistcube/refactor/remove-state-delta-cache\n\n♻️ Remove state delta cache",
          "timestamp": "2023-03-25T19:54:01+09:00",
          "tree_id": "51067fb468ca59e1b776c0eb20895db4da154a8b",
          "url": "https://github.com/planetarium/libplanet/commit/ca4d3168f49854f75a6d927521318b1e412b79ca"
        },
        "date": 1679742211061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102672.40909090909,
            "unit": "ns",
            "range": "± 2423.9436512995353"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4300297.492559524,
            "unit": "ns",
            "range": "± 101019.21046572455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5397107.206896552,
            "unit": "ns",
            "range": "± 225339.76159333021"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24594172.933333334,
            "unit": "ns",
            "range": "± 303963.6985056102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6102694.219512195,
            "unit": "ns",
            "range": "± 210556.21999106466"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27886313.333333332,
            "unit": "ns",
            "range": "± 404671.8148564811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6033643.713541667,
            "unit": "ns",
            "range": "± 36469.10066197706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2027278.05078125,
            "unit": "ns",
            "range": "± 5394.421655052689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348704.199609375,
            "unit": "ns",
            "range": "± 1100.9309069882718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562341.9817708335,
            "unit": "ns",
            "range": "± 1875.1053920037778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800989.9004657452,
            "unit": "ns",
            "range": "± 750.597901596177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725740.4214242789,
            "unit": "ns",
            "range": "± 468.9807491670261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86465.78350515464,
            "unit": "ns",
            "range": "± 8345.91632579821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188344.46376811594,
            "unit": "ns",
            "range": "± 6013.137354208676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170249.5,
            "unit": "ns",
            "range": "± 1876.9124307562336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3767428.285714286,
            "unit": "ns",
            "range": "± 14719.472123836356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9349323.933333334,
            "unit": "ns",
            "range": "± 101890.96485141545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14397.306666666667,
            "unit": "ns",
            "range": "± 743.3966780265439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44417.494505494506,
            "unit": "ns",
            "range": "± 3184.5661779332113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38057.73684210526,
            "unit": "ns",
            "range": "± 1148.1304588320381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81283.87234042553,
            "unit": "ns",
            "range": "± 8984.597552914036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4541.836734693878,
            "unit": "ns",
            "range": "± 376.61637058871116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14306.351063829787,
            "unit": "ns",
            "range": "± 1431.4944871800285"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ffb0168fccdeeab068171e6ce38db86f2842ab68",
          "message": "Removed unnecessary logging",
          "timestamp": "2023-03-25T21:33:31+09:00",
          "tree_id": "3c13c9cfbea7a0a6a8d5fd897110ac350025fbbd",
          "url": "https://github.com/planetarium/libplanet/commit/ffb0168fccdeeab068171e6ce38db86f2842ab68"
        },
        "date": 1679748429529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105939.62711864407,
            "unit": "ns",
            "range": "± 4700.636768670394"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4874164.712760417,
            "unit": "ns",
            "range": "± 54695.91766338945"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6142479.333333333,
            "unit": "ns",
            "range": "± 42661.35532417176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25635256.133333333,
            "unit": "ns",
            "range": "± 357698.6403232808"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6704463,
            "unit": "ns",
            "range": "± 48857.25807560906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29088515.884615384,
            "unit": "ns",
            "range": "± 786552.3981186417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5746613.059709822,
            "unit": "ns",
            "range": "± 21291.50663758356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836346.7140066964,
            "unit": "ns",
            "range": "± 5167.308007897564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342848.9574497768,
            "unit": "ns",
            "range": "± 4521.915740006644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604536.353125,
            "unit": "ns",
            "range": "± 7624.594234320143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826174.797014509,
            "unit": "ns",
            "range": "± 2032.4303855603137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753145.0580078125,
            "unit": "ns",
            "range": "± 829.1764775710702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87438.97590361445,
            "unit": "ns",
            "range": "± 4405.897306177598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190680.4745762712,
            "unit": "ns",
            "range": "± 8162.293831912719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170134.0303030303,
            "unit": "ns",
            "range": "± 4845.459881972301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3752973.1428571427,
            "unit": "ns",
            "range": "± 37572.85158166761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9540052.866666667,
            "unit": "ns",
            "range": "± 139234.86938256866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17199,
            "unit": "ns",
            "range": "± 976.4008662866872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50045.693181818184,
            "unit": "ns",
            "range": "± 3511.020889483536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39213.92857142857,
            "unit": "ns",
            "range": "± 692.7697435529482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85089.64893617021,
            "unit": "ns",
            "range": "± 12160.132354354902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5391.872093023256,
            "unit": "ns",
            "range": "± 319.2918560340765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15483.90322580645,
            "unit": "ns",
            "range": "± 1202.4680513202848"
          }
        ]
      }
    ]
  }
}