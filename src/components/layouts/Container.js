import styles from './Container.module.css'


function Container(props) {
    return (
        <div className={`${styles.container} ${props.customclass}`}>
            {props.children}
        </div>
    )
}

export default Container