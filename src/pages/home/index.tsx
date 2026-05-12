import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "@/pages/home/home.module.css";
import ListaJogo from "@/components/lista-jogo/lista-jogo";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section id={styles.banner}>
                    <div id={styles.container}>
                        <div id={styles.informacoes}>
                            <h1>Conheça nossos jogos!</h1>
                            <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                        </div>
                        <img src="../imgs/Imagem_Banner.png" alt="" />
                    </div>
                </section>
                <section className={styles.catalogo}>
                    <div id={styles.informacoes_catalogo}>
                        <h2>Catálogo de jogos</h2>
                        <hr />
                        <ListaJogo/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;