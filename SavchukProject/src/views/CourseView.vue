<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "/css/styles.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

@import "/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";
</style>


<template>
  <header class="header">
    <div class="header__container">
      <router-link
          to="/">
        <a href="#" class="header__logo">CRYPTO</a>
      </router-link>

      <div class="header__search"></div>
      <div class="header__toggle">
        <i class="fas fa-bars" id="header-toggle"></i>
      </div>
    </div>
  </header>

  <div class="nav" id="navbar">
    <nav class="nav__container">
      <div>
        <a href="index.html" class="nav__link nav__logo">
          <i class='bx bx-bitcoin' ></i>
          <span class="nav__logo-name">CRYPTO</span>
        </a>
        <div class="nav__list">
          <div class="nav__items">
            <a href="index.html" class="nav__link active">
              <i class="fas fa-home"></i>
              <span class="nav__name">Home</span>
            </a>
          </div>
          <div class="nav__link active">
            <i class="fa fa-caret-down"></i><span class="nav__name">Section Title</span>
          </div>
          <a href="#" class="nav__dropdown-item" id="les1-1">
            <i class="fa fa-long-arrow-right"></i> Lesson Title 1
          </a>
          <a href="#" class="nav__dropdown-item" id="les1-2">
            <i class="fa fa-long-arrow-right"></i> Lesson Title 2
          </a>

          <a href="#" class="nav__link active">
            <i class="fas fa-phone"></i>
            <span class="nav__name">Contact us</span>
          </a>
          <a href="#" class="nav__link active">
            <i class="fas fa-pencil"></i>
            <span class="nav__name">Notes</span>
          </a>
          <!-- Other navigation items go here -->
        </div>
        <!-- End of nav__list -->
      </div>
      <!-- End of nav__container -->
    </nav>
  </div>

  <main>
    <section>
      <div class="videoWrapper">
        <!-- Video iframe code goes here -->
      </div>
    </section>

    <div class="lesson-overview">
      <div class="overview">
        <p>Overview</p>
      </div>
      <div class="description"><p>About this lesson</p></div>
      <!-- Lesson description and content go here -->
    </div>

    <!-- Comments section goes here -->
  </main>
</template>

<script>
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
</script>