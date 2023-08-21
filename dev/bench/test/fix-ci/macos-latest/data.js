window.BENCHMARK_DATA = {
  "lastUpdate": 1692593857150,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050039ddb74fe85fc58cfa0892c3808a77c22fe3",
          "message": "Merge pull request #3356 from moreal/feature/rocksdb/readonly\n\nfeat(#3354): support rocksdb read-only mode",
          "timestamp": "2023-08-21T13:02:45+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/planetarium/libplanet/commit/050039ddb74fe85fc58cfa0892c3808a77c22fe3"
        },
        "date": 1692591783188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9693594.597938145,
            "unit": "ns",
            "range": "± 1358785.77985017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24664514.20588235,
            "unit": "ns",
            "range": "± 793076.4788460794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490525.09090909,
            "unit": "ns",
            "range": "± 1756419.5915953545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106792338.53846154,
            "unit": "ns",
            "range": "± 2889539.059471797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221346505.7352941,
            "unit": "ns",
            "range": "± 4396253.911089667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82043.74742268042,
            "unit": "ns",
            "range": "± 19006.136296947476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344358.876344086,
            "unit": "ns",
            "range": "± 39020.56405251455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324599.0869565217,
            "unit": "ns",
            "range": "± 28733.57483454809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312522.0934065934,
            "unit": "ns",
            "range": "± 27173.833986219586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242747.0617283955,
            "unit": "ns",
            "range": "± 223171.7288347891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788735.5057471264,
            "unit": "ns",
            "range": "± 205818.9731072042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17762.228260869564,
            "unit": "ns",
            "range": "± 2258.6630933590864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98428.83333333333,
            "unit": "ns",
            "range": "± 18164.209911082773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105334.08791208791,
            "unit": "ns",
            "range": "± 13233.09912609569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96245.35567010309,
            "unit": "ns",
            "range": "± 14557.119850916662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6221.49494949495,
            "unit": "ns",
            "range": "± 1643.2935841004369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18372.521276595744,
            "unit": "ns",
            "range": "± 2725.3966732246813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710608.2956989247,
            "unit": "ns",
            "range": "± 226431.23777681953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3168334.346153846,
            "unit": "ns",
            "range": "± 182040.9359606864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173039.8260869565,
            "unit": "ns",
            "range": "± 223332.08477458102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6154153.914893617,
            "unit": "ns",
            "range": "± 414310.0926517028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3588042.9620253164,
            "unit": "ns",
            "range": "± 185494.36059438318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695405.0306122447,
            "unit": "ns",
            "range": "± 251392.8079335311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4844455.260869565,
            "unit": "ns",
            "range": "± 272578.3667092589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128372.6914893617,
            "unit": "ns",
            "range": "± 232634.82898528184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7504537.291666667,
            "unit": "ns",
            "range": "± 481491.79093390075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957740.401141827,
            "unit": "ns",
            "range": "± 243813.96876422717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888270.6035837573,
            "unit": "ns",
            "range": "± 102022.9503437015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1107414.4545611213,
            "unit": "ns",
            "range": "± 34713.68381504012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617312.1962139425,
            "unit": "ns",
            "range": "± 34560.93521656643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805761.2110072544,
            "unit": "ns",
            "range": "± 4271.048970317933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 686882.6947916667,
            "unit": "ns",
            "range": "± 6012.8509412271005"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "732587ddc261c59e44eb826e936333a84cf1cadd",
          "message": "refactor: add console output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:09:24+09:00",
          "tree_id": "e4b2c411230a697f2aef03ec5700c4eb1e097dff",
          "url": "https://github.com/planetarium/libplanet/commit/732587ddc261c59e44eb826e936333a84cf1cadd"
        },
        "date": 1692592348329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8836842.203703703,
            "unit": "ns",
            "range": "± 355211.97863207327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20500707.673913043,
            "unit": "ns",
            "range": "± 504196.8523058729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54950558.38095238,
            "unit": "ns",
            "range": "± 2495142.4063308295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110243332.64,
            "unit": "ns",
            "range": "± 2911912.1318616094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218603409.19047618,
            "unit": "ns",
            "range": "± 4991212.838087618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68981.83333333333,
            "unit": "ns",
            "range": "± 9208.821986966654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325517.7708333333,
            "unit": "ns",
            "range": "± 26235.33767689324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319206.2157894737,
            "unit": "ns",
            "range": "± 23087.709494338338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310181.34444444446,
            "unit": "ns",
            "range": "± 21607.038664433338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4221608.813953488,
            "unit": "ns",
            "range": "± 154474.22019875087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810966.388888889,
            "unit": "ns",
            "range": "± 166543.7595409562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23912.23711340206,
            "unit": "ns",
            "range": "± 6593.011937797593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107422.7947368421,
            "unit": "ns",
            "range": "± 21580.481620576404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102622.27472527472,
            "unit": "ns",
            "range": "± 13805.599108144437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110054.87234042553,
            "unit": "ns",
            "range": "± 18873.448371164493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4988.035294117647,
            "unit": "ns",
            "range": "± 566.4496036730898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23009.182795698925,
            "unit": "ns",
            "range": "± 5022.829981252637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653210.808080808,
            "unit": "ns",
            "range": "± 200908.2282978199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017341.452631579,
            "unit": "ns",
            "range": "± 198029.62319163416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104521.14,
            "unit": "ns",
            "range": "± 185338.2463695603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5568380.651685393,
            "unit": "ns",
            "range": "± 306203.2362100783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3507952.5894736843,
            "unit": "ns",
            "range": "± 238811.5899869511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3652699.4081632653,
            "unit": "ns",
            "range": "± 280325.88947210443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4820946.72,
            "unit": "ns",
            "range": "± 362550.73669061926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4047752.96,
            "unit": "ns",
            "range": "± 305990.1318322134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7034671.068181818,
            "unit": "ns",
            "range": "± 385879.21829850075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6532988.323302469,
            "unit": "ns",
            "range": "± 341102.1821209479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830307.5483240928,
            "unit": "ns",
            "range": "± 52085.86265297248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082206.023046875,
            "unit": "ns",
            "range": "± 18087.581084954232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2788866.2554450757,
            "unit": "ns",
            "range": "± 254040.39941140785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 896007.4019886364,
            "unit": "ns",
            "range": "± 37926.94855299969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737878.9441912615,
            "unit": "ns",
            "range": "± 20516.69952789141"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "453591bbb880d9ef869ca01c018ad4a3c76afa44",
          "message": "refactor: add file output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:23:17+09:00",
          "tree_id": "a6284d52c357e9b9e7429d9de734b2bfbf826b3b",
          "url": "https://github.com/planetarium/libplanet/commit/453591bbb880d9ef869ca01c018ad4a3c76afa44"
        },
        "date": 1692592840295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8462957.581395349,
            "unit": "ns",
            "range": "± 311517.80435919383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20659984.852941178,
            "unit": "ns",
            "range": "± 659551.9293888033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50637221.802325584,
            "unit": "ns",
            "range": "± 2708482.0677630003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102198363.8877551,
            "unit": "ns",
            "range": "± 4014090.5383630525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207250916.9347826,
            "unit": "ns",
            "range": "± 7477669.503403327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65614.69791666667,
            "unit": "ns",
            "range": "± 9871.729972763309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324105.7415730337,
            "unit": "ns",
            "range": "± 21269.83618644877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313136.021978022,
            "unit": "ns",
            "range": "± 17571.809557089524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312406.8181818182,
            "unit": "ns",
            "range": "± 13233.904747096334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198070.333333333,
            "unit": "ns",
            "range": "± 132755.26919972582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3797727.5588235296,
            "unit": "ns",
            "range": "± 73380.31832725192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22766.85,
            "unit": "ns",
            "range": "± 5546.987325694384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97492.76041666667,
            "unit": "ns",
            "range": "± 17206.091810900973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100658.49,
            "unit": "ns",
            "range": "± 25001.80657088563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94719.81443298969,
            "unit": "ns",
            "range": "± 17347.170025762305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5869.297872340426,
            "unit": "ns",
            "range": "± 1740.9302224242829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18394.63157894737,
            "unit": "ns",
            "range": "± 2565.58100114969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1502125.0824742268,
            "unit": "ns",
            "range": "± 139337.46649035736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861232.947368421,
            "unit": "ns",
            "range": "± 123919.84377345086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1915049.3076923077,
            "unit": "ns",
            "range": "± 141105.21152338714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5586578.235294118,
            "unit": "ns",
            "range": "± 263365.7294653378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450928.5895522386,
            "unit": "ns",
            "range": "± 163033.48773364912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557757.5212765955,
            "unit": "ns",
            "range": "± 116180.67122009456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480545.192307692,
            "unit": "ns",
            "range": "± 120699.41747258577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3961845.470588235,
            "unit": "ns",
            "range": "± 189452.13986174224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7006729.676470588,
            "unit": "ns",
            "range": "± 259661.53596863023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5534490.39453125,
            "unit": "ns",
            "range": "± 122802.81225791833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1796261.5057198661,
            "unit": "ns",
            "range": "± 22385.309260410937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1020243.7385416667,
            "unit": "ns",
            "range": "± 15736.248879099787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2695277.8080897178,
            "unit": "ns",
            "range": "± 81669.36783869706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815126.0935142781,
            "unit": "ns",
            "range": "± 23604.16217800221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806314.3043387277,
            "unit": "ns",
            "range": "± 13262.733078824138"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "47d3e69c92a75415b1b8592198fc2c0139660174",
          "message": "refactor: dump linux core",
          "timestamp": "2023-08-21T13:31:21+09:00",
          "tree_id": "3fd022f76677056b587770f46908c2b4e0d089bd",
          "url": "https://github.com/planetarium/libplanet/commit/47d3e69c92a75415b1b8592198fc2c0139660174"
        },
        "date": 1692593796261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8706038.11764706,
            "unit": "ns",
            "range": "± 466591.2992389952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28225245.655555554,
            "unit": "ns",
            "range": "± 6706311.188040776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64131333.38297872,
            "unit": "ns",
            "range": "± 17547934.96291047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124481680.15384616,
            "unit": "ns",
            "range": "± 21925013.76711412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273631142.52,
            "unit": "ns",
            "range": "± 61879994.07418866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77843.46551724138,
            "unit": "ns",
            "range": "± 7431.310301765275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378813.36363636365,
            "unit": "ns",
            "range": "± 63490.82795124989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349845.63402061857,
            "unit": "ns",
            "range": "± 47607.538028750605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337210.0578947368,
            "unit": "ns",
            "range": "± 42587.50558998415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4279265.811111111,
            "unit": "ns",
            "range": "± 270753.6228886289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174056.397959184,
            "unit": "ns",
            "range": "± 278712.2487245634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24745.457446808512,
            "unit": "ns",
            "range": "± 4274.658514097734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118842.08421052631,
            "unit": "ns",
            "range": "± 21026.04736059192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114792.06666666667,
            "unit": "ns",
            "range": "± 16899.85181425625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106409.39130434782,
            "unit": "ns",
            "range": "± 13862.583516692921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7689.445652173913,
            "unit": "ns",
            "range": "± 885.3093500949282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26820.468421052632,
            "unit": "ns",
            "range": "± 3885.713638151371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1823434.0105263158,
            "unit": "ns",
            "range": "± 297011.2696353347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3617159.4505494507,
            "unit": "ns",
            "range": "± 745211.7697545257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296909.60989011,
            "unit": "ns",
            "range": "± 341158.657220148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8819651.5625,
            "unit": "ns",
            "range": "± 3277111.991727905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520416.2386363638,
            "unit": "ns",
            "range": "± 396522.5707975334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4155925.0344827585,
            "unit": "ns",
            "range": "± 523922.58983119734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4991336.511363637,
            "unit": "ns",
            "range": "± 731622.9382389474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4362115.5,
            "unit": "ns",
            "range": "± 627187.7428588633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10503785.639175259,
            "unit": "ns",
            "range": "± 3456133.0691861124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7426843.824588816,
            "unit": "ns",
            "range": "± 1331420.1336156821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903922.6911132813,
            "unit": "ns",
            "range": "± 134511.830400645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223805.055372362,
            "unit": "ns",
            "range": "± 62241.03759056511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3920084.72546875,
            "unit": "ns",
            "range": "± 261538.1277035745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1151587.2269021738,
            "unit": "ns",
            "range": "± 43961.742065149774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944662.3206108941,
            "unit": "ns",
            "range": "± 46262.35467033811"
          }
        ]
      }
    ]
  }
}