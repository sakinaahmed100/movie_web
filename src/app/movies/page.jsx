"use client"
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "../styles/movies.module.css"

export default function Movies() {
    const [movie, setMovie] = useState(null);

    const url = "https://www.omdbapi.com/?i=tt3896198&apikey=6a695d42";
    const Data = async () => {
        try {
            const response = await axios.get(url, {
                params: {
                    s: 'Guardians of the Galaxy', // Search query
                    type: 'movie' // Only retrieve movies
                }
            })
            if (response.data.Search) {
                setMovie(response.data.Search);
            }
            console.log(response.data.Search);
        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }
    };
    useEffect(() => {
        Data()

    }, [])
    return (
        <>
            <Head>
                <link rel="preload" href="/script.js" as="script" />
            </Head>
           
            <div className={styles.movie}>
                {movie?.map((e) => {
                    if (e.Poster !== "N/A") {
                        return (

                            <div className={styles.movieCard} key={e.imdbID}>
                                <div className={styles.imgDiv}>
                                    <Image className={styles.image} src={e.Poster} width={170} height={150} alt={e.Title}></Image>

                                </div>
                                <div className={styles.Text}>
                                    <p className={styles.Title}>
                                        {e.Title}
                                    </p>
                                    <p className={styles.Year}>
                                        {e.Year}
                                    </p>
                                    <p className={styles.description}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure consequuntur inventore aliquam placeat beatae esse, assumenda,

                                    </p>
                                </div>
                            </div>

                        )
                    }
                })}
            </div>
        </>
    )
}
