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
| `git status`        | Show the current status of working directory and staging area   | `git status`                                                                                       |
| `git diff`          | Show changes between commits, commit and working tree, etc.     | `git diff`                                                                                         |
| `git reset`         | Move HEAD to a specific commit (can modify staging/working dir) | `git reset --hard HEAD~1`                                                                          |
| `git revert`        | Create a new commit that undoes a previous commit               | `git revert <commit-hash>` <br> `git revert --no-commit HEAD~3..HEAD` <br> `git revert --continue` |
| `git log`           | Show commit history                                             | `git log --oneline --all --graph`                                                                  |
| `git stash`         | Temporarily save uncommitted changes                            | `git stash` <br> `git stash apply` <br> `git stash pop`                                            |
| `git cherry-pick`   | Apply a specific commit from another branch                     | `git cherry-pick <commit-hash>`                                                                    |

**Notes:**

* `HEAD` points to the current commit.
* Conflicts occur when overlapping changes need manual resolution.
* Commands to resolve conflicts:

  * `git status` → shows conflicting files.
  * `git add <file>` → mark conflicts as resolved.
  * `git merge --continue` → continue merge after resolving conflicts.
  * `git merge --abort` → abort merge if needed.
* Pull Request (PR) is a request to merge your branch into another (usually `main`) after review.

---

## Additional Tips & Tricks to Enhance Productivity

| Command                               | Purpose & Example                                                |
| ------------------------------------- | ---------------------------------------------------------------- |
| `git commit -am "message"`            | Stage and commit together for already modified files.            |
| `git restore --staged <file>`         | Remove files from staging but keep changes in working directory. |
| `git rm --cached <filename>`          | Remove a file from Git tracking but keep it locally.             |
| `git rm -r <foldername>`              | Remove a folder from Git tracking.                               |
| `git rm --cached .`                   | Remove all files from tracking (without deleting locally).       |
| `git clone <repo link>`               | Clone a remote repository locally.                               |
| `git checkout <commit-id> <filename>` | Restore deleted files from a previous commit.                    |
| `git config --global -e`              | Edit global Git config (set default editor, etc.).               |
| `git checkout -C <branch>`            | Create a branch and switch to it immediately.                    |
| `git revert <merge-hash> -m 1`        | Revert a merged commit (undo merge).                             |
