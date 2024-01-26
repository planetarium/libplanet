window.BENCHMARK_DATA = {
  "lastUpdate": 1706254239326,
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
          "id": "42fbee9dc6e6cde218c38433906f0c4d6353aca9",
          "message": "Merge pull request #3627 from greymistcube/release/4.0.0\n\n🚀 Release 4.0.0",
          "timestamp": "2024-01-22T18:01:32+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/planetarium/libplanet/commit/42fbee9dc6e6cde218c38433906f0c4d6353aca9"
        },
        "date": 1705914907742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055541.836734694,
            "unit": "ns",
            "range": "± 133246.3565378515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1816072.8813559322,
            "unit": "ns",
            "range": "± 79629.59039008411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631338.7096774194,
            "unit": "ns",
            "range": "± 153437.25883342992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11241306.593406593,
            "unit": "ns",
            "range": "± 1105201.7639631033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37382.02247191011,
            "unit": "ns",
            "range": "± 2562.427905759799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5378200,
            "unit": "ns",
            "range": "± 45760.48009430778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13978985.714285715,
            "unit": "ns",
            "range": "± 129197.29014271073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34650450,
            "unit": "ns",
            "range": "± 171821.53047081537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69964966.66666667,
            "unit": "ns",
            "range": "± 569694.2559286474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140691840,
            "unit": "ns",
            "range": "± 1110202.27745089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3436123.8020833335,
            "unit": "ns",
            "range": "± 9471.424686908096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077495.8426339286,
            "unit": "ns",
            "range": "± 4292.351612351821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751438.0143229166,
            "unit": "ns",
            "range": "± 1617.6753481392166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956232.8385416667,
            "unit": "ns",
            "range": "± 7898.297136993689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626415.1517427885,
            "unit": "ns",
            "range": "± 696.1486199341266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567587.9231770834,
            "unit": "ns",
            "range": "± 761.5395858610664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2308875,
            "unit": "ns",
            "range": "± 69805.69512173467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501715.3846153845,
            "unit": "ns",
            "range": "± 50764.554108611585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2933258.8235294116,
            "unit": "ns",
            "range": "± 56376.580452608265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009384.5679012346,
            "unit": "ns",
            "range": "± 156651.015126374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12723489.01098901,
            "unit": "ns",
            "range": "± 1423086.6924830491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188102.77777777778,
            "unit": "ns",
            "range": "± 9226.858715334198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180390.25974025973,
            "unit": "ns",
            "range": "± 9182.538631616042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159209.5744680851,
            "unit": "ns",
            "range": "± 11841.50772466579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2955616.6666666665,
            "unit": "ns",
            "range": "± 38061.222611296485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2612433.3333333335,
            "unit": "ns",
            "range": "± 45164.819853299006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15703.030303030304,
            "unit": "ns",
            "range": "± 2187.6021046936553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60465.591397849465,
            "unit": "ns",
            "range": "± 5931.117180189798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48922.82608695652,
            "unit": "ns",
            "range": "± 3865.971673513775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69176.76767676767,
            "unit": "ns",
            "range": "± 15446.483176008047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3260.4166666666665,
            "unit": "ns",
            "range": "± 788.5335045001564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11821.176470588236,
            "unit": "ns",
            "range": "± 1236.748243777769"
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
          "id": "c223d621dbf14ec8cf3ab832d7919c93a4621fba",
          "message": "Merge pull request #3628 from greymistcube/prepare/4.0.1\n\n🔧 Prepare 4.0.1",
          "timestamp": "2024-01-22T18:56:14+09:00",
          "tree_id": "944c887df52a61c35d84f4f3b2a40b6b0e31e8b6",
          "url": "https://github.com/planetarium/libplanet/commit/c223d621dbf14ec8cf3ab832d7919c93a4621fba"
        },
        "date": 1705918096321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950727.2727272727,
            "unit": "ns",
            "range": "± 107127.36632604888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1679677.7777777778,
            "unit": "ns",
            "range": "± 67529.48109981345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1436976.0416666667,
            "unit": "ns",
            "range": "± 125238.4872278248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10881369.892473118,
            "unit": "ns",
            "range": "± 925587.6365837691"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34019.354838709674,
            "unit": "ns",
            "range": "± 1562.347824424638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4922466.666666667,
            "unit": "ns",
            "range": "± 19626.318578693787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13230661.538461538,
            "unit": "ns",
            "range": "± 77474.54999827943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33101750,
            "unit": "ns",
            "range": "± 776111.8351850369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67193176.66666667,
            "unit": "ns",
            "range": "± 547160.6051330119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127298821.42857143,
            "unit": "ns",
            "range": "± 595314.3877605557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314770.763221154,
            "unit": "ns",
            "range": "± 8775.190609398538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054458.7630208333,
            "unit": "ns",
            "range": "± 1176.375648494226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747573.515625,
            "unit": "ns",
            "range": "± 3433.372596665242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987369.5913461538,
            "unit": "ns",
            "range": "± 2754.543102181552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607106.9185697115,
            "unit": "ns",
            "range": "± 893.0801325216993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563000.9556361607,
            "unit": "ns",
            "range": "± 1122.45186028445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2110559.6153846155,
            "unit": "ns",
            "range": "± 48116.4936851705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307957.5,
            "unit": "ns",
            "range": "± 81400.89739157577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2769860.8695652173,
            "unit": "ns",
            "range": "± 123096.88940662018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2743108.43373494,
            "unit": "ns",
            "range": "± 138140.6822725891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12354983.516483517,
            "unit": "ns",
            "range": "± 1497967.3483508492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170445.94594594595,
            "unit": "ns",
            "range": "± 8097.275699299289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157824.6913580247,
            "unit": "ns",
            "range": "± 7825.767228588477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142269.5652173913,
            "unit": "ns",
            "range": "± 3228.4861049173296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2822650,
            "unit": "ns",
            "range": "± 35666.10112180429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2398985.714285714,
            "unit": "ns",
            "range": "± 24292.56319068917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9486.813186813188,
            "unit": "ns",
            "range": "± 822.0852606780975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49711.95652173913,
            "unit": "ns",
            "range": "± 3616.046119251026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44475.862068965514,
            "unit": "ns",
            "range": "± 1937.0179961692054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47860.86956521739,
            "unit": "ns",
            "range": "± 6409.230234792633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2084.536082474227,
            "unit": "ns",
            "range": "± 333.6478327348461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8810.227272727272,
            "unit": "ns",
            "range": "± 639.8706357632117"
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
          "id": "3965ad5df6473ea47aaf3872edbeea838e4b31f0",
          "message": "Merge pull request #3633 from greymistcube/refactor/worldstate-behavior\n\n♻️ More strict `IWorld.SetAccount()` behavior",
          "timestamp": "2024-01-26T12:57:28+09:00",
          "tree_id": "5a63cc075cd49b1b9f5dc9186adce5c94e8cf63e",
          "url": "https://github.com/planetarium/libplanet/commit/3965ad5df6473ea47aaf3872edbeea838e4b31f0"
        },
        "date": 1706242220462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985574,
            "unit": "ns",
            "range": "± 107497.61906689145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725229.6296296297,
            "unit": "ns",
            "range": "± 71777.05427652318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1452143.1578947369,
            "unit": "ns",
            "range": "± 114797.9350142616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11055428.57142857,
            "unit": "ns",
            "range": "± 971421.1868626884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37926.666666666664,
            "unit": "ns",
            "range": "± 3805.6374504797986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5340014.285714285,
            "unit": "ns",
            "range": "± 76424.80323462108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14273286.666666666,
            "unit": "ns",
            "range": "± 127034.32532006381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35156853.333333336,
            "unit": "ns",
            "range": "± 472496.96426336456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70470186.66666667,
            "unit": "ns",
            "range": "± 1062526.1757223858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139921171.42857143,
            "unit": "ns",
            "range": "± 1965271.547660515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3363563.5881696427,
            "unit": "ns",
            "range": "± 12489.799407232102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088709.2354910714,
            "unit": "ns",
            "range": "± 1954.8428134269818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746744.453125,
            "unit": "ns",
            "range": "± 1910.5473881394987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967558.7611607143,
            "unit": "ns",
            "range": "± 4201.85108883364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636706.3541666666,
            "unit": "ns",
            "range": "± 1497.8536560723483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575449.5417668269,
            "unit": "ns",
            "range": "± 854.6318927689983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2206662.5,
            "unit": "ns",
            "range": "± 67442.44260490667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2354100,
            "unit": "ns",
            "range": "± 163276.69570916155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2947854.1666666665,
            "unit": "ns",
            "range": "± 75191.04930061514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2997457.2916666665,
            "unit": "ns",
            "range": "± 208429.79317533766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12526187.640449438,
            "unit": "ns",
            "range": "± 1514004.7368291027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188288.46153846153,
            "unit": "ns",
            "range": "± 9719.734654723954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173728,
            "unit": "ns",
            "range": "± 8771.106743935654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143956.25,
            "unit": "ns",
            "range": "± 5686.187304673474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909664.285714286,
            "unit": "ns",
            "range": "± 41373.76736983987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516666.6666666665,
            "unit": "ns",
            "range": "± 53081.95661095264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13306.25,
            "unit": "ns",
            "range": "± 2496.937598023037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62959.183673469386,
            "unit": "ns",
            "range": "± 8009.901562321551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48666.666666666664,
            "unit": "ns",
            "range": "± 4551.66795355508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65704.04040404041,
            "unit": "ns",
            "range": "± 13514.836285915031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2929.1666666666665,
            "unit": "ns",
            "range": "± 632.7744533180285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12422.47191011236,
            "unit": "ns",
            "range": "± 1438.571956757872"
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
          "id": "109625fd6caede15818989b09d5872f62c715068",
          "message": "Merge pull request #3637 from greymistcube/merge/3.9.6-to-4.0.1\n\n🔀 Merge 3.9.6 to 4.0-maintenance",
          "timestamp": "2024-01-26T15:49:42+09:00",
          "tree_id": "325a2bcac55fa63637e4047806c84fe2ec7ad395",
          "url": "https://github.com/planetarium/libplanet/commit/109625fd6caede15818989b09d5872f62c715068"
        },
        "date": 1706252523916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988895.3608247422,
            "unit": "ns",
            "range": "± 110886.80698184464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729562.6666666667,
            "unit": "ns",
            "range": "± 86364.54911677675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523926.2626262626,
            "unit": "ns",
            "range": "± 147470.30042458748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10991518.390804598,
            "unit": "ns",
            "range": "± 987375.3307855589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35163.23529411765,
            "unit": "ns",
            "range": "± 1678.1212319685055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4984876.923076923,
            "unit": "ns",
            "range": "± 35232.82451176634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13076166.666666666,
            "unit": "ns",
            "range": "± 220093.74842379804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33406723.529411763,
            "unit": "ns",
            "range": "± 653078.0442732435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67582722.22222222,
            "unit": "ns",
            "range": "± 1365596.9526636265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133173750,
            "unit": "ns",
            "range": "± 1416405.4980830878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3401164.0066964286,
            "unit": "ns",
            "range": "± 17243.499196969235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1119723.8541666667,
            "unit": "ns",
            "range": "± 3399.4456655673166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750219.6484375,
            "unit": "ns",
            "range": "± 2376.0795675705426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1995001.1997767857,
            "unit": "ns",
            "range": "± 7178.405384589534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642562.1694711539,
            "unit": "ns",
            "range": "± 1071.9735981889567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566738.5291466346,
            "unit": "ns",
            "range": "± 2321.621967428295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165250,
            "unit": "ns",
            "range": "± 68830.26689637083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321928.787878788,
            "unit": "ns",
            "range": "± 109349.28618549547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2912177.777777778,
            "unit": "ns",
            "range": "± 102856.87515998514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2905779.347826087,
            "unit": "ns",
            "range": "± 162352.95327444043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12452631.111111112,
            "unit": "ns",
            "range": "± 1462494.167290353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180692.1052631579,
            "unit": "ns",
            "range": "± 6243.5861827200415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169846.42857142858,
            "unit": "ns",
            "range": "± 6778.6822072975565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143190.9090909091,
            "unit": "ns",
            "range": "± 3464.638934105969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2829135.714285714,
            "unit": "ns",
            "range": "± 41959.937067175386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2483985.714285714,
            "unit": "ns",
            "range": "± 36243.53220056823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12524.444444444445,
            "unit": "ns",
            "range": "± 1080.7104520400292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64109.09090909091,
            "unit": "ns",
            "range": "± 8119.730201975661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50324.489795918365,
            "unit": "ns",
            "range": "± 5603.663404545386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63062.62626262626,
            "unit": "ns",
            "range": "± 15098.354997966147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2526.8041237113403,
            "unit": "ns",
            "range": "± 503.63583568171344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11182.417582417582,
            "unit": "ns",
            "range": "± 1398.061626887854"
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
          "id": "01c368ead33e909bb67e9a1fe6300edb539b037c",
          "message": "Merge pull request #3638 from greymistcube/chore/fix-changelog\n\n🧹 Fix changelog",
          "timestamp": "2024-01-26T16:17:16+09:00",
          "tree_id": "f4c0a18daa555aea8fd3e2452632ee0bd7a5d7b3",
          "url": "https://github.com/planetarium/libplanet/commit/01c368ead33e909bb67e9a1fe6300edb539b037c"
        },
        "date": 1706254186464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065927,
            "unit": "ns",
            "range": "± 157197.47527658747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1823588.6075949366,
            "unit": "ns",
            "range": "± 94663.01363574083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589140.625,
            "unit": "ns",
            "range": "± 135994.39119868143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11179673.626373626,
            "unit": "ns",
            "range": "± 934498.8373853021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37404.395604395606,
            "unit": "ns",
            "range": "± 3584.128968658977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5304742.857142857,
            "unit": "ns",
            "range": "± 60039.09898219165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13671663.333333334,
            "unit": "ns",
            "range": "± 108540.02465625734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33771176.92307692,
            "unit": "ns",
            "range": "± 337838.3566980077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69002053.33333333,
            "unit": "ns",
            "range": "± 658226.4122697628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137902166.66666666,
            "unit": "ns",
            "range": "± 1355010.7604563076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3346283.8020833335,
            "unit": "ns",
            "range": "± 13303.598999002672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088052.4489182692,
            "unit": "ns",
            "range": "± 2779.7234799921885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750358.0984933035,
            "unit": "ns",
            "range": "± 3745.106260770083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981680.2455357143,
            "unit": "ns",
            "range": "± 4596.787210325045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628881.8150111607,
            "unit": "ns",
            "range": "± 1138.2615289603384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570698.0208333334,
            "unit": "ns",
            "range": "± 2539.0964231042863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2293511.3636363638,
            "unit": "ns",
            "range": "± 85631.83013915429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2462535.714285714,
            "unit": "ns",
            "range": "± 57635.79864731889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2923855.5555555555,
            "unit": "ns",
            "range": "± 81106.30409593674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2934104.411764706,
            "unit": "ns",
            "range": "± 133839.6438980368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12661532.258064516,
            "unit": "ns",
            "range": "± 1516781.7849244308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187065.88235294117,
            "unit": "ns",
            "range": "± 10024.09659795046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175889.2857142857,
            "unit": "ns",
            "range": "± 9369.008354993503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149879.16666666666,
            "unit": "ns",
            "range": "± 5785.857972873989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2928836.8421052634,
            "unit": "ns",
            "range": "± 47884.493088708514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563436.8421052634,
            "unit": "ns",
            "range": "± 47852.37960559672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14866.666666666666,
            "unit": "ns",
            "range": "± 2104.9148834731222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67457.73195876289,
            "unit": "ns",
            "range": "± 9194.210531764296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58770.4081632653,
            "unit": "ns",
            "range": "± 9108.115891303602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82048.48484848485,
            "unit": "ns",
            "range": "± 15066.690952306652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5649.49494949495,
            "unit": "ns",
            "range": "± 1014.9267327908038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17492.85714285714,
            "unit": "ns",
            "range": "± 3706.535047973467"
          }
        ]
      }
    ]
  }
}