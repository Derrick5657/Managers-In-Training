import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export default function SEO({ title, description, path }: SEOProps) {
  const fullTitle = `${title} | Managers in Training (MIT)`;
  const url = `https://mit-consulting.com${path}`; // Replace with actual domain

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
