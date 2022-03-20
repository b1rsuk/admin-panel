import style from './logo.module.css';
import ImageCustom from '../../Image/Image';
import { useRouter } from 'next/router';
import isPage from '../isPage/isPage';
import { useDispatch } from 'react-redux';
import { setArray } from '../../app/redux/arraySlice';

const Logo = ({ page }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    return (
        <div className={style.logo} onClick={() => {
            isPage(dispatch, setArray, page, 'users')
            router.push('/table/users?id=0');
        }}>
            <ImageCustom src='/logo.svg' width={'64px'} height={'49px'} alt='logo'/>
            <h1>Планета<br/>
                мебили</h1>
        </div>
    );
}

export default Logo;