import styles from "./Home.module.scss";
import banner from "./banner.png";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Galery from "../../components/Galery";
import Popular from "../../components/Popular";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <div className={styles.main__image}>
            <h1>A galeria mais completa do espaço!</h1>
            <img src={banner} alt="imagem da Terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galery}>
          <Galery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
