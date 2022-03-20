import ImageCustom from "../../../Image/Image";
import style from './navbar.module.css';
import { useDispatch } from 'react-redux';

const NavBar = ({ title, centerTitle, marginBottom, close }) => {
    const titlePosition = {
        margin: centerTitle? 'auto' : ''
    }
    const navbar = {
        marginBottom: marginBottom,
    }

    return (
        <div className={style.navbar} style={navbar}>
            <h3 style={titlePosition}>{title}</h3>
            <div className={style.close} onClick={() => close()}>
                <ImageCustom src='/close.svg' alt='close' width='18px' height='17px'/>
            </div>
        </div>
    );
}

export default NavBar;
