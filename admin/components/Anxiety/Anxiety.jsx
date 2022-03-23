import style from './anxiety.module.css';
import CustomImage from '../../components/Image/Image';

const Anxiety = ({ anxiety }) => {
    const anxietyStyle = {
        backgroundColor: anxiety? 'var(--red)' : 'var(--silver)'
    }
    return (
        <div className={style.anxiety} style={anxietyStyle}>
            <CustomImage src='/anxiety.svg' alt='anxiety' width='6px' height='16px'/>
        </div>
    );
}
export default Anxiety;