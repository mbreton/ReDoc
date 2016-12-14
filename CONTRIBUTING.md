ReDoc Contributions guide
=======================

This doc explains the rules and guide lines to contribute on ReDoc project.

Prerequisites
-------------

To be able to contribute on ReDoc project, you will need :

- NodeJS (v6.0)
- Yarn (installed in global): We prefer to use Yarn over NPM to manage our dependencies

New contributor
---------------

So, you are a new comer and you would like to know how to contribute to this project step by step ?

You are in the good place !

The first thing to help us on ReDoc project, it's to find a issue on the [project view](https://github.com/js-republic/ReDoc/projects/1) on github.

Prefer take an issue not yet in the *Work in progress*. Each issue, except bugs, are attached to an 'parent' issue called an *Epic* that described all the feature.

How the project view works
--------------------------

In [waffle.io](https://waffle.io/js-republic/ReDoc), you can see four columns : *Backlog* -> *Todos* -> *Work in progress* -> *Done*

- *Backlog* : Is the step where issue are debated. The issue come from the core team or are voted on [Feathub](http://feathub.com/js-republic/ReDoc).
- *Todos* : In this step, the issues are defined and wait for contributor (maybe you :tada:). 
- *Work in progress* : Contains all issue currently developed. To be done, each issue must be implemented in a pull-request, have well designed commit history, covered by unit tests and finally submit and reviewed by the core commiter team.
- *Done* : The final step, this column contains all finished issues

Coding rules
------------

Each rules described below about branch and pull-request naming and commit message are watch thanks to [GitMagic.io](gitmagic.io).
GitMagic will advise you when you will submit a pull-request. This rules are described in the [contributing.json](./contributing.json) file.

## Pull requests

All pull requests are welcome. You should create a new branch, based on the **master branch**, and submit the PR against the it.

Your branch name must be explicit like this : feature/componentWeather. All development branch must starts with feature/yourFeature and must be a reference to an issue.

Good
```
    feat/add-new-feature #12
    fix/fix-react-scanning-component #34
```
Bad 
```
   add-new-feature
   feat:add-new-feature
   fix-react-scanning-component
   fixe
```

Each branch will be reviewed and improved if necessary with a core-commiter.

**Your branch must have unit tests ! All PR without Unit test will not be accepted.**

## Branch

All branchs must have a name with a length between 4 and 256 characters and must be prefixed with *feat*, *fix*, *docs*, *refactor*, *chlore*. 

Good
```
    feat/add-new-feature
    fix/fix-react-scanning-component
```
Bad 
```
   add-new-feature
   feat:add-new-feature
   fix-react-scanning-component
   fixe
```
    

## Commit

Each commit must have a message with a length between 4 and 101 characters in lower case with a imperative sentence and must be prefixed with one of this type 
of commit : 
 - *feat* for the features
 - *fix* for fixes
 - *docs* when it concerns documentation
 - *refactor* when you make a refactoring
 - *chlore* when it's a configuration update without impact on behaviour
 - *style* for code style (formatting, missing semi colons, etc... no code change)

Good
```
    feat(react): add new feature
    fix(doc-generator): remove typo
    refactor(core): improve code
```
Bad 
```
   adding new feature
   Fixed feature
```
