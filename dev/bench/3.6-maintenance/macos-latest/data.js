window.BENCHMARK_DATA = {
  "lastUpdate": 1696918042534,
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
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696597938806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599950.346153846,
            "unit": "ns",
            "range": "± 73385.29332893858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19106718.353535354,
            "unit": "ns",
            "range": "± 1149229.9960710718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48143189.75454546,
            "unit": "ns",
            "range": "± 2028699.2659099211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91076553,
            "unit": "ns",
            "range": "± 1590954.094596384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186322447.85714287,
            "unit": "ns",
            "range": "± 2868180.208308259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36938.77011494253,
            "unit": "ns",
            "range": "± 4947.2562508581095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218806.087628866,
            "unit": "ns",
            "range": "± 19024.801565299233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213497.83695652173,
            "unit": "ns",
            "range": "± 14224.964796323442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192213.53191489363,
            "unit": "ns",
            "range": "± 13843.402121978486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3645618.652173913,
            "unit": "ns",
            "range": "± 88413.3132902756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3401493.925,
            "unit": "ns",
            "range": "± 119913.25435088432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16472.072164948455,
            "unit": "ns",
            "range": "± 2772.9249420641204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72483.55208333333,
            "unit": "ns",
            "range": "± 12633.497009616758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74550.73711340207,
            "unit": "ns",
            "range": "± 9735.742490916733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74190.76373626373,
            "unit": "ns",
            "range": "± 11357.601160882095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5944.75,
            "unit": "ns",
            "range": "± 1309.6279825322836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16327.005376344086,
            "unit": "ns",
            "range": "± 3150.5058621546445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1168864.2577319588,
            "unit": "ns",
            "range": "± 116893.33756483928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2280880.10989011,
            "unit": "ns",
            "range": "± 127636.61053200568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612200.91,
            "unit": "ns",
            "range": "± 128575.63101910688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8004858.781609195,
            "unit": "ns",
            "range": "± 1206937.0621534172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2822630.729508197,
            "unit": "ns",
            "range": "± 124125.75909111874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2939275.5,
            "unit": "ns",
            "range": "± 106688.07222242131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3525729.3139534886,
            "unit": "ns",
            "range": "± 115467.87327862401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3505266.303030303,
            "unit": "ns",
            "range": "± 163973.05316835723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10886096.641304348,
            "unit": "ns",
            "range": "± 970153.1869841748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4704964.5071134865,
            "unit": "ns",
            "range": "± 395517.9763397973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516806.8472975127,
            "unit": "ns",
            "range": "± 125434.98843700955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915399.5666454082,
            "unit": "ns",
            "range": "± 71805.07254729248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2278685.101859715,
            "unit": "ns",
            "range": "± 211912.92182779772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 677451.7055951287,
            "unit": "ns",
            "range": "± 13085.503292651369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603537.9355024858,
            "unit": "ns",
            "range": "± 14523.471589531688"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e8b368b41ed36df78caf7ddb972fdd3405cb944",
          "message": "Merge pull request #3453 from greymistcube/prepare/3.6.1\n\n🔧 Prepare 3.6.1",
          "timestamp": "2023-10-10T14:52:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/planetarium/libplanet/commit/9e8b368b41ed36df78caf7ddb972fdd3405cb944"
        },
        "date": 1696917980434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7582148.566666666,
            "unit": "ns",
            "range": "± 110583.16629478899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18610394.85714286,
            "unit": "ns",
            "range": "± 318572.74823442113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47856521.666666664,
            "unit": "ns",
            "range": "± 1086744.3945989069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92851673.13333334,
            "unit": "ns",
            "range": "± 937944.2673990257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194117016.35714287,
            "unit": "ns",
            "range": "± 2847735.4368016054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54030.83529411765,
            "unit": "ns",
            "range": "± 5197.9453652542425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287027.8505747126,
            "unit": "ns",
            "range": "± 14731.490989704269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279705.62637362635,
            "unit": "ns",
            "range": "± 18489.978943950726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269565.6323529412,
            "unit": "ns",
            "range": "± 12848.389329225494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3793114.1666666665,
            "unit": "ns",
            "range": "± 58647.02197172091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3400567.1428571427,
            "unit": "ns",
            "range": "± 59924.33953919552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18005.46511627907,
            "unit": "ns",
            "range": "± 2316.4641193888297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79239.40697674418,
            "unit": "ns",
            "range": "± 7074.4829707201625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71272.1046511628,
            "unit": "ns",
            "range": "± 6353.017932269892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82152.5425531915,
            "unit": "ns",
            "range": "± 9225.207714145925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4686.75,
            "unit": "ns",
            "range": "± 482.1367967751452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17604.862068965518,
            "unit": "ns",
            "range": "± 2781.3753631946847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477816.2311827957,
            "unit": "ns",
            "range": "± 176414.5316414266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687624.032967033,
            "unit": "ns",
            "range": "± 166703.02201556254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315475.1627906975,
            "unit": "ns",
            "range": "± 334206.48316226725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10169629,
            "unit": "ns",
            "range": "± 452294.9710380277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067535.5,
            "unit": "ns",
            "range": "± 101662.41947052018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3340306.1875,
            "unit": "ns",
            "range": "± 64028.134921265926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333969.259036144,
            "unit": "ns",
            "range": "± 246300.73536765692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3915126.3333333335,
            "unit": "ns",
            "range": "± 240534.34365567256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14436409.902173912,
            "unit": "ns",
            "range": "± 1541431.8654199203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5261777.136979166,
            "unit": "ns",
            "range": "± 47158.62913256729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578499.6820591518,
            "unit": "ns",
            "range": "± 10363.274250460227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 946916.6593098958,
            "unit": "ns",
            "range": "± 7129.20977155755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2303905.6240985575,
            "unit": "ns",
            "range": "± 15644.818397648773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 748051.8193359375,
            "unit": "ns",
            "range": "± 5033.381143725472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733010.2309244792,
            "unit": "ns",
            "range": "± 5370.1577828564405"
          }
        ]
      }
    ]
  }
}