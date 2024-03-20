window.BENCHMARK_DATA = {
  "lastUpdate": 1710917302900,
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
          "id": "13f3e504c8a403bd4421d43f7f3a340fc4b29289",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-20T15:35:28+09:00",
          "tree_id": "1551ff4285963d9cb5a3f68cd34b1d8c052dcd79",
          "url": "https://github.com/planetarium/libplanet/commit/13f3e504c8a403bd4421d43f7f3a340fc4b29289"
        },
        "date": 1710917245573,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017822,
            "unit": "ns",
            "range": "± 130934.1885579673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767867.391304348,
            "unit": "ns",
            "range": "± 67696.51576245864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672386.8686868686,
            "unit": "ns",
            "range": "± 192767.97496666264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6964337.837837838,
            "unit": "ns",
            "range": "± 218088.19234346374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35263.58024691358,
            "unit": "ns",
            "range": "± 1867.6022787534125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5332529.411764706,
            "unit": "ns",
            "range": "± 107383.5809417918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14089453.333333334,
            "unit": "ns",
            "range": "± 163089.74245867855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34812896.15384615,
            "unit": "ns",
            "range": "± 294163.9384634148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70250700,
            "unit": "ns",
            "range": "± 897310.4734228202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137682000,
            "unit": "ns",
            "range": "± 927989.3964911452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3376569.4791666665,
            "unit": "ns",
            "range": "± 7363.601114255267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097077.4609375,
            "unit": "ns",
            "range": "± 3003.1397046551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761973.4793526785,
            "unit": "ns",
            "range": "± 1514.3853509616529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2037663.6458333333,
            "unit": "ns",
            "range": "± 5352.13857868348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632116.8229166666,
            "unit": "ns",
            "range": "± 1940.9946495784075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563608.2857572115,
            "unit": "ns",
            "range": "± 784.0389183658576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2231075,
            "unit": "ns",
            "range": "± 99554.85775887498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2394730.769230769,
            "unit": "ns",
            "range": "± 33451.81571094422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2857371.794871795,
            "unit": "ns",
            "range": "± 98900.8513313312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2968072.093023256,
            "unit": "ns",
            "range": "± 155143.7061726304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8082355,
            "unit": "ns",
            "range": "± 220224.018753399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191264.1791044776,
            "unit": "ns",
            "range": "± 8938.318964258857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180396.7032967033,
            "unit": "ns",
            "range": "± 12066.698439640035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153276.7676767677,
            "unit": "ns",
            "range": "± 9132.168174531398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2917066.6666666665,
            "unit": "ns",
            "range": "± 35127.149993511666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2623064.285714286,
            "unit": "ns",
            "range": "± 34810.26831582572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13383.516483516483,
            "unit": "ns",
            "range": "± 1196.036392633206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66412.37113402062,
            "unit": "ns",
            "range": "± 9192.968981463937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57661.61616161616,
            "unit": "ns",
            "range": "± 8082.150995144025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63253.333333333336,
            "unit": "ns",
            "range": "± 11707.072672611106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2863.917525773196,
            "unit": "ns",
            "range": "± 583.3069458931102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11709.19540229885,
            "unit": "ns",
            "range": "± 1062.317802042663"
          }
        ]
      }
    ]
  }
}