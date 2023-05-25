import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu () {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="ícone de casa, representando início" />
                    <a href="#">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="ícone mão fazendo jóia, representando curtida" />
                    <a href="#">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="ícone de olho, representando mais vistos" />
                    <a href="#">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="ícone de brilho, representando novidades" />
                    <a href="#">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="ícone de lâmpada, representando surpreender" />
                    <a href="#">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}