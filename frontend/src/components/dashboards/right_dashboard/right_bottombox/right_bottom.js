import BottomSlot from '../../../UI/bottom_slot/bottom_slot'
import styles from './right_bottom.module.css'
const DUMMY_DATA = [
    {
        name:
            'Nguyen Van A',
        title:
            'Janitor',
        status:
            'Available'
    },
    {
        name:
            'Thanh Thien',
        title:
            'Collector',
        status:
            'Unavailable'
    },
    {
        name:
            'Tommy Thai',
        title:
            'Janitor',
        status:
            'Unavailable'
    },
]
const RightBottom = () => {
    return (
        <div className={styles.bottombox__container}>
            <div className={styles.bottombox__content}>
                <p>Available Janitor and Collector</p>
                <div className={styles.bottombox__employees}>
                    {DUMMY_DATA.map((data) => {
                        return (
                            <BottomSlot
                                name={data.name}
                                title={data.title}
                                status={data.status}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default RightBottom