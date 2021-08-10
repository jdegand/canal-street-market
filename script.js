/*
$(".panel").click(function() {
  	$('.panel').removeClass("active"); 
  	$(this).toggleClass("active");   
});

$(".panel.active").click(function() {  	$(this).removeClass("active"); 
});

$(document).ready(function( $ ) {
  $( ".home" ).first().addClass( "active" );
});
 */

document.querySelectorAll('.panel').forEach(x => x.addEventListener('click', ()=> {
      document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
      x.classList.add('active');

      if(document.querySelector('.one').classList.contains('active')){
       document.querySelector('.dynamic').innerHTML = `
       <div class="hours">
        <div>Food Hall Hours:<br>
        Mon – Sat: 11:00AM - 6:00PM<br>
        Sun: 11:00AM - 6:00PM<br>
        </div>
       </div>
       <div class="flex food-hall-container">
        <h1 class="food-hall">The Food Hall</h1>
        <div class="food-img"></div>
       </div>

        <div class="menu-grid">
          <div>
            <div>Korean Meets Mexican</div>
            <div>Azumma</div>
          </div>
          <div>
            <div>Next Level Boba Milk Tea</div>
            <div>Boba Guys</div>
          </div>
          <div>
            <div>Artisan Bakery</div>
            <div>Domi</div>
          </div>
          <div>
            <div>Japanese Kitchen</div>
            <div>Izakaya Samurice</div>
          </div>
          <div class="img-hover">
            <div class="bold">Cantonese Steamed Rice Rolls</div>
            <div>Joe's Steam Rice Roll</div>
            <img class="rice-roll-img" src="./luigi-pozzoli-sl5exRJYXuI-unsplash.jpg" alt="">
          </div>
          <div>
            <div>Ramen by Ippudo</div>
            <div>Kuro-Obi</div>
          </div>
          <div>
            <div>New Peruvian Cuisine</div>
            <div>Mission Ceviche</div>
          </div>
          <div>
            <div>Coffee, Pastries & Smoothies</div>
            <div>Office Coffee</div>
          </div>
          <div>
            <div>Michelin Rated Katsu</div>
            <div>Suki</div>
          </div>
          <div>
            <div>Chef Inspired Salads</div>
            <div>fresh&co</div>
          </div>   
          <div>
            <div>Inspired Mediterranean</div>
            <div>ilili BOX</div>
          </div>

        </div>


       <div class="happy-hour border">
          <h3>Happy Hour</h3>
          <p>Every Weekday, 5 - 7PM $4 Beer & $7<br> 
            Wine Come Hang With Us! **** Tappy<br>
           Tuesday Pay with Apple Pay and receive 20% off<br>
            *Beer and Wine excluded*</p>
        </div>
       
        <div class="cta border">
          <h4 class="vendor">Interested in becoming a vendor?</h4>
          <button class="cta-btn">click here</button>
        </div>

        <div class="flex contacts">
          <div class="border-small">
            <img src="pencil.svg" alt="">
            <h5>Email us</h5>
          </div>

          <div class="border-small">
            <img src="facebook.svg" alt="">
            <h5>Follow us on Facebook</h5>
          </div>

          <div class="border-small">
            <img src="pencil.svg" alt="">
            <h5>Follow us on Instagram</h5>
          </div>
        </div>

        <div class="flex newsletter border">
          <div>
            <p>Stay up to date</p>
            <p>with our newsletter</p>
          </div>
          <div>
            <input class="email-input" type="email" placeholder="Email">
          </div>
        </div>

        <footer class="footer">
          <div class="left-footer">
            <span>Copyright Canal Street Market 2019</span>
            <a class="left-link" href="https://canalstreet.market/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a class="left-link" href="https://canal-street-dashboard.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Vendor Login</a>
          </div>
          <div class="right-footer">
            <a class="right-link" href="https://zero.nyc/" target="_blank" rel="noopener noreferrer">Site By <span class="zero">Zero</span></a>
          </div>
        </footer>
        <div class="unsplash">Photo by <a href="https://unsplash.com/@lu_pl_ph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luigi Pozzoli</a> on <a href="https://unsplash.com/s/photos/rice-roll?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>`;
      } else {
        document.querySelector('.dynamic').innerHTML = '';
      }


      if(document.querySelector('.two').classList.contains('active')){
        document.querySelector('.retail-dynamic').innerHTML = `
        <div class="hours">
         <div>Retail Market Hours:<br>
         Mon – Sat: 8:00AM - 3:00PM<br>
         Sun: 9:00AM - 3:00PM<br>
         </div>
        </div>
        <div class="flex food-hall-container">
         <h1 class="food-hall">The Retail Market</h1>
         <div class="food-img"></div>
        </div>
 
         <div class="menu-grid">
           <div>
             <div>Design Objects</div>
             <div>American Design Club</div>
           </div>
           <div>
             <div>Jewelry</div>
             <div>Beeshaus & Raum NYC</div>
           </div>
           <div>
             <div>Jewelry</div>
             <div>Beroep Tech</div>
           </div>
           <div>
             <div>Bonsai Shop</div>
             <div>Dandy Farmer Bonsai Shop</div>
           </div>
           <div>
             <div>Fashion Apparel</div>
             <div>Friend Of A Friend Studio</div>
           </div>
           <div>
             <div>Design Objects</div>
             <div>Leibal</div>
           </div>
           <div>
             <div>K Pop Apparel and Merchandise</div>
             <div>Mandu Apparel</div>
           </div>
           <div>
             <div>Home Goods</div>
             <div>Mogutable</div>
           </div>
           <div>
             <div>Newstand and Magazines</div>
             <div>Office Magazine Newstand</div>
           </div>
           <div>
             <div>Fashion Apparel</div>
             <div>Preppy Trendy</div>
           </div>
           <div>
             <div>Sunglasses</div>
             <div>Savage Anchor</div>
           </div>
           <div>
            <div>Jewelry</div>
            <div>Seven 50</div>
           </div>
           <div>
            <div>Sustainable lifestyle store</div>
            <div>Siizu</div>
          </div>
          <div>
            <div>Jewelry</div>
            <div>Swagychic</div>
         </div>
         <div>
          <div>Jewelry</div>
          <div>Tissi</div>
        </div>
 
         </div>
 
         
        <div class="happy-hour border">
           <h3>The Best of NYC</h3>
           <div>All under one roof</div>
         </div>
        
         <div class="cta border">
           <h4 class="vendor">Interested in becoming a vendor?</h4>
           <button class="cta-btn">click here</button>
         </div>
 
         <div class="flex contacts">
           <div class="border-small">
             <img src="pencil.svg" alt="">
             <h5>Email us</h5>
           </div>
 
           <div class="border-small">
             <img src="facebook.svg" alt="">
             <h5>Follow us on Facebook</h5>
           </div>
 
           <div class="border-small">
             <img src="pencil.svg" alt="">
             <h5>Follow us on Instagram</h5>
           </div>
         </div>
 
         <div class="flex newsletter border">
           <div>
             <p>Stay up to date</p>
             <p>with our newsletter</p>
           </div>
           <div>
             <input class="email-input" type="email" placeholder="Email">
           </div>
         </div>
 
         <footer class="footer">
           <div class="left-footer">
             <span>Copyright Canal Street Market 2019</span>
             <a class="left-link" href="https://canalstreet.market/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
             <a class="left-link" href="https://canal-street-dashboard.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Vendor Login</a>
           </div>
           <div class="right-footer">
             <a class="right-link" href="https://zero.nyc/" target="_blank" rel="noopener noreferrer">Site By <span class="zero">Zero</span></a>
           </div>
         </footer>`;
       } else {
         document.querySelector('.retail-dynamic').innerHTML = '';
       }



       if(document.querySelector('.three').classList.contains('active')){
        document.querySelector('.community-dynamic').innerHTML = `
        <div class="hours">
         <div>Our mixed-use space hosts<br>
         ongoing events, podcasts<br>
         & artists in residence<br>
         </div>
        </div>
        <div class="flex food-hall-container">
         <h1 class="community">Canal St. Community</h1>
         <div class="food-img"></div>
        </div>
 
         <div class="menu-grid">
           <div>
             <div>Design Objects</div>
             <div>American Design Club</div>
           </div>
           <div>
             <div>Jewelry</div>
             <div>Beeshaus & Raum NYC</div>
           </div>
           <div>
             <div>Jewelry</div>
             <div>Beroep Tech</div>
           </div>
           <div>
             <div>Bonsai Shop</div>
             <div>Dandy Farmer Bonsai Shop</div>
           </div>
           <div>
             <div>Fashion Apparel</div>
             <div>Friend Of A Friend Studio</div>
           </div>
           <div>
             <div>Design Objects</div>
             <div>Leibal</div>
           </div>
 
           <div>
             <div>K Pop Apparel and Merchandise</div>
             <div>Mandu Apparel</div>
           </div>
 
           <div>
             <div>Home Goods</div>
             <div>Mogutable</div>
           </div>
 
           <div>
             <div>Newstand and Magazines</div>
             <div>Office Magazine Newstand</div>
           </div>

           <div>
             <div>Fashion Apparel</div>
             <div>Preppy Trendy</div>
           </div>
             
           <div>
             <div>Sunglasses</div>
             <div>Savage Anchor</div>
           </div>

           <div>
            <div>Jewelry</div>
            <div>Seven 50</div>
           </div>

           <div>
            <div>Sustainable lifestyle store</div>
            <div>Siizu</div>
          </div>

          <div>
            <div>Jewelry</div>
            <div>Swagychic</div>
         </div>

         <div>
          <div>Jewelry</div>
          <div>Tissi</div>
        </div>
 
         </div>
 
         
        <div class="happy-hour border">
           <h3>The Best of NYC</h3>
           <div>All under one roof</div>
         </div>
        
         <div class="cta border">
           <h4 class="vendor">Interested in becoming a vendor?</h4>
           <button class="cta-btn">click here</button>
         </div>
 
         <div class="flex contacts">
           <div class="border-small">
             <img src="pencil.svg" alt="">
             <h5>Email us</h5>
           </div>
 
           <div class="border-small">
             <img src="facebook.svg" alt="">
             <h5>Follow us on Facebook</h5>
           </div>
 
           <div class="border-small">
             <img src="pencil.svg" alt="">
             <h5>Follow us on Instagram</h5>
           </div>
         </div>
 
         <div class="flex newsletter border">
           <div>
             <p>Stay up to date</p>
             <p>with our newsletter</p>
           </div>
           <div>
             <input class="email-input" type="email" placeholder="Email">
           </div>
         </div>
 
         <footer class="footer">
           <div class="left-footer">
             <span>Copyright Canal Street Market 2019</span>
             <a class="left-link" href="https://canalstreet.market/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
             <a class="left-link" href="https://canal-street-dashboard.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Vendor Login</a>
           </div>
           <div class="right-footer">
             <a class="right-link" href="https://zero.nyc/" target="_blank" rel="noopener noreferrer">Site By <span class="zero">Zero</span></a>
           </div>
         </footer>`;
       } else {
         document.querySelector('.community-dynamic').innerHTML = '';
       }



}))

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.home').classList.add('active');
});


//const logoPosition = logo.offsetTop;

document.querySelector('.outer').addEventListener('scroll', () => {
  const logo = document.querySelector('.logo');
  logo.classList.add('sticky');
});