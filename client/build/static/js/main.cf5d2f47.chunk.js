(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,s){},40:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(34),r=s.n(c),i=(s(40),s(16)),o=s(5),l=s(6),u=s(8),h=s(7),d=s(14),j=s(2),p=s.n(j),m=function(e,t,s){return p.a.post("/api/auth/signup",{username:e,password:t,email:s}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t){return p.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=(s(22),s(0)),O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",email:""},e.handleFormSubmit=function(t){console.log(t),t.preventDefault();var s=e.state,n=s.username,a=s.password,c=s.email;m(n,a,c).then((function(t){t.errorMessage?e.setState({message:t.errorMessage,username:"",password:"",email:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(d.a)({},n,a))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"signupBg",children:Object(g.jsxs)("div",{className:"signupFormBg",children:[Object(g.jsx)("h3",{className:"logo",children:"Instaclone"}),Object(g.jsxs)("form",{className:"signupForm",onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:Object(g.jsx)("input",{className:"form-control",placeholder:"Username:",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})}),Object(g.jsx)("label",{children:Object(g.jsx)("input",{className:"form-control",placeholder:"Password:",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})}),Object(g.jsx)("label",{children:Object(g.jsx)("input",{className:"form-control",placeholder:"Email:",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})}),Object(g.jsx)("input",{className:"loginButton",type:"submit",value:"Signup"}),this.state.message&&Object(g.jsx)("h6",{children:this.state.message})]})]})})}}]),s}(n.Component),f=s(4),v=s(15),x=s(3),N=(s(18),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var s=e.state,n=s.username,a=s.password;b(n,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):e.props.setUser(t)}))},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(d.a)({},n,a))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:"login",onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:Object(g.jsx)("input",{placeholder:"Username:",className:"form-control",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})}),Object(g.jsx)("label",{children:Object(g.jsx)("input",{placeholder:"Password:",className:"form-control",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})}),Object(g.jsx)("input",{className:"loginButton",type:"submit",value:"Login"}),this.state.message&&Object(g.jsx)("h4",{children:this.state.message})]})})}}]),s}(n.Component)),y=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).getPosts=n.getPosts.bind(Object(v.a)(n)),n.state={posts:[]},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var e=this;p.a.get("/api/posts/allPosts").then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this.props;return e.user?0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsx)("div",{className:"wall",children:this.state.posts.slice(0).reverse().map((function(t){return Object(g.jsx)("div",{className:"post",style:{width:"35rem"},children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("div",{className:"userImgName",children:[Object(g.jsx)("img",{alt:"user profile",style:{width:"30px"},src:t.postedBy.imgURL}),"\xa0\xa0",e.user._id===t.postedBy._id?Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/userprofile",children:Object(g.jsx)("h5",{className:"card-title userName",children:t.postedBy.username})})}):Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/otheruser/".concat(t.postedBy._id),children:Object(g.jsx)("h5",{className:"card-title userName",children:t.postedBy.username})})})]}),Object(g.jsx)(x.b,{to:"/allPosts/".concat(t._id),children:Object(g.jsx)("img",{src:t.imgURL,className:"card-img-top",alt:"..."})}),Object(g.jsxs)("div",{className:"likeDescription",children:[Object(g.jsxs)("p",{className:"card-text",children:[Object(g.jsxs)("strong",{children:[t.postedBy.username,": "]}),t.description]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{style:{width:"20px"},alt:"heart",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}),t.likes.length]})]}),Object(g.jsx)("div",{children:t.comments.slice(-1).map((function(e){return Object(g.jsxs)("div",{className:"lastComment",children:[Object(g.jsx)("p",{children:"last comment:"}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("strong",{children:[e.postedBy.username,": "]}),e.comment]})]},e._id)}))})]})},t._id)}))}):Object(g.jsxs)("div",{className:"homeScreen",children:[Object(g.jsx)("div",{className:"innerHomeScreen",children:Object(g.jsx)(N,Object(i.a)({setUser:this.props.setUser},this.props))}),Object(g.jsxs)("div",{className:"innerHomeScreen",children:["Don't have account? \xa0\xa0",Object(g.jsx)(x.b,{to:"/signup",children:"Signup"})]})]})}}]),s}(a.a.Component),U=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-md navbar-light navBg",children:Object(g.jsx)(x.b,{className:"navbar-brand logo",to:"/",children:" Instaclone  "})})}}]),s}(a.a.Component),P=p.a.create({baseURL:"/api",withCredentials:!0}),k=function(e){throw e},C={service:P,handleUpload:function(e){return P.post("/posts/upload",e).then((function(e){return e.data})).catch(k)},createPost:function(e){return P.post("/posts/postIt",e).then((function(e){return e.data})).catch(k)},handleUploadPicture:function(e){return P.post("/profiles/uploadpicture",e).then((function(e){return e.data})).catch(k)},createPicture:function(e){return P.post("/profiles/picture",e).then((function(e){return e.data})).catch(k)}},w=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).getUserImage=function(e){var t="",s=new FormData;s.append("imgURL",e.target.files[0]),C.handleUploadPicture(s).then((function(e){t=e.secure_url})).catch((function(e){console.log("Error while adding the thing: ",e)})).finally((function(){p.a.post("/api/profiles/picture",{imgURL:t}).then((function(e){n.setState({imgURL:e.data.imgURL})})).catch((function(e){console.log("Error while adding the thing: ",e)}))}))},n.handleLogout=n.handleLogout.bind(Object(v.a)(n)),n.state={imgURL:n.props.user.imgURL},n}return Object(l.a)(s,[{key:"handleLogout",value:function(){var e=this;p.a.post("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.props.setUser(null)}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light navBg navbarLogedin",children:[Object(g.jsx)(x.b,{className:"navbar-brand logo logoWidth",to:"/",children:"Instaclone"}),Object(g.jsx)(x.b,{className:"nav-item nav-link",to:"/creatpost",children:Object(g.jsx)("img",{className:"addButton",src:"/img/add-button-pngrepo-com.png",alt:"add"})}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"navbar-nav",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:"userImgForm",children:[Object(g.jsx)("label",{htmlFor:"file-input",children:Object(g.jsx)("img",{className:"userImgNavbar",alt:"imageuser",style:{width:"30px"},src:this.state.imgURL})}),Object(g.jsx)("input",{id:"file-input",type:"file",onChange:this.getUserImage})]})}),Object(g.jsxs)(x.b,{className:"nav-item nav-link",to:"/userprofile",children:[this.props.user.username,"'s Profile"]}),Object(g.jsx)(x.b,{className:"nav-item nav-link active",to:"/",onClick:function(){return e.handleLogout(e.props)},children:"Logout"})]})})]})}}]),s}(a.a.Component);var S=function(e){return e.user?Object(g.jsx)(w,{user:e.user,setUser:e.setUser}):Object(g.jsx)(U,{})},L=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).getPosts=n.getPosts.bind(Object(v.a)(n)),n.state={posts:[],imgURL:"",isFileUpoading:!1},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var e=this;p.a.get("/api/posts/userPosts").then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return 0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsxs)("div",{className:"otherUserProfile",children:[Object(g.jsxs)("div",{className:"otherUserProfileHeader",children:[Object(g.jsxs)("div",{className:"userImageName",children:[Object(g.jsx)("img",{alt:"user profile",style:{height:"50px",width:"50px",borderRadius:"50%"},src:this.props.user.imgURL}),Object(g.jsxs)("h3",{children:["Hi, ",this.props.user.username]})]}),Object(g.jsxs)("p",{children:[" ",Object(g.jsxs)("strong",{children:[this.state.posts.length," posts "]})," "]})]}),Object(g.jsx)("div",{className:"allUserPosts",children:this.state.posts.slice(0).reverse().map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/allPosts/".concat(e._id),children:Object(g.jsx)("img",{style:{width:"9rem",height:"9rem"},className:"userImages",src:e.imgURL,alt:"..."})})})},e._id)}))})]})}}]),s}(a.a.Component),B=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={message:"",description:"",imgURL:"",isFileUpoading:!1},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(d.a)({},n,a)),console.log(e.props)},e.handleFileUpload=function(t){t.preventDefault(),e.setState({isFileUpoading:!0}),console.log("The file to be uploaded is: ",t.target.files[0]);var s=new FormData;s.append("imgURL",t.target.files[0]),C.handleUpload(s).then((function(t){console.log("response is: ",t),e.setState({imgURL:t.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)})).finally((function(){e.setState({isFileUpoading:!1})}))},e.handleSubmit=function(t){t.preventDefault(),C.createPost(e.state).then((function(t){console.log("added: ",t),e.props.history.push("/userprofile")})).catch((function(t){e.setState({message:"Please make something pretty"}),console.log("Error while adding the thing: ",t)}))},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"bodyCreatePost",children:Object(g.jsxs)("form",{className:"postForm",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("h4",{children:[this.props.user.username,":"]}),Object(g.jsx)("label",{children:"Upload Img: "}),Object(g.jsx)("div",{className:"chooseFile",children:Object(g.jsx)("input",{className:"chooseFileInput",type:"file",onChange:function(t){return e.handleFileUpload(t)}})}),Object(g.jsx)("input",{className:"inputPostDescirption",placeholder:"Description:",value:this.state.description,name:"description",onChange:this.handleChange}),Object(g.jsx)("button",{className:"postBtn",disabled:this.state.isFileUpoading,type:"submit",children:"Share"}),this.state.message&&Object(g.jsx)("h4",{children:this.state.message})]})})}}]),s}(a.a.Component),D=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,a=t.value;n.setState(Object(d.a)({},s,a))},n.handlePostDelete=function(){var e=n.props.match.params.id;p.a.delete("/api/posts/allPosts/".concat(e)).then(n.props.history.push("/")).catch((function(e){console.log(e)}))},n.handleCommentDelete=function(e){e.preventDefault();var t=n.props.match.params.id,s=e.target.value;p.a.post("/api/posts/allPosts/".concat(t,"/uncomment"),{commentId:s}).then((function(e){n.setState({post:e.data})})).catch((function(e){console.log(e)}))},n.handleSubmit=function(e){var t=n.props.match.params.id;e.preventDefault(),n.state.comment&&p.a.post("/api/posts/allPosts/".concat(t,"/comment"),{comment:n.state.comment}).then((function(e){n.setState({comment:"",post:e.data})})).catch((function(e){console.log(e)}))},n.likePost=function(e){var t=n.props.match.params.id;e.preventDefault(),p.a.post("/api/posts/allPosts/".concat(t,"/like"),{like:n.state.like}).then((function(e){n.setState({post:e.data})})).catch((function(e){console.log(e)}))},n.unlikePost=function(e){var t=n.props.match.params.id;e.preventDefault(),p.a.post("/api/posts/allPosts/".concat(t,"/unlike"),{like:n.state.like}).then((function(e){n.setState({post:e.data})})).catch((function(e){console.log(e)}))},n.getPost=n.getPost.bind(Object(v.a)(n)),n.state={post:null,comment:"",like:""},n}return Object(l.a)(s,[{key:"getPost",value:function(){var e=this,t=this.props.match.params.id;p.a.get("/api/posts/allPosts/".concat(t)).then((function(t){e.setState({post:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getPost()}},{key:"render",value:function(){var e=this;if(null===this.state.post)return Object(g.jsx)("h3",{children:" Loading... "});var t=this.state.post;return Object(g.jsx)("div",{className:"singlePost",children:Object(g.jsx)("div",{className:"post",style:{width:"35rem"},children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("div",{className:"userImgName",children:[Object(g.jsx)("img",{alt:"user profile",style:{width:"30px"},src:t.postedBy.imgURL}),this.props.user._id===t.postedBy._id?Object(g.jsx)(x.b,{to:"/userprofile",children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",t.postedBy.username]})}):Object(g.jsx)(x.b,{to:"/otheruser/".concat(t.postedBy._id),children:Object(g.jsxs)("h5",{className:"card-title",children:[" ",t.postedBy.username]})})]}),Object(g.jsx)("img",{src:t.imgURL,className:"card-img-top",alt:"..."}),Object(g.jsxs)("div",{className:"likeDescription",children:[Object(g.jsxs)("p",{className:"card-text",children:[Object(g.jsxs)("strong",{children:[t.postedBy.username,": "]}),t.description]}),Object(g.jsxs)("div",{className:"likeCounter",children:[t.likes.includes(this.props.user._id)?Object(g.jsxs)("button",{className:"btn",onClick:this.unlikePost,children:[" ","Dislike:"," "]}):Object(g.jsxs)("button",{className:"btn",onClick:this.likePost,children:[" ","Like:"," "]}),"\xa0\xa0 ",t.likes.length]})]}),this.props.user._id===this.state.post.postedBy._id?Object(g.jsx)("div",{className:"deletePost",children:Object(g.jsx)("button",{className:"btnDelete",onClick:this.handlePostDelete,children:"Delete Post"})}):"",Object(g.jsxs)("div",{children:[Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{placeholder:"Comment:",className:"commentField",type:"text",value:this.state.comment,name:"comment",onChange:this.handleChange}),Object(g.jsx)("div",{className:"comment",children:Object(g.jsx)("button",{className:"btnComment",type:"submit",children:"Post Comment"})})]}),Object(g.jsx)("div",{className:"allComments",children:this.state.post.comments.slice(0).reverse().map((function(t){return Object(g.jsxs)("div",{className:"commentDisplay",children:[Object(g.jsxs)("p",{children:[Object(g.jsxs)("strong",{children:[t.postedBy.username,":"]})," ",t.comment]}),e.props.user._id===t.postedBy._id?Object(g.jsx)("button",{className:"btnDelete",value:t._id,onClick:e.handleCommentDelete,children:"Delete"}):""]},t._id)}))})]})]})},t._id)})}}]),s}(a.a.Component),F=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={posts:[]},n}return Object(l.a)(s,[{key:"getPosts",value:function(){var e=this;console.log(this.props.match.params.id);var t=this.props.match.params.id;p.a.get("/api/profiles/".concat(t)).then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return 0===this.state.posts.length?Object(g.jsx)("h3",{children:" Loading... "}):Object(g.jsxs)("div",{className:"otherUserProfile",children:[Object(g.jsxs)("div",{className:"otherUserProfileHeader",children:[Object(g.jsxs)("div",{className:"userImageName",children:[Object(g.jsx)("img",{alt:"user profile",style:{height:"50px",width:"50px",borderRadius:"50%"},src:this.state.posts[0].postedBy.imgURL}),Object(g.jsxs)("h3",{children:[" ",this.state.posts[0].postedBy.username]})]}),Object(g.jsx)("p",{children:Object(g.jsxs)("strong",{children:[this.state.posts.length," posts "]})})]}),Object(g.jsx)("div",{className:"allUserPosts",children:this.state.posts.slice(0).reverse().map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/allPosts/".concat(e._id),children:Object(g.jsx)("img",{style:{width:"9rem",height:"9rem"},src:e.imgURL,className:"userImages",alt:"..."})})},e._id)}))})]})}}]),s}(a.a.Component),_=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(S,{user:this.state.user,setUser:this.setUser}),Object(g.jsxs)(f.d,{children:[Object(g.jsx)(f.b,{exact:!0,path:"/signup",render:function(t){return Object(g.jsx)(O,Object(i.a)({setUser:e.setUser},t))}}),Object(g.jsx)(f.b,{exact:!0,path:"/",render:function(t){return Object(g.jsx)(y,Object(i.a)({setUser:e.setUser,user:e.state.user},t))}}),Object(g.jsx)(f.b,{exact:!0,path:"/allPosts/:id",render:function(t){return Object(g.jsx)(D,Object(i.a)({user:e.state.user},t))}}),Object(g.jsx)(f.b,{exact:!0,path:"/userprofile",render:function(t){return e.state.user?Object(g.jsx)(L,Object(i.a)({user:e.state.user},t)):Object(g.jsx)(f.a,{to:"/"})}}),Object(g.jsx)(f.b,{exact:!0,path:"/otheruser/:id",render:function(t){return e.state.user?Object(g.jsx)(F,Object(i.a)({},t)):Object(g.jsx)(f.a,{to:"/"})}}),Object(g.jsx)(f.b,{exact:!0,path:"/creatpost",render:function(t){return e.state.user?Object(g.jsx)(B,Object(i.a)({user:e.state.user},t)):Object(g.jsx)(f.a,{to:"/"})}})]})]})}}]),s}(n.Component),R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};p.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(g.jsx)(x.a,{children:Object(g.jsx)(_,{user:t})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),R()}},[[65,1,2]]]);
//# sourceMappingURL=main.cf5d2f47.chunk.js.map