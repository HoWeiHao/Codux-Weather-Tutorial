import classNames from 'classnames';
import styles from './card.module.scss';

export interface Day {
    "date": number,
    "weather": string,
    "temp2m": {
    "max": number,
    "min": number
    },
    "wind10m_max": number
}

interface CardProps {
    className?: string;
    day: Day;
    img: string;
    cond: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, day, img, cond }: CardProps) => {
    const date = day.date.toString()
    const year = Number(date.slice(0, 4))
    const month = Number(date.slice(4,6))
    const dayOfTheMonth = Number(date.slice(6, 8))
    const formattedDate = new Date(year, month -1, dayOfTheMonth).toDateString().slice(0,3)

    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles['card-paragraph']}>{formattedDate}</p>
            <p className={styles['card-paragraph']}>{dayOfTheMonth}/{month}/{year}</p>
            <img
                src={img}
                alt=""
                className={styles['card-img']}
            />
            <h2 className={styles['card-heading']}>{day.temp2m.max}°C</h2>
            <p className={styles['card-paragraph']}>{cond}</p>
        </div>
    );
};
