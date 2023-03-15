window.BENCHMARK_DATA = {
  "lastUpdate": 1678867630523,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "e36554445f64de09c9ff351b002ffb70cccaad6e",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:22:24+09:00",
          "tree_id": "5ceb3e823b665aefce70bd95d2a0a04efed9bc66",
          "url": "https://github.com/planetarium/libplanet/commit/e36554445f64de09c9ff351b002ffb70cccaad6e"
        },
        "date": 1678437510419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192921.5,
            "unit": "ns",
            "range": "± 8744.424469527923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198523.875,
            "unit": "ns",
            "range": "± 2476.897276163601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168309.63157894736,
            "unit": "ns",
            "range": "± 3646.813330544389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11479255.466666667,
            "unit": "ns",
            "range": "± 69723.18026398258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9340857.066666666,
            "unit": "ns",
            "range": "± 54779.1675684766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19653.876404494382,
            "unit": "ns",
            "range": "± 1103.7213274379872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53481.141304347824,
            "unit": "ns",
            "range": "± 3149.6473117803002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39216.46666666667,
            "unit": "ns",
            "range": "± 1751.976815366551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90726.91578947369,
            "unit": "ns",
            "range": "± 11247.568446125588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.408602150537,
            "unit": "ns",
            "range": "± 460.29842013347456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18064.147368421054,
            "unit": "ns",
            "range": "± 1624.5571964183014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324447,
            "unit": "ns",
            "range": "± 37819.74925693113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5103408.571428572,
            "unit": "ns",
            "range": "± 116408.04898527054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23684756.066666666,
            "unit": "ns",
            "range": "± 292288.7959730109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6074451.6,
            "unit": "ns",
            "range": "± 97452.1990925368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27221438.42857143,
            "unit": "ns",
            "range": "± 435119.4925205497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6181939.3671875,
            "unit": "ns",
            "range": "± 19684.38277481976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849847.3462611607,
            "unit": "ns",
            "range": "± 1015.5350048007637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353114.2240513393,
            "unit": "ns",
            "range": "± 585.4880651048964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559558.916015625,
            "unit": "ns",
            "range": "± 1563.9696431608872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803347.2169596354,
            "unit": "ns",
            "range": "± 626.6976021485921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730441.9606119791,
            "unit": "ns",
            "range": "± 1404.7290028092639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840681.785714285,
            "unit": "ns",
            "range": "± 20472.04924235282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19926133.066666666,
            "unit": "ns",
            "range": "± 122225.76276912833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50171099.85714286,
            "unit": "ns",
            "range": "± 321363.6236230415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102279315.86666666,
            "unit": "ns",
            "range": "± 497343.4171972214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205443958.46666667,
            "unit": "ns",
            "range": "± 1350319.3962966087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45732,
            "unit": "ns",
            "range": "± 2114.31379234493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355321.1458333333,
            "unit": "ns",
            "range": "± 83960.09325212083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483133.1578947366,
            "unit": "ns",
            "range": "± 54838.32167508731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147090.1340206186,
            "unit": "ns",
            "range": "± 138124.75452094543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5047944.407407408,
            "unit": "ns",
            "range": "± 138090.63329045314"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "e36554445f64de09c9ff351b002ffb70cccaad6e",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:22:24+09:00",
          "tree_id": "5ceb3e823b665aefce70bd95d2a0a04efed9bc66",
          "url": "https://github.com/planetarium/libplanet/commit/e36554445f64de09c9ff351b002ffb70cccaad6e"
        },
        "date": 1678437510419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192921.5,
            "unit": "ns",
            "range": "± 8744.424469527923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198523.875,
            "unit": "ns",
            "range": "± 2476.897276163601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168309.63157894736,
            "unit": "ns",
            "range": "± 3646.813330544389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11479255.466666667,
            "unit": "ns",
            "range": "± 69723.18026398258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9340857.066666666,
            "unit": "ns",
            "range": "± 54779.1675684766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19653.876404494382,
            "unit": "ns",
            "range": "± 1103.7213274379872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53481.141304347824,
            "unit": "ns",
            "range": "± 3149.6473117803002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39216.46666666667,
            "unit": "ns",
            "range": "± 1751.976815366551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90726.91578947369,
            "unit": "ns",
            "range": "± 11247.568446125588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.408602150537,
            "unit": "ns",
            "range": "± 460.29842013347456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18064.147368421054,
            "unit": "ns",
            "range": "± 1624.5571964183014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324447,
            "unit": "ns",
            "range": "± 37819.74925693113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5103408.571428572,
            "unit": "ns",
            "range": "± 116408.04898527054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23684756.066666666,
            "unit": "ns",
            "range": "± 292288.7959730109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6074451.6,
            "unit": "ns",
            "range": "± 97452.1990925368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27221438.42857143,
            "unit": "ns",
            "range": "± 435119.4925205497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6181939.3671875,
            "unit": "ns",
            "range": "± 19684.38277481976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849847.3462611607,
            "unit": "ns",
            "range": "± 1015.5350048007637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353114.2240513393,
            "unit": "ns",
            "range": "± 585.4880651048964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559558.916015625,
            "unit": "ns",
            "range": "± 1563.9696431608872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803347.2169596354,
            "unit": "ns",
            "range": "± 626.6976021485921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730441.9606119791,
            "unit": "ns",
            "range": "± 1404.7290028092639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840681.785714285,
            "unit": "ns",
            "range": "± 20472.04924235282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19926133.066666666,
            "unit": "ns",
            "range": "± 122225.76276912833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50171099.85714286,
            "unit": "ns",
            "range": "± 321363.6236230415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102279315.86666666,
            "unit": "ns",
            "range": "± 497343.4171972214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205443958.46666667,
            "unit": "ns",
            "range": "± 1350319.3962966087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45732,
            "unit": "ns",
            "range": "± 2114.31379234493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355321.1458333333,
            "unit": "ns",
            "range": "± 83960.09325212083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483133.1578947366,
            "unit": "ns",
            "range": "± 54838.32167508731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147090.1340206186,
            "unit": "ns",
            "range": "± 138124.75452094543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5047944.407407408,
            "unit": "ns",
            "range": "± 138090.63329045314"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b7327229caeb35e673f6bae37d72feb509f85596",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:25:11+09:00",
          "tree_id": "235d29b043db63e25412e8d98e381f967ab88c53",
          "url": "https://github.com/planetarium/libplanet/commit/b7327229caeb35e673f6bae37d72feb509f85596"
        },
        "date": 1678437728877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227734.32,
            "unit": "ns",
            "range": "± 16845.14364443402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234285.15625,
            "unit": "ns",
            "range": "± 10719.90720792988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199629.6224489796,
            "unit": "ns",
            "range": "± 15032.850980720952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13739472.108433735,
            "unit": "ns",
            "range": "± 731848.6482000527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11181734.033333333,
            "unit": "ns",
            "range": "± 328321.7987633562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23075.260869565216,
            "unit": "ns",
            "range": "± 1456.8637009985343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61546.12222222222,
            "unit": "ns",
            "range": "± 4113.690758801782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46462.68292682927,
            "unit": "ns",
            "range": "± 4439.92554958726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106393.79166666667,
            "unit": "ns",
            "range": "± 15416.612441004681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6047.958333333333,
            "unit": "ns",
            "range": "± 699.0309369957762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21396.252631578947,
            "unit": "ns",
            "range": "± 1806.6512807932631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3954812.8571428573,
            "unit": "ns",
            "range": "± 157579.77702751604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6082897.3802816905,
            "unit": "ns",
            "range": "± 296830.2532483779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28866055.32142857,
            "unit": "ns",
            "range": "± 825950.8521663382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7655134.510638298,
            "unit": "ns",
            "range": "± 297467.0988745882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33649452.708333336,
            "unit": "ns",
            "range": "± 852407.0535418321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6768402.837239583,
            "unit": "ns",
            "range": "± 110807.04327971986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035283.7371651786,
            "unit": "ns",
            "range": "± 34554.77332311829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1542913.2808314732,
            "unit": "ns",
            "range": "± 20481.850799458876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2997555.1,
            "unit": "ns",
            "range": "± 54733.429580465665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935016.0223307292,
            "unit": "ns",
            "range": "± 16631.195492270417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868822.5219029018,
            "unit": "ns",
            "range": "± 6856.951105147296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9178672.5,
            "unit": "ns",
            "range": "± 218094.90016979174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25437124.363636363,
            "unit": "ns",
            "range": "± 616972.5457261176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 71277908.58823529,
            "unit": "ns",
            "range": "± 2237141.86376022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 128094383.44444445,
            "unit": "ns",
            "range": "± 4265841.237386505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 247732866.89285713,
            "unit": "ns",
            "range": "± 6894016.870032709"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56919.744680851065,
            "unit": "ns",
            "range": "± 5333.834596610927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712108.7448979593,
            "unit": "ns",
            "range": "± 141516.76801134754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139851.989247312,
            "unit": "ns",
            "range": "± 177319.47308487498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2636589.76,
            "unit": "ns",
            "range": "± 166487.48387185813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6302441.88,
            "unit": "ns",
            "range": "± 250786.5163010848"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "2fa94d7c50d16c71954b72e7d87cff82bba8381b",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:31:04+09:00",
          "tree_id": "2b58b8fce086a83b7f632125a54f34f5dd788744",
          "url": "https://github.com/planetarium/libplanet/commit/2fa94d7c50d16c71954b72e7d87cff82bba8381b"
        },
        "date": 1678783430975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202294.2394366197,
            "unit": "ns",
            "range": "± 9874.97122811691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204983.80952380953,
            "unit": "ns",
            "range": "± 4874.371083730163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171999.90476190476,
            "unit": "ns",
            "range": "± 7893.218446387779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12179293.375,
            "unit": "ns",
            "range": "± 192727.4658401945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9991992.166666666,
            "unit": "ns",
            "range": "± 210956.89654168693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22389.96907216495,
            "unit": "ns",
            "range": "± 2899.480677112743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55776.01075268817,
            "unit": "ns",
            "range": "± 5535.546739609816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42528.708333333336,
            "unit": "ns",
            "range": "± 2453.162375455583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104840.53608247422,
            "unit": "ns",
            "range": "± 16744.786506465884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6057.418367346939,
            "unit": "ns",
            "range": "± 844.0936934786937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20579.40625,
            "unit": "ns",
            "range": "± 2566.549826551406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439031.5384615385,
            "unit": "ns",
            "range": "± 139509.73304656553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4875616.852941177,
            "unit": "ns",
            "range": "± 146767.093429575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25342115.133333333,
            "unit": "ns",
            "range": "± 420181.92627545557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6640643.592592592,
            "unit": "ns",
            "range": "± 181118.946648171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28673353.192307692,
            "unit": "ns",
            "range": "± 769326.3813351012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012925.376116072,
            "unit": "ns",
            "range": "± 28652.304603469707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847736.9220145089,
            "unit": "ns",
            "range": "± 4881.36248289913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378427.1688058036,
            "unit": "ns",
            "range": "± 3525.1824428705713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594953.833233173,
            "unit": "ns",
            "range": "± 4042.5451254959044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827939.0688802083,
            "unit": "ns",
            "range": "± 1260.3578501655559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760828.1683872768,
            "unit": "ns",
            "range": "± 636.1114848108487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7789402.466666667,
            "unit": "ns",
            "range": "± 94020.00844263087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21995056.133333333,
            "unit": "ns",
            "range": "± 315489.0317574712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48547434.333333336,
            "unit": "ns",
            "range": "± 583790.86270876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108877946.53333333,
            "unit": "ns",
            "range": "± 1244414.1388230426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 217929812.875,
            "unit": "ns",
            "range": "± 4196938.097601915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49865.74418604651,
            "unit": "ns",
            "range": "± 1847.9871300961775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314925.3333333333,
            "unit": "ns",
            "range": "± 82752.14785214253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2537016.4166666665,
            "unit": "ns",
            "range": "± 99084.83876979093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047111.3194444445,
            "unit": "ns",
            "range": "± 88990.7524872592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5153859.133333334,
            "unit": "ns",
            "range": "± 192041.87953360588"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "c0f85e698e07c28eb40a1a899a5ef4c17bb5a3f3",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:40:46+09:00",
          "tree_id": "4a7543b9ada21be69b498aefc3df3ea5c5378ba7",
          "url": "https://github.com/planetarium/libplanet/commit/c0f85e698e07c28eb40a1a899a5ef4c17bb5a3f3"
        },
        "date": 1678784266723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192074.50943396226,
            "unit": "ns",
            "range": "± 7371.604581152657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193553.45833333334,
            "unit": "ns",
            "range": "± 4515.109079323379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165499,
            "unit": "ns",
            "range": "± 1856.9688563175564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11215728.461538462,
            "unit": "ns",
            "range": "± 40342.09367318332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9104981.466666667,
            "unit": "ns",
            "range": "± 92271.30683081641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17500.97894736842,
            "unit": "ns",
            "range": "± 1494.6554287245947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54257.11578947368,
            "unit": "ns",
            "range": "± 5813.271878491378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39364.58823529412,
            "unit": "ns",
            "range": "± 789.623490882168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83505.61224489796,
            "unit": "ns",
            "range": "± 12256.63000186981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4427.606382978724,
            "unit": "ns",
            "range": "± 316.702880263855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17372.57894736842,
            "unit": "ns",
            "range": "± 1683.7097249377473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3280925.346153846,
            "unit": "ns",
            "range": "± 76405.67868473771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5173926.40625,
            "unit": "ns",
            "range": "± 158799.52920582268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23929983.6,
            "unit": "ns",
            "range": "± 171998.41053243983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6235236.161290322,
            "unit": "ns",
            "range": "± 187969.08708882547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27368055.8,
            "unit": "ns",
            "range": "± 388346.4150994573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6266968.3515625,
            "unit": "ns",
            "range": "± 25840.316594082356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849173.3871372768,
            "unit": "ns",
            "range": "± 4071.127543355083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386284.6993689905,
            "unit": "ns",
            "range": "± 1856.4550070110504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561148.4609375,
            "unit": "ns",
            "range": "± 4204.926522095493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813578.0306222098,
            "unit": "ns",
            "range": "± 1090.122646946212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751159.5539899553,
            "unit": "ns",
            "range": "± 313.7902920573401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7963978.133333334,
            "unit": "ns",
            "range": "± 31186.45186813995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20311426.6,
            "unit": "ns",
            "range": "± 154690.72931073056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51444125.93333333,
            "unit": "ns",
            "range": "± 303764.4509494785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103832819.13333334,
            "unit": "ns",
            "range": "± 321412.7448492863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205829686.93333334,
            "unit": "ns",
            "range": "± 706907.3782711633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44231.25714285715,
            "unit": "ns",
            "range": "± 2075.2573487049835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330826.6907216494,
            "unit": "ns",
            "range": "± 74532.08612324305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2482437.9393939395,
            "unit": "ns",
            "range": "± 78432.2739681103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091977.492063492,
            "unit": "ns",
            "range": "± 93757.78308318366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5004104,
            "unit": "ns",
            "range": "± 95885.95261524669"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "189a105c6c01fd9c5454c297df284a3a5d28bae8",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:42:08+09:00",
          "tree_id": "e0dbe127ac62eea224b8e1217647ee9a55c2a5fc",
          "url": "https://github.com/planetarium/libplanet/commit/189a105c6c01fd9c5454c297df284a3a5d28bae8"
        },
        "date": 1678784469612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218770.6947368421,
            "unit": "ns",
            "range": "± 30174.002430961915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219190.40860215054,
            "unit": "ns",
            "range": "± 28551.343935183555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182221.2340425532,
            "unit": "ns",
            "range": "± 28890.828084108205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11719846.469387755,
            "unit": "ns",
            "range": "± 895942.2214357469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9491968.42857143,
            "unit": "ns",
            "range": "± 706969.5639921114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30288.08,
            "unit": "ns",
            "range": "± 12320.331043597751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67532.84210526316,
            "unit": "ns",
            "range": "± 18753.03813758447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50872.4,
            "unit": "ns",
            "range": "± 12433.743722012321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110078.64210526316,
            "unit": "ns",
            "range": "± 21443.377633633976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5423.975,
            "unit": "ns",
            "range": "± 979.987302617304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29126.03,
            "unit": "ns",
            "range": "± 9902.280512211588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3518829.81443299,
            "unit": "ns",
            "range": "± 364246.85941474757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5301031.53,
            "unit": "ns",
            "range": "± 561753.3275650381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26388781.595959596,
            "unit": "ns",
            "range": "± 2697313.848430353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6828327.4948453605,
            "unit": "ns",
            "range": "± 569935.3561537726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31626759.244897958,
            "unit": "ns",
            "range": "± 2599970.0048481054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6318532.578125,
            "unit": "ns",
            "range": "± 155066.34011891208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1951110.0456861414,
            "unit": "ns",
            "range": "± 49031.416600599754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426597.4189778646,
            "unit": "ns",
            "range": "± 62181.02534602584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2714727.3651815876,
            "unit": "ns",
            "range": "± 84711.39738634537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887496.6390591325,
            "unit": "ns",
            "range": "± 25489.19062802931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 818209.4275620404,
            "unit": "ns",
            "range": "± 26234.948527114495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8374930.757575758,
            "unit": "ns",
            "range": "± 741410.1877253789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22918055.333333332,
            "unit": "ns",
            "range": "± 2196430.5424225624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60082295.84,
            "unit": "ns",
            "range": "± 7248843.166152731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110892271.2244898,
            "unit": "ns",
            "range": "± 8913092.981127301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223659762.56,
            "unit": "ns",
            "range": "± 14088914.632585473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64781.73195876289,
            "unit": "ns",
            "range": "± 17273.44186503968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1450540.0612244897,
            "unit": "ns",
            "range": "± 237564.75805651356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2968718.97,
            "unit": "ns",
            "range": "± 316681.5054331132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363204.232323232,
            "unit": "ns",
            "range": "± 287594.19507410616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6364044.919191919,
            "unit": "ns",
            "range": "± 645345.484669364"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "5cdf57ed702ea674aba15002e8d7f5453cdfe526",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T13:34:54+09:00",
          "tree_id": "764fab0d8809b2241a7636a878afc60b3db1b049",
          "url": "https://github.com/planetarium/libplanet/commit/5cdf57ed702ea674aba15002e8d7f5453cdfe526"
        },
        "date": 1678855918317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208899.23958333334,
            "unit": "ns",
            "range": "± 25444.9876506552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209888.7032967033,
            "unit": "ns",
            "range": "± 19751.41054681328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179637.35789473684,
            "unit": "ns",
            "range": "± 20189.505563332285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12409758.137254901,
            "unit": "ns",
            "range": "± 506029.44215498056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10280275.333333334,
            "unit": "ns",
            "range": "± 524471.715147324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23560.552083333332,
            "unit": "ns",
            "range": "± 7751.09582998945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57496.316326530614,
            "unit": "ns",
            "range": "± 11389.650171213218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46092.06122448979,
            "unit": "ns",
            "range": "± 8728.86457445065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106291.6043956044,
            "unit": "ns",
            "range": "± 14803.741427895195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10876.868686868687,
            "unit": "ns",
            "range": "± 5982.90510222022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23350.646464646463,
            "unit": "ns",
            "range": "± 7582.921514842943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3499816.924731183,
            "unit": "ns",
            "range": "± 233130.14009823467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5636632.0612244895,
            "unit": "ns",
            "range": "± 373173.4668608483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27854880.164948452,
            "unit": "ns",
            "range": "± 1818728.0172169248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7012019.202020202,
            "unit": "ns",
            "range": "± 506278.0399434476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31953034.705128204,
            "unit": "ns",
            "range": "± 1628906.3543131615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6464246.199479166,
            "unit": "ns",
            "range": "± 92429.10785387171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2120573.5209517046,
            "unit": "ns",
            "range": "± 51122.71193575194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1603133.08515625,
            "unit": "ns",
            "range": "± 21030.989426346816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3037172.3362165177,
            "unit": "ns",
            "range": "± 40343.648691291484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989667.15625,
            "unit": "ns",
            "range": "± 15296.471876277628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929544.3492838541,
            "unit": "ns",
            "range": "± 16304.389441270941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9854216.27586207,
            "unit": "ns",
            "range": "± 288274.18054145906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25822097.625,
            "unit": "ns",
            "range": "± 474704.6354285122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 63315533.905660376,
            "unit": "ns",
            "range": "± 2607610.5017935573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122666496.9375,
            "unit": "ns",
            "range": "± 2279443.851014291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 221494173.66666666,
            "unit": "ns",
            "range": "± 4732633.838206897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57309.27777777778,
            "unit": "ns",
            "range": "± 7751.768546346689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539436.21,
            "unit": "ns",
            "range": "± 186611.7747277927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945288.6597938146,
            "unit": "ns",
            "range": "± 213973.95476975729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2472023.9494949495,
            "unit": "ns",
            "range": "± 275451.5500343278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6794853.744897959,
            "unit": "ns",
            "range": "± 591821.3698438592"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "32e0bc358f70d93464ec5dde93d4de50e33d1578",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:46:51+09:00",
          "tree_id": "d2a71502bd7224d5f7fdfe26a76a6310141bd793",
          "url": "https://github.com/planetarium/libplanet/commit/32e0bc358f70d93464ec5dde93d4de50e33d1578"
        },
        "date": 1678867169067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188382.53333333333,
            "unit": "ns",
            "range": "± 3481.6266285965216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180347.42,
            "unit": "ns",
            "range": "± 7202.941003903495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158999.35714285713,
            "unit": "ns",
            "range": "± 1737.9652827878422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10900141,
            "unit": "ns",
            "range": "± 46214.47531734124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8862404.666666666,
            "unit": "ns",
            "range": "± 57744.07176457494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17919.316326530614,
            "unit": "ns",
            "range": "± 1911.817403808191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53088.92391304348,
            "unit": "ns",
            "range": "± 4627.23415888802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37464.28571428572,
            "unit": "ns",
            "range": "± 609.6747466504552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76115.87837837837,
            "unit": "ns",
            "range": "± 3459.039711355101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4583.505154639175,
            "unit": "ns",
            "range": "± 447.3720516274117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17460.322916666668,
            "unit": "ns",
            "range": "± 1493.3412871444864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181512.56,
            "unit": "ns",
            "range": "± 77976.35222033664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5028335.333333333,
            "unit": "ns",
            "range": "± 59897.27953119486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22854811.466666665,
            "unit": "ns",
            "range": "± 252444.17266478846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5982438.533333333,
            "unit": "ns",
            "range": "± 98921.86687544777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26372070.07142857,
            "unit": "ns",
            "range": "± 344260.3414399909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887698.751674107,
            "unit": "ns",
            "range": "± 13075.381592265483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830814.2641601562,
            "unit": "ns",
            "range": "± 1240.1870580451707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360086.7056361607,
            "unit": "ns",
            "range": "± 4971.835669898992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574446.530989583,
            "unit": "ns",
            "range": "± 3732.279910961584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796710.6983072917,
            "unit": "ns",
            "range": "± 2157.566541125213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725445.9946986607,
            "unit": "ns",
            "range": "± 1908.634600946525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7647126.2,
            "unit": "ns",
            "range": "± 22298.78271565513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19059599.066666666,
            "unit": "ns",
            "range": "± 200205.94335029356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49227038.93333333,
            "unit": "ns",
            "range": "± 281011.7558685978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98368092.2,
            "unit": "ns",
            "range": "± 892424.1244861581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191950381.33333334,
            "unit": "ns",
            "range": "± 1158422.1496691504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44210.92592592593,
            "unit": "ns",
            "range": "± 2326.1576299650123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1290015.8817204302,
            "unit": "ns",
            "range": "± 80675.37849008499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2371434.214285714,
            "unit": "ns",
            "range": "± 66085.01772288379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2044414.6883116884,
            "unit": "ns",
            "range": "± 104755.48852676178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4895708.684210527,
            "unit": "ns",
            "range": "± 105668.09701453184"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "059444549f27e052a5381916da61a85a6f59ff0f",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:51:31+09:00",
          "tree_id": "58eff47933c90310496dfcf5e4afb42d5c5dff14",
          "url": "https://github.com/planetarium/libplanet/commit/059444549f27e052a5381916da61a85a6f59ff0f"
        },
        "date": 1678867612173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191108.14,
            "unit": "ns",
            "range": "± 29058.48638713853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192574.86,
            "unit": "ns",
            "range": "± 30596.532067638982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161094.65,
            "unit": "ns",
            "range": "± 24861.42286264104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11102963.70212766,
            "unit": "ns",
            "range": "± 737029.1496234772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8997019.340425532,
            "unit": "ns",
            "range": "± 697193.4244131513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18297.989247311827,
            "unit": "ns",
            "range": "± 2148.3986275657976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54792.89473684211,
            "unit": "ns",
            "range": "± 7830.382122239703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43763.125,
            "unit": "ns",
            "range": "± 7600.589703229751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86300.68817204301,
            "unit": "ns",
            "range": "± 12776.104739928343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5190.147368421052,
            "unit": "ns",
            "range": "± 558.7147288771595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17615.255555555555,
            "unit": "ns",
            "range": "± 1755.3420906780157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3240538.393939394,
            "unit": "ns",
            "range": "± 348461.07996486785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4951283.262626262,
            "unit": "ns",
            "range": "± 486614.29035368457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24527306.795918368,
            "unit": "ns",
            "range": "± 1921025.9223063402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6139229.929292929,
            "unit": "ns",
            "range": "± 588419.5348471703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27887763.974358976,
            "unit": "ns",
            "range": "± 1434958.27595936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5623713.546875,
            "unit": "ns",
            "range": "± 99836.17506154618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1806357.7252604167,
            "unit": "ns",
            "range": "± 33381.994286459216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285012.1346679688,
            "unit": "ns",
            "range": "± 29554.5090147163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668716.909855769,
            "unit": "ns",
            "range": "± 42040.621678560776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816669.7771661932,
            "unit": "ns",
            "range": "± 19406.561153041435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723397.5849609375,
            "unit": "ns",
            "range": "± 22024.7022148951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7436466.696969697,
            "unit": "ns",
            "range": "± 461092.09103863034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20628194.343434345,
            "unit": "ns",
            "range": "± 1864408.9113950536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50695221.90322581,
            "unit": "ns",
            "range": "± 3801964.695721608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98414105.22,
            "unit": "ns",
            "range": "± 3797731.2906084047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195576828.91428572,
            "unit": "ns",
            "range": "± 6332336.338733941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49307.90625,
            "unit": "ns",
            "range": "± 6498.001262053182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338548.46,
            "unit": "ns",
            "range": "± 182999.89954257992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2721378.0404040404,
            "unit": "ns",
            "range": "± 310752.66183042136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2210528.1,
            "unit": "ns",
            "range": "± 271655.0696321318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5479166.22,
            "unit": "ns",
            "range": "± 552028.4368550024"
          }
        ]
      }
    ]
  }
}