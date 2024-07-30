window.BENCHMARK_DATA = {
  "lastUpdate": 1722331756749,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4",
          "message": "Prepare 5.1.4",
          "timestamp": "2024-07-30T17:44:56+09:00",
          "tree_id": "074f2d6d79d41c7724b127e60b5ef1a6e9d034e7",
          "url": "https://github.com/planetarium/libplanet/commit/7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4"
        },
        "date": 1722330747230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10918961.5,
            "unit": "ns",
            "range": "± 197473.22514238057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26367457.92857143,
            "unit": "ns",
            "range": "± 174500.4552259719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67355106,
            "unit": "ns",
            "range": "± 141845.89694352914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137659455.64285713,
            "unit": "ns",
            "range": "± 194456.3576208562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273015072.6666667,
            "unit": "ns",
            "range": "± 573756.4067262177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14400.923076923076,
            "unit": "ns",
            "range": "± 395.2766042231109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109761.4,
            "unit": "ns",
            "range": "± 3500.160870938503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104817,
            "unit": "ns",
            "range": "± 4683.744521828951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92605.64035087719,
            "unit": "ns",
            "range": "± 3987.2643120610387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3081860.8235294116,
            "unit": "ns",
            "range": "± 54702.41841344322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2722097.83,
            "unit": "ns",
            "range": "± 166116.60706293673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5348.686813186813,
            "unit": "ns",
            "range": "± 805.4452310794449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26807.055555555555,
            "unit": "ns",
            "range": "± 1828.296421772921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24645.288659793816,
            "unit": "ns",
            "range": "± 2467.1181609266764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30665.273684210526,
            "unit": "ns",
            "range": "± 5697.82973697303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1043.7446808510638,
            "unit": "ns",
            "range": "± 233.95606315616504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4811.879120879121,
            "unit": "ns",
            "range": "± 448.025565618869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685274.7435897436,
            "unit": "ns",
            "range": "± 28100.04331670918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272878.5625,
            "unit": "ns",
            "range": "± 39569.53664686485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077662.9047619049,
            "unit": "ns",
            "range": "± 43484.64411079382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9423766.74,
            "unit": "ns",
            "range": "± 1231663.3762412167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200985.1428571427,
            "unit": "ns",
            "range": "± 28629.42410986706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289062.1666666665,
            "unit": "ns",
            "range": "± 30347.702287842403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2561415.1153846155,
            "unit": "ns",
            "range": "± 25121.54541934891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303322.1153846155,
            "unit": "ns",
            "range": "± 36913.92262534211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2913235.9057971016,
            "unit": "ns",
            "range": "± 129620.79751623454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3016572.5908203125,
            "unit": "ns",
            "range": "± 56306.5526641546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 927734.966796875,
            "unit": "ns",
            "range": "± 6378.8129653825945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612180.1814453125,
            "unit": "ns",
            "range": "± 4396.360426877804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1675051.8774038462,
            "unit": "ns",
            "range": "± 18068.715976000716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473055.7452674279,
            "unit": "ns",
            "range": "± 560.7110769449665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426043.48311941966,
            "unit": "ns",
            "range": "± 493.95683762857357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "fab0c3af1dad67620d14fabdc9230d09b48a26ab",
          "message": "Prepare 5.1.4",
          "timestamp": "2024-07-30T17:46:57+09:00",
          "tree_id": "bdf77a7c6719f1af7905c32a7a4aa6f2cd5da84a",
          "url": "https://github.com/planetarium/libplanet/commit/fab0c3af1dad67620d14fabdc9230d09b48a26ab"
        },
        "date": 1722331743712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10827827.461538462,
            "unit": "ns",
            "range": "± 83257.4347427057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26584633.785714287,
            "unit": "ns",
            "range": "± 202415.2880367217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67472450.26666667,
            "unit": "ns",
            "range": "± 172361.7728071092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136122114.13333333,
            "unit": "ns",
            "range": "± 278638.722626083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275962761.4,
            "unit": "ns",
            "range": "± 478314.63227697427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14006,
            "unit": "ns",
            "range": "± 223.0947908721441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111346.20370370371,
            "unit": "ns",
            "range": "± 4591.676392103144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107427.28846153847,
            "unit": "ns",
            "range": "± 4414.493892500372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93749.69230769231,
            "unit": "ns",
            "range": "± 2504.5070855436725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3012581.1530612246,
            "unit": "ns",
            "range": "± 189409.66369811777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2660413.878787879,
            "unit": "ns",
            "range": "± 155054.98431618145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5343.714285714285,
            "unit": "ns",
            "range": "± 493.7891202103336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26405.772151898735,
            "unit": "ns",
            "range": "± 1361.2245990130102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23368.797872340427,
            "unit": "ns",
            "range": "± 1417.260423931585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29823.478723404256,
            "unit": "ns",
            "range": "± 5028.708730831648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1066.445652173913,
            "unit": "ns",
            "range": "± 165.96758349779472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4824.120879120879,
            "unit": "ns",
            "range": "± 661.1352666296366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688824.2419354839,
            "unit": "ns",
            "range": "± 25237.751652013387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287502.111111111,
            "unit": "ns",
            "range": "± 42459.765814762155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1064916.3384615385,
            "unit": "ns",
            "range": "± 49118.2732014258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9538265.45,
            "unit": "ns",
            "range": "± 1382176.5733628452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163378.6153846155,
            "unit": "ns",
            "range": "± 22111.989506217593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294588.8372093025,
            "unit": "ns",
            "range": "± 84175.8871561238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2573858.6153846155,
            "unit": "ns",
            "range": "± 25766.63729042675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317710.523809524,
            "unit": "ns",
            "range": "± 48484.88646229776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3139006.67,
            "unit": "ns",
            "range": "± 307621.19966352347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3019816.0520148026,
            "unit": "ns",
            "range": "± 64822.367386182064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919251.1070963541,
            "unit": "ns",
            "range": "± 4068.07727960563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616688.383984375,
            "unit": "ns",
            "range": "± 6067.718927939198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1660540.7817708333,
            "unit": "ns",
            "range": "± 8114.060074182512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 474238.914453125,
            "unit": "ns",
            "range": "± 766.086054431679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428377.3252704327,
            "unit": "ns",
            "range": "± 1110.3250982744003"
          }
        ]
      }
    ]
  }
}