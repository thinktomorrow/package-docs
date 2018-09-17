# Trello workflow

We currently use [Trello](https://trello.com/) for our project backlog.
Issues are represented as cards in trello. Each phase of the issue is represented as a lane. 

## Issue flow
The different lanes we have in a project are mostly the following:
1. **Backlog**: the entire list of issues. 
2. **Next**: the issues that have priority and should be dealt with. These are the issues you can choose from to work on next.
3. **In progress**: Which issues are the team working on at this moment?
4. **PR**: Issues that are developed and awaiting review by a colleague.
5. **Done**: Issue that is approved and successfully merged.

## Backlog & Next
The projectlead is responsible for the completion of the backlog and of making sure that the next lane contains the expected priorities. 
The intent and impact of an issue should be clearly analysed beforehand.
The projectlead should be ahead of the schedule in regards of issue analysis. 

## In progress
If you have chosen an issue from the next lane, you should verify the following:
- make sure you are assigned to the card if not already
- quickly verify with the projectlead that you are taking up the issue.
- make sure that the issue is clear in its intent. The description should give you the proper context and information to get started.
- you are allowed to further split up the issue into smaller assignments. For this, it is advised to create a checklist inside the card.

It is advised to create a feature branch for each issue. This allows to easily create a PR for the specific issue.

## PR
When you developed and finished the issue, you should create a pull request for your feature branch.
Assign at least one member of the team to this PR for review. Next to a teammember, you should always assign the projectlead.

If this feature requires some special knowledge to test/merge it should be listed in the PR description. This includes stuff like:
- run migrations
- run seeds
- how to use this feature
- ...

After review, the branch is first merged to staging in order to check on the server and ready for feedback from the client.

## Done
After approval by the client, the branch can be scheduled for merge to master. 
Once in master, it should be deployed to production immediately.
