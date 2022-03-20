import style from '../../styles/NavBar/navBar.module.css';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import Button from '../Button/Button';

const NavBar = ({ page }) => {
    return (
        <div className={style.navBar}>
            <Logo page={page}/>
            <Menu page={page}/>
            <Button text='Выход' width='158px' height='55px' w={700} f='22px'/>
        </div>
    );
}

export default NavBar;