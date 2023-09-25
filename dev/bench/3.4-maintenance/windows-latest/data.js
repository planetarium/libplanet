window.BENCHMARK_DATA = {
  "lastUpdate": 1695642495236,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b",
          "message": "Merge pull request #3434 from greymistcube/release/3.4.0\n\n🚀 Release 3.4.0",
          "timestamp": "2023-09-25T17:53:38+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/planetarium/libplanet/commit/07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b"
        },
        "date": 1695642430010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1266450,
            "unit": "ns",
            "range": "± 109978.27058105615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2297512.5,
            "unit": "ns",
            "range": "± 89560.03721502938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1862629.5918367347,
            "unit": "ns",
            "range": "± 111651.25121914559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7674021.568627451,
            "unit": "ns",
            "range": "± 307520.4268426574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43764.51612903226,
            "unit": "ns",
            "range": "± 2007.3713971174084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6846107.692307692,
            "unit": "ns",
            "range": "± 17530.66178340403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17536880,
            "unit": "ns",
            "range": "± 75282.29919063691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46634066.666666664,
            "unit": "ns",
            "range": "± 629209.0484621678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89441573.33333333,
            "unit": "ns",
            "range": "± 827619.6870428786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179958014.2857143,
            "unit": "ns",
            "range": "± 1773596.816926268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4358077.447916667,
            "unit": "ns",
            "range": "± 15283.019455242387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1394476.1197916667,
            "unit": "ns",
            "range": "± 1915.3036921081632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1012054.1852678572,
            "unit": "ns",
            "range": "± 1060.253372345842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559438.3333333335,
            "unit": "ns",
            "range": "± 3021.040788334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802949.3294270834,
            "unit": "ns",
            "range": "± 1062.2784429189571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720768.515625,
            "unit": "ns",
            "range": "± 645.8487709180955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2918880,
            "unit": "ns",
            "range": "± 28642.580689795195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3013497.2972972975,
            "unit": "ns",
            "range": "± 102129.01015242787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3813754.347826087,
            "unit": "ns",
            "range": "± 94766.4376639213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3539611.904761905,
            "unit": "ns",
            "range": "± 111877.24806817417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8987460,
            "unit": "ns",
            "range": "± 201331.0375145041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241674.35897435897,
            "unit": "ns",
            "range": "± 7586.161845884703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229082.05128205128,
            "unit": "ns",
            "range": "± 8028.0715320440895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203032.55813953487,
            "unit": "ns",
            "range": "± 7103.980136254691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3733178.5714285714,
            "unit": "ns",
            "range": "± 43289.1206544204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3412621.4285714286,
            "unit": "ns",
            "range": "± 36682.933121788155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16548.88888888889,
            "unit": "ns",
            "range": "± 1032.749623707709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75401.31578947368,
            "unit": "ns",
            "range": "± 3817.0317759939285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63237.5,
            "unit": "ns",
            "range": "± 1245.1907484397723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69348.3870967742,
            "unit": "ns",
            "range": "± 9903.914607072273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4055.2083333333335,
            "unit": "ns",
            "range": "± 462.23024375911837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15869.354838709678,
            "unit": "ns",
            "range": "± 1063.858651991208"
          }
        ]
      }
    ]
  }
}