window.BENCHMARK_DATA = {
  "lastUpdate": 1725525229305,
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
          "id": "428330408c520bc52a7a8f7071f381e43979ab8b",
          "message": "feat: Add the feature to load action loader from external assembly",
          "timestamp": "2024-08-27T09:50:57+09:00",
          "tree_id": "656a1dac46e2f88d4e6c42ee262131e1eccc417c",
          "url": "https://github.com/planetarium/libplanet/commit/428330408c520bc52a7a8f7071f381e43979ab8b"
        },
        "date": 1724720540864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216337.71649484537,
            "unit": "ns",
            "range": "± 15419.753849382887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199252.39583333334,
            "unit": "ns",
            "range": "± 7398.7336171708885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166987.92307692306,
            "unit": "ns",
            "range": "± 1668.977654211227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3109822,
            "unit": "ns",
            "range": "± 36948.430258556706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804722.3,
            "unit": "ns",
            "range": "± 29918.920361537108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17558.819587628866,
            "unit": "ns",
            "range": "± 2310.539964607803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75172.28282828283,
            "unit": "ns",
            "range": "± 11375.53512178425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53482.192307692305,
            "unit": "ns",
            "range": "± 802.3368353976385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54074.295918367345,
            "unit": "ns",
            "range": "± 7793.183463717406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3111.863157894737,
            "unit": "ns",
            "range": "± 340.31811183838096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11966,
            "unit": "ns",
            "range": "± 739.6806449554693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2524612.827586207,
            "unit": "ns",
            "range": "± 66624.00287598466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549675.6470588236,
            "unit": "ns",
            "range": "± 103699.0109659342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3071067.2666666666,
            "unit": "ns",
            "range": "± 36482.280398388844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623136.285714286,
            "unit": "ns",
            "range": "± 46196.52840840977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3259796.1333333333,
            "unit": "ns",
            "range": "± 40413.6820605997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10603770.5,
            "unit": "ns",
            "range": "± 71600.6541789748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27160593.733333334,
            "unit": "ns",
            "range": "± 138080.12435925263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68983660.36666666,
            "unit": "ns",
            "range": "± 489279.5297511969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138935855.96666667,
            "unit": "ns",
            "range": "± 694101.5543054681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294181145,
            "unit": "ns",
            "range": "± 1226084.2699977218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030027.0697674418,
            "unit": "ns",
            "range": "± 55784.010652387326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2024613.2448979593,
            "unit": "ns",
            "range": "± 79903.30409405551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731410.5555555555,
            "unit": "ns",
            "range": "± 83684.4270002673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8742537.693877552,
            "unit": "ns",
            "range": "± 348053.5182593574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3768293.2516741073,
            "unit": "ns",
            "range": "± 4455.042921510576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224271.3565104166,
            "unit": "ns",
            "range": "± 2536.475718212129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763582.8116629465,
            "unit": "ns",
            "range": "± 2659.4742964999236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948301.4278645834,
            "unit": "ns",
            "range": "± 4468.776044183037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656545.591796875,
            "unit": "ns",
            "range": "± 550.2848056805128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571208.1745442708,
            "unit": "ns",
            "range": "± 863.971207051707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32374.583333333332,
            "unit": "ns",
            "range": "± 680.400835611957"
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
          "id": "350f808856c80bc5d7e7f0dbfd0a3e615d74eb22",
          "message": "feat: Add the feature to load action loader from external assembly",
          "timestamp": "2024-09-05T17:14:15+09:00",
          "tree_id": "bb76e1003837b118eca277142aa7abfe2b09429b",
          "url": "https://github.com/planetarium/libplanet/commit/350f808856c80bc5d7e7f0dbfd0a3e615d74eb22"
        },
        "date": 1725524620535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199540.44262295082,
            "unit": "ns",
            "range": "± 8569.902448928635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190020.3064516129,
            "unit": "ns",
            "range": "± 8514.219340510224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163540.6,
            "unit": "ns",
            "range": "± 2918.260949851567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091222.2,
            "unit": "ns",
            "range": "± 33196.752302855515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879632.714285714,
            "unit": "ns",
            "range": "± 30934.83646045611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12902.739130434782,
            "unit": "ns",
            "range": "± 969.122242139878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59709.48387096774,
            "unit": "ns",
            "range": "± 3618.302056793151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51159.46666666667,
            "unit": "ns",
            "range": "± 956.2291914947309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52713.865979381444,
            "unit": "ns",
            "range": "± 8533.785246776566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2700.366666666667,
            "unit": "ns",
            "range": "± 212.04941389351745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12126.876344086022,
            "unit": "ns",
            "range": "± 793.0143498068194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438858.3333333335,
            "unit": "ns",
            "range": "± 29345.37565338183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554651,
            "unit": "ns",
            "range": "± 51690.8968871696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3015116.2,
            "unit": "ns",
            "range": "± 35180.39415478051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2640355.5434782607,
            "unit": "ns",
            "range": "± 57428.77904253411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276249.1333333333,
            "unit": "ns",
            "range": "± 60994.92443622627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10348793.92857143,
            "unit": "ns",
            "range": "± 125584.82319039883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26650620.666666668,
            "unit": "ns",
            "range": "± 143937.6525407872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69016465.92857143,
            "unit": "ns",
            "range": "± 284876.374188933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137070240.2857143,
            "unit": "ns",
            "range": "± 549490.0731100858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282373949.4285714,
            "unit": "ns",
            "range": "± 797844.0685474934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017661.925,
            "unit": "ns",
            "range": "± 51705.569394892074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930695.1666666667,
            "unit": "ns",
            "range": "± 64373.88916300947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680304.9375,
            "unit": "ns",
            "range": "± 87342.615495261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8364921.8,
            "unit": "ns",
            "range": "± 247708.7836527345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754376.3922991073,
            "unit": "ns",
            "range": "± 3989.1782100115465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1174411.9332932692,
            "unit": "ns",
            "range": "± 2200.4158542995638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774824.138296274,
            "unit": "ns",
            "range": "± 800.1694170134649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921877.1358072916,
            "unit": "ns",
            "range": "± 953.1805450380579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623790.7968098958,
            "unit": "ns",
            "range": "± 835.4043050026244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569220.2889973958,
            "unit": "ns",
            "range": "± 414.77125266821713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31905.153846153848,
            "unit": "ns",
            "range": "± 318.66409853058076"
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
          "id": "286cc3595b9d29fb534ae2db82f1e27efde0b35c",
          "message": "feat: Add IActionService to load action loader from external assembly",
          "timestamp": "2024-09-05T17:22:39+09:00",
          "tree_id": "4b3cbb5c04d4387d240e976e6920b0d5332abb32",
          "url": "https://github.com/planetarium/libplanet/commit/286cc3595b9d29fb534ae2db82f1e27efde0b35c"
        },
        "date": 1725525203199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208441.06,
            "unit": "ns",
            "range": "± 7955.926414866814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194132.85185185185,
            "unit": "ns",
            "range": "± 7660.169091210708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165797.13333333333,
            "unit": "ns",
            "range": "± 2960.074851048453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3189846.5833333335,
            "unit": "ns",
            "range": "± 8535.860242725003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795135.769230769,
            "unit": "ns",
            "range": "± 30839.51810354653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14768.927835051547,
            "unit": "ns",
            "range": "± 3001.181431423516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59726.368131868134,
            "unit": "ns",
            "range": "± 4285.675819151749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50694.469696969696,
            "unit": "ns",
            "range": "± 1376.414783160596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56245.989795918365,
            "unit": "ns",
            "range": "± 9151.47724342951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2730.6530612244896,
            "unit": "ns",
            "range": "± 293.00895809960275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12301.295180722891,
            "unit": "ns",
            "range": "± 1234.6094154658708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437642.3666666667,
            "unit": "ns",
            "range": "± 35712.77314684614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548362.3333333335,
            "unit": "ns",
            "range": "± 40655.31169419786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3007127.2333333334,
            "unit": "ns",
            "range": "± 48266.80628173047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623957.466666667,
            "unit": "ns",
            "range": "± 44325.21068335501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3274480.6666666665,
            "unit": "ns",
            "range": "± 57667.355128563075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10434858.466666667,
            "unit": "ns",
            "range": "± 70291.0212330206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26936929.6,
            "unit": "ns",
            "range": "± 208219.27951691422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68691667.63333334,
            "unit": "ns",
            "range": "± 393995.8247184257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137542183.46666667,
            "unit": "ns",
            "range": "± 745014.4095956291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284081927.26666665,
            "unit": "ns",
            "range": "± 978854.7428110251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009180.095890411,
            "unit": "ns",
            "range": "± 50039.612500488154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1978828.6097560977,
            "unit": "ns",
            "range": "± 70874.82073835463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1679938.8309859154,
            "unit": "ns",
            "range": "± 81682.11399600733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8507177.138888888,
            "unit": "ns",
            "range": "± 282503.91226673074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731309.290564904,
            "unit": "ns",
            "range": "± 6110.031649249725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202964.6435546875,
            "unit": "ns",
            "range": "± 1641.6401388475094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765829.7467447916,
            "unit": "ns",
            "range": "± 1167.0868596064663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982033.7491629464,
            "unit": "ns",
            "range": "± 2975.7288958288523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620726.5947265625,
            "unit": "ns",
            "range": "± 778.456864231052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576443.1853215144,
            "unit": "ns",
            "range": "± 353.4332657971949"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32079.6,
            "unit": "ns",
            "range": "± 618.1274292899319"
          }
        ]
      }
    ]
  }
}