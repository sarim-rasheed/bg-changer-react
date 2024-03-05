import React,{useState} from 'react'

export default function Background() {
const [color,setColor] = useState("#9333EA");
    return (
    <div className="w-full h-dvh" style={{backgroundColor:color}} >
    <div className="w-4/5 h-14 bg-white rounded-xl mx-auto absolute  inset-x-0 bottom-12 flex justify-evenly shadow-lg">
    <button className="bg-red-500 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#EF4444")}>Red</button>
    <button className=" bg-yellow-300 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#FDE047")}>Yellow</button>
    <button className=" bg-green-500 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#22C55E")}>Green</button>
    <button className=" bg-blue-600 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#2563EB")}>Blue</button>
    <button className=" bg-pink-300 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#F9A8D4")}>Pink</button>
    <button className="  bg-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#FFFFFF")}>white</button >
    <button className=" bg-gray-400 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#9CA3AF")}>Gray</button>
    <button className="bg-orange-500 text-white w-32 h-9 rounded-lg my-auto shadow-md" onClick={() => setColor("#F97316")}>Orange</button>
    </div>
    </div>
  )
}
