import styles from './bottom_slot.module.css'

import test from '../../../assests/test.webp'
const BottomSlot = (props) => {
    return (
        <div className={styles.bottomSlot__container}>
            <div className={styles.bottomSlot__profile}>
                <img src={test} alt="profile" />
                <div className={styles.bottomSlot__name}>
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                </div>
            </div>
            <div className={props.status === 'Available' ? styles.bottomSlot__status__green : styles.bottomSlot__status__red}>
                {props.status}
            </div>
        </div>
    )
}
export default BottomSlot;