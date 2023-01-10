import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    // target="_blank" is used here to open link in new tab

    <div id="footer">
      <div>
        <a title="Github" href="https://github.com/rpet064" target="_blank"><FontAwesomeIcon className="footer-icon" icon={["fab", "github"]} title="Github"/></a>
        <a title="Linkedin" href="https://www.linkedin.com/in/robert-pether-ba9968113" target="_blank"><FontAwesomeIcon className="footer-icon" icon={["fab", "linkedin"]} title="Linkedin"/></a>
        <a title="Email" href="mailto:rpether@hotmail.co.nz"><FontAwesomeIcon className="footer-icon" icon={["fas", "envelope"]} title="Email"/></a>
      </div>
      <p>Copyright Robert Pether {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;