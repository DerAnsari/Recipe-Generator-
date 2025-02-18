import styles from "./innerContain.module.css"

export default function InnerContainer({children}){
    return(
        <div className={styles.lilBoss}>
            {children}
        </div>
    )
}