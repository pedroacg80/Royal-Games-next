import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img src="../imgs/logo_royalGames.png" alt="" />
            <section id={styles.informacoes}>
                <ul id={styles.lista}>
                    <li>roayalgames@email.com</li>
                    <li>(11)99999-9999</li>
                    <li>@RoyalGames</li>
                </ul>
            </section>
            </div>
        </footer>
    )
}

export default Footer;