window.BENCHMARK_DATA = {
  "lastUpdate": 1722330186936,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4",
          "message": "Prepare 5.1.4",
          "timestamp": "2024-07-30T17:44:56+09:00",
          "tree_id": "074f2d6d79d41c7724b127e60b5ef1a6e9d034e7",
          "url": "https://github.com/planetarium/libplanet/commit/7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4"
        },
        "date": 1722329638415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041896.875,
            "unit": "ns",
            "range": "± 105146.36160396913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815896.9696969697,
            "unit": "ns",
            "range": "± 55715.87231687486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608418.5567010308,
            "unit": "ns",
            "range": "± 130444.51912107508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6931300,
            "unit": "ns",
            "range": "± 177759.56940803223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30644,
            "unit": "ns",
            "range": "± 1248.5354685897116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9514386.666666666,
            "unit": "ns",
            "range": "± 87038.28276492286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24788583.333333332,
            "unit": "ns",
            "range": "± 211704.66850465693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62091126.315789476,
            "unit": "ns",
            "range": "± 1372828.788727092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120989433.33333333,
            "unit": "ns",
            "range": "± 1818165.988283903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242782671.42857143,
            "unit": "ns",
            "range": "± 3124182.01021756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316353.4635416665,
            "unit": "ns",
            "range": "± 8844.059072029513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1100235.83984375,
            "unit": "ns",
            "range": "± 3580.440719346994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741486.8489583334,
            "unit": "ns",
            "range": "± 1677.1774875282067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927644.1796875,
            "unit": "ns",
            "range": "± 5804.377156251522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630385.5924479166,
            "unit": "ns",
            "range": "± 1828.8671485943935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592465.9109933035,
            "unit": "ns",
            "range": "± 546.3734305236036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139364.285714286,
            "unit": "ns",
            "range": "± 17561.566740289043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208090.909090909,
            "unit": "ns",
            "range": "± 82737.87360929027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2695879.3103448274,
            "unit": "ns",
            "range": "± 77595.17832641014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2352573.3333333335,
            "unit": "ns",
            "range": "± 31061.700502310527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3014560,
            "unit": "ns",
            "range": "± 37242.56013909739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177591.66666666666,
            "unit": "ns",
            "range": "± 7228.364366330005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170426.31578947368,
            "unit": "ns",
            "range": "± 8661.645238960898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143208.33333333334,
            "unit": "ns",
            "range": "± 1979.6502598982354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2831085.714285714,
            "unit": "ns",
            "range": "± 45621.028503950256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2534707.6923076925,
            "unit": "ns",
            "range": "± 22141.607196198955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11893.406593406593,
            "unit": "ns",
            "range": "± 1507.2271964550737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57269.072164948455,
            "unit": "ns",
            "range": "± 6932.131719162678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47664.28571428572,
            "unit": "ns",
            "range": "± 3408.72894048364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63487.878787878784,
            "unit": "ns",
            "range": "± 13069.338417801997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2945.918367346939,
            "unit": "ns",
            "range": "± 668.6142566497107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11401.08695652174,
            "unit": "ns",
            "range": "± 1300.4221263271338"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "fab0c3af1dad67620d14fabdc9230d09b48a26ab",
          "message": "Prepare 5.1.4",
          "timestamp": "2024-07-30T17:46:57+09:00",
          "tree_id": "bdf77a7c6719f1af7905c32a7a4aa6f2cd5da84a",
          "url": "https://github.com/planetarium/libplanet/commit/fab0c3af1dad67620d14fabdc9230d09b48a26ab"
        },
        "date": 1722329857710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972076.5306122449,
            "unit": "ns",
            "range": "± 77202.90417193856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751024.4444444445,
            "unit": "ns",
            "range": "± 62189.12194981442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557648.3870967743,
            "unit": "ns",
            "range": "± 113778.19632656685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6835817.741935484,
            "unit": "ns",
            "range": "± 208616.98618456547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30500,
            "unit": "ns",
            "range": "± 673.3003292241385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9620407.142857144,
            "unit": "ns",
            "range": "± 66821.66235914489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23232246.153846152,
            "unit": "ns",
            "range": "± 193107.2828567263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58426300,
            "unit": "ns",
            "range": "± 585078.3256478205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116868471.42857143,
            "unit": "ns",
            "range": "± 458766.8310533416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235864720,
            "unit": "ns",
            "range": "± 1904482.3140610754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3349831.417410714,
            "unit": "ns",
            "range": "± 8149.984215115646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065125.0130208333,
            "unit": "ns",
            "range": "± 1792.45550779021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729416.7061941965,
            "unit": "ns",
            "range": "± 1399.8462930414835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923986.8229166667,
            "unit": "ns",
            "range": "± 4318.982025700262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604880.5989583334,
            "unit": "ns",
            "range": "± 1024.18966970832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561481.6180889423,
            "unit": "ns",
            "range": "± 735.1527346366872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138590.909090909,
            "unit": "ns",
            "range": "± 25210.143632897885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249564.5161290322,
            "unit": "ns",
            "range": "± 98381.97072063958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728207.1428571427,
            "unit": "ns",
            "range": "± 64412.78267105506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2205117.5,
            "unit": "ns",
            "range": "± 56794.56405687305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2964521.4285714286,
            "unit": "ns",
            "range": "± 30705.57901127387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176519.67213114753,
            "unit": "ns",
            "range": "± 7810.245827802758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163731.25,
            "unit": "ns",
            "range": "± 7299.442792389367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142638.23529411765,
            "unit": "ns",
            "range": "± 4485.533291890271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2915802.6315789474,
            "unit": "ns",
            "range": "± 60956.982722983084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488900,
            "unit": "ns",
            "range": "± 39443.757427506825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10415.625,
            "unit": "ns",
            "range": "± 1327.8655706374086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52755.208333333336,
            "unit": "ns",
            "range": "± 5313.812582945193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44446.666666666664,
            "unit": "ns",
            "range": "± 1322.9364760033757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53326.041666666664,
            "unit": "ns",
            "range": "± 9640.662182887721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2585.5670103092784,
            "unit": "ns",
            "range": "± 353.5503531799635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9815.625,
            "unit": "ns",
            "range": "± 1053.548202878954"
          }
        ]
      }
    ]
  }
}