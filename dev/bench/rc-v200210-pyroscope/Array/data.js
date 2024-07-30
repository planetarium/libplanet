window.BENCHMARK_DATA = {
  "lastUpdate": 1722299353957,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "bc059152bb158e6b435e0ec3320b91fa1572d4bc",
          "message": "use cache",
          "timestamp": "2024-07-30T09:20:05+09:00",
          "tree_id": "11512283d7a990c058267a16d6a6a1fe8e4d4321",
          "url": "https://github.com/planetarium/libplanet/commit/bc059152bb158e6b435e0ec3320b91fa1572d4bc"
        },
        "date": 1722299301603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10853301.692307692,
            "unit": "ns",
            "range": "± 157928.74196420814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26750740,
            "unit": "ns",
            "range": "± 241170.990904448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67643414.26666667,
            "unit": "ns",
            "range": "± 113936.49600574288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135875193.5,
            "unit": "ns",
            "range": "± 231599.20713030218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274870136.53333336,
            "unit": "ns",
            "range": "± 444879.98418222973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14051.296296296296,
            "unit": "ns",
            "range": "± 383.5996325111353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110298.61111111111,
            "unit": "ns",
            "range": "± 4619.355258722727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 109230.36538461539,
            "unit": "ns",
            "range": "± 4258.196971972012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93357.53571428571,
            "unit": "ns",
            "range": "± 3966.1905880226536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3102668.8260869565,
            "unit": "ns",
            "range": "± 75024.95555216772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736121.6875,
            "unit": "ns",
            "range": "± 142393.67672319306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4857.688888888889,
            "unit": "ns",
            "range": "± 518.7106886568287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26696.38823529412,
            "unit": "ns",
            "range": "± 1439.5078201057672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23047.795698924732,
            "unit": "ns",
            "range": "± 1297.2370015699403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31728.84736842105,
            "unit": "ns",
            "range": "± 5094.957218554693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1154.6382978723404,
            "unit": "ns",
            "range": "± 241.18657619985208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4901.152173913043,
            "unit": "ns",
            "range": "± 634.589127864647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686757.797752809,
            "unit": "ns",
            "range": "± 40875.54816929614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1267231.25,
            "unit": "ns",
            "range": "± 44510.435385337536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073033.4936708861,
            "unit": "ns",
            "range": "± 55654.5268624108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9571847.77,
            "unit": "ns",
            "range": "± 1255944.1904945727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178256.846153846,
            "unit": "ns",
            "range": "± 32750.366453029073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274326.08,
            "unit": "ns",
            "range": "± 91297.22652063872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2551887.0714285714,
            "unit": "ns",
            "range": "± 36686.127953564064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2308659.6129032257,
            "unit": "ns",
            "range": "± 69206.69826959305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3082350.8105263156,
            "unit": "ns",
            "range": "± 275160.4523618629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3022379.5727864583,
            "unit": "ns",
            "range": "± 29418.30287475255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917120.9052036831,
            "unit": "ns",
            "range": "± 4616.049179542698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616754.8961588541,
            "unit": "ns",
            "range": "± 8316.958995946883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1649628.4712611607,
            "unit": "ns",
            "range": "± 5532.973204023852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460545.4608328683,
            "unit": "ns",
            "range": "± 857.9816725356586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424230.7492327009,
            "unit": "ns",
            "range": "± 844.5632057736544"
          }
        ]
      }
    ]
  }
}