window.BENCHMARK_DATA = {
  "lastUpdate": 1720680378909,
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
          "id": "4e7eae43dae4c3ffe18ffd8ba289bca63275183c",
          "message": "add tracing example",
          "timestamp": "2024-07-11T15:37:56+09:00",
          "tree_id": "a28ed45abb03a1a23e123f9e8ec2cb8b89e6e291",
          "url": "https://github.com/planetarium/libplanet/commit/4e7eae43dae4c3ffe18ffd8ba289bca63275183c"
        },
        "date": 1720680353331,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3660400.3337053573,
            "unit": "ns",
            "range": "± 6476.878771628362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213042.6827566964,
            "unit": "ns",
            "range": "± 1185.3286394415823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755834.8371930803,
            "unit": "ns",
            "range": "± 795.680326728087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977220.96875,
            "unit": "ns",
            "range": "± 3162.2997286169093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619168.5979817709,
            "unit": "ns",
            "range": "± 1092.2547473858974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581479.8190569197,
            "unit": "ns",
            "range": "± 379.74429732446026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444602.8157894737,
            "unit": "ns",
            "range": "± 53516.22787949738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480805.3181818184,
            "unit": "ns",
            "range": "± 64822.15569852185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103636.18,
            "unit": "ns",
            "range": "± 79963.26192994296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2574993.5789473685,
            "unit": "ns",
            "range": "± 56439.4655147499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3280482.5588235296,
            "unit": "ns",
            "range": "± 66080.41113907225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022179.1597938144,
            "unit": "ns",
            "range": "± 85794.44420445769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1902458.2758620689,
            "unit": "ns",
            "range": "± 54833.663739854805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709869.1813186812,
            "unit": "ns",
            "range": "± 110735.6395522316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8288852.620689655,
            "unit": "ns",
            "range": "± 234806.40370243826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202900.68656716417,
            "unit": "ns",
            "range": "± 9255.176556783834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195484.56666666668,
            "unit": "ns",
            "range": "± 8635.64708765932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166990.6,
            "unit": "ns",
            "range": "± 3352.7417635919014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141054.7333333334,
            "unit": "ns",
            "range": "± 32901.46504655262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822394.5384615385,
            "unit": "ns",
            "range": "± 17789.088184499436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13100.784210526315,
            "unit": "ns",
            "range": "± 1462.827142266746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60494.46153846154,
            "unit": "ns",
            "range": "± 4271.825569440598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52257.2,
            "unit": "ns",
            "range": "± 1389.2539664630558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87625.0824742268,
            "unit": "ns",
            "range": "± 13844.474754294355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3206.4375,
            "unit": "ns",
            "range": "± 522.0222381328817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11960.468421052632,
            "unit": "ns",
            "range": "± 852.9599458385647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5682141.966666667,
            "unit": "ns",
            "range": "± 20569.97509501467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14674804.5,
            "unit": "ns",
            "range": "± 110533.35729931098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37988553.928571425,
            "unit": "ns",
            "range": "± 158566.1745205182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74683792.33333333,
            "unit": "ns",
            "range": "± 307838.4863975325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150734447.13333333,
            "unit": "ns",
            "range": "± 637050.9159171173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38307.166666666664,
            "unit": "ns",
            "range": "± 320.9529371711496"
          }
        ]
      }
    ]
  }
}