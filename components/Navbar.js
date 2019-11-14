import Link from 'next/link';


const Navbar = () => (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/"><a className="navbar-brand">Imraan Meyer</a></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/"><a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a></Link>
                    <Link href="/about"><a className="nav-item nav-link">About</a></Link>
                    <Link href="/projects"><a className="nav-item nav-link">Projects</a></Link>
                    <Link href="/contact"><a className="nav-item nav-link">Contact Me</a></Link>
                </div>
            </div>
        </nav>

        <style jsx>{`
        nav {
            height: 10vh;
        }
    
        `}</style>


    </React.Fragment>
)

export default Navbar;