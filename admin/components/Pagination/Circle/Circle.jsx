import style from './circle.module.css';
import Arrow from '../../Arrow/Arrow';
import click from './click/click';
import left from './left/left';
import right from './right/right';
import { useRouter } from 'next/router';

const Circle = ({numbers, setNumbers, activeNumber, limit, namePage}) => {
    const router = useRouter();

    return (
        <div className={style.container}>
            <Arrow variant={'left'} click={() => left(setNumbers, numbers, limit)}/>
            <div className={style.numbers}>
                {
                    numbers.map((e, index) => {
                        if (e == activeNumber)
                        return (
                            <div className={style.circle} key={index} style={{
                                backgroundColor: 'var(--green)'
                            }}>
                                <h3>{e+1}</h3>
                            </div>
                        );

                        return (
                            <div className={style.circle} key={index} onClick={() => click(e, setNumbers, limit, numbers, namePage, router)}>
                                <h3>{e+1}</h3>
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