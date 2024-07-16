window.BENCHMARK_DATA = {
  "lastUpdate": 1721090306711,
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "20de2d8c86ce12c1079fefb7153f47bc58bc2152",
          "message": "add minor adjustments",
          "timestamp": "2024-07-16T09:26:28+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/20de2d8c86ce12c1079fefb7153f47bc58bc2152"
        },
        "date": 1721090241503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025056.8421052631,
            "unit": "ns",
            "range": "± 70386.13507785613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1792554.347826087,
            "unit": "ns",
            "range": "± 67182.65552133639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559930,
            "unit": "ns",
            "range": "± 86034.92947569399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6751089.285714285,
            "unit": "ns",
            "range": "± 167895.42454949772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33175.257731958765,
            "unit": "ns",
            "range": "± 4213.471226510547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9819733.333333334,
            "unit": "ns",
            "range": "± 150840.54810421818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24680273.333333332,
            "unit": "ns",
            "range": "± 222540.4183727617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60597203.333333336,
            "unit": "ns",
            "range": "± 788645.4425755836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119360326.66666667,
            "unit": "ns",
            "range": "± 1192645.5086227825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242113560,
            "unit": "ns",
            "range": "± 1358817.7675569935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3351352.4479166665,
            "unit": "ns",
            "range": "± 6767.545129897063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060622.1261160714,
            "unit": "ns",
            "range": "± 3049.5259155153853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733331.4903846154,
            "unit": "ns",
            "range": "± 1262.8078876002282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936853.1850961538,
            "unit": "ns",
            "range": "± 2315.4342530036015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620158.1640625,
            "unit": "ns",
            "range": "± 1581.6382255410829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580930.1339285715,
            "unit": "ns",
            "range": "± 1533.3849681034512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2217421.4285714286,
            "unit": "ns",
            "range": "± 39241.52389755267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288793.75,
            "unit": "ns",
            "range": "± 42634.26585506076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2730040,
            "unit": "ns",
            "range": "± 62315.077165203475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2336760,
            "unit": "ns",
            "range": "± 30198.812654047935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2980527.272727273,
            "unit": "ns",
            "range": "± 72458.80229691236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178976.59574468085,
            "unit": "ns",
            "range": "± 6032.384082958356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174192.1875,
            "unit": "ns",
            "range": "± 7996.771266857922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140086.36363636365,
            "unit": "ns",
            "range": "± 3398.5004332507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2825433.3333333335,
            "unit": "ns",
            "range": "± 43610.75664601676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557333.3333333335,
            "unit": "ns",
            "range": "± 42003.667640315594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11715.053763440861,
            "unit": "ns",
            "range": "± 1328.9376467002523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56473.958333333336,
            "unit": "ns",
            "range": "± 5284.261533662046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46153.846153846156,
            "unit": "ns",
            "range": "± 1147.2508946976748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63177.77777777778,
            "unit": "ns",
            "range": "± 13049.587964060245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2783.505154639175,
            "unit": "ns",
            "range": "± 527.1148697491398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10724.21052631579,
            "unit": "ns",
            "range": "± 1424.535444207308"
          }
        ]
      }
    ]
  }
}