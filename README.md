-------------------- PROJETO DE MINI CRUD --------------------

-Projeto utilizado para começar a pro em pratica o conceito de CRUD, que é bastante utilizado no mercado.

-Utilizando apenas javascript no projeto para treinar a logica da criação

-O projeto foi dividivo em 4 partes (funções) de acordo com a ordem do CRUD

--------------------------- CREAT ----------------------------
- A primeira parte usada para criar um post(Create) 
utilizando o metodo push para acrescentar um objeto no array miniPosts.

---------------------------- READ ----------------------------
- Na parte de leitura foi usado apenas um return que mostra o post completo apartir do id apresentado.

--------------------------- DELETE ---------------------------
- Iverti a ordem do CRUD pois na primeira parte do update eu utilizei os mesmos fundamentos do DELETE, que foi o de usar o Filter para filtrar e aparecer todos os dados devergentes do id que o usuario inserir fazendo com que "exclua o post de id inserido."

--------------------------- UPDATE ---------------------------

Como primeiro fundamento do UPDATE eu utilizei o mesmo metodo de exclusao do DELETE, para que depois pudesse incluir com o metodo push um novo post "com o mesmo id que foi deletado". Fazendo com que o post fosse "Atualizado"

---------------------------- OBS -----------------------------
- No final das funções utilizei o metodo de atribuição para inserir os dados no array principal pois alguns metodos como o filter criam arrays novos e não atualizam o anterior.
