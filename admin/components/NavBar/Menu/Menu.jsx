import style from './menu.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setArray } from '../../app/redux/arraySlice';
import isPage from '../isPage/isPage';

const Menu = ({ page }) => {
    const dispatch = useDispatch();

    return (
        <div className={style.menu}>
            <ul>
                <li onClick={() => isPage(dispatch, setArray, page, 'users')}><Link href="/table/users?id=0">Пользователи</Link></li>
                <li onClick={() => isPage(dispatch, setArray, page, 'services')}><Link href="/services/0">Услуги</Link></li>
                <li onClick={() => isPage(dispatch, setArray, page, 'cards')}><Link href="/table/cards?id=0">Карты</Link></li>
                <li onClick={() => isPage(dispatch, setArray, page, 'category')}><Link href="/category/category">Категории</Link></li>
            </ul>
        </div>
    );
}

export default Menu;