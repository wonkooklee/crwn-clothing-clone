import React, { useState, useEffect } from "react";
import PreviewCollection from "../../components/preview-collection/Preview-collection.jsx";

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  const [apiAddress, setApiAddress] = useState("/data");

  useEffect(() => {
    fetch(`${apiAddress}/shop.data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        setCollections(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
