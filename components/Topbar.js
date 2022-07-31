import siteMetadata from 'assets/data/siteMetadata';

export default function Topbar() {
  return (
    <div className="topbar">book appointment | {siteMetadata.phoneNumber}</div>
  );
}
