import NavBar from '../../components/NavBar/NavBar';
import { Fragment, useState } from 'react';
import TableCategory from '../../components/TableCategory/TableCategory';
import CreateCategory from '../../components/Popup/CreateCategory/CreateCategory'
import Delete from '../../components/Popup/Delete/Delete';

const Category = () => {
    const [table, setTable] = useState([]);
    const [menuByName, setMenuByName] = useState('');

    return (
        <Fragment>
            <Delete page={'category'}/>
            <CreateCategory table={table} setTable={setTable} menuByName={menuByName}/>
            <NavBar page={'category'}/>
            <TableCategory table={table} setTable={setTable} menuByName={menuByName} setMenuByName={setMenuByName}/>
        </Fragment>
    );
}

export default Category;