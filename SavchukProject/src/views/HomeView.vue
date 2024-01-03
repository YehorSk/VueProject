<style scoped>
@import "/css/style.css";
@import "/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";
</style>
<template>
  <header>
    <nav>
      <h1 class="logo">Crypto</h1>
      <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#learn-section">What you'll learn</a></li>
        <li><a href="#crypto-section">Crypto</a></li>
        <li><a href="#testimonial-section">Testimonial</a></li>
        <li><a href="#price-section">Prices</a></li>
        <li><a href="#faq-section">FAQ</a></li>
      </ul>
      <div></div>
      <div class="burger-menu" ><i class="fa-solid fa-bars" ></i></div>
    </nav>
  </header>
  <section class="main" id="home">
    <div class="intro">

      <h1>Make your first step</h1>
      <h2>And discover a whole new world</h2>
      <router-link
          to="/course">Start learning
      </router-link>

    </div>
  </section>
  <section class="crypto" id="learn-section">
    <h1 class="name">What you'll learn</h1>
    <div class="item">
      <img src="/img/wallets.png" alt="" id="crypto-img">
      <div class="present">
        <ul id="btns">
          <li><button class="btn active dontHover" id="wallets">Wallets</button> </li>
          <li><button class="btn" id="mining">Mining</button> </li>
          <li><button class="btn" id="portfolio">Portfolio</button> </li>
          <li><button class="btn" id="trade">Trade</button> </li>

        </ul>
        <div class="text">
          <h1 id="crypto-name">Wallets</h1>
          <p id="crypto-text">Know about 4 types of wallets and how to secure your crypto currency investments</p>
        </div>
      </div>
    </div>
  </section>
  <section class="crypto-prices" id="crypto-section">
    <h1 class="name">Crypto Prices</h1>
    <div class="container-fluid my-5">
      <div class="row">

      </div>
    </div>
  </section>
  <section class="testimonial-section" id="testimonial-section">
    <h1 class="name grid-span-3">Testimonials</h1>
    <article class="testimonial bg-one grid-span-2">
      <div class="flex">
        <div>
          <img  src="/img/image-daniel.jpg" alt="daniel clifford">
        </div>
        <div>
          <h2 class="name">Amjad I.</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        An excellent introduction in the cryptology world. This training is very good for people which do not have knowledge about cryptocurrencies,
        but they are willing to learn if they want to invest.
      </p>

    </article>
    <article class="testimonial bg-two">
      <div class="flex">
        <div>
          <img  src="/img/image-jonathan.jpg" alt="daniel clifford">
        </div>
        <div>
          <h2 class="name">Massimo T.</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        Easy to understand the way of speaking as I am non English native user and
        the clear outlook which helps me understand the roadmap of the course.
      </p>

    </article>
    <article class="testimonial bg-three">
      <div class="flex">
        <div>
          <img  src="/img/image-patrick.jpg" alt="daniel clifford">
        </div>
        <div>
          <h2 class="name">marco M.</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        Amazing teacher , funny , super smart guy .
        thank you so much for that class i love it . hello from canada brother
        just buy that class it worth every penny. 100%
      </p>

    </article>
    <article class="testimonial bg-four grid-span-2">
      <div class="flex">
        <div>
          <img  src="/img/image-daniel.jpg" alt="daniel clifford">
        </div>
        <div>
          <h2 class="name">Ron H.</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        Very professional thorough coverage of cryptocurrency considerations, investing, mining. Bonus material showing
        how the great spreadsheet was built and the programming logic behind it was very interesting and well explained.
      </p>

    </article>
  </section>
  <section class="course-price" id="price-section">
    <h1 class="name">Course PRICELIST</h1>
    <div class="table-price">
      <table>
        <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Investing</th>
          <th scope="col">Mining</th>
          <th scope="col">Portfolio</th>
          <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row" data-label="Course">COMPLETE COURSE </td>
          <td data-label="Investing">+</td>
          <td data-label="Mining">+</td>
          <td data-label="Portfolio">+</td>
          <td data-label="Portfolio">40$</td>
        </tr>
        <tr>
          <td scope="row" data-label="Course">CRYPTOCURRENCY INVESTING </td>
          <td data-label="Investing">+</td>
          <td data-label="Mining">-</td>
          <td data-label="Portfolio">-</td>
          <td data-label="Portfolio">20$</td>
        </tr>
        <tr>
          <td scope="row" data-label="Course">CRYPTOCURRENCY MINING </td>
          <td data-label="Investing">-</td>
          <td data-label="Mining">+</td>
          <td data-label="Portfolio">-</td>
          <td data-label="Portfolio">15$</td>
        </tr>
        <tr>
          <td scope="row" data-label="Course">CRYPTOCURRENCY PORTFOLIO </td>
          <td data-label="Investing">-</td>
          <td data-label="Mining">-</td>
          <td data-label="Portfolio">+</td>
          <td data-label="Portfolio">20$</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="FAQ" id="faq-section">
    <h1 class="name">FAQ</h1>
    <div class="accordion">
      <div class="content">
        <div class="head">
          <h1>Who this course is for?</h1><i class="fa-solid fa-plus"></i>
        </div>
        <div class="text">
          <p>If you are serious about Making Money Online by investing in the Cryptocurrency Market, this course is for you!</p>
        </div>
      </div>
      <div class="content">
        <div class="head">
          <h1>What exactly will you teach me?</h1><i class="fa-solid fa-plus"></i>
        </div>
        <div class="text">
          <p>I’ll teach you exactly what to invest in, when to buy, when to sell, and most importantly teach you my best technical analysis techniques that can help you predict the next market move in less than 15 minutes with high-accuracy (and you’ll learn with dozens of real world examples).</p>
        </div>
      </div>
    </div>
  </section>
  <div class="cookies-container">
    <p>Our website uses cookies to improve your experience.</p>
    <button class="cookie-btn">Okay</button>
  </div>
  <footer>
    <div class="logo">
      <h1>Crypto</h1>
    </div>
    <div class="foot-main">
      <div class="info">
        <span class="important">About Us</span>
        <p>By an Award Winning MBA professor who is a top selling online business teacher, top selling author, former Goldman Sachs employee,
          Columbia MBA (finance major) and venture capitalist who has invested in and sat on the boards of cryptocurrency companies since 2013 and a hedge fund industry veteran and founder.
          He is also the author of the #1 best selling business course on Udemy. </p>
      </div>
      <div class="links">
        <span class="important">Links</span>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#learn-section">What you'll learn</a></li>
          <li><a href="#crypto-section">Crypto</a></li>
          <li><a href="#testimonial-section">Testimonial</a></li>
          <li><a href="#price-section">Prices</a></li>
          <li><a href="#faq-section">FAQ</a></li>
          <li><a href="#questions-section">Contact Us</a></li>
        </ul>
      </div>
    </div>

  </footer>

</template>
<script setup>
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://kit.fontawesome.com/b3db48d41c.js";
</script>


