'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';

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
        <li className={`${styles.listItem} ${pathName === '/' && styles.active}`}>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li className={`${styles.listItem} ${pathName === '/about' && styles.active}`}>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </li>
        <li className={`${styles.listItem} ${pathName === '/products' && styles.active}`}>
          <Link className={styles.link} href="/products">
            Products
          </Link>
        </li>
        <li className={`${styles.listItem} ${pathName === '/login' && styles.active}`}>
          <Link className={styles.link} href="/login">
            Login
          </Link>
        </li>
        <li className={`${styles.listItem} ${pathName === '/logout' && styles.active}`}>
          <Link className={styles.link} href="/logout">
            Logout
          </Link>
        </li>
        <li className={`${styles.listItem} ${pathName === '/register' && styles.active}`}>
          <Link className={styles.link} href="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
