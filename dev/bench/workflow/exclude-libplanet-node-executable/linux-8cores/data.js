window.BENCHMARK_DATA = {
  "lastUpdate": 1737023666549,
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
          "id": "0a75090898339643930fccdf3712662db4faf4c2",
          "message": "exclude Node.Executable and Explorer.Executable from executables in constants.sh",
          "timestamp": "2025-01-16T19:24:53+09:00",
          "tree_id": "532673aea99105864e59099b79a28e9d016aaf1d",
          "url": "https://github.com/planetarium/libplanet/commit/0a75090898339643930fccdf3712662db4faf4c2"
        },
        "date": 1737023639413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11005482.785714285,
            "unit": "ns",
            "range": "± 67842.32210305867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22214544.5,
            "unit": "ns",
            "range": "± 789211.2092750312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55317295.21428572,
            "unit": "ns",
            "range": "± 237451.49088868286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111384057,
            "unit": "ns",
            "range": "± 211129.12752325475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223983877.07692307,
            "unit": "ns",
            "range": "± 679222.347532635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104974.82352941176,
            "unit": "ns",
            "range": "± 19212.80944923915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165869.23456790124,
            "unit": "ns",
            "range": "± 19964.403087916002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137251.85294117648,
            "unit": "ns",
            "range": "± 4374.262647005903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2546348.8,
            "unit": "ns",
            "range": "± 75662.08180633787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2429499.2666666666,
            "unit": "ns",
            "range": "± 39502.037440160086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15826.214285714286,
            "unit": "ns",
            "range": "± 3809.665643461927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55942.288235294116,
            "unit": "ns",
            "range": "± 8536.394308369032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44449.14,
            "unit": "ns",
            "range": "± 1340.750871104452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63228.29787234042,
            "unit": "ns",
            "range": "± 20073.41302225237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3322.40206185567,
            "unit": "ns",
            "range": "± 1127.9550510011636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18896.04945054945,
            "unit": "ns",
            "range": "± 7225.6146147865065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3732973.7252604165,
            "unit": "ns",
            "range": "± 25944.077821814215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 896021.3715122768,
            "unit": "ns",
            "range": "± 6255.468055035003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 705151.6241536458,
            "unit": "ns",
            "range": "± 3767.7470855089778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1794123.4364583334,
            "unit": "ns",
            "range": "± 9132.563788027719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465172.0795247396,
            "unit": "ns",
            "range": "± 2826.202763104536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 446820.51471354166,
            "unit": "ns",
            "range": "± 1086.328136767223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2988692.346153846,
            "unit": "ns",
            "range": "± 33455.716409521985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2106187.3,
            "unit": "ns",
            "range": "± 90480.57212131233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2668943.154761905,
            "unit": "ns",
            "range": "± 607807.3394019518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2735318,
            "unit": "ns",
            "range": "± 53074.508767706306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2782401.5,
            "unit": "ns",
            "range": "± 100680.6287136531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3291208.5,
            "unit": "ns",
            "range": "± 46871.0523933647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814477.4814814816,
            "unit": "ns",
            "range": "± 232519.58575634606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1961514.7311827957,
            "unit": "ns",
            "range": "± 783335.2463178666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6988669.298507462,
            "unit": "ns",
            "range": "± 279415.75057370536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 24913.029411764706,
            "unit": "ns",
            "range": "± 513.647388493198"
          }
        ]
      }
    ]
  }
}