export const getURL = () => {
  let url = process.env.CLOUDFLARE_PAGES_URL || 'http://localhost:8788'; // Use the Cloudflare Pages URL or local development URL

  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;

  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

  // Append the auth callback path
  url = `${url}auth/v1/callback/`;

  return url;
};