import React, {useState} from 'react'

const Users = () => {

    const [users, setUsers] = useState([{
        Name: "Tejas", Email: "tejasy919@gmail.com", Age: 20
    }])
  return (
    <div className='flex h-full bg-pink-200 justify-center align-middle'>
      <div className='w-48 bg-white rounded-2xl p-3'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               { users.map((user) => {
                    <tr >
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
                        <td><button>Edit</button><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
