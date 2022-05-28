import style from './inputList.module.css';
import Input from '../../../Input/Input';

const InputList = ({list}) => {
    return (
        <div className={style.Input}>
            {
                list.map((e, index) => (
                    <div key={index} className={style.input}>
                    <h3>{e.name}</h3>
                    <Input
                        type='text' 
                        value={e.value} 
                        onChange={r => e.setValue(r.target.value)}
                        styles={{
                            border: '2px solid var(--gray)',
                            borderRadius: '14px',
                            height: '52px',
                        }}
                        font={{
                            fontWeight: 500,
                            fontSize: '18px'
                        }}
                        rigthSvg={e.anxiety}
                        anxiety={true}
                    />
                </div>
                ))
            }
        </div>
    )
}
export default InputList;