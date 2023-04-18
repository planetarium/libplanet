window.BENCHMARK_DATA = {
  "lastUpdate": 1681801246273,
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801184041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356557.731958763,
            "unit": "ns",
            "range": "± 98375.64997143555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479834.4827586208,
            "unit": "ns",
            "range": "± 72576.05506276093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2218845.4545454546,
            "unit": "ns",
            "range": "± 161730.6069961159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310565.957446809,
            "unit": "ns",
            "range": "± 205104.2738797446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44722.916666666664,
            "unit": "ns",
            "range": "± 3255.8766033344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7005043.333333333,
            "unit": "ns",
            "range": "± 45035.406176960474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17722307.692307692,
            "unit": "ns",
            "range": "± 35850.41751357208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46220020,
            "unit": "ns",
            "range": "± 195774.82765375415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92114906.66666667,
            "unit": "ns",
            "range": "± 397039.4843025541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182818992.85714287,
            "unit": "ns",
            "range": "± 304072.32809692784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4772974.789663462,
            "unit": "ns",
            "range": "± 3357.1082795094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516768.036358173,
            "unit": "ns",
            "range": "± 1317.5221175452841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135425.458233173,
            "unit": "ns",
            "range": "± 925.4972576612303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585184.0625,
            "unit": "ns",
            "range": "± 14070.122755888007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819433.0217633928,
            "unit": "ns",
            "range": "± 3946.6183246507767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739183.4407552084,
            "unit": "ns",
            "range": "± 652.7820570372926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3099380,
            "unit": "ns",
            "range": "± 36032.05319077525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3254348.484848485,
            "unit": "ns",
            "range": "± 90620.8623924843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4134200,
            "unit": "ns",
            "range": "± 63346.26150100609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141912.5,
            "unit": "ns",
            "range": "± 146603.16606841085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6865910,
            "unit": "ns",
            "range": "± 197164.86073929307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313750,
            "unit": "ns",
            "range": "± 8929.638753939716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258967.9245283019,
            "unit": "ns",
            "range": "± 10666.983092790893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245252.5,
            "unit": "ns",
            "range": "± 8646.919934807675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5336957.142857143,
            "unit": "ns",
            "range": "± 50527.53574173065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3623388.4615384615,
            "unit": "ns",
            "range": "± 26116.58280548773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19438.775510204083,
            "unit": "ns",
            "range": "± 1975.240173472386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84003.40909090909,
            "unit": "ns",
            "range": "± 4468.020438104409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88014,
            "unit": "ns",
            "range": "± 9066.744874885508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175728.125,
            "unit": "ns",
            "range": "± 15844.133585619233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7255.31914893617,
            "unit": "ns",
            "range": "± 926.3893397900732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20001.041666666668,
            "unit": "ns",
            "range": "± 1642.6547698717634"
          }
        ]
      }
    ]
  }
}