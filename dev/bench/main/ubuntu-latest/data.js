window.BENCHMARK_DATA = {
  "lastUpdate": 1683019270159,
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
      },
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
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678703584783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208023.5744680851,
            "unit": "ns",
            "range": "± 7582.942152261966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201681.3064516129,
            "unit": "ns",
            "range": "± 8680.000063437163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179502.04166666666,
            "unit": "ns",
            "range": "± 3906.1200640418297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12372007.4,
            "unit": "ns",
            "range": "± 213572.8208918113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9596921.066666666,
            "unit": "ns",
            "range": "± 166606.5819067125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22380.892473118278,
            "unit": "ns",
            "range": "± 1750.6212218025173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59453.8125,
            "unit": "ns",
            "range": "± 6574.566362026032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43139.67857142857,
            "unit": "ns",
            "range": "± 1232.4580694113463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108097.74712643678,
            "unit": "ns",
            "range": "± 10308.11065653665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6682.724489795918,
            "unit": "ns",
            "range": "± 655.8079895730773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21069.43956043956,
            "unit": "ns",
            "range": "± 1395.4562392819478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663582.2682926827,
            "unit": "ns",
            "range": "± 131997.5630733432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5764188,
            "unit": "ns",
            "range": "± 103372.29797194217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25399188.6,
            "unit": "ns",
            "range": "± 399899.4416348047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6991826.631578947,
            "unit": "ns",
            "range": "± 151053.50254213111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29261751.733333334,
            "unit": "ns",
            "range": "± 533309.6886209024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876515.067708333,
            "unit": "ns",
            "range": "± 22763.512302532698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858791.781640625,
            "unit": "ns",
            "range": "± 7159.356802296024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349142.1735677083,
            "unit": "ns",
            "range": "± 4241.316029324148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665837.8,
            "unit": "ns",
            "range": "± 4658.126801203537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859835.9796316965,
            "unit": "ns",
            "range": "± 2311.7423809647944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764291.3981119791,
            "unit": "ns",
            "range": "± 1212.9948855819289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9131145.133333333,
            "unit": "ns",
            "range": "± 129180.08717338678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22634423.866666667,
            "unit": "ns",
            "range": "± 183667.64381227407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56875752.93333333,
            "unit": "ns",
            "range": "± 148328.3864367297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113648808.6,
            "unit": "ns",
            "range": "± 586738.9800362436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 226671660.6,
            "unit": "ns",
            "range": "± 599225.9609074026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50274.69892473118,
            "unit": "ns",
            "range": "± 3592.6687361206614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414343.4680851065,
            "unit": "ns",
            "range": "± 83613.8672365515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2675000.285714286,
            "unit": "ns",
            "range": "± 63221.58211334391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2304345.361445783,
            "unit": "ns",
            "range": "± 122466.94188025563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5509241.297297297,
            "unit": "ns",
            "range": "± 184302.62196586488"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba5b680d8f3173eec161e6af2e2edcb471a8f3b",
          "message": "Merge pull request #2925 from colibrishin/prepare/0.53\n\n🔧 Prepare 0.53.0",
          "timestamp": "2023-03-14T00:31:45+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/planetarium/libplanet/commit/4ba5b680d8f3173eec161e6af2e2edcb471a8f3b"
        },
        "date": 1678722337537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222058.8596491228,
            "unit": "ns",
            "range": "± 9024.756337111578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202418.2857142857,
            "unit": "ns",
            "range": "± 9120.152532023423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182400.94,
            "unit": "ns",
            "range": "± 11846.05468467554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11673077.066666666,
            "unit": "ns",
            "range": "± 79099.31221614171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10321448.714285715,
            "unit": "ns",
            "range": "± 154056.73936244726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23499.79797979798,
            "unit": "ns",
            "range": "± 2814.746546678172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58063.875,
            "unit": "ns",
            "range": "± 5510.743178937894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45980.28282828283,
            "unit": "ns",
            "range": "± 5553.875245783121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100761.38541666667,
            "unit": "ns",
            "range": "± 12007.612228012336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6382.260416666667,
            "unit": "ns",
            "range": "± 1037.3122784621062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20637.51020408163,
            "unit": "ns",
            "range": "± 2710.23401525045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470846.7333333334,
            "unit": "ns",
            "range": "± 35042.59832886391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5437667.222222222,
            "unit": "ns",
            "range": "± 151131.73927591817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24406324.846153848,
            "unit": "ns",
            "range": "± 234537.02072446406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6532462.121212121,
            "unit": "ns",
            "range": "± 204863.13223188755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27852970.846153848,
            "unit": "ns",
            "range": "± 290788.68365757924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6157013.740104167,
            "unit": "ns",
            "range": "± 34815.35597492936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861375.6697916666,
            "unit": "ns",
            "range": "± 3252.1289375513857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345459.8345052083,
            "unit": "ns",
            "range": "± 1231.134465720963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580322.64453125,
            "unit": "ns",
            "range": "± 6138.11021555187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835317.11171875,
            "unit": "ns",
            "range": "± 962.4302947155031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742945.8357121394,
            "unit": "ns",
            "range": "± 1453.3197721436366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8501166.733333332,
            "unit": "ns",
            "range": "± 100027.54434830628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20358555.266666666,
            "unit": "ns",
            "range": "± 161975.17963011964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52096579.85714286,
            "unit": "ns",
            "range": "± 214811.10148645527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103964383.73333333,
            "unit": "ns",
            "range": "± 1093478.7608114667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 208207783.46153846,
            "unit": "ns",
            "range": "± 732674.5168250151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51114.602040816324,
            "unit": "ns",
            "range": "± 7351.95588919689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375679.677777778,
            "unit": "ns",
            "range": "± 74781.34866903762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590785.411764706,
            "unit": "ns",
            "range": "± 82651.135639824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2214794.744680851,
            "unit": "ns",
            "range": "± 153449.91750474708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5215523.454545454,
            "unit": "ns",
            "range": "± 164464.20953149104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "955091416ce990cac6d02fd02e57820fc1368b60",
          "message": "Merge pull request #2703 from longfin/feature/eliminate-completer\n\nRemove StateCompleters",
          "timestamp": "2023-03-14T01:19:32+09:00",
          "tree_id": "c74812b0f7d4eac0d6d751aeaf7ca384424b21f3",
          "url": "https://github.com/planetarium/libplanet/commit/955091416ce990cac6d02fd02e57820fc1368b60"
        },
        "date": 1678725566468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275919.3645833333,
            "unit": "ns",
            "range": "± 33507.60632174504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276953.32653061225,
            "unit": "ns",
            "range": "± 30525.107879028033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242104.31578947368,
            "unit": "ns",
            "range": "± 29128.943684517842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13915236.739583334,
            "unit": "ns",
            "range": "± 1117999.3032353185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10619446.063829787,
            "unit": "ns",
            "range": "± 791104.8417205354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35150.15957446808,
            "unit": "ns",
            "range": "± 8839.273137420189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82593.1052631579,
            "unit": "ns",
            "range": "± 15415.468726335619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55779.89247311828,
            "unit": "ns",
            "range": "± 10829.057543060751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132649.46315789473,
            "unit": "ns",
            "range": "± 25256.159621060346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5605.285714285715,
            "unit": "ns",
            "range": "± 1056.7966474849068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 38192.72826086957,
            "unit": "ns",
            "range": "± 8052.296352700887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4202887.086021505,
            "unit": "ns",
            "range": "± 279702.02084748406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6787157.010526316,
            "unit": "ns",
            "range": "± 695256.2020462044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32775404.649484538,
            "unit": "ns",
            "range": "± 1899653.6009975993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7606339.826530612,
            "unit": "ns",
            "range": "± 636250.1867203424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38291925.97979798,
            "unit": "ns",
            "range": "± 2694142.406748343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614431.6126077585,
            "unit": "ns",
            "range": "± 165299.33876580486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112790.9833233175,
            "unit": "ns",
            "range": "± 56368.0883790342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1719660.502859933,
            "unit": "ns",
            "range": "± 48698.23044730436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3049368.6994977677,
            "unit": "ns",
            "range": "± 47124.39348825446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971667.4332339638,
            "unit": "ns",
            "range": "± 21247.999373547656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900921.3274507069,
            "unit": "ns",
            "range": "± 32228.042455886225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8847537.969072165,
            "unit": "ns",
            "range": "± 794931.6727618069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24644302.19148936,
            "unit": "ns",
            "range": "± 1432108.1656990352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 64378868.70454545,
            "unit": "ns",
            "range": "± 2417640.460240594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 127761536.08974358,
            "unit": "ns",
            "range": "± 6594153.620793092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 286326409.3968254,
            "unit": "ns",
            "range": "± 13028279.76741926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69289.73913043478,
            "unit": "ns",
            "range": "± 13678.948047618316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648905.5,
            "unit": "ns",
            "range": "± 201596.14396094653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3341594.7525773197,
            "unit": "ns",
            "range": "± 357253.03740095615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2844198.0888888887,
            "unit": "ns",
            "range": "± 233396.60400905213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7284941.315789473,
            "unit": "ns",
            "range": "± 780861.8417561956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d6a86e7ba818a9568589c6dd80d936725d1c9cb",
          "message": "Merge pull request #2889 from dahlia/bencodex-js",
          "timestamp": "2023-03-15T14:37:59+09:00",
          "tree_id": "a6706f9443e0d4bc7c974bb1d6daad4a58dd04b6",
          "url": "https://github.com/planetarium/libplanet/commit/1d6a86e7ba818a9568589c6dd80d936725d1c9cb"
        },
        "date": 1678859855992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251766.73033707865,
            "unit": "ns",
            "range": "± 18288.09281196874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254969.60824742267,
            "unit": "ns",
            "range": "± 16977.24930394393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230801.1011235955,
            "unit": "ns",
            "range": "± 17226.27149552059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15702121.76923077,
            "unit": "ns",
            "range": "± 767201.4577968139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12577747.550724637,
            "unit": "ns",
            "range": "± 567859.5525511085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26925.955056179777,
            "unit": "ns",
            "range": "± 2668.410434688992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74365.75510204081,
            "unit": "ns",
            "range": "± 8777.354953552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48902.51162790698,
            "unit": "ns",
            "range": "± 3294.105383307247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120968.37362637362,
            "unit": "ns",
            "range": "± 15888.816481096486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6047.213483146067,
            "unit": "ns",
            "range": "± 620.3244288989966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26421.94252873563,
            "unit": "ns",
            "range": "± 3512.793099105577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4325994.173913044,
            "unit": "ns",
            "range": "± 263980.89322177705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6807925.102564103,
            "unit": "ns",
            "range": "± 349844.3928177431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 35766564.96969697,
            "unit": "ns",
            "range": "± 2206826.2420117636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8451215.592105264,
            "unit": "ns",
            "range": "± 397415.3863771651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38161030.047619045,
            "unit": "ns",
            "range": "± 684779.2177617159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7593674.628645834,
            "unit": "ns",
            "range": "± 99868.8176617344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2429704.427734375,
            "unit": "ns",
            "range": "± 27647.884926467024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1786552.944140625,
            "unit": "ns",
            "range": "± 32208.942984602087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3369449.5703125,
            "unit": "ns",
            "range": "± 50628.490947020466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1097774.720497533,
            "unit": "ns",
            "range": "± 23261.934294848972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1005101.2505208333,
            "unit": "ns",
            "range": "± 13852.006473749741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10243578,
            "unit": "ns",
            "range": "± 531535.2014996097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 28932030.288135592,
            "unit": "ns",
            "range": "± 1281591.4463186136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 73487001.38181818,
            "unit": "ns",
            "range": "± 3091830.987854874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 145811951,
            "unit": "ns",
            "range": "± 5428508.471202794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 294451149.6666667,
            "unit": "ns",
            "range": "± 7334041.474792378"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64678.83870967742,
            "unit": "ns",
            "range": "± 9762.010432294384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1766138.4421052632,
            "unit": "ns",
            "range": "± 129184.22397735821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3500211.9569892474,
            "unit": "ns",
            "range": "± 251975.0482439513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2821087.755319149,
            "unit": "ns",
            "range": "± 168999.27313839275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7667402.152173913,
            "unit": "ns",
            "range": "± 545416.8795753913"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "265bb73ca9c75e7e0b3db07877b4499ac5eaff40",
          "message": "Merge pull request #2915 from planetarium/ci-account-web3-secret-storage\n\n`@planetarium/account-web3-secret-storage`",
          "timestamp": "2023-03-16T10:14:58+09:00",
          "tree_id": "58eff47933c90310496dfcf5e4afb42d5c5dff14",
          "url": "https://github.com/planetarium/libplanet/commit/265bb73ca9c75e7e0b3db07877b4499ac5eaff40"
        },
        "date": 1678930066286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324486.9411764704,
            "unit": "ns",
            "range": "± 107119.88031369657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5149754.121212121,
            "unit": "ns",
            "range": "± 161439.96495016298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23866667.055555556,
            "unit": "ns",
            "range": "± 490145.5489617311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6300016.692307692,
            "unit": "ns",
            "range": "± 201209.96283146535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27101862.615384616,
            "unit": "ns",
            "range": "± 326306.0088890331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7724385.333333333,
            "unit": "ns",
            "range": "± 59399.29787303486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20736596.933333334,
            "unit": "ns",
            "range": "± 355828.51487448416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51296518.14285714,
            "unit": "ns",
            "range": "± 662342.9744533192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103627175.06666666,
            "unit": "ns",
            "range": "± 1837318.3414789403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206862888.73333332,
            "unit": "ns",
            "range": "± 2831377.3523221486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356092.2112676057,
            "unit": "ns",
            "range": "± 64007.83954952381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469819,
            "unit": "ns",
            "range": "± 24250.420311259088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202055.35,
            "unit": "ns",
            "range": "± 141681.57171967378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5632306.02,
            "unit": "ns",
            "range": "± 344115.71437420906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48109.36111111111,
            "unit": "ns",
            "range": "± 2375.5188391351626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5839309.689583333,
            "unit": "ns",
            "range": "± 21106.151912674235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828175.2629743305,
            "unit": "ns",
            "range": "± 10748.964096261141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337395.0228794643,
            "unit": "ns",
            "range": "± 4045.331635087572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615516.9578125,
            "unit": "ns",
            "range": "± 10033.735606105916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808623.5610351562,
            "unit": "ns",
            "range": "± 2412.6460557973437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763493.4348707933,
            "unit": "ns",
            "range": "± 1722.914386532533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186727.69090909092,
            "unit": "ns",
            "range": "± 7934.610702188621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195558.16216216216,
            "unit": "ns",
            "range": "± 6279.7139509938115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164036.7142857143,
            "unit": "ns",
            "range": "± 3813.386541420331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12288623.533333333,
            "unit": "ns",
            "range": "± 227434.1335717934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9286152.466666667,
            "unit": "ns",
            "range": "± 117266.76822153755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18821.15625,
            "unit": "ns",
            "range": "± 1360.2649225571736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52503.2688172043,
            "unit": "ns",
            "range": "± 4152.765621533032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40395.73684210526,
            "unit": "ns",
            "range": "± 888.490407758217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88830.8817204301,
            "unit": "ns",
            "range": "± 12896.442150798854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5147.081632653061,
            "unit": "ns",
            "range": "± 493.62303897571087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16887.315217391304,
            "unit": "ns",
            "range": "± 1470.504996082009"
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
          "id": "9537674d4df800fc6b18690a8a0a32959fabe81e",
          "message": "Merge pull request #2948 from greymistcube/port/0.52.1-to-main\n\n🔀 Port 0.52.1 to main",
          "timestamp": "2023-03-16T10:54:39+09:00",
          "tree_id": "6ddce03a1f5692ba28751d1da2768d6c6078c57d",
          "url": "https://github.com/planetarium/libplanet/commit/9537674d4df800fc6b18690a8a0a32959fabe81e"
        },
        "date": 1678932406525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189692.66666666666,
            "unit": "ns",
            "range": "± 5575.156118632593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191011.85416666666,
            "unit": "ns",
            "range": "± 6508.5303861002885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161592.73333333334,
            "unit": "ns",
            "range": "± 2930.9045036513576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11241492.6,
            "unit": "ns",
            "range": "± 93989.80987532638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9158573.214285715,
            "unit": "ns",
            "range": "± 90447.17034411989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15519.5,
            "unit": "ns",
            "range": "± 951.1290167970939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48539.395604395606,
            "unit": "ns",
            "range": "± 2951.672937614723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39012.65217391304,
            "unit": "ns",
            "range": "± 977.5648599126139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85188.44897959183,
            "unit": "ns",
            "range": "± 10639.621803721975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4979.360824742268,
            "unit": "ns",
            "range": "± 444.1574698602355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16822.123711340206,
            "unit": "ns",
            "range": "± 1567.8980970934992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435654.40625,
            "unit": "ns",
            "range": "± 88074.02900707629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5283113.125,
            "unit": "ns",
            "range": "± 70505.05650979935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24643657.733333334,
            "unit": "ns",
            "range": "± 287200.77857148414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6379648.142857143,
            "unit": "ns",
            "range": "± 81247.68910404315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28014812.352941178,
            "unit": "ns",
            "range": "± 566216.659505986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908620.563151042,
            "unit": "ns",
            "range": "± 15631.052915787986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897620.764453125,
            "unit": "ns",
            "range": "± 7963.11617513793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336382.3625,
            "unit": "ns",
            "range": "± 1266.9852126285386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603139.4679129464,
            "unit": "ns",
            "range": "± 1754.140238543774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810799.2689732143,
            "unit": "ns",
            "range": "± 4983.89057514394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740706.6955078125,
            "unit": "ns",
            "range": "± 546.9149626722758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7616695.214285715,
            "unit": "ns",
            "range": "± 56124.568254194885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19469546.333333332,
            "unit": "ns",
            "range": "± 205433.615544802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52177490.266666666,
            "unit": "ns",
            "range": "± 325601.4269290132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104860636.71428572,
            "unit": "ns",
            "range": "± 723707.1834463936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 208914753.86666667,
            "unit": "ns",
            "range": "± 1523396.945669347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45704.393939393936,
            "unit": "ns",
            "range": "± 2163.8922757119362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1306583.193877551,
            "unit": "ns",
            "range": "± 85997.22588353102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2433265.3333333335,
            "unit": "ns",
            "range": "± 67942.71060182304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120141.4555555554,
            "unit": "ns",
            "range": "± 117124.8082098041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4910164.7727272725,
            "unit": "ns",
            "range": "± 119016.7884707795"
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
          "id": "f0a07124aa5701cca761c35b8836c3dc5fb885ab",
          "message": "Merge pull request #2952 from greymistcube/port/0.50.4-to-main\n\n🔀 Port 0.50.4 to main",
          "timestamp": "2023-03-17T14:28:20+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/planetarium/libplanet/commit/f0a07124aa5701cca761c35b8836c3dc5fb885ab"
        },
        "date": 1679031685548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425269,
            "unit": "ns",
            "range": "± 96070.74591578238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5340277.454545454,
            "unit": "ns",
            "range": "± 168091.4323210903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24582264.8125,
            "unit": "ns",
            "range": "± 471018.27299645444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6367962.555555556,
            "unit": "ns",
            "range": "± 133904.85006118522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27675765,
            "unit": "ns",
            "range": "± 861081.2496229714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7702953.642857143,
            "unit": "ns",
            "range": "± 23097.05523889985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21222853.2,
            "unit": "ns",
            "range": "± 383580.09220075916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51229196.666666664,
            "unit": "ns",
            "range": "± 674846.7143724107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101998936.86666666,
            "unit": "ns",
            "range": "± 1454350.5362622896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205003798.53333333,
            "unit": "ns",
            "range": "± 2413361.0023183394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332706.6382978724,
            "unit": "ns",
            "range": "± 75470.95251530015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600822.6315789474,
            "unit": "ns",
            "range": "± 88928.90892241323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2159665.1445783135,
            "unit": "ns",
            "range": "± 112976.70473383187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5582305.097222222,
            "unit": "ns",
            "range": "± 275804.99407208536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49556.8125,
            "unit": "ns",
            "range": "± 2547.9508673886517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926885.031770834,
            "unit": "ns",
            "range": "± 30273.696414501606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825240.7254464286,
            "unit": "ns",
            "range": "± 6415.677924295624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327832.941015625,
            "unit": "ns",
            "range": "± 5146.041332431061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582088.2838541665,
            "unit": "ns",
            "range": "± 5367.413372585473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826791.8104166667,
            "unit": "ns",
            "range": "± 4454.369687076169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863949.6680989583,
            "unit": "ns",
            "range": "± 2587.6646452125656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193723.72,
            "unit": "ns",
            "range": "± 7685.798517966465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196027.59615384616,
            "unit": "ns",
            "range": "± 8062.571917927283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162255.84615384616,
            "unit": "ns",
            "range": "± 2213.4495644488884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11290139.461538462,
            "unit": "ns",
            "range": "± 113919.99294506019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9297294.2,
            "unit": "ns",
            "range": "± 132579.64039679265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18673.691489361703,
            "unit": "ns",
            "range": "± 1730.600511268909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51772.131868131866,
            "unit": "ns",
            "range": "± 3157.6605095432114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39967.166666666664,
            "unit": "ns",
            "range": "± 464.040522002773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98569.69387755102,
            "unit": "ns",
            "range": "± 15785.652726714085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5960.419354838709,
            "unit": "ns",
            "range": "± 413.2312049588623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18176.510869565216,
            "unit": "ns",
            "range": "± 1325.9948742261265"
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
          "id": "f4d254fa828bb0582c3f318ffb8d162b9e915fdf",
          "message": "Merge pull request #2954 from greymistcube/refactor/bencodable-validator\n\n♻️ `IBencodable` `Validator` and `ValidatorSet`",
          "timestamp": "2023-03-17T16:46:11+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/planetarium/libplanet/commit/f4d254fa828bb0582c3f318ffb8d162b9e915fdf"
        },
        "date": 1679039928256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256399.8125,
            "unit": "ns",
            "range": "± 45585.42398796462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5162112.866666666,
            "unit": "ns",
            "range": "± 56021.75490935472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23614054.6,
            "unit": "ns",
            "range": "± 210240.9541025997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6312920.928571428,
            "unit": "ns",
            "range": "± 69612.05624742387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27216482,
            "unit": "ns",
            "range": "± 329390.01624915015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7791605.466666667,
            "unit": "ns",
            "range": "± 53133.05896905922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19561937.2,
            "unit": "ns",
            "range": "± 117553.32363363566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50978106,
            "unit": "ns",
            "range": "± 163591.45862046536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101433714.2,
            "unit": "ns",
            "range": "± 302232.04220674076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202162147.42857143,
            "unit": "ns",
            "range": "± 337724.18418897677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383296.59375,
            "unit": "ns",
            "range": "± 93306.02332411097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532003.4571428574,
            "unit": "ns",
            "range": "± 81841.41627538802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202490.714285714,
            "unit": "ns",
            "range": "± 106252.23802002954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5168823.170212766,
            "unit": "ns",
            "range": "± 197813.36486350608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45577.61842105263,
            "unit": "ns",
            "range": "± 2334.1217618459427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012650.6328125,
            "unit": "ns",
            "range": "± 7566.509763882542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889650.5640024038,
            "unit": "ns",
            "range": "± 5011.947431115437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340003.5779947916,
            "unit": "ns",
            "range": "± 396.08191990746684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553829.879206731,
            "unit": "ns",
            "range": "± 1576.8486980823288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835919.6960449219,
            "unit": "ns",
            "range": "± 691.4766980602518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754433.3073381697,
            "unit": "ns",
            "range": "± 516.3834348019814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201932.1935483871,
            "unit": "ns",
            "range": "± 6122.90854860855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202505.6857142857,
            "unit": "ns",
            "range": "± 6426.061984887279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174825,
            "unit": "ns",
            "range": "± 5774.202131585823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11543718.6,
            "unit": "ns",
            "range": "± 59458.63582813566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9374785.533333333,
            "unit": "ns",
            "range": "± 50363.15907041953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20401.03092783505,
            "unit": "ns",
            "range": "± 1504.6798417327318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56286.51685393258,
            "unit": "ns",
            "range": "± 3662.8413899605553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39990.32258064516,
            "unit": "ns",
            "range": "± 1221.5713483623397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90691.66666666667,
            "unit": "ns",
            "range": "± 13232.819381066523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5144.791666666667,
            "unit": "ns",
            "range": "± 732.3171288403558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19823.40425531915,
            "unit": "ns",
            "range": "± 1501.4276741244844"
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
          "id": "e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491",
          "message": "Merge pull request #2955 from greymistcube/refactor/bencodable-blockcommit\n\n♻️ `IBencodable` `BlockCommit`",
          "timestamp": "2023-03-17T17:32:41+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/planetarium/libplanet/commit/e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491"
        },
        "date": 1679042962507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3579707.1578947366,
            "unit": "ns",
            "range": "± 74494.70317729768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5614169,
            "unit": "ns",
            "range": "± 86620.17754624414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25486102.933333334,
            "unit": "ns",
            "range": "± 382477.0697312579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6800456.066666666,
            "unit": "ns",
            "range": "± 86672.43594663653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28893139.866666667,
            "unit": "ns",
            "range": "± 418763.4843742547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8131608.6,
            "unit": "ns",
            "range": "± 213172.29586064882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21995778.4,
            "unit": "ns",
            "range": "± 298083.8054471067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56207963.6,
            "unit": "ns",
            "range": "± 342246.97383756575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111285360.13333334,
            "unit": "ns",
            "range": "± 740873.0237956595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222022912.6,
            "unit": "ns",
            "range": "± 1016785.8727266735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427982.8210526316,
            "unit": "ns",
            "range": "± 104863.7305727669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658679.588235294,
            "unit": "ns",
            "range": "± 85165.263842014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224286.2625,
            "unit": "ns",
            "range": "± 115272.9511010186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5655297.433734939,
            "unit": "ns",
            "range": "± 300607.6149785262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48471.59420289855,
            "unit": "ns",
            "range": "± 2354.427508276822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5945029.634375,
            "unit": "ns",
            "range": "± 42435.11416160304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827876.0439453125,
            "unit": "ns",
            "range": "± 3612.2451765114665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321982.1881510417,
            "unit": "ns",
            "range": "± 6516.620314923746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576531.7073102677,
            "unit": "ns",
            "range": "± 4069.6814978058187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824695.1668526785,
            "unit": "ns",
            "range": "± 1992.9381574290046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771782.0829326923,
            "unit": "ns",
            "range": "± 711.4474205366595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203844.84745762713,
            "unit": "ns",
            "range": "± 8780.18724726411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203696.5294117647,
            "unit": "ns",
            "range": "± 6380.066486949538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179310.1052631579,
            "unit": "ns",
            "range": "± 6137.618412088192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12263964.066666666,
            "unit": "ns",
            "range": "± 154538.44969986627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9900437,
            "unit": "ns",
            "range": "± 74452.92403722172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21162.228260869564,
            "unit": "ns",
            "range": "± 1564.4384879212255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57242.45054945055,
            "unit": "ns",
            "range": "± 3475.782368406784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44155.15151515151,
            "unit": "ns",
            "range": "± 1410.7494045987605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103808.54639175258,
            "unit": "ns",
            "range": "± 17530.296723351912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5644.854166666667,
            "unit": "ns",
            "range": "± 620.8929389731105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18632.614583333332,
            "unit": "ns",
            "range": "± 1681.6042301125603"
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
          "id": "bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1",
          "message": "Merge pull request #2959 from greymistcube/refactor/bencodable-blockhash\n\n♻️ `IBencodable` for `BlockHash`",
          "timestamp": "2023-03-17T18:04:31+09:00",
          "tree_id": "edaa51dbf9a310e61f1217962dc2578ac1139cee",
          "url": "https://github.com/planetarium/libplanet/commit/bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1"
        },
        "date": 1679044614333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332871.2,
            "unit": "ns",
            "range": "± 61648.19499524239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5225632.94117647,
            "unit": "ns",
            "range": "± 86998.54817069549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23887526.4,
            "unit": "ns",
            "range": "± 286690.23768540553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6394936.24,
            "unit": "ns",
            "range": "± 147480.8620104882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27420597.6875,
            "unit": "ns",
            "range": "± 505480.05268387776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7820160.357142857,
            "unit": "ns",
            "range": "± 34565.11657416642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19971775.6,
            "unit": "ns",
            "range": "± 125855.57588351589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50653818,
            "unit": "ns",
            "range": "± 156953.94600100283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102812342.23076923,
            "unit": "ns",
            "range": "± 167142.72717907585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204755389.46666667,
            "unit": "ns",
            "range": "± 652681.2351981923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391410.4848484849,
            "unit": "ns",
            "range": "± 96149.85420434928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2506683.7741935486,
            "unit": "ns",
            "range": "± 75747.32086162506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160772.015625,
            "unit": "ns",
            "range": "± 99226.88248711063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5151851.571428572,
            "unit": "ns",
            "range": "± 65820.41173201082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45745.76119402985,
            "unit": "ns",
            "range": "± 2166.4890259780686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6078345.810825893,
            "unit": "ns",
            "range": "± 25506.37039154621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871381.7624162945,
            "unit": "ns",
            "range": "± 6925.134772655987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351204.8102463942,
            "unit": "ns",
            "range": "± 2011.4941303999512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533515.255989583,
            "unit": "ns",
            "range": "± 1061.7071625826898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811119.7758789062,
            "unit": "ns",
            "range": "± 529.2381003181331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759451.3007161458,
            "unit": "ns",
            "range": "± 412.721082048082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198484.48888888888,
            "unit": "ns",
            "range": "± 7485.238493261927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198951.4642857143,
            "unit": "ns",
            "range": "± 5482.127753197745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179206.86666666667,
            "unit": "ns",
            "range": "± 6771.657617667117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11294145.57142857,
            "unit": "ns",
            "range": "± 50916.9757345823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9275597.538461538,
            "unit": "ns",
            "range": "± 67487.11929893904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18743.795698924732,
            "unit": "ns",
            "range": "± 1386.7817260237723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55554.063157894736,
            "unit": "ns",
            "range": "± 4942.3607457013395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39632.20930232558,
            "unit": "ns",
            "range": "± 1307.917329521934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91182.02272727272,
            "unit": "ns",
            "range": "± 8269.611899297015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4747.917525773196,
            "unit": "ns",
            "range": "± 648.2314187802181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18641.520833333332,
            "unit": "ns",
            "range": "± 1489.6397019637554"
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
          "id": "e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb",
          "message": "Merge pull request #2961 from greymistcube/refactor/bencodable-vote\n\n♻️ `IBencodable` for `VoteMetadata` and `Vote`",
          "timestamp": "2023-03-20T09:53:41+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/planetarium/libplanet/commit/e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb"
        },
        "date": 1679274690068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3970946.443298969,
            "unit": "ns",
            "range": "± 228536.89859580886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6295890.528735632,
            "unit": "ns",
            "range": "± 342427.50806200487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30814962.57142857,
            "unit": "ns",
            "range": "± 1024849.7186668013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7759342.415094339,
            "unit": "ns",
            "range": "± 323724.7637986886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36294509.94444445,
            "unit": "ns",
            "range": "± 637703.9836051052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10127911,
            "unit": "ns",
            "range": "± 536539.674945794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25881705.155555554,
            "unit": "ns",
            "range": "± 971814.7802514763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 66970465.190476194,
            "unit": "ns",
            "range": "± 1580494.115812097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 128516996.76923077,
            "unit": "ns",
            "range": "± 3416509.897160684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 266360453.03125,
            "unit": "ns",
            "range": "± 8089739.665636238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1791857.3737373736,
            "unit": "ns",
            "range": "± 204307.54116909872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335222.8854166665,
            "unit": "ns",
            "range": "± 218118.4068924066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2698794.216494845,
            "unit": "ns",
            "range": "± 211292.93671746866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6937651.147368421,
            "unit": "ns",
            "range": "± 459416.4484207683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61242.05434782609,
            "unit": "ns",
            "range": "± 7388.080777065342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8299977.4,
            "unit": "ns",
            "range": "± 115544.62344688168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275970.732421875,
            "unit": "ns",
            "range": "± 28787.936460600857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1656916.1767578125,
            "unit": "ns",
            "range": "± 9377.721798512806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3133352.5770089286,
            "unit": "ns",
            "range": "± 39310.848001043836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016245.1820591518,
            "unit": "ns",
            "range": "± 10470.5866341248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 950375.0618722098,
            "unit": "ns",
            "range": "± 5602.04374082525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235773.04918032786,
            "unit": "ns",
            "range": "± 10547.49399213897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242215.20430107528,
            "unit": "ns",
            "range": "± 14037.701489946665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232374.25,
            "unit": "ns",
            "range": "± 9000.717209011498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15555958.142857144,
            "unit": "ns",
            "range": "± 439374.2909088816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12529757.025,
            "unit": "ns",
            "range": "± 437940.91554938105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26672.32222222222,
            "unit": "ns",
            "range": "± 2812.4910020441444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71225.35164835164,
            "unit": "ns",
            "range": "± 6792.660726227693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54999.85263157895,
            "unit": "ns",
            "range": "± 7378.116087412024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132931.73626373627,
            "unit": "ns",
            "range": "± 14627.813935433767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8152.438775510204,
            "unit": "ns",
            "range": "± 1794.875167622233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25370.96875,
            "unit": "ns",
            "range": "± 3858.4183327617684"
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
          "id": "8546675a24fce872d823d8e90984403e68d6a1b5",
          "message": "Merge pull request #2970 from greymistcube/refactor/lastcommit-encoding\n\n♻️ Refactor `Block<T>.LastCommit` encoding",
          "timestamp": "2023-03-21T13:40:04+09:00",
          "tree_id": "db3ec865d2318a231fde499a7a361a3f9994869d",
          "url": "https://github.com/planetarium/libplanet/commit/8546675a24fce872d823d8e90984403e68d6a1b5"
        },
        "date": 1679374396535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384326.6666666665,
            "unit": "ns",
            "range": "± 82403.12641212561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5262588.2727272725,
            "unit": "ns",
            "range": "± 124109.54533075927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24875127.933333334,
            "unit": "ns",
            "range": "± 439341.5198545053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6394460.421052632,
            "unit": "ns",
            "range": "± 109372.52234111322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28061812.25,
            "unit": "ns",
            "range": "± 614861.1395090829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7659990.866666666,
            "unit": "ns",
            "range": "± 77377.31423344281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21152664.466666665,
            "unit": "ns",
            "range": "± 257690.07941458523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54055841.733333334,
            "unit": "ns",
            "range": "± 612397.0332896167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106006806.3125,
            "unit": "ns",
            "range": "± 2020032.2622720888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208651153,
            "unit": "ns",
            "range": "± 2170339.437344882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370594.0487804879,
            "unit": "ns",
            "range": "± 67034.04271995169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619111.769230769,
            "unit": "ns",
            "range": "± 90631.7895728766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2281485.1616161615,
            "unit": "ns",
            "range": "± 146626.98250055654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5288684.303030303,
            "unit": "ns",
            "range": "± 164218.23447996815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47047.88157894737,
            "unit": "ns",
            "range": "± 2301.8427340841818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887418.802455357,
            "unit": "ns",
            "range": "± 20950.87698309496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862253.4630301339,
            "unit": "ns",
            "range": "± 5782.2816500124045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358437.0494791667,
            "unit": "ns",
            "range": "± 5666.2443154177145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676428.9244791665,
            "unit": "ns",
            "range": "± 5056.598077575628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827280.2363932292,
            "unit": "ns",
            "range": "± 1721.422671098356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759831.2509114583,
            "unit": "ns",
            "range": "± 720.7128838843778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200583.5483870968,
            "unit": "ns",
            "range": "± 6130.191061942031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198349.02325581395,
            "unit": "ns",
            "range": "± 7291.4456417822485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167663.90476190476,
            "unit": "ns",
            "range": "± 6040.665145937376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11789481.384615384,
            "unit": "ns",
            "range": "± 194561.631219835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9555474.727272727,
            "unit": "ns",
            "range": "± 224193.00333931705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18580.45054945055,
            "unit": "ns",
            "range": "± 1310.08584335986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52157.27272727273,
            "unit": "ns",
            "range": "± 2957.8556722122953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41932.67692307692,
            "unit": "ns",
            "range": "± 1950.0032781037537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97293.97959183673,
            "unit": "ns",
            "range": "± 13478.893307824013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5770.895833333333,
            "unit": "ns",
            "range": "± 481.4658424604392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18614.369565217392,
            "unit": "ns",
            "range": "± 1356.9674716306004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba9be20de483f0da4aa96b1a5f62d63fec62c0d",
          "message": "Merge pull request #2566 from longfin/feature/fee-calculator\n\nIntroduce `IFeeCalculator`",
          "timestamp": "2023-03-22T14:22:57+09:00",
          "tree_id": "0788e90971d1d5d79c82dfad36e3b0bb1589462e",
          "url": "https://github.com/planetarium/libplanet/commit/4ba9be20de483f0da4aa96b1a5f62d63fec62c0d"
        },
        "date": 1679463344799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174843.3571428573,
            "unit": "ns",
            "range": "± 46876.61935271741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5018138.333333333,
            "unit": "ns",
            "range": "± 69249.9083049075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22882329.6,
            "unit": "ns",
            "range": "± 182127.2904939996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6085302.857142857,
            "unit": "ns",
            "range": "± 75882.7224419946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26262228.666666668,
            "unit": "ns",
            "range": "± 352815.32875280856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529438.928571428,
            "unit": "ns",
            "range": "± 7197.817377129368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19144594.230769232,
            "unit": "ns",
            "range": "± 73046.75994657331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48825916,
            "unit": "ns",
            "range": "± 238626.07735674377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97251487.57142857,
            "unit": "ns",
            "range": "± 601642.0969244492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196573342.46666667,
            "unit": "ns",
            "range": "± 1509017.488061064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298586.642857143,
            "unit": "ns",
            "range": "± 90183.28011233339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470101.592592593,
            "unit": "ns",
            "range": "± 102415.07212016238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2049250.5416666667,
            "unit": "ns",
            "range": "± 100910.94821714216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5067402.529411765,
            "unit": "ns",
            "range": "± 205756.0656097752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44249.26373626374,
            "unit": "ns",
            "range": "± 2484.371969980721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5947206.538020833,
            "unit": "ns",
            "range": "± 26601.37683065742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847171.5154947916,
            "unit": "ns",
            "range": "± 2605.6193179771917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347817.998325893,
            "unit": "ns",
            "range": "± 2020.9233026702325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566420.40078125,
            "unit": "ns",
            "range": "± 3891.607936052094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798404.4753417969,
            "unit": "ns",
            "range": "± 693.4185036355356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736005.0053335336,
            "unit": "ns",
            "range": "± 687.8986984548729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195279.08,
            "unit": "ns",
            "range": "± 7895.205679915074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190087.12,
            "unit": "ns",
            "range": "± 4899.280876822639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156507.15384615384,
            "unit": "ns",
            "range": "± 1690.8218340082358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11123592.4,
            "unit": "ns",
            "range": "± 60322.50771809806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9151054.666666666,
            "unit": "ns",
            "range": "± 69901.41404830363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15588.719101123595,
            "unit": "ns",
            "range": "± 876.1452114591616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48193.69512195122,
            "unit": "ns",
            "range": "± 2457.8751170649457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37656.125,
            "unit": "ns",
            "range": "± 451.7522735600416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83294.59183673469,
            "unit": "ns",
            "range": "± 10847.030266615886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.833333333333,
            "unit": "ns",
            "range": "± 362.4236156667809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15714.81914893617,
            "unit": "ns",
            "range": "± 937.9706069031812"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b740bd81750f48dc355432d961edd8a2c76ab9",
          "message": "Merge pull request #2962 from planetarium/ci-account-aws-kms\n\n@planetarium/account-aws-kms",
          "timestamp": "2023-03-22T16:14:26+09:00",
          "tree_id": "a4ed25d72aa552b1640f782fcbd91e7e597231f9",
          "url": "https://github.com/planetarium/libplanet/commit/d6b740bd81750f48dc355432d961edd8a2c76ab9"
        },
        "date": 1679469960269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165588.7333333334,
            "unit": "ns",
            "range": "± 40790.27040933495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4892648,
            "unit": "ns",
            "range": "± 42278.007793650824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22600818,
            "unit": "ns",
            "range": "± 150632.61638597967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6052637.5625,
            "unit": "ns",
            "range": "± 106081.4665886357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26153117.8,
            "unit": "ns",
            "range": "± 355918.1315459658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487407.866666666,
            "unit": "ns",
            "range": "± 6786.498022509386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997752.07142857,
            "unit": "ns",
            "range": "± 27207.143576823535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48318291.53333333,
            "unit": "ns",
            "range": "± 168468.91410111694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96428350.14285715,
            "unit": "ns",
            "range": "± 727285.6781311916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194181175.2142857,
            "unit": "ns",
            "range": "± 1159600.4373747536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314962.7525773195,
            "unit": "ns",
            "range": "± 104228.6385415727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424703.21875,
            "unit": "ns",
            "range": "± 74646.89192273714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2020938.9523809524,
            "unit": "ns",
            "range": "± 103320.74183447687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4918316.303030303,
            "unit": "ns",
            "range": "± 154113.2414493651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45214.4375,
            "unit": "ns",
            "range": "± 1771.0665245293612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056793.318638393,
            "unit": "ns",
            "range": "± 22667.734510044727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847415.0768229167,
            "unit": "ns",
            "range": "± 3819.52699923853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331468.016015625,
            "unit": "ns",
            "range": "± 4545.64037489831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548261.328385417,
            "unit": "ns",
            "range": "± 6083.172060796685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807294.208608774,
            "unit": "ns",
            "range": "± 1015.0933741792658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731387.8197544643,
            "unit": "ns",
            "range": "± 1027.8568125092138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186885.3142857143,
            "unit": "ns",
            "range": "± 6100.988506075102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188972.70731707316,
            "unit": "ns",
            "range": "± 6628.14317604826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158364.14285714287,
            "unit": "ns",
            "range": "± 805.3475940565957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11112807.153846154,
            "unit": "ns",
            "range": "± 57143.85352022583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9018517.461538462,
            "unit": "ns",
            "range": "± 20765.48255966852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15708.489361702128,
            "unit": "ns",
            "range": "± 1148.9360552377987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47064.26436781609,
            "unit": "ns",
            "range": "± 2570.800949571988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38076.692307692305,
            "unit": "ns",
            "range": "± 527.8684155190232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79828.70103092784,
            "unit": "ns",
            "range": "± 9957.361866316287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4282.4639175257735,
            "unit": "ns",
            "range": "± 429.86640516404606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15161.775280898877,
            "unit": "ns",
            "range": "± 859.9125319262656"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0db1e21533d957abbfa6ae62a87c21d9b69ec6e8",
          "message": "Merge pull request #2980 from moreal/remove-unused-logic\n\nRemove unused logic",
          "timestamp": "2023-03-23T10:55:24+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/planetarium/libplanet/commit/0db1e21533d957abbfa6ae62a87c21d9b69ec6e8"
        },
        "date": 1679537378008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3646093.2666666666,
            "unit": "ns",
            "range": "± 64010.22891077272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5757684.733333333,
            "unit": "ns",
            "range": "± 97658.2236603515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25998137.333333332,
            "unit": "ns",
            "range": "± 437660.4324946236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6993692.357142857,
            "unit": "ns",
            "range": "± 195437.34480148085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29698519.733333334,
            "unit": "ns",
            "range": "± 428507.22831734066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583843.07142857,
            "unit": "ns",
            "range": "± 147739.5130270032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21902968.85714286,
            "unit": "ns",
            "range": "± 195954.1001121111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55718670.166666664,
            "unit": "ns",
            "range": "± 199532.37720146237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111160793.92857143,
            "unit": "ns",
            "range": "± 458841.93683219235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222990055.13333333,
            "unit": "ns",
            "range": "± 603699.4226710917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460744.914893617,
            "unit": "ns",
            "range": "± 99869.43564740072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2749620.5428571426,
            "unit": "ns",
            "range": "± 88978.00108398998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309502.0823529414,
            "unit": "ns",
            "range": "± 120578.13688387291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502309.384615385,
            "unit": "ns",
            "range": "± 149260.14459595754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53839.11827956989,
            "unit": "ns",
            "range": "± 3482.7838623018297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149812.5453125,
            "unit": "ns",
            "range": "± 22911.83347129873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865397.8678850445,
            "unit": "ns",
            "range": "± 1319.9726245670392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361413.8061197917,
            "unit": "ns",
            "range": "± 2383.370805571791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645138.4308035714,
            "unit": "ns",
            "range": "± 2183.899563335132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835983.3020182292,
            "unit": "ns",
            "range": "± 308.3552410689257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755622.0505208333,
            "unit": "ns",
            "range": "± 381.73372581669406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217991.45454545456,
            "unit": "ns",
            "range": "± 6830.787427572447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209902.90384615384,
            "unit": "ns",
            "range": "± 8236.558662355066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188171.57746478874,
            "unit": "ns",
            "range": "± 9128.304266967774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12563592.357142856,
            "unit": "ns",
            "range": "± 65208.06661119719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10330026.785714285,
            "unit": "ns",
            "range": "± 57431.07448087205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24349.26595744681,
            "unit": "ns",
            "range": "± 1745.0473091872786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63159.96666666667,
            "unit": "ns",
            "range": "± 4040.597729310895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49291.77777777778,
            "unit": "ns",
            "range": "± 2266.9368237169765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113080.27835051547,
            "unit": "ns",
            "range": "± 14005.214747358592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7781.082474226804,
            "unit": "ns",
            "range": "± 773.966389640929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22809.21505376344,
            "unit": "ns",
            "range": "± 2208.8929936954864"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a",
          "message": "Merge pull request #2971 from dahlia/remove-libplanet-node",
          "timestamp": "2023-03-23T11:48:34+09:00",
          "tree_id": "cd57406b44f9089bd65f630219bca8b26ec2ad22",
          "url": "https://github.com/planetarium/libplanet/commit/d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a"
        },
        "date": 1679540437794,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3172449.8695652173,
            "unit": "ns",
            "range": "± 78130.72362236856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4952423.2,
            "unit": "ns",
            "range": "± 56666.30371519619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23122762.214285713,
            "unit": "ns",
            "range": "± 182086.46375498842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5935666.857142857,
            "unit": "ns",
            "range": "± 56401.85031451627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26410691.266666666,
            "unit": "ns",
            "range": "± 307345.8345411256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7675086.142857143,
            "unit": "ns",
            "range": "± 11468.64019071903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19143405.2,
            "unit": "ns",
            "range": "± 97579.97963663303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48586857.6,
            "unit": "ns",
            "range": "± 314032.0566086026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100672988.2,
            "unit": "ns",
            "range": "± 912056.8533295811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199082566.8,
            "unit": "ns",
            "range": "± 1941576.2649696767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298446.1958762887,
            "unit": "ns",
            "range": "± 89532.03828968143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2465732.75,
            "unit": "ns",
            "range": "± 58470.57253402365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2034279.75,
            "unit": "ns",
            "range": "± 111290.35279691101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5052241.461538462,
            "unit": "ns",
            "range": "± 173620.84757852854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44486.28787878788,
            "unit": "ns",
            "range": "± 1893.7890205385481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940750.353794643,
            "unit": "ns",
            "range": "± 13329.695817889937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837170.394810268,
            "unit": "ns",
            "range": "± 3527.566292459728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338176.0338541667,
            "unit": "ns",
            "range": "± 3954.0562907051667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601225.4234375,
            "unit": "ns",
            "range": "± 6947.412205422585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815437.2185407366,
            "unit": "ns",
            "range": "± 1356.1574249133573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743519.8966471354,
            "unit": "ns",
            "range": "± 1094.9199397662594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189311.07692307694,
            "unit": "ns",
            "range": "± 5154.8153093826895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184460.77777777778,
            "unit": "ns",
            "range": "± 6004.860008412762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166728.96296296295,
            "unit": "ns",
            "range": "± 4591.289281651317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11326624.266666668,
            "unit": "ns",
            "range": "± 73185.60811727424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9194489.846153846,
            "unit": "ns",
            "range": "± 39180.81035584927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15879.442105263159,
            "unit": "ns",
            "range": "± 1326.6613568108087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47514.1978021978,
            "unit": "ns",
            "range": "± 3360.386327723447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38342.78571428572,
            "unit": "ns",
            "range": "± 674.0390514333296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80479.44897959183,
            "unit": "ns",
            "range": "± 9569.103968784711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4633.333333333333,
            "unit": "ns",
            "range": "± 89.97354108424372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14637.212765957447,
            "unit": "ns",
            "range": "± 864.9608838484928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf6a8f0b3e0df75ca7b05f60344592237b7a2b",
          "message": "Merge pull request #2977 from dahlia/flatten-tx-interfaces",
          "timestamp": "2023-03-24T11:55:08+09:00",
          "tree_id": "6c8ece1623739860ceda4da6a26aeb7cdfe3ba31",
          "url": "https://github.com/planetarium/libplanet/commit/67bf6a8f0b3e0df75ca7b05f60344592237b7a2b"
        },
        "date": 1679627475654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4226704.285714285,
            "unit": "ns",
            "range": "± 58751.29590901813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6671147.214285715,
            "unit": "ns",
            "range": "± 83084.1206212841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30723611.733333334,
            "unit": "ns",
            "range": "± 395941.41989918274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8100946.580645162,
            "unit": "ns",
            "range": "± 244716.8437767446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34972867,
            "unit": "ns",
            "range": "± 352543.2293520895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9931296.789473685,
            "unit": "ns",
            "range": "± 213867.5992403761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26512051.923076924,
            "unit": "ns",
            "range": "± 377486.5126331141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68226581,
            "unit": "ns",
            "range": "± 525753.8062211247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137918641.42857143,
            "unit": "ns",
            "range": "± 582908.5818129518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282609246.85714287,
            "unit": "ns",
            "range": "± 1900410.2053784581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732239.9101123596,
            "unit": "ns",
            "range": "± 95721.06581965603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196728.1052631577,
            "unit": "ns",
            "range": "± 67958.28728295577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2734432.9859154928,
            "unit": "ns",
            "range": "± 133252.21557552248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6346489.4,
            "unit": "ns",
            "range": "± 139439.58520841468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63005.78350515464,
            "unit": "ns",
            "range": "± 4810.510545987653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7003305.79453125,
            "unit": "ns",
            "range": "± 34026.57425410178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201487.717354911,
            "unit": "ns",
            "range": "± 4812.0656425761745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1633166.381640625,
            "unit": "ns",
            "range": "± 3142.074093574966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116660.765364583,
            "unit": "ns",
            "range": "± 5609.7900354128105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997703.6216145833,
            "unit": "ns",
            "range": "± 2063.316978713083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906144.7071010044,
            "unit": "ns",
            "range": "± 1151.9892691313087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242467.03773584907,
            "unit": "ns",
            "range": "± 10059.552610793278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253586.2380952381,
            "unit": "ns",
            "range": "± 6006.663099465142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219637.85,
            "unit": "ns",
            "range": "± 7648.773515055561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14787058.866666667,
            "unit": "ns",
            "range": "± 150528.73918997595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12014923.533333333,
            "unit": "ns",
            "range": "± 112816.73555744333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26618.763440860213,
            "unit": "ns",
            "range": "± 2044.3599689296263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68929.87096774194,
            "unit": "ns",
            "range": "± 5232.06249801832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55002.09302325582,
            "unit": "ns",
            "range": "± 2986.7723150305756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127231.36956521739,
            "unit": "ns",
            "range": "± 13796.38806188882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9057.765306122448,
            "unit": "ns",
            "range": "± 1007.2922343500244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26713.157894736843,
            "unit": "ns",
            "range": "± 2531.789823197531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679908090157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304927.6923076925,
            "unit": "ns",
            "range": "± 53519.680231332684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5159816.170212766,
            "unit": "ns",
            "range": "± 200032.55754472432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23833720.933333334,
            "unit": "ns",
            "range": "± 236082.98692574387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6531480,
            "unit": "ns",
            "range": "± 98192.14135306349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27698489.866666667,
            "unit": "ns",
            "range": "± 360681.03651403426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7886330.8,
            "unit": "ns",
            "range": "± 99324.25891003954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19594387.8,
            "unit": "ns",
            "range": "± 220551.54383765132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50538747.53333333,
            "unit": "ns",
            "range": "± 463948.11487598583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101872989.46666667,
            "unit": "ns",
            "range": "± 929455.3757551374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202895110.6,
            "unit": "ns",
            "range": "± 1259411.271777912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1419302.2323232323,
            "unit": "ns",
            "range": "± 107116.92070500828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475764.625,
            "unit": "ns",
            "range": "± 47542.17236920641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198336.533333333,
            "unit": "ns",
            "range": "± 110217.55630843756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5210322.482758621,
            "unit": "ns",
            "range": "± 138220.88617515206"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46853.6282051282,
            "unit": "ns",
            "range": "± 2230.131002552269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6190009.369977678,
            "unit": "ns",
            "range": "± 19076.524880032368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861320.4513113839,
            "unit": "ns",
            "range": "± 2025.3206914465295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344286.7928385416,
            "unit": "ns",
            "range": "± 1839.043665903133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586274.966666667,
            "unit": "ns",
            "range": "± 2409.5948098289014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796418.3669270833,
            "unit": "ns",
            "range": "± 757.5292526249149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742840.2796875,
            "unit": "ns",
            "range": "± 522.0693650664751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202551.3768115942,
            "unit": "ns",
            "range": "± 9654.575209379853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202071.54901960783,
            "unit": "ns",
            "range": "± 8176.412380289354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181921.08,
            "unit": "ns",
            "range": "± 12808.587103560434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11440643.533333333,
            "unit": "ns",
            "range": "± 125254.93689150635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9381202.642857144,
            "unit": "ns",
            "range": "± 106693.93101737119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20354.795698924732,
            "unit": "ns",
            "range": "± 1855.3927426683865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55662.72826086957,
            "unit": "ns",
            "range": "± 4420.08207398132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40023.150684931505,
            "unit": "ns",
            "range": "± 2004.7543675475347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91519.5052631579,
            "unit": "ns",
            "range": "± 13083.819105302975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5060.663265306122,
            "unit": "ns",
            "range": "± 779.8300197271059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20270.0206185567,
            "unit": "ns",
            "range": "± 2155.5805191572986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37a63f0305fe6c56319a3a18f7c3d5dcba19574b",
          "message": "Merge pull request #2998 from tkiapril/prepare/0.54\n\n🔧 Prepare 0.54.0",
          "timestamp": "2023-03-27T18:04:13+09:00",
          "tree_id": "2c64ba22ed55634e57ff4b58425f439a8fb37ba9",
          "url": "https://github.com/planetarium/libplanet/commit/37a63f0305fe6c56319a3a18f7c3d5dcba19574b"
        },
        "date": 1679908619243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183258.5416666665,
            "unit": "ns",
            "range": "± 64480.47176099077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5149024.125,
            "unit": "ns",
            "range": "± 129626.27605822372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23762171.666666668,
            "unit": "ns",
            "range": "± 156428.32634544838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6271907.428571428,
            "unit": "ns",
            "range": "± 66399.89428364416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26966229.2,
            "unit": "ns",
            "range": "± 369491.1393853908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7665979.142857143,
            "unit": "ns",
            "range": "± 44859.12077717416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19856251.933333334,
            "unit": "ns",
            "range": "± 73666.2013704547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51234353.428571425,
            "unit": "ns",
            "range": "± 516533.7447069968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100731814.93333334,
            "unit": "ns",
            "range": "± 695062.825246905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202069201,
            "unit": "ns",
            "range": "± 1429746.173303999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383529.2653061224,
            "unit": "ns",
            "range": "± 93853.5303824447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2492800,
            "unit": "ns",
            "range": "± 36285.842654769185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176275.4945054944,
            "unit": "ns",
            "range": "± 111046.03667322182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5098429.047619048,
            "unit": "ns",
            "range": "± 119026.07844143911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45624.21917808219,
            "unit": "ns",
            "range": "± 2262.9479682152023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5958885.339285715,
            "unit": "ns",
            "range": "± 18815.446651008642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855920.473828125,
            "unit": "ns",
            "range": "± 5930.96763650955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341334.2818080357,
            "unit": "ns",
            "range": "± 1272.1275974340738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589654.940848214,
            "unit": "ns",
            "range": "± 1716.9018995916904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812813.7319010417,
            "unit": "ns",
            "range": "± 558.8418906660083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746458.2908203125,
            "unit": "ns",
            "range": "± 2101.3739665431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195404.18,
            "unit": "ns",
            "range": "± 7596.284133733294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198067.69565217392,
            "unit": "ns",
            "range": "± 4853.935988966093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164346.26086956522,
            "unit": "ns",
            "range": "± 3538.6286534525734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11371648.5,
            "unit": "ns",
            "range": "± 73770.95971758701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9348473.933333334,
            "unit": "ns",
            "range": "± 42218.91630785333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19102.854166666668,
            "unit": "ns",
            "range": "± 2154.863395251073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57021.10526315789,
            "unit": "ns",
            "range": "± 4534.881840572115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40580.46551724138,
            "unit": "ns",
            "range": "± 1766.6625310992697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92026.96470588235,
            "unit": "ns",
            "range": "± 7959.544996936904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5220.34693877551,
            "unit": "ns",
            "range": "± 591.8452204677608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18490.591836734693,
            "unit": "ns",
            "range": "± 2087.0799106250665"
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
          "id": "cc67e98b313c9ac5a5f3f03265c9590ccfdd360c",
          "message": "Merge pull request #2964 from OnedgeLee/merge/0.51.3\n\n🔀 Port 0.51.3 to main",
          "timestamp": "2023-03-28T16:03:24+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/planetarium/libplanet/commit/cc67e98b313c9ac5a5f3f03265c9590ccfdd360c"
        },
        "date": 1679988005809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4212188.096774193,
            "unit": "ns",
            "range": "± 119063.86612384545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6435368.75,
            "unit": "ns",
            "range": "± 199153.10832688017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30462232.933333334,
            "unit": "ns",
            "range": "± 335086.17758260906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8090982.428571428,
            "unit": "ns",
            "range": "± 187702.20540301903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34190080.833333336,
            "unit": "ns",
            "range": "± 504508.7858479865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9513865.151515152,
            "unit": "ns",
            "range": "± 275022.0586603147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27670440.3125,
            "unit": "ns",
            "range": "± 857008.482460917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67680553.8,
            "unit": "ns",
            "range": "± 979373.8388938837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140451264.7857143,
            "unit": "ns",
            "range": "± 670625.4187145217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258718274.66666666,
            "unit": "ns",
            "range": "± 2225632.394335842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687216.3086419753,
            "unit": "ns",
            "range": "± 88861.39535938004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139717.5588235296,
            "unit": "ns",
            "range": "± 101400.79234918182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2624057.088235294,
            "unit": "ns",
            "range": "± 120941.26607766974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6402807.426229509,
            "unit": "ns",
            "range": "± 288222.63572184724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59354.520833333336,
            "unit": "ns",
            "range": "± 4243.606492444758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7047648.472395834,
            "unit": "ns",
            "range": "± 54442.7864287663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2162267.241015625,
            "unit": "ns",
            "range": "± 24537.599193877155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1582322.2182291667,
            "unit": "ns",
            "range": "± 12113.831176684653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3074678.194754464,
            "unit": "ns",
            "range": "± 26240.3121641012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992493.4892578125,
            "unit": "ns",
            "range": "± 10314.647154841898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906679.4106119792,
            "unit": "ns",
            "range": "± 7203.450983247322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232293.14942528735,
            "unit": "ns",
            "range": "± 12685.151933281513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234935.34426229508,
            "unit": "ns",
            "range": "± 10122.690384947482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202797.2105263158,
            "unit": "ns",
            "range": "± 13784.176979339765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14190091.875,
            "unit": "ns",
            "range": "± 432426.2030014392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11682748.5,
            "unit": "ns",
            "range": "± 320313.2561058754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25651.977528089887,
            "unit": "ns",
            "range": "± 1747.4876510002482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67079.1649484536,
            "unit": "ns",
            "range": "± 7811.317116690922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49853.058139534885,
            "unit": "ns",
            "range": "± 2824.280257525909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113069.86315789474,
            "unit": "ns",
            "range": "± 14991.489102941983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7018.553191489362,
            "unit": "ns",
            "range": "± 815.485126635611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24171.494845360823,
            "unit": "ns",
            "range": "± 2406.788130838273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77a69c48decce34a03cb56f0e97b43c4a3c5e3e",
          "message": "Merge pull request #3008 from planetarium/0.53-maintenance\n\nFix build and upload artifacts",
          "timestamp": "2023-03-28T16:31:45+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/a77a69c48decce34a03cb56f0e97b43c4a3c5e3e"
        },
        "date": 1679989519667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3690639.3571428573,
            "unit": "ns",
            "range": "± 63027.876535347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5607020.714285715,
            "unit": "ns",
            "range": "± 69162.69630308008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25855553.714285713,
            "unit": "ns",
            "range": "± 366708.026294957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6776087.25,
            "unit": "ns",
            "range": "± 174760.0953096285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29008560,
            "unit": "ns",
            "range": "± 310872.0621815347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7878567.052631579,
            "unit": "ns",
            "range": "± 164270.06965782284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20966487.933333334,
            "unit": "ns",
            "range": "± 345558.38898460864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52997206.2,
            "unit": "ns",
            "range": "± 745998.346442365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109461627.35714285,
            "unit": "ns",
            "range": "± 938910.7128176703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218917529.26666668,
            "unit": "ns",
            "range": "± 832253.7329496564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422726.6145833333,
            "unit": "ns",
            "range": "± 83202.16356515963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695658.8857142855,
            "unit": "ns",
            "range": "± 87120.151479157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204419.835443038,
            "unit": "ns",
            "range": "± 114527.927237055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5368257.16,
            "unit": "ns",
            "range": "± 140523.40619557537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50329.181818181816,
            "unit": "ns",
            "range": "± 2589.9438102382423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917137.05859375,
            "unit": "ns",
            "range": "± 23131.339372675782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834061.3578404018,
            "unit": "ns",
            "range": "± 1853.4669578729167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373972.8140625,
            "unit": "ns",
            "range": "± 2926.2319885237052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637122.869921875,
            "unit": "ns",
            "range": "± 3285.339846758381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831337.1586914062,
            "unit": "ns",
            "range": "± 837.368569365501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768581.4822916667,
            "unit": "ns",
            "range": "± 449.3620856339386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204718,
            "unit": "ns",
            "range": "± 7694.505372682025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207914.7142857143,
            "unit": "ns",
            "range": "± 5780.216386165786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169448.92105263157,
            "unit": "ns",
            "range": "± 5534.98884679449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11923282,
            "unit": "ns",
            "range": "± 231755.70890429718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9694785.090909092,
            "unit": "ns",
            "range": "± 237025.50418566258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21670.606382978724,
            "unit": "ns",
            "range": "± 2281.703349853572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55694.166666666664,
            "unit": "ns",
            "range": "± 5294.6487119030035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43073.84375,
            "unit": "ns",
            "range": "± 1990.078727155732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94074.72093023256,
            "unit": "ns",
            "range": "± 6155.33422354601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6297.0204081632655,
            "unit": "ns",
            "range": "± 480.6947287620549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22029.416666666668,
            "unit": "ns",
            "range": "± 1556.4587043174693"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "513a3865ee4ae40ddd1d1a229e65e3c8848148ca",
          "message": "Merge pull request #3014 from riemannulus/merge/main/0.51-maintenance\n\n🔀 Port 0.51.4 to main",
          "timestamp": "2023-03-28T18:42:39+09:00",
          "tree_id": "505611282659dd79def9c3c8d4219801ad3d1b4b",
          "url": "https://github.com/planetarium/libplanet/commit/513a3865ee4ae40ddd1d1a229e65e3c8848148ca"
        },
        "date": 1679997324233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190202.285714286,
            "unit": "ns",
            "range": "± 75147.38553944699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5119039.555555556,
            "unit": "ns",
            "range": "± 140914.78269734877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23719687.5,
            "unit": "ns",
            "range": "± 255755.11408880356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6308208.304347826,
            "unit": "ns",
            "range": "± 138140.3226911728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28273940.733333334,
            "unit": "ns",
            "range": "± 384576.38280348096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7780485.642857143,
            "unit": "ns",
            "range": "± 44775.72859108646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19543814.866666667,
            "unit": "ns",
            "range": "± 87193.52759307201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50225138.85714286,
            "unit": "ns",
            "range": "± 247504.40818913697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100689439.8,
            "unit": "ns",
            "range": "± 677322.8467731513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202106138.53333333,
            "unit": "ns",
            "range": "± 918584.6270728421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364700.2551020407,
            "unit": "ns",
            "range": "± 108516.35103040865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2486706.4285714286,
            "unit": "ns",
            "range": "± 68702.30043667392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125069.294871795,
            "unit": "ns",
            "range": "± 105624.081785187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5052909.972972973,
            "unit": "ns",
            "range": "± 150568.954600447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45390.246753246756,
            "unit": "ns",
            "range": "± 2335.242369681099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6325734.920758928,
            "unit": "ns",
            "range": "± 20944.039312443994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820745.8469587055,
            "unit": "ns",
            "range": "± 1505.7271593023775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369590.5947265625,
            "unit": "ns",
            "range": "± 902.5427741570919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565052.022879464,
            "unit": "ns",
            "range": "± 1167.299663035903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807471.8317708333,
            "unit": "ns",
            "range": "± 393.7446063400119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737477.3013020833,
            "unit": "ns",
            "range": "± 672.6105006335166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200134,
            "unit": "ns",
            "range": "± 7205.90814540402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196935.67647058822,
            "unit": "ns",
            "range": "± 6364.756548561767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164401.73076923078,
            "unit": "ns",
            "range": "± 4384.086865541715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11377011.266666668,
            "unit": "ns",
            "range": "± 94767.73555945435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9175769.333333334,
            "unit": "ns",
            "range": "± 74958.30393974912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19566.061224489797,
            "unit": "ns",
            "range": "± 1893.218896490142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52224.089887640446,
            "unit": "ns",
            "range": "± 3474.748204221061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39423.48,
            "unit": "ns",
            "range": "± 1021.4823835974852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89391.4947368421,
            "unit": "ns",
            "range": "± 10957.070709328627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.552083333333,
            "unit": "ns",
            "range": "± 607.1988119708172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17844.41489361702,
            "unit": "ns",
            "range": "± 1591.7258936877322"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d",
          "message": "Merge pull request #3015 from riemannulus/merge/main/0.52-maintenance\n\n🔀 Port 0.52.2 to main",
          "timestamp": "2023-03-28T19:09:08+09:00",
          "tree_id": "28c67380d41870034ff1bba749b2f70b12511a10",
          "url": "https://github.com/planetarium/libplanet/commit/84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d"
        },
        "date": 1679998975891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567786.875,
            "unit": "ns",
            "range": "± 110963.74454974021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5473599.277777778,
            "unit": "ns",
            "range": "± 179234.65410096358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25537622.25,
            "unit": "ns",
            "range": "± 452707.4030771605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6793399.6,
            "unit": "ns",
            "range": "± 122020.73559311841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29099639,
            "unit": "ns",
            "range": "± 518551.23034579994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7845748.333333333,
            "unit": "ns",
            "range": "± 100347.01704632398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21530884.214285713,
            "unit": "ns",
            "range": "± 96810.63391700361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53061390.53333333,
            "unit": "ns",
            "range": "± 692607.0735503507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108841343.86666666,
            "unit": "ns",
            "range": "± 662802.8305593998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219754339.6,
            "unit": "ns",
            "range": "± 1721049.2454193584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1473014.625,
            "unit": "ns",
            "range": "± 93721.56165649171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764626.3333333335,
            "unit": "ns",
            "range": "± 85745.06927867145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367855.6790123456,
            "unit": "ns",
            "range": "± 123915.57949031542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5463355.535714285,
            "unit": "ns",
            "range": "± 152272.0039095444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50356.92957746479,
            "unit": "ns",
            "range": "± 2462.2995426687958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6130667.947916667,
            "unit": "ns",
            "range": "± 24729.39855175263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888431.9700055805,
            "unit": "ns",
            "range": "± 3409.201663505238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370543.3712239584,
            "unit": "ns",
            "range": "± 3727.9106378269394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671203.7294270834,
            "unit": "ns",
            "range": "± 2189.335347109578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842966.9208333333,
            "unit": "ns",
            "range": "± 1263.8825121983368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762877.8018880208,
            "unit": "ns",
            "range": "± 353.7782144048374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216352.54545454544,
            "unit": "ns",
            "range": "± 8114.788410758115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213046.28260869565,
            "unit": "ns",
            "range": "± 8196.360768761391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180873.6739130435,
            "unit": "ns",
            "range": "± 6792.259804134401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12711319.533333333,
            "unit": "ns",
            "range": "± 125927.50451003072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10269027.4,
            "unit": "ns",
            "range": "± 102541.13021737737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25581.117021276597,
            "unit": "ns",
            "range": "± 2146.4276591201933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59491.70786516854,
            "unit": "ns",
            "range": "± 4316.8587885233255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43244.38,
            "unit": "ns",
            "range": "± 1754.9599668670855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112302.41836734694,
            "unit": "ns",
            "range": "± 14670.946758199594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6380.28125,
            "unit": "ns",
            "range": "± 900.8410070960299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21514.247311827956,
            "unit": "ns",
            "range": "± 2558.599199187924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "befdfa5b6df52e5aab73d5e22a0e941a11e1c279",
          "message": "Merge pull request #3016 from riemannulus/merge/main/0.53-maintenance\n\n🔀 Port 0.53.1 to main",
          "timestamp": "2023-03-28T19:52:06+09:00",
          "tree_id": "081932db25900e7a90f52678dd351852fe59b3c4",
          "url": "https://github.com/planetarium/libplanet/commit/befdfa5b6df52e5aab73d5e22a0e941a11e1c279"
        },
        "date": 1680001435827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237765.6875,
            "unit": "ns",
            "range": "± 60186.81049722744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5088161.933333334,
            "unit": "ns",
            "range": "± 82077.1528532468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23738756.933333334,
            "unit": "ns",
            "range": "± 202502.4587929972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6057032.933333334,
            "unit": "ns",
            "range": "± 95753.36728466723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26815542.42857143,
            "unit": "ns",
            "range": "± 331501.1958485715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621672.066666666,
            "unit": "ns",
            "range": "± 83700.03504306031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19344480.4,
            "unit": "ns",
            "range": "± 168143.78384703968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49954390.333333336,
            "unit": "ns",
            "range": "± 327663.78036262083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100471012.6,
            "unit": "ns",
            "range": "± 723546.7689140567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198134037.46666667,
            "unit": "ns",
            "range": "± 2108487.2645258824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334987.2828282828,
            "unit": "ns",
            "range": "± 100338.97604295034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2397933.8125,
            "unit": "ns",
            "range": "± 45661.734648344594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110078.0795454546,
            "unit": "ns",
            "range": "± 115565.17906261906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5203522.59375,
            "unit": "ns",
            "range": "± 239550.99325034986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46887.208333333336,
            "unit": "ns",
            "range": "± 1852.2347624554038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6084675.835416666,
            "unit": "ns",
            "range": "± 28173.51021868015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831229.4448939732,
            "unit": "ns",
            "range": "± 2545.535593399618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332471.7401041666,
            "unit": "ns",
            "range": "± 823.6205328155186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547364.11328125,
            "unit": "ns",
            "range": "± 1543.919175237051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816538.8343098959,
            "unit": "ns",
            "range": "± 945.8873114331477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745351.8095052083,
            "unit": "ns",
            "range": "± 384.5107170644664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194623.97435897434,
            "unit": "ns",
            "range": "± 6668.617983894018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198645.03333333333,
            "unit": "ns",
            "range": "± 5856.389516695792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163967.92307692306,
            "unit": "ns",
            "range": "± 2134.5852236261444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11176710.066666666,
            "unit": "ns",
            "range": "± 58707.134916180905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9161549.933333334,
            "unit": "ns",
            "range": "± 82950.75054466842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17388.546391752578,
            "unit": "ns",
            "range": "± 1651.076940342137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51818.53684210526,
            "unit": "ns",
            "range": "± 4891.141792927479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37616.25,
            "unit": "ns",
            "range": "± 470.5737552083723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80737.09756097561,
            "unit": "ns",
            "range": "± 6111.4862584039765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4409.268041237114,
            "unit": "ns",
            "range": "± 527.7928593733515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18076.468085106382,
            "unit": "ns",
            "range": "± 1480.7109575574505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5fbabad50c4076bf2bcde95c6f67c7725966085",
          "message": "Merge pull request #2986 from planetarium/tx-invoice",
          "timestamp": "2023-03-31T16:03:30+09:00",
          "tree_id": "606589d0a8afe3cba7ebbc4325300655d36cae40",
          "url": "https://github.com/planetarium/libplanet/commit/f5fbabad50c4076bf2bcde95c6f67c7725966085"
        },
        "date": 1680247277041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3833395.914893617,
            "unit": "ns",
            "range": "± 322236.9899053847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4299059,
            "unit": "ns",
            "range": "± 305538.55676424695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5443982.350515464,
            "unit": "ns",
            "range": "± 471749.8596685236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5435063.835051547,
            "unit": "ns",
            "range": "± 342622.5397623175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10196640.553191489,
            "unit": "ns",
            "range": "± 583769.5432800796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9385767.346938776,
            "unit": "ns",
            "range": "± 658115.316890653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26064373.284210525,
            "unit": "ns",
            "range": "± 1510589.9335106167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62904152.98701299,
            "unit": "ns",
            "range": "± 3161661.063236928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127062369.0625,
            "unit": "ns",
            "range": "± 2473186.075535912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248220304.82857144,
            "unit": "ns",
            "range": "± 7980183.865058788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565304.4329896907,
            "unit": "ns",
            "range": "± 233222.79569401318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921072.3854166665,
            "unit": "ns",
            "range": "± 223012.4871164402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2391531.2736842106,
            "unit": "ns",
            "range": "± 234270.54228411758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7095968.867346939,
            "unit": "ns",
            "range": "± 898277.3627132003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64023.24444444444,
            "unit": "ns",
            "range": "± 6053.2800752908015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7133349.576360887,
            "unit": "ns",
            "range": "± 216999.57213217375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242350.537560096,
            "unit": "ns",
            "range": "± 21195.793559005026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497471.2777994792,
            "unit": "ns",
            "range": "± 17248.92273978321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2879269.0536458334,
            "unit": "ns",
            "range": "± 42649.238775429454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029008.7046260127,
            "unit": "ns",
            "range": "± 28317.405038565346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1018124.1501302083,
            "unit": "ns",
            "range": "± 30003.795892460814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422601.0588235294,
            "unit": "ns",
            "range": "± 21896.483961799797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342043.8210526316,
            "unit": "ns",
            "range": "± 25468.389889704842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280272.6440677966,
            "unit": "ns",
            "range": "± 12275.594696968106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6764645.230769231,
            "unit": "ns",
            "range": "± 108072.83348522718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4877651.816666666,
            "unit": "ns",
            "range": "± 218008.7455800948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27423.37,
            "unit": "ns",
            "range": "± 6160.573400203335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109293,
            "unit": "ns",
            "range": "± 8819.334387779969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88123.375,
            "unit": "ns",
            "range": "± 5204.378332065787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235907.6170212766,
            "unit": "ns",
            "range": "± 22801.188885767304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 15157.010869565218,
            "unit": "ns",
            "range": "± 3907.9086098803864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25920.408163265307,
            "unit": "ns",
            "range": "± 7153.096444121367"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9db060971a9ecc4403a964452823b399520f4f1d",
          "message": "Merge pull request #3033 from dahlia/make-rocksdb-store-blockchain-test-skippable",
          "timestamp": "2023-03-31T17:24:48+09:00",
          "tree_id": "d6b788a4eae4a7dfba47ea0bec2e61209da24360",
          "url": "https://github.com/planetarium/libplanet/commit/9db060971a9ecc4403a964452823b399520f4f1d"
        },
        "date": 1680251831976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260977.8157894737,
            "unit": "ns",
            "range": "± 111351.91494945694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447778.023809524,
            "unit": "ns",
            "range": "± 123030.64880464584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140501.6923076925,
            "unit": "ns",
            "range": "± 34514.91528403485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445558.333333333,
            "unit": "ns",
            "range": "± 172948.5025214071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7508831.947368421,
            "unit": "ns",
            "range": "± 153056.78830039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7569229.461538462,
            "unit": "ns",
            "range": "± 15391.098328879287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20192328,
            "unit": "ns",
            "range": "± 366468.5670816218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50510343.04545455,
            "unit": "ns",
            "range": "± 1199945.359768895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101157583.47619048,
            "unit": "ns",
            "range": "± 2396899.0142474426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199146036.2,
            "unit": "ns",
            "range": "± 2670118.0628556004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377634.1836734693,
            "unit": "ns",
            "range": "± 96644.2805456832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661117.5483870967,
            "unit": "ns",
            "range": "± 79722.88933793888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200259.4725274723,
            "unit": "ns",
            "range": "± 115770.9399016812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5401591.076923077,
            "unit": "ns",
            "range": "± 136634.55197069971"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47131.47887323944,
            "unit": "ns",
            "range": "± 2147.4572329628418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5742435.344791667,
            "unit": "ns",
            "range": "± 29780.38969745226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819001.9370814732,
            "unit": "ns",
            "range": "± 3277.561426110898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328399.0037667411,
            "unit": "ns",
            "range": "± 4521.293006928929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633497.8734375,
            "unit": "ns",
            "range": "± 12101.029235426855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818632.2590494792,
            "unit": "ns",
            "range": "± 1351.9960035696959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760972.6252604167,
            "unit": "ns",
            "range": "± 1337.4662984592198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321764.8823529412,
            "unit": "ns",
            "range": "± 6435.252528867389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267338.21428571426,
            "unit": "ns",
            "range": "± 2522.840986439126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233032.15,
            "unit": "ns",
            "range": "± 4523.125506188928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5636538.6,
            "unit": "ns",
            "range": "± 65808.24151252964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891821.5714285714,
            "unit": "ns",
            "range": "± 43894.766547547966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17642.691489361703,
            "unit": "ns",
            "range": "± 1351.3278696617779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83303.90721649484,
            "unit": "ns",
            "range": "± 5378.224999714268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75615.04761904762,
            "unit": "ns",
            "range": "± 1786.2427180030847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204158.0625,
            "unit": "ns",
            "range": "± 3919.590241657921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5660.042105263158,
            "unit": "ns",
            "range": "± 604.5036985929382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17225.473684210527,
            "unit": "ns",
            "range": "± 1300.2265501622862"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f33f0a6984b598fac343d17f1e4b169369850e89",
          "message": "Merge pull request #3035 from planetarium/fix-errata\n\n[changelog skip]",
          "timestamp": "2023-03-31T18:47:51+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/f33f0a6984b598fac343d17f1e4b169369850e89"
        },
        "date": 1680257331006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308195.9166666665,
            "unit": "ns",
            "range": "± 397317.01815573085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685180.898989899,
            "unit": "ns",
            "range": "± 483205.26100523013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4645515.161616161,
            "unit": "ns",
            "range": "± 520118.9183359252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5202039.42,
            "unit": "ns",
            "range": "± 635570.0642844095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8858846.616161617,
            "unit": "ns",
            "range": "± 1088930.4015808892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7486881.265957447,
            "unit": "ns",
            "range": "± 475021.976789805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18634946.483516484,
            "unit": "ns",
            "range": "± 1634981.4634903858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48029329.54651163,
            "unit": "ns",
            "range": "± 2915904.953110032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115977708.14,
            "unit": "ns",
            "range": "± 17783037.826782104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237579861.2929293,
            "unit": "ns",
            "range": "± 17529974.979779143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434229.17,
            "unit": "ns",
            "range": "± 217613.04072058204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2840109.216494845,
            "unit": "ns",
            "range": "± 272596.0501965021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2483027.8163265307,
            "unit": "ns",
            "range": "± 358168.313732707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6745296.448979592,
            "unit": "ns",
            "range": "± 809698.920959852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62685.217391304344,
            "unit": "ns",
            "range": "± 10655.973795699732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6288858.84515625,
            "unit": "ns",
            "range": "± 611434.6384010683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004785.4090234374,
            "unit": "ns",
            "range": "± 152073.1892536317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1495018.013359375,
            "unit": "ns",
            "range": "± 100030.13605966671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3058968.778293919,
            "unit": "ns",
            "range": "± 152768.90716876468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838184.8516721141,
            "unit": "ns",
            "range": "± 33163.92212126568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769398.0437140213,
            "unit": "ns",
            "range": "± 16829.332665220136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362352.71875,
            "unit": "ns",
            "range": "± 46042.53066201043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329298.11340206186,
            "unit": "ns",
            "range": "± 55264.95777537598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256046.1157894737,
            "unit": "ns",
            "range": "± 45047.74137745259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5674975.09,
            "unit": "ns",
            "range": "± 682340.822355063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4144447.63,
            "unit": "ns",
            "range": "± 624017.5526380463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25454.363636363636,
            "unit": "ns",
            "range": "± 10902.699175681171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100602.26804123711,
            "unit": "ns",
            "range": "± 25540.314413163334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92971.27368421052,
            "unit": "ns",
            "range": "± 21614.689408905444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 209786.15151515152,
            "unit": "ns",
            "range": "± 43217.83872273767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5022.647727272727,
            "unit": "ns",
            "range": "± 1218.7051262804969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27581.79,
            "unit": "ns",
            "range": "± 11593.787896271755"
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
          "id": "633703538f86dfb69361147287cbe4fae0b84a76",
          "message": "Merge pull request #3036 from greymistcube/chore/logging\n\n🧹 Small logging fix for consistency",
          "timestamp": "2023-03-31T21:16:31+09:00",
          "tree_id": "26356a172c2fea17776cc5cf1daba8b1789bffb8",
          "url": "https://github.com/planetarium/libplanet/commit/633703538f86dfb69361147287cbe4fae0b84a76"
        },
        "date": 1680265723562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3330583.714285714,
            "unit": "ns",
            "range": "± 76910.8916676584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580936.5166666666,
            "unit": "ns",
            "range": "± 160074.4631640878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4320693.285714285,
            "unit": "ns",
            "range": "± 69671.8513190211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4501575.94117647,
            "unit": "ns",
            "range": "± 89789.99058947954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7735455.03125,
            "unit": "ns",
            "range": "± 230643.87007070563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7771083,
            "unit": "ns",
            "range": "± 71169.6974390887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19679994.57142857,
            "unit": "ns",
            "range": "± 85488.41623528641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50507954.333333336,
            "unit": "ns",
            "range": "± 410909.03981236997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101458745.92857143,
            "unit": "ns",
            "range": "± 219778.93426191283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204173630.86666667,
            "unit": "ns",
            "range": "± 532749.6495466926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408312.8659793814,
            "unit": "ns",
            "range": "± 121179.65247572753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2573788.1875,
            "unit": "ns",
            "range": "± 47016.335284974804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199306.025974026,
            "unit": "ns",
            "range": "± 111898.58775412553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5485201.266666667,
            "unit": "ns",
            "range": "± 164082.9505932128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45243.72131147541,
            "unit": "ns",
            "range": "± 1884.8687499058346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5914197.258370535,
            "unit": "ns",
            "range": "± 19718.76553098256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868918.0716646635,
            "unit": "ns",
            "range": "± 1443.9964069166735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386448.1988002232,
            "unit": "ns",
            "range": "± 919.3669654824835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2525758.2276785714,
            "unit": "ns",
            "range": "± 1471.3420294425136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813499.4610072544,
            "unit": "ns",
            "range": "± 653.6163700800075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727028.9413411458,
            "unit": "ns",
            "range": "± 2350.8009891628576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326562.5833333333,
            "unit": "ns",
            "range": "± 9635.049242590452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276857.1666666667,
            "unit": "ns",
            "range": "± 5894.3423846141495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240565.85416666666,
            "unit": "ns",
            "range": "± 9464.010127936486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5627785.714285715,
            "unit": "ns",
            "range": "± 27570.05311629205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3980755.6470588236,
            "unit": "ns",
            "range": "± 79788.18200549908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19396.978723404256,
            "unit": "ns",
            "range": "± 1615.5606169591165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86813.46753246753,
            "unit": "ns",
            "range": "± 4254.528347860404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75592.79487179487,
            "unit": "ns",
            "range": "± 2637.5636403346016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 190136.6326530612,
            "unit": "ns",
            "range": "± 15789.743565481518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6264.326530612245,
            "unit": "ns",
            "range": "± 968.5247020412683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19479.20879120879,
            "unit": "ns",
            "range": "± 1518.4029293708095"
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
          "id": "92ba4b995674a19bd7b677525ef1ee47f744fee2",
          "message": "Merge pull request #3038 from greymistcube/chore/cleanup\n\n🧹 Removed unnecessary logic",
          "timestamp": "2023-04-02T16:42:25+09:00",
          "tree_id": "e367f0043a44abc981b7f55b69d973d07fa9015f",
          "url": "https://github.com/planetarium/libplanet/commit/92ba4b995674a19bd7b677525ef1ee47f744fee2"
        },
        "date": 1680422295324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4198120.444444444,
            "unit": "ns",
            "range": "± 88895.32585755148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4347289.555555556,
            "unit": "ns",
            "range": "± 86763.1340375977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5044111.533333333,
            "unit": "ns",
            "range": "± 87854.18876091279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5514717.135135135,
            "unit": "ns",
            "range": "± 186752.63711497595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9277174.105263159,
            "unit": "ns",
            "range": "± 202553.0834941505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9984878.23076923,
            "unit": "ns",
            "range": "± 145274.56487467323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25659247.4,
            "unit": "ns",
            "range": "± 322546.8316051839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70300487,
            "unit": "ns",
            "range": "± 655162.848241129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128593904.78571428,
            "unit": "ns",
            "range": "± 662685.1855843395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259222336.35,
            "unit": "ns",
            "range": "± 5754170.944496853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672885.3623188406,
            "unit": "ns",
            "range": "± 76293.43656971282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3173194.8,
            "unit": "ns",
            "range": "± 101655.76968226703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733663.56097561,
            "unit": "ns",
            "range": "± 133803.3591555573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6815450.857142857,
            "unit": "ns",
            "range": "± 193631.5626276059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59247.68085106383,
            "unit": "ns",
            "range": "± 4495.52487447781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7047241.597098215,
            "unit": "ns",
            "range": "± 43949.95502884888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2192284.780989583,
            "unit": "ns",
            "range": "± 7046.319322127506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1604227.9557291667,
            "unit": "ns",
            "range": "± 4780.300336150852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3169475.9888020833,
            "unit": "ns",
            "range": "± 18964.510766269374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993801.966796875,
            "unit": "ns",
            "range": "± 2368.2150826455922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913417.0883463542,
            "unit": "ns",
            "range": "± 2192.999939611369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391181.84444444446,
            "unit": "ns",
            "range": "± 14844.257963872085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327804.9,
            "unit": "ns",
            "range": "± 7239.79282125786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282183.14285714284,
            "unit": "ns",
            "range": "± 4659.063274243718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6895446.133333334,
            "unit": "ns",
            "range": "± 93050.31698331414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4952301.266666667,
            "unit": "ns",
            "range": "± 79067.0395048826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24529.451612903227,
            "unit": "ns",
            "range": "± 1613.3868340970148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112765.06666666667,
            "unit": "ns",
            "range": "± 6297.482159249633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97917.34090909091,
            "unit": "ns",
            "range": "± 3452.6325307953252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228339.52577319587,
            "unit": "ns",
            "range": "± 20773.407037851695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8463.082474226803,
            "unit": "ns",
            "range": "± 747.8957797004969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24616.62365591398,
            "unit": "ns",
            "range": "± 2405.4479512049425"
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
          "id": "b68a00ef4c04d4c805b9471c48c59a127ba827e3",
          "message": "Merge pull request #3032 from riemannulus/merge/main/0.53-maintenance\n\n🔀 Merge 0.53.2 to main",
          "timestamp": "2023-04-03T11:58:01+09:00",
          "tree_id": "118aa78362a7cfe4036b7151188443d5543a9b30",
          "url": "https://github.com/planetarium/libplanet/commit/b68a00ef4c04d4c805b9471c48c59a127ba827e3"
        },
        "date": 1680491494213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3656510.6666666665,
            "unit": "ns",
            "range": "± 21363.87694439467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3855130.923076923,
            "unit": "ns",
            "range": "± 49390.567462255276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393189.578947368,
            "unit": "ns",
            "range": "± 93260.89034073285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4949823.655172414,
            "unit": "ns",
            "range": "± 120701.94359521539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8203808.258064516,
            "unit": "ns",
            "range": "± 245536.31941581375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8226763.8,
            "unit": "ns",
            "range": "± 101594.53524546907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21813847.2,
            "unit": "ns",
            "range": "± 148191.8826585509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55521612.93333333,
            "unit": "ns",
            "range": "± 244065.29998209982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111032655.73333333,
            "unit": "ns",
            "range": "± 496161.5529801136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222425703.93333334,
            "unit": "ns",
            "range": "± 870375.4361550346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516256.0808080807,
            "unit": "ns",
            "range": "± 106540.94092008134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2709918.933333333,
            "unit": "ns",
            "range": "± 44962.53603909222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2411507.1774193547,
            "unit": "ns",
            "range": "± 106563.02659182795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5771458.863636363,
            "unit": "ns",
            "range": "± 132106.1464841257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50856.28571428572,
            "unit": "ns",
            "range": "± 2390.135749845919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948994.835379465,
            "unit": "ns",
            "range": "± 31056.731243445312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875609.0625,
            "unit": "ns",
            "range": "± 1086.4465139216074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366770.1655970982,
            "unit": "ns",
            "range": "± 3210.724356304299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650398.4671875,
            "unit": "ns",
            "range": "± 2272.5571689730846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828409.9378255209,
            "unit": "ns",
            "range": "± 817.4553077803351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764765.2856119792,
            "unit": "ns",
            "range": "± 303.70144239068753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353883.14285714284,
            "unit": "ns",
            "range": "± 5949.0368820655185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296917.1,
            "unit": "ns",
            "range": "± 8734.901571993458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254972.1,
            "unit": "ns",
            "range": "± 11397.10323841627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5933606.714285715,
            "unit": "ns",
            "range": "± 66466.0829659396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4360248.875,
            "unit": "ns",
            "range": "± 81125.33775327739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23994.0412371134,
            "unit": "ns",
            "range": "± 1847.1407460672249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105068.79120879121,
            "unit": "ns",
            "range": "± 5685.194679587564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97131.21428571429,
            "unit": "ns",
            "range": "± 9627.474818798435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 209520.67777777778,
            "unit": "ns",
            "range": "± 14852.994454512964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8353.15306122449,
            "unit": "ns",
            "range": "± 1306.1229110634897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23542.305263157894,
            "unit": "ns",
            "range": "± 1850.1701881102736"
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
          "id": "06dcadb1c245a5e3dae485232d6e232c46bb9e95",
          "message": "Merge pull request #3040 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2023-04-03T12:10:05+09:00",
          "tree_id": "455a1fabf98b0d26316085398906cca91f305c12",
          "url": "https://github.com/planetarium/libplanet/commit/06dcadb1c245a5e3dae485232d6e232c46bb9e95"
        },
        "date": 1680492262847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3581610.214285714,
            "unit": "ns",
            "range": "± 43117.22171936294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3919364.4,
            "unit": "ns",
            "range": "± 102600.59571992423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382667.545454546,
            "unit": "ns",
            "range": "± 104122.9644487376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4982697,
            "unit": "ns",
            "range": "± 125311.94051101581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8188037.892857143,
            "unit": "ns",
            "range": "± 233762.64927602024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078548.6,
            "unit": "ns",
            "range": "± 115602.23617263763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21832180.333333332,
            "unit": "ns",
            "range": "± 302876.53696695494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55132332.166666664,
            "unit": "ns",
            "range": "± 133959.71840467793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109830941.66666667,
            "unit": "ns",
            "range": "± 417382.878418548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220411078.73333332,
            "unit": "ns",
            "range": "± 1269121.6609608096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464173.3763440861,
            "unit": "ns",
            "range": "± 92740.16076944016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2714136.3529411764,
            "unit": "ns",
            "range": "± 85763.43164347844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2364251.9285714286,
            "unit": "ns",
            "range": "± 126854.60763502363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5947562.966666667,
            "unit": "ns",
            "range": "± 173754.58583429427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51568.78723404255,
            "unit": "ns",
            "range": "± 4598.630567248127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956876.6953125,
            "unit": "ns",
            "range": "± 25504.128811991377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869589.3518229167,
            "unit": "ns",
            "range": "± 3375.0889294095973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371174.5924479167,
            "unit": "ns",
            "range": "± 2837.8009785813624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632701.97578125,
            "unit": "ns",
            "range": "± 3600.716930036353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833226.95625,
            "unit": "ns",
            "range": "± 214.9098125150359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756257.255719866,
            "unit": "ns",
            "range": "± 311.5944089463961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346634,
            "unit": "ns",
            "range": "± 6859.558613715609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286573.75,
            "unit": "ns",
            "range": "± 6572.550188993775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244690.975,
            "unit": "ns",
            "range": "± 7645.62525318757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5896737.333333333,
            "unit": "ns",
            "range": "± 49729.50667238504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4226441.076923077,
            "unit": "ns",
            "range": "± 50491.60071975922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22381.106382978724,
            "unit": "ns",
            "range": "± 2086.1521633802327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93365.72043010753,
            "unit": "ns",
            "range": "± 4970.334459408383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82617.36363636363,
            "unit": "ns",
            "range": "± 4245.106922926835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 207645.48958333334,
            "unit": "ns",
            "range": "± 15414.06709128474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8223.642857142857,
            "unit": "ns",
            "range": "± 960.2514517122398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22353.043956043955,
            "unit": "ns",
            "range": "± 2553.7127303511465"
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
          "id": "e9f985f450f487d59ef3bf0f6db36ee476d1e28f",
          "message": "Merge pull request #3037 from greymistcube/refactor/block-evaluate\n\nRefactor block evaluate related code",
          "timestamp": "2023-04-03T12:22:37+09:00",
          "tree_id": "454ada684563cc5e87b0ab68b80567c1375e8c64",
          "url": "https://github.com/planetarium/libplanet/commit/e9f985f450f487d59ef3bf0f6db36ee476d1e28f"
        },
        "date": 1680492891006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211594.6,
            "unit": "ns",
            "range": "± 45782.53772189942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403149.9411764704,
            "unit": "ns",
            "range": "± 56986.766481866856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303219.166666667,
            "unit": "ns",
            "range": "± 90073.49312856892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4341640.846153846,
            "unit": "ns",
            "range": "± 147316.87923344347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7556964.833333333,
            "unit": "ns",
            "range": "± 184818.09319799524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555282,
            "unit": "ns",
            "range": "± 17377.199101563652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19339390.6,
            "unit": "ns",
            "range": "± 101858.54467194057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49660737.928571425,
            "unit": "ns",
            "range": "± 199589.83492247073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98869923.71428572,
            "unit": "ns",
            "range": "± 304021.75565610395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197551670.26666668,
            "unit": "ns",
            "range": "± 1194323.3584747275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337193.3684210526,
            "unit": "ns",
            "range": "± 93522.21200711223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2583356.8571428573,
            "unit": "ns",
            "range": "± 61015.0646605293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173221.350515464,
            "unit": "ns",
            "range": "± 136732.54562413084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5354676.428571428,
            "unit": "ns",
            "range": "± 100925.35350573284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45084.044117647056,
            "unit": "ns",
            "range": "± 2147.6523206892443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6202895.577083333,
            "unit": "ns",
            "range": "± 44972.297429488244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841811.4207589286,
            "unit": "ns",
            "range": "± 9140.050409018053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361020.2872488839,
            "unit": "ns",
            "range": "± 8764.063242363867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592275.2322716345,
            "unit": "ns",
            "range": "± 1066.363951582163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818667.9067708333,
            "unit": "ns",
            "range": "± 451.538698337285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742479.5749162947,
            "unit": "ns",
            "range": "± 1878.608188219073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323916.5,
            "unit": "ns",
            "range": "± 4120.511166012145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269287.4285714286,
            "unit": "ns",
            "range": "± 4250.571286749143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237828.4,
            "unit": "ns",
            "range": "± 4211.572064816517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5575800.733333333,
            "unit": "ns",
            "range": "± 27967.979756108503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909556.214285714,
            "unit": "ns",
            "range": "± 33110.6086419875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17687.515789473684,
            "unit": "ns",
            "range": "± 1324.9849767366525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83924.68965517242,
            "unit": "ns",
            "range": "± 3461.4880595210634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72872.03571428571,
            "unit": "ns",
            "range": "± 2098.4925891757152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 179041.04081632654,
            "unit": "ns",
            "range": "± 15602.074572549287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5169.494736842105,
            "unit": "ns",
            "range": "± 487.30694756202394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17218.84375,
            "unit": "ns",
            "range": "± 1407.2845096562462"
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
          "id": "f4ab79f05456dee3c24fb8109b393d92921015f6",
          "message": "Merge pull request #2996 from colibrishin/pbft/verify/block-body\n\nfix: validate block content in PreVote step",
          "timestamp": "2023-04-03T16:05:44+09:00",
          "tree_id": "f4bb5338c245cecfb15941a7a6749b1e93f38743",
          "url": "https://github.com/planetarium/libplanet/commit/f4ab79f05456dee3c24fb8109b393d92921015f6"
        },
        "date": 1680506315083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311150.2,
            "unit": "ns",
            "range": "± 37720.13300082597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3463865.304347826,
            "unit": "ns",
            "range": "± 87511.51191982727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4327478.578947368,
            "unit": "ns",
            "range": "± 94958.4964329831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498760.304347826,
            "unit": "ns",
            "range": "± 215373.3751940558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7841935.043478261,
            "unit": "ns",
            "range": "± 160240.45362558853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7903447.466666667,
            "unit": "ns",
            "range": "± 54780.307368702524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19638876.4,
            "unit": "ns",
            "range": "± 99590.64420688753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51467092.53333333,
            "unit": "ns",
            "range": "± 307563.57337557443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104112172.13333334,
            "unit": "ns",
            "range": "± 320542.24628652236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202425577.85714287,
            "unit": "ns",
            "range": "± 424914.1970799892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436146.505376344,
            "unit": "ns",
            "range": "± 99089.30497652586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2635594.8333333335,
            "unit": "ns",
            "range": "± 86919.41200396081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2268186.5301204817,
            "unit": "ns",
            "range": "± 116606.81350499512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5661621.038461538,
            "unit": "ns",
            "range": "± 136436.2514748865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46688.849315068495,
            "unit": "ns",
            "range": "± 2318.07552287592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5892489.692908654,
            "unit": "ns",
            "range": "± 15020.934937459102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840383.268391927,
            "unit": "ns",
            "range": "± 715.7412550293092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363611.9154947917,
            "unit": "ns",
            "range": "± 434.5563299374878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589153.7039620536,
            "unit": "ns",
            "range": "± 1962.4163087106697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837296.0094401041,
            "unit": "ns",
            "range": "± 3297.5266189832128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736516.0973772322,
            "unit": "ns",
            "range": "± 1205.9731027204043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330758.26666666666,
            "unit": "ns",
            "range": "± 3550.908565155577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280188.2068965517,
            "unit": "ns",
            "range": "± 7248.615717004722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249757.95918367346,
            "unit": "ns",
            "range": "± 9821.117636160323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5619752.333333333,
            "unit": "ns",
            "range": "± 31788.9628232969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982326.6923076925,
            "unit": "ns",
            "range": "± 27797.48679402695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20162.354166666668,
            "unit": "ns",
            "range": "± 1451.2004539194922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92264.77173913043,
            "unit": "ns",
            "range": "± 5185.78473954587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79172.69230769231,
            "unit": "ns",
            "range": "± 2758.844782587987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191797.01030927835,
            "unit": "ns",
            "range": "± 14042.377093918583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5970.072164948454,
            "unit": "ns",
            "range": "± 585.2503247796101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20979.831578947367,
            "unit": "ns",
            "range": "± 1427.8699107309758"
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
          "id": "b6651c751b7ca992a896ba5139e3d8b6a705df24",
          "message": "Merge pull request #3043 from greymistcube/chore/reorganize-blockchain-code\n\n🧹 Separate block validation related code",
          "timestamp": "2023-04-03T16:49:00+09:00",
          "tree_id": "68febb310cb06ee0c765e5c728e72392a040515b",
          "url": "https://github.com/planetarium/libplanet/commit/b6651c751b7ca992a896ba5139e3d8b6a705df24"
        },
        "date": 1680508906983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258165.296296296,
            "unit": "ns",
            "range": "± 90440.93980256049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471498.9285714286,
            "unit": "ns",
            "range": "± 149081.71584956135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211251.55,
            "unit": "ns",
            "range": "± 93776.22436331863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4443876.491525424,
            "unit": "ns",
            "range": "± 165996.51578545079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7502995.666666667,
            "unit": "ns",
            "range": "± 172837.61285216053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7505897.153846154,
            "unit": "ns",
            "range": "± 9888.855687474274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21302483.214285713,
            "unit": "ns",
            "range": "± 368972.44692590396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51802867.2,
            "unit": "ns",
            "range": "± 960919.7185467086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102413036,
            "unit": "ns",
            "range": "± 866111.2607741676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203698497.66666666,
            "unit": "ns",
            "range": "± 2225931.153178009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403351.2083333333,
            "unit": "ns",
            "range": "± 101973.21823580281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2621827.4285714286,
            "unit": "ns",
            "range": "± 62098.75524643906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195069.773809524,
            "unit": "ns",
            "range": "± 117518.38097812318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5432980.037037037,
            "unit": "ns",
            "range": "± 151121.78490503345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48148.13157894737,
            "unit": "ns",
            "range": "± 2334.7616371818644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953752.8796875,
            "unit": "ns",
            "range": "± 38782.98690538759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834025.5946614584,
            "unit": "ns",
            "range": "± 5108.063118522408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341268.1496930805,
            "unit": "ns",
            "range": "± 5698.508765104721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619324.4213541667,
            "unit": "ns",
            "range": "± 6377.200773942999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815413.3292317708,
            "unit": "ns",
            "range": "± 3665.2082533425173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763204.5563151041,
            "unit": "ns",
            "range": "± 1551.7438222255464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326674.1,
            "unit": "ns",
            "range": "± 8754.757096415718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276373.06666666665,
            "unit": "ns",
            "range": "± 8206.705290160005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232803.25,
            "unit": "ns",
            "range": "± 2221.9156814457533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5642417.5,
            "unit": "ns",
            "range": "± 39554.486686575285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891708.3571428573,
            "unit": "ns",
            "range": "± 51953.033487515866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19232.78313253012,
            "unit": "ns",
            "range": "± 1018.0302483429888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88465.78823529412,
            "unit": "ns",
            "range": "± 4760.109815395213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74848,
            "unit": "ns",
            "range": "± 1457.395965412283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 178738.85714285713,
            "unit": "ns",
            "range": "± 17123.307830309728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5555.873684210526,
            "unit": "ns",
            "range": "± 408.346829069053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16890.46913580247,
            "unit": "ns",
            "range": "± 891.1963179684338"
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
          "id": "fe7ee7c4537e276f02af01dc87417ab14156a78a",
          "message": "Merge pull request #3051 from greymistcube/refactor/block-validate\n\n🧹 Refactor block validate code",
          "timestamp": "2023-04-04T16:26:25+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/planetarium/libplanet/commit/fe7ee7c4537e276f02af01dc87417ab14156a78a"
        },
        "date": 1680594339650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4138471.3673469387,
            "unit": "ns",
            "range": "± 273248.6790032448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4370686.489795919,
            "unit": "ns",
            "range": "± 310222.6705501101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5422707.363636363,
            "unit": "ns",
            "range": "± 348841.10722483095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5716336.602040816,
            "unit": "ns",
            "range": "± 416761.9536680021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10881113.855421687,
            "unit": "ns",
            "range": "± 580177.4222253079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10733766.484375,
            "unit": "ns",
            "range": "± 495424.40171471215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28063606.05882353,
            "unit": "ns",
            "range": "± 531557.041430935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71504702.2,
            "unit": "ns",
            "range": "± 1140680.9791944586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144064890.40625,
            "unit": "ns",
            "range": "± 4346413.1976392735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286951885.1333333,
            "unit": "ns",
            "range": "± 5260637.762199694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1935827.0625,
            "unit": "ns",
            "range": "± 197594.63742472004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3819513.9595959596,
            "unit": "ns",
            "range": "± 284076.1694162008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3009063.762886598,
            "unit": "ns",
            "range": "± 266648.9191330589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8121172.303030303,
            "unit": "ns",
            "range": "± 592996.213005846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73287.27368421052,
            "unit": "ns",
            "range": "± 17653.996515431096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7406164.090533088,
            "unit": "ns",
            "range": "± 143041.6580935722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2342968.7790178573,
            "unit": "ns",
            "range": "± 29846.182603394533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1721116.832248264,
            "unit": "ns",
            "range": "± 36452.910952937316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3309101.6947916667,
            "unit": "ns",
            "range": "± 40179.0999174478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063608.5403645833,
            "unit": "ns",
            "range": "± 18929.35925396299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993919.09609375,
            "unit": "ns",
            "range": "± 10615.708109363011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 492754.86734693876,
            "unit": "ns",
            "range": "± 62819.77516733888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395803.9166666667,
            "unit": "ns",
            "range": "± 55462.48501439444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372316.0416666667,
            "unit": "ns",
            "range": "± 36058.29218243753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7459832.333333333,
            "unit": "ns",
            "range": "± 277785.49157205655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5245320.576271187,
            "unit": "ns",
            "range": "± 229762.4196379895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29780.0202020202,
            "unit": "ns",
            "range": "± 9386.00526943998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130156.98958333333,
            "unit": "ns",
            "range": "± 27699.278292135223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112057.46391752578,
            "unit": "ns",
            "range": "± 24051.69427809862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 273193.07216494845,
            "unit": "ns",
            "range": "± 53351.10532013516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7149.505617977528,
            "unit": "ns",
            "range": "± 1154.649121472874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25862.433333333334,
            "unit": "ns",
            "range": "± 6877.078934786258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "060cd3e02eaa0f9c9ed3134745815bf2c36fe999",
          "message": "Merge pull request #3044 from dahlia/type-converters",
          "timestamp": "2023-04-04T23:38:34+09:00",
          "tree_id": "d44ad2891cc70450dd4debbdf5635108c13b07d3",
          "url": "https://github.com/planetarium/libplanet/commit/060cd3e02eaa0f9c9ed3134745815bf2c36fe999"
        },
        "date": 1680620379645,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3648615.1649484537,
            "unit": "ns",
            "range": "± 438090.08229631174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3648296.6701030927,
            "unit": "ns",
            "range": "± 422573.6149602793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4711759.845360825,
            "unit": "ns",
            "range": "± 493069.62084310286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5051760.382978723,
            "unit": "ns",
            "range": "± 634296.4991946626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9169594.622448979,
            "unit": "ns",
            "range": "± 977215.5221851197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9702010.91,
            "unit": "ns",
            "range": "± 925508.0262663834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24438471.927083332,
            "unit": "ns",
            "range": "± 2286005.875357405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59117076.30612245,
            "unit": "ns",
            "range": "± 5601076.592213172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123522200.23,
            "unit": "ns",
            "range": "± 10419517.136491958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241174143.7,
            "unit": "ns",
            "range": "± 15836360.801564997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655391.2291666667,
            "unit": "ns",
            "range": "± 211696.3865589475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119022.8,
            "unit": "ns",
            "range": "± 372181.4716157938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535632.4285714286,
            "unit": "ns",
            "range": "± 349012.2156098064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6977902.02020202,
            "unit": "ns",
            "range": "± 859117.2091939158"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67286.56043956045,
            "unit": "ns",
            "range": "± 11070.40563063802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6567712.830141129,
            "unit": "ns",
            "range": "± 294951.69649530546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2158375.5028545675,
            "unit": "ns",
            "range": "± 88948.32028734675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1505560.3548177083,
            "unit": "ns",
            "range": "± 48896.636584161155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2906314.793828125,
            "unit": "ns",
            "range": "± 104769.21649158328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961476.5043874547,
            "unit": "ns",
            "range": "± 46221.197722797464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894435.2857541454,
            "unit": "ns",
            "range": "± 35344.241949510404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429327.58762886596,
            "unit": "ns",
            "range": "± 61902.596259626655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360325.07216494845,
            "unit": "ns",
            "range": "± 51901.19804498885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296095.64646464644,
            "unit": "ns",
            "range": "± 46626.16899323793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6310342.525773196,
            "unit": "ns",
            "range": "± 738547.3382075661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4784864.222222222,
            "unit": "ns",
            "range": "± 581474.7140448692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32504.775280898877,
            "unit": "ns",
            "range": "± 7835.050034290566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122797.07692307692,
            "unit": "ns",
            "range": "± 18520.072186822817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113740.37234042553,
            "unit": "ns",
            "range": "± 22001.896863476446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258862.73958333334,
            "unit": "ns",
            "range": "± 36556.62976324895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5940.903225806452,
            "unit": "ns",
            "range": "± 984.9123119710149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32947.02173913043,
            "unit": "ns",
            "range": "± 7831.678423083978"
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
          "id": "55156ee578fcd4247e83f5afad8ad18c9873433e",
          "message": "Merge pull request #3057 from greymistcube/port/0.53.3-to-main\n\n🔀 Port 0.53.3 to main",
          "timestamp": "2023-04-05T11:49:49+09:00",
          "tree_id": "b8e10152fa0f22ef74a635454380aa248cf9b5d6",
          "url": "https://github.com/planetarium/libplanet/commit/55156ee578fcd4247e83f5afad8ad18c9873433e"
        },
        "date": 1680663754222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306795.3076923075,
            "unit": "ns",
            "range": "± 113296.17764285687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567687.8333333335,
            "unit": "ns",
            "range": "± 139464.53714976134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4292795.705882353,
            "unit": "ns",
            "range": "± 86728.43429043665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4674245.782608695,
            "unit": "ns",
            "range": "± 116669.59038785032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7500544.285714285,
            "unit": "ns",
            "range": "± 113720.3341166583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7648359.666666667,
            "unit": "ns",
            "range": "± 70655.60383059978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20928968.5,
            "unit": "ns",
            "range": "± 233692.53532094424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52806940,
            "unit": "ns",
            "range": "± 1193743.462468172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105086393.64285715,
            "unit": "ns",
            "range": "± 1223348.4061560528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205719055.15384614,
            "unit": "ns",
            "range": "± 1957259.2407843699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410035.471264368,
            "unit": "ns",
            "range": "± 74019.61396455248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642823.4,
            "unit": "ns",
            "range": "± 78723.01633317351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225460.265822785,
            "unit": "ns",
            "range": "± 110417.95673487785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5364927.235294118,
            "unit": "ns",
            "range": "± 109833.91968873357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47926.07462686567,
            "unit": "ns",
            "range": "± 2289.004331074929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5938046.752790178,
            "unit": "ns",
            "range": "± 33137.671760363184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869589.6776041666,
            "unit": "ns",
            "range": "± 3340.9884144725283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346874.4809895833,
            "unit": "ns",
            "range": "± 4151.400334101164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604441.2700520833,
            "unit": "ns",
            "range": "± 6449.857688688697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845282.0143229166,
            "unit": "ns",
            "range": "± 2334.7597850627794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771643.0257393973,
            "unit": "ns",
            "range": "± 1696.1968959920564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330609.77142857143,
            "unit": "ns",
            "range": "± 9952.226233614367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271674.7619047619,
            "unit": "ns",
            "range": "± 6121.247674328837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234295.7142857143,
            "unit": "ns",
            "range": "± 4116.399274731618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5699287.2,
            "unit": "ns",
            "range": "± 88949.11607141307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3945180.9285714286,
            "unit": "ns",
            "range": "± 54446.57214817856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19187.505263157895,
            "unit": "ns",
            "range": "± 1273.194933126095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87974.1282051282,
            "unit": "ns",
            "range": "± 4539.878547946325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74696.09756097561,
            "unit": "ns",
            "range": "± 2466.089098196556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 188905.2142857143,
            "unit": "ns",
            "range": "± 17222.70439164116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5921.094736842106,
            "unit": "ns",
            "range": "± 621.9096375780247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17637.40425531915,
            "unit": "ns",
            "range": "± 1492.8960908402878"
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
          "id": "a9008dc85e18b93a9e34e91ee57fc87158d225e6",
          "message": "Merge pull request #3058 from greymistcube/port/0.53.4-to-main\n\n🔀 Port 0.53.4 to main",
          "timestamp": "2023-04-05T11:57:40+09:00",
          "tree_id": "6c6797cf881deada6e66d7f68eedc5e7c54df135",
          "url": "https://github.com/planetarium/libplanet/commit/a9008dc85e18b93a9e34e91ee57fc87158d225e6"
        },
        "date": 1680664293313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8626301.2,
            "unit": "ns",
            "range": "± 41113.55399587135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21428082.333333332,
            "unit": "ns",
            "range": "± 148610.96796990585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53377567,
            "unit": "ns",
            "range": "± 272829.05695796304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107289299.46666667,
            "unit": "ns",
            "range": "± 714801.8413582352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214291705.13333333,
            "unit": "ns",
            "range": "± 683889.9905743892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77600.92307692308,
            "unit": "ns",
            "range": "± 4000.03467767186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576156.381443299,
            "unit": "ns",
            "range": "± 107060.10546976283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993857.2653061226,
            "unit": "ns",
            "range": "± 119059.49602838201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558240.3493975904,
            "unit": "ns",
            "range": "± 133243.85802981356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6168544.1034482755,
            "unit": "ns",
            "range": "± 178066.50287931046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6414188.798221983,
            "unit": "ns",
            "range": "± 181561.4600527039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860738.4398716518,
            "unit": "ns",
            "range": "± 2686.694313004068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383107.0923978365,
            "unit": "ns",
            "range": "± 686.4775070564684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537273.51640625,
            "unit": "ns",
            "range": "± 2932.337594786389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796764.9982421875,
            "unit": "ns",
            "range": "± 767.5732249631137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737320.3467447917,
            "unit": "ns",
            "range": "± 313.94946805575216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398836.77419354836,
            "unit": "ns",
            "range": "± 10384.070485474942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326775.962962963,
            "unit": "ns",
            "range": "± 7567.607316620987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312798.25,
            "unit": "ns",
            "range": "± 6009.309461161074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6022732.6,
            "unit": "ns",
            "range": "± 41665.06778517056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4303983.142857143,
            "unit": "ns",
            "range": "± 48986.944485015825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29977.914634146342,
            "unit": "ns",
            "range": "± 1595.4407046347476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134759.53846153847,
            "unit": "ns",
            "range": "± 6749.970427433648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130815.32,
            "unit": "ns",
            "range": "± 3421.8997491646846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247317.0306122449,
            "unit": "ns",
            "range": "± 18232.207079189142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11577.257731958764,
            "unit": "ns",
            "range": "± 1169.793591821068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30489.416666666668,
            "unit": "ns",
            "range": "± 1789.2981962455895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3671413.1333333333,
            "unit": "ns",
            "range": "± 41995.55379164164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3851870.263157895,
            "unit": "ns",
            "range": "± 59998.024049724714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4702974.888888889,
            "unit": "ns",
            "range": "± 100556.20289984098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4855230.375,
            "unit": "ns",
            "range": "± 191406.61312255613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8405312.84,
            "unit": "ns",
            "range": "± 195886.03477887338"
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
          "id": "5f0c1f0c8b33484731f259b0f5adfe04ab36d6cb",
          "message": "Merge pull request #3053 from greymistcube/refactor/block-validate\n\n♻️ Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-05T12:10:48+09:00",
          "tree_id": "d5695dc031f3ab84fe5407544e7651a49e6b3c70",
          "url": "https://github.com/planetarium/libplanet/commit/5f0c1f0c8b33484731f259b0f5adfe04ab36d6cb"
        },
        "date": 1680665150772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3289662.5,
            "unit": "ns",
            "range": "± 42953.68661815781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3434985.785714286,
            "unit": "ns",
            "range": "± 56210.391663379734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277402.533333333,
            "unit": "ns",
            "range": "± 79339.68975043474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317102.130434782,
            "unit": "ns",
            "range": "± 106906.32492442087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7586958.514285714,
            "unit": "ns",
            "range": "± 204861.76962174094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7888891,
            "unit": "ns",
            "range": "± 93911.99112466948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20013028.933333334,
            "unit": "ns",
            "range": "± 80112.11093431742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50643759.28571428,
            "unit": "ns",
            "range": "± 424812.7391243977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101313434.57142857,
            "unit": "ns",
            "range": "± 348180.30097233644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200977100.64285713,
            "unit": "ns",
            "range": "± 796227.0299863366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431632.4583333333,
            "unit": "ns",
            "range": "± 82426.67757466782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679290.388888889,
            "unit": "ns",
            "range": "± 88396.56981977065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271093.705263158,
            "unit": "ns",
            "range": "± 143583.8200713225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5474636.666666667,
            "unit": "ns",
            "range": "± 79244.60974078739"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46056.21978021978,
            "unit": "ns",
            "range": "± 3464.662554683589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6186276.099479167,
            "unit": "ns",
            "range": "± 39475.16278568422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851011.0791666666,
            "unit": "ns",
            "range": "± 3518.259101053232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366243.3838641827,
            "unit": "ns",
            "range": "± 1003.1836793332137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2503175.919596354,
            "unit": "ns",
            "range": "± 1434.5852855090905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788090.9110026042,
            "unit": "ns",
            "range": "± 933.8297276406956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731129.5514090402,
            "unit": "ns",
            "range": "± 858.0100528034759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321423.89743589744,
            "unit": "ns",
            "range": "± 11052.191446888595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268166.8,
            "unit": "ns",
            "range": "± 10739.583589388807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255651.64444444445,
            "unit": "ns",
            "range": "± 14106.322275555123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5624829.266666667,
            "unit": "ns",
            "range": "± 41995.33532168724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039358.5,
            "unit": "ns",
            "range": "± 43533.75198403754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17336.113402061856,
            "unit": "ns",
            "range": "± 1545.551741263514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84365.3595505618,
            "unit": "ns",
            "range": "± 4490.06886525239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89907.36734693877,
            "unit": "ns",
            "range": "± 8764.71999116109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 192959.21649484537,
            "unit": "ns",
            "range": "± 22874.21362593095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4716.494845360825,
            "unit": "ns",
            "range": "± 519.3506386928321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16214.369565217392,
            "unit": "ns",
            "range": "± 1436.737090186055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61f884b494f29f79ce37bb45d5641c27b800d2c8",
          "message": "Merge pull request #3041 from tkiapril/tx-invoice-tests",
          "timestamp": "2023-04-05T12:40:42+09:00",
          "tree_id": "5717727448b25ffa32088f7b329aea2c3cd2a9af",
          "url": "https://github.com/planetarium/libplanet/commit/61f884b494f29f79ce37bb45d5641c27b800d2c8"
        },
        "date": 1680666798783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7543003.076923077,
            "unit": "ns",
            "range": "± 15254.609688339777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19755208.153846152,
            "unit": "ns",
            "range": "± 190861.47030191214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49083320.15384615,
            "unit": "ns",
            "range": "± 317866.63073864963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97587830.33333333,
            "unit": "ns",
            "range": "± 507113.2101074904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194491416.7142857,
            "unit": "ns",
            "range": "± 962413.1569950313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47121.12048192771,
            "unit": "ns",
            "range": "± 2442.967080424701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341802.5252525252,
            "unit": "ns",
            "range": "± 90033.14769644267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572309.6551724137,
            "unit": "ns",
            "range": "± 73202.47401180016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132522.763157895,
            "unit": "ns",
            "range": "± 103680.54089813492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5302239.043478261,
            "unit": "ns",
            "range": "± 128449.93216901789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5672435.413541666,
            "unit": "ns",
            "range": "± 24701.17450954554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1784670.578125,
            "unit": "ns",
            "range": "± 3202.4960627665405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327302.4294270833,
            "unit": "ns",
            "range": "± 6310.935144175071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539392.7170758927,
            "unit": "ns",
            "range": "± 6466.6021776707885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799506.5166015625,
            "unit": "ns",
            "range": "± 1430.0671837123436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751009.0967447917,
            "unit": "ns",
            "range": "± 2254.0845382163843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317251.9090909091,
            "unit": "ns",
            "range": "± 11218.246780524694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253547.58823529413,
            "unit": "ns",
            "range": "± 8194.918640369875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226603,
            "unit": "ns",
            "range": "± 1660.8230891137482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5490886.066666666,
            "unit": "ns",
            "range": "± 31086.12212746726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870918.714285714,
            "unit": "ns",
            "range": "± 52578.3048128124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16515.12162162162,
            "unit": "ns",
            "range": "± 812.6524970096161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81660.88888888889,
            "unit": "ns",
            "range": "± 3649.709821037527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71250.92857142857,
            "unit": "ns",
            "range": "± 1128.4809711279152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154292.16666666666,
            "unit": "ns",
            "range": "± 16257.744255822185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4944.833333333333,
            "unit": "ns",
            "range": "± 387.9289318165775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15956.24,
            "unit": "ns",
            "range": "± 820.2685591860691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3213987.282051282,
            "unit": "ns",
            "range": "± 105421.20238032335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3364522.8947368423,
            "unit": "ns",
            "range": "± 114657.23091559407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4133325.1428571427,
            "unit": "ns",
            "range": "± 69137.29192740301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292859.407407408,
            "unit": "ns",
            "range": "± 119165.7226093978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7486393.475,
            "unit": "ns",
            "range": "± 264127.0126421783"
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
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/planetarium/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680677183524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3576238.769230769,
            "unit": "ns",
            "range": "± 31468.08781436056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3759216.470588235,
            "unit": "ns",
            "range": "± 117552.66383206405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4368504.260869565,
            "unit": "ns",
            "range": "± 107227.13437466089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4726477.9,
            "unit": "ns",
            "range": "± 158283.18705697337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7961137.421052632,
            "unit": "ns",
            "range": "± 173167.19210806256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8338459.2,
            "unit": "ns",
            "range": "± 146737.98459265512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22254991.133333333,
            "unit": "ns",
            "range": "± 171932.80896072107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55735672.4,
            "unit": "ns",
            "range": "± 230761.87256000502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110065766.53333333,
            "unit": "ns",
            "range": "± 465846.0466795666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220558502.6,
            "unit": "ns",
            "range": "± 927114.597611613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521844.5,
            "unit": "ns",
            "range": "± 121033.6566222951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2694776.9285714286,
            "unit": "ns",
            "range": "± 74803.32840877968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335542.0147058824,
            "unit": "ns",
            "range": "± 106144.56688094338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5955798.760869565,
            "unit": "ns",
            "range": "± 223175.5273386782"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50180.52688172043,
            "unit": "ns",
            "range": "± 2971.818410507343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5872723.786272322,
            "unit": "ns",
            "range": "± 18761.49038239488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853421.9673177083,
            "unit": "ns",
            "range": "± 1019.0224459632091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361592.664453125,
            "unit": "ns",
            "range": "± 2573.006861984844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575946.4341145833,
            "unit": "ns",
            "range": "± 4791.231851854223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824156.0186197917,
            "unit": "ns",
            "range": "± 1528.8068822748698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757472.7634765625,
            "unit": "ns",
            "range": "± 1454.1514786228395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354043.88372093026,
            "unit": "ns",
            "range": "± 13134.507910751201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292356.6666666667,
            "unit": "ns",
            "range": "± 12685.872549152198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246190.61904761905,
            "unit": "ns",
            "range": "± 5681.78079897659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5808724.571428572,
            "unit": "ns",
            "range": "± 44908.194627765595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096075.285714286,
            "unit": "ns",
            "range": "± 33137.3876748317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23698.350515463917,
            "unit": "ns",
            "range": "± 1632.409951837806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100799.52325581395,
            "unit": "ns",
            "range": "± 5233.68106364186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95734.80412371134,
            "unit": "ns",
            "range": "± 8364.04646841564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 208160.81632653062,
            "unit": "ns",
            "range": "± 18119.094247717487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7967.469387755102,
            "unit": "ns",
            "range": "± 971.549428936924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21991.893617021276,
            "unit": "ns",
            "range": "± 2146.7361095497604"
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
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/planetarium/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680685697891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8989561.785714285,
            "unit": "ns",
            "range": "± 721927.2283914881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24297487.766666666,
            "unit": "ns",
            "range": "± 1352589.8799416814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66031760.33802817,
            "unit": "ns",
            "range": "± 3200665.8127828874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135043598.24137932,
            "unit": "ns",
            "range": "± 5918186.2586236065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263908549.5357143,
            "unit": "ns",
            "range": "± 11310254.846030794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68225.25,
            "unit": "ns",
            "range": "± 10323.214700373135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698664.4,
            "unit": "ns",
            "range": "± 216089.841052399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3264552.78125,
            "unit": "ns",
            "range": "± 293319.36794078775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658869.9569892474,
            "unit": "ns",
            "range": "± 233238.53802449218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7524479.010526316,
            "unit": "ns",
            "range": "± 508853.3710614963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7328549.6396484375,
            "unit": "ns",
            "range": "± 139990.29024025632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2246456.6370738638,
            "unit": "ns",
            "range": "± 82461.87967482161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592252.8651123047,
            "unit": "ns",
            "range": "± 29787.906367435487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3060498.29640625,
            "unit": "ns",
            "range": "± 81577.19927319742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001459.4400634766,
            "unit": "ns",
            "range": "± 19548.40842991146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937009.3767903646,
            "unit": "ns",
            "range": "± 14703.730254904467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417735.347826087,
            "unit": "ns",
            "range": "± 36032.74897280289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343597.86813186813,
            "unit": "ns",
            "range": "± 24926.42192810619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302727.40449438203,
            "unit": "ns",
            "range": "± 26629.049449084694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6701901.233766234,
            "unit": "ns",
            "range": "± 340319.56794927537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5074332.073170732,
            "unit": "ns",
            "range": "± 267632.19929651753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27262.364583333332,
            "unit": "ns",
            "range": "± 6776.4942964552365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114800.95833333333,
            "unit": "ns",
            "range": "± 12627.69602264605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95536.66666666667,
            "unit": "ns",
            "range": "± 12905.910614636321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235421.56666666668,
            "unit": "ns",
            "range": "± 19586.462074807314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13415.48,
            "unit": "ns",
            "range": "± 5572.001150195301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27561.40625,
            "unit": "ns",
            "range": "± 6241.714446626318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4034971.829787234,
            "unit": "ns",
            "range": "± 276640.4244857358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4376550.12371134,
            "unit": "ns",
            "range": "± 305711.9068029047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5469370.284210526,
            "unit": "ns",
            "range": "± 437449.3776317162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5141522.693877551,
            "unit": "ns",
            "range": "± 329368.7647768485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9928334.384615384,
            "unit": "ns",
            "range": "± 582940.1083802457"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7bd12a0c9db0ef8dedf024dd37fc147e894696a",
          "message": "Merge pull request #3060 from limebell/feature/publish-gossip\n\nImplement `Gossip.PublishMessage()`",
          "timestamp": "2023-04-06T11:35:25+09:00",
          "tree_id": "c54ac2f904324029f65a532b7a9f2fee91b2d2b9",
          "url": "https://github.com/planetarium/libplanet/commit/a7bd12a0c9db0ef8dedf024dd37fc147e894696a"
        },
        "date": 1680749321198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217335.3333333335,
            "unit": "ns",
            "range": "± 75260.10311630541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3405479.25,
            "unit": "ns",
            "range": "± 126111.05664566008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4281388.263157895,
            "unit": "ns",
            "range": "± 91952.38092793351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4368811.647058823,
            "unit": "ns",
            "range": "± 89194.97858339698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7296121.7272727275,
            "unit": "ns",
            "range": "± 167485.56643745292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7601999,
            "unit": "ns",
            "range": "± 39644.43663753708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19417128.214285713,
            "unit": "ns",
            "range": "± 62917.53756756485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50220839.13333333,
            "unit": "ns",
            "range": "± 414048.04576502723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98758506.33333333,
            "unit": "ns",
            "range": "± 490875.89856306376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200774963.26666668,
            "unit": "ns",
            "range": "± 844763.339730675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511265.1666666667,
            "unit": "ns",
            "range": "± 30002.45235907931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619238.8,
            "unit": "ns",
            "range": "± 85370.24492926299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242882.511111111,
            "unit": "ns",
            "range": "± 138091.61216651453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5575105.458333333,
            "unit": "ns",
            "range": "± 130222.65082574975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45451.34117647059,
            "unit": "ns",
            "range": "± 2413.3502279381405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5983755.375520834,
            "unit": "ns",
            "range": "± 18848.25202691246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870717.51953125,
            "unit": "ns",
            "range": "± 6270.1598968815415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358514.722377232,
            "unit": "ns",
            "range": "± 619.6830088284445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545094.37578125,
            "unit": "ns",
            "range": "± 1585.5135653987893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807049.15859375,
            "unit": "ns",
            "range": "± 769.2583059646634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732320.665234375,
            "unit": "ns",
            "range": "± 283.19735937793445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334101.5238095238,
            "unit": "ns",
            "range": "± 7878.685725544887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266600.5333333333,
            "unit": "ns",
            "range": "± 7971.821561982679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236143.92307692306,
            "unit": "ns",
            "range": "± 8147.799445845277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5627063.133333334,
            "unit": "ns",
            "range": "± 34613.57302286957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002316.2,
            "unit": "ns",
            "range": "± 41102.32547331459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18937.526315789473,
            "unit": "ns",
            "range": "± 1704.5079582152914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85739.02816901408,
            "unit": "ns",
            "range": "± 4067.6885011087447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76896.57352941176,
            "unit": "ns",
            "range": "± 3457.104807672043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183778.89795918367,
            "unit": "ns",
            "range": "± 14816.970721112499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6021.6082474226805,
            "unit": "ns",
            "range": "± 651.8076875873269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19241.103092783505,
            "unit": "ns",
            "range": "± 2300.117603354483"
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
          "id": "cdf801bf5a97b71baddab19f251f48fdd53cffe2",
          "message": "Merge pull request #3067 from greymistcube/refactor/remove-mining\n\n🧹 Remove mining",
          "timestamp": "2023-04-06T15:12:36+09:00",
          "tree_id": "486653c5b207b6caa4dcc32c38e8142a14e1ce40",
          "url": "https://github.com/planetarium/libplanet/commit/cdf801bf5a97b71baddab19f251f48fdd53cffe2"
        },
        "date": 1680762489195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3932015.7959183673,
            "unit": "ns",
            "range": "± 154507.91089266536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4281269.121212121,
            "unit": "ns",
            "range": "± 132685.5809542708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5098086.214285715,
            "unit": "ns",
            "range": "± 144203.13546171391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5499966.16,
            "unit": "ns",
            "range": "± 218517.96876662626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8979852.542857142,
            "unit": "ns",
            "range": "± 289815.98588164453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9718726.076923076,
            "unit": "ns",
            "range": "± 96721.32612171728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26194180.285714287,
            "unit": "ns",
            "range": "± 894008.4764060079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69109724.61290322,
            "unit": "ns",
            "range": "± 2100693.617069176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134236464.4,
            "unit": "ns",
            "range": "± 1865467.5995809736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268374022.53333333,
            "unit": "ns",
            "range": "± 2718966.8082139185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646374.9772727273,
            "unit": "ns",
            "range": "± 87873.35149683796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3149760.4,
            "unit": "ns",
            "range": "± 92206.71881817393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2689292.015151515,
            "unit": "ns",
            "range": "± 124696.34486771855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7105943.266666667,
            "unit": "ns",
            "range": "± 357637.57532392564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58027.281690140844,
            "unit": "ns",
            "range": "± 2848.2991475269614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6986529.8953125,
            "unit": "ns",
            "range": "± 21669.37724371875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2212349.105338542,
            "unit": "ns",
            "range": "± 3639.7447477932014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1608385.3888020834,
            "unit": "ns",
            "range": "± 9321.525852104043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3088169.640364583,
            "unit": "ns",
            "range": "± 7171.612061170685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981204.2720424107,
            "unit": "ns",
            "range": "± 1121.3470549961119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899929.0704427083,
            "unit": "ns",
            "range": "± 1760.3653662716629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393267.45454545453,
            "unit": "ns",
            "range": "± 9660.90146009393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317932.9393939394,
            "unit": "ns",
            "range": "± 8627.008903508337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276539.23529411765,
            "unit": "ns",
            "range": "± 5576.655746608039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6802212.2,
            "unit": "ns",
            "range": "± 55652.29914670449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4810676.230769231,
            "unit": "ns",
            "range": "± 99473.91755080632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23044.94680851064,
            "unit": "ns",
            "range": "± 2001.3546131215285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107712.82558139534,
            "unit": "ns",
            "range": "± 5864.920660798025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92360.96153846153,
            "unit": "ns",
            "range": "± 4755.946348922176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 222195.61956521738,
            "unit": "ns",
            "range": "± 17236.094465223796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7319.25,
            "unit": "ns",
            "range": "± 900.4599643340181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22261.22105263158,
            "unit": "ns",
            "range": "± 2119.9269767579535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdd6d97c4565a60d4316b3c352b4dafa6aeb8206",
          "message": "Merge pull request #3061 from planetarium/getPublicKey",
          "timestamp": "2023-04-06T15:51:33+09:00",
          "tree_id": "1987539eef3df45e2448390a3661fb6a915bd517",
          "url": "https://github.com/planetarium/libplanet/commit/cdd6d97c4565a60d4316b3c352b4dafa6aeb8206"
        },
        "date": 1680764627408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228067.7666666666,
            "unit": "ns",
            "range": "± 94695.68254174593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3378631.8846153845,
            "unit": "ns",
            "range": "± 92058.42844686277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4265587.071428572,
            "unit": "ns",
            "range": "± 64227.55560620653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371971.566666666,
            "unit": "ns",
            "range": "± 128696.20309317153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7183874.583333333,
            "unit": "ns",
            "range": "± 224177.82536910608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598132.533333333,
            "unit": "ns",
            "range": "± 24892.154420524515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19200973.066666666,
            "unit": "ns",
            "range": "± 80745.3917910814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49265529.8,
            "unit": "ns",
            "range": "± 274662.31879871275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98423017.53846154,
            "unit": "ns",
            "range": "± 565456.8351558197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197291829.85714287,
            "unit": "ns",
            "range": "± 1151670.6728761052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346190.8817204302,
            "unit": "ns",
            "range": "± 83597.83246993095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605835.891891892,
            "unit": "ns",
            "range": "± 86506.02264896673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157164.475609756,
            "unit": "ns",
            "range": "± 114178.35799604161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5409629.095238095,
            "unit": "ns",
            "range": "± 124538.77874658348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44911.333333333336,
            "unit": "ns",
            "range": "± 2268.7592354563467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6076397.213727678,
            "unit": "ns",
            "range": "± 22552.409867336508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970192.1598958333,
            "unit": "ns",
            "range": "± 1269.3054653621953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344650.2155412945,
            "unit": "ns",
            "range": "± 812.0064448724264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620895.126953125,
            "unit": "ns",
            "range": "± 3291.4252529737237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809718.6633463542,
            "unit": "ns",
            "range": "± 776.3048030839736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729158.901953125,
            "unit": "ns",
            "range": "± 439.75695674046585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324653.8461538461,
            "unit": "ns",
            "range": "± 3731.312410894096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261788.35294117648,
            "unit": "ns",
            "range": "± 4025.648207760715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233223.15384615384,
            "unit": "ns",
            "range": "± 2678.7626448963906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5532933.333333333,
            "unit": "ns",
            "range": "± 28727.181420754674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3925467.3333333335,
            "unit": "ns",
            "range": "± 57949.45162031508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17984.21052631579,
            "unit": "ns",
            "range": "± 1412.4308146847393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83278.52857142857,
            "unit": "ns",
            "range": "± 4026.971983295179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72339.96,
            "unit": "ns",
            "range": "± 1913.10263882173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177556.10204081633,
            "unit": "ns",
            "range": "± 13648.611859849358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5227.835051546392,
            "unit": "ns",
            "range": "± 546.7217200507565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16833.3125,
            "unit": "ns",
            "range": "± 1431.8588162723454"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1040b6aad622f02f2441c0ddbc7ffc2a6a135e9",
          "message": "Merge pull request #3069 from planetarium/peer-dependencies\n\nMove @planetarium/account to peerDependencies",
          "timestamp": "2023-04-06T17:03:22+09:00",
          "tree_id": "e13dadff5e4df1e6fb6e907b34bf8f04f3295ce4",
          "url": "https://github.com/planetarium/libplanet/commit/d1040b6aad622f02f2441c0ddbc7ffc2a6a135e9"
        },
        "date": 1680769297828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7988642.153061224,
            "unit": "ns",
            "range": "± 520635.9535176019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20275007.505050506,
            "unit": "ns",
            "range": "± 1518891.9183858153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58451582.32,
            "unit": "ns",
            "range": "± 4602331.638823874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106168627.74,
            "unit": "ns",
            "range": "± 4281088.599744271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216550509.05333334,
            "unit": "ns",
            "range": "± 10166028.221910706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73114.95833333333,
            "unit": "ns",
            "range": "± 13901.792456875302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1750261,
            "unit": "ns",
            "range": "± 146678.07457873967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3582710.0555555555,
            "unit": "ns",
            "range": "± 219066.66012343636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2870217.212121212,
            "unit": "ns",
            "range": "± 255223.22535329786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7645370.03125,
            "unit": "ns",
            "range": "± 341908.3376328923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7197394.411005435,
            "unit": "ns",
            "range": "± 179736.52252546148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194432.694375,
            "unit": "ns",
            "range": "± 56195.1072689882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1671445.3470052083,
            "unit": "ns",
            "range": "± 22850.458859695846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3000123.125,
            "unit": "ns",
            "range": "± 33606.866328977885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045784.7801983173,
            "unit": "ns",
            "range": "± 27840.307695975876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 960851.1321847098,
            "unit": "ns",
            "range": "± 10619.22031987355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 432070.5806451613,
            "unit": "ns",
            "range": "± 42263.58224706986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308391.6206896552,
            "unit": "ns",
            "range": "± 24015.97949536709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269626.8241758242,
            "unit": "ns",
            "range": "± 19227.27383437589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6146200.880434782,
            "unit": "ns",
            "range": "± 503540.2690371849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4417531.863157894,
            "unit": "ns",
            "range": "± 318160.59677737654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36903.8064516129,
            "unit": "ns",
            "range": "± 6977.124200865694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137108.4105263158,
            "unit": "ns",
            "range": "± 22639.862029922588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105322.51546391753,
            "unit": "ns",
            "range": "± 12949.410129835873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 251274.71134020618,
            "unit": "ns",
            "range": "± 37884.120345237985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14377.83,
            "unit": "ns",
            "range": "± 9567.050180312961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 41632.45360824742,
            "unit": "ns",
            "range": "± 9086.73569002805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3168797.3775510206,
            "unit": "ns",
            "range": "± 236312.80225100368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3315692.505154639,
            "unit": "ns",
            "range": "± 233307.37636673125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4177538.711340206,
            "unit": "ns",
            "range": "± 287141.91184818785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4368170.9375,
            "unit": "ns",
            "range": "± 426180.17636280035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7794325.701030928,
            "unit": "ns",
            "range": "± 646809.4704415986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9a29074df85c7ff7d7e6b3ab6b2613949a420f3",
          "message": "Merge pull request #2613 from tkiapril/feature/index\n\nIndexing in `Libplanet.Explorer`",
          "timestamp": "2023-04-10T13:03:39+09:00",
          "tree_id": "f8edab4937de4eb36ea97b7d78db053df0fcac2d",
          "url": "https://github.com/planetarium/libplanet/commit/d9a29074df85c7ff7d7e6b3ab6b2613949a420f3"
        },
        "date": 1681100418823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8608293.092592593,
            "unit": "ns",
            "range": "± 362740.6348650152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22085055.050847456,
            "unit": "ns",
            "range": "± 910628.8512933666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57478054.538461536,
            "unit": "ns",
            "range": "± 2944419.8359308243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116910315.37704918,
            "unit": "ns",
            "range": "± 5219088.408130377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216646333.86666667,
            "unit": "ns",
            "range": "± 3749749.2263804767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60726.234042553195,
            "unit": "ns",
            "range": "± 11323.797367771796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546920.2857142857,
            "unit": "ns",
            "range": "± 181750.1790113556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012529.3541666665,
            "unit": "ns",
            "range": "± 231920.54438272284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2543955.8020833335,
            "unit": "ns",
            "range": "± 220511.45783815352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6842937.197916667,
            "unit": "ns",
            "range": "± 403758.9055071986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6724030.238020834,
            "unit": "ns",
            "range": "± 109928.81185363495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2155167.5348868533,
            "unit": "ns",
            "range": "± 61106.20193112808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447931.0303385416,
            "unit": "ns",
            "range": "± 20364.38458842308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820893.4739583335,
            "unit": "ns",
            "range": "± 34799.36082384279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914372.4353841146,
            "unit": "ns",
            "range": "± 8072.429103482503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846857.042829241,
            "unit": "ns",
            "range": "± 7473.073530499965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397453.08602150535,
            "unit": "ns",
            "range": "± 27228.437299941907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330802.08247422683,
            "unit": "ns",
            "range": "± 34807.61189311126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282969.8144329897,
            "unit": "ns",
            "range": "± 22297.502901731088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6321428.53164557,
            "unit": "ns",
            "range": "± 326226.5201720029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4659689.626666667,
            "unit": "ns",
            "range": "± 234075.38902275916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24725.0412371134,
            "unit": "ns",
            "range": "± 7558.871583992006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101307.37113402062,
            "unit": "ns",
            "range": "± 14585.380338229947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87923.78125,
            "unit": "ns",
            "range": "± 11567.73252511906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211023.01030927835,
            "unit": "ns",
            "range": "± 21059.019900673815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11976.15,
            "unit": "ns",
            "range": "± 6000.559681598404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24347.3,
            "unit": "ns",
            "range": "± 8289.426574823732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571496.8494623657,
            "unit": "ns",
            "range": "± 221179.15313112852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690781.6666666665,
            "unit": "ns",
            "range": "± 233031.5673587985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4626630.962025316,
            "unit": "ns",
            "range": "± 240158.72136100937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4747981.030612245,
            "unit": "ns",
            "range": "± 333272.1339596048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8576408.81443299,
            "unit": "ns",
            "range": "± 520751.1123932416"
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
          "id": "39536c042478beb86397d6c792cac4c4864182e8",
          "message": "Merge pull request #3072 from greymistcube/refactor/block-propose\n\n♻️ Refactor block propose",
          "timestamp": "2023-04-10T16:03:55+09:00",
          "tree_id": "1fe94d209619d87dda3737690767b19bc5d1c75a",
          "url": "https://github.com/planetarium/libplanet/commit/39536c042478beb86397d6c792cac4c4864182e8"
        },
        "date": 1681111036893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8039745.642857143,
            "unit": "ns",
            "range": "± 75252.9241554078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22224237.266666666,
            "unit": "ns",
            "range": "± 169166.85800435813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55100930.266666666,
            "unit": "ns",
            "range": "± 509059.3569544948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109048868.73333333,
            "unit": "ns",
            "range": "± 1662675.743076351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223416297.26666668,
            "unit": "ns",
            "range": "± 807530.3713774899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48620.846153846156,
            "unit": "ns",
            "range": "± 2462.610620242889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425782.696969697,
            "unit": "ns",
            "range": "± 89679.80237790385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2701611,
            "unit": "ns",
            "range": "± 98448.47915757268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2307952.3636363638,
            "unit": "ns",
            "range": "± 120446.60646629093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5735894.236842105,
            "unit": "ns",
            "range": "± 194712.92418263663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5927960.450520833,
            "unit": "ns",
            "range": "± 34130.754971870854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875276.4100167411,
            "unit": "ns",
            "range": "± 3103.5237328151525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367722.6721354167,
            "unit": "ns",
            "range": "± 5008.147824863054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611975.8174479166,
            "unit": "ns",
            "range": "± 2961.771985474937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828112.1698567708,
            "unit": "ns",
            "range": "± 1659.7215704222328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759986.4975260417,
            "unit": "ns",
            "range": "± 607.7486337822323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346198.6170212766,
            "unit": "ns",
            "range": "± 13435.849044470204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283352.4666666667,
            "unit": "ns",
            "range": "± 10226.421682893955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236133.57894736843,
            "unit": "ns",
            "range": "± 5189.739089093545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5774416.285714285,
            "unit": "ns",
            "range": "± 61762.04402061508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4035823.6428571427,
            "unit": "ns",
            "range": "± 58749.97558311393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20477.239583333332,
            "unit": "ns",
            "range": "± 1563.0667679094784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94803.5612244898,
            "unit": "ns",
            "range": "± 6831.728439076386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84710.94666666667,
            "unit": "ns",
            "range": "± 4171.812503539041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 198293.09375,
            "unit": "ns",
            "range": "± 18384.43607086576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7089.836734693878,
            "unit": "ns",
            "range": "± 764.89121514617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21376.97894736842,
            "unit": "ns",
            "range": "± 1691.302739606035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3574418,
            "unit": "ns",
            "range": "± 44642.77451744441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3735881.7333333334,
            "unit": "ns",
            "range": "± 47785.683183903326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371061.740740741,
            "unit": "ns",
            "range": "± 121894.70040937685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4648017.488372093,
            "unit": "ns",
            "range": "± 169264.04784992448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7647990.675,
            "unit": "ns",
            "range": "± 269918.85397646565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492",
          "message": "Merge pull request #3073 from dahlia/tx-invoice",
          "timestamp": "2023-04-10T16:32:34+09:00",
          "tree_id": "25188c22e036f85cc08e8040104a7c7e52c27b11",
          "url": "https://github.com/planetarium/libplanet/commit/9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492"
        },
        "date": 1681112824068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8388983.875,
            "unit": "ns",
            "range": "± 328414.524285134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22994603.733333334,
            "unit": "ns",
            "range": "± 346300.61499563116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56069417,
            "unit": "ns",
            "range": "± 303261.3768149388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109978356.13333334,
            "unit": "ns",
            "range": "± 1209494.9404026854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222409807.46153846,
            "unit": "ns",
            "range": "± 994598.4283753767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58110.14432989691,
            "unit": "ns",
            "range": "± 8337.879001867635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516802.131868132,
            "unit": "ns",
            "range": "± 80616.2762107847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719626.2580645164,
            "unit": "ns",
            "range": "± 81892.55288973381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2452832.306451613,
            "unit": "ns",
            "range": "± 103034.59374445496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6259830.56,
            "unit": "ns",
            "range": "± 378609.1547394645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6130978.280208333,
            "unit": "ns",
            "range": "± 24176.249362485425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874465.016015625,
            "unit": "ns",
            "range": "± 2282.5433339685983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347501.1393229167,
            "unit": "ns",
            "range": "± 6480.8848210080305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644450.4670758927,
            "unit": "ns",
            "range": "± 1077.904349443863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842132.7224609375,
            "unit": "ns",
            "range": "± 1003.7215638590765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769882.1630859375,
            "unit": "ns",
            "range": "± 1287.4792749583344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363263.9069767442,
            "unit": "ns",
            "range": "± 11694.54107858704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308491.9375,
            "unit": "ns",
            "range": "± 12033.973572024364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252879.5,
            "unit": "ns",
            "range": "± 9702.021690234349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5896877.285714285,
            "unit": "ns",
            "range": "± 86618.71630949281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4260454.071428572,
            "unit": "ns",
            "range": "± 51690.03157798384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22775.375,
            "unit": "ns",
            "range": "± 2300.211025788263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96791.22222222222,
            "unit": "ns",
            "range": "± 8748.45360510791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99544.44,
            "unit": "ns",
            "range": "± 23321.007078121173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219022.58163265305,
            "unit": "ns",
            "range": "± 17700.74104449289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8615.770833333334,
            "unit": "ns",
            "range": "± 1325.7869042010018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24408.03092783505,
            "unit": "ns",
            "range": "± 2518.6745127381664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3605319.84375,
            "unit": "ns",
            "range": "± 111488.05184474293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3859634.8,
            "unit": "ns",
            "range": "± 101228.89941571362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4283988.833333333,
            "unit": "ns",
            "range": "± 89843.95180353806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4757473.276595744,
            "unit": "ns",
            "range": "± 181647.73227473078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7591945.96,
            "unit": "ns",
            "range": "± 188873.78864104816"
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
          "id": "c6be00d46c58b2b7fc3ac49bc56209c33bbaf57d",
          "message": "Merge pull request #3075 from greymistcube/refactor/block-propose\n\n♻️ Simple renaming",
          "timestamp": "2023-04-10T18:36:17+09:00",
          "tree_id": "8aa3d233e946edd28cf7b4d11cb181eb4d19981d",
          "url": "https://github.com/planetarium/libplanet/commit/c6be00d46c58b2b7fc3ac49bc56209c33bbaf57d"
        },
        "date": 1681120153405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7526477,
            "unit": "ns",
            "range": "± 13149.76450993198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20800578.529411763,
            "unit": "ns",
            "range": "± 410748.05924330273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51107569.5,
            "unit": "ns",
            "range": "± 561536.3750617586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101932756.26666667,
            "unit": "ns",
            "range": "± 1596685.5867833334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204839931.5,
            "unit": "ns",
            "range": "± 3336492.0361491092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47930.80952380953,
            "unit": "ns",
            "range": "± 2060.16143947071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380839.8494623655,
            "unit": "ns",
            "range": "± 78246.13811555706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596920.4615384615,
            "unit": "ns",
            "range": "± 68789.91412655247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223909.6666666665,
            "unit": "ns",
            "range": "± 111983.78772349551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5392712.8,
            "unit": "ns",
            "range": "± 140053.6044731326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6034486.081473215,
            "unit": "ns",
            "range": "± 35344.36950889918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867598.699609375,
            "unit": "ns",
            "range": "± 2348.8220865709036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354064.075892857,
            "unit": "ns",
            "range": "± 5496.167391808301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622757.0348772323,
            "unit": "ns",
            "range": "± 4096.683700808427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818932.0136067708,
            "unit": "ns",
            "range": "± 2081.1932080402635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756692.1962239583,
            "unit": "ns",
            "range": "± 1073.8539386894076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331224.4,
            "unit": "ns",
            "range": "± 8439.275845710934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271108.4285714286,
            "unit": "ns",
            "range": "± 9755.457497348774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223518.3076923077,
            "unit": "ns",
            "range": "± 1220.6471906749157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5659662.133333334,
            "unit": "ns",
            "range": "± 65846.61763074488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4022311.8,
            "unit": "ns",
            "range": "± 74587.0130329096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18572.25806451613,
            "unit": "ns",
            "range": "± 1586.265253486299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85640.14942528735,
            "unit": "ns",
            "range": "± 4685.131681475057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79147.67777777778,
            "unit": "ns",
            "range": "± 4634.660463734896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197948.8969072165,
            "unit": "ns",
            "range": "± 17872.808524453038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6137.308510638298,
            "unit": "ns",
            "range": "± 576.0727818898556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18102.34375,
            "unit": "ns",
            "range": "± 1322.7773717935106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325463.75,
            "unit": "ns",
            "range": "± 86375.05752439528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507990.2285714285,
            "unit": "ns",
            "range": "± 114475.82653815292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242910.117647059,
            "unit": "ns",
            "range": "± 86588.4651244627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4375286.829545454,
            "unit": "ns",
            "range": "± 239470.5285795916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7124400.821428572,
            "unit": "ns",
            "range": "± 198932.26231169346"
          }
        ]
      },
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
          "id": "d81b32a42b9703fb93b86886bbe9698f17771a71",
          "message": "Merge pull request #3028 from colibrishin/pbft/verify/cached-evaluation\n\nfeat: cache evaluated actions in `Context<T>`",
          "timestamp": "2023-04-10T18:54:58+09:00",
          "tree_id": "a30b401d5435ed9f0b18bcaa0d329ee491ffe401",
          "url": "https://github.com/planetarium/libplanet/commit/d81b32a42b9703fb93b86886bbe9698f17771a71"
        },
        "date": 1681121332221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8507652.333333334,
            "unit": "ns",
            "range": "± 140123.76110968407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21982472.166666668,
            "unit": "ns",
            "range": "± 196751.8381924175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56223958.86666667,
            "unit": "ns",
            "range": "± 278191.75576026866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112230333.2,
            "unit": "ns",
            "range": "± 404380.814238121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222942974.06666666,
            "unit": "ns",
            "range": "± 1018275.8691652324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51614.89743589744,
            "unit": "ns",
            "range": "± 2651.5130578289627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503934.03,
            "unit": "ns",
            "range": "± 128899.59253608518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700929.6764705884,
            "unit": "ns",
            "range": "± 81285.34729439829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2401381.0113636362,
            "unit": "ns",
            "range": "± 129659.40223953994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5997297.649122807,
            "unit": "ns",
            "range": "± 259846.25183685138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029814.3921875,
            "unit": "ns",
            "range": "± 25005.775959141687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860345.7310697115,
            "unit": "ns",
            "range": "± 797.0557789153416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361723.113671875,
            "unit": "ns",
            "range": "± 3914.3151823032904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599361.7220052085,
            "unit": "ns",
            "range": "± 2537.5031126974886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827306.4484675481,
            "unit": "ns",
            "range": "± 450.63907405995195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767418.4209735577,
            "unit": "ns",
            "range": "± 809.5317528060966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361451.5263157895,
            "unit": "ns",
            "range": "± 7706.130628477427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295729.6052631579,
            "unit": "ns",
            "range": "± 10177.84014824436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258163.9714285714,
            "unit": "ns",
            "range": "± 8394.695459163533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5885972.357142857,
            "unit": "ns",
            "range": "± 53860.0260970075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4240532.928571428,
            "unit": "ns",
            "range": "± 51060.447589807016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27928.610526315788,
            "unit": "ns",
            "range": "± 1926.7176768460386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117403.13402061856,
            "unit": "ns",
            "range": "± 9724.00303761786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102612.23469387754,
            "unit": "ns",
            "range": "± 7586.584360826589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 220892.34020618556,
            "unit": "ns",
            "range": "± 19671.740090952066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8678.591836734693,
            "unit": "ns",
            "range": "± 997.021810934478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24781.117021276597,
            "unit": "ns",
            "range": "± 2532.5343414176737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3682114.066666667,
            "unit": "ns",
            "range": "± 105994.9187018703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3951823.9375,
            "unit": "ns",
            "range": "± 53235.459228436266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4438175.576923077,
            "unit": "ns",
            "range": "± 120183.15360687557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4822109.888888889,
            "unit": "ns",
            "range": "± 99544.16395330969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7658136.333333333,
            "unit": "ns",
            "range": "± 147423.04406985882"
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
          "id": "e0fb73f2e94aaecbba1d9ee94d1d796b8c33abfc",
          "message": "Merge pull request #3076 from greymistcube/chore/docs\n\n🧹 Updated `BlockChain<T>.Count` description",
          "timestamp": "2023-04-11T09:02:35+09:00",
          "tree_id": "e2b21b61850aefe125b79bff5a1a8fbed3c50ce0",
          "url": "https://github.com/planetarium/libplanet/commit/e0fb73f2e94aaecbba1d9ee94d1d796b8c33abfc"
        },
        "date": 1681172086511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7664243,
            "unit": "ns",
            "range": "± 34078.33560832062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19353202.733333334,
            "unit": "ns",
            "range": "± 118513.23501826805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49435990,
            "unit": "ns",
            "range": "± 169680.71055241203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100938510,
            "unit": "ns",
            "range": "± 686626.7416882542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196295528.2857143,
            "unit": "ns",
            "range": "± 813667.0529288452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44961.385714285716,
            "unit": "ns",
            "range": "± 2123.562868121739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351238.9263157896,
            "unit": "ns",
            "range": "± 86560.5560932655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602698.8181818184,
            "unit": "ns",
            "range": "± 82308.80066571501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171652.6341463416,
            "unit": "ns",
            "range": "± 73143.68467569709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5441291.142857143,
            "unit": "ns",
            "range": "± 178404.56583829233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6213877.683035715,
            "unit": "ns",
            "range": "± 17791.87568406285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846995.4673177083,
            "unit": "ns",
            "range": "± 2347.318935054153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344862.9312220982,
            "unit": "ns",
            "range": "± 410.6057885505581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2507614.432091346,
            "unit": "ns",
            "range": "± 859.7592679931944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810912.4583834135,
            "unit": "ns",
            "range": "± 592.7509242068344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726245.7611607143,
            "unit": "ns",
            "range": "± 540.2479359675182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325034.5,
            "unit": "ns",
            "range": "± 6718.702118556435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261443.06666666668,
            "unit": "ns",
            "range": "± 6713.570317587759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233830.875,
            "unit": "ns",
            "range": "± 3989.2200887725744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5542710.733333333,
            "unit": "ns",
            "range": "± 54983.927237832315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3976220.7333333334,
            "unit": "ns",
            "range": "± 29527.482453921915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17585.302083333332,
            "unit": "ns",
            "range": "± 1721.3882776764603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86363.66666666667,
            "unit": "ns",
            "range": "± 4270.868980295093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75710.88888888889,
            "unit": "ns",
            "range": "± 1573.9360510549523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180070.76530612246,
            "unit": "ns",
            "range": "± 15874.965023941353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5157.122448979592,
            "unit": "ns",
            "range": "± 855.4183309551804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16675.989583333332,
            "unit": "ns",
            "range": "± 1187.0213095661068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144708.6666666665,
            "unit": "ns",
            "range": "± 39744.78690284275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3359480.785714286,
            "unit": "ns",
            "range": "± 50521.40640922355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4167110.722222222,
            "unit": "ns",
            "range": "± 87473.29998267743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240770.923076923,
            "unit": "ns",
            "range": "± 52070.61157451091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7192327.4375,
            "unit": "ns",
            "range": "± 136536.23103678075"
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
          "id": "4f77865065eec3953dc869b5f3dbb5afe1973f11",
          "message": "Merge pull request #3077 from greymistcube/refactor/block-propose\n\n♻️ `BlockChain<T>.ProposeBlock()` overhaul",
          "timestamp": "2023-04-11T14:00:21+09:00",
          "tree_id": "74dd7ab342a5fee24792deb260801bfe6121fac4",
          "url": "https://github.com/planetarium/libplanet/commit/4f77865065eec3953dc869b5f3dbb5afe1973f11"
        },
        "date": 1681190386618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10151733.192982456,
            "unit": "ns",
            "range": "± 441298.4656219658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28313022.20689655,
            "unit": "ns",
            "range": "± 804744.7949931253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73365988.53333333,
            "unit": "ns",
            "range": "± 1201476.4012703507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147498559.82352942,
            "unit": "ns",
            "range": "± 2965538.4971210803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297361956.3125,
            "unit": "ns",
            "range": "± 5678208.009457968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76616.48936170213,
            "unit": "ns",
            "range": "± 15959.135952130846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1935871.7052631578,
            "unit": "ns",
            "range": "± 143618.86902292073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3903098.6666666665,
            "unit": "ns",
            "range": "± 257682.51775529666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3063840.863157895,
            "unit": "ns",
            "range": "± 210670.37175248953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8621267.479591837,
            "unit": "ns",
            "range": "± 528310.5299261311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7801979.434375,
            "unit": "ns",
            "range": "± 134119.48057843288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2483769.165885417,
            "unit": "ns",
            "range": "± 21720.81653749403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1730883.4842447916,
            "unit": "ns",
            "range": "± 19881.35362683109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3387461.066145833,
            "unit": "ns",
            "range": "± 41152.512246651335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1125320.9110677084,
            "unit": "ns",
            "range": "± 17588.01326512827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1020567.944921875,
            "unit": "ns",
            "range": "± 18087.458653752583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 484149.29591836734,
            "unit": "ns",
            "range": "± 49400.63813373039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 393854.13402061857,
            "unit": "ns",
            "range": "± 40312.861349964165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348470.43617021275,
            "unit": "ns",
            "range": "± 45962.03795596726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7521508.65,
            "unit": "ns",
            "range": "± 263475.53917190427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5403446.595238095,
            "unit": "ns",
            "range": "± 193704.31944981273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29517.947916666668,
            "unit": "ns",
            "range": "± 8742.826773231438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130596.0612244898,
            "unit": "ns",
            "range": "± 21382.740324617593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98010.27368421052,
            "unit": "ns",
            "range": "± 12978.844263402725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 266369.6354166667,
            "unit": "ns",
            "range": "± 38115.444262790515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6988.853932584269,
            "unit": "ns",
            "range": "± 1070.1346086799488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27453.3125,
            "unit": "ns",
            "range": "± 7574.134492590035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4314335.795918368,
            "unit": "ns",
            "range": "± 274223.25464053673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4441139.139784946,
            "unit": "ns",
            "range": "± 300165.81562531873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5621255.389610389,
            "unit": "ns",
            "range": "± 286591.1184054253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5918398.72368421,
            "unit": "ns",
            "range": "± 300870.7407918823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10205407.80412371,
            "unit": "ns",
            "range": "± 701137.7998627874"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f179e0f94fb9d44e1cc3e9807d9fab2de338ae",
          "message": "Merge pull request #3074 from dahlia/fix-tx-analyze",
          "timestamp": "2023-04-12T02:09:41+09:00",
          "tree_id": "3bc2823e7b1099ea36123395acd5a02b1f3e490e",
          "url": "https://github.com/planetarium/libplanet/commit/11f179e0f94fb9d44e1cc3e9807d9fab2de338ae"
        },
        "date": 1681234011786,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8705739.5,
            "unit": "ns",
            "range": "± 446044.0869852004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24109885.724137932,
            "unit": "ns",
            "range": "± 687686.0849657295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62165889.07692308,
            "unit": "ns",
            "range": "± 2175750.322051554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122350838.1904762,
            "unit": "ns",
            "range": "± 2861057.4370651073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277081900.0769231,
            "unit": "ns",
            "range": "± 3517520.5147201926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56241.71578947368,
            "unit": "ns",
            "range": "± 5261.589379773358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1728424.5051546392,
            "unit": "ns",
            "range": "± 112137.78768988508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3263472.12,
            "unit": "ns",
            "range": "± 214657.26059560556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2818051.616438356,
            "unit": "ns",
            "range": "± 138737.23990081134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6931480.263157895,
            "unit": "ns",
            "range": "± 237990.4612042238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6678746.346435547,
            "unit": "ns",
            "range": "± 203757.52036923103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2216320.077864583,
            "unit": "ns",
            "range": "± 11837.8207916693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1532207.6761067708,
            "unit": "ns",
            "range": "± 49860.06150758641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3064618.5747395833,
            "unit": "ns",
            "range": "± 26637.393893365836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957729.5012044271,
            "unit": "ns",
            "range": "± 14793.202638888084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 871938.1125183105,
            "unit": "ns",
            "range": "± 26554.1032206005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408387.8775510204,
            "unit": "ns",
            "range": "± 16214.353257778346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325017.1263157895,
            "unit": "ns",
            "range": "± 18616.75128962138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272490.7373737374,
            "unit": "ns",
            "range": "± 21802.034947423854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6808008.157894737,
            "unit": "ns",
            "range": "± 151349.34075078063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4849251.2,
            "unit": "ns",
            "range": "± 73937.77809482781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23650.827956989247,
            "unit": "ns",
            "range": "± 2077.3231187383185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105553.17346938775,
            "unit": "ns",
            "range": "± 9764.549730726194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97874.48979591837,
            "unit": "ns",
            "range": "± 9439.946561141878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216027.28125,
            "unit": "ns",
            "range": "± 21170.989303738574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7055.270833333333,
            "unit": "ns",
            "range": "± 729.5358218421336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23031.13829787234,
            "unit": "ns",
            "range": "± 2097.1190817484903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4012074.6,
            "unit": "ns",
            "range": "± 104908.14417781553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4293435.777777778,
            "unit": "ns",
            "range": "± 141194.85724206228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5066914.076923077,
            "unit": "ns",
            "range": "± 66919.53844912254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5634485.5,
            "unit": "ns",
            "range": "± 148399.17245032062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8953903.138888888,
            "unit": "ns",
            "range": "± 296732.78258182324"
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
          "id": "4e9d2cadec1d7eba7e9e0299a362ae5bb3241f62",
          "message": "Merge pull request #3079 from greymistcube/refactor/block-propose\n\n♻️ Refactor `ProposeGenesisBlock()`",
          "timestamp": "2023-04-12T11:02:33+09:00",
          "tree_id": "aaf1ba21470229b637190bdf7e40fe953bccdc1a",
          "url": "https://github.com/planetarium/libplanet/commit/4e9d2cadec1d7eba7e9e0299a362ae5bb3241f62"
        },
        "date": 1681265800758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7786558.866666666,
            "unit": "ns",
            "range": "± 117798.72261062612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21758624,
            "unit": "ns",
            "range": "± 323144.05187138624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55037230.071428575,
            "unit": "ns",
            "range": "± 231634.00517708776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110889247.2,
            "unit": "ns",
            "range": "± 1785934.0168849705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218506060.66666666,
            "unit": "ns",
            "range": "± 3317351.3942404557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51080.77659574468,
            "unit": "ns",
            "range": "± 3330.543825767847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499781.2395833333,
            "unit": "ns",
            "range": "± 109254.09714564675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729618.076923077,
            "unit": "ns",
            "range": "± 73811.25839757676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2386107.0860215053,
            "unit": "ns",
            "range": "± 132868.26830791726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6122372.88,
            "unit": "ns",
            "range": "± 386895.26357453596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018927.577083333,
            "unit": "ns",
            "range": "± 47066.2554210254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862634.7037760417,
            "unit": "ns",
            "range": "± 5063.771075091877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355719.9877232143,
            "unit": "ns",
            "range": "± 3118.7026456345175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606410.9280133927,
            "unit": "ns",
            "range": "± 3935.8252000742414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826948.6450520833,
            "unit": "ns",
            "range": "± 470.67543763358555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752348.325390625,
            "unit": "ns",
            "range": "± 289.9476376872259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358195.3846153846,
            "unit": "ns",
            "range": "± 9702.267162171627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288779.6857142857,
            "unit": "ns",
            "range": "± 13878.802819295848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239081.05263157896,
            "unit": "ns",
            "range": "± 4999.628369229993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5883118,
            "unit": "ns",
            "range": "± 98989.98494003608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4099021,
            "unit": "ns",
            "range": "± 77074.727316633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23249.438775510203,
            "unit": "ns",
            "range": "± 2688.8128567617246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99263.32291666667,
            "unit": "ns",
            "range": "± 7305.5883490795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85695.40404040404,
            "unit": "ns",
            "range": "± 7570.774199376355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217559.79381443298,
            "unit": "ns",
            "range": "± 20467.34509882864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7270.5204081632655,
            "unit": "ns",
            "range": "± 1102.058263933893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22399.447916666668,
            "unit": "ns",
            "range": "± 2591.392874273933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444769.56097561,
            "unit": "ns",
            "range": "± 122507.71991777675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711189.8333333335,
            "unit": "ns",
            "range": "± 122934.07817769652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252240.05882353,
            "unit": "ns",
            "range": "± 87184.24699986703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4704218.785714285,
            "unit": "ns",
            "range": "± 162456.34676152022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7624686.619047619,
            "unit": "ns",
            "range": "± 277294.00583997153"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c25b7a5803c12c85236b729b04683f2323cb656d",
          "message": "Merge pull request #3080 from moreal/features/explorer/state-query/states\n\nImplement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:59:19+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/planetarium/libplanet/commit/c25b7a5803c12c85236b729b04683f2323cb656d"
        },
        "date": 1681355589547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7916755.088235294,
            "unit": "ns",
            "range": "± 252697.61892480252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21204461.2,
            "unit": "ns",
            "range": "± 232911.9946157469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53610020.733333334,
            "unit": "ns",
            "range": "± 724931.9341613555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105204277.5,
            "unit": "ns",
            "range": "± 834362.0390814262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211543820.46666667,
            "unit": "ns",
            "range": "± 1902952.9713170554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50432.52173913043,
            "unit": "ns",
            "range": "± 3919.999154738249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487206.8988764044,
            "unit": "ns",
            "range": "± 80991.08788261897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2748613.878787879,
            "unit": "ns",
            "range": "± 79844.5573195027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2373296.1666666665,
            "unit": "ns",
            "range": "± 107426.0321265321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6037910.128205128,
            "unit": "ns",
            "range": "± 209306.62691563045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5907665.197916667,
            "unit": "ns",
            "range": "± 19895.188632006975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864772.8143229166,
            "unit": "ns",
            "range": "± 4951.569482097536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368986.847265625,
            "unit": "ns",
            "range": "± 3225.9872162070574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628298.573918269,
            "unit": "ns",
            "range": "± 2379.587247000196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821928.0275390625,
            "unit": "ns",
            "range": "± 587.2872260533421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772478.8166155134,
            "unit": "ns",
            "range": "± 765.9152209977746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340941.17647058825,
            "unit": "ns",
            "range": "± 5737.820625412733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274382.3333333333,
            "unit": "ns",
            "range": "± 5715.707768432327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233164.83333333334,
            "unit": "ns",
            "range": "± 4659.9986903557865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5732209.133333334,
            "unit": "ns",
            "range": "± 30773.64971127703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939109.4,
            "unit": "ns",
            "range": "± 38581.142836142855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19145.114583333332,
            "unit": "ns",
            "range": "± 1467.7890273597632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89325.88421052632,
            "unit": "ns",
            "range": "± 5178.425413486798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77129.74603174604,
            "unit": "ns",
            "range": "± 3525.379773494344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185707.5,
            "unit": "ns",
            "range": "± 13047.691858603906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5972.540816326531,
            "unit": "ns",
            "range": "± 834.8091721986262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18862.021276595744,
            "unit": "ns",
            "range": "± 1502.6673272273654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362586.40625,
            "unit": "ns",
            "range": "± 154503.15617968177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3599560.057142857,
            "unit": "ns",
            "range": "± 117623.83926237134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4703187.266666667,
            "unit": "ns",
            "range": "± 86812.46012975875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4589644.357142857,
            "unit": "ns",
            "range": "± 167693.3451548117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7227720.606060606,
            "unit": "ns",
            "range": "± 224796.30933301864"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12a9d074cb239c566aa8075dbbe971a0f2a63f5e",
          "message": "Merge pull request #3071 from planetarium/web3-zeropad",
          "timestamp": "2023-04-14T14:02:03+09:00",
          "tree_id": "500778c2cd29e55b11bfb39ff512918013f1a0b7",
          "url": "https://github.com/planetarium/libplanet/commit/12a9d074cb239c566aa8075dbbe971a0f2a63f5e"
        },
        "date": 1681449370705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8100557.307692308,
            "unit": "ns",
            "range": "± 221386.39844846283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21583145.5,
            "unit": "ns",
            "range": "± 197802.6483223775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54468993.333333336,
            "unit": "ns",
            "range": "± 747076.6792099597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108852068.26666667,
            "unit": "ns",
            "range": "± 814354.3145387785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216901606.85714287,
            "unit": "ns",
            "range": "± 2616807.1081541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49801.505263157895,
            "unit": "ns",
            "range": "± 2982.104222366668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492709.888888889,
            "unit": "ns",
            "range": "± 112368.6241826962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716812.269230769,
            "unit": "ns",
            "range": "± 72119.00087247891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2356181.670886076,
            "unit": "ns",
            "range": "± 122259.08464768699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6089895.1125,
            "unit": "ns",
            "range": "± 316181.07095740567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873734.322544643,
            "unit": "ns",
            "range": "± 10451.584194235955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881829.3102864583,
            "unit": "ns",
            "range": "± 2592.6347810836123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353504.03515625,
            "unit": "ns",
            "range": "± 3556.1375507911207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618450.94140625,
            "unit": "ns",
            "range": "± 2676.234013482159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845949.2257161458,
            "unit": "ns",
            "range": "± 399.26866996656094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760349.4934895834,
            "unit": "ns",
            "range": "± 714.9135229902337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343322.3333333333,
            "unit": "ns",
            "range": "± 7493.320271569053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283276.12903225806,
            "unit": "ns",
            "range": "± 8589.543611243984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238276.75,
            "unit": "ns",
            "range": "± 8349.095015444673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5863132,
            "unit": "ns",
            "range": "± 52176.24101211054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173973.8666666667,
            "unit": "ns",
            "range": "± 57200.25391660258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21651.892473118278,
            "unit": "ns",
            "range": "± 2116.323701623035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99670.96907216495,
            "unit": "ns",
            "range": "± 6966.202790756968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85938.28947368421,
            "unit": "ns",
            "range": "± 4363.904911325144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204931.42857142858,
            "unit": "ns",
            "range": "± 15289.980106923065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7017.448979591837,
            "unit": "ns",
            "range": "± 870.1307654120004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20581.473684210527,
            "unit": "ns",
            "range": "± 1637.453373330681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3464225.9142857143,
            "unit": "ns",
            "range": "± 107515.34886412632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3757321.2,
            "unit": "ns",
            "range": "± 66279.77391568475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4290672.818181818,
            "unit": "ns",
            "range": "± 157500.8138770072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4617409.625,
            "unit": "ns",
            "range": "± 181869.60071103842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7552722,
            "unit": "ns",
            "range": "± 213215.24797655467"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1168cf632afcf9e8946cdc460fe48da61842bf87",
          "message": "Merge pull request #3084 from planetarium/getAddress",
          "timestamp": "2023-04-14T16:03:32+09:00",
          "tree_id": "10e96fc60eda2c1a7e345db24dd4974122b0a4a3",
          "url": "https://github.com/planetarium/libplanet/commit/1168cf632afcf9e8946cdc460fe48da61842bf87"
        },
        "date": 1681456600948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7808635,
            "unit": "ns",
            "range": "± 71028.74317888096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19870510.2,
            "unit": "ns",
            "range": "± 48741.26971527458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50886101.8,
            "unit": "ns",
            "range": "± 172600.2634810934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101346571.28571428,
            "unit": "ns",
            "range": "± 251077.31799967933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202643974.69230768,
            "unit": "ns",
            "range": "± 597323.2395081947"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49014.755319148935,
            "unit": "ns",
            "range": "± 3846.9291612590937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388729.7575757576,
            "unit": "ns",
            "range": "± 95272.51660016328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626681.1612903224,
            "unit": "ns",
            "range": "± 74660.05539871898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242969.947368421,
            "unit": "ns",
            "range": "± 140533.1908044054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5387433.214285715,
            "unit": "ns",
            "range": "± 76245.45634702394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6304156.509486607,
            "unit": "ns",
            "range": "± 11839.68760647021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860583.8970424107,
            "unit": "ns",
            "range": "± 4522.009014136126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343588.89609375,
            "unit": "ns",
            "range": "± 1462.78771570518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589297.1765625,
            "unit": "ns",
            "range": "± 8062.337139511426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794890.5173688616,
            "unit": "ns",
            "range": "± 1308.7151758993766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741171.3650390625,
            "unit": "ns",
            "range": "± 506.42261653344076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349590.8333333333,
            "unit": "ns",
            "range": "± 5182.505551167194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279937,
            "unit": "ns",
            "range": "± 9568.51207916314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263085.63636363635,
            "unit": "ns",
            "range": "± 6350.936477968124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5821329.071428572,
            "unit": "ns",
            "range": "± 34057.39141612917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4106291,
            "unit": "ns",
            "range": "± 9306.791264252339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21202.041666666668,
            "unit": "ns",
            "range": "± 1902.6364086468998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95240.72631578948,
            "unit": "ns",
            "range": "± 5448.00633150604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90571.77,
            "unit": "ns",
            "range": "± 7295.533800306465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 194089.33673469388,
            "unit": "ns",
            "range": "± 16998.96846533462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6006.122448979592,
            "unit": "ns",
            "range": "± 872.7036230689384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19983.83870967742,
            "unit": "ns",
            "range": "± 1633.804284819319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3386503.714285714,
            "unit": "ns",
            "range": "± 33473.45052983971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450260.8636363638,
            "unit": "ns",
            "range": "± 128778.18064996824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4341231.142857143,
            "unit": "ns",
            "range": "± 36950.61334529383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4574040.157894737,
            "unit": "ns",
            "range": "± 94631.34485421905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7413617.142857143,
            "unit": "ns",
            "range": "± 69151.16903050675"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03e7f025cd5d4145b2014e8e923ab241166793f5",
          "message": "Merge pull request #3088 from riemannulus/add-initialize-state-for-genesis-block",
          "timestamp": "2023-04-17T18:49:44+09:00",
          "tree_id": "aa7ed8bcf37bee09f9d60697aaaada4f4d9a6e3f",
          "url": "https://github.com/planetarium/libplanet/commit/03e7f025cd5d4145b2014e8e923ab241166793f5"
        },
        "date": 1681725833209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8398166.4,
            "unit": "ns",
            "range": "± 127252.71692794168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22304174.266666666,
            "unit": "ns",
            "range": "± 243928.38186339702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55960843.733333334,
            "unit": "ns",
            "range": "± 255218.25535956662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111375227.13333334,
            "unit": "ns",
            "range": "± 405300.0862692212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222673224.7142857,
            "unit": "ns",
            "range": "± 522918.3460656797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52554.045454545456,
            "unit": "ns",
            "range": "± 3316.5274316379005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1527366.4285714286,
            "unit": "ns",
            "range": "± 103841.72348090404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770076.3513513515,
            "unit": "ns",
            "range": "± 92524.3226239026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2429282.8279569894,
            "unit": "ns",
            "range": "± 138297.4417748574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6039210.5869565215,
            "unit": "ns",
            "range": "± 228868.02802426225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955098.0703125,
            "unit": "ns",
            "range": "± 26682.85707301431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871334.7661458333,
            "unit": "ns",
            "range": "± 2986.1515063675897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376572.4364583334,
            "unit": "ns",
            "range": "± 3437.466205228741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601330.258370536,
            "unit": "ns",
            "range": "± 1309.3882015245424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830848.0870643029,
            "unit": "ns",
            "range": "± 361.1677318641155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759299.6953822544,
            "unit": "ns",
            "range": "± 345.7065847380982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355814.5,
            "unit": "ns",
            "range": "± 13549.564919214195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294553.10909090907,
            "unit": "ns",
            "range": "± 12484.578924169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256278.28333333333,
            "unit": "ns",
            "range": "± 11291.3340748358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5890720,
            "unit": "ns",
            "range": "± 36848.01518787293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4345584.2,
            "unit": "ns",
            "range": "± 79207.5542881756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23873.41237113402,
            "unit": "ns",
            "range": "± 2006.7969179379763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110428.6836734694,
            "unit": "ns",
            "range": "± 7679.76341130019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105966.5612244898,
            "unit": "ns",
            "range": "± 8301.627212330219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213933.1326530612,
            "unit": "ns",
            "range": "± 16384.54491447311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8728.505263157895,
            "unit": "ns",
            "range": "± 925.7395878682474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23758.787234042553,
            "unit": "ns",
            "range": "± 1897.4005073854796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3665564.6,
            "unit": "ns",
            "range": "± 68391.10108131237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3852719.3157894737,
            "unit": "ns",
            "range": "± 83734.13816296634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345652.857142857,
            "unit": "ns",
            "range": "± 65671.96272600444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4890692.097560976,
            "unit": "ns",
            "range": "± 173759.0587464154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7686828.421052632,
            "unit": "ns",
            "range": "± 111193.14663599042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38980e74823b774ca23c5128f77211255dcb6785",
          "message": "Merge pull request #3085 from moreal/features/explorer/state-query/balance-with-custom-currencies\n\nSupport `query.stateQuery.balance(...)` with custom currencies instead of `currencyHash`",
          "timestamp": "2023-04-18T14:54:47+09:00",
          "tree_id": "d2b19ea68fcff95a931ffecf0f56685f3c450591",
          "url": "https://github.com/planetarium/libplanet/commit/38980e74823b774ca23c5128f77211255dcb6785"
        },
        "date": 1681798055474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7855359.4,
            "unit": "ns",
            "range": "± 56262.52155463452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19620420,
            "unit": "ns",
            "range": "± 78522.4558924682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49585983,
            "unit": "ns",
            "range": "± 193275.31629997955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99848731.2,
            "unit": "ns",
            "range": "± 443243.2162182036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200202582.07692307,
            "unit": "ns",
            "range": "± 471076.7342814158"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45443.90476190476,
            "unit": "ns",
            "range": "± 2148.0444769971064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357357.2580645161,
            "unit": "ns",
            "range": "± 89330.98087521669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593823.6153846155,
            "unit": "ns",
            "range": "± 70764.52875110632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202713.6,
            "unit": "ns",
            "range": "± 116406.22345662498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5414501.452380952,
            "unit": "ns",
            "range": "± 127882.3036078394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6049839.381138393,
            "unit": "ns",
            "range": "± 18144.235550421607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913056.8524739584,
            "unit": "ns",
            "range": "± 6000.093969217225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345246.5418526786,
            "unit": "ns",
            "range": "± 559.1539197865081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574248.842354911,
            "unit": "ns",
            "range": "± 1462.8975828363978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829310.9982421875,
            "unit": "ns",
            "range": "± 1070.0597203455768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730956.601171875,
            "unit": "ns",
            "range": "± 520.7126384285308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322624.3333333333,
            "unit": "ns",
            "range": "± 4406.686063314025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273779.6862745098,
            "unit": "ns",
            "range": "± 11052.614886062387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237584.07692307694,
            "unit": "ns",
            "range": "± 3604.556270923844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5719585.928571428,
            "unit": "ns",
            "range": "± 38450.14754490904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995824.2666666666,
            "unit": "ns",
            "range": "± 46839.44247634934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19107.154639175256,
            "unit": "ns",
            "range": "± 1815.3857506751272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88561.57894736843,
            "unit": "ns",
            "range": "± 4257.312188891509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80238.475,
            "unit": "ns",
            "range": "± 4131.9707437511215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217049.5,
            "unit": "ns",
            "range": "± 3635.2082100987323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6312.244897959184,
            "unit": "ns",
            "range": "± 629.1075836276531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19679.97894736842,
            "unit": "ns",
            "range": "± 1432.1302462085152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194176.3076923075,
            "unit": "ns",
            "range": "± 47939.47559393551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3464107.6666666665,
            "unit": "ns",
            "range": "± 47362.198838186116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286057.5,
            "unit": "ns",
            "range": "± 83287.34322732757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4359531,
            "unit": "ns",
            "range": "± 58238.63749837101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127175.352941177,
            "unit": "ns",
            "range": "± 139467.0106745414"
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681800760406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7573496.933333334,
            "unit": "ns",
            "range": "± 52717.55261020303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18907197.384615384,
            "unit": "ns",
            "range": "± 157523.40757039806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47683851.05,
            "unit": "ns",
            "range": "± 1695081.121209988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102481348.86666666,
            "unit": "ns",
            "range": "± 1216079.3939955956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182082717.63265306,
            "unit": "ns",
            "range": "± 6885238.84116792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46141.15555555555,
            "unit": "ns",
            "range": "± 2836.9204933594715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391592.306122449,
            "unit": "ns",
            "range": "± 90683.42319486133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652310.1025641025,
            "unit": "ns",
            "range": "± 91245.1329132553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287194.3333333335,
            "unit": "ns",
            "range": "± 168066.87561036105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5532088.970588235,
            "unit": "ns",
            "range": "± 159562.69286633606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5893063.886513158,
            "unit": "ns",
            "range": "± 123094.9379668478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843150.0690569195,
            "unit": "ns",
            "range": "± 6519.034669914404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169908.015234375,
            "unit": "ns",
            "range": "± 15611.952057660617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2287647.6864583334,
            "unit": "ns",
            "range": "± 23000.55015500237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808831.5116536458,
            "unit": "ns",
            "range": "± 5583.743248778021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748401.6732421875,
            "unit": "ns",
            "range": "± 2485.0151165823654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328619.25925925927,
            "unit": "ns",
            "range": "± 7837.58641514177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286007.1891891892,
            "unit": "ns",
            "range": "± 9590.669377165605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226875.23076923078,
            "unit": "ns",
            "range": "± 2461.49839710985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5649217.928571428,
            "unit": "ns",
            "range": "± 47274.209917270935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3950548.3125,
            "unit": "ns",
            "range": "± 76519.39429950096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17423.648351648353,
            "unit": "ns",
            "range": "± 1638.934480241669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86951.75789473685,
            "unit": "ns",
            "range": "± 5502.462718881099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72298.75,
            "unit": "ns",
            "range": "± 8265.712048223155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185806.55102040817,
            "unit": "ns",
            "range": "± 20617.572484086122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5179.688172043011,
            "unit": "ns",
            "range": "± 500.09827248370635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17509.842105263157,
            "unit": "ns",
            "range": "± 1113.3437877392805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2873751.9166666665,
            "unit": "ns",
            "range": "± 111521.34432510224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3773803.189189189,
            "unit": "ns",
            "range": "± 124424.54165317268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3878412.3529411764,
            "unit": "ns",
            "range": "± 77918.35420164268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4278009.894736842,
            "unit": "ns",
            "range": "± 91819.65689321815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7281000.838709678,
            "unit": "ns",
            "range": "± 221460.476781915"
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
          "id": "c07eb314e278089c6ccec691ddd129ba99533bb8",
          "message": "Merge pull request #3087 from greymistcube/refactor/remove-render-reorg\n\n🧹 Remove reorg related render calls from `BlockChain<T>`",
          "timestamp": "2023-04-18T19:24:12+09:00",
          "tree_id": "a0cfdc1da2f65b2dca561dc5489e437971922326",
          "url": "https://github.com/planetarium/libplanet/commit/c07eb314e278089c6ccec691ddd129ba99533bb8"
        },
        "date": 1681814272217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7563483,
            "unit": "ns",
            "range": "± 62542.581193197424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20849032.266666666,
            "unit": "ns",
            "range": "± 298026.21559915226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52389700.3125,
            "unit": "ns",
            "range": "± 988695.6174381624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103719781.35714285,
            "unit": "ns",
            "range": "± 1045061.1488099342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204550245.86666667,
            "unit": "ns",
            "range": "± 2164218.745371604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50068.63829787234,
            "unit": "ns",
            "range": "± 3101.8374847408286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404293.2268041237,
            "unit": "ns",
            "range": "± 81052.31306147094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2682217.761904762,
            "unit": "ns",
            "range": "± 96882.17160533881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282451.447368421,
            "unit": "ns",
            "range": "± 115671.8507470041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5641818,
            "unit": "ns",
            "range": "± 226801.3364105967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5823468.580729167,
            "unit": "ns",
            "range": "± 16847.165442503367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839654.1869791667,
            "unit": "ns",
            "range": "± 12296.178395261031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327450.9998497595,
            "unit": "ns",
            "range": "± 4241.471709338501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659887.7153645833,
            "unit": "ns",
            "range": "± 6140.263220393996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827471.7629557292,
            "unit": "ns",
            "range": "± 1184.3968987375408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760351.8961588541,
            "unit": "ns",
            "range": "± 1462.4441357082678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331474.4166666667,
            "unit": "ns",
            "range": "± 8584.748113175287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272619.94444444444,
            "unit": "ns",
            "range": "± 8631.052698398942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230963.92307692306,
            "unit": "ns",
            "range": "± 2626.984312271978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5680123.785714285,
            "unit": "ns",
            "range": "± 37825.84001442273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085142.5714285714,
            "unit": "ns",
            "range": "± 50254.917407636356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18158.691489361703,
            "unit": "ns",
            "range": "± 1102.8166092738315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90012.52857142857,
            "unit": "ns",
            "range": "± 4354.101021114507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77223.06578947368,
            "unit": "ns",
            "range": "± 3910.4288233236903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191684.26530612246,
            "unit": "ns",
            "range": "± 16485.836482472616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6745.453608247422,
            "unit": "ns",
            "range": "± 755.9734621199037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20679.364583333332,
            "unit": "ns",
            "range": "± 2031.2576872459126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3347007.3333333335,
            "unit": "ns",
            "range": "± 71526.12629703096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579593.68,
            "unit": "ns",
            "range": "± 94106.60610876369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4335831.835820896,
            "unit": "ns",
            "range": "± 205436.2990991698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4378473.456521739,
            "unit": "ns",
            "range": "± 168128.2847001336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7369536.8,
            "unit": "ns",
            "range": "± 167617.18961170514"
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
          "id": "0f617b8088cacd2712175edc0c85c6c4a499e1d1",
          "message": "Merge pull request #3083 from greymistcube/refactor/tx-action-list-encoding\n\n♻️ Refactor `TxActionList` encoding",
          "timestamp": "2023-04-18T20:52:32+09:00",
          "tree_id": "4b290fa35c7819ed5366a09168097282f1c76f08",
          "url": "https://github.com/planetarium/libplanet/commit/0f617b8088cacd2712175edc0c85c6c4a499e1d1"
        },
        "date": 1681819596602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8330576.583333333,
            "unit": "ns",
            "range": "± 89187.86954152487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22307612.14285714,
            "unit": "ns",
            "range": "± 194628.89024296674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56316548.384615384,
            "unit": "ns",
            "range": "± 638270.272088888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110377410.53333333,
            "unit": "ns",
            "range": "± 1244342.551064667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218435234.2,
            "unit": "ns",
            "range": "± 2394663.4474744406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51894.126582278484,
            "unit": "ns",
            "range": "± 2701.4633041689654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516156.9696969697,
            "unit": "ns",
            "range": "± 121197.24541065992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711880.0967741935,
            "unit": "ns",
            "range": "± 80822.03379126875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2385188.8,
            "unit": "ns",
            "range": "± 107766.0175285299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6206672.31,
            "unit": "ns",
            "range": "± 410364.98353892565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6104308.736979167,
            "unit": "ns",
            "range": "± 23599.181879334814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894196.9352864583,
            "unit": "ns",
            "range": "± 2410.289767509876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358794.111328125,
            "unit": "ns",
            "range": "± 3353.3561521646584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625150.883112981,
            "unit": "ns",
            "range": "± 3819.407836055946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823492.2970052083,
            "unit": "ns",
            "range": "± 870.1601754161762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754344.6013020833,
            "unit": "ns",
            "range": "± 558.5680278383828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354796.4375,
            "unit": "ns",
            "range": "± 14002.258896648662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305842.91489361704,
            "unit": "ns",
            "range": "± 11687.158080243436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260844.26506024096,
            "unit": "ns",
            "range": "± 13833.328322044254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5954862.866666666,
            "unit": "ns",
            "range": "± 63710.852588490605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4055674.066666667,
            "unit": "ns",
            "range": "± 65633.16960029397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24600.18556701031,
            "unit": "ns",
            "range": "± 2846.9450268734586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105921.53608247422,
            "unit": "ns",
            "range": "± 7682.791308694734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90922.33673469388,
            "unit": "ns",
            "range": "± 7378.908640205022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123850.97959183673,
            "unit": "ns",
            "range": "± 17027.915349631567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7383.4375,
            "unit": "ns",
            "range": "± 1082.7075010799256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22779.22105263158,
            "unit": "ns",
            "range": "± 2582.9523112332645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515127.3684210526,
            "unit": "ns",
            "range": "± 72593.76021793435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3738089,
            "unit": "ns",
            "range": "± 66892.97870692943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4585861,
            "unit": "ns",
            "range": "± 108940.9962163005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4766555.4186046515,
            "unit": "ns",
            "range": "± 175990.08350827376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7860101.2272727275,
            "unit": "ns",
            "range": "± 183654.5247359659"
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
          "id": "35d6ec84d2d45ad98e1c6595a22c1f684dcad4b1",
          "message": "Merge pull request #3092 from greymistcube/refactor/irenderer\n\n🧹 Remove reorg and unrender methods from `IRenderer`",
          "timestamp": "2023-04-19T11:20:40+09:00",
          "tree_id": "e92557f555adcac33daf383829d2261fcc687c74",
          "url": "https://github.com/planetarium/libplanet/commit/35d6ec84d2d45ad98e1c6595a22c1f684dcad4b1"
        },
        "date": 1681871734625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641402.714285715,
            "unit": "ns",
            "range": "± 37407.10404851869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19704247.6,
            "unit": "ns",
            "range": "± 106991.25556511615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50259543.07692308,
            "unit": "ns",
            "range": "± 120913.60618534041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102968930.71428572,
            "unit": "ns",
            "range": "± 314213.13073023653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201370187.92857143,
            "unit": "ns",
            "range": "± 277990.02364901354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47615.79347826087,
            "unit": "ns",
            "range": "± 3084.6473769940967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391526.6288659794,
            "unit": "ns",
            "range": "± 85062.6615192343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2698789.5,
            "unit": "ns",
            "range": "± 91798.23082312697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227880.632183908,
            "unit": "ns",
            "range": "± 115371.87809408394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5636452.790697674,
            "unit": "ns",
            "range": "± 208393.53052310363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6117330.410416666,
            "unit": "ns",
            "range": "± 16177.016081643429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830660.4813802084,
            "unit": "ns",
            "range": "± 2268.667319835284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340251.9753069195,
            "unit": "ns",
            "range": "± 528.3699514421227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566116.695638021,
            "unit": "ns",
            "range": "± 1731.1518325553277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805398.9675641741,
            "unit": "ns",
            "range": "± 425.2463892666978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722435.4529947917,
            "unit": "ns",
            "range": "± 446.00107553956383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335900.7619047619,
            "unit": "ns",
            "range": "± 7684.560897701065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275073.78125,
            "unit": "ns",
            "range": "± 8517.226671658522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241120.46666666667,
            "unit": "ns",
            "range": "± 6892.586430778154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5665923.133333334,
            "unit": "ns",
            "range": "± 42773.563704477005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927470.8571428573,
            "unit": "ns",
            "range": "± 22315.80694987694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19667.115789473683,
            "unit": "ns",
            "range": "± 1207.751972416398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89182.64130434782,
            "unit": "ns",
            "range": "± 4971.841796351281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80002.22340425532,
            "unit": "ns",
            "range": "± 5001.957496722283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105408.98979591837,
            "unit": "ns",
            "range": "± 10973.49235399532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5864.224489795918,
            "unit": "ns",
            "range": "± 852.6307201603032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19344.40425531915,
            "unit": "ns",
            "range": "± 1503.2033273721015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3319990.6774193547,
            "unit": "ns",
            "range": "± 76294.59839787135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415413.7391304346,
            "unit": "ns",
            "range": "± 85251.8811267888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4278310.714285715,
            "unit": "ns",
            "range": "± 51336.429094939784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4555400.076923077,
            "unit": "ns",
            "range": "± 65179.8507751968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7180827.75,
            "unit": "ns",
            "range": "± 132416.19679958592"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edeeef85a58e08adc7f9a72cb3e5d1151da73faa",
          "message": "Merge pull request #3082 from moreal/exp/action-evaluator-interface\n\nIntroduce `IActionEvaluator`",
          "timestamp": "2023-04-19T14:47:45+09:00",
          "tree_id": "641b86f21b5925da5c668908e3c739694d65b159",
          "url": "https://github.com/planetarium/libplanet/commit/edeeef85a58e08adc7f9a72cb3e5d1151da73faa"
        },
        "date": 1681884353980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9798715.574468086,
            "unit": "ns",
            "range": "± 558727.7018686754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24607324.845360823,
            "unit": "ns",
            "range": "± 1462121.555484147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61511879.01282051,
            "unit": "ns",
            "range": "± 3134177.35873256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125163924.49056605,
            "unit": "ns",
            "range": "± 5150560.377157386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249817032.31578946,
            "unit": "ns",
            "range": "± 5408882.867950872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65584.44329896907,
            "unit": "ns",
            "range": "± 11038.476141215733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753116.6666666667,
            "unit": "ns",
            "range": "± 183637.9576528811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3438773.7319587627,
            "unit": "ns",
            "range": "± 306340.71939119505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692661.989473684,
            "unit": "ns",
            "range": "± 264449.0467255116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7542594.141414141,
            "unit": "ns",
            "range": "± 584753.7704418321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7268088.205566406,
            "unit": "ns",
            "range": "± 136403.26762945377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2259325.8510416667,
            "unit": "ns",
            "range": "± 40534.92753163742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1661734.9963378906,
            "unit": "ns",
            "range": "± 30446.597210149623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222604.938701923,
            "unit": "ns",
            "range": "± 42748.25122179189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037123.9740885417,
            "unit": "ns",
            "range": "± 16972.576206425656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 995926.7836588542,
            "unit": "ns",
            "range": "± 15695.22231513707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414013.13684210525,
            "unit": "ns",
            "range": "± 29401.83012345889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339816.8409090909,
            "unit": "ns",
            "range": "± 25547.3847629708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292709.9347826087,
            "unit": "ns",
            "range": "± 18731.94789704685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6871234.3125,
            "unit": "ns",
            "range": "± 395895.3999129811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4704633.593406593,
            "unit": "ns",
            "range": "± 288752.4323361519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23747.252525252527,
            "unit": "ns",
            "range": "± 7437.808702347967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105499.18279569893,
            "unit": "ns",
            "range": "± 14275.817515573732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99844.05263157895,
            "unit": "ns",
            "range": "± 14552.519680467432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126903.52173913043,
            "unit": "ns",
            "range": "± 17734.79053834814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9532.29,
            "unit": "ns",
            "range": "± 5368.093885687502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24778.35714285714,
            "unit": "ns",
            "range": "± 5611.1777072987625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3848385.762886598,
            "unit": "ns",
            "range": "± 330853.6069803876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4181959.7526881723,
            "unit": "ns",
            "range": "± 322096.5371199549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5149709.106382979,
            "unit": "ns",
            "range": "± 353915.80989458977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5304801.136842106,
            "unit": "ns",
            "range": "± 342234.5608085195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9408692.412371134,
            "unit": "ns",
            "range": "± 554736.4452929946"
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
          "id": "3356ea1fd766780706a90ed4230f41efca0e919a",
          "message": "Merge pull request #3098 from greymistcube/refactor/remove-unused-renderers\n\n🧹 Remove unused renderers",
          "timestamp": "2023-04-19T16:07:10+09:00",
          "tree_id": "c4999b1438bd9f8092db160335197f3e2fd3ef91",
          "url": "https://github.com/planetarium/libplanet/commit/3356ea1fd766780706a90ed4230f41efca0e919a"
        },
        "date": 1681889027654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8420768.489130436,
            "unit": "ns",
            "range": "± 474367.5138664252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22441406.68852459,
            "unit": "ns",
            "range": "± 1011216.250004939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55267848.95384616,
            "unit": "ns",
            "range": "± 2571956.827472855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110167379.32692307,
            "unit": "ns",
            "range": "± 4491773.26132438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221013743.18,
            "unit": "ns",
            "range": "± 8237431.704678521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57732.31958762887,
            "unit": "ns",
            "range": "± 10821.002284857124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575297.5555555555,
            "unit": "ns",
            "range": "± 195576.36771563496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2998535.5,
            "unit": "ns",
            "range": "± 238726.3142827624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2391289.8958333335,
            "unit": "ns",
            "range": "± 210480.61256819777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6738462.094736842,
            "unit": "ns",
            "range": "± 433825.4492728485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6526167.400390625,
            "unit": "ns",
            "range": "± 127985.31328542421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2045368.9560546875,
            "unit": "ns",
            "range": "± 47153.65941049834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466370.3169487847,
            "unit": "ns",
            "range": "± 30170.97344111632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803796.544363839,
            "unit": "ns",
            "range": "± 45661.63310898009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908675.7860677083,
            "unit": "ns",
            "range": "± 8368.198197290916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845305.6342198988,
            "unit": "ns",
            "range": "± 17005.782456945744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392449.94680851063,
            "unit": "ns",
            "range": "± 35276.44419404591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307558.25,
            "unit": "ns",
            "range": "± 30526.579265291253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267691.1458333333,
            "unit": "ns",
            "range": "± 21446.39988140773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6261652.3263157895,
            "unit": "ns",
            "range": "± 378006.23742009694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4110011.8936170214,
            "unit": "ns",
            "range": "± 285343.09559321695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23804.06,
            "unit": "ns",
            "range": "± 7244.809003094078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95802.77894736842,
            "unit": "ns",
            "range": "± 14792.19579831616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84599.32291666667,
            "unit": "ns",
            "range": "± 11703.727144978253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111566.84946236559,
            "unit": "ns",
            "range": "± 18546.88838659785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10282.010204081633,
            "unit": "ns",
            "range": "± 5883.231650154472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21421.88,
            "unit": "ns",
            "range": "± 6549.731761459452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404925.8469387754,
            "unit": "ns",
            "range": "± 253888.49484509585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3693648.9793814435,
            "unit": "ns",
            "range": "± 255901.2787673199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476529.910447761,
            "unit": "ns",
            "range": "± 210064.66706416797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4549038.091836735,
            "unit": "ns",
            "range": "± 374501.66711043706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8449126.051546391,
            "unit": "ns",
            "range": "± 626191.2443438867"
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
          "id": "91a4d0137e9d57aee46c44ff53210d70e5f16b95",
          "message": "Merge pull request #3102 from OnedgeLee/update/bencodex\n\nBump `Bencodex` to `0.9.0`",
          "timestamp": "2023-04-19T16:11:37+09:00",
          "tree_id": "626ce8094a832a2fa99f0d4ba78141fe10bd38a0",
          "url": "https://github.com/planetarium/libplanet/commit/91a4d0137e9d57aee46c44ff53210d70e5f16b95"
        },
        "date": 1681889055563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7651666.285714285,
            "unit": "ns",
            "range": "± 22195.425507310047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19596142.933333334,
            "unit": "ns",
            "range": "± 90770.27735715716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50308576.13333333,
            "unit": "ns",
            "range": "± 373955.1095788421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99936845.73333333,
            "unit": "ns",
            "range": "± 682756.6326865637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199811469.4,
            "unit": "ns",
            "range": "± 1157864.0622825907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45863.40243902439,
            "unit": "ns",
            "range": "± 2430.3944041040236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424044.2346938776,
            "unit": "ns",
            "range": "± 132940.89307517366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656740.8,
            "unit": "ns",
            "range": "± 47972.73410297026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204289.3829787234,
            "unit": "ns",
            "range": "± 125302.2904780058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5445671.347826087,
            "unit": "ns",
            "range": "± 126055.766208167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957222.233258928,
            "unit": "ns",
            "range": "± 13853.314293241812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830726.3876201923,
            "unit": "ns",
            "range": "± 6010.639285966323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352368.0600260417,
            "unit": "ns",
            "range": "± 592.9877982387783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607398.0015625,
            "unit": "ns",
            "range": "± 1491.9961715020888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820302.6944661458,
            "unit": "ns",
            "range": "± 505.8626767148355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719280.8653645833,
            "unit": "ns",
            "range": "± 433.8371181949927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330770.8823529412,
            "unit": "ns",
            "range": "± 6210.437745062269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275488.17647058825,
            "unit": "ns",
            "range": "± 5547.276496571247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240914.2142857143,
            "unit": "ns",
            "range": "± 4260.194762224834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5588704.266666667,
            "unit": "ns",
            "range": "± 24981.97295327363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843782.3571428573,
            "unit": "ns",
            "range": "± 30137.62509556947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17888.4,
            "unit": "ns",
            "range": "± 1677.6072715170292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86648.6081081081,
            "unit": "ns",
            "range": "± 4348.72577721484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75772.08196721312,
            "unit": "ns",
            "range": "± 3402.33610575186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99346.88775510204,
            "unit": "ns",
            "range": "± 11381.910387982096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5418.739583333333,
            "unit": "ns",
            "range": "± 656.6637246405286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17647.35789473684,
            "unit": "ns",
            "range": "± 1618.3493620917443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3162635.6315789474,
            "unit": "ns",
            "range": "± 67295.16554718764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415011.933333333,
            "unit": "ns",
            "range": "± 49383.92009618785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4273909.277777778,
            "unit": "ns",
            "range": "± 86782.87487395707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4333441.235294118,
            "unit": "ns",
            "range": "± 87680.67521376176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7230879.25,
            "unit": "ns",
            "range": "± 186370.91738373914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2858539fc16f710eab1bbe5e419f44c1556b949d",
          "message": "Merge pull request #3101 from moreal/docs/missed-changelog\n\nComplement missed deletion record in changelog",
          "timestamp": "2023-04-19T16:41:31+09:00",
          "tree_id": "ce1dd1a1ae96561528196536bc85094c31f74aee",
          "url": "https://github.com/planetarium/libplanet/commit/2858539fc16f710eab1bbe5e419f44c1556b949d"
        },
        "date": 1681890926281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7847227.733333333,
            "unit": "ns",
            "range": "± 130488.76329973871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22175249.533333335,
            "unit": "ns",
            "range": "± 234852.4633451109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54800895.428571425,
            "unit": "ns",
            "range": "± 391374.17645044456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109774242.86666666,
            "unit": "ns",
            "range": "± 734820.0672316093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216842112.4,
            "unit": "ns",
            "range": "± 1175166.8386557957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49768.06741573034,
            "unit": "ns",
            "range": "± 3005.8305190146425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465537.0430107526,
            "unit": "ns",
            "range": "± 87371.47707594803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683523.4285714286,
            "unit": "ns",
            "range": "± 87912.17607405489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341522.185714286,
            "unit": "ns",
            "range": "± 108898.34254062569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5706119.294117647,
            "unit": "ns",
            "range": "± 216138.7128276926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5964048.2953125,
            "unit": "ns",
            "range": "± 49329.3087654712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848244.3381510417,
            "unit": "ns",
            "range": "± 3039.7319852735554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367687.6610677084,
            "unit": "ns",
            "range": "± 7042.005876803226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662181.831770833,
            "unit": "ns",
            "range": "± 2344.2876242442653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837092.8205729167,
            "unit": "ns",
            "range": "± 544.6518664616149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765758.4902994792,
            "unit": "ns",
            "range": "± 397.4513360776618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336420.9142857143,
            "unit": "ns",
            "range": "± 8908.188227268045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284479.7837837838,
            "unit": "ns",
            "range": "± 8658.276878658218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237981.42857142858,
            "unit": "ns",
            "range": "± 2817.8918392270516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5789626.071428572,
            "unit": "ns",
            "range": "± 31530.415512313197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952293.2666666666,
            "unit": "ns",
            "range": "± 35223.723029609835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20036.40425531915,
            "unit": "ns",
            "range": "± 1502.2908908869522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92428.89705882352,
            "unit": "ns",
            "range": "± 4442.9260935589555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85820.9375,
            "unit": "ns",
            "range": "± 4504.624634451812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112971.13978494624,
            "unit": "ns",
            "range": "± 11467.552760602599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7334.117021276596,
            "unit": "ns",
            "range": "± 651.9210133629305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22224.197916666668,
            "unit": "ns",
            "range": "± 1833.5866814283434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452382.8,
            "unit": "ns",
            "range": "± 62804.83827608916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3696749.210526316,
            "unit": "ns",
            "range": "± 76968.47660610366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4261700.2,
            "unit": "ns",
            "range": "± 68922.80951615365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622966.541666667,
            "unit": "ns",
            "range": "± 181335.8803946667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7427236.862068965,
            "unit": "ns",
            "range": "± 211761.4895759115"
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
          "id": "b845bd27d5ce7c3ac27cd1e252e24303a6c7fe96",
          "message": "Merge pull request #3106 from OnedgeLee/bump/bencodex-0.10.0\n\nBump bencodex to 0.10.0",
          "timestamp": "2023-04-20T17:59:50+09:00",
          "tree_id": "2098680d696851b4e5c2dbbd2b802a56b919da11",
          "url": "https://github.com/planetarium/libplanet/commit/b845bd27d5ce7c3ac27cd1e252e24303a6c7fe96"
        },
        "date": 1681982026684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8221991,
            "unit": "ns",
            "range": "± 187190.82846122564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22037960.07142857,
            "unit": "ns",
            "range": "± 124899.81451144956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55429204.13333333,
            "unit": "ns",
            "range": "± 420839.6173628664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110158035.66666667,
            "unit": "ns",
            "range": "± 850087.9719473296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220793480,
            "unit": "ns",
            "range": "± 2023240.3645654852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50323.64473684211,
            "unit": "ns",
            "range": "± 2572.7729668145867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461943.303030303,
            "unit": "ns",
            "range": "± 109572.72143141662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734126.727272727,
            "unit": "ns",
            "range": "± 65907.78965319424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2340843.0632911394,
            "unit": "ns",
            "range": "± 118042.47003432126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5595015,
            "unit": "ns",
            "range": "± 168376.04746657604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6131699.236607143,
            "unit": "ns",
            "range": "± 26872.862300558754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852507.4376302084,
            "unit": "ns",
            "range": "± 2132.232393125079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381990.9796316964,
            "unit": "ns",
            "range": "± 2696.214144838272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627991.486328125,
            "unit": "ns",
            "range": "± 2075.5898217096483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838034.8742838542,
            "unit": "ns",
            "range": "± 1120.6043548084904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761074.3270089285,
            "unit": "ns",
            "range": "± 352.5183828229275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343008.847826087,
            "unit": "ns",
            "range": "± 12035.976086471188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286237.08108108107,
            "unit": "ns",
            "range": "± 9241.965478723121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237643.7619047619,
            "unit": "ns",
            "range": "± 5483.407981399541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5786872.428571428,
            "unit": "ns",
            "range": "± 33642.15577267555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3896924.533333333,
            "unit": "ns",
            "range": "± 48889.58818583925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21576.630434782608,
            "unit": "ns",
            "range": "± 1788.9483847945833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94574.78947368421,
            "unit": "ns",
            "range": "± 4809.515236322789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84311.11538461539,
            "unit": "ns",
            "range": "± 3923.7934367860694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116301.64285714286,
            "unit": "ns",
            "range": "± 11840.147441135816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7147.09375,
            "unit": "ns",
            "range": "± 834.4548182795759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20651.147368421054,
            "unit": "ns",
            "range": "± 2204.398248417463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3602481.5714285714,
            "unit": "ns",
            "range": "± 54959.13267246755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847847.8666666667,
            "unit": "ns",
            "range": "± 71173.36144118877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379113.37037037,
            "unit": "ns",
            "range": "± 122314.07860603034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4616271.655172414,
            "unit": "ns",
            "range": "± 130590.1661196683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485569.533333333,
            "unit": "ns",
            "range": "± 215163.40528004698"
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
          "id": "52a12ef55668e95bc25e5a3c76c5a141411e9594",
          "message": "Merge pull request #3108 from greymistcube/refactor/blockchain-append\n\n♻️ Streamlined rendering",
          "timestamp": "2023-04-20T22:30:49+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/planetarium/libplanet/commit/52a12ef55668e95bc25e5a3c76c5a141411e9594"
        },
        "date": 1681998164277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7434088.214285715,
            "unit": "ns",
            "range": "± 4283.589188421881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18888964.64285714,
            "unit": "ns",
            "range": "± 36863.74528659486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47589711.92307692,
            "unit": "ns",
            "range": "± 185779.10036225888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96602579.64285715,
            "unit": "ns",
            "range": "± 874766.5745661795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191304128.66666666,
            "unit": "ns",
            "range": "± 1453257.6401496676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45839.32894736842,
            "unit": "ns",
            "range": "± 2199.5552786152502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326377.73,
            "unit": "ns",
            "range": "± 105966.40383486665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566676.935483871,
            "unit": "ns",
            "range": "± 76865.80231890533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2100933.1265822784,
            "unit": "ns",
            "range": "± 106928.95299100709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5369244.633333334,
            "unit": "ns",
            "range": "± 156270.5356891857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017659.85546875,
            "unit": "ns",
            "range": "± 18579.59855824326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839539.2137920673,
            "unit": "ns",
            "range": "± 3342.294382619967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371883.1412259615,
            "unit": "ns",
            "range": "± 1573.5374272018148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562722.650390625,
            "unit": "ns",
            "range": "± 1859.332051769176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819136.6057291667,
            "unit": "ns",
            "range": "± 3107.9760028978994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717612.4014973958,
            "unit": "ns",
            "range": "± 909.5702149612405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311761.4375,
            "unit": "ns",
            "range": "± 9675.677940530626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252676.5,
            "unit": "ns",
            "range": "± 4826.337798747519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231427.11111111112,
            "unit": "ns",
            "range": "± 3972.419486303454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5541488.533333333,
            "unit": "ns",
            "range": "± 23098.586477675788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3688650.230769231,
            "unit": "ns",
            "range": "± 11759.087501119055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14953.13829787234,
            "unit": "ns",
            "range": "± 941.6776335956356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78283.48529411765,
            "unit": "ns",
            "range": "± 3144.5415321699447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69522.92307692308,
            "unit": "ns",
            "range": "± 1152.6480715825958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91707.53846153847,
            "unit": "ns",
            "range": "± 1334.4182012762851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4117.505154639175,
            "unit": "ns",
            "range": "± 277.64032201870975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13835.597701149425,
            "unit": "ns",
            "range": "± 773.3599068842715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3135389.4285714286,
            "unit": "ns",
            "range": "± 40744.57321432613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3253954.2608695654,
            "unit": "ns",
            "range": "± 48841.366429974456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4099096.789473684,
            "unit": "ns",
            "range": "± 78651.40494371275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312891.625,
            "unit": "ns",
            "range": "± 83077.41205395924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6967543.1,
            "unit": "ns",
            "range": "± 159878.0262782258"
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
          "id": "e9dc3f38eef7a23b3ee3971759bc84f66ae197e2",
          "message": "Merge pull request #3110 from greymistcube/refactor/ivalue-tx-action-list\n\nRefactor/ivalue tx action list",
          "timestamp": "2023-04-24T21:04:52+09:00",
          "tree_id": "93624d95bcc66ec6d11aa791342673b303d0d3d9",
          "url": "https://github.com/planetarium/libplanet/commit/e9dc3f38eef7a23b3ee3971759bc84f66ae197e2"
        },
        "date": 1682339208352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10099282.649484536,
            "unit": "ns",
            "range": "± 859390.3797373975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27763992.066666666,
            "unit": "ns",
            "range": "± 476847.2890383351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67833145.64285715,
            "unit": "ns",
            "range": "± 1001787.4080167223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139754227.9,
            "unit": "ns",
            "range": "± 3106849.6141599757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276921869.5294118,
            "unit": "ns",
            "range": "± 11252413.211736053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83167.98924731182,
            "unit": "ns",
            "range": "± 10843.100957766552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1849559.7717391304,
            "unit": "ns",
            "range": "± 156208.73276429344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3646137.966101695,
            "unit": "ns",
            "range": "± 160557.4152143375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2919432.013157895,
            "unit": "ns",
            "range": "± 148560.81312912397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7987988.542553191,
            "unit": "ns",
            "range": "± 455244.1765333407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7640052.491517857,
            "unit": "ns",
            "range": "± 245765.48751927298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2246105.387109375,
            "unit": "ns",
            "range": "± 64547.19129343772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1684621.0098080842,
            "unit": "ns",
            "range": "± 94760.14497115577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3301918.2708333335,
            "unit": "ns",
            "range": "± 78485.57053404427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045996.8295898438,
            "unit": "ns",
            "range": "± 56659.616204805796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955448.1233664773,
            "unit": "ns",
            "range": "± 40212.04408658926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408062.2643678161,
            "unit": "ns",
            "range": "± 24179.649354729463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 396942.4456521739,
            "unit": "ns",
            "range": "± 35100.21144871163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 362919.6777777778,
            "unit": "ns",
            "range": "± 25265.157833579437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5840928.285714285,
            "unit": "ns",
            "range": "± 131836.3704977283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5191339.625,
            "unit": "ns",
            "range": "± 135007.1868063882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32268.479591836734,
            "unit": "ns",
            "range": "± 8633.562443067294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135450.32978723405,
            "unit": "ns",
            "range": "± 13460.603495384725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128620.34736842105,
            "unit": "ns",
            "range": "± 18720.097546327288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136982.4,
            "unit": "ns",
            "range": "± 23422.015194111525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7629.7032967032965,
            "unit": "ns",
            "range": "± 1388.6344811000922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33233.40625,
            "unit": "ns",
            "range": "± 8692.063332753167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4323677.363636363,
            "unit": "ns",
            "range": "± 288248.17504806496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4872384,
            "unit": "ns",
            "range": "± 175045.99800038274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5713780.527777778,
            "unit": "ns",
            "range": "± 189233.54853022777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5773207.6034482755,
            "unit": "ns",
            "range": "± 251043.90831345844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9369449.181818182,
            "unit": "ns",
            "range": "± 293335.01392227015"
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
          "id": "1a612088183b6b385b0ef2dcaead6658b1a6354a",
          "message": "Merge pull request #3111 from greymistcube/refactor/polymorphic-action\n\nMore generic action type attribute",
          "timestamp": "2023-04-25T17:23:41+09:00",
          "tree_id": "bae83567c1d3fd2c26229e68420a96feb2dcd53f",
          "url": "https://github.com/planetarium/libplanet/commit/1a612088183b6b385b0ef2dcaead6658b1a6354a"
        },
        "date": 1682412276798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8762361.474747475,
            "unit": "ns",
            "range": "± 1252323.0848079277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20669662.979797978,
            "unit": "ns",
            "range": "± 2198186.0028569144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62220277.14736842,
            "unit": "ns",
            "range": "± 5039850.616112045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127843422.12,
            "unit": "ns",
            "range": "± 10067811.44237112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241562874.37373737,
            "unit": "ns",
            "range": "± 27581147.96765927"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70010.73913043478,
            "unit": "ns",
            "range": "± 13859.864123201818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710572.2886597938,
            "unit": "ns",
            "range": "± 220170.62563829328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3344075.711340206,
            "unit": "ns",
            "range": "± 452613.12994660425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2472291.46875,
            "unit": "ns",
            "range": "± 282611.35653197154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7180778.638297873,
            "unit": "ns",
            "range": "± 638235.9337742638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6531894.5045421515,
            "unit": "ns",
            "range": "± 241037.4711237277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084534.7173873547,
            "unit": "ns",
            "range": "± 75609.72019637721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543385.3626512096,
            "unit": "ns",
            "range": "± 46037.09230763145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3045504.505234375,
            "unit": "ns",
            "range": "± 248606.69990294526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 959870.5420422676,
            "unit": "ns",
            "range": "± 49479.59124657704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894500.5697021484,
            "unit": "ns",
            "range": "± 23101.68385607222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382622.61176470586,
            "unit": "ns",
            "range": "± 30979.98870741829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 391487.7419354839,
            "unit": "ns",
            "range": "± 17742.062249083214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296358.8645833333,
            "unit": "ns",
            "range": "± 37368.98477632285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4502571.474226804,
            "unit": "ns",
            "range": "± 542435.9096255653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4287164.306122449,
            "unit": "ns",
            "range": "± 411376.6975107282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31767.93,
            "unit": "ns",
            "range": "± 9575.822964084857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105865.29032258065,
            "unit": "ns",
            "range": "± 18477.741834893426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109372.25510204081,
            "unit": "ns",
            "range": "± 23208.383168259857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144095.6875,
            "unit": "ns",
            "range": "± 15527.04407922377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11558.97,
            "unit": "ns",
            "range": "± 8993.974445840075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36524.02298850575,
            "unit": "ns",
            "range": "± 7186.939868531249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300095.2268041237,
            "unit": "ns",
            "range": "± 376497.81769565924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597747.8645833335,
            "unit": "ns",
            "range": "± 351667.758740147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363416.793478261,
            "unit": "ns",
            "range": "± 352273.6881082923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269501.79787234,
            "unit": "ns",
            "range": "± 514552.8535232258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7359923.304347826,
            "unit": "ns",
            "range": "± 593706.2321437278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2065dde564132ae03bde8bdc2c43206728823503",
          "message": "Merge pull request #3089 from moreal/exp/action-evaluation-no-action",
          "timestamp": "2023-04-25T17:53:39+09:00",
          "tree_id": "a4621399f72f951ae0ea8d4674ee67b6b05f01f6",
          "url": "https://github.com/planetarium/libplanet/commit/2065dde564132ae03bde8bdc2c43206728823503"
        },
        "date": 1682413553570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598128.4,
            "unit": "ns",
            "range": "± 19438.74053018868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18780030.866666667,
            "unit": "ns",
            "range": "± 94848.12805733677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48609048.6,
            "unit": "ns",
            "range": "± 193226.36414866967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97271026.53333333,
            "unit": "ns",
            "range": "± 689512.8593739067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195959589.42857143,
            "unit": "ns",
            "range": "± 1961959.8453353383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44516.85526315789,
            "unit": "ns",
            "range": "± 2258.9278501327267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329245.9368421054,
            "unit": "ns",
            "range": "± 96205.1279885529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564981.1333333333,
            "unit": "ns",
            "range": "± 74744.43640267832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2164171.0588235296,
            "unit": "ns",
            "range": "± 116791.38769020444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217273.458333333,
            "unit": "ns",
            "range": "± 130311.42011717435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6259991.26953125,
            "unit": "ns",
            "range": "± 19105.490150417067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862033.7393973214,
            "unit": "ns",
            "range": "± 1819.0751751890314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341845.4008091518,
            "unit": "ns",
            "range": "± 1018.635683737708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555972.668229167,
            "unit": "ns",
            "range": "± 2744.627455049186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795539.7196568081,
            "unit": "ns",
            "range": "± 953.3301529029478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725158.2400251116,
            "unit": "ns",
            "range": "± 326.5103200528215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270938.0333333333,
            "unit": "ns",
            "range": "± 6103.166846037778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263019.15789473685,
            "unit": "ns",
            "range": "± 2869.7667009930715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232817.38095238095,
            "unit": "ns",
            "range": "± 5384.150438798961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175170.066666667,
            "unit": "ns",
            "range": "± 32137.760837340476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840005.933333333,
            "unit": "ns",
            "range": "± 39009.534124853315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16256.27659574468,
            "unit": "ns",
            "range": "± 1371.7021323437748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79526.63636363637,
            "unit": "ns",
            "range": "± 3777.980207065156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69322.38461538461,
            "unit": "ns",
            "range": "± 578.9138592314546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83378.9387755102,
            "unit": "ns",
            "range": "± 12152.764733014737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4844.857142857143,
            "unit": "ns",
            "range": "± 568.0860614342481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15415.430107526881,
            "unit": "ns",
            "range": "± 962.4666724647783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3120691.533333333,
            "unit": "ns",
            "range": "± 20641.128595482325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338551.714285714,
            "unit": "ns",
            "range": "± 94660.50064342303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4168011,
            "unit": "ns",
            "range": "± 56072.30218081957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141744.8,
            "unit": "ns",
            "range": "± 76661.71633239482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6709663.933333334,
            "unit": "ns",
            "range": "± 120340.33058993662"
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
          "id": "7d0cfe946cbd43cec8873a11e1864bfb489e2472",
          "message": "Merge pull request #3112 from greymistcube/refactor/system-action\n\n♻️ Refactor system actions",
          "timestamp": "2023-04-26T18:20:21+09:00",
          "tree_id": "6cba2c0ef3b8209c52d764d825675026e2c4dd98",
          "url": "https://github.com/planetarium/libplanet/commit/7d0cfe946cbd43cec8873a11e1864bfb489e2472"
        },
        "date": 1682501598111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641354.5,
            "unit": "ns",
            "range": "± 27418.881764074693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19510789.92857143,
            "unit": "ns",
            "range": "± 82244.3013639283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50179969.8,
            "unit": "ns",
            "range": "± 191608.53217701078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101030217.28571428,
            "unit": "ns",
            "range": "± 319784.55226302904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200742363.06666666,
            "unit": "ns",
            "range": "± 539766.3530588909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46433.36559139785,
            "unit": "ns",
            "range": "± 2877.4892240380946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373459.4105263157,
            "unit": "ns",
            "range": "± 89789.7437475159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2668096.7916666665,
            "unit": "ns",
            "range": "± 62260.65041628668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283511.402061856,
            "unit": "ns",
            "range": "± 140426.23860475793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5449948.090909091,
            "unit": "ns",
            "range": "± 131207.14652389832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990888.807291667,
            "unit": "ns",
            "range": "± 27666.411453358272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941682.9619140625,
            "unit": "ns",
            "range": "± 3522.965893807251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350755.2427455357,
            "unit": "ns",
            "range": "± 803.1190912776611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562124.0535714286,
            "unit": "ns",
            "range": "± 1675.2991176313972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807287.7572115385,
            "unit": "ns",
            "range": "± 636.4911410132171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726912.8055889423,
            "unit": "ns",
            "range": "± 547.0857420411623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289017.8823529412,
            "unit": "ns",
            "range": "± 4311.184348330992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277598.51785714284,
            "unit": "ns",
            "range": "± 10509.544228489855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259954,
            "unit": "ns",
            "range": "± 6680.585567149035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4389952.6,
            "unit": "ns",
            "range": "± 27839.173073207472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892822.5714285714,
            "unit": "ns",
            "range": "± 28333.292864957097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19851.106382978724,
            "unit": "ns",
            "range": "± 1454.8276657212932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87479.11627906977,
            "unit": "ns",
            "range": "± 3076.1929486925596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74398.23214285714,
            "unit": "ns",
            "range": "± 3210.84504872908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93479.41237113402,
            "unit": "ns",
            "range": "± 11389.3843526481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5930.489130434783,
            "unit": "ns",
            "range": "± 570.4353743975481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18618.791666666668,
            "unit": "ns",
            "range": "± 2060.2797557443077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3317341.4736842103,
            "unit": "ns",
            "range": "± 49554.77210719964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514981.1578947366,
            "unit": "ns",
            "range": "± 66878.93919884326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225702.6,
            "unit": "ns",
            "range": "± 60962.06420131879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4291719.583333333,
            "unit": "ns",
            "range": "± 44029.395037361806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6962987.944444444,
            "unit": "ns",
            "range": "± 147216.67839715327"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da159c4c338fe085826fe39a39370f0f2ea1482c",
          "message": "Merge pull request #3113 from moreal/action-evaluator-evaluation-interface\n\nUpdate return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`",
          "timestamp": "2023-04-26T19:07:03+09:00",
          "tree_id": "da2e57752902c5d97761b111cb1ab5c105eb4624",
          "url": "https://github.com/planetarium/libplanet/commit/da159c4c338fe085826fe39a39370f0f2ea1482c"
        },
        "date": 1682504677861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9840884.6,
            "unit": "ns",
            "range": "± 414863.8809501524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26475947.756756756,
            "unit": "ns",
            "range": "± 879718.4251506716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65079304.68,
            "unit": "ns",
            "range": "± 1735657.8834594612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128480303.84210527,
            "unit": "ns",
            "range": "± 4378449.107272522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254186768.14583334,
            "unit": "ns",
            "range": "± 9979377.561695127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65911.78947368421,
            "unit": "ns",
            "range": "± 8564.023348441662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722432.1063829786,
            "unit": "ns",
            "range": "± 175518.60037427203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3428561.4444444445,
            "unit": "ns",
            "range": "± 224570.9048180307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790887.557894737,
            "unit": "ns",
            "range": "± 273231.74248688505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7396497.739130435,
            "unit": "ns",
            "range": "± 572563.7429458217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7552027.408305921,
            "unit": "ns",
            "range": "± 165169.81359934848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268038.073846726,
            "unit": "ns",
            "range": "± 51467.2552363607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1661002.266015625,
            "unit": "ns",
            "range": "± 24766.90702561903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3171426.533072917,
            "unit": "ns",
            "range": "± 48960.44598104055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991958.107421875,
            "unit": "ns",
            "range": "± 11317.600786372112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942826.0023777174,
            "unit": "ns",
            "range": "± 23190.093504316592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369269,
            "unit": "ns",
            "range": "± 19714.368864126576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335499.7948717949,
            "unit": "ns",
            "range": "± 16766.875543459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284865.38157894736,
            "unit": "ns",
            "range": "± 14383.906186167098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5063215.76,
            "unit": "ns",
            "range": "± 125386.4593653956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4710883.36923077,
            "unit": "ns",
            "range": "± 219052.78978119412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26276.27,
            "unit": "ns",
            "range": "± 6587.928758752933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105646.79569892473,
            "unit": "ns",
            "range": "± 11214.33651389764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95026.41666666667,
            "unit": "ns",
            "range": "± 9146.23226616658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112695.9375,
            "unit": "ns",
            "range": "± 15344.463720842874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11063.666666666666,
            "unit": "ns",
            "range": "± 5641.073417898623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25673.76530612245,
            "unit": "ns",
            "range": "± 7190.898298989688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4006661.3536585364,
            "unit": "ns",
            "range": "± 211996.1269252762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213510.021978022,
            "unit": "ns",
            "range": "± 272558.44908920105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5109961.488888889,
            "unit": "ns",
            "range": "± 322402.6508044844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5011252.207317073,
            "unit": "ns",
            "range": "± 263992.0687353202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8836080.490196079,
            "unit": "ns",
            "range": "± 354121.246658789"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c0806f13e67aaa8b6098acba108d98a2b588d3",
          "message": "Correct typo (#3114)",
          "timestamp": "2023-04-27T10:17:03+09:00",
          "tree_id": "a74c00e6bb5445285df3182f73cbb89c0a158345",
          "url": "https://github.com/planetarium/libplanet/commit/80c0806f13e67aaa8b6098acba108d98a2b588d3"
        },
        "date": 1682559089787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307122.52173913043,
            "unit": "ns",
            "range": "± 7260.12315741748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296365.30303030304,
            "unit": "ns",
            "range": "± 9363.460910251242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246617.09433962265,
            "unit": "ns",
            "range": "± 10227.362731087453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4509447.533333333,
            "unit": "ns",
            "range": "± 73135.50010656996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974337.6666666665,
            "unit": "ns",
            "range": "± 65463.51711085962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25281.44210526316,
            "unit": "ns",
            "range": "± 2601.6106292628406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100025.07142857143,
            "unit": "ns",
            "range": "± 6981.482927059605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91788.35353535354,
            "unit": "ns",
            "range": "± 7357.783061345247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110604.81443298969,
            "unit": "ns",
            "range": "± 13428.877954283429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8429.28125,
            "unit": "ns",
            "range": "± 950.1008334645329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27202.547368421052,
            "unit": "ns",
            "range": "± 2473.5731445533943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3637066.6666666665,
            "unit": "ns",
            "range": "± 85914.87993492938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3830647.59375,
            "unit": "ns",
            "range": "± 116952.57461421768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312874.678571428,
            "unit": "ns",
            "range": "± 122648.44077553792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793933.428571428,
            "unit": "ns",
            "range": "± 81311.55242712988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7302856.2,
            "unit": "ns",
            "range": "± 143725.02440812383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962838.615513393,
            "unit": "ns",
            "range": "± 38983.98160981101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866872.1881975445,
            "unit": "ns",
            "range": "± 941.0315763930403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366418.076953125,
            "unit": "ns",
            "range": "± 2538.85656993081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598549.107291667,
            "unit": "ns",
            "range": "± 3091.932373176528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869305.245954241,
            "unit": "ns",
            "range": "± 459.9898658420525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754488.8736328125,
            "unit": "ns",
            "range": "± 373.3307438542697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58616.34020618557,
            "unit": "ns",
            "range": "± 6867.307053300013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8549213.133333333,
            "unit": "ns",
            "range": "± 140958.8532560714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22221719.466666665,
            "unit": "ns",
            "range": "± 190208.32052623125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55738107.8,
            "unit": "ns",
            "range": "± 293591.29470093525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111503009.53333333,
            "unit": "ns",
            "range": "± 295409.5669688022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222055250.8,
            "unit": "ns",
            "range": "± 915397.5145447702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499735.2736842106,
            "unit": "ns",
            "range": "± 100282.81780209686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2778805.9285714286,
            "unit": "ns",
            "range": "± 99968.80587009298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2414998.0322580645,
            "unit": "ns",
            "range": "± 108671.61841401027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6266712.697916667,
            "unit": "ns",
            "range": "± 360414.88683811174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47c67d3326463e3a171bce0aec3176060eb11873",
          "message": "Merge pull request #3115 from moreal/planetarium-tx/correct-test-data\n\ntest(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-27T13:32:15+09:00",
          "tree_id": "009923f197c382cc054adbcbb4aecaa312b017a4",
          "url": "https://github.com/planetarium/libplanet/commit/47c67d3326463e3a171bce0aec3176060eb11873"
        },
        "date": 1682570706014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282709.6060606061,
            "unit": "ns",
            "range": "± 8003.312150054633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270134.5254237288,
            "unit": "ns",
            "range": "± 11903.450027785964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238226.13333333333,
            "unit": "ns",
            "range": "± 8951.483108706318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239836.133333334,
            "unit": "ns",
            "range": "± 64612.932564250485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4021535.2666666666,
            "unit": "ns",
            "range": "± 37629.92621470057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17565.305263157894,
            "unit": "ns",
            "range": "± 1531.012216092043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83175.43478260869,
            "unit": "ns",
            "range": "± 4026.3287301806668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73611.62857142858,
            "unit": "ns",
            "range": "± 2417.98210821136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86652.37777777777,
            "unit": "ns",
            "range": "± 7198.924315054483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5208.34375,
            "unit": "ns",
            "range": "± 710.7825017560798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17610.479166666668,
            "unit": "ns",
            "range": "± 1529.5416030140786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271094.425531915,
            "unit": "ns",
            "range": "± 106160.199471026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3464037.9565217393,
            "unit": "ns",
            "range": "± 78102.99812978796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4291345.214285715,
            "unit": "ns",
            "range": "± 58657.95791401929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4286505.043478261,
            "unit": "ns",
            "range": "± 95181.12858434141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6850114.666666667,
            "unit": "ns",
            "range": "± 135098.94973771385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6034733.319270833,
            "unit": "ns",
            "range": "± 27201.92193568464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988818.78046875,
            "unit": "ns",
            "range": "± 2652.77389592033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349156.8994140625,
            "unit": "ns",
            "range": "± 1375.5336576435645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554283.7294270834,
            "unit": "ns",
            "range": "± 2693.764807844203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830318.0811941965,
            "unit": "ns",
            "range": "± 785.4718219778887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720150.5899135044,
            "unit": "ns",
            "range": "± 451.30922337970196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47015.46153846154,
            "unit": "ns",
            "range": "± 2653.0315000336764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7646146.866666666,
            "unit": "ns",
            "range": "± 44363.3552155487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19537467.866666667,
            "unit": "ns",
            "range": "± 56950.01229382367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50151803.35714286,
            "unit": "ns",
            "range": "± 211687.123730576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100614771.84615384,
            "unit": "ns",
            "range": "± 198864.85331410632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200644567.4,
            "unit": "ns",
            "range": "± 1636605.3346154743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348794.3333333333,
            "unit": "ns",
            "range": "± 99385.14937548645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569376.121212121,
            "unit": "ns",
            "range": "± 79087.97932396142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556659.4,
            "unit": "ns",
            "range": "± 47761.40299716019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5281216.826086956,
            "unit": "ns",
            "range": "± 120828.71029182825"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07a7ae9bdfd3abace1f0fda495b472ed167947c2",
          "message": "Merge pull request #3068 from limebell/chore/deprecate-graphql-fields\n\nDeprecate pow block fields query",
          "timestamp": "2023-04-28T15:34:41+09:00",
          "tree_id": "7609b3eb033edae67625bdf07021c4af8cb8547d",
          "url": "https://github.com/planetarium/libplanet/commit/07a7ae9bdfd3abace1f0fda495b472ed167947c2"
        },
        "date": 1682664489985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301350.17647058825,
            "unit": "ns",
            "range": "± 8652.058667163303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268483.75,
            "unit": "ns",
            "range": "± 6814.798323711212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227633.9375,
            "unit": "ns",
            "range": "± 4004.6730281634727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4295419.666666667,
            "unit": "ns",
            "range": "± 52379.61613297767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822654.214285714,
            "unit": "ns",
            "range": "± 30847.59597958616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19825.184782608696,
            "unit": "ns",
            "range": "± 1278.3457023477417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90197.98507462686,
            "unit": "ns",
            "range": "± 4296.049631832458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75212.43181818182,
            "unit": "ns",
            "range": "± 2820.1618821895236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90920.46391752578,
            "unit": "ns",
            "range": "± 11979.760043038787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5869.092783505154,
            "unit": "ns",
            "range": "± 543.0272607198276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18245.389473684212,
            "unit": "ns",
            "range": "± 1231.6443453793952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360436.4827586208,
            "unit": "ns",
            "range": "± 96256.8132025026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508192.619047619,
            "unit": "ns",
            "range": "± 71011.30161916214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191982.230769231,
            "unit": "ns",
            "range": "± 62682.57847567356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4496413.705882353,
            "unit": "ns",
            "range": "± 91641.13252912465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7266283.804878049,
            "unit": "ns",
            "range": "± 381711.1900117789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957338.088727678,
            "unit": "ns",
            "range": "± 20047.806932230247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906038.6360677083,
            "unit": "ns",
            "range": "± 4192.603124257602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359907.766015625,
            "unit": "ns",
            "range": "± 5003.349422683288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621718.040625,
            "unit": "ns",
            "range": "± 5220.6923066518175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818431.1156901042,
            "unit": "ns",
            "range": "± 1412.9426684916582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747726.938671875,
            "unit": "ns",
            "range": "± 1248.3689994251017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48730.52380952381,
            "unit": "ns",
            "range": "± 2628.0140492013684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7913403.388888889,
            "unit": "ns",
            "range": "± 167162.76031782664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21337385.866666667,
            "unit": "ns",
            "range": "± 337346.3377496839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54635194.46666667,
            "unit": "ns",
            "range": "± 364074.39657612104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108308181.93333334,
            "unit": "ns",
            "range": "± 1562020.5925755939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209736987,
            "unit": "ns",
            "range": "± 2358788.6106249536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411331.4583333333,
            "unit": "ns",
            "range": "± 85798.47873622748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713436.086956522,
            "unit": "ns",
            "range": "± 103025.69891781072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2353501.1408450706,
            "unit": "ns",
            "range": "± 113215.4835245346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5908753.444444444,
            "unit": "ns",
            "range": "± 271199.49296048674"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d92918f38003c07ab256b4fb0a3b9aa88e9ce7e7",
          "message": "Merge pull request #3120 from limebell/feature/ignore-seed-in-consensus\n\nExclude seed peer when heartbeat in `Gossip`",
          "timestamp": "2023-04-28T18:45:28+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/planetarium/libplanet/commit/d92918f38003c07ab256b4fb0a3b9aa88e9ce7e7"
        },
        "date": 1682675921738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295886.4583333333,
            "unit": "ns",
            "range": "± 7615.0018583409565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272435.2878787879,
            "unit": "ns",
            "range": "± 12325.014898121937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260336.02564102566,
            "unit": "ns",
            "range": "± 9060.31055726359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298734.8,
            "unit": "ns",
            "range": "± 32206.079717079152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825083.4166666665,
            "unit": "ns",
            "range": "± 26239.856573396588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21774.571428571428,
            "unit": "ns",
            "range": "± 1760.3287959472998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97052.67346938775,
            "unit": "ns",
            "range": "± 9506.33133436187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86026.42268041238,
            "unit": "ns",
            "range": "± 6694.7654580448325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92714.8469387755,
            "unit": "ns",
            "range": "± 14519.199391003354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6132.25,
            "unit": "ns",
            "range": "± 777.110423637668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20998.84375,
            "unit": "ns",
            "range": "± 2038.8827762598191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336270.25,
            "unit": "ns",
            "range": "± 66962.17174595079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3570069.8571428573,
            "unit": "ns",
            "range": "± 40699.98374949051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322936.8125,
            "unit": "ns",
            "range": "± 82769.50330745317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4422652.428571428,
            "unit": "ns",
            "range": "± 113333.33636484592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6848180.833333333,
            "unit": "ns",
            "range": "± 201961.65599936477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5936155.608333333,
            "unit": "ns",
            "range": "± 15971.8636279847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1951987.5260416667,
            "unit": "ns",
            "range": "± 10098.881339207855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344124.513392857,
            "unit": "ns",
            "range": "± 961.4545707067049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563925.6841145833,
            "unit": "ns",
            "range": "± 4477.436137726396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803216.5195963542,
            "unit": "ns",
            "range": "± 585.6156709870986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755158.6153645833,
            "unit": "ns",
            "range": "± 459.8598306941794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49512.4,
            "unit": "ns",
            "range": "± 4511.00051976961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7909592.357142857,
            "unit": "ns",
            "range": "± 34841.322006639326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20059474.5,
            "unit": "ns",
            "range": "± 55389.93490872062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51684504.78571428,
            "unit": "ns",
            "range": "± 539365.7778668143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103655984,
            "unit": "ns",
            "range": "± 727313.8887028076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204003387.41666666,
            "unit": "ns",
            "range": "± 318740.1741114991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446591.2448979593,
            "unit": "ns",
            "range": "± 111519.628707936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657991.703703704,
            "unit": "ns",
            "range": "± 72817.9494032443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305934.9176470586,
            "unit": "ns",
            "range": "± 123861.96687770853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5576358.5,
            "unit": "ns",
            "range": "± 161527.8432944452"
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
          "id": "da098726a6d45c70bd6b17bc552897aa09a81230",
          "message": "Merge pull request #3116 from greymistcube/refactor/transaction\n\n♻️ 🧹 Remove distinction between system action and custom action",
          "timestamp": "2023-04-28T19:02:08+09:00",
          "tree_id": "4657e6c865b152b723774737bb46cf651aba8e8b",
          "url": "https://github.com/planetarium/libplanet/commit/da098726a6d45c70bd6b17bc552897aa09a81230"
        },
        "date": 1682676991241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303792.5517241379,
            "unit": "ns",
            "range": "± 8773.550684489175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292397.0909090909,
            "unit": "ns",
            "range": "± 10958.283598876415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241482.88888888888,
            "unit": "ns",
            "range": "± 5118.197073291116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4410120.733333333,
            "unit": "ns",
            "range": "± 70984.58580813429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009363.230769231,
            "unit": "ns",
            "range": "± 37647.55953611922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24864.40425531915,
            "unit": "ns",
            "range": "± 2781.240441594396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102903.28865979382,
            "unit": "ns",
            "range": "± 9034.188687931024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104400.60606060606,
            "unit": "ns",
            "range": "± 12801.415470060556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118299.05154639175,
            "unit": "ns",
            "range": "± 14656.458261754962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9022.114583333334,
            "unit": "ns",
            "range": "± 1240.0622808620003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25582.705263157895,
            "unit": "ns",
            "range": "± 3320.1974463002666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3643267.4736842103,
            "unit": "ns",
            "range": "± 79480.959664961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3785572.1428571427,
            "unit": "ns",
            "range": "± 89928.95197114538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4318116.741935484,
            "unit": "ns",
            "range": "± 130620.22970121376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4642840.341463415,
            "unit": "ns",
            "range": "± 156864.7325764478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7122539.456521739,
            "unit": "ns",
            "range": "± 272263.1719849754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6059718.779575893,
            "unit": "ns",
            "range": "± 22038.788041504286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849834.0399739584,
            "unit": "ns",
            "range": "± 1774.4105561649444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372233.340625,
            "unit": "ns",
            "range": "± 3437.56579070277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654095.43984375,
            "unit": "ns",
            "range": "± 3067.9100607344008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845816.1309407552,
            "unit": "ns",
            "range": "± 480.7111705541712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763188.8901692708,
            "unit": "ns",
            "range": "± 512.6021992239564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53433.63917525773,
            "unit": "ns",
            "range": "± 5145.664417306346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8177013.105263158,
            "unit": "ns",
            "range": "± 277795.9051077558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22040756.266666666,
            "unit": "ns",
            "range": "± 321816.9742762994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55548510.86666667,
            "unit": "ns",
            "range": "± 684776.9312021947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111439227.33333333,
            "unit": "ns",
            "range": "± 807581.277042279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222469987.13333333,
            "unit": "ns",
            "range": "± 1843431.3655486864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557778.71,
            "unit": "ns",
            "range": "± 136179.642109519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2763756.44,
            "unit": "ns",
            "range": "± 66714.72871118241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433393.4102564105,
            "unit": "ns",
            "range": "± 122746.85354619825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5927817.01369863,
            "unit": "ns",
            "range": "± 293809.64494013303"
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
          "id": "2e128e332835e4aca6a0cd2da98e33704ae3a40b",
          "message": "Merge pull request #3121 from greymistcube/remove/transaction-t\n\n♻️ Change `Transaction<T>` to `Transaction`",
          "timestamp": "2023-05-02T10:51:49+09:00",
          "tree_id": "21ae5700d32b3587eb21a0a9ad3d3c38553cfdd0",
          "url": "https://github.com/planetarium/libplanet/commit/2e128e332835e4aca6a0cd2da98e33704ae3a40b"
        },
        "date": 1682993175187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297361.35,
            "unit": "ns",
            "range": "± 10399.420899927369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287970.4166666667,
            "unit": "ns",
            "range": "± 6882.27192592089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238288.85714285713,
            "unit": "ns",
            "range": "± 2880.7584700278785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4372797.733333333,
            "unit": "ns",
            "range": "± 28090.736188966195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3943873.066666667,
            "unit": "ns",
            "range": "± 34534.20334448292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21610.64935064935,
            "unit": "ns",
            "range": "± 1125.498062452841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95926.35869565218,
            "unit": "ns",
            "range": "± 6197.639723689078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84859.81333333334,
            "unit": "ns",
            "range": "± 4150.219117280609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103201.44329896907,
            "unit": "ns",
            "range": "± 12073.78894200252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6346.9157894736845,
            "unit": "ns",
            "range": "± 757.4544809462066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21147.083333333332,
            "unit": "ns",
            "range": "± 1670.0992826880347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3509803.1363636362,
            "unit": "ns",
            "range": "± 84167.63481477814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749947.923076923,
            "unit": "ns",
            "range": "± 100707.02355324502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4226808.461538462,
            "unit": "ns",
            "range": "± 54914.67912986378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680536.133333334,
            "unit": "ns",
            "range": "± 86609.31391506398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920970.2272727275,
            "unit": "ns",
            "range": "± 166982.32810687934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5916231.525,
            "unit": "ns",
            "range": "± 22332.433704088075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852078.0838448661,
            "unit": "ns",
            "range": "± 2109.3719627064056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347713.3733072917,
            "unit": "ns",
            "range": "± 3769.1907201933273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620459.7843191964,
            "unit": "ns",
            "range": "± 1424.30546339402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827762.9291666667,
            "unit": "ns",
            "range": "± 358.84784441879066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751644.0836356027,
            "unit": "ns",
            "range": "± 249.5304730720843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51900.70526315789,
            "unit": "ns",
            "range": "± 3940.504103925932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7983350.277777778,
            "unit": "ns",
            "range": "± 164501.75979420065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21570207.57142857,
            "unit": "ns",
            "range": "± 162514.55914410314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54634304.666666664,
            "unit": "ns",
            "range": "± 360243.2036560592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109504034.2,
            "unit": "ns",
            "range": "± 536089.7411929409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218088912.8,
            "unit": "ns",
            "range": "± 1316759.6383212411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442940.142857143,
            "unit": "ns",
            "range": "± 69361.48532826557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708230.536585366,
            "unit": "ns",
            "range": "± 96901.56499048341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327740.7671232875,
            "unit": "ns",
            "range": "± 114774.23960123732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5795534.912087912,
            "unit": "ns",
            "range": "± 323252.98045172845"
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
          "id": "1baa5f79b5bce32b7b6619b9b78be8138470bf17",
          "message": "Merge pull request #3124 from greymistcube/chore/missing-changelog\n\n🧹 Changelog",
          "timestamp": "2023-05-02T11:03:53+09:00",
          "tree_id": "704625ba1eeca124c7cafb0b315bbcec741389b2",
          "url": "https://github.com/planetarium/libplanet/commit/1baa5f79b5bce32b7b6619b9b78be8138470bf17"
        },
        "date": 1682994191199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405535.38144329895,
            "unit": "ns",
            "range": "± 45148.654921465466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374371.7052631579,
            "unit": "ns",
            "range": "± 44789.859989158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336266.693877551,
            "unit": "ns",
            "range": "± 56105.670559912985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5521462.05050505,
            "unit": "ns",
            "range": "± 378211.53257617605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5412747.040816327,
            "unit": "ns",
            "range": "± 391248.1115877861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32772.65306122449,
            "unit": "ns",
            "range": "± 8599.02579605848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135682.47872340426,
            "unit": "ns",
            "range": "± 21256.300924276864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119800.6875,
            "unit": "ns",
            "range": "± 25128.772860612655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135666.02105263158,
            "unit": "ns",
            "range": "± 22990.494795365372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6610.134831460674,
            "unit": "ns",
            "range": "± 1377.601919930322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31767.526315789473,
            "unit": "ns",
            "range": "± 10278.402906862013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4361724.822916667,
            "unit": "ns",
            "range": "± 286268.31620366947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4329639.306122449,
            "unit": "ns",
            "range": "± 453320.2851459579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5320482.58,
            "unit": "ns",
            "range": "± 493076.9636311363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5633410.73,
            "unit": "ns",
            "range": "± 337845.0835676098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9295280.886597939,
            "unit": "ns",
            "range": "± 530721.8769791658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7755184.296875,
            "unit": "ns",
            "range": "± 190271.87834907015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334490.427864583,
            "unit": "ns",
            "range": "± 43288.15879522185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1678260.6819802988,
            "unit": "ns",
            "range": "± 42090.138189818805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3208681.793701172,
            "unit": "ns",
            "range": "± 98843.14143994168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054432.8564453125,
            "unit": "ns",
            "range": "± 23554.470925642356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976243.7568873356,
            "unit": "ns",
            "range": "± 21585.463832807236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79394.14893617021,
            "unit": "ns",
            "range": "± 15209.595384576338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9852596.06,
            "unit": "ns",
            "range": "± 827538.622997771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26957091.974358976,
            "unit": "ns",
            "range": "± 937862.4735545827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69115313.23809524,
            "unit": "ns",
            "range": "± 1614976.838762275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138672221.57692307,
            "unit": "ns",
            "range": "± 3733976.6231877576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279855683.6666667,
            "unit": "ns",
            "range": "± 5120774.73017764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808659.6041666667,
            "unit": "ns",
            "range": "± 190312.78319420866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3590821.6555555556,
            "unit": "ns",
            "range": "± 279480.0846294741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2825442.8229166665,
            "unit": "ns",
            "range": "± 331689.3798411239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7590752.464646464,
            "unit": "ns",
            "range": "± 510363.16581351176"
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
          "id": "85e160f6265d39cbf9add0c97870d0f41fb68ecd",
          "message": "Merge pull request #3123 from greymistcube/remove/block-t\n\n♻️ Change `Block<T>` to `Block`",
          "timestamp": "2023-05-02T14:12:10+09:00",
          "tree_id": "b4f52824685d8f75d04a2969594c1ccbf26dcfb9",
          "url": "https://github.com/planetarium/libplanet/commit/85e160f6265d39cbf9add0c97870d0f41fb68ecd"
        },
        "date": 1683005172094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295382.2083333333,
            "unit": "ns",
            "range": "± 11624.260097173392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273662.65789473685,
            "unit": "ns",
            "range": "± 7267.62104753761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236067.39130434784,
            "unit": "ns",
            "range": "± 5332.614417125912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4332455.6,
            "unit": "ns",
            "range": "± 54761.25414378309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890374.2666666666,
            "unit": "ns",
            "range": "± 44895.37108412127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20608.978494623654,
            "unit": "ns",
            "range": "± 1671.0903039274442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94390.3125,
            "unit": "ns",
            "range": "± 7733.739007631296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84076.07142857143,
            "unit": "ns",
            "range": "± 5544.192797725429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103037.62244897959,
            "unit": "ns",
            "range": "± 15780.4323784826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6450.1122448979595,
            "unit": "ns",
            "range": "± 824.5405453842384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19266.989583333332,
            "unit": "ns",
            "range": "± 1791.5821322876761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3531807.6,
            "unit": "ns",
            "range": "± 45910.328930893724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3682851.2,
            "unit": "ns",
            "range": "± 122575.0906870288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4232586.6,
            "unit": "ns",
            "range": "± 69432.69251152514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4612665.928571428,
            "unit": "ns",
            "range": "± 55287.79406323895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6915069.2727272725,
            "unit": "ns",
            "range": "± 217760.52343791458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5853204.99609375,
            "unit": "ns",
            "range": "± 23408.609355184257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852292.7111979167,
            "unit": "ns",
            "range": "± 4094.929950446796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350979.2306082589,
            "unit": "ns",
            "range": "± 3262.5394690847183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577744.349158654,
            "unit": "ns",
            "range": "± 4825.931849621628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826523.9310128348,
            "unit": "ns",
            "range": "± 695.2282539697212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753421.3134765625,
            "unit": "ns",
            "range": "± 887.3864424018333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50052.46315789474,
            "unit": "ns",
            "range": "± 3323.222941569358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945538.066666666,
            "unit": "ns",
            "range": "± 121842.08328316186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22216072.066666666,
            "unit": "ns",
            "range": "± 208276.72281108084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55004189.53333333,
            "unit": "ns",
            "range": "± 740429.5804689394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108080032.66666667,
            "unit": "ns",
            "range": "± 1973412.961389867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215214876.73333332,
            "unit": "ns",
            "range": "± 3307633.8306145347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441690.6145833333,
            "unit": "ns",
            "range": "± 93784.55935963803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2732723.033333333,
            "unit": "ns",
            "range": "± 80067.76958236942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2299161.462686567,
            "unit": "ns",
            "range": "± 109058.92578928593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5326836.827586207,
            "unit": "ns",
            "range": "± 151931.6150806175"
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
          "id": "51a95183937a76829f5166d4169c5b9fd20f6fc2",
          "message": "Merge pull request #3127 from greymistcube/remove/block-evaluate\n\n🧹 Remove `PreEvaluationBlock.Evaluate()`",
          "timestamp": "2023-05-02T18:07:32+09:00",
          "tree_id": "58aa7a02d3106cd017adf090d986f5f85ce79ca8",
          "url": "https://github.com/planetarium/libplanet/commit/51a95183937a76829f5166d4169c5b9fd20f6fc2"
        },
        "date": 1683019246712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282116.07692307694,
            "unit": "ns",
            "range": "± 11440.332032488159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272832.28571428574,
            "unit": "ns",
            "range": "± 6414.048387273495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246484.69642857142,
            "unit": "ns",
            "range": "± 10473.068790377873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245304.461538462,
            "unit": "ns",
            "range": "± 22454.69782181962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871077.6428571427,
            "unit": "ns",
            "range": "± 23893.363213073797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18907.927083333332,
            "unit": "ns",
            "range": "± 1511.4399077129044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87942.01388888889,
            "unit": "ns",
            "range": "± 4354.961918279371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73682.71641791044,
            "unit": "ns",
            "range": "± 3477.038193661513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91041.1237113402,
            "unit": "ns",
            "range": "± 12166.720202443059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5638.714285714285,
            "unit": "ns",
            "range": "± 660.9375097182617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20450.294736842105,
            "unit": "ns",
            "range": "± 1409.0200070585063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3280206.5714285714,
            "unit": "ns",
            "range": "± 84837.81451004226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414669.3333333335,
            "unit": "ns",
            "range": "± 133677.0669945653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197506.285714285,
            "unit": "ns",
            "range": "± 59605.33472437174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4244364.041666667,
            "unit": "ns",
            "range": "± 77163.81525857218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6644798.125,
            "unit": "ns",
            "range": "± 126563.07505423267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5839760.3296875,
            "unit": "ns",
            "range": "± 30892.427010651292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843280.2508370536,
            "unit": "ns",
            "range": "± 2694.9868719609217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377366.5228365385,
            "unit": "ns",
            "range": "± 535.4725673827081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550254.87109375,
            "unit": "ns",
            "range": "± 1280.8594980563144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820822.7881556919,
            "unit": "ns",
            "range": "± 519.8800395658681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740312.4151041667,
            "unit": "ns",
            "range": "± 432.2110260504588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45950.882978723406,
            "unit": "ns",
            "range": "± 3201.0818798044725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7879026.214285715,
            "unit": "ns",
            "range": "± 59794.32528539113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19609912.6,
            "unit": "ns",
            "range": "± 90061.14172510014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50000431,
            "unit": "ns",
            "range": "± 223200.41949953686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100117058.86666666,
            "unit": "ns",
            "range": "± 521584.83407945756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201469986.46666667,
            "unit": "ns",
            "range": "± 858382.9430551267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373556.3789473684,
            "unit": "ns",
            "range": "± 88477.06283986695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2499152.3181818184,
            "unit": "ns",
            "range": "± 60021.896964981795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198606.9529411765,
            "unit": "ns",
            "range": "± 117195.70661036402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5114399.066666666,
            "unit": "ns",
            "range": "± 90105.72106655498"
          }
        ]
      }
    ]
  }
}