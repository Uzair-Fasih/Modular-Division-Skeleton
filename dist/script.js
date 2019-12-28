let components = [ { el: 'app-component',
css: '\n  body {\n    background-color: indianred;\n  }\n',
scoped: false,
html:
 '\n  <div class="grid">\n    <div class="grid-content">\n      <disclaimer-component></disclaimer-component>\n      <logo-component></logo-component>\n      <panel-component class="panel-component"></panel-component>\n    </div>\n  </div>\n',
js: '' },
{ el: 'disclaimer-component',
css:
 '\n.disclaimer {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  height: max-content;\n  width: 20rem;\n  padding: 1rem;\n  background-color: #2d78f7;\n  color: #FFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  opacity: .25;\n  transition: .3s ease-in-out;\n}\n.disclaimer:hover {\n  opacity: 1;\n}\n\na {\n  color: #FFF;\n  text-decoration: none;\n  border-bottom: 1.2px solid #FFF;\n}\n\np {\n  margin: auto;\n  display: block;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  height: max-content;\n  width: max-content;\n}\n',
scoped: true,
html:
 '\n  <div class="disclaimer">\n    <p>\n      This page was built using<br>\n      <a href="https://github.com/Uzair-Fasih/Modular-Division-Skeleton">\n        Modular Development Skeleton\n      </a>\n      <br>\n      <br>\n      Design by <br>\n      <a href="https://www.frontendmentor.io/solutions/huddle-landing-page-with-single-introductory-section-html-css-K1muvbiy">\n        Front End Mentor.\n      </a>\n    </p>\n  </div>\n',
js: '' },
{ el: 'panel-component',
css:
 '\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;  \n}\n\nhtml {\n  font-size: 10px;\n}\n\n.panel {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: max-content;\n  max-width: 100%;\n  margin: auto;\n}\n\nimg {\n  width: 50%;\n}\n\n.hero {\n  width: 50%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 0 4rem;\n}\n\n\nh2 {\n  color: #FFF;\n  font-size: 3.5rem;\n  font-family: sans-serif;\n  margin: 2.5rem 0;\n}\n\np {\n  color: #FFF;\n  font-size: 1.25rem;\n  font-family: sans-serif;\n}\n\nbutton {\n  padding: .75rem 4rem;\n  width: max-content;\n  margin: 2rem 0;\n  border-radius: 50px;\n  border: none;\n  background-color: white;\n  font-size: 1rem;\n  color: #674baf;\n  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .25);\n  cursor: pointer;\n  transition: .2s ease-in-out;\n}\n\nbutton:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 1.75rem 1.25rem rgba(0, 0, 0, .25);\n}\n',
scoped: true,
html:
 '\n  <div class="panel">\n    <img src="./static/images/illust.svg">\n    <div class="hero">\n      <h2>\n        Build The Community Your Fans Will Love\n      </h2>\n\n      <p>\n        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.\n      </p>\n\n      <button>Register</button>\n    </div>\n  </div>\n',
js: '' } ]