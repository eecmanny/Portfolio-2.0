// All exported from other pages jsx
import { useState } from 'react';
import NavTabs from './NavBar/NavTabs';
import FooterTabs from './Footer/Footer';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutMe from './pages/AboutMe/AboutMe';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';





export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Certifications') {
      return <Certifications />;
    }
    else if (currentPage === 'Contact')
    return <Contact />;
  };

  const TopHandlePageChange = (page) => setCurrentPage(page);
  const BottomHandlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={TopHandlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
      <FooterTabs currentPage={currentPage} handlePageChange={BottomHandlePageChange} />
    </div>
  );
}
