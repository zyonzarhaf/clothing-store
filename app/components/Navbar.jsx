'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';

import Dropdown from './Dropdown';

import styles from './Navbar.module.css';

const menuItems = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About",
    route: "/about"
  },
  {
    title: "Women",
    children: [
      {
        title: "all",
        route: "/products/women/all"
      },
      {
        title: "coats-and-jackets",
        route: "/products/women/coats-and-jackets"
      },
      {
        title: "t-shirts",
        route: "/products/women/t-shirts"
      },
      {
        title: "pants",
        route: "/products/women/pants"
      },
      {
        title: "underwear",
        route: "/products/women/pants"
      },
      {
        title: "shoes",
        route: "/products/women/shoes"
      }
    ]
  },
  {
    title: "Men",
    children: [
      {
        title: "all",
        route: "/products/men/all"
      },
      {
        title: "coats-and-jackets",
        route: "/products/men/coats-and-jackets"
      },
      {
        title: "t-shirts",
        route: "/products/men/t-shirts"
      },
      {
        title: "pants",
        route: "/products/men/pants"
      },
      {
        title: "underwear",
        route: "/products/men/underwear"
      },
      {
        title: "shoes",
        route: "/products/men/shoes"
      }
    ]
  },
  {
    title: "Login",
    route: "/login"
  },
  {
    title: "Register",
    route: "/register"
  }
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logoMark}>Clothing Store</h2>
      <CiMenuBurger className={styles.burgerMenu} />
      <ul className={styles.listItems}>
        {
          menuItems.map((menuItem) => {
            return menuItem.children? (
              <Dropdown menuItem={menuItem} />
            ) : (
              <li className={`${styles.listItem} ${pathName === menuItem.route && styles.active}`}>
                <Link className={styles.link} href={menuItem.route}>
                  {menuItem.title}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}
