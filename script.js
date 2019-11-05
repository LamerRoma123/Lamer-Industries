var root = document.getElementById('root');

var HTMLElement = {
    container(type, props = {}) {
        var el = document.createElement(type);

        Object.assign(el, props);

        return el;
    }
};


var loginer_html =  HTMLElement.container('div', {
    classList: 'container'
});

var header = HTMLElement.container('h1', {
    classList: 'header'
});

    
var img = HTMLElement.container('img', {
    src: "./img/icon.png",
    classList: 'img_size'
});    

    root.appendChild(loginer_html);
    loginer_html.appendChild(header);
    header.appendChild(img);

var text = HTMLElement.container('span');
    text.innerHTML = "Lamer-industries";
    header.appendChild(text);
var cloneImg = HTMLElement.container('img',{
    classList:'img_size'
    });
    cloneImg.src="./img/icon.png";
    header.appendChild(cloneImg);
var link_a = document.createElement('a');
    loginer_html.appendChild(link_a);
    link_a.innerHTML = "Enter";
    link_a.href="./indexLog.html";
    link_a.id = "link";
    link_a.classList.add("a_link");
var form = document.createElement('form');
    form.classList.add("login");
    form.id = "display";
    loginer_html.appendChild(form);
var memberheader = document.createElement('h1');
    memberheader.classList.add("memberHeader");
    memberheader.innerHTML = "Sign in";
    form.appendChild(memberheader);
var input1 = document.createElement('input');
    input1.placeholder = "login";
    input1.classList.add("userlogin");
    input1.id = "login";
    form.appendChild(input1);
var input2 = document.createElement('input');
    input2.placeholder = "Password";
    input2.classList.add("userpassword");
    input2.id = "password";
    form.appendChild(input2);
var input3 = document.createElement('input');
    input3.type = "button";
    input3.value = "Sign in";
    input3.classList.add("btn");
    input3.id = "btn";
    form.appendChild(input3);
var underText = document.createElement("p")
    underText.innerHTML = "<b>Not registered?Sign up!</b>";
    underText.id = "swap";
    form.appendChild(underText);
var passwordPage = document.createElement("form");
    passwordPage.classList.add("login");
    passwordPage.id = "reg";
    loginer_html.appendChild(passwordPage)
var passwordHeader = document.createElement("h1");
    passwordHeader.innerHTML ="Sign up";
    passwordHeader.classList.add("memberHeader");
    passwordPage.appendChild(passwordHeader);
var newLogin = document.createElement("input");
    newLogin.classList.add("userlogin");
    newLogin.placeholder = "You login";
    newLogin.id = "newLogin";
    passwordPage.appendChild(newLogin);
var newPassword = document.createElement("input");
    newPassword.classList.add("userpassword");
    newPassword.placeholder = "You password";
    newPassword.id = "newPssword";
    passwordPage.appendChild(newPassword);
var signUpBtn = document.createElement('input');
    signUpBtn.type = "button";
    signUpBtn.value = "Sign up";
    signUpBtn.classList.add("btn");
    signUpBtn.id = "singUpBtn";
    passwordPage.appendChild(signUpBtn);
var regUnderText = document.createElement("p")
    regUnderText.innerHTML = "<b>Alredy registered?Sign in!</b>";
    regUnderText.id = "swap";
    passwordPage.appendChild(regUnderText);

    display.style.display = "none";

    function getUsers() {
        const USERS = localStorage.getItem('USERS') || JSON.stringify([]);
    
        return JSON.parse(USERS);
    }
    
    function updateUsers(newUser) {
        const USERS = getUsers();
    
        USERS.push(newUser);
    
        localStorage.setItem('USERS', JSON.stringify(USERS));    
        var allUsers = [];
        for (var i = 0; i < USERS.length; i++) {
            var counter=i;
            var allNamesParse = JSON.parse(localStorage.getItem('USERS'))[i].login;
            allUsers.push(allNamesParse);        
        }
        
        localStorage.setItem('counter',counter);
        localStorage.setItem('allUsers',allUsers);
    }
    

    regUnderText.onclick = ()=>{
        display.style.display = "flex";
        passwordPage.style.display = "none";
    }
    underText.onclick = ()=>{
        display.style.display = "none";
        passwordPage.style.display = "flex";
    }

    signUpBtn.onclick =  ()=>{
        const userLogin = newLogin.value;
        const userPass = newPassword.value;
        
        var newUser = {
            login: userLogin,
            password: userPass
        };

        const USERS = getUsers();
        const exist = USERS
            .find(user => user.login === newUser.login && user.password === newUser.password);

            var allUsers = [];
            for (var i = 0; i < USERS.length; i++) {
                var counter=i;
                var allNamesParse = JSON.parse(localStorage.getItem('USERS'))[i].login;
                allUsers.push(allNamesParse);        
            }
            
            localStorage.setItem('counter',counter);
            localStorage.setItem('allUsers',allUsers);

        if (exist ) {
            alert('you can Sing in');
        } else {
            updateUsers(newUser);
            passwordPage.style.display = "none";
            var link = document.getElementById('link');
            var display = document.getElementById('display');
                display.style.display = "none";
                link.style.display = "block";
            newLogin.value = '';
            newPassword.value = '';
            localStorage.setItem('name',newUser.login);
        }

        
    }

input3.onclick = ()=>{
        var userlogin = input1.value;
        var userpassword = input2.value;
        const USERS = getUsers();
        const exist = USERS
        .find(user => user.login === userlogin && user.password === userpassword);

        var allUsers = [];
        for (var i = 0; i < USERS.length; i++) {
            var counter=i;
            var allNamesParse = JSON.parse(localStorage.getItem('USERS'))[i].login;
            allUsers.push(allNamesParse);        
        }
        
        localStorage.setItem('counter',counter);
        localStorage.setItem('allUsers',allUsers);

        if (exist && userlogin.length>2 && userpassword.length>2) {
            var link = document.getElementById('link');
            var display = document.getElementById('display');
                display.style.display = "none";
                link.style.display = "block";
                localStorage.setItem('name',input1.value);
        } else {
            alert('not found');
        }   
    }
  