window.BENCHMARK_DATA = {
  "lastUpdate": 1736909021455,
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
          "id": "89b9e8cc75ff5c93da324f370e74c44412532e14",
          "message": "release: 5.5.0",
          "timestamp": "2025-01-15T11:32:52+09:00",
          "tree_id": "1fbf6106ca5d65e0d15336d9b818ff0842baa216",
          "url": "https://github.com/planetarium/libplanet/commit/89b9e8cc75ff5c93da324f370e74c44412532e14"
        },
        "date": 1736908951287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975179.5698924732,
            "unit": "ns",
            "range": "± 86305.27662736527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777225.641025641,
            "unit": "ns",
            "range": "± 61566.20620347497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504275,
            "unit": "ns",
            "range": "± 97662.74275197825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6614755.813953488,
            "unit": "ns",
            "range": "± 244909.45975461602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32160,
            "unit": "ns",
            "range": "± 4437.159433509668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9884233.333333334,
            "unit": "ns",
            "range": "± 121205.21362352285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24498881.25,
            "unit": "ns",
            "range": "± 461633.17358952155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59311085.71428572,
            "unit": "ns",
            "range": "± 272992.3015458434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117764185.71428572,
            "unit": "ns",
            "range": "± 866047.7521539958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239112973.33333334,
            "unit": "ns",
            "range": "± 1653943.3106828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336326.983173077,
            "unit": "ns",
            "range": "± 6531.051901334554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1100215.0130208333,
            "unit": "ns",
            "range": "± 2840.7300641521383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753329.8307291666,
            "unit": "ns",
            "range": "± 4237.996651048781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953460.78125,
            "unit": "ns",
            "range": "± 4309.281507770349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620525.7096354166,
            "unit": "ns",
            "range": "± 1422.340448376812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563674.7135416666,
            "unit": "ns",
            "range": "± 1694.0455758313171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2246057.6923076925,
            "unit": "ns",
            "range": "± 60361.77050469559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278910.714285714,
            "unit": "ns",
            "range": "± 65309.878665656324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783125,
            "unit": "ns",
            "range": "± 62421.03116401513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2326463.888888889,
            "unit": "ns",
            "range": "± 77501.21161367287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2986390,
            "unit": "ns",
            "range": "± 52890.57166857408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96285.39325842696,
            "unit": "ns",
            "range": "± 7054.730047051568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165022.22222222222,
            "unit": "ns",
            "range": "± 6185.352525005011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146525,
            "unit": "ns",
            "range": "± 4853.945376112685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2660766.6666666665,
            "unit": "ns",
            "range": "± 43742.04689616922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2479246.6666666665,
            "unit": "ns",
            "range": "± 42038.092702871734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10758.695652173914,
            "unit": "ns",
            "range": "± 1589.3984053628276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53839.583333333336,
            "unit": "ns",
            "range": "± 5099.070692765943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43581.25,
            "unit": "ns",
            "range": "± 994.6429088517307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55995.91836734694,
            "unit": "ns",
            "range": "± 12480.772167224855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2369.387755102041,
            "unit": "ns",
            "range": "± 529.2297774826071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10335.051546391753,
            "unit": "ns",
            "range": "± 1818.0255565856673"
          }
        ]
      }
    ]
  }
}