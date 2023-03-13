window.BENCHMARK_DATA = {
  "lastUpdate": 1678722650191,
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
      }
    ]
  }
}