import classNames from 'classnames';
import styles from './main-card.module.scss';

export interface MainCardProps {
    className?: string;
    temp: number;
    img: string | undefined;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainCard = ({ className, temp, img }: MainCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={img}
                alt=""
                className={styles['main-img']}
            />
            <h2 className={styles['main-heading']}>Today </h2>
            <p className={styles['main-temp']}>{temp}°C</p>
        </div>
    );
};
