# How to install and run this on your machine

1. Extract this zip folders contents to wherever you want to install the tool, I have mine in C:/Program_Files (The folder structure should be C:/Program_Files/sains-tool/tool) Make sure you edit the open.sh file to reflect the correct file path

2. Copy and paste the open.sh somewhere accessible, I have mine on my Desktop

3. Double click on the open.sh file (you might have to install git bash first) https://git-scm.com/download/win

4. There will be some messages that appear in the terminal window, you won't have to do anything, but wait for the message to say you can close the terminal

5. The app will now be running on port 3000, you can access it by going to your browser and going to http://localhost:3000

6. This service will run until you shutdown or restart your machine.

## Alternatively, if something goes wrong with the shell script,

1. Open git bash (or the terminal of your choice and cd to where the tool is installed)

2. You want to be able to see the package.json file when either the ls command (git) or dir command (powershell/cmd) is run

3. Run the command 'npm i'

4. Once complete, run 'npm start'
