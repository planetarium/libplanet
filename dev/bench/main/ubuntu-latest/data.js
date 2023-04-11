window.BENCHMARK_DATA = {
  "lastUpdate": 1681172108495,
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
      }
    ]
  }
}