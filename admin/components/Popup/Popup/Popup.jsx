import style from '../../../styles/Popup/popup.module.css';
import NavBar from './NavBar/NavBar';

const Popup = props => {
    const { visible, title, centerTitle, width, height, padding, marginBottom, adaptive, close, zIndex = 1, ...other } = props;
    const popup = {
        display: visible? 'flex' : 'none',
        zIndex: zIndex,
    };
    const container = {
        padding: padding,
    };
    return (
        <div className={style.popup} style={popup}>
            <div className={style.adaptive} onClick={close}>
                <div className={style.container + ' ' + adaptive} style={container} onClick={e => e.stopPropagation()}>
                    <NavBar title={title} centerTitle={centerTitle} marginBottom={marginBottom} close={close}/>
                    <div className={style.other} {...other}/>
                </div>
            </div>
        </div>
    );
};

export default Popup; 