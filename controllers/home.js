let express = require('express'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tinas' })
})

router.get('/showcase', function(req, res, next){
	res.render('showcase', {})
})

router.get('/breadcrumbs', function(req, res, next){
	var crumbs = {
		crumbs: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth']
	};
	res.render('breadcrumbs', crumbs);
		
	});



module.exports = router
