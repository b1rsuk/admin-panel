import style from '../../styles/TextArea/textArea.module.css';

const TextArea = ({ value, setValue }) => {
    return (
        <textarea className={style.textArea} value={value} onChange={setValue}></textarea>
    );
}
export default TextArea;