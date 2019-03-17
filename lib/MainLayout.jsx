import React from 'react'

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>Things to do today</h2>
            <nav> 
                <a href = "/">Things</a>
                <a href = "/about">Stats</a>
            </nav>
        </header>
        <br></br>
        <main>
        {content}
        </main>
    </div>
)