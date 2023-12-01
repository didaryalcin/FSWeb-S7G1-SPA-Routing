import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  function toMainPage() {
    // toMainPage fonksiyonu kullanıcının Anasayfa butonuna tıklaması durumunda uygulamanın anasayfasına dönmesini sağlar.
    history.push("/");
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>

      {props.list.map((movie) => (
        <Link to={`/filmler/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>{" "}
        </Link>
      ))}
      <div className="home-button" onClick={toMainPage}>
        Anasayfa
      </div>
    </div>
  );
}
// props.list içerisindeki her bir film için bir link ve filmin başlığından oluşan bir bişelen oluşturur.
// Her bir filmin ayrıntılarına yönlendirme yapar.
// Anasayfaya butonu ekledik, tıklanma olayı toMainPage fonksiyonunu çağırır ve anasayfaya yönlendirir.
