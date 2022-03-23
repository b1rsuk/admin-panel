import NavBar from '../../components/NavBar/NavBar';
import { Fragment, useState } from 'react';
import Pagintation from '../../components/Pagination/Pagination';
import { useRouter } from 'next/router';
import TableWindow from '../../components/Table/TableWindow';
import usersTitle from '../../components/Table/users/usersTitle';
import cardsTitle from '../../components/Table/cards/cardsTitle';
import categoryTitle from '../../components/Table/category/categoryTitle';
import UserButton from '../../components/Table/users/UserButton';
import CardsButton from '../../components/Table/cards/CardsButton';
import CategoryButton from '../../components/Table/category/CategoryButton';
import Delete from '../../components/Popup/Delete/Delete';
import User from '../../components/Popup/User/User';
import Note from '../../components/Popup/Note/Note';
import CategoryEdit from '../../components/Popup/CategoryEdit/CategoryEdit';
import { useSelector, useDispatch } from 'react-redux';
import { setArray } from '../../components/app/redux/arraySlice';
import { useEffect } from 'react';
import getColumns from '../../components/pageRequest/table/request/getColumns';
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import CategoryCreate from '../../components/Popup/CategoryCreate/CategoryCreate';
import getLimit from '../../components/pageRequest/table/request/getLimit';
import FastPagination from '../../components/Popup/FastPagination/FastPagination';

const Table = () => {
    const router = useRouter();
    const { name, id } = router.query;
    const array = useSelector(state => state.array.array);
    const dispatch = useDispatch();
    const [idPage, setIdPage] = useState(0);
    const [limitPage, setLimitPage] = useState(-1);

    useEffect(() => {
        if (!name || !id) return;
        if (name != 'users' && name != 'cards' && name != 'cards' && name != 'category' || !Number(id) && id != '0') return router.push('/table/users?id=0');
        getColumns(name, id, dispatch, setArray);
        setIdPage(id);
        getLimit(name, setLimitPage);
    }, [name, id]);

    return (
        <Fragment>
            <CategoryEdit />
            <User/>
            <Delete page={name}/>
            <Note/>
            <CategoryCreate />
            <FastPagination limit={limitPage} page={`/table/${name}?id=`}/>
            <NavBar page={name}/>
            <ButtonCreate variant={name}/>
            <Pagintation
                activeNumber={idPage} 
                limit={limitPage} 
                namePage={name}
             />
            <TableWindow 
                title={name == 'users'? usersTitle : name == 'cards'? cardsTitle : name == 'category'? categoryTitle : []}
                Button={name == 'users'? UserButton : name == 'cards'? CardsButton : name == 'category'? CategoryButton : false}
                columns={array}
            />
        </Fragment>
    );
}

export default Table;