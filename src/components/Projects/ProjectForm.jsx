import {useState, useEffect} from 'react'

import styles from '../../css/ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'



function ProjectForm ({handleSubmit, btnText, projectData}){

    const [ categories, setCategories ] = useState([])
    const [ project, setProject] = useState(projectData || {})
    
    useEffect( () => dbConnect(setCategories), [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({ ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
            },
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                name="nome" 
                text="Nome do projeto" 
                placeholder="Insira o nome do projeto" 
                handleOnChange={handleChange}
                value={project.nome ? project.nome : ''}
            />
            <Input 
                type="number"
                name="budget" 
                text="Orçamento do projeto" 
                placeholder="Insira o orçãmento total"  
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
                      
            <Select 
                name="category_id" 
                text="Selecione a categora"
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : ''}
            />
                    
            <SubmitButton text={btnText}/>
        </form>
    )
}



function dbConnect (hookUseState){
    const setCategories = hookUseState
    fetch("http://localhost:5000/categories", {
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {setCategories(data)})
            .catch(err => console.log(err))
}

export default ProjectForm