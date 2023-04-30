function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "主页")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "关于")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "我的作品")), /*#__PURE__*/



   ), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "night_jack", /*#__PURE__*/

    React.createElement("strong", null, "")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "--我在做"), /*#__PURE__*/
	
						
    React.createElement("span", { className: "line" }, ), /*#__PURE__*/
    React.createElement("span", { className: "line" },"设计 ", /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " 代码")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "我的创意"), /*#__PURE__*/
    ))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "这家伙是谁?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "我的名字叫王煊铖."), /*#__PURE__*/
    React.createElement("p", null, "我现在是一名大学生.喜欢一些新奇的事物和技术."), /*#__PURE__*/



    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better.Of course I also like to read and write, sometimes I can read all day during my break . Oh, and I also like music, all kinds of genres. Someday I hope to learn piano and write my own music!")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "他都做些什么?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "我是一个设计师"), /*#__PURE__*/
    React.createElement("p", null, "我可以熟练的运用Adobe系列的软件做各种各样的创意设计.like:Photoshop ,Illustrator ,Adobe Premiere ,After Effects ,Lightroom 等等。我也并不局限于使用他们，像Affinity Photo，达芬奇等也都是非常好用的软件。"), /*#__PURE__*/




    React.createElement("p", null, "用户界面，海报，场景设计,视频剪辑....应有尽有。创造美的东西对我来说尤为重要。")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "并且我也是一名程序员."), /*#__PURE__*/
    React.createElement("p", null, "我可以为游戏写脚本，为网页设计写代码，甚至是做一些实用的全自动一键式小工具（如抢票脚本，语音识别等）."), /*#__PURE__*/

	React.createElement("p", null, "对于前端，我通常使用 Javascript。我还通过使用 CSS,以及它们的朋友：Bootstrap、Bulma 等使网页变得漂亮。"),					



    React.createElement("p", null, "当然，我还在持续的学习我的代码技术，希望可以自行用代码做出我喜欢的各种设计."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: ' ',
    css: ' ',
    js: ' ',
    react: ' ',
    vue: '',
    d3: '',
    node: '' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "我的作品"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "这里是我近期做的 ", /*#__PURE__*/
    React.createElement("u", null, "大部分"), " 作品,还有更多东西在我的制作中...",
    ' ', /*#__PURE__*/ ".")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "各种作品展示.",
      img: 'art/设计缩率图.jpg',
      tech: "",
      link: "art/index.html",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, ""), /*#__PURE__*/


    React.createElement("p", null, "这是我做的作品集网站,里面有我的各种的设计。里面有平面和立体设计。在设计方面，我会先了解客户的需求和设计风格要求，然后进行构思和创意设计。在设计过程中，我注重色彩和构图，同时根据目标受众和使用场景，进行合理的排版和信息传达。")), /*#__PURE__*/




    React.createElement(Project, {
      title: "藏书阁.",
      img: 'web/藏书阁海报.jpg',
      tech: "",
      link: "web/书单主页.html",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, ""), /*#__PURE__*/


    React.createElement("p", null, "是我设计并编写的一个web网页,旨在查询并借阅书籍.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "平衡世界.",
      img: '滚动球.jpg',
      tech: "",
      link: "https://jkheiye.github.io/night_jack-s-design.github.io/",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, ""), /*#__PURE__*/
    React.createElement("p", null, "这是一个平衡球的小游戏,我借助github的托管给部署到网页上了,这个项目让我熟悉了很多关于游戏网页部署的问题。")), /*#__PURE__*/




    React.createElement(Project, {
      title: "奇幻村庄.",
      img: '场景1.jpg',
      tech: "",
      link: "ue/奇幻村庄(地编).mp4",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, ""), /*#__PURE__*/
    React.createElement("p", null, "这是我学期末的一个地编作业，当时用了最新的ue5，感受到了新引擎的强大与易用.")), /*#__PURE__*/

						
						
						
    React.createElement(Project, {
      title: "ToDamascus.",
      img: '去大马士革.jpg',
      tech: "",
      link: "https://pan.baidu.com/s/1Tlb6FVzM6-o26cBwCyXErQ?pwd=xhz6",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, ""), /*#__PURE__*/
    React.createElement("p", null, "去大马士革，是我的第一个gal游戏，当时正值疫情，我想通过这个游戏带大家领略异国风情.")))))); /*#__PURE__*/





    









};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "gg" }, /*#__PURE__*/
    ));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "gg" }, /*#__PURE__*/
    ));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));