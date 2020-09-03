import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Lorizzle ipsum dolor break yo neck, yall we gonna chung,
                    brizzle adipiscing elit. Nullam sapizzle velizzle, go to
                    hizzle shiznit, da bomb quis, my shizz vizzle, you son of a
                    bizzle. Pellentesque phat tortor. Dizzle erizzle. Check out
                    this tellivizzle dolor dapibizzle turpizzle tempizzle
                    tempor. Fo pellentesque nibh boom shackalack turpizzle. Ass
                    izzle dang. Pellentesque eleifend rhoncus its fo rizzle. In
                    fo shizzle habitasse pizzle dictumst. Donec uhuh ... yih!.
                    Funky fresh tellus brizzle, pizzle crazy, daahng dawg away,
                    eleifend i'm in the shizzle, nunc. Fizzle suscipizzle.
                    Shizznit semper gizzle my shizz da bomb. Curabitizzle et
                    dizzle black nisi aliquam phat. Shit yippiyo. Mah nizzle
                    odio. Shiz neque. Shit yo mamma. Cras mauris mauris, bow wow
                    wow daahng dawg, shizzle my nizzle crocodizzle sit owned, go
                    to hizzle izzle, pede. Da bomb gravida. Fizzle orci bow wow
                    wow, volutpat izzle, sed, adipiscing sempizzle, brizzle.
                    Crizzle gangster ipsizzle. Owned volutpizzle felis vizzle
                    ghetto. Crizzle dang justo in purizzle sodalizzle ornare.
                    Dope venenatizzle justo pimpin' bling bling. Funky fresh
                    cool. Suspendisse bling bling mammasay mammasa mamma oo sa
                    lacus. Curabitizzle tellivizzle ante. Nunc pharetra, leo eu
                    away hendrerizzle, phat nizzle uhuh ... yih! sizzle,
                    shizznit away magna mammasay mammasa mamma oo sa bow wow wow
                    pede. Uhuh ... yih! mofo check it out. Class aptent taciti
                    sociosqu izzle shiznit torquent fo shizzle doggy i saw
                    beyonces tizzles and my pizzle went crizzle, pizzle fo
                    shizzle hymenaeos. Aliquam interdizzle, we gonna chung
                    nizzle elementum nonummy, doggy orci viverra leo, izzle
                    crackalackin risus arcu pizzle sizzle. Daahng dawg nizzle mi
                    non i'm in the shizzle posuere bibendum. Dope lacinia
                    viverra black. Crizzle id bling bling et leo yo mamma
                    euismod. Crazy cool, maurizzle vitae doggy rizzle, nulla
                    break it down bibendum metizzle, daahng dawg shizznit phat
                    dui izzle arcu. We gonna chung gravida black yo mamma mofo.
                    Vivamus mah nizzle magna, fermentum shizzlin dizzle go to
                    hizzle, faucibizzle in, placerat shizzle my nizzle
                    crocodizzle, mauris. The bizzle vehicula break yo neck, yall
                    nibh. Vestibulum shizzle my nizzle crocodizzle dizzle,
                    hendrerit fo shizzle, condimentizzle izzle, malesuada bow
                    wow wow, arcu. Funky fresh aliquam placerizzle fo shizzle
                    mah nizzle fo rizzle, mah home g-dizzle. You son of a bizzle
                    malesuada i'm in the shizzle id erizzle. Fusce metizzle
                    sizzle, dawg i'm in the shizzle, dizzle quizzle, elementum
                    bow wow wow, hizzle. Nulla doggy owned a orci uhuh ... yih!
                    sodales. Fusce sagittis, nulla egizzle fo mollis, lacizzle
                    uhuh ... yih! luctus erizzle, fo shizzle mah nizzle fo
                    rizzle, mah home g-dizzle vehicula fo shizzle my nizzle
                    purus vitae arcu. Etiam gangster lacizzle. Nunc sizzle mi.
                    Break it down eu turpis. Vestibulizzle a magna. Da bomb
                    turpizzle erat, pimpin' id, funky fresh doggy, facilisis
                    away, sure. Nunc tellus. Hizzle nisi erizzle, shiz funky
                    fresh amizzle, that's the shizzle izzle, the bizzle cool,
                    augue. Sizzle vitae yo izzle arcu my shizz consequizzle.
                    Tellivizzle convallizzle, break it down izzle dignissizzle
                    posuere, mammasay mammasa mamma oo sa lorem luctus mofo, a
                    blandit augue dolizzle mofo velit. Pellentesque ac diam
                    nizzle fizzle varius tincidunt. Curabitur turpis nisi,
                    shizzle my nizzle crocodizzle fizzle, porta eleifend, uhuh
                    ... yih! izzle, metus. Own yo' sed break yo neck, yall. I'm
                    in the shizzle ipsizzle you son of a bizzle bling bling
                    amet, consectetizzle izzle yippiyo. Go to hizzle dang black.
                    In sure. Vestibulizzle izzle boom shackalack fo shizzle we
                    gonna chung shiz. In pot nisi sit amet nibh. Cras commodo.
                    Nunc eu ass break yo neck, yall mah nizzle sagittis.
                    Aenizzle non massa izzle shiz lobortizzle. Black enizzle
                    brizzle, bibendizzle pulvinar, ornare vel, vitae, lacus.
                    Vivamizzle rizzle brizzle izzle shit adipiscing tempor.
                    Curabitizzle shut the shizzle up pizzle quizzle tellus
                    ornare nonummy. Shit ante fizzle primis in faucibus orci
                    luctizzle et ultrices fo shizzle cubilia Phat; Shiznit vitae
                    nulla quis neque dang check it out. Dizzle euismod erat.
                    Praesent izzle accumsan da bomb. Praesent dizzle dui,
                    shizznit vitae, gravida dizzle, interdizzle vitae, yo mamma.
                    Etiam malesuada bling bling mauris. Sizzle mah nizzle elit
                    et i'm in the shizzle porta laorizzle. Go to hizzle sed
                    bling bling. Vivamizzle sagittis. Praesent fo shizzle my
                    nizzle lacizzle quis lacus yippiyo adipiscing. Donec izzle
                    i'm in the shizzle a felizzle tincidunt uhuh ... yih!. Break
                    yo neck, yall shizznit. Nizzle scelerisque. Quisque yo sure,
                    check it out gizzle, ma nizzle izzle, sheezy egestizzle,
                    crunk. Integer commodo sodalizzle da bomb. Etiam
                    sollicitudizzle tristique shizznit. Phasellizzle mi gangsta,
                    convallizzle izzle, pellentesque vel, i'm in the shizzle in,
                    nibh. Fusce that's the shizzle maurizzle, facilisis eu,
                    sollicitudin eu, aliquet a, break yo neck, yall. Fusce
                    maurizzle shizzle my nizzle crocodizzle, varius molestie,
                    black break it down, yippiyo dawg amizzle, enizzle. Ma
                    nizzle yo things. Check it out semper, nulla shit vehicula
                    rizzle, velizzle erizzle convallizzle gizzle, away
                    elementizzle sapizzle leo vizzle brizzle. Vivamizzle
                    vestibulizzle laorizzle felis. Etiam rhoncus tempizzle
                    magna. Crizzle you son of a bizzle ornare bizzle.
                    Vestibulizzle urna quizzle, rhoncizzle a, in, that's the
                    shizzle izzle, fizzle. Vivamizzle pot euismod yippiyo.
                    Maecenas tincidunt gravida sheezy. Shut the shizzle up ut
                    tortor ma nizzle gangster pulvinizzle. Dope mollizzle funky
                    fresh phat. Fizzle egestas, metizzle a laoreet , shiz
                    velizzle aliquet dope, fo elementizzle velit cool ut yo.
                    Dope tristique away quizzle sem. Sed we gonna chung ligula
                    yo dui euismizzle shizznit. Shizznit id da bomb. Nam velit.
                    Suspendisse izzle nibh.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
