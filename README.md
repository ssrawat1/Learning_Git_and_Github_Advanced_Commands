# Git Commands Cheat Sheet

| Command             | Purpose                                                         | Example                                                                                            |
| ------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `git add`           | Stage changes for commit                                        | `git add file.txt`                                                                                 |
| `git commit`        | Commit staged changes with a message                            | `git commit -m "Fix bug"`                                                                          |
| `git push`          | Send local commits to remote repository                         | `git push origin main`                                                                             |
| `git pull`          | Fetch and merge changes from remote                             | `git pull origin main`                                                                             |
| `git branch`        | List, create, or manage branches                                | `git branch` <br> `git branch feature`                                                             |
| `git checkout`      | Switch branches or restore files                                | `git checkout main`                                                                                |
| `git merge`         | Merge another branch into current branch                        | `git merge feature`                                                                                |
| `git merge --abort` | Cancel an ongoing merge if conflicts exist                      | `git merge --abort`                                                                                |
| `git reset`         | Move HEAD to a specific commit (can modify staging/working dir) | `git reset --hard HEAD~1`                                                                          |
| `git revert`        | Create a new commit that undoes a previous commit               | `git revert <commit-hash>` <br> `git revert --no-commit HEAD~3..HEAD` <br> `git revert --continue` |
| `git log`           | Show commit history                                             | `git log --oneline --all --graph`                                                                  |
| `git stash`         | Temporarily save uncommitted changes                            | `git stash` <br> `git stash apply` <br> `git stash pop`                                            |
| `git cherry-pick`   | Apply a specific commit from another branch                     | `git cherry-pick <commit-hash>`                                                                    |

**Notes:**

* `HEAD` points to the current commit.
* Conflicts occur when overlapping changes need manual resolution.
* Pull Request (PR) is a request to merge your branch into another (usually main) after review.
