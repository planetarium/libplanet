window.BENCHMARK_DATA = {
  "lastUpdate": 1792982438768,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1740886bc7424f7cb23088e6a65feb7968df6ba",
          "message": "Merge pull request #4037 from Atralupus/change-changed-files-action\n\nUse step-security/changed-files",
          "timestamp": "2025-03-16T13:44:44+09:00",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/a1740886bc7424f7cb23088e6a65feb7968df6ba"
        },
        "date": 1792982390961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1159527.0833333333,
            "unit": "ns",
            "range": "± 324850.4826853075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928691,
            "unit": "ns",
            "range": "± 889030.7925601914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2416811.4583333335,
            "unit": "ns",
            "range": "± 325383.48642140016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6207677,
            "unit": "ns",
            "range": "± 2878188.5864134417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16715.30612244898,
            "unit": "ns",
            "range": "± 3694.4958235000126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5928041.666666667,
            "unit": "ns",
            "range": "± 86941.87670071554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12827625,
            "unit": "ns",
            "range": "± 109598.91443556613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 28892962.790697675,
            "unit": "ns",
            "range": "± 981375.0867856058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 55263175,
            "unit": "ns",
            "range": "± 732767.6825508267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 114092538.46153846,
            "unit": "ns",
            "range": "± 1462861.7971510852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2934551.4583333335,
            "unit": "ns",
            "range": "± 43330.82955110728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 578349.2327008928,
            "unit": "ns",
            "range": "± 10020.009707625033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 459334.58426339284,
            "unit": "ns",
            "range": "± 6357.376879934999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1030900.3385416666,
            "unit": "ns",
            "range": "± 18773.93147085302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 255980.77674278847,
            "unit": "ns",
            "range": "± 3371.342617638712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 224294.53648158483,
            "unit": "ns",
            "range": "± 1603.082109970327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1929766.6666666667,
            "unit": "ns",
            "range": "± 48536.527407238595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1555033.7837837837,
            "unit": "ns",
            "range": "± 47608.656504612416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2426055.172413793,
            "unit": "ns",
            "range": "± 66097.57714495667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 1736039.534883721,
            "unit": "ns",
            "range": "± 64016.378631658394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 1790220.9302325582,
            "unit": "ns",
            "range": "± 356694.9588575911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132568.68686868687,
            "unit": "ns",
            "range": "± 39677.65948923657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183973.7373737374,
            "unit": "ns",
            "range": "± 67514.3274074271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 82183.95061728395,
            "unit": "ns",
            "range": "± 11354.959894140131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1364001.2048192772,
            "unit": "ns",
            "range": "± 65925.60569562927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1249807.894736842,
            "unit": "ns",
            "range": "± 63423.56084433796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24134.736842105263,
            "unit": "ns",
            "range": "± 8288.094106570756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75817.52577319587,
            "unit": "ns",
            "range": "± 20646.216412402693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33012.5,
            "unit": "ns",
            "range": "± 9860.257816635745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81188.88888888889,
            "unit": "ns",
            "range": "± 32046.43597901202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4027.5510204081634,
            "unit": "ns",
            "range": "± 1427.1867368729868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20371.875,
            "unit": "ns",
            "range": "± 7297.262689745922"
          }
        ]
      }
    ]
  }
}