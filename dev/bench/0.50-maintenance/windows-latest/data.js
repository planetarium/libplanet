window.BENCHMARK_DATA = {
  "lastUpdate": 1678931612746,
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
      }
    ]
  }
}