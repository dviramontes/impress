
/*

 - GET home page, landing page for users/cusomers.

*/

exports.index = function(req, res){
  res.render('index', { title: 'Impress' });
};