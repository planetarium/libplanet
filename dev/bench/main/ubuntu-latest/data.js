window.BENCHMARK_DATA = {
  "lastUpdate": 1679997345295,
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
      }
    ]
  }
}