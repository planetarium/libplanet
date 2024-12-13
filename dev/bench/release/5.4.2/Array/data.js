window.BENCHMARK_DATA = {
  "lastUpdate": 1734063590775,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "3e7b2c11de7622c9cab18e0d2e35b2d9c4133414",
          "message": "release: 5.4.2",
          "timestamp": "2024-12-13T13:09:48+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/3e7b2c11de7622c9cab18e0d2e35b2d9c4133414"
        },
        "date": 1734063482148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10606062.92857143,
            "unit": "ns",
            "range": "± 156750.88111516033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26439916.230769232,
            "unit": "ns",
            "range": "± 172435.25903371864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65939195.692307696,
            "unit": "ns",
            "range": "± 97915.50681700406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134046058,
            "unit": "ns",
            "range": "± 117782.30733292105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269764307.46666664,
            "unit": "ns",
            "range": "± 403576.5401497796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13070.243243243243,
            "unit": "ns",
            "range": "± 411.77511428538844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53947.17105263158,
            "unit": "ns",
            "range": "± 2745.07494196744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106287.63636363637,
            "unit": "ns",
            "range": "± 5005.022215078227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90697.10344827586,
            "unit": "ns",
            "range": "± 2274.671284647953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2847016.876344086,
            "unit": "ns",
            "range": "± 161718.6383658032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2728467.38,
            "unit": "ns",
            "range": "± 177961.70698122773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5154.255319148936,
            "unit": "ns",
            "range": "± 938.7765881711603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27140.324175824175,
            "unit": "ns",
            "range": "± 1818.1832849389132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22362.465909090908,
            "unit": "ns",
            "range": "± 1532.2872352265563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29071.880434782608,
            "unit": "ns",
            "range": "± 4316.269713339786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1247.983870967742,
            "unit": "ns",
            "range": "± 220.31487412057723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4874.431818181818,
            "unit": "ns",
            "range": "± 504.71685007148466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675604.4090909091,
            "unit": "ns",
            "range": "± 43088.56086099999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276108.6,
            "unit": "ns",
            "range": "± 56402.1775890474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1029309.9493670886,
            "unit": "ns",
            "range": "± 49541.73900395368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8745170.57,
            "unit": "ns",
            "range": "± 1235290.5059954647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129275.5094339624,
            "unit": "ns",
            "range": "± 88671.85527976009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275009.093023256,
            "unit": "ns",
            "range": "± 83414.67326721872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2540514.1904761903,
            "unit": "ns",
            "range": "± 49279.85550873607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259984.8039215687,
            "unit": "ns",
            "range": "± 89252.85364245104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2845587.027027027,
            "unit": "ns",
            "range": "± 87108.81137388726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3050048.66640625,
            "unit": "ns",
            "range": "± 41150.301939322606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919396.2897385817,
            "unit": "ns",
            "range": "± 5281.164971994022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614797.873046875,
            "unit": "ns",
            "range": "± 8368.688527243346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632445.7769252232,
            "unit": "ns",
            "range": "± 10753.939500036955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465736.80618722097,
            "unit": "ns",
            "range": "± 601.7140451653044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421371.7255859375,
            "unit": "ns",
            "range": "± 1301.4354590560908"
          }
        ]
      }
    ]
  }
}