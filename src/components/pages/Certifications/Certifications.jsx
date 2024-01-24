import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Certifications({ currentPage, handlePageChange }) {
  return (
    <div className="webPageCert">

      <img className="cPage-background" src="\images\background\programming-hd-2eo94s73hxhwjcta.jpg" alt="background" />
      <section className="certificationSection">
        <h1 className="CertificatiionTitle certText">Resume</h1>
        <ul className="CertificatiionList">
          <li className="nav-item nav-items-border">
            <Collapse className='cBoxes'>
              <h3 className="pTitles" >
                view Resume
              </h3>
              <Panel header="Resume" key="1">
                <div>
                  <p>View my LinkedIn profile <a href="https://www.linkedin.com/in/emmanuel-cordero-a91519195/">here</a></p>
                  <embed src="assets\Coding Resume.pdf" width="750px" height="600px" type="application/pdf" />
                </div>
              </Panel>
            </Collapse>
            {/* <button variant="primary" size="lg" active
              href="#contact"
              onClick={() => handlePageChange(
                window.open("https://docs.google.com/document/d/e/2PACX-1vTrusYCQekVdUKXkYAR9bZrYgpU7sWORjorwXTESVVmqLzDziCX9bwzMp5n-atdfA/pub")
              )}
            >
              Download Resume
            </button> */}
          </li>

        </ul>
      </section>


      <section className="certificationSection">
        <h1 className="CertificatiionTitle certText">Certifications</h1>
        <ul className="CertificatiionList">



          <Collapse className='fullStack cBoxes'>
            <h3>
              Full Stack Web Development Certificate from the UCONN.
            </h3>
            <Panel header="Certificate" key="4">
              <p><a href="https://www.linkedin.com/in/emmanuel-cordero-a91519195/"></a></p>
              <embed src="/assets/UConn Certificate - Emmanuel Cordero.pdf" width="100%" height="600px" type="application/pdf" />
            </Panel>
            <Panel h2 header="Front-end Proficiencies" key="1">
              <p>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
                <h4>JQuery</h4>
                <h4>responsive design</h4>
                <h4>React</h4>
                <h4>Bootstrap</h4></p>
            </Panel>
            <Panel header="Back-end Proficiencies" key="2">
              <p>
                <h4>APIs</h4>
                <h4>Node</h4>
                <h4>Express</h4>
                <h4>MySQL, Sequelize</h4>
                <h4>MongoDB, Mongoose</h4>
                <h4>REST</h4>
                <h4>GraphQL</h4>
              </p>
            </Panel>
            <Panel header="Other Proficiencies" key="3">
              <p>
                <h4>Git</h4>
                <h4>Heroku</h4>
                <h4>MERN</h4>
                <h4>PWA</h4>
              </p>
            </Panel>
          </Collapse>

          <Collapse className='typescript cBoxes'>
            <h3>
              TypeScript
            </h3>
            <Panel header="Certificate" key="1">
              <div>
                  {/* <p>View my LinkedIn profile <a href="https://www.linkedin.com/in/emmanuel-cordero-a91519195/">here</a>
                  </p> */}
                  <embed src="assets\TypeScript.pdf" width="750px" height="600px" type="application/pdf" />
                </div>
            </Panel>
          </Collapse>

          <Collapse className='cloudServers cBoxes'>
            <h3>
              Cloud Servers - In-Process
            </h3>
            {/*             <Panel header="Certificate" key="1">
              <p>
              </p>
            </Panel> */}
            <Panel header="Amazon Web Service" key="2">
              <p>
                In Process
              </p>
            </Panel>
            <Panel header="Azure" key="3">
              <p>
                In Process
              </p>
            </Panel>
            <Panel header="Google Cloud" key="4">
              <p>
                In Process
              </p>
            </Panel>
          </Collapse>

                    {/* <Collapse className='angular cBoxes'>
            <h3>
              Angular.
            </h3>
            <Panel header="Certificate" key="1">
              <p>
              </p>
            </Panel>
          </Collapse> */}

          <Collapse className='python cBoxes'>
            <h3>
              Python - In-Process
            </h3>
            <Panel header="Certificate In Process" key="1">
              <p>
                In Process
              </p>
            </Panel>

            <Panel h2 header="Front-end Proficiencies" key="2">
              <p>
                In Process
              </p>
            </Panel>
            <Panel header="Back-end Proficiencies" key="3">
              <p>
                In Process
              </p>
            </Panel>

            <Panel header="Other Proficiencies" key="4">
              <p>
                In Process
              </p>
            </Panel>
          </Collapse>

          {/* <Collapse className='codeOfEthic cBoxes'>
            <h3>
              Code of Ethic.
            </h3>
            <Panel header="Certificate" key="1">
              <p>
              </p>
            </Panel>
          </Collapse> */}
        </ul>
      </section>
    </div>

  );
}
