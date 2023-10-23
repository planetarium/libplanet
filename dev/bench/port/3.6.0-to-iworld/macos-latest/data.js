window.BENCHMARK_DATA = {
  "lastUpdate": 1698038105340,
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
      }
    ]
  }
}