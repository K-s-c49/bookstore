import React from 'react'
import Banner from './components/banner.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Freebook from './components/freebook.jsx';



function Home() {
    return (<>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
    </>
    )
}

export default Home
