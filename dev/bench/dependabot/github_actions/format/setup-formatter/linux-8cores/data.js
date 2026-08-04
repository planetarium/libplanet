window.BENCHMARK_DATA = {
  "lastUpdate": 1785840646922,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1740886bc7424f7cb23088e6a65feb7968df6ba",
          "message": "Merge pull request #4037 from Atralupus/change-changed-files-action\n\nUse step-security/changed-files",
          "timestamp": "2025-03-16T13:44:44+09:00",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/a1740886bc7424f7cb23088e6a65feb7968df6ba"
        },
        "date": 1785840620900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 24345.527472527472,
            "unit": "ns",
            "range": "± 1532.7657017493236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2433406.31,
            "unit": "ns",
            "range": "± 1197209.276885179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2087216.2345679011,
            "unit": "ns",
            "range": "± 585469.9212590104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1956056.988095238,
            "unit": "ns",
            "range": "± 592533.4878664602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7104022.4,
            "unit": "ns",
            "range": "± 266432.8677662711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3051411.6,
            "unit": "ns",
            "range": "± 38398.34120449922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3418512.289473684,
            "unit": "ns",
            "range": "± 115402.5871781063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2722967.185185185,
            "unit": "ns",
            "range": "± 560596.47933253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2369014.988235294,
            "unit": "ns",
            "range": "± 151634.65931455226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2976057.15,
            "unit": "ns",
            "range": "± 102540.55553743427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3883740.488151042,
            "unit": "ns",
            "range": "± 24672.546669657673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917798.6858072917,
            "unit": "ns",
            "range": "± 4644.595251260413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713069.7076822916,
            "unit": "ns",
            "range": "± 5112.873472086057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1716645.6413225445,
            "unit": "ns",
            "range": "± 9577.650070713698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 474101.99745396205,
            "unit": "ns",
            "range": "± 2096.4615456701736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423526.49281529017,
            "unit": "ns",
            "range": "± 2219.3149554373076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11375905.785714285,
            "unit": "ns",
            "range": "± 128044.92113628211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24718606.860655736,
            "unit": "ns",
            "range": "± 1111602.179493171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58951443.2,
            "unit": "ns",
            "range": "± 756686.6144648751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116918375.66666667,
            "unit": "ns",
            "range": "± 743528.2228189043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235979169.5,
            "unit": "ns",
            "range": "± 2599281.5385581516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115261.5411764706,
            "unit": "ns",
            "range": "± 21260.689748001696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180139.11538461538,
            "unit": "ns",
            "range": "± 39674.57506314414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148462.70103092783,
            "unit": "ns",
            "range": "± 12581.084040273972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2683967.4166666665,
            "unit": "ns",
            "range": "± 38157.91574844139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2635056.3571428573,
            "unit": "ns",
            "range": "± 37046.979010247436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14007.107142857143,
            "unit": "ns",
            "range": "± 4357.005943949471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71592.60869565218,
            "unit": "ns",
            "range": "± 20773.64992635576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46848.944444444445,
            "unit": "ns",
            "range": "± 3974.7783546745104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78315.13917525773,
            "unit": "ns",
            "range": "± 26727.08376199193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5544.28125,
            "unit": "ns",
            "range": "± 1431.0158350157378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16666.968421052632,
            "unit": "ns",
            "range": "± 6054.86547183097"
          }
        ]
      }
    ]
  }
}