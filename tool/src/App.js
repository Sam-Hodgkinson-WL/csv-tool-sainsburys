import './style/App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [file, setFile] = useState(undefined)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:8080/fileupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
		// handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Insert csv here: </label> <br />
        <input type="file"
          id="avatar" name="avatar"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(e) => setFile(e.target.files[0])}
       />
       <input type="submit"/>
      </form>
      <button onClick={() => console.log(file)}>Console</button>
    </div>
  );
}

export default App;
