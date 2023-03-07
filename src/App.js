import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  const [form, setForm] = useState({})
  const [data, setData] = useState([])

  const addData = () => {
    // setData([...data, {name, email}])
    // setName("")
    // setEmail("")
    setData([...data, form])
    setForm({ name: "", email: "" })

  }

  const removeItem = (index) => {
    let arr = data
    arr.splice(index, 1)
    setData([...arr])
  }

  return (
    <div className="App">
      <Header />

      {/* form */}
      <div className='form'>
        <Stack direction="row" spacing={2}>
          {/* <TextField value={name} onChange={(event)=> setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
        <TextField value={email} onChange={(event)=> setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" /> */}
          <TextField value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} id="outlined-basic" label="email" variant="outlined" />

          <Button onClick={addData} variant="contained" color="success"><AddIcon /></Button>
        </Stack>
      </div>

      {/* data */}
      <div className='data'>
        <div className='data_val'>

          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div className='data_val' key={index}>

                <h4>{element.name}</h4>
                <h4>{element.email}</h4>

                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
