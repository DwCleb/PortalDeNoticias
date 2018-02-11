module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
    	app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);
	});  
	app.post('/noticias/salvar', function (req, res) {
		app.app.controllers.admin.noticias_salvar(app,req,res);
	});
	app.get('/login', function (req, res) {
    	app.app.controllers.admin.login(app,req,res);
	});  
	app.post('/login/entrar', function (req, res) {
		app.app.controllers.admin.login_entrar(app,req,res);
	});
};
