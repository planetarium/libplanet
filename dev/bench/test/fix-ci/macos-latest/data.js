window.BENCHMARK_DATA = {
  "lastUpdate": 1692617784662,
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
      }
    ]
  }
}