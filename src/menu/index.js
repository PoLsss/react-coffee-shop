import React from 'react'
import { useNavigate } from 'react-router-dom'



const SubMenu = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("black-coffee")
    }
    return (
        <section id="content">
            <header>
                Somewhere Coffee Shop Menu
            </header>
            <div className="two_colums">
                <div className="items">
                    <figure>
                        <a href="#" onClick={handleClick}>
                            <img src="../images/black-coffee.jpg" alt="bcf" />

                        </a>
                        <figcaption>
                            <span>
                                Black Coffee
                            </span>
                            <br />
                            $2.0(S) - $2.5(M) - $3.0(L)
                        </figcaption>
                    </figure>
                </div>
                <div className="items">
                    <figure>
                        <a href="#">
                            <img src="../images/cafe-breve.jpg" alt="" />
                        </a>
                        <figcaption>
                            <span>
                                Cafe Breve
                            </span>
                            <br />
                            $2.5(S) - $3.0(M) - $3.5(L)
                        </figcaption>
                    </figure>
                </div>
                <div className="items">
                    <figure>
                        <a href="#">
                            <img src="../images/black-coffee.jpg" alt="" />
                        </a>
                        <figcaption>
                            <span>
                                Espresso Coffee
                            </span>
                            <br />
                            $1.5(S) - $2.0(M) - $2.5(L)
                        </figcaption>
                    </figure>
                </div>
                <div className="items colum-break">
                    <figure>
                        <a href="#">
                            <img src="../images/hot-chocolate.jpg" alt="" />
                        </a>
                        <figcaption>
                            <span>
                                Hot Chocolate
                            </span>
                            <br />
                            $2.5(S) - $3.0(M) - $3.5(L)
                        </figcaption>
                    </figure>
                </div>
                <div className="items">
                    <figure>
                        <a href="#">
                            <img src="../images/milk-coffee.jpg" alt="" />
                        </a>
                        <figcaption>
                            <span>
                                Milk Coffee
                            </span>
                            <br />
                            $1.5(S) - $2.0(M) - $2.5(L)
                        </figcaption>
                    </figure>
                </div>
                <div className="items">
                    <figure>
                        <a href="#">
                            <img src="../images/vanilla-latte.jpg" alt="" />
                        </a>
                        <figcaption>
                            <span>
                                Vanilla-latte
                            </span>
                            <br />
                            $2.0(S) - $2.5(M) - $3.0(L)
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default SubMenu