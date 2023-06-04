//Search Page
import React from 'react'

//Import CSS
import "./index.css";

//Import Component
import CardGallery from '../CardGallery';

const SearchPage = ({ isHidden, isSearch, searchQuery, resultSearch }) => {

    return (
            !!isHidden ? <></> : 
                <section id="container-search" class="px-4 pt-4">
                    <div class="px-4">
                    <h1 class="search-query">Search Result: <span id="query">{`"${searchQuery}"`}</span></h1>
                    </div>
                    <div id="search-result" class="search-result-div">
                        <CardGallery data={resultSearch} isSearch={isSearch} />
                    </div>
                </section>
    );
};

export default SearchPage;