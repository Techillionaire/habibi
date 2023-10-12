import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'

const Fetch = () => {
    const [user, setUser] = useState('')
   
    // useEffect(()=>{
    //     function fetchData(){
    //         fetch("https://jsonplaceholder.typicode.com/users", {
    //             method: "POST",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "appliacation/json"
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(err => console.log(err))
    //     }
    //     fetchData();
    // },[user])

    const handleSubmit = e => {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };
     
      const handleChange = e => {
        setUser({ id: Date.now(), [e.target.name]: e.target.value });
      }
        

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <label>
         Person Name:
         <input type="text" name="name" onChange={handleChange} />
       </label>
       <button type="submit">Add</button>
     </form>
   </div>
  )
}

export default Fetch