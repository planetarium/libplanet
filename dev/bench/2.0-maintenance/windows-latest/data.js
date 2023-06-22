window.BENCHMARK_DATA = {
  "lastUpdate": 1687415797614,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686719009892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591230.9278350514,
            "unit": "ns",
            "range": "± 274419.97670876386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2939579.1666666665,
            "unit": "ns",
            "range": "± 389587.15068961936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2524544.3298969073,
            "unit": "ns",
            "range": "± 374320.37385804066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6552272.916666667,
            "unit": "ns",
            "range": "± 742580.9445836673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62098.94736842105,
            "unit": "ns",
            "range": "± 18370.515777843826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9026222.916666666,
            "unit": "ns",
            "range": "± 953658.1246060838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22233511.111111112,
            "unit": "ns",
            "range": "± 2674439.2986609777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61920586.59793814,
            "unit": "ns",
            "range": "± 5026225.356683947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132981005,
            "unit": "ns",
            "range": "± 7871690.2642339375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225087412.96296296,
            "unit": "ns",
            "range": "± 5937038.358872995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5579238.020833333,
            "unit": "ns",
            "range": "± 96134.56121912318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898503.0838815789,
            "unit": "ns",
            "range": "± 41744.268952659346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407397.021484375,
            "unit": "ns",
            "range": "± 27321.47242241673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2992171.319901316,
            "unit": "ns",
            "range": "± 63393.00268775536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007476.1513157894,
            "unit": "ns",
            "range": "± 21534.36315875864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938765.0607638889,
            "unit": "ns",
            "range": "± 19462.703901203902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276027.419354839,
            "unit": "ns",
            "range": "± 396895.5848147492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643976.595744681,
            "unit": "ns",
            "range": "± 444666.4457711399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4900799.462365591,
            "unit": "ns",
            "range": "± 576275.7481984334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5015378,
            "unit": "ns",
            "range": "± 708631.4747355346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8412715.151515152,
            "unit": "ns",
            "range": "± 1100452.4851691816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321743.8775510204,
            "unit": "ns",
            "range": "± 59887.089750882136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306987.36842105264,
            "unit": "ns",
            "range": "± 49190.07044348648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277039.175257732,
            "unit": "ns",
            "range": "± 62242.53227747658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4487613.978494624,
            "unit": "ns",
            "range": "± 526705.2761788624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876463.829787234,
            "unit": "ns",
            "range": "± 450797.8091108624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28170.70707070707,
            "unit": "ns",
            "range": "± 11125.364039219281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104468.08510638298,
            "unit": "ns",
            "range": "± 23958.760324644394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100803.2258064516,
            "unit": "ns",
            "range": "± 23130.454475943065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130677.31958762887,
            "unit": "ns",
            "range": "± 28905.375455796282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5790.588235294118,
            "unit": "ns",
            "range": "± 1762.4133568309494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28609,
            "unit": "ns",
            "range": "± 10555.127960504613"
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
          "id": "0bf530b3a61065aa6c8c96bbf8aa05065d82a731",
          "message": "Merge pull request #3212 from OnedgeLee/prepare/2.0.1\n\n🔧 Prepare 2.0.1",
          "timestamp": "2023-06-14T14:00:32+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/planetarium/libplanet/commit/0bf530b3a61065aa6c8c96bbf8aa05065d82a731"
        },
        "date": 1686720094247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829122.9166666667,
            "unit": "ns",
            "range": "± 186101.9355532517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3462444.6808510637,
            "unit": "ns",
            "range": "± 221458.1941261058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2873722.222222222,
            "unit": "ns",
            "range": "± 213681.53442052408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7443968.421052632,
            "unit": "ns",
            "range": "± 553295.1744376512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58179.31034482759,
            "unit": "ns",
            "range": "± 9217.338791786171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9900976.59574468,
            "unit": "ns",
            "range": "± 752509.8266675973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25868935.135135137,
            "unit": "ns",
            "range": "± 1218190.27501695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67730579.31034483,
            "unit": "ns",
            "range": "± 3701415.468192082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136645945.28301886,
            "unit": "ns",
            "range": "± 5557061.669850839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275633435.1851852,
            "unit": "ns",
            "range": "± 7477993.365443583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141171.044921875,
            "unit": "ns",
            "range": "± 112204.83103948485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2029137.01171875,
            "unit": "ns",
            "range": "± 50876.16327103999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1538548.515625,
            "unit": "ns",
            "range": "± 18885.228378021362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3440933.370535714,
            "unit": "ns",
            "range": "± 80877.98266842522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1095062.8487723214,
            "unit": "ns",
            "range": "± 11996.634825577728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1009829.5654296875,
            "unit": "ns",
            "range": "± 18396.628606239305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4083727.0833333335,
            "unit": "ns",
            "range": "± 300393.06862813025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4409879.347826087,
            "unit": "ns",
            "range": "± 349820.91290725075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5647435.2272727275,
            "unit": "ns",
            "range": "± 307904.0379093254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5449092.391304348,
            "unit": "ns",
            "range": "± 383777.19762122276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9003404.761904761,
            "unit": "ns",
            "range": "± 471355.04508943984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342418.47826086957,
            "unit": "ns",
            "range": "± 44907.3550092031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324432.22222222225,
            "unit": "ns",
            "range": "± 27861.433123233262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289950,
            "unit": "ns",
            "range": "± 20307.095603954098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4984119.318181818,
            "unit": "ns",
            "range": "± 333779.70946434786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4617297.333333333,
            "unit": "ns",
            "range": "± 231105.3673188998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26224.21052631579,
            "unit": "ns",
            "range": "± 5000.8662183596325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104924.46808510639,
            "unit": "ns",
            "range": "± 15035.833086189294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120954.16666666667,
            "unit": "ns",
            "range": "± 24132.013751846287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137367.02127659574,
            "unit": "ns",
            "range": "± 21542.28344391646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8757.777777777777,
            "unit": "ns",
            "range": "± 1717.9801164156409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25451.136363636364,
            "unit": "ns",
            "range": "± 3198.922028138661"
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
          "id": "5235ad9aa1026917069c71af2ac4a4270be4c3d7",
          "message": "Merge pull request #3225 from moreal/fix-tx-bug",
          "timestamp": "2023-06-22T15:21:33+09:00",
          "tree_id": "8cea5e90c0935e829cfdf8d7354089b2b37087c8",
          "url": "https://github.com/planetarium/libplanet/commit/5235ad9aa1026917069c71af2ac4a4270be4c3d7"
        },
        "date": 1687415757338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981875,
            "unit": "ns",
            "range": "± 73707.7759627418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819201.6393442622,
            "unit": "ns",
            "range": "± 75079.80752018321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1580818.1818181819,
            "unit": "ns",
            "range": "± 133301.70273392054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3824148.888888889,
            "unit": "ns",
            "range": "± 205192.64789840928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34545.77464788732,
            "unit": "ns",
            "range": "± 1692.7945297405463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4957964.285714285,
            "unit": "ns",
            "range": "± 18714.272921730382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12735507.142857144,
            "unit": "ns",
            "range": "± 69049.02900543503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32565026.666666668,
            "unit": "ns",
            "range": "± 495139.4543339232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64964153.333333336,
            "unit": "ns",
            "range": "± 665331.066748692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129685207.14285715,
            "unit": "ns",
            "range": "± 1305655.1638423263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3495872.96875,
            "unit": "ns",
            "range": "± 11262.07879070702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099146.7708333333,
            "unit": "ns",
            "range": "± 2763.048586156995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 836697.6953125,
            "unit": "ns",
            "range": "± 2438.6117111162084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1857084.0625,
            "unit": "ns",
            "range": "± 7304.24091483648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612607.2395833334,
            "unit": "ns",
            "range": "± 1310.829398397851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523496.4518229167,
            "unit": "ns",
            "range": "± 866.9390494904545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124166.6666666665,
            "unit": "ns",
            "range": "± 67192.33432220275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223552.6315789474,
            "unit": "ns",
            "range": "± 33863.37530628781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2832851.515151515,
            "unit": "ns",
            "range": "± 88967.81764074904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2716458.904109589,
            "unit": "ns",
            "range": "± 132186.33505986963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4626706.382978723,
            "unit": "ns",
            "range": "± 177484.34518136756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189285.45454545456,
            "unit": "ns",
            "range": "± 7781.540792438031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181254.7619047619,
            "unit": "ns",
            "range": "± 6003.259374095018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158386.66666666666,
            "unit": "ns",
            "range": "± 5968.08176887683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2794000,
            "unit": "ns",
            "range": "± 40672.11764644366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2590880,
            "unit": "ns",
            "range": "± 32064.515322348827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13619.148936170213,
            "unit": "ns",
            "range": "± 1353.4723639384338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62731.25,
            "unit": "ns",
            "range": "± 3290.707813129632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52906.25,
            "unit": "ns",
            "range": "± 1071.9104139264023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68546.8085106383,
            "unit": "ns",
            "range": "± 9446.313522599099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3817.7083333333335,
            "unit": "ns",
            "range": "± 520.7271821651085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13269.58762886598,
            "unit": "ns",
            "range": "± 1326.7001023260786"
          }
        ]
      }
    ]
  }
}