window.BENCHMARK_DATA = {
  "lastUpdate": 1699864700997,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "582769981f960a65c5fc10d5a8a917e7fd8b9d4a",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>\n(cherry picked from commit 9ab368f1b8a524c29bf8e6d03020c4a2efde28ea)",
          "timestamp": "2023-10-18T19:04:17+09:00",
          "tree_id": "60b507f13188cb08f123b870814e041ea22f4f73",
          "url": "https://github.com/planetarium/libplanet/commit/582769981f960a65c5fc10d5a8a917e7fd8b9d4a"
        },
        "date": 1697627889058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7512785.8125,
            "unit": "ns",
            "range": "± 114175.93376435552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18366648.576923076,
            "unit": "ns",
            "range": "± 252802.27856154751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46250972,
            "unit": "ns",
            "range": "± 547839.4885261698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93665126.45833333,
            "unit": "ns",
            "range": "± 2404113.4438969656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190125649.2222222,
            "unit": "ns",
            "range": "± 3921061.5535827386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38515.717391304344,
            "unit": "ns",
            "range": "± 7690.774627422396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218227.4516129032,
            "unit": "ns",
            "range": "± 14892.377351690131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215083.67708333334,
            "unit": "ns",
            "range": "± 21012.99311779051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195484.94791666666,
            "unit": "ns",
            "range": "± 18177.308684105545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3596679.3333333335,
            "unit": "ns",
            "range": "± 66049.43875685273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3418024.625,
            "unit": "ns",
            "range": "± 64242.44043192942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12851.934782608696,
            "unit": "ns",
            "range": "± 1544.3811186543287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57933.27173913043,
            "unit": "ns",
            "range": "± 4166.241052527323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52844.65517241379,
            "unit": "ns",
            "range": "± 4629.178574548636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55776.50537634409,
            "unit": "ns",
            "range": "± 8478.465938230314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3098.489247311828,
            "unit": "ns",
            "range": "± 366.4345690043228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11825.033333333333,
            "unit": "ns",
            "range": "± 1237.894782789889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1208598.969387755,
            "unit": "ns",
            "range": "± 113080.16936427297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2372100.1296296297,
            "unit": "ns",
            "range": "± 98379.57672028338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858322.3789473684,
            "unit": "ns",
            "range": "± 138143.06678902183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9662310.90425532,
            "unit": "ns",
            "range": "± 2318967.4403789886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954552.0888888887,
            "unit": "ns",
            "range": "± 112151.60451671541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2981238.8625,
            "unit": "ns",
            "range": "± 144363.0517939384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536238.727272727,
            "unit": "ns",
            "range": "± 129037.04145499763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3584929.4285714286,
            "unit": "ns",
            "range": "± 183120.44230379522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11339555.564516129,
            "unit": "ns",
            "range": "± 1202981.2458279368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4149712.283653846,
            "unit": "ns",
            "range": "± 28355.290145444364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1308921.9521484375,
            "unit": "ns",
            "range": "± 25184.59870567984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 838362.3776692708,
            "unit": "ns",
            "range": "± 11858.706130427936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903228.900669643,
            "unit": "ns",
            "range": "± 21800.8252547513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612198.6787760417,
            "unit": "ns",
            "range": "± 8252.776999461219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565380.0684291294,
            "unit": "ns",
            "range": "± 8174.341878615633"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7c0bebbfbe90ce56325d4e67173700a68f2d140d",
          "message": "fix: Remove GetAccountState, GetState from BlockChain",
          "timestamp": "2023-10-20T16:52:22+09:00",
          "tree_id": "d7fea795e4c5aa85d969933e29e4af1236e14e4a",
          "url": "https://github.com/planetarium/libplanet/commit/7c0bebbfbe90ce56325d4e67173700a68f2d140d"
        },
        "date": 1697789209151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7455966.5,
            "unit": "ns",
            "range": "± 40037.69402027967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18657634.266666666,
            "unit": "ns",
            "range": "± 341038.9080055795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45608785.766666666,
            "unit": "ns",
            "range": "± 538898.8486986968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94785172.13333334,
            "unit": "ns",
            "range": "± 1266042.5190158428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186668966.14285713,
            "unit": "ns",
            "range": "± 2691966.3781756796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34434.606741573036,
            "unit": "ns",
            "range": "± 2856.2810396880254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220040.41666666666,
            "unit": "ns",
            "range": "± 19698.959308694815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221561.44680851063,
            "unit": "ns",
            "range": "± 20075.057957236073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199587.40526315788,
            "unit": "ns",
            "range": "± 20869.622060761296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3719654.3,
            "unit": "ns",
            "range": "± 82207.13327936042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539510.6,
            "unit": "ns",
            "range": "± 60053.93521279731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13059.28125,
            "unit": "ns",
            "range": "± 1278.3018933695223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65830.11855670103,
            "unit": "ns",
            "range": "± 13854.678418951798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53247.82558139535,
            "unit": "ns",
            "range": "± 4205.280795526054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57607.61052631579,
            "unit": "ns",
            "range": "± 8639.301257569212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3014.1153846153848,
            "unit": "ns",
            "range": "± 308.0634411297189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11634.316091954022,
            "unit": "ns",
            "range": "± 697.0389954180374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1260395.71875,
            "unit": "ns",
            "range": "± 135075.1132092381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2385577.753164557,
            "unit": "ns",
            "range": "± 116699.28005869246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1864562,
            "unit": "ns",
            "range": "± 169507.39406199218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9754980.850515464,
            "unit": "ns",
            "range": "± 2319706.2028768053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2939428.380952381,
            "unit": "ns",
            "range": "± 69004.72844340176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2974375.290322581,
            "unit": "ns",
            "range": "± 87971.40747204686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3626934.55,
            "unit": "ns",
            "range": "± 81074.02727298382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3561345.294117647,
            "unit": "ns",
            "range": "± 143213.95662187313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11041194.255555555,
            "unit": "ns",
            "range": "± 950981.8973347584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4239140.465049342,
            "unit": "ns",
            "range": "± 91173.52552768645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321230.1598958333,
            "unit": "ns",
            "range": "± 19283.386433151813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 876604.0309895833,
            "unit": "ns",
            "range": "± 9192.098256191284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2283144.131184896,
            "unit": "ns",
            "range": "± 57044.612179677984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654305.8924479167,
            "unit": "ns",
            "range": "± 10673.326210543331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585906.512878418,
            "unit": "ns",
            "range": "± 10303.832876074002"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "141cc92b4583b8cb649ba7ffaaee1630e5caaab4",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T12:25:25+09:00",
          "tree_id": "65a3a471159be7156a9f48e9c5bb82429af83fb9",
          "url": "https://github.com/planetarium/libplanet/commit/141cc92b4583b8cb649ba7ffaaee1630e5caaab4"
        },
        "date": 1698032818829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9200739.633333333,
            "unit": "ns",
            "range": "± 512262.2344209483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21622054.45,
            "unit": "ns",
            "range": "± 958355.1140623033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53836281.88636363,
            "unit": "ns",
            "range": "± 1984668.6733073236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112836137.23333333,
            "unit": "ns",
            "range": "± 3334102.31918586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213894992.5,
            "unit": "ns",
            "range": "± 4910091.920173053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77152.6046511628,
            "unit": "ns",
            "range": "± 4594.53302057506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326770.63265306124,
            "unit": "ns",
            "range": "± 32646.605697606683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311864.8829787234,
            "unit": "ns",
            "range": "± 24978.181489312632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324862.77777777775,
            "unit": "ns",
            "range": "± 48622.091176742906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4201539.604166667,
            "unit": "ns",
            "range": "± 162648.04285140714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4234281.489795919,
            "unit": "ns",
            "range": "± 396873.74741700204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26934.363636363636,
            "unit": "ns",
            "range": "± 6047.585759740916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125538.67708333333,
            "unit": "ns",
            "range": "± 21166.749350409198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118852.64772727272,
            "unit": "ns",
            "range": "± 10331.193271022143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113661.01111111112,
            "unit": "ns",
            "range": "± 13934.24269277751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7992.29347826087,
            "unit": "ns",
            "range": "± 947.5647043700966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26006.073033707864,
            "unit": "ns",
            "range": "± 3637.3269902237284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610639.28125,
            "unit": "ns",
            "range": "± 221761.0429267315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2915305.96875,
            "unit": "ns",
            "range": "± 115338.63240606156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2531825.659574468,
            "unit": "ns",
            "range": "± 170086.09992072568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14154511.43,
            "unit": "ns",
            "range": "± 3551770.398625862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495116.6041666665,
            "unit": "ns",
            "range": "± 214478.93789306306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734079.214285714,
            "unit": "ns",
            "range": "± 63716.44611290119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493553.05882353,
            "unit": "ns",
            "range": "± 242047.13071239585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4574265.06,
            "unit": "ns",
            "range": "± 309090.65667078673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16492997.447916666,
            "unit": "ns",
            "range": "± 2165241.817067805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055182.19921875,
            "unit": "ns",
            "range": "± 112026.81992628404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827739.59484375,
            "unit": "ns",
            "range": "± 92204.75453992595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1090562.309453125,
            "unit": "ns",
            "range": "± 28251.346120928887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2799675.2289453126,
            "unit": "ns",
            "range": "± 170720.67630220175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859811.9529947917,
            "unit": "ns",
            "range": "± 15751.275509165405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756656.5111979167,
            "unit": "ns",
            "range": "± 11135.026652817502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "0bcbff442cb85c7188c18209025a39ac1d4c2a3e",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T13:55:20+09:00",
          "tree_id": "02d979dbbc51901a561318d48bdc42129807dccd",
          "url": "https://github.com/planetarium/libplanet/commit/0bcbff442cb85c7188c18209025a39ac1d4c2a3e"
        },
        "date": 1698038055641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8727052.159793815,
            "unit": "ns",
            "range": "± 534601.5688028969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21415483.068965517,
            "unit": "ns",
            "range": "± 623344.2421840972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52613495.378787875,
            "unit": "ns",
            "range": "± 2451577.9327515233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105117648.6923077,
            "unit": "ns",
            "range": "± 2841454.1518146484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223413349.3125,
            "unit": "ns",
            "range": "± 4222750.034864463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72308.76086956522,
            "unit": "ns",
            "range": "± 11767.181569774235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326526.56701030926,
            "unit": "ns",
            "range": "± 30837.885964314526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348274.19696969696,
            "unit": "ns",
            "range": "± 39356.97324294656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306318.2105263158,
            "unit": "ns",
            "range": "± 25898.977296778285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4369676.11,
            "unit": "ns",
            "range": "± 275888.9948836616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3962558.984848485,
            "unit": "ns",
            "range": "± 185688.40148704802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23464.926966292136,
            "unit": "ns",
            "range": "± 4082.396621993576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108830.13265306123,
            "unit": "ns",
            "range": "± 21691.989799856237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96861.8163265306,
            "unit": "ns",
            "range": "± 18352.237696420463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102031.57731958762,
            "unit": "ns",
            "range": "± 15583.72938077501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5818.229166666667,
            "unit": "ns",
            "range": "± 577.8990893366596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18444.5625,
            "unit": "ns",
            "range": "± 3079.8090057407953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1582467.44,
            "unit": "ns",
            "range": "± 174557.45268146766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947954.8780487804,
            "unit": "ns",
            "range": "± 150886.06074263252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2448293.4285714286,
            "unit": "ns",
            "range": "± 127232.13189027463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12889227.510526316,
            "unit": "ns",
            "range": "± 2940448.393778978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336916.375,
            "unit": "ns",
            "range": "± 199572.91453782262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504349.0576923075,
            "unit": "ns",
            "range": "± 139959.34584804365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4415392.80952381,
            "unit": "ns",
            "range": "± 150015.1685036628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4231553.411111111,
            "unit": "ns",
            "range": "± 227965.61884141745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15973294.40625,
            "unit": "ns",
            "range": "± 1751154.0843986273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105802.2375,
            "unit": "ns",
            "range": "± 109464.38444421769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1714348.4070870536,
            "unit": "ns",
            "range": "± 13946.76866348471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077386.6779947917,
            "unit": "ns",
            "range": "± 15871.501137725687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2937125.5792410714,
            "unit": "ns",
            "range": "± 45261.18631659019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799252.3811035156,
            "unit": "ns",
            "range": "± 19968.40785848937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882545.2551047585,
            "unit": "ns",
            "range": "± 20898.30156887975"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "bd633356d388be0f006d5b4d7facdf0c669c2b96",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-25T18:00:47+09:00",
          "tree_id": "722b91f6a5ac3e1d291ba8b521e5b0e97bd1c629",
          "url": "https://github.com/planetarium/libplanet/commit/bd633356d388be0f006d5b4d7facdf0c669c2b96"
        },
        "date": 1698225940846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10416706.42857143,
            "unit": "ns",
            "range": "± 108503.61935151803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25716307.227272727,
            "unit": "ns",
            "range": "± 150413.52025315372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66448777.1,
            "unit": "ns",
            "range": "± 1088565.7257344301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137038266.63333333,
            "unit": "ns",
            "range": "± 3910958.050229211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 307913926.88297874,
            "unit": "ns",
            "range": "± 29918305.066172775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72091.38372093023,
            "unit": "ns",
            "range": "± 8114.916325788911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349814.2160493827,
            "unit": "ns",
            "range": "± 43575.78841978495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312686.38181818184,
            "unit": "ns",
            "range": "± 13182.275057244426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294612.78571428574,
            "unit": "ns",
            "range": "± 7268.970757838201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5092146.794117647,
            "unit": "ns",
            "range": "± 75650.95130248257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4807908.230769231,
            "unit": "ns",
            "range": "± 80292.55694661643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26594.736263736264,
            "unit": "ns",
            "range": "± 3871.8897534671178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107243.98235294118,
            "unit": "ns",
            "range": "± 6588.089777722199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104228.53488372093,
            "unit": "ns",
            "range": "± 3868.300410287487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96965.54347826086,
            "unit": "ns",
            "range": "± 8552.695164713077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8391.417582417582,
            "unit": "ns",
            "range": "± 828.2458044423241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24291.393258426968,
            "unit": "ns",
            "range": "± 2340.9782658789613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2368685.6224489794,
            "unit": "ns",
            "range": "± 652942.2373974738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4540450.142857143,
            "unit": "ns",
            "range": "± 1041505.4120529115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3742932.7959183673,
            "unit": "ns",
            "range": "± 861488.3644909684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17333367.186868686,
            "unit": "ns",
            "range": "± 4586078.159327235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4737552.792929293,
            "unit": "ns",
            "range": "± 1003518.5901061922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5193224.95,
            "unit": "ns",
            "range": "± 1162661.3729590215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6005899.984848484,
            "unit": "ns",
            "range": "± 1262481.523633865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5990233.875,
            "unit": "ns",
            "range": "± 1298287.579038337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20000440.224489797,
            "unit": "ns",
            "range": "± 4873183.710895474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126287.744977678,
            "unit": "ns",
            "range": "± 103465.14751870265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803159.1123697916,
            "unit": "ns",
            "range": "± 32842.05694112287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161936.2443296371,
            "unit": "ns",
            "range": "± 29442.008594561634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2917184.4752604165,
            "unit": "ns",
            "range": "± 64239.00171109324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880956.4824695121,
            "unit": "ns",
            "range": "± 31766.654766026015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 677776.069325765,
            "unit": "ns",
            "range": "± 77651.78128473861"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-27T11:59:10+09:00",
          "tree_id": "a34bdee629d9c80af766ac7e66843b4956cc0e06",
          "url": "https://github.com/planetarium/libplanet/commit/e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6"
        },
        "date": 1698384004588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9754095.042553192,
            "unit": "ns",
            "range": "± 641802.7017722582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22304859.64556962,
            "unit": "ns",
            "range": "± 1151556.3220925895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55620888.85714286,
            "unit": "ns",
            "range": "± 2004477.9283141566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110447427.5,
            "unit": "ns",
            "range": "± 1567652.9719239522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229053569.43333334,
            "unit": "ns",
            "range": "± 4258444.379940998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74211.69101123596,
            "unit": "ns",
            "range": "± 8909.308106076993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312772.3888888889,
            "unit": "ns",
            "range": "± 20561.40023236758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325128.77419354836,
            "unit": "ns",
            "range": "± 35762.167474292255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301358.56382978725,
            "unit": "ns",
            "range": "± 22427.955775071656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183635.790322581,
            "unit": "ns",
            "range": "± 190182.41502013206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3886441.5,
            "unit": "ns",
            "range": "± 87262.9067609395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19544.031914893618,
            "unit": "ns",
            "range": "± 1559.026369052363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89519.90588235293,
            "unit": "ns",
            "range": "± 6262.613840089777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94996.21739130435,
            "unit": "ns",
            "range": "± 4517.83035144072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95114,
            "unit": "ns",
            "range": "± 8358.928333901682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6708.354838709677,
            "unit": "ns",
            "range": "± 700.683216972538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20453.625,
            "unit": "ns",
            "range": "± 3327.528527171169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599548.322580645,
            "unit": "ns",
            "range": "± 184559.35594222217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965077.8383838385,
            "unit": "ns",
            "range": "± 187315.03681736818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2673839.907216495,
            "unit": "ns",
            "range": "± 273729.8668814172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12578282.721649485,
            "unit": "ns",
            "range": "± 2794772.191833549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3684040.35,
            "unit": "ns",
            "range": "± 369624.6854186497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3822572.4569892474,
            "unit": "ns",
            "range": "± 353471.883571317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6052448.159574468,
            "unit": "ns",
            "range": "± 1732429.1556313087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4981260.947368421,
            "unit": "ns",
            "range": "± 717301.9845348585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16881715.776595745,
            "unit": "ns",
            "range": "± 2044923.5262627266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6175931.076056985,
            "unit": "ns",
            "range": "± 118569.68343439884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920064.8848684211,
            "unit": "ns",
            "range": "± 42424.28292304421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064958.0673452525,
            "unit": "ns",
            "range": "± 43672.078546784316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543510.6248372397,
            "unit": "ns",
            "range": "± 59124.35198759152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836513.5608723959,
            "unit": "ns",
            "range": "± 15108.300688567058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729582.9126302083,
            "unit": "ns",
            "range": "± 9495.073664775664"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "d82c1d18d1df9b139da7b37ba29f1bb72f4769e9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:04:54+09:00",
          "tree_id": "ed08d121b65f76bb7c1ad1a5934f4f112474c902",
          "url": "https://github.com/planetarium/libplanet/commit/d82c1d18d1df9b139da7b37ba29f1bb72f4769e9"
        },
        "date": 1698402245791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9005199.409090908,
            "unit": "ns",
            "range": "± 424144.8383789516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21770166.405405406,
            "unit": "ns",
            "range": "± 1091309.1533381334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56125223.026315786,
            "unit": "ns",
            "range": "± 1806995.3592304594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111641767.70588236,
            "unit": "ns",
            "range": "± 3557407.1914096815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222046657.33333334,
            "unit": "ns",
            "range": "± 5623204.167184157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76289.25882352941,
            "unit": "ns",
            "range": "± 4887.705324277926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314321.4310344828,
            "unit": "ns",
            "range": "± 20124.51180849046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296526.8314606742,
            "unit": "ns",
            "range": "± 22962.71152386168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282559.4561403509,
            "unit": "ns",
            "range": "± 12259.938647699808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4022328.3636363638,
            "unit": "ns",
            "range": "± 197671.03488031702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737744.5384615385,
            "unit": "ns",
            "range": "± 99521.8664320483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18270.520408163266,
            "unit": "ns",
            "range": "± 3482.00205542906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80968.82608695653,
            "unit": "ns",
            "range": "± 7862.15844256622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95660.39795918367,
            "unit": "ns",
            "range": "± 9681.297151245666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103000.64444444445,
            "unit": "ns",
            "range": "± 12182.663631516576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6915.45744680851,
            "unit": "ns",
            "range": "± 1469.9598755762568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19862.360215053763,
            "unit": "ns",
            "range": "± 5807.640032921024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564028.6,
            "unit": "ns",
            "range": "± 143052.6386970894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2852634.279411765,
            "unit": "ns",
            "range": "± 134646.76648597885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581263.1210526316,
            "unit": "ns",
            "range": "± 212533.77972369967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12419370.639175259,
            "unit": "ns",
            "range": "± 2996269.28893826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559274.224489796,
            "unit": "ns",
            "range": "± 283577.4946502162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3817122.8225806453,
            "unit": "ns",
            "range": "± 287243.57887692685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4635417.895833333,
            "unit": "ns",
            "range": "± 368612.70081786613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4824105.989690722,
            "unit": "ns",
            "range": "± 533615.9689890422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15717594.505263157,
            "unit": "ns",
            "range": "± 1762533.6537252024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917080.779611895,
            "unit": "ns",
            "range": "± 179658.7123070172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843894.1322916667,
            "unit": "ns",
            "range": "± 30351.028473717444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079390.9697265625,
            "unit": "ns",
            "range": "± 15332.486933758371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692699.0408183397,
            "unit": "ns",
            "range": "± 219661.63166454493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833433.5347858297,
            "unit": "ns",
            "range": "± 24430.84827890671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747481.9560546875,
            "unit": "ns",
            "range": "± 9715.919994402058"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "05971d07e3cc38e9764c88ccea78c307710241fb",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:00:37+09:00",
          "tree_id": "b7fb4bf620c736e0b47ca6ce687f8d744b842edf",
          "url": "https://github.com/planetarium/libplanet/commit/05971d07e3cc38e9764c88ccea78c307710241fb"
        },
        "date": 1698402521646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14497796.28125,
            "unit": "ns",
            "range": "± 2491508.3345602904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 36520068.796703294,
            "unit": "ns",
            "range": "± 4965833.831746651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 98942106.41578947,
            "unit": "ns",
            "range": "± 12657481.843683498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 201179722.95698926,
            "unit": "ns",
            "range": "± 30151844.758799016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 382645209.7765958,
            "unit": "ns",
            "range": "± 37254890.40326045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94566.6170212766,
            "unit": "ns",
            "range": "± 23422.382105174154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 489782.4646464646,
            "unit": "ns",
            "range": "± 117763.79046160135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 455504.7,
            "unit": "ns",
            "range": "± 111453.7029014036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368109.29,
            "unit": "ns",
            "range": "± 90754.04124216033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5766145.548387097,
            "unit": "ns",
            "range": "± 780248.3891279991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5100735.571428572,
            "unit": "ns",
            "range": "± 640115.6161729977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30161.135416666668,
            "unit": "ns",
            "range": "± 6317.336326782024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131867.27,
            "unit": "ns",
            "range": "± 23554.44809645057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109399.74468085106,
            "unit": "ns",
            "range": "± 23854.38463683046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99444.51086956522,
            "unit": "ns",
            "range": "± 10689.038910213414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8535.184782608696,
            "unit": "ns",
            "range": "± 1290.6862637427573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25175.455555555556,
            "unit": "ns",
            "range": "± 3642.6485823685643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2047163.3804347827,
            "unit": "ns",
            "range": "± 862592.7938965145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3822680.5268817204,
            "unit": "ns",
            "range": "± 1064136.0673390697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3579296.9838709678,
            "unit": "ns",
            "range": "± 1287837.5284950132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16815426.021276597,
            "unit": "ns",
            "range": "± 4396717.3403108325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5660884.132653061,
            "unit": "ns",
            "range": "± 1140786.5436524048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6084912.5,
            "unit": "ns",
            "range": "± 1009943.3613472792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7115727.260416667,
            "unit": "ns",
            "range": "± 1418819.5524232052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7051551.510869565,
            "unit": "ns",
            "range": "± 1225497.864472263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21171211.52631579,
            "unit": "ns",
            "range": "± 5454777.162975772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6080742.975105932,
            "unit": "ns",
            "range": "± 265809.3563065008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822190.2136615955,
            "unit": "ns",
            "range": "± 62474.036549544464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049553.737768308,
            "unit": "ns",
            "range": "± 85826.10170836396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2423838.466328125,
            "unit": "ns",
            "range": "± 268676.29041599325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774135.3588867188,
            "unit": "ns",
            "range": "± 104120.74086826258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581528.2206280048,
            "unit": "ns",
            "range": "± 15648.590405804582"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "91a635f42faf65291f9d9bdc4df4613fe0fe281b",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:02:49+09:00",
          "tree_id": "6dd5899d6a7b02e453602c1f164d19799f21e4ca",
          "url": "https://github.com/planetarium/libplanet/commit/91a635f42faf65291f9d9bdc4df4613fe0fe281b"
        },
        "date": 1698650301192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8260258.4,
            "unit": "ns",
            "range": "± 244257.5423510024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19277750.5625,
            "unit": "ns",
            "range": "± 365607.7628852117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50427345.058823526,
            "unit": "ns",
            "range": "± 1587545.0689075645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102640041.26229508,
            "unit": "ns",
            "range": "± 4566450.957663182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205257204.7857143,
            "unit": "ns",
            "range": "± 5743515.291154982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43868.40625,
            "unit": "ns",
            "range": "± 9741.460295888988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232621.4347826087,
            "unit": "ns",
            "range": "± 25861.148225999725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248861.94186046513,
            "unit": "ns",
            "range": "± 25222.839156491227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228808.45918367346,
            "unit": "ns",
            "range": "± 36038.87169215593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3931644.8068181816,
            "unit": "ns",
            "range": "± 214542.31703416354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3718848.8857142855,
            "unit": "ns",
            "range": "± 121093.29014168991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15416.670329670329,
            "unit": "ns",
            "range": "± 4540.960013660707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83072.02040816327,
            "unit": "ns",
            "range": "± 24390.366702788346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89795.81958762887,
            "unit": "ns",
            "range": "± 18798.908994022757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89253.61224489796,
            "unit": "ns",
            "range": "± 21698.56765327532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6623.301075268817,
            "unit": "ns",
            "range": "± 1174.9511070766182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16797.719101123595,
            "unit": "ns",
            "range": "± 4208.6424959641745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188365.163265306,
            "unit": "ns",
            "range": "± 152182.8862417349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2292761.1666666665,
            "unit": "ns",
            "range": "± 86371.22922278312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1779486.0520833333,
            "unit": "ns",
            "range": "± 128205.82698978273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9209520.59375,
            "unit": "ns",
            "range": "± 2122544.5495197345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056578.4505494507,
            "unit": "ns",
            "range": "± 170470.97574988232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3210782.2526881723,
            "unit": "ns",
            "range": "± 266279.1731395117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3759376.5416666665,
            "unit": "ns",
            "range": "± 175972.33417500104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3772222.4725274723,
            "unit": "ns",
            "range": "± 287697.70425602177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11832909.489130436,
            "unit": "ns",
            "range": "± 1384703.1130960132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4711643.04699707,
            "unit": "ns",
            "range": "± 213650.1126119825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1378755.318250868,
            "unit": "ns",
            "range": "± 29157.431201001324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 917636.4961187901,
            "unit": "ns",
            "range": "± 31954.726996437872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2139071.748211349,
            "unit": "ns",
            "range": "± 155019.41433220386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 673232.3922322592,
            "unit": "ns",
            "range": "± 23911.333941410314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587951.2634995404,
            "unit": "ns",
            "range": "± 12030.826621301196"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "b9972efc5511ef243f5c0d7fa09b0d8b8494a450",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:15:06+09:00",
          "tree_id": "759b3c702fe49903a3487f8e56917b84415befe3",
          "url": "https://github.com/planetarium/libplanet/commit/b9972efc5511ef243f5c0d7fa09b0d8b8494a450"
        },
        "date": 1698651010799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7526164.461538462,
            "unit": "ns",
            "range": "± 81477.19958636219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997790.111111112,
            "unit": "ns",
            "range": "± 382092.1784131244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46283831.36666667,
            "unit": "ns",
            "range": "± 858828.5633880993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90213223.63333334,
            "unit": "ns",
            "range": "± 887145.4241123901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223271406.95402297,
            "unit": "ns",
            "range": "± 21185902.46240667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32942.322222222225,
            "unit": "ns",
            "range": "± 2817.5641636623923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280048.4673913043,
            "unit": "ns",
            "range": "± 24762.381043288042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274283.5930232558,
            "unit": "ns",
            "range": "± 20543.952121289443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261375.64444444445,
            "unit": "ns",
            "range": "± 22226.3112358542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4525574.463414635,
            "unit": "ns",
            "range": "± 159412.22753651888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4114733.3,
            "unit": "ns",
            "range": "± 163894.53613288724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15453.31111111111,
            "unit": "ns",
            "range": "± 1182.4342216965817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72897.45454545454,
            "unit": "ns",
            "range": "± 3597.564123072336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65019.42857142857,
            "unit": "ns",
            "range": "± 3317.1228037998117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73229.58888888889,
            "unit": "ns",
            "range": "± 10355.107629575843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4298.279569892473,
            "unit": "ns",
            "range": "± 358.51955151316963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15533.08888888889,
            "unit": "ns",
            "range": "± 1526.2140766420432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1137343.4285714286,
            "unit": "ns",
            "range": "± 104449.17033561811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2305895.1914893617,
            "unit": "ns",
            "range": "± 132820.68935119399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1828687.93814433,
            "unit": "ns",
            "range": "± 107179.38604020115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8847914.739583334,
            "unit": "ns",
            "range": "± 1947335.9063032067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388369.7065217393,
            "unit": "ns",
            "range": "± 189886.60295107064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3593448.2560975607,
            "unit": "ns",
            "range": "± 310746.15455443005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4228920.257894737,
            "unit": "ns",
            "range": "± 252551.61717333406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4246573.313953488,
            "unit": "ns",
            "range": "± 301844.6529109756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13554716.148936171,
            "unit": "ns",
            "range": "± 1687178.416361086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5242381.47265625,
            "unit": "ns",
            "range": "± 90673.15405957364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438254.6334375,
            "unit": "ns",
            "range": "± 37953.75287857325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 920075.6087402344,
            "unit": "ns",
            "range": "± 18205.234188605402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2021433.6346435547,
            "unit": "ns",
            "range": "± 62744.50971051306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653313.2076721191,
            "unit": "ns",
            "range": "± 19996.106309290444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588091.0456290409,
            "unit": "ns",
            "range": "± 17173.00385909701"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6a11229c1a22ebfe5865a13fd81843db40f6d41c",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-31T13:03:55+09:00",
          "tree_id": "41f1594f08294afba15b0f8a6d4393124dee777d",
          "url": "https://github.com/planetarium/libplanet/commit/6a11229c1a22ebfe5865a13fd81843db40f6d41c"
        },
        "date": 1698726236107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700780,
            "unit": "ns",
            "range": "± 144924.01788293524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18611112.911764707,
            "unit": "ns",
            "range": "± 310065.54027275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46800267.981481485,
            "unit": "ns",
            "range": "± 1274922.1391921388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91573358.13333334,
            "unit": "ns",
            "range": "± 1317623.568992724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182961216.07142857,
            "unit": "ns",
            "range": "± 1593653.5583254413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34575.51162790698,
            "unit": "ns",
            "range": "± 3271.950332192375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219942.7659574468,
            "unit": "ns",
            "range": "± 18233.937511274555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213751.41558441558,
            "unit": "ns",
            "range": "± 10965.349842441066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240071.03370786516,
            "unit": "ns",
            "range": "± 14676.626122116631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4092862.1808510637,
            "unit": "ns",
            "range": "± 284759.96127091907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3496748.625,
            "unit": "ns",
            "range": "± 68343.0751731049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13994.011111111111,
            "unit": "ns",
            "range": "± 1885.4028478687412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68820.38888888889,
            "unit": "ns",
            "range": "± 6770.4737468790545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68492.22164948453,
            "unit": "ns",
            "range": "± 9838.007715342097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61730.23655913978,
            "unit": "ns",
            "range": "± 10767.323655593395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3740.483146067416,
            "unit": "ns",
            "range": "± 661.2318585303072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13043.625,
            "unit": "ns",
            "range": "± 1834.3578555192723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1153914.9777777777,
            "unit": "ns",
            "range": "± 86061.99993488201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658044.090909091,
            "unit": "ns",
            "range": "± 438344.86202319013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090701.7,
            "unit": "ns",
            "range": "± 250799.54002409297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10106127.85483871,
            "unit": "ns",
            "range": "± 1882165.5028690367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2810135.4482758623,
            "unit": "ns",
            "range": "± 104659.82000768556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3000953.4322033897,
            "unit": "ns",
            "range": "± 132117.73055588224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3644593.4056603773,
            "unit": "ns",
            "range": "± 144417.7132981941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3484545.9056603773,
            "unit": "ns",
            "range": "± 141997.0400312117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11108216.186813187,
            "unit": "ns",
            "range": "± 922011.3485209738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4284146.516145834,
            "unit": "ns",
            "range": "± 51575.035740945495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1401805.7027882542,
            "unit": "ns",
            "range": "± 38921.44798999969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 879396.2393275669,
            "unit": "ns",
            "range": "± 9183.081345647255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2019256.954273897,
            "unit": "ns",
            "range": "± 60257.16778247302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633628.2973958333,
            "unit": "ns",
            "range": "± 11522.803422449111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 611810.4887863685,
            "unit": "ns",
            "range": "± 17927.48176248305"
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
          "id": "b046b46ea91f5ea9322b6380c3bf5de452b582c6",
          "message": "Merge pull request #3471 from greymistcube/fix/build-warnings\n\n🧹 Fix build warnings",
          "timestamp": "2023-10-31T18:10:47+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/planetarium/libplanet/commit/b046b46ea91f5ea9322b6380c3bf5de452b582c6"
        },
        "date": 1698745060241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11149744.677083334,
            "unit": "ns",
            "range": "± 704274.365520367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25222037.233333334,
            "unit": "ns",
            "range": "± 386238.8447634566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59626254.807692304,
            "unit": "ns",
            "range": "± 749543.7839185229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119612934.25438596,
            "unit": "ns",
            "range": "± 5180552.613078844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245777399.07142857,
            "unit": "ns",
            "range": "± 5687408.414682452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65767.92222222222,
            "unit": "ns",
            "range": "± 10467.846988935702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251056.66666666666,
            "unit": "ns",
            "range": "± 22341.891686758692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239813.38659793814,
            "unit": "ns",
            "range": "± 28574.092692243485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219278.9301075269,
            "unit": "ns",
            "range": "± 26584.49100444037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4054805.1938775512,
            "unit": "ns",
            "range": "± 384116.79438242083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4011291.4591836734,
            "unit": "ns",
            "range": "± 440601.4455545582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15188.032258064517,
            "unit": "ns",
            "range": "± 2062.8175247104273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67240.46391752578,
            "unit": "ns",
            "range": "± 9567.450315677388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64852.5412371134,
            "unit": "ns",
            "range": "± 11822.547175064057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68874.01546391753,
            "unit": "ns",
            "range": "± 13250.464984068642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4416.602040816327,
            "unit": "ns",
            "range": "± 1455.9221879329195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14570.773684210526,
            "unit": "ns",
            "range": "± 2547.662894138951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549649.8368421053,
            "unit": "ns",
            "range": "± 216864.92035585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4209826.664948453,
            "unit": "ns",
            "range": "± 952947.4805840963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3490337.610526316,
            "unit": "ns",
            "range": "± 808296.9647426605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14347716.922680411,
            "unit": "ns",
            "range": "± 3429935.281399662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3873117.4479166665,
            "unit": "ns",
            "range": "± 327617.1857521284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3878199.028169014,
            "unit": "ns",
            "range": "± 189863.65452389937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5298029.390804598,
            "unit": "ns",
            "range": "± 679273.2142120441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4318331.101010101,
            "unit": "ns",
            "range": "± 376757.0562917738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12652715.543478262,
            "unit": "ns",
            "range": "± 2230894.4150943747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4682357.06421875,
            "unit": "ns",
            "range": "± 322640.6798515309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1769343.13953125,
            "unit": "ns",
            "range": "± 380108.36031118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329880.2051171875,
            "unit": "ns",
            "range": "± 34505.85347852885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2992055.4378985967,
            "unit": "ns",
            "range": "± 257618.953106051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945144.0024613361,
            "unit": "ns",
            "range": "± 150513.4386176112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 847063.8057226562,
            "unit": "ns",
            "range": "± 70123.62380706596"
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
          "id": "f157765a7eabcf08721902ed40f5b8be1fbc33fa",
          "message": "Merge pull request #3472 from greymistcube/refactor/blockchain\n\n🧹 Reorganize and cleanup `BlockChain`",
          "timestamp": "2023-10-31T20:04:52+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/planetarium/libplanet/commit/f157765a7eabcf08721902ed40f5b8be1fbc33fa"
        },
        "date": 1698751117975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7947235.966666667,
            "unit": "ns",
            "range": "± 146161.24942281417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20060273.911764707,
            "unit": "ns",
            "range": "± 641493.1495958834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48769929.45,
            "unit": "ns",
            "range": "± 969157.6968032046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100088419.7,
            "unit": "ns",
            "range": "± 2226264.5161057897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206224364.59649122,
            "unit": "ns",
            "range": "± 8934080.872739956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51443.994505494506,
            "unit": "ns",
            "range": "± 9868.54433189237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233202.73333333334,
            "unit": "ns",
            "range": "± 20218.789287261905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226198.55434782608,
            "unit": "ns",
            "range": "± 15966.326220362524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217057.53703703705,
            "unit": "ns",
            "range": "± 5987.0502463585235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3926843.4696969697,
            "unit": "ns",
            "range": "± 121902.85812391892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3585382.0172413792,
            "unit": "ns",
            "range": "± 101490.39041407555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13835.354838709678,
            "unit": "ns",
            "range": "± 1378.4330000998873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66023.10638297872,
            "unit": "ns",
            "range": "± 10452.939825424104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62177.03157894737,
            "unit": "ns",
            "range": "± 8350.115102344183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72057.31052631579,
            "unit": "ns",
            "range": "± 10139.047015831897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4301.432989690722,
            "unit": "ns",
            "range": "± 1182.218032866052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13263.934782608696,
            "unit": "ns",
            "range": "± 1552.7743820060396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1229554.4382022473,
            "unit": "ns",
            "range": "± 117716.30522409636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2507629.5168539328,
            "unit": "ns",
            "range": "± 180572.99111031328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1893055.8144329898,
            "unit": "ns",
            "range": "± 130071.48936653144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9611555.747368421,
            "unit": "ns",
            "range": "± 2166352.8045097147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3030623.189189189,
            "unit": "ns",
            "range": "± 150670.02721366467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3101538.65,
            "unit": "ns",
            "range": "± 133927.0930293128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3737984.057142857,
            "unit": "ns",
            "range": "± 113413.73285244626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796974.5054945056,
            "unit": "ns",
            "range": "± 250713.6583787867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12208266.906593407,
            "unit": "ns",
            "range": "± 1262927.6742725037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4438749.183854166,
            "unit": "ns",
            "range": "± 81707.31643507573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1364213.7334635416,
            "unit": "ns",
            "range": "± 17693.338419983338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872635.4871744792,
            "unit": "ns",
            "range": "± 11191.564740505984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2012265.8524639423,
            "unit": "ns",
            "range": "± 26531.29246819553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629900.3245785362,
            "unit": "ns",
            "range": "± 10399.66169028813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552465.7736672794,
            "unit": "ns",
            "range": "± 11033.74979773378"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d4826df7dca5172f5b131d5119f0b3746cecf324",
          "message": "Remove unused class",
          "timestamp": "2023-11-01T11:57:09+09:00",
          "tree_id": "139a0925b41f00920d848e073ab1a6ff557c8317",
          "url": "https://github.com/planetarium/libplanet/commit/d4826df7dca5172f5b131d5119f0b3746cecf324"
        },
        "date": 1698808518197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7975550.733333333,
            "unit": "ns",
            "range": "± 141471.8767011747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23062954.802197803,
            "unit": "ns",
            "range": "± 4837611.595231052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60154122.79473684,
            "unit": "ns",
            "range": "± 8475422.001669368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115454450.76470588,
            "unit": "ns",
            "range": "± 16938394.23770293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298150404.52150536,
            "unit": "ns",
            "range": "± 89131824.94571829"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64756.382978723406,
            "unit": "ns",
            "range": "± 15370.570771827252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242162.24725274724,
            "unit": "ns",
            "range": "± 19154.106086971657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327304.8333333333,
            "unit": "ns",
            "range": "± 88994.47414041965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312248.74242424243,
            "unit": "ns",
            "range": "± 73576.82584600455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826776.5555555555,
            "unit": "ns",
            "range": "± 79863.64391332504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3621600.6153846155,
            "unit": "ns",
            "range": "± 99025.66890259391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22438.197916666668,
            "unit": "ns",
            "range": "± 5525.005635852885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71324.9574468085,
            "unit": "ns",
            "range": "± 13773.17891318173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77980.82978723405,
            "unit": "ns",
            "range": "± 11878.794624404472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75492.23655913978,
            "unit": "ns",
            "range": "± 11066.074223772413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5930.973684210527,
            "unit": "ns",
            "range": "± 1446.7978644131063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16532,
            "unit": "ns",
            "range": "± 2525.9732444071283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525376.6157894738,
            "unit": "ns",
            "range": "± 379421.39549181267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2763939.840425532,
            "unit": "ns",
            "range": "± 475001.3988017559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2375729.914893617,
            "unit": "ns",
            "range": "± 576081.3694725877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12084279.5,
            "unit": "ns",
            "range": "± 4185853.9827271197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3273013.317647059,
            "unit": "ns",
            "range": "± 424290.71436365345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3154630.8,
            "unit": "ns",
            "range": "± 43434.835014569326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469655.071428572,
            "unit": "ns",
            "range": "± 933305.457978136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436020.322222223,
            "unit": "ns",
            "range": "± 918585.4624442413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13260215.784090908,
            "unit": "ns",
            "range": "± 2455679.4242495676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4594293.429408482,
            "unit": "ns",
            "range": "± 129069.51272644335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1439563.2212201287,
            "unit": "ns",
            "range": "± 43467.97072359907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 909518.7641059028,
            "unit": "ns",
            "range": "± 18612.51405822521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2206529.206110812,
            "unit": "ns",
            "range": "± 126470.72164020382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616402.3373325893,
            "unit": "ns",
            "range": "± 4750.151246591559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588178.6722237723,
            "unit": "ns",
            "range": "± 9310.04824365675"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aa59f7490c6a5704ae2c2405e96ee7823133c3a",
          "message": "Merge pull request #3473 from OnedgeLee/fix/account-metrics\n\nFix `AccountMetrics` to initialize",
          "timestamp": "2023-11-01T12:07:01+09:00",
          "tree_id": "f2d6cb2245d13faa4e2030824ebd87dfb679755f",
          "url": "https://github.com/planetarium/libplanet/commit/7aa59f7490c6a5704ae2c2405e96ee7823133c3a"
        },
        "date": 1698809120493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7714991.6,
            "unit": "ns",
            "range": "± 172588.86145065483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18521393.766666666,
            "unit": "ns",
            "range": "± 177411.96395736543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45994564.35714286,
            "unit": "ns",
            "range": "± 797071.5844688179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96942437.35365854,
            "unit": "ns",
            "range": "± 3439454.4753508694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195066439.67647058,
            "unit": "ns",
            "range": "± 3972435.0892591253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40405.97368421053,
            "unit": "ns",
            "range": "± 7648.414019776723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233031.23333333334,
            "unit": "ns",
            "range": "± 17887.640418845986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234985.81914893616,
            "unit": "ns",
            "range": "± 21822.043309295022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249566.53846153847,
            "unit": "ns",
            "range": "± 37637.62543558055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896436.712121212,
            "unit": "ns",
            "range": "± 123104.03898830796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575549.9509803923,
            "unit": "ns",
            "range": "± 145540.9527336294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16267.494382022473,
            "unit": "ns",
            "range": "± 2399.2314116077573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77965.54166666667,
            "unit": "ns",
            "range": "± 14478.9594682234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85666.73157894737,
            "unit": "ns",
            "range": "± 18424.680513095213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82788.10638297872,
            "unit": "ns",
            "range": "± 21351.110047050228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5362.05,
            "unit": "ns",
            "range": "± 1918.4583792801711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14821.363157894737,
            "unit": "ns",
            "range": "± 3639.184306578226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1274583.6182795698,
            "unit": "ns",
            "range": "± 164402.9263179636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498574.2934782607,
            "unit": "ns",
            "range": "± 247861.33175245338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1931644.4333333333,
            "unit": "ns",
            "range": "± 197750.91380683763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9992441.777777778,
            "unit": "ns",
            "range": "± 2686281.871258038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2930489.794871795,
            "unit": "ns",
            "range": "± 148541.28703985762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3052687.586956522,
            "unit": "ns",
            "range": "± 104285.3301669833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3614326.46875,
            "unit": "ns",
            "range": "± 109929.65020396787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3565737.0505050505,
            "unit": "ns",
            "range": "± 226568.35525718593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11519432.861702127,
            "unit": "ns",
            "range": "± 1161384.7309393801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4563579.195505401,
            "unit": "ns",
            "range": "± 228829.5639581203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1424000.8111866917,
            "unit": "ns",
            "range": "± 61683.447126246596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 873130.5401692708,
            "unit": "ns",
            "range": "± 15135.945181835066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2038040.2783037606,
            "unit": "ns",
            "range": "± 88709.80348264042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635670.2349609375,
            "unit": "ns",
            "range": "± 5083.627788838346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582936.796484375,
            "unit": "ns",
            "range": "± 5242.112899979847"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "78b5d09e264f6f619bed891b974f201ad1576f29",
          "message": "Cleanup",
          "timestamp": "2023-11-01T14:23:10+09:00",
          "tree_id": "8816ef358eef5a8d3cda81e02225b867ee9fd296",
          "url": "https://github.com/planetarium/libplanet/commit/78b5d09e264f6f619bed891b974f201ad1576f29"
        },
        "date": 1698817435116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8492618.378947368,
            "unit": "ns",
            "range": "± 823134.3393969095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19098678.67857143,
            "unit": "ns",
            "range": "± 541374.29163962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47528326.928571425,
            "unit": "ns",
            "range": "± 1717471.9817804447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96465148.35443038,
            "unit": "ns",
            "range": "± 4638718.442646404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213410845.15263158,
            "unit": "ns",
            "range": "± 21603130.314648237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39486.78723404255,
            "unit": "ns",
            "range": "± 7310.953661330021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271761.3409090909,
            "unit": "ns",
            "range": "± 28623.051336527347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278888.5804597701,
            "unit": "ns",
            "range": "± 31429.867328822824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267088.17346938775,
            "unit": "ns",
            "range": "± 26050.07324673618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4662628.531914894,
            "unit": "ns",
            "range": "± 320887.09402826126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4232623.177419355,
            "unit": "ns",
            "range": "± 254851.222762383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20911.68604651163,
            "unit": "ns",
            "range": "± 4254.455212961717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102358.69318181818,
            "unit": "ns",
            "range": "± 10034.100610702491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78410.32323232324,
            "unit": "ns",
            "range": "± 19595.971996466305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87350.39247311828,
            "unit": "ns",
            "range": "± 16349.250084159801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7776.684210526316,
            "unit": "ns",
            "range": "± 986.9112816963486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17502.5,
            "unit": "ns",
            "range": "± 4999.314980443241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1263292.1578947369,
            "unit": "ns",
            "range": "± 40716.56853308651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2368623.0108695654,
            "unit": "ns",
            "range": "± 161312.0505011637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1868660.5353535353,
            "unit": "ns",
            "range": "± 173744.28209756495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7766701.646341464,
            "unit": "ns",
            "range": "± 280085.38372276415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473947.8571428573,
            "unit": "ns",
            "range": "± 311766.56452352955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3825183.7333333334,
            "unit": "ns",
            "range": "± 543605.9056612188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221649.775510204,
            "unit": "ns",
            "range": "± 308785.79066256224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4107194.5757575757,
            "unit": "ns",
            "range": "± 329030.5785801025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13751153.844086021,
            "unit": "ns",
            "range": "± 1760647.4508357248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5584678.98107281,
            "unit": "ns",
            "range": "± 637646.7055851972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1690719.6801060268,
            "unit": "ns",
            "range": "± 176275.49314455962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082393.7716238839,
            "unit": "ns",
            "range": "± 84637.7856375866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547657.846480175,
            "unit": "ns",
            "range": "± 262437.61753948714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757104.4988064236,
            "unit": "ns",
            "range": "± 15128.21660582816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696728.4241687864,
            "unit": "ns",
            "range": "± 25290.218116562042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "f42967f66994459b2d3870cc6f446bf4cd8e9562",
          "message": "feat: Remove World.Create()",
          "timestamp": "2023-11-02T13:55:06+09:00",
          "tree_id": "4bb87aca1798e0e9e1609aade3bd5f56d0f361bf",
          "url": "https://github.com/planetarium/libplanet/commit/f42967f66994459b2d3870cc6f446bf4cd8e9562"
        },
        "date": 1698902365187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7540426.714285715,
            "unit": "ns",
            "range": "± 104851.01810695941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18325940.14285714,
            "unit": "ns",
            "range": "± 201210.59058860815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45908927.14705882,
            "unit": "ns",
            "range": "± 931692.5654001929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94444292.10344827,
            "unit": "ns",
            "range": "± 2631899.2537370822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185448607.7857143,
            "unit": "ns",
            "range": "± 2478712.2621570188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47587.510309278354,
            "unit": "ns",
            "range": "± 14260.996938397258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266862.0114942529,
            "unit": "ns",
            "range": "± 26326.027346500712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252897.37096774194,
            "unit": "ns",
            "range": "± 37328.67654953349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208133.48936170212,
            "unit": "ns",
            "range": "± 21342.208330424484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3717120.3571428573,
            "unit": "ns",
            "range": "± 60640.01977351152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3522116.294117647,
            "unit": "ns",
            "range": "± 113424.05270609276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13674.520408163266,
            "unit": "ns",
            "range": "± 2181.5415491131603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65412.586956521736,
            "unit": "ns",
            "range": "± 9042.163769237877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61361.84693877551,
            "unit": "ns",
            "range": "± 12824.666956429748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63991.989583333336,
            "unit": "ns",
            "range": "± 11307.513639397192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3887.3010752688174,
            "unit": "ns",
            "range": "± 962.1250233427616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12531.755555555555,
            "unit": "ns",
            "range": "± 1409.8429852101676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1159019.1170212766,
            "unit": "ns",
            "range": "± 92644.0675151098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2304421.2666666666,
            "unit": "ns",
            "range": "± 87253.27707531574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1796543.107142857,
            "unit": "ns",
            "range": "± 95065.6211528708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9368305.94736842,
            "unit": "ns",
            "range": "± 2012791.644514126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909975.21875,
            "unit": "ns",
            "range": "± 134045.18415740514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2989656.4727272727,
            "unit": "ns",
            "range": "± 125203.09755321767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3580198.220338983,
            "unit": "ns",
            "range": "± 157180.52997814087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3589016.3636363638,
            "unit": "ns",
            "range": "± 161748.71492847134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11849099.804347826,
            "unit": "ns",
            "range": "± 1431911.3595221674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4262293.1015625,
            "unit": "ns",
            "range": "± 67837.27723578669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1328279.071986607,
            "unit": "ns",
            "range": "± 11956.908602785154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 879767.8011067709,
            "unit": "ns",
            "range": "± 8831.48381713182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965648.9812011719,
            "unit": "ns",
            "range": "± 37920.366071251185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627008.6005859375,
            "unit": "ns",
            "range": "± 7537.798260074784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585497.8244357639,
            "unit": "ns",
            "range": "± 12060.72121682712"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "d9e17ac465ac98363c7b9ec417a4cd9ad80315da",
          "message": "Apply minor changes from reviews",
          "timestamp": "2023-11-07T13:46:20+09:00",
          "tree_id": "c6db034ac6e22c58710fd53c61d1a4965672c4b2",
          "url": "https://github.com/planetarium/libplanet/commit/d9e17ac465ac98363c7b9ec417a4cd9ad80315da"
        },
        "date": 1699333228253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7494297.769230769,
            "unit": "ns",
            "range": "± 82737.77753456384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18774615,
            "unit": "ns",
            "range": "± 223638.59353430034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47418201.571428575,
            "unit": "ns",
            "range": "± 1122386.6588199707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94202769.93333334,
            "unit": "ns",
            "range": "± 1604130.3203879874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190336397.5,
            "unit": "ns",
            "range": "± 3587150.4271044843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38392.479166666664,
            "unit": "ns",
            "range": "± 6436.325815211766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220763.38679245283,
            "unit": "ns",
            "range": "± 9132.612137196895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217721.38,
            "unit": "ns",
            "range": "± 10000.201041168311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199236.85789473684,
            "unit": "ns",
            "range": "± 16966.58441404926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3703044.0714285714,
            "unit": "ns",
            "range": "± 53186.105753164644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3443340.1428571427,
            "unit": "ns",
            "range": "± 50406.794160276484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12803.449438202248,
            "unit": "ns",
            "range": "± 939.9894947579801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62748.68817204301,
            "unit": "ns",
            "range": "± 6148.917186362967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53515.46,
            "unit": "ns",
            "range": "± 1989.8780724620553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63067.114583333336,
            "unit": "ns",
            "range": "± 10406.299429085495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4268.744897959184,
            "unit": "ns",
            "range": "± 1320.5398014606535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12893.329787234043,
            "unit": "ns",
            "range": "± 1722.7465779363347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1215899.4891304348,
            "unit": "ns",
            "range": "± 131259.96075027875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2443781.477272727,
            "unit": "ns",
            "range": "± 156003.60160070113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1951067.8,
            "unit": "ns",
            "range": "± 203957.04735555287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9618726.661290323,
            "unit": "ns",
            "range": "± 2180774.5816159607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2987828.786516854,
            "unit": "ns",
            "range": "± 161898.20971822162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3120216.7837837837,
            "unit": "ns",
            "range": "± 154764.1258322165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3902356.118556701,
            "unit": "ns",
            "range": "± 280123.5808960203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665019.159574468,
            "unit": "ns",
            "range": "± 207107.6709498337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11363856.44736842,
            "unit": "ns",
            "range": "± 1055579.6464682266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4398830.864583333,
            "unit": "ns",
            "range": "± 61275.64642792092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359955.9833984375,
            "unit": "ns",
            "range": "± 13119.786639744436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 886005.3461588542,
            "unit": "ns",
            "range": "± 8253.697766392253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2036184.3392857143,
            "unit": "ns",
            "range": "± 22006.24218736628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626112.4874348958,
            "unit": "ns",
            "range": "± 7599.050539645608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571710.7541155134,
            "unit": "ns",
            "range": "± 4679.539809935124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:45:26+09:00",
          "tree_id": "18021ed76e529c45a6fd98c79688e08bfe466b3d",
          "url": "https://github.com/planetarium/libplanet/commit/c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa"
        },
        "date": 1699516985843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8274883.546391753,
            "unit": "ns",
            "range": "± 586266.4429042342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19838938.272727273,
            "unit": "ns",
            "range": "± 478432.7778923878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50057170.38888889,
            "unit": "ns",
            "range": "± 1068088.9785348705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102176838.64583333,
            "unit": "ns",
            "range": "± 4013069.8944015945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203777237,
            "unit": "ns",
            "range": "± 4765687.629667665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54581.04081632653,
            "unit": "ns",
            "range": "± 16592.52528515545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272286.97872340423,
            "unit": "ns",
            "range": "± 29983.01869131306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261080.05681818182,
            "unit": "ns",
            "range": "± 21171.522765890502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261585.01136363635,
            "unit": "ns",
            "range": "± 30240.293606604788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4079029.6224489794,
            "unit": "ns",
            "range": "± 282995.9869627499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3611003.724137931,
            "unit": "ns",
            "range": "± 104020.61149767267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13198.436781609196,
            "unit": "ns",
            "range": "± 1184.0682697668203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64169.62222222222,
            "unit": "ns",
            "range": "± 6568.267036387785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76841.60824742269,
            "unit": "ns",
            "range": "± 21290.31619880107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93340.42708333333,
            "unit": "ns",
            "range": "± 22349.366388637827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10711.69,
            "unit": "ns",
            "range": "± 9242.094049406813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22820.132653061224,
            "unit": "ns",
            "range": "± 11183.845223916998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1214866.1326530613,
            "unit": "ns",
            "range": "± 94196.93545602726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2574367.4101123596,
            "unit": "ns",
            "range": "± 151187.91720455347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2043716.564516129,
            "unit": "ns",
            "range": "± 258697.60473533598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11726925.586956521,
            "unit": "ns",
            "range": "± 3784005.087373163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069596.375,
            "unit": "ns",
            "range": "± 106173.58972122807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3198085.902173913,
            "unit": "ns",
            "range": "± 200254.57825439962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3810441.986111111,
            "unit": "ns",
            "range": "± 177964.06905917384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3890458.087912088,
            "unit": "ns",
            "range": "± 256063.37767850663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12161422.98888889,
            "unit": "ns",
            "range": "± 1287058.1578161696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4745908.989728009,
            "unit": "ns",
            "range": "± 129691.94200582322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1468666.8466030944,
            "unit": "ns",
            "range": "± 58983.300863934266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 924451.1139573317,
            "unit": "ns",
            "range": "± 13788.61080561934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2184278.91994201,
            "unit": "ns",
            "range": "± 162971.5415191139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647226.1722248135,
            "unit": "ns",
            "range": "± 28562.093181740318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573793.5181790865,
            "unit": "ns",
            "range": "± 4027.341239779244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "65ba613e5fc2937db0193538231048050a3f5eef",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-13T17:18:15+09:00",
          "tree_id": "f2d8a37f6d2b37f89439d7fe097cb3432cd79296",
          "url": "https://github.com/planetarium/libplanet/commit/65ba613e5fc2937db0193538231048050a3f5eef"
        },
        "date": 1699864576803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9828827.27173913,
            "unit": "ns",
            "range": "± 1768389.0578721398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20446677.671875,
            "unit": "ns",
            "range": "± 939661.844407956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57430742.90449438,
            "unit": "ns",
            "range": "± 7682178.097561112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 181509562.48351648,
            "unit": "ns",
            "range": "± 50654047.66334122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229003776.48421052,
            "unit": "ns",
            "range": "± 27117479.940106235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59359.414893617024,
            "unit": "ns",
            "range": "± 15397.441268132257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300480.6458333333,
            "unit": "ns",
            "range": "± 83050.60581432191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245207.3023255814,
            "unit": "ns",
            "range": "± 20497.27653878739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287758.9375,
            "unit": "ns",
            "range": "± 72158.72680823524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4900313.05319149,
            "unit": "ns",
            "range": "± 1103058.2134329078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4431554.598901099,
            "unit": "ns",
            "range": "± 1115575.705424414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23863.6935483871,
            "unit": "ns",
            "range": "± 6798.89913125018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115450.32608695653,
            "unit": "ns",
            "range": "± 41120.5581615677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91367.29761904762,
            "unit": "ns",
            "range": "± 17898.502124701557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89702.03125,
            "unit": "ns",
            "range": "± 15212.602857985961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7129.757894736842,
            "unit": "ns",
            "range": "± 1564.6503226762327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19016.867346938776,
            "unit": "ns",
            "range": "± 3283.7184436661587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300543.4468085107,
            "unit": "ns",
            "range": "± 247500.20388975492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738908.584269663,
            "unit": "ns",
            "range": "± 376642.70064074016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2452157.9081632653,
            "unit": "ns",
            "range": "± 671137.2756019663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10550669.520618556,
            "unit": "ns",
            "range": "± 2693766.9131676387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3103941.625,
            "unit": "ns",
            "range": "± 170475.8500926503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3280081.8146067415,
            "unit": "ns",
            "range": "± 328080.7403872349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3806678.435897436,
            "unit": "ns",
            "range": "± 168529.3409017983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4941254.284090909,
            "unit": "ns",
            "range": "± 1322078.2771375917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14036012.97826087,
            "unit": "ns",
            "range": "± 3436515.2716109375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483374.102163462,
            "unit": "ns",
            "range": "± 56890.44745819098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389559.0299944195,
            "unit": "ns",
            "range": "± 38837.12697774748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 908927.7596153846,
            "unit": "ns",
            "range": "± 14692.452559605328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2123890.564453125,
            "unit": "ns",
            "range": "± 30842.197463730372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645234.9322415865,
            "unit": "ns",
            "range": "± 4594.604975861056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587171.4146050347,
            "unit": "ns",
            "range": "± 9515.150565201558"
          }
        ]
      }
    ]
  }
}