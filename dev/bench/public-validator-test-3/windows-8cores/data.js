window.BENCHMARK_DATA = {
  "lastUpdate": 1735800441915,
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
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1735800373596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992102.0618556701,
            "unit": "ns",
            "range": "± 85042.99400325578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781747.5409836066,
            "unit": "ns",
            "range": "± 78225.77922602705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530460.4395604397,
            "unit": "ns",
            "range": "± 85521.85539916538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6522778.571428572,
            "unit": "ns",
            "range": "± 198424.60451254068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34296.969696969696,
            "unit": "ns",
            "range": "± 4707.277356531826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9662907.142857144,
            "unit": "ns",
            "range": "± 77273.9528638777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25297633.333333332,
            "unit": "ns",
            "range": "± 341392.9254155826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62390507.14285714,
            "unit": "ns",
            "range": "± 765505.9990362189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124419613.33333333,
            "unit": "ns",
            "range": "± 1342662.9248659262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248482973.33333334,
            "unit": "ns",
            "range": "± 2266636.4389511063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284456.5848214286,
            "unit": "ns",
            "range": "± 3396.2945367169086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071559.27734375,
            "unit": "ns",
            "range": "± 1439.0407095756575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771610.234375,
            "unit": "ns",
            "range": "± 1702.5755882568114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1874169.0104166667,
            "unit": "ns",
            "range": "± 2303.145417129534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594655.5338541666,
            "unit": "ns",
            "range": "± 509.270434689529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 617451.4272836539,
            "unit": "ns",
            "range": "± 615.7183743047202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194203.703703704,
            "unit": "ns",
            "range": "± 61474.58187352084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251577.777777778,
            "unit": "ns",
            "range": "± 77857.36926903547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2682689.4736842103,
            "unit": "ns",
            "range": "± 58862.258184650804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318118.5185185187,
            "unit": "ns",
            "range": "± 54009.8497928283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2977783.3333333335,
            "unit": "ns",
            "range": "± 45213.94643670194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107725,
            "unit": "ns",
            "range": "± 6467.980373728922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176093.9393939394,
            "unit": "ns",
            "range": "± 4439.59031006377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164969.69696969696,
            "unit": "ns",
            "range": "± 5193.053343679711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2732307.1428571427,
            "unit": "ns",
            "range": "± 35639.61633838463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2616840,
            "unit": "ns",
            "range": "± 34626.10080766902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14466.666666666666,
            "unit": "ns",
            "range": "± 1763.4164797799242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61486.31578947369,
            "unit": "ns",
            "range": "± 4483.72020988071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60215.463917525776,
            "unit": "ns",
            "range": "± 6588.157623819322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73172.1649484536,
            "unit": "ns",
            "range": "± 12370.838881788704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4567.01030927835,
            "unit": "ns",
            "range": "± 771.4598781807207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13661.458333333334,
            "unit": "ns",
            "range": "± 1477.363924923939"
          }
        ]
      }
    ]
  }
}