window.BENCHMARK_DATA = {
  "lastUpdate": 1683022370414,
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801184041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356557.731958763,
            "unit": "ns",
            "range": "± 98375.64997143555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479834.4827586208,
            "unit": "ns",
            "range": "± 72576.05506276093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2218845.4545454546,
            "unit": "ns",
            "range": "± 161730.6069961159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310565.957446809,
            "unit": "ns",
            "range": "± 205104.2738797446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44722.916666666664,
            "unit": "ns",
            "range": "± 3255.8766033344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7005043.333333333,
            "unit": "ns",
            "range": "± 45035.406176960474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17722307.692307692,
            "unit": "ns",
            "range": "± 35850.41751357208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46220020,
            "unit": "ns",
            "range": "± 195774.82765375415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92114906.66666667,
            "unit": "ns",
            "range": "± 397039.4843025541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182818992.85714287,
            "unit": "ns",
            "range": "± 304072.32809692784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4772974.789663462,
            "unit": "ns",
            "range": "± 3357.1082795094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516768.036358173,
            "unit": "ns",
            "range": "± 1317.5221175452841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135425.458233173,
            "unit": "ns",
            "range": "± 925.4972576612303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585184.0625,
            "unit": "ns",
            "range": "± 14070.122755888007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819433.0217633928,
            "unit": "ns",
            "range": "± 3946.6183246507767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739183.4407552084,
            "unit": "ns",
            "range": "± 652.7820570372926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3099380,
            "unit": "ns",
            "range": "± 36032.05319077525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3254348.484848485,
            "unit": "ns",
            "range": "± 90620.8623924843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4134200,
            "unit": "ns",
            "range": "± 63346.26150100609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141912.5,
            "unit": "ns",
            "range": "± 146603.16606841085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6865910,
            "unit": "ns",
            "range": "± 197164.86073929307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313750,
            "unit": "ns",
            "range": "± 8929.638753939716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258967.9245283019,
            "unit": "ns",
            "range": "± 10666.983092790893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245252.5,
            "unit": "ns",
            "range": "± 8646.919934807675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5336957.142857143,
            "unit": "ns",
            "range": "± 50527.53574173065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3623388.4615384615,
            "unit": "ns",
            "range": "± 26116.58280548773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19438.775510204083,
            "unit": "ns",
            "range": "± 1975.240173472386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84003.40909090909,
            "unit": "ns",
            "range": "± 4468.020438104409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88014,
            "unit": "ns",
            "range": "± 9066.744874885508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175728.125,
            "unit": "ns",
            "range": "± 15844.133585619233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7255.31914893617,
            "unit": "ns",
            "range": "± 926.3893397900732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20001.041666666668,
            "unit": "ns",
            "range": "± 1642.6547698717634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "796b0894b2912da9b4a59a4a400736175a076266",
          "message": "Version bump",
          "timestamp": "2023-04-18T15:46:02+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/planetarium/libplanet/commit/796b0894b2912da9b4a59a4a400736175a076266"
        },
        "date": 1681801400670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312113.4020618557,
            "unit": "ns",
            "range": "± 120310.7275876944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563481.6326530613,
            "unit": "ns",
            "range": "± 151325.83289180914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160829.8969072164,
            "unit": "ns",
            "range": "± 155672.2820843976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5065561.224489796,
            "unit": "ns",
            "range": "± 202191.0934161115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46626.50602409639,
            "unit": "ns",
            "range": "± 2499.906551294902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6721615.384615385,
            "unit": "ns",
            "range": "± 28931.293500114087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18273175,
            "unit": "ns",
            "range": "± 331632.77984340856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45467760,
            "unit": "ns",
            "range": "± 828952.8573533514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91644806.66666667,
            "unit": "ns",
            "range": "± 1530377.806045976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181696545,
            "unit": "ns",
            "range": "± 4032762.2286878726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4816303.794642857,
            "unit": "ns",
            "range": "± 12237.319464117709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543856.4034598214,
            "unit": "ns",
            "range": "± 3521.689447719262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142937.34375,
            "unit": "ns",
            "range": "± 12311.5613376144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659177.3958333335,
            "unit": "ns",
            "range": "± 14656.397744019627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835984.9984975961,
            "unit": "ns",
            "range": "± 2155.226624211677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777155.2315848215,
            "unit": "ns",
            "range": "± 2308.0105411325076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2925106.0606060605,
            "unit": "ns",
            "range": "± 129157.62210306965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256918.1818181816,
            "unit": "ns",
            "range": "± 78394.39749396355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3792200,
            "unit": "ns",
            "range": "± 95328.99968959174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3889686.8852459015,
            "unit": "ns",
            "range": "± 167892.4739979032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6525074.074074074,
            "unit": "ns",
            "range": "± 181596.67396266374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295037.5,
            "unit": "ns",
            "range": "± 6312.156146467806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248016.2162162162,
            "unit": "ns",
            "range": "± 7432.455610119472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211964.2857142857,
            "unit": "ns",
            "range": "± 2933.5216805998643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5127684.615384615,
            "unit": "ns",
            "range": "± 56530.107703091075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658246.6666666665,
            "unit": "ns",
            "range": "± 58329.34653042726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19838.775510204083,
            "unit": "ns",
            "range": "± 2120.0385453148892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94519,
            "unit": "ns",
            "range": "± 9113.955277928502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84310.41666666667,
            "unit": "ns",
            "range": "± 7712.525412963905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185021.05263157896,
            "unit": "ns",
            "range": "± 22280.641796864362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7178.350515463918,
            "unit": "ns",
            "range": "± 1174.842791267172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21259.79381443299,
            "unit": "ns",
            "range": "± 2172.5877328763218"
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
          "id": "7bf8a0695ce9422632af9828a170541ef06ceabb",
          "message": "Merge pull request #3125 from limebell/bugfix/update-txexecution\n\nUpdate txexecution",
          "timestamp": "2023-05-02T16:21:36+09:00",
          "tree_id": "8c8ab7108b72b7412ea85d30fed2371a53078f35",
          "url": "https://github.com/planetarium/libplanet/commit/7bf8a0695ce9422632af9828a170541ef06ceabb"
        },
        "date": 1683013392552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595906.25,
            "unit": "ns",
            "range": "± 137447.01471935707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2939868.4210526315,
            "unit": "ns",
            "range": "± 217798.6139216772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2469528.2608695654,
            "unit": "ns",
            "range": "± 154166.63121946194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6546708.333333333,
            "unit": "ns",
            "range": "± 600392.9577529188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55882.22222222222,
            "unit": "ns",
            "range": "± 5117.245084362602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8123181.481481481,
            "unit": "ns",
            "range": "± 321463.62103758176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22171781.15942029,
            "unit": "ns",
            "range": "± 1058649.1606642432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54291539.09090909,
            "unit": "ns",
            "range": "± 2292668.092118772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111460451.0638298,
            "unit": "ns",
            "range": "± 4329552.53561383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221222031.25,
            "unit": "ns",
            "range": "± 8149790.475342377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5572530.326704546,
            "unit": "ns",
            "range": "± 121455.30376487628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825233.1510416667,
            "unit": "ns",
            "range": "± 30229.15791445915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381646.3120404412,
            "unit": "ns",
            "range": "± 28204.925475739954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161208.6197916665,
            "unit": "ns",
            "range": "± 45540.52178607585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978652.1205357143,
            "unit": "ns",
            "range": "± 16302.380604438247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905607.2509765625,
            "unit": "ns",
            "range": "± 17259.655126973303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422461.6666666665,
            "unit": "ns",
            "range": "± 150612.09473983457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3688825.757575758,
            "unit": "ns",
            "range": "± 168387.58798640352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439460.784313725,
            "unit": "ns",
            "range": "± 179436.44900457805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5009454.761904762,
            "unit": "ns",
            "range": "± 266658.9312955815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7988432.307692308,
            "unit": "ns",
            "range": "± 370485.12331287184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350061.84210526315,
            "unit": "ns",
            "range": "± 17793.137007324018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287341.57303370786,
            "unit": "ns",
            "range": "± 18690.370691571516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244635.86956521738,
            "unit": "ns",
            "range": "± 17060.45218937284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5986375.675675675,
            "unit": "ns",
            "range": "± 297959.25197680696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4293026.470588235,
            "unit": "ns",
            "range": "± 134644.45280818015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20953.191489361703,
            "unit": "ns",
            "range": "± 2834.7954024391656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96683.15789473684,
            "unit": "ns",
            "range": "± 8184.243458343742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87120.21276595745,
            "unit": "ns",
            "range": "± 7471.157152781334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 196051.08695652173,
            "unit": "ns",
            "range": "± 24304.50821729712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6831.914893617021,
            "unit": "ns",
            "range": "± 1031.333072609191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20543.157894736843,
            "unit": "ns",
            "range": "± 2058.9014128888057"
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
          "id": "7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b",
          "message": "Merge pull request #3128 from planetarium/test/append\n\nAdd regression test for appending hotfix",
          "timestamp": "2023-05-02T18:51:32+09:00",
          "tree_id": "80e52a1d741b1034963b30010e8348315e3c6ef1",
          "url": "https://github.com/planetarium/libplanet/commit/7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b"
        },
        "date": 1683022304056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1736345.652173913,
            "unit": "ns",
            "range": "± 188842.819932952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3387423.1578947366,
            "unit": "ns",
            "range": "± 260124.30803025592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2697493,
            "unit": "ns",
            "range": "± 246164.88776977733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7350865.625,
            "unit": "ns",
            "range": "± 502762.78718133277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60009.67741935484,
            "unit": "ns",
            "range": "± 10672.486614982685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9408215.217391305,
            "unit": "ns",
            "range": "± 527804.6279262734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26096523.529411763,
            "unit": "ns",
            "range": "± 515564.0788609741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65594430.76923077,
            "unit": "ns",
            "range": "± 1020990.9641981946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132743653.33333333,
            "unit": "ns",
            "range": "± 2382654.820593037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261925892.85714287,
            "unit": "ns",
            "range": "± 3457443.221952022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6180768.723958333,
            "unit": "ns",
            "range": "± 64855.667543148826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955052.734375,
            "unit": "ns",
            "range": "± 33538.598637828974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472807.8125,
            "unit": "ns",
            "range": "± 15758.301056106464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318457.2916666665,
            "unit": "ns",
            "range": "± 48587.231714353664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063627.9557291667,
            "unit": "ns",
            "range": "± 11247.442382210123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976370.3385416666,
            "unit": "ns",
            "range": "± 17983.421474961164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4031003.092783505,
            "unit": "ns",
            "range": "± 263493.62755324534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4228291.935483871,
            "unit": "ns",
            "range": "± 246374.9322557781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5230908.461538462,
            "unit": "ns",
            "range": "± 242059.8143359326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5299969.47368421,
            "unit": "ns",
            "range": "± 462015.9394583154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9397732.291666666,
            "unit": "ns",
            "range": "± 564548.7452721662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402368.13186813187,
            "unit": "ns",
            "range": "± 32710.35812542457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349205.2631578947,
            "unit": "ns",
            "range": "± 30654.572976065167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298231.91489361704,
            "unit": "ns",
            "range": "± 38541.70262786849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6742014.583333333,
            "unit": "ns",
            "range": "± 418306.8085758075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4933270.833333333,
            "unit": "ns",
            "range": "± 296214.791882216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26150,
            "unit": "ns",
            "range": "± 6147.365717375036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111823.95833333333,
            "unit": "ns",
            "range": "± 16723.684716068296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99816.16161616161,
            "unit": "ns",
            "range": "± 18195.540533893258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221102.1739130435,
            "unit": "ns",
            "range": "± 30175.686953808643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6679.787234042553,
            "unit": "ns",
            "range": "± 1229.0025492535958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20990.449438202246,
            "unit": "ns",
            "range": "± 4923.753167072387"
          }
        ]
      }
    ]
  }
}