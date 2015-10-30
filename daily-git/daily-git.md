# [fit] daily _**git**_
### gabriele petronella
#### software engineer @ buildo
#### Twitter: @gabro27 / @buildoHQ

---
![inline](http://i.cubeupload.com/98PEr9.png)

---

# Version control & me
<br />
2010-2011: __svn__
<br />
2010-today: __git__

^
Using git since 2010 on a daily-base.
Before git, svn for Software Engineering class at PoliMi,
then as a tutor
Late 2010 I started working with some guys on a project,
which later became my first startup.
"We're gonna use git for version control"
"Cool, what's version control?"
"..."
He sat down and explained what I should've done to work with git

---
#[fit]`git add`
#[fit]`git commit`
#[fit]`git push`
#[fit]`git pull`

^

---

# [fit] That's it

---

# [fit] **git** is simple

^
Did I fool anyone?

---

# [fit] Questions?

---

![](http://i.giphy.com/xtc15Nu4ODSQE.gif)

---

# [fit] **git** is hard

^
git is an extremely powerful tool, which can achieve lots of things.
Hence, it's not a simple tool.

---

# git is java

---

![](http://i.giphy.com/WJK2SABYwvEvm.gif)

---

# git is (like) java
### **learning it is part of your job**

^
version control is no ancillary task. You have to learn it in the same way you learn java.
and you have to learn its best practices and quirks, as much as you do with java
it's your responsibility as a developer to be profiscient with it

---

# Takeaways

- git is powerful, hence hard
- git is flexible
- an idea of the stuff you can do with it

---
^
This talk will give you an idea of the things you can with git
It's not a tutorial, but gives you an idea of the kind of stuff you can do.

# [fit] the *git* model

^ 
first and most important difference with svn, is that git is distributed
no difference between remote and local copies
you get backups for free!

---

# SVN
```sh
svn add 
svn commit
```

# git
```sh
git add
git commit
git push
```

^ noticeable difference: when you commit in svn you sync with the central repo
In git, when you commit you're stil local
This confuses many

---

# enter the **stage**

---

![inline](http://snag.gy/ZAeI9.jpg)

---

# let's start!
### (with the basics)
![](http://cache-blog.credit.com/wp-content/uploads/2013/11/credit-basics.jpg)

---

# 1. create a new repo
![](http://drivenhealthy.com/wp-content/uploads/2013/07/Starting_blocks1.jpg)

---

# 1. create a new repo

```sh
mkdir darepo
cd darepo
git init
git commit --allow-empty -m "[init]"
```
#### [`http://stackoverflow.com/questions/435646/combine-the-first-two-commits-of-a-git-repository`](http://stackoverflow.com/questions/435646/combine-the-first-two-commits-of-a-git-repository)


^ an initial empty commit allows for an easier life when performing significant refactors
it also allows to push an empty repository (you can't push if no commits)

---

# 2. check the repo status
![](http://thumbs.imagekind.com/4722833_650/Gauges_art.jpg?v=1441692438)

---

# 2. check the repo status

<br />
<br />
`git status`

^ git status tells you everything you should know about the status of your repo
new untracked files, modified files, added files, detached HEAD state, remote branch diff

---

# 3. add changes to the index
![](http://www.maxwilliamsdesign.com/wordpress/wp-content/themes/maxwilliamsdesign/images/portfolio/print/naturalpages/index.jpg)

---

# 3. add changes to the index

<br />
<br />
`git add .gitignore`

^
move a file (or a part of it) from the working directory to the index,
ready to be committed

---

# 3. add changes to the index, the cool way)

<br />
<br />

`git add -p`

---

# 4. save changes
![](http://www.noordinaryhomestead.com/wp-content/uploads/2011/01/Make-a-Floppy-Disk-Wall-Clock.jpg)

---

# 4. save changes

<br />
<br />
`git commit -v`

^
moves everything in the staging area to the repository. The -v option lets you see the diff in the commit message editor

---

# 4. (bonus) save changes, the cool way 

<br />
<br />

`git commit -p`

^
basically git add -p + git commit at the end


---

# 5. Browse the history
![](http://slightlywarped.com/wp-content/uploads/2015/05/640LfMR3.jpg)

---

# 5. Browse the history

<br />
<br />
git log

^
an extremely versatile command. Lot's of things you can do
git 

---
# 5. browse the history, examples

<br />
`git log --color`
`git log --color --graph`
`git log --color --graph --oneline`
`git log --color --graph --oneline --decorate`

---
^ many many options
man git-log is the Lord of the Rings

# 5. browse the history, with style
<br />
git log --graph --full-history --all --color --pretty=format:"%x1b[31m%h%x09%x1b[32m%d%x1b[0m%x20%s%x20%C(yellow)(%an, %C(white)%ar)"

---

# 5. browse the history, à la GitHub
<br />
git working-history

[https://gist.github.com/gabro/5883819](https://gist.github.com/gabro/5883819)

---

# 6. save changes remotely
![](https://octodex.github.com/images/octobiwan.jpg)

---

# 6. save changes remotely...
<br />

```sh
git remote add origin git@github.com:buildo/git-talk
```

<br />

```sh
git push -u origin master
```

^
-u remembers the association between local and remote branch

---

#6. ...and get them back
<br />

```sh
git pull --ff-only # friends forever <3
```

shortcut for

```sh
git fetch
git merge --ff-only origin/master
```

---
#7. branching
![](http://www.robertaliguori.it/wp-content/uploads/2014/11/bivio.jpg)

---

# 7. branching
<br />

```sh
git branch a-new-feature
git checkout a-new-feature
```

or better

```sh
git checkout -b a-new-feature
```

---

# 7. merging a branch
<br />

```sh
git checkout master
git merge a-new-feature
```

---

#7. clean-up behind us

<br />

```sh
# delete a branch locally (and safely)
git branch -d a-new-feature

# delete a branch remotely
git push origin :a-new-feature
```

bonus

```sh
git branch --merged master | \
grep -v '\\* master' | xargs -n 1 git branch -d

```

^
-d checks that changes are merged in master
remote:local

---

# 8. ignore stuff
![](http://www.smallpondenterprises.com/wp-content/uploads/2013/10/ignore-e1381768651842.jpg)

---

# 8. ignore stuff

<br />

in .gitignore

```sh
npm_modules
```

^
ignore a file or directory is as easy as adding a line to .gitignore
ALL npm_modules directories will be excluded 

---

# Hey how do I...
![](http://www.thepcmdgazette.com/wp-content/uploads/2014/04/confused-baby.jpg)

---

#9. Selectively ignore stuff
![](http://bigleapcreative.com/wp-content/uploads/2014/07/shutterstock_ignore.jpg)

---

#9. Selectively ignore stuff

<br />
<br />

```
*config.json
!example_config.json
```
^
this will ignore all files ending in 'config.json', except for 'example_config.json'

---

# 9. (bonus) fun with directories

```
.
└── foo
    ├── ignore_me
    └── include_me
        └── .gitkeep
```
^ let's ignore all foo, but let's include include_me
notice also the .gitkeep convention to include an empty directory

---

# 9. (bonus) fun with directories

```
/foo
!/foo/include_me
```

vs

```
/foo/*
!/foo/include_me
```

#### [`http://stackoverflow.com/a/20652768/846273`](http://stackoverflow.com/a/20652768/846273)

^
the first version won't work. Git won't look into the directory
the second version excludes the CONTENT of the directory and applies the second rule

---

![](http://theleadershipprogram.com/wp-content/uploads/2015/08/time.jpg)
# 10. browse the history of a file

^
we've seen how to browse the history of a repo,
but what about single files?

---

# 10. browse the history of a file
<br />
<br />
git log --follow /path/to/file

^
--follow follows the renaming

---

# 10. browse the history of lines
<br />
<br />
git log -L 1,+10:file.json

^
bonus points, you can see the evolution of single lines

---
# 10. browse the history of methods/functions/classes

```


git log -L :methodName:path/to/file
```
---

![fit](http://i.giphy.com/ujUdrdpX7Ok5W.gif)

---

# 10. browse the history of methods/functions/classes
in ~/.gitconfig

```
[core]
  attributesfile = ~/.gitattributes
[diff "scala"]
  xfuncname = "^\\s*(.*(def|object|class|trait) .*)$"
```

in ~/.gitattributes

```
*.scala diff=scala
```

---

# 11. change the remote repo
![fit](https://octodex.github.com/images/bear-cavalry.png)

^
use cases:
- you moved from a self-hosted server to github
- you started a fork and now you want to move to an independent project

---

# 11. change the remote repo

<br />
<br />

```sh
git remote --set-url origin https://github.com/gabro/another-repo
```

^ alternatively you can have multiple remotes and work with them
(e.g. with a fork)

---

# 12. move that commit to master?
![](http://i.snag.gy/QsAQc.jpg)

^ scenario: you're working on an unfinished feature, but you need to deploy

---

```
                        
                                   master          feature             
                                                            
                                      │               │                  
                                      │               │                  
                                      │               │                  
                                   ┌──┴──┐         ┌──┴──┐               
                                   │     │         │     │               
                                   │     │         │     │               
                                   └──┬──┘         └──┬──┘               
                                      │               │                  
                                      │               │                  
                                   ┌──┴──┐         ┌──┴──┐               
                                   │     │         │xxxxx│               
                                   │     │         │xxxxx│               
                                   └──┬──┘         └─────┘               
                                      │              /                  
                                      │     ________/                   
                                   ┌──┴──┐ /                   
                                   │     │/                      
                                   │     │                     
                                   └─────┘                               
                                   

```

---

```                       
                                           master                      
                                                                    
                                              │    
                                              │    
                                           ┌──┴──┐ 
                                           │ooooo│ 
                                           │ooooo│         feature
                                           └─────┘               
                                              │               │                  
                                              │               │                  
                                           ┌──┴──┐         ┌──┴──┐               
                                           │     │         │     │               
                                           │     │         │     │               
                                           └──┬──┘         └──┬──┘               
                                              │               │                  
                                              │               │                  
                                           ┌──┴──┐         ┌──┴──┐               
                                           │     │         │xxxxx│               
                                           │     │         │xxxxx│               
                                           └──┬──┘         └─────┘               
                                              │              /                 
                                              │     ________/                   
                                           ┌──┴──┐ /                   
                                           │     │/                      
                                           │     │                     
                                           └─────┘                 
```

^
notice the change of shape, same changes, but different commit

---

# 12. move that commit to master?

<br />
<br />
git checkout master
git cherry-pick 231256

^
moves a commit to the head of the curent branch
-e gives you the option to edit the commit message

---

# 13. move to a branch after I've started working
![](http://www.monkeysinschools.org/img/monkeys/Orang/Male-Sumatran-orang-utan-swinging-through-trees.jpg)

^
scenario, you've started working on master,
forgetting to create a new branch

---

# 13. move to a branch after I've started working

<br />
Well, if you didn't push...

^
I get this question a lot, but if you didn't push anything to remote you're ok.

---

![](http://i.giphy.com/bqVNNMivEHgFa.gif)

---
# 13. move to a branch after I've started working

```sh
git commit -m "stuff"

...oh sh*t!...

git branch new-feature   # mark this point as the new branch
git reset --hard HEAD~1  # rewind master
```

^
The trick is to consider that a new branch that adds commits to master is the same thing as master with a few more commits.

---

# 14. undo that‽
![](http://www.geek.com/wp-content/uploads/2013/12/regrets.jpg)

---

# 14. undo that‽

<br />
```
git regret --hard
```

[https://github.com/YtvwlD/git-regret](https://github.com/YtvwlD/git-regret)

---

# 14. undo that‽

<br/>
⚠ Delete changes to the working directory ⚠

```sh
git reset --hard
```

<br/>
⚠ Restore a file to its last committed version ⚠

```sh
git checkout /path/to/file
```
---

# 14. undo that‽
<br />
Undo last **local** commit and discard changes

```sh
git reset --hard HEAD~1
```
<br />
Undo last **local** commit

```sh
git reset --soft HEAD~1
```

---

# 14. undo that‽
<br />

Edit last **local** commit message

```sh
git commit --amend
```
---

# 14. undo that‽
<br />
Undo last **public** commit

```sh
git revert HEAD
```

---

# 14. undo that‽
<br />
Edit last **public** commit message[^1]

[^1]: `git commit --amend; git push -f`

---

![](http://i.giphy.com/PkqXwgP66glZ6.gif)

---

# 15. put things away
![](http://lovemeow.com/wp-content/uploads/2011/02/20100908215057.jpg)

---

# 15. put things away

<br />

```sh
# stash things away
git stash -u

# get them back
git stash [pop|apply]

```

^
-u stash also untracked files
useful when you need to perform operations on a repo, but working directory is not clean.

---

# 16. clean-up branches
![](http://ukfs.info/wp-content/uploads/2014/10/office-cleaning1.jpg)

---

# 16. clean-up branches
<br />

```
git rebase -i <some sha>
```
<br />
Bonus: find the fork point

```sh
git merge-base --fork-point master
```

---

# 17. blame
# co-workers
![](http://static.oprah.com/images/201108/orig/201108-omag-point-600x411.jpg)

---

# 17. blame co-workers

<br />

```
git blame /path/to/file
```

---

# 17. blame co-workers
# (the cool way)

```sh
# now it's bad, and it was good 10 commits ago
git bisect start HEAD HEAD~10

# for each commit we analyze
git bisect [good|bad]

git bisect log
git bisect reset
```

---

# 18. keep a sane
# workflow
![](http://cache.gawkerassets.com/assets/images/4/2010/03/500x_seal2.jpg)

---

# 18. keep a sane workflow

  - small features
  - short-lived branches
  - after merging, no more rebasing
  - GitHub Flow [^2]


  [^2]: [https://guides.github.com/introduction/flow/](https://guides.github.com/introduction/flow/)

---

# useful references

- git-scm.com/docs/git-<command>
- man git-<command>
- try.github.io
- codeschool.com/paths/git
- Git Internals by Scott Chacon [^3]

[^3]: https://github.com/pluralsight/git-internals-pdf

---

# [fit] Thank you

---

# [fit] Questions?

---

![inline](http://i.cubeupload.com/98PEr9.png)
# [fit] work@buildo.io
