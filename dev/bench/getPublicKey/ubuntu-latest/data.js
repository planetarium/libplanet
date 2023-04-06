window.BENCHMARK_DATA = {
  "lastUpdate": 1680763642077,
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
          "id": "db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:36:26+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c"
        },
        "date": 1680673851432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3796291.6,
            "unit": "ns",
            "range": "± 40352.02989548003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4044004.6666666665,
            "unit": "ns",
            "range": "± 55349.01182324327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558795.517241379,
            "unit": "ns",
            "range": "± 133449.041866073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5073687.32,
            "unit": "ns",
            "range": "± 133938.0187952995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8475283.555555556,
            "unit": "ns",
            "range": "± 175360.6621019939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8803830.5,
            "unit": "ns",
            "range": "± 23362.166211962976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23081938.2,
            "unit": "ns",
            "range": "± 163792.0162266769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56655673.2,
            "unit": "ns",
            "range": "± 240869.10786542494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113710137.46153846,
            "unit": "ns",
            "range": "± 248699.8463521893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225940012.6,
            "unit": "ns",
            "range": "± 381680.8842776534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548925.819148936,
            "unit": "ns",
            "range": "± 99443.62303637851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2849692.487179487,
            "unit": "ns",
            "range": "± 97558.89285394741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403734.3950617285,
            "unit": "ns",
            "range": "± 123864.6478657933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6066708.181818182,
            "unit": "ns",
            "range": "± 223633.87690673847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59682.30612244898,
            "unit": "ns",
            "range": "± 7443.5091704989745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032811.6296875,
            "unit": "ns",
            "range": "± 57732.24924723503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896427.0954427083,
            "unit": "ns",
            "range": "± 3935.5508032991647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372021.598828125,
            "unit": "ns",
            "range": "± 3035.9233286893436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679712.126201923,
            "unit": "ns",
            "range": "± 4617.761062786534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830450.5520368303,
            "unit": "ns",
            "range": "± 510.37630975911685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775099.6314871652,
            "unit": "ns",
            "range": "± 639.9198327400655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361318.14545454545,
            "unit": "ns",
            "range": "± 15168.62532580812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301790.7291666667,
            "unit": "ns",
            "range": "± 11895.6950763972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253129.68333333332,
            "unit": "ns",
            "range": "± 11340.185697059165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5924580.857142857,
            "unit": "ns",
            "range": "± 58537.502327544295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4241036.714285715,
            "unit": "ns",
            "range": "± 50426.910511732145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25496.22680412371,
            "unit": "ns",
            "range": "± 2217.6396353309347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110181.85714285714,
            "unit": "ns",
            "range": "± 9284.291751102375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103243.19,
            "unit": "ns",
            "range": "± 9854.974859876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219099.43298969071,
            "unit": "ns",
            "range": "± 18154.979118405332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7785.639175257732,
            "unit": "ns",
            "range": "± 1107.0738569306532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25422.683673469386,
            "unit": "ns",
            "range": "± 2693.1861275193464"
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
          "id": "630fdad82a887960678a5793dfc61d56289ee410",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:21:35+09:00",
          "tree_id": "0e4718ba6facc794d72d1d3aaec75ab0cdff5b0f",
          "url": "https://github.com/planetarium/libplanet/commit/630fdad82a887960678a5793dfc61d56289ee410"
        },
        "date": 1680680299834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274301.3061224488,
            "unit": "ns",
            "range": "± 271003.5326145684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426974.618556701,
            "unit": "ns",
            "range": "± 325984.9641379646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4416272.62886598,
            "unit": "ns",
            "range": "± 418749.45370606956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4446706.421052632,
            "unit": "ns",
            "range": "± 375301.7499523402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8284120.1875,
            "unit": "ns",
            "range": "± 587990.4962520059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7653631.918367347,
            "unit": "ns",
            "range": "± 529190.0676960577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19661773.739583332,
            "unit": "ns",
            "range": "± 1460460.6860516754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52736075.8989899,
            "unit": "ns",
            "range": "± 3357873.571424601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103290966.8,
            "unit": "ns",
            "range": "± 3661063.027117987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199465275.06944445,
            "unit": "ns",
            "range": "± 9792248.386680502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505716.0206185568,
            "unit": "ns",
            "range": "± 204860.272840314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008845.707070707,
            "unit": "ns",
            "range": "± 390033.4932728176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2326975.9897959186,
            "unit": "ns",
            "range": "± 265187.27381406905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5884148.574468086,
            "unit": "ns",
            "range": "± 492780.3283191101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65984.14432989691,
            "unit": "ns",
            "range": "± 17449.874785241827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5846760.076450893,
            "unit": "ns",
            "range": "± 93776.76096521848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829301.6731085526,
            "unit": "ns",
            "range": "± 38399.27626984305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375911.7778108015,
            "unit": "ns",
            "range": "± 52333.50559191048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623063.846028646,
            "unit": "ns",
            "range": "± 77600.84929405365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830684.1865931919,
            "unit": "ns",
            "range": "± 9919.920726530298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765987.5835658482,
            "unit": "ns",
            "range": "± 12222.537928823655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398749.3092783505,
            "unit": "ns",
            "range": "± 68858.37289780029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308150.3917525773,
            "unit": "ns",
            "range": "± 57341.29671129203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250011.05319148937,
            "unit": "ns",
            "range": "± 35224.0807709503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5262416.739583333,
            "unit": "ns",
            "range": "± 305069.1833740166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859182.9411764704,
            "unit": "ns",
            "range": "± 208500.189655695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24141.19,
            "unit": "ns",
            "range": "± 10369.886354437034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87292.4255319149,
            "unit": "ns",
            "range": "± 15627.684733128282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79244.5625,
            "unit": "ns",
            "range": "± 15634.105714456118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 209847.08333333334,
            "unit": "ns",
            "range": "± 41989.351196819225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4385.941176470588,
            "unit": "ns",
            "range": "± 381.7784932747926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23256.22,
            "unit": "ns",
            "range": "± 10933.747198911129"
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
          "id": "a5d51a6bcad69927aab3783ce460ee9d0b62fa41",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:39:45+09:00",
          "tree_id": "231eef32ef7a06676c1bab568527df42b407cb29",
          "url": "https://github.com/planetarium/libplanet/commit/a5d51a6bcad69927aab3783ce460ee9d0b62fa41"
        },
        "date": 1680681212545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3466498.029411765,
            "unit": "ns",
            "range": "± 111487.18014804547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3721592.5,
            "unit": "ns",
            "range": "± 72238.72671635347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277798.310344827,
            "unit": "ns",
            "range": "± 123492.08630865594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4648965.315789473,
            "unit": "ns",
            "range": "± 200089.27676612593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7806543.368421053,
            "unit": "ns",
            "range": "± 263506.6648255452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7710653.714285715,
            "unit": "ns",
            "range": "± 55453.17443840977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21361012.2,
            "unit": "ns",
            "range": "± 159972.23462133313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53778621.54545455,
            "unit": "ns",
            "range": "± 1305806.856280592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108254932.4,
            "unit": "ns",
            "range": "± 1426847.656488136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214041160.86666667,
            "unit": "ns",
            "range": "± 3087041.8792684013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424080.0202020202,
            "unit": "ns",
            "range": "± 96091.94079014075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679643.276595745,
            "unit": "ns",
            "range": "± 100251.80497208497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274181.05,
            "unit": "ns",
            "range": "± 149735.70273742403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5465533.909090909,
            "unit": "ns",
            "range": "± 169385.9299341233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47768.38202247191,
            "unit": "ns",
            "range": "± 2659.8652542153764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926461.4203125,
            "unit": "ns",
            "range": "± 25501.488232690983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826743.408482143,
            "unit": "ns",
            "range": "± 5260.478741995268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361287.7231770833,
            "unit": "ns",
            "range": "± 5638.0465520614525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595218.359933036,
            "unit": "ns",
            "range": "± 4482.41090293897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832733.6965494792,
            "unit": "ns",
            "range": "± 2294.6195313391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751478.5130859375,
            "unit": "ns",
            "range": "± 1207.6381561992714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343702.84,
            "unit": "ns",
            "range": "± 8872.767727152559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276740.3043478261,
            "unit": "ns",
            "range": "± 6747.25110649301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238590.64285714287,
            "unit": "ns",
            "range": "± 4041.7429143519616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5702812.857142857,
            "unit": "ns",
            "range": "± 52093.84468711936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044660.933333333,
            "unit": "ns",
            "range": "± 63507.24637333766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19193.847826086956,
            "unit": "ns",
            "range": "± 1600.0293674144325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88632.91666666667,
            "unit": "ns",
            "range": "± 6162.494429448391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75786.04444444444,
            "unit": "ns",
            "range": "± 2741.5538142012856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 187760.5918367347,
            "unit": "ns",
            "range": "± 17235.15318038319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6353.773195876289,
            "unit": "ns",
            "range": "± 902.021658844207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19485.279569892475,
            "unit": "ns",
            "range": "± 1485.7909573076574"
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
          "id": "8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:41:41+09:00",
          "tree_id": "083841b01eeb4aa37dbed492698016aad0322a24",
          "url": "https://github.com/planetarium/libplanet/commit/8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1"
        },
        "date": 1680681233526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142576.4285714286,
            "unit": "ns",
            "range": "± 70466.0562856837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3365809.0625,
            "unit": "ns",
            "range": "± 63803.98777554974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4291054.72,
            "unit": "ns",
            "range": "± 113691.36897778712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215994.7894736845,
            "unit": "ns",
            "range": "± 97779.66714331352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7398548,
            "unit": "ns",
            "range": "± 139344.850388819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7564297.857142857,
            "unit": "ns",
            "range": "± 12513.172498532176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19070749,
            "unit": "ns",
            "range": "± 110544.68865228564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48827162.8,
            "unit": "ns",
            "range": "± 408277.97322835965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97723747.64285715,
            "unit": "ns",
            "range": "± 626534.0189853538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193902389.93333334,
            "unit": "ns",
            "range": "± 2383069.8925410258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294603.607142857,
            "unit": "ns",
            "range": "± 64984.540435698895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580036.875,
            "unit": "ns",
            "range": "± 78722.01815361074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139245.132352941,
            "unit": "ns",
            "range": "± 93083.80950742755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5421358.518518519,
            "unit": "ns",
            "range": "± 145344.87182172833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44227.328571428574,
            "unit": "ns",
            "range": "± 1853.5767751810777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988305.935267857,
            "unit": "ns",
            "range": "± 23296.185708410063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865137.6844308036,
            "unit": "ns",
            "range": "± 8431.602298388567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342211.2218191964,
            "unit": "ns",
            "range": "± 3651.1820032685055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539731.7203125,
            "unit": "ns",
            "range": "± 4013.007447520574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801633.5277994792,
            "unit": "ns",
            "range": "± 961.0076811272025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740520.2415597098,
            "unit": "ns",
            "range": "± 622.2588261679557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317370.9166666667,
            "unit": "ns",
            "range": "± 10613.260488316357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259485.89130434784,
            "unit": "ns",
            "range": "± 9885.242316432581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235684.0243902439,
            "unit": "ns",
            "range": "± 7731.230802685317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5471795.866666666,
            "unit": "ns",
            "range": "± 38479.81174194123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952245.9285714286,
            "unit": "ns",
            "range": "± 49521.48320828397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16904.42391304348,
            "unit": "ns",
            "range": "± 1443.0980352013864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84557.68,
            "unit": "ns",
            "range": "± 4050.4105603046005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72762,
            "unit": "ns",
            "range": "± 1046.72640487697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 199750.9,
            "unit": "ns",
            "range": "± 4519.769450338205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5134.546391752578,
            "unit": "ns",
            "range": "± 521.2848313825689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16977.97894736842,
            "unit": "ns",
            "range": "± 1450.8689251100336"
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
          "id": "d7b24c2de86a7795beb0516b034132901f049711",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:25:50+09:00",
          "tree_id": "dbf942dc4382f805b444e2a8793372e571b21e92",
          "url": "https://github.com/planetarium/libplanet/commit/d7b24c2de86a7795beb0516b034132901f049711"
        },
        "date": 1680684029386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3703906.909090909,
            "unit": "ns",
            "range": "± 88647.59483316864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3883281.2,
            "unit": "ns",
            "range": "± 61240.96564532134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4378702.105263158,
            "unit": "ns",
            "range": "± 79975.42293375352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5010219.72,
            "unit": "ns",
            "range": "± 115152.2429773298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8141426.4375,
            "unit": "ns",
            "range": "± 252583.91074726646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8287762.933333334,
            "unit": "ns",
            "range": "± 98793.86530944597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21993743.333333332,
            "unit": "ns",
            "range": "± 151855.59806025622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55972713.06666667,
            "unit": "ns",
            "range": "± 284637.1336126218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111508990.66666667,
            "unit": "ns",
            "range": "± 376046.75750338484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223745036.23076922,
            "unit": "ns",
            "range": "± 622642.5947840052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507184.042105263,
            "unit": "ns",
            "range": "± 91131.43571459007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2782661.470588235,
            "unit": "ns",
            "range": "± 55162.15897143354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358615.2533333334,
            "unit": "ns",
            "range": "± 111788.637711325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5873011.5,
            "unit": "ns",
            "range": "± 157881.10967996097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51420.01052631579,
            "unit": "ns",
            "range": "± 3479.301829863611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079503.248958333,
            "unit": "ns",
            "range": "± 15176.129599518745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860576.2736002605,
            "unit": "ns",
            "range": "± 1517.1968169418699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368921.433203125,
            "unit": "ns",
            "range": "± 2904.41127748286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615216.0453125,
            "unit": "ns",
            "range": "± 2318.801414838211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842998.8395182291,
            "unit": "ns",
            "range": "± 324.45507958849686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753744.1997070312,
            "unit": "ns",
            "range": "± 1156.7080817852932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357446.93023255817,
            "unit": "ns",
            "range": "± 13017.369583597487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296184.04,
            "unit": "ns",
            "range": "± 11037.10892336043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245798.24137931035,
            "unit": "ns",
            "range": "± 7126.836804116698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5878233.785714285,
            "unit": "ns",
            "range": "± 25553.686996290682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4216541.714285715,
            "unit": "ns",
            "range": "± 48985.92190569194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23103.712765957447,
            "unit": "ns",
            "range": "± 2146.79093654031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95717.60240963855,
            "unit": "ns",
            "range": "± 4997.121366321837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88090.73737373737,
            "unit": "ns",
            "range": "± 5552.910671920055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218747.39795918367,
            "unit": "ns",
            "range": "± 19107.78841785305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8389.886597938144,
            "unit": "ns",
            "range": "± 1167.6458588070902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22918.574468085106,
            "unit": "ns",
            "range": "± 2161.1153407211405"
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
          "id": "80d4528f5fe2a2608955fb3c31b4149d8ad13d80",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:41:58+09:00",
          "tree_id": "574200cd6e8e2d3d35e7eec95a0ed9e105c50d2c",
          "url": "https://github.com/planetarium/libplanet/commit/80d4528f5fe2a2608955fb3c31b4149d8ad13d80"
        },
        "date": 1680684860602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7558514,
            "unit": "ns",
            "range": "± 10950.285286564129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18945776.8,
            "unit": "ns",
            "range": "± 77190.65922506427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49311657.333333336,
            "unit": "ns",
            "range": "± 279117.6312869506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96783411.5,
            "unit": "ns",
            "range": "± 512412.9923229369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196695807.4,
            "unit": "ns",
            "range": "± 1506364.8526756533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46050.643835616436,
            "unit": "ns",
            "range": "± 2285.526844016149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349594.092783505,
            "unit": "ns",
            "range": "± 80676.72961554684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606746.285714286,
            "unit": "ns",
            "range": "± 83152.8589135948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146969.652777778,
            "unit": "ns",
            "range": "± 102236.8664787061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5427292.095238095,
            "unit": "ns",
            "range": "± 124907.52095086378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956226.308333334,
            "unit": "ns",
            "range": "± 12822.096085196217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872053.0518229166,
            "unit": "ns",
            "range": "± 11362.45226457294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376131.793247768,
            "unit": "ns",
            "range": "± 767.9242754082359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658200.6863839286,
            "unit": "ns",
            "range": "± 2935.078746645941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799491.6281901042,
            "unit": "ns",
            "range": "± 555.3795713836471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745343.8801432292,
            "unit": "ns",
            "range": "± 788.9017431668066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320701.85714285716,
            "unit": "ns",
            "range": "± 6370.287036591949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263566.36363636365,
            "unit": "ns",
            "range": "± 6890.0101452128765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230438.07692307694,
            "unit": "ns",
            "range": "± 2003.3878997645654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5543319.933333334,
            "unit": "ns",
            "range": "± 21053.616796396855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3984495.2,
            "unit": "ns",
            "range": "± 34054.1052721359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17492.76288659794,
            "unit": "ns",
            "range": "± 1145.1897656902022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83099.89090909091,
            "unit": "ns",
            "range": "± 3502.9611953355884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72610.94444444444,
            "unit": "ns",
            "range": "± 1547.6195562377964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177292.68367346938,
            "unit": "ns",
            "range": "± 15645.921628991864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5447.368421052632,
            "unit": "ns",
            "range": "± 436.8265893978149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16215.604166666666,
            "unit": "ns",
            "range": "± 1007.0615251070202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3170963.55,
            "unit": "ns",
            "range": "± 105963.38952723249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3383075.6,
            "unit": "ns",
            "range": "± 48852.04496640852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218927.5,
            "unit": "ns",
            "range": "± 77682.70639399513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4308776.15625,
            "unit": "ns",
            "range": "± 133526.53497848994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7551220.25,
            "unit": "ns",
            "range": "± 167576.1796135763"
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
          "id": "bb27b41239cb562d032dc82d863282a12dd23127",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:49:40+09:00",
          "tree_id": "dcd6247b6f696bc0505218279a7ac03daacd50b4",
          "url": "https://github.com/planetarium/libplanet/commit/bb27b41239cb562d032dc82d863282a12dd23127"
        },
        "date": 1680685313048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228026.48,
            "unit": "ns",
            "range": "± 85466.13362424128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338287.0555555555,
            "unit": "ns",
            "range": "± 97320.60849141708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269875.125,
            "unit": "ns",
            "range": "± 80090.44454271682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4319354.928571428,
            "unit": "ns",
            "range": "± 66235.18988651122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7117991.933333334,
            "unit": "ns",
            "range": "± 87021.3080330384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7496233.461538462,
            "unit": "ns",
            "range": "± 22443.60414318292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19152882.733333334,
            "unit": "ns",
            "range": "± 83605.79423569249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48846081.4,
            "unit": "ns",
            "range": "± 506041.7684000007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97290344.42857143,
            "unit": "ns",
            "range": "± 564811.5595900738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198909159.33333334,
            "unit": "ns",
            "range": "± 1945318.262658422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347109.2323232323,
            "unit": "ns",
            "range": "± 102085.06088110314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2554011.28,
            "unit": "ns",
            "range": "± 65209.67643144178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242480.0222222223,
            "unit": "ns",
            "range": "± 121232.34206915468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5434014.310344827,
            "unit": "ns",
            "range": "± 149877.5783660269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46145.97590361446,
            "unit": "ns",
            "range": "± 2322.2706821909237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5864234.92578125,
            "unit": "ns",
            "range": "± 16708.55773970086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852712.8666294643,
            "unit": "ns",
            "range": "± 2100.965114532995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345979.8833705357,
            "unit": "ns",
            "range": "± 418.694291637887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605729.1981770834,
            "unit": "ns",
            "range": "± 7772.18490062256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794304.3252704327,
            "unit": "ns",
            "range": "± 682.0789627842971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743298.7485351562,
            "unit": "ns",
            "range": "± 433.14549705805257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324080.0714285714,
            "unit": "ns",
            "range": "± 5402.818174367404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267026.15,
            "unit": "ns",
            "range": "± 4583.542370320833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236087.66666666666,
            "unit": "ns",
            "range": "± 3606.317208666455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5598466.8,
            "unit": "ns",
            "range": "± 41947.70625127025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4038732.3571428573,
            "unit": "ns",
            "range": "± 33873.36679822738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18856.81443298969,
            "unit": "ns",
            "range": "± 1688.2279499639608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86725.86666666667,
            "unit": "ns",
            "range": "± 3166.6996197647454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74665.35,
            "unit": "ns",
            "range": "± 1716.9969890848135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 205675.91666666666,
            "unit": "ns",
            "range": "± 2213.363358344175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5533.683673469388,
            "unit": "ns",
            "range": "± 599.8127817350662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18240.084210526315,
            "unit": "ns",
            "range": "± 1435.8560621214856"
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
          "id": "303361afc30ae49df7b6f27b0a2b80bab0d9d867",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:51:00+09:00",
          "tree_id": "dcd6247b6f696bc0505218279a7ac03daacd50b4",
          "url": "https://github.com/planetarium/libplanet/commit/303361afc30ae49df7b6f27b0a2b80bab0d9d867"
        },
        "date": 1680685436588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372667.25,
            "unit": "ns",
            "range": "± 66864.09871946073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507089.066666667,
            "unit": "ns",
            "range": "± 36574.825550734575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4385685.434782608,
            "unit": "ns",
            "range": "± 92188.46740821272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4355260.195121951,
            "unit": "ns",
            "range": "± 144448.33734647476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7308939.55,
            "unit": "ns",
            "range": "± 162986.91583504004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7459529.615384615,
            "unit": "ns",
            "range": "± 20183.3709545691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19374152.8,
            "unit": "ns",
            "range": "± 144448.5572895367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49002492.6,
            "unit": "ns",
            "range": "± 418288.14384375885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100073133.06666666,
            "unit": "ns",
            "range": "± 942236.0866100437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200853707,
            "unit": "ns",
            "range": "± 2995758.7106575235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337317.0957446808,
            "unit": "ns",
            "range": "± 86807.34915955568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2622988.511627907,
            "unit": "ns",
            "range": "± 96149.69199004032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2164700.2837837837,
            "unit": "ns",
            "range": "± 108295.72726586055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5436604.615384615,
            "unit": "ns",
            "range": "± 146422.33811357527"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45571.87356321839,
            "unit": "ns",
            "range": "± 2506.585692264492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900294.702083333,
            "unit": "ns",
            "range": "± 16902.48810740411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803268.5069754464,
            "unit": "ns",
            "range": "± 1026.0839005829878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360917.6039341518,
            "unit": "ns",
            "range": "± 666.3031007619369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537908.780691964,
            "unit": "ns",
            "range": "± 1252.2395689425828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800687.2348958333,
            "unit": "ns",
            "range": "± 462.75311133059637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730582.1102864583,
            "unit": "ns",
            "range": "± 347.98383338386395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326928.2,
            "unit": "ns",
            "range": "± 8418.133512444034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267958.44444444444,
            "unit": "ns",
            "range": "± 8283.70006508287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251307.96078431373,
            "unit": "ns",
            "range": "± 10234.871737273084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5518103.5,
            "unit": "ns",
            "range": "± 36751.59149196545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793135.466666667,
            "unit": "ns",
            "range": "± 27965.40490592584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16948.96875,
            "unit": "ns",
            "range": "± 1429.602443472163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83444.98876404495,
            "unit": "ns",
            "range": "± 4600.10210977179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73850,
            "unit": "ns",
            "range": "± 990.691974447807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 187570.5,
            "unit": "ns",
            "range": "± 16635.635868442863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5223.19587628866,
            "unit": "ns",
            "range": "± 555.7493934464986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17048.979166666668,
            "unit": "ns",
            "range": "± 1876.1088004538415"
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
          "id": "af95fc43a57f1137dc8b6850e5b1fdad84146abf",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T14:40:52+09:00",
          "tree_id": "d6bb9fe70e708ed431559ee03f94d91a0d531451",
          "url": "https://github.com/planetarium/libplanet/commit/af95fc43a57f1137dc8b6850e5b1fdad84146abf"
        },
        "date": 1680760520248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7661515.75,
            "unit": "ns",
            "range": "± 31400.095304212635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20754518.666666668,
            "unit": "ns",
            "range": "± 128862.86811062746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51476071.666666664,
            "unit": "ns",
            "range": "± 691251.0719292817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102245749,
            "unit": "ns",
            "range": "± 1195707.8082934166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205425561.46153846,
            "unit": "ns",
            "range": "± 2263981.920102301"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48218.931818181816,
            "unit": "ns",
            "range": "± 2352.8870199461635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411843.92,
            "unit": "ns",
            "range": "± 100417.53617203629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612648.6363636362,
            "unit": "ns",
            "range": "± 63087.844472189616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255540.405063291,
            "unit": "ns",
            "range": "± 112557.5892966339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5512096.612903226,
            "unit": "ns",
            "range": "± 165986.90909138534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5830636.89921875,
            "unit": "ns",
            "range": "± 26336.941960832104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831170.7387319712,
            "unit": "ns",
            "range": "± 2951.1094645988833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327359.6987680288,
            "unit": "ns",
            "range": "± 3350.8110038438163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578544.314583333,
            "unit": "ns",
            "range": "± 6846.93926278881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828947.2836216518,
            "unit": "ns",
            "range": "± 1552.9433373979177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754726.1910807291,
            "unit": "ns",
            "range": "± 1128.7489664287973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335543.1923076923,
            "unit": "ns",
            "range": "± 9080.283876704432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280252.04,
            "unit": "ns",
            "range": "± 6996.17307580842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231381.92307692306,
            "unit": "ns",
            "range": "± 1355.9460695727334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5602792.615384615,
            "unit": "ns",
            "range": "± 46750.314124681674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3931031.1428571427,
            "unit": "ns",
            "range": "± 57909.37150391137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19821.305263157894,
            "unit": "ns",
            "range": "± 1477.9158058655858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90634.95698924731,
            "unit": "ns",
            "range": "± 5925.132196129317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77206.28571428571,
            "unit": "ns",
            "range": "± 1465.019185637415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185823.96511627908,
            "unit": "ns",
            "range": "± 11199.98393113099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6332.695652173913,
            "unit": "ns",
            "range": "± 481.55037482839964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17275.270833333332,
            "unit": "ns",
            "range": "± 1158.5549936216296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276129.592592593,
            "unit": "ns",
            "range": "± 90000.52155800126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519851.285714286,
            "unit": "ns",
            "range": "± 62111.11284337816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4160070.1428571427,
            "unit": "ns",
            "range": "± 50718.35894708852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4415068.257142857,
            "unit": "ns",
            "range": "± 143083.1319431722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066691.705882353,
            "unit": "ns",
            "range": "± 140069.29647890572"
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
          "id": "0cc4ee4104a7e6ded02f128b400e42d155ebfe23",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T15:29:42+09:00",
          "tree_id": "1987539eef3df45e2448390a3661fb6a915bd517",
          "url": "https://github.com/planetarium/libplanet/commit/0cc4ee4104a7e6ded02f128b400e42d155ebfe23"
        },
        "date": 1680763618432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4007429.125,
            "unit": "ns",
            "range": "± 184711.41286182805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4316610.275862069,
            "unit": "ns",
            "range": "± 189138.11635831548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5247935.70212766,
            "unit": "ns",
            "range": "± 184588.64894536327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5267146.483516484,
            "unit": "ns",
            "range": "± 293687.0734504996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9314205.11764706,
            "unit": "ns",
            "range": "± 300677.0328413675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9578780.774193548,
            "unit": "ns",
            "range": "± 286217.9285348503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26741149.47368421,
            "unit": "ns",
            "range": "± 778708.7835245666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64161867.291666664,
            "unit": "ns",
            "range": "± 1630326.7796421372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129014194.3,
            "unit": "ns",
            "range": "± 2904510.1451430055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258202146.53846154,
            "unit": "ns",
            "range": "± 3910493.02586214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1726031.547368421,
            "unit": "ns",
            "range": "± 126146.6633071481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3399428.453333333,
            "unit": "ns",
            "range": "± 170182.53169086017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2786576.506024096,
            "unit": "ns",
            "range": "± 147208.86266527648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7208933.730769231,
            "unit": "ns",
            "range": "± 194532.05765684127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64188.510416666664,
            "unit": "ns",
            "range": "± 9808.259428176676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7279243.139583333,
            "unit": "ns",
            "range": "± 61563.21870351334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2255941.65625,
            "unit": "ns",
            "range": "± 7196.510366411523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1632107.8184895834,
            "unit": "ns",
            "range": "± 17781.627223688913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3122201.3984375,
            "unit": "ns",
            "range": "± 26129.681033940757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013653.9013671875,
            "unit": "ns",
            "range": "± 3773.4137802320174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933587.8388020833,
            "unit": "ns",
            "range": "± 10145.53368558171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 436905.4895833333,
            "unit": "ns",
            "range": "± 31197.471917480678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356855.9638554217,
            "unit": "ns",
            "range": "± 18969.074905407764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302099.8764044944,
            "unit": "ns",
            "range": "± 16619.242549075607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6834667.944444444,
            "unit": "ns",
            "range": "± 145261.08244385844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5034624.407407408,
            "unit": "ns",
            "range": "± 139823.86866347227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24402.061855670105,
            "unit": "ns",
            "range": "± 5347.117201926102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110743.71875,
            "unit": "ns",
            "range": "± 11952.045108157608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102812.6105263158,
            "unit": "ns",
            "range": "± 10786.664094281734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235836.13186813187,
            "unit": "ns",
            "range": "± 18222.292760492142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10782.99,
            "unit": "ns",
            "range": "± 5100.016307153571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24697.0206185567,
            "unit": "ns",
            "range": "± 7813.985426756978"
          }
        ]
      }
    ]
  }
}