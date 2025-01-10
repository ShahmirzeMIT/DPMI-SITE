
import { Box } from "@mui/material";
import "./LegalNotice.css";

const LegalNotice = () => {
  return (
    <Box className="legal-notice" sx={{
        marginTop:{
            xs:'50px',md:'120px'}
    }}>
      <h1>Legal Notice (Impressum)</h1>
      <div className="section">
        <h2>Digital Product Management Institute (DPMI)</h2>
        <p>
          <strong>Owner:</strong> ACF System GmbH <br />
          Dorfstraße 4, <br />
          07768 Altenberga, Germany <br />
          Germany
        </p>
      </div>
      <div className="section">
        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> +49 176 36820503 <br />
          <strong>Email:</strong> info@dpminstitute.org <br />
          <strong>Website:</strong> www.dpminstitute.org
        </p>
      </div>
      {/* <div className="section">
        <h3>VAT Identification Number</h3>
        <p>
          VAT ID according to §27 a of the German Value Added Tax Act: [VAT ID,
          if applicable]
        </p>
      </div> */}
      <div className="section">
        <h3>Responsible for the Content under § 55 Para. 2 RStV</h3>
        <p>
          Anar Rustamov <br />
          Fuchslöcherstraße 7, <br />
          07749 Jena, Germany
        </p>
      </div>
      <div className="section disclaimer">
        <h3>Disclaimer</h3>
        <ul>
          <li>
            <strong>Liability for Content:</strong> The content of our website
            has been created with the utmost care. However, we cannot guarantee
            the accuracy, completeness, or timeliness of the content.
          </li>
          <li>
            <strong>Liability for Links:</strong> Our website contains links to
            external third-party websites, the content of which we have no
            influence over. Therefore, we cannot accept any responsibility for
            this external content.
          </li>
          <li>
            <strong>Copyright:</strong> The content and works created by the
            website operators are subject to German copyright law. Contributions
            by third parties are marked as such. Reproduction, processing,
            distribution, or any kind of use beyond the limits of copyright law
            requires the written consent of the respective author or creator.
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default LegalNotice;
