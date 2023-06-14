window.BENCHMARK_DATA = {
  "lastUpdate": 1686719816839,
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
      },
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
          "id": "0bf530b3a61065aa6c8c96bbf8aa05065d82a731",
          "message": "Merge pull request #3212 from OnedgeLee/prepare/2.0.1\n\n🔧 Prepare 2.0.1",
          "timestamp": "2023-06-14T14:00:32+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/planetarium/libplanet/commit/0bf530b3a61065aa6c8c96bbf8aa05065d82a731"
        },
        "date": 1686719756069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8515140.885714285,
            "unit": "ns",
            "range": "± 408808.60597621795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20139503.769230768,
            "unit": "ns",
            "range": "± 289489.62186238327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52686734.46428572,
            "unit": "ns",
            "range": "± 1464049.0897460822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101483914.75,
            "unit": "ns",
            "range": "± 1119989.0947883965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208801437.83333334,
            "unit": "ns",
            "range": "± 3729277.612385419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64679.755319148935,
            "unit": "ns",
            "range": "± 10931.481957090593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329483.02127659577,
            "unit": "ns",
            "range": "± 23298.217059006354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316448.1914893617,
            "unit": "ns",
            "range": "± 28668.143766874873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302874.43684210523,
            "unit": "ns",
            "range": "± 21550.958484292834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198586.2,
            "unit": "ns",
            "range": "± 146879.04318846503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801602.4583333335,
            "unit": "ns",
            "range": "± 96482.75971654174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17211.911111111112,
            "unit": "ns",
            "range": "± 1887.3835384530275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93021.74468085106,
            "unit": "ns",
            "range": "± 11913.62998651614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98188.08602150538,
            "unit": "ns",
            "range": "± 11414.927006237807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115961.4052631579,
            "unit": "ns",
            "range": "± 14251.617831322812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6112.950549450549,
            "unit": "ns",
            "range": "± 632.4609652203625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17026.06989247312,
            "unit": "ns",
            "range": "± 1674.6917847372074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639487.505050505,
            "unit": "ns",
            "range": "± 183743.81087982332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050023.564705882,
            "unit": "ns",
            "range": "± 164007.8900620512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638520.6836734693,
            "unit": "ns",
            "range": "± 233910.6991782851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7019886.384615385,
            "unit": "ns",
            "range": "± 359971.9356929807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369985.8846153845,
            "unit": "ns",
            "range": "± 169494.17525355445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587540.6279069767,
            "unit": "ns",
            "range": "± 130715.69200094847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4572937.061538462,
            "unit": "ns",
            "range": "± 213424.8966543088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4465630.243243244,
            "unit": "ns",
            "range": "± 221780.67684551887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7719517.472222222,
            "unit": "ns",
            "range": "± 218066.81658800767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6589513.600446428,
            "unit": "ns",
            "range": "± 91071.32224759865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2060531.8253348214,
            "unit": "ns",
            "range": "± 17563.47082982481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320173.457877604,
            "unit": "ns",
            "range": "± 10850.92392839025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596595.55078125,
            "unit": "ns",
            "range": "± 36977.137626920994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910908.2422526042,
            "unit": "ns",
            "range": "± 8009.018891457946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770154.3746744791,
            "unit": "ns",
            "range": "± 6242.878234040941"
          }
        ]
      }
    ]
  }
}