window.BENCHMARK_DATA = {
  "lastUpdate": 1744191011983,
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
      }
    ]
  }
}