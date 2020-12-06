import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => (
    <>
        <Header />
        <Container>{children}</Container>
        <Footer />
    </>
);

export default Layout;
