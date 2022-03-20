import style from '../../styles/LiteText/liteText.module.css';

const LiteText = props => {
    const { styles, ...other } = props;

    return (
        <h5 {...other} className={style.liteText} style={styles}></h5>
    )
}

export default LiteText;