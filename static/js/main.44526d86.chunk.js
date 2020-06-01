(this.webpackJsonpjaswanth_portfolio=this.webpackJsonpjaswanth_portfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(2),c=n.n(i),s=(n(12),n(3)),o=n(4),r=n(6),u=n(5),m=(n(13),function(e){var t=e.handleSectionClick;return l.a.createElement("div",{className:"sidenav"},l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/55351107?s=400&u=cbd45f43066025f73a0f9c8d9889c3b4e6637ca9&v=4",className:"avatar",alt:"avatar"}),l.a.createElement("h2",{className:"main-name"},"Jaswanth Sai"),l.a.createElement("p",{className:"subtitle"},'"A Cadet Who Codes"'),l.a.createElement("div",{className:"sections-list"},l.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),l.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),l.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),d=(n(14),function(e){var t=e.bio;return l.a.createElement("div",{className:"about-container"},l.a.createElement("p",null,t))}),h=(n(15),function(e){var t=e.skill;return l.a.createElement("div",{className:"skill-card"},t)}),p=(n(16),function(e){var t=e.skills;return l.a.createElement("div",{className:"skills-container"},l.a.createElement("h3",null,"Industry Knowledge"),l.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return l.a.createElement(h,{skill:e})}))),l.a.createElement("h3",null,"Tech Skills"),l.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return l.a.createElement(h,{skill:e})}))),l.a.createElement("h3",null,"Interpersonal Skills"),l.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return l.a.createElement(h,{skill:e})}))))}),g=(n(17),function(e){var t=e.project;return l.a.createElement("div",{className:"project-card"},l.a.createElement("p",null,l.a.createElement("b",null,"Name:")," ",t.name),l.a.createElement("p",null,l.a.createElement("b",null,"Description:")," ",t.description),l.a.createElement("p",null,l.a.createElement("b",null,"Link:")," ",l.a.createElement("a",{href:t.link},t.link)," "))}),k=(n(18),function(e){var t=e.projects;return l.a.createElement("div",{className:"projects-container"},l.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return l.a.createElement(g,{project:e})}))))}),f=(n(19),function(e){var t=e.selectedHeading,n=e.selectedQuote,a=e.selectedSection,i=e.about,c=e.skills,s=e.projects;return l.a.createElement("div",{className:"section-container"},l.a.createElement("div",{className:"section-heading-container"},l.a.createElement("h1",{className:"main-heading"},t),l.a.createElement("p",{className:"main-quote"},n)),l.a.createElement("div",{className:"section-component"},{about:l.a.createElement(d,{bio:i.bio}),skills:l.a.createElement(p,{skills:c}),projects:l.a.createElement(k,{projects:s})}[a]))}),E=(n(20),function(e){var t=e.handleSectionClick,n=e.selectedHeading,a=e.selectedQuote,i=e.selectedSection,c=e.about,s=e.skills,o=e.projects;return l.a.createElement("div",{className:"portfolio-container"},l.a.createElement("div",{className:"sidenav-container"},l.a.createElement(m,{handleSectionClick:t})),l.a.createElement("div",{className:"main-section-container"},l.a.createElement(f,{selectedSection:i,selectedHeading:n,selectedQuote:a,about:c,skills:s,projects:o})))}),v={heading:"About Me",quote:"A a tech enthusiast and developer by passion\n",bio:"\nI am doing by 3rd year of B-tech Computer Science at Vellore Institute of technology, a full-stack developer, tech blogger, interested in programming development, and recent technologies.\n\n\nI am passionate about my work and wanted to do an internship for an esteemed organization to earn valuable knowledge and work experience."},b={heading:"Skills",quote:"Build your skills, not your resume",techSkills:["JavaScript","C++","C","Java","Python","HTML","CSS"],industryKnowledge:["Blogging","Web Content","Frontend","Software","Backend","Design","Web","Android"],interpersonalSkills:["Communication","Time Management","Leadership","Management"]},S={heading:"Projects",quote:"Ahh, Learning alone is boring, implementation is the real fun",projectList:[{name:"AgroCulture",description:"The Agricultural Marketing and Interaction Portal (AMIP) site is planned to give clients access to the various number of fresh agricultural products.",link:"https://github.com/Jaswanth72/AgroCulture.git"},{name:"Influential Leader Detection",description:"Determines the influence and popularity of a political leader by calculating the user's spread of communication with the help of retweets.",link:"https://github.com/Jaswanth72/influentialLeaderDetection.git"},{name:"A Portal For Parking And Renting Cars",description:"The portal which enables for both renting and parking the cars simultaneously and determines the available vacant parking slots in near by area.",link:"https://github.com/Jaswanth72/carparkportal.git"},{name:"Emotion Analyser",description:"A project on the application of Natural language processing which analyses the emotion from the user text and speech.",link:"https://github.com/Jaswanth72/EmotionAnalyser.git"}]},N=(n(21),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.setState({about:v,skills:b,projects:S,selectedHeading:v.heading,selectedQuote:v.quote,selectedSection:"about"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.44526d86.chunk.js.map