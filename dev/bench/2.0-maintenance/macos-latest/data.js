window.BENCHMARK_DATA = {
  "lastUpdate": 1686719353910,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686719295732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12377337.188888889,
            "unit": "ns",
            "range": "± 4433353.93209263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28152488.261363637,
            "unit": "ns",
            "range": "± 9042697.609103993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59514595.51190476,
            "unit": "ns",
            "range": "± 8109129.721867984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147542318.16842106,
            "unit": "ns",
            "range": "± 42384942.194066525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288498954.96875,
            "unit": "ns",
            "range": "± 74908455.5987617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84501.31818181818,
            "unit": "ns",
            "range": "± 12788.910132624878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414265.8901098901,
            "unit": "ns",
            "range": "± 61259.41984116956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387498.9666666667,
            "unit": "ns",
            "range": "± 52375.485419262426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359564.5909090909,
            "unit": "ns",
            "range": "± 40339.20280517648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5161641.568181818,
            "unit": "ns",
            "range": "± 868111.2884136006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4639337.021276596,
            "unit": "ns",
            "range": "± 726829.639895497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30640.652173913044,
            "unit": "ns",
            "range": "± 7238.314276059463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126546.9540229885,
            "unit": "ns",
            "range": "± 16264.66596065886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129604.22941176471,
            "unit": "ns",
            "range": "± 10443.926498195968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145989.43258426967,
            "unit": "ns",
            "range": "± 23863.601295981825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8812.357142857143,
            "unit": "ns",
            "range": "± 1341.2281649578458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25858.5,
            "unit": "ns",
            "range": "± 5357.1268750661075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1896045.9325842697,
            "unit": "ns",
            "range": "± 397709.8291853393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3568802.727272727,
            "unit": "ns",
            "range": "± 552828.9268621297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2891381.7,
            "unit": "ns",
            "range": "± 386494.05730422406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7936193.606382979,
            "unit": "ns",
            "range": "± 1033171.7362720732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3907888.1075268816,
            "unit": "ns",
            "range": "± 696650.5435799411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4437187.370588236,
            "unit": "ns",
            "range": "± 946698.6022139151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5274306.316091954,
            "unit": "ns",
            "range": "± 888433.8601274133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4784918.441860465,
            "unit": "ns",
            "range": "± 415912.0665699197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10546780.711111112,
            "unit": "ns",
            "range": "± 2327509.559742321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7760730.392771292,
            "unit": "ns",
            "range": "± 622757.5334658353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2226431.1438934947,
            "unit": "ns",
            "range": "± 145036.7406887422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493937.4118652344,
            "unit": "ns",
            "range": "± 81845.74679614272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2922191.876369201,
            "unit": "ns",
            "range": "± 198041.96943385043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 970894.7134874132,
            "unit": "ns",
            "range": "± 19755.86946006858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817538.5298800998,
            "unit": "ns",
            "range": "± 39543.82758458389"
          }
        ]
      }
    ]
  }
}