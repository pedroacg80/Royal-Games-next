import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "@/pages/home/home.module.css";
import ListaJogo from "@/components/lista-jogo/lista-jogo";

const Home = () => {
    return (
        <>
            <Header />
            <main id={styles.main}>
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
                        <div id={styles.campo_catalogo}>
                            <h2>Catálogo de jogos</h2>
                            <hr />
                        </div>
                        <ListaJogo />
                    </div>
                </section>
                <section className={styles.comportamento}>
                    <div id={styles.campo_titulo}>
                        <h2>Jogos online podem afetar o comportamento humano?</h2>
                        <hr />
                    </div>
                    <aside id={styles.area_imagem}>
                        <img src="../imgs/imagemLOL.png" alt="" />
                        <img src="../imgs/imagemCs.png" alt="" />
                    </aside>
                    <p id={styles.texto_comportamento}>Estudos indicam que jogos podem alterar o comportamento humano... <br /> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                </section >
            </main>
            <Footer />
        </>
    )
}

export default Home;