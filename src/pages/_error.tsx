import type { NextPageContext } from 'next';

function ErrorPage({ statusCode }: { statusCode: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0f', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>{statusCode}</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Something went wrong.</p>
      <a href="/" style={{ background: '#6366f1', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
        Back to Home
      </a>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
