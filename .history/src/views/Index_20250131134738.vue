<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <i class="bi bi-box-seam fs-2 text-primary me-2"></i>
            <span class="fw-bold">FastCourier</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="d-flex align-items-center gap-5">
                <ul class="navbar-nav ms-auto">
                    <li><small class="text-uppercase"><a class="nav-link" href="#">home</a></small></li>
                    <li><small class="text-uppercase"><a class="nav-link" href="#">services</a></small></li>
                    <li><small class="text-uppercase"><a class="nav-link" href="#">about us</a></small></li>
                    <li><small class="text-uppercase"><a class="nav-link" href="#">contact</a></small></li>
                </ul>
                <div>
                    button.btn.btn-sm.btn-outline-primary
                </div>
            </div>
          </div>
        </div>
      </nav>
  
      <div class="content-wrapper">
        <!-- Hero Carousel Section -->
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- <div class="carousel-item active">
              <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" class="d-block w-100" style="height: 600px; object-fit: cover;" alt="Delivery">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">Fast & Reliable Courier Services</h1>
                <p class="lead">We deliver your packages safely and on time, every time.</p>
                <button class="btn btn-primary btn-lg">Get a Quote</button>
              </div>
            </div> -->
            <div class="carousel-item active">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" class="d-block w-100" style="height: 600px; object-fit: cover;" alt="Logistics">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">Nationwide Coverage</h1>
                <p class="lead">Reaching every corner of the country with our delivery network.</p>
                <button class="btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  
        <!-- Services Section -->
        <div class="my-5">
          <h2 class="text-center mb-4">Our Services</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-truck fs-1 text-primary mb-3"></i>
                  <h5 class="card-title">Same Day Delivery</h5>
                  <p class="card-text">Get your packages delivered within hours in the same city.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-globe fs-1 text-primary mb-3"></i>
                  <h5 class="card-title">Nationwide Shipping</h5>
                  <p class="card-text">Reliable delivery services across the country.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-shield-check fs-1 text-primary mb-3"></i>
                  <h5 class="card-title">Secure Handling</h5>
                  <p class="card-text">Your packages are handled with utmost care and security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Delivery Calculator -->
        <div class="calculator-section my-5 py-4 bg-light rounded">
          <h2 class="text-center mb-4">Calculate Delivery Cost</h2>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="row g-3">
                <div class="col-md-5">
                  <select v-model="pickup" class="form-select">
                    <option value="" disabled selected>Select Pickup Location</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="mombasa">Mombasa</option>
                    <option value="kisumu">Kisumu</option>
                    <option value="nakuru">Nakuru</option>
                    <option value="eldoret">Eldoret</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <select v-model="destination" class="form-select">
                    <option value="" disabled selected>Select Destination</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="mombasa">Mombasa</option>
                    <option value="kisumu">Kisumu</option>
                    <option value="nakuru">Nakuru</option>
                    <option value="eldoret">Eldoret</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <button @click="calculatePrice" class="btn btn-primary w-100">Calculate</button>
                </div>
              </div>
              <div v-if="price" class="mt-4 text-center">
                <h4>Estimated Cost: KES {{ price }}</h4>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Reviews Section -->
        <div class="reviews-section my-5 py-5">
          <h2 class="text-center mb-5">What Our Customers Say</h2>
          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-image">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe">
              </div>
              <h5 class="mt-3">John Doe</h5>
              <p class="text-muted mb-2">Business Owner</p>
              <div class="rating mb-2">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <p>"FastCourier has been instrumental in growing my business."</p>
            </div>
  
            <div class="review-card">
              <div class="review-image">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Smith">
              </div>
              <h5 class="mt-3">Sarah Smith</h5>
              <p class="text-muted mb-2">Online Seller</p>
              <div class="rating mb-2">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
              </div>
              <p>"Their prices are competitive and service exceptional!"</p>
            </div>
  
            <div class="review-card">
              <div class="review-image">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Mike Johnson">
              </div>
              <h5 class="mt-3">Mike Johnson</h5>
              <p class="text-muted mb-2">Regular Customer</p>
              <div class="rating mb-2">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <p>"Best courier service I've ever used!"</p>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <footer class="bg-dark text-light py-4 mt-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h5>Contact Us</h5>
                <p>Email: info@courier.com<br>
                   Phone: +254 700 000 000</p>
              </div>
              <div class="col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li><a href="#" class="text-light">About Us</a></li>
                  <li><a href="#" class="text-light">Services</a></li>
                  <li><a href="#" class="text-light">Track Package</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5>Follow Us</h5>
                <div class="fs-4">
                  <i class="bi bi-facebook me-3"></i>
                  <i class="bi bi-twitter me-3"></i>
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <small>&copy; 2025 Courier Services. All rights reserved.</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Index',
    data() {
      return {
        pickup: '',
        destination: '',
        price: null
      }
    },
    methods: {
      calculatePrice() {
        if (this.pickup && this.destination) {
          // Generate a random price between 1000 and 5000
          this.price = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  button{
    border-radius: 0 !important;
  }
  .container {
      width: 100vw;
      max-width: 1500px;
      margin: auto;
  }
  
  .content-wrapper {
      margin-top: 76px;
  }
  
  .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 10px;
  }
  
  .card {
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      perspective: 1000px;
  }
  
  .review-card {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s;
      transform-style: preserve-3d;
  }
  
  .review-card:hover {
      transform: translateZ(20px) rotateX(5deg);
  }
  
  .review-image {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #007bff;
  }
  
  .review-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  
  .rating {
      font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
      .reviews-grid {
          grid-template-columns: 1fr;
      }
  }
  </style>