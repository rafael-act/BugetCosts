import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>NewProject</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject