import { Link } from 'react-router-dom'
import Container from './Container'
import styles from '../../css/Navbar.module.css'

import logo from '../../img/costs_logo.png'

function Navbar () {
    return (
        <nav className={styles.navbar}>
        <Container>
            <Link to="/">
                 <img src={logo} alt="costs"/>
            </Link>
            <ul className={styles.list}>
                <li ><Link className={styles.item} to="/">Home</Link></li>
                <li ><Link className={styles.item} to="/company">Sobre</Link></li>
                <li ><Link className={styles.item} to="/newproject">Novo Projeto</Link></li>
                <li ><Link className={styles.item} to="/projects">Projetos</Link></li>
                <li ><Link className={styles.item} to="/contact">Contato</Link></li>
            </ul>
        </Container>
        </nav>
    )
}

export default Navbar