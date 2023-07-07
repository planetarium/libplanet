window.BENCHMARK_DATA = {
  "lastUpdate": 1688710599518,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710547533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7897390.785714285,
            "unit": "ns",
            "range": "± 85722.40573922188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18936369.23809524,
            "unit": "ns",
            "range": "± 363764.5078404303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49528681.692307696,
            "unit": "ns",
            "range": "± 490888.19105786615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95096080.03846154,
            "unit": "ns",
            "range": "± 777700.4360389047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198533110.2857143,
            "unit": "ns",
            "range": "± 2360219.6866248385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54393.54639175258,
            "unit": "ns",
            "range": "± 6454.072143197364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307003.18947368424,
            "unit": "ns",
            "range": "± 18392.564330309382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292763.5135135135,
            "unit": "ns",
            "range": "± 14394.468445027187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277507.59793814435,
            "unit": "ns",
            "range": "± 20596.824109788842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4023547.2666666666,
            "unit": "ns",
            "range": "± 69866.45561095893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723575.6428571427,
            "unit": "ns",
            "range": "± 62349.69288877192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16508.76404494382,
            "unit": "ns",
            "range": "± 1751.0270818636177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82364.96842105263,
            "unit": "ns",
            "range": "± 7704.9661651025535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79386.70103092784,
            "unit": "ns",
            "range": "± 6537.591549972341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101327.05263157895,
            "unit": "ns",
            "range": "± 13167.316117236762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5121.31914893617,
            "unit": "ns",
            "range": "± 504.25209629571475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16591.615384615383,
            "unit": "ns",
            "range": "± 1485.1992591286325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605403.0869565217,
            "unit": "ns",
            "range": "± 165115.6853307556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014215.368131868,
            "unit": "ns",
            "range": "± 199495.2193606102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2461349.611111111,
            "unit": "ns",
            "range": "± 215149.619750663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6253510.5,
            "unit": "ns",
            "range": "± 243471.28305844954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258905.0727272728,
            "unit": "ns",
            "range": "± 137256.7973086909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3372293.6791044776,
            "unit": "ns",
            "range": "± 146639.74918217046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493121.117647059,
            "unit": "ns",
            "range": "± 142703.33026629686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173481.129032258,
            "unit": "ns",
            "range": "± 172201.74191570407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7528242.142857143,
            "unit": "ns",
            "range": "± 345327.8732456704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955673.223772322,
            "unit": "ns",
            "range": "± 39460.62176290503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998297.4732142857,
            "unit": "ns",
            "range": "± 32482.15806721026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315195.774988511,
            "unit": "ns",
            "range": "± 42197.84793128199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616386.8205788354,
            "unit": "ns",
            "range": "± 143135.92147340646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859134.1863839285,
            "unit": "ns",
            "range": "± 9207.745300343602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714465.5361979167,
            "unit": "ns",
            "range": "± 10685.928150240426"
          }
        ]
      }
    ]
  }
}