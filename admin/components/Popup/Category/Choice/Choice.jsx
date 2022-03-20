import style from './choice.module.css';
import Button from '../../../Button/Button';

const Choice = ({ setCategory, menu }) => {
    return (
        <div className={style.choice}>
            <div className={style.menu} onClick={() => setCategory('')}>
                <h4>Без категории</h4>
            </div>
            {
                menu.map((menu, index) => (
                    <div key={index} className={style.menu} onClick={() => setCategory(menu)}>
                        <h4>{menu}</h4>
                    </div>
                ))
            } 
        </div>
    );
}

export default Choice;