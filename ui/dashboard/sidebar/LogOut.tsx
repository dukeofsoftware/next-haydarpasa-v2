"use client"
import { signOut } from "next-auth/react"

import { BiLogOutCircle } from "react-icons/bi"
const LogOut = () => {
    return (
        <button onClick={()=>signOut()} className="flex items-center ml-[4%] gap-4 px-3 py-4 rounded-full hover:bg-primary-2 duration-200">
            <BiLogOutCircle size={30} />
            <h3 className={`text-xl text-primary-1 hover:text-primary-3 duration-300`}>
                Çıkış Yap</h3>
        </button>
    )
}

export default LogOut