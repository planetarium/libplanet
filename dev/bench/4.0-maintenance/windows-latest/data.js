window.BENCHMARK_DATA = {
  "lastUpdate": 1707213683712,
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
          "id": "a53a465253e15d4ab870082cdd191b568e3edf8f",
          "message": "Merge pull request #3639 from greymistcube/release/4.0.1\n\n🚀 Release 4.0.1",
          "timestamp": "2024-01-26T16:46:01+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/planetarium/libplanet/commit/a53a465253e15d4ab870082cdd191b568e3edf8f"
        },
        "date": 1706255910123,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969232.2580645161,
            "unit": "ns",
            "range": "± 86251.07581092176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758130.5555555555,
            "unit": "ns",
            "range": "± 81096.92798907042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510460,
            "unit": "ns",
            "range": "± 133331.33862144285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11019846.067415731,
            "unit": "ns",
            "range": "± 856183.5020039086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35756.1797752809,
            "unit": "ns",
            "range": "± 2411.146231387007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5411080,
            "unit": "ns",
            "range": "± 82134.1081054985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14343846.666666666,
            "unit": "ns",
            "range": "± 149192.0472155971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34741685.71428572,
            "unit": "ns",
            "range": "± 165238.03742174202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70640838.46153846,
            "unit": "ns",
            "range": "± 974882.1266683659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137717164.70588234,
            "unit": "ns",
            "range": "± 2780410.8801446003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3410857.4479166665,
            "unit": "ns",
            "range": "± 43891.71882141315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059958.119419643,
            "unit": "ns",
            "range": "± 1580.5755832593234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757729.7084263393,
            "unit": "ns",
            "range": "± 1186.5742622875343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991019.2307692308,
            "unit": "ns",
            "range": "± 3329.686771182475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623863.4505208334,
            "unit": "ns",
            "range": "± 2616.2294041329324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575762.1158854166,
            "unit": "ns",
            "range": "± 1441.2856791231388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219769,
            "unit": "ns",
            "range": "± 161916.9631900465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320913.5135135134,
            "unit": "ns",
            "range": "± 78267.01150606232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2908327.5862068967,
            "unit": "ns",
            "range": "± 82867.30311834924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2954987.0967741935,
            "unit": "ns",
            "range": "± 201016.3459856839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12468394.382022472,
            "unit": "ns",
            "range": "± 1451101.4056226045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177440.9090909091,
            "unit": "ns",
            "range": "± 8259.949287844462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170382.85714285713,
            "unit": "ns",
            "range": "± 7666.168315786103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145065,
            "unit": "ns",
            "range": "± 3246.256953866455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2940793.3333333335,
            "unit": "ns",
            "range": "± 28491.012785154013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486457.1428571427,
            "unit": "ns",
            "range": "± 41393.89985317819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11986.206896551725,
            "unit": "ns",
            "range": "± 1141.8235531217215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57027.95698924731,
            "unit": "ns",
            "range": "± 5344.834271465704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47203.333333333336,
            "unit": "ns",
            "range": "± 3030.1648266067136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62659.183673469386,
            "unit": "ns",
            "range": "± 12082.165750545231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3994.8453608247423,
            "unit": "ns",
            "range": "± 1180.0751330265496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12871.578947368422,
            "unit": "ns",
            "range": "± 1761.6278230052212"
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
          "id": "cb924e8036545dc84ea88916181e404ed19895ec",
          "message": "Merge pull request #3640 from greymistcube/prepare/4.0.2\n\n🔧 Prepare 4.0.2",
          "timestamp": "2024-01-26T18:12:57+09:00",
          "tree_id": "45947cb5d90cbe1550fc6fa9f09310ccc7cd8312",
          "url": "https://github.com/planetarium/libplanet/commit/cb924e8036545dc84ea88916181e404ed19895ec"
        },
        "date": 1706261150310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996722.2222222222,
            "unit": "ns",
            "range": "± 73940.68162448173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749490,
            "unit": "ns",
            "range": "± 70004.95682158398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601534.375,
            "unit": "ns",
            "range": "± 129671.90892331226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11086613.043478262,
            "unit": "ns",
            "range": "± 956117.9587460898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37201.14942528736,
            "unit": "ns",
            "range": "± 4384.63210126676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5006142.857142857,
            "unit": "ns",
            "range": "± 45373.13190535891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12924442.857142856,
            "unit": "ns",
            "range": "± 119418.1001245734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34020630,
            "unit": "ns",
            "range": "± 774094.8059032019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66469340.90909091,
            "unit": "ns",
            "range": "± 1577575.4029701012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133232851.85185185,
            "unit": "ns",
            "range": "± 3605229.5212724153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3466162.6395089286,
            "unit": "ns",
            "range": "± 15675.818232083531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091192.1177455357,
            "unit": "ns",
            "range": "± 1277.8324950768144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741113.5951450893,
            "unit": "ns",
            "range": "± 1130.9259375615006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976871.8191964286,
            "unit": "ns",
            "range": "± 8712.048989455825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616144.4791666666,
            "unit": "ns",
            "range": "± 2686.7031101848147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567955.2433894231,
            "unit": "ns",
            "range": "± 1501.3308493651675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170268.4210526315,
            "unit": "ns",
            "range": "± 23286.09629589628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514850,
            "unit": "ns",
            "range": "± 49176.33684266405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2956368.1818181816,
            "unit": "ns",
            "range": "± 72353.62488937257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2786735.964912281,
            "unit": "ns",
            "range": "± 106425.33002498662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12652116.666666666,
            "unit": "ns",
            "range": "± 1290651.403971279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183697.36842105264,
            "unit": "ns",
            "range": "± 5507.561722837767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176142.3076923077,
            "unit": "ns",
            "range": "± 7016.041735120971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141281.81818181818,
            "unit": "ns",
            "range": "± 4404.5753587501595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2887243.75,
            "unit": "ns",
            "range": "± 56404.219330944856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518521.4285714286,
            "unit": "ns",
            "range": "± 32094.294450318364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11229.787234042553,
            "unit": "ns",
            "range": "± 1799.8703529913519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61020.61855670103,
            "unit": "ns",
            "range": "± 6585.715889716828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50865.463917525776,
            "unit": "ns",
            "range": "± 6080.558845722048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69445.45454545454,
            "unit": "ns",
            "range": "± 15828.32176651528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.4583333333335,
            "unit": "ns",
            "range": "± 622.2403989095275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12059.550561797752,
            "unit": "ns",
            "range": "± 1463.0850889569242"
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
          "id": "cebfa59eb4758e98836df6c9d4d6f167ebca4aa7",
          "message": "Merge pull request #3648 from greymistcube/chore/apv-parsing-log\n\n🔊 Added which string caused an APV parsing error to log",
          "timestamp": "2024-02-06T10:17:56+09:00",
          "tree_id": "00660c0b4df326a0cea1429d4df493cd2104ebb9",
          "url": "https://github.com/planetarium/libplanet/commit/cebfa59eb4758e98836df6c9d4d6f167ebca4aa7"
        },
        "date": 1707183020992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974553.1914893617,
            "unit": "ns",
            "range": "± 102218.33968618106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760307.2463768115,
            "unit": "ns",
            "range": "± 84639.8587074195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518677,
            "unit": "ns",
            "range": "± 135623.9131911955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11017392.47311828,
            "unit": "ns",
            "range": "± 1005662.6096257392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34844.94382022472,
            "unit": "ns",
            "range": "± 2443.3588671388716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5207485.714285715,
            "unit": "ns",
            "range": "± 56867.19829355269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13571153.333333334,
            "unit": "ns",
            "range": "± 253123.06963402682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32772028.57142857,
            "unit": "ns",
            "range": "± 495759.5174284394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63628128.571428575,
            "unit": "ns",
            "range": "± 606839.4457902625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131235080,
            "unit": "ns",
            "range": "± 849358.7086737852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298676.4583333335,
            "unit": "ns",
            "range": "± 6951.632784780159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1110562.8841145833,
            "unit": "ns",
            "range": "± 4365.045930802529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753360.6654575893,
            "unit": "ns",
            "range": "± 1750.8579687871156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981756.3802083333,
            "unit": "ns",
            "range": "± 2470.0007147831175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602862.890625,
            "unit": "ns",
            "range": "± 1704.1856021652989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572750.6380208334,
            "unit": "ns",
            "range": "± 1346.0040858411926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123495.652173913,
            "unit": "ns",
            "range": "± 81167.56045099063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312892.8571428573,
            "unit": "ns",
            "range": "± 33083.54144111108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834813.698630137,
            "unit": "ns",
            "range": "± 133529.68387743572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2791316.049382716,
            "unit": "ns",
            "range": "± 130005.26571719133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12325075,
            "unit": "ns",
            "range": "± 1420463.4108862737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168474.57627118644,
            "unit": "ns",
            "range": "± 7437.268529468815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166022.22222222222,
            "unit": "ns",
            "range": "± 8169.838418286353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140580,
            "unit": "ns",
            "range": "± 3753.640656991314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824480,
            "unit": "ns",
            "range": "± 27026.94951340236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484895.238095238,
            "unit": "ns",
            "range": "± 57663.93566338042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11225.263157894737,
            "unit": "ns",
            "range": "± 1525.4555246452692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54651.063829787236,
            "unit": "ns",
            "range": "± 5118.798260362539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44277.41935483871,
            "unit": "ns",
            "range": "± 2022.935649231266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58561.61616161616,
            "unit": "ns",
            "range": "± 14141.902616206447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2437.1134020618556,
            "unit": "ns",
            "range": "± 360.35849847433934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10726.373626373626,
            "unit": "ns",
            "range": "± 1602.2092500901629"
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
          "id": "8668a8f7757123df6f788b3e38c964dec763ece9",
          "message": "Merge pull request #3650 from greymistcube/chore/changelog-checker\n\n📈 Added GitHub action to check changelog",
          "timestamp": "2024-02-06T10:47:08+09:00",
          "tree_id": "d8093f71bda1d6357463a066a3fc42579702174f",
          "url": "https://github.com/planetarium/libplanet/commit/8668a8f7757123df6f788b3e38c964dec763ece9"
        },
        "date": 1707184761041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054711.3402061856,
            "unit": "ns",
            "range": "± 110936.02311344499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1797569.387755102,
            "unit": "ns",
            "range": "± 70916.92970206302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595770,
            "unit": "ns",
            "range": "± 160295.89302021725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11086073.033707865,
            "unit": "ns",
            "range": "± 926271.3352669844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35296.20253164557,
            "unit": "ns",
            "range": "± 1739.174799753053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5113784.615384615,
            "unit": "ns",
            "range": "± 41275.3931165177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13685058.333333334,
            "unit": "ns",
            "range": "± 82065.6993825771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33224133.333333332,
            "unit": "ns",
            "range": "± 688970.1086318877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67454613.33333333,
            "unit": "ns",
            "range": "± 517492.81550108315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136123193.33333334,
            "unit": "ns",
            "range": "± 1630366.4668966155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3394061.8024553573,
            "unit": "ns",
            "range": "± 5942.153059136089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079449.0494791667,
            "unit": "ns",
            "range": "± 3921.1239593528985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746080.4361979166,
            "unit": "ns",
            "range": "± 3425.444085041157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935917.0572916667,
            "unit": "ns",
            "range": "± 11206.928404768101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630534.6888950893,
            "unit": "ns",
            "range": "± 1147.7094549687379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558747.578125,
            "unit": "ns",
            "range": "± 1553.5771948546085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196148.717948718,
            "unit": "ns",
            "range": "± 76637.9831339487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2348252.9411764704,
            "unit": "ns",
            "range": "± 95082.39658936071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2887755,
            "unit": "ns",
            "range": "± 101116.829992303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915938.709677419,
            "unit": "ns",
            "range": "± 81347.39363749095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12665280.64516129,
            "unit": "ns",
            "range": "± 1776750.254113077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181808.4745762712,
            "unit": "ns",
            "range": "± 7646.574354382563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173900,
            "unit": "ns",
            "range": "± 8068.212710261683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142756.52173913043,
            "unit": "ns",
            "range": "± 5323.382474159036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2943878.5714285714,
            "unit": "ns",
            "range": "± 43692.16051089588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2574881.25,
            "unit": "ns",
            "range": "± 50005.70259147117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14000,
            "unit": "ns",
            "range": "± 2196.5295964409943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64316.32653061225,
            "unit": "ns",
            "range": "± 7157.631553753579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47251.57894736842,
            "unit": "ns",
            "range": "± 3637.858358684398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58761.22448979592,
            "unit": "ns",
            "range": "± 12234.652769166541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2847.9166666666665,
            "unit": "ns",
            "range": "± 754.352865450934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11272.043010752688,
            "unit": "ns",
            "range": "± 1639.6822061791124"
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
          "id": "9821f30849d2489011ec931e226194f82296bf1f",
          "message": "Merge pull request #3649 from greymistcube/chore/update-graphql-schema\n\n📝 Updated graphql schema",
          "timestamp": "2024-02-06T11:13:01+09:00",
          "tree_id": "73ebd0ce727580667e70013cc894375f97c0ab4d",
          "url": "https://github.com/planetarium/libplanet/commit/9821f30849d2489011ec931e226194f82296bf1f"
        },
        "date": 1707186379638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074468,
            "unit": "ns",
            "range": "± 131742.80413139853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871022.2222222222,
            "unit": "ns",
            "range": "± 89361.83011955452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1634785.7142857143,
            "unit": "ns",
            "range": "± 162570.56263374235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11167810.11235955,
            "unit": "ns",
            "range": "± 936301.042915557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37487.91208791209,
            "unit": "ns",
            "range": "± 4018.23164989098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5286530,
            "unit": "ns",
            "range": "± 127972.55942395324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14103646.153846154,
            "unit": "ns",
            "range": "± 168232.49099279553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35093085.71428572,
            "unit": "ns",
            "range": "± 327492.9167927919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69309473.33333333,
            "unit": "ns",
            "range": "± 519586.3649737805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140883826.66666666,
            "unit": "ns",
            "range": "± 792279.8355439345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3411824.939903846,
            "unit": "ns",
            "range": "± 6932.340949843345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088732.0162259615,
            "unit": "ns",
            "range": "± 3354.7307269982057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752351.4857700893,
            "unit": "ns",
            "range": "± 1461.0421368622115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988606.640625,
            "unit": "ns",
            "range": "± 5578.861492415309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628328.6063058035,
            "unit": "ns",
            "range": "± 1289.114035669614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564015.4157366072,
            "unit": "ns",
            "range": "± 1385.8485088575487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386416.2162162163,
            "unit": "ns",
            "range": "± 77989.8836513554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2431364.814814815,
            "unit": "ns",
            "range": "± 101837.50126143418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3052452.1739130435,
            "unit": "ns",
            "range": "± 75200.3679244216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3056925.5555555555,
            "unit": "ns",
            "range": "± 169330.10149456534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12471133.70786517,
            "unit": "ns",
            "range": "± 1310530.6039352412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192289.24731182796,
            "unit": "ns",
            "range": "± 16339.405970560278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179938.46153846153,
            "unit": "ns",
            "range": "± 11564.762275798257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156100,
            "unit": "ns",
            "range": "± 13551.77620453763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2923220,
            "unit": "ns",
            "range": "± 46802.42972935731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2604600,
            "unit": "ns",
            "range": "± 60139.16361240818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14193.617021276596,
            "unit": "ns",
            "range": "± 2421.789905498375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65312.903225806454,
            "unit": "ns",
            "range": "± 8124.857534623254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57347.916666666664,
            "unit": "ns",
            "range": "± 11096.988488268875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68710.98901098901,
            "unit": "ns",
            "range": "± 11692.813087528508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3813.5416666666665,
            "unit": "ns",
            "range": "± 1065.4003242336626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13023.655913978495,
            "unit": "ns",
            "range": "± 1753.1585067765902"
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
          "id": "aefc466003f3d23a70c1a2320daa38cf38489af4",
          "message": "Merge pull request #3652 from greymistcube/release/4.0.2\n\n🚀 Release 4.0.2",
          "timestamp": "2024-02-06T12:58:15+09:00",
          "tree_id": "ef42b44dbe32becfe4bec6a583d944ef92df7e9c",
          "url": "https://github.com/planetarium/libplanet/commit/aefc466003f3d23a70c1a2320daa38cf38489af4"
        },
        "date": 1707192671626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005537.7551020408,
            "unit": "ns",
            "range": "± 110579.1198903899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1845822.9166666667,
            "unit": "ns",
            "range": "± 137692.666531906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596906.3829787234,
            "unit": "ns",
            "range": "± 164998.39152589132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11345057.954545455,
            "unit": "ns",
            "range": "± 901628.5677533024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35729.710144927536,
            "unit": "ns",
            "range": "± 1734.8147646621196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5356250,
            "unit": "ns",
            "range": "± 41218.910361975504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14248021.42857143,
            "unit": "ns",
            "range": "± 167100.27012164067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34688606.666666664,
            "unit": "ns",
            "range": "± 593625.4765261953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71016756.66666667,
            "unit": "ns",
            "range": "± 445882.52371267136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137431680,
            "unit": "ns",
            "range": "± 1431192.1305580982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3410376.2834821427,
            "unit": "ns",
            "range": "± 6998.110400738304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1122002.8545673077,
            "unit": "ns",
            "range": "± 2331.2384632066646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756166.4778645834,
            "unit": "ns",
            "range": "± 1271.317270718082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989425.4464285714,
            "unit": "ns",
            "range": "± 3882.1789927094533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630591.0677083334,
            "unit": "ns",
            "range": "± 1608.4085033158133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570141.0091145834,
            "unit": "ns",
            "range": "± 1334.698690813733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2260477.922077922,
            "unit": "ns",
            "range": "± 114497.27142620686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2382513.2075471696,
            "unit": "ns",
            "range": "± 96067.84869546795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2968870.9677419355,
            "unit": "ns",
            "range": "± 90026.81894320302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2920570.253164557,
            "unit": "ns",
            "range": "± 151772.13383948815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12899872.826086957,
            "unit": "ns",
            "range": "± 1855189.9998725443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187992.70833333334,
            "unit": "ns",
            "range": "± 15583.366603304388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175845.2380952381,
            "unit": "ns",
            "range": "± 10624.549938157888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151074.24242424243,
            "unit": "ns",
            "range": "± 7098.646904783184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2906787.5,
            "unit": "ns",
            "range": "± 55988.92598838929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2652429.1666666665,
            "unit": "ns",
            "range": "± 64516.876654007414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13141.489361702128,
            "unit": "ns",
            "range": "± 2173.467057093966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62639.47368421053,
            "unit": "ns",
            "range": "± 9592.755175011209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46386.51685393258,
            "unit": "ns",
            "range": "± 2983.3702346673435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67569.69696969698,
            "unit": "ns",
            "range": "± 15638.626006674096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3057.2916666666665,
            "unit": "ns",
            "range": "± 618.4436819301319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12416.129032258064,
            "unit": "ns",
            "range": "± 1815.410501103685"
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
          "id": "a602c0a450304dcab4a19a850e010cb85f479d11",
          "message": "Merge pull request #3653 from greymistcube/prepare/4.0.3\n\n🔧 Prepare 4.0.3",
          "timestamp": "2024-02-06T14:34:19+09:00",
          "tree_id": "a9aeb51f656297f693ffd7fd27d8441e992b96d3",
          "url": "https://github.com/planetarium/libplanet/commit/a602c0a450304dcab4a19a850e010cb85f479d11"
        },
        "date": 1707198418179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927058,
            "unit": "ns",
            "range": "± 86227.8016288098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687007.5471698113,
            "unit": "ns",
            "range": "± 65063.051812650294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484451,
            "unit": "ns",
            "range": "± 179695.89602852633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10917528.089887641,
            "unit": "ns",
            "range": "± 1098639.5912040868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35424.705882352944,
            "unit": "ns",
            "range": "± 1927.4277135696723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5149161.538461538,
            "unit": "ns",
            "range": "± 63923.86797930721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12995950,
            "unit": "ns",
            "range": "± 131202.30855145334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33759573.333333336,
            "unit": "ns",
            "range": "± 275808.0970184748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67823400,
            "unit": "ns",
            "range": "± 1013304.3316651856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135421540,
            "unit": "ns",
            "range": "± 1424534.123243706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355169.6707589286,
            "unit": "ns",
            "range": "± 14643.491482787507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058007.71484375,
            "unit": "ns",
            "range": "± 3005.7537458069646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733325.8919270834,
            "unit": "ns",
            "range": "± 1555.3385473992435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913134.165736607,
            "unit": "ns",
            "range": "± 2747.2248725160266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607035.5608258928,
            "unit": "ns",
            "range": "± 2525.9335478972503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560617.7208533654,
            "unit": "ns",
            "range": "± 1647.1826427010972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2253437.2093023257,
            "unit": "ns",
            "range": "± 74298.69582671278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2343003.846153846,
            "unit": "ns",
            "range": "± 38220.165170247834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779380,
            "unit": "ns",
            "range": "± 50790.07495845733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2834942.4657534244,
            "unit": "ns",
            "range": "± 134580.14951632213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12559873.595505618,
            "unit": "ns",
            "range": "± 1478429.3118053048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176621.12676056338,
            "unit": "ns",
            "range": "± 8175.921363421072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166892.98245614034,
            "unit": "ns",
            "range": "± 7134.445109295036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145237.7358490566,
            "unit": "ns",
            "range": "± 6037.964074061031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843987.5,
            "unit": "ns",
            "range": "± 53475.94942277011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2469138.095238095,
            "unit": "ns",
            "range": "± 50167.942714351724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11596.808510638299,
            "unit": "ns",
            "range": "± 1637.9538853946647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57260.86956521739,
            "unit": "ns",
            "range": "± 5457.285814973988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44535.555555555555,
            "unit": "ns",
            "range": "± 1674.1559006848734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52565.625,
            "unit": "ns",
            "range": "± 10960.602443344647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2462.5,
            "unit": "ns",
            "range": "± 347.39633061723003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9437.931034482759,
            "unit": "ns",
            "range": "± 1376.821531670744"
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
          "id": "06ebc6e1fa1938652760331fdb6f0a3027418e0c",
          "message": "Merge pull request #3657 from greymistcube/revert/graphql-type-changes\n\n⏪ Revert graphql type changes",
          "timestamp": "2024-02-06T18:12:11+09:00",
          "tree_id": "958311acadc0b8cce6ebec4f5fc0e200ae4f6e8a",
          "url": "https://github.com/planetarium/libplanet/commit/06ebc6e1fa1938652760331fdb6f0a3027418e0c"
        },
        "date": 1707211483654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022959.5744680851,
            "unit": "ns",
            "range": "± 113714.42472797734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775751.7857142857,
            "unit": "ns",
            "range": "± 76162.17383994481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642241.6666666667,
            "unit": "ns",
            "range": "± 128495.60522213789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11101796.590909092,
            "unit": "ns",
            "range": "± 971675.6035292805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37089.88764044944,
            "unit": "ns",
            "range": "± 2920.8126571454322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5441393.333333333,
            "unit": "ns",
            "range": "± 50546.986156682084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14168053.333333334,
            "unit": "ns",
            "range": "± 209516.7394153462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35607421.428571425,
            "unit": "ns",
            "range": "± 271783.72391005605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72318284.61538461,
            "unit": "ns",
            "range": "± 434415.5822215901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145061626.66666666,
            "unit": "ns",
            "range": "± 1291653.635276814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3340271.9791666665,
            "unit": "ns",
            "range": "± 11660.363727577507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082965.2473958333,
            "unit": "ns",
            "range": "± 5725.579541675531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736921.7006138393,
            "unit": "ns",
            "range": "± 3821.374454597967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953723.5909598214,
            "unit": "ns",
            "range": "± 3595.4903006086697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619735.8774038461,
            "unit": "ns",
            "range": "± 920.6913430406137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570342.9966517857,
            "unit": "ns",
            "range": "± 661.5924376074189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2389088.4057971016,
            "unit": "ns",
            "range": "± 114228.81646351956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2463852.1739130435,
            "unit": "ns",
            "range": "± 173595.10328731066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3017894.4444444445,
            "unit": "ns",
            "range": "± 63644.97551650666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182822.222222222,
            "unit": "ns",
            "range": "± 86715.18070155053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12585430.43478261,
            "unit": "ns",
            "range": "± 1294447.2975353275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179934.72222222222,
            "unit": "ns",
            "range": "± 8306.04157720849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169759.3220338983,
            "unit": "ns",
            "range": "± 7368.762555640037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144044.68085106384,
            "unit": "ns",
            "range": "± 5135.037720984112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2907115.3846153845,
            "unit": "ns",
            "range": "± 23761.097272427123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548132.2580645164,
            "unit": "ns",
            "range": "± 76418.95657970726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14042.105263157895,
            "unit": "ns",
            "range": "± 1976.865073978668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62183.87096774193,
            "unit": "ns",
            "range": "± 5086.988737745772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48741.05263157895,
            "unit": "ns",
            "range": "± 2994.7647489336737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67904.08163265306,
            "unit": "ns",
            "range": "± 13817.111148431599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3085.2631578947367,
            "unit": "ns",
            "range": "± 673.1899957937062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12340.425531914894,
            "unit": "ns",
            "range": "± 1451.237451127887"
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
          "id": "c57e5060f0c17c297c25d36b05f3910af26937af",
          "message": "Merge pull request #3658 from greymistcube/release/4.0.3\n\n🚀 Release 4.0.3",
          "timestamp": "2024-02-06T18:47:26+09:00",
          "tree_id": "52802fbf3945f1888b4771fd252a9ead9b4186dc",
          "url": "https://github.com/planetarium/libplanet/commit/c57e5060f0c17c297c25d36b05f3910af26937af"
        },
        "date": 1707213620948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945873.6842105263,
            "unit": "ns",
            "range": "± 88952.61733023495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719247.8260869565,
            "unit": "ns",
            "range": "± 82444.5029179088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1522382.4742268042,
            "unit": "ns",
            "range": "± 166363.1619945186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10910439.56043956,
            "unit": "ns",
            "range": "± 822660.060059793"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34364.47368421053,
            "unit": "ns",
            "range": "± 1742.2364131478382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5013661.538461538,
            "unit": "ns",
            "range": "± 25333.263326488966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13546964.285714285,
            "unit": "ns",
            "range": "± 174622.523030251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32581636.666666668,
            "unit": "ns",
            "range": "± 228938.4005318794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64010026.666666664,
            "unit": "ns",
            "range": "± 440801.6082202103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128737556.66666667,
            "unit": "ns",
            "range": "± 522329.23315618065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3361116.5364583335,
            "unit": "ns",
            "range": "± 7716.736339210226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057598.5426682692,
            "unit": "ns",
            "range": "± 2313.3047495706533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745286.474609375,
            "unit": "ns",
            "range": "± 1237.2832829514596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911441.6616586538,
            "unit": "ns",
            "range": "± 3229.7130915376592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621563.4416852678,
            "unit": "ns",
            "range": "± 1649.2848153944933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576540.2413504465,
            "unit": "ns",
            "range": "± 1008.3302002630828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163376.923076923,
            "unit": "ns",
            "range": "± 21758.146131435995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2180474.5098039214,
            "unit": "ns",
            "range": "± 57569.178709226886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736416,
            "unit": "ns",
            "range": "± 71785.99956351749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2821512.345679012,
            "unit": "ns",
            "range": "± 148357.52456710447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12374800,
            "unit": "ns",
            "range": "± 1459629.472389026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169682.41758241758,
            "unit": "ns",
            "range": "± 9516.16861985249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161655.1724137931,
            "unit": "ns",
            "range": "± 6056.580368427852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139496.66666666666,
            "unit": "ns",
            "range": "± 3934.3301873366586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814653.3333333335,
            "unit": "ns",
            "range": "± 46295.739801946394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2528886.6666666665,
            "unit": "ns",
            "range": "± 37329.304204350665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13724.742268041236,
            "unit": "ns",
            "range": "± 2768.085639926199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56572.916666666664,
            "unit": "ns",
            "range": "± 6192.856311771298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47888.17204301075,
            "unit": "ns",
            "range": "± 4335.516855561985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55311.458333333336,
            "unit": "ns",
            "range": "± 12665.866852056954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2416.494845360825,
            "unit": "ns",
            "range": "± 461.3567880834237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10182.291666666666,
            "unit": "ns",
            "range": "± 1854.1841611632788"
          }
        ]
      }
    ]
  }
}