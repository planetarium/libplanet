window.BENCHMARK_DATA = {
  "lastUpdate": 1722235507597,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:22:01+09:00",
          "tree_id": "b54d9c304404e61b9d2fd242c8811566e524801f",
          "url": "https://github.com/planetarium/libplanet/commit/2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323"
        },
        "date": 1722234784516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065133.5638297873,
            "unit": "ns",
            "range": "± 97695.68965635772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2072034.14,
            "unit": "ns",
            "range": "± 103677.75052831677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769566.6170212766,
            "unit": "ns",
            "range": "± 124068.36365679772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8634777.282608695,
            "unit": "ns",
            "range": "± 330410.49219308083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227515.03608247422,
            "unit": "ns",
            "range": "± 25616.049298186517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211228.32,
            "unit": "ns",
            "range": "± 25694.75199645235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187991.13,
            "unit": "ns",
            "range": "± 21791.082907833206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149161.8636363638,
            "unit": "ns",
            "range": "± 76625.99960494292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929645.52,
            "unit": "ns",
            "range": "± 75558.99012753768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18824.84,
            "unit": "ns",
            "range": "± 4860.5730316870695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81005.43,
            "unit": "ns",
            "range": "± 17924.11146763324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67978.23232323233,
            "unit": "ns",
            "range": "± 9289.411090303778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67307.9387755102,
            "unit": "ns",
            "range": "± 13508.063165220776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4107.082474226804,
            "unit": "ns",
            "range": "± 1271.5163574621502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16695.358585858587,
            "unit": "ns",
            "range": "± 5189.691294759258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37932.5,
            "unit": "ns",
            "range": "± 6231.923720050275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10786427.23076923,
            "unit": "ns",
            "range": "± 294837.48165039095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27287694.866666667,
            "unit": "ns",
            "range": "± 456652.3941309762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70534307.7,
            "unit": "ns",
            "range": "± 557896.853544657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139476370.6,
            "unit": "ns",
            "range": "± 478263.01879805484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291129160.46666664,
            "unit": "ns",
            "range": "± 685258.6075258498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718710.486778846,
            "unit": "ns",
            "range": "± 3780.006810166193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211207.1612723214,
            "unit": "ns",
            "range": "± 2712.268977868575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 797241.8793619792,
            "unit": "ns",
            "range": "± 1334.8735535603419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964799.7508370536,
            "unit": "ns",
            "range": "± 3421.922896357098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614639.0408203125,
            "unit": "ns",
            "range": "± 1114.786886356083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569767.701311384,
            "unit": "ns",
            "range": "± 656.6015288258341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436269.1666666665,
            "unit": "ns",
            "range": "± 88707.11156134502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567892.862745098,
            "unit": "ns",
            "range": "± 104144.03760235527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173010.02,
            "unit": "ns",
            "range": "± 77636.28564827144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2615844.906976744,
            "unit": "ns",
            "range": "± 90554.19837518354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3358365.588235294,
            "unit": "ns",
            "range": "± 67014.64111768677"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "87e2a1721fdd873f1ba33ff2532c9cce9ba80886",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:27:15+09:00",
          "tree_id": "94e96c1daa692de7f03533f3adab42370d7ac916",
          "url": "https://github.com/planetarium/libplanet/commit/87e2a1721fdd873f1ba33ff2532c9cce9ba80886"
        },
        "date": 1722234968672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012623.5253164558,
            "unit": "ns",
            "range": "± 48628.820559146916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959969.25,
            "unit": "ns",
            "range": "± 69022.79285404057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688624.3555555556,
            "unit": "ns",
            "range": "± 92097.840357423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8225683.851851852,
            "unit": "ns",
            "range": "± 215006.8740687687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201660.68421052632,
            "unit": "ns",
            "range": "± 10229.754567548564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197684.6081081081,
            "unit": "ns",
            "range": "± 9350.860490500865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166764.7,
            "unit": "ns",
            "range": "± 4800.93509677524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163528.3571428573,
            "unit": "ns",
            "range": "± 31359.34551626981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2801607.1428571427,
            "unit": "ns",
            "range": "± 29750.963280738797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13222.923076923076,
            "unit": "ns",
            "range": "± 1097.6757387090358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62880.8870967742,
            "unit": "ns",
            "range": "± 6169.050311014791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59004.71590909091,
            "unit": "ns",
            "range": "± 3239.075137435203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57343.69387755102,
            "unit": "ns",
            "range": "± 10090.001098012837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2724.6736842105265,
            "unit": "ns",
            "range": "± 386.0428386025082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12775.8,
            "unit": "ns",
            "range": "± 946.4995171446504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32473,
            "unit": "ns",
            "range": "± 571.1329592510461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10855347.105263159,
            "unit": "ns",
            "range": "± 228428.20129574748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27536228.153846152,
            "unit": "ns",
            "range": "± 85085.74217404283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69683570.53846154,
            "unit": "ns",
            "range": "± 510756.65193557285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137676221.4,
            "unit": "ns",
            "range": "± 791504.7103954954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292327237.1333333,
            "unit": "ns",
            "range": "± 1320609.8201308833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702651.4229910714,
            "unit": "ns",
            "range": "± 4868.176051639823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213235.84765625,
            "unit": "ns",
            "range": "± 3116.8590980399626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767117.5152994791,
            "unit": "ns",
            "range": "± 1148.265993522889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908873.0565011161,
            "unit": "ns",
            "range": "± 2122.0174286311935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620145.1380709135,
            "unit": "ns",
            "range": "± 980.0651560752839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593113.978515625,
            "unit": "ns",
            "range": "± 857.0742952754549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425080.8333333335,
            "unit": "ns",
            "range": "± 29761.539600312215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2579532.28,
            "unit": "ns",
            "range": "± 68815.63856755235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084801.5454545454,
            "unit": "ns",
            "range": "± 75248.06135058659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2577809.076923077,
            "unit": "ns",
            "range": "± 24747.90125600397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3259384.717391304,
            "unit": "ns",
            "range": "± 81276.45355706797"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "cf431ab333d8230dd3b95be212fba38c5c229356",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:32:01+09:00",
          "tree_id": "c5066b2e7de7929cfa68da54ed5d1b70584c49cd",
          "url": "https://github.com/planetarium/libplanet/commit/cf431ab333d8230dd3b95be212fba38c5c229356"
        },
        "date": 1722235383066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188843.1630434783,
            "unit": "ns",
            "range": "± 105964.74414772024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2113452.340909091,
            "unit": "ns",
            "range": "± 77950.95388319301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1896092.9069767443,
            "unit": "ns",
            "range": "± 99554.32225575646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8628853.555555556,
            "unit": "ns",
            "range": "± 222577.87343782076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249981.94871794872,
            "unit": "ns",
            "range": "± 12193.695717217535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243235.5633802817,
            "unit": "ns",
            "range": "± 11143.353422854354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222227.88947368422,
            "unit": "ns",
            "range": "± 13596.754375150924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3280169.066666667,
            "unit": "ns",
            "range": "± 51562.28170373416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3055238.6764705884,
            "unit": "ns",
            "range": "± 62017.11498876267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24793.840425531915,
            "unit": "ns",
            "range": "± 2252.8789099426394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102238.47368421052,
            "unit": "ns",
            "range": "± 5203.545261899005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85285.41,
            "unit": "ns",
            "range": "± 14483.701364431692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91203.98453608247,
            "unit": "ns",
            "range": "± 12727.478999780851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7090.322916666667,
            "unit": "ns",
            "range": "± 1370.8640263854468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25188.48979591837,
            "unit": "ns",
            "range": "± 4698.631558285173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58318.893939393936,
            "unit": "ns",
            "range": "± 8512.49733832939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11472945.233333332,
            "unit": "ns",
            "range": "± 157777.43990528767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27918051.966666665,
            "unit": "ns",
            "range": "± 218985.0749098364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71223695.36666666,
            "unit": "ns",
            "range": "± 371221.14451147517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143738793.2,
            "unit": "ns",
            "range": "± 813357.0595072709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298442156.26666665,
            "unit": "ns",
            "range": "± 1231813.2998916947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4029369.1116071427,
            "unit": "ns",
            "range": "± 28656.966182989298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214904.9533854167,
            "unit": "ns",
            "range": "± 1848.0006133560755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780417.7177734375,
            "unit": "ns",
            "range": "± 2243.886282680664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2153009.914866728,
            "unit": "ns",
            "range": "± 68640.32344849598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631258.9473307292,
            "unit": "ns",
            "range": "± 2631.8817000148033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593290.8487025669,
            "unit": "ns",
            "range": "± 728.8879372820232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2632583.6666666665,
            "unit": "ns",
            "range": "± 71649.31956572073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2672357.911764706,
            "unit": "ns",
            "range": "± 124283.98254031631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3277547.6666666665,
            "unit": "ns",
            "range": "± 49411.613862773294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2794207.8378378376,
            "unit": "ns",
            "range": "± 93851.26530240208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3444555.4444444445,
            "unit": "ns",
            "range": "± 71553.88112236263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "df4ecc35dea4d4c0678de4a325f9fc46056b8015",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:34:25+09:00",
          "tree_id": "57e53015f2883ae6f46880f5f7cda7033a1ce87f",
          "url": "https://github.com/planetarium/libplanet/commit/df4ecc35dea4d4c0678de4a325f9fc46056b8015"
        },
        "date": 1722235481908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1063871.5652173914,
            "unit": "ns",
            "range": "± 76811.54746267702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2046900.746031746,
            "unit": "ns",
            "range": "± 93633.30308898547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1799559.6170212766,
            "unit": "ns",
            "range": "± 131579.0534881635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8529437.217391305,
            "unit": "ns",
            "range": "± 324152.86852319905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231537.98958333334,
            "unit": "ns",
            "range": "± 18357.468466966773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221333.63917525773,
            "unit": "ns",
            "range": "± 22516.660312045227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189721.48,
            "unit": "ns",
            "range": "± 23796.588989070417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3126827.4545454546,
            "unit": "ns",
            "range": "± 76533.88066388654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863626.275862069,
            "unit": "ns",
            "range": "± 82158.60725359063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18269.070707070707,
            "unit": "ns",
            "range": "± 4630.76558939546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85388.42,
            "unit": "ns",
            "range": "± 17809.46961544432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59392.34,
            "unit": "ns",
            "range": "± 9943.324191850652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67587.94329896907,
            "unit": "ns",
            "range": "± 14657.4800400463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4026.1666666666665,
            "unit": "ns",
            "range": "± 1177.6195203434247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19693.797872340427,
            "unit": "ns",
            "range": "± 2890.9384552863603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38851.99,
            "unit": "ns",
            "range": "± 6744.342556176287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10470942.303030303,
            "unit": "ns",
            "range": "± 326773.88615079515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27415475.933333334,
            "unit": "ns",
            "range": "± 344650.3231984281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70449346.33333333,
            "unit": "ns",
            "range": "± 432240.81757885625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138538788.2,
            "unit": "ns",
            "range": "± 622769.7255136238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293458314.64285713,
            "unit": "ns",
            "range": "± 972025.9469933923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730636.178485577,
            "unit": "ns",
            "range": "± 6869.31670045765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193601.1694010417,
            "unit": "ns",
            "range": "± 1626.4211851282737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765446.1375651042,
            "unit": "ns",
            "range": "± 611.818346960066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952722.868861607,
            "unit": "ns",
            "range": "± 3245.129904441355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608992.1319110577,
            "unit": "ns",
            "range": "± 294.8237377204586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581988.7903645834,
            "unit": "ns",
            "range": "± 600.3504312003074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2455750.6279069767,
            "unit": "ns",
            "range": "± 90052.24227557163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535524.0816326533,
            "unit": "ns",
            "range": "± 100457.6458859729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3183449.263157895,
            "unit": "ns",
            "range": "± 70431.23509324704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2695530.3921568627,
            "unit": "ns",
            "range": "± 109951.4001569927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3339970.9285714286,
            "unit": "ns",
            "range": "± 56860.640098218384"
          }
        ]
      }
    ]
  }
}