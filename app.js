var port = process.env.VCAP_APP_PORT || 4000;
var cmd = "node node_modules/hexo/node_modules/hexo-cli/bin/hexo server -p " +port;
var child_process = require('child_process');
child_process.exec(cmd);