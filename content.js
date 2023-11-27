//$('#content').load('commonContent.html');

window.onload = (event) => {

    document.getElementById("header").innerHTML=`
<a class="logo" href="index.html" target="_self">
<div class="logo-image"></div>
<div class="marque"></div>
</a>
<div class="menu">
<a href="index.html#services" target="_self">SERVICES</a>
<a href="article.html" target="_self">POV</a>
<a href="a-propos.html" target="_self">ABOUT</a>
</div>`;

document.getElementById("footer").innerHTML=`
<div class="footercontent">
<div class="logo2">
  <div class="logo-image"
  iv>
</div>
<div class="termes-et-conditions-container">
<p class="termes-et-conditions">
    <a href="termes-et-conditions.html" target="_self">Termes et conditions</a>
</p>
<p class="termes-et-conditions">
    <a href="politique-de-confidentialite.html" target="_self">Politique de confidentialité</a>
</p>
</div>
</div>
<div class="taïqo-droits">
tous droits réservés 2023
</div>`;

}; 

