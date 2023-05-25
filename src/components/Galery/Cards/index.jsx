import open from './open.png'
import favorite from './favorito.png'

export default function Cards ({photos, styles}) {
    return(
        <ul className={styles.galery__cards}>
          {photos.map((photo) => {
            return (
              <li key={photo.id} className={styles.galery__card}>
                <img className={styles.galery__image} src={photo.image} alt={photo.title} />
                <p className={styles.galery__description}>{photo.title}</p>
                <div>
                  <p>{photo.credits}</p>
                  <span>
                    <img src={favorite} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
    )
}