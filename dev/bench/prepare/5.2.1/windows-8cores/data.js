window.BENCHMARK_DATA = {
  "lastUpdate": 1721724338088,
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
          "id": "73c93ef8e54624a73165cddb88c0fbcbf41a2a66",
          "message": "Prepare 5.2.1",
          "timestamp": "2024-07-23T17:28:54+09:00",
          "tree_id": "6169e6940dd919f784390a0d283f591f1994f863",
          "url": "https://github.com/planetarium/libplanet/commit/73c93ef8e54624a73165cddb88c0fbcbf41a2a66"
        },
        "date": 1721724037772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951488.2978723404,
            "unit": "ns",
            "range": "± 68174.17424238264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717125,
            "unit": "ns",
            "range": "± 66657.45237741095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1479900,
            "unit": "ns",
            "range": "± 77614.1107350022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6685994.444444444,
            "unit": "ns",
            "range": "± 186985.89690408643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29717.391304347828,
            "unit": "ns",
            "range": "± 745.1485602291627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9600635.714285715,
            "unit": "ns",
            "range": "± 57530.92288423755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23038993.333333332,
            "unit": "ns",
            "range": "± 162642.55929872137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58448913.333333336,
            "unit": "ns",
            "range": "± 247023.56702684597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115607553.33333333,
            "unit": "ns",
            "range": "± 729146.4294116851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231416135.7142857,
            "unit": "ns",
            "range": "± 696230.3383299158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329984.6540178573,
            "unit": "ns",
            "range": "± 6648.28409490337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069912.9464285714,
            "unit": "ns",
            "range": "± 3057.9305773239166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736013.3919270834,
            "unit": "ns",
            "range": "± 1967.8685151650886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923916.0853794643,
            "unit": "ns",
            "range": "± 4291.758189059625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613291.09375,
            "unit": "ns",
            "range": "± 1110.071119781869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553702.1744791666,
            "unit": "ns",
            "range": "± 692.3375576565683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096125,
            "unit": "ns",
            "range": "± 40222.83762574026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2185864.285714286,
            "unit": "ns",
            "range": "± 28142.128483901066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2659446.6666666665,
            "unit": "ns",
            "range": "± 44131.522045984755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2189694.736842105,
            "unit": "ns",
            "range": "± 46815.886117667964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2929218.75,
            "unit": "ns",
            "range": "± 55051.26360947585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169543.33333333334,
            "unit": "ns",
            "range": "± 6157.419766575784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164263.11475409835,
            "unit": "ns",
            "range": "± 6857.92668887218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149333.33333333334,
            "unit": "ns",
            "range": "± 3159.113799786263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2701176.923076923,
            "unit": "ns",
            "range": "± 20596.52696638254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2479857.1428571427,
            "unit": "ns",
            "range": "± 27769.815220174536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9550,
            "unit": "ns",
            "range": "± 622.564219094345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49026.666666666664,
            "unit": "ns",
            "range": "± 3092.7897300991453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43755.1724137931,
            "unit": "ns",
            "range": "± 1276.5987754566966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45703.93258426966,
            "unit": "ns",
            "range": "± 5114.019415910792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2249.4845360824743,
            "unit": "ns",
            "range": "± 349.7391025643873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9089.130434782608,
            "unit": "ns",
            "range": "± 998.2904642095292"
          }
        ]
      }
    ]
  }
}