window.BENCHMARK_DATA = {
  "lastUpdate": 1678691845140,
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
      }
    ]
  }
}