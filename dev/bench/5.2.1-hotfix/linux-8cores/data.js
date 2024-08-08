window.BENCHMARK_DATA = {
  "lastUpdate": 1723119887903,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "adc55a38752c6ea162d1cf133286314e43c44f73",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:11:23+09:00",
          "tree_id": "9bbfc5a58234aa086670bb18a2080a94277a9e87",
          "url": "https://github.com/planetarium/libplanet/commit/adc55a38752c6ea162d1cf133286314e43c44f73"
        },
        "date": 1723119861644,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31955.5,
            "unit": "ns",
            "range": "± 371.36106212355986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3770554.83984375,
            "unit": "ns",
            "range": "± 6133.388126892028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188542.0701822916,
            "unit": "ns",
            "range": "± 2812.0292619695915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765292.0498046875,
            "unit": "ns",
            "range": "± 1000.2194603921372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964737.68984375,
            "unit": "ns",
            "range": "± 3979.6880664740743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613161.1917317709,
            "unit": "ns",
            "range": "± 617.037192052378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571527.4172526042,
            "unit": "ns",
            "range": "± 1261.471911174853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2430303.076923077,
            "unit": "ns",
            "range": "± 63473.44836759577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559784.6428571427,
            "unit": "ns",
            "range": "± 24304.400595071547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3066356.4285714286,
            "unit": "ns",
            "range": "± 47584.881024437695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2565769.6428571427,
            "unit": "ns",
            "range": "± 36817.59680215039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3242281.8666666667,
            "unit": "ns",
            "range": "± 43491.5649060936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201193.05660377358,
            "unit": "ns",
            "range": "± 8265.145304262991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191945.16949152542,
            "unit": "ns",
            "range": "± 8306.8555674848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162069.14705882352,
            "unit": "ns",
            "range": "± 2867.864448094969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3109556.533333333,
            "unit": "ns",
            "range": "± 54931.456458892826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870230.0714285714,
            "unit": "ns",
            "range": "± 43487.31690692973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13095.193548387097,
            "unit": "ns",
            "range": "± 1008.5035217767884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61050.947916666664,
            "unit": "ns",
            "range": "± 4975.970509664245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50449.28571428572,
            "unit": "ns",
            "range": "± 687.4351609636362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55859.62886597938,
            "unit": "ns",
            "range": "± 9892.356489902937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2826.6612903225805,
            "unit": "ns",
            "range": "± 244.6887681686313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12187.681818181818,
            "unit": "ns",
            "range": "± 1292.8374171765872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019839.7875,
            "unit": "ns",
            "range": "± 53104.128131077225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929595.9,
            "unit": "ns",
            "range": "± 56849.850508613694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1713530.1294117647,
            "unit": "ns",
            "range": "± 85959.0132438251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8447818.72413793,
            "unit": "ns",
            "range": "± 245004.04872469476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10479469.933333334,
            "unit": "ns",
            "range": "± 106848.86072623909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27469339.266666666,
            "unit": "ns",
            "range": "± 262561.6331523669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71056942.2,
            "unit": "ns",
            "range": "± 336955.1365714518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142068179,
            "unit": "ns",
            "range": "± 501084.00535721885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289632976,
            "unit": "ns",
            "range": "± 1160783.1304957608"
          }
        ]
      }
    ]
  }
}