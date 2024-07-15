window.BENCHMARK_DATA = {
  "lastUpdate": 1721034919756,
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673425877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3831597.9709821427,
            "unit": "ns",
            "range": "± 7168.949593744745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240126.2532552083,
            "unit": "ns",
            "range": "± 1500.8295033667437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776215.1680989583,
            "unit": "ns",
            "range": "± 987.484717812125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975411.5955729166,
            "unit": "ns",
            "range": "± 1607.6823783746818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625337.603515625,
            "unit": "ns",
            "range": "± 596.6441390621069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573107.6499399039,
            "unit": "ns",
            "range": "± 734.8938655573639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544291.4285714286,
            "unit": "ns",
            "range": "± 44555.588793385665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2573563.5714285714,
            "unit": "ns",
            "range": "± 33941.51696830727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3037459.346153846,
            "unit": "ns",
            "range": "± 25833.77098826958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572985.888888889,
            "unit": "ns",
            "range": "± 71232.83595797568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313490.8695652173,
            "unit": "ns",
            "range": "± 82753.20078198808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014587.8181818182,
            "unit": "ns",
            "range": "± 49057.8200278769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929781.054054054,
            "unit": "ns",
            "range": "± 59452.29310919337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699270.9264705882,
            "unit": "ns",
            "range": "± 72113.17275246838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8285650.708333333,
            "unit": "ns",
            "range": "± 206840.92635151948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199467.82,
            "unit": "ns",
            "range": "± 7968.2880563249855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197575.20238095237,
            "unit": "ns",
            "range": "± 10554.921753552164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168072.48,
            "unit": "ns",
            "range": "± 4433.833942161869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142013.566666667,
            "unit": "ns",
            "range": "± 39464.573182732354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743050.6153846155,
            "unit": "ns",
            "range": "± 36984.327526531335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16058.054347826086,
            "unit": "ns",
            "range": "± 3361.1142558636566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61701.85106382979,
            "unit": "ns",
            "range": "± 5625.766643015468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51779.583333333336,
            "unit": "ns",
            "range": "± 502.2598853424813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58833.244897959186,
            "unit": "ns",
            "range": "± 10463.846118368296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2861.2448979591836,
            "unit": "ns",
            "range": "± 358.87648454484696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13844.808510638299,
            "unit": "ns",
            "range": "± 1328.913923332025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10475589.807692308,
            "unit": "ns",
            "range": "± 53460.87568709261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27193090.6,
            "unit": "ns",
            "range": "± 192872.00991027334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69129411.92857143,
            "unit": "ns",
            "range": "± 630582.7646680629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140652318.63333333,
            "unit": "ns",
            "range": "± 776102.4346508526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288668121,
            "unit": "ns",
            "range": "± 1086005.9721802375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32536,
            "unit": "ns",
            "range": "± 439.64596146055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1715ccfb96803c319afff76dff631edd0f6b7b58",
          "message": "Merge pull request #3874 from planetarium/prepare/5.1.1\n\n🔧Prepare 5.1.1",
          "timestamp": "2024-07-12T15:13:54+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/1715ccfb96803c319afff76dff631edd0f6b7b58"
        },
        "date": 1720765318116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204016.225,
            "unit": "ns",
            "range": "± 7020.832416449761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191494.78723404257,
            "unit": "ns",
            "range": "± 6156.731843862032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165005.14285714287,
            "unit": "ns",
            "range": "± 1548.6601582381738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3052732.066666667,
            "unit": "ns",
            "range": "± 21511.66854279877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772582.5,
            "unit": "ns",
            "range": "± 33440.68900824494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12830.864864864865,
            "unit": "ns",
            "range": "± 655.9529369253106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60041.279569892475,
            "unit": "ns",
            "range": "± 3395.758765711157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50006.68421052631,
            "unit": "ns",
            "range": "± 1077.5358232060769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52434.704081632655,
            "unit": "ns",
            "range": "± 8973.713150669493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2950.3229166666665,
            "unit": "ns",
            "range": "± 240.5515808475297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15896.421686746988,
            "unit": "ns",
            "range": "± 834.6623257704489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002988.9102564103,
            "unit": "ns",
            "range": "± 49236.84271983548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892834.4193548388,
            "unit": "ns",
            "range": "± 56223.254899121705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650152.9726027397,
            "unit": "ns",
            "range": "± 78311.57822654689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8129215.2272727275,
            "unit": "ns",
            "range": "± 187495.2854907435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773915.2606026786,
            "unit": "ns",
            "range": "± 18664.012093276266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208355.3044270833,
            "unit": "ns",
            "range": "± 3736.8995474484536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750233.6701171875,
            "unit": "ns",
            "range": "± 1811.0573156571354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945834.79296875,
            "unit": "ns",
            "range": "± 2436.8379422361777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617237.4674479166,
            "unit": "ns",
            "range": "± 914.2744187259685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589042.1818498884,
            "unit": "ns",
            "range": "± 410.7259907442799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470745.9285714286,
            "unit": "ns",
            "range": "± 36352.95783852931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567648.1666666665,
            "unit": "ns",
            "range": "± 34749.637409550596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3100028.8,
            "unit": "ns",
            "range": "± 35469.71118977026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2522461.705882353,
            "unit": "ns",
            "range": "± 79399.75298670813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3275502,
            "unit": "ns",
            "range": "± 40405.6065148555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32379.785714285714,
            "unit": "ns",
            "range": "± 381.93624690947667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10629832.357142856,
            "unit": "ns",
            "range": "± 38365.3759319663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26776594.083333332,
            "unit": "ns",
            "range": "± 97147.46946356473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69034110.46666667,
            "unit": "ns",
            "range": "± 314488.042593007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137054622.9,
            "unit": "ns",
            "range": "± 1161203.156260769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288531570.2,
            "unit": "ns",
            "range": "± 1143926.5446962682"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b596b218868c91141683cb0607890e04dc346ea",
          "message": "Merge pull request #3876 from planetarium/release/5.1.1\n\n🚀 Release 5.1.1",
          "timestamp": "2024-07-15T10:03:11+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/0b596b218868c91141683cb0607890e04dc346ea"
        },
        "date": 1721005943877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217446.3,
            "unit": "ns",
            "range": "± 12035.87296395631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224074,
            "unit": "ns",
            "range": "± 11079.677042274792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199116.1791044776,
            "unit": "ns",
            "range": "± 9378.337450266541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121962.8846153845,
            "unit": "ns",
            "range": "± 31081.257899089986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893236,
            "unit": "ns",
            "range": "± 53507.98546634574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17056.626315789475,
            "unit": "ns",
            "range": "± 2310.711478542068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92180.79213483146,
            "unit": "ns",
            "range": "± 11026.461210323932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56693.68817204301,
            "unit": "ns",
            "range": "± 3527.098410192813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76474.19587628866,
            "unit": "ns",
            "range": "± 10862.182355960955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4124.836734693878,
            "unit": "ns",
            "range": "± 674.0701681771278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18219.63,
            "unit": "ns",
            "range": "± 2875.2255200262293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070686.84,
            "unit": "ns",
            "range": "± 46246.65701082357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2060420.8823529412,
            "unit": "ns",
            "range": "± 37435.47964979605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1815215.2714285713,
            "unit": "ns",
            "range": "± 87828.93965898092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8533057.689655172,
            "unit": "ns",
            "range": "± 246505.78926773177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762783.7400841345,
            "unit": "ns",
            "range": "± 3709.201673318853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204338.0034877232,
            "unit": "ns",
            "range": "± 1847.201812057983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768053.8927873884,
            "unit": "ns",
            "range": "± 1846.8145885856638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933450.2364676339,
            "unit": "ns",
            "range": "± 2499.4301911616312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623466.0798527644,
            "unit": "ns",
            "range": "± 707.4266315912586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571618.4949776785,
            "unit": "ns",
            "range": "± 1184.3786105053093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2556799.1612903224,
            "unit": "ns",
            "range": "± 77779.49319844178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2608425.8,
            "unit": "ns",
            "range": "± 38318.49140558642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148872.785714286,
            "unit": "ns",
            "range": "± 43344.78078097234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2719056.6666666665,
            "unit": "ns",
            "range": "± 45089.497778888384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3362003.285714286,
            "unit": "ns",
            "range": "± 45022.772252030874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33508.55,
            "unit": "ns",
            "range": "± 1118.9940067665632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10827503.1,
            "unit": "ns",
            "range": "± 72104.26059909952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27695378.933333334,
            "unit": "ns",
            "range": "± 193163.60700802927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70485217.46666667,
            "unit": "ns",
            "range": "± 329215.4175624801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142891538.73333332,
            "unit": "ns",
            "range": "± 466271.27299497265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294312740.93333334,
            "unit": "ns",
            "range": "± 1112393.8510467587"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4af3e101a46f0093686eae7f651451d1cc718dd9",
          "message": "Merge pull request #3879 from planetarium/prepare/5.1.2\n\n🔧 Prepare 5.1.2",
          "timestamp": "2024-07-15T18:06:43+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/4af3e101a46f0093686eae7f651451d1cc718dd9"
        },
        "date": 1721034894302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197200.3103448276,
            "unit": "ns",
            "range": "± 7761.868834598092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192621.91791044775,
            "unit": "ns",
            "range": "± 8753.164882433572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166543.5625,
            "unit": "ns",
            "range": "± 3199.2627790112315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3040804.2333333334,
            "unit": "ns",
            "range": "± 49995.67850391338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788114.0714285714,
            "unit": "ns",
            "range": "± 35719.31032038183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12927.236559139785,
            "unit": "ns",
            "range": "± 883.9196599073019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61080.03684210526,
            "unit": "ns",
            "range": "± 4302.55110076476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50809.76666666667,
            "unit": "ns",
            "range": "± 921.2237564912281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59676.74736842105,
            "unit": "ns",
            "range": "± 7390.706838577498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2702.757731958763,
            "unit": "ns",
            "range": "± 355.0289095725902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12286.137362637362,
            "unit": "ns",
            "range": "± 830.5741858161006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020731.401098901,
            "unit": "ns",
            "range": "± 70586.37678807355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1966635.342857143,
            "unit": "ns",
            "range": "± 92842.03036791725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686290.5555555555,
            "unit": "ns",
            "range": "± 97721.10451416721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8272278.166666667,
            "unit": "ns",
            "range": "± 223776.30080730174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775846.935096154,
            "unit": "ns",
            "range": "± 7356.792827739903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193464.759486607,
            "unit": "ns",
            "range": "± 2174.6583429550315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763558.2626953125,
            "unit": "ns",
            "range": "± 1325.6243259110904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959676.3401041667,
            "unit": "ns",
            "range": "± 2427.7618550027655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618798.5904296875,
            "unit": "ns",
            "range": "± 848.8204510361658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579910.4026692709,
            "unit": "ns",
            "range": "± 475.5155534307388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440015.3571428573,
            "unit": "ns",
            "range": "± 37979.010003719646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559948.466666667,
            "unit": "ns",
            "range": "± 36084.952827354246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3068414.9285714286,
            "unit": "ns",
            "range": "± 44906.11582763839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2600124.93902439,
            "unit": "ns",
            "range": "± 91688.3500767815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3258361.9285714286,
            "unit": "ns",
            "range": "± 27755.729782582486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31736.428571428572,
            "unit": "ns",
            "range": "± 299.7536717644402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10456906.57142857,
            "unit": "ns",
            "range": "± 155682.1602080115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27382560.85714286,
            "unit": "ns",
            "range": "± 117253.79104309599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68768796.64285715,
            "unit": "ns",
            "range": "± 380682.2146852547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138607154.53333333,
            "unit": "ns",
            "range": "± 853098.4083410196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288353335.64285713,
            "unit": "ns",
            "range": "± 1372173.2350189611"
          }
        ]
      }
    ]
  }
}