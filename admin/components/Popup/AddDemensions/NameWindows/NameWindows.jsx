import { Fragment } from "react";
import Input from "../../../Input/Input";
import style from './nameWindows.module.css';

const NameWindows = ({name, setName}) => {

    return (
        <Fragment>
            <h3 className={style.title}>Название</h3>
            <Input 
                type='text' 
                value={name} 
                onChange={e => setName(e.target.value)}
                styles={{
                    border: '2px solid var(--gray)',
                    borderRadius: '14px',
                    height: '52px',
                    marginBottom: '16px'
                }}
                font={{
                    fontWeight: 500,
                    fontSize: '18px',
                    padding: '8px'
                }}
                anxiety={true}
            />
        </Fragment>        
    );
}

export default NameWindows;