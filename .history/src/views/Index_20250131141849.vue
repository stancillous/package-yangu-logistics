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
              <ul class="navbar-nav ms-auto">
                  <li><small class="text-uppercase"><a class="nav-link" href="#">home</a></small></li>
                  <li><small class="text-uppercase"><a class="nav-link" href="#">services</a></small></li>
                  <li><small class="text-uppercase"><a class="nav-link" href="#">about us</a></small></li>
                  <li><small class="text-uppercase"><a class="nav-link" href="#">news</a></small></li>
              </ul>
              <div class="ms-5">
                  <button class="btn btn-sm btn-outline-primary">CONTACT US</button>
              </div>
          </div>
        </div>
      </nav>
  
      <div class="content-wrapper">
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="fw-bold  display-4">Seamless Shipping, <br> Unmatched Care</h1>
                <p class="card-text">Delivering Convenience with Every Shipment. Enjoy smooth logistics and outstanding customer service backed by our commitment to excellence.</p>
                <button class="btn btn-sm btn-light px-4 py-2 text-primary">Get Started</button>
            </div>
        </div>
        
        
        <!-- Services Section -->
        <div style="padding-top: 700px;" class="section-wrp">
            <small class="text-muted text-uppercase d-inline-block mb-">our Services</small>
          <h2 class="fw-bold display-6 mb-4 text-muted">We Provide Timely and <br> Cost-Effective Service</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <!-- <i class="bi bi-truck fs-1 text-primary mb-3"></i> -->
                  <h5 class="card-title">Deliveries on Schedule</h5>
                  <p class="card-text text-muted">Our logistics services are meticulously designed for prompt and timely deliveries. We prioritize your schedule, ensuring that your shipments reach their destination</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <!-- <i class="bi bi-globe fs-1 text-primary mb-3"></i> -->
                  <h5 class="card-title">Budget-Friendly Solutions</h5>
                  <p class="card-text text-muted">Cost-effectiveness is at the core of our service philosophy. Benefit from our competitive rates and transparent pricing structures that help you optimize your logistics expenses</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <!-- <i class="bi bi-shield-check fs-1 text-primary mb-3"></i> -->
                  <h5 class="card-title">Reliability You Can Trust</h5>
                  <p class="card-text text-muted">When you choose us, you choose reliability. Our commitment to handling your shipments with precision and care is unwavering. Rest easy knowing that your goods are in safe hands.</p>
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

.container {
      width: 100vw;
      max-width: 1500px;
      margin: auto;
  }

  .section-wrp{
    max-width: 1000px;
    margin: 1rem auto;
  }

.hero-section {
    position: absolute;
    left: 0;
  width: 100vw;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec');
  background-size: cover;
  background-position: center;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: left;
  padding: 0 1rem;
}



  
  .content-wrapper {
      margin-top: 76px;
  }
  
  
  .card {
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    p{
        line-height: 160%;
    }
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