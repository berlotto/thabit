Thabit - RESTful Api
====================

Esta API tem por finalidade efetuar toda e qualquer operação de background necessária para o funcionamento do front-end.

Ela é quem faz acesso ao banco de dados de forma organizada e assíncrona.

Os artefatos com os quais ela trabalha são:

* Client - É um cliente, um front-end que se conecta ao servidor API.
* Frame - As janelas que serão criadas e configuradas para serem utilizadas no front-end
* Field - Os campos que serão utilizados para montar os Frames
* Data - São os dados gravados nos fields dos frames pelo usuário que está usando o sistema
* Profile - Sâo os grupos de permissões cadastradas no sistema
* User - São os usuários do sistema
* Config - Configurações do sistema

Os end-points disponíveis na api são:

* GET /frame
* GET /frame/:id
* DELETE /frame/:id
* POST /frame
* 