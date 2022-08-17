# Lab Notebook 📘 
___lab notebook which enable scientists to note down different lab entries and better understand similarities in their lab notebook data.___

## General Information
- Lab Notebook which helps scientists in identifying similarities in labarotary notes.
- Helping scientists storing notes entry without worrying about network connectivity, and later on they can check stats of their notes in offline mode as well.
- Lab Notebook is a progressive web app which uses offline first approach.
## Features
- List of lab notes
- Lab notes can be added from the application.
- Scientists can view similarities in their lab notebook entry against some particular word.
- Offline first mode (our application is fully supported PWA which works in offline mode)
- Lab notes can be added without worrying about internet connectivity.
- Retry feature to save failed notes.
- Failed notes will stay in memory unless they're successfully saved on the server.
- Using "Tailwind CSS" for UI styling.
- Using "Vite" build tool.
- Using "React-query" for caching queries.
- Using "localforage" to store persist failed user actions.
- CI is intergated in project using github flows
    Following actions are being performed:
    1) PR title lint check
    2) PR linting check
    3) PR build check

## Demo
![app-demo](https://user-images.githubusercontent.com/49911449/185104231-4b44bf8f-9a44-4815-8674-6ecc3e3f3351.mp4)

## Setup

Following instructions will get you a copy of the project up and running on your local machine for development purpose.

1. Install following on your local machine
	-  	[Git](https://git-scm.com)
	- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
2. Clone the repository by running this following command
	```bash
	git clone https://github.com/iamshahzeb/lab-notebook.git
	```
3. Start project by running following commands
	```bash
	cd lab-notebook/
	yarn install
		
	# once node_modules gets install, run next command (this will build your app for production and locally preview production build)
	yarn preview
	```
4. Once your app is running, you can access it on the following address in your browser
	[http://localhost:4173](http://localhost:4173)

## Versions
Following versions are being used while creating this guide. 
```
node@v16.14.2 or higher
npm@8.5.0 or higher
```

## Branches
Current branches and their purposes are as follow.
```
main -> contains latest changes
production -> reserved for production only
release/1.0.0 -> contains changes which are ready for production
```

# Room For Improvement

## Improvements
- Add E2E test cases.
- Add SonarQube to analyze code quality and code security.
## Features that can be added
- Background Sync API can be used to automatically retry saved notes when network is available.
- Update Prompt should be added to inform user about any new updates to website(when new service worker is available).

## About Me

_Hi, I'm Syed Shahzeb Hasan a BS(CE) graduate working as software developer in the industory for about 4 years, I am an experienced developer skilled in Javascript and its frameworks._