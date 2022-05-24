import style from './Menu.module.css';

const Menu = ({name, list}) => {
    return (
        <div className={style.menu}>
            <h3>{name}:</h3>
            <div className={style.demension}>
                {list.map((e, index) => <h4 key={index}>{e.name}: {e.value}</h4>)}
            </div>
        </div>
    );
}
export default Menu;