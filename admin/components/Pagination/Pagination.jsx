import style from '../../styles/Pagination/pagination.module.css';
import Circle from './Circle/Circle';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import push from './Circle/push/push';

const Pagintation = ({ activeNumber, limit, namePage }) => {
    if (!activeNumber) return <Fragment/>;
    let active = Number(activeNumber);
    const router = useRouter();
    const [numbers, setNumbers] = useState([]);

    useEffect(() =>{
        const arr = [];
        
        if (active > limit && limit != -1) {
            active = limit;
            push(router, namePage, limit);
        }
        for (let i = 0; i < 4; i++) {
            if (active +i < limit+1) arr.push(active+i);
            else if (arr[arr.length-1]-i >= 0) arr.unshift(arr[arr.length-1]-i);
        }

        if (numbers.length > arr.length) return;
        setNumbers(arr);
    }, [limit, activeNumber]); 

    return (
        <Fragment>
            <div className={style.container}>
                <div className={style.pagination}>
                    <Circle numbers={numbers} setNumbers={setNumbers} activeNumber={activeNumber} limit={limit} namePage={namePage}/>
                </div>
            </div>
        </Fragment>
    );
}

export default Pagintation;