function container(){
    return `<div id="head">Limited Time! Join PC Perks For FREE + Save 10% On Every Order  <span> LEARN MORE</span></div>`
}
function navbar(){
    return ` <div> <a href="/consultant.html">FIND A CONSULTANT</a></div>
    <div id="rf"> <a href="/index.html">RODAN + FIELDS</a></div>
    <div id="login">
      <div> <input type="text" placeholder="Search"><span id="icon"><i class="fa-solid fa-magnifying-glass"></i></span> </div>
    <div id="signUp">
    <div id="signIn">
    <p>Sign in <span><i class="fa-solid fa-user"></i></span></p>

    <form id="form">
    <label for="email">Email</label>
    <br>
    <input type="email" id="email" for="email" >
    <br>
   <br>
    <div id="pas">
    <div>
    Password
    </div>
    <div>
    <a id="fp" href="#">Forgot Password?</a>
    </div>
    </div>
    <input type="password" id="password">
    <br>
    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    <input type="submit" value="SIGN IN" id="btn">
</form>
    </div>
    
    <div>
    </div>
    </div>
     <div>
     <a href="/cart.html" id="cart" ><i class="fa-solid fa-bag-shopping"></i></a>
     </div>
     
     </div>
     
     <select  id="lang">
      <option value="">English</option>
      <option value="">United States (English)</option>
      <option value="">Estados Unidos (Español)</option>
      <option value="">Canada (English)</option>
     </select>
    </div>`
}
function navbar1(){
    return ` <div id="main">
    <div id="shop">
    <div>SHOP</div>
<div id="showF">
    <div id="show_flex">
    <div class="shopC">
      <h3>SHOP BY CATEGORY</h3>
      <p>Regimens</p>
      <p>Face Serums</p>
      <p>Eyes, Lips & Lashes</p>
      <p>Face Masks</p>
      <p>Dermacosmetics</p>
      <p>Hand & Body</p>
      <p>Sun Protection</p>
      <p>Pro Skincare Tools</p>
      <p>Accessories</p>
      <p>Special Offers</p>
    </div>
    <div class="shopC">
    <h3>SHOP BY CONCERN</h3>
    <p>Fine Lines & Deep Wrinkles</p>
    <p>Lifting & Firming</p>
    <p>Dull & Tired Skin</p>
    <p>Acne & Breakouts</p>
    <p>Teen Acne</p>
    <p>Uneven Tone & Brown Spots</p>
    <p>Sensitivity/Visible Redness</p>
    <p>Pores & Blackheads</p>
    <p>Dry Skin</p>
    </div>
    <div class="shopC">
    <h3>SHOP BY PRODUCT LINE</h3>
    <p>Redefine</p>
    <p>Reverse</p>
    <p>Recharge</p>
    <p>Unblemish</p>
    <p>Spotless</p>
    <p>Soothe</p>
    <p>Enhancements</p>
    <p>Essentials</p>
    <p>Dermacosmetics</p>
    <p>Pro Skincare Tools</p>
    <p>All Products</p>
    </div></div>
    </div>
    
    </div>
    <div>BEST SELLERS</div>
    <div id="featured">
    FEATURED
    
    <div id="infeat">
      <p>Special Offers</p>
     <p>Before and Afters</p>
     <p> New Total RF Serum</p>
     <p>Spotless for Teens</p>
     <p>Self-Care Essentials</p>
    </div>
    </div>
    <div id="story">OUR STORY
    <div id="instory">
    <p>R+F Difference</p>
     <p>Personalized Service</p>
     <p> Explore Our Regimens</p>
     <p>Our Founders</p>
     <p>Our Impacts</p>
    </div>
    </div>
    <div>PERKS PROGRAM</div>
    <div>BECOME A CONSULTANT</div>
    <div>BLOG</div>
</div>`
}
function footer(){
    return ` <div>
    <h3>ABOUT R+F</h3>
    <p>PRESS ROOM</p>
    <p>COMPANY INFO</p>
    <p>EXECUTIVE TEAM</p>
    <p>CAREERS</p>
    <p>R+F RECYCLING PROGRAM</p>
    <p>BLOG</p>
  </div>
  <div>
    <h3>HELP</h3>
    <p>PRODUCT & HELP CENTER</p>
    <p>SHIPPING</p>
    <p>SATISFACTION GUARANTEE</p>
    <p>PROMOTIONAL TERMS & CONDITIONS</p>
    <p>R+F FAQS</p>
    <p>KLARNA</p>
    <p>SITE MAP</p>
  </div>
  <div>
    <p id="fh1">Let’s Get Social</p>
    <br>
    <div id="f_icon">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-pinterest-p"></i>
    </div>
  </div>`
}
function footer2(){
    return ` <div> © 2022 Rodan & Fields </div>
    <div> Privacy Policy</div>
    <div>|</div>
    <div>Terms & Conditions</div>
    <div>|</div>
    <div> Accessibility </div>
    <div>|</div>
    <div>California Supply Chains Act </div>
    <div>|</div>
    <div> DSA Code Of Ethics</div>
    <div>|</div>
    <div> Disclaimer </div>
    <div>|</div>
     <div> Preference Center</div>`
}
export {container,navbar,navbar1,footer,footer2};