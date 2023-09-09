const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
            <footer className="sticky-footer">
    <a href="https://kimgurinov.com/resume/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Resume</a>
    <a href="https://kimgurinov.com/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Portfolio</a>
    <a href="https://www.linkedin.com/in/kimkimkimg/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>LinkedIn</a>
</footer>


        </html>
    )
}

module.exports = Def
