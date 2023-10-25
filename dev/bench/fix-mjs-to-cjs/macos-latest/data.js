window.BENCHMARK_DATA = {
  "lastUpdate": 1698202554496,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "903830ec9de8928bce70a91d615bdb45ec64ca90",
          "message": "fix import mjs to require cjs",
          "timestamp": "2023-10-25T11:37:00+09:00",
          "tree_id": "9a6a722acee171995d2b938d04e19ddfd597e5ab",
          "url": "https://github.com/planetarium/libplanet/commit/903830ec9de8928bce70a91d615bdb45ec64ca90"
        },
        "date": 1698202499545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9678276.510309279,
            "unit": "ns",
            "range": "± 996087.9444812622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20949813.285714287,
            "unit": "ns",
            "range": "± 305956.4975709351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55367309.75925926,
            "unit": "ns",
            "range": "± 1550909.969463947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105496536.9516129,
            "unit": "ns",
            "range": "± 3196072.588838452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218440411.15625,
            "unit": "ns",
            "range": "± 6739435.3648972465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64564.336956521736,
            "unit": "ns",
            "range": "± 10752.660412203006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338015.5806451613,
            "unit": "ns",
            "range": "± 57111.70811175056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338543.4120879121,
            "unit": "ns",
            "range": "± 48550.26488282206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305979.3695652174,
            "unit": "ns",
            "range": "± 17119.329075777994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4009573.1428571427,
            "unit": "ns",
            "range": "± 112865.1994103665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834142.5,
            "unit": "ns",
            "range": "± 111368.50835402259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20276.21875,
            "unit": "ns",
            "range": "± 2987.190016344792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108181.03260869565,
            "unit": "ns",
            "range": "± 22080.76065313202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99339.58333333333,
            "unit": "ns",
            "range": "± 11654.624359515132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98755.6888888889,
            "unit": "ns",
            "range": "± 11422.21874355932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6840.8279569892475,
            "unit": "ns",
            "range": "± 935.8193297349458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17589.021978021978,
            "unit": "ns",
            "range": "± 1855.9862546067998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520958.0714285714,
            "unit": "ns",
            "range": "± 176276.22718255714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815091.7875,
            "unit": "ns",
            "range": "± 146700.5934430279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289084.875,
            "unit": "ns",
            "range": "± 245341.98516409274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10724856.432098765,
            "unit": "ns",
            "range": "± 632311.959310413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370242.6868686867,
            "unit": "ns",
            "range": "± 274032.64417481684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639096.4615384615,
            "unit": "ns",
            "range": "± 358306.44846144103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460063.523255814,
            "unit": "ns",
            "range": "± 240914.93992512976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4485753.732323232,
            "unit": "ns",
            "range": "± 306964.43858960137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16160920.989795918,
            "unit": "ns",
            "range": "± 2286855.449960953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5860052.221540178,
            "unit": "ns",
            "range": "± 100447.47496542567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724309.073828125,
            "unit": "ns",
            "range": "± 23291.764441965024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049926.2407552083,
            "unit": "ns",
            "range": "± 16349.66674920896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2786439.455208333,
            "unit": "ns",
            "range": "± 28141.72741317594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791265.402734375,
            "unit": "ns",
            "range": "± 8121.358977518123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729037.6583984375,
            "unit": "ns",
            "range": "± 4019.0578151896075"
          }
        ]
      }
    ]
  }
}