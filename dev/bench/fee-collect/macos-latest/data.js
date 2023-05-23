window.BENCHMARK_DATA = {
  "lastUpdate": 1684817888957,
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
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f993944ff20a46e8bbf34dfcf036165c0443cafb",
          "message": "temp",
          "timestamp": "2023-05-15T22:08:38+09:00",
          "tree_id": "95b2bce846a55c64a89e430edd5bb15ba5de6df9",
          "url": "https://github.com/planetarium/libplanet/commit/f993944ff20a46e8bbf34dfcf036165c0443cafb"
        },
        "date": 1684157351727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8515339,
            "unit": "ns",
            "range": "± 227520.72189921516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22033011.03448276,
            "unit": "ns",
            "range": "± 585492.5606403358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53515443.71428572,
            "unit": "ns",
            "range": "± 814785.2743067604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103969880.36666666,
            "unit": "ns",
            "range": "± 784773.7011113338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220052840.6818182,
            "unit": "ns",
            "range": "± 6773186.1436863225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81277.95454545454,
            "unit": "ns",
            "range": "± 6348.8983348983975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357407.0813953488,
            "unit": "ns",
            "range": "± 23870.03250113124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355581.6647058824,
            "unit": "ns",
            "range": "± 30773.681014575344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 362072.652173913,
            "unit": "ns",
            "range": "± 41140.58738861036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4665238.531914894,
            "unit": "ns",
            "range": "± 407144.9131649315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4365373.521505376,
            "unit": "ns",
            "range": "± 389762.2892920978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27293.011627906977,
            "unit": "ns",
            "range": "± 4335.56737787553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132559.94382022473,
            "unit": "ns",
            "range": "± 19397.483118341755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124433.67469879518,
            "unit": "ns",
            "range": "± 6668.016851684768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144772.3791208791,
            "unit": "ns",
            "range": "± 25751.99638683277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9758.172043010753,
            "unit": "ns",
            "range": "± 1420.0512285895204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28028.393617021276,
            "unit": "ns",
            "range": "± 4792.394492571741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703053.542105263,
            "unit": "ns",
            "range": "± 171511.3069125452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3206604.534883721,
            "unit": "ns",
            "range": "± 243216.96148571925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641154.7021276597,
            "unit": "ns",
            "range": "± 228092.72513964737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6593365.8,
            "unit": "ns",
            "range": "± 233874.6915068968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415741.3684210526,
            "unit": "ns",
            "range": "± 108926.43372811515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3537819.785714286,
            "unit": "ns",
            "range": "± 150621.25340767385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558145.77027027,
            "unit": "ns",
            "range": "± 153737.29890640083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4951383.41011236,
            "unit": "ns",
            "range": "± 507166.35620243073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771659.03125,
            "unit": "ns",
            "range": "± 920065.6812539545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7703568.127485796,
            "unit": "ns",
            "range": "± 275500.8214792709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2230135.108173077,
            "unit": "ns",
            "range": "± 91228.88197444419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434304.2975260417,
            "unit": "ns",
            "range": "± 18403.49276086391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116716.0918518924,
            "unit": "ns",
            "range": "± 150177.43908454926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947486.85390625,
            "unit": "ns",
            "range": "± 24503.116082704844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808834.0412946428,
            "unit": "ns",
            "range": "± 13937.334346742036"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c6244e68eb6a975411eef63d837338b8b5188fa6",
          "message": "feat(tx): Add support for gas limit and max gas price in transaction metadata\n\nThis commit adds support for encoding and decoding the `gasLimit` and `maxGasPrice` fields in transaction metadata. The `gasLimit` field is represented using a `bigint` while the `maxGasPrice` field is represented by a `FungibleAssetValue` object.\n\nAdditionally, some helper functions have been added to the `assets.ts` file to support encoding a `FungibleAssetValue` object.\n\nNo breaking changes have been introduced.",
          "timestamp": "2023-05-15T22:32:41+09:00",
          "tree_id": "cfab06bf6dbf36305a29a343e53397c9a4d43499",
          "url": "https://github.com/planetarium/libplanet/commit/c6244e68eb6a975411eef63d837338b8b5188fa6"
        },
        "date": 1684159331095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8442245.76923077,
            "unit": "ns",
            "range": "± 222916.65661198273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21928481.913793102,
            "unit": "ns",
            "range": "± 1196279.3258276044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53289927.176470585,
            "unit": "ns",
            "range": "± 1710610.540572832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106612580.3918919,
            "unit": "ns",
            "range": "± 3575714.5546269785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215124375.22857141,
            "unit": "ns",
            "range": "± 6974471.608250238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74209.26595744681,
            "unit": "ns",
            "range": "± 10525.175871567697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368481.29545454547,
            "unit": "ns",
            "range": "± 37847.07746537801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364489.623655914,
            "unit": "ns",
            "range": "± 54094.92922227875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 357176.40425531915,
            "unit": "ns",
            "range": "± 47376.790806240366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4898453.46875,
            "unit": "ns",
            "range": "± 366896.7388145708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4263894.074468086,
            "unit": "ns",
            "range": "± 250514.81853019158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25092.963157894737,
            "unit": "ns",
            "range": "± 5206.243610116946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141492.28723404257,
            "unit": "ns",
            "range": "± 18883.95785348793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 149744.64736842105,
            "unit": "ns",
            "range": "± 24561.20918343638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147520.15934065933,
            "unit": "ns",
            "range": "± 22799.372046040502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10093.155555555555,
            "unit": "ns",
            "range": "± 1033.9404489307308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28942.633333333335,
            "unit": "ns",
            "range": "± 2686.7084471105686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611669.1956521738,
            "unit": "ns",
            "range": "± 184700.62632147115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3086010.75,
            "unit": "ns",
            "range": "± 159664.9346841969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535972.822222222,
            "unit": "ns",
            "range": "± 180606.76389251446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6951490.23655914,
            "unit": "ns",
            "range": "± 392539.5290554216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4070262.8333333335,
            "unit": "ns",
            "range": "± 826324.8786979045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3961357.557471264,
            "unit": "ns",
            "range": "± 553934.2329119097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5028016.901098901,
            "unit": "ns",
            "range": "± 538623.8426886935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4906389.926315789,
            "unit": "ns",
            "range": "± 421184.80994000327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8509499.531914894,
            "unit": "ns",
            "range": "± 668736.4212910777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7118872.094122024,
            "unit": "ns",
            "range": "± 247950.79464387527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221310.9362877156,
            "unit": "ns",
            "range": "± 96205.84786795928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344455.8166503906,
            "unit": "ns",
            "range": "± 34327.25508924742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2943705.7513020835,
            "unit": "ns",
            "range": "± 266273.2193642722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048200.912109375,
            "unit": "ns",
            "range": "± 80521.56831007932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924218.155120482,
            "unit": "ns",
            "range": "± 48857.45537625383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5e352895d98c7089c05550832d123dcaa496cb06",
          "message": "temp",
          "timestamp": "2023-05-15T23:39:48+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/5e352895d98c7089c05550832d123dcaa496cb06"
        },
        "date": 1684162706168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9168961.49,
            "unit": "ns",
            "range": "± 552378.4844494549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22346073.170212764,
            "unit": "ns",
            "range": "± 852854.069559875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56467410.5,
            "unit": "ns",
            "range": "± 1640287.7520773078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109150256.63207547,
            "unit": "ns",
            "range": "± 4526128.837021333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217444000.06603774,
            "unit": "ns",
            "range": "± 9067545.235054558"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74423.35789473684,
            "unit": "ns",
            "range": "± 12151.775248047477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357201.125,
            "unit": "ns",
            "range": "± 38805.49739032507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342441.2291666667,
            "unit": "ns",
            "range": "± 43438.22199290418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313268.2291666667,
            "unit": "ns",
            "range": "± 35696.50250639459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4453454.488235294,
            "unit": "ns",
            "range": "± 225894.14330655462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4040638.626262626,
            "unit": "ns",
            "range": "± 259526.38100218945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24477.31914893617,
            "unit": "ns",
            "range": "± 4508.343557628221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109141.11111111111,
            "unit": "ns",
            "range": "± 23359.808401807604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130656.20652173914,
            "unit": "ns",
            "range": "± 23851.292731817666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133134.13829787233,
            "unit": "ns",
            "range": "± 19437.6338579776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7625.604166666667,
            "unit": "ns",
            "range": "± 1401.5219207341156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20296.09574468085,
            "unit": "ns",
            "range": "± 3645.445909327302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583902.4329896907,
            "unit": "ns",
            "range": "± 181358.71699669017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196412.5816326533,
            "unit": "ns",
            "range": "± 295111.0553131127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2875170.056701031,
            "unit": "ns",
            "range": "± 404334.6616906071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7738052.74742268,
            "unit": "ns",
            "range": "± 866715.0722667965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479773.0154639175,
            "unit": "ns",
            "range": "± 319366.9009717413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3714699.4591836734,
            "unit": "ns",
            "range": "± 267992.4754493827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4750555.620879121,
            "unit": "ns",
            "range": "± 263395.5481144001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445297.645161291,
            "unit": "ns",
            "range": "± 199924.18666197942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8338953.034883721,
            "unit": "ns",
            "range": "± 452487.45762276824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6793159.196824597,
            "unit": "ns",
            "range": "± 203845.1380322483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086446.9768066406,
            "unit": "ns",
            "range": "± 31590.049548257946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380768.929966518,
            "unit": "ns",
            "range": "± 31550.887145584908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3092852.392252604,
            "unit": "ns",
            "range": "± 41481.96345572166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937415.7667518029,
            "unit": "ns",
            "range": "± 15123.260817373828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852158.2194761619,
            "unit": "ns",
            "range": "± 27055.867407787904"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f05b96465410478afc7754ef48bf600c8bea1b56",
          "message": "temp",
          "timestamp": "2023-05-16T11:00:12+09:00",
          "tree_id": "a2a79cfb4a44a1e01fe91ffe47e80432fd778521",
          "url": "https://github.com/planetarium/libplanet/commit/f05b96465410478afc7754ef48bf600c8bea1b56"
        },
        "date": 1684203433260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8105401.954545454,
            "unit": "ns",
            "range": "± 193491.574347992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20780372,
            "unit": "ns",
            "range": "± 702108.3726051287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49824115.208333336,
            "unit": "ns",
            "range": "± 1273585.427023337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103625568.38095239,
            "unit": "ns",
            "range": "± 5562339.735736576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215190961.18333334,
            "unit": "ns",
            "range": "± 8996491.48133924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65990.58333333333,
            "unit": "ns",
            "range": "± 10435.96869098879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342683.9157303371,
            "unit": "ns",
            "range": "± 30673.89101233438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324361.18279569893,
            "unit": "ns",
            "range": "± 28547.66314351059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280240.79591836734,
            "unit": "ns",
            "range": "± 22232.751268527936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4226910.8,
            "unit": "ns",
            "range": "± 112586.72718509051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834545.214285714,
            "unit": "ns",
            "range": "± 65022.41568540756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21892.77319587629,
            "unit": "ns",
            "range": "± 5111.475077593296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111746.69387755102,
            "unit": "ns",
            "range": "± 22912.32342046261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109888.54081632652,
            "unit": "ns",
            "range": "± 16668.449993751467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121125.23404255319,
            "unit": "ns",
            "range": "± 15248.026647698913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6137.525773195876,
            "unit": "ns",
            "range": "± 1052.44647620025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16989.64606741573,
            "unit": "ns",
            "range": "± 1902.3557796881128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486642,
            "unit": "ns",
            "range": "± 79871.57953043589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2854954.839506173,
            "unit": "ns",
            "range": "± 148953.44241871827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506274.765625,
            "unit": "ns",
            "range": "± 108928.39236313557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6431208.261538462,
            "unit": "ns",
            "range": "± 299319.29524225654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3529062.897959184,
            "unit": "ns",
            "range": "± 228598.64641163507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3566830.6938775512,
            "unit": "ns",
            "range": "± 347070.0579792274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499256.804347826,
            "unit": "ns",
            "range": "± 196337.54070172893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4536862.809859155,
            "unit": "ns",
            "range": "± 222012.3000254453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8199051.565934066,
            "unit": "ns",
            "range": "± 439571.6399761073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6726370.055989583,
            "unit": "ns",
            "range": "± 66403.58435196649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1994439.3074776786,
            "unit": "ns",
            "range": "± 56244.180333198135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303972.012469952,
            "unit": "ns",
            "range": "± 16717.64430847597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754800.5323171713,
            "unit": "ns",
            "range": "± 187087.4244738561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882200.8955078125,
            "unit": "ns",
            "range": "± 14535.478194769008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769217.2318359375,
            "unit": "ns",
            "range": "± 10916.99062622016"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "3b71f497ebd3178d7c2bc1980cc3b786f397d35a",
          "message": "temp",
          "timestamp": "2023-05-16T10:59:19+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/3b71f497ebd3178d7c2bc1980cc3b786f397d35a"
        },
        "date": 1684203446316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8593978.432432432,
            "unit": "ns",
            "range": "± 287670.2172150083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21155332.30645161,
            "unit": "ns",
            "range": "± 938233.034478189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56388592.56,
            "unit": "ns",
            "range": "± 2271725.754980895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108263646.4074074,
            "unit": "ns",
            "range": "± 2943762.1874997006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219479801.25925925,
            "unit": "ns",
            "range": "± 6142640.90059844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81111.14942528735,
            "unit": "ns",
            "range": "± 10390.71939171742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328897.54545454547,
            "unit": "ns",
            "range": "± 20037.54143148804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323016.93406593404,
            "unit": "ns",
            "range": "± 27146.083075260376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356929.6649484536,
            "unit": "ns",
            "range": "± 46636.29858581198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4696555.925531914,
            "unit": "ns",
            "range": "± 338300.24038661213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4001167.8789473684,
            "unit": "ns",
            "range": "± 243238.81163201065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24248.917582417584,
            "unit": "ns",
            "range": "± 2701.2816713796933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124205.80927835051,
            "unit": "ns",
            "range": "± 23270.53899263009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138999,
            "unit": "ns",
            "range": "± 23555.379938413447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136908.90217391305,
            "unit": "ns",
            "range": "± 21387.20047185447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7962.695652173913,
            "unit": "ns",
            "range": "± 1011.7066881453495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23177.93157894737,
            "unit": "ns",
            "range": "± 4311.670690294582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695238.680851064,
            "unit": "ns",
            "range": "± 207787.9716315583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3138577.4479166665,
            "unit": "ns",
            "range": "± 225080.08024648845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2989057.5714285714,
            "unit": "ns",
            "range": "± 399745.39343421615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7594840.1344086025,
            "unit": "ns",
            "range": "± 619658.1944103081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412440.2150537632,
            "unit": "ns",
            "range": "± 213882.67886786055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3668572.391891892,
            "unit": "ns",
            "range": "± 173480.06083670238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4793421.4845360825,
            "unit": "ns",
            "range": "± 312753.4253431898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4713622.984210527,
            "unit": "ns",
            "range": "± 336083.9622350237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8683235.698924731,
            "unit": "ns",
            "range": "± 590914.0693671264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7130920.872282608,
            "unit": "ns",
            "range": "± 175376.19007244936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017098.7759486607,
            "unit": "ns",
            "range": "± 15771.358237434502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339173.089092548,
            "unit": "ns",
            "range": "± 13510.593054410543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2920604.941879735,
            "unit": "ns",
            "range": "± 91580.38668906031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846885.9806385869,
            "unit": "ns",
            "range": "± 20820.477015047214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 865571.0555989583,
            "unit": "ns",
            "range": "± 15335.287417842153"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "25d6148d4f0c008a025d3adc6b43a7b283559b8d",
          "message": "temp",
          "timestamp": "2023-05-16T11:06:39+09:00",
          "tree_id": "ded0a2f16c988061a7c74e1a5b0181d6e7c21070",
          "url": "https://github.com/planetarium/libplanet/commit/25d6148d4f0c008a025d3adc6b43a7b283559b8d"
        },
        "date": 1684203815365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8216985.75,
            "unit": "ns",
            "range": "± 98867.2470428954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20437124.666666668,
            "unit": "ns",
            "range": "± 744347.9487929855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50071705.85897436,
            "unit": "ns",
            "range": "± 1548524.9249170967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104351296.66666667,
            "unit": "ns",
            "range": "± 3063796.234805555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218953315.85714287,
            "unit": "ns",
            "range": "± 2924626.9330784963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78434.31720430107,
            "unit": "ns",
            "range": "± 7451.404868920381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359390.96774193546,
            "unit": "ns",
            "range": "± 10958.893437094432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342631.0588235294,
            "unit": "ns",
            "range": "± 10935.553395098073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331234.28125,
            "unit": "ns",
            "range": "± 25775.596013203172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188622.0714285714,
            "unit": "ns",
            "range": "± 134102.73759066564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3884399.2083333335,
            "unit": "ns",
            "range": "± 94294.38605239544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23944.540404040403,
            "unit": "ns",
            "range": "± 5080.215496231117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99904.83673469388,
            "unit": "ns",
            "range": "± 13302.821284126143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126798.39887640449,
            "unit": "ns",
            "range": "± 7781.408272643642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131300.7474226804,
            "unit": "ns",
            "range": "± 16859.855595115412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8788.148936170213,
            "unit": "ns",
            "range": "± 1144.6410712011764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25266.757894736842,
            "unit": "ns",
            "range": "± 3379.8637726412203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613692.6041666667,
            "unit": "ns",
            "range": "± 148258.13851050325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3046017.9444444445,
            "unit": "ns",
            "range": "± 127906.21921790784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2649128.1263157893,
            "unit": "ns",
            "range": "± 258833.19082280732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6876686.890243903,
            "unit": "ns",
            "range": "± 363991.993725332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3413517.8695652173,
            "unit": "ns",
            "range": "± 86060.14118484201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429406.824675325,
            "unit": "ns",
            "range": "± 165904.54619865015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4550191.966666667,
            "unit": "ns",
            "range": "± 54201.60097644279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4807528.666666667,
            "unit": "ns",
            "range": "± 99587.90434246285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883802.555555556,
            "unit": "ns",
            "range": "± 195267.99678988187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6904631.534114583,
            "unit": "ns",
            "range": "± 206535.80017824643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002703.1118861607,
            "unit": "ns",
            "range": "± 22999.970102436182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295951.78984375,
            "unit": "ns",
            "range": "± 8119.006186052227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909237.082465278,
            "unit": "ns",
            "range": "± 143501.77414969893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858770.4883563702,
            "unit": "ns",
            "range": "± 10078.94075257405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773430.2899639423,
            "unit": "ns",
            "range": "± 6823.725283470836"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "76cf17ff4ea8dc310210758823136e61f9054a63",
          "message": "temp",
          "timestamp": "2023-05-16T11:48:36+09:00",
          "tree_id": "3fa254aa0f7f198534facc7622794230ffe5f00f",
          "url": "https://github.com/planetarium/libplanet/commit/76cf17ff4ea8dc310210758823136e61f9054a63"
        },
        "date": 1684206290146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8578948.944444444,
            "unit": "ns",
            "range": "± 156397.30080319848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19878831.35714286,
            "unit": "ns",
            "range": "± 310279.09765182674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50049358.04545455,
            "unit": "ns",
            "range": "± 1213910.893989369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105587049.31481482,
            "unit": "ns",
            "range": "± 4449366.131577403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206249918.57142857,
            "unit": "ns",
            "range": "± 3337109.7465939852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59820.926315789475,
            "unit": "ns",
            "range": "± 8967.966644036731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329840.5752688172,
            "unit": "ns",
            "range": "± 30072.92158427309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331528.6157894737,
            "unit": "ns",
            "range": "± 29443.556752749955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311482.4696969697,
            "unit": "ns",
            "range": "± 40960.76181765599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150050.75,
            "unit": "ns",
            "range": "± 180696.77036974148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3771254.5833333335,
            "unit": "ns",
            "range": "± 166188.18555912338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16782.7,
            "unit": "ns",
            "range": "± 2196.770041284639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85529.47916666667,
            "unit": "ns",
            "range": "± 9886.967635789062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104954.5,
            "unit": "ns",
            "range": "± 11579.566357183165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101662.36082474227,
            "unit": "ns",
            "range": "± 13653.825907800814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5132.2555555555555,
            "unit": "ns",
            "range": "± 1230.933906540948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16637.77011494253,
            "unit": "ns",
            "range": "± 2183.2761370757494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566843.2368421052,
            "unit": "ns",
            "range": "± 212726.73027405274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906211.0888888887,
            "unit": "ns",
            "range": "± 209444.42305726305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2381093.2150537632,
            "unit": "ns",
            "range": "± 205689.09820104126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6523772.211111112,
            "unit": "ns",
            "range": "± 457425.37354692596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3405313.784090909,
            "unit": "ns",
            "range": "± 216193.03297149195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3598447.7849462368,
            "unit": "ns",
            "range": "± 301832.7125673025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4693443.17816092,
            "unit": "ns",
            "range": "± 256156.88398434586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4791875.585106383,
            "unit": "ns",
            "range": "± 552958.7816846188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8296451.712765957,
            "unit": "ns",
            "range": "± 518827.22626513196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6128852.740542763,
            "unit": "ns",
            "range": "± 130313.1421810627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894196.9544771635,
            "unit": "ns",
            "range": "± 13498.411501437979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240653.8916766827,
            "unit": "ns",
            "range": "± 10936.331873573268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2456816.6283854167,
            "unit": "ns",
            "range": "± 41646.735761952026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776010.20546875,
            "unit": "ns",
            "range": "± 10746.20398379028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698757.0568659856,
            "unit": "ns",
            "range": "± 7298.718331427398"
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
          "id": "f3c4ea398480ddfccbfdecaa80a8b707b6040388",
          "message": "Fixed tests",
          "timestamp": "2023-05-17T17:37:32+09:00",
          "tree_id": "7a13d5b06a382a1cc5e0378461912ebdae9ae39a",
          "url": "https://github.com/planetarium/libplanet/commit/f3c4ea398480ddfccbfdecaa80a8b707b6040388"
        },
        "date": 1684313614876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8489840.41935484,
            "unit": "ns",
            "range": "± 512567.35538012616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20824599.722222224,
            "unit": "ns",
            "range": "± 688168.4637464294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50898379.42307692,
            "unit": "ns",
            "range": "± 1382008.4009065987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101973429.48717949,
            "unit": "ns",
            "range": "± 3535099.7638779357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210659328.32142857,
            "unit": "ns",
            "range": "± 5952192.875499981"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68025.84782608696,
            "unit": "ns",
            "range": "± 9115.069745213423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309509.8522727273,
            "unit": "ns",
            "range": "± 16183.131651055584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294194.2584269663,
            "unit": "ns",
            "range": "± 16675.28240017657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291639.9191919192,
            "unit": "ns",
            "range": "± 21134.486085917782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111139.789473684,
            "unit": "ns",
            "range": "± 86044.75866055537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3690043,
            "unit": "ns",
            "range": "± 73622.25725027046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16211.8202247191,
            "unit": "ns",
            "range": "± 2242.1398442001673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80543.64130434782,
            "unit": "ns",
            "range": "± 6792.737740615393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93698.04040404041,
            "unit": "ns",
            "range": "± 16359.70661749763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100121.26804123711,
            "unit": "ns",
            "range": "± 13882.147866441233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4906.114583333333,
            "unit": "ns",
            "range": "± 716.1180565681767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15762.38202247191,
            "unit": "ns",
            "range": "± 1429.602380397001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590847.2959183673,
            "unit": "ns",
            "range": "± 147570.26267889378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017557.0833333335,
            "unit": "ns",
            "range": "± 134593.194495933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2649707.14893617,
            "unit": "ns",
            "range": "± 312158.81643913547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6446377.803030303,
            "unit": "ns",
            "range": "± 252087.41649437157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3206757.529411765,
            "unit": "ns",
            "range": "± 130020.15213286791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3237750.390410959,
            "unit": "ns",
            "range": "± 161088.802277619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4361197.4677419355,
            "unit": "ns",
            "range": "± 180978.00966497013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4224298.328947368,
            "unit": "ns",
            "range": "± 194098.50645019664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7570250.2727272725,
            "unit": "ns",
            "range": "± 233063.41851310997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902051.290736607,
            "unit": "ns",
            "range": "± 56161.14281289308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961899.8022836538,
            "unit": "ns",
            "range": "± 9100.442487470711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283253.7286458334,
            "unit": "ns",
            "range": "± 6209.499189692061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2508725.133370536,
            "unit": "ns",
            "range": "± 15028.59726697126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863580.0925641741,
            "unit": "ns",
            "range": "± 3503.0743244471864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713651.2529947917,
            "unit": "ns",
            "range": "± 7857.868026634837"
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
          "id": "d420255984fcc2bc382c2bc0dedacab6f396d32a",
          "message": "Added gas refund",
          "timestamp": "2023-05-17T18:12:16+09:00",
          "tree_id": "0657e678c1da33711f7572cd769d7b92cebb3050",
          "url": "https://github.com/planetarium/libplanet/commit/d420255984fcc2bc382c2bc0dedacab6f396d32a"
        },
        "date": 1684315605590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081193.071428572,
            "unit": "ns",
            "range": "± 95930.47581649495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19629774.233333334,
            "unit": "ns",
            "range": "± 582068.5701569273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51564024.81818182,
            "unit": "ns",
            "range": "± 1611616.4710320826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103571342.07142857,
            "unit": "ns",
            "range": "± 572012.5475335328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209076278.3,
            "unit": "ns",
            "range": "± 3159913.8621910745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61669.77659574468,
            "unit": "ns",
            "range": "± 9008.18089969317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312053,
            "unit": "ns",
            "range": "± 15192.832992659965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300401.66315789474,
            "unit": "ns",
            "range": "± 23476.186485145543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292405.87362637365,
            "unit": "ns",
            "range": "± 24265.17069777556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4231490.043478261,
            "unit": "ns",
            "range": "± 161276.33570968342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691815.125,
            "unit": "ns",
            "range": "± 95175.3739483123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19875.15625,
            "unit": "ns",
            "range": "± 4454.7233331969055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85402.28571428571,
            "unit": "ns",
            "range": "± 9274.317792455891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103022.4693877551,
            "unit": "ns",
            "range": "± 11798.87719121104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108633.70430107527,
            "unit": "ns",
            "range": "± 12139.707024578063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6317.96875,
            "unit": "ns",
            "range": "± 768.5947800078161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16771.197674418603,
            "unit": "ns",
            "range": "± 2378.5431122718173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626428.9842105263,
            "unit": "ns",
            "range": "± 227707.77279078006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941136.647887324,
            "unit": "ns",
            "range": "± 143171.98240269325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2438472.1565656564,
            "unit": "ns",
            "range": "± 296529.2330456064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6159436.75409836,
            "unit": "ns",
            "range": "± 271687.941721911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307006.533333333,
            "unit": "ns",
            "range": "± 97271.51240789639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514873.75,
            "unit": "ns",
            "range": "± 61136.36853188671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4294164.62,
            "unit": "ns",
            "range": "± 169132.93213833254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4158579.121212121,
            "unit": "ns",
            "range": "± 195341.1858140099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7794114.085714285,
            "unit": "ns",
            "range": "± 377196.59961469844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6480201.298377404,
            "unit": "ns",
            "range": "± 43095.657142356096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904680.0827287945,
            "unit": "ns",
            "range": "± 16301.618636762123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258603.7436197917,
            "unit": "ns",
            "range": "± 13463.248337937874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549088.031550481,
            "unit": "ns",
            "range": "± 19018.307727347194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870912.0432291667,
            "unit": "ns",
            "range": "± 4298.090699533582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765269.8024088541,
            "unit": "ns",
            "range": "± 4228.09418524232"
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
          "id": "df4badab7d81f606aad63841845c4060683c156d",
          "message": "Build fix",
          "timestamp": "2023-05-18T17:20:51+09:00",
          "tree_id": "6d70aa867d3f20c9db40ed799159b4abeeba1b89",
          "url": "https://github.com/planetarium/libplanet/commit/df4badab7d81f606aad63841845c4060683c156d"
        },
        "date": 1684399254942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7942459.416666667,
            "unit": "ns",
            "range": "± 38672.90453031174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21089755.444444444,
            "unit": "ns",
            "range": "± 418358.58993117686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51374416.25,
            "unit": "ns",
            "range": "± 336520.08705441887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100616005.4,
            "unit": "ns",
            "range": "± 751421.9376040905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207190033.5909091,
            "unit": "ns",
            "range": "± 4854471.475391652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72054.21276595745,
            "unit": "ns",
            "range": "± 9998.768991566763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348061.989010989,
            "unit": "ns",
            "range": "± 34265.72207404118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367248.98913043475,
            "unit": "ns",
            "range": "± 53854.06846436689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 387176.48387096776,
            "unit": "ns",
            "range": "± 67711.5002138409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4618317.721649485,
            "unit": "ns",
            "range": "± 361114.4750229472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4279624.762886598,
            "unit": "ns",
            "range": "± 405014.63187590963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25881.28888888889,
            "unit": "ns",
            "range": "± 4184.906046478544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127529.73033707865,
            "unit": "ns",
            "range": "± 17117.370602272607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138682.67045454544,
            "unit": "ns",
            "range": "± 17143.460763775704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143180.4255319149,
            "unit": "ns",
            "range": "± 23047.684671921612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10167.944444444445,
            "unit": "ns",
            "range": "± 1484.3821274354148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28964.144444444446,
            "unit": "ns",
            "range": "± 7549.832310900792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642648.43814433,
            "unit": "ns",
            "range": "± 195523.71148367223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3015234.4054054054,
            "unit": "ns",
            "range": "± 150581.62436829746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2439760.932835821,
            "unit": "ns",
            "range": "± 115224.2116005854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6327810.516129033,
            "unit": "ns",
            "range": "± 234650.12512554548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297947.4523809524,
            "unit": "ns",
            "range": "± 116322.2385466239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455691.638888889,
            "unit": "ns",
            "range": "± 112234.35868425443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4918810.979166667,
            "unit": "ns",
            "range": "± 448991.3919004163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4940560.489130435,
            "unit": "ns",
            "range": "± 701495.0845334743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8033461.168539326,
            "unit": "ns",
            "range": "± 603504.9748574465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6983958.02354452,
            "unit": "ns",
            "range": "± 344572.02909391106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2128630.2385896384,
            "unit": "ns",
            "range": "± 72996.60275733311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357427.9244384766,
            "unit": "ns",
            "range": "± 26227.074168779298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850886.1092155613,
            "unit": "ns",
            "range": "± 205462.28159360358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832573.2103678385,
            "unit": "ns",
            "range": "± 8916.18399111423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787986.6143909801,
            "unit": "ns",
            "range": "± 29458.196754028202"
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
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "82417d30726fa37747a38b298d39fe3f3ae9c04c",
          "message": "Build fix",
          "timestamp": "2023-05-22T20:35:39+09:00",
          "tree_id": "b56424f38a27a48b6abdcd04dd91a775421f0e68",
          "url": "https://github.com/planetarium/libplanet/commit/82417d30726fa37747a38b298d39fe3f3ae9c04c"
        },
        "date": 1684756387180,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9510189.119565217,
            "unit": "ns",
            "range": "± 534923.3112965839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21860439.5625,
            "unit": "ns",
            "range": "± 680361.5287975015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58884747.1,
            "unit": "ns",
            "range": "± 1291374.0033955427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114408732.96153846,
            "unit": "ns",
            "range": "± 3052393.8821163755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233650567.38235295,
            "unit": "ns",
            "range": "± 6688580.417461761"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82213.93406593407,
            "unit": "ns",
            "range": "± 6505.086206281971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362373.5806451613,
            "unit": "ns",
            "range": "± 52452.7006359731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333425.1612903226,
            "unit": "ns",
            "range": "± 37782.8371507287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329299.15730337077,
            "unit": "ns",
            "range": "± 25727.669256295605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4439624.620879121,
            "unit": "ns",
            "range": "± 293993.10853264097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839624.125,
            "unit": "ns",
            "range": "± 99219.4267898451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22098.121212121212,
            "unit": "ns",
            "range": "± 4660.704944211168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106488.11224489796,
            "unit": "ns",
            "range": "± 14889.804053104548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113241.24747474748,
            "unit": "ns",
            "range": "± 12963.82396528614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117467.69072164949,
            "unit": "ns",
            "range": "± 16835.242505406644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7524.8,
            "unit": "ns",
            "range": "± 1348.8663609025427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22667.15,
            "unit": "ns",
            "range": "± 5061.1408111814135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634905.2653061224,
            "unit": "ns",
            "range": "± 173630.58730313912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3061758.1666666665,
            "unit": "ns",
            "range": "± 110399.38873475762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2608911.3191489363,
            "unit": "ns",
            "range": "± 188829.88522586453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6521165.636363637,
            "unit": "ns",
            "range": "± 239903.57513525855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433326.840659341,
            "unit": "ns",
            "range": "± 227682.1627277923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3677578.123655914,
            "unit": "ns",
            "range": "± 227787.79595878048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4701280.117977528,
            "unit": "ns",
            "range": "± 270664.1391884929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5250948.311111111,
            "unit": "ns",
            "range": "± 1017034.1501104112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8493893.73076923,
            "unit": "ns",
            "range": "± 909630.1567642274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7215622.600961538,
            "unit": "ns",
            "range": "± 102460.54820887232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987904.6341646635,
            "unit": "ns",
            "range": "± 23400.386768476685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280866.6259765625,
            "unit": "ns",
            "range": "± 4418.9550933980445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635506.230813419,
            "unit": "ns",
            "range": "± 53495.78745468871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852910.0159737723,
            "unit": "ns",
            "range": "± 8595.89274517535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741249.0302734375,
            "unit": "ns",
            "range": "± 3617.4349695488363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "48c70f3038a84ea1ceac05f49a7983ed5276ac78",
          "message": "fix: bug",
          "timestamp": "2023-05-23T13:43:49+09:00",
          "tree_id": "1e001bff5449be49deae2edafe712b8fffdbeaab",
          "url": "https://github.com/planetarium/libplanet/commit/48c70f3038a84ea1ceac05f49a7983ed5276ac78"
        },
        "date": 1684817843613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7630314,
            "unit": "ns",
            "range": "± 126647.12538980109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19113536.6,
            "unit": "ns",
            "range": "± 678297.4350317538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47555832.02173913,
            "unit": "ns",
            "range": "± 1183065.914974804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93212189.52380952,
            "unit": "ns",
            "range": "± 2195615.210578999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189693022,
            "unit": "ns",
            "range": "± 3202351.19848641"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56739.670454545456,
            "unit": "ns",
            "range": "± 6745.324357156961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299479.4337349398,
            "unit": "ns",
            "range": "± 15910.846024778632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294168.9193548387,
            "unit": "ns",
            "range": "± 20768.10421018908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275218.7173913043,
            "unit": "ns",
            "range": "± 17348.064395514073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4073700.0714285714,
            "unit": "ns",
            "range": "± 114979.33358955606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3480947.4375,
            "unit": "ns",
            "range": "± 66317.90564140653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16424.433333333334,
            "unit": "ns",
            "range": "± 1714.9580992031472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80440.86813186813,
            "unit": "ns",
            "range": "± 6706.563747071124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78818.16666666667,
            "unit": "ns",
            "range": "± 6963.643709544819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99147.03333333334,
            "unit": "ns",
            "range": "± 15468.455672319615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4223.451219512195,
            "unit": "ns",
            "range": "± 535.741580242717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15574.483146067416,
            "unit": "ns",
            "range": "± 1818.5536030315632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492510.042105263,
            "unit": "ns",
            "range": "± 133320.2056150239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2789206.6101694917,
            "unit": "ns",
            "range": "± 122293.42050266633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2467576.623529412,
            "unit": "ns",
            "range": "± 293848.15090993844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5990321.7894736845,
            "unit": "ns",
            "range": "± 201846.00664892196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108235.8636363638,
            "unit": "ns",
            "range": "± 90139.51546658733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3222620.346153846,
            "unit": "ns",
            "range": "± 131367.3327592137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4161405.0784313725,
            "unit": "ns",
            "range": "± 156047.96924687526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4103677.481012658,
            "unit": "ns",
            "range": "± 212634.0699935503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7541717.219178082,
            "unit": "ns",
            "range": "± 371283.7949550573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6030020.700721154,
            "unit": "ns",
            "range": "± 43696.17595314929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876825.608203125,
            "unit": "ns",
            "range": "± 10467.909695629432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226647.2777944712,
            "unit": "ns",
            "range": "± 8134.510042179826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2390606.7994791665,
            "unit": "ns",
            "range": "± 18390.274437863343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767439.1350260417,
            "unit": "ns",
            "range": "± 5601.169307819506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769565.1477864584,
            "unit": "ns",
            "range": "± 8775.26245023279"
          }
        ]
      }
    ]
  }
}