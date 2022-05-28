import style from './menu.module.css';
import Inputs from './Inputs/Inputs';
import Image from 'next/image';

const Menu = ({input, setInput, menu, setMenu}) => {
    const list = [];
    for (let i = 0; i < menu; i++) {
        list.push(<Inputs key={i} index={i} input={input} setInput={setInput}/>);
    }
    return (
        <div className={style.menu}>
            {list}
            <div className={style.container}>
                <div className={style.remove}>
                    <Image src={'/minus.svg'} alt='plus' width={'20px'} height={'20px'} onClick={() => setMenu(menu - 1)}/>
                </div>
                <div className={style.add}>
                    <Image src={'/plus.svg'} alt='plus' width={'20px'} height={'20px'} onClick={() => setMenu(menu + 1)}/>
                </div>
            </div>
        </div>
    );
}
export default Menu;