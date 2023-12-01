import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <KaydedilenlerListesi list={saved} />
        <Route exact path="/">
          <FilmListesi movies={movieList} kaydet={KaydedilenlerListesineEkle} />
        </Route>

        <Route path="/filmler/:id">
          <Film movies={movieList} kaydet={KaydedilenlerListesineEkle} />
        </Route>
      </div>
    </BrowserRouter>
  );
}
