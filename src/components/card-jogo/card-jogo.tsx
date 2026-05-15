import styles from '@/components/card-jogo/card-jogo.module.css'
import Link from 'next/link';

type Jogo = {
    Nome: string,
    Preco: number,
    Descricao: string,
    Imagem: string,
    JogoID: number
}

const CardJogo = ({ Nome, Preco, Descricao, Imagem, JogoID }: Jogo) => {
    return (
        <article className={styles.card_jogo}>
            <img src="../imgs/imagemLOL.png" alt="" className={styles.imagem_jogo} />
            <h3>minecraft</h3>
            <p>R$ 199,90</p>
            <Link href={"/detalhe-jogo/" + JogoID} id={styles.link}>
                <button id={styles.btn_detalhes}>Detalhes</button>
            </Link>
        </article>
    )
}

export default CardJogo;