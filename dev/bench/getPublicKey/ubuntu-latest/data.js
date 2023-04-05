window.BENCHMARK_DATA = {
  "lastUpdate": 1680672696752,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d841327d8540052291f6b101b94eea9432e91493",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:13:01+09:00",
          "tree_id": "b9a03bf1c8c3bfbc6943ae8a7f1ad710ef3fd7f4",
          "url": "https://github.com/planetarium/libplanet/commit/d841327d8540052291f6b101b94eea9432e91493"
        },
        "date": 1680672616050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4318446.25,
            "unit": "ns",
            "range": "± 45907.47822052723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4445607.259259259,
            "unit": "ns",
            "range": "± 119024.90420741386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5348867.105263158,
            "unit": "ns",
            "range": "± 115835.98663095196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5713733.628571428,
            "unit": "ns",
            "range": "± 185836.12353425892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9760611.169811321,
            "unit": "ns",
            "range": "± 407263.1632228694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10320613.266666668,
            "unit": "ns",
            "range": "± 107904.09446982252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28650180.4,
            "unit": "ns",
            "range": "± 342203.80862304015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66792716.7037037,
            "unit": "ns",
            "range": "± 1638258.2013723697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142953031.06666666,
            "unit": "ns",
            "range": "± 571342.298134523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261084689.4,
            "unit": "ns",
            "range": "± 1481416.0867343785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1806697,
            "unit": "ns",
            "range": "± 97129.9859342893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3430448.58,
            "unit": "ns",
            "range": "± 130410.70235114123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2811612.906976744,
            "unit": "ns",
            "range": "± 152607.27208080285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7171382.527777778,
            "unit": "ns",
            "range": "± 239606.31059940043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67953.09090909091,
            "unit": "ns",
            "range": "± 8113.524378381445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7095753.344010416,
            "unit": "ns",
            "range": "± 82271.76260144763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2216891.9514508927,
            "unit": "ns",
            "range": "± 3083.2107068139994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1660792.8809895834,
            "unit": "ns",
            "range": "± 3099.95525794289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3096535.089583333,
            "unit": "ns",
            "range": "± 10545.509111685722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005394.7990885417,
            "unit": "ns",
            "range": "± 983.066590646308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907631.4013671875,
            "unit": "ns",
            "range": "± 644.6432975695961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408626.8823529412,
            "unit": "ns",
            "range": "± 13208.186785761245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339570.3333333333,
            "unit": "ns",
            "range": "± 13648.432193723449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303805.85,
            "unit": "ns",
            "range": "± 21019.031229958237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7021351.466666667,
            "unit": "ns",
            "range": "± 82322.64834163775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4939354.357142857,
            "unit": "ns",
            "range": "± 41545.01071517705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31954.602150537634,
            "unit": "ns",
            "range": "± 2012.7015380576609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125433.0808080808,
            "unit": "ns",
            "range": "± 11292.037402864426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117799.66,
            "unit": "ns",
            "range": "± 14092.310146209866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 288325.6923076923,
            "unit": "ns",
            "range": "± 3486.8068578719076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12197.19387755102,
            "unit": "ns",
            "range": "± 1284.7578026649696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29583.757894736842,
            "unit": "ns",
            "range": "± 2397.2346555881777"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:17:10+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e"
        },
        "date": 1680672675905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549537,
            "unit": "ns",
            "range": "± 83516.87089444863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3972210.125,
            "unit": "ns",
            "range": "± 76754.58954084331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297027.3,
            "unit": "ns",
            "range": "± 127347.93792223267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4618326.75862069,
            "unit": "ns",
            "range": "± 130513.96287115225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7665654.25,
            "unit": "ns",
            "range": "± 170418.39715546992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7726776.285714285,
            "unit": "ns",
            "range": "± 91667.58030508393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22053046.8125,
            "unit": "ns",
            "range": "± 401216.79248110886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54456780.333333336,
            "unit": "ns",
            "range": "± 638152.300496706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112111477,
            "unit": "ns",
            "range": "± 305627.2139088963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223572701.07142857,
            "unit": "ns",
            "range": "± 1035422.3189856446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498828.255319149,
            "unit": "ns",
            "range": "± 117243.7749208782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2715297.210526316,
            "unit": "ns",
            "range": "± 93675.14208910463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358668.8378378376,
            "unit": "ns",
            "range": "± 118265.07926942542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6017260.99,
            "unit": "ns",
            "range": "± 362460.09974684776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49660.01075268817,
            "unit": "ns",
            "range": "± 3033.7600199387507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926734.825334822,
            "unit": "ns",
            "range": "± 25901.94649861077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861471.0541666667,
            "unit": "ns",
            "range": "± 2610.636557567981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362568.98359375,
            "unit": "ns",
            "range": "± 5650.93664273919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612838.603645833,
            "unit": "ns",
            "range": "± 3493.371833693832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810082.8220052083,
            "unit": "ns",
            "range": "± 736.9059298186888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765391.9602864584,
            "unit": "ns",
            "range": "± 663.0280580519802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334131.36363636365,
            "unit": "ns",
            "range": "± 9962.04099575666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269521.6842105263,
            "unit": "ns",
            "range": "± 2889.3341034576647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233283.42105263157,
            "unit": "ns",
            "range": "± 5033.5594575673285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5681554.466666667,
            "unit": "ns",
            "range": "± 58687.27104122892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047081.285714286,
            "unit": "ns",
            "range": "± 67207.33962256546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20998.520833333332,
            "unit": "ns",
            "range": "± 2026.3538631020922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91876.81428571428,
            "unit": "ns",
            "range": "± 4446.159284742305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78303.53932584269,
            "unit": "ns",
            "range": "± 4175.847499871841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 204302.72448979592,
            "unit": "ns",
            "range": "± 17600.657771524387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7203.762886597938,
            "unit": "ns",
            "range": "± 835.8506242793909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19539.0625,
            "unit": "ns",
            "range": "± 1673.502993644422"
          }
        ]
      }
    ]
  }
}