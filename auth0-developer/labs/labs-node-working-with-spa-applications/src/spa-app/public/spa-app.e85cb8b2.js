var e={allowAccess:async()=>!0,render:async()=>`
      <h1>Not Found</h1>
    `,postRender:async()=>{}},t=async()=>{try{let e=await fetch(`${window.env.API_URL}/total`,{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}catch(e){console.log("Error getting total",e)}},n=async()=>{try{return[{date:new Date,description:"Pizza for a Coding Dojo session.",value:102},{date:new Date,description:"Coffee for a Coding Dojo session.",value:42}]}catch(e){console.log("Error getting reports",e)}},a=async e=>{let t;return`
  <table border="1">
    ${t=Object.keys(e[0]),`
<tr>
  ${t.map(e=>`<th><strong>${e}</strong></th>`).join("\n ")}
</tr>
`}
    ${e.map(e=>`<tr>
   ${Object.keys(e).map(t=>{var n;return n=e[t],`<td>${"number"==typeof n?`$${n.toFixed(2)}`:n instanceof Date?n.toLocaleDateString("en-US"):n}</td>`}).join("\n ")}
  </tr>`).join("\n ")}
  </table>
  `};window.user={name:"Anonymous",picture:{}};var o=async()=>`
    <li class="logo">
      <a href="#">
        <img src="${{}}" alt="Auth0" />
      </a>
    </li>
    <li>
      <a id="home-link" href="#">Home</a>
    </li>
    <li>
      <a id="expenses-link" href="#expenses">Expenses</a>
    </li>
    <li class="spacer" />
    <li id="log-out" style="display: none">
      <a href="#"> Logout</a>
    </li>
    <li id="log-in" style="display: block">
      <a href="#"> Login</a>
    </li>
    <li class="profile">
      <img src="${window.user.picture}" />
    </li>
    `,s=async()=>{document.getElementById("log-in").addEventListener("click",async e=>{e.preventDefault()}),document.getElementById("log-out").addEventListener("click",e=>{e.preventDefault()})};let r={"/":{allowAccess:async()=>!0,render:async()=>{let e=await t();return`
    <h1>Home Page</h1>
    <p id="user-greet">Hello, ${window.user.name}</p>
    <p>So far, this app has been used to manage:</p>
    <div id="summary">
    <ul>
      <li><strong id="expenses-count">${e.count}</strong> expenses</li>
      <li>$<strong id="expenses-total">
      ${e.total.toFixed(2)}
      </strong> dollars</li>
    </ul>
    </div>    
    `},postRender:async()=>{}},expenses:{allowAccess:async()=>!1,render:async()=>{let e=await n();return`
    <h1>Expense Report</h1>
    <p id="user-greet">Hello, ${window.user.name}</p>
    <p>These are your expenses:</p>
    ${await a(e)}
    `},postRender:async()=>{}}},i=document.getElementById("navbar"),l=document.getElementById("content"),d=async()=>{let t=r[location.hash.slice(1).toLowerCase()||"/"]||e;await t.allowAccess()?(l.innerHTML=await t.render(),await t.postRender()):window.history.replaceState({},document.title,"/"),i.innerHTML=await o(),await s()};!async function(){window.addEventListener("hashchange",()=>{d()}),window.addEventListener("load",()=>{sessionStorage.getItem("reload")||(d(),sessionStorage.setItem("reload","true"))}),sessionStorage.getItem("reload")&&(sessionStorage.setItem("reload","true"),await d())}();
//# sourceMappingURL=spa-app.e85cb8b2.js.map
