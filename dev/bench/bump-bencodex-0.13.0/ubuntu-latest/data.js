window.BENCHMARK_DATA = {
  "lastUpdate": 1690424400123,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "52ecff8d3e35000080b64691dfce76eec36c2e7f",
          "message": "Bump bencodex",
          "timestamp": "2023-07-27T11:02:44+09:00",
          "tree_id": "ea1d59518f86681b0a1cc6c63dd9ebec900ba23f",
          "url": "https://github.com/planetarium/libplanet/commit/52ecff8d3e35000080b64691dfce76eec36c2e7f"
        },
        "date": 1690424367964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339581.96875,
            "unit": "ns",
            "range": "± 10576.016011542875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322714.5833333333,
            "unit": "ns",
            "range": "± 12485.886743845702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288952.34246575343,
            "unit": "ns",
            "range": "± 14298.785615898352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5217284.043478261,
            "unit": "ns",
            "range": "± 131626.8247399989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4845443.875,
            "unit": "ns",
            "range": "± 124295.85951735322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20803.78888888889,
            "unit": "ns",
            "range": "± 1760.5953697698205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100538.52222222222,
            "unit": "ns",
            "range": "± 5693.511517365802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84054.88235294117,
            "unit": "ns",
            "range": "± 3153.6739821805227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104165.1649484536,
            "unit": "ns",
            "range": "± 12989.317252297824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5575.670212765957,
            "unit": "ns",
            "range": "± 631.2027329399976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21963.13829787234,
            "unit": "ns",
            "range": "± 1654.935626211666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723922.170212766,
            "unit": "ns",
            "range": "± 109555.68043748921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3284256.717948718,
            "unit": "ns",
            "range": "± 114973.59345243465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157302.806451613,
            "unit": "ns",
            "range": "± 123636.0104883843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6124173.36,
            "unit": "ns",
            "range": "± 406060.92626414495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7321243.016145834,
            "unit": "ns",
            "range": "± 56785.197476193105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276972.06640625,
            "unit": "ns",
            "range": "± 10434.01055296382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1659470.4588541666,
            "unit": "ns",
            "range": "± 11185.479079612325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3169969.458683894,
            "unit": "ns",
            "range": "± 20410.930384996387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002436.1276041666,
            "unit": "ns",
            "range": "± 6395.0137623709315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909311.7056640625,
            "unit": "ns",
            "range": "± 1720.4618612914235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4153268.951219512,
            "unit": "ns",
            "range": "± 146836.7589760737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4229210.5869565215,
            "unit": "ns",
            "range": "± 160756.92531791612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5081106.75,
            "unit": "ns",
            "range": "± 144745.36980495168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4649592.1228070175,
            "unit": "ns",
            "range": "± 201568.7522807107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7726295.282608695,
            "unit": "ns",
            "range": "± 292862.49678628385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9449317.642857144,
            "unit": "ns",
            "range": "± 139253.66973571162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25453887.11764706,
            "unit": "ns",
            "range": "± 505444.901407399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63887265.95,
            "unit": "ns",
            "range": "± 1447619.8822370637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126931096.13333334,
            "unit": "ns",
            "range": "± 2064539.8643512335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252527809.76923078,
            "unit": "ns",
            "range": "± 3350751.7980010635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56444.743589743586,
            "unit": "ns",
            "range": "± 2807.680932569479"
          }
        ]
      }
    ]
  }
}