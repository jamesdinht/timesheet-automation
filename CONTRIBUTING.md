# Contributing to the Project

## Welcome to Timesheet Automation

Thank you for considering contributing to Timesheet Automation. If you are considering contributing to the code, please view the [issues](https://github.com/jamesdinht/timesheet-automation/issues) and leave a comment on any issue of your interest. Issues will be on a first-come first-serve basis.

## Setup Development Environment

What you'll need

- [Git](https://git-scm.com) `>=2.18.0`
- [Nodejs](https://nodejs.org/en/) `>=8.12.0`
- [Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html) `>=1.8.0_191`
- [Protractor](https://www.protractortest.org/#/) `>=5.4.1`
- [Yarn](https://yarnpkg.com/en/) `>=1.3.2`
- [Gulp](https://gulpjs.com) `>=3.9.1, cli >=2.0.1`
- [VSCode](https://code.visualstudio.com) or other text editor

Install the above technologies:

- For Nodejs, I recommend nvm to manage different versions of Nodejs on the same machine. 
- No need to install gulp, just gulp-cli. For Java, jdk 8 or greater will suffice.
- `git clone` this repository or a forked repository
- `cd timesheet-automation`
- `yarn` to install packages
- `yarn timesheet` or `gulp` to build and run the application
- `yarn watch` or `gulp watch` to build, lint and run the application continously
- `yarn lint` or `gulp lint:ts` to lint TypeScript

This project is moving away from a pure JavaScript implementation and towards TypeScript. Please write new code in TypeScript.

Please install the tslint extension in VSCode in order to fix linting errors in the editor. The Travis build will fail if there are linting errors, which will prevent your code from merging into master.

When running the application on a standalone Selenium server, `chromedriver_2.44.exe` does not close properly and could cause issues on your machine if not killed. Simply open up Task Manager (Windows), find `chromedriver_2.44.exe` and `End Task`

## Reporting Issues

Please report any issues, errors, and bugs that you encounter while trying to run this application in [Issues](https://github.com/jamesdinht/timesheet-automation/issues). The more information we have, the better we can solve the problems.

## Coding Guidelines

Please open a feature branch for each issue, instead of pushing directly to master.

## Code of Conduct

See the [Code of Conduct](CODE_OF_CONDUCT.md)