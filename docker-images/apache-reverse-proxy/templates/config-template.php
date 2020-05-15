<?php
	$ip_static_app = getenv('STATIC_APP');
	$ip_dynamic_app = getenv('DYNAMIC_APP');
?>
<VirtualHost *:80>
	ServerName demo.res.ch

	ProxyPass '/api/students/' 'http://<?php print "$ip_dynamic_app"?>/'
	ProxyPassReverse '/api/students/' 'http://<?php print "$ip_dynamic_app"?>/'

	ProxyPass '/' 'http://<?php print "$ip_static_app"?>/'
	ProxyPassReverse '/' 'http://<?php print "$ip_static_app"?>/'

</VirtualHost>
