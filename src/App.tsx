import React, { Fragment, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  icon: "error",
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const searchLyrics = () => {
    if (!song || !artist) {
      Toast.fire({ title: "Llene todos los campos" });
    } else {
      fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then((res) => res.json())
        .then((data) => {
          if(data.lyrics){
            setTitle(song);
            setLyrics(data.lyrics);
          }
          else{
            Toast.fire({ title: "No se pudo encontrar esa letra" });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };
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
              value={song}
              onChange={(e) => setSong(e.target.value)}
            />
            <input
              placeholder="Artista"
              className=" bg-gray-50 py-1 px-3 w-full mt-4 rounded focus:outline-none focus:ring"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div className="flex-none ml-4">
            <button className="bg-blue-500 h-full px-4 rounded-md" onClick={searchLyrics}>
              <SearchIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        {lyrics === "" ? (
          <Fragment />
        ) : (
          <div className="bg-white rounded-md mt-4 px-3 py-4 text-center">
            <p className="font-medium text-2xl mb-2 pb-2 border-b-2">{title}</p>
            {lyrics
              .split("\n")
              .slice(1)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
