import { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./Galery.module.scss";
import photos from "./photos.json";

export default function Galery() {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const filterPhotos = (tag) =>{
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag
    })

    setItems(newPhotos)
  }
  return (
    <section className={styles.galery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems}/>
      <Cards photos={items} styles={styles} />
    </section>
  );
}
