"use client"
// Page.js

import React, { useEffect, useState } from 'react';
import ThemeComp from './componenets/ThemeComp';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
import Loader from './componenets/Loader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Pagination from './componenets/Pagination';
import Footer from './componenets/Footer';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const { setTheme, theme } = useTheme();

        const fetchPosts = async () => {
            try {
            const response = await fetch('https://dummyjson.com/posts');
            const data = await response.json();
            setPosts(data);
            setLoader(false);
            } catch (e) {
            console.log(e, 'error');
            }
        };

        const allPosts = posts.posts;

        const themeMode = theme;

        useEffect(() => {
            fetchPosts();
        }, []);

        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        const currentPosts = allPosts?.slice(firstPostIndex, lastPostIndex);

        const onPageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const truncateText = (text, maxLength) => {
            return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        };

        return (
            <div className={styles.container}>
            {loader ? (
                <Loader />
            ) : (
                <div>
                {currentPosts?.map((item, key) => (
                    <Link
                    key={`${key}-${themeMode}`}
                    className={themeMode === 'dark' ? styles.deco : styles.deco2}
                    href={`/${item.id}`}
                    >
                    <div className={styles.item}>
                        <Image
                        src={`https://picsum.photos/100/100/?${key}`}
                        alt=""
                        width={100}
                        height={100}
                        />
                        <div className={styles.itemContent}>
                        <p>{item.title}</p>
                        <p>{truncateText(item.body, 100)}</p>
                        </div>
                    </div>
                    </Link>
                ))}
                <Pagination
                    totalPosts={allPosts?.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <Footer/>
                </div>
            )}
            </div>
        );
        };

        export default Page;
