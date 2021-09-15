import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
    faAddressBook,
    faCog, faHome,
    faSignOutAlt, faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Sidebar.css";

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("https://desolate-badlands-10830.herokuapp.com/adminList")
            .then((res) => res.json())
            .then((data) => {
                const checkAdmin = data.find(
                    (checkingPerson) => checkingPerson.email === loggedInUser.email
                );
                setIsAdmin(checkAdmin);
            });
    }, []);

    return (
        <div
            className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
            style={{ height: "100vh" }}
        >
            <ul className="list-unstyled">

                <li>
                    <Link to="/home" className="text-brand text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-brand text-decoration-none">
                        <FontAwesomeIcon icon={faAccessibleIcon} />{" "}
                        <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-brand text-decoration-none" to="/addReview">
                        <FontAwesomeIcon icon={faAddressBook} /> <span>Add Review</span>
                    </Link>
                </li>

                {isAdmin && (
                    <div>
                        <li>
                            <Link
                                to="/addArticle"
                                className="text-brand text-decoration-none"
                            >
                                <FontAwesomeIcon icon={faUsers} /> <span>Add Article</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-brand text-decoration-none">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                            </Link>
                        </li>

                    </div>
                )}
                <li>
                    <Link className="text-brand text-decoration-none">
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-brand text-decoration-none">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;