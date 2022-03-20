import TextArea from '../../../TextArea/TextArea';
import style from './text.module.css';
import LiteText from '../../../LiteText/LiteText';

const Text = ({ textArea, setTextArea }) => {
    const liteText = {
        margin: 0
    };

    return (
        <div className={style.container}>
            <TextArea value={textArea} setValue={e => setTextArea(e.target.value)} />
            <LiteText styles={liteText}>Любая, важная информация</LiteText>
        </div>
    );
}

export default Text;