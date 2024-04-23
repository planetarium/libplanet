window.BENCHMARK_DATA = {
  "lastUpdate": 1713837502498,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713837478452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2693207.414141414,
            "unit": "ns",
            "range": "± 157941.96394452386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2884495.9375,
            "unit": "ns",
            "range": "± 74150.37753582679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3906621.875,
            "unit": "ns",
            "range": "± 118412.17858675387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3637871.9292929294,
            "unit": "ns",
            "range": "± 402997.08768242405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9553971.76923077,
            "unit": "ns",
            "range": "± 150088.82930626662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206045.5,
            "unit": "ns",
            "range": "± 7329.90941980623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190082.84666666668,
            "unit": "ns",
            "range": "± 9062.114359352458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168608.1923076923,
            "unit": "ns",
            "range": "± 2332.426003992959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219365.8666666667,
            "unit": "ns",
            "range": "± 57309.202531863026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901725.7,
            "unit": "ns",
            "range": "± 39407.8866222051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12025.602150537634,
            "unit": "ns",
            "range": "± 952.9251206928586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59629.44680851064,
            "unit": "ns",
            "range": "± 3399.460850253913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50525.27777777778,
            "unit": "ns",
            "range": "± 677.8678342078158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56314.326315789476,
            "unit": "ns",
            "range": "± 9254.849337764805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2675.574468085106,
            "unit": "ns",
            "range": "± 364.9540327325875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11341.847826086956,
            "unit": "ns",
            "range": "± 677.7200779533955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5804118.214285715,
            "unit": "ns",
            "range": "± 24150.142022766246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14530221.766666668,
            "unit": "ns",
            "range": "± 89865.88139433648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38195032.733333334,
            "unit": "ns",
            "range": "± 138128.99058771462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75717180.57142857,
            "unit": "ns",
            "range": "± 247926.1622275453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154079253.56666666,
            "unit": "ns",
            "range": "± 626273.6927088744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792564.8585858585,
            "unit": "ns",
            "range": "± 248541.3820655245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872779.975308642,
            "unit": "ns",
            "range": "± 149339.14514704235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465034.9444444445,
            "unit": "ns",
            "range": "± 372977.2679503656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8684048.642857144,
            "unit": "ns",
            "range": "± 130031.501732262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 206709.8524590164,
            "unit": "ns",
            "range": "± 9305.225544169729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662768.0174278845,
            "unit": "ns",
            "range": "± 5262.611136448002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218669.3783482143,
            "unit": "ns",
            "range": "± 2665.945596335599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763647.8970703125,
            "unit": "ns",
            "range": "± 1146.6732743818359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940136.6787760416,
            "unit": "ns",
            "range": "± 2429.747897437054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622728.7025669643,
            "unit": "ns",
            "range": "± 367.38003540116927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581454.8828776042,
            "unit": "ns",
            "range": "± 896.441366817496"
          }
        ]
      }
    ]
  }
}