<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html lang="en-US" xml:lang="en-US" xmlns="http://www.w3.org/1999/xhtml"> 
<head> 

<title>Nurburgring beta</title> 
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" /> 
<meta name="Keywords" content="keyword1, keyword2" />  
<meta name="Description" content="Insert description here" /> 
<link rel="stylesheet" type="text/css" href="/nurburgring.css" /> 


</head>


<body>



<?php if ($source = file_get_contents("http://www.nurburgring.org.uk/topbar.html")) {
  $search = "<!--start text-->";
  $newText = substr($source,strpos($source, $search)+strlen($search), 20000);
  echo $newText;
}?>

<div id="wrapper">

<p>Hello world.  This text now pulls in the CSS format</p>
<p>Insert Google Analytics tracking code</p>


</div>

</body>


</html>