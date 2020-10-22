Releasing guide
===============

*(The current process to release a new version still has many manual tasks.
These should be further automated.)*

This document explains how to release a new version.  As the whole releasing
process is half automated, this covers the other half that humans should
manually conduct.

Note that there is the [quick summary](#quick-summary) to remind those who have
already read this document of checklist on the bottom.  If it is your first
time to this, you should read the whole document first.


Versioning
----------

The Libplanet project follows [Semantic Versioning].  If you are not familiar
with this versioning system, you should read its specification first.  We will
use the terms that Semantic Versioning defines, e.g., major/minor/patch
versions.

Note that we use two kinds of branches in the project:

 -  *main*: The unreleased code for the next *major*/*minor* version.
    For example, if the highest released version is *1.2.3*, the *main* branch
    contains the code for *1.3.0* or *2.0.0* (it depends on the roadmap).

 -  *<var>X</var>.<var>Y</var>-maintenance*: The unreleased code for the next
    *patch* version.  There can be multiple maintenance branches at a time.
    For example, there could be *1.1-maintenance* and *1.0-maintenance* at
    a time.  These maintenance branches are closed when their corresponding
    major/minor versions are decided to discontinue to support.

[Semantic Versioning]: https://semver.org/


Changelog
---------

Immediately before releasing a new version, you need to fill up the release
date on the changelog of the version to release.  As long as there is nothing
wrong with it, there should be a section of the unreleased version in
the [*CHANGES.md*](CHANGES.md) file.

For example, let's suppose you are going to release the version *1.2.3*.
Then there should be a section like this:

~~~~ commonmark
Version 1.2.3
-------------

To be released.

...
~~~~

You should replace the sentence <q>To be released</q> with
<q>Released on ...</q> (put the release date instead):

~~~~ commonmark
Version 1.2.3
-------------

Released on October 20, 2020.

...
~~~~

Also, it's recommended to double-check if the changelog has any formatting
errors or is well rendered in the web browser.

The commit that contains this change should have the message like
<q>Release 1.2.3</q>:

~~~~ bash
git commit -m "Release 1.2.3" CHANGES.md
~~~~

See also these commits for example:

 -  <https://github.com/planetarium/libplanet/commit/ea1086d161c72f1ac5d0d6bbb8d67728034f6451>
 -  <https://github.com/planetarium/libplanet/commit/eba9e7bd436c5186bb56851bc853105805ed747f>

The commit should not be pushed to the upstream repository, but be sent
as a pull request instead.

See also the following pull requests for example:

 -  <https://github.com/planetarium/libplanet/pull/906>
 -  <https://github.com/planetarium/libplanet/pull/855>


Tagging
-------

After the pull request (which fills up the release date on the changelog)
is merged, you need to tag the pull request's merge commit.  The tag name
must be the version number without any prefix or suffix, e.g., *1.2.3*;
the tag message should be like <q>Libplanet 1.2.3</q>.

~~~~ bash
git tag -m "Libplanet 1.2.3" 1.2.3
~~~~

If you have a GPG (PGP) key, it is recommended to sign the tag using your key:

~~~~ bash
git tag --sign -m "Libplanet 1.2.3" 1.2.3
~~~~

Note that signed tags are visually distinct on GitHub:

![Signed tags appearing distinct on GitHub.](https://git.io/JTRJs)

The created tag should be directly pushed to the upstream repository.
A tag push triggers GitHub Actions to release a new version.  The script
automates the below processes:

 -  Listing a new version on [GitHub Releases].  The corresponding changelog
    section is extracted to fill up the description of the release.
    Each release contains:
     -  NuGet packages (*Libplanet\*.nupkg*)
     -  Complete assemblies (*Libplanet\*-net\*.tar.xz*) for .NET Core and
        .NET Framework/Mono
     -  Prebuilt binaries of Libplanet Tools for Linux
        (*planet-\*-linux-\*.tar.xz*), macOS (*planet-\*-osx-\*.tar.xz*),
        and Windows (*planet-\*-win-\*.tar.xz*)
 -  Submitting NuGet packages of a new version.  The packages are listed
    in the [Contributing guide](CONTRIBUTING.md#projects).
 -  Building a new version of docs and uploading it on
    <https://docs.libplanet.net/>, which is hosted by GitHub Pages.
    See also the *gh-pages* branch.
 -  Submitting Libplanet.Tools to npm [@planetarium/cli].

In other words, you don't have to do them by yourself.  However, you should
check twice if all these packages and docs are successfully submitted.
If something went wrong, start the debugging by reading the build logs on
GitHub Actions.

[@planetarium/cli]: https://www.npmjs.com/package/@planetarium/cli
[GitHub Releases]: https://github.com/planetarium/libplanet/releases


Preparing next
--------------

After a new tag is merged and all automated processes are successful,
you need to prepare the next release.  This process is slightly tricky,
because the process varies depending on whether the released version
was a major/minor release, or just a patch release.


### Patch release

If what you have just released is a patch release, there are two manual tasks
to do:

 -  Port the released code to the *main* branch, so that the next major/minor
    release does not miss bugfixes from the previous patch release.
 -  Prepare the next patch release.

First of all, your last release should be ported to the *main* branch.
Switch to the *main* branch and make sure it is up-to-date.
Then, merge the tag (e.g., *1.2.3*) you made above into the *main* branch:

~~~ bash
git switch main  # Or on Git < 2.23: git checkout main
git fetch upstream && git reset --hard upstream/main
git merge 1.2.3
~~~

Trying to merge like above will most likely have conflicts on the *CHANGES.md*
file, because both branches (*main* and *<var>X</var>.<var>Y</var>-maintenance*)
have their own topmost section in the changelog.  However, this can be simply
resolved: leave both sections and place the *main* branch's section topmost.

After successful merging, send a pull request of it to the upstream's *main*
branch.  See also the below commits for example:

 -  <https://github.com/planetarium/libplanet/commit/1b1e5e8b37c4b6a3003e1c06b42d4180c6d5048c>
 -  <https://github.com/planetarium/libplanet/commit/4d7cc983ee6111031781e50f89f07364021aedf8>

You also need to prepare the next patch release.  Switch to the maintenance
branch (e.g., *1.2-maintenance*), and make sure it is up-to-date.

You need to bump the patch version of the `<VersionPrefix>` field
in the *Libplanet/Libplanet.csproj* file.  For example, if the version you have
just released is *1.2.3*, bump it to *1.2.4* (3 + 1 = 4).

Also the changelog section for the next patch release should be prepared; add
a new section like this on the topmost next the to-level heading of
the changelog document:

~~~~ commonmark
Version 1.2.4
-------------

To be released.

~~~~

Note that the release date for this is not decided. A simple message like
<q>Version bump</q> is enough for a commit for the above changes.

Lastly, send a pull request of the commit to the upstream's
*<var>X</var>.<var>Y</var>-maintenance* branch (e.g., *1.2-maintenance*).

See also the following commit for example:

<https://github.com/planetarium/libplanet/commit/481b0e559b78bbc4027a88cc12698a1540bb4c5b>

And a pull request:

<https://github.com/planetarium/libplanet/pull/887>


### Major/minor release

If what you have just released is a major or minor release, there are two
manual tasks:

 -  Prepare the next patch release.
 -  Prepare the next major or minor release.

To prepare for the next patch release, a new maintenance branch should be made.
Create a new branch named *<var>X</var>.<var>Y</var>-maintenance* branch and
switch it.  The branch's *HEAD* should refer to the upstream's *main* branch.
Suppose you have just released a minor version *1.2.0*:

~~~~ bash
git fetch upstream
git switch --create=1.2-maintenance  # Or: git checkout -b 1.2-maintenance
git reset --hard upstream/main
~~~~

Since this maintenance branch purposes to prepare the next patch release, e.g.,
*1.2.1*, the `<VersionPrefix>` field of the *Libplanet/Libplanet.csproj* file
also needs to be updated:

~~~~ xml
<VersionPrefix>1.2.1</VersionPrefix>
~~~~

As there is no section for the next patch release (e.g., *1.2.1*) in
the changelog, you need to add an empty section for this at the top:

~~~~ commonmark
Libplanet changelog
===================

Version 1.2.1
-------------

To be released.

~~~~

Note that the release date for this is not decided. A simple message like
<q>Version bump</q> is enough for a commit for the above changes.

The new maintenance branch and the added commit should be pushed to
the upstream.

See also the below commit for example:

<https://github.com/planetarium/libplanet/commit/836949f72700cf49f56396be05b92d4d7c994abd>

To prepare the next *major* or *minor* release, you need to do the similar task
again.  Whether to release a new *major* version or a new *minor* version next
depends on the roadmap (it should be discussed in advance).  Suppose we plan
to release *1.3.0* next time here.

Switch to the *main* branch and make sure it is up-to-date:

~~~~ bash
git switch main  # Or on Git < 2.23: git checkout main
git fetch upstream && git reset --hard upstream/main
~~~~

Then, in a similar manner, update *Libplanet/Libplanet.csproj*'s
`<VersionPrefix>` to *1.3.0*, and add an empty section for *1.3.0* with
the release date undecided to the changelog.  Make a commit with a simple
message like <q>Version bump</q>.

At this time, this change should be sent as a pull request on the upstream.
The PR should target at the *main* branch of course.

See also the following commit for example:

<https://github.com/planetarium/libplanet/commit/8866560199e2c53fc353181623a28b8f5c07f5a7>

Plus a pull request:

<https://github.com/planetarium/libplanet/pull/857>


Quick summary
-------------

*This summary is not for first-time readers.  You should read the whole document
at the very first time.*

Note that *<var>X</var>.<var>Y</var>.<var>Z</var>* means a version to release.

The checklist to release a new version:

 1. Make sure that you are on the right branch
    (*<var>X</var>.<var>Y</var>-maintenance* for a patch release,
    and *main* for a major/minor release).
 2. Fill up the released date on the changelog.
 3. `git commit -m Release X.Y.Z`
 4. Send a pull request and wait until it is merged.
 5. `git tag --sign -m "Libplanet X.Y.Z" X.Y.Z`
 6. `git push upstream X.Y.Z`
 7. Check if the all automated processes are successful.
     - GitHub Releases
     - NuGet
     - npm
     - <https://docs.libplanet.io/> (GitHub Pages)

The checklist to prepare the next release:

 -  If you have just released a *patch version*:

     1. Switch to the *main* branch and make sure it is up-to-date.
     2. `git merge X.Y.Z`
     3. Resolve conflicts on the *CHANGES.md* file.  Leave all sections from
        both branches and place the *main* branch's section topmost.
     4. Send a pull request to the upstream's *main* branch.
     5. Switch to the *<var>X</var>.<var>Y</var>-maintenance* branch and
        make sure it is up-to-date.
     6. Bump `<VersionPrefix>`'s patch version on *Libplanet/Libplanet.csproj*.
        (For example, if you have just released *1.2.3*, bump it to *1.2.4*.)
     7. Add a new section for the next unreleased version to the changelog,
        with the sentence <q>To be released</q> (no release date).
     8. Commit the changes with a message <q>Version bump</q>.
     9. Send a pull request to the upstream's
        *<var>X</var>.<var>Y</var>-maintenance* branch.

 -  If you have just released a *major/minor version*:

     1. Create a new branch named *<var>X</var>.<var>Y</var>-maintenance* and
        switch to it.
     2. Bump `<VersionPrefix>` on *Libplanet/Libplanet.csproj* to
        *<var>X</var>.<var>Y</var>.1*.
     3. Add a new section for the next unreleased version
        (*<var>X</var>.<var>Y</var>.1*) to the changelog, with the sentence
        <q>To be released</q> (no release date).
     4. Commit the changes with a message <q>Version bump</q>.
     5. `git push upstream X.Y-maintenance`
     6. Switch to the *main* branch.
     7. Bump `<VersionPrefix>`'s minor version on *Libplanet/Libplanet.csproj*.
        (For example, if you have just released *1.2.0*, bump it to *1.3.0*.)
     8. Add a new section for the next unreleased minor version to the
        changelog, with the sentence <q>To be released</q> (no release date).
     9. Commit the changes with a message <q>Version bump</q>.
    10. Send a pull request to the upstream's
        *<var>X</var>.<var>Y</var>-maintenance* branch.
