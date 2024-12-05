window.BENCHMARK_DATA = {
  "lastUpdate": 1732239501860,
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
          "id": "3c035d5dca56c4b8435bd3fd60228ed8d59a6810",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-13T16:14:39+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/3c035d5dca56c4b8435bd3fd60228ed8d59a6810"
        },
        "date": 1731482813344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960515.0537634408,
            "unit": "ns",
            "range": "± 97385.14410658395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740921.31147541,
            "unit": "ns",
            "range": "± 78205.04057658112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493500,
            "unit": "ns",
            "range": "± 111253.45185409102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811945.454545454,
            "unit": "ns",
            "range": "± 284154.3684651797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33624.242424242424,
            "unit": "ns",
            "range": "± 4617.780430455317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9711086.666666666,
            "unit": "ns",
            "range": "± 85416.05625798153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24033293.333333332,
            "unit": "ns",
            "range": "± 225506.81797316228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59427400,
            "unit": "ns",
            "range": "± 612814.0594246932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118309421.42857143,
            "unit": "ns",
            "range": "± 730846.305192266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236574915.3846154,
            "unit": "ns",
            "range": "± 1112637.9531292242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292159.598214286,
            "unit": "ns",
            "range": "± 7082.325742732606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072594.9739583333,
            "unit": "ns",
            "range": "± 6306.550496345919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738822.6041666666,
            "unit": "ns",
            "range": "± 2409.5661431353656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930771.3932291667,
            "unit": "ns",
            "range": "± 3891.900478825935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617204.0364583334,
            "unit": "ns",
            "range": "± 1762.1114121456596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563001.513671875,
            "unit": "ns",
            "range": "± 1525.9059965143292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199667.6470588236,
            "unit": "ns",
            "range": "± 44342.25179349429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288590.625,
            "unit": "ns",
            "range": "± 68052.4909329366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2771289.4736842103,
            "unit": "ns",
            "range": "± 61159.317403509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2357789.4736842103,
            "unit": "ns",
            "range": "± 50618.6603134637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2971223.3333333335,
            "unit": "ns",
            "range": "± 42865.59503955635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95909.78260869565,
            "unit": "ns",
            "range": "± 9197.599540905174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169429.67032967033,
            "unit": "ns",
            "range": "± 11810.875350996494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147010,
            "unit": "ns",
            "range": "± 4394.538146067386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2600042.8571428573,
            "unit": "ns",
            "range": "± 34301.26066949265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2511080,
            "unit": "ns",
            "range": "± 36525.20069368936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10447.368421052632,
            "unit": "ns",
            "range": "± 1484.3038417847076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52265.625,
            "unit": "ns",
            "range": "± 4493.054947711846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44314.92537313433,
            "unit": "ns",
            "range": "± 2097.924929423826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50925.26315789474,
            "unit": "ns",
            "range": "± 9820.527441971832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2282.2916666666665,
            "unit": "ns",
            "range": "± 355.1114848419673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9935.78947368421,
            "unit": "ns",
            "range": "± 1514.6740250019732"
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
          "id": "0ae5af9eb145976d099875f790ea3ac5ac0f6f28",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-21T15:03:56+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/0ae5af9eb145976d099875f790ea3ac5ac0f6f28"
        },
        "date": 1732169813670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067568.085106383,
            "unit": "ns",
            "range": "± 130970.67139702012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839058,
            "unit": "ns",
            "range": "± 74228.88510326334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581613.7931034483,
            "unit": "ns",
            "range": "± 97567.17682491691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6691127.2727272725,
            "unit": "ns",
            "range": "± 208267.37663507106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31013.82978723404,
            "unit": "ns",
            "range": "± 3242.778612857561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9780646.666666666,
            "unit": "ns",
            "range": "± 105736.6733694516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24783440,
            "unit": "ns",
            "range": "± 339830.75997998094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60706978.571428575,
            "unit": "ns",
            "range": "± 544958.0720337348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123141213.33333333,
            "unit": "ns",
            "range": "± 1168723.7048939122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249160700,
            "unit": "ns",
            "range": "± 965597.3177261834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3401840.848214286,
            "unit": "ns",
            "range": "± 5518.474342662932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083773.1026785714,
            "unit": "ns",
            "range": "± 1589.6792696670577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742796.38671875,
            "unit": "ns",
            "range": "± 1282.2550935116276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988407.34375,
            "unit": "ns",
            "range": "± 5782.758296701187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611274.5442708334,
            "unit": "ns",
            "range": "± 808.4534485142767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564340.6901041666,
            "unit": "ns",
            "range": "± 690.5492618180796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2242034.6153846155,
            "unit": "ns",
            "range": "± 57134.01048277772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2356192.8571428573,
            "unit": "ns",
            "range": "± 53959.46229743743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2842116.6666666665,
            "unit": "ns",
            "range": "± 103912.84059112384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2385402.9411764704,
            "unit": "ns",
            "range": "± 75650.52218087367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3000457.1428571427,
            "unit": "ns",
            "range": "± 30921.35717704399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102716.66666666667,
            "unit": "ns",
            "range": "± 4309.3185062954635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179078.94736842104,
            "unit": "ns",
            "range": "± 7762.932454990953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152758.94736842104,
            "unit": "ns",
            "range": "± 9303.745467887813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731321.4285714286,
            "unit": "ns",
            "range": "± 45893.139734880584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535329.411764706,
            "unit": "ns",
            "range": "± 50736.47313208076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12939.78494623656,
            "unit": "ns",
            "range": "± 1473.7662330813937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60028.42105263158,
            "unit": "ns",
            "range": "± 5555.362813628056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48009.09090909091,
            "unit": "ns",
            "range": "± 2250.109554442407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65642.22222222222,
            "unit": "ns",
            "range": "± 11007.77026659792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3066.326530612245,
            "unit": "ns",
            "range": "± 513.9184173594494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12865.555555555555,
            "unit": "ns",
            "range": "± 1728.6034573057054"
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
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "d2342371a25852a07d0c8775c5d9e585d8bf6c2b",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-22T10:25:28+09:00",
          "tree_id": "ddb5a9fc3f3f73b6e5464f3666bb18e019d437fb",
          "url": "https://github.com/planetarium/libplanet/commit/d2342371a25852a07d0c8775c5d9e585d8bf6c2b"
        },
        "date": 1732239331455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016755.1020408163,
            "unit": "ns",
            "range": "± 112640.4379992811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781982.9787234042,
            "unit": "ns",
            "range": "± 69127.73406543337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589105.1020408163,
            "unit": "ns",
            "range": "± 132924.76390913303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811044.897959184,
            "unit": "ns",
            "range": "± 268354.75048682024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31727.551020408162,
            "unit": "ns",
            "range": "± 4362.298188691461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10005100,
            "unit": "ns",
            "range": "± 120254.97316713589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24852542.85714286,
            "unit": "ns",
            "range": "± 194387.32039325594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60913941.666666664,
            "unit": "ns",
            "range": "± 244654.4964874244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128566243.33333333,
            "unit": "ns",
            "range": "± 1054430.8237600217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256015493.33333334,
            "unit": "ns",
            "range": "± 4410785.60276101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3270801.1458333335,
            "unit": "ns",
            "range": "± 5357.342464620529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062091.4620535714,
            "unit": "ns",
            "range": "± 2167.37802100644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744450.1236979166,
            "unit": "ns",
            "range": "± 1073.420116114309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903723.8151041667,
            "unit": "ns",
            "range": "± 12690.993538063814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616076.7447916666,
            "unit": "ns",
            "range": "± 3387.182872180592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566177.3018973215,
            "unit": "ns",
            "range": "± 1412.4255300120253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2231820,
            "unit": "ns",
            "range": "± 38057.23509212332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2328475,
            "unit": "ns",
            "range": "± 99739.21677873937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764813.3333333335,
            "unit": "ns",
            "range": "± 47604.42456426963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2398628.378378378,
            "unit": "ns",
            "range": "± 81428.1930944721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2992906.25,
            "unit": "ns",
            "range": "± 55586.922547783965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96028.7356321839,
            "unit": "ns",
            "range": "± 5411.52749028721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174156,
            "unit": "ns",
            "range": "± 8052.785987604672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158354.02298850575,
            "unit": "ns",
            "range": "± 8637.732322426065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2623331.5789473685,
            "unit": "ns",
            "range": "± 90008.11106172045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2466653.846153846,
            "unit": "ns",
            "range": "± 34942.34812241004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11603,
            "unit": "ns",
            "range": "± 2476.330577954634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54453.06122448979,
            "unit": "ns",
            "range": "± 7120.555464282562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42687.5,
            "unit": "ns",
            "range": "± 1214.628577238804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49908.24742268041,
            "unit": "ns",
            "range": "± 9611.903103521054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2415.151515151515,
            "unit": "ns",
            "range": "± 627.9808323416387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9827.083333333334,
            "unit": "ns",
            "range": "± 1460.4598530792075"
          }
        ]
      }
    ]
  }
}