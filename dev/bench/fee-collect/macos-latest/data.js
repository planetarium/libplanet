window.BENCHMARK_DATA = {
  "lastUpdate": 1684144499842,
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
          "id": "504188a71083bab92fecacb7191512bf3d7b5793",
          "message": "Merge pull request #3158 from greymistcube/feature/exposed-polymorphic-action-api-for-testing\n\n🔧 Added `ReloadLoader()` method",
          "timestamp": "2023-05-15T15:26:16+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/planetarium/libplanet/commit/504188a71083bab92fecacb7191512bf3d7b5793"
        },
        "date": 1684140201776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10005697.311111111,
            "unit": "ns",
            "range": "± 1468780.0242893542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23311036.085106384,
            "unit": "ns",
            "range": "± 1791912.6827086953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58935919.145833336,
            "unit": "ns",
            "range": "± 3918906.566666916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117229838.29787233,
            "unit": "ns",
            "range": "± 7180234.96948319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245351430.19191918,
            "unit": "ns",
            "range": "± 17518617.638168428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74655.625,
            "unit": "ns",
            "range": "± 7456.819462072454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362643.6145833333,
            "unit": "ns",
            "range": "± 46550.922394472545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373295.3548387097,
            "unit": "ns",
            "range": "± 86964.98208707532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363096.8092783505,
            "unit": "ns",
            "range": "± 63261.41434726108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4575173.536842105,
            "unit": "ns",
            "range": "± 407279.7382184297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3789734.6086956523,
            "unit": "ns",
            "range": "± 125927.9830969499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25037.8,
            "unit": "ns",
            "range": "± 7547.6676834353575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108708.41052631578,
            "unit": "ns",
            "range": "± 18438.718282574395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118034.48936170213,
            "unit": "ns",
            "range": "± 14118.114171254383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120518.38541666667,
            "unit": "ns",
            "range": "± 20909.343799197726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8051.531578947369,
            "unit": "ns",
            "range": "± 1857.8832353012497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19248.666666666668,
            "unit": "ns",
            "range": "± 3585.0273541250085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1621833.101010101,
            "unit": "ns",
            "range": "± 215716.28915003882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012787.889473684,
            "unit": "ns",
            "range": "± 198183.73176726126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2435097,
            "unit": "ns",
            "range": "± 202133.85567085823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6524080.269230769,
            "unit": "ns",
            "range": "± 362268.1972101479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3936368.340659341,
            "unit": "ns",
            "range": "± 460957.4113642464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3916285.277777778,
            "unit": "ns",
            "range": "± 415851.7725431791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4534097.8965517245,
            "unit": "ns",
            "range": "± 250173.55817828194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4333228.260869565,
            "unit": "ns",
            "range": "± 456434.5958735489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7557123.977777778,
            "unit": "ns",
            "range": "± 283108.3074904605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7505098.067155934,
            "unit": "ns",
            "range": "± 477611.49813519616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2231554.9168379935,
            "unit": "ns",
            "range": "± 73630.53579012625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1453932.0392400569,
            "unit": "ns",
            "range": "± 45126.41686986478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3346712.765664457,
            "unit": "ns",
            "range": "± 296138.38753721263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061555.6120137966,
            "unit": "ns",
            "range": "± 68264.4319645296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858517.1063639323,
            "unit": "ns",
            "range": "± 52006.76336467863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f",
          "message": "Merge pull request #3156 from riemannulus/introduce/transaction/fee-and-gas-field\n\nIntroduce: Fee and Gas field on `ITxInvoice`",
          "timestamp": "2023-05-15T18:32:46+09:00",
          "tree_id": "12d5306695a10248ae95f0cdf41fe25b6cec0366",
          "url": "https://github.com/planetarium/libplanet/commit/46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f"
        },
        "date": 1684144436547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9694931.1125,
            "unit": "ns",
            "range": "± 507367.42100672226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22457476.3,
            "unit": "ns",
            "range": "± 515569.3476264959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57204155.61111111,
            "unit": "ns",
            "range": "± 1154729.2825646286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110997492.30612245,
            "unit": "ns",
            "range": "± 4430021.543966445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231382530.98863637,
            "unit": "ns",
            "range": "± 13247780.855496336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85788.82608695653,
            "unit": "ns",
            "range": "± 8949.57347453024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368257.5,
            "unit": "ns",
            "range": "± 39155.05081703011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388357.66842105263,
            "unit": "ns",
            "range": "± 64512.32907362164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352955.60638297873,
            "unit": "ns",
            "range": "± 35315.48533886719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4464303.2,
            "unit": "ns",
            "range": "± 286606.12315906317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4061789.51010101,
            "unit": "ns",
            "range": "± 273723.67585233133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25568.02808988764,
            "unit": "ns",
            "range": "± 3591.3203291531026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122603.39690721649,
            "unit": "ns",
            "range": "± 18755.678535382143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122634.51190476191,
            "unit": "ns",
            "range": "± 9437.807720340652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138143.38144329897,
            "unit": "ns",
            "range": "± 24143.78726696723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9087.115789473684,
            "unit": "ns",
            "range": "± 1276.099074583277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22057.074468085106,
            "unit": "ns",
            "range": "± 3952.345835313726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580656.969387755,
            "unit": "ns",
            "range": "± 138578.11167486082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3057728.5,
            "unit": "ns",
            "range": "± 130506.61760232697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504286.422222222,
            "unit": "ns",
            "range": "± 154056.791324978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6633984.079365079,
            "unit": "ns",
            "range": "± 302564.07181483234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501757.0714285714,
            "unit": "ns",
            "range": "± 241044.6273739265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3936614.0894736843,
            "unit": "ns",
            "range": "± 408440.63754665887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4899853.459183673,
            "unit": "ns",
            "range": "± 470151.32869284524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4611662.73255814,
            "unit": "ns",
            "range": "± 250523.7745860448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8561203.54736842,
            "unit": "ns",
            "range": "± 681181.101446438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7104193.229959239,
            "unit": "ns",
            "range": "± 267258.5028546726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2116906.6983506945,
            "unit": "ns",
            "range": "± 58226.18295192207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389792.0453559028,
            "unit": "ns",
            "range": "± 29487.356942022772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3265554.353671875,
            "unit": "ns",
            "range": "± 241168.7376300984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982069.4865131578,
            "unit": "ns",
            "range": "± 59007.782686527265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799558.4462545955,
            "unit": "ns",
            "range": "± 43070.83713452677"
          }
        ]
      }
    ]
  }
}