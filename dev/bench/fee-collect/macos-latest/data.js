window.BENCHMARK_DATA = {
  "lastUpdate": 1684203474930,
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
      }
    ]
  }
}