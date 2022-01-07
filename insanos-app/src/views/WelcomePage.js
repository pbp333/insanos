import React from "react"
import { Link } from "react-router-dom"

function WelcomePage(props) {
    console.log(props.user.username)
    props.user.username = 'whattt'

    function handleChange(username) {
        props.user.username = username
    }

    return (
        <div>
            <h1 className="font-bold text-2xl text-center">
                Welcome to the Insanos App
            </h1>
            <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900 p-3 pt-28">
                <p class="snap-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut pulvinar dolor, quis tristique nibh. Pellentesque cursus tincidunt feugiat. Nulla facilisi. Aliquam non ultrices mi. Morbi et interdum felis. Ut bibendum scelerisque nulla, in varius urna aliquet a. In nec libero vel lorem venenatis sagittis vitae id dolor.
                </p>
            </div>

            <input
                type="text"
                className={`w-2/5 px-2 text-primary outline-none text-base font-light rounded-md align-middle text-black`}
                placeholder="please type your name"
                onChange={() => handleChange}
            />
            <Link
                to="/"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
                onClick={props.closeMenu}>
                Home
            </Link>
        </div>
    )
}

export default WelcomePage