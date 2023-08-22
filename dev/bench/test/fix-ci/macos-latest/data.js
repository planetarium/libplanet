window.BENCHMARK_DATA = {
  "lastUpdate": 1692682738055,
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
          "id": "1be722264dae1d03dba687fd2ce39f1375243e6f",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T13:55:52+09:00",
          "tree_id": "c56415f9d4061f4f5ef8ba079576b88d8bda8735",
          "url": "https://github.com/planetarium/libplanet/commit/1be722264dae1d03dba687fd2ce39f1375243e6f"
        },
        "date": 1692594627752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644267.846153846,
            "unit": "ns",
            "range": "± 87114.09771562634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20141809.75,
            "unit": "ns",
            "range": "± 510978.03045934247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49181606,
            "unit": "ns",
            "range": "± 747272.465787604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97226692.72222222,
            "unit": "ns",
            "range": "± 1969781.4017650853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203779152.23333332,
            "unit": "ns",
            "range": "± 3194080.2343247305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55807.87640449438,
            "unit": "ns",
            "range": "± 4150.159248916691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297286.89784946234,
            "unit": "ns",
            "range": "± 18456.000541911533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290790.23195876286,
            "unit": "ns",
            "range": "± 20387.88758803632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273343.0862068966,
            "unit": "ns",
            "range": "± 11884.476472589176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4054119.8518518517,
            "unit": "ns",
            "range": "± 110389.69018913918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733035.076923077,
            "unit": "ns",
            "range": "± 101392.2420286377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16922.76842105263,
            "unit": "ns",
            "range": "± 1524.4454063247072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81628.44444444444,
            "unit": "ns",
            "range": "± 7882.666064869767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77957.51685393258,
            "unit": "ns",
            "range": "± 5081.6908382231295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88287.91666666667,
            "unit": "ns",
            "range": "± 13108.707946019513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5022.881720430108,
            "unit": "ns",
            "range": "± 463.0214768580293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16738.308510638297,
            "unit": "ns",
            "range": "± 1403.2323900041993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521406.2659574468,
            "unit": "ns",
            "range": "± 151188.39222135043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794690.553846154,
            "unit": "ns",
            "range": "± 123202.33814187929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1919761.2105263157,
            "unit": "ns",
            "range": "± 156708.72374356887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5320516.872340426,
            "unit": "ns",
            "range": "± 206435.48981804977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3330686.381818182,
            "unit": "ns",
            "range": "± 140066.93510941154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3363251.4523809524,
            "unit": "ns",
            "range": "± 116976.31508488861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299172,
            "unit": "ns",
            "range": "± 181011.9906678442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3845552.42,
            "unit": "ns",
            "range": "± 152795.32897348635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814323.181818182,
            "unit": "ns",
            "range": "± 289399.20336282963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5339361.1171875,
            "unit": "ns",
            "range": "± 45283.76692731528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1738207.1918247768,
            "unit": "ns",
            "range": "± 15543.184499943916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 998741.1145368303,
            "unit": "ns",
            "range": "± 9808.656013039708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2412295.3359375,
            "unit": "ns",
            "range": "± 22839.40434314529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 741099.5166713169,
            "unit": "ns",
            "range": "± 6271.257113588523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 679011.6580729167,
            "unit": "ns",
            "range": "± 4926.489764339042"
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
          "id": "dd8d483365b9cf8bfb306654bde8d7cdc99df2d7",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:20:52+09:00",
          "tree_id": "8e1f8f785d7086e9ae7b6c3dbd7d8db2723ef781",
          "url": "https://github.com/planetarium/libplanet/commit/dd8d483365b9cf8bfb306654bde8d7cdc99df2d7"
        },
        "date": 1692596350376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9013329.631313132,
            "unit": "ns",
            "range": "± 582360.4733149259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21988745.253521126,
            "unit": "ns",
            "range": "± 1074970.4171112366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55501704.788461536,
            "unit": "ns",
            "range": "± 2289586.5159014664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103914948.91044776,
            "unit": "ns",
            "range": "± 4915082.274722005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215579413.56896552,
            "unit": "ns",
            "range": "± 6215702.724317983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65342.47311827957,
            "unit": "ns",
            "range": "± 8996.522742017558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341455.3409090909,
            "unit": "ns",
            "range": "± 30219.509421110062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302990.5,
            "unit": "ns",
            "range": "± 27104.693547348932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283930.0394736842,
            "unit": "ns",
            "range": "± 14455.718769115372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3936090.64,
            "unit": "ns",
            "range": "± 104854.73873327488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634228.269230769,
            "unit": "ns",
            "range": "± 97625.92138384464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17376.53125,
            "unit": "ns",
            "range": "± 2072.802709545066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90416.47872340426,
            "unit": "ns",
            "range": "± 15030.834906756381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96956.73737373737,
            "unit": "ns",
            "range": "± 14283.98906553072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100092.90659340659,
            "unit": "ns",
            "range": "± 9430.078570402055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6407.260416666667,
            "unit": "ns",
            "range": "± 1182.005723957925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18906.03370786517,
            "unit": "ns",
            "range": "± 2939.628905342236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1522412.35,
            "unit": "ns",
            "range": "± 140881.3123221229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2763215.8873239434,
            "unit": "ns",
            "range": "± 133806.455009844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1944532.4897959183,
            "unit": "ns",
            "range": "± 186200.826313582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5444869.02631579,
            "unit": "ns",
            "range": "± 276969.8272339413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3489621.5315789473,
            "unit": "ns",
            "range": "± 337068.5825717754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3548155.393939394,
            "unit": "ns",
            "range": "± 111513.22578845172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4608399.181818182,
            "unit": "ns",
            "range": "± 336952.2424236009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4072573.85,
            "unit": "ns",
            "range": "± 393928.38750292425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7186857.736842105,
            "unit": "ns",
            "range": "± 529980.1406503754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5916320.82265625,
            "unit": "ns",
            "range": "± 94338.66609145235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804672.788671875,
            "unit": "ns",
            "range": "± 26773.514997929014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1022311.8731971154,
            "unit": "ns",
            "range": "± 12169.093817682102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2764419.051328125,
            "unit": "ns",
            "range": "± 166997.95618924702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833305.8542901401,
            "unit": "ns",
            "range": "± 24000.664980942085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806429.9438476562,
            "unit": "ns",
            "range": "± 16680.552724974725"
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
          "id": "ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:46:34+09:00",
          "tree_id": "9314475d2f7f6fb3e7b3b845f3d8d66ded773606",
          "url": "https://github.com/planetarium/libplanet/commit/ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513"
        },
        "date": 1692597753141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8001868.785714285,
            "unit": "ns",
            "range": "± 140252.39385009196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19776062.083333332,
            "unit": "ns",
            "range": "± 276117.4983478981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48364219.77272727,
            "unit": "ns",
            "range": "± 1161636.4401089703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97944700.85714285,
            "unit": "ns",
            "range": "± 1623321.3252719233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203286991.54545453,
            "unit": "ns",
            "range": "± 4963463.5446692575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64417.586956521736,
            "unit": "ns",
            "range": "± 8470.800216687725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302265.11616161617,
            "unit": "ns",
            "range": "± 23451.888209392837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305081.46875,
            "unit": "ns",
            "range": "± 22701.39785932651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288882.75789473683,
            "unit": "ns",
            "range": "± 18735.856507751636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4133693.652173913,
            "unit": "ns",
            "range": "± 101927.26205245523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714859.3170731706,
            "unit": "ns",
            "range": "± 133663.18569345097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21407.372340425532,
            "unit": "ns",
            "range": "± 4119.934332350776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87066.77083333333,
            "unit": "ns",
            "range": "± 8973.226447228757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82137.08988764045,
            "unit": "ns",
            "range": "± 5864.441104581162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94214.5,
            "unit": "ns",
            "range": "± 13170.094870495408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7356.324175824176,
            "unit": "ns",
            "range": "± 741.7423870471262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18762.45348837209,
            "unit": "ns",
            "range": "± 1674.409055770576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645183.08,
            "unit": "ns",
            "range": "± 188200.9023048433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3074398.1082474226,
            "unit": "ns",
            "range": "± 243518.42381594723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124052.5102040814,
            "unit": "ns",
            "range": "± 235820.65389758686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5780802.271739131,
            "unit": "ns",
            "range": "± 343796.2040328673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204805.9,
            "unit": "ns",
            "range": "± 161311.2510887342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667508.0625,
            "unit": "ns",
            "range": "± 64103.36256439673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4543434.56779661,
            "unit": "ns",
            "range": "± 201209.050542727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3824667.2717391304,
            "unit": "ns",
            "range": "± 294565.5025875223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6801918.491803279,
            "unit": "ns",
            "range": "± 304551.3737600835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5094807.468229166,
            "unit": "ns",
            "range": "± 31099.637294705528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1710381.1055989584,
            "unit": "ns",
            "range": "± 18696.039662935727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1035848.59375,
            "unit": "ns",
            "range": "± 9852.274696747432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2792109.752511161,
            "unit": "ns",
            "range": "± 40175.86274310018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841806.3315429688,
            "unit": "ns",
            "range": "± 21512.252946940713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749724.6420572917,
            "unit": "ns",
            "range": "± 3149.554207835349"
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
          "id": "75fb1636b37a96065bfc58c7fc831e7dc5ff71a8",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T15:02:48+09:00",
          "tree_id": "81d385dcaa484a315b2a08cb206277449c29ebd8",
          "url": "https://github.com/planetarium/libplanet/commit/75fb1636b37a96065bfc58c7fc831e7dc5ff71a8"
        },
        "date": 1692599095778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8751858.539473685,
            "unit": "ns",
            "range": "± 439652.0897929616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22628325.045454547,
            "unit": "ns",
            "range": "± 519122.84907760535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54840301.93181818,
            "unit": "ns",
            "range": "± 2025727.7432400987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110970532,
            "unit": "ns",
            "range": "± 3108854.7930365745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230571101.1,
            "unit": "ns",
            "range": "± 4242081.443223156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72412.47916666667,
            "unit": "ns",
            "range": "± 11710.346260312012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353964.22105263156,
            "unit": "ns",
            "range": "± 42399.45275092917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350347.6666666667,
            "unit": "ns",
            "range": "± 34614.82811399478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322734.3241758242,
            "unit": "ns",
            "range": "± 21221.66980213773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4397998.225352113,
            "unit": "ns",
            "range": "± 214439.4670113022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4130387.476190476,
            "unit": "ns",
            "range": "± 148356.40944849886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24373.9375,
            "unit": "ns",
            "range": "± 4458.4197620906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118120.15,
            "unit": "ns",
            "range": "± 28503.931773936598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87983,
            "unit": "ns",
            "range": "± 12216.830112594675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101142.25,
            "unit": "ns",
            "range": "± 15621.094476110788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7616.163265306122,
            "unit": "ns",
            "range": "± 2055.2965105467183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22312.98901098901,
            "unit": "ns",
            "range": "± 3233.097518873281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610851.4631578948,
            "unit": "ns",
            "range": "± 197434.10815557544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060266.695652174,
            "unit": "ns",
            "range": "± 228141.26477781884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030589.3789473684,
            "unit": "ns",
            "range": "± 195687.92381619554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5872248.21,
            "unit": "ns",
            "range": "± 454346.6462627495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571414.640625,
            "unit": "ns",
            "range": "± 164778.520854304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4302011.195876288,
            "unit": "ns",
            "range": "± 849163.4917107105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4755849.708333333,
            "unit": "ns",
            "range": "± 300612.58578897704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4244216.428571428,
            "unit": "ns",
            "range": "± 334838.0498142687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7326086.773809524,
            "unit": "ns",
            "range": "± 389981.244812525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902835.90890625,
            "unit": "ns",
            "range": "± 237834.5684382275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905825.4163161058,
            "unit": "ns",
            "range": "± 29610.867926657036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070650.0636160714,
            "unit": "ns",
            "range": "± 18232.51916178875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3020871.3521262887,
            "unit": "ns",
            "range": "± 199907.7374459694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836128.377734375,
            "unit": "ns",
            "range": "± 15021.15935092884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846282.2229397681,
            "unit": "ns",
            "range": "± 25632.66929261156"
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
          "id": "d8ee9a4f08cefc93a43afe68e87475e68609627a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:30:20+09:00",
          "tree_id": "721ab642828cec0656e765138744693a9f1245ef",
          "url": "https://github.com/planetarium/libplanet/commit/d8ee9a4f08cefc93a43afe68e87475e68609627a"
        },
        "date": 1692600287945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747306.533333333,
            "unit": "ns",
            "range": "± 144509.6991005234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19463693.785714287,
            "unit": "ns",
            "range": "± 664471.3557464965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47907931.125,
            "unit": "ns",
            "range": "± 1194425.0641595516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93954465.15384616,
            "unit": "ns",
            "range": "± 959262.9946832312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214142275.1,
            "unit": "ns",
            "range": "± 2634628.77337648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57542.043956043955,
            "unit": "ns",
            "range": "± 6672.635134824236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298006.4680851064,
            "unit": "ns",
            "range": "± 24399.917244572393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280249.03225806454,
            "unit": "ns",
            "range": "± 16034.901759742725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267103.4328358209,
            "unit": "ns",
            "range": "± 12405.499756918518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3829267.5217391304,
            "unit": "ns",
            "range": "± 93428.17716049906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3372648.1666666665,
            "unit": "ns",
            "range": "± 62085.15887836948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17401.05617977528,
            "unit": "ns",
            "range": "± 2087.1578508908324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83039.09782608696,
            "unit": "ns",
            "range": "± 7408.900553247243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73860.17204301075,
            "unit": "ns",
            "range": "± 5478.623124439634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84790.88775510204,
            "unit": "ns",
            "range": "± 13189.056471597296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4895.363636363636,
            "unit": "ns",
            "range": "± 604.6638694219507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16987.054945054944,
            "unit": "ns",
            "range": "± 1808.1030720536146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486581.6958762887,
            "unit": "ns",
            "range": "± 164330.750582073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738457.811594203,
            "unit": "ns",
            "range": "± 131400.0349499993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1898495.1578947369,
            "unit": "ns",
            "range": "± 163394.79290736522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5537973.90860215,
            "unit": "ns",
            "range": "± 351861.34423934406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3076910.38028169,
            "unit": "ns",
            "range": "± 150069.02638903647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255862.716981132,
            "unit": "ns",
            "range": "± 134376.85978725558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220804.71875,
            "unit": "ns",
            "range": "± 127601.31148209491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4196137.142857143,
            "unit": "ns",
            "range": "± 55545.83453725005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6606794.94,
            "unit": "ns",
            "range": "± 263845.3990822347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5228837.399553572,
            "unit": "ns",
            "range": "± 23195.156587057863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593553.7822265625,
            "unit": "ns",
            "range": "± 6301.105095456107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 949513.9086588542,
            "unit": "ns",
            "range": "± 6583.64345280915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2334443.2484375,
            "unit": "ns",
            "range": "± 13298.101610450156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 738764.9092494419,
            "unit": "ns",
            "range": "± 3490.8792804176055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738898.4689453125,
            "unit": "ns",
            "range": "± 3858.6115297275987"
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
          "id": "f18c8b532a93098d5b8bbafd3f3f883dd9451aa7",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:55:31+09:00",
          "tree_id": "5ff132714a603bce55a62ee15e222eef3ec7506e",
          "url": "https://github.com/planetarium/libplanet/commit/f18c8b532a93098d5b8bbafd3f3f883dd9451aa7"
        },
        "date": 1692601835766,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8091909.318181818,
            "unit": "ns",
            "range": "± 191604.91798698355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19735656.60714286,
            "unit": "ns",
            "range": "± 564037.9662402128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48935861.4,
            "unit": "ns",
            "range": "± 1732415.1165031597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92638198,
            "unit": "ns",
            "range": "± 1184945.8644527465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190241492.9,
            "unit": "ns",
            "range": "± 3510594.809297499"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57362.28888888889,
            "unit": "ns",
            "range": "± 6176.314037040606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294669.45263157896,
            "unit": "ns",
            "range": "± 21136.137415985286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283497.5714285714,
            "unit": "ns",
            "range": "± 12064.661092112468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273474.77835051547,
            "unit": "ns",
            "range": "± 18338.17618824994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804466.36,
            "unit": "ns",
            "range": "± 83336.25980772116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551200.0714285714,
            "unit": "ns",
            "range": "± 60968.63085159107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17551.9012345679,
            "unit": "ns",
            "range": "± 1872.0698411446772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83291.93103448275,
            "unit": "ns",
            "range": "± 11180.507062796167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73248.36585365854,
            "unit": "ns",
            "range": "± 8612.692490654286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92432.74226804124,
            "unit": "ns",
            "range": "± 24222.70379781399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5123.419354838709,
            "unit": "ns",
            "range": "± 754.426017385585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16655.024691358023,
            "unit": "ns",
            "range": "± 2752.3635069486586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435921.094936709,
            "unit": "ns",
            "range": "± 247303.52506002795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762349.1962025315,
            "unit": "ns",
            "range": "± 396423.43013096985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1912533.111111111,
            "unit": "ns",
            "range": "± 231634.22123949003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5280417.5121951215,
            "unit": "ns",
            "range": "± 294026.16279073583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3357608.5542168673,
            "unit": "ns",
            "range": "± 265991.44430808997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3757762.9534883723,
            "unit": "ns",
            "range": "± 138167.30022089568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191958.1836734693,
            "unit": "ns",
            "range": "± 164783.18689172974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3652047.842696629,
            "unit": "ns",
            "range": "± 219939.63025989963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6703285.03030303,
            "unit": "ns",
            "range": "± 302390.6167379674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5262673.890625,
            "unit": "ns",
            "range": "± 43486.196508239256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1688107.42734375,
            "unit": "ns",
            "range": "± 26601.458107540824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 986705.3170572916,
            "unit": "ns",
            "range": "± 6769.678138632351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2405596.1557291667,
            "unit": "ns",
            "range": "± 10062.046545148653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820946.6704427083,
            "unit": "ns",
            "range": "± 3812.484192219642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704145.7450520833,
            "unit": "ns",
            "range": "± 2862.9074137734215"
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
          "id": "dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:58:58+09:00",
          "tree_id": "9034f836b9c8bb4c07dc45c620e30745fd5b7f1a",
          "url": "https://github.com/planetarium/libplanet/commit/dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb"
        },
        "date": 1692602122141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8716712.851851853,
            "unit": "ns",
            "range": "± 454182.2334545934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20318558.272727273,
            "unit": "ns",
            "range": "± 491949.68961365323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51614548.5,
            "unit": "ns",
            "range": "± 836462.5124227026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103542801.23770492,
            "unit": "ns",
            "range": "± 4657308.167788106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209468933.2173913,
            "unit": "ns",
            "range": "± 5038277.310030789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63857.278947368424,
            "unit": "ns",
            "range": "± 9005.089927343983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298648.1489361702,
            "unit": "ns",
            "range": "± 17513.04024253697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289951.46428571426,
            "unit": "ns",
            "range": "± 15582.773969645794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282360.25,
            "unit": "ns",
            "range": "± 19861.015892817188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4023582.25,
            "unit": "ns",
            "range": "± 112696.186379863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3754903.28,
            "unit": "ns",
            "range": "± 90910.77765201073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18649.5,
            "unit": "ns",
            "range": "± 3174.9802041435305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97953.25773195876,
            "unit": "ns",
            "range": "± 12041.195303587276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85423.32828282828,
            "unit": "ns",
            "range": "± 19035.09088662434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93101.125,
            "unit": "ns",
            "range": "± 15852.100888990608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5738.821052631579,
            "unit": "ns",
            "range": "± 1388.4100808995736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18119.07608695652,
            "unit": "ns",
            "range": "± 2747.2870903464964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543162.2903225806,
            "unit": "ns",
            "range": "± 147819.11137056057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975544.9623655914,
            "unit": "ns",
            "range": "± 169969.9241110512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2078130.0721649486,
            "unit": "ns",
            "range": "± 216064.76809156896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5641816.835616439,
            "unit": "ns",
            "range": "± 279423.8728046322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321480.253164557,
            "unit": "ns",
            "range": "± 157662.11639756942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469260.0206185565,
            "unit": "ns",
            "range": "± 242836.3120212092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4315617.833333333,
            "unit": "ns",
            "range": "± 156518.32472498371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3804401.220338983,
            "unit": "ns",
            "range": "± 147615.33288597368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6802183.217391305,
            "unit": "ns",
            "range": "± 259247.25462186465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5837054.671223958,
            "unit": "ns",
            "range": "± 148936.27316298705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1658881.7908653845,
            "unit": "ns",
            "range": "± 18100.420086395116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1035769.484765625,
            "unit": "ns",
            "range": "± 15145.849023525718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2902257.3932291665,
            "unit": "ns",
            "range": "± 41381.25450627459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792513.2693058894,
            "unit": "ns",
            "range": "± 6386.518903576427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738193.1786534926,
            "unit": "ns",
            "range": "± 14608.999296574042"
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
          "id": "20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:56:11+09:00",
          "tree_id": "32ebda4ba1257e16026df3d9ce56d3dac0f8ab4a",
          "url": "https://github.com/planetarium/libplanet/commit/20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed"
        },
        "date": 1692602364893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9701942.922222223,
            "unit": "ns",
            "range": "± 2102931.541974098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23557204.597826086,
            "unit": "ns",
            "range": "± 2557338.972262328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54628468.57692308,
            "unit": "ns",
            "range": "± 3703993.207912992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107719381.09375,
            "unit": "ns",
            "range": "± 4381635.521317648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216349951.07142857,
            "unit": "ns",
            "range": "± 3678500.041079677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84599.76666666666,
            "unit": "ns",
            "range": "± 12638.33459534207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324252.6629213483,
            "unit": "ns",
            "range": "± 33949.06691680127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347304.1473684211,
            "unit": "ns",
            "range": "± 38988.012901940536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323517.4456521739,
            "unit": "ns",
            "range": "± 30917.554034214158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4204307.58988764,
            "unit": "ns",
            "range": "± 232240.65828324013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3669268.5625,
            "unit": "ns",
            "range": "± 68181.5156563407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19195.386363636364,
            "unit": "ns",
            "range": "± 2280.864574087895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97387.51546391753,
            "unit": "ns",
            "range": "± 14736.272924681323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105037.64130434782,
            "unit": "ns",
            "range": "± 19070.77055185113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114883.85869565218,
            "unit": "ns",
            "range": "± 21666.872960372304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7534.515463917526,
            "unit": "ns",
            "range": "± 1289.0579094940654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20471.7311827957,
            "unit": "ns",
            "range": "± 2963.939230805579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577784.5222222223,
            "unit": "ns",
            "range": "± 217649.8364589983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059341.5659340657,
            "unit": "ns",
            "range": "± 293726.92835957545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051417.744680851,
            "unit": "ns",
            "range": "± 155786.79345409322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7754528.5698924735,
            "unit": "ns",
            "range": "± 1776914.119474585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3580342.6588235293,
            "unit": "ns",
            "range": "± 271323.49827600166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621196.2954545454,
            "unit": "ns",
            "range": "± 309559.4796198452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4571603.94680851,
            "unit": "ns",
            "range": "± 268116.1248522703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3907011.215909091,
            "unit": "ns",
            "range": "± 236968.78224232962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7016499.164835165,
            "unit": "ns",
            "range": "± 431710.02484399854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6146975.592648237,
            "unit": "ns",
            "range": "± 214517.3959405973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911172.2743890225,
            "unit": "ns",
            "range": "± 97575.94826925463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047091.570719401,
            "unit": "ns",
            "range": "± 40134.52650024181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675141.0849905303,
            "unit": "ns",
            "range": "± 84647.863779318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872329.7116268382,
            "unit": "ns",
            "range": "± 41353.511780066314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775729.275245949,
            "unit": "ns",
            "range": "± 18614.356128634605"
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
          "id": "8003de7afe93ec8604207cc01d9e080ea4bd3af4",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:11:57+09:00",
          "tree_id": "27436bd6a662788c77b6f825da86805b1d25ca9b",
          "url": "https://github.com/planetarium/libplanet/commit/8003de7afe93ec8604207cc01d9e080ea4bd3af4"
        },
        "date": 1692603385320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11059731.92,
            "unit": "ns",
            "range": "± 1936561.8543402166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22981861.39,
            "unit": "ns",
            "range": "± 3147430.945538146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60225116.26,
            "unit": "ns",
            "range": "± 7998677.7499229945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116548943.75252526,
            "unit": "ns",
            "range": "± 12111024.992950547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243718069.88,
            "unit": "ns",
            "range": "± 20139130.381472148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89858.64285714286,
            "unit": "ns",
            "range": "± 28503.28958235284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323846.48421052634,
            "unit": "ns",
            "range": "± 39074.338093484024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312259.54545454547,
            "unit": "ns",
            "range": "± 42477.49604304847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291448.86842105264,
            "unit": "ns",
            "range": "± 9950.798189283143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4657893.87755102,
            "unit": "ns",
            "range": "± 654571.0881546198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970944.946236559,
            "unit": "ns",
            "range": "± 526157.4054165764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20970.531914893618,
            "unit": "ns",
            "range": "± 2975.544393859837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96590.5744680851,
            "unit": "ns",
            "range": "± 14925.640705967773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98117.58333333333,
            "unit": "ns",
            "range": "± 21808.562512857032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113206.25257731958,
            "unit": "ns",
            "range": "± 29408.970473533143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6834.170212765957,
            "unit": "ns",
            "range": "± 1118.1520915100687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19935.079545454544,
            "unit": "ns",
            "range": "± 2818.373981863615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2040833.303030303,
            "unit": "ns",
            "range": "± 385372.0596717966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3924120.5918367347,
            "unit": "ns",
            "range": "± 543736.5967507658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2355630.3829787234,
            "unit": "ns",
            "range": "± 419752.89142885484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7144353.653061224,
            "unit": "ns",
            "range": "± 1108972.5057700854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3930936.8061224488,
            "unit": "ns",
            "range": "± 680447.4204119117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625827.1195652173,
            "unit": "ns",
            "range": "± 516483.4892883925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5177457.45,
            "unit": "ns",
            "range": "± 1035459.2165857579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4431903.902061855,
            "unit": "ns",
            "range": "± 710781.0169728007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7235565.018072289,
            "unit": "ns",
            "range": "± 530691.4407532315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6879340.1222380055,
            "unit": "ns",
            "range": "± 476631.1339027394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957433.521328125,
            "unit": "ns",
            "range": "± 174153.27739986457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083181.8262939453,
            "unit": "ns",
            "range": "± 53636.00052081004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3334568.930871212,
            "unit": "ns",
            "range": "± 365356.28573861177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083409.7777929688,
            "unit": "ns",
            "range": "± 77397.9618491582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924125.0308007812,
            "unit": "ns",
            "range": "± 84590.70175884047"
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
          "id": "5f7be7776916fe0376ffda3b2513bce3f47f042f",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:42:07+09:00",
          "tree_id": "e0217b1f670bfce114359f4fa1ac51fa09ce59da",
          "url": "https://github.com/planetarium/libplanet/commit/5f7be7776916fe0376ffda3b2513bce3f47f042f"
        },
        "date": 1692604927923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9192336.693877552,
            "unit": "ns",
            "range": "± 558890.1405874722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23975977.67,
            "unit": "ns",
            "range": "± 1778154.6625028222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55487535.58,
            "unit": "ns",
            "range": "± 1428177.865540357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114267865.64285715,
            "unit": "ns",
            "range": "± 1915233.1800097972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238098028.07142857,
            "unit": "ns",
            "range": "± 3854498.769953339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78160.82142857143,
            "unit": "ns",
            "range": "± 5587.960582694921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373598.6979166667,
            "unit": "ns",
            "range": "± 54206.525212593864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373959.28089887643,
            "unit": "ns",
            "range": "± 72815.41790532427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310223.75757575757,
            "unit": "ns",
            "range": "± 8725.392605888514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4115539.5833333335,
            "unit": "ns",
            "range": "± 50981.30028560085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830214.1666666665,
            "unit": "ns",
            "range": "± 42092.43732296668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22115.893617021276,
            "unit": "ns",
            "range": "± 3603.080415864268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95211.43684210526,
            "unit": "ns",
            "range": "± 9987.029651066818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125664,
            "unit": "ns",
            "range": "± 20826.303178533883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133810.86842105264,
            "unit": "ns",
            "range": "± 27313.03562055361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8807.742105263158,
            "unit": "ns",
            "range": "± 829.4325503952056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25048.625,
            "unit": "ns",
            "range": "± 3654.0412356747556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588585.8762886599,
            "unit": "ns",
            "range": "± 165496.5806799505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2951586.3088235296,
            "unit": "ns",
            "range": "± 140808.14920545046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2007721.6262626264,
            "unit": "ns",
            "range": "± 202671.60335216793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5324107.803030303,
            "unit": "ns",
            "range": "± 164101.8811362862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683995.714285714,
            "unit": "ns",
            "range": "± 376479.201074003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3873472.090909091,
            "unit": "ns",
            "range": "± 364832.7399316885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4909903.429292929,
            "unit": "ns",
            "range": "± 509515.1218139925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4330331.046391753,
            "unit": "ns",
            "range": "± 462473.06761828985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7541023.697916667,
            "unit": "ns",
            "range": "± 597826.5822937834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6576909.110546875,
            "unit": "ns",
            "range": "± 150362.06013411825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938217.6604003906,
            "unit": "ns",
            "range": "± 59269.43783201047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1106675.8025716145,
            "unit": "ns",
            "range": "± 28748.141782057224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3354168.143214026,
            "unit": "ns",
            "range": "± 181428.7791513367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950497.3858032227,
            "unit": "ns",
            "range": "± 36963.610341513755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854257.6075067935,
            "unit": "ns",
            "range": "± 21603.628464512003"
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
          "id": "f97ee7be56164bcd96a5cd40508f258c7aeccbdb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T18:45:49+09:00",
          "tree_id": "97730f03587381befe31dac35c77460ff40aebfd",
          "url": "https://github.com/planetarium/libplanet/commit/f97ee7be56164bcd96a5cd40508f258c7aeccbdb"
        },
        "date": 1692612676424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10439578.44,
            "unit": "ns",
            "range": "± 1526936.2808532335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23371002.11,
            "unit": "ns",
            "range": "± 3535507.970420175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62733658.53,
            "unit": "ns",
            "range": "± 6288918.413826308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123719076,
            "unit": "ns",
            "range": "± 12723712.374952227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262636275.34,
            "unit": "ns",
            "range": "± 28199513.293843914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69560.13043478261,
            "unit": "ns",
            "range": "± 14448.049712652686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331307.71875,
            "unit": "ns",
            "range": "± 40385.17831208639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328541.1145833333,
            "unit": "ns",
            "range": "± 45880.66371780963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315459.5106382979,
            "unit": "ns",
            "range": "± 38745.01329349093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4703029.126262627,
            "unit": "ns",
            "range": "± 936606.1295098054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3791307.0172413792,
            "unit": "ns",
            "range": "± 327913.6520425469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18771.644444444446,
            "unit": "ns",
            "range": "± 1549.1265774812193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102892.6105263158,
            "unit": "ns",
            "range": "± 16782.146918608487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99316.38541666667,
            "unit": "ns",
            "range": "± 16872.27509718691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100549.93157894736,
            "unit": "ns",
            "range": "± 21841.653190612476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.951612903225,
            "unit": "ns",
            "range": "± 607.2273679912555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17281.98888888889,
            "unit": "ns",
            "range": "± 1514.1645561978864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613018.0833333333,
            "unit": "ns",
            "range": "± 248345.18243447776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3118493.3645833335,
            "unit": "ns",
            "range": "± 381178.05334355426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204617.595959596,
            "unit": "ns",
            "range": "± 328929.144260116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5651569.032967033,
            "unit": "ns",
            "range": "± 326659.9640569669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3918173.62371134,
            "unit": "ns",
            "range": "± 678931.119648213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3994592.303030303,
            "unit": "ns",
            "range": "± 791434.0235700862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5070314.989690722,
            "unit": "ns",
            "range": "± 783437.4998714598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4005966.522727273,
            "unit": "ns",
            "range": "± 388766.88658676593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8192512.98,
            "unit": "ns",
            "range": "± 1199700.6443228433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7761577.88171875,
            "unit": "ns",
            "range": "± 669540.5240718662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040871.22703125,
            "unit": "ns",
            "range": "± 149770.1929803296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224160.1203440656,
            "unit": "ns",
            "range": "± 88329.69237758781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3036700.3586903997,
            "unit": "ns",
            "range": "± 213757.4118422948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006297.985078125,
            "unit": "ns",
            "range": "± 81435.2190063313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931503.4037890625,
            "unit": "ns",
            "range": "± 69093.27914202894"
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
          "id": "faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:09:14+09:00",
          "tree_id": "8a8d7464f6f88170ae3eb5b2869efec20a206333",
          "url": "https://github.com/planetarium/libplanet/commit/faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a"
        },
        "date": 1692613604578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8813910.728070175,
            "unit": "ns",
            "range": "± 379735.42026178364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20796094.033333335,
            "unit": "ns",
            "range": "± 186384.65061489932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51398875.43333333,
            "unit": "ns",
            "range": "± 800432.3624291585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104284557.5,
            "unit": "ns",
            "range": "± 632596.8323404969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211736704.6,
            "unit": "ns",
            "range": "± 3894050.887884745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74491.86516853933,
            "unit": "ns",
            "range": "± 6845.918095662771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298606.67142857146,
            "unit": "ns",
            "range": "± 14391.832792580888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293053.32352941175,
            "unit": "ns",
            "range": "± 15472.836131639948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281239.8888888889,
            "unit": "ns",
            "range": "± 5868.578714986017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4085912.933333333,
            "unit": "ns",
            "range": "± 61342.26852839341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678038.346153846,
            "unit": "ns",
            "range": "± 23186.13536809643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19822.118556701033,
            "unit": "ns",
            "range": "± 3274.8646900905787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97528.09183673469,
            "unit": "ns",
            "range": "± 12853.621305158618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100269.27551020408,
            "unit": "ns",
            "range": "± 9947.413583730488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98601.53260869565,
            "unit": "ns",
            "range": "± 9185.210890818735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6011.80412371134,
            "unit": "ns",
            "range": "± 696.2450274983306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18306.25806451613,
            "unit": "ns",
            "range": "± 2317.635751397765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487503.5543478262,
            "unit": "ns",
            "range": "± 98968.49927016282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860788.7540983604,
            "unit": "ns",
            "range": "± 128778.28111145862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030456.5612244897,
            "unit": "ns",
            "range": "± 198779.38455893818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5648340.892857143,
            "unit": "ns",
            "range": "± 300990.8637134428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361962.1153846155,
            "unit": "ns",
            "range": "± 116815.83550921768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3700200.923076923,
            "unit": "ns",
            "range": "± 43190.6679107527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4349290.066666666,
            "unit": "ns",
            "range": "± 81007.24284766735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4305713.375,
            "unit": "ns",
            "range": "± 83252.98642080855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6594300.170212766,
            "unit": "ns",
            "range": "± 257057.17298909268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5621723.371170343,
            "unit": "ns",
            "range": "± 226679.96041056814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1718356.416015625,
            "unit": "ns",
            "range": "± 12503.565926909472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025609.4813802083,
            "unit": "ns",
            "range": "± 10366.977824855481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2798997.6369977677,
            "unit": "ns",
            "range": "± 32692.638931943053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796081.1257161458,
            "unit": "ns",
            "range": "± 6121.816459786624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843905.3878580729,
            "unit": "ns",
            "range": "± 17467.270672656272"
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
          "id": "6dba091ff32e0e731687b20b5eb15fa068a80a89",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:27:42+09:00",
          "tree_id": "9857b558da3240becfc46c7b1d075d809fb38a4c",
          "url": "https://github.com/planetarium/libplanet/commit/6dba091ff32e0e731687b20b5eb15fa068a80a89"
        },
        "date": 1692614904759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8749537.258064516,
            "unit": "ns",
            "range": "± 220940.19368869453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24461220.413043477,
            "unit": "ns",
            "range": "± 5550647.81952745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52693992.425925925,
            "unit": "ns",
            "range": "± 1429883.6859940724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135418681.90816328,
            "unit": "ns",
            "range": "± 20667161.707569763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263107027.50515464,
            "unit": "ns",
            "range": "± 49210025.4496996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76362.32978723405,
            "unit": "ns",
            "range": "± 7090.934220247524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378013.1451612903,
            "unit": "ns",
            "range": "± 65668.13516159098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347976.79545454547,
            "unit": "ns",
            "range": "± 51674.51508831846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329373.98913043475,
            "unit": "ns",
            "range": "± 32426.124460153656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4595876.397959184,
            "unit": "ns",
            "range": "± 449219.7260999502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109762.7551020407,
            "unit": "ns",
            "range": "± 307928.83019704715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22263.369565217392,
            "unit": "ns",
            "range": "± 4185.6974820657115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105977.05789473685,
            "unit": "ns",
            "range": "± 18408.56017155328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113007.36956521739,
            "unit": "ns",
            "range": "± 20553.051836819166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106731.77956989247,
            "unit": "ns",
            "range": "± 22951.671266402172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7130.468421052631,
            "unit": "ns",
            "range": "± 1491.2544658678764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20334.315217391304,
            "unit": "ns",
            "range": "± 4219.821523566476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554795.9444444445,
            "unit": "ns",
            "range": "± 152862.71840051332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3211361.223404255,
            "unit": "ns",
            "range": "± 292950.9390216101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119070.2,
            "unit": "ns",
            "range": "± 235696.96932062117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7045602.0051546395,
            "unit": "ns",
            "range": "± 1640612.4690168437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3675161.0888888887,
            "unit": "ns",
            "range": "± 407028.2784011103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3803063.6404494382,
            "unit": "ns",
            "range": "± 394704.2292858277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4999229.379120879,
            "unit": "ns",
            "range": "± 643119.2431920441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360653.413793104,
            "unit": "ns",
            "range": "± 675396.6786143472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8971376.468085106,
            "unit": "ns",
            "range": "± 2267303.8184074406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6057862.695572916,
            "unit": "ns",
            "range": "± 83618.73130302182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901122.9034179687,
            "unit": "ns",
            "range": "± 43013.07662692135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068942.2022135416,
            "unit": "ns",
            "range": "± 10209.185199757912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633253.0360814147,
            "unit": "ns",
            "range": "± 41785.235841675465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828281.1014508929,
            "unit": "ns",
            "range": "± 26809.210805655126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839550.6994850852,
            "unit": "ns",
            "range": "± 20542.02929830009"
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
          "id": "f9522219438a8eab92facec06ddd7be3cdd834aa",
          "message": "fix: remove unusual timeout test",
          "timestamp": "2023-08-21T20:15:05+09:00",
          "tree_id": "b4bc4ed077e24b593d50ad16cd321b97a132dd6f",
          "url": "https://github.com/planetarium/libplanet/commit/f9522219438a8eab92facec06ddd7be3cdd834aa"
        },
        "date": 1692617737272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9178742.87628866,
            "unit": "ns",
            "range": "± 624648.1126744524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21793463.3,
            "unit": "ns",
            "range": "± 1097446.8025079602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54604345.68,
            "unit": "ns",
            "range": "± 2175446.2615954224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110461275.38095239,
            "unit": "ns",
            "range": "± 2538066.387722758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222898733.14285713,
            "unit": "ns",
            "range": "± 2617349.833868862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76862.45698924731,
            "unit": "ns",
            "range": "± 11051.79716244689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310524.8125,
            "unit": "ns",
            "range": "± 24311.638963267433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298571.62903225806,
            "unit": "ns",
            "range": "± 24093.720907263014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292558.73913043475,
            "unit": "ns",
            "range": "± 18681.04150234986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4522068.383720931,
            "unit": "ns",
            "range": "± 555395.7685512815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3807009.846153846,
            "unit": "ns",
            "range": "± 103536.36250243383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24428.105263157893,
            "unit": "ns",
            "range": "± 4836.556128103049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108097.02083333333,
            "unit": "ns",
            "range": "± 15375.858119983981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114219.10215053764,
            "unit": "ns",
            "range": "± 8061.080357171608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112089.66666666667,
            "unit": "ns",
            "range": "± 9673.261150711021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7902.582474226804,
            "unit": "ns",
            "range": "± 1643.4780932909168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23406.677083333332,
            "unit": "ns",
            "range": "± 5542.773557087957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666510.108695652,
            "unit": "ns",
            "range": "± 194529.9094076895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3177497.7555555557,
            "unit": "ns",
            "range": "± 294253.23694615136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2062027.9047619049,
            "unit": "ns",
            "range": "± 182619.75649173133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7147067.694736842,
            "unit": "ns",
            "range": "± 1501315.2463325819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3546056.397959184,
            "unit": "ns",
            "range": "± 275570.48624197574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3851954.2708333335,
            "unit": "ns",
            "range": "± 378018.55518032523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5847657.25,
            "unit": "ns",
            "range": "± 512954.6916748927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134277.2578947367,
            "unit": "ns",
            "range": "± 326393.31029439025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7137372.340425532,
            "unit": "ns",
            "range": "± 518427.6165023499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7143830.296875,
            "unit": "ns",
            "range": "± 1143380.8227022958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875095.5812934027,
            "unit": "ns",
            "range": "± 159773.09256411708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058502.6293945312,
            "unit": "ns",
            "range": "± 27391.789812949184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2487990.3835320724,
            "unit": "ns",
            "range": "± 55086.733698771066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847667.7682574728,
            "unit": "ns",
            "range": "± 21086.483969590947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 844609.3074273004,
            "unit": "ns",
            "range": "± 27867.002731185687"
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
          "id": "c8eb7f56b04bcbf9c23689a856eee337f62e65fc",
          "message": "fix: see method more globally",
          "timestamp": "2023-08-21T20:25:07+09:00",
          "tree_id": "430f003215504920c4b88eade60593888d24621e",
          "url": "https://github.com/planetarium/libplanet/commit/c8eb7f56b04bcbf9c23689a856eee337f62e65fc"
        },
        "date": 1692618993609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10635829.655913979,
            "unit": "ns",
            "range": "± 2951278.7656906955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25233934.23655914,
            "unit": "ns",
            "range": "± 6564906.673297573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57592596.309523806,
            "unit": "ns",
            "range": "± 3560003.477029349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123293160.5978261,
            "unit": "ns",
            "range": "± 23269763.708477844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 328607609.56,
            "unit": "ns",
            "range": "± 83640083.63844633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74574.59090909091,
            "unit": "ns",
            "range": "± 8837.34871646854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356074.95263157896,
            "unit": "ns",
            "range": "± 67608.87527312669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307056.0789473684,
            "unit": "ns",
            "range": "± 24104.365954659497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313360.80898876407,
            "unit": "ns",
            "range": "± 31744.214475696343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4032324.7,
            "unit": "ns",
            "range": "± 120223.18359994836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4160875.2021276597,
            "unit": "ns",
            "range": "± 446874.55065741343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21850.844444444443,
            "unit": "ns",
            "range": "± 4260.6659655402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85786.33695652174,
            "unit": "ns",
            "range": "± 11706.849310353426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87179.07070707071,
            "unit": "ns",
            "range": "± 14267.836731794825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114981.66129032258,
            "unit": "ns",
            "range": "± 21598.310318014876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6808.053191489362,
            "unit": "ns",
            "range": "± 1547.6210576237509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24444.034090909092,
            "unit": "ns",
            "range": "± 6267.943647922904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656932.0561797754,
            "unit": "ns",
            "range": "± 257705.65611117266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3158649.7989690723,
            "unit": "ns",
            "range": "± 449782.2034832332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265882.1304347827,
            "unit": "ns",
            "range": "± 413533.4123567954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6515551.269230769,
            "unit": "ns",
            "range": "± 1318328.347534045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3634891.1923076925,
            "unit": "ns",
            "range": "± 431766.75305085967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847658.440860215,
            "unit": "ns",
            "range": "± 429891.5525975951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4868545.552083333,
            "unit": "ns",
            "range": "± 522172.0441893673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4505486.27368421,
            "unit": "ns",
            "range": "± 587895.8448464419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7814380.45959596,
            "unit": "ns",
            "range": "± 929393.0219235464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6566799.182421875,
            "unit": "ns",
            "range": "± 441674.82303021103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985166.7997948232,
            "unit": "ns",
            "range": "± 122755.44413315444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187457.3870796536,
            "unit": "ns",
            "range": "± 66936.92035138962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2940285.0402734373,
            "unit": "ns",
            "range": "± 321222.3286456209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802116.6672092014,
            "unit": "ns",
            "range": "± 16706.99836807958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725477.1226981027,
            "unit": "ns",
            "range": "± 9139.177561623994"
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
          "id": "e25d5fb125e8e5a3827f58220b503fa06b735e04",
          "message": "fix: see method more globally",
          "timestamp": "2023-08-21T20:32:29+09:00",
          "tree_id": "d90fb97099259c63eb92ea0c30b1fa0047ee0c07",
          "url": "https://github.com/planetarium/libplanet/commit/e25d5fb125e8e5a3827f58220b503fa06b735e04"
        },
        "date": 1692619144681,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8846017,
            "unit": "ns",
            "range": "± 263337.22407980444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22285246.15,
            "unit": "ns",
            "range": "± 731042.1033391234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55682037.518518515,
            "unit": "ns",
            "range": "± 2320964.4246358913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110360714.2,
            "unit": "ns",
            "range": "± 4933558.497938538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221224296.6470588,
            "unit": "ns",
            "range": "± 4460424.148204223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84402.27011494253,
            "unit": "ns",
            "range": "± 6687.649273623989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331398.72826086957,
            "unit": "ns",
            "range": "± 27431.985124492927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307436.02040816325,
            "unit": "ns",
            "range": "± 12296.260963686273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317693.54347826086,
            "unit": "ns",
            "range": "± 12211.14302950205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215678.866666666,
            "unit": "ns",
            "range": "± 123054.54970626906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3869834.6875,
            "unit": "ns",
            "range": "± 73401.70295546623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27430.333333333332,
            "unit": "ns",
            "range": "± 2764.0128174580636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117300.28494623656,
            "unit": "ns",
            "range": "± 14257.993946074344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119782.12359550562,
            "unit": "ns",
            "range": "± 8022.986779220727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115902.37368421053,
            "unit": "ns",
            "range": "± 15439.869141658362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9105.876288659794,
            "unit": "ns",
            "range": "± 1093.6120508980391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26129.228260869564,
            "unit": "ns",
            "range": "± 4026.2822600302507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680684.322580645,
            "unit": "ns",
            "range": "± 197921.44179595716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258745.761904762,
            "unit": "ns",
            "range": "± 296480.59826566506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263167.311111111,
            "unit": "ns",
            "range": "± 345264.692326776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6897131.771604938,
            "unit": "ns",
            "range": "± 1818633.2412818219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3537667.7906976743,
            "unit": "ns",
            "range": "± 231215.4247498037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626787.671875,
            "unit": "ns",
            "range": "± 167671.07368458467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4577620.875,
            "unit": "ns",
            "range": "± 225995.14916094975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4075043.2315789475,
            "unit": "ns",
            "range": "± 285262.8519671553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7025537.347457627,
            "unit": "ns",
            "range": "± 311168.7504175859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6480047.92234375,
            "unit": "ns",
            "range": "± 172873.16587205234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849824.5742938702,
            "unit": "ns",
            "range": "± 50570.645728766176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047618.3828125,
            "unit": "ns",
            "range": "± 20667.253189394345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2980813.3424337637,
            "unit": "ns",
            "range": "± 170116.28808031807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 897569.5834237558,
            "unit": "ns",
            "range": "± 37166.37719856614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758635.0542317708,
            "unit": "ns",
            "range": "± 28739.70945128282"
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
          "id": "283994a2da857faa59eaddf0270dc3e8f831e52f",
          "message": "fix(ci): use circleci test splitter",
          "timestamp": "2023-08-21T20:50:37+09:00",
          "tree_id": "285bc2798d72e4e1ad3117189460275d49159119",
          "url": "https://github.com/planetarium/libplanet/commit/283994a2da857faa59eaddf0270dc3e8f831e52f"
        },
        "date": 1692620329581,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9381577.452380951,
            "unit": "ns",
            "range": "± 483057.18608574907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21943527.402439024,
            "unit": "ns",
            "range": "± 785693.728645864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54619533.81818182,
            "unit": "ns",
            "range": "± 1722410.4662815651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110785519.96153846,
            "unit": "ns",
            "range": "± 5676620.429667685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233863958.93939394,
            "unit": "ns",
            "range": "± 7242706.947372202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80316.65053763441,
            "unit": "ns",
            "range": "± 15302.861450911321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350874.5909090909,
            "unit": "ns",
            "range": "± 50253.4770830255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352936.9337349398,
            "unit": "ns",
            "range": "± 45610.30038970197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 353115.74731182796,
            "unit": "ns",
            "range": "± 51215.33484214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4695960.604651162,
            "unit": "ns",
            "range": "± 557906.8100985414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370172.61827957,
            "unit": "ns",
            "range": "± 554572.990582293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32244.48901098901,
            "unit": "ns",
            "range": "± 2750.9868794650793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132878.30434782608,
            "unit": "ns",
            "range": "± 13896.301535584675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129478.02298850575,
            "unit": "ns",
            "range": "± 13855.036903744303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127668.10989010989,
            "unit": "ns",
            "range": "± 17638.710816112853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10095.166666666666,
            "unit": "ns",
            "range": "± 1376.2681858192632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28241.172413793105,
            "unit": "ns",
            "range": "± 4555.5172534710055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1822467.042105263,
            "unit": "ns",
            "range": "± 282531.5903894611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440032.4438202246,
            "unit": "ns",
            "range": "± 525714.0556354013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2446394.217391304,
            "unit": "ns",
            "range": "± 423995.70616869535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8706319.957446808,
            "unit": "ns",
            "range": "± 2829837.8743353346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3785564.6931818184,
            "unit": "ns",
            "range": "± 483096.0427689743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4324075.233333333,
            "unit": "ns",
            "range": "± 1116013.3227690333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4963149.697802198,
            "unit": "ns",
            "range": "± 743507.4752600858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4576539.320224719,
            "unit": "ns",
            "range": "± 884055.2315363092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7635132.4655172415,
            "unit": "ns",
            "range": "± 1045133.0717603585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6760232.226069079,
            "unit": "ns",
            "range": "± 750467.171804328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2183781.6000976562,
            "unit": "ns",
            "range": "± 113587.12045710745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1201868.3156565656,
            "unit": "ns",
            "range": "± 70146.60911823293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3532488.8800390624,
            "unit": "ns",
            "range": "± 270861.1449231615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957369.9110717773,
            "unit": "ns",
            "range": "± 28988.737425544223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790936.6258085518,
            "unit": "ns",
            "range": "± 40522.59930889132"
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
          "id": "1becd84cae80c40649bac919aaff17f0b9f0afb9",
          "message": "fix(swarm): break when `ObjectDisposedException`",
          "timestamp": "2023-08-21T21:07:08+09:00",
          "tree_id": "e35891be0b1ede8408f033468304136dcfd4c63c",
          "url": "https://github.com/planetarium/libplanet/commit/1becd84cae80c40649bac919aaff17f0b9f0afb9"
        },
        "date": 1692620511015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8150553.733333333,
            "unit": "ns",
            "range": "± 74510.6111651859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20537610.75,
            "unit": "ns",
            "range": "± 470447.66112142423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49654833.24528302,
            "unit": "ns",
            "range": "± 2071673.8708103509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95315448.66666667,
            "unit": "ns",
            "range": "± 1514423.8798537345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190312580.86666667,
            "unit": "ns",
            "range": "± 3254233.4848329243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59621.01075268817,
            "unit": "ns",
            "range": "± 9068.525683702399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299926.1538461539,
            "unit": "ns",
            "range": "± 23022.653255205005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283929.1034482759,
            "unit": "ns",
            "range": "± 12367.846027402336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265910.0327868852,
            "unit": "ns",
            "range": "± 11947.72830425267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3867436.285714286,
            "unit": "ns",
            "range": "± 64009.21996860305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3542577.1470588236,
            "unit": "ns",
            "range": "± 70383.49588321574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17545.255319148935,
            "unit": "ns",
            "range": "± 2042.1127615500038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80994.43157894736,
            "unit": "ns",
            "range": "± 7207.476777850033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74977.8111111111,
            "unit": "ns",
            "range": "± 6352.091494710898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85063.76288659793,
            "unit": "ns",
            "range": "± 12769.243266515114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4975.989010989011,
            "unit": "ns",
            "range": "± 637.4638376585328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17459.703296703297,
            "unit": "ns",
            "range": "± 1866.4143251730668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531237.13,
            "unit": "ns",
            "range": "± 145761.2244476489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799051.839506173,
            "unit": "ns",
            "range": "± 146963.6199252605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1854917.9948453608,
            "unit": "ns",
            "range": "± 144880.30493243405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5417683.395348838,
            "unit": "ns",
            "range": "± 194268.23350572583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3170867.0606060605,
            "unit": "ns",
            "range": "± 128112.33843069483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3317183.4716981133,
            "unit": "ns",
            "range": "± 120667.82020227835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4121049.777777778,
            "unit": "ns",
            "range": "± 136518.0301907012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3785743.2954545454,
            "unit": "ns",
            "range": "± 141908.6887230543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6731611.711864407,
            "unit": "ns",
            "range": "± 274002.63013078534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5392723.006433823,
            "unit": "ns",
            "range": "± 108711.07642769335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1654473.4292689732,
            "unit": "ns",
            "range": "± 9930.416096329274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 999361.8483072916,
            "unit": "ns",
            "range": "± 7880.245358886864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2430462.46484375,
            "unit": "ns",
            "range": "± 13092.087919459787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 753347.6928478422,
            "unit": "ns",
            "range": "± 17687.628751790802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688588.5246930803,
            "unit": "ns",
            "range": "± 8298.296528591321"
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
          "id": "eb2285b7e1091f73ef8f3543b0128b430df8b3d8",
          "message": "test: more logging",
          "timestamp": "2023-08-21T21:42:16+09:00",
          "tree_id": "3e02247bf132d957c02edace95bcb603e707a4ad",
          "url": "https://github.com/planetarium/libplanet/commit/eb2285b7e1091f73ef8f3543b0128b430df8b3d8"
        },
        "date": 1692623028296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11374824.36597938,
            "unit": "ns",
            "range": "± 2973532.957310243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24913696.346153848,
            "unit": "ns",
            "range": "± 5077142.488032741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60886738.722222224,
            "unit": "ns",
            "range": "± 8876350.709454902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155551175.12626263,
            "unit": "ns",
            "range": "± 41152994.361391105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289010902.67171717,
            "unit": "ns",
            "range": "± 60803023.35113225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77679.90697674418,
            "unit": "ns",
            "range": "± 8656.839188998838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384058.71910112357,
            "unit": "ns",
            "range": "± 61735.32504111049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357278.29569892475,
            "unit": "ns",
            "range": "± 56837.07711493156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306401.7197802198,
            "unit": "ns",
            "range": "± 26749.654753245442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4106801.431372549,
            "unit": "ns",
            "range": "± 161271.7063226225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857912.879310345,
            "unit": "ns",
            "range": "± 157444.30047846076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20069.375,
            "unit": "ns",
            "range": "± 3731.269681601975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102454.19791666667,
            "unit": "ns",
            "range": "± 16200.05070337731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114192.70879120879,
            "unit": "ns",
            "range": "± 9564.933125765507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107301.53191489361,
            "unit": "ns",
            "range": "± 13926.880582035676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5702.7,
            "unit": "ns",
            "range": "± 1666.7708058374192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15677.64606741573,
            "unit": "ns",
            "range": "± 1338.3156693002538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561898.4456521738,
            "unit": "ns",
            "range": "± 220287.71035816584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3251459.2093023257,
            "unit": "ns",
            "range": "± 298148.2233356567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2489546.3103448274,
            "unit": "ns",
            "range": "± 605757.5342073434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6580003.208333333,
            "unit": "ns",
            "range": "± 1406852.8474821786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3811176.591954023,
            "unit": "ns",
            "range": "± 564304.3729445487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3955626.066666667,
            "unit": "ns",
            "range": "± 509858.12059683865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4933569.764044944,
            "unit": "ns",
            "range": "± 639153.2889074282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159505.1413043477,
            "unit": "ns",
            "range": "± 494296.13710160967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8966944.638297873,
            "unit": "ns",
            "range": "± 2947307.8760000253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194944.787239583,
            "unit": "ns",
            "range": "± 106057.98414705352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747504.633638822,
            "unit": "ns",
            "range": "± 19630.625033566233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047224.4290364584,
            "unit": "ns",
            "range": "± 18518.89949134177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3191358.619487847,
            "unit": "ns",
            "range": "± 504572.63214265305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908178.5920940897,
            "unit": "ns",
            "range": "± 22461.818013045446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800021.5740234375,
            "unit": "ns",
            "range": "± 13016.101854288374"
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
          "id": "27c61a66bda5c039efed7ac6d700e67ae06a413c",
          "message": "test: make cleanup netmq surely",
          "timestamp": "2023-08-21T22:45:36+09:00",
          "tree_id": "7c9c1fcf43137031c14ed3b496c9aa2d0492f950",
          "url": "https://github.com/planetarium/libplanet/commit/27c61a66bda5c039efed7ac6d700e67ae06a413c"
        },
        "date": 1692626819966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8272640.423728813,
            "unit": "ns",
            "range": "± 355654.69058761554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31360873.431818184,
            "unit": "ns",
            "range": "± 5422365.419250941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59067379.89247312,
            "unit": "ns",
            "range": "± 11351900.683441537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132951627.06842105,
            "unit": "ns",
            "range": "± 28197484.009956397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252273195.93617022,
            "unit": "ns",
            "range": "± 43678300.685061775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74974.78494623656,
            "unit": "ns",
            "range": "± 7840.895889154093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316706.23913043475,
            "unit": "ns",
            "range": "± 25682.821935246382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303212.5333333333,
            "unit": "ns",
            "range": "± 24697.566982226672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315501.2078651685,
            "unit": "ns",
            "range": "± 24687.963469160357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4582074.651515151,
            "unit": "ns",
            "range": "± 295932.6345024463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3865591.406976744,
            "unit": "ns",
            "range": "± 209630.38300273556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17939.434065934067,
            "unit": "ns",
            "range": "± 2231.236596858332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83434.37234042553,
            "unit": "ns",
            "range": "± 8150.676252679953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99417.16666666667,
            "unit": "ns",
            "range": "± 19282.757197632734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109846.45789473684,
            "unit": "ns",
            "range": "± 21778.961988001265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7826.739583333333,
            "unit": "ns",
            "range": "± 1412.8894972605956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22909.09375,
            "unit": "ns",
            "range": "± 4311.413166976876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687572.652173913,
            "unit": "ns",
            "range": "± 208839.570126877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3021941.7386363638,
            "unit": "ns",
            "range": "± 199537.06465524083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146007.5517241377,
            "unit": "ns",
            "range": "± 276834.9374622693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7464987.205263158,
            "unit": "ns",
            "range": "± 1805470.0610145344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4726348.168421052,
            "unit": "ns",
            "range": "± 1811574.128349329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3880227.340909091,
            "unit": "ns",
            "range": "± 661852.1668811757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4623455.552083333,
            "unit": "ns",
            "range": "± 354614.2103918558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5239817.886597938,
            "unit": "ns",
            "range": "± 436491.16015740787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7078337.175,
            "unit": "ns",
            "range": "± 366392.29919356754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6336138.332446809,
            "unit": "ns",
            "range": "± 390901.8922952898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921496.812779018,
            "unit": "ns",
            "range": "± 32392.20242824856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084815.2009486607,
            "unit": "ns",
            "range": "± 35485.73476772913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681524.71875,
            "unit": "ns",
            "range": "± 60636.83734063995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822760.55390625,
            "unit": "ns",
            "range": "± 12347.16335886829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846566.956640625,
            "unit": "ns",
            "range": "± 17885.848763508955"
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
          "id": "8b2faad12857c818e40d995d02f644943880d54e",
          "message": "fix: dispose `ConsensusReactor` surely",
          "timestamp": "2023-08-21T23:16:20+09:00",
          "tree_id": "c34cde4aa7b93590c6b2d949f30b808084934cf4",
          "url": "https://github.com/planetarium/libplanet/commit/8b2faad12857c818e40d995d02f644943880d54e"
        },
        "date": 1692628777868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10932023.877551021,
            "unit": "ns",
            "range": "± 2783833.082258199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22674354.662921347,
            "unit": "ns",
            "range": "± 2811903.0870440057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65804747.511627905,
            "unit": "ns",
            "range": "± 16147271.378943002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147568121.89175257,
            "unit": "ns",
            "range": "± 40085242.555316776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263931331.36868685,
            "unit": "ns",
            "range": "± 51231999.03785301"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77290.07142857143,
            "unit": "ns",
            "range": "± 7635.083336090927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340880.85869565216,
            "unit": "ns",
            "range": "± 44175.598338723255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316553.8222222222,
            "unit": "ns",
            "range": "± 32909.49956253975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296209.5438596491,
            "unit": "ns",
            "range": "± 12663.750759084789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240421.776595744,
            "unit": "ns",
            "range": "± 290199.6945639665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995042.736842105,
            "unit": "ns",
            "range": "± 336090.13797574857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21174.90860215054,
            "unit": "ns",
            "range": "± 3704.2466177540864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98043.74742268042,
            "unit": "ns",
            "range": "± 13141.095336633003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108769.47727272728,
            "unit": "ns",
            "range": "± 12098.538163787682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123361.52197802198,
            "unit": "ns",
            "range": "± 25750.117577284112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7407.365591397849,
            "unit": "ns",
            "range": "± 1471.3400412766753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20379.291666666668,
            "unit": "ns",
            "range": "± 3304.350484522094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713625.5638297873,
            "unit": "ns",
            "range": "± 287977.0513602914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3074735.311111111,
            "unit": "ns",
            "range": "± 289867.6458505915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279468.6,
            "unit": "ns",
            "range": "± 375505.6470208111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7083763.9,
            "unit": "ns",
            "range": "± 1740361.4180575295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3793601.554347826,
            "unit": "ns",
            "range": "± 512125.16909527616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3841147.797752809,
            "unit": "ns",
            "range": "± 723376.9137976974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4783554.394117647,
            "unit": "ns",
            "range": "± 475354.34517320676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4299765.803370787,
            "unit": "ns",
            "range": "± 608489.1058245004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9526970.542105263,
            "unit": "ns",
            "range": "± 3769236.713786727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6542146.608685662,
            "unit": "ns",
            "range": "± 128805.92669113548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861985.8934151786,
            "unit": "ns",
            "range": "± 72705.00416926907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143351.2899780273,
            "unit": "ns",
            "range": "± 34795.68549294491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3281050.4300031564,
            "unit": "ns",
            "range": "± 211091.51950558645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886460.4930778953,
            "unit": "ns",
            "range": "± 27970.836763745847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790385.0000697544,
            "unit": "ns",
            "range": "± 12947.827812471089"
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
          "id": "53234c87e1252f2b6e723f2c5c168415af9563c8",
          "message": "fix: skip problem test",
          "timestamp": "2023-08-21T23:34:08+09:00",
          "tree_id": "962279f071ce9b813c91ee727a0029269deb8ed2",
          "url": "https://github.com/planetarium/libplanet/commit/53234c87e1252f2b6e723f2c5c168415af9563c8"
        },
        "date": 1692629745278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8630479.481481481,
            "unit": "ns",
            "range": "± 235464.64974065646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27108343.3,
            "unit": "ns",
            "range": "± 4127285.837874057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53438268.692307696,
            "unit": "ns",
            "range": "± 471254.1441705287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107806090.53658536,
            "unit": "ns",
            "range": "± 5638942.783386231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240455908.6818182,
            "unit": "ns",
            "range": "± 35541323.289785124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78430.45977011495,
            "unit": "ns",
            "range": "± 8443.259193546606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360171.7078651685,
            "unit": "ns",
            "range": "± 46912.38221945882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352429.125,
            "unit": "ns",
            "range": "± 53704.17866868879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346941.4789473684,
            "unit": "ns",
            "range": "± 48135.8319868202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4288852.427710843,
            "unit": "ns",
            "range": "± 227705.05919841942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4142677.551020408,
            "unit": "ns",
            "range": "± 387062.7887781903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22955.6935483871,
            "unit": "ns",
            "range": "± 2777.1517715335326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109921.37777777777,
            "unit": "ns",
            "range": "± 17238.425262309192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109555.08791208791,
            "unit": "ns",
            "range": "± 11213.974071714027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107528.65625,
            "unit": "ns",
            "range": "± 16667.53932543141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7213.693548387097,
            "unit": "ns",
            "range": "± 825.6348184495281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23298.684782608696,
            "unit": "ns",
            "range": "± 4664.200929005901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650838.677777778,
            "unit": "ns",
            "range": "± 175248.2893467346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431431.147727273,
            "unit": "ns",
            "range": "± 608614.483498447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095389.2826086956,
            "unit": "ns",
            "range": "± 290479.0702962659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6737802.543478261,
            "unit": "ns",
            "range": "± 1716766.3155122749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399121.5974025973,
            "unit": "ns",
            "range": "± 158310.06906636202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4454298.258426966,
            "unit": "ns",
            "range": "± 1151195.8507970143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4830128.840425532,
            "unit": "ns",
            "range": "± 575139.1515341908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4223045.680851064,
            "unit": "ns",
            "range": "± 465380.1706887379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8343994.548387097,
            "unit": "ns",
            "range": "± 1670563.16679029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6138795.263888889,
            "unit": "ns",
            "range": "± 233398.44101163986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1754700.3375651042,
            "unit": "ns",
            "range": "± 13956.992661417358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078406.3407552084,
            "unit": "ns",
            "range": "± 17500.038076152156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2979403.5867578126,
            "unit": "ns",
            "range": "± 284128.8931570945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912992.8247419085,
            "unit": "ns",
            "range": "± 39199.61115989448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832274.8264973959,
            "unit": "ns",
            "range": "± 16751.025808890245"
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
          "id": "6e12780dae1e840aa10d8424f107cd7f092a03b5",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-21T23:52:23+09:00",
          "tree_id": "0c2f05c765f195c8044314f704ed1036e9e4447b",
          "url": "https://github.com/planetarium/libplanet/commit/6e12780dae1e840aa10d8424f107cd7f092a03b5"
        },
        "date": 1692630875742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8500414.239130436,
            "unit": "ns",
            "range": "± 211948.12394271846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21163439.68888889,
            "unit": "ns",
            "range": "± 632776.6728122614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51481986.0877193,
            "unit": "ns",
            "range": "± 2213113.879972759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127890135.70103092,
            "unit": "ns",
            "range": "± 26050537.430707324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284725661.56565654,
            "unit": "ns",
            "range": "± 64535062.152185045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76001.63483146067,
            "unit": "ns",
            "range": "± 8357.230894956409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345380.3602150538,
            "unit": "ns",
            "range": "± 37793.3166853357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316351.70430107525,
            "unit": "ns",
            "range": "± 22919.75045891887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314395.3192771084,
            "unit": "ns",
            "range": "± 16651.595981623912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214362.903508772,
            "unit": "ns",
            "range": "± 182856.90739061314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3887557,
            "unit": "ns",
            "range": "± 163663.52770943285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25871.352272727272,
            "unit": "ns",
            "range": "± 2898.937054661817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115641.13541666667,
            "unit": "ns",
            "range": "± 16628.23116245368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110520.65730337078,
            "unit": "ns",
            "range": "± 6945.902568975591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113790.23404255319,
            "unit": "ns",
            "range": "± 16241.677276742057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7748.297872340426,
            "unit": "ns",
            "range": "± 992.8177109077974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23373.479166666668,
            "unit": "ns",
            "range": "± 3452.406852218553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654934.6489361702,
            "unit": "ns",
            "range": "± 214950.06319593062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042391.8214285714,
            "unit": "ns",
            "range": "± 223724.29932074455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142945.702247191,
            "unit": "ns",
            "range": "± 242716.16140548445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7281548.6161616165,
            "unit": "ns",
            "range": "± 1951800.2836654226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3312409.988888889,
            "unit": "ns",
            "range": "± 195750.78158975477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3477522.8571428573,
            "unit": "ns",
            "range": "± 244645.7134212923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366082.94,
            "unit": "ns",
            "range": "± 114136.06316734427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935056.360215054,
            "unit": "ns",
            "range": "± 273863.87297546485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7287612.857142857,
            "unit": "ns",
            "range": "± 563200.099887017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7399292.443046875,
            "unit": "ns",
            "range": "± 1427008.3793225412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911292.5018136161,
            "unit": "ns",
            "range": "± 31611.095230072107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132605.9315557065,
            "unit": "ns",
            "range": "± 27306.929409456818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845758.6833203123,
            "unit": "ns",
            "range": "± 324127.8633256369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833939.8407505581,
            "unit": "ns",
            "range": "± 35773.6911054795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734126.49140625,
            "unit": "ns",
            "range": "± 12034.271941636278"
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
          "id": "3f431f8d16d36808358a89e31647fe21fcbc19da",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-21T23:52:10+09:00",
          "tree_id": "6d0198dd42c0f378b366bd928f7cf2a6e7f89382",
          "url": "https://github.com/planetarium/libplanet/commit/3f431f8d16d36808358a89e31647fe21fcbc19da"
        },
        "date": 1692630944354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12399009.17032967,
            "unit": "ns",
            "range": "± 3850606.8159078253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22281045.82926829,
            "unit": "ns",
            "range": "± 1903148.747747335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54808853.734375,
            "unit": "ns",
            "range": "± 2508932.4703307464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109187668.8,
            "unit": "ns",
            "range": "± 2036310.373340511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218854909.57142857,
            "unit": "ns",
            "range": "± 3200344.929845735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79468.71590909091,
            "unit": "ns",
            "range": "± 12014.365029259587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325112.91011235956,
            "unit": "ns",
            "range": "± 20274.82788775757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338718.96907216497,
            "unit": "ns",
            "range": "± 42266.18268226128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302307.56666666665,
            "unit": "ns",
            "range": "± 16976.366662927536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234540.606666666,
            "unit": "ns",
            "range": "± 213511.57452982425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826292.9324324327,
            "unit": "ns",
            "range": "± 129196.9496637553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24707.701149425287,
            "unit": "ns",
            "range": "± 4425.020733402859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117286.6559139785,
            "unit": "ns",
            "range": "± 15284.944856675873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116320.92222222222,
            "unit": "ns",
            "range": "± 10573.042985945282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119406.21052631579,
            "unit": "ns",
            "range": "± 18152.283751107985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9680.37113402062,
            "unit": "ns",
            "range": "± 1363.5320122112066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28976.516483516483,
            "unit": "ns",
            "range": "± 2999.011479221621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1734705.2,
            "unit": "ns",
            "range": "± 223703.04258464635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3585127.870786517,
            "unit": "ns",
            "range": "± 644317.9302371615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296846.7634408604,
            "unit": "ns",
            "range": "± 406461.60363451194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6998840.8655913975,
            "unit": "ns",
            "range": "± 1955132.483838398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3423207.8214285714,
            "unit": "ns",
            "range": "± 93681.74372885062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3499640.543956044,
            "unit": "ns",
            "range": "± 243592.00711540013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4359066,
            "unit": "ns",
            "range": "± 144846.13946710422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3864466.0222222223,
            "unit": "ns",
            "range": "± 210321.85785028385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7037634.971014493,
            "unit": "ns",
            "range": "± 335249.6183071903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8114458.960306187,
            "unit": "ns",
            "range": "± 1382186.429752823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2514275.3324609376,
            "unit": "ns",
            "range": "± 613691.0542679395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1115506.5099431819,
            "unit": "ns",
            "range": "± 35152.38915003949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3043109.4571940103,
            "unit": "ns",
            "range": "± 181874.586982392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926805.8198756168,
            "unit": "ns",
            "range": "± 31234.058855343024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840100.175405649,
            "unit": "ns",
            "range": "± 12791.966612520997"
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
          "id": "80fb21ad158f0ba4cdcc6c4298561c6e60c7df16",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-22T00:08:19+09:00",
          "tree_id": "b2e85b2aa24adc76412975b8f276ec2495628f11",
          "url": "https://github.com/planetarium/libplanet/commit/80fb21ad158f0ba4cdcc6c4298561c6e60c7df16"
        },
        "date": 1692631705838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10579575.37113402,
            "unit": "ns",
            "range": "± 2355606.8817900787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27582798.78,
            "unit": "ns",
            "range": "± 4692884.418242363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61296232.197916664,
            "unit": "ns",
            "range": "± 9481303.787401758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110129312.9010989,
            "unit": "ns",
            "range": "± 18875706.183191694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255391832.31958762,
            "unit": "ns",
            "range": "± 47747623.72141204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78729.82417582418,
            "unit": "ns",
            "range": "± 6170.711334096123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321241.0054945055,
            "unit": "ns",
            "range": "± 18960.73714306231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328870.05376344087,
            "unit": "ns",
            "range": "± 37213.89778533703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314596.1781609195,
            "unit": "ns",
            "range": "± 27263.9538054281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4721656.6,
            "unit": "ns",
            "range": "± 752457.2462482995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173076.032608696,
            "unit": "ns",
            "range": "± 640101.6345241711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24816.5,
            "unit": "ns",
            "range": "± 7167.6152589267795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112354.12359550562,
            "unit": "ns",
            "range": "± 16350.948884628451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107233.63333333333,
            "unit": "ns",
            "range": "± 15006.300374558035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113585.06521739131,
            "unit": "ns",
            "range": "± 19582.986537323024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7795.5204081632655,
            "unit": "ns",
            "range": "± 1540.6201805819392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21788.073684210525,
            "unit": "ns",
            "range": "± 3969.7787232456867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624425.357142857,
            "unit": "ns",
            "range": "± 204141.37691853705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066044.7439024393,
            "unit": "ns",
            "range": "± 252238.08535102484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117782.395348837,
            "unit": "ns",
            "range": "± 248591.03342889855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7419204.581632653,
            "unit": "ns",
            "range": "± 2209693.219837195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461272.356321839,
            "unit": "ns",
            "range": "± 246053.15993089014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4287363.129411764,
            "unit": "ns",
            "range": "± 1036275.9407867305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539869.133333334,
            "unit": "ns",
            "range": "± 281822.9237613238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3783019.215909091,
            "unit": "ns",
            "range": "± 221151.97776070214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6784728.464285715,
            "unit": "ns",
            "range": "± 368075.6313944464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032517.558035715,
            "unit": "ns",
            "range": "± 138988.91505002527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859858.2665364584,
            "unit": "ns",
            "range": "± 15872.944198410027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033735.0490234375,
            "unit": "ns",
            "range": "± 17566.021502251875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527468.5697916667,
            "unit": "ns",
            "range": "± 27623.360920906478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839574.408203125,
            "unit": "ns",
            "range": "± 10306.851890916862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982950.9567578125,
            "unit": "ns",
            "range": "± 25664.46099619738"
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
          "id": "50b7c16ffbf68d3c5cdbd4217d0038f409013a75",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-22T00:23:09+09:00",
          "tree_id": "0f9504e6387edecbadfe7d0f145cef360c01fad4",
          "url": "https://github.com/planetarium/libplanet/commit/50b7c16ffbf68d3c5cdbd4217d0038f409013a75"
        },
        "date": 1692632709382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13140798.155913979,
            "unit": "ns",
            "range": "± 3567029.680688692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22217393.615384616,
            "unit": "ns",
            "range": "± 202870.78939008547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61009040.623655915,
            "unit": "ns",
            "range": "± 9932866.372748932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142435692.1111111,
            "unit": "ns",
            "range": "± 36257626.853284016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263198914.1368421,
            "unit": "ns",
            "range": "± 48171733.28250582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87450.03225806452,
            "unit": "ns",
            "range": "± 15244.303781820485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370167.9120879121,
            "unit": "ns",
            "range": "± 42311.8875018589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339545.68604651163,
            "unit": "ns",
            "range": "± 32330.70366677021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321355.5111111111,
            "unit": "ns",
            "range": "± 24822.549511989222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4252394.086206896,
            "unit": "ns",
            "range": "± 256118.86128380927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3897415.3181818184,
            "unit": "ns",
            "range": "± 316195.2941185276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31539.159090909092,
            "unit": "ns",
            "range": "± 4469.727125015609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128699.30337078651,
            "unit": "ns",
            "range": "± 15280.434658415386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135399.96703296702,
            "unit": "ns",
            "range": "± 33686.328618414176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127078.05376344085,
            "unit": "ns",
            "range": "± 26687.77576392118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7989.054945054945,
            "unit": "ns",
            "range": "± 1223.54717806364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24265.466666666667,
            "unit": "ns",
            "range": "± 4070.7019394418066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1828281.141304348,
            "unit": "ns",
            "range": "± 355683.3723758704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3377470.1333333333,
            "unit": "ns",
            "range": "± 615544.1762373685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285112.785714286,
            "unit": "ns",
            "range": "± 490509.55590535956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6530410.540229885,
            "unit": "ns",
            "range": "± 839372.3865278928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3649861.988235294,
            "unit": "ns",
            "range": "± 379859.50376241846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3699940.822222222,
            "unit": "ns",
            "range": "± 343430.7645979837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5243947.542105263,
            "unit": "ns",
            "range": "± 860684.5274546711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4351051.129213483,
            "unit": "ns",
            "range": "± 559262.6077379071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9224178.604166666,
            "unit": "ns",
            "range": "± 2501398.829917905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5714854.142857143,
            "unit": "ns",
            "range": "± 93983.0515838872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1708930.015904018,
            "unit": "ns",
            "range": "± 25369.71283437347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081887.1751439145,
            "unit": "ns",
            "range": "± 61689.926497679626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2530113.1087582237,
            "unit": "ns",
            "range": "± 52274.52555281363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823120.3577325995,
            "unit": "ns",
            "range": "± 19331.64450741682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816551.7776692709,
            "unit": "ns",
            "range": "± 15034.13233669663"
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
          "id": "ab12a49c44ec5bac25108c1d5a252f23d7b79ad4",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-22T00:41:11+09:00",
          "tree_id": "9c6bf3fdc345ff48b2717c94dfd64504d8eb02c7",
          "url": "https://github.com/planetarium/libplanet/commit/ab12a49c44ec5bac25108c1d5a252f23d7b79ad4"
        },
        "date": 1692633721476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11143120.221649485,
            "unit": "ns",
            "range": "± 2087414.5274012855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20783365.226415094,
            "unit": "ns",
            "range": "± 853192.6741476043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64946234.05319149,
            "unit": "ns",
            "range": "± 16223721.282638576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130114260.46938775,
            "unit": "ns",
            "range": "± 25883274.25873626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241178357.22826087,
            "unit": "ns",
            "range": "± 35370006.36762351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75659.2032967033,
            "unit": "ns",
            "range": "± 8061.145258439131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337416.05555555556,
            "unit": "ns",
            "range": "± 35300.84033315944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358609.75,
            "unit": "ns",
            "range": "± 60788.08788162857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344083.4673913043,
            "unit": "ns",
            "range": "± 63544.43775269883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142629.5606060605,
            "unit": "ns",
            "range": "± 119718.87718550785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4066017.2078651683,
            "unit": "ns",
            "range": "± 434815.6277212687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19795.031914893618,
            "unit": "ns",
            "range": "± 2639.483020830037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96518.76595744681,
            "unit": "ns",
            "range": "± 13039.531572186726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97032.65053763441,
            "unit": "ns",
            "range": "± 11803.173543351948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103199.03125,
            "unit": "ns",
            "range": "± 16942.161395358668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5774.333333333333,
            "unit": "ns",
            "range": "± 1056.0712090340903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19931.770833333332,
            "unit": "ns",
            "range": "± 3957.3842303887836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637879.358695652,
            "unit": "ns",
            "range": "± 193933.187880876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109548.2197802197,
            "unit": "ns",
            "range": "± 269251.61289737903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1995571.6627906978,
            "unit": "ns",
            "range": "± 223710.80390595726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7264240.8367346935,
            "unit": "ns",
            "range": "± 1748568.310461133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3493186.0212765955,
            "unit": "ns",
            "range": "± 296427.08592294384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583639.685714286,
            "unit": "ns",
            "range": "± 116533.40800837062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4523364.392473118,
            "unit": "ns",
            "range": "± 298655.400200613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470036.25,
            "unit": "ns",
            "range": "± 771103.1240695514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9485677.958333334,
            "unit": "ns",
            "range": "± 2996486.0031619733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6111359.255394345,
            "unit": "ns",
            "range": "± 138134.22438953686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1727301.3752604167,
            "unit": "ns",
            "range": "± 23958.530937111205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1051193.4440569195,
            "unit": "ns",
            "range": "± 15482.101257670914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2802835.442876838,
            "unit": "ns",
            "range": "± 150582.69559550702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920174.4280598959,
            "unit": "ns",
            "range": "± 14543.558614110969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806773.0809895833,
            "unit": "ns",
            "range": "± 12865.161358235639"
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
          "id": "d48fc39bf9365fb348b7d516f1362939fd143c76",
          "message": "fix: more parallelism",
          "timestamp": "2023-08-22T01:15:43+09:00",
          "tree_id": "b51b9bea78b71c9c05db8bea4862e795c89771a1",
          "url": "https://github.com/planetarium/libplanet/commit/d48fc39bf9365fb348b7d516f1362939fd143c76"
        },
        "date": 1692635859244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8488200,
            "unit": "ns",
            "range": "± 305047.7643992822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20610896.984848484,
            "unit": "ns",
            "range": "± 970846.7070545134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69380680.0989011,
            "unit": "ns",
            "range": "± 18512531.834644616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139177426.27272728,
            "unit": "ns",
            "range": "± 33670380.76287156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 307147612.14646465,
            "unit": "ns",
            "range": "± 62891420.069993675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75089.1046511628,
            "unit": "ns",
            "range": "± 8872.114271566998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316384.90425531915,
            "unit": "ns",
            "range": "± 22861.125089350906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303958.57731958764,
            "unit": "ns",
            "range": "± 25891.943810943663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293653.1857142857,
            "unit": "ns",
            "range": "± 9413.990970175966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4156837.6904761903,
            "unit": "ns",
            "range": "± 95811.93674883054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804837.9545454546,
            "unit": "ns",
            "range": "± 92860.76861802925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21910.65263157895,
            "unit": "ns",
            "range": "± 2965.7632499320066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94381.72105263158,
            "unit": "ns",
            "range": "± 10510.87212121279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98404.95698924731,
            "unit": "ns",
            "range": "± 9186.560988883588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105097.49462365592,
            "unit": "ns",
            "range": "± 13647.421938118425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6878.731958762886,
            "unit": "ns",
            "range": "± 1289.0183241154868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19691.23404255319,
            "unit": "ns",
            "range": "± 2498.43848513225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707557.7688172043,
            "unit": "ns",
            "range": "± 196735.70967920718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3226694.925531915,
            "unit": "ns",
            "range": "± 356752.9569119643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135614.9139784947,
            "unit": "ns",
            "range": "± 339275.77503176616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7127647.083333333,
            "unit": "ns",
            "range": "± 2079985.3478069736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3548433.3720930233,
            "unit": "ns",
            "range": "± 361197.5087421756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3780030.222222222,
            "unit": "ns",
            "range": "± 533410.6613381346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558237.554216867,
            "unit": "ns",
            "range": "± 418249.5444403582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3848363.939759036,
            "unit": "ns",
            "range": "± 203459.29754216195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7391594.927710843,
            "unit": "ns",
            "range": "± 788164.9361612658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6777032.012040915,
            "unit": "ns",
            "range": "± 1326666.1167205488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2099016.414187168,
            "unit": "ns",
            "range": "± 497729.5388167711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059046.1063701923,
            "unit": "ns",
            "range": "± 28974.336849383093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2914888.9464285714,
            "unit": "ns",
            "range": "± 39303.96387157368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898064.1086588542,
            "unit": "ns",
            "range": "± 10505.036171898644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811038.4813802083,
            "unit": "ns",
            "range": "± 14056.580681007008"
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
          "id": "2bbbbaf81085c85b94e2066a5ba93d6334cf565f",
          "message": "fix: AppProtocolVersion test",
          "timestamp": "2023-08-22T01:32:06+09:00",
          "tree_id": "56b635d14414b434653656654004cfbddba2f5c8",
          "url": "https://github.com/planetarium/libplanet/commit/2bbbbaf81085c85b94e2066a5ba93d6334cf565f"
        },
        "date": 1692636834655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8420171.392857144,
            "unit": "ns",
            "range": "± 240785.2705957675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21142176.90909091,
            "unit": "ns",
            "range": "± 343398.7176815381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54027315.5,
            "unit": "ns",
            "range": "± 731898.3247403062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106708694.14285715,
            "unit": "ns",
            "range": "± 1014217.5148893857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219941997.6031746,
            "unit": "ns",
            "range": "± 9263735.481309004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77031.24725274726,
            "unit": "ns",
            "range": "± 11933.203558506086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325594.1170212766,
            "unit": "ns",
            "range": "± 38169.177315232286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302571.4065934066,
            "unit": "ns",
            "range": "± 24250.307489449384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317795.36813186813,
            "unit": "ns",
            "range": "± 32687.74386157899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4217026.822033898,
            "unit": "ns",
            "range": "± 177047.9131246915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3940480.5860215053,
            "unit": "ns",
            "range": "± 267051.6834415185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23329.968421052632,
            "unit": "ns",
            "range": "± 4012.498464114856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105853.58602150538,
            "unit": "ns",
            "range": "± 19889.031765761658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110064.88636363637,
            "unit": "ns",
            "range": "± 17256.79366965524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112664.58510638298,
            "unit": "ns",
            "range": "± 17345.08746132651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7288.382978723404,
            "unit": "ns",
            "range": "± 1888.357759845715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19625.166666666668,
            "unit": "ns",
            "range": "± 3010.3721894644727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660648.7159090908,
            "unit": "ns",
            "range": "± 164464.44822849185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3107335.4545454546,
            "unit": "ns",
            "range": "± 242550.80516934337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106166.6516853934,
            "unit": "ns",
            "range": "± 268347.08647609135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10232282.33,
            "unit": "ns",
            "range": "± 4779038.527987001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3359825.287234043,
            "unit": "ns",
            "range": "± 241992.51631953113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3467435.889473684,
            "unit": "ns",
            "range": "± 205276.4630450429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4660302.510869565,
            "unit": "ns",
            "range": "± 399412.18934393616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3878800.5434782607,
            "unit": "ns",
            "range": "± 299504.6197912026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7105264.393617021,
            "unit": "ns",
            "range": "± 535396.4189122422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000291.79319853,
            "unit": "ns",
            "range": "± 192605.26898546505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851795.9270182292,
            "unit": "ns",
            "range": "± 55089.218691664326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1037595.9386393229,
            "unit": "ns",
            "range": "± 34169.03081053498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2936652.4986979165,
            "unit": "ns",
            "range": "± 49045.90670480653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809036.58359375,
            "unit": "ns",
            "range": "± 14643.282531385612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755569.38671875,
            "unit": "ns",
            "range": "± 13952.600860280985"
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
          "id": "4bb6a93568e1a7e1d5e8ab3be0ab065ceca315d8",
          "message": "fix: cleanup NetMQConfig",
          "timestamp": "2023-08-22T01:42:43+09:00",
          "tree_id": "a1458940ac1fd6ef2a913aefddb97f8907f15f8e",
          "url": "https://github.com/planetarium/libplanet/commit/4bb6a93568e1a7e1d5e8ab3be0ab065ceca315d8"
        },
        "date": 1692637640004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11680632.21875,
            "unit": "ns",
            "range": "± 4821580.559928163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 41769382.06315789,
            "unit": "ns",
            "range": "± 4772218.411441593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73680038.06122449,
            "unit": "ns",
            "range": "± 21315416.081291825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112947513.0735294,
            "unit": "ns",
            "range": "± 5390710.369287037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219284875.66233766,
            "unit": "ns",
            "range": "± 10172964.288261356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79853.51111111112,
            "unit": "ns",
            "range": "± 11219.29405262207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313990.8333333333,
            "unit": "ns",
            "range": "± 32833.99382876215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305135.18131868134,
            "unit": "ns",
            "range": "± 36556.977509963544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295891.07954545453,
            "unit": "ns",
            "range": "± 26490.27120536575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4064957.5804597703,
            "unit": "ns",
            "range": "± 222462.4166697899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756829.8076923075,
            "unit": "ns",
            "range": "± 52171.84604328375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20128.360824742267,
            "unit": "ns",
            "range": "± 4015.696476498937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91487.68947368421,
            "unit": "ns",
            "range": "± 12048.73686263396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93081.38659793814,
            "unit": "ns",
            "range": "± 20784.11333099769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102213.8125,
            "unit": "ns",
            "range": "± 12080.402534520637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.923913043478,
            "unit": "ns",
            "range": "± 1369.283346958199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20559.340425531915,
            "unit": "ns",
            "range": "± 4597.515379249343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647784.688172043,
            "unit": "ns",
            "range": "± 202318.33598682497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3205679.2359550563,
            "unit": "ns",
            "range": "± 246717.12919694558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166376.822222222,
            "unit": "ns",
            "range": "± 270425.43901127344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11719851.1010101,
            "unit": "ns",
            "range": "± 4746418.5953907035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399429.170212766,
            "unit": "ns",
            "range": "± 130900.34698916363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399743.847826087,
            "unit": "ns",
            "range": "± 123251.94493200006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607664.635294118,
            "unit": "ns",
            "range": "± 283343.20663244824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3598344.3469387754,
            "unit": "ns",
            "range": "± 143631.02673496288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6967576.879120879,
            "unit": "ns",
            "range": "± 463718.519775996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5797874.380958018,
            "unit": "ns",
            "range": "± 348670.42557090643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1753714.265438988,
            "unit": "ns",
            "range": "± 63789.40243788209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048143.7982421875,
            "unit": "ns",
            "range": "± 30917.216181429903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2928689.7293722588,
            "unit": "ns",
            "range": "± 124865.08473833183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810097.1640625,
            "unit": "ns",
            "range": "± 12957.86893278085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771544.7722473145,
            "unit": "ns",
            "range": "± 23794.404909025136"
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
          "id": "76ba90a117105844d9ea3e3033c144d7a4a8c38b",
          "message": "fix: change timeout",
          "timestamp": "2023-08-22T01:53:02+09:00",
          "tree_id": "26fbf07ba26a031c944ec39ba5214d17cd6e55e4",
          "url": "https://github.com/planetarium/libplanet/commit/76ba90a117105844d9ea3e3033c144d7a4a8c38b"
        },
        "date": 1692638022411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8121180,
            "unit": "ns",
            "range": "± 170909.49621007784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21223804.114285715,
            "unit": "ns",
            "range": "± 566628.6916143365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59171900.12087912,
            "unit": "ns",
            "range": "± 10048283.555490943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122338876.71212122,
            "unit": "ns",
            "range": "± 19443515.161033534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226553789.5,
            "unit": "ns",
            "range": "± 9119440.255569369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78304.25,
            "unit": "ns",
            "range": "± 7615.4010124523165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332211.92391304346,
            "unit": "ns",
            "range": "± 38353.28169898971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329852.90425531915,
            "unit": "ns",
            "range": "± 50687.43042089952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306503.5833333333,
            "unit": "ns",
            "range": "± 20626.13405262429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174688.152173913,
            "unit": "ns",
            "range": "± 78563.06389577547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3960308.805882353,
            "unit": "ns",
            "range": "± 233716.7264273255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24614.20879120879,
            "unit": "ns",
            "range": "± 5697.362806142044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107773.8350515464,
            "unit": "ns",
            "range": "± 17774.958391700253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118587.81720430107,
            "unit": "ns",
            "range": "± 19370.810132632127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99477.04347826086,
            "unit": "ns",
            "range": "± 15860.949412372045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5994.979166666667,
            "unit": "ns",
            "range": "± 1303.0581679399763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21959.434782608696,
            "unit": "ns",
            "range": "± 4437.638782363085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685863.5957446808,
            "unit": "ns",
            "range": "± 251032.20663137338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3077571.3488372094,
            "unit": "ns",
            "range": "± 333283.1657990656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076689.6105263159,
            "unit": "ns",
            "range": "± 197388.31121315353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7586079.3877551025,
            "unit": "ns",
            "range": "± 1938199.5001571805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436991.434782609,
            "unit": "ns",
            "range": "± 165655.72500870933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3535639.5977011495,
            "unit": "ns",
            "range": "± 253123.5177329421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4674669.483516484,
            "unit": "ns",
            "range": "± 383615.56790042244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4177421.379310345,
            "unit": "ns",
            "range": "± 380822.0452230797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7774604.784090909,
            "unit": "ns",
            "range": "± 1503412.2710340838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6106978.05625,
            "unit": "ns",
            "range": "± 200282.9345835829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761829.1647949219,
            "unit": "ns",
            "range": "± 60081.81891999978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1044092.1942708333,
            "unit": "ns",
            "range": "± 15727.971010703846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567789.048363095,
            "unit": "ns",
            "range": "± 60758.31253351177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911990.871875,
            "unit": "ns",
            "range": "± 12560.555874185175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774696.882042518,
            "unit": "ns",
            "range": "± 31820.197411425816"
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
          "id": "af5cdfc4490be8e2b234f5b7cae9259090eb227d",
          "message": "fix: catch ObjectDisposedException on StopAsync",
          "timestamp": "2023-08-22T02:08:42+09:00",
          "tree_id": "b2a51d60fb7d7aa95d4d591cf28f01a06dc5c2b5",
          "url": "https://github.com/planetarium/libplanet/commit/af5cdfc4490be8e2b234f5b7cae9259090eb227d"
        },
        "date": 1692638762848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8449591.52631579,
            "unit": "ns",
            "range": "± 180413.20193204895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21687852.615384616,
            "unit": "ns",
            "range": "± 577245.7713695321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52257159.0625,
            "unit": "ns",
            "range": "± 1600208.8961136555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104548057.875,
            "unit": "ns",
            "range": "± 1902556.5190540813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219995479.84615386,
            "unit": "ns",
            "range": "± 2441606.7167286873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70096.63636363637,
            "unit": "ns",
            "range": "± 8259.362478781512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307655.393258427,
            "unit": "ns",
            "range": "± 17675.59085846533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302946.02702702704,
            "unit": "ns",
            "range": "± 14352.60014839846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295358.3103448276,
            "unit": "ns",
            "range": "± 8339.842958882242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129958.2333333334,
            "unit": "ns",
            "range": "± 112269.90369577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693274.1333333333,
            "unit": "ns",
            "range": "± 64681.36139664818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21959.744680851065,
            "unit": "ns",
            "range": "± 2516.8099440216465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99362.36021505376,
            "unit": "ns",
            "range": "± 7528.944288531627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107461.25531914894,
            "unit": "ns",
            "range": "± 7142.718594719976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106124.43478260869,
            "unit": "ns",
            "range": "± 12268.177351756922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7149.220430107527,
            "unit": "ns",
            "range": "± 910.0746190810207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19440.195652173912,
            "unit": "ns",
            "range": "± 2171.9175668849693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571871.01010101,
            "unit": "ns",
            "range": "± 161734.42229510867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054347.663265306,
            "unit": "ns",
            "range": "± 259248.00484923337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080448.25,
            "unit": "ns",
            "range": "± 263560.3379561176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5791608.522222222,
            "unit": "ns",
            "range": "± 344886.2571384453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388953.787234043,
            "unit": "ns",
            "range": "± 254909.18331026417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3721757.2421052633,
            "unit": "ns",
            "range": "± 358396.304443295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451442.6866666665,
            "unit": "ns",
            "range": "± 224098.90763748944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790895.581081081,
            "unit": "ns",
            "range": "± 179246.20865626147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6865338.785714285,
            "unit": "ns",
            "range": "± 308693.57112650963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6292335.232421875,
            "unit": "ns",
            "range": "± 121952.30819038124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834125.0846354167,
            "unit": "ns",
            "range": "± 31393.852908525634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052895.5541294643,
            "unit": "ns",
            "range": "± 17275.41403097595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2819134.7692522323,
            "unit": "ns",
            "range": "± 41934.57841430565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818754.820703125,
            "unit": "ns",
            "range": "± 15278.801089708466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758800.5388671875,
            "unit": "ns",
            "range": "± 6536.788606624419"
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
          "id": "8e9fc2844120e5fd5a2a50ee392a880a84ea3389",
          "message": "fix: cleanup gossip",
          "timestamp": "2023-08-22T02:36:50+09:00",
          "tree_id": "bcba8309c9c734cf4036e6f34a2e06ec094ee5ce",
          "url": "https://github.com/planetarium/libplanet/commit/8e9fc2844120e5fd5a2a50ee392a880a84ea3389"
        },
        "date": 1692640938354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14117668.979591837,
            "unit": "ns",
            "range": "± 5690847.08030201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32290931.57216495,
            "unit": "ns",
            "range": "± 10204574.962416274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 93690122.21,
            "unit": "ns",
            "range": "± 28746077.951057535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 210807499.64285713,
            "unit": "ns",
            "range": "± 54253138.841829054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 339570414.37,
            "unit": "ns",
            "range": "± 113347257.14524435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84568.92268041238,
            "unit": "ns",
            "range": "± 13319.670208970274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363174.9574468085,
            "unit": "ns",
            "range": "± 29115.677489182417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343186.69662921346,
            "unit": "ns",
            "range": "± 18262.469206249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309815.1234567901,
            "unit": "ns",
            "range": "± 16051.10977189951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4820183.435897436,
            "unit": "ns",
            "range": "± 156934.39328347484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4423929.066666666,
            "unit": "ns",
            "range": "± 129459.71328429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21427.25287356322,
            "unit": "ns",
            "range": "± 1156.96017316421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97278.41111111111,
            "unit": "ns",
            "range": "± 6343.151267124879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98619.97872340426,
            "unit": "ns",
            "range": "± 9600.40393525046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104644.63440860216,
            "unit": "ns",
            "range": "± 10956.445710357923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6544.326086956522,
            "unit": "ns",
            "range": "± 607.2075266421633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19986.34736842105,
            "unit": "ns",
            "range": "± 1507.0327105996967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2042796.8804347827,
            "unit": "ns",
            "range": "± 390028.4452117899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3558575.534883721,
            "unit": "ns",
            "range": "± 299197.52454011724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2544624.565217391,
            "unit": "ns",
            "range": "± 325400.37880737736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11010784.323232323,
            "unit": "ns",
            "range": "± 4806037.122915409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3867821.209090909,
            "unit": "ns",
            "range": "± 163960.735871447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4040421.9696969697,
            "unit": "ns",
            "range": "± 183724.65999978755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5178891.379310345,
            "unit": "ns",
            "range": "± 226550.26096434207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4626993.213483146,
            "unit": "ns",
            "range": "± 310025.51809849136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8138787.814814814,
            "unit": "ns",
            "range": "± 427455.9507780337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6605145.163541666,
            "unit": "ns",
            "range": "± 73873.13211533363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2072137.5432692308,
            "unit": "ns",
            "range": "± 17136.013019265825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213913.1329520089,
            "unit": "ns",
            "range": "± 10732.344989848341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2926617.0814302885,
            "unit": "ns",
            "range": "± 12540.886829986783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949399.2253255208,
            "unit": "ns",
            "range": "± 14480.300810909299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876312.0834147135,
            "unit": "ns",
            "range": "± 1921.618521987703"
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
          "id": "f38f2d10730230d16331d5a90c8e8c39429c3609",
          "message": "fix: 8 to 7",
          "timestamp": "2023-08-22T03:02:48+09:00",
          "tree_id": "36e5fa63c434911dc446755015745b635e46a1df",
          "url": "https://github.com/planetarium/libplanet/commit/f38f2d10730230d16331d5a90c8e8c39429c3609"
        },
        "date": 1692642562369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8913471.466666667,
            "unit": "ns",
            "range": "± 108635.01617202089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21403606.92857143,
            "unit": "ns",
            "range": "± 303499.31307455257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52310179.64285714,
            "unit": "ns",
            "range": "± 687354.1307660913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106515196.37037037,
            "unit": "ns",
            "range": "± 2875360.12055574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220144071.83333334,
            "unit": "ns",
            "range": "± 2359886.4984372114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70540.7311827957,
            "unit": "ns",
            "range": "± 15934.948785841347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344594.8369565217,
            "unit": "ns",
            "range": "± 27075.747032108848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338654.6105263158,
            "unit": "ns",
            "range": "± 24776.6085839278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315648.21428571426,
            "unit": "ns",
            "range": "± 8780.22274397765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191572.0714285714,
            "unit": "ns",
            "range": "± 116228.8998725674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868342.972222222,
            "unit": "ns",
            "range": "± 127509.47909536229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25881.397849462366,
            "unit": "ns",
            "range": "± 4030.4134973424925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116608.59340659341,
            "unit": "ns",
            "range": "± 11036.70419099432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116183.4,
            "unit": "ns",
            "range": "± 8864.380336080838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111961.21875,
            "unit": "ns",
            "range": "± 19696.307408244465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7484.877551020408,
            "unit": "ns",
            "range": "± 1641.6998122407967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18342.983516483517,
            "unit": "ns",
            "range": "± 2982.376045156827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575045.6734693877,
            "unit": "ns",
            "range": "± 193045.16960112017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218844.8444444444,
            "unit": "ns",
            "range": "± 425353.86189418304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101282.1853932585,
            "unit": "ns",
            "range": "± 233481.25957327418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9573703.666666666,
            "unit": "ns",
            "range": "± 4489299.382361297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3523636.35,
            "unit": "ns",
            "range": "± 155619.55136053785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583909.097826087,
            "unit": "ns",
            "range": "± 258144.0937074162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584481.271929825,
            "unit": "ns",
            "range": "± 199037.41439299955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4056601.204301075,
            "unit": "ns",
            "range": "± 325529.17055026355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6842388.897435897,
            "unit": "ns",
            "range": "± 236428.69831713868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6544981.530151367,
            "unit": "ns",
            "range": "± 289406.9091993197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852160.4770295515,
            "unit": "ns",
            "range": "± 66789.70777732533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065772.807747396,
            "unit": "ns",
            "range": "± 40179.05084144884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2896339.767764137,
            "unit": "ns",
            "range": "± 105214.83416609967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886564.6903191332,
            "unit": "ns",
            "range": "± 35719.6521108646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805842.847680664,
            "unit": "ns",
            "range": "± 26866.058512286138"
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
          "id": "e39f625667adc82a06d64ddd6577db6d34d329fd",
          "message": "fix: decrease timeout threshold",
          "timestamp": "2023-08-22T13:50:00+09:00",
          "tree_id": "a7ec45048041557552e950f6848480656cdb0449",
          "url": "https://github.com/planetarium/libplanet/commit/e39f625667adc82a06d64ddd6577db6d34d329fd"
        },
        "date": 1692681484419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8689510.682539683,
            "unit": "ns",
            "range": "± 371359.87986131094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24361122.833333332,
            "unit": "ns",
            "range": "± 961005.9074638836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54370428.5,
            "unit": "ns",
            "range": "± 1677602.6765796314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114622682.7244898,
            "unit": "ns",
            "range": "± 6773963.628747109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241024336.25675675,
            "unit": "ns",
            "range": "± 8018734.008793328"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85872.20430107527,
            "unit": "ns",
            "range": "± 17556.1298316095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385477.6804123711,
            "unit": "ns",
            "range": "± 59595.02725069753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378396.11340206186,
            "unit": "ns",
            "range": "± 77550.21607963077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 366239.7978723404,
            "unit": "ns",
            "range": "± 73401.54469802036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4742333.645833333,
            "unit": "ns",
            "range": "± 379682.08916463336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4337999.4387755105,
            "unit": "ns",
            "range": "± 452212.9941242066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28530.97191011236,
            "unit": "ns",
            "range": "± 4696.096048096972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125452.15217391304,
            "unit": "ns",
            "range": "± 20395.554593180394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134491.04347826086,
            "unit": "ns",
            "range": "± 23587.584507282616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127313.52083333333,
            "unit": "ns",
            "range": "± 25697.021154817543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9266.68817204301,
            "unit": "ns",
            "range": "± 1019.3934468753918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26596.87777777778,
            "unit": "ns",
            "range": "± 4437.188442179432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631959.3370786516,
            "unit": "ns",
            "range": "± 156657.0462870569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3336573.4684210527,
            "unit": "ns",
            "range": "± 435906.67357204796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336393.1505376343,
            "unit": "ns",
            "range": "± 323658.9219317132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6297886.369565218,
            "unit": "ns",
            "range": "± 713114.0719102536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4668020.395833333,
            "unit": "ns",
            "range": "± 398883.62556925457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3955575.8402061854,
            "unit": "ns",
            "range": "± 506545.9340520711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4775821.948979592,
            "unit": "ns",
            "range": "± 374783.1825741309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4411224.25,
            "unit": "ns",
            "range": "± 439728.525596969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7776501.604166667,
            "unit": "ns",
            "range": "± 793526.8463821961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6971227.56200284,
            "unit": "ns",
            "range": "± 288625.74130008946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912924.2344916044,
            "unit": "ns",
            "range": "± 90885.92815550261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132675.9773220485,
            "unit": "ns",
            "range": "± 55557.99251026993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3008500.023317921,
            "unit": "ns",
            "range": "± 235267.98972802112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909379.9939528245,
            "unit": "ns",
            "range": "± 21371.47898624061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804195.2170758928,
            "unit": "ns",
            "range": "± 49886.0977296891"
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
          "id": "7db097778488442d1a38a516d106df885c61debc",
          "message": "fix: remove port collision possibility",
          "timestamp": "2023-08-22T14:17:21+09:00",
          "tree_id": "0e91ba1f5fd484de28a28e790426fd18a158b57f",
          "url": "https://github.com/planetarium/libplanet/commit/7db097778488442d1a38a516d106df885c61debc"
        },
        "date": 1692682690033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8420126.049019609,
            "unit": "ns",
            "range": "± 341942.69352225173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21559586.208333332,
            "unit": "ns",
            "range": "± 837493.5188735938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54961663.38888889,
            "unit": "ns",
            "range": "± 1045952.6820584576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106605561.3,
            "unit": "ns",
            "range": "± 1741822.0389534715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211552877.85714287,
            "unit": "ns",
            "range": "± 2531184.034276627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76823.1559139785,
            "unit": "ns",
            "range": "± 10567.964272203932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318160.83157894737,
            "unit": "ns",
            "range": "± 26492.926964008126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319688.8241758242,
            "unit": "ns",
            "range": "± 23541.02944298335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306130.8466666667,
            "unit": "ns",
            "range": "± 15359.621094789269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4307374.96875,
            "unit": "ns",
            "range": "± 193336.75208783254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4035516.2209302327,
            "unit": "ns",
            "range": "± 426933.20600420283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20790.463157894737,
            "unit": "ns",
            "range": "± 5280.589340518981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94648.56701030929,
            "unit": "ns",
            "range": "± 18288.796042538364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88358.51041666667,
            "unit": "ns",
            "range": "± 13571.1902371355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94027.44845360825,
            "unit": "ns",
            "range": "± 15324.672436936413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6964.34375,
            "unit": "ns",
            "range": "± 1453.7146670594213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17956.228260869564,
            "unit": "ns",
            "range": "± 2961.0706190600517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643367.177777778,
            "unit": "ns",
            "range": "± 167508.26941033223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033081.4470588234,
            "unit": "ns",
            "range": "± 171588.35738930444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175286.769230769,
            "unit": "ns",
            "range": "± 187185.4975715015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7944160.634020618,
            "unit": "ns",
            "range": "± 2133390.9701327146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437601.322222222,
            "unit": "ns",
            "range": "± 191345.6877379279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525776.6764705884,
            "unit": "ns",
            "range": "± 168299.56029123225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4399653.8,
            "unit": "ns",
            "range": "± 144441.65214929584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4004756.2395833335,
            "unit": "ns",
            "range": "± 269903.82414867496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6941406.521739131,
            "unit": "ns",
            "range": "± 333264.70221297984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6451975.26640625,
            "unit": "ns",
            "range": "± 166486.90614185497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838764.3988560268,
            "unit": "ns",
            "range": "± 30133.11181378888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1119356.4720552885,
            "unit": "ns",
            "range": "± 29957.667912925503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3419651.3359375,
            "unit": "ns",
            "range": "± 41172.57228618458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871316.5530831473,
            "unit": "ns",
            "range": "± 10035.58050982247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787353.8124302456,
            "unit": "ns",
            "range": "± 4538.116824874109"
          }
        ]
      }
    ]
  }
}