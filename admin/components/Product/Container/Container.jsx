import style from './container.module.css';
import Image from './Image/Image';
import Form from './Form/Form';
import Buttons from './Buttons/Buttons';

const Container = ({src, name, price, id}) => {
    return (
        <div className={style.container}>
            <Image src={src[0]} alt={name}/>  
            <Form name={name} price={price}/>
            <Buttons id={id}/>
        </div>
    );
}

export default Container;