<!-- Footer Content -->

	<div id="footer">
		<p>copyright &copy; Tracy Mullen 2011</p>
	</div> <!--end of footer-->

	</div> <!--end of wholepage-->



	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
 
            <script>  
        (function($){  

            //cache nav  
            var nav = $("#topNav");  
       
            //add indicators and hovers to submenu parents  
            nav.find("li").each(function() {  

                if ($(this).find("ul").length > 0) {  

      
                    //show subnav on hover  
                    $(this).mouseenter(function() {  
                        $(this).find("ul").stop(true, true).slideDown();  
                    });  
                              
                    //hide submenus on exit  
                    $(this).mouseleave(function() {  
                        $(this).find("ul").stop(true, true).slideUp();  
                    });  
                }  
            });  
        })(jQuery);  
    </script>  
 	
</body>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/portfolio.js"></script>
<script type="text/javascript" src="js/prototype.js"></script>
<script type="text/javascript" src="js/scriptaculous.js?load=effects,builder"></script>
<script type="text/javascript" src="js/lightbox.js"></script>
</html>
<!-- End Footer Content -->