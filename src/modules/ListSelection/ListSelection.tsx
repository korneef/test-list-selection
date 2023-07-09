import React, { useState } from 'react';
import './ListSelection.css';
import { List } from '../../components';
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import { selectItem, unSelectItem, addHistory } from '../../app/store/slices/listSlice';
import { IItem } from '../../app/store/slices/listSlice';

const ListSelection: React.FC = () => {
  const data = useAppSelector(state => state.list);
  const [searchText, setSearchText] = useState('')
  const [viewDetails, setViewDetails] = useState(true)

  const dispatch = useAppDispatch();

  const className = 'list-selection';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  };

  const onSelect = (item: IItem) => {
    dispatch(selectItem(item));
    dispatch(addHistory({name: item.name, type: 'add'}));
  }

  const onUnSelect = (item: IItem) => {
    dispatch(unSelectItem(item));
    dispatch(addHistory({name: item.name, type: 'delete'}));
  }

  const setCountHelper = (item: IItem, searchString: string): number => {
    let count: number = 0;
    count = count + item.name.toLowerCase().split(searchString.toLowerCase()).length - 1;
    if (!item.top_subjects) return count;
    for (let i = 0; i < item.top_subjects.length; i += 1) {
      count = count + item.top_subjects[i].toLowerCase().split(searchString.toLowerCase()).length - 1;
    }
    return count;
  }

  return (<div className={ className }>
      <div className={ `${ className }__input-wrapper` }>
        <input
          placeholder={ 'Введите текст для поиска' }
          className={ `${ className }__input-search` }
          value={ searchText }
          onChange={ onChange }/>
        <label
          className={ `${ className }__input-details` }
        >
          <input
            type={ 'checkbox' }
            checked={ viewDetails }
            onChange={ () => setViewDetails(!viewDetails) }
          />Показать детали
        </label>
      </div>
      <div className={ `${ className }__lists` }>

        <List data={ data.items
          .filter(item => {
            return setCountHelper(item, searchText) > 0
          })
          .sort((a, b) => {
            if (searchText === '') return a.name > b.name ? 1 : -1;
            return setCountHelper(a, searchText) > setCountHelper(b, searchText) ? -1 : 1;
          })
          .map((item) => {
            return {
              key: item.key,
              node: (
                <>
                  <div>
                    <div className={ `${ className }__item-text` }>{ item.name }</div>
                    { viewDetails ? <div className={ `${ className }__top-list` }>
                      { item.top_subjects ? item.top_subjects.map(el => <div
                        className={ `${ className }__top-item` }>{ el }</div>) : null }
                    </div> : null }
                  </div>
                  <button
                    className={ `${ className }__item-button` }
                    onClick={ () => onSelect(item) }>
                    +
                  </button>
                </>)
            }
          })
        }/>
        <List data={ data.selectedItems.map((item) => {
          return {
            key: item.key,
            node: (
              <>
                <div>
                  <div className={ `${ className }__item-text` }>{ item.name }</div>
                  { viewDetails ? <div className={ `${ className }__top-list` }>
                    { item.top_subjects ? item.top_subjects.map(el => <div
                      className={ `${ className }__top-item` }>{ el }</div>) : null }
                  </div> : null }
                </div>
                <button
                  className={ `${ className }__item-button` }
                  onClick={ () => onUnSelect(item) }>
                  -
                </button>
              </>)
          }
        })
        }/>

      </div>
    </div>
  );
}

export default ListSelection;