window.BENCHMARK_DATA = {
  "lastUpdate": 1792982537644,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1740886bc7424f7cb23088e6a65feb7968df6ba",
          "message": "Merge pull request #4037 from Atralupus/change-changed-files-action\n\nUse step-security/changed-files",
          "timestamp": "2025-03-16T13:44:44+09:00",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/a1740886bc7424f7cb23088e6a65feb7968df6ba"
        },
        "date": 1792982468800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21062.94680851064,
            "unit": "ns",
            "range": "± 1666.9485199333494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292656.7627604166,
            "unit": "ns",
            "range": "± 22682.604074438634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 742015.5209960938,
            "unit": "ns",
            "range": "± 3511.2689829658752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 568233.8641927083,
            "unit": "ns",
            "range": "± 4927.00217091624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1461943.0686197917,
            "unit": "ns",
            "range": "± 13319.721744980168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 353458.305859375,
            "unit": "ns",
            "range": "± 3331.9773929479506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 296304.9216471354,
            "unit": "ns",
            "range": "± 2750.75698099517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8854434.142857144,
            "unit": "ns",
            "range": "± 64877.40260837197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17927573.846153848,
            "unit": "ns",
            "range": "± 214363.68751355077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45673332.307692304,
            "unit": "ns",
            "range": "± 311373.4978182377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89712760.33333333,
            "unit": "ns",
            "range": "± 293468.1146663288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177733454.07692307,
            "unit": "ns",
            "range": "± 206019.20756386672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121898.50505050505,
            "unit": "ns",
            "range": "± 37533.920891879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 146063.975,
            "unit": "ns",
            "range": "± 21191.461750273174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 117838.02857142857,
            "unit": "ns",
            "range": "± 5677.3486641428235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2130619.037037037,
            "unit": "ns",
            "range": "± 47720.853701082444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2022903.8461538462,
            "unit": "ns",
            "range": "± 33598.140922889754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17079.45,
            "unit": "ns",
            "range": "± 7478.187250465871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67337.33,
            "unit": "ns",
            "range": "± 21939.222804229787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43528.47777777778,
            "unit": "ns",
            "range": "± 5038.573744216226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78042.49484536082,
            "unit": "ns",
            "range": "± 23961.64958633714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4465.683673469388,
            "unit": "ns",
            "range": "± 1762.5957696986459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15970.540816326531,
            "unit": "ns",
            "range": "± 7217.896487873531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2213319.41,
            "unit": "ns",
            "range": "± 751494.4990283296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2573368.36,
            "unit": "ns",
            "range": "± 1359799.2550034323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3744201.988888889,
            "unit": "ns",
            "range": "± 142368.70225733385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5586631.537313432,
            "unit": "ns",
            "range": "± 248167.89365463788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2044114.9473684211,
            "unit": "ns",
            "range": "± 44207.15855614549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536336.1666666665,
            "unit": "ns",
            "range": "± 42217.028742079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2349448.93,
            "unit": "ns",
            "range": "± 512342.4854788953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2709584.2352941176,
            "unit": "ns",
            "range": "± 53936.914467887174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2329101.1325301207,
            "unit": "ns",
            "range": "± 124045.44361386384"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yang@planetariumhq.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "yang@planetariumhq.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "d6c22d4f0338380cee55550b79495db01834441f",
          "message": "ci: donggeul/* 브랜치에서 시크릿 쓰는 job 건너뛰기\n\n동글이 옵스(봇) 작업 브랜치 push·PR 에서 저장소 시크릿을 받은 채 브랜치 코드가 실행되지 않게.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-26T11:34:35+09:00",
          "tree_id": "3a594703a97c28e9e89ab971a2d64063fc72db1d",
          "url": "https://github.com/planetarium/libplanet/commit/d6c22d4f0338380cee55550b79495db01834441f"
        },
        "date": 1792982519521,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15862.80612244898,
            "unit": "ns",
            "range": "± 3217.5924074015834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2512548.8924005684,
            "unit": "ns",
            "range": "± 59737.96481049539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 562480.7688337053,
            "unit": "ns",
            "range": "± 6594.321040739379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 441174.38850097655,
            "unit": "ns",
            "range": "± 10081.50634917076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1044939.8987630209,
            "unit": "ns",
            "range": "± 28813.718940700477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 263892.14896065847,
            "unit": "ns",
            "range": "± 2798.674456277784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 237445.10866001673,
            "unit": "ns",
            "range": "± 3708.857480796871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5842867.470588235,
            "unit": "ns",
            "range": "± 157714.70768759635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14044299.266666668,
            "unit": "ns",
            "range": "± 153846.18275382658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30288472.75,
            "unit": "ns",
            "range": "± 1039476.1119685329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 60910357.21052632,
            "unit": "ns",
            "range": "± 1311065.7557256648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 120725187.36842105,
            "unit": "ns",
            "range": "± 2629999.940980908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121126.4696969697,
            "unit": "ns",
            "range": "± 37066.21678488338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184739.07,
            "unit": "ns",
            "range": "± 71479.93065051988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91880.53409090909,
            "unit": "ns",
            "range": "± 9081.391201145878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1555622.62,
            "unit": "ns",
            "range": "± 62475.966387047665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1521931.3333333333,
            "unit": "ns",
            "range": "± 52776.784953658505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19580.353535353537,
            "unit": "ns",
            "range": "± 7669.4068981672735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79299.12,
            "unit": "ns",
            "range": "± 21421.353691948498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37663.34210526316,
            "unit": "ns",
            "range": "± 8904.43895435447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87569.68,
            "unit": "ns",
            "range": "± 40045.05273189943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4192.041666666667,
            "unit": "ns",
            "range": "± 1808.496711675294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19741.71,
            "unit": "ns",
            "range": "± 10860.634933440806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816215.38,
            "unit": "ns",
            "range": "± 147911.93426545092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2422014.111111111,
            "unit": "ns",
            "range": "± 1002848.0774282456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367910.73,
            "unit": "ns",
            "range": "± 706927.5790212214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7120511.49,
            "unit": "ns",
            "range": "± 3755006.2075014194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1632198.4242424243,
            "unit": "ns",
            "range": "± 75884.13909949231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1686703.0909090908,
            "unit": "ns",
            "range": "± 25937.45934598598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 1990606.7878787878,
            "unit": "ns",
            "range": "± 537368.0838684167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 1558311.9782608696,
            "unit": "ns",
            "range": "± 252751.03321828696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2302167.43,
            "unit": "ns",
            "range": "± 845492.2142684765"
          }
        ]
      }
    ]
  }
}