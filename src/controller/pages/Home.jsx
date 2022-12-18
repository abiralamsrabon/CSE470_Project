import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { OutlineButton } from '../../view/components/button/Button';
import HeroSlide from '../../view/components/hero-slide/HeroSlide';
import MovieList from '../../view/components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';


const Home = () => {
    const { keyword } = useParams();
    return (
        <>
           
            <HeroSlide/>
            
            
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
