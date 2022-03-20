import style from '../../styles/Product/product.module.css';
import Container from './Container/Container';

const Product = ({product}) => {
    return (
        <div className={style.product}>
            {
                product.map((product, index) => <Container key={index} src={product.src} name={product.name} price={product.price} id={product.id}/>)
            }
        </div>
    );
}

export default Product;