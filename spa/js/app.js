import { appState } from './state.js';
import { renderHomePage } from './pages/homePage.js';
import { renderLoginPage } from './pages/loginPage.js';
import { renderContactPage } from './pages/contactPage.js';
import { renderListPage } from './pages/listPage.js';

// Routing table that maps hash routes to page rendering functions
const routes = {
    '/': renderHomePage,
    '/login': renderLoginPage,
    '/contact': renderContactPage,
    '/list': renderListPage
};

// Router function to render the correct page based on the current route
function router() {
    const path = location.hash.slice(1) || '/'; // Remove the '#' from the URL
    const renderPage = routes[path] || renderHomePage;
    renderPage();
}

// Set up routing on hashchange and initial page load
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
