window.BENCHMARK_DATA = {
  "lastUpdate": 1696351212914,
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
        "date": 1696351113722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8866481.3,
            "unit": "ns",
            "range": "± 161508.76642337407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21967476.560240965,
            "unit": "ns",
            "range": "± 1172379.5354857526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55147114.520833336,
            "unit": "ns",
            "range": "± 2163832.742081764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111400090.8,
            "unit": "ns",
            "range": "± 3947947.4794241176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224935162.58,
            "unit": "ns",
            "range": "± 5951376.76783504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71843.65053763441,
            "unit": "ns",
            "range": "± 7852.9101708223525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360325.5106382979,
            "unit": "ns",
            "range": "± 46382.077080842544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324098.6777777778,
            "unit": "ns",
            "range": "± 27593.698667002638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306526.8064516129,
            "unit": "ns",
            "range": "± 9130.481854460018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4140258.5714285714,
            "unit": "ns",
            "range": "± 56929.03218612057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782063.3,
            "unit": "ns",
            "range": "± 42820.69803794823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24055.979166666668,
            "unit": "ns",
            "range": "± 4484.175539967811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102702.12626262626,
            "unit": "ns",
            "range": "± 16497.948394150044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96178.85714285714,
            "unit": "ns",
            "range": "± 11565.13313534022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103941.6875,
            "unit": "ns",
            "range": "± 10894.828641257669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7419.648936170212,
            "unit": "ns",
            "range": "± 1039.2061456050826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20482.460674157304,
            "unit": "ns",
            "range": "± 2869.100536342435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495117.27,
            "unit": "ns",
            "range": "± 169427.82370201507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2822301.035714286,
            "unit": "ns",
            "range": "± 119024.45330694396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2497095.22,
            "unit": "ns",
            "range": "± 265869.4962329322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10527430.732558139,
            "unit": "ns",
            "range": "± 389846.3001190547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473377.6914893617,
            "unit": "ns",
            "range": "± 250830.02565774086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631169.275510204,
            "unit": "ns",
            "range": "± 273189.3218485634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4651294.788659794,
            "unit": "ns",
            "range": "± 317252.5711322119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4584894.201030928,
            "unit": "ns",
            "range": "± 329615.83816587925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16044843.922222223,
            "unit": "ns",
            "range": "± 2292076.229671399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5518249.038802084,
            "unit": "ns",
            "range": "± 64459.925680071894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1709009.166015625,
            "unit": "ns",
            "range": "± 9972.156142706406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1039372.3237847222,
            "unit": "ns",
            "range": "± 21554.188296473956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573021.913762019,
            "unit": "ns",
            "range": "± 31524.74799577084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774748.3589192708,
            "unit": "ns",
            "range": "± 2233.4508995464694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696488.0085286458,
            "unit": "ns",
            "range": "± 1612.9810720234075"
          }
        ]
      }
    ]
  }
}