window.BENCHMARK_DATA = {
  "lastUpdate": 1680768791891,
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
          "id": "1bef4ea10d764a929a3c400df62c2819bc02160c",
          "message": "Move @planetarium/account to peerDependencies\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T16:56:20+09:00",
          "tree_id": "e13dadff5e4df1e6fb6e907b34bf8f04f3295ce4",
          "url": "https://github.com/planetarium/libplanet/commit/1bef4ea10d764a929a3c400df62c2819bc02160c"
        },
        "date": 1680768735607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8203316.5,
            "unit": "ns",
            "range": "± 204208.37850120378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20359423.866666667,
            "unit": "ns",
            "range": "± 756836.8086462233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49434215.56666667,
            "unit": "ns",
            "range": "± 2742810.292581467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106054830.02173913,
            "unit": "ns",
            "range": "± 2633553.7234873143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210992551.83333334,
            "unit": "ns",
            "range": "± 3321128.74901954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68507.44736842105,
            "unit": "ns",
            "range": "± 8589.779191634101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395355.2580645161,
            "unit": "ns",
            "range": "± 18008.93782918886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327184.35714285716,
            "unit": "ns",
            "range": "± 15851.73438326409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318737.8783783784,
            "unit": "ns",
            "range": "± 15822.889525095019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5528640.888888889,
            "unit": "ns",
            "range": "± 117421.19796742228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4004207.5714285714,
            "unit": "ns",
            "range": "± 69248.69025666648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22948.449494949495,
            "unit": "ns",
            "range": "± 4167.7257498538265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117344.83673469388,
            "unit": "ns",
            "range": "± 10372.629413130586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121645.13043478261,
            "unit": "ns",
            "range": "± 5851.422056703631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260961.587628866,
            "unit": "ns",
            "range": "± 22347.664871838668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10042.396907216495,
            "unit": "ns",
            "range": "± 1208.99418840394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26213.48947368421,
            "unit": "ns",
            "range": "± 3218.9588527399196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537217.75,
            "unit": "ns",
            "range": "± 117751.88307283878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2934448.44,
            "unit": "ns",
            "range": "± 117535.47360593667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2646239.484848485,
            "unit": "ns",
            "range": "± 296516.9136334062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6906259.151515151,
            "unit": "ns",
            "range": "± 321535.2428258714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3367621.227272727,
            "unit": "ns",
            "range": "± 82659.65418390662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3446650.6741573033,
            "unit": "ns",
            "range": "± 216065.46755711958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4641796.203296703,
            "unit": "ns",
            "range": "± 257122.46007135263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680647.846938776,
            "unit": "ns",
            "range": "± 421116.0669101063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8486728.05,
            "unit": "ns",
            "range": "± 379001.6031321769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7053908.245833334,
            "unit": "ns",
            "range": "± 130103.29720572248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084537.8169642857,
            "unit": "ns",
            "range": "± 25730.93629716496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307299.0348557692,
            "unit": "ns",
            "range": "± 3627.8318635851538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2924686.6257595485,
            "unit": "ns",
            "range": "± 140837.2341882523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790848.576953125,
            "unit": "ns",
            "range": "± 11279.770111841277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724683.845842634,
            "unit": "ns",
            "range": "± 5725.175034819608"
          }
        ]
      }
    ]
  }
}