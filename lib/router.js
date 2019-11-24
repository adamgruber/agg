var express = require('express'),
    router  = express.Router(),
    path    = require('path'),
    routes  = require('./routes/index');

module.exports = router;

// Define Routes
router.get('/', routes.index);
router.get('/resume_print', routes.resume);
router.get('/:section', routes.index);
router.get('/svc/projects', routes.getProjects);