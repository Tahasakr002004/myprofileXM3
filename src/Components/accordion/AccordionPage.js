import React from 'react'
import Accordion from './Accordion';
// import style from './accordion.css'
// import classNames from 'classnames'
function AccordionPage () {
  
  const items = [
    {
      id:'j34o33i',
      label: ' #Technologie ',
      content: 'Ich habe HTML/CSS: Flex-box und Grid-layout'
    },
    {
      id:'skdjfkoi399',
      label: '#Technologie ',
      content: 'Ich habe Komplett JAVASCRIPT: OOP, Async/Await, DOM und Modules'
      
    },
    {
      id:'iweoir3i43',
      label: '#Technologie ',
      content: 'Ich habe Komplett REACT: Context-Systex, Routing, Hooks und Redux'
    },
    {
      id:'iwedf3675',
      label: '#Technologie ',
      content: 'Ich habe fundierte Kenntinisse in USER Experience: Figma-Tool'
    },

    {
      id:'iwedfsdf33',
      label: '#Technologie ',
      content: 'Ich habe Controller-System(Git) und BetriebSysteme(linux) '
    }
  ];
  return (
    <Accordion items={items}/>
  )
}

export default AccordionPage;