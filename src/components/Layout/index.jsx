import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    return (
        <>
            <Header />
            <main style={{ display: 'flex', flex: '1 1', height: '100vh' }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}