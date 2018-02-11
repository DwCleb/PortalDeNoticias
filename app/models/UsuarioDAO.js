function UsuarioDAO(connection){
	this._connection = connection;
}


UsuarioDAO.prototype.getUsuario = function(usuario, senha, callback){
	this._connection.query('select * from usuarios where usuario = ? and senha = ?',usuario, senha, callback);
}

module.exports = function(){
	return UsuarioDAO;
}