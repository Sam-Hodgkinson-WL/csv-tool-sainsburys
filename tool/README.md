# How to install and run this on your machine

## Pre-requisites

- Install node.js on your machine... https://nodejs.org/en/download (I know the site looks dodge, but it's legit... Promise!) You can just click on the windows icon for the most up to date version.

- Install GIT BASH on your machine... https://git-scm.com/download/win (Choose "64-bit Git for Windows Setup".)

## Installing the tool

1. Extract this zip folders contents to wherever you want to install the tool, I have mine in C:/Program_Files (The folder structure should be C:/Program_Files/sains-tool/tool) Make sure you edit the open.sh file to reflect the correct file path

- Copy and paste the open.sh somewhere accessible, I have mine on my Desktop

- Double click on the open.sh file (This should open in GIT BASH)

- There will be some messages that appear in the terminal window, you won't have to do anything, but wait for the message to say you can close the terminal

- The app will now be running on port 3000, you can access it by going to your browser and going to http://localhost:3000

- This service will run until you shutdown or restart your machine.

## Alternatively, if something goes wrong with the shell script,

1. Open git bash (or the terminal of your choice and cd to where the tool is installed)

- You want to be able to see the package.json file when either the ls command (git) or dir command (powershell/cmd) is run

- Run the command 'npm i'

- Once complete, run 'npm start'
