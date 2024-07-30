window.BENCHMARK_DATA = {
  "lastUpdate": 1722369312280,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "bbe7ba922c35c2106c700ef0771d4d0e3ee04a4a",
          "message": "set targetframework to resolve docker build fail",
          "timestamp": "2024-07-31T04:46:25+09:00",
          "tree_id": "ec2801b53b49659a5aca8fa237768c943d6539f5",
          "url": "https://github.com/planetarium/libplanet/commit/bbe7ba922c35c2106c700ef0771d4d0e3ee04a4a"
        },
        "date": 1722369285433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022104.5652173914,
            "unit": "ns",
            "range": "± 63836.99150546043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952802.0169491526,
            "unit": "ns",
            "range": "± 85622.9748968661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1740614.4842105263,
            "unit": "ns",
            "range": "± 96994.70939803805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8384364.777777778,
            "unit": "ns",
            "range": "± 197940.53384798585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200571.2888888889,
            "unit": "ns",
            "range": "± 7492.487251247146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190682.1911764706,
            "unit": "ns",
            "range": "± 9138.636834983216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166127.64285714287,
            "unit": "ns",
            "range": "± 2717.6534804055573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101188.5,
            "unit": "ns",
            "range": "± 53589.669945402195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860068,
            "unit": "ns",
            "range": "± 43481.623159852075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16502.164835164836,
            "unit": "ns",
            "range": "± 1632.2535428305944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61663.057471264365,
            "unit": "ns",
            "range": "± 3791.285170076856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50295.333333333336,
            "unit": "ns",
            "range": "± 719.4594983020029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59531.76315789474,
            "unit": "ns",
            "range": "± 9301.398416036212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2834.1875,
            "unit": "ns",
            "range": "± 470.5121355893407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12273.966666666667,
            "unit": "ns",
            "range": "± 811.9259451756905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32538.30769230769,
            "unit": "ns",
            "range": "± 274.23875990803606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10517932.142857144,
            "unit": "ns",
            "range": "± 62162.32603416656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27378888.066666666,
            "unit": "ns",
            "range": "± 177374.5599090349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70186207.21428572,
            "unit": "ns",
            "range": "± 546892.0590458524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141275836.42857143,
            "unit": "ns",
            "range": "± 713312.6693149273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294091544.5,
            "unit": "ns",
            "range": "± 1444159.4166475555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714518.654296875,
            "unit": "ns",
            "range": "± 5760.296270176197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227273.1316964286,
            "unit": "ns",
            "range": "± 1613.8678186465347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770220.4353515625,
            "unit": "ns",
            "range": "± 1781.7325157994994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005423.65234375,
            "unit": "ns",
            "range": "± 3011.152167918668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627397.9193359375,
            "unit": "ns",
            "range": "± 939.7118431256362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570020.7276785715,
            "unit": "ns",
            "range": "± 433.0025165067376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2489758.6666666665,
            "unit": "ns",
            "range": "± 33998.46883877202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2530186.794117647,
            "unit": "ns",
            "range": "± 50220.72549103197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3053198.8333333335,
            "unit": "ns",
            "range": "± 52471.83257801502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599234.966666667,
            "unit": "ns",
            "range": "± 43678.27835413104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3290835.066666667,
            "unit": "ns",
            "range": "± 58043.412654995525"
          }
        ]
      }
    ]
  }
}