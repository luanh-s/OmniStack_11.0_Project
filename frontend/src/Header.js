import React from 'react'

export default function Header(props) {
    return (
        <header style={{userSelect: 'none'}}>
            <h1>{props.children}</h1>
        </header>
    );
}