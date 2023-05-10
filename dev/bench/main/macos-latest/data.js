window.BENCHMARK_DATA = {
  "lastUpdate": 1683705657179,
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
        "date": 1679042946533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8319758,
            "unit": "ns",
            "range": "± 256169.8469883908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19951954.083333332,
            "unit": "ns",
            "range": "± 495285.459814484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53961938.833333336,
            "unit": "ns",
            "range": "± 1110627.3215955477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100735450.93333334,
            "unit": "ns",
            "range": "± 1751076.3447304333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202876911.84615386,
            "unit": "ns",
            "range": "± 2770291.362500096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67185.1649484536,
            "unit": "ns",
            "range": "± 10998.053594538535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208657,
            "unit": "ns",
            "range": "± 16090.626741042135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209639.375,
            "unit": "ns",
            "range": "± 16386.00997015763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193635.66326530612,
            "unit": "ns",
            "range": "± 16691.994934262377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12564236.42857143,
            "unit": "ns",
            "range": "± 347140.02223651065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9892579.727272727,
            "unit": "ns",
            "range": "± 311750.1809572723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19373.636842105265,
            "unit": "ns",
            "range": "± 2263.9003653106624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54024.234042553195,
            "unit": "ns",
            "range": "± 6312.258404064971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55330.46842105263,
            "unit": "ns",
            "range": "± 4325.552242329275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114970.23157894737,
            "unit": "ns",
            "range": "± 13955.070029214068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6805.720430107527,
            "unit": "ns",
            "range": "± 869.1346941891637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18273.951612903227,
            "unit": "ns",
            "range": "± 1713.969119224433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600002.6340206186,
            "unit": "ns",
            "range": "± 184565.40765954473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886697.1555555556,
            "unit": "ns",
            "range": "± 159327.2071986008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2451287.131313131,
            "unit": "ns",
            "range": "± 174105.22631452966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6038908.3965517245,
            "unit": "ns",
            "range": "± 175926.14751820167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452650.5,
            "unit": "ns",
            "range": "± 102408.24736175741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4932026.0636363635,
            "unit": "ns",
            "range": "± 208464.4100809504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23124080.470149253,
            "unit": "ns",
            "range": "± 1089686.178692148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6048591.795454546,
            "unit": "ns",
            "range": "± 224561.2737710019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26657928.30232558,
            "unit": "ns",
            "range": "± 982135.8205533861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6541632.305729167,
            "unit": "ns",
            "range": "± 57302.04111150978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863483.9829799107,
            "unit": "ns",
            "range": "± 11050.376184982546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274580.7938802084,
            "unit": "ns",
            "range": "± 22967.25122317135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2483062.30921875,
            "unit": "ns",
            "range": "± 56507.824898761966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789055.8191964285,
            "unit": "ns",
            "range": "± 6544.742993859765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724608.9416316106,
            "unit": "ns",
            "range": "± 3933.8786108838754"
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
        "date": 1679044949010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9303826.7,
            "unit": "ns",
            "range": "± 154072.1529275906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22582813.09090909,
            "unit": "ns",
            "range": "± 547590.5866468826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57304897.46666667,
            "unit": "ns",
            "range": "± 1003011.6235610396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115801671.23333333,
            "unit": "ns",
            "range": "± 1307068.4960652797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 228426599,
            "unit": "ns",
            "range": "± 3383385.0181847257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65929.26344086022,
            "unit": "ns",
            "range": "± 4764.0456054059805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237203.6125,
            "unit": "ns",
            "range": "± 12357.334771115144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239481.94520547945,
            "unit": "ns",
            "range": "± 11905.776936814253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208877.07142857142,
            "unit": "ns",
            "range": "± 12373.510503090993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13516575.533333333,
            "unit": "ns",
            "range": "± 160014.63078680678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11022667,
            "unit": "ns",
            "range": "± 186417.25292874585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20707.369565217392,
            "unit": "ns",
            "range": "± 1862.4373001756387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60996.72222222222,
            "unit": "ns",
            "range": "± 6016.641597051115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47448.086956521736,
            "unit": "ns",
            "range": "± 3883.6687004394503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108554.41208791209,
            "unit": "ns",
            "range": "± 15783.37589269049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5499.352631578948,
            "unit": "ns",
            "range": "± 499.04333944784435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19817.56818181818,
            "unit": "ns",
            "range": "± 1485.1637070293348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1865863.75,
            "unit": "ns",
            "range": "± 218442.3963485689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3314413.789473684,
            "unit": "ns",
            "range": "± 136933.15309977983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3611185.5454545454,
            "unit": "ns",
            "range": "± 1053848.0067146688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7535003.52631579,
            "unit": "ns",
            "range": "± 336623.9321031695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3845453.3205128205,
            "unit": "ns",
            "range": "± 132509.90089381242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6388579.807692308,
            "unit": "ns",
            "range": "± 171224.45320713258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26917138.5,
            "unit": "ns",
            "range": "± 497852.8191020582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7388574.3,
            "unit": "ns",
            "range": "± 131909.86026298412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31808610.439393938,
            "unit": "ns",
            "range": "± 1001038.174562537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7036012.0390625,
            "unit": "ns",
            "range": "± 96897.53384961036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2186215.5496651786,
            "unit": "ns",
            "range": "± 18528.181595560738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1440819.677734375,
            "unit": "ns",
            "range": "± 18043.11346362149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843056.6497395835,
            "unit": "ns",
            "range": "± 16327.119164090573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921210.2201450893,
            "unit": "ns",
            "range": "± 6785.915000926694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850406.4002604167,
            "unit": "ns",
            "range": "± 5917.917892657124"
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
        "date": 1679274477005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7874166.4,
            "unit": "ns",
            "range": "± 180761.05333995048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19527525.64814815,
            "unit": "ns",
            "range": "± 811242.0494077051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48055382.26,
            "unit": "ns",
            "range": "± 1250912.6002924251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94852967.76470588,
            "unit": "ns",
            "range": "± 1920265.689648783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 193911282.43333334,
            "unit": "ns",
            "range": "± 2131930.413371428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60876.354838709674,
            "unit": "ns",
            "range": "± 7532.769641409923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197734.71739130435,
            "unit": "ns",
            "range": "± 13301.3221335953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197874.39215686274,
            "unit": "ns",
            "range": "± 7983.531712415079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166927.45833333334,
            "unit": "ns",
            "range": "± 11436.420820221374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11650853.423076924,
            "unit": "ns",
            "range": "± 308498.62149904954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9419209.76,
            "unit": "ns",
            "range": "± 244630.4568283012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18336.127906976744,
            "unit": "ns",
            "range": "± 2082.7869609309073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51650.444444444445,
            "unit": "ns",
            "range": "± 5645.373782891997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48945.59375,
            "unit": "ns",
            "range": "± 5157.833973324614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109073.74489795919,
            "unit": "ns",
            "range": "± 15380.470359538545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6713.311111111111,
            "unit": "ns",
            "range": "± 963.2242075614894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17344.616279069767,
            "unit": "ns",
            "range": "± 1832.623631451751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511940.9,
            "unit": "ns",
            "range": "± 174728.81148976414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2731390.1403508773,
            "unit": "ns",
            "range": "± 116658.39923797027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349704.8279569894,
            "unit": "ns",
            "range": "± 173225.43322463185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6240442.935897436,
            "unit": "ns",
            "range": "± 316384.02245288854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3127141.1896551726,
            "unit": "ns",
            "range": "± 136409.93466939003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4887167.347826087,
            "unit": "ns",
            "range": "± 186852.72713702358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22835741.614285715,
            "unit": "ns",
            "range": "± 730285.4138574367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6081812.35,
            "unit": "ns",
            "range": "± 213849.1910862263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27254567.736842107,
            "unit": "ns",
            "range": "± 925797.7157930587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6122842.875,
            "unit": "ns",
            "range": "± 59581.45212055031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853424.283203125,
            "unit": "ns",
            "range": "± 9413.51505762866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216534.1842447917,
            "unit": "ns",
            "range": "± 6122.640228866723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546567.794791667,
            "unit": "ns",
            "range": "± 24834.669259954244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 768000.1046316965,
            "unit": "ns",
            "range": "± 3371.2646763064263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698515.0921456473,
            "unit": "ns",
            "range": "± 4048.2855740988784"
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
        "date": 1679374623652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7871383.583333333,
            "unit": "ns",
            "range": "± 76201.68771390153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18908347.90625,
            "unit": "ns",
            "range": "± 584689.4725659447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48359870.43478261,
            "unit": "ns",
            "range": "± 1158683.2845374264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105970207.49019608,
            "unit": "ns",
            "range": "± 4305474.586991625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203355698.1153846,
            "unit": "ns",
            "range": "± 1808072.355747945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64664.46808510638,
            "unit": "ns",
            "range": "± 10396.34012081043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201763.27173913043,
            "unit": "ns",
            "range": "± 14614.033627284847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197262.33333333334,
            "unit": "ns",
            "range": "± 11685.271169792946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177264.1551724138,
            "unit": "ns",
            "range": "± 18324.606348655892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11839385.804347826,
            "unit": "ns",
            "range": "± 408052.4174328924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9597487.196969697,
            "unit": "ns",
            "range": "± 297079.2930758854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18420.12222222222,
            "unit": "ns",
            "range": "± 2088.673455837126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54761.989583333336,
            "unit": "ns",
            "range": "± 6397.82985492127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48895.62765957447,
            "unit": "ns",
            "range": "± 5605.741950612883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115086.4,
            "unit": "ns",
            "range": "± 20241.663192090276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6701.622222222222,
            "unit": "ns",
            "range": "± 930.8987149406494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17392.533333333333,
            "unit": "ns",
            "range": "± 2003.0789906283353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525034.6559139786,
            "unit": "ns",
            "range": "± 155878.08755977653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2888028.621212121,
            "unit": "ns",
            "range": "± 135662.37461643407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2594198.2319587627,
            "unit": "ns",
            "range": "± 221253.51636591356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6336840.063829787,
            "unit": "ns",
            "range": "± 243588.12085892612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3364346.3829787234,
            "unit": "ns",
            "range": "± 129315.0795373965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5028504.545454546,
            "unit": "ns",
            "range": "± 305492.41847634554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23879960.82142857,
            "unit": "ns",
            "range": "± 681640.7287905794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6277415.153846154,
            "unit": "ns",
            "range": "± 323454.0181018158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27825977.166666668,
            "unit": "ns",
            "range": "± 824488.9659374207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093739.641183035,
            "unit": "ns",
            "range": "± 28453.482491793828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2049663.8790364584,
            "unit": "ns",
            "range": "± 28297.36703796886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325198.3705512153,
            "unit": "ns",
            "range": "± 27083.821492056613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2494648.021484375,
            "unit": "ns",
            "range": "± 32120.055790140606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859801.0146484375,
            "unit": "ns",
            "range": "± 10893.779657652189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716533.7933175223,
            "unit": "ns",
            "range": "± 2974.6964148850225"
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
        "date": 1679463438478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689816.958333333,
            "unit": "ns",
            "range": "± 196841.21837928577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19645532.32142857,
            "unit": "ns",
            "range": "± 552605.304026103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47628273.4,
            "unit": "ns",
            "range": "± 1021186.7671519251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94004312.73076923,
            "unit": "ns",
            "range": "± 795379.2699228623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199463361.36666667,
            "unit": "ns",
            "range": "± 3410430.4549208167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58048.895833333336,
            "unit": "ns",
            "range": "± 9058.50835807119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195064.62264150943,
            "unit": "ns",
            "range": "± 8113.646939727808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196192.70786516854,
            "unit": "ns",
            "range": "± 12992.405249363468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170873.101010101,
            "unit": "ns",
            "range": "± 14775.238707623097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12262635.46,
            "unit": "ns",
            "range": "± 487432.74342860386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9314443.75925926,
            "unit": "ns",
            "range": "± 258053.75325525203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17050.22988505747,
            "unit": "ns",
            "range": "± 1958.6463152899312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51797.68041237113,
            "unit": "ns",
            "range": "± 5546.841910317061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47210.932098765436,
            "unit": "ns",
            "range": "± 2487.606133104031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121210.67741935483,
            "unit": "ns",
            "range": "± 13814.372245065842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8723.736842105263,
            "unit": "ns",
            "range": "± 1866.9097187856469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18329.655913978495,
            "unit": "ns",
            "range": "± 1919.661482242341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519263.8711340206,
            "unit": "ns",
            "range": "± 198446.89816675556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2726246.1785714286,
            "unit": "ns",
            "range": "± 117114.18620491822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413901.5,
            "unit": "ns",
            "range": "± 239536.61814564423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6025777.737704918,
            "unit": "ns",
            "range": "± 271232.65852123476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3095622.576923077,
            "unit": "ns",
            "range": "± 127761.34246502169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5059620.696629213,
            "unit": "ns",
            "range": "± 376754.92707390536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22792916.2,
            "unit": "ns",
            "range": "± 511088.253894065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6082345.897435897,
            "unit": "ns",
            "range": "± 209663.4874975154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26636240.923076924,
            "unit": "ns",
            "range": "± 917667.5035867435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6629119.6796875,
            "unit": "ns",
            "range": "± 19620.806334897326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942402.0571986607,
            "unit": "ns",
            "range": "± 9465.374389172035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296172.7380208333,
            "unit": "ns",
            "range": "± 4012.2491764558567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735593.1233552634,
            "unit": "ns",
            "range": "± 59508.3648886949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857403.2450420673,
            "unit": "ns",
            "range": "± 1550.0421059543992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731380.9697265625,
            "unit": "ns",
            "range": "± 1112.895700805173"
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
        "date": 1679470471504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8689710.449438203,
            "unit": "ns",
            "range": "± 479604.46946975373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20891139.445945945,
            "unit": "ns",
            "range": "± 1047110.70273299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53479664.64285714,
            "unit": "ns",
            "range": "± 3189774.2365294755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111593496.59375,
            "unit": "ns",
            "range": "± 11966236.59270113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263515835.44791666,
            "unit": "ns",
            "range": "± 41592322.10721227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75610.78723404255,
            "unit": "ns",
            "range": "± 12007.65839726575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221624.95744680852,
            "unit": "ns",
            "range": "± 24534.975847708352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228673.1976744186,
            "unit": "ns",
            "range": "± 21234.46867315152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223693.9835164835,
            "unit": "ns",
            "range": "± 32720.69150055856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13866843.603448275,
            "unit": "ns",
            "range": "± 1287156.522997161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10878257.987179488,
            "unit": "ns",
            "range": "± 508786.46142083633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26207.505263157895,
            "unit": "ns",
            "range": "± 4064.79296239054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71040.24226804124,
            "unit": "ns",
            "range": "± 12915.913655156788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64405.81182795699,
            "unit": "ns",
            "range": "± 7421.080379535885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131657.47872340426,
            "unit": "ns",
            "range": "± 21430.368167138713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7399.15625,
            "unit": "ns",
            "range": "± 1204.974861743684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20375.872340425532,
            "unit": "ns",
            "range": "± 3781.9392398127343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658008.6595744682,
            "unit": "ns",
            "range": "± 196688.51218146185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861177.0384615385,
            "unit": "ns",
            "range": "± 165337.26426175798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2562042.1030927836,
            "unit": "ns",
            "range": "± 223808.92962839064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6716920.269662921,
            "unit": "ns",
            "range": "± 375165.79105633614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515322.518987342,
            "unit": "ns",
            "range": "± 180565.57858167458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5636959.747126437,
            "unit": "ns",
            "range": "± 359354.43277928454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26455601.807692308,
            "unit": "ns",
            "range": "± 719878.7907601123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6803784.412087912,
            "unit": "ns",
            "range": "± 642138.8624303357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29674337.180722892,
            "unit": "ns",
            "range": "± 1566786.2646727378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7634368.900369624,
            "unit": "ns",
            "range": "± 472078.91593820706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166423.2764185853,
            "unit": "ns",
            "range": "± 74434.92550766158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315862.02734375,
            "unit": "ns",
            "range": "± 17586.252445599253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526212.2666015625,
            "unit": "ns",
            "range": "± 36010.52801542706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858839.0574669471,
            "unit": "ns",
            "range": "± 12583.041773327968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886831.6753427933,
            "unit": "ns",
            "range": "± 58834.508091399366"
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
        "date": 1679537556603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8068290.560975609,
            "unit": "ns",
            "range": "± 260015.21709786993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20319145.710526317,
            "unit": "ns",
            "range": "± 442765.1858726498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50549330.025641024,
            "unit": "ns",
            "range": "± 1761743.3286566867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104077289,
            "unit": "ns",
            "range": "± 2457207.705555657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214908885.6,
            "unit": "ns",
            "range": "± 3358492.11484767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75861.36559139784,
            "unit": "ns",
            "range": "± 8536.789654432197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217176.60674157302,
            "unit": "ns",
            "range": "± 13761.462786130149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218753.74444444446,
            "unit": "ns",
            "range": "± 16934.493469341534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200907.89795918367,
            "unit": "ns",
            "range": "± 20698.839487733727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12578196.6,
            "unit": "ns",
            "range": "± 228254.84945272404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10018441.5,
            "unit": "ns",
            "range": "± 125274.35645880073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22710.752631578947,
            "unit": "ns",
            "range": "± 3046.273181643506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59562.79569892473,
            "unit": "ns",
            "range": "± 6294.369601959219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60291.936170212764,
            "unit": "ns",
            "range": "± 4000.117422492922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134249.39583333334,
            "unit": "ns",
            "range": "± 15387.335933353677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9543.386597938144,
            "unit": "ns",
            "range": "± 783.420503256508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22558.345360824744,
            "unit": "ns",
            "range": "± 3427.4843129357955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575297.58,
            "unit": "ns",
            "range": "± 158517.59278192872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817519.5483870967,
            "unit": "ns",
            "range": "± 126258.17852174476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578696.1836734693,
            "unit": "ns",
            "range": "± 312604.2522952612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6234841.641509434,
            "unit": "ns",
            "range": "± 259056.94338697748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3442909.9615384615,
            "unit": "ns",
            "range": "± 35782.521731089575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5102593.928571428,
            "unit": "ns",
            "range": "± 83383.9658793208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25385658,
            "unit": "ns",
            "range": "± 710839.7571538999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6426456.486111111,
            "unit": "ns",
            "range": "± 306066.3677908139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28712320.25,
            "unit": "ns",
            "range": "± 745171.5356679701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6849862.285416666,
            "unit": "ns",
            "range": "± 111334.56507298583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954731.8946814905,
            "unit": "ns",
            "range": "± 11187.921925309412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279450.8310546875,
            "unit": "ns",
            "range": "± 6455.447663031639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2945795.9069010415,
            "unit": "ns",
            "range": "± 59632.74342249923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796123.4139322917,
            "unit": "ns",
            "range": "± 4486.406435182361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732539.3304268973,
            "unit": "ns",
            "range": "± 5949.343515437568"
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
        "date": 1679540803805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8260443.095238095,
            "unit": "ns",
            "range": "± 301210.0409062331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20263567.76190476,
            "unit": "ns",
            "range": "± 921935.7885161493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52067587.166666664,
            "unit": "ns",
            "range": "± 2546066.843720927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104247259.84615384,
            "unit": "ns",
            "range": "± 1583479.873650691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213452234.23333332,
            "unit": "ns",
            "range": "± 9529794.360005222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65640.07731958762,
            "unit": "ns",
            "range": "± 10253.912996830215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231356.86021505378,
            "unit": "ns",
            "range": "± 31899.509709531725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238730.67368421052,
            "unit": "ns",
            "range": "± 31650.05562209562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211745.39784946237,
            "unit": "ns",
            "range": "± 24179.616732020102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13350004.396551725,
            "unit": "ns",
            "range": "± 727118.4328471491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11658729.722222222,
            "unit": "ns",
            "range": "± 1160427.5777663775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21643.74157303371,
            "unit": "ns",
            "range": "± 3874.0147003290626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59556.91836734694,
            "unit": "ns",
            "range": "± 10527.224994313377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57808.87368421053,
            "unit": "ns",
            "range": "± 6718.133983325811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129975.9623655914,
            "unit": "ns",
            "range": "± 16240.263675546821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9297.084210526316,
            "unit": "ns",
            "range": "± 1405.2093708098698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23871.778350515466,
            "unit": "ns",
            "range": "± 5063.354964312752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488613.6464646466,
            "unit": "ns",
            "range": "± 157897.37044238145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809429.1063829786,
            "unit": "ns",
            "range": "± 107538.1588491376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2462383.9587628865,
            "unit": "ns",
            "range": "± 202045.82226378322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6115737.352941177,
            "unit": "ns",
            "range": "± 193400.09963456469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298361.8620689656,
            "unit": "ns",
            "range": "± 144759.24053836355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5158007.85,
            "unit": "ns",
            "range": "± 261097.1004642972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25821725.470588237,
            "unit": "ns",
            "range": "± 1235863.1210131594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6964687.03125,
            "unit": "ns",
            "range": "± 585328.0714231152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31657895.651515152,
            "unit": "ns",
            "range": "± 2156984.639461748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6925651.670550847,
            "unit": "ns",
            "range": "± 302249.8640501119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2091270.46578125,
            "unit": "ns",
            "range": "± 102965.10362074873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321569.2373046875,
            "unit": "ns",
            "range": "± 14113.69626517436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801108.4915707237,
            "unit": "ns",
            "range": "± 91968.30070818693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924042.2867838541,
            "unit": "ns",
            "range": "± 19190.62782991728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772809.5207682292,
            "unit": "ns",
            "range": "± 11123.172409705792"
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
        "date": 1679627806376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9044979.942105263,
            "unit": "ns",
            "range": "± 756994.2355588545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25229718.715789475,
            "unit": "ns",
            "range": "± 4211893.902117945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57281506.803030305,
            "unit": "ns",
            "range": "± 2631476.6166025903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117010212.61458333,
            "unit": "ns",
            "range": "± 6818298.175408449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232336569.83333334,
            "unit": "ns",
            "range": "± 2615579.2948077777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78131.91666666667,
            "unit": "ns",
            "range": "± 6546.255696470639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246271.9842105263,
            "unit": "ns",
            "range": "± 34107.18020801147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266489.42783505155,
            "unit": "ns",
            "range": "± 41492.55445514879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225089.27528089887,
            "unit": "ns",
            "range": "± 17907.81866871716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15541069.520408163,
            "unit": "ns",
            "range": "± 1321912.3776791096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13093811.110526316,
            "unit": "ns",
            "range": "± 1136560.3458339917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28020.125,
            "unit": "ns",
            "range": "± 3177.787659596336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70475.86263736263,
            "unit": "ns",
            "range": "± 12532.50205001777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66816.54022988505,
            "unit": "ns",
            "range": "± 8039.676219623896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140113.95833333334,
            "unit": "ns",
            "range": "± 25846.204914909824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9135.472527472528,
            "unit": "ns",
            "range": "± 1001.767497317276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27492.802325581397,
            "unit": "ns",
            "range": "± 3688.0477764857637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592156.5670103093,
            "unit": "ns",
            "range": "± 188934.16735879343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2868939.8484848486,
            "unit": "ns",
            "range": "± 134681.25402185624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2579261,
            "unit": "ns",
            "range": "± 263377.4415233274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6015471.875,
            "unit": "ns",
            "range": "± 183238.6350256091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3670226.7010309277,
            "unit": "ns",
            "range": "± 331925.0421250433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5795397.695652174,
            "unit": "ns",
            "range": "± 610345.8597357271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29234913.835051548,
            "unit": "ns",
            "range": "± 1916872.3227827605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7096272.893258427,
            "unit": "ns",
            "range": "± 591496.8176608587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33543781.031578947,
            "unit": "ns",
            "range": "± 2883527.929034614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8144748.566854509,
            "unit": "ns",
            "range": "± 366910.58870432805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2294306.87120864,
            "unit": "ns",
            "range": "± 107264.44330131439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449316.3199013157,
            "unit": "ns",
            "range": "± 19114.344811687497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3199426.356178977,
            "unit": "ns",
            "range": "± 157968.47327264273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976965.4623325893,
            "unit": "ns",
            "range": "± 22117.43146311852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819626.73046875,
            "unit": "ns",
            "range": "± 27664.818288444312"
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
        "date": 1679908517531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9755618.319148935,
            "unit": "ns",
            "range": "± 1815871.8513584551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22807325.058139537,
            "unit": "ns",
            "range": "± 1212814.2763618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53850812.62337662,
            "unit": "ns",
            "range": "± 2482462.384228044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103071976.81666666,
            "unit": "ns",
            "range": "± 4560586.895332778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204711115.625,
            "unit": "ns",
            "range": "± 3970752.80438367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69424.26041666667,
            "unit": "ns",
            "range": "± 8261.785000508497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235336.04347826086,
            "unit": "ns",
            "range": "± 31600.88091480197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234847.11494252874,
            "unit": "ns",
            "range": "± 17043.111133326383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234162.20103092783,
            "unit": "ns",
            "range": "± 30810.708670432592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13478232.489583334,
            "unit": "ns",
            "range": "± 813891.0126580376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10653635.5625,
            "unit": "ns",
            "range": "± 803260.7147491411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18685.533333333333,
            "unit": "ns",
            "range": "± 2933.24580427802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52356.543956043955,
            "unit": "ns",
            "range": "± 6352.472017362983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54733.16483516483,
            "unit": "ns",
            "range": "± 6474.135769461153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127371.33333333333,
            "unit": "ns",
            "range": "± 15895.627584091635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9226.510989010989,
            "unit": "ns",
            "range": "± 1098.3812280352035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21999.105263157893,
            "unit": "ns",
            "range": "± 3847.094132640575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465414.112244898,
            "unit": "ns",
            "range": "± 170205.08990165536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764907.4859154928,
            "unit": "ns",
            "range": "± 134225.1060301838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2423993.102040816,
            "unit": "ns",
            "range": "± 185929.1009749978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6635136.136842106,
            "unit": "ns",
            "range": "± 568042.7416211762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391823.2021276597,
            "unit": "ns",
            "range": "± 233246.5837357529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5175891.6,
            "unit": "ns",
            "range": "± 134533.15095544295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26250939.505376343,
            "unit": "ns",
            "range": "± 1483257.1353541545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6698510.857142857,
            "unit": "ns",
            "range": "± 504617.06188724574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31515980.277777776,
            "unit": "ns",
            "range": "± 2011939.955862914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7566706.305803572,
            "unit": "ns",
            "range": "± 110573.28445017753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030519.357484879,
            "unit": "ns",
            "range": "± 60263.86131858881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344171.5396205357,
            "unit": "ns",
            "range": "± 53262.61769053626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3095800.797574013,
            "unit": "ns",
            "range": "± 189427.38217037724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918389.8975694445,
            "unit": "ns",
            "range": "± 18608.62819184845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816956.7408935546,
            "unit": "ns",
            "range": "± 26288.3487381547"
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
        "date": 1679908733129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8579750.857142856,
            "unit": "ns",
            "range": "± 97816.41632620314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21806000.966666665,
            "unit": "ns",
            "range": "± 214982.1256263834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52171286.6875,
            "unit": "ns",
            "range": "± 1532188.128248626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104079684,
            "unit": "ns",
            "range": "± 1685114.868518464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211404192.75,
            "unit": "ns",
            "range": "± 3989698.8313829987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70176.1875,
            "unit": "ns",
            "range": "± 9457.904877945388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230410.33333333334,
            "unit": "ns",
            "range": "± 9460.156057490567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221799.27848101265,
            "unit": "ns",
            "range": "± 11497.081481320412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204372.0625,
            "unit": "ns",
            "range": "± 14989.53533833556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12754822.4,
            "unit": "ns",
            "range": "± 129151.73675387744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10245430.384615384,
            "unit": "ns",
            "range": "± 126823.34552671974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25138.977528089887,
            "unit": "ns",
            "range": "± 1977.3544250377947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64849.57526881721,
            "unit": "ns",
            "range": "± 5743.407328779061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64132.24545454545,
            "unit": "ns",
            "range": "± 2702.170274661831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128425.44680851063,
            "unit": "ns",
            "range": "± 14908.607597890988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8848.191489361701,
            "unit": "ns",
            "range": "± 683.6185509131511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24219.17525773196,
            "unit": "ns",
            "range": "± 2880.55295259691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1541602.7096774194,
            "unit": "ns",
            "range": "± 174504.33074391648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764727.5204081633,
            "unit": "ns",
            "range": "± 109640.29460514845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2527995.1145833335,
            "unit": "ns",
            "range": "± 240818.66590964768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6157877.552631579,
            "unit": "ns",
            "range": "± 265969.2782028205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495586.5263157897,
            "unit": "ns",
            "range": "± 120074.04289375218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5364242.269230769,
            "unit": "ns",
            "range": "± 142568.53833249683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25493345.46153846,
            "unit": "ns",
            "range": "± 308677.5524360913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6461605.75,
            "unit": "ns",
            "range": "± 228741.00520370837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29694412.833333332,
            "unit": "ns",
            "range": "± 744316.3657249322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6849964.941964285,
            "unit": "ns",
            "range": "± 57459.76062014057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037478.5506510416,
            "unit": "ns",
            "range": "± 16056.989862927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299357.7613932292,
            "unit": "ns",
            "range": "± 3257.431128782006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684443.262122845,
            "unit": "ns",
            "range": "± 76305.56569130538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795153.7553385417,
            "unit": "ns",
            "range": "± 5545.445970141039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727849.3458533654,
            "unit": "ns",
            "range": "± 2995.6888072870693"
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
        "date": 1679987919881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8338051.071428572,
            "unit": "ns",
            "range": "± 113711.3324422953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20953942.333333332,
            "unit": "ns",
            "range": "± 304441.7125948195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51993495,
            "unit": "ns",
            "range": "± 789835.0774428749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104410244.35714285,
            "unit": "ns",
            "range": "± 914997.9981686263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212133080,
            "unit": "ns",
            "range": "± 1942842.6491699852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74629.81958762887,
            "unit": "ns",
            "range": "± 6311.690170077253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222217.5576923077,
            "unit": "ns",
            "range": "± 8900.54670145838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226859.19642857142,
            "unit": "ns",
            "range": "± 9622.209567490947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221918.5903614458,
            "unit": "ns",
            "range": "± 11721.825978454646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12653914.066666666,
            "unit": "ns",
            "range": "± 220292.05942711167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10294015.6,
            "unit": "ns",
            "range": "± 139667.95936679863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24625.381443298967,
            "unit": "ns",
            "range": "± 2356.6287646202136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61749.01075268817,
            "unit": "ns",
            "range": "± 6083.883389555491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62263.57142857143,
            "unit": "ns",
            "range": "± 1674.165296245696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122569.72368421052,
            "unit": "ns",
            "range": "± 3482.417652909864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9544.818181818182,
            "unit": "ns",
            "range": "± 547.9273495229792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22866.541666666668,
            "unit": "ns",
            "range": "± 2334.7363467363784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619155.0824742268,
            "unit": "ns",
            "range": "± 159451.1320437544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895469.9454545453,
            "unit": "ns",
            "range": "± 122729.23453705938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2831070.3846153845,
            "unit": "ns",
            "range": "± 45056.51766122644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6104250.931034483,
            "unit": "ns",
            "range": "± 145170.4429548569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3379306.0217391304,
            "unit": "ns",
            "range": "± 83232.83518478289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5224282.476190476,
            "unit": "ns",
            "range": "± 176287.02697900656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25127002,
            "unit": "ns",
            "range": "± 403140.54411596386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6528446.371428572,
            "unit": "ns",
            "range": "± 183856.06104746019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29081415.611111112,
            "unit": "ns",
            "range": "± 618286.6442775446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6688552.061079546,
            "unit": "ns",
            "range": "± 211353.22048385718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947544.7421875,
            "unit": "ns",
            "range": "± 3856.1143255853003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296108.3539341518,
            "unit": "ns",
            "range": "± 6159.533627419721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634399.002083333,
            "unit": "ns",
            "range": "± 41763.839174095345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898796.487109375,
            "unit": "ns",
            "range": "± 1963.242177482388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743427.5700334822,
            "unit": "ns",
            "range": "± 778.9021734996498"
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
        "date": 1679989546244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7450105.333333333,
            "unit": "ns",
            "range": "± 61243.19917840724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19086805.272727273,
            "unit": "ns",
            "range": "± 713725.5175546117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46229903.8,
            "unit": "ns",
            "range": "± 1203790.2984387134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93335015.2,
            "unit": "ns",
            "range": "± 1196831.715439751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191645824.4375,
            "unit": "ns",
            "range": "± 3618070.871324136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56315.574468085106,
            "unit": "ns",
            "range": "± 6027.672976854355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199325.76404494382,
            "unit": "ns",
            "range": "± 12893.356751393041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193196.07692307694,
            "unit": "ns",
            "range": "± 9971.274194351545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175216.18181818182,
            "unit": "ns",
            "range": "± 7320.1075915259025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11657732.295454545,
            "unit": "ns",
            "range": "± 387082.59563191835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9381181.904761905,
            "unit": "ns",
            "range": "± 340606.43950480013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18034.627906976744,
            "unit": "ns",
            "range": "± 2483.3480805818754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53812.41935483871,
            "unit": "ns",
            "range": "± 6574.3868706065605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49635.857894736844,
            "unit": "ns",
            "range": "± 5898.588419158759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107116.4574468085,
            "unit": "ns",
            "range": "± 13780.221273146506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6076.633333333333,
            "unit": "ns",
            "range": "± 896.8473677965472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17385.13529411765,
            "unit": "ns",
            "range": "± 1979.4187088461028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460090.701030928,
            "unit": "ns",
            "range": "± 158814.11143509918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651162.036585366,
            "unit": "ns",
            "range": "± 95340.05093403759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2388759.907216495,
            "unit": "ns",
            "range": "± 196007.44532202953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5957603.891304348,
            "unit": "ns",
            "range": "± 229104.94009228153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3041812.861111111,
            "unit": "ns",
            "range": "± 101185.03752973778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4845629.794117647,
            "unit": "ns",
            "range": "± 153801.45822254277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23853025.55,
            "unit": "ns",
            "range": "± 843755.1119788602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6071564.344827586,
            "unit": "ns",
            "range": "± 265095.30704202136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27292912.69047619,
            "unit": "ns",
            "range": "± 982079.7976908308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6230864.320833334,
            "unit": "ns",
            "range": "± 37009.47329150701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883293.6854073661,
            "unit": "ns",
            "range": "± 9881.186638527679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223443.2489583334,
            "unit": "ns",
            "range": "± 4637.88558106263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2386575.6194196427,
            "unit": "ns",
            "range": "± 10773.237254903956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764997.3091145833,
            "unit": "ns",
            "range": "± 8136.893691922657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749868.0178385417,
            "unit": "ns",
            "range": "± 4722.981346324236"
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
        "date": 1679997526607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8383190.896226415,
            "unit": "ns",
            "range": "± 349235.2677813085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19732335.286516853,
            "unit": "ns",
            "range": "± 1093275.4233148277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49715535.3,
            "unit": "ns",
            "range": "± 2680852.1824928294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102715919.9322034,
            "unit": "ns",
            "range": "± 4519084.766196172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201617313.07317072,
            "unit": "ns",
            "range": "± 6952603.607964121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65057.9175257732,
            "unit": "ns",
            "range": "± 13303.47618941357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213728.74725274724,
            "unit": "ns",
            "range": "± 14923.042465777851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198904.61842105264,
            "unit": "ns",
            "range": "± 10093.464974879678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174090.0306122449,
            "unit": "ns",
            "range": "± 18062.32834624908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11907754.65,
            "unit": "ns",
            "range": "± 265472.84143169597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9443171.333333334,
            "unit": "ns",
            "range": "± 282178.5690518699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17142.103448275862,
            "unit": "ns",
            "range": "± 1946.8339057597793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51683.24731182796,
            "unit": "ns",
            "range": "± 6443.9537563718595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52981.426315789475,
            "unit": "ns",
            "range": "± 7251.249208947212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114546.73863636363,
            "unit": "ns",
            "range": "± 9654.403947141534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6757.03125,
            "unit": "ns",
            "range": "± 644.6123347959242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17952.761363636364,
            "unit": "ns",
            "range": "± 2461.089857608963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564369.4020618557,
            "unit": "ns",
            "range": "± 180098.58786888898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895020.8943661973,
            "unit": "ns",
            "range": "± 140623.00413674233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2438177.0208333335,
            "unit": "ns",
            "range": "± 263229.54506629775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6059346.487179487,
            "unit": "ns",
            "range": "± 211356.69677583736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268929,
            "unit": "ns",
            "range": "± 115321.95312493628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5180785.162162162,
            "unit": "ns",
            "range": "± 171396.29833088146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24483150.111111112,
            "unit": "ns",
            "range": "± 521554.8924868101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6451290.909090909,
            "unit": "ns",
            "range": "± 203124.56427574245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28577188.72,
            "unit": "ns",
            "range": "± 752134.8931700195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6837650.518415178,
            "unit": "ns",
            "range": "± 115702.77168615711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064778.1486816406,
            "unit": "ns",
            "range": "± 40533.4817059983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315595.0894252232,
            "unit": "ns",
            "range": "± 8590.716140321558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2743010.1501116073,
            "unit": "ns",
            "range": "± 45077.58944492954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899897.358203125,
            "unit": "ns",
            "range": "± 11950.439659163638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747532.1914713542,
            "unit": "ns",
            "range": "± 12740.921666040418"
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
        "date": 1679999033345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8130030.775,
            "unit": "ns",
            "range": "± 282259.4912844896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22013596.661538463,
            "unit": "ns",
            "range": "± 989711.1173290397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49989313.825581394,
            "unit": "ns",
            "range": "± 1843690.2454583892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97580254.5909091,
            "unit": "ns",
            "range": "± 2395626.0443478203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192930618.13333333,
            "unit": "ns",
            "range": "± 1596029.1645474343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55252.26315789474,
            "unit": "ns",
            "range": "± 6781.2545867587605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199480.20652173914,
            "unit": "ns",
            "range": "± 12721.701032278752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207667.22471910113,
            "unit": "ns",
            "range": "± 11514.16447325247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185960.3686868687,
            "unit": "ns",
            "range": "± 14654.45470590697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11737547.85,
            "unit": "ns",
            "range": "± 194063.40588235724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9687325.266666668,
            "unit": "ns",
            "range": "± 288948.14056110405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19847.467741935485,
            "unit": "ns",
            "range": "± 2348.4945846574774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55719.04255319149,
            "unit": "ns",
            "range": "± 6756.9361939678365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56654.37234042553,
            "unit": "ns",
            "range": "± 3465.5751682756295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121891.44210526315,
            "unit": "ns",
            "range": "± 12380.692868690614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7684.802083333333,
            "unit": "ns",
            "range": "± 796.9100935857016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18779.697916666668,
            "unit": "ns",
            "range": "± 2223.4047131171155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537845.18,
            "unit": "ns",
            "range": "± 172136.35648478262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2934700.8474576273,
            "unit": "ns",
            "range": "± 130006.722119283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632626.5315789473,
            "unit": "ns",
            "range": "± 287031.95210487855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6058478.0625,
            "unit": "ns",
            "range": "± 186756.06495466435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260661.1666666665,
            "unit": "ns",
            "range": "± 132832.94720221587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5045338.152173913,
            "unit": "ns",
            "range": "± 171441.02280703056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23541301.393939395,
            "unit": "ns",
            "range": "± 724307.7752928972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6106188.970588235,
            "unit": "ns",
            "range": "± 267738.46624878695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27768110.259259257,
            "unit": "ns",
            "range": "± 774832.4726973415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614041.041294643,
            "unit": "ns",
            "range": "± 32686.114578652105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972204.6240985577,
            "unit": "ns",
            "range": "± 10337.779603774356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263818.6081194195,
            "unit": "ns",
            "range": "± 17056.999970535177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605446.65625,
            "unit": "ns",
            "range": "± 20697.901412487667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 765635.4323167067,
            "unit": "ns",
            "range": "± 3109.73581697892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720033.7307942709,
            "unit": "ns",
            "range": "± 8672.717408397613"
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
        "date": 1680002018532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8928986.879310345,
            "unit": "ns",
            "range": "± 389394.26454570494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21447147.1875,
            "unit": "ns",
            "range": "± 843870.2870354191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55088517.81818182,
            "unit": "ns",
            "range": "± 2024700.7341925555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110992759.73333333,
            "unit": "ns",
            "range": "± 1923684.5298325468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227939773.92592594,
            "unit": "ns",
            "range": "± 6366149.353895166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62822.94565217391,
            "unit": "ns",
            "range": "± 11287.349616745298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250479.55319148937,
            "unit": "ns",
            "range": "± 37275.128688502904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251406.414893617,
            "unit": "ns",
            "range": "± 37264.807155430026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216726.2087912088,
            "unit": "ns",
            "range": "± 20082.792313330494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14549281.783505155,
            "unit": "ns",
            "range": "± 987464.9401223824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10977529.666666666,
            "unit": "ns",
            "range": "± 659627.9498741323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19503.56842105263,
            "unit": "ns",
            "range": "± 4013.1483837575693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54953.92391304348,
            "unit": "ns",
            "range": "± 6559.739254121252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59042.45054945055,
            "unit": "ns",
            "range": "± 5318.839165882671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141681.94897959183,
            "unit": "ns",
            "range": "± 29316.257089885414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8896.80459770115,
            "unit": "ns",
            "range": "± 852.8632328410597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24237.183908045976,
            "unit": "ns",
            "range": "± 3953.2287849616887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1686316.5217391304,
            "unit": "ns",
            "range": "± 234454.42034536912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953649.6413043477,
            "unit": "ns",
            "range": "± 221489.20765321262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840835.826530612,
            "unit": "ns",
            "range": "± 376341.30407635606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7040595.051020408,
            "unit": "ns",
            "range": "± 619044.3197471767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436900.3387096776,
            "unit": "ns",
            "range": "± 214241.1560306105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5332443.260869565,
            "unit": "ns",
            "range": "± 299132.02691444155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26042414.644444443,
            "unit": "ns",
            "range": "± 1448561.395604202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6269047.305084745,
            "unit": "ns",
            "range": "± 273548.6919258683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31965639.629032258,
            "unit": "ns",
            "range": "± 2088334.9628228021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7899673.441860465,
            "unit": "ns",
            "range": "± 292106.23648955935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050322.918465909,
            "unit": "ns",
            "range": "± 84693.15157096591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415748.7391870471,
            "unit": "ns",
            "range": "± 64368.34011812488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3280089.7138464097,
            "unit": "ns",
            "range": "± 198992.66549998705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957937.5742612092,
            "unit": "ns",
            "range": "± 23717.145383043404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829493.6818953805,
            "unit": "ns",
            "range": "± 31722.50783355805"
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
        "date": 1680247107244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7662935.5,
            "unit": "ns",
            "range": "± 110579.85217566675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18824146.433333334,
            "unit": "ns",
            "range": "± 468258.8817179779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46508128.61764706,
            "unit": "ns",
            "range": "± 954892.1842163572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95057051.15384616,
            "unit": "ns",
            "range": "± 1085226.3763659212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208609025.83333334,
            "unit": "ns",
            "range": "± 3098708.823892131"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58895.55789473684,
            "unit": "ns",
            "range": "± 6342.17060251455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369123.7027027027,
            "unit": "ns",
            "range": "± 17374.92459487312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306209.5714285714,
            "unit": "ns",
            "range": "± 12438.576474905718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272522.6724137931,
            "unit": "ns",
            "range": "± 11856.418755164737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5327592.153846154,
            "unit": "ns",
            "range": "± 64830.85908326651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3992368.272727273,
            "unit": "ns",
            "range": "± 97263.48289749165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18116.24418604651,
            "unit": "ns",
            "range": "± 2129.3336982481665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88562.18478260869,
            "unit": "ns",
            "range": "± 9148.162849169812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87212.19318181818,
            "unit": "ns",
            "range": "± 8790.477697267646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235118.47916666666,
            "unit": "ns",
            "range": "± 20481.86479173539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6359.681818181818,
            "unit": "ns",
            "range": "± 874.4653742144994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17649.647058823528,
            "unit": "ns",
            "range": "± 1624.417871598508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510729.452631579,
            "unit": "ns",
            "range": "± 130771.54906283303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2971011.6,
            "unit": "ns",
            "range": "± 137365.25213172546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2442819.154639175,
            "unit": "ns",
            "range": "± 213519.40301587837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6624253.536585365,
            "unit": "ns",
            "range": "± 237900.64101343838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3102559.9418604653,
            "unit": "ns",
            "range": "± 96545.71082487851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3262763.224137931,
            "unit": "ns",
            "range": "± 133031.0958176984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4304639.909090909,
            "unit": "ns",
            "range": "± 180489.43650235055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4341727.355555556,
            "unit": "ns",
            "range": "± 244291.13102567752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8685101.260869564,
            "unit": "ns",
            "range": "± 327761.52954633447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199378.998958333,
            "unit": "ns",
            "range": "± 57723.66224909002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934243.9192708333,
            "unit": "ns",
            "range": "± 12036.600459423878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236192.6279947916,
            "unit": "ns",
            "range": "± 7925.774930737653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2794344.869921875,
            "unit": "ns",
            "range": "± 62848.712209595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850913.5590494792,
            "unit": "ns",
            "range": "± 4770.30277726023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732669.8078776042,
            "unit": "ns",
            "range": "± 6994.029952524829"
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
        "date": 1680252165760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8333681.071428572,
            "unit": "ns",
            "range": "± 80110.51776112824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21089989.714285713,
            "unit": "ns",
            "range": "± 246071.1812515384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53911762.1,
            "unit": "ns",
            "range": "± 912172.7415510099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103761082.53333333,
            "unit": "ns",
            "range": "± 1178298.2646357215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207376263,
            "unit": "ns",
            "range": "± 5772254.255277442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75767.38043478261,
            "unit": "ns",
            "range": "± 5169.074895110472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396035.7586206897,
            "unit": "ns",
            "range": "± 21592.808385031498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326396.7181818182,
            "unit": "ns",
            "range": "± 12465.438670492566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334235.81481481483,
            "unit": "ns",
            "range": "± 9200.507887473625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5665075,
            "unit": "ns",
            "range": "± 53739.629670076094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126867.3571428573,
            "unit": "ns",
            "range": "± 57330.89526445734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26393.659090909092,
            "unit": "ns",
            "range": "± 2353.5498641211984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127415.78409090909,
            "unit": "ns",
            "range": "± 13950.297437976718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123166.72222222222,
            "unit": "ns",
            "range": "± 2629.129352769614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 246860.1559139785,
            "unit": "ns",
            "range": "± 20579.400523388842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9178.96875,
            "unit": "ns",
            "range": "± 1512.3711912311044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18718.5,
            "unit": "ns",
            "range": "± 3612.289739661716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625971.3229166667,
            "unit": "ns",
            "range": "± 196644.07281671942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051684,
            "unit": "ns",
            "range": "± 152580.44320067717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2699831.1767676766,
            "unit": "ns",
            "range": "± 330356.7839091742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6858095.222222222,
            "unit": "ns",
            "range": "± 338667.066151256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3423336.3296703296,
            "unit": "ns",
            "range": "± 223948.84918123874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4134407.1,
            "unit": "ns",
            "range": "± 683253.4402353159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4589311.887096774,
            "unit": "ns",
            "range": "± 93860.43333861094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4748605.485915493,
            "unit": "ns",
            "range": "± 224871.10479748758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8701189.277777778,
            "unit": "ns",
            "range": "± 144879.6327777996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6558551.246651785,
            "unit": "ns",
            "range": "± 97161.26537225352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884749.0014935662,
            "unit": "ns",
            "range": "± 38683.235034252066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291762.9411057692,
            "unit": "ns",
            "range": "± 4810.364392296983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496372.4564302885,
            "unit": "ns",
            "range": "± 33159.42536238192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827420.1100911458,
            "unit": "ns",
            "range": "± 10744.970754931215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749413.3342633928,
            "unit": "ns",
            "range": "± 3977.5036813799693"
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
        "date": 1680256913758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7526694.833333333,
            "unit": "ns",
            "range": "± 86992.25396899461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18876709.230769232,
            "unit": "ns",
            "range": "± 655328.3435353715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46557950,
            "unit": "ns",
            "range": "± 1095007.6452494292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95971276.5,
            "unit": "ns",
            "range": "± 1041491.2151186061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188925253.06666666,
            "unit": "ns",
            "range": "± 2662820.283715355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56240.42857142857,
            "unit": "ns",
            "range": "± 6271.505389268118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359381.53731343284,
            "unit": "ns",
            "range": "± 17022.24504771611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301373.64210526313,
            "unit": "ns",
            "range": "± 17648.85068159361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277085.0128205128,
            "unit": "ns",
            "range": "± 14144.685002202128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5339014.481481481,
            "unit": "ns",
            "range": "± 149581.90162798399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894494.777777778,
            "unit": "ns",
            "range": "± 69035.55442865106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18205.761363636364,
            "unit": "ns",
            "range": "± 2461.784632046846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88677.24725274726,
            "unit": "ns",
            "range": "± 6573.667747736515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85573.74468085106,
            "unit": "ns",
            "range": "± 9810.457879481412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 229196.20652173914,
            "unit": "ns",
            "range": "± 21638.10553931435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5810.159090909091,
            "unit": "ns",
            "range": "± 725.1098987076109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17299.67816091954,
            "unit": "ns",
            "range": "± 1865.432498602694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553022.7525252525,
            "unit": "ns",
            "range": "± 172712.38448908337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2888017.8333333335,
            "unit": "ns",
            "range": "± 135750.2462162474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2623507.8673469387,
            "unit": "ns",
            "range": "± 261610.95029836413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7072097.360465116,
            "unit": "ns",
            "range": "± 372759.2590393387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3153620.0444444446,
            "unit": "ns",
            "range": "± 118779.64414179951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3282944.5263157897,
            "unit": "ns",
            "range": "± 110849.16188488017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286994.19047619,
            "unit": "ns",
            "range": "± 156167.59981542002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4369180.739130435,
            "unit": "ns",
            "range": "± 265794.10964445665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8569745.375,
            "unit": "ns",
            "range": "± 209166.96891636905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6115577.297395834,
            "unit": "ns",
            "range": "± 50912.958294873366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918375.8471354167,
            "unit": "ns",
            "range": "± 12508.722444522014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234216.6727764423,
            "unit": "ns",
            "range": "± 4803.704519804414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2415156.0753348214,
            "unit": "ns",
            "range": "± 12993.458131200214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764564.7864118303,
            "unit": "ns",
            "range": "± 2758.780129711075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696654.10625,
            "unit": "ns",
            "range": "± 5549.602701752259"
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
        "date": 1680266185027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9091449.710526315,
            "unit": "ns",
            "range": "± 391979.2643087922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21945576.236842107,
            "unit": "ns",
            "range": "± 742683.9007787061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52147692.57692308,
            "unit": "ns",
            "range": "± 452595.60067670816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114841330.38461539,
            "unit": "ns",
            "range": "± 1806339.7520223293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227126719.95555556,
            "unit": "ns",
            "range": "± 7900770.3481327435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78638.86666666667,
            "unit": "ns",
            "range": "± 8114.575603072382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 431314.57608695654,
            "unit": "ns",
            "range": "± 38392.25426493732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354841.79347826086,
            "unit": "ns",
            "range": "± 32541.912098781042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350106.90425531915,
            "unit": "ns",
            "range": "± 25283.423491869708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6131418.647058823,
            "unit": "ns",
            "range": "± 120784.6800032713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4478407.035714285,
            "unit": "ns",
            "range": "± 125917.65657423437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25088.81111111111,
            "unit": "ns",
            "range": "± 2616.009229678442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124800.1914893617,
            "unit": "ns",
            "range": "± 10953.400585556466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123450.26136363637,
            "unit": "ns",
            "range": "± 6746.499221596028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 266142.54347826086,
            "unit": "ns",
            "range": "± 16886.069124950136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9587.969072164948,
            "unit": "ns",
            "range": "± 1054.7153590504115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24461.032967032967,
            "unit": "ns",
            "range": "± 2309.4472472412067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765451.9696969697,
            "unit": "ns",
            "range": "± 219719.03211780443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3091833.1515151514,
            "unit": "ns",
            "range": "± 96397.83390659033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2609640.586956522,
            "unit": "ns",
            "range": "± 218924.62155623751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806582.471428571,
            "unit": "ns",
            "range": "± 218146.90820495604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3510391.206896552,
            "unit": "ns",
            "range": "± 236632.73625123675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3837218.163265306,
            "unit": "ns",
            "range": "± 312179.05840265605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4778942.859375,
            "unit": "ns",
            "range": "± 215954.02614922295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4856526.844444444,
            "unit": "ns",
            "range": "± 299986.48427712114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9573682.48101266,
            "unit": "ns",
            "range": "± 486610.0693805409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7064281.472842262,
            "unit": "ns",
            "range": "± 353386.775457435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987801.2905649038,
            "unit": "ns",
            "range": "± 13121.522672833604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327413.3662109375,
            "unit": "ns",
            "range": "± 17178.994380546257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2825075.4955078126,
            "unit": "ns",
            "range": "± 99459.88344396482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800175.3158052885,
            "unit": "ns",
            "range": "± 8859.751600837799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731559.2034737723,
            "unit": "ns",
            "range": "± 8481.205920496477"
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
        "date": 1680422359468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7717005.763888889,
            "unit": "ns",
            "range": "± 357430.171175148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19357234.87755102,
            "unit": "ns",
            "range": "± 749275.0697435163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47605422.28888889,
            "unit": "ns",
            "range": "± 1810881.4113605588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94968364.45454545,
            "unit": "ns",
            "range": "± 2301722.036753921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193471215.64285713,
            "unit": "ns",
            "range": "± 2215565.5773193794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57044.02272727273,
            "unit": "ns",
            "range": "± 4628.952335422721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365612.7471910112,
            "unit": "ns",
            "range": "± 20881.721663760094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306134.768115942,
            "unit": "ns",
            "range": "± 14503.58840298104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274086.3461538461,
            "unit": "ns",
            "range": "± 4372.522381230195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5338708.131578947,
            "unit": "ns",
            "range": "± 115099.62919247661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4005824.5,
            "unit": "ns",
            "range": "± 88702.53544616945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17895.409090909092,
            "unit": "ns",
            "range": "± 1665.6153647720357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84486.98901098901,
            "unit": "ns",
            "range": "± 8214.678758166865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87511.1105263158,
            "unit": "ns",
            "range": "± 10666.054984971772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 233656.38888888888,
            "unit": "ns",
            "range": "± 22998.62684259256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6524.712643678161,
            "unit": "ns",
            "range": "± 675.2675422937843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17182.12222222222,
            "unit": "ns",
            "range": "± 1432.4742233716527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580697.569892473,
            "unit": "ns",
            "range": "± 185964.18045602913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3026821.1333333333,
            "unit": "ns",
            "range": "± 283771.6346116394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2614931.1789473686,
            "unit": "ns",
            "range": "± 360398.3842812739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7065922.925531914,
            "unit": "ns",
            "range": "± 460554.6145461905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192201.533333333,
            "unit": "ns",
            "range": "± 201642.57513619255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284460.7875,
            "unit": "ns",
            "range": "± 170463.44504133236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4426836.516853932,
            "unit": "ns",
            "range": "± 242502.0737730501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4399732.276595744,
            "unit": "ns",
            "range": "± 294207.0400719188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8985718.984615386,
            "unit": "ns",
            "range": "± 417264.9279066633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6500340.869270833,
            "unit": "ns",
            "range": "± 111053.16013686005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856555.8115885416,
            "unit": "ns",
            "range": "± 26089.944262485475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267940.0234375,
            "unit": "ns",
            "range": "± 12694.840457546276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119871.854375,
            "unit": "ns",
            "range": "± 267065.80185499473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890977.0765234375,
            "unit": "ns",
            "range": "± 21406.337553744917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823031.6389532575,
            "unit": "ns",
            "range": "± 36183.997761648956"
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
        "date": 1680491727558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8141262.673913044,
            "unit": "ns",
            "range": "± 293708.31433516217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19930725.533333335,
            "unit": "ns",
            "range": "± 593035.6942060607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49331163.655172415,
            "unit": "ns",
            "range": "± 1433924.927900498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96461463.8888889,
            "unit": "ns",
            "range": "± 2049438.561492531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205861311.4642857,
            "unit": "ns",
            "range": "± 5757580.68674328"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64500.63043478261,
            "unit": "ns",
            "range": "± 9031.653556288671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392994.6489361702,
            "unit": "ns",
            "range": "± 30719.25918395352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319130.37078651687,
            "unit": "ns",
            "range": "± 24616.151948643033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309357.4157894737,
            "unit": "ns",
            "range": "± 23596.683922121192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5505048.555555556,
            "unit": "ns",
            "range": "± 116867.02933184223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3957950.6363636362,
            "unit": "ns",
            "range": "± 97136.98988703456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17282.19318181818,
            "unit": "ns",
            "range": "± 1520.366107285631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87964.77659574468,
            "unit": "ns",
            "range": "± 11544.306729911721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94474.08,
            "unit": "ns",
            "range": "± 13958.911431668723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 245750.38947368422,
            "unit": "ns",
            "range": "± 23626.358237797445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6517.274725274725,
            "unit": "ns",
            "range": "± 873.491538672166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17659.074468085106,
            "unit": "ns",
            "range": "± 2216.039129731784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1670770.081632653,
            "unit": "ns",
            "range": "± 182056.6029201303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389135.097938144,
            "unit": "ns",
            "range": "± 339216.33889254153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2817898.96875,
            "unit": "ns",
            "range": "± 304185.2582266431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7446285.875,
            "unit": "ns",
            "range": "± 649327.3213546827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392078.492753623,
            "unit": "ns",
            "range": "± 163455.39608043674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3306226.5384615385,
            "unit": "ns",
            "range": "± 47133.43717506604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480906.5,
            "unit": "ns",
            "range": "± 198910.34877249753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4590398.929292929,
            "unit": "ns",
            "range": "± 317169.40218185127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9652272.541666666,
            "unit": "ns",
            "range": "± 719601.619821996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7003334.627790178,
            "unit": "ns",
            "range": "± 120255.1016169965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2029271.8206905243,
            "unit": "ns",
            "range": "± 60145.32485233732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385853.25,
            "unit": "ns",
            "range": "± 34632.69844363469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720978.690673828,
            "unit": "ns",
            "range": "± 50946.0757501443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932717.3101473722,
            "unit": "ns",
            "range": "± 22120.221422060302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786071.3851902174,
            "unit": "ns",
            "range": "± 19166.22335084108"
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
        "date": 1680492784676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9732242.159793815,
            "unit": "ns",
            "range": "± 920613.728937374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23094505.347368423,
            "unit": "ns",
            "range": "± 1546903.0937352115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58105150.927083336,
            "unit": "ns",
            "range": "± 4010515.056931419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108431048.26315789,
            "unit": "ns",
            "range": "± 3716852.4184145764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231857102.57831326,
            "unit": "ns",
            "range": "± 12310970.085718468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78170.10588235295,
            "unit": "ns",
            "range": "± 10073.7174003674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 430823.8933333333,
            "unit": "ns",
            "range": "± 21608.235145971634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331885.65591397847,
            "unit": "ns",
            "range": "± 18889.67049997721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 394256.3369565217,
            "unit": "ns",
            "range": "± 56448.412969111596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5933478.649484536,
            "unit": "ns",
            "range": "± 416605.64433486445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4198736,
            "unit": "ns",
            "range": "± 183842.48043825358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24103.6875,
            "unit": "ns",
            "range": "± 6038.377562352847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133090.26041666666,
            "unit": "ns",
            "range": "± 27079.880310217024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 153268.32967032967,
            "unit": "ns",
            "range": "± 26792.01710918756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 308946.3854166667,
            "unit": "ns",
            "range": "± 50514.44556505224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11481.145161290322,
            "unit": "ns",
            "range": "± 1545.2917738081564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24689.58791208791,
            "unit": "ns",
            "range": "± 3944.845012159967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570987.293814433,
            "unit": "ns",
            "range": "± 155743.2780898945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048331.697674419,
            "unit": "ns",
            "range": "± 152275.90778775216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2604486.4897959186,
            "unit": "ns",
            "range": "± 188022.04975948334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6943120.096153846,
            "unit": "ns",
            "range": "± 285660.13086500904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3744357.1464646463,
            "unit": "ns",
            "range": "± 275312.50947279984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3933078.8333333335,
            "unit": "ns",
            "range": "± 418508.53365852317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4850522.802083333,
            "unit": "ns",
            "range": "± 388790.4087836536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5616982.135416667,
            "unit": "ns",
            "range": "± 672399.4795138977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9888725.44736842,
            "unit": "ns",
            "range": "± 744170.9951281267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7624549.7765625,
            "unit": "ns",
            "range": "± 537383.2283584864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2228294.1553199403,
            "unit": "ns",
            "range": "± 118769.0889710327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428172.1929045378,
            "unit": "ns",
            "range": "± 71100.2741296026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072442.077601482,
            "unit": "ns",
            "range": "± 302820.60391673713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946146.1067057292,
            "unit": "ns",
            "range": "± 27859.94983813395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874572.0214092548,
            "unit": "ns",
            "range": "± 12391.964453160908"
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
        "date": 1680493181577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8050427.428571428,
            "unit": "ns",
            "range": "± 183050.9404498025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20666547.34285714,
            "unit": "ns",
            "range": "± 641547.1039541351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52512819.61904762,
            "unit": "ns",
            "range": "± 1223509.6332978942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103266067.07142857,
            "unit": "ns",
            "range": "± 1451235.0414894344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207142964.6,
            "unit": "ns",
            "range": "± 4511786.6680036895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67793.03608247422,
            "unit": "ns",
            "range": "± 10662.23534359104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 425661.5430107527,
            "unit": "ns",
            "range": "± 45444.15040940817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331850.6875,
            "unit": "ns",
            "range": "± 35002.695632528375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285264.3775510204,
            "unit": "ns",
            "range": "± 19052.105576476915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5238067.285714285,
            "unit": "ns",
            "range": "± 82368.26188940323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839105.5833333335,
            "unit": "ns",
            "range": "± 92860.63430282603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16438.158536585364,
            "unit": "ns",
            "range": "± 1765.6394390919243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84771.83516483517,
            "unit": "ns",
            "range": "± 8648.715935859736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83937.14583333333,
            "unit": "ns",
            "range": "± 14901.6260200579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 222928.92783505155,
            "unit": "ns",
            "range": "± 17019.374107939104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6040.59375,
            "unit": "ns",
            "range": "± 1078.4533572436037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20141.58762886598,
            "unit": "ns",
            "range": "± 3448.917715967145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690601.4731182796,
            "unit": "ns",
            "range": "± 178792.02628792846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3132328.8604651163,
            "unit": "ns",
            "range": "± 161526.24086151106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641233.3085106383,
            "unit": "ns",
            "range": "± 214517.51830917556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7137265.743902439,
            "unit": "ns",
            "range": "± 377269.85485719715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157258.602272727,
            "unit": "ns",
            "range": "± 173167.09926558912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3310456.589285714,
            "unit": "ns",
            "range": "± 139737.93334976948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4590627.447916667,
            "unit": "ns",
            "range": "± 292529.25818731077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4653984.989795919,
            "unit": "ns",
            "range": "± 320850.51410214894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8659543.625,
            "unit": "ns",
            "range": "± 195298.14654985792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7132579.053267046,
            "unit": "ns",
            "range": "± 173244.47864522127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2096140.048921131,
            "unit": "ns",
            "range": "± 49739.664989361605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330982.6014322916,
            "unit": "ns",
            "range": "± 21310.374456123103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606071.62109375,
            "unit": "ns",
            "range": "± 70049.40921824238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781532.1283482143,
            "unit": "ns",
            "range": "± 6480.614095193818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740550.7968261719,
            "unit": "ns",
            "range": "± 16778.043010413337"
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
        "date": 1680506497833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9336335.866666667,
            "unit": "ns",
            "range": "± 139897.95068644383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21335935.96153846,
            "unit": "ns",
            "range": "± 263780.90343838243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53169426.03333333,
            "unit": "ns",
            "range": "± 669302.7543185591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104923630.61764705,
            "unit": "ns",
            "range": "± 1953521.4253598514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219942352.26923078,
            "unit": "ns",
            "range": "± 1959484.7391951943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65992.30927835051,
            "unit": "ns",
            "range": "± 12751.057275902673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379935.6082474227,
            "unit": "ns",
            "range": "± 24843.964460523697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315260.4065934066,
            "unit": "ns",
            "range": "± 18332.65080849407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326260.9120879121,
            "unit": "ns",
            "range": "± 18300.85774714055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5675378.5,
            "unit": "ns",
            "range": "± 92936.1847208155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4171230.285714286,
            "unit": "ns",
            "range": "± 64634.1257082196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24044.915789473685,
            "unit": "ns",
            "range": "± 3400.6931104013224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118300.81818181818,
            "unit": "ns",
            "range": "± 14225.66105803289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121357.54639175258,
            "unit": "ns",
            "range": "± 14226.415844902614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276193.2111111111,
            "unit": "ns",
            "range": "± 15360.728866641773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10438.310526315789,
            "unit": "ns",
            "range": "± 1952.1987238329064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24328.31052631579,
            "unit": "ns",
            "range": "± 3885.8626176007224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1584872.448979592,
            "unit": "ns",
            "range": "± 189272.33474842823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3035452.7011494255,
            "unit": "ns",
            "range": "± 269741.19321361545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2516755.180412371,
            "unit": "ns",
            "range": "± 267480.2007844283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6979070.978260869,
            "unit": "ns",
            "range": "± 458243.93632402364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451694.472222222,
            "unit": "ns",
            "range": "± 106232.11845455246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475153.4285714286,
            "unit": "ns",
            "range": "± 98540.2279141117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4519040.622641509,
            "unit": "ns",
            "range": "± 174837.5216517221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4596799.664705883,
            "unit": "ns",
            "range": "± 240916.56978218706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8778079.872340426,
            "unit": "ns",
            "range": "± 298362.18628106697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6688852.202047414,
            "unit": "ns",
            "range": "± 192471.4686130797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001877.6519657257,
            "unit": "ns",
            "range": "± 60316.44889354696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320412.7957589286,
            "unit": "ns",
            "range": "± 13540.602813066174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3047398.2474275916,
            "unit": "ns",
            "range": "± 109668.28975443142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888947.4266927083,
            "unit": "ns",
            "range": "± 5811.7942084736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732141.6473858173,
            "unit": "ns",
            "range": "± 2649.209301628243"
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
        "date": 1680508987400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541773.142857143,
            "unit": "ns",
            "range": "± 131467.62590542505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18773003.222222224,
            "unit": "ns",
            "range": "± 376119.5106848753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46230465.473684214,
            "unit": "ns",
            "range": "± 876493.0975569865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93998314.92857143,
            "unit": "ns",
            "range": "± 1231582.607158302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194223064.35714287,
            "unit": "ns",
            "range": "± 2366589.101893291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56954.836842105266,
            "unit": "ns",
            "range": "± 6787.7676579968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370926.206185567,
            "unit": "ns",
            "range": "± 25698.875983825536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292674.48979591834,
            "unit": "ns",
            "range": "± 11396.707494422912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267956.84210526315,
            "unit": "ns",
            "range": "± 8469.727324263067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5397465.962962963,
            "unit": "ns",
            "range": "± 150348.65947331107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3855404.727272727,
            "unit": "ns",
            "range": "± 90432.17713275347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17746.602272727272,
            "unit": "ns",
            "range": "± 1552.8237352122276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86441.02197802198,
            "unit": "ns",
            "range": "± 6838.064059980756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86194.74736842106,
            "unit": "ns",
            "range": "± 9487.76619223287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 226814.87368421053,
            "unit": "ns",
            "range": "± 18725.30049484313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5857.920454545455,
            "unit": "ns",
            "range": "± 822.5366598627577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16915.623529411765,
            "unit": "ns",
            "range": "± 1581.8286507685204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623956.8829787234,
            "unit": "ns",
            "range": "± 170905.94355462887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922295.695652174,
            "unit": "ns",
            "range": "± 140880.90753554352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2734720.1612903224,
            "unit": "ns",
            "range": "± 83452.7438410892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6909286.927083333,
            "unit": "ns",
            "range": "± 414846.42950574897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101895.947368421,
            "unit": "ns",
            "range": "± 106994.4652033263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3267778.037037037,
            "unit": "ns",
            "range": "± 137441.86029502473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4321153.073170732,
            "unit": "ns",
            "range": "± 155251.62590008363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4322070.877777778,
            "unit": "ns",
            "range": "± 284297.9977062989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8595602.780487806,
            "unit": "ns",
            "range": "± 254393.71415332888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6351428.59375,
            "unit": "ns",
            "range": "± 42904.60790286892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856843.388671875,
            "unit": "ns",
            "range": "± 10300.856188781185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244518.5184895834,
            "unit": "ns",
            "range": "± 9121.129895557386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2401135.8393229167,
            "unit": "ns",
            "range": "± 16661.995736465895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 772277.8456380208,
            "unit": "ns",
            "range": "± 4307.548886829673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701466.3951822916,
            "unit": "ns",
            "range": "± 2846.232901001135"
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
        "date": 1680594514429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9626311.37113402,
            "unit": "ns",
            "range": "± 758038.3575685435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25449689.674157303,
            "unit": "ns",
            "range": "± 3161923.4845274338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56365416.192307696,
            "unit": "ns",
            "range": "± 2314968.6345656747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119066959.48148148,
            "unit": "ns",
            "range": "± 5004013.682764465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230556343.24712643,
            "unit": "ns",
            "range": "± 12275149.50915591"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74830.35057471265,
            "unit": "ns",
            "range": "± 6230.363264501117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 425876.1222222222,
            "unit": "ns",
            "range": "± 40504.93780179881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 383041.5227272727,
            "unit": "ns",
            "range": "± 49204.811815437126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329378.875,
            "unit": "ns",
            "range": "± 5986.066865368834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6235263.376404494,
            "unit": "ns",
            "range": "± 345474.0519999565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4784512.173469388,
            "unit": "ns",
            "range": "± 402452.30170081527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21548.510869565216,
            "unit": "ns",
            "range": "± 3545.774267170247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112776.82989690722,
            "unit": "ns",
            "range": "± 22555.44793102547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116330.73255813954,
            "unit": "ns",
            "range": "± 14813.599003002311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 299030.43298969074,
            "unit": "ns",
            "range": "± 51804.365431783204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9031.584210526316,
            "unit": "ns",
            "range": "± 1558.872988037559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22165.847826086956,
            "unit": "ns",
            "range": "± 4329.456674626476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646639.4696969697,
            "unit": "ns",
            "range": "± 201638.21353124137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994580.5,
            "unit": "ns",
            "range": "± 147765.51776341087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2624370.9897959186,
            "unit": "ns",
            "range": "± 311980.23253154685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7590897.478260869,
            "unit": "ns",
            "range": "± 952849.3647674399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538113.574468085,
            "unit": "ns",
            "range": "± 265042.6358872758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3763915.191011236,
            "unit": "ns",
            "range": "± 239483.9990074245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4974137.126315789,
            "unit": "ns",
            "range": "± 336617.0718802903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4977266.564516129,
            "unit": "ns",
            "range": "± 354009.2057935231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9822804.4375,
            "unit": "ns",
            "range": "± 650538.7145605889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7322319.765055339,
            "unit": "ns",
            "range": "± 558571.6196732823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990225.7690429688,
            "unit": "ns",
            "range": "± 38391.53875345925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1424791.6301529256,
            "unit": "ns",
            "range": "± 55132.59704789794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3765323.3081054688,
            "unit": "ns",
            "range": "± 216746.54094587665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1074891.0567908655,
            "unit": "ns",
            "range": "± 28327.531222067726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850401.4481817816,
            "unit": "ns",
            "range": "± 53371.653640672674"
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
        "date": 1680620260889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9222184.214285715,
            "unit": "ns",
            "range": "± 154425.02167379015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24686124.85714286,
            "unit": "ns",
            "range": "± 1628422.2437905387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59534972.47826087,
            "unit": "ns",
            "range": "± 1460429.0230576352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121279322.7027027,
            "unit": "ns",
            "range": "± 4024421.402037971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244128612,
            "unit": "ns",
            "range": "± 7951935.576672094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71381.90625,
            "unit": "ns",
            "range": "± 8872.477510852992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 457741.01515151514,
            "unit": "ns",
            "range": "± 21354.82391440284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372884.25,
            "unit": "ns",
            "range": "± 13731.849443088851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325725.4193548387,
            "unit": "ns",
            "range": "± 9798.209216566715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6567916.428571428,
            "unit": "ns",
            "range": "± 90279.8553573313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4785292.666666667,
            "unit": "ns",
            "range": "± 97680.85181374506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20321.71052631579,
            "unit": "ns",
            "range": "± 1746.2465455256763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104059.13541666667,
            "unit": "ns",
            "range": "± 8252.193019044971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108245.1052631579,
            "unit": "ns",
            "range": "± 15502.764747572899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 284179.8736842105,
            "unit": "ns",
            "range": "± 28987.24320457011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7268.914893617021,
            "unit": "ns",
            "range": "± 797.3737862788142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21858.563218390806,
            "unit": "ns",
            "range": "± 2076.1949862565807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1959394.9893617022,
            "unit": "ns",
            "range": "± 191100.7096892397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3735894.2736842106,
            "unit": "ns",
            "range": "± 213435.7315246852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3195042.5434782607,
            "unit": "ns",
            "range": "± 300699.2474987903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8214483.338709678,
            "unit": "ns",
            "range": "± 349076.70455979445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3921914.5555555555,
            "unit": "ns",
            "range": "± 163796.73697439488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4521651.44680851,
            "unit": "ns",
            "range": "± 398643.07068498386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5398548.136363637,
            "unit": "ns",
            "range": "± 166994.62673893475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5388252.831325301,
            "unit": "ns",
            "range": "± 284682.392251813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11072727.293103449,
            "unit": "ns",
            "range": "± 620284.7371528235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7419889.667067308,
            "unit": "ns",
            "range": "± 76847.67560512206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2195593.566105769,
            "unit": "ns",
            "range": "± 17242.380998968696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478573.5482271635,
            "unit": "ns",
            "range": "± 14826.477692938803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2844331.672175481,
            "unit": "ns",
            "range": "± 38981.981322406755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950484.1439208984,
            "unit": "ns",
            "range": "± 17425.088877722173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837026.6261858259,
            "unit": "ns",
            "range": "± 11068.32089762653"
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
        "date": 1680664101812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9208727.219512194,
            "unit": "ns",
            "range": "± 1087611.503982755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20874005.96875,
            "unit": "ns",
            "range": "± 1201931.6200565342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54935092.19318182,
            "unit": "ns",
            "range": "± 3007376.563131708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102943016.65789473,
            "unit": "ns",
            "range": "± 3543194.274967711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208969415.74444443,
            "unit": "ns",
            "range": "± 7829706.923257857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71130.09782608696,
            "unit": "ns",
            "range": "± 9826.576880487277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361037.6129032258,
            "unit": "ns",
            "range": "± 23619.93287736305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294691.0465116279,
            "unit": "ns",
            "range": "± 15722.957575885821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277069.93617021275,
            "unit": "ns",
            "range": "± 23457.724368638614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5582886.722222222,
            "unit": "ns",
            "range": "± 235212.86132261629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4059307.7,
            "unit": "ns",
            "range": "± 92892.21636056999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18604.80612244898,
            "unit": "ns",
            "range": "± 2632.7154287986186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98172.02,
            "unit": "ns",
            "range": "± 19211.36527256612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107093.82474226804,
            "unit": "ns",
            "range": "± 14307.797905200086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 255845.07216494845,
            "unit": "ns",
            "range": "± 23095.153616455005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8150.041666666667,
            "unit": "ns",
            "range": "± 1272.9790250611413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18800.391304347828,
            "unit": "ns",
            "range": "± 3143.38104509282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623708.3510638298,
            "unit": "ns",
            "range": "± 157023.24309940895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242282.847826087,
            "unit": "ns",
            "range": "± 303145.683553048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2704894.35483871,
            "unit": "ns",
            "range": "± 293060.9181199676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7057814.628571428,
            "unit": "ns",
            "range": "± 316828.7922188347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324061.612244898,
            "unit": "ns",
            "range": "± 212660.0104524151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3278787.6447368423,
            "unit": "ns",
            "range": "± 154969.2992705935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4294940.688235294,
            "unit": "ns",
            "range": "± 214337.5957562816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4313251.382022472,
            "unit": "ns",
            "range": "± 261679.46511296398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8463273.385714285,
            "unit": "ns",
            "range": "± 401474.52754158684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6984748.281929348,
            "unit": "ns",
            "range": "± 247590.2986898357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001556.7857142857,
            "unit": "ns",
            "range": "± 28068.597976793637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277428.697544643,
            "unit": "ns",
            "range": "± 20847.608335216024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691899.725167411,
            "unit": "ns",
            "range": "± 43753.150578384244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778321.0510066106,
            "unit": "ns",
            "range": "± 6144.799932262422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780540.5050920759,
            "unit": "ns",
            "range": "± 9082.025546867548"
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
        "date": 1680664435980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7575038.233333333,
            "unit": "ns",
            "range": "± 97509.66930695837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19869340.441558443,
            "unit": "ns",
            "range": "± 976717.9330306395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48669436.775,
            "unit": "ns",
            "range": "± 1579921.3690661218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93599381.66666667,
            "unit": "ns",
            "range": "± 1650657.34165867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194455338.26666668,
            "unit": "ns",
            "range": "± 3637727.4876277884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64704.84693877551,
            "unit": "ns",
            "range": "± 11817.382854417348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362044.41071428574,
            "unit": "ns",
            "range": "± 15559.179785319122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326647.5578947368,
            "unit": "ns",
            "range": "± 28094.13999119775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286702.75531914894,
            "unit": "ns",
            "range": "± 18859.447361278137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5493130,
            "unit": "ns",
            "range": "± 101421.50674008236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4102675.6224489794,
            "unit": "ns",
            "range": "± 149114.56223734384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19182.16129032258,
            "unit": "ns",
            "range": "± 3621.935158022581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96504.0808080808,
            "unit": "ns",
            "range": "± 13415.230244151888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98247.73404255319,
            "unit": "ns",
            "range": "± 14561.613591777805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 242861.4947368421,
            "unit": "ns",
            "range": "± 19667.659627166584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7556.790322580645,
            "unit": "ns",
            "range": "± 1030.2640183008089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18013.86559139785,
            "unit": "ns",
            "range": "± 1949.3411974358335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727017.2474226805,
            "unit": "ns",
            "range": "± 166542.86255446073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3284715.989361702,
            "unit": "ns",
            "range": "± 239211.0328926302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2747418.2551020407,
            "unit": "ns",
            "range": "± 318145.2629670889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7135031.586666667,
            "unit": "ns",
            "range": "± 359592.21870948205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3103769.9322033897,
            "unit": "ns",
            "range": "± 133315.7598866981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419060.6666666665,
            "unit": "ns",
            "range": "± 60953.93965782297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4340436.259259259,
            "unit": "ns",
            "range": "± 113389.30484655088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4455411.577777778,
            "unit": "ns",
            "range": "± 249165.05975493288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8525065.642857144,
            "unit": "ns",
            "range": "± 404039.5331244203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6711937.399479167,
            "unit": "ns",
            "range": "± 95159.3012533554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959295.9635416667,
            "unit": "ns",
            "range": "± 33955.72310588031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246487.1330729167,
            "unit": "ns",
            "range": "± 9428.193797656482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2813337.8085430195,
            "unit": "ns",
            "range": "± 142317.21821650662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856043.6642878606,
            "unit": "ns",
            "range": "± 2243.053492411957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732357.2580729167,
            "unit": "ns",
            "range": "± 5244.428487322"
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
        "date": 1680665289051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8229242.9069767445,
            "unit": "ns",
            "range": "± 303051.925543793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20884653.09,
            "unit": "ns",
            "range": "± 1326164.2886835085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52350442.18518519,
            "unit": "ns",
            "range": "± 1407788.5931284907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102064916.36956522,
            "unit": "ns",
            "range": "± 3392056.4430818176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204562142.64285713,
            "unit": "ns",
            "range": "± 3122012.635732218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60608.574468085106,
            "unit": "ns",
            "range": "± 9824.459773365705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 403429.87,
            "unit": "ns",
            "range": "± 32037.726343259063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325974.347826087,
            "unit": "ns",
            "range": "± 27786.92822527112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321434.36559139786,
            "unit": "ns",
            "range": "± 32199.38016881994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5745789.507692307,
            "unit": "ns",
            "range": "± 264817.7617665899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4052839.586956522,
            "unit": "ns",
            "range": "± 98233.10113005931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17871.747252747253,
            "unit": "ns",
            "range": "± 1978.0755046447798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99430.90206185567,
            "unit": "ns",
            "range": "± 16508.029441923478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94473.94382022473,
            "unit": "ns",
            "range": "± 9194.77185979218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 226285.13684210528,
            "unit": "ns",
            "range": "± 19447.393994104354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5870.752688172043,
            "unit": "ns",
            "range": "± 950.2499517394034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18675.104166666668,
            "unit": "ns",
            "range": "± 2980.032707270762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597682.8,
            "unit": "ns",
            "range": "± 211910.31081282446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842545.984375,
            "unit": "ns",
            "range": "± 130018.08471076973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2426781.397959184,
            "unit": "ns",
            "range": "± 189749.31283717524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6755354.141509434,
            "unit": "ns",
            "range": "± 281868.3440239633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3302800.4791666665,
            "unit": "ns",
            "range": "± 128747.18535324388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440579.175,
            "unit": "ns",
            "range": "± 179525.6402890244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480770.260869565,
            "unit": "ns",
            "range": "± 168979.71987213072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4673587.551020408,
            "unit": "ns",
            "range": "± 299733.8938206851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9217316.914634146,
            "unit": "ns",
            "range": "± 484368.58473407314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6219948.814732143,
            "unit": "ns",
            "range": "± 83644.80621608053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044056.915736607,
            "unit": "ns",
            "range": "± 17846.00177384665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394241.2912597656,
            "unit": "ns",
            "range": "± 25416.24393387758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732461.9740188955,
            "unit": "ns",
            "range": "± 98197.50354086768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975639.023095069,
            "unit": "ns",
            "range": "± 48886.162981362955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801254.4390563965,
            "unit": "ns",
            "range": "± 24892.564358500935"
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
        "date": 1680667069600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747565.755555555,
            "unit": "ns",
            "range": "± 294746.71912663616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18864496.59090909,
            "unit": "ns",
            "range": "± 462021.8237290013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47536417.37837838,
            "unit": "ns",
            "range": "± 1583094.5213052987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93469018.64516129,
            "unit": "ns",
            "range": "± 2514054.9933408587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191338539.80952382,
            "unit": "ns",
            "range": "± 4355017.008568344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56578.72580645161,
            "unit": "ns",
            "range": "± 7207.667060798993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382906.7052631579,
            "unit": "ns",
            "range": "± 24040.657919659323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297734.64444444445,
            "unit": "ns",
            "range": "± 19872.11289259348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272539.65555555554,
            "unit": "ns",
            "range": "± 19171.086152088817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5349799.608695652,
            "unit": "ns",
            "range": "± 129972.30479002374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3823590.4411764704,
            "unit": "ns",
            "range": "± 121901.85405852334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16653.395061728395,
            "unit": "ns",
            "range": "± 1607.532197803611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81934.55434782608,
            "unit": "ns",
            "range": "± 7455.233798950497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81709.21978021978,
            "unit": "ns",
            "range": "± 9198.539875439408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218410.63043478262,
            "unit": "ns",
            "range": "± 20804.082247713137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5769.097701149425,
            "unit": "ns",
            "range": "± 975.8504276803675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17437.295454545456,
            "unit": "ns",
            "range": "± 3710.823743352946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510124.5263157894,
            "unit": "ns",
            "range": "± 146764.09501637437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2919364.3181818184,
            "unit": "ns",
            "range": "± 171024.20035258878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559627.924731183,
            "unit": "ns",
            "range": "± 189921.80791745736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6660654.333333333,
            "unit": "ns",
            "range": "± 249767.24915809117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3077307.3653846155,
            "unit": "ns",
            "range": "± 121928.37942246819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3308848.3571428573,
            "unit": "ns",
            "range": "± 116778.55516272552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4227374.575,
            "unit": "ns",
            "range": "± 148301.40261727347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4375096.521505376,
            "unit": "ns",
            "range": "± 317219.6214313063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8459137.041666666,
            "unit": "ns",
            "range": "± 313628.96237460023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6610893.3853125,
            "unit": "ns",
            "range": "± 253452.95104223565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925218.6277901786,
            "unit": "ns",
            "range": "± 29383.529268221882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303523.1042049632,
            "unit": "ns",
            "range": "± 25810.937840740768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589103.6727430555,
            "unit": "ns",
            "range": "± 113962.3216723571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822323.5024088542,
            "unit": "ns",
            "range": "± 13706.019866815164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715318.1418619792,
            "unit": "ns",
            "range": "± 6459.5942620393"
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
        "date": 1680677193608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7562224.083333333,
            "unit": "ns",
            "range": "± 194846.2285964335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19129856.333333332,
            "unit": "ns",
            "range": "± 353829.0133524276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47339094.166666664,
            "unit": "ns",
            "range": "± 1121866.198228841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92700636.53333333,
            "unit": "ns",
            "range": "± 1459601.5973264694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187374455.57142857,
            "unit": "ns",
            "range": "± 3024776.630769229"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55106.956043956045,
            "unit": "ns",
            "range": "± 5495.171158818719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359434.9518072289,
            "unit": "ns",
            "range": "± 19102.69653606183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298719.2528735632,
            "unit": "ns",
            "range": "± 16273.839627993051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268760.9270833333,
            "unit": "ns",
            "range": "± 16240.695300286025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5403201.966666667,
            "unit": "ns",
            "range": "± 100233.11503395234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3837407.4736842103,
            "unit": "ns",
            "range": "± 83155.12271276057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16859.337209302324,
            "unit": "ns",
            "range": "± 1687.2475226235122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83147.57608695653,
            "unit": "ns",
            "range": "± 7406.968722324121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81168.60869565218,
            "unit": "ns",
            "range": "± 7479.413184298753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 212070.98876404495,
            "unit": "ns",
            "range": "± 13649.140936582438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5537.044444444445,
            "unit": "ns",
            "range": "± 730.3541223748329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16361.862068965518,
            "unit": "ns",
            "range": "± 1468.039225225376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470676.051020408,
            "unit": "ns",
            "range": "± 140486.94045123155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823683.9736842103,
            "unit": "ns",
            "range": "± 130802.10922223679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503713.051020408,
            "unit": "ns",
            "range": "± 251972.06373667505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749541.515789473,
            "unit": "ns",
            "range": "± 407497.8551001602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072588.1578947366,
            "unit": "ns",
            "range": "± 105339.26442106804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3315739.8387096776,
            "unit": "ns",
            "range": "± 150715.40000095865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4627114.097560976,
            "unit": "ns",
            "range": "± 164744.4585064707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4351923.194117647,
            "unit": "ns",
            "range": "± 228952.34533782577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8775922.590909092,
            "unit": "ns",
            "range": "± 309863.12012330495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244123.482700893,
            "unit": "ns",
            "range": "± 38795.16890627134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969543.03515625,
            "unit": "ns",
            "range": "± 22020.137514620772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216387.946484375,
            "unit": "ns",
            "range": "± 9546.7671802028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2383838.504166667,
            "unit": "ns",
            "range": "± 22299.585486528933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832624.2991071428,
            "unit": "ns",
            "range": "± 4216.736221227786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 689264.9351283482,
            "unit": "ns",
            "range": "± 3824.7994940911653"
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
        "date": 1680685559261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8785820.857142856,
            "unit": "ns",
            "range": "± 139015.03397605108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22994849.155172415,
            "unit": "ns",
            "range": "± 668577.7988301135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54975462.14705882,
            "unit": "ns",
            "range": "± 1771846.5123052548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108204635,
            "unit": "ns",
            "range": "± 2413685.272951847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214259759.8125,
            "unit": "ns",
            "range": "± 4057416.9329672162"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66865.12105263158,
            "unit": "ns",
            "range": "± 6851.003146269191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441140.53571428574,
            "unit": "ns",
            "range": "± 23201.38286616389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349102.51515151514,
            "unit": "ns",
            "range": "± 16456.769788885736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318127.5,
            "unit": "ns",
            "range": "± 15527.099875224969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6307967.961538462,
            "unit": "ns",
            "range": "± 169800.2243622736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4618535.722222222,
            "unit": "ns",
            "range": "± 94896.59246644123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19530.363636363636,
            "unit": "ns",
            "range": "± 1905.8968093414414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98254.22448979592,
            "unit": "ns",
            "range": "± 8154.459409327092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85647.96875,
            "unit": "ns",
            "range": "± 6450.910588441433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234325.6182795699,
            "unit": "ns",
            "range": "± 18597.563084780213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5530.027472527472,
            "unit": "ns",
            "range": "± 489.97236522207936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18221.35632183908,
            "unit": "ns",
            "range": "± 1941.789129313788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830288.5957446808,
            "unit": "ns",
            "range": "± 211048.98181662665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3446161.3518518517,
            "unit": "ns",
            "range": "± 143070.73045270334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3051079.2604166665,
            "unit": "ns",
            "range": "± 293934.58532575954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8274913.329787234,
            "unit": "ns",
            "range": "± 317398.30745653756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3620025.9365079366,
            "unit": "ns",
            "range": "± 160487.68342711648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3832762.8181818184,
            "unit": "ns",
            "range": "± 138900.31550306102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5200064.571428572,
            "unit": "ns",
            "range": "± 142148.221227502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5222274.25,
            "unit": "ns",
            "range": "± 146801.63001179643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9426855.3,
            "unit": "ns",
            "range": "± 333917.7983057261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7015884.252790178,
            "unit": "ns",
            "range": "± 71910.36779980265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207029.4486979167,
            "unit": "ns",
            "range": "± 25121.177425971662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375196.5892333984,
            "unit": "ns",
            "range": "± 25681.583165298525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2733974.3878348214,
            "unit": "ns",
            "range": "± 30659.82881069642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 916561.7375266335,
            "unit": "ns",
            "range": "± 22252.34289336027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866013.7293619792,
            "unit": "ns",
            "range": "± 6993.315724653909"
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
        "date": 1680749626579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8681676.857894737,
            "unit": "ns",
            "range": "± 513470.2680765816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21359504.5,
            "unit": "ns",
            "range": "± 933778.079152305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52396189.166666664,
            "unit": "ns",
            "range": "± 1805172.4623525199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105685617.83050847,
            "unit": "ns",
            "range": "± 4615493.431525688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214487862.80645162,
            "unit": "ns",
            "range": "± 6412033.130586015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67462.64516129032,
            "unit": "ns",
            "range": "± 11028.597042752837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371686.89361702127,
            "unit": "ns",
            "range": "± 24895.677095694286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306911.56593406596,
            "unit": "ns",
            "range": "± 17101.528126523404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294365.8085106383,
            "unit": "ns",
            "range": "± 21549.856081662285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5590353.294117647,
            "unit": "ns",
            "range": "± 108651.8264812911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3973221.8333333335,
            "unit": "ns",
            "range": "± 81495.34990144422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19092.18817204301,
            "unit": "ns",
            "range": "± 2216.3657678559725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88622.19892473119,
            "unit": "ns",
            "range": "± 11337.247540724898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86429.59782608696,
            "unit": "ns",
            "range": "± 8105.059944541472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216798.6875,
            "unit": "ns",
            "range": "± 17937.1963227916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5652.8494623655915,
            "unit": "ns",
            "range": "± 1013.4556246718728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18001.043010752688,
            "unit": "ns",
            "range": "± 2116.9257237487327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613515.8404255318,
            "unit": "ns",
            "range": "± 174973.5040286855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3024836.1774193547,
            "unit": "ns",
            "range": "± 199864.16707947693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617451.7422680412,
            "unit": "ns",
            "range": "± 250562.64602719943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6961592.241758241,
            "unit": "ns",
            "range": "± 425066.2131822743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3651349.904255319,
            "unit": "ns",
            "range": "± 327620.39606451424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3649101.1666666665,
            "unit": "ns",
            "range": "± 322526.20906100643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4550152.24,
            "unit": "ns",
            "range": "± 228936.98363073982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4767282.293478261,
            "unit": "ns",
            "range": "± 671817.8359140293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8281424.594202898,
            "unit": "ns",
            "range": "± 373369.2412136811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6442090.471484375,
            "unit": "ns",
            "range": "± 228754.50590319326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988869.8830566406,
            "unit": "ns",
            "range": "± 37282.20130587667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298606.115513393,
            "unit": "ns",
            "range": "± 12203.991941341139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735666.039813702,
            "unit": "ns",
            "range": "± 28081.612231865063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868412.0015625,
            "unit": "ns",
            "range": "± 8353.06570283368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717284.3955078125,
            "unit": "ns",
            "range": "± 9584.194281123115"
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
        "date": 1680762698641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7400468,
            "unit": "ns",
            "range": "± 131127.93434892272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18938754.47826087,
            "unit": "ns",
            "range": "± 463431.04784323525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48113581.407692306,
            "unit": "ns",
            "range": "± 2233264.933660768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97048296.8125,
            "unit": "ns",
            "range": "± 1831960.4817729273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222715143.06565657,
            "unit": "ns",
            "range": "± 22862823.069042344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71385.5,
            "unit": "ns",
            "range": "± 12657.796058819507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385913.18279569893,
            "unit": "ns",
            "range": "± 23693.64270402058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343914.9270833333,
            "unit": "ns",
            "range": "± 45584.917930280586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344069.6875,
            "unit": "ns",
            "range": "± 42408.627616090846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6381250.773195877,
            "unit": "ns",
            "range": "± 518717.21796397056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550870.9387755105,
            "unit": "ns",
            "range": "± 358785.0060698145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24587.16304347826,
            "unit": "ns",
            "range": "± 3588.0296630929056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113884.76595744681,
            "unit": "ns",
            "range": "± 19615.365806124442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123168.33707865169,
            "unit": "ns",
            "range": "± 9959.537191401267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 269529.3229166667,
            "unit": "ns",
            "range": "± 28164.30674546281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9422.327956989247,
            "unit": "ns",
            "range": "± 1174.89296111581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23665.119565217392,
            "unit": "ns",
            "range": "± 2966.1008179881787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645119.3260869565,
            "unit": "ns",
            "range": "± 133958.66859243313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3197898.0967741935,
            "unit": "ns",
            "range": "± 252329.2854856899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2561632.4505494507,
            "unit": "ns",
            "range": "± 174980.37513023274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7247197.884210526,
            "unit": "ns",
            "range": "± 632805.6666879493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4349077.44680851,
            "unit": "ns",
            "range": "± 1068995.8487719737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631446.790322581,
            "unit": "ns",
            "range": "± 318930.14485244197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4845221.145161291,
            "unit": "ns",
            "range": "± 329496.7876963771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4755331.9949494945,
            "unit": "ns",
            "range": "± 528859.5899141383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8746406.826530613,
            "unit": "ns",
            "range": "± 582223.234731536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7830738.502441406,
            "unit": "ns",
            "range": "± 681870.3333383185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2098978.4583050273,
            "unit": "ns",
            "range": "± 53088.546781600766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438199.447265625,
            "unit": "ns",
            "range": "± 83892.10122878524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2783604.2483836208,
            "unit": "ns",
            "range": "± 72808.26156464219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895165.3028094952,
            "unit": "ns",
            "range": "± 9473.653767980846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738491.5271484375,
            "unit": "ns",
            "range": "± 9723.313194396786"
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
        "date": 1680764956254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7961630.714285715,
            "unit": "ns",
            "range": "± 116408.81312355679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20671694.16,
            "unit": "ns",
            "range": "± 820191.2191919677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51036657.7,
            "unit": "ns",
            "range": "± 1502327.5335518413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99894144.04545455,
            "unit": "ns",
            "range": "± 2401867.841335388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209407116.8529412,
            "unit": "ns",
            "range": "± 3400408.086276777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68510.34615384616,
            "unit": "ns",
            "range": "± 8895.776313538512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400639.0862068966,
            "unit": "ns",
            "range": "± 43864.83983931903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321327.329787234,
            "unit": "ns",
            "range": "± 23665.610882881585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311819.8333333333,
            "unit": "ns",
            "range": "± 23677.09760558843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5423345.684210527,
            "unit": "ns",
            "range": "± 118641.23715454673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3980164.46,
            "unit": "ns",
            "range": "± 87272.1505328208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19038.866666666665,
            "unit": "ns",
            "range": "± 2533.680097398852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98407.60824742269,
            "unit": "ns",
            "range": "± 15265.66921747721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113964.63043478261,
            "unit": "ns",
            "range": "± 12672.383725664722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272027.08510638296,
            "unit": "ns",
            "range": "± 29912.003918091228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8684.091397849463,
            "unit": "ns",
            "range": "± 1493.2124054371118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22183.16304347826,
            "unit": "ns",
            "range": "± 4882.950486810325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1603940.8131868131,
            "unit": "ns",
            "range": "± 209099.23860820575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984739.3857142855,
            "unit": "ns",
            "range": "± 144669.01178492693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2673763.7346938774,
            "unit": "ns",
            "range": "± 366086.7506756333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7052178.595744681,
            "unit": "ns",
            "range": "± 401573.1118457643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508955.3917525774,
            "unit": "ns",
            "range": "± 347895.2088588589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3837192.365591398,
            "unit": "ns",
            "range": "± 584191.9347312481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4836742.6875,
            "unit": "ns",
            "range": "± 450160.2036765253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5818525.925531914,
            "unit": "ns",
            "range": "± 1227284.2247537635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9015417.813186813,
            "unit": "ns",
            "range": "± 595568.3672159433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7460020.198879076,
            "unit": "ns",
            "range": "± 186640.0083341991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054857.253125,
            "unit": "ns",
            "range": "± 41248.87351766792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320356.5551757812,
            "unit": "ns",
            "range": "± 24951.51580053175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2926205.968702363,
            "unit": "ns",
            "range": "± 103888.86796785821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815810.7674278846,
            "unit": "ns",
            "range": "± 5804.841982106828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760689.4939903846,
            "unit": "ns",
            "range": "± 9437.584932904037"
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
        "date": 1680769381286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8653149.27631579,
            "unit": "ns",
            "range": "± 431799.1578873554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21480139.258064516,
            "unit": "ns",
            "range": "± 623699.8426870609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57302616.89215686,
            "unit": "ns",
            "range": "± 2324407.799655457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108721765.36666666,
            "unit": "ns",
            "range": "± 1766987.2111982375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224476147.80769232,
            "unit": "ns",
            "range": "± 3653456.342619214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77842.51086956522,
            "unit": "ns",
            "range": "± 5983.32267295286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 443965.43333333335,
            "unit": "ns",
            "range": "± 82478.23978368919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306211.18131868134,
            "unit": "ns",
            "range": "± 19123.246358456054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315140.6758241758,
            "unit": "ns",
            "range": "± 27080.52372733068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5581485.944444444,
            "unit": "ns",
            "range": "± 115500.36084294142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4128086.5555555555,
            "unit": "ns",
            "range": "± 84535.41325557503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19322.682795698925,
            "unit": "ns",
            "range": "± 3127.4555359374835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109592.1914893617,
            "unit": "ns",
            "range": "± 19708.685305153187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111268.21134020618,
            "unit": "ns",
            "range": "± 18214.099233125442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 250145.73684210525,
            "unit": "ns",
            "range": "± 31750.796858893038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8059.381720430108,
            "unit": "ns",
            "range": "± 1681.1019215504118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19282.315217391304,
            "unit": "ns",
            "range": "± 3209.5590841937656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601881.5918367347,
            "unit": "ns",
            "range": "± 150879.94743297758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3142931.1612903224,
            "unit": "ns",
            "range": "± 140903.80459673266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2847730.638297872,
            "unit": "ns",
            "range": "± 367270.78471123375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7177525.016853932,
            "unit": "ns",
            "range": "± 385744.1278494048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401243.235632184,
            "unit": "ns",
            "range": "± 185971.89633817077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787327.618556701,
            "unit": "ns",
            "range": "± 273489.9887149834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4748454.145833333,
            "unit": "ns",
            "range": "± 303719.0360428179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4677591.423913044,
            "unit": "ns",
            "range": "± 348025.4717736302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9015131.09375,
            "unit": "ns",
            "range": "± 803197.3629336958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6828358.704326923,
            "unit": "ns",
            "range": "± 279193.7261820859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2097149.1782483552,
            "unit": "ns",
            "range": "± 45232.19324383097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1418675.9875837055,
            "unit": "ns",
            "range": "± 24322.528507649415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670039.7369791665,
            "unit": "ns",
            "range": "± 130799.06482581871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922167.720301011,
            "unit": "ns",
            "range": "± 17884.48454631181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743874.7417279412,
            "unit": "ns",
            "range": "± 14253.610745850663"
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
        "date": 1681100847577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13871830.082417583,
            "unit": "ns",
            "range": "± 6004961.595932047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22119036.59090909,
            "unit": "ns",
            "range": "± 1218625.0508165723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52676998.11111111,
            "unit": "ns",
            "range": "± 1754651.7963166088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113115998.1923077,
            "unit": "ns",
            "range": "± 3082309.282524971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220977793.08139536,
            "unit": "ns",
            "range": "± 8024536.205625964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71599.78021978022,
            "unit": "ns",
            "range": "± 10108.405316371562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 465629.3131868132,
            "unit": "ns",
            "range": "± 71758.13435855386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 410800.5425531915,
            "unit": "ns",
            "range": "± 62868.1789070985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380521.7197802198,
            "unit": "ns",
            "range": "± 43075.84435512222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6291816.914893617,
            "unit": "ns",
            "range": "± 461076.8387769511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4590238.794736842,
            "unit": "ns",
            "range": "± 323115.9949581993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30958.802325581397,
            "unit": "ns",
            "range": "± 4328.589719581323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138712.1182795699,
            "unit": "ns",
            "range": "± 17657.88837260379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142934.33695652173,
            "unit": "ns",
            "range": "± 14789.855738827291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 312784.3152173913,
            "unit": "ns",
            "range": "± 35714.99857646824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11611.106382978724,
            "unit": "ns",
            "range": "± 1386.663553693402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28786.582352941175,
            "unit": "ns",
            "range": "± 4556.358937457274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545981.7113402062,
            "unit": "ns",
            "range": "± 167530.86182358555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2988195.0569620254,
            "unit": "ns",
            "range": "± 154467.70530892134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2694895.9838709678,
            "unit": "ns",
            "range": "± 337477.39090884855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7049099.072289157,
            "unit": "ns",
            "range": "± 373401.936448817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476301.4294117647,
            "unit": "ns",
            "range": "± 282861.01583609625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3810263.2558139535,
            "unit": "ns",
            "range": "± 499328.0776592135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4988982.184782608,
            "unit": "ns",
            "range": "± 498526.74570161686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5687885,
            "unit": "ns",
            "range": "± 1238615.1869677666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9304536.741573034,
            "unit": "ns",
            "range": "± 882808.5370873759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7391263.55417352,
            "unit": "ns",
            "range": "± 373241.0448408734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2222211.309004934,
            "unit": "ns",
            "range": "± 91944.40234544525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445387.053125,
            "unit": "ns",
            "range": "± 42343.513131614855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015755.843967014,
            "unit": "ns",
            "range": "± 228512.2414881281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025524.1075280231,
            "unit": "ns",
            "range": "± 61223.117530999436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908039.6551706415,
            "unit": "ns",
            "range": "± 20086.007923748544"
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
        "date": 1681111112886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7937513.204081632,
            "unit": "ns",
            "range": "± 312429.15135908406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19693665.992537312,
            "unit": "ns",
            "range": "± 888357.8792764357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50027656.9,
            "unit": "ns",
            "range": "± 1136083.8285773355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97215536.76923077,
            "unit": "ns",
            "range": "± 874433.4029223489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196142997,
            "unit": "ns",
            "range": "± 4314808.456104164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67948.62886597938,
            "unit": "ns",
            "range": "± 9798.156235273285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374944.26373626373,
            "unit": "ns",
            "range": "± 23548.378960880214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311859.4712643678,
            "unit": "ns",
            "range": "± 25614.45672282666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290006.7368421053,
            "unit": "ns",
            "range": "± 27070.569417731575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5512955.433333334,
            "unit": "ns",
            "range": "± 100047.93212503314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3987721.705882353,
            "unit": "ns",
            "range": "± 128517.51506395501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17514,
            "unit": "ns",
            "range": "± 1670.7827441118664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85237.56521739131,
            "unit": "ns",
            "range": "± 7259.720735712575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87473.5,
            "unit": "ns",
            "range": "± 8595.055920427794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 242913.53125,
            "unit": "ns",
            "range": "± 30680.540727051673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6858.946808510638,
            "unit": "ns",
            "range": "± 1376.70172011678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18108.40425531915,
            "unit": "ns",
            "range": "± 2109.655173979856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556298.5555555555,
            "unit": "ns",
            "range": "± 144351.23402978896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965328.3018867923,
            "unit": "ns",
            "range": "± 121548.36636762289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2648581.7448979593,
            "unit": "ns",
            "range": "± 257195.96887824222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6894516.897435897,
            "unit": "ns",
            "range": "± 206057.3757966449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3127014.5729166665,
            "unit": "ns",
            "range": "± 214350.15772330362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260682.888888889,
            "unit": "ns",
            "range": "± 103001.49127610525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293521.981481481,
            "unit": "ns",
            "range": "± 175319.9772442764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312922.076923077,
            "unit": "ns",
            "range": "± 218695.4535482227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8001401.741935484,
            "unit": "ns",
            "range": "± 236703.67667655242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6524718.623046875,
            "unit": "ns",
            "range": "± 119884.17465177747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985394.7211588542,
            "unit": "ns",
            "range": "± 11951.951268602972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1254160.056733631,
            "unit": "ns",
            "range": "± 29603.788663627874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647178.6009114585,
            "unit": "ns",
            "range": "± 12048.33542459419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781011.2749348958,
            "unit": "ns",
            "range": "± 4514.176915238876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728924.8366887019,
            "unit": "ns",
            "range": "± 1508.946681643391"
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
        "date": 1681112945768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8875975.19047619,
            "unit": "ns",
            "range": "± 203558.5993129789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21402668.076923076,
            "unit": "ns",
            "range": "± 301670.6561844284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55854747.9117647,
            "unit": "ns",
            "range": "± 1086124.5751116707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106901233.39285715,
            "unit": "ns",
            "range": "± 3036151.710869941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214047924.2857143,
            "unit": "ns",
            "range": "± 2985567.1123613357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67481.1170212766,
            "unit": "ns",
            "range": "± 7231.795772027119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 404329.9120879121,
            "unit": "ns",
            "range": "± 28123.231287258404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332632.3804347826,
            "unit": "ns",
            "range": "± 27195.56363095509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316138.76136363635,
            "unit": "ns",
            "range": "± 21264.90635635852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6059423.529411765,
            "unit": "ns",
            "range": "± 243605.5949681249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490454.234375,
            "unit": "ns",
            "range": "± 180486.2569211421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18289.129411764705,
            "unit": "ns",
            "range": "± 2141.517212433386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97705.15168539326,
            "unit": "ns",
            "range": "± 9783.454758023789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89976.42708333333,
            "unit": "ns",
            "range": "± 10805.421345685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 209935.93258426967,
            "unit": "ns",
            "range": "± 28949.660615375156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5183.1,
            "unit": "ns",
            "range": "± 464.15142662222104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20896.802083333332,
            "unit": "ns",
            "range": "± 5974.720515145532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751993.34,
            "unit": "ns",
            "range": "± 175859.0778270666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3445905.104651163,
            "unit": "ns",
            "range": "± 127000.49398144266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2921142.618556701,
            "unit": "ns",
            "range": "± 279522.88835302484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7791660.533333333,
            "unit": "ns",
            "range": "± 715618.6890963053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544423.840909091,
            "unit": "ns",
            "range": "± 193621.58960399794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734066.293103448,
            "unit": "ns",
            "range": "± 162382.01496298442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4879281.984848484,
            "unit": "ns",
            "range": "± 229076.41695062857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4736633.611111111,
            "unit": "ns",
            "range": "± 316266.1346402863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9385076.784090908,
            "unit": "ns",
            "range": "± 595917.2754949181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6707449.505989583,
            "unit": "ns",
            "range": "± 108093.70811835589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171500.8658854165,
            "unit": "ns",
            "range": "± 29067.291573625684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366703.591796875,
            "unit": "ns",
            "range": "± 19835.771497564627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661926.37109375,
            "unit": "ns",
            "range": "± 43878.03505627482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949315.5420572917,
            "unit": "ns",
            "range": "± 7871.542680602772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808104.0477013221,
            "unit": "ns",
            "range": "± 4194.125349815119"
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
        "date": 1681120354252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8707921,
            "unit": "ns",
            "range": "± 165797.96465980314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22300343.2,
            "unit": "ns",
            "range": "± 500022.71371288726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53390792.97058824,
            "unit": "ns",
            "range": "± 1704154.1119638823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103414012.92105263,
            "unit": "ns",
            "range": "± 2275359.113156483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206602934.42307693,
            "unit": "ns",
            "range": "± 3373774.2864576625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69563.73958333333,
            "unit": "ns",
            "range": "± 9913.540269693654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363069.0303030303,
            "unit": "ns",
            "range": "± 17058.284542861322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308927.9666666667,
            "unit": "ns",
            "range": "± 23058.01485515772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294984.0789473684,
            "unit": "ns",
            "range": "± 28556.33732644437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5979506.736842105,
            "unit": "ns",
            "range": "± 129223.18812591996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906808.358974359,
            "unit": "ns",
            "range": "± 133477.81256793346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17288.380952380954,
            "unit": "ns",
            "range": "± 2246.749346102304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87386.16304347826,
            "unit": "ns",
            "range": "± 6338.205885914844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96226.93478260869,
            "unit": "ns",
            "range": "± 8858.387267709115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247564.1935483871,
            "unit": "ns",
            "range": "± 20065.55895669843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7045.3263157894735,
            "unit": "ns",
            "range": "± 1340.9813209077583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16694.802325581397,
            "unit": "ns",
            "range": "± 1577.6887325881821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682047.3157894737,
            "unit": "ns",
            "range": "± 208556.55827000772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3206863.4777777777,
            "unit": "ns",
            "range": "± 193519.21425092977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2765436.6129032257,
            "unit": "ns",
            "range": "± 306623.3662442174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786750.366666666,
            "unit": "ns",
            "range": "± 255134.3919202726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3334330.3035714286,
            "unit": "ns",
            "range": "± 141581.68768753824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447623.5,
            "unit": "ns",
            "range": "± 175983.63255196266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4566102.071428572,
            "unit": "ns",
            "range": "± 128016.45888624043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4432523.5,
            "unit": "ns",
            "range": "± 216871.75130743728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8210013.857142857,
            "unit": "ns",
            "range": "± 234791.83397209292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6338592.200334822,
            "unit": "ns",
            "range": "± 46576.243397767015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827835.18984375,
            "unit": "ns",
            "range": "± 14297.20847193968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275556.8374660327,
            "unit": "ns",
            "range": "± 32089.743131664258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2446538.988541667,
            "unit": "ns",
            "range": "± 37945.54889515912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835810.3231770833,
            "unit": "ns",
            "range": "± 6360.670088512412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698672.6315104166,
            "unit": "ns",
            "range": "± 6747.927073310833"
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
        "date": 1681121481934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7978696.092592592,
            "unit": "ns",
            "range": "± 217614.51195780886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605619.125,
            "unit": "ns",
            "range": "± 475580.05197253707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50783733.39655172,
            "unit": "ns",
            "range": "± 2220453.810011839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102277445.41666667,
            "unit": "ns",
            "range": "± 3370554.8867331063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205726912.57142857,
            "unit": "ns",
            "range": "± 2990589.5950592114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72085.18478260869,
            "unit": "ns",
            "range": "± 12784.784373268667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385698,
            "unit": "ns",
            "range": "± 26372.805062871306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324621.43298969074,
            "unit": "ns",
            "range": "± 30785.61507049843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309552.14285714284,
            "unit": "ns",
            "range": "± 31633.19447227261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5643646.1034482755,
            "unit": "ns",
            "range": "± 161158.20523575693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4150591.8833333333,
            "unit": "ns",
            "range": "± 183267.3298366644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18062.82222222222,
            "unit": "ns",
            "range": "± 2111.570259882908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94771.32291666667,
            "unit": "ns",
            "range": "± 14836.733217889901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105970.6237113402,
            "unit": "ns",
            "range": "± 18795.59773992843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262434.38659793814,
            "unit": "ns",
            "range": "± 31531.29908416275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7417.052083333333,
            "unit": "ns",
            "range": "± 2232.485833607634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19176.563829787236,
            "unit": "ns",
            "range": "± 3713.8827313363718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630605.8673469387,
            "unit": "ns",
            "range": "± 151658.17399391232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3069856.9787234045,
            "unit": "ns",
            "range": "± 174416.84782467637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2563668.769230769,
            "unit": "ns",
            "range": "± 178523.1021434902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7124346.042105263,
            "unit": "ns",
            "range": "± 437059.74024822883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276127.138297872,
            "unit": "ns",
            "range": "± 244326.31281579853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414169.8789473684,
            "unit": "ns",
            "range": "± 212859.07339050266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464324.1875,
            "unit": "ns",
            "range": "± 173139.45994973966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4561611.895833333,
            "unit": "ns",
            "range": "± 343737.17524069495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8515778.788135594,
            "unit": "ns",
            "range": "± 346923.77342009335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6885729.3469460225,
            "unit": "ns",
            "range": "± 164839.01458028835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2104061.344951923,
            "unit": "ns",
            "range": "± 19426.095356988182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336351.8664899555,
            "unit": "ns",
            "range": "± 18474.654875367065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637104.7842548075,
            "unit": "ns",
            "range": "± 40009.60614530907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830458.1133510044,
            "unit": "ns",
            "range": "± 11942.448410798579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759327.4836425781,
            "unit": "ns",
            "range": "± 6686.405701635232"
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
        "date": 1681172341925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8893697.933333334,
            "unit": "ns",
            "range": "± 123982.80444853555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22806313.666666668,
            "unit": "ns",
            "range": "± 266196.3613107723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57404003.6,
            "unit": "ns",
            "range": "± 796583.3682372845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114285952.46153846,
            "unit": "ns",
            "range": "± 1048124.3756171955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227853316.64285713,
            "unit": "ns",
            "range": "± 1400733.481271679"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71247.37894736842,
            "unit": "ns",
            "range": "± 6455.990044185005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 449320.9032258064,
            "unit": "ns",
            "range": "± 12863.572042411957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370175.29824561405,
            "unit": "ns",
            "range": "± 15112.031687136992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327227.74468085106,
            "unit": "ns",
            "range": "± 12616.211307658174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6484503.466666667,
            "unit": "ns",
            "range": "± 75382.16336192409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4771344.538461538,
            "unit": "ns",
            "range": "± 35636.23439379126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21316.24193548387,
            "unit": "ns",
            "range": "± 1674.0227837472548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104433.16304347826,
            "unit": "ns",
            "range": "± 7740.305132522443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97796.26595744681,
            "unit": "ns",
            "range": "± 7631.927632002217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262289.90425531915,
            "unit": "ns",
            "range": "± 21043.072026264665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6376.082474226804,
            "unit": "ns",
            "range": "± 703.7448293194163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20192.489583333332,
            "unit": "ns",
            "range": "± 1811.6048424404007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1768939.775510204,
            "unit": "ns",
            "range": "± 153126.58987793385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3497507.3771929825,
            "unit": "ns",
            "range": "± 149793.496050762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2932108.602040816,
            "unit": "ns",
            "range": "± 247788.93775061288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7800503.14893617,
            "unit": "ns",
            "range": "± 301819.9593150064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3957634.2391304346,
            "unit": "ns",
            "range": "± 99098.0068766716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4032303.4487179485,
            "unit": "ns",
            "range": "± 139943.57453028377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5241900.714285715,
            "unit": "ns",
            "range": "± 65920.93003822379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5153793.953846154,
            "unit": "ns",
            "range": "± 237585.44041042047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9590691.304347826,
            "unit": "ns",
            "range": "± 237397.37713214385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7090610.205208333,
            "unit": "ns",
            "range": "± 56467.654400622254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2303550.268136161,
            "unit": "ns",
            "range": "± 8135.728510455898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478132.107421875,
            "unit": "ns",
            "range": "± 3541.2909380520705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2853255.554822198,
            "unit": "ns",
            "range": "± 83392.73721870006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944471.5252403846,
            "unit": "ns",
            "range": "± 3266.0607513127225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848101.3449435764,
            "unit": "ns",
            "range": "± 17638.194161027295"
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
        "date": 1681190311657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9343075.272727273,
            "unit": "ns",
            "range": "± 694017.2806534346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22271955.474358976,
            "unit": "ns",
            "range": "± 1137107.2607570528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59138364.551020406,
            "unit": "ns",
            "range": "± 2351370.0594345173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111851316.87142856,
            "unit": "ns",
            "range": "± 5434876.638407994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228330177.44382024,
            "unit": "ns",
            "range": "± 12606307.829948252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75489.19565217392,
            "unit": "ns",
            "range": "± 10769.20839759126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385831.22093023255,
            "unit": "ns",
            "range": "± 20847.329211168777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323791.7,
            "unit": "ns",
            "range": "± 16329.540156713836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319453.075,
            "unit": "ns",
            "range": "± 11114.849134211498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5639176.538461538,
            "unit": "ns",
            "range": "± 58387.86227978007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4198943.857142857,
            "unit": "ns",
            "range": "± 73824.20421265553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22405.126315789475,
            "unit": "ns",
            "range": "± 2692.472727462602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117362.56666666667,
            "unit": "ns",
            "range": "± 11145.041004153803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118906.79166666667,
            "unit": "ns",
            "range": "± 4705.300085206465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254162.78125,
            "unit": "ns",
            "range": "± 17195.61653855768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9053.979166666666,
            "unit": "ns",
            "range": "± 880.8138937090382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21112.042553191488,
            "unit": "ns",
            "range": "± 3583.8450927331373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1594419.494623656,
            "unit": "ns",
            "range": "± 177784.4668983757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008477.7358490564,
            "unit": "ns",
            "range": "± 125474.1777796027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2519568.1938775512,
            "unit": "ns",
            "range": "± 234635.69292057355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6882635.813559322,
            "unit": "ns",
            "range": "± 302090.04499997234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595164.7790697673,
            "unit": "ns",
            "range": "± 225757.7507268851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3990085.4137931033,
            "unit": "ns",
            "range": "± 337097.33677697467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4890556.425,
            "unit": "ns",
            "range": "± 254673.0391351796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813962.375,
            "unit": "ns",
            "range": "± 371550.18502376106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8965215.258241758,
            "unit": "ns",
            "range": "± 579338.4055115769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7164850.35842803,
            "unit": "ns",
            "range": "± 220638.73646393273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025863.2410888672,
            "unit": "ns",
            "range": "± 47902.68923276138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289608.7147042411,
            "unit": "ns",
            "range": "± 18578.515682242793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549010.945703125,
            "unit": "ns",
            "range": "± 90337.47437975404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869828.995718149,
            "unit": "ns",
            "range": "± 3398.174537065516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729709.6800362723,
            "unit": "ns",
            "range": "± 6592.8492629988805"
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
        "date": 1681234170178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8370382.868421053,
            "unit": "ns",
            "range": "± 619642.9053458344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20129234.467391305,
            "unit": "ns",
            "range": "± 1228030.0540264063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53027532.79213483,
            "unit": "ns",
            "range": "± 4801738.089384954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96114192.4090909,
            "unit": "ns",
            "range": "± 2994017.441252768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202665080.20967743,
            "unit": "ns",
            "range": "± 6150501.964241694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63842.755319148935,
            "unit": "ns",
            "range": "± 10567.51946350375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365659,
            "unit": "ns",
            "range": "± 18095.833238161023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290627.5056179775,
            "unit": "ns",
            "range": "± 17778.540925997113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265888.71186440677,
            "unit": "ns",
            "range": "± 11629.055406907552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5267458.175,
            "unit": "ns",
            "range": "± 184462.86896685036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827140.9545454546,
            "unit": "ns",
            "range": "± 80889.45656557489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16524.22619047619,
            "unit": "ns",
            "range": "± 2365.8738132091253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85511.01075268818,
            "unit": "ns",
            "range": "± 6352.8757139455865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87694.73195876289,
            "unit": "ns",
            "range": "± 14784.291301295849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218801.8791208791,
            "unit": "ns",
            "range": "± 17969.01715288795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5101.475609756098,
            "unit": "ns",
            "range": "± 735.8123792261606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16433.75581395349,
            "unit": "ns",
            "range": "± 1945.270027746316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729872.4631578948,
            "unit": "ns",
            "range": "± 294677.9201848419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3342255.647727273,
            "unit": "ns",
            "range": "± 402230.97312182415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2596156.763736264,
            "unit": "ns",
            "range": "± 276119.6682353036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7086968.225806451,
            "unit": "ns",
            "range": "± 530840.0332755238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253553.724137931,
            "unit": "ns",
            "range": "± 180186.4574285959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3342096.476190476,
            "unit": "ns",
            "range": "± 179535.97673013955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4417303.737704918,
            "unit": "ns",
            "range": "± 192396.04430097668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4753998.106382979,
            "unit": "ns",
            "range": "± 444771.99524345435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8273446.34375,
            "unit": "ns",
            "range": "± 550815.0492556853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6611424.227083334,
            "unit": "ns",
            "range": "± 93166.3247994293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897410.665234375,
            "unit": "ns",
            "range": "± 20293.680408344837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261830.0427083333,
            "unit": "ns",
            "range": "± 11992.020418202943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2476079.271614583,
            "unit": "ns",
            "range": "± 43764.59900737631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873071.9634874132,
            "unit": "ns",
            "range": "± 27243.218364228498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781164.891015625,
            "unit": "ns",
            "range": "± 52488.020986584845"
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
        "date": 1681266377438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11153409.231182795,
            "unit": "ns",
            "range": "± 2613748.161191864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29772212.566666666,
            "unit": "ns",
            "range": "± 6907672.524694539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66527432.9375,
            "unit": "ns",
            "range": "± 12295691.661152897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98714146.25806452,
            "unit": "ns",
            "range": "± 2992866.6321213953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199577958.5277778,
            "unit": "ns",
            "range": "± 6608006.317520788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70757.8125,
            "unit": "ns",
            "range": "± 14140.741952776028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379144.1818181818,
            "unit": "ns",
            "range": "± 27179.552530949695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320641.85714285716,
            "unit": "ns",
            "range": "± 27941.299211649424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292082.4534883721,
            "unit": "ns",
            "range": "± 26264.94445752046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5404509.083333333,
            "unit": "ns",
            "range": "± 81769.91037657081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4054002.8857142855,
            "unit": "ns",
            "range": "± 131512.45030968415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18876.831578947367,
            "unit": "ns",
            "range": "± 2748.281794575734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93387.27173913043,
            "unit": "ns",
            "range": "± 11772.373679348848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105294.7258064516,
            "unit": "ns",
            "range": "± 10666.39335985472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 238551.3033707865,
            "unit": "ns",
            "range": "± 16820.20829200595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9565.70618556701,
            "unit": "ns",
            "range": "± 1978.5450037956361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26054.0625,
            "unit": "ns",
            "range": "± 4086.9217622545057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601912.4555555556,
            "unit": "ns",
            "range": "± 163426.97688989044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3698705.3958333335,
            "unit": "ns",
            "range": "± 731717.218372644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3442426.110526316,
            "unit": "ns",
            "range": "± 904927.3070764432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7453386.344086021,
            "unit": "ns",
            "range": "± 646939.1625129412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3218188.336956522,
            "unit": "ns",
            "range": "± 257986.33377073996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3317917.451219512,
            "unit": "ns",
            "range": "± 174184.27088234003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4722446.629213483,
            "unit": "ns",
            "range": "± 283028.4887449247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5387594.7,
            "unit": "ns",
            "range": "± 1045093.5760123265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9355585.463917525,
            "unit": "ns",
            "range": "± 1204998.9290444243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7260917.614820076,
            "unit": "ns",
            "range": "± 339737.37084644946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088073.988835841,
            "unit": "ns",
            "range": "± 109297.35400130319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369884.4014485676,
            "unit": "ns",
            "range": "± 53852.50149851682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704203.7094319663,
            "unit": "ns",
            "range": "± 165948.42374130254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895299.494516226,
            "unit": "ns",
            "range": "± 45874.55852733623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780134.6414866728,
            "unit": "ns",
            "range": "± 25021.602347739426"
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
        "date": 1681355887484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9260912.723404255,
            "unit": "ns",
            "range": "± 865316.7767511614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21743773.644444443,
            "unit": "ns",
            "range": "± 1205851.3086955526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55558543.11594203,
            "unit": "ns",
            "range": "± 2669257.15557998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112155585.98666666,
            "unit": "ns",
            "range": "± 5608645.775396385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231811971.8655914,
            "unit": "ns",
            "range": "± 13125677.585423177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67487.98936170213,
            "unit": "ns",
            "range": "± 10001.790682140272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370133.78125,
            "unit": "ns",
            "range": "± 17144.973982833097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304772.8777777778,
            "unit": "ns",
            "range": "± 16942.134241228734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292450.0306122449,
            "unit": "ns",
            "range": "± 24799.609324410394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5395320.44117647,
            "unit": "ns",
            "range": "± 157644.0362797053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952963.5135135134,
            "unit": "ns",
            "range": "± 133292.0281255121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18207.521505376346,
            "unit": "ns",
            "range": "± 2907.998751489231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87508.07777777778,
            "unit": "ns",
            "range": "± 13022.265931190574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90074.66842105263,
            "unit": "ns",
            "range": "± 15969.457796423716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 241047.3440860215,
            "unit": "ns",
            "range": "± 19033.797948874493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9445.237113402061,
            "unit": "ns",
            "range": "± 1275.9595798619878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23458.224489795917,
            "unit": "ns",
            "range": "± 3609.7064207398016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687759.9591836734,
            "unit": "ns",
            "range": "± 179910.01857004687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964345.56,
            "unit": "ns",
            "range": "± 118254.25658049053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2587852.7578947367,
            "unit": "ns",
            "range": "± 232302.26106609355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7050334.354838709,
            "unit": "ns",
            "range": "± 431227.1036231233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3590470.336734694,
            "unit": "ns",
            "range": "± 340228.59594526363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3808292.7045454546,
            "unit": "ns",
            "range": "± 487208.49976392096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4475294.5,
            "unit": "ns",
            "range": "± 216876.12853239517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4553038.655555556,
            "unit": "ns",
            "range": "± 253574.50252635177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8493124.441860465,
            "unit": "ns",
            "range": "± 489568.0942555652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6374189.097822473,
            "unit": "ns",
            "range": "± 243864.5143902852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977426.9079511089,
            "unit": "ns",
            "range": "± 59045.728326435725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296226.8430989583,
            "unit": "ns",
            "range": "± 22350.309640893563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586483.191514757,
            "unit": "ns",
            "range": "± 77026.38294086664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881754.0533621652,
            "unit": "ns",
            "range": "± 6420.003215607712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729230.1692457933,
            "unit": "ns",
            "range": "± 6666.42888900805"
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
        "date": 1681449804463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8757330.50515464,
            "unit": "ns",
            "range": "± 684527.4448598969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21583270.020833332,
            "unit": "ns",
            "range": "± 1515674.522357648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52927540.63636363,
            "unit": "ns",
            "range": "± 1982963.0067117626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107380816.30612245,
            "unit": "ns",
            "range": "± 6604135.940130931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216824180.75,
            "unit": "ns",
            "range": "± 7321181.5267336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68281.55319148937,
            "unit": "ns",
            "range": "± 11919.44560089202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419742.829787234,
            "unit": "ns",
            "range": "± 41011.14612841751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367799.0894736842,
            "unit": "ns",
            "range": "± 52264.39274180941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356268.9479166667,
            "unit": "ns",
            "range": "± 52613.24854942502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6323019.959183673,
            "unit": "ns",
            "range": "± 586595.3299899681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4351431.303030303,
            "unit": "ns",
            "range": "± 367059.18180752994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25410.521276595744,
            "unit": "ns",
            "range": "± 5680.7013442869265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133012.60638297873,
            "unit": "ns",
            "range": "± 21799.310051954606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134280.76666666666,
            "unit": "ns",
            "range": "± 21448.774997654295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 303285.3548387097,
            "unit": "ns",
            "range": "± 47160.25605584808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10369.576086956522,
            "unit": "ns",
            "range": "± 1099.2149969554512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25348.201149425287,
            "unit": "ns",
            "range": "± 3062.208213398947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709990.957894737,
            "unit": "ns",
            "range": "± 259228.44133615564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3224874.564516129,
            "unit": "ns",
            "range": "± 301534.9379301858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2710670.0408163266,
            "unit": "ns",
            "range": "± 277551.425329564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7431248.112903226,
            "unit": "ns",
            "range": "± 658487.3736495741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569798.711340206,
            "unit": "ns",
            "range": "± 303104.7706461537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3565627.1333333333,
            "unit": "ns",
            "range": "± 154902.59312088724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4876768.443298969,
            "unit": "ns",
            "range": "± 478279.13869156054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5116903.348314607,
            "unit": "ns",
            "range": "± 708022.117622605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9541646.43298969,
            "unit": "ns",
            "range": "± 889177.2435409613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8482207.877391582,
            "unit": "ns",
            "range": "± 512196.46645380557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2481531.0246875,
            "unit": "ns",
            "range": "± 99429.69343137332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609763.1395263672,
            "unit": "ns",
            "range": "± 49698.22633762448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251309.678507487,
            "unit": "ns",
            "range": "± 223579.89980134045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957841.9816080729,
            "unit": "ns",
            "range": "± 13042.289956839286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828347.7763346354,
            "unit": "ns",
            "range": "± 24300.400646781956"
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
        "date": 1681457039717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8402044.072916666,
            "unit": "ns",
            "range": "± 598718.6261214113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20183071.35483871,
            "unit": "ns",
            "range": "± 606362.1031946476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49736456.87804878,
            "unit": "ns",
            "range": "± 1764821.0798716422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100495569.83823529,
            "unit": "ns",
            "range": "± 4802355.434304487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213039377.9691358,
            "unit": "ns",
            "range": "± 11205405.100301316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68005.875,
            "unit": "ns",
            "range": "± 16105.496381997244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387191.3894736842,
            "unit": "ns",
            "range": "± 30825.516890385836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321599.6666666667,
            "unit": "ns",
            "range": "± 29435.801535358016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324832.1855670103,
            "unit": "ns",
            "range": "± 43920.84590709033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5570676.458333333,
            "unit": "ns",
            "range": "± 198093.84998401033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4149639.347826087,
            "unit": "ns",
            "range": "± 199793.69139703512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20138.840659340658,
            "unit": "ns",
            "range": "± 3319.721823084245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103870.57142857143,
            "unit": "ns",
            "range": "± 16917.347790750056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112002.65151515152,
            "unit": "ns",
            "range": "± 13340.822168437375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247222.6157894737,
            "unit": "ns",
            "range": "± 22358.322109933844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7273.968421052631,
            "unit": "ns",
            "range": "± 912.0885134892172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18103.516129032258,
            "unit": "ns",
            "range": "± 2207.371846754806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1872076.793814433,
            "unit": "ns",
            "range": "± 262827.734582818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3614515.389473684,
            "unit": "ns",
            "range": "± 412316.630565851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2985208.6086956523,
            "unit": "ns",
            "range": "± 471084.5733929092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8364511.27368421,
            "unit": "ns",
            "range": "± 987010.2142962107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207356.066666667,
            "unit": "ns",
            "range": "± 160573.27510721597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3515378.638297872,
            "unit": "ns",
            "range": "± 248506.70570782362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4465619.3,
            "unit": "ns",
            "range": "± 199296.6340894473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4560769.723404256,
            "unit": "ns",
            "range": "± 289988.99795672274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8438873.387096774,
            "unit": "ns",
            "range": "± 376652.5250861188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7027162.536221591,
            "unit": "ns",
            "range": "± 146321.54081010036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011657.11640625,
            "unit": "ns",
            "range": "± 29410.3290128738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1484633.0325120192,
            "unit": "ns",
            "range": "± 66404.85229267526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3395398.063980263,
            "unit": "ns",
            "range": "± 329173.0535778012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025673.3720005581,
            "unit": "ns",
            "range": "± 17270.344444564947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811283.9170968191,
            "unit": "ns",
            "range": "± 22777.195308727867"
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
        "date": 1681726152769,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10270466.67032967,
            "unit": "ns",
            "range": "± 2454381.9399415725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23998023.574468084,
            "unit": "ns",
            "range": "± 3887788.066671575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57327640.43820225,
            "unit": "ns",
            "range": "± 7353439.656237967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113117327.21276596,
            "unit": "ns",
            "range": "± 11485513.9052131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223450382.7111111,
            "unit": "ns",
            "range": "± 12654208.014746659"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73248.29120879121,
            "unit": "ns",
            "range": "± 7526.297668127084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393056.93617021275,
            "unit": "ns",
            "range": "± 39254.52615470336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332222.7708333333,
            "unit": "ns",
            "range": "± 25533.095554997126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317521.89247311826,
            "unit": "ns",
            "range": "± 53956.876005280195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5811003.112903226,
            "unit": "ns",
            "range": "± 245715.1790245381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3979506.964285714,
            "unit": "ns",
            "range": "± 112951.42775333651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25904.697916666668,
            "unit": "ns",
            "range": "± 3476.979147477823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105790.28865979382,
            "unit": "ns",
            "range": "± 18705.95801696546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101269.88775510204,
            "unit": "ns",
            "range": "± 23142.364823442127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262483.5106382979,
            "unit": "ns",
            "range": "± 35605.20819957902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7725.191489361702,
            "unit": "ns",
            "range": "± 1176.9547092682565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19939.565217391304,
            "unit": "ns",
            "range": "± 2980.8836852769855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810443.6739130435,
            "unit": "ns",
            "range": "± 255393.5052371772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3422839.0568181816,
            "unit": "ns",
            "range": "± 353743.95947518403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3031178.6555555556,
            "unit": "ns",
            "range": "± 625301.4959165952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10551197.1185567,
            "unit": "ns",
            "range": "± 4483907.278353093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399771.9583333335,
            "unit": "ns",
            "range": "± 86956.95573947174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470545.5384615385,
            "unit": "ns",
            "range": "± 176902.0121541861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4832819.444444444,
            "unit": "ns",
            "range": "± 100876.28877416969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4590615.653846154,
            "unit": "ns",
            "range": "± 305187.6427804494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8169815.379310345,
            "unit": "ns",
            "range": "± 233616.23650160193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7295837.599702381,
            "unit": "ns",
            "range": "± 262422.5839399035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041624.4538063228,
            "unit": "ns",
            "range": "± 75006.3428404638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297417.1401742788,
            "unit": "ns",
            "range": "± 18626.741874443047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981795.7588252313,
            "unit": "ns",
            "range": "± 125756.95627626947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790939.5122070312,
            "unit": "ns",
            "range": "± 7136.8400871512395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735624.7991536459,
            "unit": "ns",
            "range": "± 12942.61105017651"
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
        "date": 1681798176017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7466173.857142857,
            "unit": "ns",
            "range": "± 86991.48482608658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18777311.75,
            "unit": "ns",
            "range": "± 366478.165155943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46219468.4,
            "unit": "ns",
            "range": "± 1058162.1928492417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93897340,
            "unit": "ns",
            "range": "± 1119135.9190714264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188862441.39473686,
            "unit": "ns",
            "range": "± 3448481.053185685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55984.12765957447,
            "unit": "ns",
            "range": "± 5631.631969937145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370281.265060241,
            "unit": "ns",
            "range": "± 19677.210505311716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297072.05263157893,
            "unit": "ns",
            "range": "± 15035.591187928938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273088.51785714284,
            "unit": "ns",
            "range": "± 11600.93632661695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5291512.071428572,
            "unit": "ns",
            "range": "± 59884.46347691179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028052.9482758623,
            "unit": "ns",
            "range": "± 106253.47362442395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17837.35632183908,
            "unit": "ns",
            "range": "± 1754.438888482261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86063.75263157894,
            "unit": "ns",
            "range": "± 8693.84937631493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85278.24444444444,
            "unit": "ns",
            "range": "± 6459.311245436175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 229705.73958333334,
            "unit": "ns",
            "range": "± 21496.957176476368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6527.186813186813,
            "unit": "ns",
            "range": "± 935.0109555161836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17339.170454545456,
            "unit": "ns",
            "range": "± 1531.944810247996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537601.0858585858,
            "unit": "ns",
            "range": "± 136913.6750126502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877205.05,
            "unit": "ns",
            "range": "± 117483.67536673095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513152.209677419,
            "unit": "ns",
            "range": "± 220216.99914968165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6451960.822222223,
            "unit": "ns",
            "range": "± 244907.17124474744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3063028.4,
            "unit": "ns",
            "range": "± 103977.90370315495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256350.8571428573,
            "unit": "ns",
            "range": "± 131478.00520908827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289478.435483871,
            "unit": "ns",
            "range": "± 190102.80372971203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4241535.171428571,
            "unit": "ns",
            "range": "± 205574.6506258346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7983841.729166667,
            "unit": "ns",
            "range": "± 310756.42525345803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6173156.02734375,
            "unit": "ns",
            "range": "± 63233.84567083784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881148.1268229166,
            "unit": "ns",
            "range": "± 9428.164257338774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1239024.4861979166,
            "unit": "ns",
            "range": "± 13093.027954282004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588297.7877604165,
            "unit": "ns",
            "range": "± 15056.525860920368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757504.7948567708,
            "unit": "ns",
            "range": "± 2892.3980682119613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 692283.1413411458,
            "unit": "ns",
            "range": "± 8102.950303737689"
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
        "date": 1681801242697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8868937.597560976,
            "unit": "ns",
            "range": "± 314985.6285457961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21058672.013513513,
            "unit": "ns",
            "range": "± 1048712.4295600615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56283114.166666664,
            "unit": "ns",
            "range": "± 1465984.9662029652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113037148.0754717,
            "unit": "ns",
            "range": "± 4641479.109088896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212291973.5,
            "unit": "ns",
            "range": "± 3415400.6361823166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73413.7032967033,
            "unit": "ns",
            "range": "± 7930.59288171026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382636.09210526315,
            "unit": "ns",
            "range": "± 19466.16683799707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319592.29545454547,
            "unit": "ns",
            "range": "± 17607.959838715506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301836.6907216495,
            "unit": "ns",
            "range": "± 21480.340325691242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5557206.928571428,
            "unit": "ns",
            "range": "± 72635.21582905202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3972755.0625,
            "unit": "ns",
            "range": "± 73259.50318192515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19005.714285714286,
            "unit": "ns",
            "range": "± 2601.981400077488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95992.37113402062,
            "unit": "ns",
            "range": "± 17132.859626022488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86674.85057471265,
            "unit": "ns",
            "range": "± 10293.014309250508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 256595.11340206186,
            "unit": "ns",
            "range": "± 28726.337305277702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6451.815217391304,
            "unit": "ns",
            "range": "± 1197.242921813205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19333.0625,
            "unit": "ns",
            "range": "± 3708.658111167207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1773340.625,
            "unit": "ns",
            "range": "± 194282.79111055704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3556251.8666666667,
            "unit": "ns",
            "range": "± 681846.745727448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2892501.827586207,
            "unit": "ns",
            "range": "± 516350.6432739289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8408083.688888889,
            "unit": "ns",
            "range": "± 2074254.661856731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292891.15625,
            "unit": "ns",
            "range": "± 88008.671594048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585935.1195652173,
            "unit": "ns",
            "range": "± 277517.90191890154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533601.631578947,
            "unit": "ns",
            "range": "± 63627.771029996125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738243.466666667,
            "unit": "ns",
            "range": "± 83815.61806631325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8163502.5227272725,
            "unit": "ns",
            "range": "± 251003.88603241098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6796288.19921875,
            "unit": "ns",
            "range": "± 154353.5215218177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981639.56484375,
            "unit": "ns",
            "range": "± 26636.354387399777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1248844.1950520833,
            "unit": "ns",
            "range": "± 16241.678769151089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557542.68828125,
            "unit": "ns",
            "range": "± 47279.04425579591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911360.4333333333,
            "unit": "ns",
            "range": "± 9942.6861280408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714794.7364783654,
            "unit": "ns",
            "range": "± 7898.871652232244"
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
        "date": 1681814753748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9395162.25,
            "unit": "ns",
            "range": "± 489709.9147728147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21669499.966666665,
            "unit": "ns",
            "range": "± 1088378.4629078887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54279117.385964915,
            "unit": "ns",
            "range": "± 2329452.607990983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108191312.29032259,
            "unit": "ns",
            "range": "± 4902550.62107529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209315632.16666666,
            "unit": "ns",
            "range": "± 9355207.4009399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73785.8111111111,
            "unit": "ns",
            "range": "± 9214.472029592624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 447856.92553191487,
            "unit": "ns",
            "range": "± 63311.802432886456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332514.9222222222,
            "unit": "ns",
            "range": "± 24081.35816981408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321559.7117647059,
            "unit": "ns",
            "range": "± 21842.391735259367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6101664.774725275,
            "unit": "ns",
            "range": "± 477001.56455080165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4100399.825,
            "unit": "ns",
            "range": "± 214248.9995228712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23352.01020408163,
            "unit": "ns",
            "range": "± 4018.161459593022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129477.77777777778,
            "unit": "ns",
            "range": "± 20361.11716697149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126196.89285714286,
            "unit": "ns",
            "range": "± 10384.451235877119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 256999.46842105262,
            "unit": "ns",
            "range": "± 25354.338970833538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7564.791666666667,
            "unit": "ns",
            "range": "± 1302.3675519417998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21028.252631578947,
            "unit": "ns",
            "range": "± 3130.452444929711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1913856.9569892474,
            "unit": "ns",
            "range": "± 251583.00084719702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3651138.8068181816,
            "unit": "ns",
            "range": "± 585343.7019019545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2867216.1091954024,
            "unit": "ns",
            "range": "± 334956.3382858212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8782530.01724138,
            "unit": "ns",
            "range": "± 1896016.4507289394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247340.46,
            "unit": "ns",
            "range": "± 152310.59472221066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3652359.8125,
            "unit": "ns",
            "range": "± 70781.11814810384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573757.9,
            "unit": "ns",
            "range": "± 201608.1087214601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4919208.172413793,
            "unit": "ns",
            "range": "± 453343.85096699634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10230605.92857143,
            "unit": "ns",
            "range": "± 2353717.114519359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7485216.647615132,
            "unit": "ns",
            "range": "± 163106.07765044222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075968.2334498356,
            "unit": "ns",
            "range": "± 67883.33608161235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1431987.8871694712,
            "unit": "ns",
            "range": "± 57978.91082231157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2873072.71484375,
            "unit": "ns",
            "range": "± 145649.14636406163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890131.6206430289,
            "unit": "ns",
            "range": "± 12899.354428008683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848747.5160086496,
            "unit": "ns",
            "range": "± 36124.95811522511"
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
        "date": 1681820216288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10119007.435294118,
            "unit": "ns",
            "range": "± 2334583.3500903044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32085787.59574468,
            "unit": "ns",
            "range": "± 12253603.005918283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63781074.23595506,
            "unit": "ns",
            "range": "± 11104255.084325176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104460110.5625,
            "unit": "ns",
            "range": "± 2042074.5958747757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217070975.4456522,
            "unit": "ns",
            "range": "± 18737931.380293325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88251.63636363637,
            "unit": "ns",
            "range": "± 10263.797582219626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391593.8484848485,
            "unit": "ns",
            "range": "± 30519.989722817576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347152.8064516129,
            "unit": "ns",
            "range": "± 42830.02782923957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320262.5052631579,
            "unit": "ns",
            "range": "± 41464.70337730062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5733143.653846154,
            "unit": "ns",
            "range": "± 358782.87452880724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132582.62371134,
            "unit": "ns",
            "range": "± 321125.5277391621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24995.989130434784,
            "unit": "ns",
            "range": "± 6707.421530907921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131106.43333333332,
            "unit": "ns",
            "range": "± 15543.051815789415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135905.0617977528,
            "unit": "ns",
            "range": "± 16906.353095101596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 169420.82323232322,
            "unit": "ns",
            "range": "± 31505.83382254211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12203.692307692309,
            "unit": "ns",
            "range": "± 1264.2803811066922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30473.719101123595,
            "unit": "ns",
            "range": "± 2766.2100836735744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1922158.3461538462,
            "unit": "ns",
            "range": "± 249435.98339235137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3254560.470588235,
            "unit": "ns",
            "range": "± 188081.51865826617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3021879.9294117647,
            "unit": "ns",
            "range": "± 438291.6620519999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11511470.225274725,
            "unit": "ns",
            "range": "± 4698879.341970239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3434994.2647058824,
            "unit": "ns",
            "range": "± 259563.46692533817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3404226.111111111,
            "unit": "ns",
            "range": "± 142802.67857757717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614232,
            "unit": "ns",
            "range": "± 207529.97444290482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4410269.652173913,
            "unit": "ns",
            "range": "± 281304.63407485414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8235932.346153846,
            "unit": "ns",
            "range": "± 335903.13950650836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8014841.345625,
            "unit": "ns",
            "range": "± 320434.2780841285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2248769.6463994565,
            "unit": "ns",
            "range": "± 198716.48767290782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1432198.6586588542,
            "unit": "ns",
            "range": "± 35625.02859536783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163955.8223214285,
            "unit": "ns",
            "range": "± 148691.54773521158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886870.780219184,
            "unit": "ns",
            "range": "± 29630.046048846227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 873222.6962109375,
            "unit": "ns",
            "range": "± 21743.72637778872"
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
        "date": 1681871935000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8221934.354838709,
            "unit": "ns",
            "range": "± 367816.8944637788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20331385.196629215,
            "unit": "ns",
            "range": "± 1373969.7586529101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49375583.9047619,
            "unit": "ns",
            "range": "± 1116301.8160820084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102923519.98192771,
            "unit": "ns",
            "range": "± 5485872.504801002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208437334.58333334,
            "unit": "ns",
            "range": "± 5159366.593594891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57937.1947368421,
            "unit": "ns",
            "range": "± 7569.392313889389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368315.86516853934,
            "unit": "ns",
            "range": "± 33319.13381267688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293317.7032967033,
            "unit": "ns",
            "range": "± 17050.71118588085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270280.7659574468,
            "unit": "ns",
            "range": "± 19557.021965928707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5243533.111111111,
            "unit": "ns",
            "range": "± 137931.6592445285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3606102.261904762,
            "unit": "ns",
            "range": "± 123426.59102637951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17228.695652173912,
            "unit": "ns",
            "range": "± 3346.7595537699026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80547.61764705883,
            "unit": "ns",
            "range": "± 4397.089950593851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81661.90217391304,
            "unit": "ns",
            "range": "± 9479.348300337746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103755.14444444445,
            "unit": "ns",
            "range": "± 14298.091220576789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5459.082417582417,
            "unit": "ns",
            "range": "± 1074.4063587337073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15398.40909090909,
            "unit": "ns",
            "range": "± 1670.1544744879252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630348.1263157895,
            "unit": "ns",
            "range": "± 157100.4763427941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070269.4534883723,
            "unit": "ns",
            "range": "± 179508.14183546475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2576314.6263157893,
            "unit": "ns",
            "range": "± 272187.2642773972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6945536.739130435,
            "unit": "ns",
            "range": "± 326802.1698514819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3289939.5595238097,
            "unit": "ns",
            "range": "± 176097.33086127767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4884511.090909091,
            "unit": "ns",
            "range": "± 1867754.049982465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4852834.569230769,
            "unit": "ns",
            "range": "± 216042.66047639246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4337238.3655913975,
            "unit": "ns",
            "range": "± 299739.0861997562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8568528.663043479,
            "unit": "ns",
            "range": "± 560255.3408452349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6289250.399553572,
            "unit": "ns",
            "range": "± 102957.22754862659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960458.9969161183,
            "unit": "ns",
            "range": "± 36744.104441549134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1260272.2416294643,
            "unit": "ns",
            "range": "± 19862.0191199346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632132.421316964,
            "unit": "ns",
            "range": "± 37086.956542979206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832844.1214735243,
            "unit": "ns",
            "range": "± 17285.686144126015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765570.511579241,
            "unit": "ns",
            "range": "± 7922.894655393761"
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
        "date": 1681884145780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8198140.22368421,
            "unit": "ns",
            "range": "± 413032.2054959104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19796772.78,
            "unit": "ns",
            "range": "± 791772.8197924537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50444905.90909091,
            "unit": "ns",
            "range": "± 1490374.1305920335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98109055.24074075,
            "unit": "ns",
            "range": "± 3919771.266747552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201183867.35714287,
            "unit": "ns",
            "range": "± 2279924.6101334095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61266.31578947369,
            "unit": "ns",
            "range": "± 10272.74285325021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379958.7534246575,
            "unit": "ns",
            "range": "± 18597.240135584056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314448.2111111111,
            "unit": "ns",
            "range": "± 26092.1947912081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326016.11904761905,
            "unit": "ns",
            "range": "± 24830.929454048273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5609619.148148148,
            "unit": "ns",
            "range": "± 140171.19814100506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3743447.285714286,
            "unit": "ns",
            "range": "± 52892.655007286034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17385.735632183907,
            "unit": "ns",
            "range": "± 1918.6970594758218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95755.40425531915,
            "unit": "ns",
            "range": "± 14771.523165372722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95352.56060606061,
            "unit": "ns",
            "range": "± 21299.09516896663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118746.56842105264,
            "unit": "ns",
            "range": "± 17651.839345212866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6564.770833333333,
            "unit": "ns",
            "range": "± 2246.13622157633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17337.81818181818,
            "unit": "ns",
            "range": "± 2105.6452667889434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552758.469072165,
            "unit": "ns",
            "range": "± 133836.39145453656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928972.8545454545,
            "unit": "ns",
            "range": "± 124657.71848507566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2543844.652631579,
            "unit": "ns",
            "range": "± 288582.8725662909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6929573.296703297,
            "unit": "ns",
            "range": "± 372944.994237473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181000.0547945206,
            "unit": "ns",
            "range": "± 152359.45332410187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3353747.18,
            "unit": "ns",
            "range": "± 134329.03521663605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486342.405660378,
            "unit": "ns",
            "range": "± 186659.91033471545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4437520.865853659,
            "unit": "ns",
            "range": "± 228381.78092119098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8448805.704081632,
            "unit": "ns",
            "range": "± 333063.3551311334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6157557.177604167,
            "unit": "ns",
            "range": "± 95983.09214991516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864805.4625,
            "unit": "ns",
            "range": "± 9976.797499469858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269343.2995442708,
            "unit": "ns",
            "range": "± 7461.334773136241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668119.2313058036,
            "unit": "ns",
            "range": "± 39696.97069071132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783227.1871744791,
            "unit": "ns",
            "range": "± 4417.914026095855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785537.7436848958,
            "unit": "ns",
            "range": "± 5766.243903237185"
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
        "date": 1681889104559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8260882.166666667,
            "unit": "ns",
            "range": "± 153185.34428679757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20583923.92,
            "unit": "ns",
            "range": "± 756481.9889424467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52979295.353658535,
            "unit": "ns",
            "range": "± 1886826.9842184333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100643428.36666666,
            "unit": "ns",
            "range": "± 1743498.0284871014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206417776.4642857,
            "unit": "ns",
            "range": "± 5490288.346327288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74809.27173913043,
            "unit": "ns",
            "range": "± 10199.400848706708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355869.33898305084,
            "unit": "ns",
            "range": "± 15724.27405002694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339097.0227272727,
            "unit": "ns",
            "range": "± 26096.43049135805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292981.43684210523,
            "unit": "ns",
            "range": "± 28810.630472253375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5354303.571428572,
            "unit": "ns",
            "range": "± 62175.67949548501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3686300.76,
            "unit": "ns",
            "range": "± 97728.6259203174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17974.695652173912,
            "unit": "ns",
            "range": "± 1788.617427500613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108225.21276595745,
            "unit": "ns",
            "range": "± 20886.833506607425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112707.95652173914,
            "unit": "ns",
            "range": "± 9885.12850490718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123095.06315789474,
            "unit": "ns",
            "range": "± 18963.714944212017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6419.634408602151,
            "unit": "ns",
            "range": "± 1030.6861874809658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17176.3,
            "unit": "ns",
            "range": "± 2647.3758576108294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697781.6648351648,
            "unit": "ns",
            "range": "± 175569.23066587115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3409338.388888889,
            "unit": "ns",
            "range": "± 315936.67381373676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2760645.9545454546,
            "unit": "ns",
            "range": "± 315403.41977977904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8042122.340909091,
            "unit": "ns",
            "range": "± 1075876.5968186331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4058337.423076923,
            "unit": "ns",
            "range": "± 141932.33871857924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3383995.3863636362,
            "unit": "ns",
            "range": "± 190208.0208928213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464433.176470588,
            "unit": "ns",
            "range": "± 240588.99331131467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250212.2,
            "unit": "ns",
            "range": "± 205407.92192155917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8249838.3965517245,
            "unit": "ns",
            "range": "± 356361.9774592958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6638049.009114583,
            "unit": "ns",
            "range": "± 82450.38535653087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900354.0022536058,
            "unit": "ns",
            "range": "± 19709.08418446836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1235031.9616350445,
            "unit": "ns",
            "range": "± 9288.881570876903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2409335.7561383927,
            "unit": "ns",
            "range": "± 32939.93383228874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784210.3392427885,
            "unit": "ns",
            "range": "± 6287.3182917511485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785448.4561298077,
            "unit": "ns",
            "range": "± 5958.077236052892"
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
        "date": 1681889196666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7499935.033333333,
            "unit": "ns",
            "range": "± 99332.47216643328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18469472.76470588,
            "unit": "ns",
            "range": "± 364956.0881468361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46524135.73076923,
            "unit": "ns",
            "range": "± 1247360.050030898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96296495.76666667,
            "unit": "ns",
            "range": "± 1586982.459743444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195251458.2857143,
            "unit": "ns",
            "range": "± 2918569.124641953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57576.69892473118,
            "unit": "ns",
            "range": "± 7763.331047420731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361818.8333333333,
            "unit": "ns",
            "range": "± 12426.72835931936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295629.35,
            "unit": "ns",
            "range": "± 10369.03635101729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259639.85714285713,
            "unit": "ns",
            "range": "± 8403.9944814176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5302998.823529412,
            "unit": "ns",
            "range": "± 106279.2889250037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3556580.5714285714,
            "unit": "ns",
            "range": "± 62881.92809447815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16961.74418604651,
            "unit": "ns",
            "range": "± 1470.8389697603884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85946.51578947369,
            "unit": "ns",
            "range": "± 7864.887216817459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84018.55319148937,
            "unit": "ns",
            "range": "± 7428.246338752051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109851.03125,
            "unit": "ns",
            "range": "± 13852.241995585997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5560.790697674419,
            "unit": "ns",
            "range": "± 895.3382681984971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16692.81395348837,
            "unit": "ns",
            "range": "± 1548.3847011083972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632744.881443299,
            "unit": "ns",
            "range": "± 165897.4034561373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3088448.789473684,
            "unit": "ns",
            "range": "± 157058.83763930135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713977.1391752576,
            "unit": "ns",
            "range": "± 253452.80739893115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7068389.142857143,
            "unit": "ns",
            "range": "± 464274.84696846624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4031491.3,
            "unit": "ns",
            "range": "± 120465.9301426384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3298525.2195121953,
            "unit": "ns",
            "range": "± 117973.74534414687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289111.431818182,
            "unit": "ns",
            "range": "± 157924.01939207577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240689.457446809,
            "unit": "ns",
            "range": "± 253099.55374201425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7873671,
            "unit": "ns",
            "range": "± 200092.515328372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6002549.427455357,
            "unit": "ns",
            "range": "± 56167.92873298432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1815818.6110677083,
            "unit": "ns",
            "range": "± 6948.767529803815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215310.8165364584,
            "unit": "ns",
            "range": "± 7077.362387066224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555936.6593191964,
            "unit": "ns",
            "range": "± 14741.169545315592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 760756.1376302083,
            "unit": "ns",
            "range": "± 3074.374480000749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769158.5647135417,
            "unit": "ns",
            "range": "± 6053.000154121367"
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
        "date": 1681891123397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8546771.133333333,
            "unit": "ns",
            "range": "± 124657.57612978194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22261943.333333332,
            "unit": "ns",
            "range": "± 193130.71033172868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57257607,
            "unit": "ns",
            "range": "± 752404.4058736915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113202061.28571428,
            "unit": "ns",
            "range": "± 1308573.4963326214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224015080.86666667,
            "unit": "ns",
            "range": "± 2522168.282906421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66742.53157894737,
            "unit": "ns",
            "range": "± 7013.63489766295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 458675.3615384615,
            "unit": "ns",
            "range": "± 21030.061560683887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361495.3220338983,
            "unit": "ns",
            "range": "± 15819.809437407439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315908.4,
            "unit": "ns",
            "range": "± 9949.76073079147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6476640.357142857,
            "unit": "ns",
            "range": "± 83993.35590446072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4494942.4,
            "unit": "ns",
            "range": "± 59888.753567164604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19707.23076923077,
            "unit": "ns",
            "range": "± 1576.0348140325884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95866.73913043478,
            "unit": "ns",
            "range": "± 6253.361343792186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89883.625,
            "unit": "ns",
            "range": "± 5648.014537498065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115379.78723404255,
            "unit": "ns",
            "range": "± 12301.400051338102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5914.368421052632,
            "unit": "ns",
            "range": "± 436.8880535475727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20142.042105263157,
            "unit": "ns",
            "range": "± 1759.5870097886032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826082.7448979593,
            "unit": "ns",
            "range": "± 247027.56484410915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3461937.6428571427,
            "unit": "ns",
            "range": "± 167080.06329276416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2881237.9191919193,
            "unit": "ns",
            "range": "± 278792.9007497185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7883452.9125,
            "unit": "ns",
            "range": "± 408750.22812582785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3872802.4393939395,
            "unit": "ns",
            "range": "± 163731.408242597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4142311.224489796,
            "unit": "ns",
            "range": "± 163682.07711257227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5292454.878787879,
            "unit": "ns",
            "range": "± 246021.7095500386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5454287.633333334,
            "unit": "ns",
            "range": "± 101454.00344340896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9729806.735294119,
            "unit": "ns",
            "range": "± 274031.29803743097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7297834.027083334,
            "unit": "ns",
            "range": "± 40135.21409127362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2202799.2109375,
            "unit": "ns",
            "range": "± 19218.76678993498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363011.3376302083,
            "unit": "ns",
            "range": "± 16610.971102414336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005292.8841911764,
            "unit": "ns",
            "range": "± 60640.47828482724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018135.4557291666,
            "unit": "ns",
            "range": "± 14020.086195696606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875600.309375,
            "unit": "ns",
            "range": "± 5429.138620067165"
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
        "date": 1681982292943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078408.785714285,
            "unit": "ns",
            "range": "± 128387.95511931709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21968214.35542169,
            "unit": "ns",
            "range": "± 1984680.2763008855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49244427.428571425,
            "unit": "ns",
            "range": "± 859890.4651307866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100072435.21428572,
            "unit": "ns",
            "range": "± 1549692.3310414865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196987170.07142857,
            "unit": "ns",
            "range": "± 5457146.652172336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68186.9574468085,
            "unit": "ns",
            "range": "± 8574.59330602689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365963,
            "unit": "ns",
            "range": "± 17719.122920086727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325593.1222222222,
            "unit": "ns",
            "range": "± 24030.476897187087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317580.98421052634,
            "unit": "ns",
            "range": "± 32453.633709891594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5506820.333333333,
            "unit": "ns",
            "range": "± 112274.19880757267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662401.846153846,
            "unit": "ns",
            "range": "± 31764.103898494588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17800.663157894738,
            "unit": "ns",
            "range": "± 1662.5507998031494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87420.35555555555,
            "unit": "ns",
            "range": "± 7301.54715413589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111085.42783505155,
            "unit": "ns",
            "range": "± 17518.488294065828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123752.4247311828,
            "unit": "ns",
            "range": "± 13335.07373207682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7352.15625,
            "unit": "ns",
            "range": "± 1181.3326803423058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20000.015463917527,
            "unit": "ns",
            "range": "± 3061.9147982151967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643795.6123595505,
            "unit": "ns",
            "range": "± 224770.4980691132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3161109.4823529413,
            "unit": "ns",
            "range": "± 302076.17982947896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2841787.5730337077,
            "unit": "ns",
            "range": "± 598057.3424740969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7656902.120689655,
            "unit": "ns",
            "range": "± 934044.7366597578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4385157.161290322,
            "unit": "ns",
            "range": "± 197301.67238296004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3539770.3260869565,
            "unit": "ns",
            "range": "± 122463.21931984392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4431904.694444444,
            "unit": "ns",
            "range": "± 146274.58905200363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498122.235955056,
            "unit": "ns",
            "range": "± 251329.4783636983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7995568.586206896,
            "unit": "ns",
            "range": "± 164563.52945194085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7150878.258125,
            "unit": "ns",
            "range": "± 283098.30214172107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2126600.7973845107,
            "unit": "ns",
            "range": "± 81556.64415206561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1262111.0359933036,
            "unit": "ns",
            "range": "± 12335.688202138781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2467890.854266827,
            "unit": "ns",
            "range": "± 28756.076364782057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800436.5034644718,
            "unit": "ns",
            "range": "± 18750.124256468232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713635.6895282452,
            "unit": "ns",
            "range": "± 3230.01202560415"
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
        "date": 1681998685170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8591902.909836065,
            "unit": "ns",
            "range": "± 386164.65632582933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20683011.548387095,
            "unit": "ns",
            "range": "± 611291.1681020122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51681200.175,
            "unit": "ns",
            "range": "± 1836215.8245506505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113686271.42045455,
            "unit": "ns",
            "range": "± 8185986.084146506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239135417.05208334,
            "unit": "ns",
            "range": "± 27548968.29239919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70099.91758241758,
            "unit": "ns",
            "range": "± 6841.936767816442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 423468.12903225806,
            "unit": "ns",
            "range": "± 50554.675531681576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336195.55913978495,
            "unit": "ns",
            "range": "± 35931.99883308033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341206.8333333333,
            "unit": "ns",
            "range": "± 38899.22070350961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5963434,
            "unit": "ns",
            "range": "± 474624.0542218415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3864382.5,
            "unit": "ns",
            "range": "± 146893.5919582229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19934.108695652172,
            "unit": "ns",
            "range": "± 3267.2146333816045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96748.31578947368,
            "unit": "ns",
            "range": "± 13211.959130629677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116087.15384615384,
            "unit": "ns",
            "range": "± 13098.91863129937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128168.77894736842,
            "unit": "ns",
            "range": "± 18496.265862461838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7369.775510204082,
            "unit": "ns",
            "range": "± 1518.3934845181127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19174.19230769231,
            "unit": "ns",
            "range": "± 3277.711029539119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561840.3351648352,
            "unit": "ns",
            "range": "± 129089.57422066478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096871.0784313725,
            "unit": "ns",
            "range": "± 125971.13772223273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529071,
            "unit": "ns",
            "range": "± 190142.34458702942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6745460.23255814,
            "unit": "ns",
            "range": "± 239250.6481974438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3736035.875,
            "unit": "ns",
            "range": "± 146887.1961639959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680133.0416666665,
            "unit": "ns",
            "range": "± 392434.7271250118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4644514.661016949,
            "unit": "ns",
            "range": "± 203345.78819524436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4751593.521276596,
            "unit": "ns",
            "range": "± 493611.30321283964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9263677.826315789,
            "unit": "ns",
            "range": "± 890484.1086889071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7337109.30871582,
            "unit": "ns",
            "range": "± 316435.56189510756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2133942.166155134,
            "unit": "ns",
            "range": "± 60345.60750043617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398414.4722842262,
            "unit": "ns",
            "range": "± 32788.14111302067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3261465.143037684,
            "unit": "ns",
            "range": "± 154356.48375364256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951693.1086811266,
            "unit": "ns",
            "range": "± 31140.423895526103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777261.1216145833,
            "unit": "ns",
            "range": "± 29257.681568115302"
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
        "date": 1682339028210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9486709.227272727,
            "unit": "ns",
            "range": "± 403866.9509276656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24272676,
            "unit": "ns",
            "range": "± 652886.7420347269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60922347.637931034,
            "unit": "ns",
            "range": "± 1476264.448410164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123553189.16666667,
            "unit": "ns",
            "range": "± 1579710.738673746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237214637.41666666,
            "unit": "ns",
            "range": "± 2344838.365006752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66807.01075268818,
            "unit": "ns",
            "range": "± 6149.921649367688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394221.5975609756,
            "unit": "ns",
            "range": "± 18821.403733751715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394278.8842105263,
            "unit": "ns",
            "range": "± 30500.741419960617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335615.1369863014,
            "unit": "ns",
            "range": "± 16665.074174181587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5404660,
            "unit": "ns",
            "range": "± 166467.06662706396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4444107.3125,
            "unit": "ns",
            "range": "± 136942.24002686905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21094.911111111112,
            "unit": "ns",
            "range": "± 1694.7458968622218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104230.3440860215,
            "unit": "ns",
            "range": "± 8643.64975184047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100011.96464646465,
            "unit": "ns",
            "range": "± 8900.955362978591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117546.04736842106,
            "unit": "ns",
            "range": "± 13146.354597676072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6732.051546391753,
            "unit": "ns",
            "range": "± 932.1533020728359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20516.744444444445,
            "unit": "ns",
            "range": "± 1585.0607939364365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1822132.1616161617,
            "unit": "ns",
            "range": "± 202474.48015081053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3563774.977272727,
            "unit": "ns",
            "range": "± 133265.12737719473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3022170.2395833335,
            "unit": "ns",
            "range": "± 278027.6276664357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8394304.082474226,
            "unit": "ns",
            "range": "± 637990.9050875332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3970228.6506024096,
            "unit": "ns",
            "range": "± 322940.4551646285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4255516.472972973,
            "unit": "ns",
            "range": "± 143193.89191009637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5512630.640625,
            "unit": "ns",
            "range": "± 252761.94280520637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5352932.188888889,
            "unit": "ns",
            "range": "± 361997.1453478494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10312838.548780488,
            "unit": "ns",
            "range": "± 1047207.8957681272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7088550.967633928,
            "unit": "ns",
            "range": "± 57795.46607781556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219294.0904947915,
            "unit": "ns",
            "range": "± 9386.408865235562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1469082.5303385416,
            "unit": "ns",
            "range": "± 18146.9889591153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124582.5033052885,
            "unit": "ns",
            "range": "± 24738.52811606358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923914.1316266741,
            "unit": "ns",
            "range": "± 4609.869744935263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851051.0578425481,
            "unit": "ns",
            "range": "± 4453.756963122217"
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
        "date": 1682412149981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9083719.789473685,
            "unit": "ns",
            "range": "± 190460.6405092019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23843978.55,
            "unit": "ns",
            "range": "± 834472.3475921145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60456132.833333336,
            "unit": "ns",
            "range": "± 2351718.410393759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122357775.78571428,
            "unit": "ns",
            "range": "± 2069025.0092531014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241347024.3,
            "unit": "ns",
            "range": "± 5556644.540837754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69607.40217391304,
            "unit": "ns",
            "range": "± 8688.935274193042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399848.7272727273,
            "unit": "ns",
            "range": "± 33923.60704455336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355335.03571428574,
            "unit": "ns",
            "range": "± 18872.998494659827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318583.8157894737,
            "unit": "ns",
            "range": "± 6693.019697603961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4987083.857142857,
            "unit": "ns",
            "range": "± 113566.27767796467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4193290.0701754387,
            "unit": "ns",
            "range": "± 180403.47752754294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20512.880434782608,
            "unit": "ns",
            "range": "± 1551.7153559808007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103450.6237113402,
            "unit": "ns",
            "range": "± 10667.296711462064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98540.86458333333,
            "unit": "ns",
            "range": "± 11424.248476141753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118865.71875,
            "unit": "ns",
            "range": "± 13536.358909251254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6437.345360824742,
            "unit": "ns",
            "range": "± 771.6260204405773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20518.6511627907,
            "unit": "ns",
            "range": "± 2002.2092725283817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1966587.6,
            "unit": "ns",
            "range": "± 248899.80814715257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3692636.8260869565,
            "unit": "ns",
            "range": "± 140467.2096331943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3281376.8020833335,
            "unit": "ns",
            "range": "± 341971.97185373073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8058287.8877551025,
            "unit": "ns",
            "range": "± 315404.3279422473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4210560.701030928,
            "unit": "ns",
            "range": "± 255546.2113882718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4137810.339285714,
            "unit": "ns",
            "range": "± 176731.27402356348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5412462.524390244,
            "unit": "ns",
            "range": "± 286888.49344378355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5470153.180851064,
            "unit": "ns",
            "range": "± 498675.06875110423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9603208.253521128,
            "unit": "ns",
            "range": "± 467514.2374867535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7215375.087740385,
            "unit": "ns",
            "range": "± 62946.40999728601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2324019.895089286,
            "unit": "ns",
            "range": "± 23900.700791398125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1462751.416294643,
            "unit": "ns",
            "range": "± 22798.6644204141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3058287.772042411,
            "unit": "ns",
            "range": "± 45407.195752436994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 915351.9559044471,
            "unit": "ns",
            "range": "± 4823.178160048506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864766.9993722098,
            "unit": "ns",
            "range": "± 10019.123169887991"
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
        "date": 1682413922730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9961581.782608695,
            "unit": "ns",
            "range": "± 2069963.9580451176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21820781.184210528,
            "unit": "ns",
            "range": "± 696702.2297539318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53909727.32258064,
            "unit": "ns",
            "range": "± 1531651.2306932758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106214799.92105263,
            "unit": "ns",
            "range": "± 3397548.3724166234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237048450.6190476,
            "unit": "ns",
            "range": "± 11921100.502338067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70896.6182795699,
            "unit": "ns",
            "range": "± 10115.895524252757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364473.86516853934,
            "unit": "ns",
            "range": "± 38608.40543909831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353989.6170212766,
            "unit": "ns",
            "range": "± 38369.562331458306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363674.74468085106,
            "unit": "ns",
            "range": "± 41431.36093230499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4415649.915730337,
            "unit": "ns",
            "range": "± 309538.1233830792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3904307.653846154,
            "unit": "ns",
            "range": "± 218099.41058302965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25965.91052631579,
            "unit": "ns",
            "range": "± 3555.3166196339616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113130.98,
            "unit": "ns",
            "range": "± 16859.19474392942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99938.46907216495,
            "unit": "ns",
            "range": "± 13710.048883372012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118146.7052631579,
            "unit": "ns",
            "range": "± 15287.845167637355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7721.424242424242,
            "unit": "ns",
            "range": "± 1400.75653823436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21307.409090909092,
            "unit": "ns",
            "range": "± 4259.669415866392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630529,
            "unit": "ns",
            "range": "± 201287.3563220626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3127197.396551724,
            "unit": "ns",
            "range": "± 169809.05391227582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589046.3125,
            "unit": "ns",
            "range": "± 372563.2234648111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6997291.918367347,
            "unit": "ns",
            "range": "± 593231.4214831344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687522.3444444444,
            "unit": "ns",
            "range": "± 521937.9966648318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547036.6063829786,
            "unit": "ns",
            "range": "± 287875.99554434867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4661220.893258427,
            "unit": "ns",
            "range": "± 399196.7573389098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4766121.123655914,
            "unit": "ns",
            "range": "± 393822.7561623131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8589686.532608695,
            "unit": "ns",
            "range": "± 723294.5068203501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6967674.180989583,
            "unit": "ns",
            "range": "± 169580.79948640824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019963.2321213942,
            "unit": "ns",
            "range": "± 19265.01291973992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294452.3321707589,
            "unit": "ns",
            "range": "± 11020.826446741252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2787472.579738451,
            "unit": "ns",
            "range": "± 104373.92710337901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909018.0682466947,
            "unit": "ns",
            "range": "± 6919.489853285827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734140.3798076923,
            "unit": "ns",
            "range": "± 5498.0560649321715"
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
        "date": 1682502268441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9087934.237113401,
            "unit": "ns",
            "range": "± 667125.0166940661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22342375.015789475,
            "unit": "ns",
            "range": "± 1396669.1898047088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65179728.416666664,
            "unit": "ns",
            "range": "± 4985517.030513874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113455277.02857143,
            "unit": "ns",
            "range": "± 3525817.7564141094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240500597.8902439,
            "unit": "ns",
            "range": "± 12728199.35952111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78383.08620689655,
            "unit": "ns",
            "range": "± 6102.6716462655195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393264.0617977528,
            "unit": "ns",
            "range": "± 57716.686460273544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375464.29347826086,
            "unit": "ns",
            "range": "± 60551.52305986174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 373508.5101010101,
            "unit": "ns",
            "range": "± 56320.528775400475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4865500.340206185,
            "unit": "ns",
            "range": "± 396855.21172236855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4228226.340206185,
            "unit": "ns",
            "range": "± 352229.3863294169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25834.116279069767,
            "unit": "ns",
            "range": "± 2918.227218378448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131265.96666666667,
            "unit": "ns",
            "range": "± 19155.386567475955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129515.78235294118,
            "unit": "ns",
            "range": "± 13819.465598181709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134184.74731182796,
            "unit": "ns",
            "range": "± 22945.831055778865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10106.744444444445,
            "unit": "ns",
            "range": "± 1090.435636696535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25546.8488372093,
            "unit": "ns",
            "range": "± 2835.5208164304486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1735995.616161616,
            "unit": "ns",
            "range": "± 192648.57373242316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3392153.35106383,
            "unit": "ns",
            "range": "± 359655.2825407128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2716997.9468085105,
            "unit": "ns",
            "range": "± 281386.99595101376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7076384.69047619,
            "unit": "ns",
            "range": "± 377562.3385430169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3685546.16,
            "unit": "ns",
            "range": "± 345041.0767621827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4040176.1170212766,
            "unit": "ns",
            "range": "± 380965.8950828563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5031925.510638298,
            "unit": "ns",
            "range": "± 517163.59917818604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5028317.855555556,
            "unit": "ns",
            "range": "± 506628.9617510982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9058770.389473684,
            "unit": "ns",
            "range": "± 1006732.1282591396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7737529.949793198,
            "unit": "ns",
            "range": "± 370660.2840683704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2446640.939597801,
            "unit": "ns",
            "range": "± 103124.15168154637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514559.4914550781,
            "unit": "ns",
            "range": "± 58290.84825627052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3339879.2533880738,
            "unit": "ns",
            "range": "± 214643.0037167126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996537.6607789855,
            "unit": "ns",
            "range": "± 47747.72529339336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945529.4288330078,
            "unit": "ns",
            "range": "± 59098.97223939592"
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
        "date": 1682504662375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112203.054054054,
            "unit": "ns",
            "range": "± 270972.2251864516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19994087.033333335,
            "unit": "ns",
            "range": "± 597553.4419072683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51904629.777777776,
            "unit": "ns",
            "range": "± 1955991.2214013818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104462328.75903614,
            "unit": "ns",
            "range": "± 5566565.149940209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204323453.72727272,
            "unit": "ns",
            "range": "± 5334305.316948405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65857.10309278351,
            "unit": "ns",
            "range": "± 11919.50813310241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332407.2684210526,
            "unit": "ns",
            "range": "± 21934.907553288947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310838.032967033,
            "unit": "ns",
            "range": "± 22665.224982313786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285415.43298969074,
            "unit": "ns",
            "range": "± 24640.48365279993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284611.428571428,
            "unit": "ns",
            "range": "± 155729.65009794672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750970.236842105,
            "unit": "ns",
            "range": "± 129041.7873209932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20925,
            "unit": "ns",
            "range": "± 3688.609996778371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91911.02,
            "unit": "ns",
            "range": "± 12429.19954432816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100212.08163265306,
            "unit": "ns",
            "range": "± 13613.310357331164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100170.8894736842,
            "unit": "ns",
            "range": "± 19097.1878737976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7218.329787234043,
            "unit": "ns",
            "range": "± 1631.6442619633128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19083.721649484534,
            "unit": "ns",
            "range": "± 3314.427633287119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556581.829787234,
            "unit": "ns",
            "range": "± 148595.02250239358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2986766.1794871795,
            "unit": "ns",
            "range": "± 152885.03161972226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2574561.5808080807,
            "unit": "ns",
            "range": "± 220617.47233994608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7064171.69072165,
            "unit": "ns",
            "range": "± 475098.1848891071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260048.6707317075,
            "unit": "ns",
            "range": "± 172127.32656084228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3391460.6515151514,
            "unit": "ns",
            "range": "± 155052.48244766798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4596525,
            "unit": "ns",
            "range": "± 211557.4980981984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4609773.552083333,
            "unit": "ns",
            "range": "± 527847.5541179305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7760379.081081081,
            "unit": "ns",
            "range": "± 247914.57881702122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6893025.267708333,
            "unit": "ns",
            "range": "± 202106.19998598058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846416.5777994792,
            "unit": "ns",
            "range": "± 39372.39064205385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267503.3658447266,
            "unit": "ns",
            "range": "± 24324.69927037774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2478415.374565972,
            "unit": "ns",
            "range": "± 52965.96157998855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854014.3680943081,
            "unit": "ns",
            "range": "± 4258.55344483778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711316.5815755208,
            "unit": "ns",
            "range": "± 6692.14478737497"
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
        "date": 1682559189368,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8216903.3,
            "unit": "ns",
            "range": "± 149131.6200404385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20023391.204081632,
            "unit": "ns",
            "range": "± 763801.2575523431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49340819.79032258,
            "unit": "ns",
            "range": "± 1407829.7296466925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100818097.57692307,
            "unit": "ns",
            "range": "± 1168965.9546069955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226269164.98351648,
            "unit": "ns",
            "range": "± 12597362.638914106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71920.86263736263,
            "unit": "ns",
            "range": "± 13340.187841020068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339253.8157894737,
            "unit": "ns",
            "range": "± 25700.77893151198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321881.1195652174,
            "unit": "ns",
            "range": "± 22193.28840870907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287474.3434343434,
            "unit": "ns",
            "range": "± 25086.66149454873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116260.769230769,
            "unit": "ns",
            "range": "± 110086.43497445364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744978.625,
            "unit": "ns",
            "range": "± 67939.25324177474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21451.61224489796,
            "unit": "ns",
            "range": "± 3278.9834753473665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96491.46,
            "unit": "ns",
            "range": "± 14598.117487200225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104249.87755102041,
            "unit": "ns",
            "range": "± 12822.389165143033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115511.46315789473,
            "unit": "ns",
            "range": "± 12822.012388782674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7920.95652173913,
            "unit": "ns",
            "range": "± 938.7978566609988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21802.602040816328,
            "unit": "ns",
            "range": "± 3633.298843954393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466220.4368421054,
            "unit": "ns",
            "range": "± 135035.97867336162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2802869.5344827585,
            "unit": "ns",
            "range": "± 122451.65175968116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2410593.8350515463,
            "unit": "ns",
            "range": "± 195405.91141218497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6939369.953608247,
            "unit": "ns",
            "range": "± 442202.9419242468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467177.047368421,
            "unit": "ns",
            "range": "± 255366.7105991482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727738.5,
            "unit": "ns",
            "range": "± 405624.4108583598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4599832.693548387,
            "unit": "ns",
            "range": "± 124659.6531891051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764106.478260869,
            "unit": "ns",
            "range": "± 514360.65379786014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8028950.045454546,
            "unit": "ns",
            "range": "± 437854.39483449626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6525724.513556985,
            "unit": "ns",
            "range": "± 208966.05608757443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938518.7086588542,
            "unit": "ns",
            "range": "± 7621.770953356602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292648.1330729167,
            "unit": "ns",
            "range": "± 14714.042829973429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2757664.152669271,
            "unit": "ns",
            "range": "± 39908.30826612803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862864.2548828125,
            "unit": "ns",
            "range": "± 3478.354670923424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744440.7737165178,
            "unit": "ns",
            "range": "± 8299.957799406893"
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
        "date": 1682570897054,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8563868.142857144,
            "unit": "ns",
            "range": "± 133971.8094312595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21100695.433333334,
            "unit": "ns",
            "range": "± 377904.6396580315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52755634.666666664,
            "unit": "ns",
            "range": "± 494699.45981180866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106907123.26923077,
            "unit": "ns",
            "range": "± 665682.5290423299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218644260,
            "unit": "ns",
            "range": "± 1531324.5485622196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76043.32795698925,
            "unit": "ns",
            "range": "± 7324.081587510768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341821.9868421053,
            "unit": "ns",
            "range": "± 17103.857050769508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343260.9342105263,
            "unit": "ns",
            "range": "± 16144.731752771471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334089.8823529412,
            "unit": "ns",
            "range": "± 10471.895052992619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4366385.1875,
            "unit": "ns",
            "range": "± 65903.49882590327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3727715.5172413792,
            "unit": "ns",
            "range": "± 108527.1870999615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28488.677419354837,
            "unit": "ns",
            "range": "± 2460.4530652127887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124232.65151515152,
            "unit": "ns",
            "range": "± 9937.21818993424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126448.84615384616,
            "unit": "ns",
            "range": "± 5400.637839154884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134110.6030927835,
            "unit": "ns",
            "range": "± 15212.50816658541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9954.357894736842,
            "unit": "ns",
            "range": "± 865.9930336778118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27121.989583333332,
            "unit": "ns",
            "range": "± 2844.1098338950924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624393.82,
            "unit": "ns",
            "range": "± 152982.79857931478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110879.453125,
            "unit": "ns",
            "range": "± 143735.24002489314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2731353.0816326533,
            "unit": "ns",
            "range": "± 242986.89618246944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7184944.37113402,
            "unit": "ns",
            "range": "± 461765.18623728736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419991.5555555555,
            "unit": "ns",
            "range": "± 105805.99160443054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4262677.571428572,
            "unit": "ns",
            "range": "± 40213.65866643645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4603511.928571428,
            "unit": "ns",
            "range": "± 68850.54326215955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4403800.9375,
            "unit": "ns",
            "range": "± 135764.1070502703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7899427.269230769,
            "unit": "ns",
            "range": "± 271899.6457952883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6934935.8828125,
            "unit": "ns",
            "range": "± 25976.45171217713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2071309.952845982,
            "unit": "ns",
            "range": "± 11484.260851536535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298936.721484375,
            "unit": "ns",
            "range": "± 13299.719669844602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703358.3986328123,
            "unit": "ns",
            "range": "± 173619.23475196768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849004.8634114583,
            "unit": "ns",
            "range": "± 15295.684883034153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717650.0958984375,
            "unit": "ns",
            "range": "± 6217.734614507811"
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
        "date": 1682664669140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8554955.3,
            "unit": "ns",
            "range": "± 152709.7519952709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21800880,
            "unit": "ns",
            "range": "± 627965.1804609019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54449074.07692308,
            "unit": "ns",
            "range": "± 823980.9668922842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109930925.55128205,
            "unit": "ns",
            "range": "± 3194023.5344061023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223483840.56451613,
            "unit": "ns",
            "range": "± 6626086.576787769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64914.947916666664,
            "unit": "ns",
            "range": "± 8677.436312365162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358861.3404255319,
            "unit": "ns",
            "range": "± 24986.41345017917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345635.6947368421,
            "unit": "ns",
            "range": "± 24038.23844090896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324630.98913043475,
            "unit": "ns",
            "range": "± 21867.098349087642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4403457.694444444,
            "unit": "ns",
            "range": "± 144054.60204535926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835885.3928571427,
            "unit": "ns",
            "range": "± 107658.32202108437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22204.042105263157,
            "unit": "ns",
            "range": "± 4215.748054353195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101588.18041237113,
            "unit": "ns",
            "range": "± 19464.620124057983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103452.92929292929,
            "unit": "ns",
            "range": "± 15700.691996482794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124019.9175257732,
            "unit": "ns",
            "range": "± 21103.139381218312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8596.947916666666,
            "unit": "ns",
            "range": "± 928.3176846180199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22037.036082474227,
            "unit": "ns",
            "range": "± 4053.2439710420417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709798.06185567,
            "unit": "ns",
            "range": "± 193350.65471496203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064725.661764706,
            "unit": "ns",
            "range": "± 146721.19670106072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2711285.0631578946,
            "unit": "ns",
            "range": "± 278145.0660760366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7138603.217391305,
            "unit": "ns",
            "range": "± 479240.56264441187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484179.796296296,
            "unit": "ns",
            "range": "± 92131.44246498078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621754.35,
            "unit": "ns",
            "range": "± 80661.81628860284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4693689.029411765,
            "unit": "ns",
            "range": "± 147759.89686757803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4561461.952631579,
            "unit": "ns",
            "range": "± 260669.70796791904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8282243.116438356,
            "unit": "ns",
            "range": "± 408232.92698915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7208659.386259191,
            "unit": "ns",
            "range": "± 230031.8132318349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054021.7890625,
            "unit": "ns",
            "range": "± 56145.40218078224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334134.0034877232,
            "unit": "ns",
            "range": "± 22313.03863322822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2808111.440234375,
            "unit": "ns",
            "range": "± 33719.77316107611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873128.2352864583,
            "unit": "ns",
            "range": "± 5739.135829419592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741175.9308733259,
            "unit": "ns",
            "range": "± 4367.484068076996"
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
        "date": 1682676479688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8580947.476190476,
            "unit": "ns",
            "range": "± 202048.32014412273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21417519,
            "unit": "ns",
            "range": "± 329403.90201972134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53449238.04054054,
            "unit": "ns",
            "range": "± 2675127.0381589863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106902048.90322581,
            "unit": "ns",
            "range": "± 4865441.570318585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220095244.3604651,
            "unit": "ns",
            "range": "± 11462876.102812974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82109.48837209302,
            "unit": "ns",
            "range": "± 7027.88065701709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351872.73076923075,
            "unit": "ns",
            "range": "± 33686.62317896689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359235.8191489362,
            "unit": "ns",
            "range": "± 50706.51098236374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304771.152173913,
            "unit": "ns",
            "range": "± 25908.317653312424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4282890.25,
            "unit": "ns",
            "range": "± 150367.87172758885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927968.7282608696,
            "unit": "ns",
            "range": "± 220156.3412633981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20626.747311827956,
            "unit": "ns",
            "range": "± 3730.5269754096403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104138.82105263158,
            "unit": "ns",
            "range": "± 22003.505872966693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121517.88636363637,
            "unit": "ns",
            "range": "± 10525.859056793895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125839,
            "unit": "ns",
            "range": "± 16835.213216497847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8956.152173913044,
            "unit": "ns",
            "range": "± 1079.218296006319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23379.88775510204,
            "unit": "ns",
            "range": "± 4089.0661667594927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780198.2857142857,
            "unit": "ns",
            "range": "± 243243.9372804108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3542786.2386363638,
            "unit": "ns",
            "range": "± 428759.3236621832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2965730.4886363638,
            "unit": "ns",
            "range": "± 453319.2502019212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9218385.693548387,
            "unit": "ns",
            "range": "± 2334449.2404754763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3303050.56122449,
            "unit": "ns",
            "range": "± 222700.63806810143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470101.984848485,
            "unit": "ns",
            "range": "± 162748.3337772433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482710.770833333,
            "unit": "ns",
            "range": "± 174803.84120325974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4616319.181818182,
            "unit": "ns",
            "range": "± 434115.9534794729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8192212.1147540985,
            "unit": "ns",
            "range": "± 354908.91776379745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7788175.3753511235,
            "unit": "ns",
            "range": "± 637406.6993077752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2351467.8656421704,
            "unit": "ns",
            "range": "± 180488.5420242276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466705.5551215278,
            "unit": "ns",
            "range": "± 31165.541718314005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3383277.7342139175,
            "unit": "ns",
            "range": "± 232275.019877082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857232.8382393973,
            "unit": "ns",
            "range": "± 14263.765903240594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767398.3347886029,
            "unit": "ns",
            "range": "± 15540.334091697172"
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
        "date": 1682677458279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8277625.5,
            "unit": "ns",
            "range": "± 123344.63225518436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23590624.627659574,
            "unit": "ns",
            "range": "± 3763045.674084525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60945709.91489362,
            "unit": "ns",
            "range": "± 12393222.791164817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113461832.95652173,
            "unit": "ns",
            "range": "± 12904202.748211931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273680342.6145833,
            "unit": "ns",
            "range": "± 52619632.85194894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71433.6914893617,
            "unit": "ns",
            "range": "± 9877.656139066961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356874.2346938776,
            "unit": "ns",
            "range": "± 46108.210111895496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359611.64210526313,
            "unit": "ns",
            "range": "± 33427.156600303104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339205.3333333333,
            "unit": "ns",
            "range": "± 23668.800285384936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4522913.778350515,
            "unit": "ns",
            "range": "± 284107.3855970786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4220627.813131313,
            "unit": "ns",
            "range": "± 406202.41002376546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25470.6404494382,
            "unit": "ns",
            "range": "± 2646.338522147118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119948.51111111112,
            "unit": "ns",
            "range": "± 12556.409042813035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127731.66315789474,
            "unit": "ns",
            "range": "± 17013.487754313675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129325.13043478261,
            "unit": "ns",
            "range": "± 16122.18359881157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9068.363636363636,
            "unit": "ns",
            "range": "± 942.6213654816482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25490.921348314605,
            "unit": "ns",
            "range": "± 4078.337167346736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706218.5,
            "unit": "ns",
            "range": "± 191677.62742166859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3168712.040229885,
            "unit": "ns",
            "range": "± 269706.6298715511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2691744.7150537632,
            "unit": "ns",
            "range": "± 336178.70993425796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12515933.484848484,
            "unit": "ns",
            "range": "± 6115274.3539729295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4400562.8369565215,
            "unit": "ns",
            "range": "± 1037756.2031538803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4030506.186813187,
            "unit": "ns",
            "range": "± 764279.5427936316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4940294.893258427,
            "unit": "ns",
            "range": "± 457923.6065099033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5103558.906593407,
            "unit": "ns",
            "range": "± 473720.5379038241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8739391.48888889,
            "unit": "ns",
            "range": "± 871847.5561625412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7380912.483041159,
            "unit": "ns",
            "range": "± 389489.4701107222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2253671.584453125,
            "unit": "ns",
            "range": "± 59760.79622525801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407483.3697916667,
            "unit": "ns",
            "range": "± 52988.59266052337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2952059.1362757734,
            "unit": "ns",
            "range": "± 232379.30588627278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839114.8407421875,
            "unit": "ns",
            "range": "± 21902.503842901744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839369.6946149553,
            "unit": "ns",
            "range": "± 14637.658623231422"
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
        "date": 1682993266082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8233282.39010989,
            "unit": "ns",
            "range": "± 495205.7919100672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20218271.61764706,
            "unit": "ns",
            "range": "± 267507.86514556035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51207664.71052632,
            "unit": "ns",
            "range": "± 1086118.4504438823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100875637.11904761,
            "unit": "ns",
            "range": "± 2312106.218129489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212900533.66666666,
            "unit": "ns",
            "range": "± 3897717.026133662"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62940.11111111111,
            "unit": "ns",
            "range": "± 7780.297884948032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327415.1505376344,
            "unit": "ns",
            "range": "± 25077.529696811915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318345.6041666667,
            "unit": "ns",
            "range": "± 24869.21160516994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297771.0842105263,
            "unit": "ns",
            "range": "± 19574.463707043546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298244.702702703,
            "unit": "ns",
            "range": "± 142961.47727639097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4064484.8333333335,
            "unit": "ns",
            "range": "± 74430.81221862226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19914.785714285714,
            "unit": "ns",
            "range": "± 2540.842125395745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95150.9052631579,
            "unit": "ns",
            "range": "± 10215.806802137022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104345.32291666667,
            "unit": "ns",
            "range": "± 9918.295610685487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116839.5947368421,
            "unit": "ns",
            "range": "± 16859.70532734698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6735.178947368421,
            "unit": "ns",
            "range": "± 890.7925347563279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18585.4,
            "unit": "ns",
            "range": "± 2331.175330701642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680035.2659574468,
            "unit": "ns",
            "range": "± 179351.99740176796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093442.9637681157,
            "unit": "ns",
            "range": "± 149357.91150765604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590046.5483870967,
            "unit": "ns",
            "range": "± 233496.53350687804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6843776.8,
            "unit": "ns",
            "range": "± 419560.6894503831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328765,
            "unit": "ns",
            "range": "± 157988.4436561692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482036.684782609,
            "unit": "ns",
            "range": "± 216577.23112359547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564316.555555556,
            "unit": "ns",
            "range": "± 191019.67359002648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4406870.9130434785,
            "unit": "ns",
            "range": "± 250684.6856788074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7755400.805084745,
            "unit": "ns",
            "range": "± 339095.127663684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6692048.810546875,
            "unit": "ns",
            "range": "± 121547.16440469692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001666.59375,
            "unit": "ns",
            "range": "± 26857.079559298843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320050.549107143,
            "unit": "ns",
            "range": "± 14875.937372333405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913513.44609375,
            "unit": "ns",
            "range": "± 41330.89851670881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 891433.9219401042,
            "unit": "ns",
            "range": "± 10517.517482012629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 844791.1032151442,
            "unit": "ns",
            "range": "± 6336.237611457026"
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
        "date": 1682994521340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8818730.866666667,
            "unit": "ns",
            "range": "± 127260.12382229819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23531527.222222224,
            "unit": "ns",
            "range": "± 771797.3168699561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57771620.43333333,
            "unit": "ns",
            "range": "± 905794.174250299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114224331.46666667,
            "unit": "ns",
            "range": "± 1182379.914546255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235030033.06666666,
            "unit": "ns",
            "range": "± 2040052.1801573911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70334.78571428571,
            "unit": "ns",
            "range": "± 8120.603520655502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376024.4126984127,
            "unit": "ns",
            "range": "± 17156.617438286226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365483.19696969696,
            "unit": "ns",
            "range": "± 17143.019553805112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312188.5,
            "unit": "ns",
            "range": "± 7056.476805035215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5309890,
            "unit": "ns",
            "range": "± 97260.31029424764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4542920.333333333,
            "unit": "ns",
            "range": "± 79201.21224871918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20529.83870967742,
            "unit": "ns",
            "range": "± 1405.188330951334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95539.32631578947,
            "unit": "ns",
            "range": "± 6537.814765120186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85300.08333333333,
            "unit": "ns",
            "range": "± 2841.918591123157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118886.22164948453,
            "unit": "ns",
            "range": "± 15403.648461039911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5705.1578947368425,
            "unit": "ns",
            "range": "± 552.4740740194111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19573.010752688173,
            "unit": "ns",
            "range": "± 1589.280336823418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2076710.4736842106,
            "unit": "ns",
            "range": "± 232251.95163785468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3728962.96,
            "unit": "ns",
            "range": "± 147879.30760920528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3143141.618556701,
            "unit": "ns",
            "range": "± 256909.5194309842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7828498.231707317,
            "unit": "ns",
            "range": "± 261178.72334332907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3766012.4081632653,
            "unit": "ns",
            "range": "± 148382.3506686524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4275484.631578947,
            "unit": "ns",
            "range": "± 144507.03584950196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5283665.545454546,
            "unit": "ns",
            "range": "± 128465.88646082081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5078344.462365591,
            "unit": "ns",
            "range": "± 319369.8650583732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8912472.653846154,
            "unit": "ns",
            "range": "± 307566.4593505758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7199063.595424107,
            "unit": "ns",
            "range": "± 70812.01802131742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2222265.8993389425,
            "unit": "ns",
            "range": "± 24462.540800037757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496414.681640625,
            "unit": "ns",
            "range": "± 14150.5743553768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151862.5178571427,
            "unit": "ns",
            "range": "± 14330.92850367326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 959011.277734375,
            "unit": "ns",
            "range": "± 9526.880379984588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897451.591796875,
            "unit": "ns",
            "range": "± 5640.054329929371"
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
        "date": 1683005909120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10759631.247252747,
            "unit": "ns",
            "range": "± 2758299.946732156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21315999.06756757,
            "unit": "ns",
            "range": "± 716637.8785153449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60041420.14606742,
            "unit": "ns",
            "range": "± 10865423.284914581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139678668.91578948,
            "unit": "ns",
            "range": "± 33660607.0305824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245245918.24390244,
            "unit": "ns",
            "range": "± 24200100.64870808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78698.48876404495,
            "unit": "ns",
            "range": "± 10003.49427869898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386456.87209302327,
            "unit": "ns",
            "range": "± 44576.43547490258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371860.1354166667,
            "unit": "ns",
            "range": "± 48214.66101009434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350565,
            "unit": "ns",
            "range": "± 36200.172840235464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806436.074468086,
            "unit": "ns",
            "range": "± 453362.34914840467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998690.675824176,
            "unit": "ns",
            "range": "± 227921.32623617657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31718.366666666665,
            "unit": "ns",
            "range": "± 4666.961787364356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138543.4301075269,
            "unit": "ns",
            "range": "± 18903.389314455395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 145680.37234042553,
            "unit": "ns",
            "range": "± 24784.057850290348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157278.92857142858,
            "unit": "ns",
            "range": "± 26642.33177697263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9810.567010309278,
            "unit": "ns",
            "range": "± 1910.2071054121357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33567.32967032967,
            "unit": "ns",
            "range": "± 6419.373699210063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1674973.8626373627,
            "unit": "ns",
            "range": "± 233808.57678434852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048293.820224719,
            "unit": "ns",
            "range": "± 207584.35066648544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2702071.7701149425,
            "unit": "ns",
            "range": "± 389490.38305265596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7173841.944444444,
            "unit": "ns",
            "range": "± 1163416.4854319636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3680946.5595238097,
            "unit": "ns",
            "range": "± 415140.2931856283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3922008.7294117645,
            "unit": "ns",
            "range": "± 431954.0130309395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4748932.2191011235,
            "unit": "ns",
            "range": "± 261680.1980346078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5735604.977777778,
            "unit": "ns",
            "range": "± 1275512.6046986303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8671647.20879121,
            "unit": "ns",
            "range": "± 1051469.986274903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7890761.281423612,
            "unit": "ns",
            "range": "± 647438.8130829413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2193803.8874327955,
            "unit": "ns",
            "range": "± 150229.6650151291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367937.2421875,
            "unit": "ns",
            "range": "± 17195.77749484419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2878255.136379076,
            "unit": "ns",
            "range": "± 174213.431125681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893703.4468845275,
            "unit": "ns",
            "range": "± 32177.594311622746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 971780.3593647204,
            "unit": "ns",
            "range": "± 61090.22445121789"
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
        "date": 1683019929060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8828780.798969071,
            "unit": "ns",
            "range": "± 549118.2919422425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23474310.02222222,
            "unit": "ns",
            "range": "± 2130131.816615836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57501344.35294118,
            "unit": "ns",
            "range": "± 1149953.2060237245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119578167.64285715,
            "unit": "ns",
            "range": "± 11516149.67241898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230628712.42592594,
            "unit": "ns",
            "range": "± 6447235.268329309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75372.77777777778,
            "unit": "ns",
            "range": "± 8523.545156796557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364579.9880952381,
            "unit": "ns",
            "range": "± 39668.62561922116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323381.54545454547,
            "unit": "ns",
            "range": "± 25251.618902425096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330309.8953488372,
            "unit": "ns",
            "range": "± 32560.524581436504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4428508.4772727275,
            "unit": "ns",
            "range": "± 375957.6890530255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3931790.6860465114,
            "unit": "ns",
            "range": "± 145515.00575709835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22988.663157894738,
            "unit": "ns",
            "range": "± 4093.5824803744003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115623.66666666667,
            "unit": "ns",
            "range": "± 16861.86125717383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115409.55434782608,
            "unit": "ns",
            "range": "± 7443.543396374952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147335.90625,
            "unit": "ns",
            "range": "± 32675.55682224482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9046.967391304348,
            "unit": "ns",
            "range": "± 969.6847051987654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24961.535714285714,
            "unit": "ns",
            "range": "± 3443.0558976542584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1858956.4263157896,
            "unit": "ns",
            "range": "± 427415.28571383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3188918.25,
            "unit": "ns",
            "range": "± 321248.3873132472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738136.25,
            "unit": "ns",
            "range": "± 316048.6377955449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7527111.264044944,
            "unit": "ns",
            "range": "± 1579646.453836593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501768.1428571427,
            "unit": "ns",
            "range": "± 276776.7456032139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3701863.7391304346,
            "unit": "ns",
            "range": "± 327209.25144998374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4753260.677083333,
            "unit": "ns",
            "range": "± 330581.0626402832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4869351.1632653065,
            "unit": "ns",
            "range": "± 607516.6085051518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9160273.042105263,
            "unit": "ns",
            "range": "± 1983641.5244268791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8779217.961508077,
            "unit": "ns",
            "range": "± 1042969.9904445651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2556031.0406165994,
            "unit": "ns",
            "range": "± 265297.4642101762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401984.8952636719,
            "unit": "ns",
            "range": "± 48845.63722764657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944256.213917526,
            "unit": "ns",
            "range": "± 250930.35987459676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 948724.763819839,
            "unit": "ns",
            "range": "± 29419.963390092944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 818788.4932960304,
            "unit": "ns",
            "range": "± 27561.745236359966"
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
          "id": "136de5c689b87234ce87a9694db5c975a2d287be",
          "message": "Merge pull request #3135 from greymistcube/refactor/type-loader\n\n♻️ Changed `IActionTypeLoader` to `IActionLoader`",
          "timestamp": "2023-05-03T19:37:02+09:00",
          "tree_id": "c4a4fe94b72f4641da7598a8daaeac1c75c9020c",
          "url": "https://github.com/planetarium/libplanet/commit/136de5c689b87234ce87a9694db5c975a2d287be"
        },
        "date": 1683111718482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8811254.774725275,
            "unit": "ns",
            "range": "± 857470.958443622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25648822.76344086,
            "unit": "ns",
            "range": "± 5675628.849377192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53308478.571428575,
            "unit": "ns",
            "range": "± 2576071.569823499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106277988.77777778,
            "unit": "ns",
            "range": "± 2254505.9111136305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216717589.58510637,
            "unit": "ns",
            "range": "± 13888838.550710632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73174.84615384616,
            "unit": "ns",
            "range": "± 9225.114639363663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351671.1195652174,
            "unit": "ns",
            "range": "± 42736.47723757604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325968.1808510638,
            "unit": "ns",
            "range": "± 34183.59467567465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314381.63157894736,
            "unit": "ns",
            "range": "± 39602.16475360069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369826.355670103,
            "unit": "ns",
            "range": "± 292660.3250497562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3922636.9731182796,
            "unit": "ns",
            "range": "± 264571.35648841795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21970.704545454544,
            "unit": "ns",
            "range": "± 3469.8831049875375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110634.15957446808,
            "unit": "ns",
            "range": "± 14795.58194613513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114421.6404494382,
            "unit": "ns",
            "range": "± 10979.358363483716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121370.69101123596,
            "unit": "ns",
            "range": "± 16481.476892723324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7800.549450549451,
            "unit": "ns",
            "range": "± 1278.6465523594886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24008.489361702126,
            "unit": "ns",
            "range": "± 4004.9745887926497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1603893.430107527,
            "unit": "ns",
            "range": "± 168931.5436933474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3414009.4823529413,
            "unit": "ns",
            "range": "± 514815.4089334122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764764.6808510637,
            "unit": "ns",
            "range": "± 352326.3439036609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9622499.173913043,
            "unit": "ns",
            "range": "± 3112361.722522201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241663.3295454546,
            "unit": "ns",
            "range": "± 178002.95895608037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406324,
            "unit": "ns",
            "range": "± 257478.44637250708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451272.215053763,
            "unit": "ns",
            "range": "± 255010.35906298296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4719178.326086956,
            "unit": "ns",
            "range": "± 316326.6974102658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8007176.56701031,
            "unit": "ns",
            "range": "± 671309.5944582393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7870383.3184267245,
            "unit": "ns",
            "range": "± 734557.3004419078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2283792.460329861,
            "unit": "ns",
            "range": "± 232906.42281288048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450623.7306102808,
            "unit": "ns",
            "range": "± 69452.88688316417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3134858.1001171875,
            "unit": "ns",
            "range": "± 348961.05115949555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960533.6046258224,
            "unit": "ns",
            "range": "± 52460.828468658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799447.307840983,
            "unit": "ns",
            "range": "± 48034.93089386315"
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
          "id": "e8edec62a15bf36bf36cc5e2b48dbe51924161f1",
          "message": "Merge pull request #3132 from limebell/cherrypick/1.0.1\n\nPort changes from 1.0.1",
          "timestamp": "2023-05-04T02:45:28+09:00",
          "tree_id": "889dfae22e65d823fb3586d7d9c2edca0416ab17",
          "url": "https://github.com/planetarium/libplanet/commit/e8edec62a15bf36bf36cc5e2b48dbe51924161f1"
        },
        "date": 1683137673273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13971006.785714285,
            "unit": "ns",
            "range": "± 4187319.2015492925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 45317251.68681318,
            "unit": "ns",
            "range": "± 15867529.75372532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89120909.32631579,
            "unit": "ns",
            "range": "± 27379926.645156022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118088837.01219513,
            "unit": "ns",
            "range": "± 14005270.04685196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268677185.67021275,
            "unit": "ns",
            "range": "± 46359703.69529788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90496.72093023256,
            "unit": "ns",
            "range": "± 8327.406363612457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374082.1590909091,
            "unit": "ns",
            "range": "± 34914.81804116931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397840.2111111111,
            "unit": "ns",
            "range": "± 63953.661381159836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380524.1666666667,
            "unit": "ns",
            "range": "± 36480.517323975815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6135316.806451613,
            "unit": "ns",
            "range": "± 2011375.8516995236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987888.318181818,
            "unit": "ns",
            "range": "± 938302.140258137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30972.313186813186,
            "unit": "ns",
            "range": "± 2628.3953487170666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 144383.01136363635,
            "unit": "ns",
            "range": "± 20810.37974239917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142599.97619047618,
            "unit": "ns",
            "range": "± 14375.810491536917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157694.78421052633,
            "unit": "ns",
            "range": "± 34921.891258606534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11286.166666666666,
            "unit": "ns",
            "range": "± 1651.7075604260392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32456.894117647058,
            "unit": "ns",
            "range": "± 2988.295449087392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1968513.1179775281,
            "unit": "ns",
            "range": "± 426419.37558114255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4232879.711111112,
            "unit": "ns",
            "range": "± 1065536.072580734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3210689.9431818184,
            "unit": "ns",
            "range": "± 692434.0341007696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9731400.538461538,
            "unit": "ns",
            "range": "± 3447315.8613467677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3762632.8666666667,
            "unit": "ns",
            "range": "± 617698.1853003922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4088091.510989011,
            "unit": "ns",
            "range": "± 726047.6374101158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4741469.681818182,
            "unit": "ns",
            "range": "± 301890.3858102411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4903613.073033708,
            "unit": "ns",
            "range": "± 526770.1997499153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8157963.703296703,
            "unit": "ns",
            "range": "± 608112.7676709768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8652402.740953946,
            "unit": "ns",
            "range": "± 729463.8467918368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339485.2314860024,
            "unit": "ns",
            "range": "± 179191.62258893004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1500759.629683061,
            "unit": "ns",
            "range": "± 100198.82040073076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3411039.457397461,
            "unit": "ns",
            "range": "± 321498.3628204295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1140896.00131537,
            "unit": "ns",
            "range": "± 105334.59353444446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1049128.1060373813,
            "unit": "ns",
            "range": "± 54460.30771200766"
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
          "id": "1eb7d483e635204d9210382cd65741885745ceb2",
          "message": "Merge pull request #3136 from greymistcube/feature/filter-malformed-transaction\n\n🔧 Filter malformed `Transaction`s when proposing `Block`s",
          "timestamp": "2023-05-04T17:45:27+09:00",
          "tree_id": "0304b66bc59b57ddd30c4a4bb80e79cb46f4c2ce",
          "url": "https://github.com/planetarium/libplanet/commit/1eb7d483e635204d9210382cd65741885745ceb2"
        },
        "date": 1683191630863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14642675.043010753,
            "unit": "ns",
            "range": "± 6611558.760391045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26768269.329787236,
            "unit": "ns",
            "range": "± 6538103.318914845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75916427.05434783,
            "unit": "ns",
            "range": "± 22161456.71684163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141999232.18823528,
            "unit": "ns",
            "range": "± 53271169.82781657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244015972.36956522,
            "unit": "ns",
            "range": "± 22394245.660953064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80144.63793103448,
            "unit": "ns",
            "range": "± 7385.890584414303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408571.6875,
            "unit": "ns",
            "range": "± 64465.33148572552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381827.44623655913,
            "unit": "ns",
            "range": "± 49438.52075082432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359193.9195402299,
            "unit": "ns",
            "range": "± 30044.713105798328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4719799.93298969,
            "unit": "ns",
            "range": "± 457761.4529515689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4149697.222222222,
            "unit": "ns",
            "range": "± 460300.89943407767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25575.38888888889,
            "unit": "ns",
            "range": "± 3319.8516810461306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130495.44444444444,
            "unit": "ns",
            "range": "± 13981.709147392252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128068.16666666667,
            "unit": "ns",
            "range": "± 14037.033113690066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143682.95555555556,
            "unit": "ns",
            "range": "± 23870.711623530053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9877.95652173913,
            "unit": "ns",
            "range": "± 1731.309559061481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31986.52298850575,
            "unit": "ns",
            "range": "± 4103.25605245682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1944296.6470588236,
            "unit": "ns",
            "range": "± 341254.3587523028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3844067.0795454546,
            "unit": "ns",
            "range": "± 618150.5392661375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3324744.1136363638,
            "unit": "ns",
            "range": "± 683087.0086503838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8875460.384615384,
            "unit": "ns",
            "range": "± 2129758.8662327314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3713001.875,
            "unit": "ns",
            "range": "± 363318.66107494326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3721521.9516129033,
            "unit": "ns",
            "range": "± 398504.03895150597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4677678.7191011235,
            "unit": "ns",
            "range": "± 388751.06963120867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4920892.5470588235,
            "unit": "ns",
            "range": "± 657157.3235884074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8577810.433333334,
            "unit": "ns",
            "range": "± 650355.5240157141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 10294049.558467742,
            "unit": "ns",
            "range": "± 2386818.4482742106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2479409.410503472,
            "unit": "ns",
            "range": "± 343068.21826075984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1750090.9800016985,
            "unit": "ns",
            "range": "± 196566.66236803928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3811372.76832613,
            "unit": "ns",
            "range": "± 322719.6342378341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103358.1543782551,
            "unit": "ns",
            "range": "± 28543.155389754447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955865.5730516387,
            "unit": "ns",
            "range": "± 48963.165540053385"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "508cdf7ef668ce4bd2268956e50e8059c453464a",
          "message": "Merge pull request #3139 from dahlia/main",
          "timestamp": "2023-05-05T02:32:59+09:00",
          "tree_id": "128924b65b11b0d0687f3552fc28ec882283dc27",
          "url": "https://github.com/planetarium/libplanet/commit/508cdf7ef668ce4bd2268956e50e8059c453464a"
        },
        "date": 1683222870272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8263882.084905661,
            "unit": "ns",
            "range": "± 341164.9363241973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20369540.65432099,
            "unit": "ns",
            "range": "± 1064982.4812313484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53699602.461538464,
            "unit": "ns",
            "range": "± 2412967.442860367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105440576.475,
            "unit": "ns",
            "range": "± 3681089.9950996265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235037116.47692308,
            "unit": "ns",
            "range": "± 10834112.299298503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69804.40217391304,
            "unit": "ns",
            "range": "± 9170.556180551677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374857.47872340423,
            "unit": "ns",
            "range": "± 55544.920581478626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356316.65263157897,
            "unit": "ns",
            "range": "± 66407.5013278778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316471.12765957444,
            "unit": "ns",
            "range": "± 47984.87137265446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347086.489247312,
            "unit": "ns",
            "range": "± 246129.71076810977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785463.16,
            "unit": "ns",
            "range": "± 150282.86524585728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20189.010416666668,
            "unit": "ns",
            "range": "± 4103.799839929591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114033.69230769231,
            "unit": "ns",
            "range": "± 23391.128231158407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108460.1170212766,
            "unit": "ns",
            "range": "± 16163.720138216602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117358.72043010753,
            "unit": "ns",
            "range": "± 21012.91344282781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6850.645161290323,
            "unit": "ns",
            "range": "± 1123.3070319099268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18427.219101123595,
            "unit": "ns",
            "range": "± 3379.2541538197856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691948.1304347827,
            "unit": "ns",
            "range": "± 190752.7649313368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3492850.177777778,
            "unit": "ns",
            "range": "± 554556.594365605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2853285.1315789474,
            "unit": "ns",
            "range": "± 519358.88433537574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8576290.916666666,
            "unit": "ns",
            "range": "± 1960961.0894641846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3409141.547368421,
            "unit": "ns",
            "range": "± 238211.70461153088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470463.369047619,
            "unit": "ns",
            "range": "± 201355.77235312227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4448884.225806451,
            "unit": "ns",
            "range": "± 193576.77006430845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557398.455056179,
            "unit": "ns",
            "range": "± 354050.6982493311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8476487.05263158,
            "unit": "ns",
            "range": "± 630343.2195999454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6678248.70805921,
            "unit": "ns",
            "range": "± 147080.28633784354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105625.1474609375,
            "unit": "ns",
            "range": "± 47359.854396412884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367394.0989118305,
            "unit": "ns",
            "range": "± 14593.48221807736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2994045.9363839286,
            "unit": "ns",
            "range": "± 71121.39489741583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832900.9565054086,
            "unit": "ns",
            "range": "± 7600.673294155757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773842.3737444197,
            "unit": "ns",
            "range": "± 9844.140927832204"
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
          "id": "fde751d5fd61f06fd49ba3d297cb6024ac173cf8",
          "message": "Merge pull request #3137 from OnedgeLee/fix/sequential-mutation-consume\n\nFix mutation to be consumed sequentially",
          "timestamp": "2023-05-09T13:11:23+09:00",
          "tree_id": "15eb6ef6a726f0295309a336f2936cf24f5719dd",
          "url": "https://github.com/planetarium/libplanet/commit/fde751d5fd61f06fd49ba3d297cb6024ac173cf8"
        },
        "date": 1683606904252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8812059.685714286,
            "unit": "ns",
            "range": "± 426004.953031849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22084666.650537636,
            "unit": "ns",
            "range": "± 1965568.701091117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58214323.41304348,
            "unit": "ns",
            "range": "± 5452947.840729477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115198583.68181819,
            "unit": "ns",
            "range": "± 5310357.119435232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219439940.875,
            "unit": "ns",
            "range": "± 5630818.872475188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76023.13157894737,
            "unit": "ns",
            "range": "± 10209.868663640067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365672.4105263158,
            "unit": "ns",
            "range": "± 38680.70387197993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315723.0449438202,
            "unit": "ns",
            "range": "± 19048.165980619495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321596.6046511628,
            "unit": "ns",
            "range": "± 33919.61864312159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4340752.69047619,
            "unit": "ns",
            "range": "± 158389.2617692768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882621.804347826,
            "unit": "ns",
            "range": "± 91945.59886468182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20107.342105263157,
            "unit": "ns",
            "range": "± 4731.167788719482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111488.44329896907,
            "unit": "ns",
            "range": "± 14168.697142210673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112423.33695652174,
            "unit": "ns",
            "range": "± 15918.58890929829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125613.71276595745,
            "unit": "ns",
            "range": "± 14234.616581526217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8183.872340425532,
            "unit": "ns",
            "range": "± 1371.3588111446766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24221.0206185567,
            "unit": "ns",
            "range": "± 4890.04634005689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570947.4166666667,
            "unit": "ns",
            "range": "± 138618.8095750863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3005533.927536232,
            "unit": "ns",
            "range": "± 144338.64680626016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2522212.252873563,
            "unit": "ns",
            "range": "± 181316.4543363932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7140047.329787234,
            "unit": "ns",
            "range": "± 625860.3900904581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432028.3085106383,
            "unit": "ns",
            "range": "± 243168.86493843494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3589070.829787234,
            "unit": "ns",
            "range": "± 282262.8909773477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4776504.629213483,
            "unit": "ns",
            "range": "± 319506.0515576555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4699052.887096774,
            "unit": "ns",
            "range": "± 363085.94372721633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8519492.255319148,
            "unit": "ns",
            "range": "± 716274.2613603431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217402.119303386,
            "unit": "ns",
            "range": "± 412949.4661839818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2125606.415900735,
            "unit": "ns",
            "range": "± 43247.625287672265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409451.7126530828,
            "unit": "ns",
            "range": "± 70309.02695258477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3030100.379801432,
            "unit": "ns",
            "range": "± 222585.19507343505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878270.4188939144,
            "unit": "ns",
            "range": "± 52590.43408279525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 884284.6325004027,
            "unit": "ns",
            "range": "± 52743.713158617305"
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
          "id": "13cc3fe3a07719a9afd5959f57ded9658656a6d9",
          "message": "Merge pull request #3140 from greymistcube/feature/filter-malformed-block\n\n🔧 Filter malformed `Block`s from `BlockChain<T>.Append()` and `Context<T>.IsValid()`",
          "timestamp": "2023-05-09T14:16:25+09:00",
          "tree_id": "20ca298679e0f0d825d80b728910e4013fb33ab0",
          "url": "https://github.com/planetarium/libplanet/commit/13cc3fe3a07719a9afd5959f57ded9658656a6d9"
        },
        "date": 1683610603486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9576949.48,
            "unit": "ns",
            "range": "± 834307.9353332861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22149543.78409091,
            "unit": "ns",
            "range": "± 1208500.458769352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61185453.722222224,
            "unit": "ns",
            "range": "± 3004514.783741216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113258159.17605634,
            "unit": "ns",
            "range": "± 5463055.536464986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241114847.03608248,
            "unit": "ns",
            "range": "± 14653119.544103991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80976.16666666667,
            "unit": "ns",
            "range": "± 9001.245140147763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387332.41752577317,
            "unit": "ns",
            "range": "± 64070.82662905659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395742.8686868687,
            "unit": "ns",
            "range": "± 68521.40904761324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343869.55319148937,
            "unit": "ns",
            "range": "± 49831.723073354646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564525.316326531,
            "unit": "ns",
            "range": "± 466017.66134850937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4015387.785714286,
            "unit": "ns",
            "range": "± 315494.93243870017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24759.228260869564,
            "unit": "ns",
            "range": "± 4919.762448708273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117587.72826086957,
            "unit": "ns",
            "range": "± 21092.634202646786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123395.77272727272,
            "unit": "ns",
            "range": "± 16649.754197714305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127083.20652173914,
            "unit": "ns",
            "range": "± 19977.04185030277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8794.978021978022,
            "unit": "ns",
            "range": "± 1857.0492602694078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22229.308510638297,
            "unit": "ns",
            "range": "± 4596.261702770731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700256.9595959596,
            "unit": "ns",
            "range": "± 175071.55833916736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3295723.3191489363,
            "unit": "ns",
            "range": "± 260993.15540892186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2896095.594736842,
            "unit": "ns",
            "range": "± 347331.3047732844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7318908.164835165,
            "unit": "ns",
            "range": "± 528377.5587081702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407948.9555555554,
            "unit": "ns",
            "range": "± 279594.7057284426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620193.1145833335,
            "unit": "ns",
            "range": "± 323655.2644257018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4804892.948453608,
            "unit": "ns",
            "range": "± 454113.1143703435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4994298.403225807,
            "unit": "ns",
            "range": "± 543938.1045580235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8863952.224489795,
            "unit": "ns",
            "range": "± 848376.4947849046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7020387.3193359375,
            "unit": "ns",
            "range": "± 127211.49996870891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111407.865234375,
            "unit": "ns",
            "range": "± 46310.31206390313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306033.900390625,
            "unit": "ns",
            "range": "± 14796.833284808145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2991697.401803524,
            "unit": "ns",
            "range": "± 197996.86030875007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866348.7884306066,
            "unit": "ns",
            "range": "± 35293.52618517637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759038.1135796441,
            "unit": "ns",
            "range": "± 24849.768102641145"
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611451066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9223197.55670103,
            "unit": "ns",
            "range": "± 651736.5398213865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22684044.866666667,
            "unit": "ns",
            "range": "± 2032833.1213740753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56161706.30851064,
            "unit": "ns",
            "range": "± 6296278.515366643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108196950.05555555,
            "unit": "ns",
            "range": "± 4449573.6569215525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192969049.73913044,
            "unit": "ns",
            "range": "± 7334122.217800985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70094.87640449438,
            "unit": "ns",
            "range": "± 10032.82604619391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321867.1024096386,
            "unit": "ns",
            "range": "± 17116.64908861898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317064.1777777778,
            "unit": "ns",
            "range": "± 30058.661222057475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333489.875,
            "unit": "ns",
            "range": "± 54950.95799447473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219152.310344827,
            "unit": "ns",
            "range": "± 177969.0951123115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830927.891891892,
            "unit": "ns",
            "range": "± 128707.33229712884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17201.978723404256,
            "unit": "ns",
            "range": "± 2366.5659480857944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87259.64285714286,
            "unit": "ns",
            "range": "± 11583.224448473376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104582.5412371134,
            "unit": "ns",
            "range": "± 16379.13988757087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108763.42105263157,
            "unit": "ns",
            "range": "± 15239.845381314097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6323.15625,
            "unit": "ns",
            "range": "± 885.5072745176542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17188.5,
            "unit": "ns",
            "range": "± 2144.4372222100606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676622.4939759036,
            "unit": "ns",
            "range": "± 287020.132379517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2999315.7027027025,
            "unit": "ns",
            "range": "± 100657.84190041057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2637837.895348837,
            "unit": "ns",
            "range": "± 318902.69017478114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6987922.289156627,
            "unit": "ns",
            "range": "± 565260.4761128968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435554.911764706,
            "unit": "ns",
            "range": "± 69772.99080595121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375473.0172413792,
            "unit": "ns",
            "range": "± 74284.5285928276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312231.033333333,
            "unit": "ns",
            "range": "± 76443.65421001898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4410415.8432835825,
            "unit": "ns",
            "range": "± 208944.24982940857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7760818.134328358,
            "unit": "ns",
            "range": "± 351757.6283109814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6409377.874699519,
            "unit": "ns",
            "range": "± 53513.34063608843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915984.557444853,
            "unit": "ns",
            "range": "± 36888.02665219926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304729.0887276786,
            "unit": "ns",
            "range": "± 15099.235501457943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2786038.6512276786,
            "unit": "ns",
            "range": "± 31642.157978868214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864418.4529296875,
            "unit": "ns",
            "range": "± 13581.77203141564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821901.4826822917,
            "unit": "ns",
            "range": "± 10016.389362714639"
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
          "id": "769e80cf396742e076b5de4acc50dc365491e589",
          "message": "Merge pull request #3142 from greymistcube/prepare/1.2.0\n\n🔧 Prepare 1.2.0",
          "timestamp": "2023-05-09T18:45:36+09:00",
          "tree_id": "6e83753f227a51959e4e13e4c26d550555ed1a33",
          "url": "https://github.com/planetarium/libplanet/commit/769e80cf396742e076b5de4acc50dc365491e589"
        },
        "date": 1683626503934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8150665.571428572,
            "unit": "ns",
            "range": "± 137120.34754155774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20659774.92857143,
            "unit": "ns",
            "range": "± 166653.3951309928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52981704.15,
            "unit": "ns",
            "range": "± 1163973.898170007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103444605.92857143,
            "unit": "ns",
            "range": "± 1396233.6402562796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216114453.83333334,
            "unit": "ns",
            "range": "± 2019077.2327028206"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74243.59782608696,
            "unit": "ns",
            "range": "± 6947.400706216856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349326.95081967214,
            "unit": "ns",
            "range": "± 15527.196115661309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327182.23287671234,
            "unit": "ns",
            "range": "± 15762.686456312425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316889.30303030304,
            "unit": "ns",
            "range": "± 19773.664683342755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250455.966666667,
            "unit": "ns",
            "range": "± 75806.67775228048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3753977.0714285714,
            "unit": "ns",
            "range": "± 63122.056885802645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22658.479166666668,
            "unit": "ns",
            "range": "± 3104.1430107423125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111391.63402061856,
            "unit": "ns",
            "range": "± 11726.253532519868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117587.46808510639,
            "unit": "ns",
            "range": "± 10505.706722326184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123849.51020408163,
            "unit": "ns",
            "range": "± 17650.253531805378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6851.978947368421,
            "unit": "ns",
            "range": "± 903.2081588844711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21852.092783505155,
            "unit": "ns",
            "range": "± 4163.09361153276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607088.2173913044,
            "unit": "ns",
            "range": "± 150696.63513484038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3172844.8659793814,
            "unit": "ns",
            "range": "± 210213.54061880094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2544953.7717391304,
            "unit": "ns",
            "range": "± 222129.5199956475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6718689.597826087,
            "unit": "ns",
            "range": "± 402643.6177710229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3301943.3571428573,
            "unit": "ns",
            "range": "± 25261.691372837322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507255.1,
            "unit": "ns",
            "range": "± 77082.87318846822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4603953.951612903,
            "unit": "ns",
            "range": "± 136888.21854584824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4448801.64,
            "unit": "ns",
            "range": "± 222388.60204390946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7624733.428571428,
            "unit": "ns",
            "range": "± 174916.3963723344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6973634.678222656,
            "unit": "ns",
            "range": "± 274830.38086811826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046360.8059895833,
            "unit": "ns",
            "range": "± 18237.739268615893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282006.0830078125,
            "unit": "ns",
            "range": "± 13176.013831413655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574555.7658691406,
            "unit": "ns",
            "range": "± 50544.680285735456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825144.16953125,
            "unit": "ns",
            "range": "± 11686.441031518272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812267.2500697544,
            "unit": "ns",
            "range": "± 11309.884959535546"
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
          "id": "16b4c5974f2f6d937b3b7da8a452bafe5f8873af",
          "message": "Stop calculate `Transaction<T>.UpdatedAddresses` automatically (#3122)\n\n* WIP\r\n\r\n* Adjust test fixtures\r\n\r\n* Elide rehearsal params\r\n\r\n* Remove T from Transaction.Create()\r\n\r\n* Changelog",
          "timestamp": "2023-05-10T00:02:41+09:00",
          "tree_id": "ea3cb99f0b97d95db9cdd549098e27f964b5f93f",
          "url": "https://github.com/planetarium/libplanet/commit/16b4c5974f2f6d937b3b7da8a452bafe5f8873af"
        },
        "date": 1683645632872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9098838.81632653,
            "unit": "ns",
            "range": "± 600276.5879102758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23902459.844444446,
            "unit": "ns",
            "range": "± 2009895.93614813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57352812.884615384,
            "unit": "ns",
            "range": "± 3288788.8703147303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118801286.39393939,
            "unit": "ns",
            "range": "± 10412391.933264617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236314404.57894737,
            "unit": "ns",
            "range": "± 10228641.52714828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77605.12790697675,
            "unit": "ns",
            "range": "± 7595.759048615471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344622.89784946234,
            "unit": "ns",
            "range": "± 27874.90349257608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336688.64130434784,
            "unit": "ns",
            "range": "± 37009.743843688215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297649.4673913043,
            "unit": "ns",
            "range": "± 28432.316116071164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4497686.697674419,
            "unit": "ns",
            "range": "± 162934.36475603923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689723.6428571427,
            "unit": "ns",
            "range": "± 52371.469793063035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17377.457446808512,
            "unit": "ns",
            "range": "± 2339.525205323037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88529.51086956522,
            "unit": "ns",
            "range": "± 10609.26552490334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118956.78494623656,
            "unit": "ns",
            "range": "± 10335.65254649869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109775.79787234042,
            "unit": "ns",
            "range": "± 16530.752860210927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6094.197916666667,
            "unit": "ns",
            "range": "± 1729.405134232983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17158.627659574468,
            "unit": "ns",
            "range": "± 2492.7127349991056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571944.3775510204,
            "unit": "ns",
            "range": "± 141003.85614874068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2987690.7934782607,
            "unit": "ns",
            "range": "± 168070.986417503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2543337.984210526,
            "unit": "ns",
            "range": "± 220321.13930085528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6464737.904255319,
            "unit": "ns",
            "range": "± 248969.44497980154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3642199.5425531915,
            "unit": "ns",
            "range": "± 346437.1252846895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4098463.5215053763,
            "unit": "ns",
            "range": "± 384612.72525235434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5079515.8,
            "unit": "ns",
            "range": "± 410045.4720852105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991135,
            "unit": "ns",
            "range": "± 501545.17177453125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9870941.730337078,
            "unit": "ns",
            "range": "± 2120176.678935759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6619943.993665541,
            "unit": "ns",
            "range": "± 216226.78180472687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905485.8822115385,
            "unit": "ns",
            "range": "± 16926.503179220956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316786.978624132,
            "unit": "ns",
            "range": "± 27498.388240908265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618343.2778320312,
            "unit": "ns",
            "range": "± 129112.7834704353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811057.1383713942,
            "unit": "ns",
            "range": "± 7280.8723980529985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722821.1890024039,
            "unit": "ns",
            "range": "± 8728.49045564867"
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
          "id": "aecc384b09ad76f7486176f5d4083dd74c92c818",
          "message": "Merge pull request #3117 from moreal/render-ivalue-action\n\nRender `IValue` action instead of `IAction`",
          "timestamp": "2023-05-10T16:41:09+09:00",
          "tree_id": "5453471ad7ff26e124e605e0ab09467dfa7d75d1",
          "url": "https://github.com/planetarium/libplanet/commit/aecc384b09ad76f7486176f5d4083dd74c92c818"
        },
        "date": 1683705598175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9193312.761904761,
            "unit": "ns",
            "range": "± 208087.46364351333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25061416.08,
            "unit": "ns",
            "range": "± 668637.5164446926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61382660.97530864,
            "unit": "ns",
            "range": "± 3205721.1740320614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123110224.3409091,
            "unit": "ns",
            "range": "± 4614352.772334391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241509062.41666666,
            "unit": "ns",
            "range": "± 3491502.0404679305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73219.91935483871,
            "unit": "ns",
            "range": "± 7918.36475806686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375333.2195121951,
            "unit": "ns",
            "range": "± 17023.02828815624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364538.3210526316,
            "unit": "ns",
            "range": "± 22262.709321165315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339103.9411764706,
            "unit": "ns",
            "range": "± 16146.117223638417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4815696.416666667,
            "unit": "ns",
            "range": "± 46903.0328278137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4360517.111111111,
            "unit": "ns",
            "range": "± 125331.72363435657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19636.82608695652,
            "unit": "ns",
            "range": "± 1271.2068645577733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100018.64210526316,
            "unit": "ns",
            "range": "± 6519.927288649169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110681.66666666667,
            "unit": "ns",
            "range": "± 12878.308527922094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120986.91578947369,
            "unit": "ns",
            "range": "± 15185.783232915199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6534.54255319149,
            "unit": "ns",
            "range": "± 974.507680113329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19089.417582417584,
            "unit": "ns",
            "range": "± 1737.519784481662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780535.7052631578,
            "unit": "ns",
            "range": "± 122684.76638834696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3557975.9452054794,
            "unit": "ns",
            "range": "± 169145.65888523174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3013667.945652174,
            "unit": "ns",
            "range": "± 379378.62648559414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7680758.21875,
            "unit": "ns",
            "range": "± 350486.15880088473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3950903.0285714287,
            "unit": "ns",
            "range": "± 190765.59132397955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4578375.626315789,
            "unit": "ns",
            "range": "± 490380.2258655651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5464004.75,
            "unit": "ns",
            "range": "± 252055.10579702447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5464644.69072165,
            "unit": "ns",
            "range": "± 437875.7049010731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9329180.5625,
            "unit": "ns",
            "range": "± 419065.301526831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6781692.668269231,
            "unit": "ns",
            "range": "± 51512.1052603745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234104.5375,
            "unit": "ns",
            "range": "± 21279.757239570492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459626.2430889423,
            "unit": "ns",
            "range": "± 6637.492987248301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180364.6065848214,
            "unit": "ns",
            "range": "± 26942.454902022277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039402.8462239583,
            "unit": "ns",
            "range": "± 11148.855890725596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876178.5985576923,
            "unit": "ns",
            "range": "± 2720.0536188775895"
          }
        ]
      }
    ]
  }
}