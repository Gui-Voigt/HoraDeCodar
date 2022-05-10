import styles from '../../css/ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

function ProjectForm ({btnText}){
    return(
        <form className={styles.form}>
            <Input type="text" name="nome" text="Nome do projeto" placeholder="Insira o nome do projeto"/>
            <Input type="number" name="budget" text="Orçamento do projeto" placeholder="Insira o orçãmento total"/>
                      
            <Select name="category_id" text="Selecione a categora"/>
                    
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm