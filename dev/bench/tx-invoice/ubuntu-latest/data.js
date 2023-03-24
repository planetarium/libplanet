window.BENCHMARK_DATA = {
  "lastUpdate": 1679652722336,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679652702393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555014.8,
            "unit": "ns",
            "range": "± 53752.40526605032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3659683.6326530613,
            "unit": "ns",
            "range": "± 139336.39478893846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4187629.8666666667,
            "unit": "ns",
            "range": "± 65189.348115280605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680514.315789473,
            "unit": "ns",
            "range": "± 157640.64159588557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883910.555555556,
            "unit": "ns",
            "range": "± 191444.30398247248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7758707.142857143,
            "unit": "ns",
            "range": "± 92243.3515018059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21263530.633333333,
            "unit": "ns",
            "range": "± 211443.87783991513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54195108.666666664,
            "unit": "ns",
            "range": "± 438910.5781317561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108064128.73333333,
            "unit": "ns",
            "range": "± 1078574.3957994122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217889259.7857143,
            "unit": "ns",
            "range": "± 3282853.7837574086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461140.8686868686,
            "unit": "ns",
            "range": "± 90115.82783394307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657567.882352941,
            "unit": "ns",
            "range": "± 52770.870232641544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282160.7625,
            "unit": "ns",
            "range": "± 116755.90956179093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5616595.097560976,
            "unit": "ns",
            "range": "± 201409.67205496924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50607.59322033898,
            "unit": "ns",
            "range": "± 2241.459062358513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5987319.911830357,
            "unit": "ns",
            "range": "± 17313.88269658251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858026.033203125,
            "unit": "ns",
            "range": "± 2634.4635588339916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350954.5150669643,
            "unit": "ns",
            "range": "± 3346.4200409960595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653574.1421875,
            "unit": "ns",
            "range": "± 3196.279653007215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851340.8299278846,
            "unit": "ns",
            "range": "± 149.30088552060244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762347.4296875,
            "unit": "ns",
            "range": "± 232.0752180884784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298541.8947368421,
            "unit": "ns",
            "range": "± 10295.240143398396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285354.77777777775,
            "unit": "ns",
            "range": "± 5794.257822397818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232896.07692307694,
            "unit": "ns",
            "range": "± 2632.0078983397975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4626634.533333333,
            "unit": "ns",
            "range": "± 34428.42725727569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4176337.076923077,
            "unit": "ns",
            "range": "± 19524.478590825154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20086.271739130436,
            "unit": "ns",
            "range": "± 1575.9479903231374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92878.56410256411,
            "unit": "ns",
            "range": "± 4803.403808258073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81021.71666666666,
            "unit": "ns",
            "range": "± 3640.850855536365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197581.74489795917,
            "unit": "ns",
            "range": "± 17389.522607647425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6792.723404255319,
            "unit": "ns",
            "range": "± 886.5399627021087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20508.65263157895,
            "unit": "ns",
            "range": "± 1589.5580462212856"
          }
        ]
      }
    ]
  }
}