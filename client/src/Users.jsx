import React, {useState} from 'react'

const Users = () => {

    const [users, setUsers] = useState([{
        Name: "Tejas", Email: "tejasy919@gmail.com", Age: 20
    }])
  return (
    <div className='flex h-full bg-pink-200 justify-center align-middle'>
      <div className=' w-100 bg-white rounded-2xl p-3 '>
        <div className='flex bg-green-400 flex-auto justify-between mx-3'>
          <h1 className='text-xl bg-yellow-200 font-semibold text-gray-950 '>
            Card
          </h1>
          <div className='grid grid-flow-col grid-cols-2 grid-rows-4 m-3 p-3 pt-1'>
            <div className='flex justify-between items-center font-semibold'>
              <h1>Name</h1>
              <h1>Email</h1>
              <h1>Age</h1>
              
            </div>
            {users.map((user)=>{
              return(
                <div className='border-y-2 w-full py-3 justify-between items-center'>
                  <h1>{user.Name}</h1>
                  <h1>{user.Email}</h1>
                  <h1>{user.Age}</h1>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
