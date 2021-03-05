import React from "react";
import { Link, withRouter } from "react-router-dom";

function Nav() {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        The RockStars
                    </Link>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <Link class="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/edsheeran">
                                    Ed Sheeran
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/coldplay">
                                    ColdPlay
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/maroon5">
                                    Maroon 5
                                </Link>
                            </li>
                            {/* <li>
                                <Link class="nav-link" to="/privacy">
                                    Privacy
                                </Link>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Nav);