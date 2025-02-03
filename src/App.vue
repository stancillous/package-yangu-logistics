<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="/">
            <img src="/public/logo1.png" alt="" width="130px" style="object-fit: contain;">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                  <li><small class=""><a class="nav-link" href="/">Home</a></small></li>
                  <li><small class=""><a class="nav-link" href="#">Services</a></small></li>
                  <li><small class=""><a class="nav-link" href="#">About us</a></small></li>
                  <li><small class=""><a class="nav-link" href="#">News</a></small></li>
              </ul>
              <div class="m">
                  <button class="btn btn-sm btn-primary">Contact us</button>
              </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="mt-5 pt-4">
      <RouterView></RouterView>
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

</template>

<style scoped>

</style>
