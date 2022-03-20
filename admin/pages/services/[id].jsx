import { Fragment } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";
import Pagintation from "../../components/Pagination/Pagination";
import Product from '../../components/Product/Product';
import ProductPopup from '../../components/Popup/Product/ProductPopup/ProductPopup';
import Delete from "../../components/Popup/Delete/Delete";
import ProductCreate from "../../components/Popup/Product/ProductCreate/ProductCreate";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../../components/app/redux/arraySlice";
import { useEffect, useState } from "react";
import Category from "../../components/Popup/Category/Category";
import ButtonCreate from "../../components/ButtonCreate/ButtonCreate";
import getProduct from "../../components/pageRequest/services/request/getProduct";
import getLimit from "../../components/pageRequest/services/request/getLimit";

const Services = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const [idPage, setIdPage] = useState(0);
    const [limitPage, setLimitPage] = useState(0);
    
    useEffect(() => {
        if (!Number(id) && id != '0') return router.push('/services/0');
        getProduct(dispatch, setArray, id);
        setIdPage(id);
        getLimit(setLimitPage);        
    }, [id]);

    const product = useSelector(state => state.array.array);
    const [category, setCategory] = useState('');
    return (
        <Fragment>
            <Category category={category} setCategory={setCategory}/>
            <Delete page={'services'}/>
            <ProductPopup category={category} setCategory={setCategory}/>
            <ProductCreate category={category} setCategory={setCategory}/>
            <NavBar page={'services'}/>
            <ButtonCreate variant={'position'}/>
            <Pagintation
                activeNumber={idPage} 
                limit={limitPage} 
                namePage={'services'}
             />
             <Product product={product}/>
        </Fragment>
    );
}

export default Services;