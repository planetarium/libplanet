window.BENCHMARK_DATA = {
  "lastUpdate": 1698666419210,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "f1eb0c6d0bd637f1a2b33a1ca540400c75201b88",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T20:33:25+09:00",
          "tree_id": "858e9b734ea711e4bbeec82a2eba57fe46e551d7",
          "url": "https://github.com/planetarium/libplanet/commit/f1eb0c6d0bd637f1a2b33a1ca540400c75201b88"
        },
        "date": 1698666386899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47099.95,
            "unit": "ns",
            "range": "± 2472.27513677154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5300788.906808035,
            "unit": "ns",
            "range": "± 24101.290525037966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1631994.7181490385,
            "unit": "ns",
            "range": "± 1112.5040104735547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1111901.153545673,
            "unit": "ns",
            "range": "± 465.4803702463157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534809.184151786,
            "unit": "ns",
            "range": "± 3302.2863160825536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810387.8089425223,
            "unit": "ns",
            "range": "± 1014.9057253481087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720587.4479166666,
            "unit": "ns",
            "range": "± 2142.3770277911813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7664098.533333333,
            "unit": "ns",
            "range": "± 66124.45541538284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19672972.846153848,
            "unit": "ns",
            "range": "± 93370.65033318033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50916724.06666667,
            "unit": "ns",
            "range": "± 386937.6755516996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101343259.73333333,
            "unit": "ns",
            "range": "± 702367.2131335031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201685468.33333334,
            "unit": "ns",
            "range": "± 1094918.8661806777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165694.0714285714,
            "unit": "ns",
            "range": "± 27409.67151169676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3321629.066666667,
            "unit": "ns",
            "range": "± 33366.910044590724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4173473.896551724,
            "unit": "ns",
            "range": "± 109486.86703643137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4011858.5681818184,
            "unit": "ns",
            "range": "± 147969.27586894954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9805514.511627907,
            "unit": "ns",
            "range": "± 305107.8198014107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263307.4210526316,
            "unit": "ns",
            "range": "± 9038.033936622765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256255.70731707316,
            "unit": "ns",
            "range": "± 8250.548740065422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222299.3076923077,
            "unit": "ns",
            "range": "± 2575.2152461692526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4094121.214285714,
            "unit": "ns",
            "range": "± 32407.415058851937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741340.2,
            "unit": "ns",
            "range": "± 24961.087416788785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17648.90425531915,
            "unit": "ns",
            "range": "± 1310.636347693622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83464.13095238095,
            "unit": "ns",
            "range": "± 4437.094647441691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68726.53333333334,
            "unit": "ns",
            "range": "± 1070.0414455702617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76477.96875,
            "unit": "ns",
            "range": "± 9038.942543476882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4657.884210526316,
            "unit": "ns",
            "range": "± 502.03517430295864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16905.26595744681,
            "unit": "ns",
            "range": "± 1303.0864863360582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1286140.7419354839,
            "unit": "ns",
            "range": "± 82580.91716612197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2445758.911764706,
            "unit": "ns",
            "range": "± 76797.24796733027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1903052.1860465116,
            "unit": "ns",
            "range": "± 102967.51155131827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8497650.5,
            "unit": "ns",
            "range": "± 437761.5956202571"
          }
        ]
      }
    ]
  }
}