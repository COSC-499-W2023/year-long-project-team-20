import React, { useRef, useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';

function Chat() {
  return (
    <div>
      <h1>Chat Page</h1>
      <Outlet />
    </div>
  );
}

// function Chat({ user, signOut }) {
//     const [chats, setChats] = React.useState([]);

//     return (
//         <div>
//             <div className="flex justify-end px-4 py-2">
//                 <button
//                     type="button"
//                     className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//                     onClick={() => signOut()}
//                 >
//                     Sign Out
//                 </button>
//             </div>
//             <div className="flex justify-center items-center h-screen w-full">
//                 <div className={`w-3/4 flex flex-col`}>
//                     {chats.map((chat, index) => <p key={index}>{chat}</p>)}
//                     <div>
//                         <div className="relative mt-2 flex items-center">
//                             <input
//                                 type="text"
//                                 name="search"
//                                 id="search"
//                                 onKeyUp={async (e) => {
//                                     if (e.key === "Enter") {
//                                         setChats([...chats, e.target.value]);
//                                         e.target.value = '';
//                                     }
//                                 }}
//                                 className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                             <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
//                                 <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
//                                     Enter
//                                 </kbd>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default withAuthenticator(Chat);