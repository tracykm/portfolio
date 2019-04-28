<?php
include("header.php"); // include header content
?>

	<div id="digPics">
<div id="threedMax">
  <h3>3D Max/Maya</h3>
  <div id="animBlock">
    <iframe width="420" height="292" src="http://www.youtube.com/embed/dL3AvqJtvjs" frameborder="0" allowfullscreen></iframe>
  </div>
  <div id="mayaBlock">
  <a href="images/digital/hand.jpg" rel="lightbox[3DMax]" title="Hand">
  <img src="images/digital/thumbs/thumb-hand.jpg" alt="Example" /> </a>
  <a href="images/digital/hand2.jpg" rel="lightbox[3DMax]" title="Hand"></a>
  <a href="images/digital/body-head.jpg" rel="lightbox[3DMax]" title="Body - Head">
  <img src="images/digital/thumbs/thumb-head.jpg" alt="Example" /> </a>
  <a href="images/digital/body-back.jpg" rel="lightbox[3DMax]" title="Body - Back"></a>
  <a href="images/digital/body-side.jpg" rel="lightbox[3DMax]" title="Body - Side"></a>
  <a href="images/digital/ammo-room.jpg" rel="lightbox[3DMax]" title="Ammo Room, Lighting and Surfacing only">
  <img src="images/digital/thumbs/thumb-ammo-room.jpg" alt="Example" /> </a>
  <a href="images/digital/pirate-room.jpg" rel="lightbox[3DMax]" title="Pirate Room">
  <img src="images/digital/thumbs/thumb-pirate-room.jpg" alt="Example" /> </a>
  </div>
</div>
<h3>Mobile Development</h3>
<iframe width="420" height="315" src="http://www.youtube.com/embed/ic-u90eXSKI" frameborder="0" allowfullscreen></iframe>

<h3>Interactive Flash</h3>
</div><!--end of digPics-->



	<div id="flashMiddle">
     <!--Flash Movies-->
     
     <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="825" height="600" id="FlashID" title="Flash Animations">
       <param name="movie" value="swf/4-flash-movies.swf" />
       <param name="quality" value="high" />
       <param name="wmode" value="opaque" />
       <param name="swfversion" value="6.0.65.0" />
       <!-- This param tag prompts users with Flash Player 6.0 r65 and higher to download the latest version of Flash Player. Delete it if you donÂ't want users to see the prompt. -->
       <param name="expressinstall" value="Scripts/expressInstall.swf" />
       <!-- Next object tag is for non-IE browsers. So hide it from IE using IECC. -->
       <!--[if !IE]>-->
       <object type="application/x-shockwave-flash" data="swf/4-flash-movies.swf" width="825" height="600">
         <!--<![endif]-->
         <param name="quality" value="high" />
         <param name="wmode" value="opaque" />
         <param name="swfversion" value="6.0.65.0" />
         <param name="expressinstall" value="Scripts/expressInstall.swf" />
         <!-- The browser displays the following alternative content for users with Flash Player 6.0 and older. -->
         <div>
           <h4>Content on this page requires a newer version of Adobe Flash Player.</h4>
           <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" width="112" height="33" /></a></p>
         </div>
         <!--[if !IE]>-->
       </object>
       <!--<![endif]-->
     </object>
     </div>
<!--End of Flash Movies-->

<?php
include("footer.php"); // include footer content
?>