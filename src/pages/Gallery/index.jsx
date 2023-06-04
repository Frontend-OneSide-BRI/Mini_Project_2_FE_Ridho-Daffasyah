import React, {useState, useEffect} from 'react'

//Import Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FilterComponent from '../../components/Filter';
import Tab from 'react-bootstrap/Tab';
import SearchPage from '../../components/SearchPage';

const Gallery = ({ data }) => {
    const allCategory = ["All"];
    const uniqueCategory = [...new Set(data.map((item) => item.category))];
    const categories = allCategory.concat(uniqueCategory);
    const [isGallery, setIsGallery] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [resultSearch, setResultSearch] = useState([]);

    //Function: Search function
    const handleSearch = (event) => {
        const searchValue = searchQuery.toLowerCase();
        const result = data.filter((item) => {
            return item.name.toLowerCase().includes(searchValue);
            });
        setIsHidden(false);
        setIsGallery(false);
        setIsSearch(true);
        //No refreshing
        event.preventDefault();
        setResultSearch(result);
    }

    useEffect(() => {
        //Check if the page is gallery or not
        if (window.location.pathname === '/gallery') {
            setIsGallery(true);
        }
    }, []);

    return (
        <div className='h-screen overflow-x-hidden'>
            <Navbar data={data} isGallery={isGallery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
            {!!isHidden ? <Tab.Container defaultActiveKey="All">
                <FilterComponent data={data} category={categories} />
            </Tab.Container> :
                <SearchPage
                    data={data}
                    searchQuery={searchQuery}
                    isSearch={isSearch}
                    isHidden={isHidden}
                    resultSearch={resultSearch}
                />
            }
            <Footer />
        </div>
    )
}

export default Gallery;