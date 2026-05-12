import styles from './login.module.css';

const Login = () => {
    return (
        <body className={styles.body}>
            <main className={styles.container}>
                    <img id={styles.imagem_login} src="../imgs/mulher_login.png" alt="Imagem de uma mulher personificada de um jogo " />
            </main>
        </body>
    )
}

export default Login;