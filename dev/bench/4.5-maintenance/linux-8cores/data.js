window.BENCHMARK_DATA = {
  "lastUpdate": 1718009994355,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715675854905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2379981.2083333335,
            "unit": "ns",
            "range": "± 55684.308856093354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486987.6896551726,
            "unit": "ns",
            "range": "± 54976.13543172519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3047047,
            "unit": "ns",
            "range": "± 25149.932297660827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3137124.8928571427,
            "unit": "ns",
            "range": "± 88940.78922200172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8994397.14864865,
            "unit": "ns",
            "range": "± 263619.1879693569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198514.14814814815,
            "unit": "ns",
            "range": "± 7519.412427259388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194523.11111111112,
            "unit": "ns",
            "range": "± 10751.914661416915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167625.56666666668,
            "unit": "ns",
            "range": "± 3136.3948017398816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169839.9166666665,
            "unit": "ns",
            "range": "± 12394.17808678614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888067.6666666665,
            "unit": "ns",
            "range": "± 47532.63887157159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13070.274193548386,
            "unit": "ns",
            "range": "± 830.2241332921498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61815.92307692308,
            "unit": "ns",
            "range": "± 4738.444489798944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100810.5294117647,
            "unit": "ns",
            "range": "± 1924.9241906386553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89095.28571428571,
            "unit": "ns",
            "range": "± 20352.733872569283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7012.061224489796,
            "unit": "ns",
            "range": "± 644.4000296979926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22881.115384615383,
            "unit": "ns",
            "range": "± 948.6651747989487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5843224.5,
            "unit": "ns",
            "range": "± 51599.053929535155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14643284.566666666,
            "unit": "ns",
            "range": "± 82032.62143759524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37553994.266666666,
            "unit": "ns",
            "range": "± 114414.62171010603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75884748.85714285,
            "unit": "ns",
            "range": "± 250346.5968117178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153775391.35714287,
            "unit": "ns",
            "range": "± 756663.0614844473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999891.9285714285,
            "unit": "ns",
            "range": "± 98003.28396107264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889390.4428571428,
            "unit": "ns",
            "range": "± 91895.67216436347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1616708.8969072164,
            "unit": "ns",
            "range": "± 143380.4923890221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7771810.5,
            "unit": "ns",
            "range": "± 209244.19518734564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36523.75,
            "unit": "ns",
            "range": "± 1918.5636669925232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707689.662409856,
            "unit": "ns",
            "range": "± 3733.4648269289564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1186807.439732143,
            "unit": "ns",
            "range": "± 734.5775282728905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766600.0558733259,
            "unit": "ns",
            "range": "± 1747.7726396011321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920800.5817307692,
            "unit": "ns",
            "range": "± 2063.7403105344993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613826.5670340402,
            "unit": "ns",
            "range": "± 1522.2470077223754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579054.2512019231,
            "unit": "ns",
            "range": "± 416.3080947223985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d7e7f99624c8cc65b7e7c1de35af6543a32877d",
          "message": "Merge pull request #3786 from greymistcube/prepare/4.5.1\n\n🔧 Prepare 4.5.1",
          "timestamp": "2024-05-16T10:53:36+09:00",
          "tree_id": "ac6b6cc61d413b1bdbf0295b78f75e998968191e",
          "url": "https://github.com/planetarium/libplanet/commit/5d7e7f99624c8cc65b7e7c1de35af6543a32877d"
        },
        "date": 1715825046358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998688.67,
            "unit": "ns",
            "range": "± 95901.77860044298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868047.2045454546,
            "unit": "ns",
            "range": "± 69106.17809946755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586893.6979166667,
            "unit": "ns",
            "range": "± 88694.24447375908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7777780.0625,
            "unit": "ns",
            "range": "± 143364.26986269103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697226.366666666,
            "unit": "ns",
            "range": "± 31773.182114721185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14784092,
            "unit": "ns",
            "range": "± 80597.67292191861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37936708.36666667,
            "unit": "ns",
            "range": "± 158130.30552945283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76250885.6923077,
            "unit": "ns",
            "range": "± 257127.9427429675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157254871.07142857,
            "unit": "ns",
            "range": "± 841199.7922504649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743183.9630408655,
            "unit": "ns",
            "range": "± 4751.285430657435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197698.13671875,
            "unit": "ns",
            "range": "± 1253.583039216945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776564.2014322917,
            "unit": "ns",
            "range": "± 1192.3226105509527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972542.2635416666,
            "unit": "ns",
            "range": "± 2286.0304456393674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620152.7122395834,
            "unit": "ns",
            "range": "± 531.5211189054897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581026.7113932292,
            "unit": "ns",
            "range": "± 484.1718397894461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395929.8666666667,
            "unit": "ns",
            "range": "± 35489.05228953745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586867.75,
            "unit": "ns",
            "range": "± 49250.182851098805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3160043.785714286,
            "unit": "ns",
            "range": "± 36043.84859110139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3304820.1395348837,
            "unit": "ns",
            "range": "± 122271.06466578212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9000264.903225806,
            "unit": "ns",
            "range": "± 224594.64201851224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202732.37037037036,
            "unit": "ns",
            "range": "± 5570.8105483171985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194297.95614035087,
            "unit": "ns",
            "range": "± 7918.499077815403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168562.56666666668,
            "unit": "ns",
            "range": "± 3149.683509421829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121591.8571428573,
            "unit": "ns",
            "range": "± 47936.49504028484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2826612.2352941176,
            "unit": "ns",
            "range": "± 57310.08235089334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14145.887755102041,
            "unit": "ns",
            "range": "± 2148.343883292301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61400.52631578947,
            "unit": "ns",
            "range": "± 4310.3858341445175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51943.782608695656,
            "unit": "ns",
            "range": "± 1079.8232581189866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71263.77956989247,
            "unit": "ns",
            "range": "± 7857.499245895732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2960.4835164835163,
            "unit": "ns",
            "range": "± 399.14331490880045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12094.95652173913,
            "unit": "ns",
            "range": "± 700.389607635973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36452.42682926829,
            "unit": "ns",
            "range": "± 1576.9311893869774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8cbd4da619c690f41d329f5b5a901a62aafedc5",
          "message": "Merge pull request #3800 from greymistcube/chore/suppress-warning\n\n🔧 Suppressed security warnings during build",
          "timestamp": "2024-05-27T09:43:58+09:00",
          "tree_id": "a1871d2e438b7b74090577e0a07fbd863744452d",
          "url": "https://github.com/planetarium/libplanet/commit/f8cbd4da619c690f41d329f5b5a901a62aafedc5"
        },
        "date": 1716771303447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946648.8222222222,
            "unit": "ns",
            "range": "± 52585.16064625797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861861.4117647058,
            "unit": "ns",
            "range": "± 58360.40956360205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633860.4591836734,
            "unit": "ns",
            "range": "± 132738.58116256128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7607342.846153846,
            "unit": "ns",
            "range": "± 207625.25176012522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5740435.9,
            "unit": "ns",
            "range": "± 23388.883301993825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14621904.966666667,
            "unit": "ns",
            "range": "± 70370.50188199463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37588060,
            "unit": "ns",
            "range": "± 250304.36090121695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78620013.63333334,
            "unit": "ns",
            "range": "± 238778.13545808184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150203964.30769232,
            "unit": "ns",
            "range": "± 252968.4894202519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685381.1646634615,
            "unit": "ns",
            "range": "± 4638.516043999524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220919.8829627405,
            "unit": "ns",
            "range": "± 1072.8241120843752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769602.7509068081,
            "unit": "ns",
            "range": "± 1740.785249612193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939103.583705357,
            "unit": "ns",
            "range": "± 2524.7690909727758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622746.3019080529,
            "unit": "ns",
            "range": "± 809.5608360880739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577602.3682942708,
            "unit": "ns",
            "range": "± 968.744721196633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386051.463414634,
            "unit": "ns",
            "range": "± 72887.92849405776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500042.1222222224,
            "unit": "ns",
            "range": "± 94691.23735313462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3082581.2,
            "unit": "ns",
            "range": "± 90574.98958908065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3103127.051948052,
            "unit": "ns",
            "range": "± 152699.0369521122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8911891.5,
            "unit": "ns",
            "range": "± 214376.4251073331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201027.8448275862,
            "unit": "ns",
            "range": "± 7065.245238046922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190808.8260869565,
            "unit": "ns",
            "range": "± 4108.997296976631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175045.125,
            "unit": "ns",
            "range": "± 3235.3000247272275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3028196.5,
            "unit": "ns",
            "range": "± 16545.160981661404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901580.269230769,
            "unit": "ns",
            "range": "± 16446.879456570914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12404.150684931506,
            "unit": "ns",
            "range": "± 629.0510417206239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60148.65217391304,
            "unit": "ns",
            "range": "± 3474.8059173717625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52054.260869565216,
            "unit": "ns",
            "range": "± 865.8375985342593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59769.38775510204,
            "unit": "ns",
            "range": "± 9312.15256392791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2961.7319587628867,
            "unit": "ns",
            "range": "± 389.2737499568887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11718.71978021978,
            "unit": "ns",
            "range": "± 666.9781572668345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38460.81443298969,
            "unit": "ns",
            "range": "± 4586.819487059944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56ecf057e4cadda0384943b8383850ec44919a76",
          "message": "Merge pull request #3802 from greymistcube/release/4.5.1\n\n🚀 Release 4.5.1",
          "timestamp": "2024-05-27T10:40:45+09:00",
          "tree_id": "4083e2db9d478b47f3241ff24140f6708124e097",
          "url": "https://github.com/planetarium/libplanet/commit/56ecf057e4cadda0384943b8383850ec44919a76"
        },
        "date": 1716774643647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975424.2333333333,
            "unit": "ns",
            "range": "± 67244.44201084161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1912340.4576271186,
            "unit": "ns",
            "range": "± 84615.69301733698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1580868.7043010753,
            "unit": "ns",
            "range": "± 93330.76924847538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7825550.636363637,
            "unit": "ns",
            "range": "± 190075.38924564977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5738874.642857143,
            "unit": "ns",
            "range": "± 45837.06898202194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14826218.142857144,
            "unit": "ns",
            "range": "± 55220.6059419254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39731627.733333334,
            "unit": "ns",
            "range": "± 137695.38065572066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78245582.78571428,
            "unit": "ns",
            "range": "± 405799.116621319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159279814.13333333,
            "unit": "ns",
            "range": "± 2419335.8383524795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3806300.0075334823,
            "unit": "ns",
            "range": "± 6560.2536591578855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216580.914341518,
            "unit": "ns",
            "range": "± 2147.806237112731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767143.6494838169,
            "unit": "ns",
            "range": "± 1021.2324331507269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931811.6697916666,
            "unit": "ns",
            "range": "± 2457.3843472886138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612125.7573567708,
            "unit": "ns",
            "range": "± 415.82219118331756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585443.568219866,
            "unit": "ns",
            "range": "± 641.8317760396304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2447048.06097561,
            "unit": "ns",
            "range": "± 86769.72372004211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510048.964285714,
            "unit": "ns",
            "range": "± 99713.72889426361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110097.8,
            "unit": "ns",
            "range": "± 71323.24002411024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3146926.6363636362,
            "unit": "ns",
            "range": "± 103009.44952185175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9019478.181818182,
            "unit": "ns",
            "range": "± 186461.94087946418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201361.54761904763,
            "unit": "ns",
            "range": "± 7251.837392747292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193145.38095238095,
            "unit": "ns",
            "range": "± 5830.244847815741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164743.8488372093,
            "unit": "ns",
            "range": "± 5985.037931549135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199140.533333333,
            "unit": "ns",
            "range": "± 51889.76034257167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3060704.966666667,
            "unit": "ns",
            "range": "± 35708.336053297666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13001.123456790123,
            "unit": "ns",
            "range": "± 890.9943936792763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60727.67391304348,
            "unit": "ns",
            "range": "± 3932.5596454505658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60251.666666666664,
            "unit": "ns",
            "range": "± 5234.496759940211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62523.97872340425,
            "unit": "ns",
            "range": "± 14114.35931910442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3009.723404255319,
            "unit": "ns",
            "range": "± 323.0199619070576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11919.618421052632,
            "unit": "ns",
            "range": "± 620.4499005744195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37290.629213483146,
            "unit": "ns",
            "range": "± 2162.772233952308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61d610a54e250ec46fad08bb0b55d448ee8072d4",
          "message": "Merge pull request #3803 from greymistcube/prepare/4.5.2\n\n🔧 Prepare 4.5.2",
          "timestamp": "2024-05-27T13:56:13+09:00",
          "tree_id": "3dce6529ec640cc674e777c61bed5da006951acc",
          "url": "https://github.com/planetarium/libplanet/commit/61d610a54e250ec46fad08bb0b55d448ee8072d4"
        },
        "date": 1716786360198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965771.2680412371,
            "unit": "ns",
            "range": "± 75431.63032708762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879950.7659574468,
            "unit": "ns",
            "range": "± 72949.44587005702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1654961.55,
            "unit": "ns",
            "range": "± 157398.3428662382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7844601.354838709,
            "unit": "ns",
            "range": "± 228885.66800691103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5761669.357142857,
            "unit": "ns",
            "range": "± 23127.140315446042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14575527.166666666,
            "unit": "ns",
            "range": "± 134715.74075154727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37090309.2,
            "unit": "ns",
            "range": "± 129923.78986005604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77225441.8076923,
            "unit": "ns",
            "range": "± 372703.5558777209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152889644.5,
            "unit": "ns",
            "range": "± 795754.2569966608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728630.0030048075,
            "unit": "ns",
            "range": "± 6724.961078211461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199501.266796875,
            "unit": "ns",
            "range": "± 3268.5996261966857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767112.8048828125,
            "unit": "ns",
            "range": "± 1607.1624846845878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915566.0721261161,
            "unit": "ns",
            "range": "± 3685.0243428378094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634783.2704380581,
            "unit": "ns",
            "range": "± 941.959389052562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565032.8047626202,
            "unit": "ns",
            "range": "± 728.9751106080388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384976.6,
            "unit": "ns",
            "range": "± 41302.91448865495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2634843.2,
            "unit": "ns",
            "range": "± 34457.13719183796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165289.6,
            "unit": "ns",
            "range": "± 93757.7135256541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3149922.0322580645,
            "unit": "ns",
            "range": "± 141680.4773698079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8774739.272727273,
            "unit": "ns",
            "range": "± 180049.7007847666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197884.07142857142,
            "unit": "ns",
            "range": "± 7811.603273585782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187809.22222222222,
            "unit": "ns",
            "range": "± 7873.537004965015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162653.14285714287,
            "unit": "ns",
            "range": "± 2718.7431444905355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3133242.433333333,
            "unit": "ns",
            "range": "± 50012.39541706017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2983725,
            "unit": "ns",
            "range": "± 46580.617661365184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13574.418367346938,
            "unit": "ns",
            "range": "± 1940.5517332320426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59889.42307692308,
            "unit": "ns",
            "range": "± 3458.2814236450176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51953.61111111111,
            "unit": "ns",
            "range": "± 1478.4991381760428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57366.336734693876,
            "unit": "ns",
            "range": "± 8770.30238307639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3400.926315789474,
            "unit": "ns",
            "range": "± 564.1691168304221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11859.595744680852,
            "unit": "ns",
            "range": "± 861.4686923729073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36075.97619047619,
            "unit": "ns",
            "range": "± 1936.3629176432464"
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
          "id": "89642e1576f1e96f5a14684c78ea274fd857d9d8",
          "message": "Merge pull request #3810 from s2quake/feature/gql-bpv\n\nAdds the ProtocolVersion field to BlockType in Explorer",
          "timestamp": "2024-06-10T17:50:02+09:00",
          "tree_id": "17fa89e1f0d1afee09bd8c8576a127f7f72daa12",
          "url": "https://github.com/planetarium/libplanet/commit/89642e1576f1e96f5a14684c78ea274fd857d9d8"
        },
        "date": 1718009969969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016208.12,
            "unit": "ns",
            "range": "± 121199.39020217632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906374.65,
            "unit": "ns",
            "range": "± 84979.0111112838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1669193.3585858585,
            "unit": "ns",
            "range": "± 136776.58112418445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7805530.677419355,
            "unit": "ns",
            "range": "± 229290.504653578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5701105.733333333,
            "unit": "ns",
            "range": "± 29241.27740141779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14648212.1,
            "unit": "ns",
            "range": "± 206827.94050120848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37600993.8,
            "unit": "ns",
            "range": "± 271266.6264945669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76503393.76666667,
            "unit": "ns",
            "range": "± 331001.6087178142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150510042.93333334,
            "unit": "ns",
            "range": "± 515731.3864540154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3631326.450420673,
            "unit": "ns",
            "range": "± 5764.861298936269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206855.4838169643,
            "unit": "ns",
            "range": "± 2238.0961304453385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770727.5799479167,
            "unit": "ns",
            "range": "± 1749.734416162388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941009.4007161458,
            "unit": "ns",
            "range": "± 3691.234655586161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618436.7017299107,
            "unit": "ns",
            "range": "± 577.0074371874831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583359.8918619792,
            "unit": "ns",
            "range": "± 888.230669011222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390086.527777778,
            "unit": "ns",
            "range": "± 76828.37560041997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2478209.923076923,
            "unit": "ns",
            "range": "± 37683.18500883725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162869.846153846,
            "unit": "ns",
            "range": "± 76222.52633792312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3155883.375,
            "unit": "ns",
            "range": "± 154014.84948138244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9056188.161290323,
            "unit": "ns",
            "range": "± 178461.90415755342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198629.61764705883,
            "unit": "ns",
            "range": "± 5331.593712581894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190010.63043478262,
            "unit": "ns",
            "range": "± 7043.097529918355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165977,
            "unit": "ns",
            "range": "± 2711.7298643380495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091168.0714285714,
            "unit": "ns",
            "range": "± 32034.146108162786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2898290.1333333333,
            "unit": "ns",
            "range": "± 35927.67728539948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13663.918604651162,
            "unit": "ns",
            "range": "± 846.7435505249963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60880.41025641026,
            "unit": "ns",
            "range": "± 2662.143748184409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55799.57142857143,
            "unit": "ns",
            "range": "± 934.8637469036465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57358.63265306123,
            "unit": "ns",
            "range": "± 8882.444257487708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4483.515151515152,
            "unit": "ns",
            "range": "± 1531.3524592202564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11792.031914893618,
            "unit": "ns",
            "range": "± 696.503999666285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36984.58426966292,
            "unit": "ns",
            "range": "± 2680.6121663843737"
          }
        ]
      }
    ]
  }
}