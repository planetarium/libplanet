window.BENCHMARK_DATA = {
  "lastUpdate": 1722325166824,
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
          "id": "448e191e2227d757fc30442fccab357deaf9baed",
          "message": "use cache",
          "timestamp": "2024-07-30T16:30:19+09:00",
          "tree_id": "e9d22d18ab790b84ed12aa60ea24693b08147288",
          "url": "https://github.com/planetarium/libplanet/commit/448e191e2227d757fc30442fccab357deaf9baed"
        },
        "date": 1722325140414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038012.6505376344,
            "unit": "ns",
            "range": "± 82712.83492299626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994833.6538461538,
            "unit": "ns",
            "range": "± 81079.73910097237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708587.6578947369,
            "unit": "ns",
            "range": "± 86382.42452097188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8230416.75,
            "unit": "ns",
            "range": "± 154265.93441227428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201810.66666666666,
            "unit": "ns",
            "range": "± 8933.17120731541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195002.85714285713,
            "unit": "ns",
            "range": "± 8961.604624563874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176261.42857142858,
            "unit": "ns",
            "range": "± 5043.243517806193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3128427.8,
            "unit": "ns",
            "range": "± 50578.330591836886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2999760.2,
            "unit": "ns",
            "range": "± 27025.25036807509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17790.71052631579,
            "unit": "ns",
            "range": "± 1785.616127617346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67639.04166666667,
            "unit": "ns",
            "range": "± 7887.271032181392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50878.833333333336,
            "unit": "ns",
            "range": "± 316.4767213422105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62602.63917525773,
            "unit": "ns",
            "range": "± 9440.770899165633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3488.340206185567,
            "unit": "ns",
            "range": "± 530.9070831800894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17067.73469387755,
            "unit": "ns",
            "range": "± 3866.400261280951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43597.142857142855,
            "unit": "ns",
            "range": "± 603.6521676929849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10423214.466666667,
            "unit": "ns",
            "range": "± 78477.77926072602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28647855.133333333,
            "unit": "ns",
            "range": "± 144350.43802935502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69245330.93333334,
            "unit": "ns",
            "range": "± 517479.646964492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139082431.16666666,
            "unit": "ns",
            "range": "± 433458.8032461748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289427666.73333335,
            "unit": "ns",
            "range": "± 1794044.2239598325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748965.719951923,
            "unit": "ns",
            "range": "± 4455.629368297543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196314.1393694195,
            "unit": "ns",
            "range": "± 1098.5546576259753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771023.1344168527,
            "unit": "ns",
            "range": "± 1002.0702155544931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958395.7262369792,
            "unit": "ns",
            "range": "± 4582.152668246844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610369.6690104167,
            "unit": "ns",
            "range": "± 916.0337692469542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601834.6300130208,
            "unit": "ns",
            "range": "± 1043.0056902878775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2478860.6842105263,
            "unit": "ns",
            "range": "± 52770.82498360522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511275.1428571427,
            "unit": "ns",
            "range": "± 25252.396217928563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059232.2666666666,
            "unit": "ns",
            "range": "± 37107.44392680466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2635344.1666666665,
            "unit": "ns",
            "range": "± 59098.20610362608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3340644.6071428573,
            "unit": "ns",
            "range": "± 94675.18858917317"
          }
        ]
      }
    ]
  }
}