<template>
    <div>
        <div class="" style="max-width: 10600px; margin: auto;">
            <img src="https://cdn.prod.website-files.com/65636268c62f3d0464956d0b/656780079843f7bfe6cf4574_pexels-tom-fisk-3057960%201.jpg" alt="" width="100%" height="350" style="object-fit: cover;">
        </div>
        <div class="container">
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

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.about-txt{
    line-height: 160%;
    font-size: 20px;
}

@media screen and (max-width: 900px) {
    .about-txt{
        font-size: 18px;
    }
}
</style>