window.BENCHMARK_DATA = {
  "lastUpdate": 1720676762509,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720676749187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10892878.666666666,
            "unit": "ns",
            "range": "± 80277.25594840708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26588648.714285713,
            "unit": "ns",
            "range": "± 154705.723699087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67722927.4,
            "unit": "ns",
            "range": "± 202854.3302213262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135083404.5,
            "unit": "ns",
            "range": "± 210216.01812595245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272366494.4285714,
            "unit": "ns",
            "range": "± 400393.0550803441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14147.130434782608,
            "unit": "ns",
            "range": "± 358.40154021937536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110165.56603773584,
            "unit": "ns",
            "range": "± 3819.5480678570516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107263.96363636364,
            "unit": "ns",
            "range": "± 4284.129852285735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93010.48148148147,
            "unit": "ns",
            "range": "± 2517.4707907612715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047197.0506329113,
            "unit": "ns",
            "range": "± 156801.22147646116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2727075.75,
            "unit": "ns",
            "range": "± 168940.36303103555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5122.797752808989,
            "unit": "ns",
            "range": "± 522.0768007716716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26803.282608695652,
            "unit": "ns",
            "range": "± 1738.8574645128394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22881.140845070422,
            "unit": "ns",
            "range": "± 1115.8653182399323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30468.35106382979,
            "unit": "ns",
            "range": "± 4606.2963423675355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1089.8736842105263,
            "unit": "ns",
            "range": "± 204.85953891164237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4731.078651685393,
            "unit": "ns",
            "range": "± 443.8394269614115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678304.22,
            "unit": "ns",
            "range": "± 34067.91529274302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289438.5405405406,
            "unit": "ns",
            "range": "± 42892.010299507216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076431.482352941,
            "unit": "ns",
            "range": "± 57867.60812974235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9368126.7,
            "unit": "ns",
            "range": "± 1298486.1921189323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195792.847826087,
            "unit": "ns",
            "range": "± 84132.64625841145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286317.56,
            "unit": "ns",
            "range": "± 110369.61467909496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585514.1315789474,
            "unit": "ns",
            "range": "± 56289.82618674979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335039.8974358975,
            "unit": "ns",
            "range": "± 81202.66295373987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2838425.378378378,
            "unit": "ns",
            "range": "± 94225.76363104123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017800.721047794,
            "unit": "ns",
            "range": "± 59624.69706229462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922302.3324869792,
            "unit": "ns",
            "range": "± 5670.777701041784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610012.4946614583,
            "unit": "ns",
            "range": "± 4725.028009726542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630307.9311197917,
            "unit": "ns",
            "range": "± 18640.384204674425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469589.77457682294,
            "unit": "ns",
            "range": "± 1231.4559910866499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419218.9615234375,
            "unit": "ns",
            "range": "± 1717.7447534571331"
          }
        ]
      }
    ]
  }
}