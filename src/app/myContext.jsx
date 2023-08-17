// "use client"
// import { createContext, useContext } from 'react';

// const URL="https://the-trivia-api.com/v2/questions"

// const MyContext=createContext()

// const MyContextProvider=({children})=>{

//     async function getData() {
//         const res = await fetch(URL)
//         // The return value is *not* serialized
//         // You can return Date, Map, Set, etc.
       
//         if (!res.ok) {
//           // This will activate the closest `error.js` Error Boundary
//         console.log(res)

//           throw new Error('Failed to fetch data')

//         }
//         const data = await res.json();
//         console.log(data)
//         return data

//       }
//     return <MyContext.Provider value={{getData}}>{children}</MyContext.Provider>
// }

// const UseMyContext=()=>{
//     return useContext(MyContext)
// }

// export {MyContextProvider,UseMyContext}