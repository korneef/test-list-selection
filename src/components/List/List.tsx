import React from 'react';
import './List.css';

interface Props {
  data: Array<IData>
}

interface IData {
  key: string,
  node: React.ReactNode
}

const List: React.FC<Props> = (props) => {
  const {data } = props;
  const className = 'list'
  return (
    <ul className={className}>
      {data.map(item => {
          return <li className={`${className}__element`} key={ item.key }>{ item.node }</li>
        }
      )}
    </ul>
  );
}

export default List;