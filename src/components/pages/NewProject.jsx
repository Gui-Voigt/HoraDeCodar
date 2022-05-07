import styles from '../../css/NewProject.module.css'
import ProjectForm from '../Projects/ProjectForm'

function NewProject () {
    return(
        <div className={styles.newproject_container}>
            <h1> Criar Projeto</h1>
            <p> Crie seu projeto para depois adicionar ao serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject