# Function to start npm start in the background and store the process ID in a file
start_npm() {
  npm start &
  echo $! > npm_process.pid
}

# Function to stop the npm start process when the script is terminated
stop_npm() {
  if [ -f npm_process.pid ]; then
    npm_process_id=$(cat npm_process.pid)
    rm npm_process.pid
    kill $npm_process_id
  fi
}

# Function to handle SIGHUP signal (terminal closure)
handle_sighup() {
  stop_npm
  exit 0
}

# Navigate to the directory
cd "C:\\Program_Files\\sains-tool\\tool"  # Use double backslashes here and change the path to where you have the app downloaded to

# Run npm install without printing errors to console
echo "This could take a minute, please don't close this window"
npm i > /dev/null 2>&1

# Start npm start in the background
start_npm

# Trap the termination signals to stop npm start gracefully
trap handle_sighup EXIT SIGINT SIGTERM SIGHUP

# Wait until the script is terminated (you can add more commands here if needed)
echo 'You can close this window when you see "webpack compiled $$$$$$$$$"' 
echo 'If you close the browser tab with the tool you will be able to get back to it by going to http://localhost:3000'
echo 'You only need to run this once when you start your PC up, the service will be active until you shutdown or restart'
wait
