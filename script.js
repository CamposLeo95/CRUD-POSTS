// PROJETO MINI CRUD

const miniPosts ={
    users:{
        nomeUser: "Leocampos",
    },
    posts:[{
        id:1,
        userPost: "Leocampos",
        content:"Meu Primeiro post",
    }]
}

//Create--------------------------------------------------------------
function cratePost(dados){
    dados.id = miniPosts.posts.length

    miniPosts.posts.push({
        id: dados.id + 1,
        userPost: dados.userPost,
        content:dados.content
    })
}
console.log(cratePost({id: "",userPost:"Leocampos", content:"Meu segundo post"})); 
// console.log(cratePost({id: "",userPost:"Leocampos", content:"Terceiro post"})); 
console.log(miniPosts.posts);


//Read--------------------------------------------------------------
function readPost(idPost){
    return miniPosts.posts[idPost - 1]
}
console.log(readPost(3));


//Update--------------------------------------------------------------
function updatePost(dados){
    dadId = dados.id
    let remove = miniPosts.posts.filter((item)=>{
        if(item.id != dadId){
            return item
        }
    })
    remove.push({
        id: dadId, 
        userPost: dados.userPost, 
        content: dados.content
    })
    return miniPosts.posts = remove  
}

console.log(updatePost({id: 3, userPost: "Leocampos", content:"Alterando o primeiro post"}))
console.log(miniPosts);

//delete--------------------------------------------------------------

function delPost(dados){
    const remove = miniPosts.posts.filter((item)=>{
        if(item.id != dados){
            return item
        }
    })
    return miniPosts.posts = remove
}

console.log(delPost(1));
console.log(miniPosts);