window.BENCHMARK_DATA = {
  "lastUpdate": 1684412367243,
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
          "id": "bed16271f2349f89970f9949eccbcd7e6099e246",
          "message": "fix format",
          "timestamp": "2023-05-18T21:05:18+09:00",
          "tree_id": "0bb49fbbffb32b6a9953b9f954c9f0207f91338b",
          "url": "https://github.com/planetarium/libplanet/commit/bed16271f2349f89970f9949eccbcd7e6099e246"
        },
        "date": 1684412342236,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611003.3,
            "unit": "ns",
            "range": "± 80252.18580404097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3794948.725,
            "unit": "ns",
            "range": "± 126312.39161494227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434735.875,
            "unit": "ns",
            "range": "± 86371.90777706604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668680.294117647,
            "unit": "ns",
            "range": "± 147972.05844522448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7000964.275862069,
            "unit": "ns",
            "range": "± 202491.3415907132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291180.55263157893,
            "unit": "ns",
            "range": "± 9994.073302354287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281675.4,
            "unit": "ns",
            "range": "± 10219.09348496947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258867.4642857143,
            "unit": "ns",
            "range": "± 11091.569351972263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4427523.5,
            "unit": "ns",
            "range": "± 55450.924821606255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4316531.285714285,
            "unit": "ns",
            "range": "± 32066.589143479283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21150.41489361702,
            "unit": "ns",
            "range": "± 1889.0457362791115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100207.26804123711,
            "unit": "ns",
            "range": "± 7490.940871194943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82703.9387755102,
            "unit": "ns",
            "range": "± 6043.714331770485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97018.72619047618,
            "unit": "ns",
            "range": "± 7664.682983488494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6128.075268817204,
            "unit": "ns",
            "range": "± 763.9165848578303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20184.56842105263,
            "unit": "ns",
            "range": "± 1339.564121332896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028575.738541666,
            "unit": "ns",
            "range": "± 50119.00737865538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842824.8493088942,
            "unit": "ns",
            "range": "± 1465.130955297135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369746.9456129808,
            "unit": "ns",
            "range": "± 1863.0410248801375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602988.6221354166,
            "unit": "ns",
            "range": "± 2828.861615605292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826089.8604817708,
            "unit": "ns",
            "range": "± 492.0733306213712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760634.153125,
            "unit": "ns",
            "range": "± 611.2575651290989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8401388.333333334,
            "unit": "ns",
            "range": "± 129802.47851401355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22044561,
            "unit": "ns",
            "range": "± 268934.2997473015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55056813.71428572,
            "unit": "ns",
            "range": "± 301857.03065127437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111234449.26666667,
            "unit": "ns",
            "range": "± 460100.34188851004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222017473.66666666,
            "unit": "ns",
            "range": "± 1352069.788984528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438556,
            "unit": "ns",
            "range": "± 83785.83650366306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2748278.6756756757,
            "unit": "ns",
            "range": "± 88268.83929068754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2328557.7590361447,
            "unit": "ns",
            "range": "± 124258.16242429781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5789217.035714285,
            "unit": "ns",
            "range": "± 309021.7446153184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50053.47368421053,
            "unit": "ns",
            "range": "± 2994.7294725336737"
          }
        ]
      }
    ]
  }
}