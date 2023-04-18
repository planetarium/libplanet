window.BENCHMARK_DATA = {
  "lastUpdate": 1681801450580,
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
      }
    ]
  }
}