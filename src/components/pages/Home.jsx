import styles from '../../css/Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton'

function Home () {
    return(
        <section className={styles.home_container}>

            <h1>BEM-VINDO AO <span>COSTS</span></h1>
            <p> Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkButton to="/newproject" text="Criar Projeto"/>

            <img src={saving} alt="Costs"/>
        </section>
    )
}

export default Home