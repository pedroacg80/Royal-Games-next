import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/pages/detalhe-jogo/detalhe-jogo.module.css";
const DetalheJogo = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <article id={styles.card_jogo}>
                    <h1>Detalhe do jogo</h1>
                    <hr />
                    <div id={styles.jogo}>
                        <div id={styles.lado_cima}>
                            <img src="../imgs/imagemLOL.png" alt="" />
                            <section id={styles.sobre_jogo}>
                                <h1>League of Leagends</h1>
                                <p>League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.
                                    O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.</p>
                            </section>
                        </div>
                        <section className={styles.info_jogo}>
                            <div id={styles.lado_esquerdo}>
                                <h2>Classificacao indicativa</h2>
                                <h2>Preço</h2>
                            </div>
                            <div id={styles.lado_direito}>
                                <h2>Genero</h2>
                                <h2>Plataforma</h2>
                            </div>
                        </section>
                    </div>

                </article>
            </main>
            <Footer />
        </>
    )
}

export default DetalheJogo;