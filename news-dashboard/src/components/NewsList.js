

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsItem from './NewsItem';
import { fetchNews } from '../redux/actions';
import Pagination from 'react-bootstrap/Pagination';

const NewsList = ({ selectedCountry }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const newsList = useSelector((state) => state.articles);
    const totalNewsCount = useSelector((state) => state.totalResults);

    useEffect(() => {
        dispatch(fetchNews(selectedCountry, currentPage));
    }, [dispatch, currentPage, selectedCountry]);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalNewsCount / 4); 

    if (totalPages <= 1 || currentPage > totalPages) {
        return (
            <div>
                <div className="news-list">
                    {newsList.map((news) => (
                        <NewsItem key={news.url} news={news} />
                    ))}
                </div>
            </div>
        );
    }

    const pageButtons = [];

    for (let page = 1; page <= totalPages; page++) {
        pageButtons.push(
            <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => handlePageClick(page)}
            >
                {page}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <div className="pagination-container">
                    <Pagination>
                        <Pagination.First onClick={() => handlePageClick(1)} />
                        <Pagination.Prev
                            onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                        {pageButtons}
                        <Pagination.Next
                            onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                        <Pagination.Last onClick={() => handlePageClick(totalPages)} />
                    </Pagination>
                </div>
            <div className="news-list">
                {newsList.map((news) => (
                    <NewsItem key={news.url} news={news} />
                ))}
            </div>
        </div>
    );
};

export default NewsList;









