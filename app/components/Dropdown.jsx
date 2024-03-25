'use client';

import { useState } from 'react';

import Link from 'next/link';

import styles from './Dropdown.module.css';

export default function Dropdown(props) {
  const { menuItem } = props;
  const menuItems = menuItem?.children ? menuItem.children : []; 
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() { setIsOpen(!isOpen); console.log(isOpen) }

  return (
    <div className={styles.dropdownContainer} onMouseLeave={() => setIsOpen(false)}>
      <button className={styles.dropdownBtn} onClick={() => toggleDropdown()}>
        {menuItem.title}
      </button>
      <div className={`${styles.dropdown} ${isOpen? styles.dropdownOpen : styles.dropdownClosed}`}>
        {
          menuItems.map(item => 
            <Link 
              key={item.route}
              href={item.route} 
              onClick={() => toggleDropdown()}
            >{item.title}</Link>
          )
        }
      </div>
    </div>
  )
}
