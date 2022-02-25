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

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
