import styles from './header.module.css';
import Link from 'next/link';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="../imgs/logo_royalGames.png" alt="logo Roayal Games" />
                <nav id={styles.nav_menu}>
                    <a href="">Catálogo</a>
                    <Link href="/login" id={styles.botao_login}>Login</Link>
                </nav>
            </div>
        </header>        
    )
}

export default Header;