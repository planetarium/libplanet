window.BENCHMARK_DATA = {
  "lastUpdate": 1678437531893,
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
      }
    ]
  }
}