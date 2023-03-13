window.BENCHMARK_DATA = {
  "lastUpdate": 1678697848327,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0592dab33dbeb79fc063cbfd4701914bf1aae8d",
          "message": "Merge pull request #2904 from colibrishin/benchmark/spliting-merged-fix-fix\n\nci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:41:52+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/planetarium/libplanet/commit/e0592dab33dbeb79fc063cbfd4701914bf1aae8d"
        },
        "date": 1678355676749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196780.0465116279,
            "unit": "ns",
            "range": "± 7283.263540975911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194383.96296296295,
            "unit": "ns",
            "range": "± 4734.343025509545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161845.6,
            "unit": "ns",
            "range": "± 2784.605994186097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12097152.384615384,
            "unit": "ns",
            "range": "± 121088.25789930971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9927713.2,
            "unit": "ns",
            "range": "± 155509.38435725166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18148.04938271605,
            "unit": "ns",
            "range": "± 970.7110782982054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52283.055555555555,
            "unit": "ns",
            "range": "± 2937.0744917200536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40344.18518518518,
            "unit": "ns",
            "range": "± 1002.8976110419339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90189.23469387754,
            "unit": "ns",
            "range": "± 12135.485113680086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5574.958333333333,
            "unit": "ns",
            "range": "± 504.05308652471103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18515.452631578948,
            "unit": "ns",
            "range": "± 1210.6827401100786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3510159.0454545454,
            "unit": "ns",
            "range": "± 76035.54078723554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5578304,
            "unit": "ns",
            "range": "± 97414.57078164144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26218276.866666667,
            "unit": "ns",
            "range": "± 248076.52786557237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6657079,
            "unit": "ns",
            "range": "± 139289.9197201544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29583681.6,
            "unit": "ns",
            "range": "± 377105.40612782066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6507449.439174107,
            "unit": "ns",
            "range": "± 13575.316739845237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004164.794642857,
            "unit": "ns",
            "range": "± 4945.024573375908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407362.1261160714,
            "unit": "ns",
            "range": "± 597.4569921934878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644078.615364583,
            "unit": "ns",
            "range": "± 3441.9579923413435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844338.8083683894,
            "unit": "ns",
            "range": "± 2577.9701933823667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759568.6104166667,
            "unit": "ns",
            "range": "± 3327.5856069083065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8115253.5,
            "unit": "ns",
            "range": "± 46396.82202271716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22070534.333333332,
            "unit": "ns",
            "range": "± 71602.54245452728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56387704.13333333,
            "unit": "ns",
            "range": "± 614072.9216034139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115414945.26666667,
            "unit": "ns",
            "range": "± 494052.705492103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225695561.7857143,
            "unit": "ns",
            "range": "± 2340171.2637996646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46329.27777777778,
            "unit": "ns",
            "range": "± 1924.3049754040494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410482.1818181819,
            "unit": "ns",
            "range": "± 101645.05820469579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2697595.825,
            "unit": "ns",
            "range": "± 95481.3656992248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2234757.943661972,
            "unit": "ns",
            "range": "± 102112.21603718799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5426147.928571428,
            "unit": "ns",
            "range": "± 154017.0589870867"
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
          "id": "6105566dddbe83ae6c4adb218287356746a639ef",
          "message": "Merge pull request #2894 from greymistcube/refactor/block-commit-cache\n\n♻️ Refactor block commit cache",
          "timestamp": "2023-03-13T15:51:32+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/planetarium/libplanet/commit/6105566dddbe83ae6c4adb218287356746a639ef"
        },
        "date": 1678691050480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194561.63157894736,
            "unit": "ns",
            "range": "± 4275.499180869298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193718.45,
            "unit": "ns",
            "range": "± 6835.506639823921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161791.33333333334,
            "unit": "ns",
            "range": "± 4391.290418369245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11504725.6,
            "unit": "ns",
            "range": "± 162506.55425366695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9202065.42857143,
            "unit": "ns",
            "range": "± 60438.25179179451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17926.659793814433,
            "unit": "ns",
            "range": "± 1628.1190315731799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50903.71134020619,
            "unit": "ns",
            "range": "± 4677.949497284135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38091.04347826087,
            "unit": "ns",
            "range": "± 879.9370059199418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84063.91666666667,
            "unit": "ns",
            "range": "± 10804.145535435793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4875.778947368421,
            "unit": "ns",
            "range": "± 478.64245481577547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16191.410526315789,
            "unit": "ns",
            "range": "± 1436.4547337161996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271159,
            "unit": "ns",
            "range": "± 92922.55260448527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5142796.714285715,
            "unit": "ns",
            "range": "± 186738.97465796108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23575487.2,
            "unit": "ns",
            "range": "± 418129.7108219273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6106096.428571428,
            "unit": "ns",
            "range": "± 86314.79916312976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26849523.785714287,
            "unit": "ns",
            "range": "± 260818.45233984225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953363.081770834,
            "unit": "ns",
            "range": "± 21524.370839067495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871467.0894252232,
            "unit": "ns",
            "range": "± 3044.73548900006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380971.1053385416,
            "unit": "ns",
            "range": "± 1181.6073786030638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2515149.640925481,
            "unit": "ns",
            "range": "± 2779.7771741888837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813989.7823567708,
            "unit": "ns",
            "range": "± 1168.4048108282132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752437.3485576923,
            "unit": "ns",
            "range": "± 379.0759897651015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7812640.5,
            "unit": "ns",
            "range": "± 27469.14745323728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19841435.266666666,
            "unit": "ns",
            "range": "± 190121.84687212214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51048176.571428575,
            "unit": "ns",
            "range": "± 367450.94636379473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101462759.64285715,
            "unit": "ns",
            "range": "± 1198690.2695410524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201785247.66666666,
            "unit": "ns",
            "range": "± 2427769.7559376433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44498.333333333336,
            "unit": "ns",
            "range": "± 2239.030366471608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309308.4193548388,
            "unit": "ns",
            "range": "± 73780.83688596904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530271.338983051,
            "unit": "ns",
            "range": "± 110692.59518292715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085191.1686746988,
            "unit": "ns",
            "range": "± 110814.86166441265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5182800.711538462,
            "unit": "ns",
            "range": "± 210491.5077784297"
          }
        ]
      },
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
          "id": "b5d31eda81c48c6d63fff52f7727afb334c60a8a",
          "message": "Merge pull request #2921 from OnedgeLee/merge/0.51.1\n\nMerge 0.51.1 to main",
          "timestamp": "2023-03-13T17:40:15+09:00",
          "tree_id": "49d0d5313e846d8a0a998dd5a33189bc7e9b128f",
          "url": "https://github.com/planetarium/libplanet/commit/b5d31eda81c48c6d63fff52f7727afb334c60a8a"
        },
        "date": 1678697828302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225353.87234042553,
            "unit": "ns",
            "range": "± 12787.620399781352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228708.45614035087,
            "unit": "ns",
            "range": "± 9828.006201430859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196177.57142857142,
            "unit": "ns",
            "range": "± 10020.317279392866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14043190.486486487,
            "unit": "ns",
            "range": "± 467117.80828000157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11317900.933333334,
            "unit": "ns",
            "range": "± 326903.8578827361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22522.217391304348,
            "unit": "ns",
            "range": "± 2027.63769780017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63883.24731182796,
            "unit": "ns",
            "range": "± 5053.319764738204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50171.89247311828,
            "unit": "ns",
            "range": "± 5719.001528965724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104848.61797752809,
            "unit": "ns",
            "range": "± 11975.808594360717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6891.627659574468,
            "unit": "ns",
            "range": "± 790.5070100828722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21663.34831460674,
            "unit": "ns",
            "range": "± 1337.5634233146377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3938460.465116279,
            "unit": "ns",
            "range": "± 143940.50871211456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6247870.05,
            "unit": "ns",
            "range": "± 221832.85571983687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28555887.94117647,
            "unit": "ns",
            "range": "± 560573.8269037886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7963928.37037037,
            "unit": "ns",
            "range": "± 217840.55827620422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32786841.444444444,
            "unit": "ns",
            "range": "± 895100.843860294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6920785.194791666,
            "unit": "ns",
            "range": "± 51936.52880093273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2148329.9364583334,
            "unit": "ns",
            "range": "± 22608.881755715804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1606394.2615625,
            "unit": "ns",
            "range": "± 42882.495639278604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3045529.5078125,
            "unit": "ns",
            "range": "± 17273.342157324667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976759.3929361979,
            "unit": "ns",
            "range": "± 6673.333092479152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898809.619921875,
            "unit": "ns",
            "range": "± 6010.834353489138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9109794.957446808,
            "unit": "ns",
            "range": "± 352981.11985320714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25499698.5,
            "unit": "ns",
            "range": "± 616173.0292415743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 66043090.29545455,
            "unit": "ns",
            "range": "± 3634685.1434831284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 133694430,
            "unit": "ns",
            "range": "± 3923655.1809262033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 256852740.6111111,
            "unit": "ns",
            "range": "± 10324902.329170223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54971.97752808989,
            "unit": "ns",
            "range": "± 3191.2256336623745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636656.8604651163,
            "unit": "ns",
            "range": "± 88454.18841121194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131576.2448979593,
            "unit": "ns",
            "range": "± 122885.49412605802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2669158.8181818184,
            "unit": "ns",
            "range": "± 122639.11801227195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369589.465116279,
            "unit": "ns",
            "range": "± 234998.88954391624"
          }
        ]
      }
    ]
  }
}