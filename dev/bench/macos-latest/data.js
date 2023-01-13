window.BENCHMARK_DATA = {
  "lastUpdate": 1673605791483,
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
          "id": "22b56dc3b389fb8531c06779a818dfce5c4894de",
          "message": "Merge pull request #2679 from riemannulus/fix/ci/benchmark/cache-problem\n\nFix benchmark problem",
          "timestamp": "2022-12-28T22:28:36+09:00",
          "tree_id": "2466dfb37280997af5192c08b774f5a7a134dd1b",
          "url": "https://github.com/planetarium/libplanet/commit/22b56dc3b389fb8531c06779a818dfce5c4894de"
        },
        "date": 1672235627589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 180350.9301075269,
            "unit": "ns",
            "range": "± 30774.805146629224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144975.28494623656,
            "unit": "ns",
            "range": "± 17829.95944595931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298754.56593406596,
            "unit": "ns",
            "range": "± 44382.67903455687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282410.73076923075,
            "unit": "ns",
            "range": "± 44000.48481275252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4398849.82967033,
            "unit": "ns",
            "range": "± 622271.6675162072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12821951.833333334,
            "unit": "ns",
            "range": "± 2649302.430083264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35531.441860465115,
            "unit": "ns",
            "range": "± 4456.512183059359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80893.39247311828,
            "unit": "ns",
            "range": "± 13778.748985983711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72091.64814814815,
            "unit": "ns",
            "range": "± 3047.500498598609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161013.46315789473,
            "unit": "ns",
            "range": "± 34118.8836694144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10356.308510638299,
            "unit": "ns",
            "range": "± 1142.9284521825984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33745.686046511626,
            "unit": "ns",
            "range": "± 3402.7790286647555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 8128581.708125,
            "unit": "ns",
            "range": "± 2455166.570485953"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 10613165.395604396,
            "unit": "ns",
            "range": "± 3653120.456406641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 41912106.584269665,
            "unit": "ns",
            "range": "± 10920183.009968301"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10072925.085106382,
            "unit": "ns",
            "range": "± 2222295.773466064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41462711.8045977,
            "unit": "ns",
            "range": "± 7673838.89187207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7887521.347301137,
            "unit": "ns",
            "range": "± 489035.9609600104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2349963.527889785,
            "unit": "ns",
            "range": "± 141425.26902468994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465352.5513980263,
            "unit": "ns",
            "range": "± 30923.380379213195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340701.988237847,
            "unit": "ns",
            "range": "± 197893.94530674492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008800.2906971807,
            "unit": "ns",
            "range": "± 59175.28836584513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901089.3865327381,
            "unit": "ns",
            "range": "± 18691.761589735343"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "892107b8521ea96557f73b801872329249df8b9b",
          "message": "Merge pull request #2682 from greymistcube/fix/relax-benchmark-threshold\n\n🔧 Relax benchmark alert threshold to 150%",
          "timestamp": "2022-12-29T00:28:05+09:00",
          "tree_id": "69481e12323d163c1f0d3e0fdf112d3578b22a92",
          "url": "https://github.com/planetarium/libplanet/commit/892107b8521ea96557f73b801872329249df8b9b"
        },
        "date": 1672242594432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156507.8956043956,
            "unit": "ns",
            "range": "± 12939.120516118826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133553.20833333334,
            "unit": "ns",
            "range": "± 20222.581194463448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284454.85164835164,
            "unit": "ns",
            "range": "± 39128.48776910746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245207.9,
            "unit": "ns",
            "range": "± 22794.401509108044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714686.619402985,
            "unit": "ns",
            "range": "± 175825.65175346567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11482052.7,
            "unit": "ns",
            "range": "± 458883.40969033807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28278.159574468085,
            "unit": "ns",
            "range": "± 4204.774711219573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77954.59574468085,
            "unit": "ns",
            "range": "± 11356.744235971506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62685.04255319149,
            "unit": "ns",
            "range": "± 7055.68590611123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128953.55434782608,
            "unit": "ns",
            "range": "± 18066.15449899699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9942.938775510203,
            "unit": "ns",
            "range": "± 1618.0935267039947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34419.541666666664,
            "unit": "ns",
            "range": "± 6603.564069447517"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5600606.223845108,
            "unit": "ns",
            "range": "± 744322.1216383697"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6836033.237113402,
            "unit": "ns",
            "range": "± 732960.2266688795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29996330.659574468,
            "unit": "ns",
            "range": "± 2978893.7673997614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7710408.14893617,
            "unit": "ns",
            "range": "± 566701.2709215322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31730438.95,
            "unit": "ns",
            "range": "± 705168.4708928167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8041128.238867188,
            "unit": "ns",
            "range": "± 418914.4194293964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206988.073486328,
            "unit": "ns",
            "range": "± 64983.33577760522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445878.79296875,
            "unit": "ns",
            "range": "± 21154.501707881343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911276.9326891447,
            "unit": "ns",
            "range": "± 297671.8519200179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846433.1372070312,
            "unit": "ns",
            "range": "± 25935.000098537064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796384.1218345906,
            "unit": "ns",
            "range": "± 22487.456185537394"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/planetarium/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672248300651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149457.45876288658,
            "unit": "ns",
            "range": "± 13510.599334347897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132761.06701030929,
            "unit": "ns",
            "range": "± 15716.414671389495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273199.2,
            "unit": "ns",
            "range": "± 14290.155142083311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238822.94444444444,
            "unit": "ns",
            "range": "± 10992.541943514625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242980.19047619,
            "unit": "ns",
            "range": "± 97865.33906681111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11594556.350877194,
            "unit": "ns",
            "range": "± 502336.3525304425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29731.705263157895,
            "unit": "ns",
            "range": "± 5287.722117207163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84310.99462365592,
            "unit": "ns",
            "range": "± 16628.10567044457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58635.54838709677,
            "unit": "ns",
            "range": "± 5321.375577137865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128435.88144329897,
            "unit": "ns",
            "range": "± 20289.754117659202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.225806451613,
            "unit": "ns",
            "range": "± 667.9742107920858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32819.6,
            "unit": "ns",
            "range": "± 4058.92719288519"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5351863.2504111845,
            "unit": "ns",
            "range": "± 232216.94528208705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7167120,
            "unit": "ns",
            "range": "± 60109.67465114636"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30380547.07142857,
            "unit": "ns",
            "range": "± 475187.6557103057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8596680.695402298,
            "unit": "ns",
            "range": "± 1670046.2720515558"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34610562.56896552,
            "unit": "ns",
            "range": "± 735067.884825172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7912851.455882353,
            "unit": "ns",
            "range": "± 152206.71482644475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2277312.5768229165,
            "unit": "ns",
            "range": "± 20021.907197888795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477274.873798077,
            "unit": "ns",
            "range": "± 15771.33602332873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2902810.862079327,
            "unit": "ns",
            "range": "± 19519.818127023893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 931432.7256673177,
            "unit": "ns",
            "range": "± 3968.0789422131356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849386.3342285156,
            "unit": "ns",
            "range": "± 3614.798134290766"
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
          "id": "d0dff731200fbb4de60d43ddcf9d61865ce4b647",
          "message": "Merge pull request #2693 from greymistcube/feature/apv-options\n\nIntroduce `AppProtocolVersionOptions`",
          "timestamp": "2023-01-05T14:12:47+09:00",
          "tree_id": "cf69d928f8349be78f52307259b762739850e6d8",
          "url": "https://github.com/planetarium/libplanet/commit/d0dff731200fbb4de60d43ddcf9d61865ce4b647"
        },
        "date": 1672896780315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146946.1264367816,
            "unit": "ns",
            "range": "± 10043.975551502339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138423.8901098901,
            "unit": "ns",
            "range": "± 20653.339200801052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284468.3404255319,
            "unit": "ns",
            "range": "± 40625.51038939687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250681.4540229885,
            "unit": "ns",
            "range": "± 20057.780103298574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3879605.84375,
            "unit": "ns",
            "range": "± 271568.26612894336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10867782.06862745,
            "unit": "ns",
            "range": "± 439299.7766408836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29509.719101123595,
            "unit": "ns",
            "range": "± 4011.8802721325633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75724.09375,
            "unit": "ns",
            "range": "± 11244.446065856713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66711.97777777778,
            "unit": "ns",
            "range": "± 7171.624088903039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145633.6494845361,
            "unit": "ns",
            "range": "± 30178.656523844675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8687.97191011236,
            "unit": "ns",
            "range": "± 857.1335831220408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30401.866666666665,
            "unit": "ns",
            "range": "± 2093.4525979289047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5791578.390049342,
            "unit": "ns",
            "range": "± 490669.45702869305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6673988.020833333,
            "unit": "ns",
            "range": "± 517001.4570086154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29443343.643835615,
            "unit": "ns",
            "range": "± 1372755.139557148"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8371319.265306123,
            "unit": "ns",
            "range": "± 867182.1306078457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34904438.973684214,
            "unit": "ns",
            "range": "± 1463848.9757767767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7673330.362165178,
            "unit": "ns",
            "range": "± 326858.0622395962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181510.7436655406,
            "unit": "ns",
            "range": "± 73555.70673781932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410352.2092848558,
            "unit": "ns",
            "range": "± 21403.915608757896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075792.0442708335,
            "unit": "ns",
            "range": "± 96702.61850458544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883229.2580566406,
            "unit": "ns",
            "range": "± 27105.342457214214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790924.8118489584,
            "unit": "ns",
            "range": "± 13541.456713854215"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a289e1a5d890de8a3b5296f48896bb1167e10b5d",
          "message": "Merge pull request #2690 from longfin/port/0.45.4\n\nPort/0.45.4 & remove `workers` option for `NetMQTransport`",
          "timestamp": "2023-01-10T16:08:09+09:00",
          "tree_id": "ec672276fc11e3274ad9cbe3398393b71987b2cc",
          "url": "https://github.com/planetarium/libplanet/commit/a289e1a5d890de8a3b5296f48896bb1167e10b5d"
        },
        "date": 1673335718805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156523.44444444444,
            "unit": "ns",
            "range": "± 8731.258742105747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 154965.69892473117,
            "unit": "ns",
            "range": "± 30691.750457179198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297492.70430107525,
            "unit": "ns",
            "range": "± 60064.32704004121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275287.61363636365,
            "unit": "ns",
            "range": "± 25278.945727430695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4478120.724137931,
            "unit": "ns",
            "range": "± 244588.3281009175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11674552.284210525,
            "unit": "ns",
            "range": "± 893577.0190518253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34735.846153846156,
            "unit": "ns",
            "range": "± 6339.4818451476995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81855.25,
            "unit": "ns",
            "range": "± 13148.812255410066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72299.04395604396,
            "unit": "ns",
            "range": "± 12434.294454283448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161267.6182795699,
            "unit": "ns",
            "range": "± 29916.01027254741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10945.021505376344,
            "unit": "ns",
            "range": "± 1532.2558460627133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36213.028735632186,
            "unit": "ns",
            "range": "± 5093.226520743656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6102167.104996566,
            "unit": "ns",
            "range": "± 557388.8920081062"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7097174.427835052,
            "unit": "ns",
            "range": "± 722884.7294202761"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31037604.11445783,
            "unit": "ns",
            "range": "± 1628098.7726814144"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7876992.880434782,
            "unit": "ns",
            "range": "± 683776.4560274573"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36515285.3021978,
            "unit": "ns",
            "range": "± 2988303.352031953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7817557.7878196025,
            "unit": "ns",
            "range": "± 286123.4827015578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2145017.0705422796,
            "unit": "ns",
            "range": "± 67962.65542120492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472896.394748264,
            "unit": "ns",
            "range": "± 28966.38061957512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150190.012651586,
            "unit": "ns",
            "range": "± 148617.3093777309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934347.0566796875,
            "unit": "ns",
            "range": "± 24850.71411756935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805871.0164713542,
            "unit": "ns",
            "range": "± 13875.097474175083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "054d1c78a807fc6667270d7ee47e3096fa020361",
          "message": "Merge pull request #2699 from dahlia/cli-chain-ids",
          "timestamp": "2023-01-10T17:45:42+09:00",
          "tree_id": "9e7b12be880e83d8210f37b157f7dc8633b8ec26",
          "url": "https://github.com/planetarium/libplanet/commit/054d1c78a807fc6667270d7ee47e3096fa020361"
        },
        "date": 1673341465848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132141.43617021278,
            "unit": "ns",
            "range": "± 11812.639999564992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138660.53846153847,
            "unit": "ns",
            "range": "± 26544.648092227006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265418.1979166667,
            "unit": "ns",
            "range": "± 43423.248606107125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237533.76136363635,
            "unit": "ns",
            "range": "± 25654.578044542995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764830.8586956523,
            "unit": "ns",
            "range": "± 246360.69177857324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10579409.36904762,
            "unit": "ns",
            "range": "± 527797.5468044446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24849.31111111111,
            "unit": "ns",
            "range": "± 4803.934858721697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67174.50515463918,
            "unit": "ns",
            "range": "± 10603.585188828542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49930.97826086957,
            "unit": "ns",
            "range": "± 6649.579368632425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120635.67010309278,
            "unit": "ns",
            "range": "± 19268.150074303132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6404.159340659341,
            "unit": "ns",
            "range": "± 995.0790724558328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28505.178947368422,
            "unit": "ns",
            "range": "± 4579.908674595726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5047378.25078125,
            "unit": "ns",
            "range": "± 519873.86109053507"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6135807.269230769,
            "unit": "ns",
            "range": "± 66050.42784892193"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27796455.22105263,
            "unit": "ns",
            "range": "± 1852854.8406162898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7457353.257731959,
            "unit": "ns",
            "range": "± 667840.5816681554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37448491.49473684,
            "unit": "ns",
            "range": "± 6908188.262652338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6571124.073029892,
            "unit": "ns",
            "range": "± 224180.4447648049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921203.3247575432,
            "unit": "ns",
            "range": "± 55373.59251441742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270912.2992466518,
            "unit": "ns",
            "range": "± 18021.478562968285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555303.8450520835,
            "unit": "ns",
            "range": "± 80914.80447383535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778335.9841496394,
            "unit": "ns",
            "range": "± 7711.8067527564845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784636.2943209135,
            "unit": "ns",
            "range": "± 6010.599247172569"
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
          "id": "43edf035ffc013ea3eb7087df3df3e78929449eb",
          "message": "Merge pull request #2701 from greymistcube/feature/host-options\n\nIntroduce `HostOptions`",
          "timestamp": "2023-01-11T03:11:02+09:00",
          "tree_id": "1d15627c3db0a3689b01f026edd0d773d9e93677",
          "url": "https://github.com/planetarium/libplanet/commit/43edf035ffc013ea3eb7087df3df3e78929449eb"
        },
        "date": 1673375439155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144884.52222222224,
            "unit": "ns",
            "range": "± 9901.25541804842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 136234.4065934066,
            "unit": "ns",
            "range": "± 16319.156781033635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268185.6956521739,
            "unit": "ns",
            "range": "± 29887.610627419588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236376.8125,
            "unit": "ns",
            "range": "± 3635.4318994905316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3727648.0714285714,
            "unit": "ns",
            "range": "± 85551.98431104414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10279198.857142856,
            "unit": "ns",
            "range": "± 170113.2699585133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27852.1,
            "unit": "ns",
            "range": "± 3840.629542810187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70832.28947368421,
            "unit": "ns",
            "range": "± 8602.315249822856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60188.71590909091,
            "unit": "ns",
            "range": "± 5136.762622528294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130001.38541666667,
            "unit": "ns",
            "range": "± 21172.286779193615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8752.968085106382,
            "unit": "ns",
            "range": "± 1749.5377005475343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31017.875,
            "unit": "ns",
            "range": "± 3880.656357603002"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5908615.22986469,
            "unit": "ns",
            "range": "± 410067.68730822706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6870224.78125,
            "unit": "ns",
            "range": "± 606164.0908651744"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36637412.59375,
            "unit": "ns",
            "range": "± 7814630.641082824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8169187.645833333,
            "unit": "ns",
            "range": "± 645040.4773198911"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38375008.91304348,
            "unit": "ns",
            "range": "± 2142929.5901657087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7751417.086774553,
            "unit": "ns",
            "range": "± 217112.03505229313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2285895.0941200657,
            "unit": "ns",
            "range": "± 165294.63504769464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413486.3561662945,
            "unit": "ns",
            "range": "± 24374.678087800316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106640.2751885774,
            "unit": "ns",
            "range": "± 135055.44147284448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878177.1280381945,
            "unit": "ns",
            "range": "± 17037.93820872139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824156.312906901,
            "unit": "ns",
            "range": "± 15903.917609560569"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f20f103ca562c3d48b0a6961814b24f50606f3eb",
          "message": "Merge pull request #2704 from tkiapril/chain-id-show-tip-hash",
          "timestamp": "2023-01-11T18:08:10+09:00",
          "tree_id": "24a8667bbcd91291876b38499606d0c19245fc2f",
          "url": "https://github.com/planetarium/libplanet/commit/f20f103ca562c3d48b0a6961814b24f50606f3eb"
        },
        "date": 1673429439003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 158968.45454545456,
            "unit": "ns",
            "range": "± 10527.117313891726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141031.7311827957,
            "unit": "ns",
            "range": "± 20944.480939077643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279004.2708333333,
            "unit": "ns",
            "range": "± 30696.28736593715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277852.8505747126,
            "unit": "ns",
            "range": "± 37015.05237518755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4126637.195652174,
            "unit": "ns",
            "range": "± 398175.57659454824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11467275.563157896,
            "unit": "ns",
            "range": "± 724406.5266077396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35992.44047619047,
            "unit": "ns",
            "range": "± 2425.5459221607443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87241.08163265306,
            "unit": "ns",
            "range": "± 18849.713389859946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78900.55421686747,
            "unit": "ns",
            "range": "± 4800.239684699221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155172.37628865978,
            "unit": "ns",
            "range": "± 27248.474380174684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10241.784210526315,
            "unit": "ns",
            "range": "± 2213.818409508773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36980.52222222222,
            "unit": "ns",
            "range": "± 7505.876592059782"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5740562.196463816,
            "unit": "ns",
            "range": "± 575941.8464597241"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7447511.802083333,
            "unit": "ns",
            "range": "± 647352.6269466502"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29673696.863157894,
            "unit": "ns",
            "range": "± 2429128.277195457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7472055.020833333,
            "unit": "ns",
            "range": "± 643881.9381964691"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32052930.5,
            "unit": "ns",
            "range": "± 759099.7776100978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7520653.444773707,
            "unit": "ns",
            "range": "± 201170.29851642277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2383273.641468395,
            "unit": "ns",
            "range": "± 192619.15847685613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478956.4745342548,
            "unit": "ns",
            "range": "± 38925.16090455373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340823.843914474,
            "unit": "ns",
            "range": "± 436524.58750407887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886723.4051460598,
            "unit": "ns",
            "range": "± 25489.629436717503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821013.6692810059,
            "unit": "ns",
            "range": "± 25176.43957310298"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b54fb44bc6300190695faef09e0ee94b9dab340",
          "message": "Merge pull request #2705 from dahlia/derive",
          "timestamp": "2023-01-11T18:47:52+09:00",
          "tree_id": "749a054f2e774af871d96519117f118ec1f53339",
          "url": "https://github.com/planetarium/libplanet/commit/2b54fb44bc6300190695faef09e0ee94b9dab340"
        },
        "date": 1673431596516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142825.89130434784,
            "unit": "ns",
            "range": "± 12602.1077052384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124702.52127659574,
            "unit": "ns",
            "range": "± 16927.54963180368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267910.1907216495,
            "unit": "ns",
            "range": "± 41943.32093814243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286674.94943820225,
            "unit": "ns",
            "range": "± 76583.47729735704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3778750.339285714,
            "unit": "ns",
            "range": "± 161558.50992912494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10821622.195652174,
            "unit": "ns",
            "range": "± 263685.03402517503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26933.752688172044,
            "unit": "ns",
            "range": "± 4954.614589617471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69691.72340425532,
            "unit": "ns",
            "range": "± 13309.804392869022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53360.135416666664,
            "unit": "ns",
            "range": "± 9778.023168653901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119822.80927835051,
            "unit": "ns",
            "range": "± 21920.1312721134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.057894736842,
            "unit": "ns",
            "range": "± 1155.9134889570964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26840.08695652174,
            "unit": "ns",
            "range": "± 4880.355426734469"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5256131.203983516,
            "unit": "ns",
            "range": "± 442590.79484875844"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6937266.43298969,
            "unit": "ns",
            "range": "± 540476.3295817154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28638027.758064516,
            "unit": "ns",
            "range": "± 1229952.5308860962"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7624154.5578947365,
            "unit": "ns",
            "range": "± 438467.16190438176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34795061.54736842,
            "unit": "ns",
            "range": "± 1987562.0499476062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7031236.937282986,
            "unit": "ns",
            "range": "± 232320.90788095485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077162.1169621395,
            "unit": "ns",
            "range": "± 85459.81194338387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344939.0474853516,
            "unit": "ns",
            "range": "± 23467.17078887376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711205.115534856,
            "unit": "ns",
            "range": "± 134788.89707890214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837148.993347168,
            "unit": "ns",
            "range": "± 15947.573600819922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744838.5424804688,
            "unit": "ns",
            "range": "± 11007.394273365866"
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
          "id": "4a5c11c9812926f76a9e9d0d76198c358230b492",
          "message": "Merge pull request #2710 from greymistcube/refactor/optimize-preload\n\n♻️ Optimize preload",
          "timestamp": "2023-01-13T17:51:47+09:00",
          "tree_id": "fdce00d536cafced976f265ea8a56217fb32517a",
          "url": "https://github.com/planetarium/libplanet/commit/4a5c11c9812926f76a9e9d0d76198c358230b492"
        },
        "date": 1673601284568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156348.6011235955,
            "unit": "ns",
            "range": "± 10290.946551840585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 145644.14444444445,
            "unit": "ns",
            "range": "± 20689.08963602955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276048.36516853934,
            "unit": "ns",
            "range": "± 31231.5221553594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280665.28571428574,
            "unit": "ns",
            "range": "± 36850.66303346996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4070186.840659341,
            "unit": "ns",
            "range": "± 260827.13732079422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10606552.068965517,
            "unit": "ns",
            "range": "± 304638.2861377138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33298.17525773196,
            "unit": "ns",
            "range": "± 5150.715809902683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81021.43298969071,
            "unit": "ns",
            "range": "± 12264.038286887142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64119.28723404255,
            "unit": "ns",
            "range": "± 11206.543145957225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136622.43617021278,
            "unit": "ns",
            "range": "± 21801.76142474934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.086021505376,
            "unit": "ns",
            "range": "± 1706.7369875566012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34423.26666666667,
            "unit": "ns",
            "range": "± 5824.879574971602"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5851787.563844086,
            "unit": "ns",
            "range": "± 699227.9227364826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6570755.166666667,
            "unit": "ns",
            "range": "± 270081.8214881879"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32500454.545454547,
            "unit": "ns",
            "range": "± 3201750.0651684226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7980175.105263158,
            "unit": "ns",
            "range": "± 851060.5923629655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37305278.69148936,
            "unit": "ns",
            "range": "± 2622460.0225151824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7779272.610476763,
            "unit": "ns",
            "range": "± 397561.76383315783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2367505.389036017,
            "unit": "ns",
            "range": "± 100756.02278485711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482892.7761101974,
            "unit": "ns",
            "range": "± 61382.14754164824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3275372.5385298296,
            "unit": "ns",
            "range": "± 78471.06140543714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926498.2883384968,
            "unit": "ns",
            "range": "± 40169.69147690458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794975.739917652,
            "unit": "ns",
            "range": "± 26941.114978011665"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6aa6bb21208812c943ffb9923d0bad81b7a3e2",
          "message": "Merge pull request #2708 from colibrishin/transport/socket-count\n\nfix/transport: socket count",
          "timestamp": "2023-01-13T19:08:43+09:00",
          "tree_id": "778e222c51d60c6823a686ef96a7682632aff117",
          "url": "https://github.com/planetarium/libplanet/commit/fa6aa6bb21208812c943ffb9923d0bad81b7a3e2"
        },
        "date": 1673605746190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145720.53125,
            "unit": "ns",
            "range": "± 9502.719180876184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 151053.7894736842,
            "unit": "ns",
            "range": "± 30160.122542253008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291761.2395833333,
            "unit": "ns",
            "range": "± 47362.245374014004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251526.84210526315,
            "unit": "ns",
            "range": "± 29900.335315957895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737227.547169811,
            "unit": "ns",
            "range": "± 153847.59580164016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10351305.258064516,
            "unit": "ns",
            "range": "± 464542.87052887917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27535.664835164836,
            "unit": "ns",
            "range": "± 4562.749335077448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77394.97872340426,
            "unit": "ns",
            "range": "± 13454.868034362993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68561.75862068965,
            "unit": "ns",
            "range": "± 9045.41393625896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138157.87634408602,
            "unit": "ns",
            "range": "± 23512.59993803229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8660.618279569893,
            "unit": "ns",
            "range": "± 1712.303126414083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26550.19587628866,
            "unit": "ns",
            "range": "± 3478.9836298335013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5477971.895833333,
            "unit": "ns",
            "range": "± 448988.0159158373"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6661225.335051547,
            "unit": "ns",
            "range": "± 493221.1923210914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 40965226.96236559,
            "unit": "ns",
            "range": "± 12637774.462903218"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7974485.326086956,
            "unit": "ns",
            "range": "± 596454.1430281199"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34496094.89795918,
            "unit": "ns",
            "range": "± 2467746.949049794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650253.439002404,
            "unit": "ns",
            "range": "± 120688.0712670898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137344.471042799,
            "unit": "ns",
            "range": "± 80324.13962615446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372809.1038736978,
            "unit": "ns",
            "range": "± 57894.729843714274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990967.0912247472,
            "unit": "ns",
            "range": "± 269109.34312642843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880380.380859375,
            "unit": "ns",
            "range": "± 37465.63635858922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806103.3113199869,
            "unit": "ns",
            "range": "± 20412.953533935724"
          }
        ]
      }
    ]
  }
}