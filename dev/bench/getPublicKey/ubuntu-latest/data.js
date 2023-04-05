window.BENCHMARK_DATA = {
  "lastUpdate": 1680680323671,
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
      }
    ]
  }
}