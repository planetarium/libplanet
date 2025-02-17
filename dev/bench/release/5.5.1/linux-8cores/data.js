window.BENCHMARK_DATA = {
  "lastUpdate": 1739760705484,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6411524690be1adb2182a94b1d381145fc6b1c77",
          "message": "release: 5.5.1",
          "timestamp": "2025-02-17T11:43:07+09:00",
          "tree_id": "b045a2baf8742693d6e215fc173f5320169ddadb",
          "url": "https://github.com/planetarium/libplanet/commit/6411524690be1adb2182a94b1d381145fc6b1c77"
        },
        "date": 1739760679370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994875.2159090909,
            "unit": "ns",
            "range": "± 53786.632045657185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1881719.7702702703,
            "unit": "ns",
            "range": "± 59290.393210334136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576938.4197530865,
            "unit": "ns",
            "range": "± 80380.1975872889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7672370.285714285,
            "unit": "ns",
            "range": "± 181202.29087463074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400152.214285714,
            "unit": "ns",
            "range": "± 28657.55464211722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2542544.447368421,
            "unit": "ns",
            "range": "± 51671.182727871404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2991795.5,
            "unit": "ns",
            "range": "± 42640.76500678238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2606623.3333333335,
            "unit": "ns",
            "range": "± 45584.12670416044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3178359.6666666665,
            "unit": "ns",
            "range": "± 40237.86268228092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3954935.961495536,
            "unit": "ns",
            "range": "± 8717.983288976604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1247009.1270926339,
            "unit": "ns",
            "range": "± 1631.660400730184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779733.8648856027,
            "unit": "ns",
            "range": "± 1865.7446602128546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984241.1205357143,
            "unit": "ns",
            "range": "± 1600.661498976045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640622.0895833333,
            "unit": "ns",
            "range": "± 730.1962920064781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576993.0387620192,
            "unit": "ns",
            "range": "± 322.9868431987715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11110428.1,
            "unit": "ns",
            "range": "± 164976.43266227885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27909499.285714287,
            "unit": "ns",
            "range": "± 106317.1189574477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69511293.63333334,
            "unit": "ns",
            "range": "± 270333.58300542756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143278109.07692307,
            "unit": "ns",
            "range": "± 302659.56905585673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278055907.38461536,
            "unit": "ns",
            "range": "± 847113.7925038504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30647.583333333332,
            "unit": "ns",
            "range": "± 792.5580991824575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104154.6914893617,
            "unit": "ns",
            "range": "± 8632.619237739944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188527.3536585366,
            "unit": "ns",
            "range": "± 9974.039296379739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167982.0652173913,
            "unit": "ns",
            "range": "± 8022.389664297738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2970716.7333333334,
            "unit": "ns",
            "range": "± 43893.1031947693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2818163.6428571427,
            "unit": "ns",
            "range": "± 34164.08714201585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11656.170212765957,
            "unit": "ns",
            "range": "± 1029.7729720389295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60488.64,
            "unit": "ns",
            "range": "± 6742.978740388651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50487.170731707316,
            "unit": "ns",
            "range": "± 1829.4559833791989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63992.947916666664,
            "unit": "ns",
            "range": "± 8395.655328636281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2675.691489361702,
            "unit": "ns",
            "range": "± 249.43053535964873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10723.793103448275,
            "unit": "ns",
            "range": "± 637.6340194363707"
          }
        ]
      }
    ]
  }
}