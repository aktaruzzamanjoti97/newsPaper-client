import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Articles.css";

const Articles = ({ article }) => {
    let history = useHistory();
    function handleClick(id) {
        console.log(id);
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="col-md-4 col-sm-6 col-12 py-3 text-center">
            
                <div className="rounded box-style" style={{}}>
                    <img
                        style={{ height: "180px", width: "100%" }}
                        src={article.imageURL}
                        alt=""
                    />
                    <div style={{ margin: "15px", padding: "15px" }} className="w-60">
                        <h4>{article.name}</h4>
                        
                        <Button onClick={() => handleClick(article._id)} variant="success">Read More</Button>
                    </div>
                </div>
            
        </div>
    );
};

export default Articles;