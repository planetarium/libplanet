window.BENCHMARK_DATA = {
  "lastUpdate": 1680672573491,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d841327d8540052291f6b101b94eea9432e91493",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:13:01+09:00",
          "tree_id": "b9a03bf1c8c3bfbc6943ae8a7f1ad710ef3fd7f4",
          "url": "https://github.com/planetarium/libplanet/commit/d841327d8540052291f6b101b94eea9432e91493"
        },
        "date": 1680672522647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383288.888888889,
            "unit": "ns",
            "range": "± 105534.57494080556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2474412.5,
            "unit": "ns",
            "range": "± 87424.10389765337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215478.787878788,
            "unit": "ns",
            "range": "± 162601.76234248854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682896,
            "unit": "ns",
            "range": "± 378678.0698560441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49321.739130434784,
            "unit": "ns",
            "range": "± 3094.654238243128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897441.666666667,
            "unit": "ns",
            "range": "± 51004.89207077607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19295540,
            "unit": "ns",
            "range": "± 273805.2743935264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48157200,
            "unit": "ns",
            "range": "± 857575.0579395369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98441743.33333333,
            "unit": "ns",
            "range": "± 1367052.4556069355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194316357.14285713,
            "unit": "ns",
            "range": "± 871771.7835749001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4843332.087053572,
            "unit": "ns",
            "range": "± 10352.3610924914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569763.3984375,
            "unit": "ns",
            "range": "± 5337.7861325554395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157492.5,
            "unit": "ns",
            "range": "± 5286.238314423649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623022.3772321427,
            "unit": "ns",
            "range": "± 4335.795108159191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829415.95703125,
            "unit": "ns",
            "range": "± 2396.0663378398076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763013.0013020834,
            "unit": "ns",
            "range": "± 2909.1575851243524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065010.9375,
            "unit": "ns",
            "range": "± 140769.45930180672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286920,
            "unit": "ns",
            "range": "± 123946.91972409363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3956298.5507246377,
            "unit": "ns",
            "range": "± 189842.91377250143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274195.652173913,
            "unit": "ns",
            "range": "± 150764.13360171687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7252559.523809524,
            "unit": "ns",
            "range": "± 264721.1612239711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309768.8888888889,
            "unit": "ns",
            "range": "± 11689.385671357471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255851.92307692306,
            "unit": "ns",
            "range": "± 10514.891221773602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208100,
            "unit": "ns",
            "range": "± 4952.171240981071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5229315.384615385,
            "unit": "ns",
            "range": "± 31678.30083179563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3660633.3333333335,
            "unit": "ns",
            "range": "± 67234.38391888766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21533.333333333332,
            "unit": "ns",
            "range": "± 2387.4672772626645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92661.70212765958,
            "unit": "ns",
            "range": "± 6657.312357422964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86152.63157894737,
            "unit": "ns",
            "range": "± 7865.367693793255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177734.0206185567,
            "unit": "ns",
            "range": "± 17883.82000695705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7276.530612244898,
            "unit": "ns",
            "range": "± 1026.5346590689105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20175.263157894737,
            "unit": "ns",
            "range": "± 2057.8840827646986"
          }
        ]
      }
    ]
  }
}