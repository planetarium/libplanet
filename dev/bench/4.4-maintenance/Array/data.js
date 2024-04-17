window.BENCHMARK_DATA = {
  "lastUpdate": 1713347204720,
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713347170574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757125.357142857,
            "unit": "ns",
            "range": "± 67367.9188288029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14356016.23076923,
            "unit": "ns",
            "range": "± 24188.87314501527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36139176.538461536,
            "unit": "ns",
            "range": "± 225911.70571730577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72684523.5,
            "unit": "ns",
            "range": "± 216136.29557393427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145865791.2,
            "unit": "ns",
            "range": "± 262475.23301561235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86048.43589743589,
            "unit": "ns",
            "range": "± 2986.55822676126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113011.06363636363,
            "unit": "ns",
            "range": "± 4799.415194944902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105589.74193548386,
            "unit": "ns",
            "range": "± 4381.302740373319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92737.5,
            "unit": "ns",
            "range": "± 2523.003483945276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3150811.9565217393,
            "unit": "ns",
            "range": "± 71559.35268615598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2734848.56185567,
            "unit": "ns",
            "range": "± 158271.72176209436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4999.886363636364,
            "unit": "ns",
            "range": "± 499.16959621848343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26997.436781609194,
            "unit": "ns",
            "range": "± 1759.6189380100102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22263.688679245282,
            "unit": "ns",
            "range": "± 780.5485757466637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28914.558139534885,
            "unit": "ns",
            "range": "± 3553.1951672515866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1302.0526315789473,
            "unit": "ns",
            "range": "± 220.10057509669244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4886.236263736264,
            "unit": "ns",
            "range": "± 647.917430184585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1129333.8469387756,
            "unit": "ns",
            "range": "± 134197.6353738201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831186.0142857144,
            "unit": "ns",
            "range": "± 84320.87971646889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571037.9797979798,
            "unit": "ns",
            "range": "± 160012.24043618585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10711490.136363637,
            "unit": "ns",
            "range": "± 2003504.2406389294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2679771.25,
            "unit": "ns",
            "range": "± 24096.68718884969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2828094.066666667,
            "unit": "ns",
            "range": "± 38319.232290749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3319855.5384615385,
            "unit": "ns",
            "range": "± 155902.54766881897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3351660.15625,
            "unit": "ns",
            "range": "± 155206.9228374611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10745622.6875,
            "unit": "ns",
            "range": "± 702587.4450905565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3046441.210546875,
            "unit": "ns",
            "range": "± 30966.35270115572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923017.7356770834,
            "unit": "ns",
            "range": "± 4093.314295745654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615774.3982421875,
            "unit": "ns",
            "range": "± 4964.062819658868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630288.655423678,
            "unit": "ns",
            "range": "± 2852.062547151614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460176.6180245536,
            "unit": "ns",
            "range": "± 716.9085669489348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431264.9626813616,
            "unit": "ns",
            "range": "± 901.73508293093"
          }
        ]
      }
    ]
  }
}