import style from './NavigatoinItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={style.listItem}>
            <span className={style.navListItem}>{props.children}</span>
        </li>
    );
}

export default NavigationItem;