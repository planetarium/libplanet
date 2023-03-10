window.BENCHMARK_DATA = {
  "lastUpdate": 1678437748902,
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
      }
    ]
  }
}