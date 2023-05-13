import React from 'react'
import useCountDown from '../hooks/countDown'

function Profile() {
    const remainingTime = useCountDown()
    return (
        <h1>
            Profile Page {remainingTime}
        </h1>
    )
}

export default Profile
