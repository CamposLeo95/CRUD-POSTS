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

//Create
function cratePost(dados){
    dados.id = miniPosts.posts.length

    miniPosts.posts.push({
        id: dados.id + 1,
        userPost: dados.userPost,
        content:dados.content
    })
}
console.log(cratePost({id: "",userPost:"Leocampos", content:"Meu segundo post"})); 
console.log(cratePost({id: "",userPost:"Leocampos", content:"Terceiro post"})); 
console.log(miniPosts.posts);

//Read
function readPost(idPost){
    return miniPosts.posts[idPost - 1]
}
console.log(readPost(1));
//Update

//delete