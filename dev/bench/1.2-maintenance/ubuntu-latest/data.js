window.BENCHMARK_DATA = {
  "lastUpdate": 1684228262639,
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
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/planetarium/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684228239326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421356,
            "unit": "ns",
            "range": "± 103716.57848193798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3554766.4444444445,
            "unit": "ns",
            "range": "± 75876.84411731035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4318924.428571428,
            "unit": "ns",
            "range": "± 122548.81278583212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4463259.121212121,
            "unit": "ns",
            "range": "± 138666.4872393375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6974192.888888889,
            "unit": "ns",
            "range": "± 260986.60174990722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279439.41818181815,
            "unit": "ns",
            "range": "± 11735.591216925308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268409.1111111111,
            "unit": "ns",
            "range": "± 5986.966471441003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238183.88235294117,
            "unit": "ns",
            "range": "± 9657.86382104668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4342038.4,
            "unit": "ns",
            "range": "± 73251.17539944324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915742,
            "unit": "ns",
            "range": "± 53501.526206535185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18095.83146067416,
            "unit": "ns",
            "range": "± 1023.3350250746006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88683.09375,
            "unit": "ns",
            "range": "± 4122.415945676354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74531.69879518072,
            "unit": "ns",
            "range": "± 3955.9572667022253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86391.54639175258,
            "unit": "ns",
            "range": "± 11587.836580890738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5468.18556701031,
            "unit": "ns",
            "range": "± 592.9449336766882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17045.197916666668,
            "unit": "ns",
            "range": "± 1250.77123677052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5886890.26328125,
            "unit": "ns",
            "range": "± 16014.958792383744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836453.216517857,
            "unit": "ns",
            "range": "± 3755.600387908369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345109.331752232,
            "unit": "ns",
            "range": "± 6157.282894817134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611713.0971354167,
            "unit": "ns",
            "range": "± 9648.538981622934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832584.1943359375,
            "unit": "ns",
            "range": "± 1472.5425486801576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747215.2203776041,
            "unit": "ns",
            "range": "± 752.0370532739131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7835845.266666667,
            "unit": "ns",
            "range": "± 110626.13297077082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20784523.4,
            "unit": "ns",
            "range": "± 341348.2396319462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53364334.93333333,
            "unit": "ns",
            "range": "± 679191.8293558756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107137512.625,
            "unit": "ns",
            "range": "± 2088764.2184695357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208635797.2352941,
            "unit": "ns",
            "range": "± 4242663.47570367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398149.9263157896,
            "unit": "ns",
            "range": "± 94125.40923515818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693649.806451613,
            "unit": "ns",
            "range": "± 82006.74740914894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251882.84057971,
            "unit": "ns",
            "range": "± 108649.56703747188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5359060.25,
            "unit": "ns",
            "range": "± 148856.66611446382"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49298.806818181816,
            "unit": "ns",
            "range": "± 2671.558135301908"
          }
        ]
      }
    ]
  }
}