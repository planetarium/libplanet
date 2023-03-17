window.BENCHMARK_DATA = {
  "lastUpdate": 1679040639975,
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
        "date": 1678355930763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8238868,
            "unit": "ns",
            "range": "± 364020.77799957216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19494024.846153848,
            "unit": "ns",
            "range": "± 176707.36110673967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49889102.82926829,
            "unit": "ns",
            "range": "± 1778862.7095055834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98500068.32,
            "unit": "ns",
            "range": "± 2562437.074689798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204216448.7,
            "unit": "ns",
            "range": "± 2795712.1931113214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70680.6237113402,
            "unit": "ns",
            "range": "± 10730.197131671726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206868.76744186046,
            "unit": "ns",
            "range": "± 13313.683620444059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210070.97727272726,
            "unit": "ns",
            "range": "± 17936.003217683836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185090.81313131313,
            "unit": "ns",
            "range": "± 16293.259706711118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12287260.75,
            "unit": "ns",
            "range": "± 267346.74033938046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9969894.3125,
            "unit": "ns",
            "range": "± 188770.53868501083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20564.331578947367,
            "unit": "ns",
            "range": "± 3152.3468753289853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53101.41573033708,
            "unit": "ns",
            "range": "± 4298.875470845911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54071.37234042553,
            "unit": "ns",
            "range": "± 6867.91965024617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118608.17391304347,
            "unit": "ns",
            "range": "± 12536.58982506604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7597.285714285715,
            "unit": "ns",
            "range": "± 581.7120129233894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17239.40425531915,
            "unit": "ns",
            "range": "± 2422.058029499142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505490.5631578946,
            "unit": "ns",
            "range": "± 142870.47103373118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2782308.97260274,
            "unit": "ns",
            "range": "± 138246.96851437975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2596565.3298969073,
            "unit": "ns",
            "range": "± 224281.36060518018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6426233.1,
            "unit": "ns",
            "range": "± 346713.3736796615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264073.787234043,
            "unit": "ns",
            "range": "± 200852.17695394054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5012956.359375,
            "unit": "ns",
            "range": "± 203681.51541158775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23274654.32352941,
            "unit": "ns",
            "range": "± 734324.0360568049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6210791.662337663,
            "unit": "ns",
            "range": "± 317839.6041704472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28346588.97777778,
            "unit": "ns",
            "range": "± 1077439.8258017914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6408801.947544643,
            "unit": "ns",
            "range": "± 81333.11456815155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855977.9909319195,
            "unit": "ns",
            "range": "± 11496.25755234185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222126.4661959135,
            "unit": "ns",
            "range": "± 6108.126287914803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2472260.3884765627,
            "unit": "ns",
            "range": "± 54949.3281418827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 780356.0696364183,
            "unit": "ns",
            "range": "± 3016.8016370664395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711809.939453125,
            "unit": "ns",
            "range": "± 3619.272839233539"
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
        "date": 1678691805683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8528647.96,
            "unit": "ns",
            "range": "± 221049.19229127106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26575504.608695652,
            "unit": "ns",
            "range": "± 4619239.424223485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57723486.305263154,
            "unit": "ns",
            "range": "± 6446755.312783528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 105631491.5945946,
            "unit": "ns",
            "range": "± 5233028.75855486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 209115764.64285713,
            "unit": "ns",
            "range": "± 1735747.3489427615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73014.23913043478,
            "unit": "ns",
            "range": "± 10809.697285988896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240048.47802197802,
            "unit": "ns",
            "range": "± 37326.29338414827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233809.57303370786,
            "unit": "ns",
            "range": "± 25174.18306198546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198838.56451612903,
            "unit": "ns",
            "range": "± 19898.8154185371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13580330.184210526,
            "unit": "ns",
            "range": "± 956590.0680526334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10448911.663934426,
            "unit": "ns",
            "range": "± 429609.4409548895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24749.979166666668,
            "unit": "ns",
            "range": "± 3741.077213230285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60137.17391304348,
            "unit": "ns",
            "range": "± 10204.10041650322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56913.1935483871,
            "unit": "ns",
            "range": "± 5146.9414435178305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138578.4255319149,
            "unit": "ns",
            "range": "± 24599.703412076673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8962.42857142857,
            "unit": "ns",
            "range": "± 980.4362197269033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22628.67391304348,
            "unit": "ns",
            "range": "± 3995.3834488679327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746922.978021978,
            "unit": "ns",
            "range": "± 271111.04255271814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3029710.1363636362,
            "unit": "ns",
            "range": "± 218955.46383741387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2806109.005376344,
            "unit": "ns",
            "range": "± 467034.5092916308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7889521.064516129,
            "unit": "ns",
            "range": "± 1844189.7745169052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3442803.2763157897,
            "unit": "ns",
            "range": "± 165685.35185663204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5106416.880597015,
            "unit": "ns",
            "range": "± 239821.90729963352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24746881,
            "unit": "ns",
            "range": "± 750802.4621912555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7301894.10989011,
            "unit": "ns",
            "range": "± 766597.8547646224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33863694.663157895,
            "unit": "ns",
            "range": "± 3907251.2722896812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7306551.54739011,
            "unit": "ns",
            "range": "± 455529.17104315315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088654.47265625,
            "unit": "ns",
            "range": "± 61035.08086628584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1432911.703404018,
            "unit": "ns",
            "range": "± 56429.2629673967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3068220.834716797,
            "unit": "ns",
            "range": "± 244432.12216980383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955791.0000411185,
            "unit": "ns",
            "range": "± 57557.57020671708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826223.4772508965,
            "unit": "ns",
            "range": "± 36885.176747454294"
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
        "date": 1678697818871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9111468.975308642,
            "unit": "ns",
            "range": "± 440548.69266239955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21508939,
            "unit": "ns",
            "range": "± 187759.3171528175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54048429.06666667,
            "unit": "ns",
            "range": "± 672918.7718597316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108961510.07142857,
            "unit": "ns",
            "range": "± 850752.9408675149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 221781581.80769232,
            "unit": "ns",
            "range": "± 2685030.9123023576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86319.58139534884,
            "unit": "ns",
            "range": "± 8826.778441318236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218555.76966292135,
            "unit": "ns",
            "range": "± 15588.933043234727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234930.47777777776,
            "unit": "ns",
            "range": "± 8228.146426330251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224427.70588235295,
            "unit": "ns",
            "range": "± 7039.860840478147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13007787.9375,
            "unit": "ns",
            "range": "± 242972.2409140514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10311133.5,
            "unit": "ns",
            "range": "± 178795.37868780442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26526.010638297874,
            "unit": "ns",
            "range": "± 3090.4521322301757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56706.56842105263,
            "unit": "ns",
            "range": "± 7933.527232846138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60488.62222222222,
            "unit": "ns",
            "range": "± 6857.989727117813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123869.88541666667,
            "unit": "ns",
            "range": "± 17320.073847156167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7558.851063829788,
            "unit": "ns",
            "range": "± 750.1438816459809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27026.355555555554,
            "unit": "ns",
            "range": "± 2854.400960634282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567770.355670103,
            "unit": "ns",
            "range": "± 113494.9765706422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2845999.66,
            "unit": "ns",
            "range": "± 114072.81527175919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2483476.2577319588,
            "unit": "ns",
            "range": "± 176960.65925658908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6664201.032608695,
            "unit": "ns",
            "range": "± 484764.87448644213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3440691.0555555555,
            "unit": "ns",
            "range": "± 114229.62232086848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5558992.961538462,
            "unit": "ns",
            "range": "± 149041.89621028866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26528666.125,
            "unit": "ns",
            "range": "± 511520.91883791354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7038438.252808989,
            "unit": "ns",
            "range": "± 493160.8719331553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29860328.42857143,
            "unit": "ns",
            "range": "± 503684.7794391715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6580326.4980014535,
            "unit": "ns",
            "range": "± 230875.04611161054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962191.7805989583,
            "unit": "ns",
            "range": "± 8721.184844651663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269406.8579799107,
            "unit": "ns",
            "range": "± 13704.553257409008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990350.049560547,
            "unit": "ns",
            "range": "± 54959.57208219147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872605.244140625,
            "unit": "ns",
            "range": "± 7215.564810804582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723060.5413643973,
            "unit": "ns",
            "range": "± 9745.341365698048"
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
        "date": 1678703821559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7532959.928571428,
            "unit": "ns",
            "range": "± 115593.13309685982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19088882.42857143,
            "unit": "ns",
            "range": "± 240340.54654840662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48353515.1509434,
            "unit": "ns",
            "range": "± 2009827.5015007015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97017528.70833333,
            "unit": "ns",
            "range": "± 3782039.440966907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 193749982.25,
            "unit": "ns",
            "range": "± 3570263.925571507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63348.8870967742,
            "unit": "ns",
            "range": "± 11362.320925103684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196248.2258064516,
            "unit": "ns",
            "range": "± 13162.32583032629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211911.9255319149,
            "unit": "ns",
            "range": "± 13815.96943562079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194271.41666666666,
            "unit": "ns",
            "range": "± 16167.040915762222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12726064.185185185,
            "unit": "ns",
            "range": "± 514498.44330369687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10275270.407407407,
            "unit": "ns",
            "range": "± 284351.16926546185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19420.25257731959,
            "unit": "ns",
            "range": "± 2753.382855048978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57422.704081632655,
            "unit": "ns",
            "range": "± 8331.74889774258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56642.302083333336,
            "unit": "ns",
            "range": "± 4625.011077357526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117411.97916666667,
            "unit": "ns",
            "range": "± 15669.604470189824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7460.072916666667,
            "unit": "ns",
            "range": "± 963.8471187441521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17640.840425531915,
            "unit": "ns",
            "range": "± 2248.2555115533296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663335.5652173914,
            "unit": "ns",
            "range": "± 152938.11803473553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994556.656716418,
            "unit": "ns",
            "range": "± 141425.95732938094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2509370.03125,
            "unit": "ns",
            "range": "± 235017.6825383886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6432235.447916667,
            "unit": "ns",
            "range": "± 399561.25633347733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175258.966101695,
            "unit": "ns",
            "range": "± 138776.43594210056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4931510.879310345,
            "unit": "ns",
            "range": "± 143055.90603487202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24240018.6375,
            "unit": "ns",
            "range": "± 1263390.3785560627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6226981.722222222,
            "unit": "ns",
            "range": "± 129599.66380530356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27237745.848484848,
            "unit": "ns",
            "range": "± 854821.4717395352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6445295.743140244,
            "unit": "ns",
            "range": "± 231963.9211320818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904316.9971354166,
            "unit": "ns",
            "range": "± 20661.915230850995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1238281.8290364584,
            "unit": "ns",
            "range": "± 22167.00698499847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2459671.7864583335,
            "unit": "ns",
            "range": "± 26527.49099647607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784230.994140625,
            "unit": "ns",
            "range": "± 9651.089986311767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729957.5203793175,
            "unit": "ns",
            "range": "± 23189.3542165799"
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
        "date": 1678722583275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9099156.006024096,
            "unit": "ns",
            "range": "± 481712.5708525774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22866991.32278481,
            "unit": "ns",
            "range": "± 1185844.342309664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59298952.729166664,
            "unit": "ns",
            "range": "± 4320722.642075096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113275587.71212122,
            "unit": "ns",
            "range": "± 5256581.418159517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 236018693.6566265,
            "unit": "ns",
            "range": "± 12568425.582696814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78128.56666666667,
            "unit": "ns",
            "range": "± 13332.445602043936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224055.44086021505,
            "unit": "ns",
            "range": "± 20124.554821142796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211773.316091954,
            "unit": "ns",
            "range": "± 12462.124656033928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219230.6739130435,
            "unit": "ns",
            "range": "± 5141.489814619298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12587720,
            "unit": "ns",
            "range": "± 246884.65128953024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10222232.433333334,
            "unit": "ns",
            "range": "± 187853.76735811846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24495.21505376344,
            "unit": "ns",
            "range": "± 3030.790178389638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62208.54210526316,
            "unit": "ns",
            "range": "± 7587.847998841795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60661.032608695656,
            "unit": "ns",
            "range": "± 3625.879429364361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129767.05494505494,
            "unit": "ns",
            "range": "± 15968.824848130836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9225.627659574468,
            "unit": "ns",
            "range": "± 853.9698313026688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24229.575757575756,
            "unit": "ns",
            "range": "± 5876.38906390878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546063.9787234042,
            "unit": "ns",
            "range": "± 136173.3618558066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3117237.060240964,
            "unit": "ns",
            "range": "± 264138.8704047851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2878030.5470588235,
            "unit": "ns",
            "range": "± 287154.8920071545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6742403.717948718,
            "unit": "ns",
            "range": "± 348063.9396870048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473524.7409638553,
            "unit": "ns",
            "range": "± 210771.4166608213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5246921.010752688,
            "unit": "ns",
            "range": "± 309888.6455246428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25691671.5875,
            "unit": "ns",
            "range": "± 1323133.1783368702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6467842.955555555,
            "unit": "ns",
            "range": "± 243261.43217010895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29291933.16,
            "unit": "ns",
            "range": "± 1180266.356482966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6522935.043229166,
            "unit": "ns",
            "range": "± 182850.2165578067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919297.6068209135,
            "unit": "ns",
            "range": "± 64647.55446927931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300399.9462139423,
            "unit": "ns",
            "range": "± 8260.993065511228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2424367.161783854,
            "unit": "ns",
            "range": "± 18929.440786146977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904767.1965169271,
            "unit": "ns",
            "range": "± 15908.163872626923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746570.6635044643,
            "unit": "ns",
            "range": "± 12064.990780242882"
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
        "date": 1678725962255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8923046.678082192,
            "unit": "ns",
            "range": "± 439444.46396300383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21175990.033333335,
            "unit": "ns",
            "range": "± 363079.84932968486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52991784.375,
            "unit": "ns",
            "range": "± 994311.7554354117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104950989.57142857,
            "unit": "ns",
            "range": "± 823052.5186243925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 217514076.39130434,
            "unit": "ns",
            "range": "± 5434795.705541334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81912.61956521739,
            "unit": "ns",
            "range": "± 8292.346115932824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267466.1098901099,
            "unit": "ns",
            "range": "± 52444.57413614038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267167.9479166667,
            "unit": "ns",
            "range": "± 46339.44933897428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253498.55555555556,
            "unit": "ns",
            "range": "± 48682.71180210683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14761031.984536082,
            "unit": "ns",
            "range": "± 918522.2191455496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12024036.74489796,
            "unit": "ns",
            "range": "± 845215.7259479578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30497.432584269663,
            "unit": "ns",
            "range": "± 6143.812964715274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79798.97752808989,
            "unit": "ns",
            "range": "± 20395.47659296136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74734.03260869565,
            "unit": "ns",
            "range": "± 11868.29548983719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156279.24725274724,
            "unit": "ns",
            "range": "± 30097.0689217381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11592.641304347826,
            "unit": "ns",
            "range": "± 1528.3286107545807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28832.988095238095,
            "unit": "ns",
            "range": "± 2620.946341066168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1941795.4101123596,
            "unit": "ns",
            "range": "± 395642.95714383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3305115.1627906975,
            "unit": "ns",
            "range": "± 408211.3816323917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2851263.4770114943,
            "unit": "ns",
            "range": "± 330924.85622155265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7897229.788888888,
            "unit": "ns",
            "range": "± 1821602.486155011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469816.7959183673,
            "unit": "ns",
            "range": "± 251344.84805393746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5463705.510416667,
            "unit": "ns",
            "range": "± 384767.57949935104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25969871.925,
            "unit": "ns",
            "range": "± 913707.9474247631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6696018.085858586,
            "unit": "ns",
            "range": "± 564513.5617536537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35370098.752525255,
            "unit": "ns",
            "range": "± 3904527.4478750397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7527701.485711348,
            "unit": "ns",
            "range": "± 378940.5577405822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2348496.4821428573,
            "unit": "ns",
            "range": "± 112205.40052062349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388307.1531808036,
            "unit": "ns",
            "range": "± 32530.801973343943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3034501.8657552083,
            "unit": "ns",
            "range": "± 234303.75741250548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955102.7487664474,
            "unit": "ns",
            "range": "± 56491.2855899615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835526.0848972487,
            "unit": "ns",
            "range": "± 51658.76559688022"
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
        "date": 1678859833802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8619886.078947369,
            "unit": "ns",
            "range": "± 292236.99371891987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20533939.966666665,
            "unit": "ns",
            "range": "± 594246.6687414488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52213228.35714286,
            "unit": "ns",
            "range": "± 773148.7351963207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104207035.04347827,
            "unit": "ns",
            "range": "± 2620839.3299302813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231646182.125,
            "unit": "ns",
            "range": "± 5889447.390567388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67993.78947368421,
            "unit": "ns",
            "range": "± 10093.072336471672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225826.88947368422,
            "unit": "ns",
            "range": "± 19979.10669594547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233282.79166666666,
            "unit": "ns",
            "range": "± 29397.519082906038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204088.6559139785,
            "unit": "ns",
            "range": "± 19168.28773311399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13972303.677083334,
            "unit": "ns",
            "range": "± 958129.3396792412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11415232.377777778,
            "unit": "ns",
            "range": "± 661083.4454125216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26311.02380952381,
            "unit": "ns",
            "range": "± 3313.4206889673515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79786.82653061225,
            "unit": "ns",
            "range": "± 19595.05178006459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72639.51063829787,
            "unit": "ns",
            "range": "± 16331.412412659192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146442.45263157896,
            "unit": "ns",
            "range": "± 35965.519491788546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9070.728260869566,
            "unit": "ns",
            "range": "± 869.7505023484631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25855.93023255814,
            "unit": "ns",
            "range": "± 3407.410403778964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605303.5,
            "unit": "ns",
            "range": "± 200109.95346990193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3021764.2346938774,
            "unit": "ns",
            "range": "± 298723.19524280867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2567967.2578947367,
            "unit": "ns",
            "range": "± 243854.77566736558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514240.505263158,
            "unit": "ns",
            "range": "± 408427.4284696321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3606426.5833333335,
            "unit": "ns",
            "range": "± 293049.1777397624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5272770.883720931,
            "unit": "ns",
            "range": "± 192014.73139259883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25139394,
            "unit": "ns",
            "range": "± 645825.7745880547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6447590.944444444,
            "unit": "ns",
            "range": "± 365238.66936109023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29791645.8375,
            "unit": "ns",
            "range": "± 1504047.3047180166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8301327.951891447,
            "unit": "ns",
            "range": "± 282587.19042662205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2099336.5581163196,
            "unit": "ns",
            "range": "± 115730.25407258749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411397.5414341518,
            "unit": "ns",
            "range": "± 20322.794743256665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2881144.5193536934,
            "unit": "ns",
            "range": "± 69597.58317033573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982627.1110983456,
            "unit": "ns",
            "range": "± 19802.45022906408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881475.8629092262,
            "unit": "ns",
            "range": "± 20570.72205012758"
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
        "date": 1678930237014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7860343.833333333,
            "unit": "ns",
            "range": "± 140903.11505664687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19458869.4,
            "unit": "ns",
            "range": "± 358815.21020372433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48120089.2,
            "unit": "ns",
            "range": "± 1048093.6390846705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93747828.83333333,
            "unit": "ns",
            "range": "± 817561.0468452475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191128336.23076922,
            "unit": "ns",
            "range": "± 1871159.0793085604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55171.947916666664,
            "unit": "ns",
            "range": "± 6404.611318778618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227766.5128205128,
            "unit": "ns",
            "range": "± 11726.699283994456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229195.87288135593,
            "unit": "ns",
            "range": "± 10056.228824410624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216996.6559139785,
            "unit": "ns",
            "range": "± 12313.502401035941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12806781.57142857,
            "unit": "ns",
            "range": "± 356060.0105788898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10560715.785714285,
            "unit": "ns",
            "range": "± 160795.12728142776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26454.010416666668,
            "unit": "ns",
            "range": "± 3062.139620024196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62571.01136363636,
            "unit": "ns",
            "range": "± 4667.866892029856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63454.82352941176,
            "unit": "ns",
            "range": "± 2601.813211634397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127786.96739130435,
            "unit": "ns",
            "range": "± 11649.094919755546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8652.666666666666,
            "unit": "ns",
            "range": "± 946.8317103473553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25484.591836734693,
            "unit": "ns",
            "range": "± 3222.329588359197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475562.1382978724,
            "unit": "ns",
            "range": "± 160055.56512974537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711763.1428571427,
            "unit": "ns",
            "range": "± 92492.05877040932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2318681.6134020616,
            "unit": "ns",
            "range": "± 153420.97794602305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5893137.426829268,
            "unit": "ns",
            "range": "± 211304.88435000624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3214366.222222222,
            "unit": "ns",
            "range": "± 106368.93082168874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5269695.4677419355,
            "unit": "ns",
            "range": "± 230436.58212773435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24206246.037037037,
            "unit": "ns",
            "range": "± 968804.5781328885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6223215.967391305,
            "unit": "ns",
            "range": "± 350967.5737759939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28322543.425925925,
            "unit": "ns",
            "range": "± 1174628.5310494306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6496341.743861607,
            "unit": "ns",
            "range": "± 46131.104772307146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918310.4604166667,
            "unit": "ns",
            "range": "± 24437.119871587867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284660.47265625,
            "unit": "ns",
            "range": "± 4275.784387643041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537966.8306640624,
            "unit": "ns",
            "range": "± 57632.277293937485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781491.4168619792,
            "unit": "ns",
            "range": "± 12521.84187202718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778795.8343098959,
            "unit": "ns",
            "range": "± 6064.431868177519"
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
        "date": 1678932873292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8879891,
            "unit": "ns",
            "range": "± 365988.9673980062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22910222.344262294,
            "unit": "ns",
            "range": "± 1031769.6221351593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54652527.895833336,
            "unit": "ns",
            "range": "± 3773126.717028324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109693523.16666667,
            "unit": "ns",
            "range": "± 4584650.372809694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225645017.39473686,
            "unit": "ns",
            "range": "± 7398869.263755212"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69143.20652173914,
            "unit": "ns",
            "range": "± 9832.516619196236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232177.86263736265,
            "unit": "ns",
            "range": "± 21327.056233555893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237616.44680851063,
            "unit": "ns",
            "range": "± 31438.585666708143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226035.60215053763,
            "unit": "ns",
            "range": "± 17209.4943361909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14665309.5,
            "unit": "ns",
            "range": "± 1355182.679192586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11653904.94,
            "unit": "ns",
            "range": "± 1054479.3271278946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24331.329545454544,
            "unit": "ns",
            "range": "± 4036.091045136899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55288.70618556701,
            "unit": "ns",
            "range": "± 7889.850836858578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54613.936842105264,
            "unit": "ns",
            "range": "± 4460.239366753156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126322.4,
            "unit": "ns",
            "range": "± 19073.363157455224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8380.521505376344,
            "unit": "ns",
            "range": "± 702.6945804868111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23011.722222222223,
            "unit": "ns",
            "range": "± 3471.5796360106083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596729.697802198,
            "unit": "ns",
            "range": "± 218371.69583504074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3016088.3139534886,
            "unit": "ns",
            "range": "± 192962.39558313592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2636484.7701149425,
            "unit": "ns",
            "range": "± 405583.1215164936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6797516.988636363,
            "unit": "ns",
            "range": "± 755736.1595321492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451370.7252747254,
            "unit": "ns",
            "range": "± 220808.08822907563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5590905.974226804,
            "unit": "ns",
            "range": "± 455334.06661439914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27011125.873737372,
            "unit": "ns",
            "range": "± 1735592.8398138646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7062548.680851064,
            "unit": "ns",
            "range": "± 676707.1611518636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33657154.666666664,
            "unit": "ns",
            "range": "± 5887206.694217272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7007639.956840701,
            "unit": "ns",
            "range": "± 243129.16479914045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041769.5767780172,
            "unit": "ns",
            "range": "± 58721.09340056053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361509.001890121,
            "unit": "ns",
            "range": "± 40795.602703596574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3061122.026633523,
            "unit": "ns",
            "range": "± 72261.15757631004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956121.0546177456,
            "unit": "ns",
            "range": "± 10470.38017624574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823333.1198167067,
            "unit": "ns",
            "range": "± 9209.243601267974"
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
        "date": 1679031936255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8517740.457142858,
            "unit": "ns",
            "range": "± 274177.02544012805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22081938.739130434,
            "unit": "ns",
            "range": "± 1311431.363232626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52480109.07692308,
            "unit": "ns",
            "range": "± 1414789.0060928783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111946831.85384615,
            "unit": "ns",
            "range": "± 5175825.393750823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223354842.3857143,
            "unit": "ns",
            "range": "± 7331868.799502523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71393.45161290323,
            "unit": "ns",
            "range": "± 10464.674227377227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229695.64444444445,
            "unit": "ns",
            "range": "± 25134.06070614187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224257.5879120879,
            "unit": "ns",
            "range": "± 30198.347742752176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226717.2634408602,
            "unit": "ns",
            "range": "± 38905.07217585709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13395271.366666667,
            "unit": "ns",
            "range": "± 1373758.6974583815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10283620.264705881,
            "unit": "ns",
            "range": "± 487556.92803385487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21011.4,
            "unit": "ns",
            "range": "± 4797.945919981156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53666.955555555556,
            "unit": "ns",
            "range": "± 5831.749318203077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54376.489583333336,
            "unit": "ns",
            "range": "± 4642.676560131625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124420.23157894737,
            "unit": "ns",
            "range": "± 20150.79968660377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7403.010416666667,
            "unit": "ns",
            "range": "± 967.565251380921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20400.706521739132,
            "unit": "ns",
            "range": "± 3519.583555966462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640733.2835051545,
            "unit": "ns",
            "range": "± 211275.96560231887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810627.768115942,
            "unit": "ns",
            "range": "± 133828.11665727673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2508087.0408163266,
            "unit": "ns",
            "range": "± 249845.96875040472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6566576.075268817,
            "unit": "ns",
            "range": "± 434257.5894416824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3804149.2365591396,
            "unit": "ns",
            "range": "± 363289.6252588045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6255962.916666667,
            "unit": "ns",
            "range": "± 434728.2273532733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25495446.350877192,
            "unit": "ns",
            "range": "± 1090774.8863393185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6431301.146067415,
            "unit": "ns",
            "range": "± 353579.04018137255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29612173.971014492,
            "unit": "ns",
            "range": "± 1423174.9890543614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6715954.596354167,
            "unit": "ns",
            "range": "± 96770.00159723288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990986.4464285714,
            "unit": "ns",
            "range": "± 34050.799743384276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301263.6391225962,
            "unit": "ns",
            "range": "± 7914.717627777325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617152.9524739585,
            "unit": "ns",
            "range": "± 38490.94820790497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864202.0776041667,
            "unit": "ns",
            "range": "± 14806.055381761656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816957.8460083008,
            "unit": "ns",
            "range": "± 15620.618544605763"
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
        "date": 1679040577881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9558987.066666666,
            "unit": "ns",
            "range": "± 937077.8608703136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21316780.04761905,
            "unit": "ns",
            "range": "± 503638.5635606627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54520947.190476194,
            "unit": "ns",
            "range": "± 1289033.2681452648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 117486689.96551724,
            "unit": "ns",
            "range": "± 3413436.4370518215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 308545770.34375,
            "unit": "ns",
            "range": "± 88020261.83678193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84576.64367816092,
            "unit": "ns",
            "range": "± 8750.209760910337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292792.5918367347,
            "unit": "ns",
            "range": "± 58311.909578599974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289240.4285714286,
            "unit": "ns",
            "range": "± 55778.7063433727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245724.63186813187,
            "unit": "ns",
            "range": "± 31434.27596826566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15208702.163265307,
            "unit": "ns",
            "range": "± 1211341.9991865177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12137751.931578947,
            "unit": "ns",
            "range": "± 832898.9125250288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31830.31818181818,
            "unit": "ns",
            "range": "± 5675.899889248318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80053.59782608696,
            "unit": "ns",
            "range": "± 14869.577092990603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71114.96590909091,
            "unit": "ns",
            "range": "± 8955.852718661952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147184.31318681317,
            "unit": "ns",
            "range": "± 28490.30159971093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10196.58888888889,
            "unit": "ns",
            "range": "± 1108.4284922118638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25219.68085106383,
            "unit": "ns",
            "range": "± 4969.836681859934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698315.6494845361,
            "unit": "ns",
            "range": "± 213677.29398046335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982164.7674418604,
            "unit": "ns",
            "range": "± 161484.52999712492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617905.9793814435,
            "unit": "ns",
            "range": "± 246657.34101473223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6300638.0813953485,
            "unit": "ns",
            "range": "± 228550.19018048287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4201603.574468086,
            "unit": "ns",
            "range": "± 427998.82811482216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6070777.010204081,
            "unit": "ns",
            "range": "± 515158.31506249687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30073798.25,
            "unit": "ns",
            "range": "± 2059615.528806194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7525834.465909091,
            "unit": "ns",
            "range": "± 1041553.9729668075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34826954.73195876,
            "unit": "ns",
            "range": "± 4075326.7907059216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8258344.508680556,
            "unit": "ns",
            "range": "± 175020.64249663972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2355556.245718149,
            "unit": "ns",
            "range": "± 96889.26885417047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486001.364767957,
            "unit": "ns",
            "range": "± 67114.6857758938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3206541.7112563774,
            "unit": "ns",
            "range": "± 298443.40968362836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878395.6637573242,
            "unit": "ns",
            "range": "± 16643.802910137736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800056.857265625,
            "unit": "ns",
            "range": "± 32045.55303963"
          }
        ]
      }
    ]
  }
}