export default function Certifications({ currentPage, handlePageChange }) {
  return (
<div>
<section className="certificationSection">
      <h1 className="CertificatiionTitle">Resume</h1>
      <ul className="CertificatiionList">
      <li className="nav-item nav-items-border">
              <button variant="primary" size="lg" active
              href="#contact"
              onClick={() => handlePageChange(
                window.open("https://docs.google.com/document/d/e/2PACX-1vTrusYCQekVdUKXkYAR9bZrYgpU7sWORjorwXTESVVmqLzDziCX9bwzMp5n-atdfA/pub")
              )}

              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Download Resume
              </button>
            </li>

      </ul>
</section>

    <section className="certificationSection">
      <h1 className="CertificatiionTitle">Certifications</h1>
      <ul className="CertificatiionList">
        <li>
          Full Stack Web Development Certificate from the UCONN.
        </li>
        <li>
          Code of Ethic.
        </li>
        <li>
          placeholder
        </li>
        <li>
          placeholder
        </li>
        <li>
          placeholder
        </li>
        <li>
          placeholder
        </li>
        <li>
          placeholder
        </li>
        <li>
          placeholder
        </li>
      </ul>
    </section>
    </div>

  );
}
