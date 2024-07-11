window.BENCHMARK_DATA = {
  "lastUpdate": 1720673245851,
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
          "id": "9068da120aca20e5d3b559519f08bd0034ca8eb2",
          "message": "Bump vite from 4.1.4 to 4.5.3\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.3.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.3/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.3/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "17f3ae096d1ed211125c1f4b083f9dc8ffd1d478",
          "url": "https://github.com/planetarium/libplanet/commit/9068da120aca20e5d3b559519f08bd0034ca8eb2"
        },
        "date": 1720673218225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3755963.4353966345,
            "unit": "ns",
            "range": "± 8434.151619924707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199569.7342354911,
            "unit": "ns",
            "range": "± 2062.954011443777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767201.0442708334,
            "unit": "ns",
            "range": "± 2810.611182137744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950240.1481370192,
            "unit": "ns",
            "range": "± 2803.5490093508956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618287.2788085938,
            "unit": "ns",
            "range": "± 670.8586730879696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586961.4221003606,
            "unit": "ns",
            "range": "± 436.9607147041726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2520938.4,
            "unit": "ns",
            "range": "± 32913.52223804504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2718206.533333333,
            "unit": "ns",
            "range": "± 46668.36420786672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3171259.533333333,
            "unit": "ns",
            "range": "± 52291.61607325194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604709.8372093025,
            "unit": "ns",
            "range": "± 80019.95068372168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3303657.5,
            "unit": "ns",
            "range": "± 33614.88812725237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066944.0268817204,
            "unit": "ns",
            "range": "± 78663.81595194548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2093154.2222222222,
            "unit": "ns",
            "range": "± 55266.64468064269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817990.8209876544,
            "unit": "ns",
            "range": "± 90253.05321093398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8408074.611111112,
            "unit": "ns",
            "range": "± 277887.39722867997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203193.24657534246,
            "unit": "ns",
            "range": "± 10088.07072980098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190251.0909090909,
            "unit": "ns",
            "range": "± 6631.0276863839035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171937.39130434784,
            "unit": "ns",
            "range": "± 4161.298122845043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3011499.7333333334,
            "unit": "ns",
            "range": "± 27740.721059911357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2810212.5,
            "unit": "ns",
            "range": "± 23870.088917368466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12760.443181818182,
            "unit": "ns",
            "range": "± 968.7906533755993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69950.27777777778,
            "unit": "ns",
            "range": "± 2717.6646218500446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61412.03333333333,
            "unit": "ns",
            "range": "± 1073.2740873917837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58279.489583333336,
            "unit": "ns",
            "range": "± 7616.009123439351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3419.141025641026,
            "unit": "ns",
            "range": "± 190.4562344899144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11891.921348314607,
            "unit": "ns",
            "range": "± 918.0458399220387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10363207.733333332,
            "unit": "ns",
            "range": "± 71694.45027980764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27257242.85714286,
            "unit": "ns",
            "range": "± 139239.33806875188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69407398.5,
            "unit": "ns",
            "range": "± 387647.2921650358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143114064.56666666,
            "unit": "ns",
            "range": "± 885446.752592358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291464745.73333335,
            "unit": "ns",
            "range": "± 1249039.8138537952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32314.9,
            "unit": "ns",
            "range": "± 445.881243531653"
          }
        ]
      },
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
          "id": "9068da120aca20e5d3b559519f08bd0034ca8eb2",
          "message": "Bump vite from 4.1.4 to 4.5.3\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.3.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.3/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.3/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "17f3ae096d1ed211125c1f4b083f9dc8ffd1d478",
          "url": "https://github.com/planetarium/libplanet/commit/9068da120aca20e5d3b559519f08bd0034ca8eb2"
        },
        "date": 1720673218225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3755963.4353966345,
            "unit": "ns",
            "range": "± 8434.151619924707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199569.7342354911,
            "unit": "ns",
            "range": "± 2062.954011443777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767201.0442708334,
            "unit": "ns",
            "range": "± 2810.611182137744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950240.1481370192,
            "unit": "ns",
            "range": "± 2803.5490093508956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618287.2788085938,
            "unit": "ns",
            "range": "± 670.8586730879696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586961.4221003606,
            "unit": "ns",
            "range": "± 436.9607147041726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2520938.4,
            "unit": "ns",
            "range": "± 32913.52223804504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2718206.533333333,
            "unit": "ns",
            "range": "± 46668.36420786672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3171259.533333333,
            "unit": "ns",
            "range": "± 52291.61607325194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604709.8372093025,
            "unit": "ns",
            "range": "± 80019.95068372168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3303657.5,
            "unit": "ns",
            "range": "± 33614.88812725237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066944.0268817204,
            "unit": "ns",
            "range": "± 78663.81595194548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2093154.2222222222,
            "unit": "ns",
            "range": "± 55266.64468064269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817990.8209876544,
            "unit": "ns",
            "range": "± 90253.05321093398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8408074.611111112,
            "unit": "ns",
            "range": "± 277887.39722867997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203193.24657534246,
            "unit": "ns",
            "range": "± 10088.07072980098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190251.0909090909,
            "unit": "ns",
            "range": "± 6631.0276863839035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171937.39130434784,
            "unit": "ns",
            "range": "± 4161.298122845043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3011499.7333333334,
            "unit": "ns",
            "range": "± 27740.721059911357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2810212.5,
            "unit": "ns",
            "range": "± 23870.088917368466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12760.443181818182,
            "unit": "ns",
            "range": "± 968.7906533755993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69950.27777777778,
            "unit": "ns",
            "range": "± 2717.6646218500446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61412.03333333333,
            "unit": "ns",
            "range": "± 1073.2740873917837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58279.489583333336,
            "unit": "ns",
            "range": "± 7616.009123439351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3419.141025641026,
            "unit": "ns",
            "range": "± 190.4562344899144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11891.921348314607,
            "unit": "ns",
            "range": "± 918.0458399220387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10363207.733333332,
            "unit": "ns",
            "range": "± 71694.45027980764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27257242.85714286,
            "unit": "ns",
            "range": "± 139239.33806875188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69407398.5,
            "unit": "ns",
            "range": "± 387647.2921650358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143114064.56666666,
            "unit": "ns",
            "range": "± 885446.752592358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291464745.73333335,
            "unit": "ns",
            "range": "± 1249039.8138537952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32314.9,
            "unit": "ns",
            "range": "± 445.881243531653"
          }
        ]
      }
    ]
  }
}