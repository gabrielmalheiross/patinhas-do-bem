import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
    return (
        <>
            <Header />
            <main className="banner">
                {props.children}
            </main>
            <Footer />
        </>
    )
}