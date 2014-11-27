Thabit - RESTful Api
====================

This API is intended to perform any needed background transaction for the front-ends.

It will do all database access and control of data and some other big processing.

The existing resources in this API are:

* Client - É um Cliente, um *front-end* que se conecta ao servidor API.
* Frame - As janelas que serão criadas e configuradas para serem utilizadas no front-end
* Field - Os campos que serão utilizados para montar os Frames
* Data - São os dados gravados nos fields dos frames pelo usuário que está usando o sistema
* Profile - São os grupos de permissões cadastradas no sistema
* User - São os usuários do sistema
* Config - Configurações do sistema

A maioria dos endpoints existentes para os objetos seguem o padrão abaixo:
* GET /artefato
    * Parameters
        * Json with properties for filter
    * Return
        * Lista de objetos encontrados
* POST /artefato
    * Parameters
        * Json with properties to save
    * Return
        * The object saved
* PUT /artefato
    * Parameters
        * Artefact object
    * Return
        * Object saved
* DELETE /artefact
    * Parameters
        * The id of the artefact
    * 
Os end-points disponíveis na api são:

* GET /client
	* Parameters
		* clientip
		* clientidentifier
	* RETURN
		* the client object


Mongodb 
-------

To create user to login use this commands at mongo shell:

    $ mongo -u <user> -p <pwd> xxx.xxx.xxx.xxx --authenticationDatabase admin
    > use thabit
    > db.addUser({user:'<youruser>', pwd:'<yourpassword>',roles:[{role:'userAdmin', db:'thabit'}] })

To export data from MongoDB

    $ mongoexport --host <dbmachine> --username thabit --password thabit --db thabit --collection client --out clients.json