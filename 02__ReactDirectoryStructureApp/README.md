# # GIT
1> Download & Install git in our system.
    
    1. link : https://git-scm.com/downloads
	
    2. After download & install, we will check below command in our system.  
        
        cmd_prompt ==> git --version
                    or
        search ==>  git bash ==> open ==> git --version
	
2> create Account in git hub and config created git Account in our system.

==> to check name and email,	
	$ git config --global user.name
	$ git config --global user.email
	
==> to configure name and email,
	$ git config --global user.name  "<User_Name> like giri"
	$ git config --global user.email "<Email_Id> like giri@gmail.com"
	
==> to remove above configs,
	$ git config --global --unset user.name
	$ git config --global --unset user.email
	
3> Create new public remote repo in git hub.

4> create README.md file at workspace.

5> Config remote repo to local repo, perform below commands in VSCode terminal.

	1. git init 
	2. git branch -M main 
		[Changing main branch master to main]
	3. git add .
	4. git commit -m "HelloWorld_HTML_JS"
	5. git remote add origin https://github.com/Abhi-softs/ReactJS__NR.git
		[we will perform above command before 1st push only ]
	6. git push -u origin main

	***> from 2nd push onwards we will perform only, step-3, 4 ans 6.

# # NPM 
1. There is no standard form for NPM. NPM may be any thing like below,
    Nature Power Management, No problem Man, Node Package Manager,...etc
2. npm is a repository where all packages/dependencies are hosted/managed.
3  packages/dependencies versions takes care by npm.
	i.e, npm manages packages but it is not standard for Node Package Manager.
	
4. dependencies are 2 types 
		1. Dev dependencies [-D]
		2. Normal Production dependencies.
		
^(Carrate) 	==> Updates dependencies automatically.[Minior Versions]
~(Tilde) 	==> Updates dependencies automatically.[Major Versions]
	**> Ex : ^ and ~ are optional.
			 "devDependencies": {
				"parcel": "^2.15.4" or "~2.15.4" or "2.15.4"
			  }
			  
"parcel": "^2.15.4" or "~2.15.4" ====> approximate version.
"parcel": "2.15.4"	 ================> exact version.	
	  
# transitive dependencies 

	whenever we download one dependency then it's child or dependent dependency also will come.
	Ex : if we download "parcel" then it's child or dependent dependency "babel" will come.

>> create-react-app has automatically has npm in it, but to get npm from outside,

$ npm init 
	- It is a making our app using npm.
	- It gives "package.json" file which is a configuration file for npm.	
	- package.json maintains approximate versions of dependencies.
	- CTRL + C 
		to close operation in middle.
	- main : App.js, is entry point of App Execution.
	- How many package.json in our app ?	
		package.json ==> we can have 'n' no of package.jsons in our App,bcz,
		pre-defined dependencies also have it's own dependencies in it's own package.json.
			ex : 
				node_module ==> any <dependency_name> ==> observe package.json
				node_module ==> any clone ==> package.json
	- while giving info about our app give "test : jest" otherwise, app wonn't run.		
	- to avoid giving info about app in "npm init" use "npm init -y"
	
# Downloading any dependency in react :-
---------------------------------------

	$ npm install 
	or
	$ npm i
		- gives "package_lock.json" file which keep tacks exact version of dependencies.
		- maintains exact versions of dependencies.
			sha-512 ==> useful for integrity.
	**=> It won't give "node_module".
	
	$ npm i -options <dependency_name>

	$ npm i -D parcel
	**=> It will give "node_module".
	
	***> we can see devDependencies and dependencies separatly in package.json.


# Bundler 

1. Bundler Bundles HTML, CSS, JS and JSX to minify the APP.
	[minified/cached/compressed]
	Ex : parcel, Vite, webpack

2.  $ npm install -D parcel
		or
	$ npm i -D parcel
		=> gives "node_module" contains all dependencies 
		which are required for our App.

In Prod env, we need "node_module" but we won't push to git(.gitignore), 
	.gitignore ==> /node_module
bcz these are heavy weight, but we regenates(npm install) "node_module"
in prod env with "package.json" and "package_lock.json"  files.


# running react app 
1> remove main:app.js from Package.json.
If your package.json includes "main": "index.js", Parcel will treat the project as a library.

	$ npx parcel index.html
		=> npx means execution of package.
		
>>> If we have react and react-dom CDN links in index.html,
	then OP will come.


=> 	to avoid CDN links, install react and react-dom 
	and import those in App.js.
		$ npm i react
		$ npm i react-dom
		
		import React from "react";
		import ReactDOM from "react-dom/client"; 

	$ npx parcel index.html		
		***> Error :  @parcel/transformer-js: Browser scripts cannot have imports or exports.
		Sol : add type="module" in index.html,
		
		<script type="module" src="App.js"></script>
		
	$ npx parcel index.html	
	
	now, our app will run on server with port 1234, 
		http://localhost:1234
		
	$ npx parcel build index.html 
	
		- gives production-ready build.
		- Once we genarate it in local system, then we loss HMR, so to bring back HMR,
		  delete dist and .parcel-cache and run the app once again.
			$ npx parcel index.html	

***> CTRL +C is used to stop the live server and procedures intermidatly.


# create-react-app

	> to genarate react directory structure automatically.
	> it will bundler automatically.
	> to use this command, our system should contain node.
		CMP> node -v
		CMP> npm -v
		WS> create-react-app <App-Name>
		WS> cd <App-Name>
  App-Name> npm start
  
 **> server will run in port 3000

# About 'Parcel' 
1. What is Parcel?
	- Parcel is a zero-config bundler for web applications.
	- Things You Don’t Need with Parcel
		No need for:
			Babel setup manually
			Webpack config
			Dev server setup
		Parcel handles all of this automatically

2. How Parcel Works Internally ?
		Parcel looks at index.html → checks for <script type="module" src="..."> 
		→ follows the chain of imports (JS modules) → and builds a dependency graph.
		
3. Why Use Bundlers like Parcel/Webpack?  or 
   Features of Parcel (Deep Dive) ? or 
   Parcel Deep-Dive Notes ?

	1) Browser Scripts Cannot Use import/export :-
		If you directly use React imports in browser scripts 
		without bundling, you'll face Error :
			“Browser scripts cannot have imports or exports.”
		This is why bundlers like Parcel are necessary. 

	2) Targeting Browser Compatibility :-
		You can configure a browserslist in package.json to make 
		Parcel output code compatible with specific browsers.
		Parcel will automatically transpile accordingly. 

	3) Remove "main" from package.json :-
		If your package.json includes "main": "index.js", 
		Parcel will treat the project as a library.
		This causes conflicts when running parcel build or parcel serve.
		The solution: remove the "main" field entirely. 
		
	4) Tree Shaking:
			Removes unused code during build.	

	5) Parcel’s Core Workflows
		Parcel handles several tasks automatically:
			Compressing and bundling JS/CSS.
			Image optimization.
			Minification for production output.
			Hashing files for cache busting.
			Differential bundling for browser compatibility.
			Diagnostics and error reporting. 
			
	6) Parcel Creates .parcel-cache Folder and Speed Boost Through Caching :-
		On the first run, Parcel generates a cache folder called ".parcel-cache".
		This cache stores intermediate files and speeds up subsequent builds. 
		That’s why Parcel offers a smooth developer experience with fast refresh. 

	7) Dist Folder Management :-
		Running npx parcel index (dev build) creates a dist folder.
		Parcel updates this folder on each file change.
		Using "parcel build index" produces a production-ready dist.
			
			$ parcel build index.html ===> Generates production build  
			
		Tip: Never commit dist or .parcel-cache to your Git repo 
			— they are autogenerated and can be ignored. 

	8) Dev Server: 
		Starts a local development server at http://localhost:1234
		
# Summary parcel 
		
	Dev Server: 
		Starts a local development server at http://localhost:1234

	Hot Module Replacement (HMR):
		Auto refreshes the browser on file change.
		Keeps the state of the app if possible.

	Caching:
		Parcel caches previous builds for faster future builds.

	Minification:
		Removes extra spaces and comments in production builds.
		
	Image Optimization:
		Auto compresses and optimizes image files.
		
	Tree Shaking:
		Removes unused code during build.

# Imp Commands 
	
---------------------------------------------------------------------
| Command                     | Purpose                             |
| --------------------------- | ----------------------------------- |
| npm init -y                 | Creates `package.json`              |
| npm install -D parcel       | Installs Parcel as a dev dependency |
| npm run start               | Starts the dev server using Parcel  |
| npx parcel build index.html | Generates production build          |
---------------------------------------------------------------------



