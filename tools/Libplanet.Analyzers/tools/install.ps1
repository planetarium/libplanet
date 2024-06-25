param ($installPath, $toolsPath, $package, $project)

$analyzersPaths = Join-Path `
  (Join-Path (Split-Path -Path $toolsPath -Parent) "analyzers" ) * -Resolve

foreach ($analyzersPath in $analyzersPaths) {
  # Install the language agnostic analyzers.
  if (Test-Path $analyzersPath) {
    foreach ($analyzerFilePath in Get-ChildItem $analyzersPath -Filter *.dll) {
      if ($project.Object.AnalyzerReferences) {
        $project.Object.AnalyzerReferences.Add($analyzerFilePath.FullName)
      }
    }
  }
}

$project.Type  # gives the language name like (C# or VB.NET)
$languageFolder = ""
if ($project.Type -eq "C#") {
    $languageFolder = "cs"
} elseif($project.Type -eq "VB.NET") {
    $languageFolder = "vb"
} elseif($languageFolder -eq "") {
    return
}

foreach($analyzersPath in $analyzersPaths) {
  # Install language specific analyzers.
  $languageAnalyzersPath = Join-Path $analyzersPath $languageFolder
  if (Test-Path $languageAnalyzersPath) {
    $analyzerFilePaths = Get-ChildItem $languageAnalyzersPath -Filter *.dll
    foreach ($analyzerFilePath in $analyzerFilePaths) {
      if($project.Object.AnalyzerReferences) {
        $project.Object.AnalyzerReferences.Add($analyzerFilePath.FullName)
      }
    }
  }
}
