const React = require('react')

function Def (html) {
    const currentYear = new Date().getFullYear();
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"> <img src="../images/logo rest rant.png" alt="Rest Rant Logo" width="100" height="100" /></a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places">Places</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {html.children}

                <footer className="sticky-footer">
                <a href="https://kimgurinov.com/resume/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Resume</a>
                <a href="https://kimgurinov.com/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Portfolio</a>
                <a href="https://www.linkedin.com/in/kimkimkimg/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>LinkedIn</a>
                <p style={{ margin: '0 15px', color: '#000' }}>Copyright © <strong>Kim Gurinov</strong> 2020-{currentYear}</p>
            </footer>
            </body>
        </html>
    )
}


module.exports = Def
