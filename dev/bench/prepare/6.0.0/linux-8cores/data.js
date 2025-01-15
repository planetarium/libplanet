window.BENCHMARK_DATA = {
  "lastUpdate": 1736910608990,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "565752544a0e550eb86f2fedf3bdc2472c6d603e",
          "message": "prepare: 6.0.0",
          "timestamp": "2025-01-15T12:00:44+09:00",
          "tree_id": "7cfc2196c993ee55ef5539c878830953893d1cef",
          "url": "https://github.com/planetarium/libplanet/commit/565752544a0e550eb86f2fedf3bdc2472c6d603e"
        },
        "date": 1736910581958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10921953.461538462,
            "unit": "ns",
            "range": "± 28755.95616452177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28140259.466666665,
            "unit": "ns",
            "range": "± 143339.182571503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71508975.71428572,
            "unit": "ns",
            "range": "± 333435.63132990693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143170256.23333332,
            "unit": "ns",
            "range": "± 619179.9806503837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292924104.5,
            "unit": "ns",
            "range": "± 1229535.7800862428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109364.05194805194,
            "unit": "ns",
            "range": "± 5350.306181342148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193955.34615384616,
            "unit": "ns",
            "range": "± 7745.196327552831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162520.64285714287,
            "unit": "ns",
            "range": "± 4186.585094873119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2852633.2,
            "unit": "ns",
            "range": "± 40345.91880440237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800497.9285714286,
            "unit": "ns",
            "range": "± 20108.819769766873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13042.445652173914,
            "unit": "ns",
            "range": "± 1199.5813497200902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59937.77419354839,
            "unit": "ns",
            "range": "± 3468.327372621364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49666.25,
            "unit": "ns",
            "range": "± 756.5548859498201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53161.21875,
            "unit": "ns",
            "range": "± 7368.15514823669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2747.2551020408164,
            "unit": "ns",
            "range": "± 444.65337041234903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12104.523255813954,
            "unit": "ns",
            "range": "± 803.5656820292647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718697.0360576925,
            "unit": "ns",
            "range": "± 5128.209238804896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216869.162109375,
            "unit": "ns",
            "range": "± 1523.7009943663609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759068.4874441965,
            "unit": "ns",
            "range": "± 1233.4116571462525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942204.937779018,
            "unit": "ns",
            "range": "± 1851.3282896738165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637647.3735677083,
            "unit": "ns",
            "range": "± 1138.0409113809242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575749.2731119791,
            "unit": "ns",
            "range": "± 763.9290277760433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399965.7666666666,
            "unit": "ns",
            "range": "± 36529.061932084915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2530440.9,
            "unit": "ns",
            "range": "± 73339.49679747535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3119102.2083333335,
            "unit": "ns",
            "range": "± 79453.69247773205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2635738.4,
            "unit": "ns",
            "range": "± 43298.395829406894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3233298.285714286,
            "unit": "ns",
            "range": "± 41142.60042112175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985596.3804347826,
            "unit": "ns",
            "range": "± 60498.157662411395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938694.3818181818,
            "unit": "ns",
            "range": "± 81797.3996773806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565991.8529411764,
            "unit": "ns",
            "range": "± 75037.73022749601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7603855.733333333,
            "unit": "ns",
            "range": "± 220887.08574072385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30640.854838709678,
            "unit": "ns",
            "range": "± 929.9781197564846"
          }
        ]
      }
    ]
  }
}