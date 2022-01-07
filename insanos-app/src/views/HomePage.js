import React from "react"
import AgileValues from '../images/agile_values.png'

function HomePage(props) {
    console.log(props.user.username)

    const username = props.user.username ? props.user.username : 'Stranger'
    return (
        < div >
            <h1 className="font-bold text-2xl text-center">
                Agile Principles lets begin, {username}!
            </h1>
            <img src={AgileValues} className="p-4" />
        </div >

    )
}

export default HomePage