window.BENCHMARK_DATA = {
  "lastUpdate": 1698667016665,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "f1eb0c6d0bd637f1a2b33a1ca540400c75201b88",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T20:33:25+09:00",
          "tree_id": "858e9b734ea711e4bbeec82a2eba57fe46e551d7",
          "url": "https://github.com/planetarium/libplanet/commit/f1eb0c6d0bd637f1a2b33a1ca540400c75201b88"
        },
        "date": 1698666913143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9914632.657894736,
            "unit": "ns",
            "range": "± 502413.7361615173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25448013.654761903,
            "unit": "ns",
            "range": "± 1312427.7515633118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59571558.038461536,
            "unit": "ns",
            "range": "± 701370.2098908031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95887192.5409836,
            "unit": "ns",
            "range": "± 4008954.5656983256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188409276.7142857,
            "unit": "ns",
            "range": "± 1914259.710541918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61068.63953488372,
            "unit": "ns",
            "range": "± 13582.50580551216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227663.95360824742,
            "unit": "ns",
            "range": "± 19128.782828513413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217771.6,
            "unit": "ns",
            "range": "± 17308.746374902694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200937.54639175258,
            "unit": "ns",
            "range": "± 16278.15799431648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080856.3673469387,
            "unit": "ns",
            "range": "± 406771.060090035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3382183.6923076925,
            "unit": "ns",
            "range": "± 50224.031481261736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13171.733333333334,
            "unit": "ns",
            "range": "± 1480.1463926991223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62247.59090909091,
            "unit": "ns",
            "range": "± 8788.514881263036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63602.80612244898,
            "unit": "ns",
            "range": "± 14623.42476522124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63134.07142857143,
            "unit": "ns",
            "range": "± 10904.279080856097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4001.7065217391305,
            "unit": "ns",
            "range": "± 1184.4652573592293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12537.186813186812,
            "unit": "ns",
            "range": "± 1894.0139499198106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1984908.8711340206,
            "unit": "ns",
            "range": "± 505436.69358272746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4292068.860215054,
            "unit": "ns",
            "range": "± 1049449.6866961687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3079887.5454545454,
            "unit": "ns",
            "range": "± 774000.4476489145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13932801.641304348,
            "unit": "ns",
            "range": "± 3422826.928631893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2897224.93877551,
            "unit": "ns",
            "range": "± 115647.14298467129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424772.6082474226,
            "unit": "ns",
            "range": "± 260942.1455610242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4247770.164948453,
            "unit": "ns",
            "range": "± 282822.37393749313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3507210.361702128,
            "unit": "ns",
            "range": "± 200072.72046990308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11007959.08888889,
            "unit": "ns",
            "range": "± 929693.9384172204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4268394.42578125,
            "unit": "ns",
            "range": "± 60304.28917181348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1373458.7527173914,
            "unit": "ns",
            "range": "± 52302.107031746105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076454.567437066,
            "unit": "ns",
            "range": "± 53177.84096095532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523089.0640545283,
            "unit": "ns",
            "range": "± 212511.6896507279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799061.3765345982,
            "unit": "ns",
            "range": "± 12316.945241803107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700336.0612717462,
            "unit": "ns",
            "range": "± 71553.52076177728"
          }
        ]
      }
    ]
  }
}