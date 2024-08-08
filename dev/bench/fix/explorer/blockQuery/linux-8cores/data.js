window.BENCHMARK_DATA = {
  "lastUpdate": 1723120621379,
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
          "id": "a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T17:30:17+09:00",
          "tree_id": "b08a50a006b15eea0ac00ff2e4541e50aae7dacf",
          "url": "https://github.com/planetarium/libplanet/commit/a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61"
        },
        "date": 1722242448519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995975.661971831,
            "unit": "ns",
            "range": "± 44138.87459467113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1970097.6097560977,
            "unit": "ns",
            "range": "± 70947.40526258801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703129.5466666666,
            "unit": "ns",
            "range": "± 79169.7373054119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8302908.285714285,
            "unit": "ns",
            "range": "± 233793.43183703336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199750.40983606558,
            "unit": "ns",
            "range": "± 8609.217239635376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190457.43902439025,
            "unit": "ns",
            "range": "± 5257.747103317069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167824.05555555556,
            "unit": "ns",
            "range": "± 3348.7275278164325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3009192.2666666666,
            "unit": "ns",
            "range": "± 28020.164513299722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785949.6666666665,
            "unit": "ns",
            "range": "± 35016.96412896932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12958.763440860215,
            "unit": "ns",
            "range": "± 1026.196972340206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61530.765957446805,
            "unit": "ns",
            "range": "± 5316.756462164544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51258.083333333336,
            "unit": "ns",
            "range": "± 653.1194319756858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68923.80208333333,
            "unit": "ns",
            "range": "± 7778.377055211984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2881.463917525773,
            "unit": "ns",
            "range": "± 305.4940350568673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11973.134831460675,
            "unit": "ns",
            "range": "± 714.3846556018308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35144.19191919192,
            "unit": "ns",
            "range": "± 5521.849334691782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10427690.5,
            "unit": "ns",
            "range": "± 44229.718034197496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27050288.57142857,
            "unit": "ns",
            "range": "± 97702.2492487442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68310223.71428572,
            "unit": "ns",
            "range": "± 516481.95448041754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136649998.8846154,
            "unit": "ns",
            "range": "± 384942.72949222336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290796616.6,
            "unit": "ns",
            "range": "± 1603584.9171665697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710397.1817908655,
            "unit": "ns",
            "range": "± 3992.183070315016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197427.4180989584,
            "unit": "ns",
            "range": "± 1354.5111766214795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763025.1118489583,
            "unit": "ns",
            "range": "± 885.0913064155421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966052.4165736607,
            "unit": "ns",
            "range": "± 3044.31954197728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632376.5580729167,
            "unit": "ns",
            "range": "± 660.8060739633484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581836.9732142857,
            "unit": "ns",
            "range": "± 982.1897198225308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399371.972972973,
            "unit": "ns",
            "range": "± 75533.0222847694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507372.9615384615,
            "unit": "ns",
            "range": "± 52540.160239177625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3062641.5,
            "unit": "ns",
            "range": "± 56442.25314661585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2579870.3157894737,
            "unit": "ns",
            "range": "± 57255.64370634628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3327658.3421052634,
            "unit": "ns",
            "range": "± 70966.35273162373"
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
          "id": "55b5b38737e74fde498d2b2a38cc4056bec0a2c2",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:28:12+09:00",
          "tree_id": "f681f5862dae3e359abfe88dfd9c1121f6ec910b",
          "url": "https://github.com/planetarium/libplanet/commit/55b5b38737e74fde498d2b2a38cc4056bec0a2c2"
        },
        "date": 1723120594267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31788.666666666668,
            "unit": "ns",
            "range": "± 542.7212737237974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767821.865685096,
            "unit": "ns",
            "range": "± 8879.787093781628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206841.017578125,
            "unit": "ns",
            "range": "± 1597.2611171056694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776213.640625,
            "unit": "ns",
            "range": "± 1631.8145618125238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950670.0558035714,
            "unit": "ns",
            "range": "± 2920.270552343567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629021.9365234375,
            "unit": "ns",
            "range": "± 566.2099244806271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580704.3510416667,
            "unit": "ns",
            "range": "± 885.8166343550163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2473053.529411765,
            "unit": "ns",
            "range": "± 49764.524445278345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554105.0588235296,
            "unit": "ns",
            "range": "± 82157.21146603761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3143476.8846153845,
            "unit": "ns",
            "range": "± 23430.84900844206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575728.730769231,
            "unit": "ns",
            "range": "± 26205.912291420824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3241367.8666666667,
            "unit": "ns",
            "range": "± 35504.87952756165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200664.4347826087,
            "unit": "ns",
            "range": "± 7737.006003335668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200126.86956521738,
            "unit": "ns",
            "range": "± 6568.351531256853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165304.25,
            "unit": "ns",
            "range": "± 2247.6754507308615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078811.4,
            "unit": "ns",
            "range": "± 38890.74669561973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805747.714285714,
            "unit": "ns",
            "range": "± 26674.351239832133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13998.704081632653,
            "unit": "ns",
            "range": "± 2173.842969694542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60510.71875,
            "unit": "ns",
            "range": "± 4472.613484666843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51119.846153846156,
            "unit": "ns",
            "range": "± 490.8356558214175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55191.204081632655,
            "unit": "ns",
            "range": "± 9572.053759482138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3385.5730337078653,
            "unit": "ns",
            "range": "± 219.0234466299135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12161.720430107527,
            "unit": "ns",
            "range": "± 955.426610445637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023928.9024390244,
            "unit": "ns",
            "range": "± 53834.79657611421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1971530.4583333333,
            "unit": "ns",
            "range": "± 77461.17449295495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680983.2252747254,
            "unit": "ns",
            "range": "± 93878.96306001513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8406869.078947369,
            "unit": "ns",
            "range": "± 186267.5771163969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10748806.166666666,
            "unit": "ns",
            "range": "± 164340.09261835506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27260968.64285714,
            "unit": "ns",
            "range": "± 134567.06381898446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68430341.13333334,
            "unit": "ns",
            "range": "± 386670.72557795345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141304999.23333332,
            "unit": "ns",
            "range": "± 942735.4244306047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283348308.4,
            "unit": "ns",
            "range": "± 3168553.265584036"
          }
        ]
      }
    ]
  }
}