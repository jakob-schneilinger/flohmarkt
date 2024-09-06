import styles from './Selling.module.css';

const Selling: React.FC = () => {
    return (
        <div className={styles.selling}>
            <div className={styles.sellingHeader}>
                <h1>Selber<br />Verkaufen:</h1>
            </div>
            <div className={styles.sellingBody}>
                <p>
                    Im Pielachtaler Flohmarkt im ehemaligen EAZ-Gebäude, Ober-Grafendorf, Industriestraße 1, gibt es immer wieder freie Stände.
                    <br />
                    <br />
                    Auch wenn momentan alle Dauerplätze vergeben sind, wird meist in 1 bis 2 Monaten ein Platz frei. Wer sich zuerst meldet, hat die beste Chance, diesen Platz zu bekommen. Wir freuen uns auf Ihre Anfrage!
                </p>
            </div>
        </div>
    );
}

export default Selling;