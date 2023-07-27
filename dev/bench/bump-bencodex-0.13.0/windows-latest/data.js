window.BENCHMARK_DATA = {
  "lastUpdate": 1690424780919,
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
        "date": 1690424701890,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744189.393939394,
            "unit": "ns",
            "range": "± 157796.56615219754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3342148.484848485,
            "unit": "ns",
            "range": "± 314949.77810322837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371946,
            "unit": "ns",
            "range": "± 301188.18404124124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6447372.631578947,
            "unit": "ns",
            "range": "± 400807.777306509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59895.78947368421,
            "unit": "ns",
            "range": "± 11932.959146739771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9430039.795918368,
            "unit": "ns",
            "range": "± 552044.6418038018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26264518.181818184,
            "unit": "ns",
            "range": "± 1111922.6606949798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 83964420.45454545,
            "unit": "ns",
            "range": "± 3004740.51710847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135363800,
            "unit": "ns",
            "range": "± 2366556.130752026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267346662.5,
            "unit": "ns",
            "range": "± 5176896.2472218815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6195571.354166667,
            "unit": "ns",
            "range": "± 106643.80018970769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998384.1517857143,
            "unit": "ns",
            "range": "± 24715.951863145605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1504223.1640625,
            "unit": "ns",
            "range": "± 22952.174368445532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3300497.679227941,
            "unit": "ns",
            "range": "± 65048.89709356779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044066.62109375,
            "unit": "ns",
            "range": "± 17561.711037380715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 998700.7254464285,
            "unit": "ns",
            "range": "± 16437.083011668597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3858122.680412371,
            "unit": "ns",
            "range": "± 331721.0363220486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4125729.292929293,
            "unit": "ns",
            "range": "± 310296.123954734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5450437.894736842,
            "unit": "ns",
            "range": "± 332160.17450536665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4638014,
            "unit": "ns",
            "range": "± 400020.16540583695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8339380,
            "unit": "ns",
            "range": "± 474890.3724780493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347660.6382978723,
            "unit": "ns",
            "range": "± 42018.7060700737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334518.47826086957,
            "unit": "ns",
            "range": "± 34285.41460740587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300864.1304347826,
            "unit": "ns",
            "range": "± 30885.9674439677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5407611.764705882,
            "unit": "ns",
            "range": "± 258091.32684740543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4754320.202020202,
            "unit": "ns",
            "range": "± 289428.4018402401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29186.59793814433,
            "unit": "ns",
            "range": "± 9349.338533487045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114387.62886597938,
            "unit": "ns",
            "range": "± 18282.95117573085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134280.20833333334,
            "unit": "ns",
            "range": "± 21188.550134406214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141566.66666666666,
            "unit": "ns",
            "range": "± 22666.35655102614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8661.904761904761,
            "unit": "ns",
            "range": "± 1327.912099891138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22202.298850574713,
            "unit": "ns",
            "range": "± 4214.702312627599"
          }
        ]
      }
    ]
  }
}