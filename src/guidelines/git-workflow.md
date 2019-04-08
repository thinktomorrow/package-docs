# Git workflow

## Environments
- Production
- Staging
- Develop?

## Branches
We always work with feature branches. If possible you should squash your commits _before_ merging to master.
The only exception are unplanned hotfixes where you need to quickly provide a fix on master branch. 
Planned development should honour our branch workflow. 


::: warning
The master branch is always considered to be stable and ready to deploy to production. 
:::

Github flow: https://guides.github.com/introduction/flow/

Branches have following naming conventions:
- they should start with `ft/`, `fix` or `test` for resp. feature development, bugfixes or testing stuff. 
- The name should be descriptive and clear on the subject.
- The may should only contain lowercase letters and hyphens. Except for the /
- some examples are: `ft/sabco-export`, `fix/catalog-filter-mobile`, `test/db-benchmark`.

## Commits
We advice to use clear and descriptive commit messages. A commit should deal with one specific change. Try to avoid several different changes into one commit.
We prefer to use present tense and try to avoid verbs in the past tense. We notice a message is more clear and quickly gets to the point if you start with the verb itself.

Generic wordings like 'wip', 'fixes', 'improvements',.. do not provide any context.
Some good examples:
- Fix payment icon
- Improve button
- Hotfix Controller typo

Event better and more descriptive:
- Fix payment icon in the navigation bar
- Improve button wordings
- Hotfix typo in HomeController

## Pull requests
After a feature or has been developed, a pull request should be created on github. This sets the feature up for review. 
At least one of the other projectteam members should revise your code. It is preferred for the reviewer to pull
the branch locally and inspect and verify the feature within a working application. Communication around the 
PR is done via Github in the PR conversation tab. If the reviewer notices bugs/improvements/etc he/she should comment on 
the PR with their findings. The reviewer should not go in and fix this! They can however comment the improvements and 
ask if they need to take care of this should they want to. 

If this feature requires some special knowledge to test/merge it should be listed in the PR description. This includes stuff like:
- run migrations
- run seeds
- how to use this feature
- ...

Each PR should have a succeeding test build.

## Staging
After the PR has been approved, the teamlead is ready to merge the branch into staging. From this moment, the client
is able to view the new feature on the test environment.
 
## Production
Once the feature has been approved by the projecteam, teamlead and client, we schedule the release to production.
This involves the following procedure:
- release is planned and known by the entire projectteam
- projectteam is on standby during the release. This is mainly for bigger features.
- Feature branch is merged into master
- master branch is deployed to production server.
- visual confirmation of feature on production.

## Cleanup local branches

After a while of working with this flow you will accumulate quite a few branches locally that no longer exist remotely.
It can be quite bothersome to check and delete them one by one.

The following command checks for local branches that no longer exist on the remote and removes them.
It will not remove locale-only branches or branches that aren't fully merged.

`git checkout master && git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -d`
