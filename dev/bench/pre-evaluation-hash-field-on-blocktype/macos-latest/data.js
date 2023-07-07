window.BENCHMARK_DATA = {
  "lastUpdate": 1688720631585,
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
          "id": "dbd7b93e3217c097f9b691f044b7e3cdb2031e0d",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T16:55:53+09:00",
          "tree_id": "8dadd36e29b0bb0ebf59968212a4f1eff612f1f8",
          "url": "https://github.com/planetarium/libplanet/commit/dbd7b93e3217c097f9b691f044b7e3cdb2031e0d"
        },
        "date": 1688717530911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8418427.625,
            "unit": "ns",
            "range": "± 135166.2700217156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21142238.38095238,
            "unit": "ns",
            "range": "± 966090.930820921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52503568.45454545,
            "unit": "ns",
            "range": "± 1580107.7068779813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103954592.21428572,
            "unit": "ns",
            "range": "± 770765.0149207084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216791295.96,
            "unit": "ns",
            "range": "± 7195883.836905589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66012.3829787234,
            "unit": "ns",
            "range": "± 7915.59919835223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345019.8617021277,
            "unit": "ns",
            "range": "± 23979.35224832992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324689.97959183675,
            "unit": "ns",
            "range": "± 30235.745878418827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317228.3522727273,
            "unit": "ns",
            "range": "± 21553.300814780287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4356327.708333333,
            "unit": "ns",
            "range": "± 110534.79902765981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985139.282608696,
            "unit": "ns",
            "range": "± 93986.1487836259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18161.26530612245,
            "unit": "ns",
            "range": "± 3651.919129847877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90212.6182795699,
            "unit": "ns",
            "range": "± 8370.000562112938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97206.4797979798,
            "unit": "ns",
            "range": "± 10853.400392559948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110109.32631578947,
            "unit": "ns",
            "range": "± 14118.634388970007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6868.354166666667,
            "unit": "ns",
            "range": "± 1119.3992653878588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19556.26842105263,
            "unit": "ns",
            "range": "± 4536.309176610504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626158.7216494845,
            "unit": "ns",
            "range": "± 211608.88669945346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895304.2666666666,
            "unit": "ns",
            "range": "± 126423.10441768802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2068625.4141414142,
            "unit": "ns",
            "range": "± 151853.15721567185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5946392.674698795,
            "unit": "ns",
            "range": "± 308383.50900007243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470194.7073170734,
            "unit": "ns",
            "range": "± 125146.26610775167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3522802.714285714,
            "unit": "ns",
            "range": "± 220629.67866680713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4569111.653846154,
            "unit": "ns",
            "range": "± 229568.57741310334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4125789.6224489794,
            "unit": "ns",
            "range": "± 265405.7808975542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7588215.385964912,
            "unit": "ns",
            "range": "± 317711.82008199295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6728045.188939145,
            "unit": "ns",
            "range": "± 142488.03184071628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046871.22640625,
            "unit": "ns",
            "range": "± 54495.68966977881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339650.7845052083,
            "unit": "ns",
            "range": "± 17794.242627705356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801035.5407366073,
            "unit": "ns",
            "range": "± 31469.05864483731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909371.4119791667,
            "unit": "ns",
            "range": "± 13415.247738531198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798329.168359375,
            "unit": "ns",
            "range": "± 7211.543098904129"
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
          "id": "fe6fd533d5919657d140a182ba7fd45fa0e599d5",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:58:35+09:00",
          "tree_id": "19788048610843b39a405e6d772abd301fe67ad7",
          "url": "https://github.com/planetarium/libplanet/commit/fe6fd533d5919657d140a182ba7fd45fa0e599d5"
        },
        "date": 1688717609477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7889467.027777778,
            "unit": "ns",
            "range": "± 259378.62154756216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20081615.36956522,
            "unit": "ns",
            "range": "± 633660.6067303908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49549446.925925925,
            "unit": "ns",
            "range": "± 2038970.5631600015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96845558.54347827,
            "unit": "ns",
            "range": "± 2444606.6115875184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200196175.57692307,
            "unit": "ns",
            "range": "± 2329819.4576562317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59517.40425531915,
            "unit": "ns",
            "range": "± 7280.948822014814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317709.6082474227,
            "unit": "ns",
            "range": "± 24055.90727241644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310154.532967033,
            "unit": "ns",
            "range": "± 20518.48424142407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297442.28571428574,
            "unit": "ns",
            "range": "± 20857.147676417222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4172944.3,
            "unit": "ns",
            "range": "± 122001.43600381557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741361.9285714286,
            "unit": "ns",
            "range": "± 143086.42337820408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17870.34946236559,
            "unit": "ns",
            "range": "± 2182.3869807194683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88595.5425531915,
            "unit": "ns",
            "range": "± 10458.94991405071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78342.96666666666,
            "unit": "ns",
            "range": "± 7506.576637421557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96862.61458333333,
            "unit": "ns",
            "range": "± 13841.095855131663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4988.954022988506,
            "unit": "ns",
            "range": "± 651.6395584528337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16585.563829787236,
            "unit": "ns",
            "range": "± 1515.2308284957394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613882.7083333333,
            "unit": "ns",
            "range": "± 198513.07463380505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2724573.4864864866,
            "unit": "ns",
            "range": "± 130332.38902692441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2008964.1736842105,
            "unit": "ns",
            "range": "± 160794.53587674527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5788229.671052632,
            "unit": "ns",
            "range": "± 290880.36148993805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3208321.8125,
            "unit": "ns",
            "range": "± 111991.50093410988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3372863.0168539328,
            "unit": "ns",
            "range": "± 186283.31916282984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4380511.446428572,
            "unit": "ns",
            "range": "± 188586.85417068994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3840779.554347826,
            "unit": "ns",
            "range": "± 236164.48318274922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7378949.934782608,
            "unit": "ns",
            "range": "± 351269.0035770926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6522264.111177885,
            "unit": "ns",
            "range": "± 99197.8767065505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041877.0182291667,
            "unit": "ns",
            "range": "± 17215.364150215824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287540.3392857143,
            "unit": "ns",
            "range": "± 20962.504759068077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692923.431640625,
            "unit": "ns",
            "range": "± 18182.430219155303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795756.9263671875,
            "unit": "ns",
            "range": "± 8385.213565693131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745112.8034855769,
            "unit": "ns",
            "range": "± 3233.244859270962"
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
          "id": "50f1e74d0270105d2f9cb5107a2a1152ae149490",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:58:07+09:00",
          "tree_id": "650bf13dc78942724a855e7756ff220182351046",
          "url": "https://github.com/planetarium/libplanet/commit/50f1e74d0270105d2f9cb5107a2a1152ae149490"
        },
        "date": 1688717771764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8897419.65625,
            "unit": "ns",
            "range": "± 609173.8486994072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21582445.5,
            "unit": "ns",
            "range": "± 421974.8223309064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53468115.890625,
            "unit": "ns",
            "range": "± 2350062.725245909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104331669.85714285,
            "unit": "ns",
            "range": "± 1399176.8692688765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217429263.92105263,
            "unit": "ns",
            "range": "± 4828337.979939074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75516.62359550562,
            "unit": "ns",
            "range": "± 6827.641761153075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339190.2849462366,
            "unit": "ns",
            "range": "± 28799.12921496422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322644.2643678161,
            "unit": "ns",
            "range": "± 22995.229408413736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330307.55913978495,
            "unit": "ns",
            "range": "± 28801.35277146845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445393.742105263,
            "unit": "ns",
            "range": "± 300719.48366637045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3990814.8333333335,
            "unit": "ns",
            "range": "± 267591.97570568713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20136.021739130436,
            "unit": "ns",
            "range": "± 2855.19813395456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103093.9255319149,
            "unit": "ns",
            "range": "± 15018.899202599228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112646.88541666667,
            "unit": "ns",
            "range": "± 12788.420971924308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122197.84782608696,
            "unit": "ns",
            "range": "± 17892.318941921578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7148.55376344086,
            "unit": "ns",
            "range": "± 1270.2754525452121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19227.24226804124,
            "unit": "ns",
            "range": "± 3192.4262562559384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552430.43814433,
            "unit": "ns",
            "range": "± 139827.05695323943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2999084.661016949,
            "unit": "ns",
            "range": "± 130557.17743019063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2201227.54494382,
            "unit": "ns",
            "range": "± 184627.9303670265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6174214.685714286,
            "unit": "ns",
            "range": "± 285425.09279666835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3987640.097826087,
            "unit": "ns",
            "range": "± 666168.1635234944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4007254.6458333335,
            "unit": "ns",
            "range": "± 411335.72878385714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4660252.315789473,
            "unit": "ns",
            "range": "± 232884.9706663906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128050.404255319,
            "unit": "ns",
            "range": "± 281629.49753213074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7544138.575,
            "unit": "ns",
            "range": "± 247320.50226634325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7054433.758333334,
            "unit": "ns",
            "range": "± 127747.10281962332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2164540.565204327,
            "unit": "ns",
            "range": "± 58843.84723779222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360616.670030382,
            "unit": "ns",
            "range": "± 28920.926248094427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3294974.4632703993,
            "unit": "ns",
            "range": "± 161623.15550560752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858786.8938337053,
            "unit": "ns",
            "range": "± 19701.799170871254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848729.2864032452,
            "unit": "ns",
            "range": "± 39598.48246675215"
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
          "id": "30f8d6a18a6cc9efff4192b480e6dbc3125034b2",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T17:13:24+09:00",
          "tree_id": "a729cec235e4bf751c0832f83ff3a15818d0c231",
          "url": "https://github.com/planetarium/libplanet/commit/30f8d6a18a6cc9efff4192b480e6dbc3125034b2"
        },
        "date": 1688718519905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7403915.846153846,
            "unit": "ns",
            "range": "± 85428.36481895826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19581162.470588237,
            "unit": "ns",
            "range": "± 391305.9090302812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47905481.428571425,
            "unit": "ns",
            "range": "± 1371966.6385151194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93996092.64285715,
            "unit": "ns",
            "range": "± 927113.970014359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190192872.85714287,
            "unit": "ns",
            "range": "± 2366604.383367569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58243.96666666667,
            "unit": "ns",
            "range": "± 6579.802598469916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338631.5652173913,
            "unit": "ns",
            "range": "± 24774.677841266817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308324.48913043475,
            "unit": "ns",
            "range": "± 18089.377201201623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283072.0625,
            "unit": "ns",
            "range": "± 22056.91183939378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3987767.25,
            "unit": "ns",
            "range": "± 148940.64683095887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3595943.3333333335,
            "unit": "ns",
            "range": "± 71825.49165041288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17383.184782608696,
            "unit": "ns",
            "range": "± 2325.680167221075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92288.71739130435,
            "unit": "ns",
            "range": "± 11093.30645011566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88303.14583333333,
            "unit": "ns",
            "range": "± 14410.277569173122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100824.03092783505,
            "unit": "ns",
            "range": "± 14465.426540874972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4883.436781609195,
            "unit": "ns",
            "range": "± 808.4792313155554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16009.035294117648,
            "unit": "ns",
            "range": "± 2399.885143318415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629426.1276595744,
            "unit": "ns",
            "range": "± 153510.78745380673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3116983.094736842,
            "unit": "ns",
            "range": "± 184261.76825745287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2027069.7268041237,
            "unit": "ns",
            "range": "± 138621.01953463996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6184547.341463415,
            "unit": "ns",
            "range": "± 325192.90274100803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3082045.4583333335,
            "unit": "ns",
            "range": "± 79959.67281453124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3302865.5384615385,
            "unit": "ns",
            "range": "± 89857.52525569832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333168.793103448,
            "unit": "ns",
            "range": "± 341808.4166619949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3781322.488505747,
            "unit": "ns",
            "range": "± 414425.37090024084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7069223.64893617,
            "unit": "ns",
            "range": "± 257873.5919821603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7034595.200414541,
            "unit": "ns",
            "range": "± 280678.2504966818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077444.8057391827,
            "unit": "ns",
            "range": "± 27275.380900572578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300624.064639137,
            "unit": "ns",
            "range": "± 29696.063684784855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2487741.2106933594,
            "unit": "ns",
            "range": "± 46237.89248499397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892123.4549479167,
            "unit": "ns",
            "range": "± 6409.039748635816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745164.3404447115,
            "unit": "ns",
            "range": "± 9860.272368398082"
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
          "id": "b067d4a65140f7cb80842dd61704970b66c2856c",
          "message": "Add testcase for BlockType.PreEvaluationHash",
          "timestamp": "2023-07-07T17:35:48+09:00",
          "tree_id": "420190d535fca666c82612da15236887a375ab80",
          "url": "https://github.com/planetarium/libplanet/commit/b067d4a65140f7cb80842dd61704970b66c2856c"
        },
        "date": 1688719873528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8142450.735294118,
            "unit": "ns",
            "range": "± 159607.69202114345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20005975.07142857,
            "unit": "ns",
            "range": "± 228510.2806811862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50102365.92307692,
            "unit": "ns",
            "range": "± 1363215.594689642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99274575.5,
            "unit": "ns",
            "range": "± 1722341.1063426589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197198510.08333334,
            "unit": "ns",
            "range": "± 4857779.020691674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63479.39361702128,
            "unit": "ns",
            "range": "± 9177.372055994698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303801.78205128206,
            "unit": "ns",
            "range": "± 15687.107818368822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299570.8275862069,
            "unit": "ns",
            "range": "± 16306.161935740089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283969.1875,
            "unit": "ns",
            "range": "± 19988.161911919397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211541.5,
            "unit": "ns",
            "range": "± 43486.11956263038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3581760.782608696,
            "unit": "ns",
            "range": "± 87196.787649836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16139.244186046511,
            "unit": "ns",
            "range": "± 1758.2715371907755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82494.55208333333,
            "unit": "ns",
            "range": "± 6180.925616033815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81306.5,
            "unit": "ns",
            "range": "± 8163.448041304417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97108.81914893616,
            "unit": "ns",
            "range": "± 12203.259892307435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5615.40625,
            "unit": "ns",
            "range": "± 881.3841336888366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16723.989583333332,
            "unit": "ns",
            "range": "± 2144.417614447687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569568.196969697,
            "unit": "ns",
            "range": "± 136649.79984307382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2973642.7112676054,
            "unit": "ns",
            "range": "± 141647.28121307067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170305.4793814435,
            "unit": "ns",
            "range": "± 175517.165628345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6135037.4,
            "unit": "ns",
            "range": "± 530400.6997522622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283554.65,
            "unit": "ns",
            "range": "± 106425.01491264359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3502418.387755102,
            "unit": "ns",
            "range": "± 137857.94412694906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4385080.734375,
            "unit": "ns",
            "range": "± 201433.8811203667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3757356.103448276,
            "unit": "ns",
            "range": "± 291675.59322868125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7143809.104651162,
            "unit": "ns",
            "range": "± 248242.73200823303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6536877.719184028,
            "unit": "ns",
            "range": "± 121500.7445239957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055711.6721354167,
            "unit": "ns",
            "range": "± 23474.814144111984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1324979.7999441964,
            "unit": "ns",
            "range": "± 14904.133117937843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587819.4895833335,
            "unit": "ns",
            "range": "± 26033.316545857822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828845.9172014509,
            "unit": "ns",
            "range": "± 8615.461187662044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761070.4452427456,
            "unit": "ns",
            "range": "± 8160.635533092894"
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
          "id": "f6eac08c103fc977a1a5d6467fa1e809fb0286c2",
          "message": "Changelog",
          "timestamp": "2023-07-07T17:46:13+09:00",
          "tree_id": "71dfea0053205aaabb82b766cf72e2f00fcc64cf",
          "url": "https://github.com/planetarium/libplanet/commit/f6eac08c103fc977a1a5d6467fa1e809fb0286c2"
        },
        "date": 1688720587674,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8318015.6875,
            "unit": "ns",
            "range": "± 159671.19467590004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700447.795918368,
            "unit": "ns",
            "range": "± 1553874.5436205787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51762769.37931035,
            "unit": "ns",
            "range": "± 1484594.9155516755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101507776.78571428,
            "unit": "ns",
            "range": "± 2909289.156945653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207241160.75,
            "unit": "ns",
            "range": "± 4012459.1320267865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67240.45054945054,
            "unit": "ns",
            "range": "± 9252.199751967379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370805.2111111111,
            "unit": "ns",
            "range": "± 57499.43650930429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330249.10215053766,
            "unit": "ns",
            "range": "± 32526.088898037506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296110.1612903226,
            "unit": "ns",
            "range": "± 19265.232305040627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145782.3571428573,
            "unit": "ns",
            "range": "± 63803.33834599414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3790776.3076923075,
            "unit": "ns",
            "range": "± 45022.85558910536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21037.844086021505,
            "unit": "ns",
            "range": "± 4362.466029504272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105376.29591836735,
            "unit": "ns",
            "range": "± 12258.043343138055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99145.93939393939,
            "unit": "ns",
            "range": "± 15251.448612240072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122351.94565217392,
            "unit": "ns",
            "range": "± 18394.246525443006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7232.574468085107,
            "unit": "ns",
            "range": "± 831.0099599491334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21197.22340425532,
            "unit": "ns",
            "range": "± 4994.579611194982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553641.78125,
            "unit": "ns",
            "range": "± 176068.49414290919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957643.3095238097,
            "unit": "ns",
            "range": "± 133816.14369179742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148508.77,
            "unit": "ns",
            "range": "± 177231.98088836347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6002342.808219178,
            "unit": "ns",
            "range": "± 269782.2251360889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407276.75,
            "unit": "ns",
            "range": "± 186952.00147253083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542734.1021505375,
            "unit": "ns",
            "range": "± 270870.95834528725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4569272.115789474,
            "unit": "ns",
            "range": "± 273270.69248601166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4261845.127659574,
            "unit": "ns",
            "range": "± 380747.45365704317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7861155.9375,
            "unit": "ns",
            "range": "± 626158.7196070105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7750296.444010417,
            "unit": "ns",
            "range": "± 199861.80654617483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197357.501736111,
            "unit": "ns",
            "range": "± 45248.166058173105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422905.5713641827,
            "unit": "ns",
            "range": "± 20453.90434714901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2929169.534598214,
            "unit": "ns",
            "range": "± 49162.51121479496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921789.5926339285,
            "unit": "ns",
            "range": "± 5652.15956337456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916998.7029296875,
            "unit": "ns",
            "range": "± 14321.533497345892"
          }
        ]
      }
    ]
  }
}