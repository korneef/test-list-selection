import React from 'react';
import { useParams } from 'react-router-dom';
import { List } from 'components';
import { useAppSelector } from '../../app/store/hooks';
import './History.css';



function History() {
  const history = useAppSelector(state => state.list.history);
  const {type} = useParams();
  const className = 'history';

  enum typeNames {
    add = 'добавление',
    delete = 'удаление'
  }

  return (<div className={ className }>
      <List data={
        history
          .filter(item => {
            if (type === 'all') return true;
            return item.type === type;
          })
          .map(item => {
            return {
              key: item.key,
              node: (<>
                <div className={`${className}__item-name`}>{ item.name }</div>
                <div>
                  <div className={`${className}__item-type`}>Тип: { typeNames[item.type] }</div>
                  <div className={`${className}__item-date`}>{ item.date }</div>
                </div>

              </>)
            }
          }) }/>
    </div>

  );
}

export default History;