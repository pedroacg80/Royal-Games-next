import styles from './login.module.css';

const Login = () => {
    return (
        <body className={styles.body}>
            <main className={styles.container}>
                <img id={styles.imagem_login} src="../imgs/mulher_login.png" alt="Imagem de uma mulher personificada de um jogo " />
                <div className={styles.campo_login}>
                    <img src="../imgs/logo_royalGames.png" alt="" />
                    <form id={styles.formulario} action="">
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com"  />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********"  />
                        </div>
                        <button id={styles.btn_entrar}>Entrar</button>
                    </form>
                </div>
            </main>
        </body>
    )
}

export default Login;