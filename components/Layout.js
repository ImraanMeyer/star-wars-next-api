import Navbar from "./Navbar";
import Head_Component from "./Head_Component";

const Layout = (props) => (
    <div>
        <Head_Component title="Home" />
        <Navbar />
        <div  style={{ padding: '2em'}}>
            {props.children}
        </div>
    </div>
)

export default Layout;