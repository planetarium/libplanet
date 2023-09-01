window.BENCHMARK_DATA = {
  "lastUpdate": 1693550566226,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "313bcd946ab2f3abff8d49358876b80ce560308c",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T14:53:37+09:00",
          "tree_id": "d904cd4bae8c5d67d0e5443d1727273ff148d520",
          "url": "https://github.com/planetarium/libplanet/commit/313bcd946ab2f3abff8d49358876b80ce560308c"
        },
        "date": 1693548802705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793278.5054945054,
            "unit": "ns",
            "range": "± 137280.49953599655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3363718.35,
            "unit": "ns",
            "range": "± 236365.97964479137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2395300.0212765955,
            "unit": "ns",
            "range": "± 224396.5904965418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6103885.89,
            "unit": "ns",
            "range": "± 525026.3542958101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373851.0408163265,
            "unit": "ns",
            "range": "± 36505.844610700144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358056.3541666667,
            "unit": "ns",
            "range": "± 39863.97793787194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302243.2580645161,
            "unit": "ns",
            "range": "± 34700.709122219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5630394.73,
            "unit": "ns",
            "range": "± 451134.82408271066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5112448.51,
            "unit": "ns",
            "range": "± 335477.7660813596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24884.01098901099,
            "unit": "ns",
            "range": "± 6044.489631050574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110290.08510638298,
            "unit": "ns",
            "range": "± 15934.142753314394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129482.11340206186,
            "unit": "ns",
            "range": "± 23269.318094898903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119077.05154639175,
            "unit": "ns",
            "range": "± 26666.05929179573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7782.2,
            "unit": "ns",
            "range": "± 1814.880707380646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24759.947368421053,
            "unit": "ns",
            "range": "± 9600.89025389902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63683.145833333336,
            "unit": "ns",
            "range": "± 13647.028267204443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10331440.789473685,
            "unit": "ns",
            "range": "± 624787.6008861595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28249212.042857144,
            "unit": "ns",
            "range": "± 1362463.726265293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74686782.56862745,
            "unit": "ns",
            "range": "± 3002322.735368117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146581924.30769232,
            "unit": "ns",
            "range": "± 3929438.5614563595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294449228.3181818,
            "unit": "ns",
            "range": "± 7120077.161127214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4469943,
            "unit": "ns",
            "range": "± 380921.6081994729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4891714.621212121,
            "unit": "ns",
            "range": "± 228787.716628236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5827013.520833333,
            "unit": "ns",
            "range": "± 395158.5653790927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5424664.904109589,
            "unit": "ns",
            "range": "± 267709.5652433479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8606417.485714287,
            "unit": "ns",
            "range": "± 282804.7063352638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6153100.592561142,
            "unit": "ns",
            "range": "± 222229.16425454407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935522.7602539062,
            "unit": "ns",
            "range": "± 49224.439212672674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366183.6096833881,
            "unit": "ns",
            "range": "± 30086.471415288855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035855.101171875,
            "unit": "ns",
            "range": "± 67419.07357206802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036555.1717900815,
            "unit": "ns",
            "range": "± 24425.309569550463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978438.6211588542,
            "unit": "ns",
            "range": "± 16152.02938915798"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f9a08d874061e99b6e784f64684e8fa9f280a4a8",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T15:27:04+09:00",
          "tree_id": "21e9f0c6593d13189b7c28c2b3f510b096e74f85",
          "url": "https://github.com/planetarium/libplanet/commit/f9a08d874061e99b6e784f64684e8fa9f280a4a8"
        },
        "date": 1693550538944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592469.642857143,
            "unit": "ns",
            "range": "± 79078.48974227507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990716.347826087,
            "unit": "ns",
            "range": "± 65229.09140769567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123445.786516854,
            "unit": "ns",
            "range": "± 113178.37104679577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5348164,
            "unit": "ns",
            "range": "± 149107.65562546148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294981.93548387097,
            "unit": "ns",
            "range": "± 8034.340769204336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285667.48387096776,
            "unit": "ns",
            "range": "± 12464.954178819251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268035.4285714286,
            "unit": "ns",
            "range": "± 12186.720101384666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4588097.066666666,
            "unit": "ns",
            "range": "± 57720.46163371811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4184346.033333333,
            "unit": "ns",
            "range": "± 47414.50648854611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26774.614583333332,
            "unit": "ns",
            "range": "± 2312.9707458035396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100155.08791208791,
            "unit": "ns",
            "range": "± 7264.100590725984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94382.25252525252,
            "unit": "ns",
            "range": "± 9489.592063815026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102434.32653061225,
            "unit": "ns",
            "range": "± 16307.223203658188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6890.553191489362,
            "unit": "ns",
            "range": "± 987.5320777914632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23921.05376344086,
            "unit": "ns",
            "range": "± 2044.4214519430745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57388.9375,
            "unit": "ns",
            "range": "± 6768.819125515718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8812837.11764706,
            "unit": "ns",
            "range": "± 176797.06046831008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23446932.8,
            "unit": "ns",
            "range": "± 263031.71852790465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59076487.307692304,
            "unit": "ns",
            "range": "± 261071.71703971323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117199920.53846154,
            "unit": "ns",
            "range": "± 378444.8683568091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235735077.46153846,
            "unit": "ns",
            "range": "± 535487.7493075223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838381.5714285714,
            "unit": "ns",
            "range": "± 54917.092555280775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4042814.1333333333,
            "unit": "ns",
            "range": "± 61672.85108638817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4798038.818181818,
            "unit": "ns",
            "range": "± 115762.36399651055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4348522.666666667,
            "unit": "ns",
            "range": "± 117775.79261395846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758129.3,
            "unit": "ns",
            "range": "± 131605.70370462473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5124052.756610577,
            "unit": "ns",
            "range": "± 27317.78937001701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591130.8307756695,
            "unit": "ns",
            "range": "± 864.2561936166142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092041.0064174107,
            "unit": "ns",
            "range": "± 1135.0750020838655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648613.853515625,
            "unit": "ns",
            "range": "± 5529.4025745640265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847940.9589146206,
            "unit": "ns",
            "range": "± 326.8407024842994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768064.105078125,
            "unit": "ns",
            "range": "± 258.2139414345979"
          }
        ]
      }
    ]
  }
}