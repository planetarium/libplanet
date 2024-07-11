window.BENCHMARK_DATA = {
  "lastUpdate": 1720675756936,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28c6a36fec15c3efd6012fbe7f72031cb5cd3f49",
          "message": "Bump braces from 3.0.2 to 3.0.3\n\nBumps [braces](https://github.com/micromatch/braces) from 3.0.2 to 3.0.3.\n- [Changelog](https://github.com/micromatch/braces/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/micromatch/braces/compare/3.0.2...3.0.3)\n\n---\nupdated-dependencies:\n- dependency-name: braces\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:29Z",
          "tree_id": "7783b70b3b207686b30737915f07b61494f0e89b",
          "url": "https://github.com/planetarium/libplanet/commit/28c6a36fec15c3efd6012fbe7f72031cb5cd3f49"
        },
        "date": 1720675743416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10862154.153846154,
            "unit": "ns",
            "range": "± 96162.89304945555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26511852.923076924,
            "unit": "ns",
            "range": "± 243658.9238182004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68322276.42857143,
            "unit": "ns",
            "range": "± 125071.55420903562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138559267.5,
            "unit": "ns",
            "range": "± 279581.91831121146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277592673.0714286,
            "unit": "ns",
            "range": "± 404352.1746104814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14106.620689655172,
            "unit": "ns",
            "range": "± 402.44302292313057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109819.85294117648,
            "unit": "ns",
            "range": "± 3096.052930821053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104971.83333333333,
            "unit": "ns",
            "range": "± 4380.040478618847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93057.56521739131,
            "unit": "ns",
            "range": "± 2270.285220889596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3032798.6588235293,
            "unit": "ns",
            "range": "± 162906.05656880554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766440.4,
            "unit": "ns",
            "range": "± 172793.7853454227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5035.058139534884,
            "unit": "ns",
            "range": "± 405.22970550921633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26563.416666666668,
            "unit": "ns",
            "range": "± 1429.3826808778585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22709.775510204083,
            "unit": "ns",
            "range": "± 1820.0191713650531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30199.625,
            "unit": "ns",
            "range": "± 5809.633169414218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1070.776595744681,
            "unit": "ns",
            "range": "± 206.67381990336298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4979.340425531915,
            "unit": "ns",
            "range": "± 566.7181612249448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683834.5952380953,
            "unit": "ns",
            "range": "± 36685.20074583081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272690.6842105263,
            "unit": "ns",
            "range": "± 42295.67635232099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1065418.134328358,
            "unit": "ns",
            "range": "± 48735.79946519792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9492599.14,
            "unit": "ns",
            "range": "± 1513502.4732870308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2162449.5714285714,
            "unit": "ns",
            "range": "± 33081.346316464966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287814.4523809524,
            "unit": "ns",
            "range": "± 99977.55533996498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2561869,
            "unit": "ns",
            "range": "± 19473.95544053647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270878.6923076925,
            "unit": "ns",
            "range": "± 20910.73451358024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2941810.6,
            "unit": "ns",
            "range": "± 130076.39248387369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3022544.2721354165,
            "unit": "ns",
            "range": "± 61545.045623736696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925351.310546875,
            "unit": "ns",
            "range": "± 4379.686633765388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614469.6393880208,
            "unit": "ns",
            "range": "± 4871.109481171414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631868.53515625,
            "unit": "ns",
            "range": "± 3105.732615234629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470425.2886393229,
            "unit": "ns",
            "range": "± 736.7079625278824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416898.4909667969,
            "unit": "ns",
            "range": "± 1105.8749143414798"
          }
        ]
      }
    ]
  }
}