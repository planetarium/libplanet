window.BENCHMARK_DATA = {
  "lastUpdate": 1705918157528,
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
      }
    ]
  }
}