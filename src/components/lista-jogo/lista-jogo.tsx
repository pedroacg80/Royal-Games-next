import styles from "@/components/lista-jogo/lista-jogo.module.css";

const ListaJogo = () => {
    return (
        <>
            <div className={styles.botoes_filtro}>
                <div id={styles.pesquisar}>
                    <input type="text" placeholder="Pesquise..." />
                </div>
                <div>
                    <div id={styles.filtros}>
                        <select className={styles.botaoPreco} id="">
                            <option value="">Menor Preço</option>
                            <option value="" selected>Maior Preço</option>
                        </select>
                        <select name="" id={styles.categorias}>
                            <option value="">1</option>
                            <option value="" selected>categoria</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaJogo;