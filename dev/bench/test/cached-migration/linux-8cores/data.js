window.BENCHMARK_DATA = {
  "lastUpdate": 1717403012858,
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d10613e3a1b49bc92c956e18bab16606d2f35f2f",
          "message": "Changed to automatically prepare migration during Swarm instantiation",
          "timestamp": "2024-05-30T11:49:48+09:00",
          "tree_id": "7094e999c7f1b85c985d3e16c330f59e2acaae52",
          "url": "https://github.com/planetarium/libplanet/commit/d10613e3a1b49bc92c956e18bab16606d2f35f2f"
        },
        "date": 1717402988156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979149.0107526882,
            "unit": "ns",
            "range": "± 81693.4615725543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898545.4375,
            "unit": "ns",
            "range": "± 87084.82084796991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666283.030927835,
            "unit": "ns",
            "range": "± 155509.34099526075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7968666.361111111,
            "unit": "ns",
            "range": "± 263128.9762907865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757377.066666666,
            "unit": "ns",
            "range": "± 49479.68646174287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15000138.066666666,
            "unit": "ns",
            "range": "± 100185.05780551927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37640129.43333333,
            "unit": "ns",
            "range": "± 215340.3011327044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77088806.53333333,
            "unit": "ns",
            "range": "± 373208.8180237643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153807317.5,
            "unit": "ns",
            "range": "± 814750.8233746771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791255.428185096,
            "unit": "ns",
            "range": "± 9053.201923038738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1181610.4165736607,
            "unit": "ns",
            "range": "± 1310.3306764232648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779676.2863932292,
            "unit": "ns",
            "range": "± 2257.543228038957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934203.1402064732,
            "unit": "ns",
            "range": "± 4010.990247092713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624283.9416155134,
            "unit": "ns",
            "range": "± 428.2994573175405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580184.8369791667,
            "unit": "ns",
            "range": "± 462.8237222369333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380345.1,
            "unit": "ns",
            "range": "± 46626.75725476453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2688361.0681818184,
            "unit": "ns",
            "range": "± 100605.79844041025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3213665.36,
            "unit": "ns",
            "range": "± 77707.51517650443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3283012.5675675673,
            "unit": "ns",
            "range": "± 99156.37329198219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8984027.392857144,
            "unit": "ns",
            "range": "± 213128.7567880626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200785.98039215687,
            "unit": "ns",
            "range": "± 8105.69233684624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198286.97916666666,
            "unit": "ns",
            "range": "± 7830.377274108567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168426.22222222222,
            "unit": "ns",
            "range": "± 3542.6381297418247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3242281.6666666665,
            "unit": "ns",
            "range": "± 30969.643020376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828580.7666666666,
            "unit": "ns",
            "range": "± 36641.873793061764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12241.083333333334,
            "unit": "ns",
            "range": "± 982.7194563172959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61809.69892473118,
            "unit": "ns",
            "range": "± 5190.378296896108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54647.5,
            "unit": "ns",
            "range": "± 1685.2429956968979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59538.97368421053,
            "unit": "ns",
            "range": "± 10773.089180267758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3480.257731958763,
            "unit": "ns",
            "range": "± 770.5692738482174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11710,
            "unit": "ns",
            "range": "± 693.3577635213253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36420.84482758621,
            "unit": "ns",
            "range": "± 2002.8488943664215"
          }
        ]
      }
    ]
  }
}