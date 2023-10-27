window.BENCHMARK_DATA = {
  "lastUpdate": 1698414920755,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414843248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606959.793814433,
            "unit": "ns",
            "range": "± 130142.5713879092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128912.9411764704,
            "unit": "ns",
            "range": "± 187870.35726813323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350288.1720430106,
            "unit": "ns",
            "range": "± 147307.58403795952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11395155.681818182,
            "unit": "ns",
            "range": "± 1440640.9082485023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65146.739130434784,
            "unit": "ns",
            "range": "± 7909.660960030323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10352478.260869564,
            "unit": "ns",
            "range": "± 391028.4973491452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27171682.978723403,
            "unit": "ns",
            "range": "± 1047777.5559060709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66796693.75,
            "unit": "ns",
            "range": "± 1294266.8063263977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134114077.77777778,
            "unit": "ns",
            "range": "± 4455835.182006438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266441444.64285713,
            "unit": "ns",
            "range": "± 11334419.811512502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5893418.06344697,
            "unit": "ns",
            "range": "± 277046.3009959459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886954.0690104167,
            "unit": "ns",
            "range": "± 23236.899966277404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397619.9462890625,
            "unit": "ns",
            "range": "± 31624.349289539055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315316.1328125,
            "unit": "ns",
            "range": "± 61806.26626631712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048723.076923077,
            "unit": "ns",
            "range": "± 13469.837476510775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970796.4657738095,
            "unit": "ns",
            "range": "± 22108.8296154381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3966176.7441860465,
            "unit": "ns",
            "range": "± 144103.9172614668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4166549.438202247,
            "unit": "ns",
            "range": "± 237477.89855230143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5163645.348837209,
            "unit": "ns",
            "range": "± 274552.5560560959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4774473.076923077,
            "unit": "ns",
            "range": "± 119723.21932755504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12991434.782608695,
            "unit": "ns",
            "range": "± 1147187.4963813887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304817.7419354839,
            "unit": "ns",
            "range": "± 13736.472024141274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292783.63636363635,
            "unit": "ns",
            "range": "± 11240.481794675483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280750,
            "unit": "ns",
            "range": "± 17818.493473843948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5059533.333333333,
            "unit": "ns",
            "range": "± 128104.97959525793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4657241.666666667,
            "unit": "ns",
            "range": "± 51811.975771372905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27392.55319148936,
            "unit": "ns",
            "range": "± 3109.722504706815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111114.58333333333,
            "unit": "ns",
            "range": "± 11469.40074758799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92215.625,
            "unit": "ns",
            "range": "± 9496.008337301799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108020.40816326531,
            "unit": "ns",
            "range": "± 16700.113952223564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7046.153846153846,
            "unit": "ns",
            "range": "± 1097.9078783767377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25819.14893617021,
            "unit": "ns",
            "range": "± 1893.6950621291141"
          }
        ]
      }
    ]
  }
}