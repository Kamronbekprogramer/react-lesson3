import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")



  const addUser = () => {
    if (name && age && phone && address) {
      const newUser = { name, age, phone, address };
      setUsers([...users, newUser]);
      setName("");
      setAge("");
      setPhone("");
      setAddress("");
    } else {
      alert("Iltimos qatorlarni to'ldiring.");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="text-center">
            <h2>Users Table</h2>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Add User</h3>
            </div>
            <div className="card-body">
              <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control my-2" />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="form-control my-2" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="form-control my-2" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="form-control my-2" />
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={addUser}>Add Users</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App