# PrimeNG Table custom sort

Sort PrimeNG table by multiple columns.  
  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.  
  
PrimeNG version 8.1.4.  
PrimeIcons version 2.0.0.  
Angular CDK version 8.2.3.  

# Eclipse EGit settings

## Commit Local Repository

    Window -> Perspective -> Open Perspective -> Other  
      Git  
  
    Git Repositories  
      Add an existing local Git Repository to this view  
        Add Git Repositories Dialog  
          Search criteria  
            Directory: /home/mizuki/workspace/angular/custom-sort  
          Search results  
            [x]/home/mizuki/workspace/angular/custom-sort/.git  
  
    custom-sort  
      Git Staging  
        Commit  

## Create Remote Repository

    github.com/yvafdevnsk  
      Repositories  
        New  
          Repository name: custom-sort  

## Pushing to Remote Repository ([Push Ref Specifications](https://wiki.eclipse.org/EGit/User_Guide#Push_Ref_Specifications))

    custom-sort  
      Remotes  
        Create Remote...  
          New Remote Dialog  
            Remote name: origin  
            [x]Configure push  
          Configure Push Dialog  
            Change...  
              Host: github.com  
              Repository path: /yvafdevnsk/custom-sort  
              Protocol: https  
              Port: (empty)  
            Advanced...  
              Add create/update specification  
                Source ref: refs/heads/*  
                Destination ref: refs/heads/*  
              Add Spec  
            Finish  
          Save and Push  

## Fetching from Remote Repository ([Fetch Ref Specifications](https://wiki.eclipse.org/EGit/User_Guide#Fetch_Ref_Specifications))

    custom-sort  
      Remotes  
        origin  
          fetch  
            Configure Fetch...  
              Advanced...  
                Add create/update specification  
                  Source Ref: refs/heads/*  
                  Destination Ref: refs/remotes/origin/*  
                Add Spec  
              Finish  
            Save and Fetch  

# Git user settings

Your Identity ([1.6 Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup))  
  
    $ git config --global user.name "mizuki"  
    $ git config --global user.email mizuki@localhost  

# Clone a Git repository and run application

## Clone a Git repository

Host: github.com  
Repository path: /yvafdevnsk/custom-sort  
Protocol: https  
  
Destination: /home/mizuki/workspace/github/custom-sort  

## Run application

    $ pwd  
    /home/mizuki/workspace/github/custom-sort  
    $ npm install  
    $ npx ng serve --open  
