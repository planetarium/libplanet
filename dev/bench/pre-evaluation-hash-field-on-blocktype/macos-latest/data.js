window.BENCHMARK_DATA = {
  "lastUpdate": 1688714839675,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710547533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7897390.785714285,
            "unit": "ns",
            "range": "± 85722.40573922188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18936369.23809524,
            "unit": "ns",
            "range": "± 363764.5078404303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49528681.692307696,
            "unit": "ns",
            "range": "± 490888.19105786615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95096080.03846154,
            "unit": "ns",
            "range": "± 777700.4360389047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198533110.2857143,
            "unit": "ns",
            "range": "± 2360219.6866248385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54393.54639175258,
            "unit": "ns",
            "range": "± 6454.072143197364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307003.18947368424,
            "unit": "ns",
            "range": "± 18392.564330309382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292763.5135135135,
            "unit": "ns",
            "range": "± 14394.468445027187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277507.59793814435,
            "unit": "ns",
            "range": "± 20596.824109788842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4023547.2666666666,
            "unit": "ns",
            "range": "± 69866.45561095893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723575.6428571427,
            "unit": "ns",
            "range": "± 62349.69288877192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16508.76404494382,
            "unit": "ns",
            "range": "± 1751.0270818636177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82364.96842105263,
            "unit": "ns",
            "range": "± 7704.9661651025535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79386.70103092784,
            "unit": "ns",
            "range": "± 6537.591549972341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101327.05263157895,
            "unit": "ns",
            "range": "± 13167.316117236762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5121.31914893617,
            "unit": "ns",
            "range": "± 504.25209629571475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16591.615384615383,
            "unit": "ns",
            "range": "± 1485.1992591286325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605403.0869565217,
            "unit": "ns",
            "range": "± 165115.6853307556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014215.368131868,
            "unit": "ns",
            "range": "± 199495.2193606102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2461349.611111111,
            "unit": "ns",
            "range": "± 215149.619750663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6253510.5,
            "unit": "ns",
            "range": "± 243471.28305844954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258905.0727272728,
            "unit": "ns",
            "range": "± 137256.7973086909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3372293.6791044776,
            "unit": "ns",
            "range": "± 146639.74918217046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493121.117647059,
            "unit": "ns",
            "range": "± 142703.33026629686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173481.129032258,
            "unit": "ns",
            "range": "± 172201.74191570407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7528242.142857143,
            "unit": "ns",
            "range": "± 345327.8732456704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955673.223772322,
            "unit": "ns",
            "range": "± 39460.62176290503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998297.4732142857,
            "unit": "ns",
            "range": "± 32482.15806721026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315195.774988511,
            "unit": "ns",
            "range": "± 42197.84793128199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616386.8205788354,
            "unit": "ns",
            "range": "± 143135.92147340646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859134.1863839285,
            "unit": "ns",
            "range": "± 9207.745300343602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714465.5361979167,
            "unit": "ns",
            "range": "± 10685.928150240426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "4b03a2c3b9a0cec0213d3552868c5dacaa04105c",
          "message": "Remove unused using",
          "timestamp": "2023-07-07T15:01:46+09:00",
          "tree_id": "9bac88ba713d96d76306b1cfb700e32e50c08e00",
          "url": "https://github.com/planetarium/libplanet/commit/4b03a2c3b9a0cec0213d3552868c5dacaa04105c"
        },
        "date": 1688710887824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9645431.826315789,
            "unit": "ns",
            "range": "± 750991.5431698883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24707236.425531916,
            "unit": "ns",
            "range": "± 2680158.502096939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52506538.37837838,
            "unit": "ns",
            "range": "± 1737920.5870499753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101817400.92857143,
            "unit": "ns",
            "range": "± 1485428.3370374746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221151318.8030303,
            "unit": "ns",
            "range": "± 14172684.892917976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83758.15555555555,
            "unit": "ns",
            "range": "± 12143.372629010082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354885.05555555556,
            "unit": "ns",
            "range": "± 33224.065360873894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327548.8647058823,
            "unit": "ns",
            "range": "± 17739.00670358101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307318.57954545453,
            "unit": "ns",
            "range": "± 21000.60356096068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4517700.324742268,
            "unit": "ns",
            "range": "± 359620.63122300064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941908.712765957,
            "unit": "ns",
            "range": "± 268617.9991763745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22271.865168539327,
            "unit": "ns",
            "range": "± 3653.0377620146223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120215.43478260869,
            "unit": "ns",
            "range": "± 18917.59146223334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139614.16842105263,
            "unit": "ns",
            "range": "± 18139.329142426686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141377.6595744681,
            "unit": "ns",
            "range": "± 22224.290293736798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9745.738636363636,
            "unit": "ns",
            "range": "± 837.5052580973135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30247.35632183908,
            "unit": "ns",
            "range": "± 3657.7394848458343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685059.9285714286,
            "unit": "ns",
            "range": "± 163094.8490733151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3044956.015151515,
            "unit": "ns",
            "range": "± 141485.3754757814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2597152.826530612,
            "unit": "ns",
            "range": "± 201838.9285870686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6509940.720338983,
            "unit": "ns",
            "range": "± 262826.9641602474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3553924.3085106383,
            "unit": "ns",
            "range": "± 381745.40211984265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3607685.352631579,
            "unit": "ns",
            "range": "± 269786.7136791726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4524941,
            "unit": "ns",
            "range": "± 143819.04850487813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4353006.510416667,
            "unit": "ns",
            "range": "± 282938.7530610224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7707254.5121951215,
            "unit": "ns",
            "range": "± 276001.06536579906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8045736.492001488,
            "unit": "ns",
            "range": "± 186701.8242038893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051443.5289417615,
            "unit": "ns",
            "range": "± 49309.32516450306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366845.1334317836,
            "unit": "ns",
            "range": "± 48106.12222687967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115515.8085018382,
            "unit": "ns",
            "range": "± 167339.62967501555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853194.8648745888,
            "unit": "ns",
            "range": "± 18693.102119193452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778449.2204589844,
            "unit": "ns",
            "range": "± 11232.03757557238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "f6abe65a3231448c9ab61a23e7eb63932210c01f",
          "message": "Fix temp description",
          "timestamp": "2023-07-07T15:05:43+09:00",
          "tree_id": "9a9a49f5658176777a6afc0989df1ce0dfc944b3",
          "url": "https://github.com/planetarium/libplanet/commit/f6abe65a3231448c9ab61a23e7eb63932210c01f"
        },
        "date": 1688710931409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8814722.433333334,
            "unit": "ns",
            "range": "± 139300.23997388143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23746522.466666665,
            "unit": "ns",
            "range": "± 338319.206462702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58212797.21428572,
            "unit": "ns",
            "range": "± 1872229.26661855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114285460.88235295,
            "unit": "ns",
            "range": "± 2207604.484657603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234496470.98,
            "unit": "ns",
            "range": "± 6207967.231664801"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72982.15384615384,
            "unit": "ns",
            "range": "± 9210.209424477549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371372.95454545453,
            "unit": "ns",
            "range": "± 20260.924479882928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360430.1931818182,
            "unit": "ns",
            "range": "± 19870.833618884197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327210.8125,
            "unit": "ns",
            "range": "± 23066.44669339451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4818090.038461538,
            "unit": "ns",
            "range": "± 117717.03892308223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4310558.214285715,
            "unit": "ns",
            "range": "± 100361.24290738074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20128.043956043955,
            "unit": "ns",
            "range": "± 2379.78524667009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102479.01063829787,
            "unit": "ns",
            "range": "± 10189.429823279686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115844.07216494845,
            "unit": "ns",
            "range": "± 19647.498566530587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127626.26315789473,
            "unit": "ns",
            "range": "± 14212.226997105176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7031.494736842105,
            "unit": "ns",
            "range": "± 1230.6764778190532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19154.56043956044,
            "unit": "ns",
            "range": "± 2053.4453335731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1901901.4587628867,
            "unit": "ns",
            "range": "± 210067.57025770887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3421541.5901639345,
            "unit": "ns",
            "range": "± 141870.30122890146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2861353.631313131,
            "unit": "ns",
            "range": "± 277739.63504728104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7406256.375,
            "unit": "ns",
            "range": "± 314339.62125140225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3785764.785714286,
            "unit": "ns",
            "range": "± 135964.4909921625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4026158.5588235296,
            "unit": "ns",
            "range": "± 163653.30759705554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5188005.4375,
            "unit": "ns",
            "range": "± 160793.32980467004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4962905.175675675,
            "unit": "ns",
            "range": "± 246244.58701424897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8974517.676470589,
            "unit": "ns",
            "range": "± 409601.96450296085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6764120.661830357,
            "unit": "ns",
            "range": "± 88600.1869698634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2178821.24921875,
            "unit": "ns",
            "range": "± 25233.85950952409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427628.2497395833,
            "unit": "ns",
            "range": "± 21575.96894135646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2884045.7377604167,
            "unit": "ns",
            "range": "± 20798.309556421205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001788.5094866072,
            "unit": "ns",
            "range": "± 8107.055320335992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883931.6130981445,
            "unit": "ns",
            "range": "± 16459.7287333926"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "25446122a78d2ef1cae0a1b4318910cfc99602fb",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:39:42+09:00",
          "tree_id": "668234520b2c9d9535169db861b8bda977b011e1",
          "url": "https://github.com/planetarium/libplanet/commit/25446122a78d2ef1cae0a1b4318910cfc99602fb"
        },
        "date": 1688713065898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8252802.571428572,
            "unit": "ns",
            "range": "± 60853.70364237912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22315883.63414634,
            "unit": "ns",
            "range": "± 1182114.71646498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52693038.63888889,
            "unit": "ns",
            "range": "± 1605162.6616608787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105431053.81818181,
            "unit": "ns",
            "range": "± 2531999.507335549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222672199.8,
            "unit": "ns",
            "range": "± 9039628.616548317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69799.52747252748,
            "unit": "ns",
            "range": "± 8507.13116069971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348933.0430107527,
            "unit": "ns",
            "range": "± 31195.666508177612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337606.42307692306,
            "unit": "ns",
            "range": "± 35892.488135551204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303802.7888888889,
            "unit": "ns",
            "range": "± 22247.04507407591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4322826.757575758,
            "unit": "ns",
            "range": "± 136189.35199246265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817954.3571428573,
            "unit": "ns",
            "range": "± 54990.450452933044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16047.964285714286,
            "unit": "ns",
            "range": "± 1384.5955648589932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85769.24731182796,
            "unit": "ns",
            "range": "± 8276.439104674755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85743.35384615384,
            "unit": "ns",
            "range": "± 3993.139548145236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102758.94505494506,
            "unit": "ns",
            "range": "± 10718.268773311644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7289.595744680851,
            "unit": "ns",
            "range": "± 754.5606436383586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16186.670329670329,
            "unit": "ns",
            "range": "± 2101.757465947355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702882.9742268042,
            "unit": "ns",
            "range": "± 206645.7290566037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3106814.3723404254,
            "unit": "ns",
            "range": "± 205921.65762147246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2514164.888888889,
            "unit": "ns",
            "range": "± 197124.90191608545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6347677.538461538,
            "unit": "ns",
            "range": "± 238505.37072819675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555433.948979592,
            "unit": "ns",
            "range": "± 287940.67633706395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3854357.782828283,
            "unit": "ns",
            "range": "± 334930.93000942806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4796271.521739131,
            "unit": "ns",
            "range": "± 309973.558046878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813978.3877551025,
            "unit": "ns",
            "range": "± 529555.1144633595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7898949.788888888,
            "unit": "ns",
            "range": "± 438329.95334356104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7516431.251531863,
            "unit": "ns",
            "range": "± 303385.65310347883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2058383.0040283203,
            "unit": "ns",
            "range": "± 64029.64214410849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347872.9829388787,
            "unit": "ns",
            "range": "± 42769.13084283423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517994.138310185,
            "unit": "ns",
            "range": "± 51987.9870852322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851277.984375,
            "unit": "ns",
            "range": "± 6956.112642691327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796618.4591796875,
            "unit": "ns",
            "range": "± 14231.2336575536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99e92387c0d3d3da5d1d023d5b4c51e06047ba1d",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:02:04+09:00",
          "tree_id": "190ab4d57c02bd1a48746975f3a726ba096e15c7",
          "url": "https://github.com/planetarium/libplanet/commit/99e92387c0d3d3da5d1d023d5b4c51e06047ba1d"
        },
        "date": 1688714263666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8024183.857142857,
            "unit": "ns",
            "range": "± 260894.59674619813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20214145.704081632,
            "unit": "ns",
            "range": "± 798175.5373028067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50288684.280487806,
            "unit": "ns",
            "range": "± 1792702.0684959688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101939655.88709678,
            "unit": "ns",
            "range": "± 3091462.699449477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206536410.43333334,
            "unit": "ns",
            "range": "± 3735894.576655034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61807.697916666664,
            "unit": "ns",
            "range": "± 10210.413082132627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325686.92307692306,
            "unit": "ns",
            "range": "± 22910.895931475614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295712.5895522388,
            "unit": "ns",
            "range": "± 12234.056719258771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285972.79569892475,
            "unit": "ns",
            "range": "± 23426.422864567834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4024801.4,
            "unit": "ns",
            "range": "± 106219.7148030126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579520.6739130435,
            "unit": "ns",
            "range": "± 88134.11254840915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16257.67816091954,
            "unit": "ns",
            "range": "± 1838.3080219558624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89065.89583333333,
            "unit": "ns",
            "range": "± 11186.390109112304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82263.20212765958,
            "unit": "ns",
            "range": "± 10182.186193237623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97978.59139784946,
            "unit": "ns",
            "range": "± 14686.67403245464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5267.38202247191,
            "unit": "ns",
            "range": "± 1046.1885205746748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17012.456521739132,
            "unit": "ns",
            "range": "± 1911.9870074794405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647322.7741935484,
            "unit": "ns",
            "range": "± 192875.0407557864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895969.5625,
            "unit": "ns",
            "range": "± 101237.19040827817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018562.236111111,
            "unit": "ns",
            "range": "± 99772.31496854678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6046202.885714286,
            "unit": "ns",
            "range": "± 292607.6765679128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293310.32,
            "unit": "ns",
            "range": "± 166013.5307603505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480061.109090909,
            "unit": "ns",
            "range": "± 147639.57176700098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471814.205479452,
            "unit": "ns",
            "range": "± 219929.25895608132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4033340.8666666667,
            "unit": "ns",
            "range": "± 112737.51837992696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7356725.25,
            "unit": "ns",
            "range": "± 352171.9905051641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6183260.954166667,
            "unit": "ns",
            "range": "± 62380.64054800432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858094.7815104167,
            "unit": "ns",
            "range": "± 11588.746670243767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1247735.4807692308,
            "unit": "ns",
            "range": "± 5461.88211010124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699565.1398689514,
            "unit": "ns",
            "range": "± 81070.958674371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893355.1810128348,
            "unit": "ns",
            "range": "± 12706.057742373745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836427.9815955529,
            "unit": "ns",
            "range": "± 5229.811098698302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57557949aa623e9cadc21ca71db515d8b616eacb",
          "message": "Update CHANGES.md",
          "timestamp": "2023-07-07T16:10:43+09:00",
          "tree_id": "c05701aca8ee1715a6a3a0ef563cbccbbdcd37fb",
          "url": "https://github.com/planetarium/libplanet/commit/57557949aa623e9cadc21ca71db515d8b616eacb"
        },
        "date": 1688714786320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8300529.5566037735,
            "unit": "ns",
            "range": "± 342703.1828931458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21399761.3,
            "unit": "ns",
            "range": "± 752717.1660678672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51721669.8125,
            "unit": "ns",
            "range": "± 1601385.8433230002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105657504,
            "unit": "ns",
            "range": "± 2265678.703980141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210476253.5,
            "unit": "ns",
            "range": "± 1264558.7129204401"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71298.65789473684,
            "unit": "ns",
            "range": "± 15353.375503359006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365778,
            "unit": "ns",
            "range": "± 28413.613611553646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332972.1179775281,
            "unit": "ns",
            "range": "± 23048.750037349502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315984.3725490196,
            "unit": "ns",
            "range": "± 12921.625783098323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224522.0625,
            "unit": "ns",
            "range": "± 80296.58266656911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3814655.4285714286,
            "unit": "ns",
            "range": "± 46309.82320899478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21042.183673469386,
            "unit": "ns",
            "range": "± 4649.1620558533305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99683.25252525252,
            "unit": "ns",
            "range": "± 13013.807951355511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109735.55670103093,
            "unit": "ns",
            "range": "± 12878.988111268254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114364.2191011236,
            "unit": "ns",
            "range": "± 10176.647522401432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8181.5625,
            "unit": "ns",
            "range": "± 887.1340943260999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23804.663265306124,
            "unit": "ns",
            "range": "± 4027.7838927221137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583010.6595744682,
            "unit": "ns",
            "range": "± 124465.88618567344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010334.35,
            "unit": "ns",
            "range": "± 132470.45686335987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107399.1827956988,
            "unit": "ns",
            "range": "± 177822.69132896705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6446384.588888889,
            "unit": "ns",
            "range": "± 504298.5869011898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412187.3255813955,
            "unit": "ns",
            "range": "± 184646.41888210792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631865.2291666665,
            "unit": "ns",
            "range": "± 235829.62800071892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4593452.588235294,
            "unit": "ns",
            "range": "± 246889.11241179347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4106085.0206185565,
            "unit": "ns",
            "range": "± 276583.5113838051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7679527.532967033,
            "unit": "ns",
            "range": "± 458972.2517792564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6624649.33125,
            "unit": "ns",
            "range": "± 76700.69162336717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936775.4701314787,
            "unit": "ns",
            "range": "± 58836.36263328873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1305708.2275390625,
            "unit": "ns",
            "range": "± 2325.834692558685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3052209.92578125,
            "unit": "ns",
            "range": "± 39982.5676571144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857556.2684795673,
            "unit": "ns",
            "range": "± 3042.8693601375944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715308.02578125,
            "unit": "ns",
            "range": "± 3586.52636621117"
          }
        ]
      }
    ]
  }
}