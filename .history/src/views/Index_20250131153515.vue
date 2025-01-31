<template>
    <div class="m-0 p-0">
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
              <div class="m">
                  <button class="btn btn-sm btn-outline-primary">CONTACT US</button>
              </div>
          </div>
        </div>
      </nav>
  
      <div class="content-wrapper">
        <div class="hero-section">
            <div class="hero-content section-wrp">
                <h1 class="fw-bold display-4">Seamless Shipping, <br> Unmatched Care</h1>
                <p class="card-text">Delivering Convenience with Every Shipment. Enjoy smooth logistics and outstanding customer service backed by our commitment to excellence.</p>
                <button class="btn btn-sm btn-light px-4 py-2 text-primary">Get Started</button>
            </div>
        </div>
        
        
        <!-- Services Section -->
        <div style="padding-top: 700px;" class="section-wrp">
            <small class="text-muted text-uppercase d-inline-block mb-2">our Services</small>
          <h2 class="fw-bold display-6 mb-4 text-muted">We Provide Timely and <br> Cost-Effective Service</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">On-Time, Every Time</h5>
                    <p class="card-text text-muted">Our logistics solutions are tailored for reliability and efficiency, ensuring your shipments arrive punctually, every time.</p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Affordable & Efficient</h5>
                    <p class="card-text text-muted">We prioritize cost-effective solutions with competitive rates and transparent pricing, helping you streamline your logistics expenses.</p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Dependable Every Step</h5>
                    <p class="card-text text-muted">Trust us to handle your shipments with precision and care. With our unwavering commitment to reliability, your goods are always in safe hands.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- why choose us -->
        <div class="why-choose-us my-5 text-light p-4" style="background-color: #0e1b24;">
            <div class="section-wrp">
                <div class="row mb-4">
                    <div class="col-lg-5">
                        <small class="text-uppercase d-inline-block mb-2">why choose us?</small>
                        <h2 class="fw-bold display-6 mb-4">We understand that every business has unique logistics needs</h2>
                        <button class="btn btn-primary btn-sm px-4 py-2 t">Get a quote</button>
                    </div>
                    <div class="col-lg-7">
                        <div class="features-grid">
                            <div v-for="(item, index) in whyChooseUsOptions" :key="index" class="feature-item p-4">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="pe-5 border-end">
                                        <h1>{{ index + 1 }}</h1>
                                    </div>
                                    <div>
                                        <h5>{{ item.title }}</h5>
                                        <p class="card-text" style="opacity: .8">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-5" style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                    <div class="col md-6">
                        <div>
                            <small class="text-uppercase d-inline-block mb-2">calculate delivery cost</small>
                            <h2 class="fw-bold display-6 mb-4">Calculate delivery cost</h2>

                            <div class="my-2">
                              <select v-model="pickup" class="form-select">
                                <option value="" disabled selected>Select Pickup Location</option>
                                <option value="nairobi">Nairobi</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="nakuru">Nakuru</option>
                                <option value="eldoret">Eldoret</option>
                              </select>
                            </div>
                            <div class="my-2">
                              <select v-model="destination" class="form-select">
                                <option value="" disabled selected>Select Destination</option>
                                <option value="nairobi">Nairobi</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="nakuru">Nakuru</option>
                                <option value="eldoret">Eldoret</option>
                              </select>
                            </div>
                            <div class="mt-4">
                              <button @click="calculatePrice" class="btn btn-primary w-100">Calculate</button>
                            </div>

                        </div>
                    </div>
                    <div class="col md-6">
                        <div>
                            <img src="https://media.istockphoto.com/id/1297286360/vector/kenya-communication-network-map-vector-low-poly-image-of-a-global-map-with-lights-in-the.jpg?s=612x612&w=is&k=20&c=Ra4iAaFZ95wdImxKhZVyXTaZnAUYhO8aypKYpuys5jg=" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Reviews Section -->
        <div class="reviews-section my-5 py-5">
          <div class="section-wrp">
            <small class="text-muted text-uppercase d-inline-block mb-2">testimonials</small>
            <h2 class="fw-bold display-6 mb-5">What Our Customers Say</h2>
            
            <div class="reviews-container position-relative">
              <div class="reviews-grid row">
                <TransitionGroup name="review-transition">
                  <div v-for="review in visibleReviews" :key="review.id" class="review-card col-md-6">
                    <div class="review-image">
                      <img :src="review.image" :alt="review.name">
                    </div>
                    <h6 class="mt-3">~{{ review.name }}</h6>
                    <p class="text-muted mb-2">{{ review.role }}</p>
                    <p>"{{ review.comment }}"</p>
                  </div>
                </TransitionGroup>
              </div>

              <button @click="prevPage" 
                      :disabled="currentPage === 0"
                      class="nav-btn prev-btn">
                <i class="bi bi-chevron-left"></i>
              </button>
              <button @click="nextPage" 
                      :disabled="currentPage >= Math.ceil(reviews.length / itemsPerPage) - 1"
                      class="nav-btn next-btn">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <footer class="bg-dark text-light py-5 mt-5">
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
  
  <script setup>
  import { ref, computed } from 'vue';

  const pickup = ref('')
  const destination = ref('')
  const price = ref(null)
  const calculatePrice = () => {
    if (pickup.value && destination.value) {
      // Generate a random price between 1000 and 5000
      price.value = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    }
  }

  const whyChooseUsOptions = ref([
    {
        title: 'Tailored Solutions',
        description: 'Safeguard your most valuable assets with our all-encompassing insurance policies designed for your needs.',
    },
    {
        title: 'Outstanding Support',
        description: 'Our dedicated team is always here to provide quick and helpful assistance with any inquiries you may have.',
    },
    {
        title: 'Trusted Collaborations',
        description: 'We prioritize transparency and integrity in all our business dealings, ensuring strong and reliable partnerships.',
    }
])

  const itemsPerPage = 2
  const currentPage = ref(0)

  const reviews = ref([
    {
      id: 1,
      name: 'John Doe',
      role: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'FastCourier has been instrumental in growing my business.'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Online Seller',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Their prices are competitive and service exceptional!'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Regular Customer',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      comment: 'Best courier service I\'ve ever used!'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'E-commerce Owner',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      comment: 'Reliable and professional service every time!'
    }
  ])

  const visibleReviews = computed(() => {
    const start = currentPage.value * itemsPerPage
    return reviews.value.slice(start, start + itemsPerPage)
  })

  const nextPage = () => {
    if (currentPage.value < Math.ceil(reviews.value.length / itemsPerPage) - 1) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 0) {
      currentPage.value--
    }
  }
  </script>
  
  <style scoped lang="scss">

.container {
      width: 100vw;
      max-width: 1500px;
      margin: auto;
  }

  .section-wrp{
    max-width: 1000px;
    width: 100vw;
    margin: 1rem auto;
    padding: 10px;
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

  &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);

  }
}


.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  padding: 0 25px;
}


  
  .card {
    padding: 10px;
    border: unset !important;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    p{
        line-height: 160%;
    }
  }
  
//   .reviews-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 2rem;
//       margin-bottom: 1rem;
//   }
  
  .review-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
  
  .review-image {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
  }

  @media (max-width: 768px) {
      .reviews-grid {
          grid-template-columns: 1fr;
      }
  }

.feature-item {
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 1rem;
    background: rgba(13, 110, 253, 0.02);
}

.reviews-container {
  padding: 0 3rem;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #007bff;
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev-btn {
    left: 0;
  }
  
  &.next-btn {
    right: 0;
  }
}

// Review transition animations
.review-transition-move,
.review-transition-enter-active,
.review-transition-leave-active {
  transition: all 0.5s ease;
}

.review-transition-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.review-transition-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.review-transition-leave-active {
  position: absolute;
}

@media (max-width: 992px) {
    .features-grid {
        grid-template-columns: 1fr;
        margin-top: 2rem;
    }
}
</style>