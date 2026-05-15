import React, { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { login } from '../api/authService';

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Login realizado com sucesso!");

            setTimeout(() => {

                router.push("/home");
            }, 2000);
        }
        catch (error: any) {
            erro(error.message);
        }
    }

    return (
        <div className={styles.body}>
            <main className={styles.container}>
                <img id={styles.imagem_login} src="../imgs/mulher_login.png" alt="Imagem de uma mulher personificada de um jogo " />
                <div className={styles.campo_login}>
                    <img src="../imgs/logo_royalGames.png" alt="" />
                    <form id={styles.formulario} action="" onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <button id={styles.btn_entrar}>Entrar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login;