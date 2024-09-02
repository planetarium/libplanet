window.BENCHMARK_DATA = {
  "lastUpdate": 1725240275457,
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
          "id": "e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-08-30T13:42:40+09:00",
          "tree_id": "6f53356f3fc4dd0ec5911b2d8387c704cd4c58c1",
          "url": "https://github.com/planetarium/libplanet/commit/e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765"
        },
        "date": 1724993969969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000349,
            "unit": "ns",
            "range": "± 99134.66659147052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760863.6363636365,
            "unit": "ns",
            "range": "± 61944.45407879956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532996.6666666667,
            "unit": "ns",
            "range": "± 103409.20291343034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6863767.741935484,
            "unit": "ns",
            "range": "± 206188.33201242136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38330.61224489796,
            "unit": "ns",
            "range": "± 4262.819553901721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10117920,
            "unit": "ns",
            "range": "± 96035.08436280685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25872873.333333332,
            "unit": "ns",
            "range": "± 244134.84408260547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61458593.333333336,
            "unit": "ns",
            "range": "± 519850.954555612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128557633.33333333,
            "unit": "ns",
            "range": "± 1144588.9840379178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242108957.14285713,
            "unit": "ns",
            "range": "± 1548890.4339828289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354468.5546875,
            "unit": "ns",
            "range": "± 6235.55081699815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079408.623798077,
            "unit": "ns",
            "range": "± 1357.4657208852686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734201.4973958334,
            "unit": "ns",
            "range": "± 2648.496821923757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960393.8541666667,
            "unit": "ns",
            "range": "± 3365.4128760019485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616624.6809895834,
            "unit": "ns",
            "range": "± 1844.4409597308854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555667.7408854166,
            "unit": "ns",
            "range": "± 1842.625963810484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121623.6842105263,
            "unit": "ns",
            "range": "± 71540.10190553505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249975,
            "unit": "ns",
            "range": "± 49754.152167379325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2667592.592592593,
            "unit": "ns",
            "range": "± 68904.45964090101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2287141.891891892,
            "unit": "ns",
            "range": "± 77566.43524667661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2922333.3333333335,
            "unit": "ns",
            "range": "± 60722.06692599245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179312.28070175438,
            "unit": "ns",
            "range": "± 7731.200012552074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167135.9375,
            "unit": "ns",
            "range": "± 7077.627779147384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147646.15384615384,
            "unit": "ns",
            "range": "± 3984.191839681495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2780135.714285714,
            "unit": "ns",
            "range": "± 49234.23772980714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2410371.4285714286,
            "unit": "ns",
            "range": "± 23782.42494498272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10638.297872340425,
            "unit": "ns",
            "range": "± 1484.9138408066244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52045.16129032258,
            "unit": "ns",
            "range": "± 3598.2337493563437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44373.07692307692,
            "unit": "ns",
            "range": "± 598.8236331256003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52907.142857142855,
            "unit": "ns",
            "range": "± 11898.6896099104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2469.230769230769,
            "unit": "ns",
            "range": "± 396.2861782130876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9710.63829787234,
            "unit": "ns",
            "range": "± 1243.51808294191"
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
          "id": "da1fae297a3e2e99d2c996065670ec30d01172e9",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-09-02T09:58:48+09:00",
          "tree_id": "fa305714238f66f840a797993ef0cba8f8df58f8",
          "url": "https://github.com/planetarium/libplanet/commit/da1fae297a3e2e99d2c996065670ec30d01172e9"
        },
        "date": 1725239389320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968714.7727272727,
            "unit": "ns",
            "range": "± 66109.43476891173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1742267.5,
            "unit": "ns",
            "range": "± 59384.91730941581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546312.7659574468,
            "unit": "ns",
            "range": "± 111801.69294315444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6795445,
            "unit": "ns",
            "range": "± 239789.06002504015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30233.333333333332,
            "unit": "ns",
            "range": "± 418.5110693297313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9966178.57142857,
            "unit": "ns",
            "range": "± 64804.005438546155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23813200,
            "unit": "ns",
            "range": "± 169104.76952742366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59933566.666666664,
            "unit": "ns",
            "range": "± 691395.6265272093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120029021.42857143,
            "unit": "ns",
            "range": "± 677268.3040415671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248304860,
            "unit": "ns",
            "range": "± 2559112.3957341146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3333450.4356971155,
            "unit": "ns",
            "range": "± 5760.01235443676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074413.7630208333,
            "unit": "ns",
            "range": "± 1774.6273177085232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734899.8256138393,
            "unit": "ns",
            "range": "± 1794.228930014267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920616.484375,
            "unit": "ns",
            "range": "± 6374.155940236864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617792.7864583334,
            "unit": "ns",
            "range": "± 2084.2280728035353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558999.0950520834,
            "unit": "ns",
            "range": "± 1021.8855334208856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116352.777777778,
            "unit": "ns",
            "range": "± 70154.86333253275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200184.745762712,
            "unit": "ns",
            "range": "± 92343.38057332594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2671308.3333333335,
            "unit": "ns",
            "range": "± 40358.51736922981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2266121.052631579,
            "unit": "ns",
            "range": "± 77725.72761960581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2881843.3333333335,
            "unit": "ns",
            "range": "± 42754.87385193924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178195.16129032258,
            "unit": "ns",
            "range": "± 7529.906002055303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165290.7894736842,
            "unit": "ns",
            "range": "± 8345.17309797033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146252.9411764706,
            "unit": "ns",
            "range": "± 2667.1889807105026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2741386.6666666665,
            "unit": "ns",
            "range": "± 44392.40389762109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537026.6666666665,
            "unit": "ns",
            "range": "± 46709.1068921968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9710.526315789473,
            "unit": "ns",
            "range": "± 951.7591421812789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52221.42857142857,
            "unit": "ns",
            "range": "± 4659.725446537961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44171.875,
            "unit": "ns",
            "range": "± 1335.4313970133517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49288.17204301075,
            "unit": "ns",
            "range": "± 7539.834063771556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2742.7083333333335,
            "unit": "ns",
            "range": "± 501.1029501675944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9637.63440860215,
            "unit": "ns",
            "range": "± 1022.9873111643071"
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
          "id": "8e29db9a69b335b53e042354661b6638baea3d7b",
          "message": "chore: Rename file",
          "timestamp": "2024-09-02T10:12:41+09:00",
          "tree_id": "2917cdee1ab0781b708649aee66eab86044a615a",
          "url": "https://github.com/planetarium/libplanet/commit/8e29db9a69b335b53e042354661b6638baea3d7b"
        },
        "date": 1725240208888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933218.0722891566,
            "unit": "ns",
            "range": "± 46924.60518585499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739448.3333333333,
            "unit": "ns",
            "range": "± 72774.29815361611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1494848.75,
            "unit": "ns",
            "range": "± 77455.00121753014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715334.482758621,
            "unit": "ns",
            "range": "± 173848.04381959976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30466.666666666668,
            "unit": "ns",
            "range": "± 274.1377667369367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9721869.23076923,
            "unit": "ns",
            "range": "± 122355.22999730051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23495213.333333332,
            "unit": "ns",
            "range": "± 231695.40616528253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58065966.666666664,
            "unit": "ns",
            "range": "± 357741.08088445885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116165740,
            "unit": "ns",
            "range": "± 409238.6272091138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231859666.66666666,
            "unit": "ns",
            "range": "± 1145413.3662236568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342888.90625,
            "unit": "ns",
            "range": "± 3884.760953096379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066192.1484375,
            "unit": "ns",
            "range": "± 1927.2627067282049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740862.36328125,
            "unit": "ns",
            "range": "± 875.3817739821652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940943.984375,
            "unit": "ns",
            "range": "± 2545.1773692979677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610427.1158854166,
            "unit": "ns",
            "range": "± 949.7360599007225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 538821.07421875,
            "unit": "ns",
            "range": "± 638.4366783017834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119056,
            "unit": "ns",
            "range": "± 31857.98016196256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200006.6666666665,
            "unit": "ns",
            "range": "± 19726.467595834885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2650161.5384615385,
            "unit": "ns",
            "range": "± 29764.227367247935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2195900,
            "unit": "ns",
            "range": "± 60876.012425986715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2871140,
            "unit": "ns",
            "range": "± 35108.35879306888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171975.75757575757,
            "unit": "ns",
            "range": "± 8057.887881421354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164177.27272727274,
            "unit": "ns",
            "range": "± 7466.124428779231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147425,
            "unit": "ns",
            "range": "± 2018.6066301468265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722000,
            "unit": "ns",
            "range": "± 43768.13909683618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2480057.1428571427,
            "unit": "ns",
            "range": "± 19905.998874931927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10202.083333333334,
            "unit": "ns",
            "range": "± 1216.6372262720213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49520.87912087912,
            "unit": "ns",
            "range": "± 2859.5849148479374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44747.36842105263,
            "unit": "ns",
            "range": "± 842.1984597552023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48119.072164948455,
            "unit": "ns",
            "range": "± 9028.962205323192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2345.8333333333335,
            "unit": "ns",
            "range": "± 393.8785991612047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9127.272727272728,
            "unit": "ns",
            "range": "± 534.924481237267"
          }
        ]
      }
    ]
  }
}