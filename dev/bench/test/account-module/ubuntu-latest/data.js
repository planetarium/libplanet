window.BENCHMARK_DATA = {
  "lastUpdate": 1693484947845,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "81ec0a4ca52f5a64a9bf48243f251743cb69a90a",
          "message": "test: Fix test from removing NullChainStates",
          "timestamp": "2023-08-17T18:16:20+09:00",
          "tree_id": "4341a7076278eab80dcfb26105a1ad35a391e9ba",
          "url": "https://github.com/planetarium/libplanet/commit/81ec0a4ca52f5a64a9bf48243f251743cb69a90a"
        },
        "date": 1693289490256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583315.3195876288,
            "unit": "ns",
            "range": "± 135084.31913303773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2969455.413043478,
            "unit": "ns",
            "range": "± 113146.58919110712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2019424.934065934,
            "unit": "ns",
            "range": "± 113125.3767101698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5237711.34375,
            "unit": "ns",
            "range": "± 158390.0961138118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290370.8095238095,
            "unit": "ns",
            "range": "± 10531.836448940145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278842.40425531915,
            "unit": "ns",
            "range": "± 9904.250169497009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260848.9375,
            "unit": "ns",
            "range": "± 11905.705708135496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4571717.4,
            "unit": "ns",
            "range": "± 50582.31977649333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197811.866666666,
            "unit": "ns",
            "range": "± 41660.02545069291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25495.021505376346,
            "unit": "ns",
            "range": "± 2559.509404326704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99968.03125,
            "unit": "ns",
            "range": "± 6552.796662017677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87539.04081632652,
            "unit": "ns",
            "range": "± 6304.138398446726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92627.68421052632,
            "unit": "ns",
            "range": "± 11480.848896687816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7192.591397849463,
            "unit": "ns",
            "range": "± 845.5632704138851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23196.23711340206,
            "unit": "ns",
            "range": "± 2189.128112082125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52053.29473684211,
            "unit": "ns",
            "range": "± 3829.6031011328114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8847201.368421054,
            "unit": "ns",
            "range": "± 194741.91014839514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23205971.14285714,
            "unit": "ns",
            "range": "± 130815.89795166756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57893514.666666664,
            "unit": "ns",
            "range": "± 229116.2727199778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117701654.2,
            "unit": "ns",
            "range": "± 381774.25344888977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232162413.4,
            "unit": "ns",
            "range": "± 551032.5682133758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3852269.466666667,
            "unit": "ns",
            "range": "± 71175.28859780586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959882.057142857,
            "unit": "ns",
            "range": "± 127274.03299826596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4716369.9375,
            "unit": "ns",
            "range": "± 88015.1561345876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4325997.933333334,
            "unit": "ns",
            "range": "± 129274.70816535142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6795729.708333333,
            "unit": "ns",
            "range": "± 175478.10555425778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5040407.290178572,
            "unit": "ns",
            "range": "± 34078.46324411118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586020.7395833333,
            "unit": "ns",
            "range": "± 1735.525778524187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094385.4153180805,
            "unit": "ns",
            "range": "± 646.8681506990308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667864.33125,
            "unit": "ns",
            "range": "± 5554.795212430849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830012.7909458706,
            "unit": "ns",
            "range": "± 302.6184714236051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757503.8610491072,
            "unit": "ns",
            "range": "± 463.28924291102174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "d567343c8a1725c2c1ad698d3904e3fafc0fb907",
          "message": "feat: Add IBlockChainState.GetStateRoot()",
          "timestamp": "2023-08-31T21:14:49+09:00",
          "tree_id": "2d064f4b20f84eb98e3ddb0da916be3aff253d67",
          "url": "https://github.com/planetarium/libplanet/commit/d567343c8a1725c2c1ad698d3904e3fafc0fb907"
        },
        "date": 1693484918691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428668.4848484849,
            "unit": "ns",
            "range": "± 114592.6314495746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2677988.5476190476,
            "unit": "ns",
            "range": "± 96484.4161611661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1831524.4945054946,
            "unit": "ns",
            "range": "± 101709.7343978194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4758079.592592592,
            "unit": "ns",
            "range": "± 131596.5563111095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279128.3888888889,
            "unit": "ns",
            "range": "± 9310.960374826396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268085.55319148937,
            "unit": "ns",
            "range": "± 9629.330659407025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239430.55,
            "unit": "ns",
            "range": "± 8062.830656944501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4247468.933333334,
            "unit": "ns",
            "range": "± 45072.20407375999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3864558.9285714286,
            "unit": "ns",
            "range": "± 32615.401271047216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21446.2688172043,
            "unit": "ns",
            "range": "± 1294.598763926701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95412.01075268818,
            "unit": "ns",
            "range": "± 7182.466423436741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76106.17708333333,
            "unit": "ns",
            "range": "± 4988.528689313199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83931.5,
            "unit": "ns",
            "range": "± 10628.870129602617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5372.164948453608,
            "unit": "ns",
            "range": "± 807.0964249550716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20282.78494623656,
            "unit": "ns",
            "range": "± 1828.977618004722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47383.593406593405,
            "unit": "ns",
            "range": "± 2777.8451119848755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8169077,
            "unit": "ns",
            "range": "± 37027.97783915755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20298555.714285713,
            "unit": "ns",
            "range": "± 67655.95874766637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51901640.733333334,
            "unit": "ns",
            "range": "± 172049.02986751302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103208759.23076923,
            "unit": "ns",
            "range": "± 230044.3650701439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205758600.85714287,
            "unit": "ns",
            "range": "± 557317.8386195048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3409017,
            "unit": "ns",
            "range": "± 32924.82216244412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3540059.464285714,
            "unit": "ns",
            "range": "± 97914.96635251166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4339122.571428572,
            "unit": "ns",
            "range": "± 48679.45534382476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999572.785714286,
            "unit": "ns",
            "range": "± 55629.998303597335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6378946.37037037,
            "unit": "ns",
            "range": "± 266411.55639874865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972466.028459822,
            "unit": "ns",
            "range": "± 15749.840285936976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1654166.5620814732,
            "unit": "ns",
            "range": "± 4360.456216015797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069915.4588541666,
            "unit": "ns",
            "range": "± 1730.7013494813468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2777530.772235577,
            "unit": "ns",
            "range": "± 3379.3454080683337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804936.3783854167,
            "unit": "ns",
            "range": "± 585.4132890785937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736512.7913643973,
            "unit": "ns",
            "range": "± 400.9566717962254"
          }
        ]
      }
    ]
  }
}