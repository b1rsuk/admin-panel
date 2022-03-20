import { Fragment } from 'react';
import style from '../../styles/TableWindows/tableWindows.module.css';

const TableWindow = ({title, Button, columns}) => {
    if (Button === false) return <Fragment />;
    return ( 
        <div className={style.window}>
            <div className={style.container}>
                <table className={style.table_dark}>
                    <tbody>
                        <tr>
                            {
                                title.map((title, index) => <th key={index}>{title}</th>)
                            }
                            <th className={style.do}>Действия</th>
                        </tr>
                        {
                            columns.map((columns, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{columns.one}</td>
                                        <td>{columns.two}</td>
                                        <td>{columns.three}</td>
                                        <td>{columns.four}</td>
                                        <td className={style.button}>
                                            <Button id={columns.one}/>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableWindow;