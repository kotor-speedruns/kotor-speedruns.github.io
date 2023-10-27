
# KotOR Speedrun Guides Project

This is the main repository for the KotOR Speedruns community guides, hosted at https://kotor-speedruns.github.io/

The goal of this project is to provide a centralized place for referencing KotOR Speedrun routes, glitches, techniques, set-up, and other information. We previously hosted these guides on speedrun.com, though after recent changes to the website, and frequent source control frustrations we felt it best to move to a more controlled environment like GitHub. 

## Contributing
Contributions are welcome! The main branch is proteccted, but PRs are welcome. If you are already familiar with how GitHub works, feel free to skip this section. Many of our contributers do not have a development background, so if this is you this section is for you.

### Setting up a Personal Source

When using source control (like Git) we want different users to have separate sources that they're editing so our changes don't conflict and overwirte each other. There are several different ways to do this, though your options are more limited if you are not listed as an approved contributer to our repository.

Unfortunately we cannot give every who wants it contibution acess, so we instead limit it to certain community members. If that's you then read section "Community Members", otherwise read section "Non-Community Members".

#### Community Members
If you're a member of our community, then we can add your account as a contributer to this project, which will mean you don't need to worry about working with forks.

After you've been added as a contributer to this project, your first step will be to create a new branch. This can be done by selecting the branch drop-down, and typing the name of your new branch where it says "Find or create a branch..."

![The Create Branch Drop-down on Github](assets\images\Readme\github-branching.png)

Select "Create branch: \<your branch name\> from 'main'"

#### Non-Community Members
If you aren't a member of our community, welcome! While we won't be handing out contribution rights to everyone, we still welcome pull requests from forks.

To make a fork you slect the drop down next to the fork count in the upper right of the main page and select "Create a new fork"

![Alt text](assets\images\Readme\github-fork1.png)

Next you can name your fork whatever you'd like and change the description if you chose, though this isn't too important. All that matters is you Copy from the main branch and select "Create fork"

![Alt text](assets\images\Readme\github-fork2.png)

### Editing your Source
Now that you have your own personal source to work with, you can begin to make edits. Now there are several different ways you can chose to edit your source.

You can edit your source online using the GitHub in-browser editor. This is very easy for people who are new to this sort of thing, and don't want to learn any new tools. However it can get quite tedious, and leave some to be desired.

You can also edit locally on your machine using your favorite text editor (with the git command line interface or GitHub Desktop), or using a program that features git integration (such as VSCode or other common IDEs). This is tougher to set up for a novice, but has a much more rapid and flexible workflow. It also allows for local development testing, letting you see a local version of the webpage update in real time with your updates, which is essential if you're doing any styling or HTML work, and useful if you're doing somethign unorthodox with your Markdown.

Read the section that sounds best to you.

#### Editing Online
Using the online editor is pretty straight-forward. Use the file tree to navigate to the guide you want to edit (or click the useful github link on the online guide page to go directly there).

Select the pencil icon in the upper right of the guide page.

![Alt text](assets\images\Readme\github-edit.png)

You can also optionally explore the github.dev experience the drop-down next to the edit button offers, if you like.

After you've made your edits, click the green "Commit changes..." button in the upper right corner. Replace the Commit message with a brief description of what you did. Finally, click the green "Commit changes" button.

![Alt text](assets\images\Readme\github-commit.png)

Make sure you're commiting to your branch or fork. The second option to Create a new branch with these changes is useful for small, quick changes.

You can commit as much as you want, think of it as like saving your work but it keeps a permanent record of what you changed and when.

#### Editing Locally
Editing locally is fantastic for making complicated changes quickly, and using your usual text-editing workflows. It's also rather easy to set-up, especially if you're comfortable with a commandline. 

Learning to use the git CLI (command line interface) is a very useful skill. First step is to install it in your terminal of choice. I'll be using `bash` hosted on WSL for this example, but `cmd` and `powershell` both work fine. 

First you need to install git onto your terminal of choice. See the [Git Getting Started Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git for your platform. (You may also want to do [Git First Time Set-up](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) so that you can correctly connect to GitHub)

Once git is installed we need to clone the repository. On the main reposity page hit the "Code" drop down to get the clone link (HTTPS should be fine).

![Alt text](assets\images\Readme\github-clone.png)

Open your terminal and navigate to the directory you want to clone the repository (such as documents, etc). If git is installed correctly you should be able to run the following command:
```
git clone <CLONE LINK HERE>
```

This will download the repository to your computer for editing. 

Now we need to switch to the branch you created (NOTE THIS IS UNECESSARY IF YOU'RE WORKING ON A FORK). This can be done with
```
git switch <YOUR BRANCH NAME>
```
*If this doesn't work you might need to run `git fetch` first to retrieve the remote branches*

You're now all set to make whatever edits you'd like. When you're ready to commit changes to your branch there are several commands to be run:
 ```
 git add .
 ```
 This adds all changes in the current directory (the '.' means current directory) to "Staged" files. You can replace the dot with file or folder name to stage specific changes and ignore others. When changes are staged, that means they're ready to be added to a commit.
 ```
 git commmit -m "Commit Message Here"
 ```
 Run this when you want to commit your staged changes. The Commit message should be somethign brief describing what you've done in this commit. This will commit it to your local branch, in order to put your commits onto the remote branch (on GitHub) you need to run the below.
 ```
 git push
 ``` 
 This will push all of your local commits up to the remote branch, and make them appear in GitHub.

 If there are any changes that happened on your branch in GitHub that your want to pull down you can run
 ```
 git pull
 ```

 Similarly if you want to update your version of main, `git switch main`, `git fetch`, and then `git pull`

### Making Pull Requests

So you're all done making changes on your branch or fork, and you want it to be merged into the proper website. All you need to do is make a Pull Request.

To do this open the "Pull requests" tab in the GitHub Repository, and select the green "New Pull Request" button (there may be a handy "Compare & pull request" button if you're logged in, which may save a few steps).

![Alt text](assets\images\Readme\github-pr.png)

Now if you're working on a fork, you want to select "compare across forks". If you're just on a branch simply select the compare drop down, and select the branch you want to compare. Then you can select the green "Create pull request" button.

![Alt text](assets\images\Readme\github-pr-compare.png)

Once you've created the pull request you can use the UI to title it, add a description, add comments, etc. After which another community member (usually indy or myself) will take a look at the request, and either approve or request changes.

## Local Dev Set-up


## Important Links


## Contact