window.BENCHMARK_DATA = {
  "lastUpdate": 1721714494666,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714157165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201456.32352941178,
            "unit": "ns",
            "range": "± 6468.988646170132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196855.80487804877,
            "unit": "ns",
            "range": "± 7022.164955409094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167811.8,
            "unit": "ns",
            "range": "± 4340.837812757655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004255.214285714,
            "unit": "ns",
            "range": "± 27381.011924826165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2698609.5,
            "unit": "ns",
            "range": "± 18560.255070155443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13051.662790697674,
            "unit": "ns",
            "range": "± 717.7285675774834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60312.2,
            "unit": "ns",
            "range": "± 3092.65763658748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50755.42857142857,
            "unit": "ns",
            "range": "± 381.19946611588136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52649.58163265306,
            "unit": "ns",
            "range": "± 7643.525943161499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2691.175257731959,
            "unit": "ns",
            "range": "± 317.70019968744634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11940.261904761905,
            "unit": "ns",
            "range": "± 655.2450588947365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014471.6133333333,
            "unit": "ns",
            "range": "± 44481.77237102168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932099.5609756098,
            "unit": "ns",
            "range": "± 69106.0845870495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714610.96875,
            "unit": "ns",
            "range": "± 72824.19520160118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8207953.555555556,
            "unit": "ns",
            "range": "± 173218.52219479787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795023.0615985575,
            "unit": "ns",
            "range": "± 3879.1544055020754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202831.863002232,
            "unit": "ns",
            "range": "± 2185.409670977902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749060.6612630208,
            "unit": "ns",
            "range": "± 1658.2216474651127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002988.5926339286,
            "unit": "ns",
            "range": "± 3659.589037269389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617950.5685686384,
            "unit": "ns",
            "range": "± 1014.6421421670291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580115.2536057692,
            "unit": "ns",
            "range": "± 259.46801446620583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423665.8666666667,
            "unit": "ns",
            "range": "± 34271.11244779667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553962.3235294116,
            "unit": "ns",
            "range": "± 52277.86268851675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065420.111111111,
            "unit": "ns",
            "range": "± 63669.02088871875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2584122.2,
            "unit": "ns",
            "range": "± 23217.185495108697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3266379,
            "unit": "ns",
            "range": "± 60473.638361804275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32204.533333333333,
            "unit": "ns",
            "range": "± 436.0492872971827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10415976.866666667,
            "unit": "ns",
            "range": "± 49004.933690200545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27110997.866666667,
            "unit": "ns",
            "range": "± 171671.268857025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69566263.64285715,
            "unit": "ns",
            "range": "± 225907.80262126922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138597493.7142857,
            "unit": "ns",
            "range": "± 524981.3315450705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288057051.96666664,
            "unit": "ns",
            "range": "± 1386785.0232467216"
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ec0e423fbfa7471468c273a238a16b1a401114af",
          "message": "Changelog",
          "timestamp": "2024-07-23T14:51:55+09:00",
          "tree_id": "56761a57c2aed7be3372f933d598112818fcc5cb",
          "url": "https://github.com/planetarium/libplanet/commit/ec0e423fbfa7471468c273a238a16b1a401114af"
        },
        "date": 1721714469066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200946.96913580247,
            "unit": "ns",
            "range": "± 9787.0814394364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195241.46875,
            "unit": "ns",
            "range": "± 8857.250390228246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171298.76470588235,
            "unit": "ns",
            "range": "± 6791.447373243012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3098612.8666666667,
            "unit": "ns",
            "range": "± 36318.61427081685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820763.8571428573,
            "unit": "ns",
            "range": "± 22682.49792107475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14208.445054945056,
            "unit": "ns",
            "range": "± 2080.216726757294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62564.18823529412,
            "unit": "ns",
            "range": "± 5686.825946439546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51695.95081967213,
            "unit": "ns",
            "range": "± 2330.1159944391147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60309.21649484536,
            "unit": "ns",
            "range": "± 11718.013260598334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3566.271739130435,
            "unit": "ns",
            "range": "± 372.4242854907769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13483.752747252747,
            "unit": "ns",
            "range": "± 1690.3385695929321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026353.3296703297,
            "unit": "ns",
            "range": "± 59477.72293146681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2007049.7922077922,
            "unit": "ns",
            "range": "± 102881.5873472403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1719215.9625,
            "unit": "ns",
            "range": "± 88712.00993278774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8369649.333333333,
            "unit": "ns",
            "range": "± 229005.47091449416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3811961.133370536,
            "unit": "ns",
            "range": "± 4620.587525528122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199953.2860677084,
            "unit": "ns",
            "range": "± 1406.6088102397907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771284.0541294643,
            "unit": "ns",
            "range": "± 1208.2350120402743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925359.7413504464,
            "unit": "ns",
            "range": "± 1922.0429323355718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605577.1383463541,
            "unit": "ns",
            "range": "± 917.5095333174036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573271.4233022836,
            "unit": "ns",
            "range": "± 463.5228377974941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436880.257142857,
            "unit": "ns",
            "range": "± 79101.22840027158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2565439.5714285714,
            "unit": "ns",
            "range": "± 34869.01867696459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099969.566666667,
            "unit": "ns",
            "range": "± 42344.72119144194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638693.0303030303,
            "unit": "ns",
            "range": "± 83551.19915263217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3309444.095238095,
            "unit": "ns",
            "range": "± 75454.7305090309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32284.64285714286,
            "unit": "ns",
            "range": "± 562.3806002703503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10789024.714285715,
            "unit": "ns",
            "range": "± 53501.40292974147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27439840.5,
            "unit": "ns",
            "range": "± 216578.4012618591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69554059.26666667,
            "unit": "ns",
            "range": "± 456911.8050900393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146396551.63333333,
            "unit": "ns",
            "range": "± 952969.302905238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286267723.3333333,
            "unit": "ns",
            "range": "± 1254679.5088799524"
          }
        ]
      }
    ]
  }
}