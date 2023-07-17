window.BENCHMARK_DATA = {
  "lastUpdate": 1689561431252,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f008d9dca7f4cc5df0bac2519b9e2f45108d698",
          "message": "Merge pull request #3294 from OnedgeLee/release/2.5.0\n\n🚀 Release 2.5.0",
          "timestamp": "2023-07-12T16:14:03+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/planetarium/libplanet/commit/6f008d9dca7f4cc5df0bac2519b9e2f45108d698"
        },
        "date": 1689147352004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8637589.92857143,
            "unit": "ns",
            "range": "± 412246.8026762951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21202994.033333335,
            "unit": "ns",
            "range": "± 939580.1611875482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51461270.44444445,
            "unit": "ns",
            "range": "± 2064232.8606376552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105221832.5862069,
            "unit": "ns",
            "range": "± 3036017.1980953403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224470892.94444445,
            "unit": "ns",
            "range": "± 4480114.007111039"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72773.28888888888,
            "unit": "ns",
            "range": "± 11666.587608019989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393389.9479166667,
            "unit": "ns",
            "range": "± 62319.80043113268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362037.94444444444,
            "unit": "ns",
            "range": "± 44369.3789913216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337589.3163265306,
            "unit": "ns",
            "range": "± 37545.727845596586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4550834.138297873,
            "unit": "ns",
            "range": "± 275580.0080569308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961157.376923077,
            "unit": "ns",
            "range": "± 182853.5075209206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23556.425531914894,
            "unit": "ns",
            "range": "± 4108.39431128215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118160.22988505747,
            "unit": "ns",
            "range": "± 14622.894331183445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119059.04347826086,
            "unit": "ns",
            "range": "± 4530.43104991872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133500.25,
            "unit": "ns",
            "range": "± 28295.128880134238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7799.370967741936,
            "unit": "ns",
            "range": "± 704.4942253876095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25085.8202247191,
            "unit": "ns",
            "range": "± 3457.8024371826546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1847890.3636363635,
            "unit": "ns",
            "range": "± 317245.4317671944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258378.7558139535,
            "unit": "ns",
            "range": "± 288829.07161744055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309072.5384615385,
            "unit": "ns",
            "range": "± 296838.6493653228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6692981.372093023,
            "unit": "ns",
            "range": "± 833784.6793747002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3652043.282608696,
            "unit": "ns",
            "range": "± 349389.3964223439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576114.74,
            "unit": "ns",
            "range": "± 139425.0331908799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600539.397058823,
            "unit": "ns",
            "range": "± 219428.44482421668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4212850.79032258,
            "unit": "ns",
            "range": "± 370659.82922801154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8204986.222222222,
            "unit": "ns",
            "range": "± 716989.2642903258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7405014.079166667,
            "unit": "ns",
            "range": "± 216462.74144750173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2082482.4921025815,
            "unit": "ns",
            "range": "± 50095.04236319573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480581.9978101326,
            "unit": "ns",
            "range": "± 44396.46361455999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106177.130095109,
            "unit": "ns",
            "range": "± 76998.3236043323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880646.8585759943,
            "unit": "ns",
            "range": "± 21070.44065925616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809189.8572591146,
            "unit": "ns",
            "range": "± 9728.749599289546"
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
          "id": "a3f262243c4d64169142eb375b8149c03b7c17b0",
          "message": "Merge pull request #3296 from OnedgeLee/prepare/2.5.1\n\n🔧 Prepare 2.5.1",
          "timestamp": "2023-07-14T17:25:05+09:00",
          "tree_id": "75db858d936a360210595e394dd591c0661c7cff",
          "url": "https://github.com/planetarium/libplanet/commit/a3f262243c4d64169142eb375b8149c03b7c17b0"
        },
        "date": 1689324032398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8258249.5,
            "unit": "ns",
            "range": "± 269420.38286634884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20151387.714285713,
            "unit": "ns",
            "range": "± 301247.0285290229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49154329.93333333,
            "unit": "ns",
            "range": "± 710536.9208501481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98816379.5625,
            "unit": "ns",
            "range": "± 1802704.6183454818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200640287.4,
            "unit": "ns",
            "range": "± 2400578.737293417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58118.3870967742,
            "unit": "ns",
            "range": "± 7673.481175354987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322504.887755102,
            "unit": "ns",
            "range": "± 23244.542697904253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298617.29032258067,
            "unit": "ns",
            "range": "± 17794.901324341685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287557.72631578945,
            "unit": "ns",
            "range": "± 18275.484630441177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208532.764705882,
            "unit": "ns",
            "range": "± 86206.1816501066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909672.5185185187,
            "unit": "ns",
            "range": "± 107627.45199114124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16900.114583333332,
            "unit": "ns",
            "range": "± 2103.590939171406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85565.57608695653,
            "unit": "ns",
            "range": "± 8040.94980890392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89314.39175257731,
            "unit": "ns",
            "range": "± 7868.562209245383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105624.6530612245,
            "unit": "ns",
            "range": "± 14342.412823871418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6362.510416666667,
            "unit": "ns",
            "range": "± 862.252350347521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17112.032258064515,
            "unit": "ns",
            "range": "± 2391.004402609065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587778.84375,
            "unit": "ns",
            "range": "± 137485.7066335359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965767.855072464,
            "unit": "ns",
            "range": "± 138708.6347520327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2062631.3631578947,
            "unit": "ns",
            "range": "± 180780.23990108498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5791410.4125,
            "unit": "ns",
            "range": "± 302299.7923486599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3249832.6272727274,
            "unit": "ns",
            "range": "± 137653.5486522508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429439.926229508,
            "unit": "ns",
            "range": "± 153910.47836967427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393958.989361702,
            "unit": "ns",
            "range": "± 171036.4086956815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3927402.1558441557,
            "unit": "ns",
            "range": "± 189095.4788044685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7232298.540540541,
            "unit": "ns",
            "range": "± 243214.64460414782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6127949.868229167,
            "unit": "ns",
            "range": "± 78695.48025260323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2031260.3613891602,
            "unit": "ns",
            "range": "± 61821.5594752315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273625.80703125,
            "unit": "ns",
            "range": "± 20029.943459482914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2383450.6065848214,
            "unit": "ns",
            "range": "± 20459.67612371765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 777952.1009375,
            "unit": "ns",
            "range": "± 20389.95517566271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 707651.6076822917,
            "unit": "ns",
            "range": "± 8170.059286006732"
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
          "id": "b5d7c4209ab65560065ef2a15a2ed2e3e42f032b",
          "message": "Merge pull request #3307 from greymistcube/merge/2.4.1-to-2.5.x\n\n🔀 Merge 2.4.1 to 2.5.x",
          "timestamp": "2023-07-17T11:21:58+09:00",
          "tree_id": "e42dafe523e0e77b5f490a7f80835e4746fbf95e",
          "url": "https://github.com/planetarium/libplanet/commit/b5d7c4209ab65560065ef2a15a2ed2e3e42f032b"
        },
        "date": 1689561375690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8129219.5,
            "unit": "ns",
            "range": "± 59905.61192029887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20318325.255813953,
            "unit": "ns",
            "range": "± 747782.4144891311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50085897.6,
            "unit": "ns",
            "range": "± 538966.9496939492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99446086.07142857,
            "unit": "ns",
            "range": "± 723818.7926506366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203000262.5,
            "unit": "ns",
            "range": "± 2075532.2874718588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59112.77777777778,
            "unit": "ns",
            "range": "± 4621.483002964702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311269.19178082194,
            "unit": "ns",
            "range": "± 15390.017465026489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300766.69620253163,
            "unit": "ns",
            "range": "± 15553.170904628263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294421.6282051282,
            "unit": "ns",
            "range": "± 10099.162073577889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4128326.785714286,
            "unit": "ns",
            "range": "± 69731.55037623663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3724165,
            "unit": "ns",
            "range": "± 59451.82911076315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21123.14,
            "unit": "ns",
            "range": "± 3457.5263914941834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122713.84042553192,
            "unit": "ns",
            "range": "± 11324.416124713009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121755.12195121951,
            "unit": "ns",
            "range": "± 6436.198158218707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120837.8735632184,
            "unit": "ns",
            "range": "± 8466.68057577466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8165.741935483871,
            "unit": "ns",
            "range": "± 1013.6633724658409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23413.58695652174,
            "unit": "ns",
            "range": "± 2567.5020406261046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646656.1515151516,
            "unit": "ns",
            "range": "± 212523.17448276532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103104.28,
            "unit": "ns",
            "range": "± 251206.79645037514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130233.9895833335,
            "unit": "ns",
            "range": "± 183681.52202411278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5874695.080645162,
            "unit": "ns",
            "range": "± 257528.13241283476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268914.2,
            "unit": "ns",
            "range": "± 163487.51648842925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3458488.9583333335,
            "unit": "ns",
            "range": "± 238812.63886975305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469994.209876543,
            "unit": "ns",
            "range": "± 234659.58854272912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3872876.966666667,
            "unit": "ns",
            "range": "± 115679.65655852741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7180252.881355932,
            "unit": "ns",
            "range": "± 314857.80121000024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6482361.11171875,
            "unit": "ns",
            "range": "± 36368.84803498173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2036497.9796875,
            "unit": "ns",
            "range": "± 14115.714736399783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301195.0388020833,
            "unit": "ns",
            "range": "± 7425.615519790403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2824716.5424479167,
            "unit": "ns",
            "range": "± 50011.93590089685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796264.783984375,
            "unit": "ns",
            "range": "± 4229.884255311908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796950.005078125,
            "unit": "ns",
            "range": "± 8122.465371153672"
          }
        ]
      }
    ]
  }
}