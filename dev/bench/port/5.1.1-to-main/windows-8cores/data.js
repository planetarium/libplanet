window.BENCHMARK_DATA = {
  "lastUpdate": 1721008209919,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b596b218868c91141683cb0607890e04dc346ea",
          "message": "Merge pull request #3876 from planetarium/release/5.1.1\n\n🚀 Release 5.1.1",
          "timestamp": "2024-07-15T10:03:11+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/0b596b218868c91141683cb0607890e04dc346ea"
        },
        "date": 1721007902606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015330.612244898,
            "unit": "ns",
            "range": "± 114667.12146012555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1693778.3333333333,
            "unit": "ns",
            "range": "± 73234.04342120685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547827.551020408,
            "unit": "ns",
            "range": "± 104598.38044577367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6672546.153846154,
            "unit": "ns",
            "range": "± 180529.43966183293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29235.897435897437,
            "unit": "ns",
            "range": "± 1510.0506879747709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9659293.333333334,
            "unit": "ns",
            "range": "± 125563.58927802657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23136350,
            "unit": "ns",
            "range": "± 373124.5425200133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57774560,
            "unit": "ns",
            "range": "± 1285232.3387744252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114604613.33333333,
            "unit": "ns",
            "range": "± 1753651.9958836378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236901633.33333334,
            "unit": "ns",
            "range": "± 3272638.4697686243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263389.3973214286,
            "unit": "ns",
            "range": "± 24522.52472103612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074809.1927083333,
            "unit": "ns",
            "range": "± 13614.089018652603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728757.4153645834,
            "unit": "ns",
            "range": "± 4101.322818894219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911961.7447916667,
            "unit": "ns",
            "range": "± 13641.981540393539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601691.7057291666,
            "unit": "ns",
            "range": "± 6340.687029845204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546317.4869791666,
            "unit": "ns",
            "range": "± 4372.283020965162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2103085.185185185,
            "unit": "ns",
            "range": "± 58131.963296409966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208583.3333333335,
            "unit": "ns",
            "range": "± 69908.01098586628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2649225.925925926,
            "unit": "ns",
            "range": "± 73712.0154728605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2249675,
            "unit": "ns",
            "range": "± 43221.77691858584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2937146.153846154,
            "unit": "ns",
            "range": "± 78465.77970437422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168665.5172413793,
            "unit": "ns",
            "range": "± 7283.303465934294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163150.5617977528,
            "unit": "ns",
            "range": "± 9344.968548946365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137882.92682926828,
            "unit": "ns",
            "range": "± 4969.703333148991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2649494.117647059,
            "unit": "ns",
            "range": "± 50833.951137357944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2451790,
            "unit": "ns",
            "range": "± 55219.5083757829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9356.470588235294,
            "unit": "ns",
            "range": "± 970.5726167998935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49766.666666666664,
            "unit": "ns",
            "range": "± 5965.340715757356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43735.087719298244,
            "unit": "ns",
            "range": "± 1886.5587746012743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48704.255319148935,
            "unit": "ns",
            "range": "± 8147.377899900593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2329.032258064516,
            "unit": "ns",
            "range": "± 365.221982873695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9500,
            "unit": "ns",
            "range": "± 944.5941268693814"
          }
        ]
      }
    ]
  }
}