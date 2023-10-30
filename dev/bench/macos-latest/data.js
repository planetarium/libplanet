window.BENCHMARK_DATA = {
  "lastUpdate": 1678415132453,
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
          "id": "c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d",
          "message": "Merge pull request #2713 from longfin/feature/rocksdb-index-blockhash-iter\n\nTurn recursion to iteration on `RocksDBStore.IndexBlockHash()`",
          "timestamp": "2023-01-16T15:42:34+09:00",
          "tree_id": "c4b7e618a5e927bc18027604bd726b67d479da5c",
          "url": "https://github.com/planetarium/libplanet/commit/c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d"
        },
        "date": 1673852259757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146088.1224489796,
            "unit": "ns",
            "range": "± 10491.790510135199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 131710.60824742267,
            "unit": "ns",
            "range": "± 14799.565896333961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279984.2105263158,
            "unit": "ns",
            "range": "± 25934.621884160097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232275.79381443298,
            "unit": "ns",
            "range": "± 13858.757019434006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233141.142857143,
            "unit": "ns",
            "range": "± 53295.99222896905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10696064.57142857,
            "unit": "ns",
            "range": "± 111114.20139846024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28481.927835051545,
            "unit": "ns",
            "range": "± 3934.36351599442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72001.43617021276,
            "unit": "ns",
            "range": "± 6994.377089650373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55885.257731958765,
            "unit": "ns",
            "range": "± 4399.340749093244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127841.13541666667,
            "unit": "ns",
            "range": "± 16083.411291481143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7026.606382978724,
            "unit": "ns",
            "range": "± 718.5714504634768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25967.53488372093,
            "unit": "ns",
            "range": "± 2531.6397462220334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5397281.008370535,
            "unit": "ns",
            "range": "± 31651.84261358245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7287676.866666666,
            "unit": "ns",
            "range": "± 71719.71843111275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30124655.346153848,
            "unit": "ns",
            "range": "± 468090.62450374675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8212462.923076923,
            "unit": "ns",
            "range": "± 100762.65159146811"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34508873.06896552,
            "unit": "ns",
            "range": "± 1008334.3448274673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6919698.305288462,
            "unit": "ns",
            "range": "± 22884.47557894167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221269.828385417,
            "unit": "ns",
            "range": "± 12596.854851644077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448228.4353966345,
            "unit": "ns",
            "range": "± 9253.549016831672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2880819.246875,
            "unit": "ns",
            "range": "± 12155.340249575378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947756.9979771206,
            "unit": "ns",
            "range": "± 2794.3067808014293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848000.1630161831,
            "unit": "ns",
            "range": "± 2384.019335927309"
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
          "id": "4f0cb090c1b44a63dbe9eb283102fed2d3a9427f",
          "message": "Merge pull request #2706 from greymistcube/refactor/cleanup-preload\n\n🧹 Cleanup preload",
          "timestamp": "2023-01-16T18:25:15+09:00",
          "tree_id": "e9df5726db548acb8715354fbb0090fb74cd41f6",
          "url": "https://github.com/planetarium/libplanet/commit/4f0cb090c1b44a63dbe9eb283102fed2d3a9427f"
        },
        "date": 1673862251103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147372.19791666666,
            "unit": "ns",
            "range": "± 15013.561773921738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132927.91,
            "unit": "ns",
            "range": "± 20003.667966728786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268663.9896907217,
            "unit": "ns",
            "range": "± 29275.617855170465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237184.7985074627,
            "unit": "ns",
            "range": "± 11229.675850060052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3698137.8714285716,
            "unit": "ns",
            "range": "± 119450.07766921507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9988680.52173913,
            "unit": "ns",
            "range": "± 374194.81092366786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28409.102040816328,
            "unit": "ns",
            "range": "± 5543.654223923853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72691.89690721649,
            "unit": "ns",
            "range": "± 10238.987158451164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53778.13265306123,
            "unit": "ns",
            "range": "± 7780.387845310726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123726.6,
            "unit": "ns",
            "range": "± 13867.995231175808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6712.798969072165,
            "unit": "ns",
            "range": "± 1658.250597799709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25068.29292929293,
            "unit": "ns",
            "range": "± 4141.12575459351"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5550364.62628866,
            "unit": "ns",
            "range": "± 510207.2400038666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6393886.782608695,
            "unit": "ns",
            "range": "± 942198.5928843849"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29881902.09090909,
            "unit": "ns",
            "range": "± 2238934.1647857605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7145253.540816327,
            "unit": "ns",
            "range": "± 616907.1254080095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32696417.970588237,
            "unit": "ns",
            "range": "± 1030392.5883073679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7084185.250132415,
            "unit": "ns",
            "range": "± 311607.7178873711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985062.9647135416,
            "unit": "ns",
            "range": "± 36418.371988797415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295647.8916766827,
            "unit": "ns",
            "range": "± 6702.757339285123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563073.388545867,
            "unit": "ns",
            "range": "± 77362.68161292383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819911.818761489,
            "unit": "ns",
            "range": "± 16738.158370998535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735267.5945172991,
            "unit": "ns",
            "range": "± 8612.077043201709"
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
          "id": "8707b88bda48d4d42b8e487e85a251144481368e",
          "message": "Merge pull request #2721 from moreal/boundpeer-validate\n\nValidate hostname in `BoundPeer` type",
          "timestamp": "2023-01-18T10:46:11+09:00",
          "tree_id": "fa8afe5c0c7d19887b236c2f44d8b86a0ce33681",
          "url": "https://github.com/planetarium/libplanet/commit/8707b88bda48d4d42b8e487e85a251144481368e"
        },
        "date": 1674007916707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141914.9157303371,
            "unit": "ns",
            "range": "± 14334.669033983333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138263.44897959183,
            "unit": "ns",
            "range": "± 27862.228445716388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301924.40425531915,
            "unit": "ns",
            "range": "± 62494.1450615544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256574.50574712644,
            "unit": "ns",
            "range": "± 37253.67819763404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930967.5542168673,
            "unit": "ns",
            "range": "± 286000.1126456905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11099275.77173913,
            "unit": "ns",
            "range": "± 1205260.1972526044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31482.979166666668,
            "unit": "ns",
            "range": "± 6726.585213251992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77574.92708333333,
            "unit": "ns",
            "range": "± 12697.241627712765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64669.7,
            "unit": "ns",
            "range": "± 13809.029057183116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138688.5625,
            "unit": "ns",
            "range": "± 25240.26877653727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7520.974747474747,
            "unit": "ns",
            "range": "± 1382.8354288690302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28784.57471264368,
            "unit": "ns",
            "range": "± 3644.76078786365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5051331.909505208,
            "unit": "ns",
            "range": "± 435083.2577885957"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6248664.9069767445,
            "unit": "ns",
            "range": "± 802905.6923501608"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29966774.966666665,
            "unit": "ns",
            "range": "± 3508830.143230273"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8796981.212121213,
            "unit": "ns",
            "range": "± 1969912.3596421552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33956258.53448276,
            "unit": "ns",
            "range": "± 2425954.620021361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8133796.640209441,
            "unit": "ns",
            "range": "± 873277.6212784845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2411370.356573548,
            "unit": "ns",
            "range": "± 280138.9711254824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502245.8195551657,
            "unit": "ns",
            "range": "± 126872.82617486545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009748.878051758,
            "unit": "ns",
            "range": "± 295840.71375611314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967869.9454461349,
            "unit": "ns",
            "range": "± 76524.8191257986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912083.7858438297,
            "unit": "ns",
            "range": "± 87419.43936053988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3294d71ecaef386577c4f10ff4e202d8ca90ee",
          "message": "Merge pull request #2716 from planetarium/pow-dynamic-validator\n\nPow dynamic validator",
          "timestamp": "2023-01-18T12:52:06+09:00",
          "tree_id": "7cd68701d78ea8a7bef2ceb426022324839dcf9d",
          "url": "https://github.com/planetarium/libplanet/commit/ac3294d71ecaef386577c4f10ff4e202d8ca90ee"
        },
        "date": 1674014996465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133728.55102040817,
            "unit": "ns",
            "range": "± 15028.869391201135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135952.72680412373,
            "unit": "ns",
            "range": "± 25197.422371686967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279226.6595744681,
            "unit": "ns",
            "range": "± 47434.78931661757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227417.24444444446,
            "unit": "ns",
            "range": "± 16273.52445722193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3781974.5185185187,
            "unit": "ns",
            "range": "± 157935.1772138357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10265617.396551725,
            "unit": "ns",
            "range": "± 450570.4622909168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30700.868686868685,
            "unit": "ns",
            "range": "± 7780.333230425188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69573.36363636363,
            "unit": "ns",
            "range": "± 8388.48837804211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53254.95263157895,
            "unit": "ns",
            "range": "± 10184.96352239514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133607.71978021978,
            "unit": "ns",
            "range": "± 27390.191129430175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6159.364583333333,
            "unit": "ns",
            "range": "± 1438.8127387741501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26459.073684210525,
            "unit": "ns",
            "range": "± 5245.583279419114"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4909544.038314494,
            "unit": "ns",
            "range": "± 409058.7983412132"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5952997.120689655,
            "unit": "ns",
            "range": "± 164387.63465345599"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36012124.86363637,
            "unit": "ns",
            "range": "± 10001420.40714694"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8924848.164948454,
            "unit": "ns",
            "range": "± 2548773.5623446982"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32687997.151162792,
            "unit": "ns",
            "range": "± 2384124.708098604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6670870.7724609375,
            "unit": "ns",
            "range": "± 170717.66873142775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052460.390625,
            "unit": "ns",
            "range": "± 26272.857946726406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301045.6346028645,
            "unit": "ns",
            "range": "± 13611.70137744877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610235.671530331,
            "unit": "ns",
            "range": "± 76760.88432273711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814270.8884277344,
            "unit": "ns",
            "range": "± 15344.855223171995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743563.6144205729,
            "unit": "ns",
            "range": "± 6160.88700675888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b923ec9ea125a779f3d83c68a94a3cc69aab1f83",
          "message": "Merge pull request #2719 from longfin/bugfix/dealer-disposal\n\nFix NetMQSocket leak",
          "timestamp": "2023-01-18T14:41:04+09:00",
          "tree_id": "f38041db1ca49c6e90ae0de9fb40944156620b10",
          "url": "https://github.com/planetarium/libplanet/commit/b923ec9ea125a779f3d83c68a94a3cc69aab1f83"
        },
        "date": 1674021605502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138982.5,
            "unit": "ns",
            "range": "± 13914.355582899134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121381.02105263158,
            "unit": "ns",
            "range": "± 22270.983237893444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256477.74468085106,
            "unit": "ns",
            "range": "± 34541.248357980054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226291.47191011236,
            "unit": "ns",
            "range": "± 13697.597271129083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3656390.964285714,
            "unit": "ns",
            "range": "± 104157.59491181375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9987566.966666667,
            "unit": "ns",
            "range": "± 186403.5138578465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25824.070707070707,
            "unit": "ns",
            "range": "± 5113.406070106953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66242.87368421053,
            "unit": "ns",
            "range": "± 9191.282647556805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56079.32795698925,
            "unit": "ns",
            "range": "± 6536.791497269524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127167.23711340207,
            "unit": "ns",
            "range": "± 24223.089178067446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7163.016483516483,
            "unit": "ns",
            "range": "± 1174.6499560165655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29353.973684210527,
            "unit": "ns",
            "range": "± 5399.033272099392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5474852.434546494,
            "unit": "ns",
            "range": "± 288450.19259752554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6704722.166666667,
            "unit": "ns",
            "range": "± 523755.320554363"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29862102.114583332,
            "unit": "ns",
            "range": "± 2067841.6690111344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6993480.068421053,
            "unit": "ns",
            "range": "± 432861.70321985846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31307713.208333332,
            "unit": "ns",
            "range": "± 1152751.7844480153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6747763.477205883,
            "unit": "ns",
            "range": "± 363159.2879710743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166009.416183036,
            "unit": "ns",
            "range": "± 69730.41130382277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359392.0003004808,
            "unit": "ns",
            "range": "± 36961.34562340376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803512.972628741,
            "unit": "ns",
            "range": "± 137449.86343270066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863338.1478407118,
            "unit": "ns",
            "range": "± 17996.09564916445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881273.8034667969,
            "unit": "ns",
            "range": "± 20237.77902340867"
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
          "id": "7c5392c7e40bca979415f316f6f0a5e083b2bf59",
          "message": "Merge pull request #2584 from greymistcube/refactor/block-locator\n\n♻️ Refactor `BlockLocator`",
          "timestamp": "2023-01-18T17:14:34+09:00",
          "tree_id": "a5b8ca613b01cffa39f3b6699fc6e85bbe549f6d",
          "url": "https://github.com/planetarium/libplanet/commit/7c5392c7e40bca979415f316f6f0a5e083b2bf59"
        },
        "date": 1674030836791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140104.36559139786,
            "unit": "ns",
            "range": "± 12223.127814129342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119169.06451612903,
            "unit": "ns",
            "range": "± 18613.002823415896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257705.03260869565,
            "unit": "ns",
            "range": "± 36493.632286174055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213049.47701149425,
            "unit": "ns",
            "range": "± 17784.995803869377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4068939.1911764704,
            "unit": "ns",
            "range": "± 192928.75022151967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9801940.738636363,
            "unit": "ns",
            "range": "± 588824.7549266464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23897.97894736842,
            "unit": "ns",
            "range": "± 6548.368741126665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59073.86170212766,
            "unit": "ns",
            "range": "± 8950.92223710197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49066.92222222222,
            "unit": "ns",
            "range": "± 6775.830185427304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93628.29347826086,
            "unit": "ns",
            "range": "± 15085.444462368676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5095.25,
            "unit": "ns",
            "range": "± 459.32558930235075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20210.325581395347,
            "unit": "ns",
            "range": "± 2518.431736298746"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5363306.237068965,
            "unit": "ns",
            "range": "± 300579.69937586365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7122007.733333333,
            "unit": "ns",
            "range": "± 128167.36811710955"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30241400.15,
            "unit": "ns",
            "range": "± 1049645.5493740719"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8482516.717391305,
            "unit": "ns",
            "range": "± 321278.31394918245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34984945.67816092,
            "unit": "ns",
            "range": "± 1897080.8510852929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7104332.111268939,
            "unit": "ns",
            "range": "± 221673.49989416124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2141152.344140625,
            "unit": "ns",
            "range": "± 34254.85173160137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375712.7315204327,
            "unit": "ns",
            "range": "± 15389.412695348974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690061.5603966345,
            "unit": "ns",
            "range": "± 36266.28091854071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015031.8127790178,
            "unit": "ns",
            "range": "± 16193.51573297397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809812.2585286458,
            "unit": "ns",
            "range": "± 12775.33710252514"
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
          "id": "ed9ee092c883ba93365316ea520f7da624646932",
          "message": "Merge pull request #2724 from greymistcube/release/0.46.0\n\n🚀 Release 0.46.0",
          "timestamp": "2023-01-18T17:37:55+09:00",
          "tree_id": "7919b8ddfe6f6a1c1e09c010681ebf2e3795eee6",
          "url": "https://github.com/planetarium/libplanet/commit/ed9ee092c883ba93365316ea520f7da624646932"
        },
        "date": 1674032339857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 152007.95604395604,
            "unit": "ns",
            "range": "± 13988.124324195776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142351.7142857143,
            "unit": "ns",
            "range": "± 27757.32616025921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291100.8350515464,
            "unit": "ns",
            "range": "± 43603.01539593726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252054.8674698795,
            "unit": "ns",
            "range": "± 16505.245392971945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880643.753164557,
            "unit": "ns",
            "range": "± 200529.82446358603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10969192.31958763,
            "unit": "ns",
            "range": "± 633580.7266686133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30023.862637362636,
            "unit": "ns",
            "range": "± 5009.560407674917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76526.09574468085,
            "unit": "ns",
            "range": "± 12620.935052240977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68719.75274725274,
            "unit": "ns",
            "range": "± 8159.025208106674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148066.38947368422,
            "unit": "ns",
            "range": "± 35775.03967534108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8756.947916666666,
            "unit": "ns",
            "range": "± 984.7224013827895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31034.919540229886,
            "unit": "ns",
            "range": "± 3699.6004819451914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5671872.2778253425,
            "unit": "ns",
            "range": "± 281902.94609532837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7496648.531578948,
            "unit": "ns",
            "range": "± 1290800.7487029987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29419910.50877193,
            "unit": "ns",
            "range": "± 1262077.7766924829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7764457.479166667,
            "unit": "ns",
            "range": "± 584341.7128312758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35919195.41919192,
            "unit": "ns",
            "range": "± 2340782.7739790324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7491656.186383928,
            "unit": "ns",
            "range": "± 174749.57878168244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2257149.0560344825,
            "unit": "ns",
            "range": "± 63811.05536589994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1452027.411640625,
            "unit": "ns",
            "range": "± 38373.26669549978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3183221.0115411934,
            "unit": "ns",
            "range": "± 118215.40948853157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918317.1762408088,
            "unit": "ns",
            "range": "± 17692.95067372976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904188.0645791331,
            "unit": "ns",
            "range": "± 27348.427823275506"
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
          "id": "124115fb5538ed5f6c111a32e2b8c6c5f4e1369e",
          "message": "Merge pull request #2726 from riemannulus/prepare-0.47\n\nrelease: prepare 0.47",
          "timestamp": "2023-01-19T01:32:16+09:00",
          "tree_id": "ee971d646c27028070577759dfef5c18036e0a94",
          "url": "https://github.com/planetarium/libplanet/commit/124115fb5538ed5f6c111a32e2b8c6c5f4e1369e"
        },
        "date": 1674060555805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147004.30434782608,
            "unit": "ns",
            "range": "± 8308.88347220649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123570.37234042553,
            "unit": "ns",
            "range": "± 10731.132538998356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280694.13265306124,
            "unit": "ns",
            "range": "± 28578.444312315507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231658.98,
            "unit": "ns",
            "range": "± 9271.360289182852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4196995.785714285,
            "unit": "ns",
            "range": "± 52317.43664390498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10742959.461538462,
            "unit": "ns",
            "range": "± 58657.6794796376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27106.968085106382,
            "unit": "ns",
            "range": "± 3224.299048445909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65426.14893617021,
            "unit": "ns",
            "range": "± 5377.980066017605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50888.52173913043,
            "unit": "ns",
            "range": "± 3528.7517124152932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128457.13684210526,
            "unit": "ns",
            "range": "± 16234.14627142204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6240.645161290323,
            "unit": "ns",
            "range": "± 488.51869362926686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26283.532608695652,
            "unit": "ns",
            "range": "± 2707.7477013764787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5202786.551185345,
            "unit": "ns",
            "range": "± 225841.09035809402"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7734534.642857143,
            "unit": "ns",
            "range": "± 128095.68518921082"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30731636.6,
            "unit": "ns",
            "range": "± 288796.2899135454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8320104.235294118,
            "unit": "ns",
            "range": "± 164398.86566424713"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34925621.34615385,
            "unit": "ns",
            "range": "± 936571.3222581585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6975802.296875,
            "unit": "ns",
            "range": "± 49639.89296468726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2126400.7477678573,
            "unit": "ns",
            "range": "± 3979.6919557444025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450518.8515625,
            "unit": "ns",
            "range": "± 3515.776202484243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854176.5084635415,
            "unit": "ns",
            "range": "± 8547.613496518612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933614.1736188616,
            "unit": "ns",
            "range": "± 2893.312683877904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863510.683733259,
            "unit": "ns",
            "range": "± 6241.595085679331"
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
          "id": "ad15d083ca812dd294a422c507a17f847e95adf5",
          "message": "Merge pull request #2732 from dahlia/upgrade-net6-csharp10",
          "timestamp": "2023-01-19T18:14:56+09:00",
          "tree_id": "38ee257c8d8ffcfa24d4a0aecabb2ebef9c6b073",
          "url": "https://github.com/planetarium/libplanet/commit/ad15d083ca812dd294a422c507a17f847e95adf5"
        },
        "date": 1674121007725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141773.9659090909,
            "unit": "ns",
            "range": "± 9055.83572937612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132477.28421052633,
            "unit": "ns",
            "range": "± 18944.96748797666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277436.4183673469,
            "unit": "ns",
            "range": "± 38608.135863294774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242830.22619047618,
            "unit": "ns",
            "range": "± 17413.155212143414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3994503.387755102,
            "unit": "ns",
            "range": "± 237509.43653534655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11047275.524390243,
            "unit": "ns",
            "range": "± 570733.918383807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30526.43956043956,
            "unit": "ns",
            "range": "± 4368.721916352377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74693.73404255319,
            "unit": "ns",
            "range": "± 10180.439380873786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63054.54022988506,
            "unit": "ns",
            "range": "± 7230.9992117346355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130765.03333333334,
            "unit": "ns",
            "range": "± 18015.30092068743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8247.177777777777,
            "unit": "ns",
            "range": "± 1291.4672243752284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33184.0376344086,
            "unit": "ns",
            "range": "± 5497.2980073596555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5614157.655263158,
            "unit": "ns",
            "range": "± 327991.6144271284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7189520.571428572,
            "unit": "ns",
            "range": "± 838302.8573692358"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29067821.289473683,
            "unit": "ns",
            "range": "± 967114.5202924777"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7588341.716494845,
            "unit": "ns",
            "range": "± 542389.499331819"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33746411.97058824,
            "unit": "ns",
            "range": "± 1607752.3423655024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8250092.398995535,
            "unit": "ns",
            "range": "± 824179.8586893643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892217.442608173,
            "unit": "ns",
            "range": "± 26055.99789442708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405300.771091505,
            "unit": "ns",
            "range": "± 74044.76208193919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2841839.602416992,
            "unit": "ns",
            "range": "± 180680.1200659252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838899.0428677263,
            "unit": "ns",
            "range": "± 36761.418573619216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798750.5256640625,
            "unit": "ns",
            "range": "± 21259.343687476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4af0f1d21e7500a4c2702b850b917c5d28a771bd",
          "message": "Merge pull request #2733 from limebell/refactor/remove-validator-from-interface\n\nRemove Validator related methods from interfaces",
          "timestamp": "2023-01-20T13:55:48+09:00",
          "tree_id": "6deae8f6d719122481ddf5798149d819c6ace54f",
          "url": "https://github.com/planetarium/libplanet/commit/4af0f1d21e7500a4c2702b850b917c5d28a771bd"
        },
        "date": 1674192052796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 162782.97894736842,
            "unit": "ns",
            "range": "± 20420.362661656985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121323.09090909091,
            "unit": "ns",
            "range": "± 14373.364396813802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275258.9680851064,
            "unit": "ns",
            "range": "± 32730.82862965612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254742.36458333334,
            "unit": "ns",
            "range": "± 23871.43271365424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155229.8434343436,
            "unit": "ns",
            "range": "± 302089.6091103298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11139881.472527472,
            "unit": "ns",
            "range": "± 728679.797861163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32784.88947368421,
            "unit": "ns",
            "range": "± 6158.2153989518765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78797.7947368421,
            "unit": "ns",
            "range": "± 17417.135723967345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71169.2,
            "unit": "ns",
            "range": "± 12255.128374996339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149124.13043478262,
            "unit": "ns",
            "range": "± 27915.149366976388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8858.619565217392,
            "unit": "ns",
            "range": "± 1426.3770585015695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32912.63829787234,
            "unit": "ns",
            "range": "± 6053.328640608048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5936399.023876404,
            "unit": "ns",
            "range": "± 700571.1871380184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7640206.957446809,
            "unit": "ns",
            "range": "± 1398876.2917432121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27298133.185714286,
            "unit": "ns",
            "range": "± 876226.2633983563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7167214.141304348,
            "unit": "ns",
            "range": "± 789394.8520117484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31004271.3,
            "unit": "ns",
            "range": "± 925833.3801572077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7842232.621582031,
            "unit": "ns",
            "range": "± 764052.3529218761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187972.997912177,
            "unit": "ns",
            "range": "± 93122.91662611181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406955.5552201704,
            "unit": "ns",
            "range": "± 57220.38405535658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3023298.685078125,
            "unit": "ns",
            "range": "± 416167.422542261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924125.4675671215,
            "unit": "ns",
            "range": "± 45288.38827146164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888552.4780373087,
            "unit": "ns",
            "range": "± 52100.76193851082"
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
          "id": "a993bb7b036cdd3d63bb3aed4daf543073c403fc",
          "message": "Merge pull request #2748 from greymistcube/chore/changelog-fix\n\n🧹 Fixed typos",
          "timestamp": "2023-01-21T14:05:00+09:00",
          "tree_id": "43fea792d9a4293b7eb52bd492f241a118097909",
          "url": "https://github.com/planetarium/libplanet/commit/a993bb7b036cdd3d63bb3aed4daf543073c403fc"
        },
        "date": 1674278937561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 163587.42222222223,
            "unit": "ns",
            "range": "± 14873.062514536083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 150001.79545454544,
            "unit": "ns",
            "range": "± 22465.436001539998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305695.106741573,
            "unit": "ns",
            "range": "± 58527.54281137021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275609.6373626374,
            "unit": "ns",
            "range": "± 32498.803743630826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4334015.7727272725,
            "unit": "ns",
            "range": "± 566174.9942947908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13094827.565934066,
            "unit": "ns",
            "range": "± 2473011.207636273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34443.70224719101,
            "unit": "ns",
            "range": "± 4593.665691074888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81033.63043478261,
            "unit": "ns",
            "range": "± 15647.754671087356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88335.92783505155,
            "unit": "ns",
            "range": "± 22665.4859290726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 164312.45555555556,
            "unit": "ns",
            "range": "± 36479.84029382765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10852.440476190477,
            "unit": "ns",
            "range": "± 1450.9725558603825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 37560.833333333336,
            "unit": "ns",
            "range": "± 8583.361614585603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 9200768.053559924,
            "unit": "ns",
            "range": "± 1218732.5453850222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9759077.551546391,
            "unit": "ns",
            "range": "± 2499698.6110723945"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 44092668.78571428,
            "unit": "ns",
            "range": "± 8845256.0067562"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10561746.442105263,
            "unit": "ns",
            "range": "± 2153762.081838234"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 49596606.53684211,
            "unit": "ns",
            "range": "± 11571756.878649766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8222125.083482143,
            "unit": "ns",
            "range": "± 399574.8865695282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420242.2961288625,
            "unit": "ns",
            "range": "± 133096.9069804799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1589939.7214192708,
            "unit": "ns",
            "range": "± 90275.81983228419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3568755.6225198414,
            "unit": "ns",
            "range": "± 162899.33671918814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985384.4698486328,
            "unit": "ns",
            "range": "± 18481.735495903147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925123.3918167372,
            "unit": "ns",
            "range": "± 40450.5479454968"
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
          "id": "e03a39d36d0512496e5f493b5000413b8dfd9c80",
          "message": "Merge pull request #2743 from greymistcube/refactor/extract-transport\n\nRefactor/extract transport",
          "timestamp": "2023-01-27T15:53:12+09:00",
          "tree_id": "fe89e2f6fc98e385eb6ba15ce51148c86df39924",
          "url": "https://github.com/planetarium/libplanet/commit/e03a39d36d0512496e5f493b5000413b8dfd9c80"
        },
        "date": 1674803539687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 151034.95555555556,
            "unit": "ns",
            "range": "± 20046.538703256196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 153817.85789473684,
            "unit": "ns",
            "range": "± 30947.397607194423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324411.1443298969,
            "unit": "ns",
            "range": "± 75089.3638345879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260474.70652173914,
            "unit": "ns",
            "range": "± 28034.356797023433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4194442.073684211,
            "unit": "ns",
            "range": "± 358731.19879046414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11630909.469387755,
            "unit": "ns",
            "range": "± 775996.3255972293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32146.505263157895,
            "unit": "ns",
            "range": "± 6043.203872108372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84686.72631578948,
            "unit": "ns",
            "range": "± 22910.028130150782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65853.57058823529,
            "unit": "ns",
            "range": "± 6369.662446741913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152645.7525773196,
            "unit": "ns",
            "range": "± 32906.47828570099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9446.978260869566,
            "unit": "ns",
            "range": "± 841.4983755217436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34693.37777777778,
            "unit": "ns",
            "range": "± 6518.431409555036"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5675689.8176546395,
            "unit": "ns",
            "range": "± 507291.3307133041"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7266234.835051547,
            "unit": "ns",
            "range": "± 652110.2270077327"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33667058.192307696,
            "unit": "ns",
            "range": "± 1735204.9250192535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8242116.93298969,
            "unit": "ns",
            "range": "± 850056.4831109252"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37532271.67058823,
            "unit": "ns",
            "range": "± 2013539.5555616228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8382461.143080357,
            "unit": "ns",
            "range": "± 405369.3612044464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2304757.3425130206,
            "unit": "ns",
            "range": "± 102938.09871359404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1546821.2003102023,
            "unit": "ns",
            "range": "± 49307.58823184862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3370123.025647096,
            "unit": "ns",
            "range": "± 228342.11225996236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842576.9116536458,
            "unit": "ns",
            "range": "± 9136.015582031849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822185.69375,
            "unit": "ns",
            "range": "± 18394.735781617823"
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
          "id": "a58bb1ed94765944c567ad992ea6feebf2d66f36",
          "message": "Merge pull request #2754 from riemannulus/fix/swarm-test-stopping\n\nfix: Adjustment effective changes from hang in the CI research",
          "timestamp": "2023-01-27T17:56:35+09:00",
          "tree_id": "6930c9bac76d7cd195ab2af78b91d2b35bc37ea3",
          "url": "https://github.com/planetarium/libplanet/commit/a58bb1ed94765944c567ad992ea6feebf2d66f36"
        },
        "date": 1674811397720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 172613.46666666667,
            "unit": "ns",
            "range": "± 24018.734000751923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164304.86170212767,
            "unit": "ns",
            "range": "± 29033.312099272902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280720.93298969074,
            "unit": "ns",
            "range": "± 32776.797209785465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260086.09782608695,
            "unit": "ns",
            "range": "± 24992.458420319996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3936652.784090909,
            "unit": "ns",
            "range": "± 214714.1078049637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11214137.287234042,
            "unit": "ns",
            "range": "± 638023.3604439965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31080.434782608696,
            "unit": "ns",
            "range": "± 5565.417355092006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79586.74468085106,
            "unit": "ns",
            "range": "± 12735.813291351898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63222.4793814433,
            "unit": "ns",
            "range": "± 10424.112318301757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 158900.2,
            "unit": "ns",
            "range": "± 32177.69163940213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8235.765957446809,
            "unit": "ns",
            "range": "± 1824.0136540679985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30431.220930232557,
            "unit": "ns",
            "range": "± 3992.714897236665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5955794.272321428,
            "unit": "ns",
            "range": "± 636119.9011077203"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6540392.722222222,
            "unit": "ns",
            "range": "± 136194.17624223384"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29239207.01162791,
            "unit": "ns",
            "range": "± 1574402.0419884122"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7426850.261363637,
            "unit": "ns",
            "range": "± 496228.2810054351"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37469325.92222222,
            "unit": "ns",
            "range": "± 3574024.9038301716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7225788.7590880105,
            "unit": "ns",
            "range": "± 285331.4213175605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2328145.291232639,
            "unit": "ns",
            "range": "± 128834.69338569578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423575.8805752841,
            "unit": "ns",
            "range": "± 59163.38555919144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780934.668010306,
            "unit": "ns",
            "range": "± 160638.38642806842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913839.3315637467,
            "unit": "ns",
            "range": "± 67676.17961570618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837934.6258463542,
            "unit": "ns",
            "range": "± 42283.883431948096"
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
          "id": "34f3e59036e469e0d4230769953ce803cc7dd9fb",
          "message": "Merge pull request #2756 from dahlia/block-json-serialization\n\nSerialize/deserialize `Block<T>` better with `System.Text.Json.JsonSerializer`",
          "timestamp": "2023-01-30T17:16:43+09:00",
          "tree_id": "40be0ff242cc5a62410886ca50defee62a04b603",
          "url": "https://github.com/planetarium/libplanet/commit/34f3e59036e469e0d4230769953ce803cc7dd9fb"
        },
        "date": 1675067764312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137804.09677419355,
            "unit": "ns",
            "range": "± 13933.686590468527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119342.34042553192,
            "unit": "ns",
            "range": "± 15508.04065763236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257434.33333333334,
            "unit": "ns",
            "range": "± 34020.80872193081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235238.20212765958,
            "unit": "ns",
            "range": "± 25839.99455190686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805985.93373494,
            "unit": "ns",
            "range": "± 201752.7686077867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11159942.086021505,
            "unit": "ns",
            "range": "± 1376148.4047981815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26191.068965517243,
            "unit": "ns",
            "range": "± 4373.445456156867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67444.64583333333,
            "unit": "ns",
            "range": "± 14359.280800769617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58364.92105263158,
            "unit": "ns",
            "range": "± 11204.260955793092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125474.27083333333,
            "unit": "ns",
            "range": "± 21074.10543246163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7350.914893617021,
            "unit": "ns",
            "range": "± 1550.5550838160632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29131.145161290322,
            "unit": "ns",
            "range": "± 5545.48870047255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4899647.869035618,
            "unit": "ns",
            "range": "± 297370.8307058961"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6247496.67,
            "unit": "ns",
            "range": "± 545375.5093346802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27785981.903846152,
            "unit": "ns",
            "range": "± 1144069.1439543683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6804343.714285715,
            "unit": "ns",
            "range": "± 363981.3560619065"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31891797.62658228,
            "unit": "ns",
            "range": "± 1655620.0388253909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7192862.998139881,
            "unit": "ns",
            "range": "± 170599.2284689448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2108272.494668497,
            "unit": "ns",
            "range": "± 61762.02208569299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412688.3880709135,
            "unit": "ns",
            "range": "± 48421.82989383134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2773526.284610215,
            "unit": "ns",
            "range": "± 157076.6378554105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828533.9408398437,
            "unit": "ns",
            "range": "± 21330.23165615577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757875.4305943081,
            "unit": "ns",
            "range": "± 11160.635181470487"
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
          "id": "07f322e1d13d88e551c1bd3b242183559d13c448",
          "message": "Merge pull request #2758 from dahlia/planet-block",
          "timestamp": "2023-01-31T15:06:11+09:00",
          "tree_id": "982d38bd25720519ccd262c351c4d1c879bbd1af",
          "url": "https://github.com/planetarium/libplanet/commit/07f322e1d13d88e551c1bd3b242183559d13c448"
        },
        "date": 1675146468807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140866.47674418605,
            "unit": "ns",
            "range": "± 8949.50208930707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126935.54081632652,
            "unit": "ns",
            "range": "± 22581.37414489014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266724.0612244898,
            "unit": "ns",
            "range": "± 30239.433078747497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237455.22289156626,
            "unit": "ns",
            "range": "± 12992.066406843656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4100845.3777777776,
            "unit": "ns",
            "range": "± 454270.4781712913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10603705.516129032,
            "unit": "ns",
            "range": "± 321279.3629453834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29278.82222222222,
            "unit": "ns",
            "range": "± 4345.010550866485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77471.6875,
            "unit": "ns",
            "range": "± 17141.728237081214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64178.43258426966,
            "unit": "ns",
            "range": "± 10167.76999305979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134307.96739130435,
            "unit": "ns",
            "range": "± 20366.866904470593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7875.5,
            "unit": "ns",
            "range": "± 1561.7921918473864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31006.238636363636,
            "unit": "ns",
            "range": "± 6069.289587078821"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5385243.110855263,
            "unit": "ns",
            "range": "± 501037.00521789823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6241176.954022989,
            "unit": "ns",
            "range": "± 537088.7908758534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28285345.2,
            "unit": "ns",
            "range": "± 410066.17280580464"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7063935.15,
            "unit": "ns",
            "range": "± 368295.3149444105"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32005991.55172414,
            "unit": "ns",
            "range": "± 1291429.3236784493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8441138.740093429,
            "unit": "ns",
            "range": "± 702958.4908677185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275524.3335069446,
            "unit": "ns",
            "range": "± 85030.3611763991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401288.7323774858,
            "unit": "ns",
            "range": "± 76805.9900325658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2771294.4396972656,
            "unit": "ns",
            "range": "± 216919.09181316785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973971.7979043496,
            "unit": "ns",
            "range": "± 31587.753799650614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750419.8288845486,
            "unit": "ns",
            "range": "± 14316.676982391446"
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
          "id": "c4a221fa87b0349581f1c553c409f03226a7d463",
          "message": "Merge pull request #2747 from greymistcube/bump/bencodex\n\n⬆️ Bump dependencies",
          "timestamp": "2023-02-01T00:16:32-05:00",
          "tree_id": "1a4a36fa3a502a8f1e77f01d995fe25a562bbc14",
          "url": "https://github.com/planetarium/libplanet/commit/c4a221fa87b0349581f1c553c409f03226a7d463"
        },
        "date": 1675230045473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 162098.8908045977,
            "unit": "ns",
            "range": "± 14854.65728969649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 149930.88461538462,
            "unit": "ns",
            "range": "± 21371.12618816396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301854.902173913,
            "unit": "ns",
            "range": "± 48441.778413797154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268707.9175824176,
            "unit": "ns",
            "range": "± 27018.775941130658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4172084.826530612,
            "unit": "ns",
            "range": "± 303268.913148859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12408185.010416666,
            "unit": "ns",
            "range": "± 1188313.3312121492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33931.23529411765,
            "unit": "ns",
            "range": "± 4481.489693455628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89671.58695652174,
            "unit": "ns",
            "range": "± 20152.48955533955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76490.81609195402,
            "unit": "ns",
            "range": "± 10230.058338882887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 170013.1443298969,
            "unit": "ns",
            "range": "± 41908.58631965871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11208.186046511628,
            "unit": "ns",
            "range": "± 1290.241767236147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35128.99462365591,
            "unit": "ns",
            "range": "± 6334.560932630604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7997880.8051075265,
            "unit": "ns",
            "range": "± 957985.1458307712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7367265.962365591,
            "unit": "ns",
            "range": "± 722200.7854045186"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30540977.882978722,
            "unit": "ns",
            "range": "± 2211814.0724749095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8220658.542105263,
            "unit": "ns",
            "range": "± 697194.271134544"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34982834.74226804,
            "unit": "ns",
            "range": "± 2174361.930555731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7197921.749837239,
            "unit": "ns",
            "range": "± 281533.5432311834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135630.0748197115,
            "unit": "ns",
            "range": "± 57830.88349205214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493105.2940747365,
            "unit": "ns",
            "range": "± 79318.84190861479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108655.53973327,
            "unit": "ns",
            "range": "± 375362.0558437915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906311.1669808321,
            "unit": "ns",
            "range": "± 49223.903073473426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749195.5327845982,
            "unit": "ns",
            "range": "± 7625.156925799869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "622343fb5ad8eccdccbe4e30f839a81297e40a3f",
          "message": "Merge pull request #2757 from limebell/chore/fix-state-graphql\n\nFix `stateQuery`",
          "timestamp": "2023-02-01T17:10:41+09:00",
          "tree_id": "0b29c0c2db1ace8da55214796291760b1c449cf1",
          "url": "https://github.com/planetarium/libplanet/commit/622343fb5ad8eccdccbe4e30f839a81297e40a3f"
        },
        "date": 1675240583520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150767.88636363635,
            "unit": "ns",
            "range": "± 19735.8636103594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164541.79166666666,
            "unit": "ns",
            "range": "± 30060.020447139694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320396.65625,
            "unit": "ns",
            "range": "± 70481.67876037426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289212.39361702127,
            "unit": "ns",
            "range": "± 56960.775068956915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5086635.86,
            "unit": "ns",
            "range": "± 848528.6567242875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14335404.17,
            "unit": "ns",
            "range": "± 1847294.0213111723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34849.181318681316,
            "unit": "ns",
            "range": "± 6869.768897745026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78665.06382978724,
            "unit": "ns",
            "range": "± 14429.316669159794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69822.52061855671,
            "unit": "ns",
            "range": "± 11442.156077763659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134360.55208333334,
            "unit": "ns",
            "range": "± 16919.325270775764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9407.752631578947,
            "unit": "ns",
            "range": "± 1868.2912603153343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 37594.15555555555,
            "unit": "ns",
            "range": "± 6373.380377492365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5965009.562583112,
            "unit": "ns",
            "range": "± 989181.0308239525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9371314.530927835,
            "unit": "ns",
            "range": "± 3003862.5509099886"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 38525194.548387095,
            "unit": "ns",
            "range": "± 8428533.9138067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8338805.575757576,
            "unit": "ns",
            "range": "± 1492888.3698837792"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41099754.87755102,
            "unit": "ns",
            "range": "± 5491951.73008406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9886779.608876329,
            "unit": "ns",
            "range": "± 637990.0398227065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2612569.6518605025,
            "unit": "ns",
            "range": "± 228741.86916998748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1661602.8838900863,
            "unit": "ns",
            "range": "± 90918.10492694186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3755467.6308396463,
            "unit": "ns",
            "range": "± 408929.4070034767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1075431.314921875,
            "unit": "ns",
            "range": "± 101483.84523895218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954384.3830037854,
            "unit": "ns",
            "range": "± 80072.71273837815"
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
          "id": "38f93473747ee77117b2b39a10ec7b37ae8f1d34",
          "message": "Merge pull request #2761 from dahlia/filemode-create",
          "timestamp": "2023-02-01T18:33:34+09:00",
          "tree_id": "30e09de5c9aa2ef978327ac1d621a1b7bd24d8c6",
          "url": "https://github.com/planetarium/libplanet/commit/38f93473747ee77117b2b39a10ec7b37ae8f1d34"
        },
        "date": 1675245360347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146655.8777777778,
            "unit": "ns",
            "range": "± 12800.090175970783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 137446.41758241758,
            "unit": "ns",
            "range": "± 23738.976416230635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297659.7315789474,
            "unit": "ns",
            "range": "± 61624.89704302005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268068.53225806454,
            "unit": "ns",
            "range": "± 41275.37678111323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202421.284946237,
            "unit": "ns",
            "range": "± 463051.882623245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11834801.675257731,
            "unit": "ns",
            "range": "± 1070846.2640289553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28510.880434782608,
            "unit": "ns",
            "range": "± 3259.588846324875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73237.56521739131,
            "unit": "ns",
            "range": "± 11622.38726239229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60527.443181818184,
            "unit": "ns",
            "range": "± 7425.48363355121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123845.38043478261,
            "unit": "ns",
            "range": "± 19403.274354831035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7149.84375,
            "unit": "ns",
            "range": "± 1652.1198397218743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29821.922222222223,
            "unit": "ns",
            "range": "± 3494.0845740675163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5858788.597895408,
            "unit": "ns",
            "range": "± 512362.6774232656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8116455.521276596,
            "unit": "ns",
            "range": "± 1075029.4771260924"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30590517.633333333,
            "unit": "ns",
            "range": "± 3459159.346658493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9214409.577777777,
            "unit": "ns",
            "range": "± 1007083.3608045862"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37630032.36734694,
            "unit": "ns",
            "range": "± 4229047.120546876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6690906.383961397,
            "unit": "ns",
            "range": "± 317403.8306609205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2045443.8345853365,
            "unit": "ns",
            "range": "± 33188.06645084417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1551811.6738386257,
            "unit": "ns",
            "range": "± 149556.74545671322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3051181.760625,
            "unit": "ns",
            "range": "± 342947.02204680775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849910.3068359375,
            "unit": "ns",
            "range": "± 19015.985856463692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821389.9598410088,
            "unit": "ns",
            "range": "± 33688.81796535428"
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
          "id": "34cf338c2cfb65517f6d739ce3aff01c3dd33863",
          "message": "Merge pull request #2759 from greymistcube/refactor/apv-spec\n\n♻️ Removed nullability from `TrustedAppProtocolVersionSigners`",
          "timestamp": "2023-02-01T05:48:32-05:00",
          "tree_id": "f7fb41009837e35e3aeab81ed0b217dea613d067",
          "url": "https://github.com/planetarium/libplanet/commit/34cf338c2cfb65517f6d739ce3aff01c3dd33863"
        },
        "date": 1675249977024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 153785.3152173913,
            "unit": "ns",
            "range": "± 16047.609968177658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132497.8085106383,
            "unit": "ns",
            "range": "± 23583.571747543665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276529.93956043955,
            "unit": "ns",
            "range": "± 48474.61568587758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253465.50574712644,
            "unit": "ns",
            "range": "± 17048.41395396935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3803264.6228070175,
            "unit": "ns",
            "range": "± 154148.56910647574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10592051.747126436,
            "unit": "ns",
            "range": "± 579798.0120455988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25481.255555555555,
            "unit": "ns",
            "range": "± 3831.304464572046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68071.96590909091,
            "unit": "ns",
            "range": "± 9150.18832096746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60959.81914893617,
            "unit": "ns",
            "range": "± 6817.115872697187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129141.82795698925,
            "unit": "ns",
            "range": "± 22920.879614363985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6464.404255319149,
            "unit": "ns",
            "range": "± 1209.2812142965404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27009.395833333332,
            "unit": "ns",
            "range": "± 5061.336400344887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5619432.474817154,
            "unit": "ns",
            "range": "± 493580.3181090191"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6257488.380952381,
            "unit": "ns",
            "range": "± 145132.31742981166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32826040,
            "unit": "ns",
            "range": "± 6835256.171344686"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 11087530.861702127,
            "unit": "ns",
            "range": "± 3158311.0778928166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 42998086.457446806,
            "unit": "ns",
            "range": "± 11712524.344600456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7485136.713778409,
            "unit": "ns",
            "range": "± 672671.9181513322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998782.6209821429,
            "unit": "ns",
            "range": "± 96829.88474799466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347019.0096679688,
            "unit": "ns",
            "range": "± 30074.79542312038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2914043.964477539,
            "unit": "ns",
            "range": "± 260632.68867804212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880388.1274186955,
            "unit": "ns",
            "range": "± 46513.01741587187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 855302.1544099507,
            "unit": "ns",
            "range": "± 48537.517773179"
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
          "id": "e9ba50938e53aaa87fcf3d3ec943201b191b21e0",
          "message": "Merge pull request #2765 from moreal/renew-copyright-years",
          "timestamp": "2023-02-02T12:10:22+09:00",
          "tree_id": "753222425a63a7b9126c103b5a701a5d57de1841",
          "url": "https://github.com/planetarium/libplanet/commit/e9ba50938e53aaa87fcf3d3ec943201b191b21e0"
        },
        "date": 1675308718883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139008.1235955056,
            "unit": "ns",
            "range": "± 11670.507306512804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 140443.84210526315,
            "unit": "ns",
            "range": "± 28812.469887302595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298590.2272727273,
            "unit": "ns",
            "range": "± 45148.13171290862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276562.4479166667,
            "unit": "ns",
            "range": "± 43132.1119594377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4171116.5918367347,
            "unit": "ns",
            "range": "± 442956.47454013757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11701898.469696969,
            "unit": "ns",
            "range": "± 1136818.0532157798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32216.644444444446,
            "unit": "ns",
            "range": "± 7068.770332030264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79064.1404494382,
            "unit": "ns",
            "range": "± 19539.14737790823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70574.52150537634,
            "unit": "ns",
            "range": "± 13994.210421657217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155824.34020618556,
            "unit": "ns",
            "range": "± 39372.81324348021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8460.940860215054,
            "unit": "ns",
            "range": "± 1274.9533960993786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32750.402173913044,
            "unit": "ns",
            "range": "± 5061.542897853224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5945033.386916036,
            "unit": "ns",
            "range": "± 752896.6655316235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7447607.335051547,
            "unit": "ns",
            "range": "± 903341.6547293846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32381929.697916668,
            "unit": "ns",
            "range": "± 3194045.038343172"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8189178.611111111,
            "unit": "ns",
            "range": "± 1023656.0435035799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35278914.434343435,
            "unit": "ns",
            "range": "± 3712159.7764361594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8312589.705369016,
            "unit": "ns",
            "range": "± 321530.9448687434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2167272.0880126953,
            "unit": "ns",
            "range": "± 66237.6151685423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451951.8319163602,
            "unit": "ns",
            "range": "± 59095.75490673257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174083.4161750637,
            "unit": "ns",
            "range": "± 276569.4192670334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965233.0396144701,
            "unit": "ns",
            "range": "± 54168.070660229336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834927.6924316406,
            "unit": "ns",
            "range": "± 43464.43652472975"
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
          "id": "adf33364339535ea69cd14f13959a77b93cc3dd2",
          "message": "Merge pull request #2768 from moreal/upgrade-docfx",
          "timestamp": "2023-02-03T12:39:42+09:00",
          "tree_id": "b74ca2e06d37677af4d179cc47cd5fd8c7be1dc7",
          "url": "https://github.com/planetarium/libplanet/commit/adf33364339535ea69cd14f13959a77b93cc3dd2"
        },
        "date": 1675396998962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 158956.6208791209,
            "unit": "ns",
            "range": "± 26562.419661718057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144412.95833333334,
            "unit": "ns",
            "range": "± 32108.790352050477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286301.26086956525,
            "unit": "ns",
            "range": "± 45870.71630887663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256253.63829787233,
            "unit": "ns",
            "range": "± 28849.71520175899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3916777.462962963,
            "unit": "ns",
            "range": "± 163460.48926831898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10773081.172413792,
            "unit": "ns",
            "range": "± 459648.7604382568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29326.586021505376,
            "unit": "ns",
            "range": "± 4382.849246125059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74652.88144329897,
            "unit": "ns",
            "range": "± 12542.441846290087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53536.21875,
            "unit": "ns",
            "range": "± 7315.46703650362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124206.29569892473,
            "unit": "ns",
            "range": "± 16963.889145680536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7955.0053763440865,
            "unit": "ns",
            "range": "± 1271.1869207440661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34574.24731182796,
            "unit": "ns",
            "range": "± 6637.769800716389"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5379240.6268092105,
            "unit": "ns",
            "range": "± 348171.5858973112"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6781125.0337078655,
            "unit": "ns",
            "range": "± 663642.7798739704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28581670.694444444,
            "unit": "ns",
            "range": "± 947538.2584903991"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7689441.378947369,
            "unit": "ns",
            "range": "± 705564.6866099848"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33544814.671875,
            "unit": "ns",
            "range": "± 1546660.4877632796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6701496.510416667,
            "unit": "ns",
            "range": "± 75819.99884524244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2108346.19921875,
            "unit": "ns",
            "range": "± 43561.47937662029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1464618.1070861816,
            "unit": "ns",
            "range": "± 66254.94486954056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230504.127837171,
            "unit": "ns",
            "range": "± 209509.95954592415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898519.5106502757,
            "unit": "ns",
            "range": "± 48458.07888131013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926052.6664151278,
            "unit": "ns",
            "range": "± 39605.521285057635"
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
          "id": "7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790",
          "message": "Merge pull request #2779 from greymistcube/merge/0.46.1-to-main\n\n🔀 Merge 0.46.1 to main",
          "timestamp": "2023-02-03T03:36:31-05:00",
          "tree_id": "c2c372a632e6731bdff78b0a41c86c92555cd851",
          "url": "https://github.com/planetarium/libplanet/commit/7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790"
        },
        "date": 1675414677719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 157668.47872340426,
            "unit": "ns",
            "range": "± 6135.088141138435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 134056.20618556702,
            "unit": "ns",
            "range": "± 18301.76108781278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267352.125,
            "unit": "ns",
            "range": "± 27959.5388329749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260350.51136363635,
            "unit": "ns",
            "range": "± 21236.953369661023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215080.880434782,
            "unit": "ns",
            "range": "± 283286.25708073046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11445541.91935484,
            "unit": "ns",
            "range": "± 748816.0135273017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35942.42222222222,
            "unit": "ns",
            "range": "± 6452.987565614281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87464.51063829787,
            "unit": "ns",
            "range": "± 16666.723695490396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71250.41860465116,
            "unit": "ns",
            "range": "± 5242.537599439049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154495.2365591398,
            "unit": "ns",
            "range": "± 24609.162020606775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10460.511111111111,
            "unit": "ns",
            "range": "± 1230.883023170394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36417.666666666664,
            "unit": "ns",
            "range": "± 3407.3079964901526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5414661.307378472,
            "unit": "ns",
            "range": "± 422532.77762517694"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6754956.833333333,
            "unit": "ns",
            "range": "± 116613.91141140352"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28272430.64285714,
            "unit": "ns",
            "range": "± 455887.53666832845"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7638390.888888889,
            "unit": "ns",
            "range": "± 533087.7089227742"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33274432.204545453,
            "unit": "ns",
            "range": "± 1233985.9782996401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8314244.260094804,
            "unit": "ns",
            "range": "± 489340.189504809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2269578.0733695654,
            "unit": "ns",
            "range": "± 81884.57918683012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1453052.4268329327,
            "unit": "ns",
            "range": "± 21306.182525620035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3299921.427861753,
            "unit": "ns",
            "range": "± 258824.68656923852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961609.7005171343,
            "unit": "ns",
            "range": "± 52585.63287765089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836601.1856742527,
            "unit": "ns",
            "range": "± 20491.299192564962"
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
          "id": "a6759f47790a09d0af4410cfe3837ec937d85179",
          "message": "Merge pull request #2781 from greymistcube/refactor/address-hex-exception\n\nUpdated `DeriveAddress()` to be more stringent",
          "timestamp": "2023-02-03T04:33:13-05:00",
          "tree_id": "515a3472f38eeb6b9789eb6418e6200660c8d39a",
          "url": "https://github.com/planetarium/libplanet/commit/a6759f47790a09d0af4410cfe3837ec937d85179"
        },
        "date": 1675418086558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144512.57954545456,
            "unit": "ns",
            "range": "± 15565.82832642878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 147441.02688172043,
            "unit": "ns",
            "range": "± 20293.640737492664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291870.8894736842,
            "unit": "ns",
            "range": "± 42613.32592074394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252179.7882352941,
            "unit": "ns",
            "range": "± 13435.308214245204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3928120.052631579,
            "unit": "ns",
            "range": "± 84184.13963480668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10660506.692307692,
            "unit": "ns",
            "range": "± 94883.36842617592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31538.010752688173,
            "unit": "ns",
            "range": "± 4245.5781075460645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74761.41111111111,
            "unit": "ns",
            "range": "± 11503.18539141717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68723.74242424243,
            "unit": "ns",
            "range": "± 3152.3625526584447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139379.44791666666,
            "unit": "ns",
            "range": "± 21286.552897307967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9661.829787234043,
            "unit": "ns",
            "range": "± 1090.3020829139077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35711.23469387755,
            "unit": "ns",
            "range": "± 4128.5422499109045"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6332686.008144947,
            "unit": "ns",
            "range": "± 705895.3151741733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6363652.532608695,
            "unit": "ns",
            "range": "± 356215.99972092034"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30014075.5,
            "unit": "ns",
            "range": "± 1373252.8276315432"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7639524.206896552,
            "unit": "ns",
            "range": "± 797417.9178006441"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35104569.43617021,
            "unit": "ns",
            "range": "± 2617747.3562891586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7378670.435096154,
            "unit": "ns",
            "range": "± 80512.92443628584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2152379.437686012,
            "unit": "ns",
            "range": "± 49004.7292687282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332363.0993088942,
            "unit": "ns",
            "range": "± 13645.238979876287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2917488.632043087,
            "unit": "ns",
            "range": "± 220473.91733098004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815737.2253417969,
            "unit": "ns",
            "range": "± 14983.824966181068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792615.6056281888,
            "unit": "ns",
            "range": "± 28212.521181439613"
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
          "id": "33947f44a808a7d03c3a526ec5022d753886a251",
          "message": "Merge pull request #2780 from dahlia/secp256k1",
          "timestamp": "2023-02-03T18:39:03+09:00",
          "tree_id": "625c4a4d87f1aaea852b62710a37ae3481e5784e",
          "url": "https://github.com/planetarium/libplanet/commit/33947f44a808a7d03c3a526ec5022d753886a251"
        },
        "date": 1675418356532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136380.35955056178,
            "unit": "ns",
            "range": "± 13528.15248022971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133752.84444444443,
            "unit": "ns",
            "range": "± 24594.20629952551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294509.1237113402,
            "unit": "ns",
            "range": "± 53645.18895993411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253629.0888888889,
            "unit": "ns",
            "range": "± 30126.85719200214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937201.5206185565,
            "unit": "ns",
            "range": "± 332941.20283145155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11224581.295918368,
            "unit": "ns",
            "range": "± 803701.9640505302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24677.652173913044,
            "unit": "ns",
            "range": "± 2802.929113258355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67088.08333333333,
            "unit": "ns",
            "range": "± 11599.882170605435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54349.62222222222,
            "unit": "ns",
            "range": "± 10839.498139816997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122621.28260869565,
            "unit": "ns",
            "range": "± 22990.823692554204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8455.744680851063,
            "unit": "ns",
            "range": "± 1469.6855485206836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31491.26923076923,
            "unit": "ns",
            "range": "± 7122.463119637636"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5436008.23953125,
            "unit": "ns",
            "range": "± 559788.7513098639"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6398326.25,
            "unit": "ns",
            "range": "± 112509.18311468328"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27531741.172413792,
            "unit": "ns",
            "range": "± 1175300.884977584"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7348924.9130434785,
            "unit": "ns",
            "range": "± 179066.51037912065"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32229896.326530613,
            "unit": "ns",
            "range": "± 2041829.2930154507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7519402.657384072,
            "unit": "ns",
            "range": "± 324395.34972375864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2173936.1135602677,
            "unit": "ns",
            "range": "± 50597.25220963517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413136.4909237132,
            "unit": "ns",
            "range": "± 35776.5099452683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606245.5066964286,
            "unit": "ns",
            "range": "± 42018.21886949378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851214.4651227678,
            "unit": "ns",
            "range": "± 14052.292535505956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905516.0444196429,
            "unit": "ns",
            "range": "± 43851.44315580414"
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
          "id": "a0dc47eb525c41cb1037ac955230672edffc310e",
          "message": "Merge pull request #2778 from greymistcube/refactor/introduce-ibencodable\n\n♻️ Introduce `IBencodable`",
          "timestamp": "2023-02-06T00:40:28-05:00",
          "tree_id": "67584a25f801cb9f64bb5fbb95582aae68e9725a",
          "url": "https://github.com/planetarium/libplanet/commit/a0dc47eb525c41cb1037ac955230672edffc310e"
        },
        "date": 1675663105583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150739.5810810811,
            "unit": "ns",
            "range": "± 7435.917466505277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141173.16842105263,
            "unit": "ns",
            "range": "± 15096.697357335881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256813.25252525252,
            "unit": "ns",
            "range": "± 28064.09350017564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213617.23958333334,
            "unit": "ns",
            "range": "± 19897.805449078147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4012928.1117647057,
            "unit": "ns",
            "range": "± 215738.3964526909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10427412.027027028,
            "unit": "ns",
            "range": "± 521128.7793570778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25223.747368421053,
            "unit": "ns",
            "range": "± 3765.5431807558143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70961.5612244898,
            "unit": "ns",
            "range": "± 11003.106453410279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63783.602150537634,
            "unit": "ns",
            "range": "± 6363.17211217218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120592.09375,
            "unit": "ns",
            "range": "± 19592.062198531283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6988.09375,
            "unit": "ns",
            "range": "± 1963.980839643514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22024.556701030928,
            "unit": "ns",
            "range": "± 3574.1938571546925"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5135156.3570963545,
            "unit": "ns",
            "range": "± 253571.9579442797"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6581197.266666667,
            "unit": "ns",
            "range": "± 118087.9731202043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27336574.804347824,
            "unit": "ns",
            "range": "± 687954.3524992598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7342284.071428572,
            "unit": "ns",
            "range": "± 118880.7132131677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31171814.970588237,
            "unit": "ns",
            "range": "± 997457.105362499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6397366.56265625,
            "unit": "ns",
            "range": "± 163745.42642364587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902018.3969029018,
            "unit": "ns",
            "range": "± 21744.198867346015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286825.260967548,
            "unit": "ns",
            "range": "± 34278.580937109495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602556.6131441887,
            "unit": "ns",
            "range": "± 107421.32915810317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812834.9664713541,
            "unit": "ns",
            "range": "± 13742.072171527008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747032.3835018382,
            "unit": "ns",
            "range": "± 14546.700389541786"
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
          "id": "fc0bf18df59f7db4696ac3d0651606c9249d8970",
          "message": "Merge pull request #2785 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:25:12+09:00",
          "tree_id": "53db093dbd48af0fef71deff416cfa11e689ac2c",
          "url": "https://github.com/planetarium/libplanet/commit/fc0bf18df59f7db4696ac3d0651606c9249d8970"
        },
        "date": 1675676626949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140945.6511627907,
            "unit": "ns",
            "range": "± 12173.506265191047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122714.76288659793,
            "unit": "ns",
            "range": "± 16648.23153506927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269709.98979591834,
            "unit": "ns",
            "range": "± 41458.29590672518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234223.98888888888,
            "unit": "ns",
            "range": "± 18770.72662732726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3978951.5943396227,
            "unit": "ns",
            "range": "± 165450.99418038983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11198239.494252874,
            "unit": "ns",
            "range": "± 644992.5972187384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28744.613402061856,
            "unit": "ns",
            "range": "± 4425.682251727525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66874.69101123596,
            "unit": "ns",
            "range": "± 7928.992778055971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57960.163157894734,
            "unit": "ns",
            "range": "± 9007.942949597464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121150.34020618557,
            "unit": "ns",
            "range": "± 18547.624313218774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7202.446808510638,
            "unit": "ns",
            "range": "± 1244.9738660902763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26745.25,
            "unit": "ns",
            "range": "± 4362.618315693117"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5161659.475082237,
            "unit": "ns",
            "range": "± 586792.8010497047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6491361.705882353,
            "unit": "ns",
            "range": "± 128952.08548563915"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27105756.40425532,
            "unit": "ns",
            "range": "± 1047626.4932314474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7724014.34375,
            "unit": "ns",
            "range": "± 1292228.9341401898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35110746.56043956,
            "unit": "ns",
            "range": "± 3122030.4049706683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6921622.010602678,
            "unit": "ns",
            "range": "± 122430.6871604075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2098605.09132339,
            "unit": "ns",
            "range": "± 66328.28471711023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325977.1725510817,
            "unit": "ns",
            "range": "± 15179.6126622968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620855.1441326533,
            "unit": "ns",
            "range": "± 153555.93554012774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789264.4845377604,
            "unit": "ns",
            "range": "± 8324.09930724616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727475.7075570914,
            "unit": "ns",
            "range": "± 3013.210179618207"
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
          "id": "1ee05f822563c1ea82107fb0f9094c9c77b31765",
          "message": "Merge pull request #2787 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:49:39+09:00",
          "tree_id": "5d2a23ed4ec68dfe81453559fc48831b80b6e4e1",
          "url": "https://github.com/planetarium/libplanet/commit/1ee05f822563c1ea82107fb0f9094c9c77b31765"
        },
        "date": 1675678118997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 143626.6914893617,
            "unit": "ns",
            "range": "± 10098.043820225557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129610.9247311828,
            "unit": "ns",
            "range": "± 15930.068487827717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272446.8854166667,
            "unit": "ns",
            "range": "± 38328.30375196014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218434.54237288135,
            "unit": "ns",
            "range": "± 9574.60219633177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291869.633333334,
            "unit": "ns",
            "range": "± 47415.97276215002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13114759.02173913,
            "unit": "ns",
            "range": "± 317099.75149883743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26587.340206185567,
            "unit": "ns",
            "range": "± 4101.481325099196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68319.61458333333,
            "unit": "ns",
            "range": "± 9422.103757005922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49470.555555555555,
            "unit": "ns",
            "range": "± 2759.311964847544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121149.88043478261,
            "unit": "ns",
            "range": "± 15326.00705605509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6761.030612244898,
            "unit": "ns",
            "range": "± 1102.2150654929471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26753.588888888888,
            "unit": "ns",
            "range": "± 5065.770522476519"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5810956.049683989,
            "unit": "ns",
            "range": "± 403997.249066561"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7462446.045454546,
            "unit": "ns",
            "range": "± 153501.45769176865"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30212554,
            "unit": "ns",
            "range": "± 1524811.687375191"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9068900.315789474,
            "unit": "ns",
            "range": "± 2076657.0739128967"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36237147.313725494,
            "unit": "ns",
            "range": "± 1445571.5916632079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6879423.130580357,
            "unit": "ns",
            "range": "± 40086.58876208775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2285815.2781808036,
            "unit": "ns",
            "range": "± 17470.79604678827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1458173.0160435268,
            "unit": "ns",
            "range": "± 10497.735252906048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3012064.8484933036,
            "unit": "ns",
            "range": "± 17627.68992598603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913379.0331169578,
            "unit": "ns",
            "range": "± 29392.561964482837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854447.7453264509,
            "unit": "ns",
            "range": "± 3446.2878913297513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/planetarium/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675679099667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136750.5744680851,
            "unit": "ns",
            "range": "± 15064.01972692231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110586.07575757576,
            "unit": "ns",
            "range": "± 16766.006977245328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241275.24,
            "unit": "ns",
            "range": "± 31058.048061107456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217233.36458333334,
            "unit": "ns",
            "range": "± 14160.652876801221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715941.125,
            "unit": "ns",
            "range": "± 69999.35948552196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10105543.722222222,
            "unit": "ns",
            "range": "± 208037.1792090809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23137.75,
            "unit": "ns",
            "range": "± 4572.508104463524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63404.97826086957,
            "unit": "ns",
            "range": "± 6786.042865231032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50746.43434343435,
            "unit": "ns",
            "range": "± 6826.066057373369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109644.03092783505,
            "unit": "ns",
            "range": "± 18510.47431323997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5530.63829787234,
            "unit": "ns",
            "range": "± 763.1542333590542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23374.43157894737,
            "unit": "ns",
            "range": "± 3246.845577691545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4854963.802148437,
            "unit": "ns",
            "range": "± 172206.40661081573"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5908085.871428572,
            "unit": "ns",
            "range": "± 171514.889453997"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26340986.710144926,
            "unit": "ns",
            "range": "± 1270569.9283399198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6858400.684210527,
            "unit": "ns",
            "range": "± 297084.6583483136"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30178218,
            "unit": "ns",
            "range": "± 1164629.7221933748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6576084.079503677,
            "unit": "ns",
            "range": "± 125644.39748385748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948172.4404947916,
            "unit": "ns",
            "range": "± 26145.871914020834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276122.1329427084,
            "unit": "ns",
            "range": "± 23436.597336853683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2497831.9581473214,
            "unit": "ns",
            "range": "± 17799.976203883652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794563.896623884,
            "unit": "ns",
            "range": "± 4050.4114709418423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724402.38515625,
            "unit": "ns",
            "range": "± 7666.12482758953"
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
          "id": "499dfc25de2a571c64cc8b4f73a1c319a9c337eb",
          "message": "Merge pull request #2784 from greymistcube/fix/stage-policy-tx-lifetime\n\nFix `VolatileStagePolicy<T>`'s `Expired()`",
          "timestamp": "2023-02-06T03:53:36-05:00",
          "tree_id": "1e3c47f25243a823a52dd1aa65efed780dda95f5",
          "url": "https://github.com/planetarium/libplanet/commit/499dfc25de2a571c64cc8b4f73a1c319a9c337eb"
        },
        "date": 1675679241822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 1292455.1593406594,
            "unit": "ns",
            "range": "± 592961.0906948508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 1205023.7765957448,
            "unit": "ns",
            "range": "± 370226.20823074086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 1466225.3111111112,
            "unit": "ns",
            "range": "± 467615.2855289582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 1635897.5104166667,
            "unit": "ns",
            "range": "± 434278.52251108433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13064811.795698924,
            "unit": "ns",
            "range": "± 2773702.409737552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 51014636.75,
            "unit": "ns",
            "range": "± 12862493.076881085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 321588.8958333333,
            "unit": "ns",
            "range": "± 107517.02601585619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 565780.4166666666,
            "unit": "ns",
            "range": "± 192958.0073940096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 597952.7421052632,
            "unit": "ns",
            "range": "± 165108.33437201267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 1330711.085106383,
            "unit": "ns",
            "range": "± 509745.0908725609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 144601.3510638298,
            "unit": "ns",
            "range": "± 62043.141881224146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 338128.7291666667,
            "unit": "ns",
            "range": "± 107563.98812207494"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 21328080.022786457,
            "unit": "ns",
            "range": "± 3578267.3744320865"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 27164136.87894737,
            "unit": "ns",
            "range": "± 5951834.374837184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 160774645.51612905,
            "unit": "ns",
            "range": "± 26838215.27230471"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 46387972.84042553,
            "unit": "ns",
            "range": "± 10721129.720935304"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 177774527.22340426,
            "unit": "ns",
            "range": "± 31435167.573660027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 26638020.710695878,
            "unit": "ns",
            "range": "± 4899031.658496448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 5346840.211101973,
            "unit": "ns",
            "range": "± 956937.0919028403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2838150.299538352,
            "unit": "ns",
            "range": "± 230837.05754266234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 9127913.118206521,
            "unit": "ns",
            "range": "± 2077819.8871214169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1439970.7001608456,
            "unit": "ns",
            "range": "± 91388.84339594461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1284363.2601519574,
            "unit": "ns",
            "range": "± 111258.84774265518"
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
          "id": "aa1d444f32ba468fb15186d7113078a52f164b84",
          "message": "Merge pull request #2789 from greymistcube/optimization/to-hex\n\nOptimized `ByteUtil.Hex()`",
          "timestamp": "2023-02-06T23:04:55-05:00",
          "tree_id": "5fe2aa515e26af275b2fb61b507c9812bb1791fb",
          "url": "https://github.com/planetarium/libplanet/commit/aa1d444f32ba468fb15186d7113078a52f164b84"
        },
        "date": 1675743894313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137318.17032967033,
            "unit": "ns",
            "range": "± 15609.291506489151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 134086.8404255319,
            "unit": "ns",
            "range": "± 10023.389063234641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271205.8229166667,
            "unit": "ns",
            "range": "± 34195.95721518917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239032.53125,
            "unit": "ns",
            "range": "± 7368.878876886072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3823850.2,
            "unit": "ns",
            "range": "± 45045.078913398356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10736426.94,
            "unit": "ns",
            "range": "± 276623.9536142402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29853.133333333335,
            "unit": "ns",
            "range": "± 3185.8020534232046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72098.51041666667,
            "unit": "ns",
            "range": "± 10331.573950498887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79425.62087912088,
            "unit": "ns",
            "range": "± 18305.841713529084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162058.3125,
            "unit": "ns",
            "range": "± 32146.67934142286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11282.242105263158,
            "unit": "ns",
            "range": "± 2059.4710419611074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28812.29213483146,
            "unit": "ns",
            "range": "± 4686.025693490282"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6493980.083915441,
            "unit": "ns",
            "range": "± 987350.8228891022"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7293357.063157895,
            "unit": "ns",
            "range": "± 629038.981683776"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31250046.14893617,
            "unit": "ns",
            "range": "± 2297091.666644403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8022102.757894737,
            "unit": "ns",
            "range": "± 940470.7609285839"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37505083.64835165,
            "unit": "ns",
            "range": "± 3685972.904154658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7542958.551822917,
            "unit": "ns",
            "range": "± 332496.92295323906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2233071.9611150566,
            "unit": "ns",
            "range": "± 69498.35988842948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393789.483173077,
            "unit": "ns",
            "range": "± 18646.265041896237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3368066.9204644095,
            "unit": "ns",
            "range": "± 110256.16354299198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963422.3308105469,
            "unit": "ns",
            "range": "± 34139.54380511823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837460.3892822266,
            "unit": "ns",
            "range": "± 29173.70285274506"
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
          "id": "ff823f8435133689fcbd3f26508e40a2eab969ae",
          "message": "Merge pull request #2794 from greymistcube/refactor/block-candidate-table\n\n♻️ Refactor `BlockCandidateTable`",
          "timestamp": "2023-02-09T21:28:56-05:00",
          "tree_id": "14149c45e4f6ef1a8c5f8a1337e278ea2c7177f0",
          "url": "https://github.com/planetarium/libplanet/commit/ff823f8435133689fcbd3f26508e40a2eab969ae"
        },
        "date": 1675997505197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139945.87209302327,
            "unit": "ns",
            "range": "± 7568.773897202686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110223.22448979592,
            "unit": "ns",
            "range": "± 12701.251035492942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248520.7857142857,
            "unit": "ns",
            "range": "± 25222.50745166873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208972.13333333333,
            "unit": "ns",
            "range": "± 6183.129827552371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4272504.3125,
            "unit": "ns",
            "range": "± 130619.35300377582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10820588.56,
            "unit": "ns",
            "range": "± 284909.7618836357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20239.05319148936,
            "unit": "ns",
            "range": "± 1929.4989341601586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60604.854166666664,
            "unit": "ns",
            "range": "± 8485.553247452455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53144.71875,
            "unit": "ns",
            "range": "± 3874.0279859411526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121928.05208333333,
            "unit": "ns",
            "range": "± 20093.894998164466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7602.778947368421,
            "unit": "ns",
            "range": "± 948.4737704170282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20944.12222222222,
            "unit": "ns",
            "range": "± 1466.5473523140245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5295721.453993056,
            "unit": "ns",
            "range": "± 259884.09219263378"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7570514.884615385,
            "unit": "ns",
            "range": "± 96777.62172849194"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29278188.333333332,
            "unit": "ns",
            "range": "± 436532.95020972873"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7428352.483146068,
            "unit": "ns",
            "range": "± 429300.38545064314"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34398363.21428572,
            "unit": "ns",
            "range": "± 505509.83100463555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7352580.233774038,
            "unit": "ns",
            "range": "± 51644.93050758255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2272547.9933035714,
            "unit": "ns",
            "range": "± 21894.178343815252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511334.2114955357,
            "unit": "ns",
            "range": "± 13770.940700197309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3237162.2873883927,
            "unit": "ns",
            "range": "± 43236.71083619412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041329.2605168269,
            "unit": "ns",
            "range": "± 3467.230365672234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 885535.8895182292,
            "unit": "ns",
            "range": "± 15811.396679045063"
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
          "id": "9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43",
          "message": "Merge pull request #2790 from greymistcube/optimization/parse-hex\n\nOptimized `ParseHex()`",
          "timestamp": "2023-02-10T02:25:36-05:00",
          "tree_id": "850470ee0ab2bbd673ccce65a3e9271a19e85c60",
          "url": "https://github.com/planetarium/libplanet/commit/9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43"
        },
        "date": 1676015655968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 177636.06842105262,
            "unit": "ns",
            "range": "± 31402.726966778795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138413.17777777778,
            "unit": "ns",
            "range": "± 17050.168255012024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287874.306122449,
            "unit": "ns",
            "range": "± 48950.10297924325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277676.6224489796,
            "unit": "ns",
            "range": "± 46729.2653961544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4623629.521276596,
            "unit": "ns",
            "range": "± 554952.0440873862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13048545.212765958,
            "unit": "ns",
            "range": "± 960249.9286182938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29934.176470588234,
            "unit": "ns",
            "range": "± 4345.233382346549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84792.1129032258,
            "unit": "ns",
            "range": "± 20208.21562644879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71623.47777777778,
            "unit": "ns",
            "range": "± 10803.76567644983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 164489.06043956045,
            "unit": "ns",
            "range": "± 42251.46566720333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10031.384210526316,
            "unit": "ns",
            "range": "± 1037.8377980015982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28690.6625,
            "unit": "ns",
            "range": "± 3181.7553766839087"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6198695.80798969,
            "unit": "ns",
            "range": "± 531676.8289162648"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 11562713.638297873,
            "unit": "ns",
            "range": "± 3982597.4844914824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34684858.21348315,
            "unit": "ns",
            "range": "± 5374054.107709871"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8190135.138297873,
            "unit": "ns",
            "range": "± 607865.4528300987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36627528.96907216,
            "unit": "ns",
            "range": "± 2587205.46417683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8589660.49868421,
            "unit": "ns",
            "range": "± 491834.9236347711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2476420.27347819,
            "unit": "ns",
            "range": "± 177653.09216877446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1561369.7735381764,
            "unit": "ns",
            "range": "± 94289.7616054926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3567585.265625,
            "unit": "ns",
            "range": "± 178766.02506113166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973018.2811869959,
            "unit": "ns",
            "range": "± 59654.59818635371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890268.0281850961,
            "unit": "ns",
            "range": "± 41133.851110790376"
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
          "id": "ea9b0cab632b0a73dd119be7107c790233005439",
          "message": "Merge pull request #2795 from greymistcube/refactor/ibencodable-txid\n\n♻️ `IBencodable` `TxId`",
          "timestamp": "2023-02-12T20:32:42-05:00",
          "tree_id": "a0bd10f142ab6cdc3ad65891de4cf9594670a77d",
          "url": "https://github.com/planetarium/libplanet/commit/ea9b0cab632b0a73dd119be7107c790233005439"
        },
        "date": 1676253452294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 155057.23529411765,
            "unit": "ns",
            "range": "± 16512.705448523324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 146480.54545454544,
            "unit": "ns",
            "range": "± 16528.326030703185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272816.7978723404,
            "unit": "ns",
            "range": "± 38982.42377802132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236603.3,
            "unit": "ns",
            "range": "± 17665.1205182362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215947.422222222,
            "unit": "ns",
            "range": "± 487341.98917747714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13240999.074468086,
            "unit": "ns",
            "range": "± 2550910.210423441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27918.62222222222,
            "unit": "ns",
            "range": "± 4545.072179814677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72637.18085106384,
            "unit": "ns",
            "range": "± 11331.284117991225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65329.593406593405,
            "unit": "ns",
            "range": "± 8268.676420991884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137052,
            "unit": "ns",
            "range": "± 20368.477674440805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9830.511235955057,
            "unit": "ns",
            "range": "± 913.4416622460703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27947.971264367818,
            "unit": "ns",
            "range": "± 3647.5652881259584"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 9010775.015226403,
            "unit": "ns",
            "range": "± 1961786.6165204677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 10030829.17032967,
            "unit": "ns",
            "range": "± 2466241.874603913"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 45771755.85263158,
            "unit": "ns",
            "range": "± 11235416.56194312"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 11323749.043478262,
            "unit": "ns",
            "range": "± 3048836.999872073"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 49480277.96236559,
            "unit": "ns",
            "range": "± 10048519.669358902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7710535.075631649,
            "unit": "ns",
            "range": "± 500773.92978148116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2261741.4820792214,
            "unit": "ns",
            "range": "± 96951.29040415058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401853.937898597,
            "unit": "ns",
            "range": "± 55596.28813709708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2838306.8122558594,
            "unit": "ns",
            "range": "± 199941.84965369295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972228.9319661459,
            "unit": "ns",
            "range": "± 17216.5461329786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807128.3060360863,
            "unit": "ns",
            "range": "± 37078.927486349785"
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
          "id": "61697453dd975aabd31373999dcee5b0f155d95a",
          "message": "Merge pull request #2798 from greymistcube/revert/serializabe-address-and-boundpeer\n\n♻️ Revert to add `Serializabe` attribute back into `Address` and `BoundPeer`",
          "timestamp": "2023-02-12T21:32:01-05:00",
          "tree_id": "6684aa85a6f8815b1cc27dae4ff51df70f2ef0be",
          "url": "https://github.com/planetarium/libplanet/commit/61697453dd975aabd31373999dcee5b0f155d95a"
        },
        "date": 1676256942602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145164.88461538462,
            "unit": "ns",
            "range": "± 13703.522636955013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 137462.15263157894,
            "unit": "ns",
            "range": "± 19971.316959083575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262239.1956521739,
            "unit": "ns",
            "range": "± 37323.905751899605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244418.52298850575,
            "unit": "ns",
            "range": "± 16397.570277314422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161135.822222222,
            "unit": "ns",
            "range": "± 428931.9546102456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11885549.925531914,
            "unit": "ns",
            "range": "± 2266233.5059500355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32065.647727272728,
            "unit": "ns",
            "range": "± 5007.735330350972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70414.36559139784,
            "unit": "ns",
            "range": "± 10884.7139841644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65118.818681318684,
            "unit": "ns",
            "range": "± 4514.98626029439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151073.1595744681,
            "unit": "ns",
            "range": "± 27740.606135396687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9512.467391304348,
            "unit": "ns",
            "range": "± 1100.4425927888694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26148.715909090908,
            "unit": "ns",
            "range": "± 2843.4224398140777"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 8403633.37944079,
            "unit": "ns",
            "range": "± 1468079.878579014"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9815894.163043479,
            "unit": "ns",
            "range": "± 3651605.739310456"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35565830.02247191,
            "unit": "ns",
            "range": "± 7048311.871721783"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10758948.826315789,
            "unit": "ns",
            "range": "± 4184361.8906162917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 43838915.15957447,
            "unit": "ns",
            "range": "± 9636122.858577805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7902090.751236155,
            "unit": "ns",
            "range": "± 404257.885623617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2296755.7215286726,
            "unit": "ns",
            "range": "± 208707.36965910354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449956.397484189,
            "unit": "ns",
            "range": "± 77805.13997580604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2988184.93035827,
            "unit": "ns",
            "range": "± 238318.90478756613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952935.6433747944,
            "unit": "ns",
            "range": "± 48034.56709043679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826753.3416678951,
            "unit": "ns",
            "range": "± 34236.69692060998"
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
          "id": "2a8bd98475f542e82e61e14d84d12d590a3aa229",
          "message": "Merge pull request #2801 from greymistcube/chore/identity-hex-format\n\n🧹 Aligned identity with request id format",
          "timestamp": "2023-02-12T22:26:49-05:00",
          "tree_id": "293397eeca5dbd110d4e2a7e1abe239639b5afb8",
          "url": "https://github.com/planetarium/libplanet/commit/2a8bd98475f542e82e61e14d84d12d590a3aa229"
        },
        "date": 1676260498802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 169074.2525773196,
            "unit": "ns",
            "range": "± 32980.70113718998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139656.24736842106,
            "unit": "ns",
            "range": "± 28989.476218165506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280594.875,
            "unit": "ns",
            "range": "± 70244.60703588794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262928.10215053766,
            "unit": "ns",
            "range": "± 46132.811887584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5206105.08,
            "unit": "ns",
            "range": "± 997692.3921488732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14609819.55,
            "unit": "ns",
            "range": "± 2044100.5552188691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32952.032258064515,
            "unit": "ns",
            "range": "± 7268.740173198506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78520.43956043955,
            "unit": "ns",
            "range": "± 17664.883892569833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72628.0989010989,
            "unit": "ns",
            "range": "± 16666.6113399448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171787.30412371134,
            "unit": "ns",
            "range": "± 35731.85286548706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11589.556701030928,
            "unit": "ns",
            "range": "± 1964.391858656432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26351.978494623654,
            "unit": "ns",
            "range": "± 4921.042148327876"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5729821.661984707,
            "unit": "ns",
            "range": "± 433571.87443261984"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7112725.095959596,
            "unit": "ns",
            "range": "± 1165781.563271925"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36146898.66,
            "unit": "ns",
            "range": "± 4990746.075271696"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7745864.608247423,
            "unit": "ns",
            "range": "± 1176201.7135650965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41888361.37373737,
            "unit": "ns",
            "range": "± 5329268.991207535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9035842.302408854,
            "unit": "ns",
            "range": "± 659217.7667051472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2762882.7232392724,
            "unit": "ns",
            "range": "± 129762.65268056533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1686953.4780520045,
            "unit": "ns",
            "range": "± 106056.51414428439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3290101.228140783,
            "unit": "ns",
            "range": "± 193871.21001811145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994434.9954624368,
            "unit": "ns",
            "range": "± 59802.15222130661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893817.9954909337,
            "unit": "ns",
            "range": "± 46994.7174538368"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a08b094e9cf5f46494f8733a1c7cc84395e8d714",
          "message": "Merge pull request #2805 from moreal/planetarium-tx-custom-actions\n\nfeat(@planetarium/tx): Support building unsigned transactions with custom actions",
          "timestamp": "2023-02-13T18:02:48+09:00",
          "tree_id": "944e0a78540836fb62bf006772212734b8fba00e",
          "url": "https://github.com/planetarium/libplanet/commit/a08b094e9cf5f46494f8733a1c7cc84395e8d714"
        },
        "date": 1676280418670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144831.20238095237,
            "unit": "ns",
            "range": "± 7749.766780446981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141799.81578947368,
            "unit": "ns",
            "range": "± 23367.67290795681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278850.22340425535,
            "unit": "ns",
            "range": "± 65630.84156119134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265950.94680851063,
            "unit": "ns",
            "range": "± 47174.83061052311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3868708.3333333335,
            "unit": "ns",
            "range": "± 78589.27669124422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11441748.364583334,
            "unit": "ns",
            "range": "± 908933.3626204383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27508.74705882353,
            "unit": "ns",
            "range": "± 2879.778946980721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74268.86263736263,
            "unit": "ns",
            "range": "± 15156.890289030254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65052.72727272727,
            "unit": "ns",
            "range": "± 6800.772487777547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140605.98913043478,
            "unit": "ns",
            "range": "± 22353.00190253706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9488.021505376344,
            "unit": "ns",
            "range": "± 1126.439301308549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26631.33908045977,
            "unit": "ns",
            "range": "± 2991.8061313013195"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7805349.3134765625,
            "unit": "ns",
            "range": "± 831561.8188090894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7731729.285714285,
            "unit": "ns",
            "range": "± 1022639.791957214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33553709.08163265,
            "unit": "ns",
            "range": "± 4250084.148848929"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8383718.447916667,
            "unit": "ns",
            "range": "± 1112548.9231050601"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35985311.07,
            "unit": "ns",
            "range": "± 2936003.017923043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8063898.713240132,
            "unit": "ns",
            "range": "± 636521.0368492178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2411387.7712109373,
            "unit": "ns",
            "range": "± 169458.606246335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1594218.3978544776,
            "unit": "ns",
            "range": "± 72694.66683732817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3544926.832993659,
            "unit": "ns",
            "range": "± 170731.52554715367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989240.6678084189,
            "unit": "ns",
            "range": "± 46600.33210404435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888772.3057930424,
            "unit": "ns",
            "range": "± 36843.870476211916"
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
          "id": "d8b507e5576f6f83e76cf143026fa3972021a5f4",
          "message": "Merge pull request #2806 from greymistcube/chore/logging\n\n🧹 Added contextual information to `BlockCandidate` logging",
          "timestamp": "2023-02-13T21:21:34-05:00",
          "tree_id": "9cf512c844b474e395973d7027f39994542df095",
          "url": "https://github.com/planetarium/libplanet/commit/d8b507e5576f6f83e76cf143026fa3972021a5f4"
        },
        "date": 1676342483883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138226.70454545456,
            "unit": "ns",
            "range": "± 9542.778882917437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108538.95454545454,
            "unit": "ns",
            "range": "± 7493.477747783791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265907.96629213484,
            "unit": "ns",
            "range": "± 31985.39943170429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222284.36170212767,
            "unit": "ns",
            "range": "± 17416.511334709543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358483.5,
            "unit": "ns",
            "range": "± 134542.1544404722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11246647.576923076,
            "unit": "ns",
            "range": "± 462391.801310014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21350.322580645163,
            "unit": "ns",
            "range": "± 1825.4878273640002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62667.44680851064,
            "unit": "ns",
            "range": "± 9002.795991457704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54306.51063829787,
            "unit": "ns",
            "range": "± 4575.742073302536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131399.68085106384,
            "unit": "ns",
            "range": "± 21611.529085743343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7667.791666666667,
            "unit": "ns",
            "range": "± 807.2262438572781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21978.489130434784,
            "unit": "ns",
            "range": "± 2620.6928011734444"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5467914.134159483,
            "unit": "ns",
            "range": "± 344876.9386523528"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7274430.866666666,
            "unit": "ns",
            "range": "± 119429.59442094904"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29605084.32352941,
            "unit": "ns",
            "range": "± 605160.9263480288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8098760.117647059,
            "unit": "ns",
            "range": "± 163595.23223220868"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34505685.04545455,
            "unit": "ns",
            "range": "± 1061968.6753868405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6946513.600260417,
            "unit": "ns",
            "range": "± 45732.011850406954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2325947.3416466345,
            "unit": "ns",
            "range": "± 20193.15560548805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1525698.7684795673,
            "unit": "ns",
            "range": "± 25082.712549783908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106805.728064904,
            "unit": "ns",
            "range": "± 17152.992798801188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1109963.5955636161,
            "unit": "ns",
            "range": "± 6788.282457770157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880494.881234976,
            "unit": "ns",
            "range": "± 8144.398637889221"
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
          "id": "d8bd683a186a051504ad01fbd43837de19efffe6",
          "message": "Merge pull request #2807 from greymistcube/chore/logging\n\n🧹  Fixed logging mistake",
          "timestamp": "2023-02-13T21:37:22-05:00",
          "tree_id": "03f1ed13f9a5ab021b4bb62f8c423a854ba70960",
          "url": "https://github.com/planetarium/libplanet/commit/d8bd683a186a051504ad01fbd43837de19efffe6"
        },
        "date": 1676343744356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144769.625,
            "unit": "ns",
            "range": "± 11534.591826540072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109525.34536082474,
            "unit": "ns",
            "range": "± 17262.706444179632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243560.0157894737,
            "unit": "ns",
            "range": "± 39506.96502526772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225212.1914893617,
            "unit": "ns",
            "range": "± 23997.862760584347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3792076.111111111,
            "unit": "ns",
            "range": "± 138121.26846398786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10982103.10638298,
            "unit": "ns",
            "range": "± 749316.6118535204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23404.13157894737,
            "unit": "ns",
            "range": "± 5284.078763994585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58503.17204301075,
            "unit": "ns",
            "range": "± 11335.611523965234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59077.594736842104,
            "unit": "ns",
            "range": "± 5926.753366696885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138768.8404255319,
            "unit": "ns",
            "range": "± 17816.138979463325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8307.677083333334,
            "unit": "ns",
            "range": "± 1257.575177158861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20266.94845360825,
            "unit": "ns",
            "range": "± 3946.2063253077154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5193014.329427083,
            "unit": "ns",
            "range": "± 273109.368142883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6651289.296610169,
            "unit": "ns",
            "range": "± 294198.50518589164"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27480953.55376344,
            "unit": "ns",
            "range": "± 1534193.684232389"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7482843.806451613,
            "unit": "ns",
            "range": "± 830866.2695518227"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31733825.092105262,
            "unit": "ns",
            "range": "± 1591219.1358483445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7421085.168014706,
            "unit": "ns",
            "range": "± 400603.2763100134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2274171.56644694,
            "unit": "ns",
            "range": "± 160359.1178401361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386748.0382965687,
            "unit": "ns",
            "range": "± 52851.82081181266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252168.59484375,
            "unit": "ns",
            "range": "± 162813.95354998906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900120.6527263209,
            "unit": "ns",
            "range": "± 52002.968223089265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782273.5364257812,
            "unit": "ns",
            "range": "± 40930.323440260254"
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
          "id": "e109a5f860146deba6c0ffda0dfc740662deb449",
          "message": "Merge pull request #2803 from greymistcube/feature/reply-zero-blocks\n\nReply with zero blocks when no corresponding blocks are found",
          "timestamp": "2023-02-14T02:18:21-05:00",
          "tree_id": "3e143c5ae13207dcae595ee410868d4004e7f2a0",
          "url": "https://github.com/planetarium/libplanet/commit/e109a5f860146deba6c0ffda0dfc740662deb449"
        },
        "date": 1676360135592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133366.05319148937,
            "unit": "ns",
            "range": "± 7936.363813007128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109003.79166666667,
            "unit": "ns",
            "range": "± 14009.069138403214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243599.08333333334,
            "unit": "ns",
            "range": "± 32163.013880662984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231972.8775510204,
            "unit": "ns",
            "range": "± 26898.06913518787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843225.024390244,
            "unit": "ns",
            "range": "± 136967.1577294148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10572321.5,
            "unit": "ns",
            "range": "± 196604.56185159372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20948.11111111111,
            "unit": "ns",
            "range": "± 3643.424828632756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62741.1030927835,
            "unit": "ns",
            "range": "± 14469.560141814765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56809.98888888889,
            "unit": "ns",
            "range": "± 5521.69596258667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127197.24468085106,
            "unit": "ns",
            "range": "± 22335.893420601667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7823.225806451613,
            "unit": "ns",
            "range": "± 907.8005207168285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20605.41,
            "unit": "ns",
            "range": "± 4583.172830456908"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6379514.040178572,
            "unit": "ns",
            "range": "± 1088053.3046067567"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8395515.918367347,
            "unit": "ns",
            "range": "± 2200768.6148502985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31267381.83870968,
            "unit": "ns",
            "range": "± 4490236.523710324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9221331.2,
            "unit": "ns",
            "range": "± 2520403.268262901"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34400604.28089888,
            "unit": "ns",
            "range": "± 3798297.643917745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6937735.662109375,
            "unit": "ns",
            "range": "± 150329.90390876617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069955.3575721155,
            "unit": "ns",
            "range": "± 19106.136573546668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336354.0934495192,
            "unit": "ns",
            "range": "± 10358.07336236052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2781416.689797794,
            "unit": "ns",
            "range": "± 56669.07975464326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839252.0179876512,
            "unit": "ns",
            "range": "± 25244.39041088008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832623.9641462053,
            "unit": "ns",
            "range": "± 13792.154040849911"
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
          "id": "f487ff798731e88ecd0b4a6c3e13afe14d93f27a",
          "message": "Merge pull request #2810 from greymistcube/release/0.48.0\n\n🚀 Release libplanet 0.48.0",
          "timestamp": "2023-02-14T02:49:14-05:00",
          "tree_id": "760f5b3ea56d9473c8cdd53bd06dc34fea67f448",
          "url": "https://github.com/planetarium/libplanet/commit/f487ff798731e88ecd0b4a6c3e13afe14d93f27a"
        },
        "date": 1676362228088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 143884.4,
            "unit": "ns",
            "range": "± 5245.942663361155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130575.17582417582,
            "unit": "ns",
            "range": "± 17454.90041640227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276464,
            "unit": "ns",
            "range": "± 47617.86809794773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255765.36956521738,
            "unit": "ns",
            "range": "± 34096.384818585764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301961.521739131,
            "unit": "ns",
            "range": "± 432333.83496254036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13018443.945054945,
            "unit": "ns",
            "range": "± 1054258.99840026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26617.732558139534,
            "unit": "ns",
            "range": "± 4707.456794777006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74157.1091954023,
            "unit": "ns",
            "range": "± 16512.49346415118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71314.86206896552,
            "unit": "ns",
            "range": "± 14673.70460284149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151861.9239130435,
            "unit": "ns",
            "range": "± 36662.79986347622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9479.641176470588,
            "unit": "ns",
            "range": "± 698.8134527445037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29460.93181818182,
            "unit": "ns",
            "range": "± 8573.676933277657"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7746718.170328776,
            "unit": "ns",
            "range": "± 939252.3559710934"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8550838.677083334,
            "unit": "ns",
            "range": "± 2292590.2917572055"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35040050.3021978,
            "unit": "ns",
            "range": "± 5817552.459405695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9982596.744444445,
            "unit": "ns",
            "range": "± 2539076.790473117"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40247466.53125,
            "unit": "ns",
            "range": "± 8380452.372535615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8291196.581821237,
            "unit": "ns",
            "range": "± 708704.9966939343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2327657.520426432,
            "unit": "ns",
            "range": "± 91187.97391750272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465629.079264323,
            "unit": "ns",
            "range": "± 19184.25413628208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3552008.069207702,
            "unit": "ns",
            "range": "± 274267.6450286007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 968638.6709558824,
            "unit": "ns",
            "range": "± 52145.54423491846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814697.178359375,
            "unit": "ns",
            "range": "± 21299.68898977092"
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
          "id": "b6c147f297cdf330639a4eeaa0d61ad30840ca3b",
          "message": "Merge pull request #2812 from greymistcube/prepare/0.49.0\n\n🔧 Prepare 0.49.0",
          "timestamp": "2023-02-14T03:23:14-05:00",
          "tree_id": "43eb24b4363c0dcdfab6dab7432acf825d31aada",
          "url": "https://github.com/planetarium/libplanet/commit/b6c147f297cdf330639a4eeaa0d61ad30840ca3b"
        },
        "date": 1676364706752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 165857.3956043956,
            "unit": "ns",
            "range": "± 20746.16607305184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144676.98850574714,
            "unit": "ns",
            "range": "± 21251.239219951087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302301.8777777778,
            "unit": "ns",
            "range": "± 60895.15216375348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292060.597826087,
            "unit": "ns",
            "range": "± 54236.5624480123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4456861.295698925,
            "unit": "ns",
            "range": "± 667760.5039781585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14621617.647368422,
            "unit": "ns",
            "range": "± 3675476.071756373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31583.10465116279,
            "unit": "ns",
            "range": "± 4629.508847101372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83225.20212765958,
            "unit": "ns",
            "range": "± 20998.1486170996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73691.29411764706,
            "unit": "ns",
            "range": "± 11428.91660472256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 179311.91758241758,
            "unit": "ns",
            "range": "± 45575.57106756643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11186.224137931034,
            "unit": "ns",
            "range": "± 1427.033316291506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34494.29347826087,
            "unit": "ns",
            "range": "± 9935.615837871308"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 9116837.503268495,
            "unit": "ns",
            "range": "± 2338012.7837440516"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 13574976.585106382,
            "unit": "ns",
            "range": "± 4522350.308194331"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 42628797.47191011,
            "unit": "ns",
            "range": "± 13040856.369465264"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 12703761.01111111,
            "unit": "ns",
            "range": "± 4347690.936681624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 49014086.83146068,
            "unit": "ns",
            "range": "± 14993778.904285183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8530577.744847074,
            "unit": "ns",
            "range": "± 558263.370737512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2471563.8301989366,
            "unit": "ns",
            "range": "± 178801.8294833159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1750824.8243194264,
            "unit": "ns",
            "range": "± 125044.63480432738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4262362.489662248,
            "unit": "ns",
            "range": "± 397258.4585374544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1149337.3204735825,
            "unit": "ns",
            "range": "± 122414.66409450343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993723.8656270135,
            "unit": "ns",
            "range": "± 63940.34135228472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90b4eff97bc3043293781274d75f8b4e114943d1",
          "message": "Merge pull request #2813 from OnedgeLee/hotfix/revert_test_skip\n\nRevert temporal skippable tests",
          "timestamp": "2023-02-14T17:37:15+09:00",
          "tree_id": "18ec484a79386a1ad5dfbee13d0c4785c86a808d",
          "url": "https://github.com/planetarium/libplanet/commit/90b4eff97bc3043293781274d75f8b4e114943d1"
        },
        "date": 1676365374976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 170910.25263157894,
            "unit": "ns",
            "range": "± 26012.880302195477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 159101.82795698923,
            "unit": "ns",
            "range": "± 21110.80096807219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304514.93434343435,
            "unit": "ns",
            "range": "± 56566.331438510846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297725.6875,
            "unit": "ns",
            "range": "± 49512.460764902935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377739.020833333,
            "unit": "ns",
            "range": "± 422465.875306172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12177578.210526315,
            "unit": "ns",
            "range": "± 982044.7120188082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35661.40909090909,
            "unit": "ns",
            "range": "± 5029.9616658038885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87093.83684210526,
            "unit": "ns",
            "range": "± 16081.610288807367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80389.03333333334,
            "unit": "ns",
            "range": "± 10266.61934139586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180883.82978723405,
            "unit": "ns",
            "range": "± 38599.00465578034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13848.521505376344,
            "unit": "ns",
            "range": "± 2164.7458329493606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 37413.98780487805,
            "unit": "ns",
            "range": "± 5477.904153362826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7072389.896377061,
            "unit": "ns",
            "range": "± 651071.9711825369"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8793570.79,
            "unit": "ns",
            "range": "± 1506382.5698361443"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33759093.63186813,
            "unit": "ns",
            "range": "± 3125340.3216448114"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8153568.721052632,
            "unit": "ns",
            "range": "± 572009.9088893473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37724492.71978022,
            "unit": "ns",
            "range": "± 4236421.624553412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9138584.214800823,
            "unit": "ns",
            "range": "± 624438.0847189495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2497834.6270940723,
            "unit": "ns",
            "range": "± 172521.18877734678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1589973.056274414,
            "unit": "ns",
            "range": "± 49410.99479314673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3724792.009420956,
            "unit": "ns",
            "range": "± 151161.00737505025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1147668.7544942875,
            "unit": "ns",
            "range": "± 84202.46550723736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937277.4901546557,
            "unit": "ns",
            "range": "± 56025.71427114424"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8420cba8929cb9173942a1ad17546d684358527b",
          "message": "Merge pull request #2814 from limebell/fix/multiple-task-blocksync\n\nPrevent duplicated ProcessBlockDemand",
          "timestamp": "2023-02-15T17:28:49+09:00",
          "tree_id": "def5643cc94889522aea1a333b9679d0572e97a4",
          "url": "https://github.com/planetarium/libplanet/commit/8420cba8929cb9173942a1ad17546d684358527b"
        },
        "date": 1676451079147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 154270.6348314607,
            "unit": "ns",
            "range": "± 18428.107171822052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114662.3125,
            "unit": "ns",
            "range": "± 14582.279189635401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252737.52150537635,
            "unit": "ns",
            "range": "± 37747.44243106398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214598.8488372093,
            "unit": "ns",
            "range": "± 14636.750965226453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5244007.535353536,
            "unit": "ns",
            "range": "± 407409.82940301043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10654057.649253732,
            "unit": "ns",
            "range": "± 505815.92695179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20039.297872340427,
            "unit": "ns",
            "range": "± 2730.2741318499843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61202.53370786517,
            "unit": "ns",
            "range": "± 8829.856049286624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58716.07058823529,
            "unit": "ns",
            "range": "± 7071.093566984758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133365,
            "unit": "ns",
            "range": "± 23101.652530681687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8082.739130434783,
            "unit": "ns",
            "range": "± 839.9487146767638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22525.1935483871,
            "unit": "ns",
            "range": "± 3392.128401544762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6547897.629440789,
            "unit": "ns",
            "range": "± 942324.5512574618"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6641618.725806451,
            "unit": "ns",
            "range": "± 548042.8620597816"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30196424.596774194,
            "unit": "ns",
            "range": "± 2000875.0015586286"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8169709.860215054,
            "unit": "ns",
            "range": "± 797076.5129926441"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32407494.436842106,
            "unit": "ns",
            "range": "± 2204790.7446392095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7670694.811631944,
            "unit": "ns",
            "range": "± 699726.8626411676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2297657.8294046335,
            "unit": "ns",
            "range": "± 61014.8605824964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395784.15353468,
            "unit": "ns",
            "range": "± 50170.491690015355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715032.2709080433,
            "unit": "ns",
            "range": "± 107720.53770936541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861509.306439568,
            "unit": "ns",
            "range": "± 27122.067915877717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856357.0024781586,
            "unit": "ns",
            "range": "± 55634.328025705974"
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
          "id": "803174a84020c073551ed3cbea2bc14d03b3b8b9",
          "message": "Merge pull request #2819 from riemannulus/main\n\n🧹 Merge 0.46.2 to main",
          "timestamp": "2023-02-16T13:14:19+09:00",
          "tree_id": "136061da77d3124eea6dda0a72b980ff05535a8d",
          "url": "https://github.com/planetarium/libplanet/commit/803174a84020c073551ed3cbea2bc14d03b3b8b9"
        },
        "date": 1676522304702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150785.55555555556,
            "unit": "ns",
            "range": "± 19758.685449815333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 137322.25,
            "unit": "ns",
            "range": "± 16556.987145835694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262768.7731958763,
            "unit": "ns",
            "range": "± 47702.129603383786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243481.20103092783,
            "unit": "ns",
            "range": "± 33036.95015564799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3945022.184782609,
            "unit": "ns",
            "range": "± 241138.77485317612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10787641.241758242,
            "unit": "ns",
            "range": "± 648023.6286968304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23671.606382978724,
            "unit": "ns",
            "range": "± 4138.484383676869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59621.083333333336,
            "unit": "ns",
            "range": "± 11175.197750909372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62863.06842105263,
            "unit": "ns",
            "range": "± 8883.454003661098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121005.87234042553,
            "unit": "ns",
            "range": "± 21932.762595599434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7393.144329896907,
            "unit": "ns",
            "range": "± 1711.3800229985613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26646.17032967033,
            "unit": "ns",
            "range": "± 5103.048350533989"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5400223.187258377,
            "unit": "ns",
            "range": "± 517857.1306040451"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8080534.166666667,
            "unit": "ns",
            "range": "± 1820268.4545959213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29046767.103448275,
            "unit": "ns",
            "range": "± 2035997.4760884894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7459498.457446809,
            "unit": "ns",
            "range": "± 643574.4049693341"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33035292.865079366,
            "unit": "ns",
            "range": "± 1401670.8366524382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7468219.135602678,
            "unit": "ns",
            "range": "± 204492.8449747789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271418.349279932,
            "unit": "ns",
            "range": "± 120578.86471090937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412950.43359375,
            "unit": "ns",
            "range": "± 57841.41067903467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2881654.9288194445,
            "unit": "ns",
            "range": "± 200202.0837955317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886767.6414648438,
            "unit": "ns",
            "range": "± 35620.11423918981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802826.5770456415,
            "unit": "ns",
            "range": "± 40581.74251011887"
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
          "id": "9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8",
          "message": "Merge pull request #2822 from greymistcube/feature/branch\n\nIntroduce `Branch<T>` for more context",
          "timestamp": "2023-02-16T02:47:15-05:00",
          "tree_id": "59513a2762f6c07acc5b0a2b76152120b80a5962",
          "url": "https://github.com/planetarium/libplanet/commit/9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8"
        },
        "date": 1676534966325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135588.39361702127,
            "unit": "ns",
            "range": "± 15050.585639459729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112570.62105263158,
            "unit": "ns",
            "range": "± 22460.85185723693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233625.59139784946,
            "unit": "ns",
            "range": "± 28100.166687667668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216629.97802197802,
            "unit": "ns",
            "range": "± 21527.266666552092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3917464.970588235,
            "unit": "ns",
            "range": "± 187218.92076995794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10554191.782051282,
            "unit": "ns",
            "range": "± 363857.65047452203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19047.70786516854,
            "unit": "ns",
            "range": "± 2310.952048016767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56764.94680851064,
            "unit": "ns",
            "range": "± 7703.478371401169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55497.45054945055,
            "unit": "ns",
            "range": "± 6621.371951262963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120972.56185567011,
            "unit": "ns",
            "range": "± 16802.899505996993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7513.061224489796,
            "unit": "ns",
            "range": "± 859.5452893596363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18202.637362637364,
            "unit": "ns",
            "range": "± 2380.6471086496326"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5120995.784310567,
            "unit": "ns",
            "range": "± 323877.163067968"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5947159.457746479,
            "unit": "ns",
            "range": "± 289642.5749694878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26501196.929577466,
            "unit": "ns",
            "range": "± 1292098.4384283167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7454139.26,
            "unit": "ns",
            "range": "± 853170.8188160475"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32846199.703296702,
            "unit": "ns",
            "range": "± 2552942.751350634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7299145.181361607,
            "unit": "ns",
            "range": "± 109893.42540760894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2150296.1017054114,
            "unit": "ns",
            "range": "± 72626.43729680634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402790.41328125,
            "unit": "ns",
            "range": "± 29899.926635125754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158574.9483203124,
            "unit": "ns",
            "range": "± 231867.07474546516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1097666.1621981533,
            "unit": "ns",
            "range": "± 69563.09614015622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894749.3647363281,
            "unit": "ns",
            "range": "± 52563.370890036"
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
          "id": "977a79462cfe47b88606d6ef4e69b989b297a544",
          "message": "Avoid unintended blocks on NetMQTransport (#2817)",
          "timestamp": "2023-02-16T18:47:05+09:00",
          "tree_id": "def27f168284f49e85c79d08c1fb29bedb8925f0",
          "url": "https://github.com/planetarium/libplanet/commit/977a79462cfe47b88606d6ef4e69b989b297a544"
        },
        "date": 1676542018033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135352.3494623656,
            "unit": "ns",
            "range": "± 11945.901112521211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107733.36559139784,
            "unit": "ns",
            "range": "± 13503.32881325206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226300.79381443298,
            "unit": "ns",
            "range": "± 31826.480780534177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199627.66666666666,
            "unit": "ns",
            "range": "± 27921.66379523618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3725135.523255814,
            "unit": "ns",
            "range": "± 195661.02741629322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13985756.566666666,
            "unit": "ns",
            "range": "± 3648056.3553816895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19867.217391304348,
            "unit": "ns",
            "range": "± 4195.81758873476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53997,
            "unit": "ns",
            "range": "± 7591.175473777708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53601.89361702128,
            "unit": "ns",
            "range": "± 8584.612808971573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119319.5,
            "unit": "ns",
            "range": "± 16456.601608799814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7321.59375,
            "unit": "ns",
            "range": "± 1556.2360163184896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20460.510638297874,
            "unit": "ns",
            "range": "± 3706.359973420523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5345055.867745535,
            "unit": "ns",
            "range": "± 605884.842675213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6587760.668421052,
            "unit": "ns",
            "range": "± 620516.1883417752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27591559.201754387,
            "unit": "ns",
            "range": "± 1142717.8552393187"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7492728.931578947,
            "unit": "ns",
            "range": "± 728465.8645595427"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34951628.1368421,
            "unit": "ns",
            "range": "± 2649155.0966895553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7029598.867590206,
            "unit": "ns",
            "range": "± 482657.65661587135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2065262.1668526786,
            "unit": "ns",
            "range": "± 34788.55511296317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371192.209508384,
            "unit": "ns",
            "range": "± 49153.38624787318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529369.7701322115,
            "unit": "ns",
            "range": "± 23927.808243081254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882006.3884626116,
            "unit": "ns",
            "range": "± 10333.304151551294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754263.0362258184,
            "unit": "ns",
            "range": "± 17701.883825200246"
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
          "id": "5bd541e43b9c0ca04da673ea87a464f0ba937386",
          "message": "Merge pull request #2832 from greymistcube/chore/logging\n\n🧹 Sanitized logging",
          "timestamp": "2023-02-19T21:44:02-05:00",
          "tree_id": "9a523112a25aaa79e5a87dd0f37102a76cac375b",
          "url": "https://github.com/planetarium/libplanet/commit/5bd541e43b9c0ca04da673ea87a464f0ba937386"
        },
        "date": 1676862268457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140791.83157894737,
            "unit": "ns",
            "range": "± 24164.629381863524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118520.22916666667,
            "unit": "ns",
            "range": "± 19276.06949915889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240648.5376344086,
            "unit": "ns",
            "range": "± 29628.648775320242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235228.2471264368,
            "unit": "ns",
            "range": "± 21454.42513319284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039170.7065217393,
            "unit": "ns",
            "range": "± 489057.0058465968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11251729.484210527,
            "unit": "ns",
            "range": "± 924194.3434290154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24029.277777777777,
            "unit": "ns",
            "range": "± 2891.1165829363986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59342.68947368421,
            "unit": "ns",
            "range": "± 12793.534276456478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44303,
            "unit": "ns",
            "range": "± 4716.225995047696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101141.61956521739,
            "unit": "ns",
            "range": "± 16194.692340965112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5411.781609195402,
            "unit": "ns",
            "range": "± 528.0335046030951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15621.162921348314,
            "unit": "ns",
            "range": "± 1718.1271181660954"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5261273.11336263,
            "unit": "ns",
            "range": "± 447137.6054660145"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6608434.20212766,
            "unit": "ns",
            "range": "± 687274.0671760003"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27833090.75,
            "unit": "ns",
            "range": "± 2282549.847147306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7600701.610526316,
            "unit": "ns",
            "range": "± 857329.1748683542"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33632812.93820225,
            "unit": "ns",
            "range": "± 1859101.1799404752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7167292.938627577,
            "unit": "ns",
            "range": "± 571450.2468523821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111464.72848887,
            "unit": "ns",
            "range": "± 104975.14671686868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335633.7236752717,
            "unit": "ns",
            "range": "± 33076.15265597716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2971716.233762255,
            "unit": "ns",
            "range": "± 119500.63981769964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935486.3945963542,
            "unit": "ns",
            "range": "± 35171.30448546036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773695.1806640625,
            "unit": "ns",
            "range": "± 31246.703525327375"
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
          "id": "a334417df43b6970c31ce7bf9c4cc40c1060f633",
          "message": "Merge pull request #2833 from greymistcube/chore/logging\n\n🧹 More sanitized logging",
          "timestamp": "2023-02-20T03:12:33-05:00",
          "tree_id": "e847dfd172b329b47d46718849dd94e33f1503c7",
          "url": "https://github.com/planetarium/libplanet/commit/a334417df43b6970c31ce7bf9c4cc40c1060f633"
        },
        "date": 1676881551240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124642.75252525252,
            "unit": "ns",
            "range": "± 10572.724391954673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107566.07,
            "unit": "ns",
            "range": "± 22986.46165373625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216735.91836734695,
            "unit": "ns",
            "range": "± 25254.394220752652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189290.15979381444,
            "unit": "ns",
            "range": "± 18062.48539842928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3516979.32,
            "unit": "ns",
            "range": "± 139158.67139926925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9714179.833333334,
            "unit": "ns",
            "range": "± 428521.3953919334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20131.16,
            "unit": "ns",
            "range": "± 4773.5307914127525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54885.81052631579,
            "unit": "ns",
            "range": "± 5937.181823581875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53359.62,
            "unit": "ns",
            "range": "± 8991.98558962593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113326.64948453609,
            "unit": "ns",
            "range": "± 16610.01660208961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.5,
            "unit": "ns",
            "range": "± 1543.9183507181365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18866.720430107525,
            "unit": "ns",
            "range": "± 2957.7774277817907"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4721837.730189732,
            "unit": "ns",
            "range": "± 54751.55141638646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6664411.833333333,
            "unit": "ns",
            "range": "± 198050.2562385206"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26075256.943396226,
            "unit": "ns",
            "range": "± 1078526.2269340656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6515419.29787234,
            "unit": "ns",
            "range": "± 493166.38331944664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28938243,
            "unit": "ns",
            "range": "± 1151096.6404404256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194236.116586538,
            "unit": "ns",
            "range": "± 46915.77039225427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821950.3880709135,
            "unit": "ns",
            "range": "± 15108.16378127369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1241896.4220252405,
            "unit": "ns",
            "range": "± 8087.968540998951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2411592.22265625,
            "unit": "ns",
            "range": "± 22823.357701597895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767437.8973214285,
            "unit": "ns",
            "range": "± 5975.812631695838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705346.7466517857,
            "unit": "ns",
            "range": "± 6965.003066225463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "544c03f94ba675d9e1777a6ceefca752a80ff523",
          "message": "Merge pull request #2834 from limebell/release/0.49\n\n🚀 Release libplanet 0.49.0",
          "timestamp": "2023-02-20T17:41:39+09:00",
          "tree_id": "f0b936d5c40f3713dbeca3faaad7749afd2117a3",
          "url": "https://github.com/planetarium/libplanet/commit/544c03f94ba675d9e1777a6ceefca752a80ff523"
        },
        "date": 1676883284377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120826.97872340426,
            "unit": "ns",
            "range": "± 7326.708251731746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95734.40659340659,
            "unit": "ns",
            "range": "± 10892.265099579223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224850.69696969696,
            "unit": "ns",
            "range": "± 27300.40372896303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189536.76288659795,
            "unit": "ns",
            "range": "± 14312.276832156193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3500639.7391304346,
            "unit": "ns",
            "range": "± 132380.95647997357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9431846.6875,
            "unit": "ns",
            "range": "± 178283.2905394179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18054.463157894737,
            "unit": "ns",
            "range": "± 2525.813063998704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51683.72826086957,
            "unit": "ns",
            "range": "± 5793.373611676298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48462.765957446805,
            "unit": "ns",
            "range": "± 5479.42488824561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106534.58510638298,
            "unit": "ns",
            "range": "± 14661.231666790572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6423.4,
            "unit": "ns",
            "range": "± 792.6705225397061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17282.918604651164,
            "unit": "ns",
            "range": "± 2138.7787524941386"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4625831.049479167,
            "unit": "ns",
            "range": "± 53854.69149757893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5377371.859154929,
            "unit": "ns",
            "range": "± 253185.21921043698"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25420728.314285714,
            "unit": "ns",
            "range": "± 734123.9261669723"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6539128.317204301,
            "unit": "ns",
            "range": "± 494426.54064026417"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29521193.47826087,
            "unit": "ns",
            "range": "± 1132021.2140747528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5867255.625558035,
            "unit": "ns",
            "range": "± 40850.004788445054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898547.8901742788,
            "unit": "ns",
            "range": "± 6201.76994831133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232135.578515625,
            "unit": "ns",
            "range": "± 11765.710376316758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2444162.4794270834,
            "unit": "ns",
            "range": "± 20507.311069965424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809756.1606445312,
            "unit": "ns",
            "range": "± 4980.590256555476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 682688.5110026042,
            "unit": "ns",
            "range": "± 5657.255416692343"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35a2dbc6de17b31e177e824dd90aae5e509cac9f",
          "message": "Merge pull request #2836 from limebell/prepare/0.50.0\n\n🔧 Prepare 0.50.0",
          "timestamp": "2023-02-21T10:58:36+09:00",
          "tree_id": "94d25b33717f19cfa799019c66a905d266beed5a",
          "url": "https://github.com/planetarium/libplanet/commit/35a2dbc6de17b31e177e824dd90aae5e509cac9f"
        },
        "date": 1676945954962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136142.89361702127,
            "unit": "ns",
            "range": "± 11043.807063765615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 130903.61797752809,
            "unit": "ns",
            "range": "± 14039.921154033995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279532.71649484534,
            "unit": "ns",
            "range": "± 56163.84975160973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247950.64736842105,
            "unit": "ns",
            "range": "± 36265.238877320466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4114852.5,
            "unit": "ns",
            "range": "± 327449.90751813387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11690587.132653061,
            "unit": "ns",
            "range": "± 900026.3041210872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24086.409090909092,
            "unit": "ns",
            "range": "± 3297.4855890559015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69058.9213483146,
            "unit": "ns",
            "range": "± 9069.86157585149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67180.78260869565,
            "unit": "ns",
            "range": "± 7890.564804957417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148027.3,
            "unit": "ns",
            "range": "± 29390.692994805235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8920.13440860215,
            "unit": "ns",
            "range": "± 1395.8854972424763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24030.766666666666,
            "unit": "ns",
            "range": "± 4336.539074791211"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5611103.813959478,
            "unit": "ns",
            "range": "± 620023.546862043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6557066.8,
            "unit": "ns",
            "range": "± 364531.62763406173"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29698322.64893617,
            "unit": "ns",
            "range": "± 1853112.7602268658"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7570537.581632653,
            "unit": "ns",
            "range": "± 750779.8645526733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34594228.14893617,
            "unit": "ns",
            "range": "± 2186506.1218183395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7013941.966517857,
            "unit": "ns",
            "range": "± 251847.91585368017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2152162.9139859066,
            "unit": "ns",
            "range": "± 83752.99316897364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334009.501953125,
            "unit": "ns",
            "range": "± 13286.482404532459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2983616.3336328124,
            "unit": "ns",
            "range": "± 321725.97990005824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939715.6592773438,
            "unit": "ns",
            "range": "± 41512.37999249143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786746.9991957721,
            "unit": "ns",
            "range": "± 15820.842520584585"
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
          "id": "029fb55ff09f8504b61c0e65e59980327786f7a9",
          "message": "Merge pull request #2845 from greymistcube/refactor/ignore-policy-for-genesis\n\nIgnore policy checks for genesis block",
          "timestamp": "2023-02-23T03:12:11-05:00",
          "tree_id": "1cbf956b6e882639d9e7d32bbf292200dff9bd7f",
          "url": "https://github.com/planetarium/libplanet/commit/029fb55ff09f8504b61c0e65e59980327786f7a9"
        },
        "date": 1677140729214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120592.44845360825,
            "unit": "ns",
            "range": "± 11463.305288298483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97044.36842105263,
            "unit": "ns",
            "range": "± 12437.74852552095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216335.46808510637,
            "unit": "ns",
            "range": "± 31651.99676274568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180011.22043010753,
            "unit": "ns",
            "range": "± 13214.157072563592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3677623.5322580645,
            "unit": "ns",
            "range": "± 111639.06756014637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9622900.518072288,
            "unit": "ns",
            "range": "± 511375.1668244802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17231.975903614457,
            "unit": "ns",
            "range": "± 1140.6713040146699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52365.48888888889,
            "unit": "ns",
            "range": "± 9105.868789411998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47687.9381443299,
            "unit": "ns",
            "range": "± 7174.434994906151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108820.47826086957,
            "unit": "ns",
            "range": "± 17100.113624375575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6038.902173913043,
            "unit": "ns",
            "range": "± 959.1218174218343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17056.719101123595,
            "unit": "ns",
            "range": "± 1724.1348356676808"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4654805.998046875,
            "unit": "ns",
            "range": "± 71409.77733538761"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5720630.595744681,
            "unit": "ns",
            "range": "± 451394.1615680491"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25841402.447916668,
            "unit": "ns",
            "range": "± 1558753.3762079088"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6529424.411111111,
            "unit": "ns",
            "range": "± 461979.4143828976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29320128.129032258,
            "unit": "ns",
            "range": "± 1330822.8220942244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6390311.369628906,
            "unit": "ns",
            "range": "± 118470.8357619673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890044.933872768,
            "unit": "ns",
            "range": "± 24322.60034076838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1262217.5466145833,
            "unit": "ns",
            "range": "± 23521.217925962475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2440176.70546875,
            "unit": "ns",
            "range": "± 42917.27047405587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847452.3584960938,
            "unit": "ns",
            "range": "± 10583.172752985298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713760.4706380208,
            "unit": "ns",
            "range": "± 9882.246312226956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76",
          "message": "Merge pull request #2831 from limebell/refactor/immutable-message\n\nSeparate `Message`'s content and make messages immutable",
          "timestamp": "2023-02-23T17:13:40+09:00",
          "tree_id": "bfd672b3b2d674162520d297cce1869e13544be3",
          "url": "https://github.com/planetarium/libplanet/commit/e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76"
        },
        "date": 1677141147206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138068.82417582418,
            "unit": "ns",
            "range": "± 12894.556495404828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117929.9,
            "unit": "ns",
            "range": "± 24207.557090402704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250489.4175257732,
            "unit": "ns",
            "range": "± 41188.00772212862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221797.42631578946,
            "unit": "ns",
            "range": "± 30872.637340642817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3823182.084507042,
            "unit": "ns",
            "range": "± 186423.88081525752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10895455.368421054,
            "unit": "ns",
            "range": "± 725343.4039852984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24261.532967032967,
            "unit": "ns",
            "range": "± 4137.125989676487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61795.91052631579,
            "unit": "ns",
            "range": "± 10570.333004169594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62442.9,
            "unit": "ns",
            "range": "± 4758.057513984356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127086.36315789474,
            "unit": "ns",
            "range": "± 18660.51558180929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7749.79381443299,
            "unit": "ns",
            "range": "± 1220.5375262063872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22853.23404255319,
            "unit": "ns",
            "range": "± 4266.599351389847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5219883.593334441,
            "unit": "ns",
            "range": "± 457133.097903399"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6258998.915789474,
            "unit": "ns",
            "range": "± 586372.0977183791"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27901265.51612903,
            "unit": "ns",
            "range": "± 1916220.9410914166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7566360.269662921,
            "unit": "ns",
            "range": "± 695633.9999043511"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32056562.795081966,
            "unit": "ns",
            "range": "± 1431067.1339873304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6490199.296452703,
            "unit": "ns",
            "range": "± 186378.64835348894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879414.0130709135,
            "unit": "ns",
            "range": "± 49925.843410845024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294288.831875,
            "unit": "ns",
            "range": "± 33398.7078708142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2769134.260279605,
            "unit": "ns",
            "range": "± 61447.936498802614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801087.3129185268,
            "unit": "ns",
            "range": "± 12471.474368616568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756018.1742838542,
            "unit": "ns",
            "range": "± 16437.135448769328"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd879cd44d491a3060be635b9ec90b6e8b98a7d9",
          "message": "Merge pull request #2847 from planetarium/ci-typescript-libs\n\nPrepare monorepo for typescript lib",
          "timestamp": "2023-02-24T14:32:33+09:00",
          "tree_id": "6f4f1f4ad3b16948e048034534815d01a257b976",
          "url": "https://github.com/planetarium/libplanet/commit/dd879cd44d491a3060be635b9ec90b6e8b98a7d9"
        },
        "date": 1677218424919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 158521.09782608695,
            "unit": "ns",
            "range": "± 25700.233699736935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 155690.36559139786,
            "unit": "ns",
            "range": "± 52941.964817882734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 424383.3804347826,
            "unit": "ns",
            "range": "± 231604.8028947341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 462722.2346938776,
            "unit": "ns",
            "range": "± 273217.44367187435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 8403158.176767677,
            "unit": "ns",
            "range": "± 4281864.762476211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 25726755.91,
            "unit": "ns",
            "range": "± 12856701.262475122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 51127.61538461538,
            "unit": "ns",
            "range": "± 21776.667221169042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 158424.8469387755,
            "unit": "ns",
            "range": "± 80765.09474444653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 137356.4393939394,
            "unit": "ns",
            "range": "± 69650.74583845769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225901.81632653062,
            "unit": "ns",
            "range": "± 116133.4479038357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14812.163265306122,
            "unit": "ns",
            "range": "± 5569.157110508129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 42360.03296703297,
            "unit": "ns",
            "range": "± 19081.1458387887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5746440.702777778,
            "unit": "ns",
            "range": "± 319670.90471216803"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6842884.089473684,
            "unit": "ns",
            "range": "± 577742.5956124128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31766066.319148935,
            "unit": "ns",
            "range": "± 2218288.4009019798"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8631172.621951219,
            "unit": "ns",
            "range": "± 1032295.0126618375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36108276.3125,
            "unit": "ns",
            "range": "± 3037766.993192944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 16008997.4228125,
            "unit": "ns",
            "range": "± 8263157.878916474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 4141888.6905078124,
            "unit": "ns",
            "range": "± 1919798.915525896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2299645.5689315028,
            "unit": "ns",
            "range": "± 1076487.9275354156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4155049.5341796875,
            "unit": "ns",
            "range": "± 1179625.9032351684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1204398.5274316405,
            "unit": "ns",
            "range": "± 401160.00981210184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1029982.1772753906,
            "unit": "ns",
            "range": "± 419346.3474182866"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b",
          "message": "Merge pull request #2851 from planetarium/ci-fix-no-obj\n\nCI: fix where obj/ directory is missing",
          "timestamp": "2023-02-24T14:57:55+09:00",
          "tree_id": "2f6f92e07c50b5ccf598c0fef4fee6ea8eece2e5",
          "url": "https://github.com/planetarium/libplanet/commit/69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b"
        },
        "date": 1677219526010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 151019.90860215054,
            "unit": "ns",
            "range": "± 18518.754289636363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114566.48979591837,
            "unit": "ns",
            "range": "± 21894.558636367576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229995.94680851063,
            "unit": "ns",
            "range": "± 28640.142480785966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217824.54123711342,
            "unit": "ns",
            "range": "± 25583.3231686669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763855.2115384615,
            "unit": "ns",
            "range": "± 143433.37927719596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10325450.756756756,
            "unit": "ns",
            "range": "± 513769.166187456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25347.489130434784,
            "unit": "ns",
            "range": "± 3424.7862578514982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69325.71212121213,
            "unit": "ns",
            "range": "± 10643.760857386796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66054.25824175825,
            "unit": "ns",
            "range": "± 7510.106697482413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132409.5806451613,
            "unit": "ns",
            "range": "± 15722.740615539466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9182.3,
            "unit": "ns",
            "range": "± 925.3650412537035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27020.17391304348,
            "unit": "ns",
            "range": "± 4040.334754134345"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5229637.673984375,
            "unit": "ns",
            "range": "± 360351.4601061781"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6077675.545454546,
            "unit": "ns",
            "range": "± 474314.4789781077"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27598290.192307692,
            "unit": "ns",
            "range": "± 1288336.5906088937"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6957990.030612245,
            "unit": "ns",
            "range": "± 473324.72733966063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32208975.98245614,
            "unit": "ns",
            "range": "± 1351153.939432718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7374329.330436862,
            "unit": "ns",
            "range": "± 421742.0370046739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2224370.5614313087,
            "unit": "ns",
            "range": "± 86260.7063853889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369975.178841146,
            "unit": "ns",
            "range": "± 24771.035705363138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2759478.753462358,
            "unit": "ns",
            "range": "± 98266.04610826485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869725.8786621094,
            "unit": "ns",
            "range": "± 23705.066908978457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795670.8834284856,
            "unit": "ns",
            "range": "± 36787.77847472716"
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
          "id": "5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8",
          "message": "Merge pull request #2853 from greymistcube/port/0.49.1-to-main\n\n🔀 Port 0.49.1 to main",
          "timestamp": "2023-02-24T01:35:21-05:00",
          "tree_id": "cc42a12559f193ce7f8965803940f3a3e29d3d54",
          "url": "https://github.com/planetarium/libplanet/commit/5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8"
        },
        "date": 1677221755457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147863.52083333334,
            "unit": "ns",
            "range": "± 14905.34279552782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122891.14646464646,
            "unit": "ns",
            "range": "± 29006.004930827807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261997.54210526316,
            "unit": "ns",
            "range": "± 54614.80998366102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234027.07291666666,
            "unit": "ns",
            "range": "± 34070.79039271178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3908333.644329897,
            "unit": "ns",
            "range": "± 272163.10584701126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11165716.246153846,
            "unit": "ns",
            "range": "± 519639.8068053977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23487.79411764706,
            "unit": "ns",
            "range": "± 3255.432963756527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65279.58947368421,
            "unit": "ns",
            "range": "± 13078.752725760593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61287.29473684211,
            "unit": "ns",
            "range": "± 5834.369084514084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134025.24731182796,
            "unit": "ns",
            "range": "± 22328.94201316539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9329.478723404256,
            "unit": "ns",
            "range": "± 1208.4642322459144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22140.23404255319,
            "unit": "ns",
            "range": "± 3518.6520220337184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5669574.456317204,
            "unit": "ns",
            "range": "± 544340.2864953108"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6235443.214285715,
            "unit": "ns",
            "range": "± 89868.87647796699"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27088836.54411765,
            "unit": "ns",
            "range": "± 1271756.4224534254"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7086291.494382023,
            "unit": "ns",
            "range": "± 575044.2608532629"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33357266.957894735,
            "unit": "ns",
            "range": "± 2606140.375745589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7138968.066294643,
            "unit": "ns",
            "range": "± 233278.95442004976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2056436.8295898438,
            "unit": "ns",
            "range": "± 62896.50887899301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350419.480078125,
            "unit": "ns",
            "range": "± 27675.73912002695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683040.771144701,
            "unit": "ns",
            "range": "± 98364.86241875641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937659.9256280637,
            "unit": "ns",
            "range": "± 36683.018614617795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787508.9298502604,
            "unit": "ns",
            "range": "± 9573.737408361267"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30514f98f89182aa5478e58e442c572799f0f98f",
          "message": "Merge pull request #2855 from planetarium/ci-fix-yarn\n\nCI: fix parameters",
          "timestamp": "2023-02-24T16:23:37+09:00",
          "tree_id": "0ad0c72592b1c0cccaa69243000f568c184b8381",
          "url": "https://github.com/planetarium/libplanet/commit/30514f98f89182aa5478e58e442c572799f0f98f"
        },
        "date": 1677224548759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140399.11290322582,
            "unit": "ns",
            "range": "± 16005.717997988595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121276.52173913043,
            "unit": "ns",
            "range": "± 27902.212286341197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256588.35416666666,
            "unit": "ns",
            "range": "± 49360.22521742937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230162.83684210526,
            "unit": "ns",
            "range": "± 25722.07144367295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4169137.1875,
            "unit": "ns",
            "range": "± 355384.20685628353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11323766.576086957,
            "unit": "ns",
            "range": "± 1015936.4794132763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19716.489130434784,
            "unit": "ns",
            "range": "± 2939.500845324045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59701.28421052632,
            "unit": "ns",
            "range": "± 10060.451246872852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57938.24705882353,
            "unit": "ns",
            "range": "± 4044.7810256400962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127744.51086956522,
            "unit": "ns",
            "range": "± 17876.21566971629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7036.447916666667,
            "unit": "ns",
            "range": "± 1403.3151116274382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18942.97894736842,
            "unit": "ns",
            "range": "± 4414.265879494712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5676774.060083763,
            "unit": "ns",
            "range": "± 640208.6404944162"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9961333.650537634,
            "unit": "ns",
            "range": "± 4202961.5287658265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29026522.017647058,
            "unit": "ns",
            "range": "± 1799033.09389604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8311415.428571428,
            "unit": "ns",
            "range": "± 1295942.565089663"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34935073.314432986,
            "unit": "ns",
            "range": "± 2723021.7282408443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7687357.8546875,
            "unit": "ns",
            "range": "± 142325.89786587682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2190211.60546875,
            "unit": "ns",
            "range": "± 45413.68468935043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360271.5343889508,
            "unit": "ns",
            "range": "± 35974.99527350019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2837067.909705529,
            "unit": "ns",
            "range": "± 131430.19965339266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889414.6938781738,
            "unit": "ns",
            "range": "± 27659.70880063941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817629.5430385044,
            "unit": "ns",
            "range": "± 10718.283439318817"
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
          "id": "3818e0f5aac99ae2f1fb48f3bc1511daa01defc2",
          "message": "Merge pull request #2857 from greymistcube/refactor/validate-nonces\n\n♻️ Refactor validate nonces",
          "timestamp": "2023-02-24T04:14:59-05:00",
          "tree_id": "f338354b26307d6e0fd7308f940d2d4af576eaba",
          "url": "https://github.com/planetarium/libplanet/commit/3818e0f5aac99ae2f1fb48f3bc1511daa01defc2"
        },
        "date": 1677231324775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135968.10869565216,
            "unit": "ns",
            "range": "± 11944.576207144195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125020.43814432989,
            "unit": "ns",
            "range": "± 13380.419336520588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252472.5,
            "unit": "ns",
            "range": "± 25027.51801951986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220384.72164948453,
            "unit": "ns",
            "range": "± 19302.574870738456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3774099.6428571427,
            "unit": "ns",
            "range": "± 44628.21220821084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11045308.46875,
            "unit": "ns",
            "range": "± 343478.8792486406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25737.659574468085,
            "unit": "ns",
            "range": "± 3885.0262908651976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68232.51648351649,
            "unit": "ns",
            "range": "± 11681.334868891043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60585.449438202246,
            "unit": "ns",
            "range": "± 4975.57007015102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132181.10638297873,
            "unit": "ns",
            "range": "± 17645.348470017416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8719.005263157895,
            "unit": "ns",
            "range": "± 862.6142091967732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26692,
            "unit": "ns",
            "range": "± 4200.259433090194"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5063916.9385258835,
            "unit": "ns",
            "range": "± 399553.69920681766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6479782.1,
            "unit": "ns",
            "range": "± 145307.88645707106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27138559.931034483,
            "unit": "ns",
            "range": "± 660936.3272660953"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7400692.214285715,
            "unit": "ns",
            "range": "± 110905.69521699926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31826358.727272727,
            "unit": "ns",
            "range": "± 1005368.2401296202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7087490.8136935765,
            "unit": "ns",
            "range": "± 349021.6221147901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022057.3175223214,
            "unit": "ns",
            "range": "± 27635.076324268175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350308.8174856086,
            "unit": "ns",
            "range": "± 23343.1343473367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2782628.2131121135,
            "unit": "ns",
            "range": "± 197464.3086017722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782107.0975811298,
            "unit": "ns",
            "range": "± 8134.59245458593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729778.1613581731,
            "unit": "ns",
            "range": "± 7834.683233421827"
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
          "id": "d2628f6c25335ad20c9eaabceecf8aca667af6a7",
          "message": "Merge pull request #2862 from greymistcube/refactor/test-util\n\n🧹 Use ephemeral `IStateStore` for generating genesis block",
          "timestamp": "2023-02-27T00:10:51-05:00",
          "tree_id": "b9edf1be1179d914547cbae7871d083e947315a1",
          "url": "https://github.com/planetarium/libplanet/commit/d2628f6c25335ad20c9eaabceecf8aca667af6a7"
        },
        "date": 1677475675315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125349.72164948453,
            "unit": "ns",
            "range": "± 8814.756148241646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99935.97894736842,
            "unit": "ns",
            "range": "± 15457.489525998735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212654.93258426967,
            "unit": "ns",
            "range": "± 12296.352182472794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204370.36,
            "unit": "ns",
            "range": "± 19411.558500922783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3596540.966666667,
            "unit": "ns",
            "range": "± 51456.217239050726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10046331.56122449,
            "unit": "ns",
            "range": "± 394625.58114704373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18629.20618556701,
            "unit": "ns",
            "range": "± 3831.344463050102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55407,
            "unit": "ns",
            "range": "± 6914.362357962179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54921.262886597935,
            "unit": "ns",
            "range": "± 6347.7804253619415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113078.27956989247,
            "unit": "ns",
            "range": "± 12955.731964928811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7156.139175257732,
            "unit": "ns",
            "range": "± 1445.6189431748533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18638.074468085106,
            "unit": "ns",
            "range": "± 3326.4265021137576"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4611297.982271635,
            "unit": "ns",
            "range": "± 25579.269444965816"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5936284.166666667,
            "unit": "ns",
            "range": "± 66935.82065431532"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25479510.151515152,
            "unit": "ns",
            "range": "± 806091.1973032705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6933736.828571429,
            "unit": "ns",
            "range": "± 214610.57130621857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28997269.490909092,
            "unit": "ns",
            "range": "± 1232597.8298247561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6671889.506009615,
            "unit": "ns",
            "range": "± 74487.57213184999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935483.968470982,
            "unit": "ns",
            "range": "± 2319.343908100785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294175.4623325893,
            "unit": "ns",
            "range": "± 10599.54794268671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704219.5504662297,
            "unit": "ns",
            "range": "± 81795.1615825947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775851.6283482143,
            "unit": "ns",
            "range": "± 1944.1611251537477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724099.8971354166,
            "unit": "ns",
            "range": "± 16937.42534680854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e0fa7934800565a7cf932e4c48c5d0abfc589b8",
          "message": "Merge pull request #2865 from greymistcube/chore/logging\n\n🧹 Better logging",
          "timestamp": "2023-02-27T17:15:30+09:00",
          "tree_id": "b6cad099b381217e35f6382b7c607f603646ac3e",
          "url": "https://github.com/planetarium/libplanet/commit/4e0fa7934800565a7cf932e4c48c5d0abfc589b8"
        },
        "date": 1677487019849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139927.77710843374,
            "unit": "ns",
            "range": "± 7278.660891502913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117601.82291666667,
            "unit": "ns",
            "range": "± 23594.846689364756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254948.3111111111,
            "unit": "ns",
            "range": "± 38144.26388574392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214374.45789473684,
            "unit": "ns",
            "range": "± 24507.791072938493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4121294.181318681,
            "unit": "ns",
            "range": "± 517646.91751040064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10024637.105263159,
            "unit": "ns",
            "range": "± 175627.9308050892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19482.782608695652,
            "unit": "ns",
            "range": "± 3610.277602872681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57630.28888888889,
            "unit": "ns",
            "range": "± 7013.701486720045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60367.07777777778,
            "unit": "ns",
            "range": "± 4391.931097952647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130171.36458333333,
            "unit": "ns",
            "range": "± 19155.932291601388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8329.642857142857,
            "unit": "ns",
            "range": "± 1116.5394993497755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22674.0625,
            "unit": "ns",
            "range": "± 4306.809266639344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5589152.230762769,
            "unit": "ns",
            "range": "± 549103.057085979"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7186558.592783505,
            "unit": "ns",
            "range": "± 613570.2058952294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29328694.041666668,
            "unit": "ns",
            "range": "± 2133305.4824682255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7441122.811827957,
            "unit": "ns",
            "range": "± 997085.9934240003"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32320212.80952381,
            "unit": "ns",
            "range": "± 1736431.3405348207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7278409.966171875,
            "unit": "ns",
            "range": "± 511381.13208588137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075394.744357639,
            "unit": "ns",
            "range": "± 69176.94399057026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396282.0939941406,
            "unit": "ns",
            "range": "± 26131.39482296585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3433401.5666097007,
            "unit": "ns",
            "range": "± 223732.084849361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952794.7111628606,
            "unit": "ns",
            "range": "± 13220.424270771475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802071.095296224,
            "unit": "ns",
            "range": "± 9301.9348816608"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "880e08616aae6d40e9ff22e9f5c90e205e30f325",
          "message": "Merge pull request #2866 from OnedgeLee/release/0.50.0\n\n🚀 Release 0.50.0",
          "timestamp": "2023-02-27T18:47:48+09:00",
          "tree_id": "a27b92d18ca4a2f79f6c9c0d7119297ae7107202",
          "url": "https://github.com/planetarium/libplanet/commit/880e08616aae6d40e9ff22e9f5c90e205e30f325"
        },
        "date": 1677492266955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129454.98979591837,
            "unit": "ns",
            "range": "± 15914.826185197544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104103.19587628866,
            "unit": "ns",
            "range": "± 12113.729928644996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229515.34343434343,
            "unit": "ns",
            "range": "± 28872.15808690329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199144.587628866,
            "unit": "ns",
            "range": "± 21503.89763011608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3614155.3333333335,
            "unit": "ns",
            "range": "± 76063.972810817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9751441.648148147,
            "unit": "ns",
            "range": "± 271723.8472181898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16933.14285714286,
            "unit": "ns",
            "range": "± 1756.8095234223033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55817.416666666664,
            "unit": "ns",
            "range": "± 6898.279206732291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54019.69587628866,
            "unit": "ns",
            "range": "± 3208.847552858007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121883.65957446808,
            "unit": "ns",
            "range": "± 16815.731269083935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6960.105263157895,
            "unit": "ns",
            "range": "± 1166.4644569069917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16585.81111111111,
            "unit": "ns",
            "range": "± 1779.832102259847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4786507.195591518,
            "unit": "ns",
            "range": "± 173767.70692139165"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6248222.435483871,
            "unit": "ns",
            "range": "± 186820.50535294306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26166228.969387755,
            "unit": "ns",
            "range": "± 1039370.7817673894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7121078.125,
            "unit": "ns",
            "range": "± 138678.16297113977"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30869239.25,
            "unit": "ns",
            "range": "± 881657.6800655484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176394.1,
            "unit": "ns",
            "range": "± 101106.41559580115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980228.7024739583,
            "unit": "ns",
            "range": "± 10426.990458706801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278951.7697916667,
            "unit": "ns",
            "range": "± 4711.592485819464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2830625.6591796875,
            "unit": "ns",
            "range": "± 55151.11851038237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791713.6068638393,
            "unit": "ns",
            "range": "± 4427.165674428946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717631.0446428572,
            "unit": "ns",
            "range": "± 9971.615707997646"
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
          "id": "9eb4f5f6b97b725d67799ead74ada4116e7be725",
          "message": "Merge pull request #2867 from OnedgeLee/prepare/0.51.0\n\n🔧 Prepare 0.51.0",
          "timestamp": "2023-02-27T20:46:53-05:00",
          "tree_id": "785446742c97062ea6e87d33c23cd51b74123031",
          "url": "https://github.com/planetarium/libplanet/commit/9eb4f5f6b97b725d67799ead74ada4116e7be725"
        },
        "date": 1677549852051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141688.1222222222,
            "unit": "ns",
            "range": "± 11960.371999755458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117537.47368421052,
            "unit": "ns",
            "range": "± 17836.04268605478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268507.67346938775,
            "unit": "ns",
            "range": "± 51927.22547648867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240177.79787234042,
            "unit": "ns",
            "range": "± 33536.11311259312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3802081.097938144,
            "unit": "ns",
            "range": "± 222282.73754100222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10288800.847826088,
            "unit": "ns",
            "range": "± 394707.50689451984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18869.18085106383,
            "unit": "ns",
            "range": "± 2264.8673011177466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49727.54651162791,
            "unit": "ns",
            "range": "± 5394.147263267032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48737.563157894736,
            "unit": "ns",
            "range": "± 4993.711683602425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119222.75555555556,
            "unit": "ns",
            "range": "± 11266.786148647307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7571.298969072165,
            "unit": "ns",
            "range": "± 1222.8713662672892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19630.925531914894,
            "unit": "ns",
            "range": "± 3354.453365526439"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5411048.706776494,
            "unit": "ns",
            "range": "± 680784.7386690653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6737150.525773196,
            "unit": "ns",
            "range": "± 1197275.4025477585"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30633336.978723403,
            "unit": "ns",
            "range": "± 2373283.2687582057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7425160.458333333,
            "unit": "ns",
            "range": "± 658139.5013791196"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32013499.675438598,
            "unit": "ns",
            "range": "± 1374655.785351816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6926953.686631944,
            "unit": "ns",
            "range": "± 142704.64222707477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990621.5260416667,
            "unit": "ns",
            "range": "± 9988.953116667031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293739.4134615385,
            "unit": "ns",
            "range": "± 8117.826427884679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665938.785606971,
            "unit": "ns",
            "range": "± 35147.15730964367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830837.2031901042,
            "unit": "ns",
            "range": "± 15464.695358270117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701607.812639509,
            "unit": "ns",
            "range": "± 7438.258630430531"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33357a816f1c352349e0ff237243d335181f5293",
          "message": "Merge pull request #2848 from planetarium/ci-tslib-account\n\nIntroduce @planetarium/account",
          "timestamp": "2023-02-28T11:11:34+09:00",
          "tree_id": "61e4d02d52755d15c297d1c2c1b2e61bbebc4737",
          "url": "https://github.com/planetarium/libplanet/commit/33357a816f1c352349e0ff237243d335181f5293"
        },
        "date": 1677551522109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135481.78723404257,
            "unit": "ns",
            "range": "± 12831.446101317579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99572.36842105263,
            "unit": "ns",
            "range": "± 14202.690096592378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227310.35483870967,
            "unit": "ns",
            "range": "± 38223.80629029993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181727.33333333334,
            "unit": "ns",
            "range": "± 19102.762962108827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3670268.1707317075,
            "unit": "ns",
            "range": "± 132285.4343208092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10012362.193548387,
            "unit": "ns",
            "range": "± 542500.1862243771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17796.69230769231,
            "unit": "ns",
            "range": "± 3024.3908062150217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53557.68041237113,
            "unit": "ns",
            "range": "± 7622.023574192736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58057.58888888889,
            "unit": "ns",
            "range": "± 6170.35412391233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126649.51086956522,
            "unit": "ns",
            "range": "± 25976.525806964266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8492.244680851063,
            "unit": "ns",
            "range": "± 994.8429490381748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20367.5,
            "unit": "ns",
            "range": "± 4005.5502782487883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5112870.371423855,
            "unit": "ns",
            "range": "± 249965.02421496672"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6587295.871428572,
            "unit": "ns",
            "range": "± 214903.07024249816"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26446634.930555556,
            "unit": "ns",
            "range": "± 1307351.8089638988"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6491274.944444444,
            "unit": "ns",
            "range": "± 385716.3154477554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30044479.57731959,
            "unit": "ns",
            "range": "± 1945311.6232608294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7349751.763020833,
            "unit": "ns",
            "range": "± 341571.35099084233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107425.0058976714,
            "unit": "ns",
            "range": "± 80990.79416249767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345436.6700439453,
            "unit": "ns",
            "range": "± 25753.358768143986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2752059.362485532,
            "unit": "ns",
            "range": "± 112485.77522928397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879492.8688964844,
            "unit": "ns",
            "range": "± 16513.34107709493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749833.4773763021,
            "unit": "ns",
            "range": "± 8449.969758204728"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eba004462bf0924b922a9e1535c24ec93ea0d424",
          "message": "Merge pull request #2869 from planetarium/ci-npm-account\n\nAdd `@planetarium/account` to npm package list for CI",
          "timestamp": "2023-02-28T12:33:27+09:00",
          "tree_id": "2a4d43b94c69ff6423629d51950f1e1b1596bd40",
          "url": "https://github.com/planetarium/libplanet/commit/eba004462bf0924b922a9e1535c24ec93ea0d424"
        },
        "date": 1677556418245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148481.73913043478,
            "unit": "ns",
            "range": "± 8884.706419571132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132225.48876404495,
            "unit": "ns",
            "range": "± 19552.42745827832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247170.69892473117,
            "unit": "ns",
            "range": "± 29444.34034152402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246413.3152173913,
            "unit": "ns",
            "range": "± 34497.26945236067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933859.0434782607,
            "unit": "ns",
            "range": "± 270050.23904367787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11109555.090909092,
            "unit": "ns",
            "range": "± 523569.49930611235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22532.02688172043,
            "unit": "ns",
            "range": "± 5974.512186001678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70458.47368421052,
            "unit": "ns",
            "range": "± 13968.097005465252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64596.550561797754,
            "unit": "ns",
            "range": "± 6884.077134972804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148758.9381443299,
            "unit": "ns",
            "range": "± 29193.450647082373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8592.021276595744,
            "unit": "ns",
            "range": "± 1243.7635629884435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23301.047368421052,
            "unit": "ns",
            "range": "± 6427.581290842764"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5790261.315047555,
            "unit": "ns",
            "range": "± 554290.1400105382"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6546017.193548387,
            "unit": "ns",
            "range": "± 378475.0455727121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30515137.51075269,
            "unit": "ns",
            "range": "± 1864708.0794406827"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8594841.360215053,
            "unit": "ns",
            "range": "± 878624.4705963084"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36268833.3655914,
            "unit": "ns",
            "range": "± 3566736.386138965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7828231.759765625,
            "unit": "ns",
            "range": "± 226677.75298536324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2244382.57484375,
            "unit": "ns",
            "range": "± 89741.66447483176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423007.5698939732,
            "unit": "ns",
            "range": "± 39822.23192571408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3195484.2164620534,
            "unit": "ns",
            "range": "± 149621.61123008095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974387.4734629756,
            "unit": "ns",
            "range": "± 37409.91098797113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788958.593889509,
            "unit": "ns",
            "range": "± 9873.36010478232"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "325cb55ec61088ef737620e8fe7d95f251db50fd",
          "message": "Merge pull request #2873 from moreal/poly-action-configurable",
          "timestamp": "2023-03-02T12:09:41+09:00",
          "tree_id": "27033c3c72b24f2483a6a0b1f313df7d500fbb50",
          "url": "https://github.com/planetarium/libplanet/commit/325cb55ec61088ef737620e8fe7d95f251db50fd"
        },
        "date": 1677727682093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144301.29569892472,
            "unit": "ns",
            "range": "± 16131.297762801207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112128.04301075269,
            "unit": "ns",
            "range": "± 12899.307474597887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236300.37113402062,
            "unit": "ns",
            "range": "± 29703.3834114902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220962.5,
            "unit": "ns",
            "range": "± 14598.952643005843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737285.966666667,
            "unit": "ns",
            "range": "± 109957.53533335065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9983985.274193548,
            "unit": "ns",
            "range": "± 300045.46109622676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23959.572916666668,
            "unit": "ns",
            "range": "± 3127.5228628716823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56899.75,
            "unit": "ns",
            "range": "± 5285.30899758945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58919.71276595745,
            "unit": "ns",
            "range": "± 7318.810960000428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132512.33684210526,
            "unit": "ns",
            "range": "± 17023.8403458025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8523.850515463917,
            "unit": "ns",
            "range": "± 831.8320273303017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22393.581632653062,
            "unit": "ns",
            "range": "± 3519.4604573418897"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5235180.716206395,
            "unit": "ns",
            "range": "± 289216.2912092331"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7039593.588888889,
            "unit": "ns",
            "range": "± 681979.247377801"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29432344.013513513,
            "unit": "ns",
            "range": "± 1473552.4551733304"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7224942.442528736,
            "unit": "ns",
            "range": "± 491943.7443926674"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32954476.20886076,
            "unit": "ns",
            "range": "± 1639108.344751297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7142012.74609375,
            "unit": "ns",
            "range": "± 106368.10699020915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2021462.9224330357,
            "unit": "ns",
            "range": "± 51362.17361160932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316929.4828125,
            "unit": "ns",
            "range": "± 16995.343997614505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719311.6580282184,
            "unit": "ns",
            "range": "± 128353.48543399561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823428.1716496394,
            "unit": "ns",
            "range": "± 22280.981858600615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737659.2318725586,
            "unit": "ns",
            "range": "± 11676.721105922072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef8c2b41bdb649d104fde4663fc4c30ce9006948",
          "message": "Merge pull request #2872 from limebell/merge/pbft-to-main\n\nImplement PBFT consensus algorithm to replace PoW consensus algorithm",
          "timestamp": "2023-03-02T16:33:41+09:00",
          "tree_id": "fcdff2dec63ac9bd80e9c4b2f535fc3e4b2ec2c9",
          "url": "https://github.com/planetarium/libplanet/commit/ef8c2b41bdb649d104fde4663fc4c30ce9006948"
        },
        "date": 1677743350169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8297702.525,
            "unit": "ns",
            "range": "± 292853.72749373317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20410916.673469387,
            "unit": "ns",
            "range": "± 788007.3166469593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50154975.07692308,
            "unit": "ns",
            "range": "± 810308.5237701606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100831540.80555555,
            "unit": "ns",
            "range": "± 3304615.247738643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210265514.91666666,
            "unit": "ns",
            "range": "± 4915259.916335355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64409.778947368424,
            "unit": "ns",
            "range": "± 9138.395643655269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198698.86046511628,
            "unit": "ns",
            "range": "± 10877.540581575891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203559.0888888889,
            "unit": "ns",
            "range": "± 14404.887729045027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190335.97916666666,
            "unit": "ns",
            "range": "± 19163.229603635882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12592600.80952381,
            "unit": "ns",
            "range": "± 452315.20927649655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10347409.05263158,
            "unit": "ns",
            "range": "± 223220.42832203966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22101.918367346938,
            "unit": "ns",
            "range": "± 4157.155075669455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53231.2,
            "unit": "ns",
            "range": "± 7350.799207670509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48311.21649484536,
            "unit": "ns",
            "range": "± 5139.302938358965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117462.14893617021,
            "unit": "ns",
            "range": "± 10550.459524168975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5829.965909090909,
            "unit": "ns",
            "range": "± 689.2603223223426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17162.13953488372,
            "unit": "ns",
            "range": "± 2072.761800183745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540386.030612245,
            "unit": "ns",
            "range": "± 114691.39676084105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856702.152173913,
            "unit": "ns",
            "range": "± 107824.1553011646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554793.1875,
            "unit": "ns",
            "range": "± 254021.7583748668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6034507.560975609,
            "unit": "ns",
            "range": "± 204945.74017017882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424292.9,
            "unit": "ns",
            "range": "± 181210.4463854638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5265293.359375,
            "unit": "ns",
            "range": "± 234957.13040368762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25088663.416666668,
            "unit": "ns",
            "range": "± 976868.0191024266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6318599.645833333,
            "unit": "ns",
            "range": "± 387266.29876556323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29228240.19607843,
            "unit": "ns",
            "range": "± 1192286.0077789228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614687.151654412,
            "unit": "ns",
            "range": "± 132468.87213684485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885851.2786458333,
            "unit": "ns",
            "range": "± 15106.093971645272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1252009.777560764,
            "unit": "ns",
            "range": "± 25685.58613204652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544737.317578125,
            "unit": "ns",
            "range": "± 20539.345937724436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817469.984765625,
            "unit": "ns",
            "range": "± 3707.6301505242654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702873.492578125,
            "unit": "ns",
            "range": "± 6137.450238772374"
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
          "id": "1db01f804e449cacb42f6e34661eded415609449",
          "message": "Merge pull request #2886 from dahlia/main",
          "timestamp": "2023-03-06T15:33:21+09:00",
          "tree_id": "dbf16bc8ee38ad7e79c9b24faa4ebe0f4904f112",
          "url": "https://github.com/planetarium/libplanet/commit/1db01f804e449cacb42f6e34661eded415609449"
        },
        "date": 1678085740471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8452398.392405063,
            "unit": "ns",
            "range": "± 434400.6356032093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21505283.342105262,
            "unit": "ns",
            "range": "± 471648.2007307828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55349318.95652174,
            "unit": "ns",
            "range": "± 2109728.964813326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 105650359.62962963,
            "unit": "ns",
            "range": "± 2892559.4078220115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219999013.2857143,
            "unit": "ns",
            "range": "± 3602304.9140553414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80663.45698924731,
            "unit": "ns",
            "range": "± 11984.369323626777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252171.45555555556,
            "unit": "ns",
            "range": "± 31289.483605719815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250115.5054945055,
            "unit": "ns",
            "range": "± 25335.054328987477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245909.66853932585,
            "unit": "ns",
            "range": "± 31064.813232043198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15056461.087912088,
            "unit": "ns",
            "range": "± 1712790.7805443506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11308686.873563219,
            "unit": "ns",
            "range": "± 668729.0791750058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32487.033333333333,
            "unit": "ns",
            "range": "± 3761.894900239697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84594.23684210527,
            "unit": "ns",
            "range": "± 16068.046811097736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79856.09139784946,
            "unit": "ns",
            "range": "± 10372.64843883072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155646.7741935484,
            "unit": "ns",
            "range": "± 24355.92481536065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11432.244680851063,
            "unit": "ns",
            "range": "± 1069.356279948842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31435.44382022472,
            "unit": "ns",
            "range": "± 3753.534514172036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1960870.1022727273,
            "unit": "ns",
            "range": "± 276388.0208489607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198303.802325581,
            "unit": "ns",
            "range": "± 286211.57636351796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3206678.6279069767,
            "unit": "ns",
            "range": "± 591216.8274710923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7561394.613636363,
            "unit": "ns",
            "range": "± 1149908.6386661027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3449569.466666667,
            "unit": "ns",
            "range": "± 55081.83012426236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5435686.964285715,
            "unit": "ns",
            "range": "± 153330.05204109405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26268433.43956044,
            "unit": "ns",
            "range": "± 1724759.7344173295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7211154.056701031,
            "unit": "ns",
            "range": "± 633335.356290261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33945781.22105263,
            "unit": "ns",
            "range": "± 3836635.82727011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7972651.204292385,
            "unit": "ns",
            "range": "± 680517.0216033125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2298663.9591567097,
            "unit": "ns",
            "range": "± 109607.01406666962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442754.4063626803,
            "unit": "ns",
            "range": "± 59273.43221833003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638270.8524050247,
            "unit": "ns",
            "range": "± 105659.05920833112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838708.4213207348,
            "unit": "ns",
            "range": "± 27672.19157782677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755415.3692948191,
            "unit": "ns",
            "range": "± 15797.513599433281"
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
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/planetarium/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678100413761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8688373.358024692,
            "unit": "ns",
            "range": "± 454672.94855688047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22463498.97,
            "unit": "ns",
            "range": "± 1558785.8519901037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54910277.805263154,
            "unit": "ns",
            "range": "± 3932625.990834636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108081590.79775281,
            "unit": "ns",
            "range": "± 5984825.0422201175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 221483026.08045977,
            "unit": "ns",
            "range": "± 12081551.940151883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78719.875,
            "unit": "ns",
            "range": "± 8848.646846760139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217086.4111111111,
            "unit": "ns",
            "range": "± 23177.946376778487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218928.71348314607,
            "unit": "ns",
            "range": "± 21348.450856333126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186245.55,
            "unit": "ns",
            "range": "± 20803.42075084933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12054618.65625,
            "unit": "ns",
            "range": "± 555555.3847660144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9604421.286885247,
            "unit": "ns",
            "range": "± 431588.7864002846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19291,
            "unit": "ns",
            "range": "± 3799.1169306342204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56610.35057471264,
            "unit": "ns",
            "range": "± 5376.64777669337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61243.37837837838,
            "unit": "ns",
            "range": "± 3081.5048747689393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122626.1170212766,
            "unit": "ns",
            "range": "± 17116.506388528134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7947.078947368421,
            "unit": "ns",
            "range": "± 1360.2126912764484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19630.01030927835,
            "unit": "ns",
            "range": "± 3630.372603394305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585385.5714285714,
            "unit": "ns",
            "range": "± 137589.38430934167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928405.976744186,
            "unit": "ns",
            "range": "± 172029.9443775433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2591722.5625,
            "unit": "ns",
            "range": "± 226737.90827332882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6243687.45,
            "unit": "ns",
            "range": "± 205099.29297380918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391852.597938144,
            "unit": "ns",
            "range": "± 206698.50777761536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5391769.947916667,
            "unit": "ns",
            "range": "± 374293.19965163735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25427506.542857144,
            "unit": "ns",
            "range": "± 824834.4549583818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6556950.1630434785,
            "unit": "ns",
            "range": "± 678335.228024281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29936986.489361703,
            "unit": "ns",
            "range": "± 1156408.5717823294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6468901.850360577,
            "unit": "ns",
            "range": "± 99195.54302894388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040120.3728966345,
            "unit": "ns",
            "range": "± 17254.19906150736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263413.6780790442,
            "unit": "ns",
            "range": "± 25386.525423606916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2488915.2131204046,
            "unit": "ns",
            "range": "± 79376.68443530315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834456.9580078125,
            "unit": "ns",
            "range": "± 12634.722979301765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702924.5291341146,
            "unit": "ns",
            "range": "± 4332.817468215787"
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
          "id": "0e58f6003ecd29e6647380dc70da5c15c1c8796a",
          "message": "Merge pull request #2890 from greymistcube/refactor/default-store\n\n🧹 Minor cleanup for `DefaultStore` code comprehension",
          "timestamp": "2023-03-06T22:08:06-05:00",
          "tree_id": "f2fba8cafa5a5235c451619b662db2f49525c5e3",
          "url": "https://github.com/planetarium/libplanet/commit/0e58f6003ecd29e6647380dc70da5c15c1c8796a"
        },
        "date": 1678159747091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8901494.673913043,
            "unit": "ns",
            "range": "± 222683.09542724452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21169408.815789472,
            "unit": "ns",
            "range": "± 466883.05309182004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52541439.65116279,
            "unit": "ns",
            "range": "± 1934163.4630275585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107094114.44,
            "unit": "ns",
            "range": "± 2839814.1613455107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206335828.78,
            "unit": "ns",
            "range": "± 8227797.495153486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85564.52272727272,
            "unit": "ns",
            "range": "± 8323.414243334535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253715.84782608695,
            "unit": "ns",
            "range": "± 35545.91602542377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221167.625,
            "unit": "ns",
            "range": "± 15686.32806809986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186900.4842105263,
            "unit": "ns",
            "range": "± 14657.528333527189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13876843.983516483,
            "unit": "ns",
            "range": "± 2254438.923556962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10240908.11904762,
            "unit": "ns",
            "range": "± 523785.72033492936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22461.36170212766,
            "unit": "ns",
            "range": "± 4043.606663813356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66381.18421052632,
            "unit": "ns",
            "range": "± 13650.323146563202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60797.391304347824,
            "unit": "ns",
            "range": "± 6646.424598541638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141428.86666666667,
            "unit": "ns",
            "range": "± 22502.28625647935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9599.957894736843,
            "unit": "ns",
            "range": "± 1220.020299061938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26959.697916666668,
            "unit": "ns",
            "range": "± 3513.57675946139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664995.2191011235,
            "unit": "ns",
            "range": "± 178122.98631231717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3156049.523809524,
            "unit": "ns",
            "range": "± 417664.84871273086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2806582.476744186,
            "unit": "ns",
            "range": "± 356019.76492409146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7654282.954545454,
            "unit": "ns",
            "range": "± 1541177.2356107084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3517163.2,
            "unit": "ns",
            "range": "± 64566.812235964426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5258483.3,
            "unit": "ns",
            "range": "± 234896.1053512675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25971027.646153845,
            "unit": "ns",
            "range": "± 1197101.7166978025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7083909.423913044,
            "unit": "ns",
            "range": "± 538970.2538697907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29524764.7,
            "unit": "ns",
            "range": "± 1298047.3166317777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7918678.1839192705,
            "unit": "ns",
            "range": "± 311658.0686875667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2140911.1275275736,
            "unit": "ns",
            "range": "± 68350.61807330592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345390.8015407985,
            "unit": "ns",
            "range": "± 28085.228231775556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2952099.3865576675,
            "unit": "ns",
            "range": "± 226235.10196460786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888790.1376953125,
            "unit": "ns",
            "range": "± 19727.78519586725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805177.4807559743,
            "unit": "ns",
            "range": "± 15981.822860423821"
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
          "id": "bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9",
          "message": "Merge pull request #2870 from colibrishin/pbft-gossip-and-kdm\n\nfix/pbft: parallel replying / task-switching between kademlia",
          "timestamp": "2023-03-07T15:26:28+09:00",
          "tree_id": "51d0c2a2057e65c5ba3ea2856fe3f93c9cb1e99e",
          "url": "https://github.com/planetarium/libplanet/commit/bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9"
        },
        "date": 1678171672370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9465631.849462366,
            "unit": "ns",
            "range": "± 536759.8370320095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26024915.13917526,
            "unit": "ns",
            "range": "± 5447363.259574666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55013327.24137931,
            "unit": "ns",
            "range": "± 1592586.2195194298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112389056.9074074,
            "unit": "ns",
            "range": "± 4503934.319485863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 233411397.2777778,
            "unit": "ns",
            "range": "± 4901349.390773342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77840.72413793103,
            "unit": "ns",
            "range": "± 7024.5204978945585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233541.7840909091,
            "unit": "ns",
            "range": "± 18478.115294217932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281360.88372093026,
            "unit": "ns",
            "range": "± 73649.26042157615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228307.09677419355,
            "unit": "ns",
            "range": "± 17552.808710007015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13962925.16,
            "unit": "ns",
            "range": "± 702211.2954035648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11411271.863157894,
            "unit": "ns",
            "range": "± 754763.6058236143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26359.08988764045,
            "unit": "ns",
            "range": "± 2408.3170361009056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70120.71052631579,
            "unit": "ns",
            "range": "± 10779.30061866481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63468.72727272727,
            "unit": "ns",
            "range": "± 1991.0975816231246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138838.01546391752,
            "unit": "ns",
            "range": "± 24925.198521490172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9064.833333333334,
            "unit": "ns",
            "range": "± 1000.511850888392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25772.466666666667,
            "unit": "ns",
            "range": "± 2781.416061624935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653987.9782608696,
            "unit": "ns",
            "range": "± 171345.68531021755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2909699.3483146066,
            "unit": "ns",
            "range": "± 182018.5060500905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2744859.0217391304,
            "unit": "ns",
            "range": "± 331191.6155541911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6948650.838709678,
            "unit": "ns",
            "range": "± 966469.2690792907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479165.5444444446,
            "unit": "ns",
            "range": "± 247879.81637516074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5622867.693877551,
            "unit": "ns",
            "range": "± 448706.95031181775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27285701.94329897,
            "unit": "ns",
            "range": "± 1676855.8274793818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7056587.587628866,
            "unit": "ns",
            "range": "± 505096.96569358825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32256446.521052632,
            "unit": "ns",
            "range": "± 2476477.7204485275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8089889.07421875,
            "unit": "ns",
            "range": "± 85177.99546666289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2138740.3263671873,
            "unit": "ns",
            "range": "± 42326.40747884336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414452.266898777,
            "unit": "ns",
            "range": "± 31685.554406592706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3316745.074822809,
            "unit": "ns",
            "range": "± 198311.59274438984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013772.2136548914,
            "unit": "ns",
            "range": "± 25149.11941066053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851686.3662414551,
            "unit": "ns",
            "range": "± 39060.19053909749"
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
          "id": "443ec1670ccb3b5160bef67f174f4e8797ff5758",
          "message": "Merge pull request #2895 from greymistcube/release/0.51.0\n\n🚀 Release 0.51.0",
          "timestamp": "2023-03-07T04:01:48-05:00",
          "tree_id": "067f25104ac8b8f8d254ba7c54539799ac1beaa1",
          "url": "https://github.com/planetarium/libplanet/commit/443ec1670ccb3b5160bef67f174f4e8797ff5758"
        },
        "date": 1678180859319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8915399.1,
            "unit": "ns",
            "range": "± 161770.1338428786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22016130.5,
            "unit": "ns",
            "range": "± 374916.5595626388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54194512.64285714,
            "unit": "ns",
            "range": "± 903833.9673624419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107225103.4,
            "unit": "ns",
            "range": "± 769297.1141037772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220153387.6153846,
            "unit": "ns",
            "range": "± 1134819.8164328805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84162.72727272728,
            "unit": "ns",
            "range": "± 4800.155614640518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247521.94915254237,
            "unit": "ns",
            "range": "± 10957.493344461665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245091.07894736843,
            "unit": "ns",
            "range": "± 9148.133822080421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247413.9239130435,
            "unit": "ns",
            "range": "± 23174.202605973707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14751167.93478261,
            "unit": "ns",
            "range": "± 1172721.5524873764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11573598.28125,
            "unit": "ns",
            "range": "± 836688.5050319461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31641.45238095238,
            "unit": "ns",
            "range": "± 3495.0697216437457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78237.20652173914,
            "unit": "ns",
            "range": "± 11387.732259402008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70869.75882352941,
            "unit": "ns",
            "range": "± 4658.871652564601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150149.36170212767,
            "unit": "ns",
            "range": "± 17011.81620455154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10602.025773195875,
            "unit": "ns",
            "range": "± 1250.966435507493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28273.08510638298,
            "unit": "ns",
            "range": "± 3102.2045461965376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706504.0274725275,
            "unit": "ns",
            "range": "± 185708.99336395107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151340.6298701297,
            "unit": "ns",
            "range": "± 161001.55730706055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2660243.4318181816,
            "unit": "ns",
            "range": "± 226650.1650675435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6378477.725490196,
            "unit": "ns",
            "range": "± 245030.9524141861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486667.6923076925,
            "unit": "ns",
            "range": "± 93754.15949674734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5517697.380952381,
            "unit": "ns",
            "range": "± 129667.9858370894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26275874.769230768,
            "unit": "ns",
            "range": "± 372653.1102587574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7213925.967391305,
            "unit": "ns",
            "range": "± 618563.301897235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36735681.435294114,
            "unit": "ns",
            "range": "± 6660958.241413067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7026239.222956731,
            "unit": "ns",
            "range": "± 66334.99152535739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1944135.486328125,
            "unit": "ns",
            "range": "± 13230.575706273517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310753.4787760417,
            "unit": "ns",
            "range": "± 5754.8772790732855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3000598.777126736,
            "unit": "ns",
            "range": "± 62667.31943508376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913532.6843449519,
            "unit": "ns",
            "range": "± 2085.3927604407086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729485.4518694197,
            "unit": "ns",
            "range": "± 2901.789600065963"
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
          "id": "4d42793b3feb598dbae2547d6be88b906c1b17d4",
          "message": "Merge pull request #2897 from greymistcube/prepare/0.52.0\n\n🔧 Prepare 0.52.0",
          "timestamp": "2023-03-07T05:04:50-05:00",
          "tree_id": "d33d593feb62e920fbe578c16b4ea720826d64e2",
          "url": "https://github.com/planetarium/libplanet/commit/4d42793b3feb598dbae2547d6be88b906c1b17d4"
        },
        "date": 1678185060041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10181013.872340426,
            "unit": "ns",
            "range": "± 1071611.474850635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23127576.31111111,
            "unit": "ns",
            "range": "± 1457140.431730414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 66626867.65934066,
            "unit": "ns",
            "range": "± 12244165.551217183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 126104561.10465117,
            "unit": "ns",
            "range": "± 18660014.27624189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 276092942.2197802,
            "unit": "ns",
            "range": "± 39721692.92782403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88311.17021276595,
            "unit": "ns",
            "range": "± 18604.218117288947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266736.98913043475,
            "unit": "ns",
            "range": "± 50623.91492376575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282592.77173913043,
            "unit": "ns",
            "range": "± 51048.9350202878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229703.010989011,
            "unit": "ns",
            "range": "± 33308.85320701606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14065262.33908046,
            "unit": "ns",
            "range": "± 1331859.7805700542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12290449.104166666,
            "unit": "ns",
            "range": "± 2133727.8456860054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27937.13,
            "unit": "ns",
            "range": "± 7996.258614590584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70247.51030927835,
            "unit": "ns",
            "range": "± 18922.078976739736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69249.5,
            "unit": "ns",
            "range": "± 10827.720589205039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148196.70833333334,
            "unit": "ns",
            "range": "± 20900.990642811103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10196.521276595744,
            "unit": "ns",
            "range": "± 1989.155268534394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26467.541666666668,
            "unit": "ns",
            "range": "± 6101.898013459964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829922.0337078653,
            "unit": "ns",
            "range": "± 199883.850303657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3497436.934782609,
            "unit": "ns",
            "range": "± 790617.0932381954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2996720.315217391,
            "unit": "ns",
            "range": "± 499521.2987845293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6807544.76744186,
            "unit": "ns",
            "range": "± 528984.0000792068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4207216.885057472,
            "unit": "ns",
            "range": "± 940071.7017204175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5783762.348837209,
            "unit": "ns",
            "range": "± 590639.0430578515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29892314.521052632,
            "unit": "ns",
            "range": "± 3290115.8192055486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8371196.166666667,
            "unit": "ns",
            "range": "± 1565897.2112522093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37217856.62903226,
            "unit": "ns",
            "range": "± 6085677.434432132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8055291.921875,
            "unit": "ns",
            "range": "± 789726.1696359512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2558221.0525390627,
            "unit": "ns",
            "range": "± 285949.8535937121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388720.2241210938,
            "unit": "ns",
            "range": "± 14753.082172033604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3481665.921796086,
            "unit": "ns",
            "range": "± 465427.9362741533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932697.6419270834,
            "unit": "ns",
            "range": "± 36840.201686295346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876494.4791221217,
            "unit": "ns",
            "range": "± 67849.2696422138"
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
          "id": "7c53382e1bb7413e152fd11af44b6b5909bdbafd",
          "message": "Merge pull request #2903 from colibrishin/benchmark/spliting-merged-fix\n\nci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T18:01:12+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/planetarium/libplanet/commit/7c53382e1bb7413e152fd11af44b6b5909bdbafd"
        },
        "date": 1678353406337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7869733.384615385,
            "unit": "ns",
            "range": "± 121760.58035583497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19381824,
            "unit": "ns",
            "range": "± 537218.6584581881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47756323.041666664,
            "unit": "ns",
            "range": "± 1206638.4580073103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98161571.13043478,
            "unit": "ns",
            "range": "± 2431015.2316362564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198301031.6470588,
            "unit": "ns",
            "range": "± 6357736.9781278595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64449.19587628866,
            "unit": "ns",
            "range": "± 12838.211903044863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211490.3052631579,
            "unit": "ns",
            "range": "± 21965.992968858725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207034.2894736842,
            "unit": "ns",
            "range": "± 20842.006032669826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186815.51020408163,
            "unit": "ns",
            "range": "± 22021.68274619634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11848708.01369863,
            "unit": "ns",
            "range": "± 587303.6063244295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9828896.664383562,
            "unit": "ns",
            "range": "± 486776.08222238906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19672.622448979593,
            "unit": "ns",
            "range": "± 4045.4485644912675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54169.84210526316,
            "unit": "ns",
            "range": "± 6359.465982390897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54771.155913978495,
            "unit": "ns",
            "range": "± 5698.989758862728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115673.13978494624,
            "unit": "ns",
            "range": "± 14361.6105049352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7686.725274725275,
            "unit": "ns",
            "range": "± 1177.0197871076678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19440.56842105263,
            "unit": "ns",
            "range": "± 3247.5126083735763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592184.1734693877,
            "unit": "ns",
            "range": "± 178561.0532548459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982874.936170213,
            "unit": "ns",
            "range": "± 196345.12475251808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2489763.829787234,
            "unit": "ns",
            "range": "± 194244.12611966475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5915922.153846154,
            "unit": "ns",
            "range": "± 139311.24320131302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3200350.643678161,
            "unit": "ns",
            "range": "± 166789.73398033835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4893253.9529411765,
            "unit": "ns",
            "range": "± 263059.42921437544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23812053.333333332,
            "unit": "ns",
            "range": "± 1089642.372158703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6136149.354838709,
            "unit": "ns",
            "range": "± 278811.8256054388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27358944.285714287,
            "unit": "ns",
            "range": "± 983118.5156562376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6284773.470982143,
            "unit": "ns",
            "range": "± 43789.55895077045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959214.035435268,
            "unit": "ns",
            "range": "± 13642.444414133111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285655.4033203125,
            "unit": "ns",
            "range": "± 5347.053228919373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2895203.329520089,
            "unit": "ns",
            "range": "± 104909.25596757735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813323.2886067708,
            "unit": "ns",
            "range": "± 2584.3065901846003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710427.0268880208,
            "unit": "ns",
            "range": "± 11248.353264755533"
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
          "id": "a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6",
          "message": "Merge pull request #2908 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: cherrypick of bench pr update to 0.47-maintenance",
          "timestamp": "2023-03-10T11:10:19+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/planetarium/libplanet/commit/a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6"
        },
        "date": 1678415085301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148558.82258064515,
            "unit": "ns",
            "range": "± 4545.078623354399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133825.05208333334,
            "unit": "ns",
            "range": "± 14380.967094974263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253023.35616438356,
            "unit": "ns",
            "range": "± 12537.703640054247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236997.61666666667,
            "unit": "ns",
            "range": "± 10604.978814883332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776542.1129032257,
            "unit": "ns",
            "range": "± 170483.74943451158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10690305.25,
            "unit": "ns",
            "range": "± 203266.62944730173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31580.755102040817,
            "unit": "ns",
            "range": "± 4296.142388695092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74716.54081632652,
            "unit": "ns",
            "range": "± 10729.738821312223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64621.21428571428,
            "unit": "ns",
            "range": "± 5101.848273552361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133085.1701030928,
            "unit": "ns",
            "range": "± 22295.264469969126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8629.591836734693,
            "unit": "ns",
            "range": "± 1836.6258329452821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22742.721649484534,
            "unit": "ns",
            "range": "± 5309.236318558184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5708805.378276209,
            "unit": "ns",
            "range": "± 336385.0544162797"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6832089.277777778,
            "unit": "ns",
            "range": "± 171212.804603451"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28730086.92105263,
            "unit": "ns",
            "range": "± 967354.824242178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7759400.031914894,
            "unit": "ns",
            "range": "± 632388.563598064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32971524.282608695,
            "unit": "ns",
            "range": "± 1589661.572639088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6723229.610491072,
            "unit": "ns",
            "range": "± 158936.1351863261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2159227.1072716345,
            "unit": "ns",
            "range": "± 88840.82946734388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300661.3125558037,
            "unit": "ns",
            "range": "± 42656.80054523208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613361.5948262117,
            "unit": "ns",
            "range": "± 104000.76454136723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796297.670703125,
            "unit": "ns",
            "range": "± 14151.882480177279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721650.205078125,
            "unit": "ns",
            "range": "± 8098.4495968625515"
          }
        ]
      }
    ]
  }
}