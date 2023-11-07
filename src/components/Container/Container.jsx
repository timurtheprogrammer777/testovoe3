import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import api from "../../api/api";
import defaultImage from "../../images/card-image.jpg";

function Container() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fixImageUrl(url) {
    if (url) {
      return url.replace(/^hhttps/g, 'https');
    }
    return defaultImage;
  }
  

  useEffect(() => {
    api.getCards()
      .then((data) => {
        const processedData = data.map((item) => ({...item, imgUrl: fixImageUrl(item.imgUrl),}));
        setData(processedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ul className="container">
      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        data.map((item) => (
          <Item key={item.id} data={item} />
        ))
      )}
    </ul>
  );
}

export default Container;
