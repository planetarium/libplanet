window.BENCHMARK_DATA = {
  "lastUpdate": 1680060491634,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "209fdb1c17f0cb26789b857f271544b8935dc5e2",
          "message": "Merge pull request #2905 from colibrishin/0.50-maintenance-bench-failing\n\nci/bench: cherrypick of bench pr update to 0.50-maintenance",
          "timestamp": "2023-03-13T10:51:25+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/planetarium/libplanet/commit/209fdb1c17f0cb26789b857f271544b8935dc5e2"
        },
        "date": 1678673236771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97228.125,
            "unit": "ns",
            "range": "± 4463.732822905703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4720899.832589285,
            "unit": "ns",
            "range": "± 10330.493781376977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1486738.4635416667,
            "unit": "ns",
            "range": "± 4880.046849833662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174159.1341145833,
            "unit": "ns",
            "range": "± 4103.476800342514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639362.8645833335,
            "unit": "ns",
            "range": "± 7433.28691854573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829200.4807692308,
            "unit": "ns",
            "range": "± 1402.921784806669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761671.7692057291,
            "unit": "ns",
            "range": "± 640.6131683520128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4532509.401041667,
            "unit": "ns",
            "range": "± 44169.86568681743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5111835.416666667,
            "unit": "ns",
            "range": "± 201176.03648332928"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24596816,
            "unit": "ns",
            "range": "± 647211.6762698275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5729966,
            "unit": "ns",
            "range": "± 435122.84605103824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26993720,
            "unit": "ns",
            "range": "± 616606.1206313152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85980,
            "unit": "ns",
            "range": "± 5657.586562686046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179914.86486486485,
            "unit": "ns",
            "range": "± 9017.998478422516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169500,
            "unit": "ns",
            "range": "± 10419.71247987512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3515300,
            "unit": "ns",
            "range": "± 47406.81142231324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8867420,
            "unit": "ns",
            "range": "± 146823.41288578117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21212.36559139785,
            "unit": "ns",
            "range": "± 2250.4547356176818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50695.555555555555,
            "unit": "ns",
            "range": "± 4655.597358722274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41026.80412371134,
            "unit": "ns",
            "range": "± 3335.0260950977304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105612.24489795919,
            "unit": "ns",
            "range": "± 18654.665624118115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5830.412371134021,
            "unit": "ns",
            "range": "± 952.4791309238019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18759.79381443299,
            "unit": "ns",
            "range": "± 1950.6761538104356"
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
          "id": "aaabbcbef70b2a687645c71efc7e4590d48d7a3c",
          "message": "Merge pull request #2935 from greymistcube/port/0.49.3-to-0.50.3\n\n🔀🚀 Port 0.49.3 to 0.50.3 and release 0.50.3",
          "timestamp": "2023-03-14T18:25:39+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/planetarium/libplanet/commit/aaabbcbef70b2a687645c71efc7e4590d48d7a3c"
        },
        "date": 1678786974590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112419.19191919192,
            "unit": "ns",
            "range": "± 20157.920794787187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4885223.016826923,
            "unit": "ns",
            "range": "± 131934.28887672737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538667.0532226562,
            "unit": "ns",
            "range": "± 29831.852743228374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162964.7536057692,
            "unit": "ns",
            "range": "± 11112.821160147261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726928.4895833335,
            "unit": "ns",
            "range": "± 43507.28813502563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820777.2054036459,
            "unit": "ns",
            "range": "± 4395.83052475815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754638.1417410715,
            "unit": "ns",
            "range": "± 2817.874886390174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4878546.65234375,
            "unit": "ns",
            "range": "± 302948.75893793174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5965537.894736842,
            "unit": "ns",
            "range": "± 529713.7754182548"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25121180.555555556,
            "unit": "ns",
            "range": "± 810671.9332290941"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5999876.530612245,
            "unit": "ns",
            "range": "± 516875.5220745107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30645609,
            "unit": "ns",
            "range": "± 2364406.301378634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93181.31868131868,
            "unit": "ns",
            "range": "± 14711.10625108279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222529.34782608695,
            "unit": "ns",
            "range": "± 20705.302914972395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194100,
            "unit": "ns",
            "range": "± 30975.59156379863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3531162.3188405796,
            "unit": "ns",
            "range": "± 168308.40835785854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9913496.875,
            "unit": "ns",
            "range": "± 458278.67863524554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24723,
            "unit": "ns",
            "range": "± 7109.260641493381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53684.84848484849,
            "unit": "ns",
            "range": "± 9024.234532932993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50855,
            "unit": "ns",
            "range": "± 13419.896091665953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113637,
            "unit": "ns",
            "range": "± 40624.505355186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5989.690721649485,
            "unit": "ns",
            "range": "± 2304.4108310695196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17255.555555555555,
            "unit": "ns",
            "range": "± 2705.305279295162"
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
          "id": "599ba5d49bea770c77ec9c5bcb83314d8e56de50",
          "message": "Merge pull request #2936 from greymistcube/prepare/0.50.4\n\n🔧 Prepare 0.50.4",
          "timestamp": "2023-03-16T10:34:54+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/planetarium/libplanet/commit/599ba5d49bea770c77ec9c5bcb83314d8e56de50"
        },
        "date": 1678931558749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101839.87341772152,
            "unit": "ns",
            "range": "± 5315.111377772856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807636.979166667,
            "unit": "ns",
            "range": "± 21276.222624288745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521337.1875,
            "unit": "ns",
            "range": "± 5925.216252276298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184139.6158854167,
            "unit": "ns",
            "range": "± 4975.454834436254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622497.1875,
            "unit": "ns",
            "range": "± 3746.447865403865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820156.1979166666,
            "unit": "ns",
            "range": "± 2374.225549520325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746903.6263020834,
            "unit": "ns",
            "range": "± 2055.3549311679917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4694764.036458333,
            "unit": "ns",
            "range": "± 27606.76926454106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5068175.438596491,
            "unit": "ns",
            "range": "± 201415.55770586568"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25499100,
            "unit": "ns",
            "range": "± 373216.66011127556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5724302.083333333,
            "unit": "ns",
            "range": "± 201929.07485590852"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28480404.347826086,
            "unit": "ns",
            "range": "± 712343.6979935642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100790.625,
            "unit": "ns",
            "range": "± 13825.423401720545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196650,
            "unit": "ns",
            "range": "± 15365.355179264365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174413.26530612246,
            "unit": "ns",
            "range": "± 12349.96254224548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3581157.1428571427,
            "unit": "ns",
            "range": "± 58576.192515990064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9219018.75,
            "unit": "ns",
            "range": "± 175848.97770056364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20090.322580645163,
            "unit": "ns",
            "range": "± 2259.9569309155586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54311.82795698925,
            "unit": "ns",
            "range": "± 4391.044479648707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42993.93939393939,
            "unit": "ns",
            "range": "± 3005.0915359014552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108427.77777777778,
            "unit": "ns",
            "range": "± 22738.879567624474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6798.9795918367345,
            "unit": "ns",
            "range": "± 986.5586232479988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20196.875,
            "unit": "ns",
            "range": "± 2266.667069788406"
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
          "id": "81316dce3bdfd83724ca35d33c890c8e104e2542",
          "message": "Merge pull request #2949 from greymistcube/refactor/validator-encoding\n\n♻️ Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:51:57+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/planetarium/libplanet/commit/81316dce3bdfd83724ca35d33c890c8e104e2542"
        },
        "date": 1678932606535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134916,
            "unit": "ns",
            "range": "± 31002.970597324795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828567.994791667,
            "unit": "ns",
            "range": "± 42845.859474550816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537710.4557291667,
            "unit": "ns",
            "range": "± 6967.773301360662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171709.5284598214,
            "unit": "ns",
            "range": "± 4103.038053162124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612063.221153846,
            "unit": "ns",
            "range": "± 9389.353488100956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837851.806640625,
            "unit": "ns",
            "range": "± 4271.635308232397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754060.4361979166,
            "unit": "ns",
            "range": "± 3960.9079095962848"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4591067.606026785,
            "unit": "ns",
            "range": "± 38682.19814395996"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5487650,
            "unit": "ns",
            "range": "± 96618.8526753847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24996991.891891893,
            "unit": "ns",
            "range": "± 834156.6594066323"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5768110.769230769,
            "unit": "ns",
            "range": "± 268152.8581816005"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29180402.272727273,
            "unit": "ns",
            "range": "± 1094708.8718836443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86007.52688172043,
            "unit": "ns",
            "range": "± 11908.329534215332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185816.091954023,
            "unit": "ns",
            "range": "± 12808.18119327714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156302.53164556963,
            "unit": "ns",
            "range": "± 8068.3772505578245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3499000,
            "unit": "ns",
            "range": "± 95105.29387514095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8809136.585365854,
            "unit": "ns",
            "range": "± 317415.64529501187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18775.78947368421,
            "unit": "ns",
            "range": "± 2515.1758869791215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46868.085106382976,
            "unit": "ns",
            "range": "± 4646.12713655396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37271.60493827161,
            "unit": "ns",
            "range": "± 1920.8223868893524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91811.68831168831,
            "unit": "ns",
            "range": "± 6872.025175072867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5260.416666666667,
            "unit": "ns",
            "range": "± 841.9875191807417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17562.36559139785,
            "unit": "ns",
            "range": "± 1499.4864322634967"
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
          "id": "cec749e51da5a9352feeeddd6a088626bbb591d6",
          "message": "Merge pull request #2950 from greymistcube/release/0.50.4\n\n🚀 Release 0.50.4",
          "timestamp": "2023-03-16T11:06:13+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/planetarium/libplanet/commit/cec749e51da5a9352feeeddd6a088626bbb591d6"
        },
        "date": 1678933472008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108047.31182795699,
            "unit": "ns",
            "range": "± 6101.3824413148095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4837380.803571428,
            "unit": "ns",
            "range": "± 15086.771840799773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551582.5260416667,
            "unit": "ns",
            "range": "± 2893.268730320464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171151.09375,
            "unit": "ns",
            "range": "± 3279.828938997933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682697.0703125,
            "unit": "ns",
            "range": "± 13563.306880019623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825050.9974888393,
            "unit": "ns",
            "range": "± 1521.282734885421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761151.1090959822,
            "unit": "ns",
            "range": "± 1047.8531227355313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4769510.364583333,
            "unit": "ns",
            "range": "± 40415.2424367436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5797700,
            "unit": "ns",
            "range": "± 134151.31115913214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25516513.333333332,
            "unit": "ns",
            "range": "± 443792.8375567441"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6139182.352941177,
            "unit": "ns",
            "range": "± 193826.4179238862"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28723586.363636363,
            "unit": "ns",
            "range": "± 681096.9019201268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97877.77777777778,
            "unit": "ns",
            "range": "± 11933.92143118194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192631.74603174604,
            "unit": "ns",
            "range": "± 8826.405131612928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178051.02040816325,
            "unit": "ns",
            "range": "± 11356.992894592593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3585042.8571428573,
            "unit": "ns",
            "range": "± 21083.37713007077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9024128.57142857,
            "unit": "ns",
            "range": "± 126989.64481448827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19836.842105263157,
            "unit": "ns",
            "range": "± 1854.8414299133983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53794.9494949495,
            "unit": "ns",
            "range": "± 7017.040101291819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39969.14893617021,
            "unit": "ns",
            "range": "± 2707.457903672769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101211.45833333333,
            "unit": "ns",
            "range": "± 17759.888986090133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6740.20618556701,
            "unit": "ns",
            "range": "± 971.7531187042008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20448.9010989011,
            "unit": "ns",
            "range": "± 2850.594265743139"
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
          "id": "78a303bed6ea7165b87ab40a12fd65541db0b73a",
          "message": "Merge pull request #2951 from greymistcube/prepare/0.50.5\n\n🔧 Prepare 0.50.5",
          "timestamp": "2023-03-17T14:28:30+09:00",
          "tree_id": "3a06b1bc37e8395cfacce61859a4355d14f19254",
          "url": "https://github.com/planetarium/libplanet/commit/78a303bed6ea7165b87ab40a12fd65541db0b73a"
        },
        "date": 1679031814305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93205.55555555556,
            "unit": "ns",
            "range": "± 1957.0302297771075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4932284.435096154,
            "unit": "ns",
            "range": "± 5480.2276640288255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508871.2369791667,
            "unit": "ns",
            "range": "± 2718.976480572858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138175.5533854167,
            "unit": "ns",
            "range": "± 1156.7619731842904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587713.28125,
            "unit": "ns",
            "range": "± 4158.297114556258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803397.6969401041,
            "unit": "ns",
            "range": "± 433.6201057057573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737563.3333333334,
            "unit": "ns",
            "range": "± 609.7208268527237"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3999914.425223214,
            "unit": "ns",
            "range": "± 14018.096325606486"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5594233.333333333,
            "unit": "ns",
            "range": "± 100108.29612165493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23516060,
            "unit": "ns",
            "range": "± 366917.7190753106"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5633645.762711864,
            "unit": "ns",
            "range": "± 238358.68821794013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26182340,
            "unit": "ns",
            "range": "± 296796.3847488712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84655.26315789473,
            "unit": "ns",
            "range": "± 5455.513869375402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181473.2394366197,
            "unit": "ns",
            "range": "± 8138.128211370735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152114.2857142857,
            "unit": "ns",
            "range": "± 3613.0715069433254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3385326.6666666665,
            "unit": "ns",
            "range": "± 23544.3188982173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8471846.666666666,
            "unit": "ns",
            "range": "± 40171.34491625781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17397.872340425532,
            "unit": "ns",
            "range": "± 1645.1936333011624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46495.454545454544,
            "unit": "ns",
            "range": "± 3297.2963181073656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41864,
            "unit": "ns",
            "range": "± 2804.0202019474277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91452.12765957447,
            "unit": "ns",
            "range": "± 13458.839911689047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5681.0526315789475,
            "unit": "ns",
            "range": "± 549.1375708040136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15018.367346938776,
            "unit": "ns",
            "range": "± 1568.1328406525688"
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
          "id": "ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd",
          "message": "Merge pull request #2966 from OnedgeLee/release/0.50.5\n\n🚀 Release 0.50.5",
          "timestamp": "2023-03-17T21:08:39+09:00",
          "tree_id": "3b1dd6f4b8fe0474a0d35e906bd2905a1f02b502",
          "url": "https://github.com/planetarium/libplanet/commit/ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd"
        },
        "date": 1679056020925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107402.17391304347,
            "unit": "ns",
            "range": "± 13276.38139383156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4920539.945652174,
            "unit": "ns",
            "range": "± 124445.67233339304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1592164.0104166667,
            "unit": "ns",
            "range": "± 23941.922289589053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185754.6223958333,
            "unit": "ns",
            "range": "± 17703.497581218344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2702593.06640625,
            "unit": "ns",
            "range": "± 69226.66898853796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884794.931640625,
            "unit": "ns",
            "range": "± 26223.954753540464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 813922.2509765625,
            "unit": "ns",
            "range": "± 18050.288759630446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5476382.477678572,
            "unit": "ns",
            "range": "± 155194.85076887085"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5782283.5051546395,
            "unit": "ns",
            "range": "± 414564.0570930133"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28205208.333333332,
            "unit": "ns",
            "range": "± 1692522.7821628726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6108944.444444444,
            "unit": "ns",
            "range": "± 473265.08864164504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33046734.69387755,
            "unit": "ns",
            "range": "± 2474952.392256983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100605.15463917526,
            "unit": "ns",
            "range": "± 16401.49492128449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193571.875,
            "unit": "ns",
            "range": "± 26747.917589874858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173751.06382978722,
            "unit": "ns",
            "range": "± 23095.210808671083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998922.448979592,
            "unit": "ns",
            "range": "± 347420.279524481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9818202.040816326,
            "unit": "ns",
            "range": "± 889529.2943814737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29089.89898989899,
            "unit": "ns",
            "range": "± 8541.10702270884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62654.83870967742,
            "unit": "ns",
            "range": "± 10102.060875934869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47395.744680851065,
            "unit": "ns",
            "range": "± 10954.617182335973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116923.71134020618,
            "unit": "ns",
            "range": "± 25780.41396905425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5204.347826086957,
            "unit": "ns",
            "range": "± 679.9988758035734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26896,
            "unit": "ns",
            "range": "± 8752.914896874023"
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
          "id": "4de176fbd56fa316a196d4582b82a1b0d5fd4f21",
          "message": "Merge pull request #2967 from OnedgeLee/prepare/0.50.6\n\n🔧 Prepare 0.50.6",
          "timestamp": "2023-03-21T14:01:00+09:00",
          "tree_id": "91fc0766ea67f93c0e75924a192b075e4ce0f897",
          "url": "https://github.com/planetarium/libplanet/commit/4de176fbd56fa316a196d4582b82a1b0d5fd4f21"
        },
        "date": 1679375995800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121211.82795698925,
            "unit": "ns",
            "range": "± 7389.076094837355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908526.171875,
            "unit": "ns",
            "range": "± 173195.9750892974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893487.2767857143,
            "unit": "ns",
            "range": "± 62203.84106081758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388384.5394736843,
            "unit": "ns",
            "range": "± 26771.042895436723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3312655.886008523,
            "unit": "ns",
            "range": "± 123072.0480374766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008478.506097561,
            "unit": "ns",
            "range": "± 36173.13316502784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943786.3978794643,
            "unit": "ns",
            "range": "± 15974.836152168722"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5557553.889266305,
            "unit": "ns",
            "range": "± 310982.05940997606"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6759836.458333333,
            "unit": "ns",
            "range": "± 566045.8281836963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30659412.5,
            "unit": "ns",
            "range": "± 725848.1212032912"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7777385.714285715,
            "unit": "ns",
            "range": "± 132743.14617765715"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33735261.538461536,
            "unit": "ns",
            "range": "± 543214.254136833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116085.71428571429,
            "unit": "ns",
            "range": "± 5897.64385989072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242935.9375,
            "unit": "ns",
            "range": "± 11247.177666256954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205944.92753623187,
            "unit": "ns",
            "range": "± 9947.354602989328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4380184.2105263155,
            "unit": "ns",
            "range": "± 91882.52924950722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10984026.666666666,
            "unit": "ns",
            "range": "± 205493.0150591383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24881.91489361702,
            "unit": "ns",
            "range": "± 2656.740778203906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62435.63218390805,
            "unit": "ns",
            "range": "± 4113.420378708625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50190.52631578947,
            "unit": "ns",
            "range": "± 3571.5207346930893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117054.83870967742,
            "unit": "ns",
            "range": "± 16014.982904123088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7546.875,
            "unit": "ns",
            "range": "± 1169.251053587633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22766.304347826088,
            "unit": "ns",
            "range": "± 2449.2329893305055"
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
          "id": "08f4b4b8d238a23d34c9e60547ac8ec53b9a96f6",
          "message": "Merge pull request #2972 from riemannulus/0.50-maintenance\n\nRemove SetValidator action & Make `ValidatorStateExtensions` to public",
          "timestamp": "2023-03-22T09:41:07+09:00",
          "tree_id": "1c0e571d7673f2ca411ed4dc945efa697f8afaf6",
          "url": "https://github.com/planetarium/libplanet/commit/08f4b4b8d238a23d34c9e60547ac8ec53b9a96f6"
        },
        "date": 1679446612072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99275.75757575757,
            "unit": "ns",
            "range": "± 4640.3269316540645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4763833.203125,
            "unit": "ns",
            "range": "± 12280.742860374397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509039.3880208333,
            "unit": "ns",
            "range": "± 3613.784949708958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170396.8294270833,
            "unit": "ns",
            "range": "± 3829.37639516493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621831.5848214286,
            "unit": "ns",
            "range": "± 6434.88929346807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832913.4089543269,
            "unit": "ns",
            "range": "± 1854.992204850526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758424.4907924107,
            "unit": "ns",
            "range": "± 1348.4847768969355"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4683891.822916667,
            "unit": "ns",
            "range": "± 13227.725136308458"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5716493.333333333,
            "unit": "ns",
            "range": "± 103237.24041993667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24767541.666666668,
            "unit": "ns",
            "range": "± 316753.1974677771"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5864757.746478873,
            "unit": "ns",
            "range": "± 286347.231103364"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28029100,
            "unit": "ns",
            "range": "± 629104.2395426424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90947.36842105263,
            "unit": "ns",
            "range": "± 7179.697174098509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184974.02597402598,
            "unit": "ns",
            "range": "± 9380.458447406874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176442.3076923077,
            "unit": "ns",
            "range": "± 9071.55564818526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3528646.6666666665,
            "unit": "ns",
            "range": "± 41963.58739033958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8995171.42857143,
            "unit": "ns",
            "range": "± 112340.35803733244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20886.17021276596,
            "unit": "ns",
            "range": "± 1914.101662665063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51760.43956043956,
            "unit": "ns",
            "range": "± 5292.213968985824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40756.84210526316,
            "unit": "ns",
            "range": "± 2680.967300489395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93550.60240963855,
            "unit": "ns",
            "range": "± 11080.705858184481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6165.979381443299,
            "unit": "ns",
            "range": "± 821.3158393113939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19650.537634408603,
            "unit": "ns",
            "range": "± 1920.2934363582124"
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
          "id": "d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc",
          "message": "Merge pull request #2974 from riemannulus/0.50-maintenance\n\n🚀  Release 0.50.6",
          "timestamp": "2023-03-22T11:17:14+09:00",
          "tree_id": "801f74dd85ddcce3a318a2cdac350e0f82106f83",
          "url": "https://github.com/planetarium/libplanet/commit/d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc"
        },
        "date": 1679452242897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97268.75,
            "unit": "ns",
            "range": "± 1780.5312877528063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824800.026041667,
            "unit": "ns",
            "range": "± 10200.878158365726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500888.37890625,
            "unit": "ns",
            "range": "± 1530.9086579873133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1117380.09765625,
            "unit": "ns",
            "range": "± 1707.6958340668002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543424.4977678573,
            "unit": "ns",
            "range": "± 5363.221163201486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807863.0436197916,
            "unit": "ns",
            "range": "± 846.3921235300177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722672.6302083334,
            "unit": "ns",
            "range": "± 503.35612158555176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3916539.765625,
            "unit": "ns",
            "range": "± 28776.696747847884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5385757.142857143,
            "unit": "ns",
            "range": "± 32007.564353199003"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22601085.714285713,
            "unit": "ns",
            "range": "± 142280.23056977737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5497714.516129033,
            "unit": "ns",
            "range": "± 247132.01280497987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25216485.714285713,
            "unit": "ns",
            "range": "± 374528.37390128785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 79497.22222222222,
            "unit": "ns",
            "range": "± 3828.358682705016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167956.1403508772,
            "unit": "ns",
            "range": "± 7142.654007136574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147175,
            "unit": "ns",
            "range": "± 1899.3419913222579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3315933.3333333335,
            "unit": "ns",
            "range": "± 41041.40186039783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8351420,
            "unit": "ns",
            "range": "± 88136.38133192055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14703.370786516854,
            "unit": "ns",
            "range": "± 906.0967034235672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44633.76623376623,
            "unit": "ns",
            "range": "± 2203.263750702722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36970.833333333336,
            "unit": "ns",
            "range": "± 2953.852673041614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77830.52631578948,
            "unit": "ns",
            "range": "± 12417.781294306815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4184.210526315789,
            "unit": "ns",
            "range": "± 646.9759095573748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13659.302325581395,
            "unit": "ns",
            "range": "± 882.826730981626"
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
          "id": "3e75c1ca7f7ada0877f51f1dcf0b1cbbe12d88b4",
          "message": "Merge pull request #2984 from riemannulus/0.50-maintenance\n\n🚀  Prepare 0.50.7",
          "timestamp": "2023-03-28T15:16:14+09:00",
          "tree_id": "74843fbd2160b43cd774ded45b955d11e202d530",
          "url": "https://github.com/planetarium/libplanet/commit/3e75c1ca7f7ada0877f51f1dcf0b1cbbe12d88b4"
        },
        "date": 1679985140581,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 117752.08333333333,
            "unit": "ns",
            "range": "± 4470.565178384541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5780566.25,
            "unit": "ns",
            "range": "± 97798.29412480973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827626.3253348214,
            "unit": "ns",
            "range": "± 19185.234325220656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396477.1763392857,
            "unit": "ns",
            "range": "± 14524.570509113917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176572.2395833335,
            "unit": "ns",
            "range": "± 36320.178480996154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086649.47265625,
            "unit": "ns",
            "range": "± 9343.004215752753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909006.982421875,
            "unit": "ns",
            "range": "± 4016.5065290857037"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5540846.011029412,
            "unit": "ns",
            "range": "± 298353.38547339576"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6222407.042253521,
            "unit": "ns",
            "range": "± 286716.7683192116"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31360076.923076924,
            "unit": "ns",
            "range": "± 1456044.4802152799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7272640,
            "unit": "ns",
            "range": "± 467935.80788167124"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34778188.88888889,
            "unit": "ns",
            "range": "± 1696526.5809514462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112309.89010989011,
            "unit": "ns",
            "range": "± 6893.556652492479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220981.01265822785,
            "unit": "ns",
            "range": "± 10910.569751150006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202526.7441860465,
            "unit": "ns",
            "range": "± 10804.393707775225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242561.538461538,
            "unit": "ns",
            "range": "± 34513.65764596045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10652778.57142857,
            "unit": "ns",
            "range": "± 114019.70935272165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23344.565217391304,
            "unit": "ns",
            "range": "± 1950.7318508553938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62136.26373626374,
            "unit": "ns",
            "range": "± 8239.451390630276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46609.61538461538,
            "unit": "ns",
            "range": "± 1932.108430297156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115873.95833333333,
            "unit": "ns",
            "range": "± 19953.312584982854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7388.659793814433,
            "unit": "ns",
            "range": "± 977.4409923216798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22717.708333333332,
            "unit": "ns",
            "range": "± 2505.90858789326"
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
          "id": "d489fd135c653727f04f6621f607983cdf032778",
          "message": "Merge pull request #3000 from greymistcube/chore/code-cleanup\n\n🧹 General code readability",
          "timestamp": "2023-03-28T15:32:47+09:00",
          "tree_id": "41a9bcd723c8126f258ace5210139b44b1b90a97",
          "url": "https://github.com/planetarium/libplanet/commit/d489fd135c653727f04f6621f607983cdf032778"
        },
        "date": 1679986223216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97581.63265306123,
            "unit": "ns",
            "range": "± 6349.792543713624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4936132.361778846,
            "unit": "ns",
            "range": "± 6188.6121575649995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509745.521763393,
            "unit": "ns",
            "range": "± 2376.7092557590117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146697.2786458333,
            "unit": "ns",
            "range": "± 1556.918325338931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628930.1953125,
            "unit": "ns",
            "range": "± 14047.319031124518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810608.5100446428,
            "unit": "ns",
            "range": "± 1697.556411126134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729440.6877790178,
            "unit": "ns",
            "range": "± 622.54407194265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4049918.1640625,
            "unit": "ns",
            "range": "± 17265.283267555224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5700335.714285715,
            "unit": "ns",
            "range": "± 35320.48015926905"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23411615.384615384,
            "unit": "ns",
            "range": "± 309837.8899955961"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5798880.769230769,
            "unit": "ns",
            "range": "± 236354.81307166518"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26740085.714285713,
            "unit": "ns",
            "range": "± 302138.2003122282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91574.48979591837,
            "unit": "ns",
            "range": "± 10358.763521568155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191431.86813186813,
            "unit": "ns",
            "range": "± 11778.661300286294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157622.44897959183,
            "unit": "ns",
            "range": "± 6242.137231019866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3381678.5714285714,
            "unit": "ns",
            "range": "± 25004.6512156755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8436940,
            "unit": "ns",
            "range": "± 53122.48380595815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18513.26530612245,
            "unit": "ns",
            "range": "± 1792.000423134963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48330.434782608696,
            "unit": "ns",
            "range": "± 4846.041527907644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47061.05263157895,
            "unit": "ns",
            "range": "± 3327.745858265088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99815.43209876544,
            "unit": "ns",
            "range": "± 7320.607223684166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6707.216494845361,
            "unit": "ns",
            "range": "± 732.468347251324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18975.25773195876,
            "unit": "ns",
            "range": "± 2808.507571047709"
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
          "id": "cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2",
          "message": "Merge pull request #3003 from greymistcube/chore/logging\n\n🧹 Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:49:18+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/planetarium/libplanet/commit/cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2"
        },
        "date": 1679987223153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103640.8163265306,
            "unit": "ns",
            "range": "± 6748.254249005087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4856366.573660715,
            "unit": "ns",
            "range": "± 16818.472154685074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527316.1653645833,
            "unit": "ns",
            "range": "± 8374.059476269113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155194.3619791667,
            "unit": "ns",
            "range": "± 2999.9296633028684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598548.995535714,
            "unit": "ns",
            "range": "± 4034.3452033705094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819490.6184895834,
            "unit": "ns",
            "range": "± 1110.4809126667467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762398.9885602678,
            "unit": "ns",
            "range": "± 1290.6604591352095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4710068.255208333,
            "unit": "ns",
            "range": "± 63653.0158554305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5234323.529411765,
            "unit": "ns",
            "range": "± 211868.52960101014"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24853994.11764706,
            "unit": "ns",
            "range": "± 497823.0740817819"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5840931.0344827585,
            "unit": "ns",
            "range": "± 253528.10371010334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28296100,
            "unit": "ns",
            "range": "± 644292.2522549758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101767.02127659574,
            "unit": "ns",
            "range": "± 11003.659101064775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201340.9090909091,
            "unit": "ns",
            "range": "± 13517.486642903179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190157.31707317074,
            "unit": "ns",
            "range": "± 10032.62616540488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998113.3333333335,
            "unit": "ns",
            "range": "± 51566.3216044108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9187753.333333334,
            "unit": "ns",
            "range": "± 76715.83806179666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23395.744680851065,
            "unit": "ns",
            "range": "± 2548.7047055409676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55837.234042553195,
            "unit": "ns",
            "range": "± 5562.6825748469655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38185.48387096774,
            "unit": "ns",
            "range": "± 1680.344107439819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96115.9574468085,
            "unit": "ns",
            "range": "± 15514.220346005348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5998.9795918367345,
            "unit": "ns",
            "range": "± 1024.99634376609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20179.787234042553,
            "unit": "ns",
            "range": "± 2153.4957720565385"
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
          "id": "030f1277010353d3e4a6fa5d1f42a82a95674a3b",
          "message": "Merge pull request #3007 from greymistcube/refactor/optimize-key-converter\n\n⚡ Optimize key conversion",
          "timestamp": "2023-03-28T16:55:35+09:00",
          "tree_id": "0b287f44514e60c26c243cb104c6f6b16a277ad8",
          "url": "https://github.com/planetarium/libplanet/commit/030f1277010353d3e4a6fa5d1f42a82a95674a3b"
        },
        "date": 1679991342446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120827.27272727272,
            "unit": "ns",
            "range": "± 5960.895295781728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5836901.674107143,
            "unit": "ns",
            "range": "± 73487.75081837896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863011.216517857,
            "unit": "ns",
            "range": "± 25739.32897721546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410772.4479166667,
            "unit": "ns",
            "range": "± 15730.891891737441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3181353.90625,
            "unit": "ns",
            "range": "± 47930.42226481385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002605.0555889423,
            "unit": "ns",
            "range": "± 12548.610105854375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924449.4018554688,
            "unit": "ns",
            "range": "± 17752.577001839523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5562052.802835052,
            "unit": "ns",
            "range": "± 384788.745314683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6852980,
            "unit": "ns",
            "range": "± 960505.5481780457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31577168.333333332,
            "unit": "ns",
            "range": "± 1411166.0358882765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7246008.139534884,
            "unit": "ns",
            "range": "± 369105.9182323483"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33956730.43478261,
            "unit": "ns",
            "range": "± 833048.4152877543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113852.63157894737,
            "unit": "ns",
            "range": "± 11163.054966836326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225321.42857142858,
            "unit": "ns",
            "range": "± 11982.779525782456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213366,
            "unit": "ns",
            "range": "± 8594.738779851168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4341669.230769231,
            "unit": "ns",
            "range": "± 105590.2373109589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10978178.57142857,
            "unit": "ns",
            "range": "± 160307.38347874748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25279.166666666668,
            "unit": "ns",
            "range": "± 2680.373762886797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62032.58426966292,
            "unit": "ns",
            "range": "± 4972.190281978787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50844.21052631579,
            "unit": "ns",
            "range": "± 3274.424288831897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122347.42268041238,
            "unit": "ns",
            "range": "± 21236.48635399063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7824.468085106383,
            "unit": "ns",
            "range": "± 864.0597064959354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24524.468085106382,
            "unit": "ns",
            "range": "± 2569.7448168449855"
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
          "id": "9958f96e2ce25d998f78aaf2f9431f08e77c84a4",
          "message": "Merge pull request #3009 from limebell/feature/getstate-measure-0.50\n\nAdd measure metric for `GetState` method",
          "timestamp": "2023-03-29T09:07:08+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/planetarium/libplanet/commit/9958f96e2ce25d998f78aaf2f9431f08e77c84a4"
        },
        "date": 1680049359928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103640.4255319149,
            "unit": "ns",
            "range": "± 6868.133038161007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4868075.182291667,
            "unit": "ns",
            "range": "± 17705.22639312442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540955.3645833333,
            "unit": "ns",
            "range": "± 5973.140940312896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196177.3158482143,
            "unit": "ns",
            "range": "± 3891.594987626207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625531.612723214,
            "unit": "ns",
            "range": "± 7590.72587882705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838021.044921875,
            "unit": "ns",
            "range": "± 2781.0182455400945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766010.3841145834,
            "unit": "ns",
            "range": "± 1632.2670477438362"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4683380.767463235,
            "unit": "ns",
            "range": "± 91060.57058543606"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5728731.578947368,
            "unit": "ns",
            "range": "± 90017.22707121477"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25816036.842105262,
            "unit": "ns",
            "range": "± 537248.8841935843"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6415200,
            "unit": "ns",
            "range": "± 180888.61111089782"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28609421.42857143,
            "unit": "ns",
            "range": "± 368995.101444599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98751.68539325842,
            "unit": "ns",
            "range": "± 6840.921528160026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200873.62637362638,
            "unit": "ns",
            "range": "± 12985.580337562767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182307.0707070707,
            "unit": "ns",
            "range": "± 12095.776396652125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4085721.4285714286,
            "unit": "ns",
            "range": "± 28939.809647224396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10117326.666666666,
            "unit": "ns",
            "range": "± 127318.87676598619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22250,
            "unit": "ns",
            "range": "± 2491.0053245390145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55269.230769230766,
            "unit": "ns",
            "range": "± 5658.124783740287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40804.255319148935,
            "unit": "ns",
            "range": "± 2912.4838785327793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111575.25773195876,
            "unit": "ns",
            "range": "± 18288.55534052099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6247.872340425532,
            "unit": "ns",
            "range": "± 1044.4660850801406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22180.61224489796,
            "unit": "ns",
            "range": "± 2606.7184475103527"
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
          "id": "6c77f69e285802836a0ce7af1dcc1275487329a1",
          "message": "Merge pull request #3018 from greymistcube/feature/chain-state-cache\n\n⚡ Introduce `ChainStateCache`",
          "timestamp": "2023-03-29T12:15:38+09:00",
          "tree_id": "53ed75b50401b7780b637c6b67055c065b4b7b7e",
          "url": "https://github.com/planetarium/libplanet/commit/6c77f69e285802836a0ce7af1dcc1275487329a1"
        },
        "date": 1680060436599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97881.25,
            "unit": "ns",
            "range": "± 1892.1658665842872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4656640.104166667,
            "unit": "ns",
            "range": "± 20447.778659439322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517763.5026041667,
            "unit": "ns",
            "range": "± 7132.830090200197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143008.3463541667,
            "unit": "ns",
            "range": "± 5755.965418071939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591719.453125,
            "unit": "ns",
            "range": "± 11610.924499247472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803399.90234375,
            "unit": "ns",
            "range": "± 2676.0191945555093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758325.5338541666,
            "unit": "ns",
            "range": "± 3489.4543622506876"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4449890.182291667,
            "unit": "ns",
            "range": "± 26869.842585520473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5450442.857142857,
            "unit": "ns",
            "range": "± 72806.49500069149"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23819564.70588235,
            "unit": "ns",
            "range": "± 488943.593297295"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6023250,
            "unit": "ns",
            "range": "± 46987.866682630054"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26467429.62962963,
            "unit": "ns",
            "range": "± 720867.588297289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81924.21052631579,
            "unit": "ns",
            "range": "± 8689.082362115845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169994.94382022473,
            "unit": "ns",
            "range": "± 11703.447542147911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155251.66666666666,
            "unit": "ns",
            "range": "± 6427.3908475636235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3339022.222222222,
            "unit": "ns",
            "range": "± 68718.94640323905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8319781.818181818,
            "unit": "ns",
            "range": "± 181568.00545817704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15829.473684210527,
            "unit": "ns",
            "range": "± 1411.8701709503114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43668.0412371134,
            "unit": "ns",
            "range": "± 4253.957627701737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37042.55319148936,
            "unit": "ns",
            "range": "± 2114.592889550632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83775.78947368421,
            "unit": "ns",
            "range": "± 13814.644679280813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4667.368421052632,
            "unit": "ns",
            "range": "± 503.2748298010841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14615.384615384615,
            "unit": "ns",
            "range": "± 1040.2908863414734"
          }
        ]
      }
    ]
  }
}