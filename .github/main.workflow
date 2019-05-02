workflow "on push" {
  on = "push"
  resolves = ["docs:publish"]
}

action "docs:build" {
  uses = "dahlia/actions/docfx@master"
  env = {
    MSBUILD_PROJECT = "Libplanet"
  }
  args = ["Docs/docfx.json"]
}

action "docs:publish" {
  uses = "docker://alpine/git:latest"
  needs = "docs:build"
  secrets = [
    # GHPAGES_SSH_KEY has to contain a base64-encoded private key without
    # new lines:
    #   base64 -w0 < ssh_key_file
    # The key has to be also registered as a deploy key of the repository,
    # and be allowed write access.
    "GHPAGES_SSH_KEY"
  ]
  runs = ["Docs/publish.sh"]
}
