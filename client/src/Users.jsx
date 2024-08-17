import React, {useState} from 'react'

const Users = () => {

    const [users, setUsers] = useState([{
        Name: "Tejas", Email: "tejasy919@gmail.com", Age: 20
    }])
  return (

    <div className='bg-[#EBD3F8] min-h-screen grid'>
      <div className='bg-gray-100 rounded-xl min-h-auto min-w-auto place-self-center p-6 grid grid-cols-3 grid-rows-2 gap-6'>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 1</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Rucha</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 2</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Tejas</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 3</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Bhavani</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 4</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Radhika</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 5</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Prakash</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
     <div className='bg-white h-48 w-80 shadow-xl rounded-lg p-3 flex flex-col gap-2'><div className='bg-[#70099c] hover:scale-105 transition duration-300 hover:font-semifont text-white rounded-md p-2 font-semibold place-self-center px-10'>Contact 6</div> <div className='bg-[#f4e0ff] h-32 p-2 rounded-lg flex flex-col justify-around pl-4'><div className='font-semibold flex gap-2'>Name:<div className="font-normal">Neha</div></div> <div className='font-semibold flex gap-2'>Phone no: <div className="font-normal">+91 9734864987</div></div> <div className='font-semibold flex gap-2'>Email: <div className="font-normal">kvcsldjhfdv@gmail.com</div></div></div></div>
      </div>

</div>
  )
}

export default Users
