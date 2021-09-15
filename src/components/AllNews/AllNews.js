import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';

const AllNews = () => {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/article`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setArticles(data)
        })
      }, []);
    

    return (
        <div>
            <div className="container pt-5">
                <h4 style={{ fontWeight: "700", width: "350px", backgroundColor: 'White', padding: '10px' }} className="text-center text-primary mx-auto">
                    What We Offer
                </h4>
                <h1 style={{ fontWeight: "700" }} className="text-center text-dark">
                    We Help You For Made Your
                </h1>
                <h1 style={{ fontWeight: "700" }} className="text-center">
                    Dream Painting
                </h1>
            </div>
            <div className="container w-75">
                <div className="row">
                    {articles.map((article) => (
                        <Articles article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllNews;