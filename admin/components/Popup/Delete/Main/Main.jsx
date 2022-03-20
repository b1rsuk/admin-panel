import style from './main.module.css';
import Anxiety from '../../../../components/Anxiety/Anxiety';

const Main = () => {
    return (
        <div className={style.delete}>
            <div className={style.svg}>
                <Anxiety anxiety={true}/>
            </div>
            <h3>Вы действительно хотите удалить данную позицию?</h3>
        </div>
    );
}

export default Main;