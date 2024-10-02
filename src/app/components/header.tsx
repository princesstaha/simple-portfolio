import Link from "next/link";
import styles from "./style.module.css";




export default function header(){
    return(
        <div>
    <header className={styles.header}>
        
        <nav className={styles.nav}>
<ul className={styles.navList}>
<li className={styles.navItem}>
    <Link href ="/">Home
    </Link>
</li>
<li className={styles.navItem}>
    <Link href ="/about-us">About
    </Link>
</li>

<li className={styles.navItem}>
    <Link href ="/contact-us">Contact
    </Link>
</li>
</ul>
</nav>
    </header>
    <div className={styles.imagecontainer}>
        <h3 >Welcome to my portfolio </h3>
        <img src="/pic.jpg"></img> 

    </div>
    </div>

    ) 
};