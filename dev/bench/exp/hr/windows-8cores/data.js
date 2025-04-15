window.BENCHMARK_DATA = {
  "lastUpdate": 1744681873320,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "b1d96ff91b659d5ed066e72a3e1fb9a6002a2811",
          "message": "test: Change tx.bin",
          "timestamp": "2025-03-11T18:13:38+09:00",
          "tree_id": "56b1a3806a7626d429197468352950372021272a",
          "url": "https://github.com/planetarium/libplanet/commit/b1d96ff91b659d5ed066e72a3e1fb9a6002a2811"
        },
        "date": 1742890877470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2985897.727272727,
            "unit": "ns",
            "range": "± 110871.92168430384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5175060,
            "unit": "ns",
            "range": "± 92721.74040028123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4206438.095238095,
            "unit": "ns",
            "range": "± 98173.55792773569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11204779,
            "unit": "ns",
            "range": "± 4727196.942800161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21008.97435897436,
            "unit": "ns",
            "range": "± 1109.6022333327899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4036707.1428571427,
            "unit": "ns",
            "range": "± 9038.07878544263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10088842.857142856,
            "unit": "ns",
            "range": "± 118698.56919807555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21283190.322580647,
            "unit": "ns",
            "range": "± 968477.2921853061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41300700,
            "unit": "ns",
            "range": "± 284586.2833424455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82307040,
            "unit": "ns",
            "range": "± 157647.36779099284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4089175.2604166665,
            "unit": "ns",
            "range": "± 7091.270214297692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 949491.2174479166,
            "unit": "ns",
            "range": "± 3975.579326064371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724845.7942708334,
            "unit": "ns",
            "range": "± 4158.646951438527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648916.571514423,
            "unit": "ns",
            "range": "± 5590.50861056024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 489355.5013020833,
            "unit": "ns",
            "range": "± 2472.0860725571297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 399992.10379464284,
            "unit": "ns",
            "range": "± 1552.6332083604716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957323.076923077,
            "unit": "ns",
            "range": "± 41454.89825995946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255223.076923077,
            "unit": "ns",
            "range": "± 43093.312587263346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876759.090909091,
            "unit": "ns",
            "range": "± 91565.21828256731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3287881.4814814813,
            "unit": "ns",
            "range": "± 89601.97043264788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4447580,
            "unit": "ns",
            "range": "± 36983.76477784349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225047.42268041236,
            "unit": "ns",
            "range": "± 39312.83477012604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389242.42424242425,
            "unit": "ns",
            "range": "± 66820.9717338115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160615,
            "unit": "ns",
            "range": "± 3695.41323093486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1448036.8421052631,
            "unit": "ns",
            "range": "± 49310.409081777376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1261508.3333333333,
            "unit": "ns",
            "range": "± 42006.430630151306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18359.79381443299,
            "unit": "ns",
            "range": "± 5219.527832129838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78442.85714285714,
            "unit": "ns",
            "range": "± 20611.66844990137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43706.12244897959,
            "unit": "ns",
            "range": "± 15203.97273318555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53436.17021276596,
            "unit": "ns",
            "range": "± 28944.04632101534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3117.1717171717173,
            "unit": "ns",
            "range": "± 888.0200866500486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17968.367346938776,
            "unit": "ns",
            "range": "± 5191.877020662728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e98ae39bf62ae3ba49a15acd3728ac1c29fac5f9",
          "message": "fix: Fix render action invoke",
          "timestamp": "2025-03-27T17:25:58+09:00",
          "tree_id": "fa71a4e5e6fdb26667319b79e26d04bf495669a2",
          "url": "https://github.com/planetarium/libplanet/commit/e98ae39bf62ae3ba49a15acd3728ac1c29fac5f9"
        },
        "date": 1743064684109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2973380.9523809524,
            "unit": "ns",
            "range": "± 105411.69981367074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5051937.5,
            "unit": "ns",
            "range": "± 96165.79346801717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4076496.153846154,
            "unit": "ns",
            "range": "± 165432.32010080936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10920883,
            "unit": "ns",
            "range": "± 4350369.5357738165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21287.878787878788,
            "unit": "ns",
            "range": "± 1029.0421463320827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4018421.4285714286,
            "unit": "ns",
            "range": "± 10366.30477678882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10171673.333333334,
            "unit": "ns",
            "range": "± 156640.4092484561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21068140.298507463,
            "unit": "ns",
            "range": "± 758444.6734900075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41428284,
            "unit": "ns",
            "range": "± 559997.6455902888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82321692.85714285,
            "unit": "ns",
            "range": "± 150501.2009371237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4088339.1145833335,
            "unit": "ns",
            "range": "± 7807.169461969268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 898196.1197916666,
            "unit": "ns",
            "range": "± 5311.52361582553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722540.8551897322,
            "unit": "ns",
            "range": "± 3525.332815814733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1669055.5501302083,
            "unit": "ns",
            "range": "± 3713.0347546813414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 440063.35797991074,
            "unit": "ns",
            "range": "± 2589.5673997873737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 395007.548828125,
            "unit": "ns",
            "range": "± 1298.789314688305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3063324,
            "unit": "ns",
            "range": "± 79597.03344555834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3124214.285714286,
            "unit": "ns",
            "range": "± 50535.65165219587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4083461.5384615385,
            "unit": "ns",
            "range": "± 20614.943546755043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3363438.4615384615,
            "unit": "ns",
            "range": "± 19019.969263099003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3316180,
            "unit": "ns",
            "range": "± 558033.6930923281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209609.375,
            "unit": "ns",
            "range": "± 42938.53153208175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368861.8556701031,
            "unit": "ns",
            "range": "± 82974.7783507371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162360,
            "unit": "ns",
            "range": "± 3721.827508093302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1441003.3333333333,
            "unit": "ns",
            "range": "± 39293.91883575962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1262913.7931034483,
            "unit": "ns",
            "range": "± 32735.200845332176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17995,
            "unit": "ns",
            "range": "± 6100.594026383617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83881.44329896907,
            "unit": "ns",
            "range": "± 19468.34144781014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32383.823529411766,
            "unit": "ns",
            "range": "± 1320.0644821560968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61400,
            "unit": "ns",
            "range": "± 31037.623646675227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3138.7755102040815,
            "unit": "ns",
            "range": "± 1006.1289143960419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19561.616161616163,
            "unit": "ns",
            "range": "± 3957.7541320213486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3c6a83391c5dad0c54892a6b38b2fddbebfac938",
          "message": "chore: temp currency",
          "timestamp": "2025-03-28T19:10:03+09:00",
          "tree_id": "1cad61d5ae4f0242bd831d58bc5dfcd5dc7c7042",
          "url": "https://github.com/planetarium/libplanet/commit/3c6a83391c5dad0c54892a6b38b2fddbebfac938"
        },
        "date": 1743157173476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3036595.8333333335,
            "unit": "ns",
            "range": "± 77217.41456639713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5442795,
            "unit": "ns",
            "range": "± 120466.86146208971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4610448.101265823,
            "unit": "ns",
            "range": "± 234879.94525341247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12420836.734693877,
            "unit": "ns",
            "range": "± 5319771.5995538905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 27401.010101010103,
            "unit": "ns",
            "range": "± 4742.2653449525305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4028100,
            "unit": "ns",
            "range": "± 10780.323956884811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10191533.333333334,
            "unit": "ns",
            "range": "± 185152.0559149258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21275989.47368421,
            "unit": "ns",
            "range": "± 906314.2151996361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41572151.85185185,
            "unit": "ns",
            "range": "± 372746.92112474545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 83197314.28571428,
            "unit": "ns",
            "range": "± 72062.22585796524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4199208.268229167,
            "unit": "ns",
            "range": "± 34042.92591623279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 952659.6400669643,
            "unit": "ns",
            "range": "± 13056.672970491501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737897.1484375,
            "unit": "ns",
            "range": "± 7695.559502011413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1823764.6122685184,
            "unit": "ns",
            "range": "± 49265.08979234817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 446799.3294270833,
            "unit": "ns",
            "range": "± 3805.648887985974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 408366.42717633926,
            "unit": "ns",
            "range": "± 1065.5980996707306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951725,
            "unit": "ns",
            "range": "± 40028.33371500742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414830,
            "unit": "ns",
            "range": "± 40533.323151627796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4172000,
            "unit": "ns",
            "range": "± 104158.6159313154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3371484.6153846155,
            "unit": "ns",
            "range": "± 116943.99140403098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4540000,
            "unit": "ns",
            "range": "± 121555.34048325478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257373.19587628866,
            "unit": "ns",
            "range": "± 40023.6271768104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 390689.89898989897,
            "unit": "ns",
            "range": "± 90534.46462360934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185258.16326530612,
            "unit": "ns",
            "range": "± 25431.480303082233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1498045.3488372094,
            "unit": "ns",
            "range": "± 53270.499981958084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1304333.3333333333,
            "unit": "ns",
            "range": "± 47504.74644663782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24640.425531914894,
            "unit": "ns",
            "range": "± 6219.987192687022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102183.33333333333,
            "unit": "ns",
            "range": "± 30895.966920130933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63561.70212765958,
            "unit": "ns",
            "range": "± 17728.294961244825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78280.80808080808,
            "unit": "ns",
            "range": "± 32684.302157207025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5170.526315789473,
            "unit": "ns",
            "range": "± 1752.801628773783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22323.469387755104,
            "unit": "ns",
            "range": "± 4848.159413110248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e494099d997514507c03c10b3e729ab4f6fddbc9",
          "message": "bump: Bump serilog version to 4.0.0",
          "timestamp": "2025-03-30T09:10:54+09:00",
          "tree_id": "0c4a4dfc26de86610367035942a3939ff53aed56",
          "url": "https://github.com/planetarium/libplanet/commit/e494099d997514507c03c10b3e729ab4f6fddbc9"
        },
        "date": 1743293940342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2751233.3333333335,
            "unit": "ns",
            "range": "± 31420.76132789023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4360247,
            "unit": "ns",
            "range": "± 729638.4100257116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4417149.206349206,
            "unit": "ns",
            "range": "± 202569.10877526493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11692533,
            "unit": "ns",
            "range": "± 5259475.930724438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21700,
            "unit": "ns",
            "range": "± 380.2832952094854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4022360,
            "unit": "ns",
            "range": "± 16744.41484708942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10140778.57142857,
            "unit": "ns",
            "range": "± 140163.5496815797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 23162146.153846152,
            "unit": "ns",
            "range": "± 377223.03662286367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41466638.88888889,
            "unit": "ns",
            "range": "± 502427.45351518324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82274457.6923077,
            "unit": "ns",
            "range": "± 50213.56824502154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091658.3333333335,
            "unit": "ns",
            "range": "± 5698.517713562838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917240.4427083334,
            "unit": "ns",
            "range": "± 4807.480594454245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759697.3284040178,
            "unit": "ns",
            "range": "± 6670.522433197318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1612183.7109375,
            "unit": "ns",
            "range": "± 4513.784674075029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 445801.11328125,
            "unit": "ns",
            "range": "± 2357.41938795152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 399980.439453125,
            "unit": "ns",
            "range": "± 1461.8968558082886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2965783.3333333335,
            "unit": "ns",
            "range": "± 19998.537825339008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3222251.8518518517,
            "unit": "ns",
            "range": "± 88257.70992850066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4106323.076923077,
            "unit": "ns",
            "range": "± 40934.97188318227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3303059.375,
            "unit": "ns",
            "range": "± 98352.70912966841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4450666.666666667,
            "unit": "ns",
            "range": "± 64910.16636066878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233662.24489795917,
            "unit": "ns",
            "range": "± 34069.657314796306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368160.20408163266,
            "unit": "ns",
            "range": "± 81916.58535766095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157200,
            "unit": "ns",
            "range": "± 2107.1307505705477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1449680,
            "unit": "ns",
            "range": "± 37945.575060429204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1243559.5238095238,
            "unit": "ns",
            "range": "± 45051.92700203822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18151.515151515152,
            "unit": "ns",
            "range": "± 5946.91419958427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86030.52631578948,
            "unit": "ns",
            "range": "± 19665.75527588779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32623.456790123455,
            "unit": "ns",
            "range": "± 2209.087572106314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52631.63265306123,
            "unit": "ns",
            "range": "± 25683.56848435336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3081.6326530612246,
            "unit": "ns",
            "range": "± 905.8056661901417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19338.541666666668,
            "unit": "ns",
            "range": "± 4322.410871910954"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "a05615a452c69b45334efcf6c05f8bb18c292fc8",
          "message": "refactor: Change SerializeUnsignedTxToJson to SerializeUnsignedTx",
          "timestamp": "2025-04-09T18:15:28+09:00",
          "tree_id": "8c5eb065353ba1af408e34fbd4f30f69ea90ca4c",
          "url": "https://github.com/planetarium/libplanet/commit/a05615a452c69b45334efcf6c05f8bb18c292fc8"
        },
        "date": 1744190838292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2850945.4545454546,
            "unit": "ns",
            "range": "± 67871.1277227289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4963097,
            "unit": "ns",
            "range": "± 345534.3116044477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4053882.7586206896,
            "unit": "ns",
            "range": "± 115571.61066679926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10565435,
            "unit": "ns",
            "range": "± 3596426.147527739"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22075,
            "unit": "ns",
            "range": "± 510.8043193157033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4020314.285714286,
            "unit": "ns",
            "range": "± 8283.055655312899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10043342.857142856,
            "unit": "ns",
            "range": "± 97329.3592695656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22742260,
            "unit": "ns",
            "range": "± 100787.12219326435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41582828.571428575,
            "unit": "ns",
            "range": "± 865509.5927503386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82257400,
            "unit": "ns",
            "range": "± 66842.78819239464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091779.7916666665,
            "unit": "ns",
            "range": "± 10023.146194454945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920969.6219308035,
            "unit": "ns",
            "range": "± 5519.500376533269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727847.5130208334,
            "unit": "ns",
            "range": "± 5034.300403475859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645183.544921875,
            "unit": "ns",
            "range": "± 1770.340732023983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 438835.25390625,
            "unit": "ns",
            "range": "± 2024.6736677307656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 391017.59765625,
            "unit": "ns",
            "range": "± 870.0011305261417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3078050,
            "unit": "ns",
            "range": "± 85339.80227216285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3247700,
            "unit": "ns",
            "range": "± 33932.21750218197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3896286.6666666665,
            "unit": "ns",
            "range": "± 64371.77583234382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3145757.1428571427,
            "unit": "ns",
            "range": "± 30004.684615924547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4410022.222222222,
            "unit": "ns",
            "range": "± 146109.37998853775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232592.85714285713,
            "unit": "ns",
            "range": "± 21580.31390998769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367139.3939393939,
            "unit": "ns",
            "range": "± 69939.0796397367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159430.76923076922,
            "unit": "ns",
            "range": "± 2507.4504366602528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1436968.1818181819,
            "unit": "ns",
            "range": "± 53379.11259784688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1241273.3333333333,
            "unit": "ns",
            "range": "± 32136.13213356186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18433.695652173912,
            "unit": "ns",
            "range": "± 4746.804064782055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82113.26530612246,
            "unit": "ns",
            "range": "± 18746.357104562307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32975,
            "unit": "ns",
            "range": "± 1951.727569700524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48182.65306122449,
            "unit": "ns",
            "range": "± 23817.70122950101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2802.0408163265306,
            "unit": "ns",
            "range": "± 1028.5591555477897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18800,
            "unit": "ns",
            "range": "± 4402.248722463667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98728ca3ffb04e695b45d7d85d7cc454b74769aa",
          "message": "Merge pull request #4038 from planetarium/feature/action-provider\n\nAdd IActionProvider",
          "timestamp": "2025-04-11T17:56:06+09:00",
          "tree_id": "851063420637a127bb269ca7f71f3b284e9b112f",
          "url": "https://github.com/planetarium/libplanet/commit/98728ca3ffb04e695b45d7d85d7cc454b74769aa"
        },
        "date": 1744362364801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3090075,
            "unit": "ns",
            "range": "± 137645.44187691621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5175708.333333333,
            "unit": "ns",
            "range": "± 171663.94308981387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4309358.620689655,
            "unit": "ns",
            "range": "± 124511.79381098626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12495930,
            "unit": "ns",
            "range": "± 6700993.314766509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 24593.333333333332,
            "unit": "ns",
            "range": "± 3400.3568880769167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4024450,
            "unit": "ns",
            "range": "± 9808.689240432925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10183221.42857143,
            "unit": "ns",
            "range": "± 168522.43940323667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21082369.09090909,
            "unit": "ns",
            "range": "± 809716.5255845491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 42438395.12195122,
            "unit": "ns",
            "range": "± 1409813.7282902342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82757015.38461539,
            "unit": "ns",
            "range": "± 176445.77470219118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4383655.133928572,
            "unit": "ns",
            "range": "± 132420.2187672006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 949304.5638020834,
            "unit": "ns",
            "range": "± 7215.407864387999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729969.3684895834,
            "unit": "ns",
            "range": "± 4885.838259584976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1741080.859375,
            "unit": "ns",
            "range": "± 29834.450178935404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458632.7408854167,
            "unit": "ns",
            "range": "± 4434.204176342997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419677.0865885417,
            "unit": "ns",
            "range": "± 2623.974677616401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3117483.870967742,
            "unit": "ns",
            "range": "± 93699.1821265415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337653.3333333335,
            "unit": "ns",
            "range": "± 39488.54927456216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3927460.714285714,
            "unit": "ns",
            "range": "± 110703.30497688058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3369547.619047619,
            "unit": "ns",
            "range": "± 79836.99405067564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3465353,
            "unit": "ns",
            "range": "± 709550.4659488872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241430.61224489796,
            "unit": "ns",
            "range": "± 39640.621173790554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 396107.0707070707,
            "unit": "ns",
            "range": "± 74911.98952093546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163833.33333333334,
            "unit": "ns",
            "range": "± 9783.663951776203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1493703.448275862,
            "unit": "ns",
            "range": "± 37370.973101350624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1290819.642857143,
            "unit": "ns",
            "range": "± 55512.81398230291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26935,
            "unit": "ns",
            "range": "± 9262.702171351053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93825.77319587629,
            "unit": "ns",
            "range": "± 18618.216205006254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45390.52631578947,
            "unit": "ns",
            "range": "± 15525.066030518508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74390.8163265306,
            "unit": "ns",
            "range": "± 33710.807978814046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4822.448979591837,
            "unit": "ns",
            "range": "± 1391.0265149921906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24204.255319148935,
            "unit": "ns",
            "range": "± 4605.3011738487985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "47928e8b99779f8f9375a0336fcc83d6c7b1df90",
          "message": "fix: Fix warnings",
          "timestamp": "2025-04-11T18:00:48+09:00",
          "tree_id": "04f81ff5bde3e04fa28ceea3a1f6ea4dc134ffea",
          "url": "https://github.com/planetarium/libplanet/commit/47928e8b99779f8f9375a0336fcc83d6c7b1df90"
        },
        "date": 1744362609077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2923050,
            "unit": "ns",
            "range": "± 85930.77305960124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5084188.235294118,
            "unit": "ns",
            "range": "± 102536.83412774735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4241303.571428572,
            "unit": "ns",
            "range": "± 119461.37290522871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12948090,
            "unit": "ns",
            "range": "± 5702270.498572379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21359.615384615383,
            "unit": "ns",
            "range": "± 892.5090465592184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4020815.3846153845,
            "unit": "ns",
            "range": "± 8743.077848012692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10084335.714285715,
            "unit": "ns",
            "range": "± 141077.1071607125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21200235,
            "unit": "ns",
            "range": "± 944352.2620589905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41753518.18181818,
            "unit": "ns",
            "range": "± 1275147.1246209887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82685000,
            "unit": "ns",
            "range": "± 98107.26468827568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4090748.6979166665,
            "unit": "ns",
            "range": "± 10860.54603168088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 911341.5169270834,
            "unit": "ns",
            "range": "± 5739.1374766414265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772728.0859375,
            "unit": "ns",
            "range": "± 4889.077168534832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640552.3158482143,
            "unit": "ns",
            "range": "± 3795.832290459382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 431430.6608072917,
            "unit": "ns",
            "range": "± 1688.7586551441907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 404381.6476004464,
            "unit": "ns",
            "range": "± 1475.4457452831477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3152313.3333333335,
            "unit": "ns",
            "range": "± 48182.47853831555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3114807.6923076925,
            "unit": "ns",
            "range": "± 25191.316676534316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4033920,
            "unit": "ns",
            "range": "± 131126.55718808452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3132008.3333333335,
            "unit": "ns",
            "range": "± 31241.128437695814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3310994,
            "unit": "ns",
            "range": "± 621932.9527701633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234175.3086419753,
            "unit": "ns",
            "range": "± 12331.996298898626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 432155,
            "unit": "ns",
            "range": "± 9824.75257489443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157792.85714285713,
            "unit": "ns",
            "range": "± 4350.770776449427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1453021.4285714286,
            "unit": "ns",
            "range": "± 25316.919808132836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1244379.6296296297,
            "unit": "ns",
            "range": "± 52160.84206704543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17945.744680851065,
            "unit": "ns",
            "range": "± 5274.602668491273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80518.55670103093,
            "unit": "ns",
            "range": "± 15445.673139378623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32668.49315068493,
            "unit": "ns",
            "range": "± 1641.2966344672575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49538.38383838384,
            "unit": "ns",
            "range": "± 23223.91759332988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2752.0833333333335,
            "unit": "ns",
            "range": "± 736.9894902723713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18408.163265306124,
            "unit": "ns",
            "range": "± 3916.3593832066103"
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
          "id": "1d98a5ac7c2c081932b238128af531715c1c6fb2",
          "message": "Merge pull request #4039 from s2quake/fix/dispose-error\n\nfix: Fix error caused by disposing of RendererService",
          "timestamp": "2025-04-15T10:42:25+09:00",
          "tree_id": "2c80473393d19e93392785affc55b7c627bdafdd",
          "url": "https://github.com/planetarium/libplanet/commit/1d98a5ac7c2c081932b238128af531715c1c6fb2"
        },
        "date": 1744681802341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2766576.470588235,
            "unit": "ns",
            "range": "± 55938.253116849344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5259505.063291139,
            "unit": "ns",
            "range": "± 272630.74111272825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4112213.131313131,
            "unit": "ns",
            "range": "± 391687.23795501626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8367621.951219512,
            "unit": "ns",
            "range": "± 1512997.5986716799"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23165.957446808512,
            "unit": "ns",
            "range": "± 2732.581322914617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4022557.1428571427,
            "unit": "ns",
            "range": "± 18979.04570372746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10227321.42857143,
            "unit": "ns",
            "range": "± 166558.74998871176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21086671.875,
            "unit": "ns",
            "range": "± 813535.3858058869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41737421.428571425,
            "unit": "ns",
            "range": "± 881108.8919786303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82581450,
            "unit": "ns",
            "range": "± 298194.50286425726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4128245.859375,
            "unit": "ns",
            "range": "± 60098.263513982376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 908816.9791666666,
            "unit": "ns",
            "range": "± 5629.685802586259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729261.9140625,
            "unit": "ns",
            "range": "± 7305.203767278659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1695414.6484375,
            "unit": "ns",
            "range": "± 9709.609823251967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459263.49748883926,
            "unit": "ns",
            "range": "± 1703.220199553299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 401147.8092447917,
            "unit": "ns",
            "range": "± 1077.9818399707628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2981538.4615384615,
            "unit": "ns",
            "range": "± 32891.57791039976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3214516.6666666665,
            "unit": "ns",
            "range": "± 106392.77499637168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4037614.285714286,
            "unit": "ns",
            "range": "± 42854.15081130697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3260786.6666666665,
            "unit": "ns",
            "range": "± 34260.30328167544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4232460,
            "unit": "ns",
            "range": "± 70418.61361072896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211386.45833333334,
            "unit": "ns",
            "range": "± 40093.10380336897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378214.1414141414,
            "unit": "ns",
            "range": "± 80057.12502561875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158952.77777777778,
            "unit": "ns",
            "range": "± 5160.923843715863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1463761.111111111,
            "unit": "ns",
            "range": "± 26094.244100249358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1270705.1282051282,
            "unit": "ns",
            "range": "± 43710.855864165685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19809.473684210527,
            "unit": "ns",
            "range": "± 3848.405961362321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74612,
            "unit": "ns",
            "range": "± 24207.972140423393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34330,
            "unit": "ns",
            "range": "± 1989.8730956291813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57678,
            "unit": "ns",
            "range": "± 27292.347615839837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3063.917525773196,
            "unit": "ns",
            "range": "± 1100.2069471060802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18796.938775510203,
            "unit": "ns",
            "range": "± 4985.865673248411"
          }
        ]
      }
    ]
  }
}