import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsItem = ({ news }) => {
    return (
        <Card className="news-item">
            <Card.Img variant="top" src={news.urlToImage} className="card-img" />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </Card.Body>
        </Card>
    );
};

export default NewsItem;


