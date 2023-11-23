# CS EXPO 2023 2.0
###### PAVING THE NEW TECHNOSPACE THROUGH PARADIGM SHIFTING INNOVATIONS
Repository of CS EXPO 2023 2.0 website of Far Eastern University Institute of Technology.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Navigating the repository](#navigating-the-repository)
3. [Working with multiple developers](#working-with-multiple-developers)
4. [Cloning the repository](#cloning-the-repository)
5. [Staying up-to-date with the latest changes](#staying-up-to-date-with-the-latest-changes)
6. [Creating a Pull Request (PR)](#creating-a-pull-request-pr)
7. [Commit Message Example](#commit-message-example)
8. [Go to the GitHub repository on your web browser](#go-to-the-github-repository-on-your-web-browser)
9. [If going back to the ```main``` branch](#if-going-back-to-the-main-branch)
10. [Always stay up-to-date with the ```main``` branch](#always-stay-up-to-date-with-the-main-branch)


## Project Structure
```
┣ cs-expo-2023              <--- root folder
┃ ┣ app                     <--- pages folder
┃ ┣ components              <--- components folder
┃ ┣ public                  <--- static files folder
┃ ┣ .eslintrc.json          <--- eslint config file
┃ ┣ .gitignore              <--- git ignore file
┃ ┣ awards.json             <--- awards data file
┃ ┣ next.config.js          <--- next config file
┃ ┣ package-lock.json       <--- package lock file
┃ ┣ package.json            <--- package file
┃ ┣ partners.json           <--- partners data file
┃ ┣ postcss.config.js       <--- postcss config file 
┃ ┣ README.md
┃ ┣ tailwind.config.ts      <--- tailwind config file
┃ ┣ thesis-projects.json    <--- thesis projects data file
┃ ┣ tsconfig.json           <--- typescript config file
┃ ┗ yarn.lock               <--- yarn lock file
┣ node_modules              <--- dependencies folder
┃ ┣ .bin                    <--- binaries folder
┃ ┣ bootstrap-icons         <--- bootstrap icons folder
┃ ┣ bootstrap-icons-react   <--- bootstrap icons react folder
┃ ┣ js-tokens               <--- js tokens folder
┃ ┣ loose-envify            <--- loose envify folder
┃ ┣ object-assign           <--- object assign folder
┃ ┣ prop-types              <--- prop types folder
┃ ┣ react                   <--- react folder
┃ ┣ react-dom               <--- react dom folder
┃ ┣ react-icons             <--- react icons folder
┃ ┣ react-is                <--- react is folder
┃ ┣ scheduler               <--- scheduler folder
┃ ┣ .package-lock.json      <--- package lock file
┃ ┗ .yarn-integrity         <--- yarn integrity file
┗ README.md                 <--- README for developers/collaborators using this project
```

## Navigating the repository
- [Projects](https://github.com/yanaagi/cs-expo-2023/projects)
  - This is where tasks are assigned and converted as issues; and their Todo, In Progress, and Done status are noted.
- [Issues](https://github.com/yanaagi/cs-expo-2023/issues)
  - This is where we track issues also known as tasks of development.   
- [Pull requests](https://github.com/yanaagi/cs-expo-2023/pulls)
  - This is where users can view and manage proposed changes to the codebase.

## Working with multiple developers
- How to work with multiple developers on the same project. [Video Tutorial](https://youtu.be/MnUd31TvBoU)
- Set Git Bash as your default terminal for VS Code. [Video Tutorial](https://youtu.be/PzJCwfYfIzY)

## Cloning the repository
- Open Git Bash
- Change the current working directory to the location where you want the cloned directory using `cd`
```
cd C:\YOUR\CLONE\LOCATION
```
- Type `git clone`, and then paste the URL of the CS EXPO 2023 2.0 repository.
```
git clone https://github.com/yanaagi/cs-expo-2023.git
```

## Staying up-to-date with the latest changes
- While on main branch, update your local repository with the latest changes, you need to pull the changes from the remote repository using `git pull` <br>
⚠ WARNING: Use git pull origin main ONLY if you are in main branch, NOT in other branches.

<br>

if repo is using <b>main</b> branch, use:
```bash
git pull origin main
```

if repo is using <b>master</b> branch, use:
```bash
git pull origin master
```

## Creating a Pull Request (PR)
### Branching
![My Remote Image](https://cs50.harvard.edu/web/2020/notes/1/images/branch.png)

- FIRST, create a NEW BRANCH using `git checkout -b`
```bash
git checkout -b branch-name
```
example: git checkout -b docs

NOTE: ALWAYS do `git status` before and after `git add` !

- TO stage a one or specific file with changes for commit, use `git add`
```bash
git add filename
```
example: git add README.md

- OR to add all files with changes to the current branch, use `git add -A`

Other variants:
```bash
git add -A 
git add .
```

- THEN, commit the changes using `git commit`
```bash
git commit -m "commit-message"
```

example: git commit -m "docs: ADD the README file"

### Commit Message Example
#### NOTE: Use present tense for commit messages.
1. **fix:** a bugfix
2. **feat:** a new feature
3. **refactor:** a code change that neither fixes a bug nor adds a feature
4. **chore:** changes to the build process or auxiliary tools and libraries such as documentation generation
5. **style:** changes that do not affect the meaning of the code (whitespace, formatting, missing semi-colons, etc)
6. **docs:** documentation only changes
7. **test:** adding missing tests or correcting existing tests
8. **perf:** a code change that improves performance
9. **ci:** changes to our CI configuration files and scripts
10. **build:** changes that affect the build tool or external dependencies (example scopes: gulp, broccoli, npm)
11. **revert:** revert to a commit
12. **BREAKING CHANGE:** introduces a breaking API change (correlating with [Semantic Versioning](https://semver.org/))

<br>

- TO create a pull request for NEW BRANCHES, you need to push your changes to the remote repository using this ONE TIME `git push` version.
```bash
git push --set-upstream origin branch-name
```
<br>

- TO create a pull request for ESTABLISHED BRANCHES, you just need to push your changes to the remote repository using `git push`
```bash
git push origin branch-name
```

## Go to the GitHub repository on your web browser
- Click `Compare & Pull Request` to open a pull request. 
- Leave comments for good practice.
- Mention on the comment on who you want to check and merge (to main branch) the pull request you made.
- After creating a pull request, wait for that collaborator to review your code and to notify you
if it is approved for merging, or needs further coding, or rejected.
<br>

## If going back to the ```main``` branch
```bash
git checkout main
```

## Always stay up-to-date with the ```main``` branch
```bash
git pull origin main
```
⚠ WARNING: ```Use git pull origin main```  ONLY if you are in main branch, NOT in other branches.
