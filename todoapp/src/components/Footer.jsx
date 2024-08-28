import styles from "./footer.module.css"

export default function Footer({TodosCompleted, totalTodos}) {
    return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Todos: {TodosCompleted}</span>
        <span >Total Todos: {totalTodos}</span>
    </div>
    )
}
