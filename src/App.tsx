import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="text-center py-6 bg-white">
        <h2 className="font-medium text-3xl ">Buscador de letras</h2>
      </div>
      <div className="container mx-auto mt-8 pb-8">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col flex-none w-1/2 md:w-1/3">
            <input
              placeholder="Canción"
              className=" bg-gray-50 py-1 px-3 w-full rounded focus:outline-none focus:ring"
            />
            <input
              placeholder="Artista"
              className=" bg-gray-50 py-1 px-3 w-full mt-4 rounded focus:outline-none focus:ring"
            />
          </div>
          <div className="flex-none ml-4">
            <button className="bg-blue-500 h-full px-4 rounded-md">
              <SearchIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
          <div className="bg-white rounded-md mt-4 px-3 py-4 text-center">
            <p className="font-medium text-2xl mb-2 pb-2 border-b-2">Titulo</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
