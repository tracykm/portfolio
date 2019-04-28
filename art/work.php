<?php
include("header.php"); // include header content
?>

	<div id="abouttext">

    <h1>Work</h1>
    <p>Here is a seclection of some of the work I did for the Center for Teaching and Learning at UT.</p>
    <br/>

    <h2> Javascript Simulations </h2>
<div id="js">
  <div id="homeTile">
    <a href="/gasLaw/index.html" title="Curvy Laugh" target="_blank">
      <img src="images/work/gasLaws.jpg" />
    <p>Ideal Gas Laws</p></a>
  </div>

  <div id="homeTile">
    <a href="photoelectric/" title="Curvy Laugh" target="_blank">
      <img src="images/work/photoelectric.jpg" />
    <p>Photoelectric Effect</p></a>
  </div>


<!--  <div id="homeTile">
    <a href="https://webspace.utexas.edu/tkm368/pineapple/" title="Curvy Laugh" target="_blank">
      <img src="images/work/pineapple.jpg" />
    <p>Pineapple Game</p></a>
  </div>
-->
  <div id="homeTile">
    <a href="https://webspace.utexas.edu/tkm368/genieDrag/Meanie%20Genie.html" title="Curvy Laugh" target="_blank">
      <img src="images/work/genie.jpg" />
    <p>Genie Game</p></a>
  </div><!--end of homeTile-->

  <p class="clear">I used JavaScript and jQuery to create these simulations. In the Phototelcetric Effect the simple movementent animaiton is handled with jQuery. Changing the color of the light prooved more complicated and I used camanJS for that. In the Gas Laws particles are moved with JavaScript and for the heat and cool I created and coded a png spritesheet.</p>
</div><!--end of js-->

<br/>
<h2>Motion Graphics</h2>

  <div id="videoTile">
    <iframe width="500" height="280" src="http://www.youtube.com/embed/SfHHZxGpwr8" frameborder="0" allowfullscreen></iframe>
    <p>  </p>
  </div><!--end of homeTile-->

  <div id="videoTile">
    <iframe width="500" height="280" src="http://www.youtube.com/embed/653wzItez6A" frameborder="0" allowfullscreen></iframe>
  </div><!--end of homeTile-->

  <p class="clear">These videos are part of a series for an introductory chemistry class. They were shot against a green screen, I did the post production and used AfterEffects. They have been used for the past two semesters in this class and have over 5000 views between them.</p>
  <br/>

<div id="crit">
<h2>Critical Thinking Site CSS</h2>

  <div id="homeTile">
    <a href="http://apps-dev.ctl.utexas.edu/criticalthinking/accessible.php" title="Curvy Laugh" target="_blank">
      <img src="images/work/critThinking-before.jpg" />
    <p>Before</p></a>
  </div><!--end of homeTile-->

  <div id="homeTile">
    <a href="http://apps-dev.ctl.utexas.edu/criticalthinking/accessible.php" title="Curvy Laugh" target="_blank">
      <img src="images/work/critThinking-after.jpg" />
    <p>After</p></a>
  </div><!--end of homeTile-->
  <p class="clear">I did the CSS styling and a little bit of PHP for this site. It was origonally created in Flash, and very little thought was put into the html version. Since Flash is no longer so widely supported, people were running into the unstyled back up site. I fixed this so that backup site looks presentable.</p>
  <br/>
</div>

</div><!--end of abouttext-->

<?php
include("footer.php"); // include footer content
?>