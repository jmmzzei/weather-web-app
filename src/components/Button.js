import React from 'react'

export default ({txt, functio}) => {
    return(
        <button style={styleBtn} onClick={functio}>{txt}</button>
    )
}

const styleBtn = {
    margin: 20,
    padding:20,
    background: '#000',
    color: '#fff'

}