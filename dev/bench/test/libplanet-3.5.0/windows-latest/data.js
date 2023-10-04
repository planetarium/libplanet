window.BENCHMARK_DATA = {
  "lastUpdate": 1696393674382,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "8dc592d3d07260489d7ac7dd1f62754bc23faae0",
          "message": "Merge pull request #3435 from greymistcube/prepare/3.5.0\n\n🔧 Prepare 3.5.0",
          "timestamp": "2023-09-25T20:32:57+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/planetarium/libplanet/commit/8dc592d3d07260489d7ac7dd1f62754bc23faae0"
        },
        "date": 1696350955461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296125,
            "unit": "ns",
            "range": "± 100333.62365305827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2338408.8235294116,
            "unit": "ns",
            "range": "± 74076.48531998433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1904591.7525773195,
            "unit": "ns",
            "range": "± 108273.74226748059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7897454.545454546,
            "unit": "ns",
            "range": "± 369838.8281740775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44338.57142857143,
            "unit": "ns",
            "range": "± 2146.942069187524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6982292.857142857,
            "unit": "ns",
            "range": "± 32472.15290500022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18144880,
            "unit": "ns",
            "range": "± 175661.1031015607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46450221.428571425,
            "unit": "ns",
            "range": "± 181600.97499980315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92078440,
            "unit": "ns",
            "range": "± 557045.8801314562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184284886.66666666,
            "unit": "ns",
            "range": "± 1114026.7808185548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4359220.479910715,
            "unit": "ns",
            "range": "± 21588.828706076936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397345.1171875,
            "unit": "ns",
            "range": "± 2325.202439690283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993796.9308035715,
            "unit": "ns",
            "range": "± 1906.3718284802187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548504.1852678573,
            "unit": "ns",
            "range": "± 4299.9661096007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825383.9017427885,
            "unit": "ns",
            "range": "± 994.7670854759566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735700.2473958334,
            "unit": "ns",
            "range": "± 1454.580324361374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937712,
            "unit": "ns",
            "range": "± 68499.55182335137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089950,
            "unit": "ns",
            "range": "± 53878.73811674352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903388.888888889,
            "unit": "ns",
            "range": "± 107295.74274059717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820217.6470588236,
            "unit": "ns",
            "range": "± 77908.40162728052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9262854.838709677,
            "unit": "ns",
            "range": "± 218554.03578781104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247056.25,
            "unit": "ns",
            "range": "± 7622.375275379039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234125.7142857143,
            "unit": "ns",
            "range": "± 7677.826854656468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214488.88888888888,
            "unit": "ns",
            "range": "± 12544.87364923551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854840,
            "unit": "ns",
            "range": "± 28460.945672472455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3461042.8571428573,
            "unit": "ns",
            "range": "± 33744.052793064126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18492.391304347828,
            "unit": "ns",
            "range": "± 1811.8798261857598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78652.85714285714,
            "unit": "ns",
            "range": "± 3674.499726515928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65219.04761904762,
            "unit": "ns",
            "range": "± 1422.53964711675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81393.6170212766,
            "unit": "ns",
            "range": "± 7426.873732813022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4342.857142857143,
            "unit": "ns",
            "range": "± 619.4443802361803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17841.23711340206,
            "unit": "ns",
            "range": "± 1292.9095561078177"
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
          "id": "a953e0e1d421062c120de71ca88ca23eeaf08720",
          "message": "Merge pull request #3437 from greymistcube/refactor/immutable-iaction-context\n\n♻️ Immutable `IActionContext`",
          "timestamp": "2023-10-04T01:31:53+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/planetarium/libplanet/commit/a953e0e1d421062c120de71ca88ca23eeaf08720"
        },
        "date": 1696351846543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569389.898989899,
            "unit": "ns",
            "range": "± 135554.62525321927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923092.98245614,
            "unit": "ns",
            "range": "± 119180.25642405395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289097.9166666665,
            "unit": "ns",
            "range": "± 154328.53130436188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10197361.176470589,
            "unit": "ns",
            "range": "± 730137.1580369117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54175.862068965514,
            "unit": "ns",
            "range": "± 2975.049951397783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9049647.222222222,
            "unit": "ns",
            "range": "± 300984.68635569303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25090390,
            "unit": "ns",
            "range": "± 723406.1713101811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63739591.176470585,
            "unit": "ns",
            "range": "± 1291418.0984768372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124608694.44444445,
            "unit": "ns",
            "range": "± 2627878.8631478213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251215165.5172414,
            "unit": "ns",
            "range": "± 7114750.030508845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5592328.75,
            "unit": "ns",
            "range": "± 84719.07867807547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761418.4012276786,
            "unit": "ns",
            "range": "± 27458.907070734218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321031.875,
            "unit": "ns",
            "range": "± 23282.344761588807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3226067.0052083335,
            "unit": "ns",
            "range": "± 55773.64125611465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043704.7572544643,
            "unit": "ns",
            "range": "± 15705.058351515736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 960221.2825520834,
            "unit": "ns",
            "range": "± 10430.87041079581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3863048.611111111,
            "unit": "ns",
            "range": "± 189701.78338055266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4021561.5384615385,
            "unit": "ns",
            "range": "± 108866.32198039236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4917900.980392157,
            "unit": "ns",
            "range": "± 200813.50589295433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4729183.582089553,
            "unit": "ns",
            "range": "± 223929.25736072482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12149993.670886075,
            "unit": "ns",
            "range": "± 628294.778387639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303055.55555555556,
            "unit": "ns",
            "range": "± 9530.505741173429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288535.71428571426,
            "unit": "ns",
            "range": "± 6623.005486987933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260944.87179487178,
            "unit": "ns",
            "range": "± 13452.133972902162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4909993.333333333,
            "unit": "ns",
            "range": "± 87797.94552320252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381035.714285715,
            "unit": "ns",
            "range": "± 55863.950218955455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23033.684210526317,
            "unit": "ns",
            "range": "± 2032.9524973945984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99439.58333333333,
            "unit": "ns",
            "range": "± 7458.805875454817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82623.63636363637,
            "unit": "ns",
            "range": "± 3480.738727273578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96002.06185567011,
            "unit": "ns",
            "range": "± 16095.547905279085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5820,
            "unit": "ns",
            "range": "± 779.3341402297602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22055.31914893617,
            "unit": "ns",
            "range": "± 1967.8937499334722"
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
          "id": "ee9b5c2a7b96a42cdc27b2d0614ef3be23955b66",
          "message": "Merge pull request #3438 from greymistcube/refactor/remove-store-dependency\n\n♻️ Partially remove `IStore`/`BlockChain` dependency from `IActionEvaluator`",
          "timestamp": "2023-10-04T13:06:39+09:00",
          "tree_id": "1847fdc365e95467fdda18d024cbc0ab419b26f3",
          "url": "https://github.com/planetarium/libplanet/commit/ee9b5c2a7b96a42cdc27b2d0614ef3be23955b66"
        },
        "date": 1696393595334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616229.1666666667,
            "unit": "ns",
            "range": "± 203967.38486267673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062996.8085106383,
            "unit": "ns",
            "range": "± 296736.44924795727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2389120,
            "unit": "ns",
            "range": "± 207381.83951759644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11231166.666666666,
            "unit": "ns",
            "range": "± 1072568.7137046175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64040.625,
            "unit": "ns",
            "range": "± 17380.300876355148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7686797.849462366,
            "unit": "ns",
            "range": "± 793076.2352985526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21686933.333333332,
            "unit": "ns",
            "range": "± 2355190.116378234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58297410.20408163,
            "unit": "ns",
            "range": "± 3974524.4260860444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119187505,
            "unit": "ns",
            "range": "± 8542859.670956297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241097667.10526314,
            "unit": "ns",
            "range": "± 12139330.631061867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4922054.237689394,
            "unit": "ns",
            "range": "± 155981.44683465114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612764.3833705357,
            "unit": "ns",
            "range": "± 20567.012963745554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176629.5748197115,
            "unit": "ns",
            "range": "± 14659.639247894278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2985378.835227273,
            "unit": "ns",
            "range": "± 73115.99587690418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986462.1131310096,
            "unit": "ns",
            "range": "± 26559.20992636261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920310.7747395834,
            "unit": "ns",
            "range": "± 14368.169755533994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378688.2978723403,
            "unit": "ns",
            "range": "± 440115.26101677876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550148.4210526315,
            "unit": "ns",
            "range": "± 401992.26013062394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4769968.041237113,
            "unit": "ns",
            "range": "± 494582.4831247379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328780.208333333,
            "unit": "ns",
            "range": "± 520369.9917760523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13302543.684210526,
            "unit": "ns",
            "range": "± 1480926.1733872883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294436.6666666667,
            "unit": "ns",
            "range": "± 34433.09895102075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291428.72340425535,
            "unit": "ns",
            "range": "± 45180.195067194756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240586.95652173914,
            "unit": "ns",
            "range": "± 41089.273532476334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4310425,
            "unit": "ns",
            "range": "± 444458.07380271656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843291.7525773197,
            "unit": "ns",
            "range": "± 363144.2876891656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31626.262626262625,
            "unit": "ns",
            "range": "± 10815.253644723798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100422.58064516129,
            "unit": "ns",
            "range": "± 15839.529040486143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112565.625,
            "unit": "ns",
            "range": "± 27722.929244959894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117215.05376344085,
            "unit": "ns",
            "range": "± 27696.39336996064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6582.926829268293,
            "unit": "ns",
            "range": "± 1280.702438242657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28183.333333333332,
            "unit": "ns",
            "range": "± 10674.008438274295"
          }
        ]
      }
    ]
  }
}