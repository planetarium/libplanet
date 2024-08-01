window.BENCHMARK_DATA = {
  "lastUpdate": 1722475035820,
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
          "id": "13c88d911e399b8348ecd0c6fce3115ed66ce57a",
          "message": "Merge pull request #3881 from planetarium/port/pyroscope-from-main-to-5.1.2\n\n🔀 Port pyroscope from main to 5.1.2",
          "timestamp": "2024-07-16T13:39:56+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/13c88d911e399b8348ecd0c6fce3115ed66ce57a"
        },
        "date": 1721105298891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202760.35714285713,
            "unit": "ns",
            "range": "± 10541.983210738412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201335.74468085106,
            "unit": "ns",
            "range": "± 12598.129710940473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175320.65789473685,
            "unit": "ns",
            "range": "± 5606.613056104544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134592.1428571427,
            "unit": "ns",
            "range": "± 33666.594764765636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2914142.433333333,
            "unit": "ns",
            "range": "± 49819.50259324249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13204.58888888889,
            "unit": "ns",
            "range": "± 991.7932560753297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62540.833333333336,
            "unit": "ns",
            "range": "± 5412.16864701832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52075.61111111111,
            "unit": "ns",
            "range": "± 1720.4778784275984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68612.88888888889,
            "unit": "ns",
            "range": "± 14875.4490420227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2881.6631578947367,
            "unit": "ns",
            "range": "± 308.5899851702392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13010.597826086956,
            "unit": "ns",
            "range": "± 1415.4340386600215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028414.2078651686,
            "unit": "ns",
            "range": "± 63682.226517544674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1987634.9761904762,
            "unit": "ns",
            "range": "± 72460.079985966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1730130.359375,
            "unit": "ns",
            "range": "± 77276.00048041923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8536117.023809524,
            "unit": "ns",
            "range": "± 310425.42346510093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3862295.936941964,
            "unit": "ns",
            "range": "± 4621.88658774035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204251.8614583334,
            "unit": "ns",
            "range": "± 3182.2267334006565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779311.9698567708,
            "unit": "ns",
            "range": "± 1653.1202120174166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946347.813671875,
            "unit": "ns",
            "range": "± 2674.352427362929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624043.0712139423,
            "unit": "ns",
            "range": "± 346.91926703167536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585998.4190848215,
            "unit": "ns",
            "range": "± 508.9065342864095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423552.777777778,
            "unit": "ns",
            "range": "± 79884.63798561062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536232,
            "unit": "ns",
            "range": "± 47541.37258010122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3069185.714285714,
            "unit": "ns",
            "range": "± 51669.053129476866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2578533.875,
            "unit": "ns",
            "range": "± 49002.091057253194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3265798.5,
            "unit": "ns",
            "range": "± 59141.00750659171"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32407.944444444445,
            "unit": "ns",
            "range": "± 658.950812430347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10308482.07142857,
            "unit": "ns",
            "range": "± 55838.3592781801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27622981.5,
            "unit": "ns",
            "range": "± 171571.29687235432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70254707.93333334,
            "unit": "ns",
            "range": "± 493016.5974900217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139930490.2857143,
            "unit": "ns",
            "range": "± 784166.733796129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290736962.3,
            "unit": "ns",
            "range": "± 1846563.4575688816"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63db1a52a6c684fd971318fc1853763d439dc09f",
          "message": "Merge pull request #3880 from planetarium/fix/currency-dotnet6\n\nFix an issue where currency does not work correctly in dotnet6",
          "timestamp": "2024-07-17T14:38:26+09:00",
          "tree_id": "a89426d116c187bbcf064240180c86d8c1973a2c",
          "url": "https://github.com/planetarium/libplanet/commit/63db1a52a6c684fd971318fc1853763d439dc09f"
        },
        "date": 1721195202665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203998.65454545454,
            "unit": "ns",
            "range": "± 7815.049257488381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196494.64814814815,
            "unit": "ns",
            "range": "± 8029.528398843027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167411.84,
            "unit": "ns",
            "range": "± 4365.340352137506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091593.4,
            "unit": "ns",
            "range": "± 30480.091637938734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819978.1333333333,
            "unit": "ns",
            "range": "± 34073.00150069944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15730.98,
            "unit": "ns",
            "range": "± 2786.6299547386025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62648.72631578947,
            "unit": "ns",
            "range": "± 4670.521968283096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51611.305555555555,
            "unit": "ns",
            "range": "± 1605.625998427217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69439.46774193548,
            "unit": "ns",
            "range": "± 6445.643880292861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3604.938775510204,
            "unit": "ns",
            "range": "± 448.63401074189807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12990.181818181818,
            "unit": "ns",
            "range": "± 794.6149005181012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029096.776119403,
            "unit": "ns",
            "range": "± 44436.312316931806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1996142.3684210526,
            "unit": "ns",
            "range": "± 43846.130386982615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736228.8356164384,
            "unit": "ns",
            "range": "± 81856.18912560643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8355316.5,
            "unit": "ns",
            "range": "± 216729.72228862462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720270.365685096,
            "unit": "ns",
            "range": "± 6286.767925220673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221849.0098958334,
            "unit": "ns",
            "range": "± 2239.54448768715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762316.234375,
            "unit": "ns",
            "range": "± 2510.6151392962397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938817.8946814905,
            "unit": "ns",
            "range": "± 930.4375243204006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613768.2044503348,
            "unit": "ns",
            "range": "± 735.4403405892642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570097.5635463169,
            "unit": "ns",
            "range": "± 760.8509507296427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474927.3666666667,
            "unit": "ns",
            "range": "± 36348.6519417289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511345.066666667,
            "unit": "ns",
            "range": "± 46344.803956656804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108866.5,
            "unit": "ns",
            "range": "± 38487.38123259177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2616016.28,
            "unit": "ns",
            "range": "± 61206.012953194935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3293607.5555555555,
            "unit": "ns",
            "range": "± 67102.13318536262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32479.25,
            "unit": "ns",
            "range": "± 183.7533549477273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10594838.8,
            "unit": "ns",
            "range": "± 110874.05796101654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27245026.285714287,
            "unit": "ns",
            "range": "± 141366.47143202965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70299309.42857143,
            "unit": "ns",
            "range": "± 278550.341762135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143789226.35714287,
            "unit": "ns",
            "range": "± 531765.2173586005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293371899.46666664,
            "unit": "ns",
            "range": "± 1212867.7968674588"
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
          "id": "88604b60b86f855c72202b2e332777a1eeebd675",
          "message": "Merge pull request #3883 from planetarium/fix/explorer-evidence\n\nFix evidence query errors in Explorer",
          "timestamp": "2024-07-17T16:30:15+09:00",
          "tree_id": "f60f63292b146abc9a4f45f1c0f90629c5e720a7",
          "url": "https://github.com/planetarium/libplanet/commit/88604b60b86f855c72202b2e332777a1eeebd675"
        },
        "date": 1721201900292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200724.3620689655,
            "unit": "ns",
            "range": "± 8063.827722196999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193422.7037037037,
            "unit": "ns",
            "range": "± 7746.8846389155215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168701.15384615384,
            "unit": "ns",
            "range": "± 1733.9242027913565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3057441.466666667,
            "unit": "ns",
            "range": "± 25964.814603796498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867959.533333333,
            "unit": "ns",
            "range": "± 46155.61770152712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12683.318681318682,
            "unit": "ns",
            "range": "± 958.6193877901337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60311.11363636364,
            "unit": "ns",
            "range": "± 3322.982054430145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51279.555555555555,
            "unit": "ns",
            "range": "± 1087.219942152635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56124.427083333336,
            "unit": "ns",
            "range": "± 9019.854500220807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2728.4578313253014,
            "unit": "ns",
            "range": "± 218.96231445465008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12582.336842105264,
            "unit": "ns",
            "range": "± 869.2998969643687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008692.2876712328,
            "unit": "ns",
            "range": "± 49987.777813814835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936911.26,
            "unit": "ns",
            "range": "± 76881.83539820266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1676970.0277777778,
            "unit": "ns",
            "range": "± 82388.70386863811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8581908.612903226,
            "unit": "ns",
            "range": "± 255935.55818365392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765315.36328125,
            "unit": "ns",
            "range": "± 5985.715456636897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211919.8391462055,
            "unit": "ns",
            "range": "± 2025.6439396250876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768459.5439453125,
            "unit": "ns",
            "range": "± 2037.3235082333745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955939.849609375,
            "unit": "ns",
            "range": "± 2866.2361977058786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620917.7665318081,
            "unit": "ns",
            "range": "± 833.9950293580771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582084.2858723958,
            "unit": "ns",
            "range": "± 785.6125465713985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453997.375,
            "unit": "ns",
            "range": "± 59132.32181987938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553345.1428571427,
            "unit": "ns",
            "range": "± 32500.78572744202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065834.3125,
            "unit": "ns",
            "range": "± 59867.69963980994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2571303.1304347827,
            "unit": "ns",
            "range": "± 63333.89452827432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282641.1875,
            "unit": "ns",
            "range": "± 63027.03963455553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31796.266666666666,
            "unit": "ns",
            "range": "± 383.2152447509412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10583960.333333334,
            "unit": "ns",
            "range": "± 103263.17675633228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27120871.1,
            "unit": "ns",
            "range": "± 116976.82706526597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69844798.46666667,
            "unit": "ns",
            "range": "± 646037.543391566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138837953.07142857,
            "unit": "ns",
            "range": "± 759235.2803237119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284318032.3,
            "unit": "ns",
            "range": "± 1165077.884024816"
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
          "id": "5ecafb7fb65b7eceddeb4b2f0631147b047df142",
          "message": "Merge pull request #3884 from planetarium/release/5.1.2\n\n🚀 Release 5.1.2",
          "timestamp": "2024-07-17T17:37:06+09:00",
          "tree_id": "dc88da6b94c65988531bcacfcd575558ae310fa5",
          "url": "https://github.com/planetarium/libplanet/commit/5ecafb7fb65b7eceddeb4b2f0631147b047df142"
        },
        "date": 1721205908469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200298.9076923077,
            "unit": "ns",
            "range": "± 9162.759729816458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193826.4880952381,
            "unit": "ns",
            "range": "± 10352.943884332886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172661.1724137931,
            "unit": "ns",
            "range": "± 6719.148578419351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066677.933333333,
            "unit": "ns",
            "range": "± 45207.72044442136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795479,
            "unit": "ns",
            "range": "± 32929.69314720729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13218.5375,
            "unit": "ns",
            "range": "± 704.2867555328493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63949.51546391752,
            "unit": "ns",
            "range": "± 9060.812023389286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50740.84782608696,
            "unit": "ns",
            "range": "± 905.153257173796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62603.74736842105,
            "unit": "ns",
            "range": "± 7639.077670694452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2917.9315789473685,
            "unit": "ns",
            "range": "± 319.5004296148538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11808.811594202898,
            "unit": "ns",
            "range": "± 585.3917812120841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028211.8068181818,
            "unit": "ns",
            "range": "± 62599.00817249937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959232.2234042552,
            "unit": "ns",
            "range": "± 76285.79403700675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722878.9387755103,
            "unit": "ns",
            "range": "± 108660.1997851883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8372431.4,
            "unit": "ns",
            "range": "± 290201.5149760594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3840016.8537946427,
            "unit": "ns",
            "range": "± 5082.1755228686425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202558.2660757212,
            "unit": "ns",
            "range": "± 1710.7013334807198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768714.7853816106,
            "unit": "ns",
            "range": "± 932.549454348118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2034380.0416666667,
            "unit": "ns",
            "range": "± 2165.1112702940495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617915.4632393973,
            "unit": "ns",
            "range": "± 728.6910192749593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577362.6260416667,
            "unit": "ns",
            "range": "± 504.5966754807521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445722.7666666666,
            "unit": "ns",
            "range": "± 34576.279677726765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2490847.8571428573,
            "unit": "ns",
            "range": "± 29169.984823331786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3036671.433333333,
            "unit": "ns",
            "range": "± 56481.73774196737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2542505.8292682925,
            "unit": "ns",
            "range": "± 89151.81991577694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3230995.411764706,
            "unit": "ns",
            "range": "± 65836.03431542906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32049.5,
            "unit": "ns",
            "range": "± 259.4741477167491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10224330,
            "unit": "ns",
            "range": "± 37113.95776074908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27120669,
            "unit": "ns",
            "range": "± 189409.50804313616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72670234.73333333,
            "unit": "ns",
            "range": "± 415291.4959069571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138857418.86666667,
            "unit": "ns",
            "range": "± 622871.6174049797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289276899.7307692,
            "unit": "ns",
            "range": "± 1327999.3527343522"
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
          "id": "5bbd8050001c664d6dc740fabd37e3a5cc537317",
          "message": "Merge pull request #3886 from planetarium/prepare/5.1.3\n\n🔧 Prepare 5.1.3",
          "timestamp": "2024-07-18T09:23:00+09:00",
          "tree_id": "46788e99e92a5fb3224654f1c5f3217525742742",
          "url": "https://github.com/planetarium/libplanet/commit/5bbd8050001c664d6dc740fabd37e3a5cc537317"
        },
        "date": 1721262784071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218121.04225352113,
            "unit": "ns",
            "range": "± 10694.608349786913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208527.5306122449,
            "unit": "ns",
            "range": "± 13398.255939128549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181528.5744680851,
            "unit": "ns",
            "range": "± 11456.068118761634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148592.785714286,
            "unit": "ns",
            "range": "± 29729.56033577089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2856957.6666666665,
            "unit": "ns",
            "range": "± 33238.48988891099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14153.65909090909,
            "unit": "ns",
            "range": "± 972.2740837538529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84703.12,
            "unit": "ns",
            "range": "± 17519.259865010787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56643.021505376346,
            "unit": "ns",
            "range": "± 5307.059293748147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69468.08333333333,
            "unit": "ns",
            "range": "± 9559.692033870973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3705.442105263158,
            "unit": "ns",
            "range": "± 503.12628413029154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13622.266666666666,
            "unit": "ns",
            "range": "± 1269.1329057999678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058792.4347826086,
            "unit": "ns",
            "range": "± 84435.21679354961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2034174.4615384615,
            "unit": "ns",
            "range": "± 54887.61507971048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1772369.6557377048,
            "unit": "ns",
            "range": "± 79614.41339478784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8329816.909090909,
            "unit": "ns",
            "range": "± 196478.41145964517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737115.042668269,
            "unit": "ns",
            "range": "± 3641.8550337809233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207879.5751302084,
            "unit": "ns",
            "range": "± 2611.4939624167314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757338.4470703125,
            "unit": "ns",
            "range": "± 1295.6948981604494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961404.4525669643,
            "unit": "ns",
            "range": "± 1325.1493982978523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622995.7205729167,
            "unit": "ns",
            "range": "± 759.8425027611186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577650.8327473958,
            "unit": "ns",
            "range": "± 492.7164000761047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2491107.785714286,
            "unit": "ns",
            "range": "± 67838.61783857833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2669730.8,
            "unit": "ns",
            "range": "± 49441.276408338344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122619.433333333,
            "unit": "ns",
            "range": "± 54155.36486478597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2669118.7333333334,
            "unit": "ns",
            "range": "± 48270.6891164913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3327222.9285714286,
            "unit": "ns",
            "range": "± 39131.160297948445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38318.21,
            "unit": "ns",
            "range": "± 6290.254958290882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10984037.933333334,
            "unit": "ns",
            "range": "± 121368.77891337546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27582723.933333334,
            "unit": "ns",
            "range": "± 162768.1840727861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70201677.03333333,
            "unit": "ns",
            "range": "± 308884.7244511562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138190285.53333333,
            "unit": "ns",
            "range": "± 813956.8180318612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287477328.56666666,
            "unit": "ns",
            "range": "± 880311.3646155033"
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
          "id": "3a5e29d89fa373c82534046310cc1ed1d5a92e52",
          "message": "Merge pull request #3898 from planetarium/fix/remove-mutation\n\nRemove mutation from explorer",
          "timestamp": "2024-07-30T15:14:59+09:00",
          "tree_id": "f4c424b6d4492de8daf5c8e06228c9451c7c6681",
          "url": "https://github.com/planetarium/libplanet/commit/3a5e29d89fa373c82534046310cc1ed1d5a92e52"
        },
        "date": 1722320784183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042675.5444444445,
            "unit": "ns",
            "range": "± 69520.35472167282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979984.1612903227,
            "unit": "ns",
            "range": "± 60466.63725399695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739020.0704225353,
            "unit": "ns",
            "range": "± 84632.80256738079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8447225.1875,
            "unit": "ns",
            "range": "± 93148.61243533995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208661.90789473685,
            "unit": "ns",
            "range": "± 10561.39966630387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198441.6052631579,
            "unit": "ns",
            "range": "± 9911.055381514048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176436.74489795917,
            "unit": "ns",
            "range": "± 10625.11794409853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3104620.5,
            "unit": "ns",
            "range": "± 37615.169446136206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883504.533333333,
            "unit": "ns",
            "range": "± 42247.047905093175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17299.166666666668,
            "unit": "ns",
            "range": "± 3378.8278942224188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70006.66,
            "unit": "ns",
            "range": "± 10653.428570060145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52880.74725274725,
            "unit": "ns",
            "range": "± 3128.1392182481854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61082.302083333336,
            "unit": "ns",
            "range": "± 9585.491331469651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3191.6559139784945,
            "unit": "ns",
            "range": "± 449.976508918827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21192.270833333332,
            "unit": "ns",
            "range": "± 3487.4623996589676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35784.65,
            "unit": "ns",
            "range": "± 5255.727579642437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10696188.88235294,
            "unit": "ns",
            "range": "± 209825.08513607303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27609130.923076924,
            "unit": "ns",
            "range": "± 142144.2768301873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70906582.66666667,
            "unit": "ns",
            "range": "± 468120.2437389757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139767738.2142857,
            "unit": "ns",
            "range": "± 546617.2180960864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289661579.85714287,
            "unit": "ns",
            "range": "± 1258247.63703589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748931.275841346,
            "unit": "ns",
            "range": "± 7816.341628390962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205129.8466045673,
            "unit": "ns",
            "range": "± 1582.688212673126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767677.5915178572,
            "unit": "ns",
            "range": "± 764.3233763057615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923135.3558872768,
            "unit": "ns",
            "range": "± 1577.5258385898944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620154.9661959135,
            "unit": "ns",
            "range": "± 873.0458989527756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567983.437109375,
            "unit": "ns",
            "range": "± 1030.4414919371418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2483364.95,
            "unit": "ns",
            "range": "± 55903.64341716162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591397.888888889,
            "unit": "ns",
            "range": "± 54983.25951129969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059107.8666666667,
            "unit": "ns",
            "range": "± 55033.0333356595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2635484.2333333334,
            "unit": "ns",
            "range": "± 71815.65937856563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282936.1666666665,
            "unit": "ns",
            "range": "± 55645.45926240353"
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
          "id": "4aadf2c9919f93a283ec0f9883089a3dfd56f36c",
          "message": "Merge pull request #3899 from planetarium/release/5.1.3\n\n🚀 Release 5.1.3",
          "timestamp": "2024-07-30T15:45:40+09:00",
          "tree_id": "6390d9a3eae9dcd8e92fcfd6c15a159ff2e46ca0",
          "url": "https://github.com/planetarium/libplanet/commit/4aadf2c9919f93a283ec0f9883089a3dfd56f36c"
        },
        "date": 1722322462808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028495.7894736842,
            "unit": "ns",
            "range": "± 49621.020338781374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979918.4666666666,
            "unit": "ns",
            "range": "± 57254.97093174882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699419.3452380951,
            "unit": "ns",
            "range": "± 90842.99423697799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8275946.5,
            "unit": "ns",
            "range": "± 168014.27959625932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208429.0655737705,
            "unit": "ns",
            "range": "± 9388.63448514364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192316.72807017545,
            "unit": "ns",
            "range": "± 7663.658914964331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165684.13157894736,
            "unit": "ns",
            "range": "± 3558.4927865995037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3033655.9,
            "unit": "ns",
            "range": "± 34710.015295712146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832953.5384615385,
            "unit": "ns",
            "range": "± 31448.74245926585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13525.402173913044,
            "unit": "ns",
            "range": "± 1076.9860576381063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62270.35567010309,
            "unit": "ns",
            "range": "± 5406.019960403885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51593.391304347824,
            "unit": "ns",
            "range": "± 1169.2614117518194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67266.07216494845,
            "unit": "ns",
            "range": "± 8022.262322810691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2980.0208333333335,
            "unit": "ns",
            "range": "± 459.74146004870965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12521.068421052632,
            "unit": "ns",
            "range": "± 917.2495965637796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32232.2,
            "unit": "ns",
            "range": "± 450.4769218759793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10601131.2,
            "unit": "ns",
            "range": "± 104033.9472996332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27514965.066666666,
            "unit": "ns",
            "range": "± 170462.75333651825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69207655.63333334,
            "unit": "ns",
            "range": "± 423694.2390465873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137747266.86666667,
            "unit": "ns",
            "range": "± 983080.9916061899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 304270278.06666666,
            "unit": "ns",
            "range": "± 1140079.8402802113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729244.415457589,
            "unit": "ns",
            "range": "± 6108.562871823613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209527.9686104911,
            "unit": "ns",
            "range": "± 1302.1839564005404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772993.105859375,
            "unit": "ns",
            "range": "± 1792.1692742730868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931485.5939002405,
            "unit": "ns",
            "range": "± 914.4347405830669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631882.0599609375,
            "unit": "ns",
            "range": "± 722.0756584712962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573771.7524739583,
            "unit": "ns",
            "range": "± 413.9262590368436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2478142.0555555555,
            "unit": "ns",
            "range": "± 52965.48224520683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580476.5263157897,
            "unit": "ns",
            "range": "± 55976.87223345848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3052727.5,
            "unit": "ns",
            "range": "± 62970.58767673159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2675620.3333333335,
            "unit": "ns",
            "range": "± 35850.17524497249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3364923.7,
            "unit": "ns",
            "range": "± 62884.708858127255"
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
          "id": "d65bae4ca9501905392f2436880df3b373a219c9",
          "message": "Merge pull request #3903 from planetarium/prepare/5.1.4\n\n🔧 Prepare 5.1.4",
          "timestamp": "2024-08-01T10:07:19+09:00",
          "tree_id": "bdf77a7c6719f1af7905c32a7a4aa6f2cd5da84a",
          "url": "https://github.com/planetarium/libplanet/commit/d65bae4ca9501905392f2436880df3b373a219c9"
        },
        "date": 1722475009024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011785.3846153846,
            "unit": "ns",
            "range": "± 48501.844017221956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929223.3448275863,
            "unit": "ns",
            "range": "± 54662.594013035916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674219.3255813953,
            "unit": "ns",
            "range": "± 87699.55396146441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8345970.7,
            "unit": "ns",
            "range": "± 240842.77312389994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202740.29591836734,
            "unit": "ns",
            "range": "± 8064.607210365734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191146.02,
            "unit": "ns",
            "range": "± 7304.738513779524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168026.7037037037,
            "unit": "ns",
            "range": "± 4120.474550851701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010708.6428571427,
            "unit": "ns",
            "range": "± 33705.24509024384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771878.153846154,
            "unit": "ns",
            "range": "± 36068.732894863744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15886.020833333334,
            "unit": "ns",
            "range": "± 1995.2901331262276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61112.1030927835,
            "unit": "ns",
            "range": "± 3956.435328688504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50152.85294117647,
            "unit": "ns",
            "range": "± 706.1538378052327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53636.72340425532,
            "unit": "ns",
            "range": "± 8435.76986996541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2624.7391304347825,
            "unit": "ns",
            "range": "± 281.7858422092303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13679.484848484848,
            "unit": "ns",
            "range": "± 2062.4247784112817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32555.80769230769,
            "unit": "ns",
            "range": "± 190.0975120893593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10485583.214285715,
            "unit": "ns",
            "range": "± 68151.9670108688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26835188.42857143,
            "unit": "ns",
            "range": "± 197382.16866806863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69434688,
            "unit": "ns",
            "range": "± 287376.4213343243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139479779.26666668,
            "unit": "ns",
            "range": "± 1344832.1875074476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287444466.06666666,
            "unit": "ns",
            "range": "± 1199928.4629146776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3788443.8010602677,
            "unit": "ns",
            "range": "± 6904.201802496173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200643.76953125,
            "unit": "ns",
            "range": "± 2002.8359835992183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769647.7079380581,
            "unit": "ns",
            "range": "± 1691.9885829307545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955412.9520833334,
            "unit": "ns",
            "range": "± 1876.054023602995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632064.7118443081,
            "unit": "ns",
            "range": "± 1277.6000275547394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576376.4668619792,
            "unit": "ns",
            "range": "± 802.3323905149792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418526.625,
            "unit": "ns",
            "range": "± 44539.81303489422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564945.3333333335,
            "unit": "ns",
            "range": "± 47751.37717186305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111308.8333333335,
            "unit": "ns",
            "range": "± 19571.313546933456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2539554.6470588236,
            "unit": "ns",
            "range": "± 81134.30111451849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3286849.533333333,
            "unit": "ns",
            "range": "± 60916.75870265994"
          }
        ]
      }
    ]
  }
}