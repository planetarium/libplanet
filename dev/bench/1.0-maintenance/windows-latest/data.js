window.BENCHMARK_DATA = {
  "lastUpdate": 1684139965605,
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
          "id": "f47140d358633e56db4e1b3f5d6bfb0bfd09c3da",
          "message": "Merge pull request #3129 from limebell/refactor/append-index-last\n\nAppend index at last when appending new block",
          "timestamp": "2023-05-02T19:06:51+09:00",
          "tree_id": "d56012325562e1a076ddb8c3ac9c06c670ad82b7",
          "url": "https://github.com/planetarium/libplanet/commit/f47140d358633e56db4e1b3f5d6bfb0bfd09c3da"
        },
        "date": 1683023199700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1842396.907216495,
            "unit": "ns",
            "range": "± 227219.54207953825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3438197.8723404254,
            "unit": "ns",
            "range": "± 298634.80628069147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2792159.550561798,
            "unit": "ns",
            "range": "± 261897.22338730042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7341293.617021277,
            "unit": "ns",
            "range": "± 507470.6260493365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66779.78723404255,
            "unit": "ns",
            "range": "± 10317.295008786454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9284293.103448275,
            "unit": "ns",
            "range": "± 375866.82358836906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24182076.923076924,
            "unit": "ns",
            "range": "± 640180.2091959373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61021553.333333336,
            "unit": "ns",
            "range": "± 853122.6865937585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124923513.33333333,
            "unit": "ns",
            "range": "± 2229997.1107818144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242713226.31578946,
            "unit": "ns",
            "range": "± 5204258.27908071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6005355.7744565215,
            "unit": "ns",
            "range": "± 151217.2572587642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909827.0833333333,
            "unit": "ns",
            "range": "± 62536.9522865553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392999.5483398438,
            "unit": "ns",
            "range": "± 26738.01975849874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097247.446469907,
            "unit": "ns",
            "range": "± 129785.03591075177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960678.134765625,
            "unit": "ns",
            "range": "± 20161.45762715844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935868.6549136513,
            "unit": "ns",
            "range": "± 19147.185534727407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3933177.5,
            "unit": "ns",
            "range": "± 136866.47336748062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4174084.8484848486,
            "unit": "ns",
            "range": "± 131632.59028735085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5021060,
            "unit": "ns",
            "range": "± 200602.5769464366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4938816.4948453605,
            "unit": "ns",
            "range": "± 330627.66088419245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8740828.57142857,
            "unit": "ns",
            "range": "± 375250.34005885414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382193.75,
            "unit": "ns",
            "range": "± 19880.983495462075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314244.18604651163,
            "unit": "ns",
            "range": "± 19648.3234108943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286900,
            "unit": "ns",
            "range": "± 28289.000610759573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6396783.333333333,
            "unit": "ns",
            "range": "± 91327.51087391052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4665635.483870967,
            "unit": "ns",
            "range": "± 123569.00244637163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23966.326530612245,
            "unit": "ns",
            "range": "± 5078.232176319674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108348.9247311828,
            "unit": "ns",
            "range": "± 10950.238181086925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117505.10204081633,
            "unit": "ns",
            "range": "± 9263.912607187316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 229633.68421052632,
            "unit": "ns",
            "range": "± 25627.804923917403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12207.216494845361,
            "unit": "ns",
            "range": "± 5473.9201260515065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25370.408163265307,
            "unit": "ns",
            "range": "± 4851.59574521458"
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
          "id": "4f08d623370e0ae89247dba6f6ed692802e48ba6",
          "message": "Merge pull request #3130 from longfin/bugfix/key-not-found-in-cache\n\nFix index cache in RocksDBStore",
          "timestamp": "2023-05-03T11:50:11+09:00",
          "tree_id": "4373995501fd8c0f6a937898741153553203b57d",
          "url": "https://github.com/planetarium/libplanet/commit/4f08d623370e0ae89247dba6f6ed692802e48ba6"
        },
        "date": 1683083130704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416318.1818181819,
            "unit": "ns",
            "range": "± 125136.32106515561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637886,
            "unit": "ns",
            "range": "± 165146.45659308747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242927.3684210526,
            "unit": "ns",
            "range": "± 151148.24443635662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5659872,
            "unit": "ns",
            "range": "± 350033.31416632707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50288.82352941176,
            "unit": "ns",
            "range": "± 2715.436214963447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7007780.769230769,
            "unit": "ns",
            "range": "± 170350.97421319495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19466000,
            "unit": "ns",
            "range": "± 388421.0489275781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49176392.85714286,
            "unit": "ns",
            "range": "± 523408.41012655577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99556768.75,
            "unit": "ns",
            "range": "± 1885011.941507268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200462993.33333334,
            "unit": "ns",
            "range": "± 2762329.7448418597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824947.8125,
            "unit": "ns",
            "range": "± 17093.658692055036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1541001.8880208333,
            "unit": "ns",
            "range": "± 3412.6890557640677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182121.4127604167,
            "unit": "ns",
            "range": "± 6260.3073392655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636701.652644231,
            "unit": "ns",
            "range": "± 6578.662742987223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828230.0911458334,
            "unit": "ns",
            "range": "± 2874.5546263396177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769592.578125,
            "unit": "ns",
            "range": "± 1981.3573521700685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3164221.153846154,
            "unit": "ns",
            "range": "± 129313.4258024285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3563956.603773585,
            "unit": "ns",
            "range": "± 146201.56595687967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3935778.5714285714,
            "unit": "ns",
            "range": "± 53717.45424077625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4346292.857142857,
            "unit": "ns",
            "range": "± 65851.13122427346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6896731.578947368,
            "unit": "ns",
            "range": "± 153283.8980187184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312337.037037037,
            "unit": "ns",
            "range": "± 13060.559904440173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269382.60869565216,
            "unit": "ns",
            "range": "± 10153.823677103148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221450,
            "unit": "ns",
            "range": "± 10354.603444845196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5312976.923076923,
            "unit": "ns",
            "range": "± 49904.57817752719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3650626.923076923,
            "unit": "ns",
            "range": "± 44973.38386657442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20981.052631578947,
            "unit": "ns",
            "range": "± 2428.084558836455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92373.19587628866,
            "unit": "ns",
            "range": "± 7745.489486682954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89968.68686868687,
            "unit": "ns",
            "range": "± 9220.171392278404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 187465.306122449,
            "unit": "ns",
            "range": "± 17243.970122202893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7675.510204081633,
            "unit": "ns",
            "range": "± 1220.5340410064882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21018.75,
            "unit": "ns",
            "range": "± 2054.3311115274173"
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
          "id": "b36003492603c26f155fa47d9dbdc3193c7c7f31",
          "message": "Merge pull request #3131 from limebell/release/1.0.1\n\n🚀 Release 1.0.1",
          "timestamp": "2023-05-03T16:34:11+09:00",
          "tree_id": "43b642e8f0bfaea31d516d1859c1d3fef911ee2d",
          "url": "https://github.com/planetarium/libplanet/commit/b36003492603c26f155fa47d9dbdc3193c7c7f31"
        },
        "date": 1683100201797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299917.6056338027,
            "unit": "ns",
            "range": "± 63770.64433162666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2463772.727272727,
            "unit": "ns",
            "range": "± 101555.47919012225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2376131.0344827585,
            "unit": "ns",
            "range": "± 69601.26796591462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5551134,
            "unit": "ns",
            "range": "± 345472.63109011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47744.155844155845,
            "unit": "ns",
            "range": "± 2466.1654395828814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7239642.857142857,
            "unit": "ns",
            "range": "± 121332.07904999159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19420250,
            "unit": "ns",
            "range": "± 221942.48388680827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49404028.571428575,
            "unit": "ns",
            "range": "± 639878.7354209828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99286333.33333333,
            "unit": "ns",
            "range": "± 1132972.0162139086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199199713.33333334,
            "unit": "ns",
            "range": "± 1688424.2133111092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4743119.252232143,
            "unit": "ns",
            "range": "± 12624.29062179467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527319.9674479167,
            "unit": "ns",
            "range": "± 7468.613945985943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178790.3450520833,
            "unit": "ns",
            "range": "± 4103.145854876061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668681.7578125,
            "unit": "ns",
            "range": "± 8321.050211731146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844357.1549479166,
            "unit": "ns",
            "range": "± 3216.3515977657144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770718.0533854166,
            "unit": "ns",
            "range": "± 1755.3088642398568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212900,
            "unit": "ns",
            "range": "± 105078.14507036452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409820.588235294,
            "unit": "ns",
            "range": "± 110027.59372749036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975521.052631579,
            "unit": "ns",
            "range": "± 77155.41731500538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312796.296296297,
            "unit": "ns",
            "range": "± 109492.12293930091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6929100,
            "unit": "ns",
            "range": "± 230886.6165768075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315722.22222222225,
            "unit": "ns",
            "range": "± 6169.450881805165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257080.4347826087,
            "unit": "ns",
            "range": "± 9414.164731113488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216300,
            "unit": "ns",
            "range": "± 6144.3554135707245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5326778.571428572,
            "unit": "ns",
            "range": "± 93218.31429970787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3635333.3333333335,
            "unit": "ns",
            "range": "± 40099.22811274671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21025.531914893618,
            "unit": "ns",
            "range": "± 1794.252243101207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93734.44444444444,
            "unit": "ns",
            "range": "± 5891.679738184038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93948,
            "unit": "ns",
            "range": "± 11259.725134345425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 186755.10204081633,
            "unit": "ns",
            "range": "± 18751.599917714128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7257.142857142857,
            "unit": "ns",
            "range": "± 898.2227584020237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19905.208333333332,
            "unit": "ns",
            "range": "± 1907.2366227313591"
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
          "id": "eb6a9983e225ec891f4355d1d2d4bde9a741a15f",
          "message": "Merge pull request #3138 from dahlia/1.0-maintenance",
          "timestamp": "2023-05-04T20:59:12+09:00",
          "tree_id": "41225664d0ab53fbe1b2088f11311469843497ae",
          "url": "https://github.com/planetarium/libplanet/commit/eb6a9983e225ec891f4355d1d2d4bde9a741a15f"
        },
        "date": 1683202703937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579435.4166666667,
            "unit": "ns",
            "range": "± 116499.71220128596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041984.6938775512,
            "unit": "ns",
            "range": "± 206007.22805457594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2602394.7916666665,
            "unit": "ns",
            "range": "± 167666.5954677485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6627069.696969697,
            "unit": "ns",
            "range": "± 418661.1109322791"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56797.87234042553,
            "unit": "ns",
            "range": "± 5930.112307834295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8176781.25,
            "unit": "ns",
            "range": "± 252791.3004289915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22506676.19047619,
            "unit": "ns",
            "range": "± 511039.09038816387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56950478.37837838,
            "unit": "ns",
            "range": "± 1899230.7706213784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116188119.04761904,
            "unit": "ns",
            "range": "± 2684165.7768511707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235699123.07692307,
            "unit": "ns",
            "range": "± 6267529.05960923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5668839.285714285,
            "unit": "ns",
            "range": "± 38575.80449841663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835380.4166666667,
            "unit": "ns",
            "range": "± 20657.134807784594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378225.0375600962,
            "unit": "ns",
            "range": "± 11850.107417413727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131984.0625,
            "unit": "ns",
            "range": "± 38824.47257855629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985876.2920673077,
            "unit": "ns",
            "range": "± 6455.215529052076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909186.3211495535,
            "unit": "ns",
            "range": "± 8925.694423166176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673827.419354839,
            "unit": "ns",
            "range": "± 166381.25206624917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3796149.1228070175,
            "unit": "ns",
            "range": "± 164632.54877237437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4553615,
            "unit": "ns",
            "range": "± 102616.01021590919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4827015.384615385,
            "unit": "ns",
            "range": "± 224527.15817828226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8160174.074074074,
            "unit": "ns",
            "range": "± 343426.3960499302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367450.98039215687,
            "unit": "ns",
            "range": "± 14915.124840899181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297405.6818181818,
            "unit": "ns",
            "range": "± 16021.568493785024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262789.4117647059,
            "unit": "ns",
            "range": "± 14165.417509600218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6253020.689655173,
            "unit": "ns",
            "range": "± 178370.36184641684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4504157.142857143,
            "unit": "ns",
            "range": "± 128865.69215177721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25037.5,
            "unit": "ns",
            "range": "± 2994.5301010869453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107648.93617021276,
            "unit": "ns",
            "range": "± 7833.052999067765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102506.18556701031,
            "unit": "ns",
            "range": "± 12410.444311420637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 210142.70833333334,
            "unit": "ns",
            "range": "± 21367.790540617883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9081.443298969072,
            "unit": "ns",
            "range": "± 1433.8417143658749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23712.90322580645,
            "unit": "ns",
            "range": "± 2613.3530771310543"
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
          "id": "4ed25bf68772b17c51a97ff3ca90c1fcd45a98d9",
          "message": "Merge pull request #3160 from dahlia/1.0-maintenance",
          "timestamp": "2023-05-15T17:22:44+09:00",
          "tree_id": "3d948294e5e5f4d76c2209ee3f6504ff67c3c950",
          "url": "https://github.com/planetarium/libplanet/commit/4ed25bf68772b17c51a97ff3ca90c1fcd45a98d9"
        },
        "date": 1684139913947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363172.448979592,
            "unit": "ns",
            "range": "± 134383.74716146727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529642.6966292136,
            "unit": "ns",
            "range": "± 140203.14392114332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140118.3673469387,
            "unit": "ns",
            "range": "± 146670.81477439645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5513763,
            "unit": "ns",
            "range": "± 386414.80372310226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50046.153846153844,
            "unit": "ns",
            "range": "± 817.124413839354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6716157.142857143,
            "unit": "ns",
            "range": "± 52300.37085154168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19158193.103448275,
            "unit": "ns",
            "range": "± 552470.6811425992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47619847.058823526,
            "unit": "ns",
            "range": "± 927688.90132795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95002160,
            "unit": "ns",
            "range": "± 1403045.6864570428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190438500,
            "unit": "ns",
            "range": "± 2843824.1984040737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4738381.302083333,
            "unit": "ns",
            "range": "± 25545.319960499626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502734.5963541667,
            "unit": "ns",
            "range": "± 7218.447874133318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173383.0859375,
            "unit": "ns",
            "range": "± 6355.9228905573145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598174.3359375,
            "unit": "ns",
            "range": "± 10060.815832702245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830433.3984375,
            "unit": "ns",
            "range": "± 2608.2805887051973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773262.91015625,
            "unit": "ns",
            "range": "± 2650.4446932053283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001802.9411764704,
            "unit": "ns",
            "range": "± 141666.35279278012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260790.1639344264,
            "unit": "ns",
            "range": "± 127512.44083737873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3810440,
            "unit": "ns",
            "range": "± 56598.41996785019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4068371.9298245613,
            "unit": "ns",
            "range": "± 170142.78851514473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6683560,
            "unit": "ns",
            "range": "± 143221.37875796802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310600,
            "unit": "ns",
            "range": "± 9378.26021743278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264630.76923076925,
            "unit": "ns",
            "range": "± 10915.531989434505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216227.08333333334,
            "unit": "ns",
            "range": "± 8530.165237064943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5182484.615384615,
            "unit": "ns",
            "range": "± 54159.46894978824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3625380,
            "unit": "ns",
            "range": "± 58047.20000630029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20246.39175257732,
            "unit": "ns",
            "range": "± 1902.7973845362355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85251.57894736843,
            "unit": "ns",
            "range": "± 5938.4764712468195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81143.93939393939,
            "unit": "ns",
            "range": "± 8367.195640968877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177157.14285714287,
            "unit": "ns",
            "range": "± 19733.936440119607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6870.833333333333,
            "unit": "ns",
            "range": "± 1138.9669064705474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19219.791666666668,
            "unit": "ns",
            "range": "± 1821.5447343664785"
          }
        ]
      }
    ]
  }
}