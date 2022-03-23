import style from './circle.module.css';
import Arrow from '../../Arrow/Arrow';
import click from './click/click';
import left from './left/left';
import right from './right/right';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const Circle = ({numbers, setNumbers, activeNumber, limit, namePage}) => {
    const router = useRouter();
    const dispath = useDispatch();

    return (
        <div className={style.container}>
            <Arrow variant={'left'} click={() => left(setNumbers, numbers)}/>
            <div className={style.numbers}>
                {
                    numbers.map((e, index) => {
                        if (e == activeNumber && (index != 2 || limit < 4))
                        return (
                            <div className={style.circle} key={index} style={{
                                backgroundColor: 'var(--green)'
                            }}>
                                <h3>{e+1}</h3>
                            </div>
                        );

                        return (
                            <div className={style.circle} key={index} onClick={() => click(e, index, limit, numbers, namePage, router, dispath)}>
                                {index == 2 && numbers.length == 4 && limit >= 4? <h3>...</h3> : <h3>{e+1}</h3>}
                            </div>
                        );
                    })
                }
            </div>
            <Arrow variant={'right'} click={() => right(setNumbers, numbers, limit)}/>
        </div>
    );
}

export default Circle;