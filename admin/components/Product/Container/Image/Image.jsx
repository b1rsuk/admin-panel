import ImageCustom from "../../../Image/Image";
import style from './image.module.css';

const Image = ({src, alt}) => {
    return (
        <div className={style.image}>
            <ImageCustom src={src} alt={alt} width='145px' height='72px'/>
        </div>
    );
}

export default Image;