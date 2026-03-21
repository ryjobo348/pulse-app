import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PrivacyPage, TermsPage, RefundPage, CookiePage } from './Policies'

function Root() {
  const [page, setPage] = React.useState(() => {
    const path = window.location.pathname;
    if (path === '/privacy') return 'privacy';
    if (path === '/terms')   return 'terms';
    if (path === '/refunds') return 'refunds';
    if (path === '/cookies') return 'cookies';
    return 'app';
  });

  // Listen for footer link clicks without full page reload
  React.useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const url = new URL(link.href);
      const routes = ['/privacy', '/terms', '/refunds', '/cookies'];
      if (routes.includes(url.pathname)) {
        e.preventDefault();
        window.history.pushState({}, '', url.pathname);
        setPage(url.pathname.slice(1));
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const goBack = () => {
    window.history.pushState({}, '', '/');
    setPage('app');
    window.scrollTo(0, 0);
  };

  if (page === 'privacy') return <PrivacyPage onBack={goBack}/>;
  if (page === 'terms')   return <TermsPage   onBack={goBack}/>;
  if (page === 'refunds') return <RefundPage  onBack={goBack}/>;
  if (page === 'cookies') return <CookiePage  onBack={goBack}/>;
  return <App/>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
)
