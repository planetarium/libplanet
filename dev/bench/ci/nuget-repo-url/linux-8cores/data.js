window.BENCHMARK_DATA = {
  "lastUpdate": 1722216351039,
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
          "id": "4b2b797430752f80612f1efbee6968213f1606e1",
          "message": "WIP",
          "timestamp": "2024-07-29T10:14:55+09:00",
          "tree_id": "de80609a63b1284dac24b7b1e72bcfa6411bc926",
          "url": "https://github.com/planetarium/libplanet/commit/4b2b797430752f80612f1efbee6968213f1606e1"
        },
        "date": 1722216324823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010069.2777777778,
            "unit": "ns",
            "range": "± 48251.22333506378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952994.7857142857,
            "unit": "ns",
            "range": "± 70692.16081778168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686521.361111111,
            "unit": "ns",
            "range": "± 82343.69449051114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8268123.75,
            "unit": "ns",
            "range": "± 232907.8717111323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203069.33870967742,
            "unit": "ns",
            "range": "± 8641.238897199695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193899.30434782608,
            "unit": "ns",
            "range": "± 4661.056380798266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169958.8125,
            "unit": "ns",
            "range": "± 3322.5905399000544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3025688.8571428573,
            "unit": "ns",
            "range": "± 30905.323354890334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2775812.5714285714,
            "unit": "ns",
            "range": "± 34433.331530128424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12822.85393258427,
            "unit": "ns",
            "range": "± 716.9026742389443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60226.75,
            "unit": "ns",
            "range": "± 3237.169099710499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50868.333333333336,
            "unit": "ns",
            "range": "± 515.7392458374384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54714.07692307692,
            "unit": "ns",
            "range": "± 4106.704372023971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2711.4148936170213,
            "unit": "ns",
            "range": "± 246.80907293993963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12014.04347826087,
            "unit": "ns",
            "range": "± 699.0360460614769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31477.333333333332,
            "unit": "ns",
            "range": "± 400.6267708526347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10343427.6,
            "unit": "ns",
            "range": "± 63168.00651867097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27250685.5,
            "unit": "ns",
            "range": "± 76208.89180076036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69008065.14285715,
            "unit": "ns",
            "range": "± 398778.62389987515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137500266.30769232,
            "unit": "ns",
            "range": "± 359333.7685990061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284670885.06666666,
            "unit": "ns",
            "range": "± 1406177.6345223684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734621.412860577,
            "unit": "ns",
            "range": "± 8250.569053852932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1247825.1013020833,
            "unit": "ns",
            "range": "± 2906.3705326308063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758295.7543619792,
            "unit": "ns",
            "range": "± 1154.0318578734195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974416.78515625,
            "unit": "ns",
            "range": "± 2119.7274067176218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627456.0199869792,
            "unit": "ns",
            "range": "± 1269.9769795764332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564740.2804827009,
            "unit": "ns",
            "range": "± 688.3083364016987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424251.9,
            "unit": "ns",
            "range": "± 63430.40855930221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527650.1333333333,
            "unit": "ns",
            "range": "± 31871.322400433604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2959000.5384615385,
            "unit": "ns",
            "range": "± 33575.27849131308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2567360.1756756757,
            "unit": "ns",
            "range": "± 86219.4184643827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3211216.875,
            "unit": "ns",
            "range": "± 61072.90190897542"
          }
        ]
      }
    ]
  }
}