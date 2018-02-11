module.exports.formulario_inclusao_noticia = function(app, req, res){

	res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
}

module.exports.noticias_salvar = function(app,req,res){
	var noticia = req.body;

	//console.log(noticia);
	req.assert('titulo','Título é obrigatório!').notEmpty();
	req.assert('resumo','Resumo é obrigatório!').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 a 300 caracteres!').len(10,300);
	req.assert('autor','Autor é obrigatório!').notEmpty();
	req.assert('data_noticia','Data é obrigatório!').notEmpty();
	req.assert('noticia','Notícia é obrigatório!').notEmpty();

		
    var errors = req.validationErrors();
    if(errors){
   		res.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
   		return;
   	}
		
    var connection = app.config.dbConnection();
	var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

	NoticiasDAO.salvarNoticia(noticia, function(erro, result){
		res.redirect('/noticias');
	});
}
module.exports.login = function(app, req, res){

	res.render("admin/login", {validacao : {}, noticia: {}});
}

module.exports.login_entrar = function(app,req,res){
	var login = req.body;

	//console.log(noticia);
	req.assert('usuario','Usuário obrigatório!').notEmpty();
	req.assert('senha','Senha é obrigatório!').notEmpty();
		
    var errors = req.validationErrors();
    if(errors){
   		res.render("admin/login", {validacao : errors, login : login});
   		return;
   	}
		
    var connection = app.config.dbConnection();
	var UsuarioDAO= new app.app.models.UsuarioDAO(connection);

	UsuarioDAO.getUsuario(login, function(erro, result){
		res.redirect('/formulario_inclusao_noticia');

	});
}
