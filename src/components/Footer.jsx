import React from 'react';
import './Footer.css';
import { siteContents } from '../data/contents';

function Footer() {
  return (
    <footer>
      <p>{siteContents.footer.notice1}</p>
      <p>{siteContents.footer.notice2}</p>
      <p className="copyright">{siteContents.footer.copyright}</p>
    </footer>
  );
}

export default Footer;