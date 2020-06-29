(this.webpackJsonpjaswanth_portfolio=this.webpackJsonpjaswanth_portfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),l=n.n(o),s=(n(12),n(3)),c=n(4),r=n(6),u=n(5),m=(n(13),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/55351107?s=400&u=cbd45f43066025f73a0f9c8d9889c3b4e6637ca9&v=4",className:"avatar",alt:"avatar"}),i.a.createElement("h2",{className:"main-name"},"Jaswanth Sai"),i.a.createElement("p",{className:"subtitle"},'"A Cadet Who Codes"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),d=(n(14),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t))}),p=(n(15),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),h=(n(16),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Industry Knowledge"),i.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(p,{skill:e})}))))}),g=(n(17),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description:")," ",t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Link:")," ",i.a.createElement("a",{href:t.link},t.link)," "))}),f=(n(18),function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(g,{project:e})}))))}),E=(n(19),n(20),n(21),function(e){var t=e.selectedHeading,n=e.selectedQuote,a=e.selectedSection,o=e.about,l=e.skills,s=e.projects,c=e.Experiences;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},n)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(d,{bio:o.bio}),skills:i.a.createElement(h,{skills:l}),projects:i.a.createElement(f,{projects:s}),Experiences:i.a.createElement(c,{Experiences:c})}[a]))}),k=(n(22),function(e){var t=e.handleSectionClick,n=e.selectedHeading,a=e.selectedQuote,o=e.selectedSection,l=e.about,s=e.skills,c=e.projects,r=e.Experiences;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(m,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(E,{selectedSection:o,selectedHeading:n,selectedQuote:a,about:l,skills:s,projects:c,Experiences:r})))}),b={heading:"About Me",quote:"A tech enthusiast and developer by passion\n",bio:"\nI am doing by 4th year of B-tech Computer Science at Vellore Institute of technology, a full-stack developer, tech blogger, interested in programming development, and recent technologies.\n\nA talented individual with strong communication skills, team spirit, and good academic history in computer science desires the position in a fast-growing organization to utilize expertise in software development. Offering solid knowledge of computer science concepts, including data structures and object-oriented designs."},v={heading:"Skills",quote:"Build your skills, not your resume",techSkills:["JavaScript","C++","C","Java","Python","HTML","CSS"],industryKnowledge:["Blogging","Web Content","Frontend","Software","Backend","Design","Web","Android"],interpersonalSkills:["Communication","Time Management","Leadership","Management"]},y={heading:"Projects",quote:"Ahh, Learning alone is boring, implementation is the real fun",projectList:[{name:"AgroCulture",description:"The Agricultural Marketing and Interaction Portal (AMIP) site is planned to give clients access to the various number of fresh agricultural products.",link:"https://github.com/Jaswanth72/AgroCulture.git"},{name:"Influential Leader Detection",description:"Determines the influence and popularity of a political leader by calculating the user's spread of communication with the help of retweets.",link:"https://github.com/Jaswanth72/influentialLeaderDetection.git"},{name:"A Portal For Parking And Renting Cars",description:"The portal which enables for both renting and parking the cars simultaneously and determines the available vacant parking slots in near by area.",link:"https://github.com/Jaswanth72/carparkportal.git"},{name:"Emotion Analyser",description:"A project on the application of Natural language processing which analyses the emotion from the user text and speech.",link:"https://github.com/Jaswanth72/EmotionAnalyser.git"},{name:"college counseling System",description:"This system allows one to apply for the college and allows the user to view his eligibility status which is calculated based on agregate and fee status based on room description",link:"https://github.com/Jaswanth72/college-counseling.git"}]},w={heading:"Experiences",quote:"Theory without practice is just as incomplete as practice without theory.",ExperienceList:[{companyName:"Company 1",role:"Software Developer",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{companyName:"Company 2",role:"Software Developer",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{companyName:"Company 3",role:"Software Developer",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{companyName:"Company 4",role:"Software Developer",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},S=(n(23),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null,Experiences:null},e}return Object(c.a)(n,[{key:"componentWillMount",value:function(){this.setState({about:b,skills:v,projects:y,Experiences:w,selectedHeading:b.heading,selectedQuote:b.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects,Experiences:this.state.Experiences}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f49d6eda.chunk.js.map