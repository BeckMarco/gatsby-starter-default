import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Jacoba van Heemskerck an Herwarth Walden</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
            <main class="row content hyphenate" id="main">
                <div class="department">
                    <h3><a href="../../../quellen/briefe.html">Abteilung I, Briefe</a></h3>
                    <p><strong>Dokumenttyp: </strong>Postkarte</p>
                    <p><strong>Chronologie: </strong><a href="../../../quellen/briefe/chronologie.html">
                    Briefe von 1914 bis 1922 <span title="Aktuell gewählte Ansicht"> ←</span></a></p>
                    <p><strong>Absender/in: </strong><a href="../../../quellen/briefe/fma.html">Franz Marc an Herwarth Walden</a></p>
                    <p class="msidentifier"><strong>Quelle: </strong>Staatsbibliothek zu Berlin, Handschriftenabteilung, Sturm-Archiv I, Marc, Franz, 
                <a class="external" href="http://resolver.staatsbibliothek-berlin.de/SBB0000DAA300000000">Bl.177</a></p>
                </div>
                <section class="twelve columns toolbar">
                    <ul class="pagination">
                        <li class="first"><a class="black button" href="Q.01.19140115.FMA.01.html#main" title="An den Anfang">|←</a></li>
                        <li class="previous"><a class="black button" href="Q.01.19140115.FMA.01.html#main" title="Vorheriger Brief">←</a></li>
                        <li class="next"><a class="black button" href="Q.01.19140119.FMA.01.html#main" title="Nächster Brief">→</a></li>
                        <li class="last"><a class="black button" href="Q.01.19220402.JVH.01.html#main" title="An das Ende">→|</a></li>
                    </ul>
                    <ul class="actions">
                        <li class="xml"><a target="_blank" class="black button" href="https://sturm-edition.de/api/files/Q.01.19140115.FMA.01.xml" title="XML Quelle ansehen">➚ XML</a></li>
                        <li class="metadata"><a target="_blank" class="black button" href="http://kalliope-verbund.info/DE-611-HS-1916784" title="Findbucheintrag im Kalliope-Verbundkatalog">➚ Metadaten</a></li>
                    </ul>
                </section>
                <section class="eight columns maincontent">
                    <div class="postcard">
                        <h4 class="dateline"> [<time datetime="YYYY-MM-TT">1914-01-15</time> / <span class="locality"><a href="../../../register/orte/O.0000048.html" class="locality">Sindelsdorf</a></span>]
                    </h4>
                        <div class="address">
                <span id="S.177v.01" class="pb"><br/><a class="external" href="http://resolver.staatsbibliothek-berlin.de/SBB0000DAA300000001">[177v]</a><br/></span>
                
                <p class="address recipient">
                    <span class="addrLine">Herrn</span>
                        <span class="addrLine">Herw. Walden.</span>
                        <span class="addrLine">Verlag „<span class="underline">S</span>turm“</span>
                        <span class="addrLine">Berlin W. 9.</span>
                        <span class="addrLine">Potsdamerstr. 134/a</span>
                </p>
                
            </div>
                        <div class="content">
                <span id="S.177r" class="pb"><br/><a class="external" href="http://resolver.staatsbibliothek-berlin.de/SBB0000DAA300000002">[177r]</a><br/></span>
                <div class="opener">
                    <h5 class="salute">Lieber <a class="person" href="../../../register/personen/P.0000001.html">Walden</a>,</h5>
                </div>
                <p>ich habe nicht das geringste vom Anwalt erhalten; Sie kennen mich ja, daß ich
                    stets sofort antworte; es muß verloren gegangen sein. Grüßen Sie bitte D<sup><span class="underline">r</span></sup>
                    <a class="person" href="../../../register/personen/P.0000056.html">Feige</a> und sagen Sie ihm
                    das.</p>
                <p>In einer niederrheinischen Zeitung soll von einer bevorstehenden großen
                    Ausstellung in <a class="locality" href="../../../register/orte/O.0000045.html">Barmen</a> von <a class="person" href="../../../register/personen/P.0000009.html">Kandinsky</a> mir u.s.w.
                    berichtet worden sein; ich kann mir nur denken, daß die <a class="person" href="../../../register/personen/P.0000057.html">Reiche</a>-<a class="locality" href="../../../register/orte/O.0000032.html">Dresden</a> Collection dahin
                        kommt;<span id="S.177v.02" class="pb"><br/><a class="external" href="http://resolver.staatsbibliothek-berlin.de/SBB0000DAA300000001">[177v]</a><br/></span> ich
                    bin natürlich einverstanden, nur soll die frei<span class="underline">e
                    Rück</span>fracht <a class="locality" href="../../../register/orte/O.0000045.html">Barmen</a> – <a class="locality" href="../../../register/orte/O.0000002.html">Berlin</a> gesichert
                        sein.<sup class="fn"><a href="#ap-1" id="fn-1">1</a></sup> Aber es ist natürlich nur Vermutung von mir. Von
                        <a class="person" href="../../../register/personen/P.0000057.html">Reiche</a> höre ich gar nichts.</p>
                <div class="closer">
                                <p>
                    <salute>Hrzl.</salute>
                    <span class="signed">Ihr <a class="person" href="../../../register/personen/P.0000003.html">F.
                            Marc</a>
                    </span>
                </p>
                            </div>
            </div>
                        <div class="aparatus">
                            <ol class="footnotes">
                                <li id="ap-1">Im Jahr 1913 fand in der Stadt Barmen eine STURM-Ausstellung mit
                            Werken der Künstlergruppe „Der Blaue Reiter“ statt. In der Literatur gilt
                        diese Ausstellung als nicht ausreichend nachgewiesen; dieser Brief gibt
                        endgültigen Aufschluss über das tatsächliche Stattfinden der Ausstellung.
                        Vgl. Enders, Rainer: Ausstellungen außerhalb der Berliner Galerie. URL: <a class="external internal" href="https://www.arthistoricum.net/themen/portale/sturm/ausstellungen/">https://www.arthistoricum.net/themen/portale/sturm/ausstellungen/</a>
                        (Aufruf 06.04.2017).<a href="#fn-1"> » </a></li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section class="four columns sidebar">
                    <h3 class="facsimile-header">Faksimiles dieser Quelle</h3>
                    <div class="facsimile mfp-lightbox">
                        <figure>
                            <figcaption>177v</figcaption><a href="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000001.jpg" title="Blatt 177v"><img src="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000001.jpg" alt="Blatt 177v"/></a></figure>
                        <figure>
                            <figcaption>177r</figcaption><a href="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000002.jpg" title="Blatt 177r"><img src="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000002.jpg" alt="Blatt 177r"/></a></figure>
                        <figure>
                            <figcaption>Farbkeil</figcaption><a href="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000003.jpg" title="Blatt Farbkeil"><img src="http://content.staatsbibliothek-berlin.de/dms/PPN746598521/800/0/00000003.jpg" alt="Blatt Farbkeil"/></a></figure>
                    </div>
                    <div class="dfg-viewer"><a target="_blank" href="http://dfg-viewer.de/show/?set%5Bmets%5D=http://content.staatsbibliothek-berlin.de/dc/PPN746598521.mets.xml&amp;set%5Bimage%5D=1" class="button black external">
                    DFG Viewer
                </a></div>
                    <p class="rights">
                Bestandshaltende Institution: <a href="http://staatsbibliothek-berlin.de/">Staatsbibliothek zu Berlin - Preußischer Kulturbesitz</a>. Lizenz: Public Domain.
            </p>
                </section>
                <section class="twelve columns">
                    <div class="info">
                        <p><strong>Zitierhinweis:</strong><br/>Trautmann,
            Marjam:
                „Franz Marc an Herwarth Walden, 15. Januar 1914“, in: 
                
                    DER STURM. Digitale Quellenedition zur Geschichte der internationalen Avantgarde, erarbeitet und herausgegeben von Marjam Trautmann und Torsten Schrade. Mainz, Akademie der Wissenschaften und der Literatur, 
                
                Version 2 vom 25. Jul. 2019.
            </p>
                        <p><strong>URI:</strong><br/><a href="https://sturm-edition.de/id/Q.01.19140115.FMA.01">https://sturm-edition.de/id/Q.01.19140115.FMA.01</a></p>
                        <p><strong>Versionen:</strong><br/><a href="https://sturm-edition.de/id/Q.01.19140115.FMA.01/2">
                        https://sturm-edition.de/id/Q.01.19140115.FMA.01/2</a> (25. Jul. 2019)
                <br/><a href="https://sturm-edition.de/id/Q.01.19140115.FMA.01/1">
                        https://sturm-edition.de/id/Q.01.19140115.FMA.01/1</a> (16. Jul. 2018)
                </p>
                        <p><strong>Nutzungshinweis:</strong><br/>
                Edition und Forschungsdaten stehen unter einer <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC-BY 4.0)</a> Lizenz. 
                Freie Verwendung unter Angabe von Zitierhinweis, Permalink und Kenntlichmachung von Änderungen.
            </p>
                    </div>
                </section>
            </main>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
