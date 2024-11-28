window.BENCHMARK_DATA = {
  "lastUpdate": 1732784358385,
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
          "id": "2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18",
          "message": "timeout 3",
          "timestamp": "2024-11-28T17:50:09+09:00",
          "tree_id": "7be3901dd8475bfc75dbd4bbba88c66d252776b2",
          "url": "https://github.com/planetarium/libplanet/commit/2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18"
        },
        "date": 1732784331230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11077076.5,
            "unit": "ns",
            "range": "± 170690.716212101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28070877.466666665,
            "unit": "ns",
            "range": "± 196964.17292814108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70795201.46666667,
            "unit": "ns",
            "range": "± 661346.3497594311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140991935.73333332,
            "unit": "ns",
            "range": "± 969197.0602140182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292596165.8666667,
            "unit": "ns",
            "range": "± 1719799.7311193312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114885.42708333333,
            "unit": "ns",
            "range": "± 12549.956360372684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192678.21153846153,
            "unit": "ns",
            "range": "± 7448.71088290579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169491.62962962964,
            "unit": "ns",
            "range": "± 4737.171771849887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2959304.8333333335,
            "unit": "ns",
            "range": "± 36751.25806333839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870705,
            "unit": "ns",
            "range": "± 46872.54971729189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13716.994382022473,
            "unit": "ns",
            "range": "± 1474.4401797692844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64332.583333333336,
            "unit": "ns",
            "range": "± 10344.156202942664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50229.5,
            "unit": "ns",
            "range": "± 1124.682575101456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64249.155913978495,
            "unit": "ns",
            "range": "± 10732.463729563908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2775.3125,
            "unit": "ns",
            "range": "± 441.622852014083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16873.188235294117,
            "unit": "ns",
            "range": "± 2464.4732002239034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767957.6766826925,
            "unit": "ns",
            "range": "± 4491.242938520793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208158.8318917411,
            "unit": "ns",
            "range": "± 2765.534394617859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766685.1790364584,
            "unit": "ns",
            "range": "± 1560.2097256970198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976104.1616586538,
            "unit": "ns",
            "range": "± 1618.6719632904249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628334.2580217634,
            "unit": "ns",
            "range": "± 506.34841954145065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572962.0498046875,
            "unit": "ns",
            "range": "± 1038.070403785028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503584.2,
            "unit": "ns",
            "range": "± 52819.82438500868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2692945.033333333,
            "unit": "ns",
            "range": "± 45183.51984465553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121245.066666667,
            "unit": "ns",
            "range": "± 93029.20799328279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2613963,
            "unit": "ns",
            "range": "± 39124.71486256383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295154.769230769,
            "unit": "ns",
            "range": "± 32141.79914108171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082216.9393939395,
            "unit": "ns",
            "range": "± 166397.20975945177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2044041.2162162163,
            "unit": "ns",
            "range": "± 68914.61179852093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590099.4305555555,
            "unit": "ns",
            "range": "± 78424.3370841839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7962234.926829268,
            "unit": "ns",
            "range": "± 286949.4215417928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30538.557142857142,
            "unit": "ns",
            "range": "± 1011.4748679049625"
          }
        ]
      }
    ]
  }
}