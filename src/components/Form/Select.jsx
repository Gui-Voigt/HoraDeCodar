import styles from '../../css/Select.module.css'

function Select ({text, name, handleOnChange, options ,value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                {options.map(
                    (option) => (
                        <option value={option.id} key={option.id}> 
                                {option.name} 
                            </option>
                        )
                    )
                }
            </select>
        </div>
    )
}


export default Select
