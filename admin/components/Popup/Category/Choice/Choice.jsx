import { useState } from 'react';
import style from './choice.module.css';

const Choice = ({ setCategory, category, menu, setMenu }) => {
    const [menuByName, setMenuByName] = useState('');
    const choice = value => {
        setMenuByName(value);
        const copyCategory = JSON.parse(JSON.stringify(category));
        copyCategory.push(value);
        setCategory(copyCategory);
    }

    const back = () => {
        setMenuByName('');
        setCategory([]);
    }

    return (
        <div className={style.choice}>
            <div className={style.menu} onClick={back}>
                <h4>Сбросить</h4>
            </div>
            {
                menu.map((menu) => {
                    if (!menu[menuByName]) return;
                    return menu[menuByName].map((e, index) => (
                        <div key={index} className={style.menu} onClick={() => choice(e)}>
                            <h4>{e}</h4> 
                        </div>
                    ));
                })
            } 
        </div>
    );
}

export default Choice;

 