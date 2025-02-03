<template>
    <div class="m-0 p-0">

  
      <div class="content-wrapper">
        <div class="hero-section">
            <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <!-- Slide 1 -->
                    <div class="carousel-item active" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover;">
                        <div class="hero-content section-wrp">
                            <h1 class="fw-bold display-4 text-white">Seamless Shipping, <br> Unmatched Care</h1>
                            <p class="card-text text-white">Delivering Convenience with Every Shipment. Enjoy smooth logistics and outstanding customer service backed by our commitment to excellence.</p>
                            <RouterLink to="/get-quote">
                                <button class="btn btn-sm btn-secondary fw-bold px-4 py-2 text-primary">Get a quote</button>
                            </RouterLink>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="carousel-item" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover;">
                        <div class="hero-content section-wrp">
                            <h1 class="fw-bold display-4 text-white">Global Reach, <br> Local Touch</h1>
                            <p class="card-text text-white">Connect with the world through our extensive network. Experience reliable shipping solutions that bridge distances effortlessly.</p>
                            <RouterLink to="/get-quote">
                                <button class="btn btn-sm btn-secondary fw-bold px-4 py-2 text-primary">Start shipping</button>
                            </RouterLink>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="carousel-item" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover;">
                        <div class="hero-content section-wrp">
                            <h1 class="fw-bold display-4 text-white">Fast, Secure, <br> Reliable</h1>
                            <p class="card-text text-white">Your cargo's safety is our priority. Trust our experienced team to handle your shipments with the utmost care and precision.</p>
                            <RouterLink to="/get-quote">
                                <button class="btn btn-sm btn-secondary fw-bold px-4 py-2 text-primary">Ship now</button>
                            </RouterLink>
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
        </div>
        
        
        <!-- Services Section -->
        <div class="section-wrp mt-5">
            <small class="text-muted text-uppercase d-inline-block mb-2">our Services</small>
          <h2 class="fw-bold display-6 mb-4 text-muted">We provide timely and <br> cost-effective services</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">On-time, every time</h5>
                    <p class="card-text text-muted">Our logistics solutions are tailored for reliability and efficiency, ensuring your shipments arrive punctually, every time.</p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Affordable & efficient</h5>
                    <p class="card-text text-muted">We prioritize cost-effective solutions with competitive rates and transparent pricing, helping you streamline your logistics expenses.</p>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Dependable every step</h5>
                    <p class="card-text text-muted">Trust us to handle your shipments with precision and care. With our unwavering commitment to reliability, your goods are always in safe hands.</p>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div class="section-wrp">
          <div class="row mt-4">
            <div class="col-md-6">
              <img src="https://images.pexels.com/photos/7363197/pexels-photo-7363197.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="100%" height="100%" style="object-fit: cover;" class="rounded">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center gap-1">
              <small class="text-uppercase">For all shippers</small>
              <h2 class="fw-bold text-muted">Document and parcel shipping</h2>
              <p>Send documents and parcels quickly and securely to any destination. Our efficient logistics network ensures timely deliveries with real-time tracking.</p>
              <div>
                <RouterLink to="/get-quote" class="text-decoration-none">
                  <button class="btn btn-sm px-4 btn-dark d-flex align-items-center">
                    Explore
                    <i class="material-icons">chevron_right</i>
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="row mt-5 pt-4">
            <div class="col-md-6 d-flex flex-column justify-content-center gap-1">
              <small class="text-uppercase">businesses only</small>
              <h2 class="fw-bold text-muted">Enterprise Logistics Services</h2>
              <p>Optimize your supply chain with our enterprise logistics solutions. We offer customized freight services, warehousing, and distribution for seamless business operations.</p>
              <div>
                <RouterLink to="/get-quote" class="text-decoration-none">
                  <button class="btn btn-sm px-4 btn-dark d-flex align-items-center">
                    Explore
                    <i class="material-icons">chevron_right</i>
                  </button>
                </RouterLink>
              </div>
            </div>
            <div class="col-md-6">
              <img src="https://images.pexels.com/photos/4391486/pexels-photo-4391486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="100%" height="100%" style="object-fit: cover;" class="rounded">
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
                        <RouterLink to="/get-quote">
                         <button class="btn fw-bold btn-primary btn-sm px-4 py-2 t">Get a quote</button>
                      </RouterLink>
                    </div>
                    <div class="col-lg-7">
                        <div class="features-grid ">
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

                <!-- <div class="row pt-5" style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <small class="text-uppercase d-inline-block mb-2">calculate delivery cost</small>
                                <h2 class="fw-bold display-6 mb-4">Calculate delivery cost</h2>
    
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="">
                                      <select v-model="pickup" class="form-select">
                                        <option value="" disabled selected>Select Pickup Location</option>
                                        <option value="nairobi">Nairobi</option>
                                        <option value="mombasa">Mombasa</option>
                                        <option value="kisumu">Kisumu</option>
                                        <option value="nakuru">Nakuru</option>
                                        <option value="eldoret">Eldoret</option>
                                      </select>
                                    </div>

                                  </div>
                                  <div class="col-md-6">
                                    <div class="">
                                      <select v-model="destination" class="form-select">
                                        <option value="" disabled selected>Select Destination</option>
                                        <option value="nairobi">Nairobi</option>
                                        <option value="mombasa">Mombasa</option>
                                        <option value="kisumu">Kisumu</option>
                                        <option value="nakuru">Nakuru</option>
                                        <option value="eldoret">Eldoret</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div class="mt-4">
                                  <button class="btn btn-primary w-100">Calculate</button>
                                </div>
    
                            </div>
                        </div>
                        <div class="col md-12">
                            <div class="mt-4" style="overflow: hidden;">
                                <img src="/public/kenya.jpg" alt="" style="object-fit: cover;" width="100%" height="100%">
                            </div>
                        </div>

                    </div>
                </div> -->
            </div>
        </div>
        
        <!-- Reviews Section -->
        <div class="reviews-section my-5 py-5">
          <div class="section-wrp">
            <small class="text-muted text-uppercase d-inline-block mb-2">testimonials</small>
            <h2 class="fw-bold display-6 mb-5">What our customers say</h2>
            
            <div class="reviews-container position-relative">
              <div class="reviews-grid row">
                <TransitionGroup name="review-transition">
                  <div v-for="review in visibleReviews" :key="review.id" class="review-card col-md-6">
                    <div class="review-image">
                      <img :src="review.image" :alt="review.name" width="70" height="70" class="rounded-circle" style="object-fit: cover;">
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
  

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';

  const pickup = ref('')
  const destination = ref('')
  const price = ref(null)

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
      image: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
      comment: 'FastCourier has been instrumental in growing my business. Their reliability and speed have allowed me to meet deadlines effortlessly, and I can always count on them for a seamless delivery experience.'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Online Seller',
      image: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      comment: 'Their prices are competitive and their service exceptional! I’ve tried multiple courier services, but none match the efficiency and attention to detail that FastCourier provides. They truly stand out in the industry.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Regular Customer',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      comment: 'Best courier service I\'ve ever used! Every delivery is handled with care, and I’ve never encountered delays. Their customer service team is always responsive and goes above and beyond to ensure satisfaction.'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'E-commerce Owner',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      comment: 'Reliable and professional service every time! As an e-commerce owner, I need a courier that I can depend on to handle my shipments with the utmost care. FastCourier exceeds my expectations with every delivery.'
    },
    {
      id: 5,
      name: 'James Lee',
      role: 'Freelancer',
      image: 'https://randomuser.me/api/portraits/men/14.jpg',
      comment: 'I’ve been using FastCourier for all my freelance shipments, and I couldn’t be happier. They’re quick, reliable, and always keep me updated on the status of my packages.'
    },
    {
      id: 6,
      name: 'Olivia Brown',
      role: 'Retailer',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      comment: 'FastCourier is my go-to service for all my retail deliveries. They are consistently fast and their customer service team is always helpful when I have questions about my shipments.'
    },
    {
      id: 7,
      name: 'David Miller',
      role: 'Corporate Client',
      image: 'https://randomuser.me/api/portraits/men/59.jpg',
      comment: 'We’ve been partnering with FastCourier for years, and their service continues to impress. They handle our high-volume shipments with efficiency and care, and always meet our deadlines.'
    },
    {
      id: 8,
      name: 'Sophia Martinez',
      role: 'Startup Founder',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
      comment: 'As a startup founder, reliable logistics are crucial, and FastCourier has never let us down. They’re cost-effective, dependable, and truly understand the unique needs of small businesses.'
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
    position: relative;
    margin-top: -56px; /* Adjust based on your navbar height */
}

.carousel-item {
    height: 70vh;
    min-height: 600px;
    background-position: center;
    background-size: cover;
}

.hero-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
}

.carousel-indicators {
    margin-bottom: 3rem;
}

.carousel-control-prev,
.carousel-control-next {
    width: 5%;
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
  
  
  .review-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
  
//   .review-image {
//       width: 80px;
//       height: 80px;
//       margin: 0 auto;
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         border-radius: 50%;
//       }
//   }

  @media (max-width: 768px) {
      .reviews-grid {
          grid-template-columns: 1fr;
      }
  }

.feature-item {
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 1rem 0;
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