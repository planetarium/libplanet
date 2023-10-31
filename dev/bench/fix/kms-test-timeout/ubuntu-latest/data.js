window.BENCHMARK_DATA = {
  "lastUpdate": 1698719158354,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "01ff9fffa47ffe6a16b043f6cc4a11a213eb0774",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-10-31T11:11:19+09:00",
          "tree_id": "60c8942383c478ab7c838a2edc9fc55c303cea77",
          "url": "https://github.com/planetarium/libplanet/commit/01ff9fffa47ffe6a16b043f6cc4a11a213eb0774"
        },
        "date": 1698719126563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58473.06060606061,
            "unit": "ns",
            "range": "± 9111.139059166702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5174881.275,
            "unit": "ns",
            "range": "± 32400.70802355602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1637873.223858173,
            "unit": "ns",
            "range": "± 1328.8901567181817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1120787.8735677083,
            "unit": "ns",
            "range": "± 646.2931003890684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600612.89609375,
            "unit": "ns",
            "range": "± 4961.847613961902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808913.1722935268,
            "unit": "ns",
            "range": "± 1095.8198738929514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736988.4294084822,
            "unit": "ns",
            "range": "± 467.2924558397289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8303261.466666667,
            "unit": "ns",
            "range": "± 106124.9183549184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160205.333333332,
            "unit": "ns",
            "range": "± 69754.19608747221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52207491.46666667,
            "unit": "ns",
            "range": "± 195710.13821095825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104120042,
            "unit": "ns",
            "range": "± 318336.67629481305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205702483.26666668,
            "unit": "ns",
            "range": "± 539502.631637361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362191.466666667,
            "unit": "ns",
            "range": "± 56447.80676729694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577032.6666666665,
            "unit": "ns",
            "range": "± 41135.32458616954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286123.071428572,
            "unit": "ns",
            "range": "± 29550.0068995548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229813.94117647,
            "unit": "ns",
            "range": "± 171206.69086053988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10130527.1,
            "unit": "ns",
            "range": "± 228457.55304166378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276323.09803921566,
            "unit": "ns",
            "range": "± 10358.222745731822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257625.80487804877,
            "unit": "ns",
            "range": "± 8136.295518291823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253501.45,
            "unit": "ns",
            "range": "± 5577.099816731764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4313194.571428572,
            "unit": "ns",
            "range": "± 33691.88636341508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879314.1333333333,
            "unit": "ns",
            "range": "± 41242.78421540058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23755.505376344085,
            "unit": "ns",
            "range": "± 1395.2379929732413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104005.91489361702,
            "unit": "ns",
            "range": "± 7140.106597890408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79991.27956989247,
            "unit": "ns",
            "range": "± 5461.405463649666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91378.63541666667,
            "unit": "ns",
            "range": "± 9670.792723311713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6923.731958762886,
            "unit": "ns",
            "range": "± 886.3218179112474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23118.274725274725,
            "unit": "ns",
            "range": "± 1626.698162713757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328990.1022727273,
            "unit": "ns",
            "range": "± 72708.63074637295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564496.75,
            "unit": "ns",
            "range": "± 28073.475893625997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2052830.0470588235,
            "unit": "ns",
            "range": "± 109684.74373033032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8751274.68292683,
            "unit": "ns",
            "range": "± 315065.7705282692"
          }
        ]
      }
    ]
  }
}