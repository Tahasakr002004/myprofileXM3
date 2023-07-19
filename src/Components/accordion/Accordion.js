import React,{useState} from 'react'
import {GoDash,GoPlus} from "react-icons/go";
import style from '../../modules/abouts.module.css';
import classNames from 'classnames';



function Accordion ( { items } ) {
  const [expandedIndex, setExpandedIndex] = useState( -1 );

  const handleClick = ( nextIndex ) => {
    setExpandedIndex( ( currentExpandedIndex ) => {
      if ( currentExpandedIndex === nextIndex ) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  }


  const renderedItems = items.map( ( item, index ) => {
    const isExpanded = index === expandedIndex;
    const icon = <span
      className={classNames( style['accordion-btn'] )}>{isExpanded ? <GoDash className={style.godash} /> : <GoPlus className={style.goplus}/>}</span>;
    return (
      <div  key={item.id} className={style['accordion-item']} >
        <h3 onClick={() => handleClick( index )} className={style['accordion-header']}>
          {<span className={style['accordion-header-h']}>{item.label}</span>} {icon}</h3>
      {isExpanded && <div className={style['accordion-content']}> {item.content}</div>}
      </div>
    )
  })
  return (
    <div className={style.accordion}> {renderedItems}</div>
  )
}

export default Accordion;