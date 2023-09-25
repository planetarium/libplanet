window.BENCHMARK_DATA = {
  "lastUpdate": 1695622587263,
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
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695085701235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8656885.07142857,
            "unit": "ns",
            "range": "± 88493.60606690901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21316156.033333335,
            "unit": "ns",
            "range": "± 382526.9449228132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52204249.28571428,
            "unit": "ns",
            "range": "± 536459.2484577683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103825868.83333333,
            "unit": "ns",
            "range": "± 586922.6142401772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213319963.96153846,
            "unit": "ns",
            "range": "± 399060.3518179958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73656.93406593407,
            "unit": "ns",
            "range": "± 5826.6929267184705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317028.62666666665,
            "unit": "ns",
            "range": "± 15839.609330745207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308173.1369863014,
            "unit": "ns",
            "range": "± 15160.91021006459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306650.1034482759,
            "unit": "ns",
            "range": "± 8915.53614422129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104013.8571428573,
            "unit": "ns",
            "range": "± 33040.43696769889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751286.5714285714,
            "unit": "ns",
            "range": "± 54542.90293495047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22931.864583333332,
            "unit": "ns",
            "range": "± 3096.8930189696543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107087.3469387755,
            "unit": "ns",
            "range": "± 10168.756755910075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112229.86206896552,
            "unit": "ns",
            "range": "± 6123.834425731729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103865.70967741935,
            "unit": "ns",
            "range": "± 9757.40915316089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.1875,
            "unit": "ns",
            "range": "± 615.1267445349009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20556.31182795699,
            "unit": "ns",
            "range": "± 2614.873618936631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597022.23,
            "unit": "ns",
            "range": "± 165797.44437472185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957840.231884058,
            "unit": "ns",
            "range": "± 135760.88451847815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055161.07,
            "unit": "ns",
            "range": "± 201868.16878065158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334143.739130435,
            "unit": "ns",
            "range": "± 205441.39523498446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333856.1585365855,
            "unit": "ns",
            "range": "± 119173.0782713969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587819.35,
            "unit": "ns",
            "range": "± 78029.2976612159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4948287.5,
            "unit": "ns",
            "range": "± 52018.617033881696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217932.110169492,
            "unit": "ns",
            "range": "± 173114.80326142523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6702209.8,
            "unit": "ns",
            "range": "± 237103.52989620596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5550239.608816965,
            "unit": "ns",
            "range": "± 36198.79554758796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1617749.2181919643,
            "unit": "ns",
            "range": "± 2429.8691910167277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002478.9754464285,
            "unit": "ns",
            "range": "± 1727.9196828435436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548655.7098958334,
            "unit": "ns",
            "range": "± 35083.1705936676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789555.3970102164,
            "unit": "ns",
            "range": "± 1890.0855371448952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710428.0555943081,
            "unit": "ns",
            "range": "± 1878.3729076116947"
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
          "id": "57c96c96e8eb2639b4bbe10305015495d41c202a",
          "message": "Merge pull request #3427 from greymistcube/feature/iactionrendercontext\n\n♻️ Refactor `IActionRenderer`",
          "timestamp": "2023-09-19T10:49:44+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/planetarium/libplanet/commit/57c96c96e8eb2639b4bbe10305015495d41c202a"
        },
        "date": 1695089573150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8929850.330188679,
            "unit": "ns",
            "range": "± 371670.0963291202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21313052.333333332,
            "unit": "ns",
            "range": "± 379598.7027469621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54633906.14285714,
            "unit": "ns",
            "range": "± 704785.8414452095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109916515.05882353,
            "unit": "ns",
            "range": "± 5210585.668940665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229922088.47560975,
            "unit": "ns",
            "range": "± 8158314.6580309635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80155.48901098901,
            "unit": "ns",
            "range": "± 10564.142801103177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342038.52127659577,
            "unit": "ns",
            "range": "± 31029.77129808356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332926.46875,
            "unit": "ns",
            "range": "± 38356.863234066834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300985.1818181818,
            "unit": "ns",
            "range": "± 6072.384662484541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259230.833333333,
            "unit": "ns",
            "range": "± 64659.71881013758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3837034.2647058824,
            "unit": "ns",
            "range": "± 121984.99163621897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26136.863157894735,
            "unit": "ns",
            "range": "± 4620.026405954118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121416.90449438202,
            "unit": "ns",
            "range": "± 20005.443957219097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96121.82291666667,
            "unit": "ns",
            "range": "± 20552.58539223602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95861.26666666666,
            "unit": "ns",
            "range": "± 18171.87264969214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6095.432989690722,
            "unit": "ns",
            "range": "± 1089.9435851916114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17141.945054945056,
            "unit": "ns",
            "range": "± 1758.4489526766818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629684.875,
            "unit": "ns",
            "range": "± 183314.0736714049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975855.727272727,
            "unit": "ns",
            "range": "± 251528.34733408166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042788.8854166667,
            "unit": "ns",
            "range": "± 285179.069225668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6087681.228260869,
            "unit": "ns",
            "range": "± 797961.2361735279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450020.0161290322,
            "unit": "ns",
            "range": "± 309126.6760063081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789055.2204301073,
            "unit": "ns",
            "range": "± 320575.12087708205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4594000.005376345,
            "unit": "ns",
            "range": "± 278473.19420522574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014960.5774647887,
            "unit": "ns",
            "range": "± 196959.80940512873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7181584.8,
            "unit": "ns",
            "range": "± 676574.7264058331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6183631.921875,
            "unit": "ns",
            "range": "± 158433.35612472126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1771513.6703404018,
            "unit": "ns",
            "range": "± 44891.3095841453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078044.163515625,
            "unit": "ns",
            "range": "± 41429.488805779176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2926539.9674762227,
            "unit": "ns",
            "range": "± 72505.47714764117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809114.1319661458,
            "unit": "ns",
            "range": "± 13912.807608196348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750184.7534036075,
            "unit": "ns",
            "range": "± 35044.681892214736"
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
          "id": "a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8",
          "message": "Merge pull request #3424 from greymistcube/feature/inverse-keyconversion\n\nInitial implementation of AccountDiff",
          "timestamp": "2023-09-19T11:01:54+09:00",
          "tree_id": "cc068e28f549f9bb67e03f8e667c1fb610b3a3ce",
          "url": "https://github.com/planetarium/libplanet/commit/a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8"
        },
        "date": 1695089911506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8674144.264705881,
            "unit": "ns",
            "range": "± 175146.21256843145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20775963.166666668,
            "unit": "ns",
            "range": "± 484821.03552262805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50563162.28571428,
            "unit": "ns",
            "range": "± 664642.1549271606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107374106.68518518,
            "unit": "ns",
            "range": "± 2998004.699916533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214387390.13333333,
            "unit": "ns",
            "range": "± 6373649.64629844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65114.291666666664,
            "unit": "ns",
            "range": "± 7697.629320520727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306516.170212766,
            "unit": "ns",
            "range": "± 22028.45766953903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345554.3522727273,
            "unit": "ns",
            "range": "± 64039.023430678084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298337.0806451613,
            "unit": "ns",
            "range": "± 8509.15503354747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189923.6971830986,
            "unit": "ns",
            "range": "± 205105.3138622498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3780373.0555555555,
            "unit": "ns",
            "range": "± 183097.6569460233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20059.521276595744,
            "unit": "ns",
            "range": "± 3054.8120042423016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97035.88421052632,
            "unit": "ns",
            "range": "± 15076.804709632861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87590.05555555556,
            "unit": "ns",
            "range": "± 13033.633824762936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90616.15463917526,
            "unit": "ns",
            "range": "± 13330.030274987661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4859.626373626374,
            "unit": "ns",
            "range": "± 668.6488473589714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17952.969387755104,
            "unit": "ns",
            "range": "± 3097.870732676368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551454.7857142857,
            "unit": "ns",
            "range": "± 160039.74892483017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2936458.1770833335,
            "unit": "ns",
            "range": "± 185988.44557609063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955227.0714285714,
            "unit": "ns",
            "range": "± 185945.53436628397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5223491,
            "unit": "ns",
            "range": "± 178131.3062059801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374583.9574468085,
            "unit": "ns",
            "range": "± 130087.09900560396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559510.7472527474,
            "unit": "ns",
            "range": "± 199175.77842663912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533091.8,
            "unit": "ns",
            "range": "± 191853.32416529578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899698.1428571427,
            "unit": "ns",
            "range": "± 271231.7435205852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6897694.485507246,
            "unit": "ns",
            "range": "± 329762.2406380129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5760568.712582237,
            "unit": "ns",
            "range": "± 127832.26908277134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1756570.9005208334,
            "unit": "ns",
            "range": "± 31479.289777159043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033132.9869791666,
            "unit": "ns",
            "range": "± 10339.722310027353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654369.9184895833,
            "unit": "ns",
            "range": "± 45276.77845041557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796154.9269080529,
            "unit": "ns",
            "range": "± 5661.073795224997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718435.8430989584,
            "unit": "ns",
            "range": "± 6456.954688084688"
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
          "id": "48a855a9788df70037f00e522d370b01af67db01",
          "message": "Merge pull request #3428 from greymistcube/refactor/cleanup-txsuccess\n\n♻️ Cleanup `TxSuccess` and `TxFailure`",
          "timestamp": "2023-09-20T10:49:28+09:00",
          "tree_id": "39ff51a5edb05c68e803a2e0d9eec444ab4d1c41",
          "url": "https://github.com/planetarium/libplanet/commit/48a855a9788df70037f00e522d370b01af67db01"
        },
        "date": 1695175695504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367112.383720931,
            "unit": "ns",
            "range": "± 308748.2484023736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22488767.133333333,
            "unit": "ns",
            "range": "± 270452.8121320313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50518436.3,
            "unit": "ns",
            "range": "± 941781.8249322625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100007373.35483871,
            "unit": "ns",
            "range": "± 3021809.3488924094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217446601.07692307,
            "unit": "ns",
            "range": "± 5453125.938970865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59313.13829787234,
            "unit": "ns",
            "range": "± 7635.854175273673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291970.90506329114,
            "unit": "ns",
            "range": "± 15174.37536966386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278659.3333333333,
            "unit": "ns",
            "range": "± 12644.611219931825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305678.623655914,
            "unit": "ns",
            "range": "± 27245.307932668995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065211.8076923075,
            "unit": "ns",
            "range": "± 47853.566362018435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662998.875,
            "unit": "ns",
            "range": "± 144291.07152006868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16683.363636363636,
            "unit": "ns",
            "range": "± 1120.226477325709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88280,
            "unit": "ns",
            "range": "± 10047.034518231054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99429.59595959596,
            "unit": "ns",
            "range": "± 17959.90355919245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108674.63043478261,
            "unit": "ns",
            "range": "± 9512.458347765032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7083.34693877551,
            "unit": "ns",
            "range": "± 1344.8868679821899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18005.956043956045,
            "unit": "ns",
            "range": "± 2580.6543610835856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529065.2527472528,
            "unit": "ns",
            "range": "± 153023.597015812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906455.1458333335,
            "unit": "ns",
            "range": "± 175159.04064321716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877138.1894736842,
            "unit": "ns",
            "range": "± 148574.84145124163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5167556.98,
            "unit": "ns",
            "range": "± 202950.44683616635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277708.7093023257,
            "unit": "ns",
            "range": "± 178212.75496550987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440622.1694915253,
            "unit": "ns",
            "range": "± 151397.23716368928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5335909.542105263,
            "unit": "ns",
            "range": "± 1150242.1663142212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3721524.6142857145,
            "unit": "ns",
            "range": "± 180149.04391000702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7106789.26,
            "unit": "ns",
            "range": "± 146401.15349877998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5550409.6611328125,
            "unit": "ns",
            "range": "± 94059.77351296338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1649838.0611478365,
            "unit": "ns",
            "range": "± 16456.20246189639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004284.2373046875,
            "unit": "ns",
            "range": "± 8098.0701191496455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628829.853125,
            "unit": "ns",
            "range": "± 142167.09107303398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793507.5869750977,
            "unit": "ns",
            "range": "± 15383.768573339266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757262.1631510417,
            "unit": "ns",
            "range": "± 6596.983903741294"
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
          "id": "c7170b1176182a22224dae5d920fcedff4fd4900",
          "message": "Merge pull request #3429 from greymistcube/refactor/txexecution-itrie\n\n♻️ `TxExecution` overhaul",
          "timestamp": "2023-09-21T17:18:45+09:00",
          "tree_id": "0d2b90731f22301d1c2f7ca0cccf215cf3f3bfbf",
          "url": "https://github.com/planetarium/libplanet/commit/c7170b1176182a22224dae5d920fcedff4fd4900"
        },
        "date": 1695285392704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8806873.976190476,
            "unit": "ns",
            "range": "± 467675.9666433401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21548029.85185185,
            "unit": "ns",
            "range": "± 600281.99684736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51937628.36,
            "unit": "ns",
            "range": "± 2064915.9886535064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100444185.5909091,
            "unit": "ns",
            "range": "± 3140651.78462738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217112718.4814815,
            "unit": "ns",
            "range": "± 6072788.00156102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69512.81521739131,
            "unit": "ns",
            "range": "± 11410.596098238186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313609.47872340423,
            "unit": "ns",
            "range": "± 26020.197210652786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301065.4456521739,
            "unit": "ns",
            "range": "± 17484.04733323666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297829.8604651163,
            "unit": "ns",
            "range": "± 11040.403231036264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4196948.384615385,
            "unit": "ns",
            "range": "± 34560.83378512557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579844.7843137253,
            "unit": "ns",
            "range": "± 140796.23300490872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20108.52688172043,
            "unit": "ns",
            "range": "± 3282.721884256754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83993.23404255319,
            "unit": "ns",
            "range": "± 9807.108052491174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107139.63043478261,
            "unit": "ns",
            "range": "± 7844.380956276628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103005.76923076923,
            "unit": "ns",
            "range": "± 12189.208907040982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7608.375,
            "unit": "ns",
            "range": "± 928.2615018352715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19588.173684210527,
            "unit": "ns",
            "range": "± 3384.9091267921117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398088.5520833333,
            "unit": "ns",
            "range": "± 140890.61918231533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678337.0375,
            "unit": "ns",
            "range": "± 139068.49342247166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050938.0625,
            "unit": "ns",
            "range": "± 186661.59389439505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6938607.105882353,
            "unit": "ns",
            "range": "± 374647.796615448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3380968.3484848486,
            "unit": "ns",
            "range": "± 243903.18687429238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619348.237113402,
            "unit": "ns",
            "range": "± 365840.92879831814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439563.556962025,
            "unit": "ns",
            "range": "± 223329.93675339533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3752153.8636363638,
            "unit": "ns",
            "range": "± 205835.10904204124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6783824.8625,
            "unit": "ns",
            "range": "± 354564.33928295446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141876.58688447,
            "unit": "ns",
            "range": "± 376831.6797479677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1806629.6182215074,
            "unit": "ns",
            "range": "± 36854.120931854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046160.3954427083,
            "unit": "ns",
            "range": "± 18353.932767595954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2976311.223125,
            "unit": "ns",
            "range": "± 79322.67878952458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907305.8104166667,
            "unit": "ns",
            "range": "± 5322.620110786308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816031.6400240385,
            "unit": "ns",
            "range": "± 10339.810240752156"
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
          "id": "b4bdf49f452e229086e153945eaff2810b22cf53",
          "message": "Merge pull request #3430 from greymistcube/chore/remove-clutter\n\n🧹 Remove unnecessary clutter",
          "timestamp": "2023-09-22T10:36:21+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/planetarium/libplanet/commit/b4bdf49f452e229086e153945eaff2810b22cf53"
        },
        "date": 1695347548002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8203372.7,
            "unit": "ns",
            "range": "± 362059.846536397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19799359.613636363,
            "unit": "ns",
            "range": "± 729697.4787454081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49466709.93333333,
            "unit": "ns",
            "range": "± 908067.5148730852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98751402.71428572,
            "unit": "ns",
            "range": "± 928865.0436901833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197616117.2,
            "unit": "ns",
            "range": "± 1887355.4689720974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55496.27173913043,
            "unit": "ns",
            "range": "± 5185.438388120598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289240.868852459,
            "unit": "ns",
            "range": "± 12899.17318341943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291046.5053763441,
            "unit": "ns",
            "range": "± 21918.919935617094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282950.67142857146,
            "unit": "ns",
            "range": "± 13747.742722723116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4004997.3,
            "unit": "ns",
            "range": "± 89068.74603307976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3718081.14,
            "unit": "ns",
            "range": "± 98766.42970702815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17477.879120879123,
            "unit": "ns",
            "range": "± 1113.5178174013786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80443.4574468085,
            "unit": "ns",
            "range": "± 5710.586615941462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72730.97191011236,
            "unit": "ns",
            "range": "± 5842.670322895421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86751.04166666667,
            "unit": "ns",
            "range": "± 13035.839361194858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.736842105263,
            "unit": "ns",
            "range": "± 563.4417451910749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16589.956043956045,
            "unit": "ns",
            "range": "± 1297.9599969189935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412195.4895833333,
            "unit": "ns",
            "range": "± 159946.26319219606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2598878.529411765,
            "unit": "ns",
            "range": "± 104993.02378850758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1953234.6315789474,
            "unit": "ns",
            "range": "± 190076.67467053822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613559.528301887,
            "unit": "ns",
            "range": "± 275144.34266675956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3503659.5,
            "unit": "ns",
            "range": "± 51926.54684040939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3449835,
            "unit": "ns",
            "range": "± 92637.702467109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4311312.882352941,
            "unit": "ns",
            "range": "± 173754.87926244223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821171.48,
            "unit": "ns",
            "range": "± 99271.86162928211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6562870.115384615,
            "unit": "ns",
            "range": "± 228947.29803345978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5432322.7078125,
            "unit": "ns",
            "range": "± 57892.268456786514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1624000.6981026786,
            "unit": "ns",
            "range": "± 6152.179140257948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 987653.7743489583,
            "unit": "ns",
            "range": "± 3996.904826928424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602398.722956731,
            "unit": "ns",
            "range": "± 18205.292668441976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830915.3877604167,
            "unit": "ns",
            "range": "± 3763.7226520440195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717437.7815755209,
            "unit": "ns",
            "range": "± 10784.797053002318"
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
          "id": "d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559",
          "message": "Merge pull request #3431 from greymistcube/refactor/single-trie-commit\n\n♻️ Commit once for `IActionEvaluation`s",
          "timestamp": "2023-09-25T14:57:18+09:00",
          "tree_id": "78f01675d622d3342bb8561bfb371a960019f4fe",
          "url": "https://github.com/planetarium/libplanet/commit/d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559"
        },
        "date": 1695622485436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9729708.153846154,
            "unit": "ns",
            "range": "± 126384.36933078799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23947658.766666666,
            "unit": "ns",
            "range": "± 311325.5821803339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58256396.333333336,
            "unit": "ns",
            "range": "± 1069563.2259254686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111397698.21428572,
            "unit": "ns",
            "range": "± 2524166.2101614294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224198635,
            "unit": "ns",
            "range": "± 3809965.1096623293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68934.5425531915,
            "unit": "ns",
            "range": "± 9492.554605533222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357807.96629213484,
            "unit": "ns",
            "range": "± 21234.958095753245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346939.9120879121,
            "unit": "ns",
            "range": "± 29420.830363932568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308249.71276595746,
            "unit": "ns",
            "range": "± 20098.55605195554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4563954.785714285,
            "unit": "ns",
            "range": "± 129952.81756179308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4255054.45,
            "unit": "ns",
            "range": "± 94969.653321178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20626.433333333334,
            "unit": "ns",
            "range": "± 1716.046148314802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94003.44565217392,
            "unit": "ns",
            "range": "± 7757.610866732824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86648.5744680851,
            "unit": "ns",
            "range": "± 6562.824661485756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92951.82022471911,
            "unit": "ns",
            "range": "± 16483.263063402024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5179.65,
            "unit": "ns",
            "range": "± 735.9629204336076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18945.967741935485,
            "unit": "ns",
            "range": "± 1881.284542953777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709582.7113402062,
            "unit": "ns",
            "range": "± 216396.3931982404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131233.992063492,
            "unit": "ns",
            "range": "± 140782.3175134133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2612490.0494505493,
            "unit": "ns",
            "range": "± 162824.23960893563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11975030.773584906,
            "unit": "ns",
            "range": "± 491892.6732742716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594319.8898305083,
            "unit": "ns",
            "range": "± 156650.4939666664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3845262.9054054054,
            "unit": "ns",
            "range": "± 191408.95164665207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4811821.435483871,
            "unit": "ns",
            "range": "± 216170.05358455612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4805850.982758621,
            "unit": "ns",
            "range": "± 314324.54819449154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14145878.147540983,
            "unit": "ns",
            "range": "± 632374.0427350687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6131329.509375,
            "unit": "ns",
            "range": "± 96814.41304249348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934233.0030691964,
            "unit": "ns",
            "range": "± 53648.945494952204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143684.987079327,
            "unit": "ns",
            "range": "± 5290.285394526081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2804466.11640625,
            "unit": "ns",
            "range": "± 32709.896695003714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950278.9363932292,
            "unit": "ns",
            "range": "± 4508.278913171441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886067.2765625,
            "unit": "ns",
            "range": "± 12359.848770358072"
          }
        ]
      }
    ]
  }
}