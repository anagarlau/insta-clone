(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,e,s){},40:function(t,e,s){},65:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(34),r=s.n(c),i=(s(40),s(16)),o=s(5),l=s(6),u=s(8),h=s(7),d=s(14),j=s(2),p=s.n(j),b=function(t,e,s){return p.a.post("/api/auth/signup",{username:t,password:e,email:s}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},m=function(t,e){return p.a.post("/api/auth/login",{username:t,password:e}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},g=s(0),O=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={username:"",password:"",email:""},t.handleFormSubmit=function(e){console.log(e),e.preventDefault();var s=t.state,n=s.username,a=s.password,c=s.email;b(n,a,c).then((function(e){e.errorMessage?t.setState({message:e.errorMessage,username:"",password:"",email:""}):(t.props.setUser(e),t.props.history.push("/"))}))},t.handleChange=function(e){var s=e.target,n=s.name,a=s.value;t.setState(Object(d.a)({},n,a))},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsxs)("label",{children:["Username:",Object(g.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:function(e){return t.handleChange(e)}})]}),Object(g.jsxs)("label",{children:["Password:",Object(g.jsx)("input",{name:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}})]}),Object(g.jsxs)("label",{children:["Email:",Object(g.jsx)("input",{name:"email",value:this.state.email,onChange:function(e){return t.handleChange(e)}})]}),Object(g.jsx)("input",{type:"submit",value:"Signup"}),this.state.message&&Object(g.jsx)("h4",{children:this.state.message})]})})}}]),s}(n.Component),f=(s(32),function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={username:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var s=t.state,n=s.username,a=s.password;m(n,a).then((function(e){e.message?t.setState({message:e.message,username:"",password:""}):(t.props.setUser(e),t.props.history.push("/"))}))},t.handleChange=function(e){var s=e.target,n=s.name,a=s.value;t.setState(Object(d.a)({},n,a))},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsxs)("label",{className:"form-label",children:["Username:",Object(g.jsx)("input",{className:"form-control",type:"text",name:"username",value:this.state.username,onChange:function(e){return t.handleChange(e)}})]}),Object(g.jsxs)("label",{className:"form-label",children:["Password:",Object(g.jsx)("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}})]}),Object(g.jsx)("input",{type:"submit",value:"Login"}),this.state.message&&Object(g.jsx)("h4",{children:this.state.message})]})})}}]),s}(n.Component)),v=s(4),x=s(15),y=s(3),k=(s(18),function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).getPosts=n.getPosts.bind(Object(x.a)(n)),n.state={posts:[]},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var t=this;p.a.get("/api/posts/allPosts").then((function(e){t.setState({posts:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var t=this.props;return t.user?0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsx)("div",{className:"wall",children:this.state.posts.slice(0).reverse().map((function(e){return Object(g.jsx)("div",{className:"post",style:{width:"18rem"},children:Object(g.jsxs)("div",{className:"card-body",children:[t.user._id===e.postedBy._id?Object(g.jsx)(y.b,{to:"/userprofile",children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",e.postedBy.username]})}):Object(g.jsx)(y.b,{to:"/otheruser/".concat(e.postedBy._id),children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",e.postedBy.username]})}),Object(g.jsx)(y.b,{to:"/allPosts/".concat(e._id),children:Object(g.jsx)("img",{src:e.imgURL,className:"card-img-top",alt:"..."})}),Object(g.jsx)("p",{className:"card-text",children:e.description}),Object(g.jsx)("div",{children:e.comments.slice(-1).map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:t.postedBy.username}),t.comment]},t._id)}))})]})},e._id)}))}):Object(g.jsxs)("div",{className:"btn-toolbar justify-content-center",children:[Object(g.jsx)(y.b,{className:"btn btn-success  btn-sm",to:"/signup",children:"Signup"}),Object(g.jsx)(y.b,{className:"btn btn-dark  btn-sm",to:"/login",children:"Login"})]})}}]),s}(a.a.Component)),C=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-md navbar-light navBg",children:Object(g.jsx)(y.b,{className:"navbar-brand",to:"/",children:" Instagram  "})})}}]),s}(a.a.Component),N=p.a.create({baseURL:"http://localhost:5005/api",withCredentials:!0}),U=function(t){throw t},P=function(t){return N.post("/posts/upload",t).then((function(t){return t.data})).catch(U)},w=function(t){return N.post("/posts/postIt",t).then((function(t){return t.data})).catch(U)},S=function(t){return N.post("/profiles/uploadpicture",t).then((function(t){return t.data})).catch(U)},L=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).getUserImage=function(t){var e="",s=new FormData;console.log(t.target.files[0]),s.append("imgURL",t.target.files[0]),S(s).then((function(t){e=t.secure_url})).catch((function(t){console.log("Error while adding the thing: ",t)})).finally((function(){p.a.post("/api/profiles/picture",{imgURL:e}).then((function(t){console.log(t),n.setState({imgURL:t.data.imgURL})})).catch((function(t){console.log("Error while adding the thing: ",t)}))}))},n.handleLogout=n.handleLogout.bind(Object(x.a)(n)),n.state={imgURL:n.props.user.imgURL},n}return Object(l.a)(s,[{key:"handleLogout",value:function(){var t=this;p.a.post("/api/auth/logout").then((function(t){return t.data})).catch((function(t){return t.response.data})).then((function(){t.props.setUser(null)}))}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light navBg",style:{backgroundColor:"pink"},children:[Object(g.jsxs)(y.b,{className:"navbar-brand",to:"/",children:[" ","Instagram"," "]}),Object(g.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarCollapse",children:Object(g.jsxs)("div",{className:"navbar-nav",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:"userImgForm",children:[Object(g.jsx)("label",{htmlFor:"file-input",children:Object(g.jsx)("img",{alt:"imageuser",style:{width:"30px"},src:this.state.imgURL})}),Object(g.jsx)("input",{id:"file-input",type:"file",onChange:this.getUserImage})]})}),Object(g.jsx)(y.b,{className:"nav-item nav-link active",to:"/",onClick:function(){return t.handleLogout(t.props)},children:"Logout"}),Object(g.jsxs)(y.b,{className:"nav-item nav-link",to:"/userprofile",children:[this.props.user.username,"'s Profile"]}),Object(g.jsxs)(y.b,{className:"nav-item nav-link",to:"/creatpost",children:[" ",Object(g.jsx)("img",{className:"addButton",src:"/img/add-button-pngrepo-com.png",alt:"add"})]})]})})]})}}]),s}(a.a.Component);var _=function(t){return t.user?Object(g.jsx)(L,{user:t.user,setUser:t.setUser}):Object(g.jsx)(C,{})},D=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).getPosts=n.getPosts.bind(Object(x.a)(n)),n.state={posts:[],imgURL:"",isFileUpoading:!1},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var t=this;p.a.get("/api/posts/userPosts").then((function(e){t.setState({posts:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return 0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsx)("div",{className:"wall",children:this.state.posts.slice(0).reverse().map((function(t){return Object(g.jsx)("div",{className:"post",style:{width:"18rem"},children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h5",{className:"card-title",children:[" ",t.postedBy.username]}),Object(g.jsx)(y.b,{to:"/allPosts/".concat(t._id),children:Object(g.jsx)("img",{src:t.imgURL,className:"card-img-top",alt:"..."})}),Object(g.jsx)("p",{className:"card-text",children:t.description})]})},t._id)}))})}}]),s}(a.a.Component),B=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={message:"",description:"",imgURL:"",isFileUpoading:!1},t.handleChange=function(e){var s=e.target,n=s.name,a=s.value;t.setState(Object(d.a)({},n,a))},t.handleFileUpload=function(e){e.preventDefault(),t.setState({isFileUpoading:!0}),console.log("The file to be uploaded is: ",e.target.files[0]);var s=new FormData;s.append("imgURL",e.target.files[0]),P(s).then((function(e){console.log("response is: ",e),t.setState({imgURL:e.secure_url})})).catch((function(t){console.log("Error while uploading the file: ",t)})).finally((function(){t.setState({isFileUpoading:!1})}))},t.handleSubmit=function(e){e.preventDefault(),w(t.state).then((function(e){console.log("added: ",e),t.props.history.push("/userprofile")})).catch((function(e){t.setState({message:"Please make something pretty"}),console.log("Error while adding the thing: ",e)}))},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return console.log("this is the state",this.state),console.log(this.state),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("label",{children:["Description:",Object(g.jsx)("input",{value:this.state.description,name:"description",onChange:this.handleChange})]}),Object(g.jsx)("label",{children:" Img: "}),Object(g.jsx)("input",{type:"file",onChange:function(e){return t.handleFileUpload(e)}}),Object(g.jsx)("button",{disabled:this.state.isFileUpoading,type:"submit",children:"Post"}),this.state.message&&Object(g.jsx)("h4",{children:this.state.message})]})}}]),s}(a.a.Component),F=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).handleChange=function(t){var e=t.target,s=e.name,a=e.value;n.setState(Object(d.a)({},s,a))},n.handlePostDelete=function(){var t=n.props.match.params.id;p.a.delete("/api/posts/allPosts/".concat(t)).then(n.props.history.push("/")).catch((function(t){console.log(t)}))},n.handleCommentDelete=function(t){t.preventDefault();var e=n.props.match.params.id,s=t.target.value;p.a.post("/api/posts/allPosts/".concat(e,"/uncomment"),{commentId:s}).then((function(t){n.setState({post:t.data})})).catch((function(t){console.log(t)}))},n.handleSubmit=function(t){var e=n.props.match.params.id;t.preventDefault(),n.state.comment&&p.a.post("/api/posts/allPosts/".concat(e,"/comment"),{comment:n.state.comment}).then((function(t){n.setState({comment:"",post:t.data})})).catch((function(t){console.log(t)}))},n.likePost=function(t){var e=n.props.match.params.id;t.preventDefault(),p.a.post("/api/posts/allPosts/".concat(e,"/like"),{like:n.state.like}).then((function(t){n.setState({post:t.data})})).catch((function(t){console.log(t)}))},n.unlikePost=function(t){var e=n.props.match.params.id;t.preventDefault(),p.a.post("/api/posts/allPosts/".concat(e,"/unlike"),{like:n.state.like}).then((function(t){n.setState({post:t.data})})).catch((function(t){console.log(t)}))},n.getPost=n.getPost.bind(Object(x.a)(n)),n.state={post:null,comment:"",like:""},n}return Object(l.a)(s,[{key:"getPost",value:function(){var t=this,e=this.props.match.params.id;p.a.get("/api/posts/allPosts/".concat(e)).then((function(e){t.setState({post:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.getPost()}},{key:"render",value:function(){var t=this;if(null===this.state.post)return Object(g.jsx)("h3",{children:" Loading... "});var e=this.state.post;return Object(g.jsxs)("div",{className:"post",style:{width:"18rem"},children:[Object(g.jsxs)("div",{className:"card-body",children:[this.props.user._id===e.postedBy._id?Object(g.jsx)(y.b,{to:"/userprofile",children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",e.postedBy.username]})}):Object(g.jsx)(y.b,{to:"/otheruser/".concat(e.postedBy._id),children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",e.postedBy.username]})}),Object(g.jsx)("img",{src:e.imgURL,className:"card-img-top",alt:"..."}),Object(g.jsx)("p",{className:"card-text",children:e.description})]}),Object(g.jsxs)("div",{children:[e.likes.includes(this.props.user._id)?Object(g.jsx)("button",{onClick:this.unlikePost,children:" Unlike "}):Object(g.jsx)("button",{onClick:this.likePost,children:" Like "}),e.likes.length]}),this.props.user._id===this.state.post.postedBy._id?Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:this.handlePostDelete,children:"Delete"})}):"",Object(g.jsxs)("div",{children:[Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("label",{children:["Comment:",Object(g.jsx)("input",{value:this.state.comment,name:"comment",onChange:this.handleChange})]}),Object(g.jsx)("div",{}),Object(g.jsx)("button",{type:"submit",children:"Comment"})]}),Object(g.jsx)("div",{children:this.state.post.comments.slice(0).reverse().map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:e.postedBy.username}),e.comment,t.props.user._id===e.postedBy._id?Object(g.jsx)("button",{value:e._id,onClick:t.handleCommentDelete,children:"Delete"}):""]},e._id)}))})]})]},e._id)}}]),s}(a.a.Component),R=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={posts:[]},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var t=this;console.log(this.props.match.params.id);var e=this.props.match.params.id;p.a.get("/api/profiles/".concat(e)).then((function(e){console.log(e),t.setState({posts:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return 0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:"aaaaaa"}),this.state.posts.slice(0).reverse().map((function(t){return Object(g.jsx)("div",{className:"post",style:{width:"18rem"},children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h5",{className:"card-title",children:[" ",t.postedBy.username]}),Object(g.jsx)(y.b,{to:"/allPosts/".concat(t._id),children:Object(g.jsx)("img",{src:t.imgURL,className:"card-img-top",alt:"..."})}),Object(g.jsx)("p",{className:"card-text",children:t.description})]})},t._id)}))]})}}]),s}(a.a.Component),I=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={user:t.props.user},t.setUser=function(e){t.setState({user:e})},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(_,{user:this.state.user,setUser:this.setUser}),Object(g.jsxs)(v.d,{children:[Object(g.jsx)(v.b,{exact:!0,path:"/signup",render:function(e){return Object(g.jsx)(O,Object(i.a)({setUser:t.setUser},e))}}),Object(g.jsx)(v.b,{exact:!0,path:"/login",render:function(e){return Object(g.jsx)(f,Object(i.a)({setUser:t.setUser},e))}}),Object(g.jsx)(v.b,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(k,Object(i.a)({user:t.state.user},e))}}),Object(g.jsx)(v.b,{exact:!0,path:"/allPosts/:id",render:function(e){return Object(g.jsx)(F,Object(i.a)({user:t.state.user},e))}}),Object(g.jsx)(v.b,{exact:!0,path:"/userprofile",render:function(e){return t.state.user?Object(g.jsx)(D,Object(i.a)({user:t.state.user},e)):Object(g.jsx)(v.a,{to:"/"})}}),Object(g.jsx)(v.b,{exact:!0,path:"/otheruser/:id",render:function(e){return t.state.user?Object(g.jsx)(R,Object(i.a)({},e)):Object(g.jsx)(v.a,{to:"/"})}}),Object(g.jsx)(v.b,{exact:!0,path:"/creatpost",render:function(e){return t.state.user?Object(g.jsx)(B,Object(i.a)({},e)):Object(g.jsx)(v.a,{to:"/"})}})]})]})}}]),s}(n.Component),E=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),n(t),a(t),c(t),r(t)}))};p.a.get("/api/auth/loggedin").then((function(t){var e=t.data;r.a.render(Object(g.jsx)(y.a,{children:Object(g.jsx)(I,{user:e})}),document.getElementById("root"))})).catch((function(t){console.log(t)})),E()}},[[65,1,2]]]);
//# sourceMappingURL=main.205b00ad.chunk.js.map