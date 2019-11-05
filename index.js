var root = document.getElementById('root');
var HTMLElement = {
    container(type, props = {}) {
        var el = document.createElement(type);

        Object.assign(el, props);

        return el;
    }
};
var container = HTMLElement.container('div',{   
    classList:'menu_container'
})
root.appendChild(container);
var logo = HTMLElement.container('div',{
    classList: 'logo'
})
container.appendChild(logo);
var logo_img = HTMLElement.container('img',{
    src: "./img/icon.png",
    classList: 'img'
})
logo.appendChild(logo_img);
var menu =  HTMLElement.container('ul', {
    classList: 'menu'
});
container.appendChild(menu);
var logo_text = HTMLElement.container('div',{
    classList:'logo_text'
})
logo_text.innerHTML="Lamer-inadstries"
logo.appendChild(logo_text);
var menu_items = HTMLElement.container('li',{
    classList: 'menu_items'
})
menu_items.innerHTML="Home";
menu.appendChild(menu_items);
var menu_items1 = HTMLElement.container('li',{
    classList: 'menu_items'
})
menu_items1.innerHTML="Your profile";
menu.appendChild(menu_items1);
var menu_items2 = HTMLElement.container('li',{
    classList: 'menu_items'
})
menu_items2.innerHTML="Users";
menu.appendChild(menu_items2);
var header_menu = HTMLElement.container('ul',{
    classList:'header_menu'
})
root.appendChild(header_menu);
var header_menuItem = HTMLElement.container('li',{
    classList:'header_menu-item'
})
header_menuItem.innerHTML=localStorage.getItem('name')
var header_menuImg = HTMLElement.container('li',{
    classList:'header_menu-img'
})
var header_menuLink = HTMLElement.container('a',{
    classList:'exit_link'
})
header_menuLink.href="./index.html"
var header_menuExit = HTMLElement.container('li',{
    classList:'header_menu-exit'
})
var allUsers = localStorage.getItem('allUsers'); 
var counter = localStorage.getItem('counter');
header_menuExit.innerHTML="Exit"
header_menu.appendChild(header_menuLink);
header_menuLink.appendChild(header_menuExit);
header_menu.appendChild(header_menuImg);
header_menu.appendChild(header_menuItem);
var usersList = HTMLElement.container('div',{
    classList:'cont_users'
})
root.appendChild(usersList);
var friends = HTMLElement.container('ll',{
    classList: 'menu_items'
})
menu.appendChild(friends);
var friendsBtn = HTMLElement.container('ul',{
    classList:'friendsBtn'
})
var friends_header = HTMLElement.container('h1',{
    classList:'friends_header'
})
friends_header.innerHTML='All users';
usersList.appendChild(friends_header);
friendsBtn.innerHTML='<i>&#9658;</i>Your friends';
friends.appendChild(friendsBtn);
var removeFriend = [];
var removeBtn = [];
var allUsersList = [];
var myList = [];
var friendsArrey=[];
for(var i = 0;i<counter;i++){ 
    allUsersList.push(JSON.parse(localStorage.getItem('USERS'))[i].login);
}
for (let i = 0; i < counter; i++) {
    
    var element = HTMLElement.container('li',{
        classList:'name_list'
    });
    var UsersNames = HTMLElement.container('div',{
    })
    var addToFriendsList = HTMLElement.container('div',{
        classList:'addToFriend'  
    })
    var removeFromFriend = HTMLElement.container('div',{
        classList:'removeFriend none'
    })
    removeBtn.push(addToFriendsList);
    removeFriend.push(removeFromFriend);
    var myCounter = allUsersList.valueOf(i);
    myList.push(myCounter[i]);
    var friends_list = HTMLElement.container('li',{
            classList:'friends_list none'
        })
        friends_list.innerHTML=myList[i];
        friends.appendChild(friends_list);
        friendsArrey.push(friends_list);
    addToFriendsList.onclick = function(){
        friendsArrey[i].classList.remove('none');
        removeBtn[i].classList.add('none');
        removeFriend[i].classList.remove('none');
    }
    removeFromFriend.onclick = function(){
        friendsArrey[i].classList.add('none');
        removeBtn[i].classList.remove('none');
        removeFriend[i].classList.add('none');
    }
  

    addToFriendsList.innerHTML="Add to friend";
    removeFromFriend.innerHTML="Remove from friend";
    usersList.appendChild(element);
    element.appendChild(UsersNames);
    element.appendChild(addToFriendsList);
    UsersNames.innerHTML=allUsersList[i];
    element.appendChild(removeFromFriend);
}





/*


friends.innerHTML="<i>&#9658;</i>Your friends"
menu.appendChild(friends)
friends_list.style.display="none";
icon_img.style.display="none";
        friends.onclick = function(){
            if(friends_list.style.display==="none"){
                friends.innerHTML="<i>&#9660;</i>Your friends"
                friends_list.style.display="inline-flex";
                friends.appendChild(friends_list);
                icon_img.style.display="inline-flex";
                friends_list.appendChild(icon_img);
            }
                else{
                    friends.innerHTML="<i>&#9658;</i>Your friends"
                    friends_list.style.display="none";
                    icon_img.style.display="none";
                }
        }
        */