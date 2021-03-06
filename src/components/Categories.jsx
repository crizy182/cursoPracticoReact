import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categries = ({ children, title }) => (
  <div className='Categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categries;
