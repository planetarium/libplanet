window.BENCHMARK_DATA = {
  "lastUpdate": 1693896901487,
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
          "id": "6aa638344d4fc9b7a661f8a46608af8d5d071443",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T15:51:25+09:00",
          "tree_id": "112a574c51c882a69108bd5001b181e040ca2970",
          "url": "https://github.com/planetarium/libplanet/commit/6aa638344d4fc9b7a661f8a46608af8d5d071443"
        },
        "date": 1693551901960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426112.0208333333,
            "unit": "ns",
            "range": "± 123506.8614427196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661125.175,
            "unit": "ns",
            "range": "± 90693.15897726952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1853201.4666666666,
            "unit": "ns",
            "range": "± 98099.59234670021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4810844.84,
            "unit": "ns",
            "range": "± 114236.28562679488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266744.97777777776,
            "unit": "ns",
            "range": "± 9989.121570463289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257256.27906976745,
            "unit": "ns",
            "range": "± 9496.41063100405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218558.15384615384,
            "unit": "ns",
            "range": "± 2281.891424752496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189034.1333333333,
            "unit": "ns",
            "range": "± 38619.30509448548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3761903.533333333,
            "unit": "ns",
            "range": "± 34006.68476484055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17851.119565217392,
            "unit": "ns",
            "range": "± 1604.358718502497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84463.22105263158,
            "unit": "ns",
            "range": "± 5066.379063228295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66983.58333333333,
            "unit": "ns",
            "range": "± 629.6008054651965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74329.69387755102,
            "unit": "ns",
            "range": "± 11653.009080360853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4486.315789473684,
            "unit": "ns",
            "range": "± 406.23086568772936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16614.021505376346,
            "unit": "ns",
            "range": "± 1579.2180231842224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46981.77419354839,
            "unit": "ns",
            "range": "± 3040.1786136352334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7635590.461538462,
            "unit": "ns",
            "range": "± 37197.35004364196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19925471.5,
            "unit": "ns",
            "range": "± 95110.78518455768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50924884.93333333,
            "unit": "ns",
            "range": "± 358054.4666532627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102383645.38461539,
            "unit": "ns",
            "range": "± 545020.3794529978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204142260.06666666,
            "unit": "ns",
            "range": "± 1032473.5208418156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295553.8260869565,
            "unit": "ns",
            "range": "± 64591.15383820138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357920.4285714286,
            "unit": "ns",
            "range": "± 34512.962210906044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212860.866666666,
            "unit": "ns",
            "range": "± 64631.32913673486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3707966.875,
            "unit": "ns",
            "range": "± 130112.39795972606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6163439.148148148,
            "unit": "ns",
            "range": "± 166025.57828254695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4948036.717447917,
            "unit": "ns",
            "range": "± 3975.778138124286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555471.6442307692,
            "unit": "ns",
            "range": "± 878.9779564118486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083028.88984375,
            "unit": "ns",
            "range": "± 1331.3802483344016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545945.9408854167,
            "unit": "ns",
            "range": "± 9882.73876984512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799246.1194661459,
            "unit": "ns",
            "range": "± 1394.5118878723829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739362.164202009,
            "unit": "ns",
            "range": "± 390.2496415641388"
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
          "id": "abac38a44930b1f010dde765e3d955b670879ee1",
          "message": "fix: Modern state commit",
          "timestamp": "2023-09-01T22:16:53+09:00",
          "tree_id": "de93cb653537ca692e772ac6904a56c9e7469159",
          "url": "https://github.com/planetarium/libplanet/commit/abac38a44930b1f010dde765e3d955b670879ee1"
        },
        "date": 1693575056554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447635.9239130435,
            "unit": "ns",
            "range": "± 91620.61819793713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791252.282608696,
            "unit": "ns",
            "range": "± 106572.38160500496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2009402.203125,
            "unit": "ns",
            "range": "± 88480.5756337621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5035907.28125,
            "unit": "ns",
            "range": "± 152871.04120166003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285413.4375,
            "unit": "ns",
            "range": "± 8514.371823238333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266803.2272727273,
            "unit": "ns",
            "range": "± 10020.614806983482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234080,
            "unit": "ns",
            "range": "± 3213.099801334116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462958.214285715,
            "unit": "ns",
            "range": "± 35262.789503468586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136695.1428571427,
            "unit": "ns",
            "range": "± 60138.47760455369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21293.134020618556,
            "unit": "ns",
            "range": "± 1493.5251269289179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91095.39325842696,
            "unit": "ns",
            "range": "± 4636.451196320643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75523.41935483871,
            "unit": "ns",
            "range": "± 2287.3202920184945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85222.27659574468,
            "unit": "ns",
            "range": "± 12287.279574504153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5958.8247422680415,
            "unit": "ns",
            "range": "± 625.2812035781261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19867.14893617021,
            "unit": "ns",
            "range": "± 1555.4578481477556"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50230.05882352941,
            "unit": "ns",
            "range": "± 2715.075318401653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8338684.95,
            "unit": "ns",
            "range": "± 189168.33800403253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22593358.666666668,
            "unit": "ns",
            "range": "± 290335.0816799362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57232302.2,
            "unit": "ns",
            "range": "± 533681.8120190023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112955337.5,
            "unit": "ns",
            "range": "± 805779.2438924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226950588,
            "unit": "ns",
            "range": "± 1535966.8578534934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3511064.1578947366,
            "unit": "ns",
            "range": "± 77063.35665849032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3760629.7906976743,
            "unit": "ns",
            "range": "± 137457.0988510611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4428979.956521739,
            "unit": "ns",
            "range": "± 109673.8031965197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4197544.96,
            "unit": "ns",
            "range": "± 109577.39719808399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6496862.6,
            "unit": "ns",
            "range": "± 117788.94082928887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5052188.966346154,
            "unit": "ns",
            "range": "± 6862.6447281569635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1589268.1499399038,
            "unit": "ns",
            "range": "± 3194.16433060676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061304.7869140625,
            "unit": "ns",
            "range": "± 1570.0086130415857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618034.5317708333,
            "unit": "ns",
            "range": "± 1848.281002747484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825547.8000139509,
            "unit": "ns",
            "range": "± 323.9142316689988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753211.4422526042,
            "unit": "ns",
            "range": "± 310.1830913945709"
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
          "id": "03106138a8dd553dc541de579c5c35323175f967",
          "message": "document: Add log for commit",
          "timestamp": "2023-09-05T15:41:42+09:00",
          "tree_id": "f6261b771d6f33238f19a4a6a919c199a230a635",
          "url": "https://github.com/planetarium/libplanet/commit/03106138a8dd553dc541de579c5c35323175f967"
        },
        "date": 1693896871749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284573.9411764706,
            "unit": "ns",
            "range": "± 66036.47587009573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2456477.8076923075,
            "unit": "ns",
            "range": "± 66642.65150548512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1759736.6625,
            "unit": "ns",
            "range": "± 80765.9620119769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4582840.2,
            "unit": "ns",
            "range": "± 118294.95194850877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268200.4054054054,
            "unit": "ns",
            "range": "± 8986.584994248864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257332.54285714286,
            "unit": "ns",
            "range": "± 8289.741656170623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221538.14285714287,
            "unit": "ns",
            "range": "± 2442.5131715932657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113749.3333333335,
            "unit": "ns",
            "range": "± 31715.02698511648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3895684.933333333,
            "unit": "ns",
            "range": "± 42870.85763990443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18035.297872340427,
            "unit": "ns",
            "range": "± 1204.4224050028479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83745.77631578948,
            "unit": "ns",
            "range": "± 4247.060525739921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68876,
            "unit": "ns",
            "range": "± 775.9158811014597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70887.61445783133,
            "unit": "ns",
            "range": "± 5858.718481015146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4514.316326530612,
            "unit": "ns",
            "range": "± 525.2423809059667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17368.86813186813,
            "unit": "ns",
            "range": "± 997.6250710650681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47349.962025316454,
            "unit": "ns",
            "range": "± 2329.663359872904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7676321.928571428,
            "unit": "ns",
            "range": "± 75218.565703774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19831507.53846154,
            "unit": "ns",
            "range": "± 83924.02740337576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51095820.733333334,
            "unit": "ns",
            "range": "± 385621.82185705256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100977000.42857143,
            "unit": "ns",
            "range": "± 467724.6882001805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204085619.13333333,
            "unit": "ns",
            "range": "± 911016.6190155657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333268.2,
            "unit": "ns",
            "range": "± 51179.60187446334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401027.730769231,
            "unit": "ns",
            "range": "± 91938.09618588269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185056.4,
            "unit": "ns",
            "range": "± 58066.96603897459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3717244.657142857,
            "unit": "ns",
            "range": "± 122028.392238408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6072373.47368421,
            "unit": "ns",
            "range": "± 95985.71469429329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4901439.336588542,
            "unit": "ns",
            "range": "± 6890.729820531017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575811.874248798,
            "unit": "ns",
            "range": "± 770.7294164240164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089454.7827845982,
            "unit": "ns",
            "range": "± 580.4745547494587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557744.722098214,
            "unit": "ns",
            "range": "± 1310.6658387319928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778196.199358259,
            "unit": "ns",
            "range": "± 608.5187592764494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731127.158063616,
            "unit": "ns",
            "range": "± 293.7561765225226"
          }
        ]
      }
    ]
  }
}