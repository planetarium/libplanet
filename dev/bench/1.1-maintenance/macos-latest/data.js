window.BENCHMARK_DATA = {
  "lastUpdate": 1683723923264,
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611887934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7909328.888888889,
            "unit": "ns",
            "range": "± 161246.71556012577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19144315.766666666,
            "unit": "ns",
            "range": "± 350791.6587633232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48145209.5882353,
            "unit": "ns",
            "range": "± 1540995.341039864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98126095,
            "unit": "ns",
            "range": "± 1649437.3154126573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189669333.42307693,
            "unit": "ns",
            "range": "± 2260066.3981182226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60089.03157894737,
            "unit": "ns",
            "range": "± 10325.733727422496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327602.74647887325,
            "unit": "ns",
            "range": "± 15997.388293734799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313560.61904761905,
            "unit": "ns",
            "range": "± 16781.599677762933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296297.1979166667,
            "unit": "ns",
            "range": "± 25498.031509002823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4156957.214285714,
            "unit": "ns",
            "range": "± 73210.09774344243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3640517.94,
            "unit": "ns",
            "range": "± 94768.8174172989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19337.6935483871,
            "unit": "ns",
            "range": "± 2431.5729443861983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94683.18556701031,
            "unit": "ns",
            "range": "± 11708.548545765163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102038.89795918367,
            "unit": "ns",
            "range": "± 16857.275985133685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114826.15979381443,
            "unit": "ns",
            "range": "± 15197.939537487882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7441.916666666667,
            "unit": "ns",
            "range": "± 1725.8264026053791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19066.2,
            "unit": "ns",
            "range": "± 2813.3100918728646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601378.3265306123,
            "unit": "ns",
            "range": "± 191413.9400386344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2918346.13559322,
            "unit": "ns",
            "range": "± 129131.81314194472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582999.6515151514,
            "unit": "ns",
            "range": "± 262633.95707207004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6517741.734375,
            "unit": "ns",
            "range": "± 299995.78724747075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047079.6981132077,
            "unit": "ns",
            "range": "± 120453.9588423383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3206011.104477612,
            "unit": "ns",
            "range": "± 139675.14530164047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4354779.5,
            "unit": "ns",
            "range": "± 143540.62912081723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4258164.369565218,
            "unit": "ns",
            "range": "± 301130.4522990111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485013.448717949,
            "unit": "ns",
            "range": "± 258688.55399220166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6384506.015625,
            "unit": "ns",
            "range": "± 74519.42717881105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850208.910435268,
            "unit": "ns",
            "range": "± 11073.23214952532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271649.5946614584,
            "unit": "ns",
            "range": "± 12601.784786316344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513245.834375,
            "unit": "ns",
            "range": "± 43423.09718523568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831938.8423177083,
            "unit": "ns",
            "range": "± 14174.842378080466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698977.3537760417,
            "unit": "ns",
            "range": "± 6642.30492570394"
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
          "id": "0e4d11b8e915b48326879374fbfe549e802d93a9",
          "message": "Merge pull request #3143 from greymistcube/prepare/1.1.1\n\n🔧 Prepare 1.1.1",
          "timestamp": "2023-05-10T21:43:19+09:00",
          "tree_id": "9ff5ffbfabad77d319356ce49de1521fd6203f2d",
          "url": "https://github.com/planetarium/libplanet/commit/0e4d11b8e915b48326879374fbfe549e802d93a9"
        },
        "date": 1683723881366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8580110.444444444,
            "unit": "ns",
            "range": "± 175921.4885939588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20089025.093333334,
            "unit": "ns",
            "range": "± 983843.1317325038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52185379.836842105,
            "unit": "ns",
            "range": "± 2976839.5960247214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109078114.04,
            "unit": "ns",
            "range": "± 4391935.902653022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241392943.08490565,
            "unit": "ns",
            "range": "± 9988266.88579221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68260.01086956522,
            "unit": "ns",
            "range": "± 10589.764052715635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350423.89361702127,
            "unit": "ns",
            "range": "± 37880.95954504158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359493.532967033,
            "unit": "ns",
            "range": "± 50311.00504361746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315880.3333333333,
            "unit": "ns",
            "range": "± 6734.07011135954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345416.521739131,
            "unit": "ns",
            "range": "± 109345.78873458339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3803279.15,
            "unit": "ns",
            "range": "± 85402.75934052902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17402.125,
            "unit": "ns",
            "range": "± 2017.6310013871766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91543.0947368421,
            "unit": "ns",
            "range": "± 12078.86771242792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105035.3350515464,
            "unit": "ns",
            "range": "± 17573.236899876334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130765.7947368421,
            "unit": "ns",
            "range": "± 21320.2088892773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7871.489361702128,
            "unit": "ns",
            "range": "± 1298.0560030223594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20298.005154639177,
            "unit": "ns",
            "range": "± 4879.594798588369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619107.1649484537,
            "unit": "ns",
            "range": "± 212228.03086753178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2870432.559322034,
            "unit": "ns",
            "range": "± 126322.20045189741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578659.3958333335,
            "unit": "ns",
            "range": "± 248242.1281717331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6617505.201030928,
            "unit": "ns",
            "range": "± 488995.74299118755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3334000.1458333335,
            "unit": "ns",
            "range": "± 269843.9000415642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3844033.8021978023,
            "unit": "ns",
            "range": "± 509733.61844462383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4800749.489473684,
            "unit": "ns",
            "range": "± 386580.7545788803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4704430.903225807,
            "unit": "ns",
            "range": "± 323647.97075959825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7953642.870967742,
            "unit": "ns",
            "range": "± 357349.96252162167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7010971.510841837,
            "unit": "ns",
            "range": "± 421466.1195490325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2031285.2103207237,
            "unit": "ns",
            "range": "± 41638.855816432246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391712.0971679688,
            "unit": "ns",
            "range": "± 20265.528276072982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3159935.726016465,
            "unit": "ns",
            "range": "± 181673.7211405871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993081.3371582031,
            "unit": "ns",
            "range": "± 58988.48089072618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840887.5665564904,
            "unit": "ns",
            "range": "± 46764.26129315155"
          }
        ]
      }
    ]
  }
}