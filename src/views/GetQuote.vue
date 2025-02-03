<template>
  <div class="py-5">

    <div class="" style="max-width: 10600px; margin: auto;">
      <img src="https://cdn.prod.website-files.com/65636268c62f3d0464956d0b/656780079843f7bfe6cf4574_pexels-tom-fisk-3057960%201.jpg" alt="" width="100%" height="350" style="object-fit: cover;">
    </div>

    <div class="container py-5">
      <div class="text-center mb-4">
        <!-- <h2 class="fw-bold display-6 mb-4 text-muted">Complete your shipment in 3 easy steps</h2> -->
        <h5 class="fw-bold text-muted">Complete your shipment in 3 easy steps</h5>
      </div>

      <!-- Progress Steps -->
      <div class="row mb-5">
        <div class="col-12">
          <div class="d-flex justify-content-between position-relative align-items-center">
            <div v-for="(step, index) in steps" :key="index" 
                 class="step-item text-center position-relative" 
                 :class="{ 'active': currentStep >= index + 1 }">
              <div class="step-number">{{ index + 1 }}</div>
              <small class="text-muted text-uppercase">{{ step }}</small>
            </div>
            <div class="progress-line"></div>
          </div>
        </div>
      </div>
  
      <div class="row g-5">
        <div class="col-md-5">
          <div class="h-100">
            <img :src="currentStepImage" :alt="`Step ${currentStep} shipping process`" width="100%" height="100%" style=" object-fit: cover;" class="rounded">
          </div>
        </div>
        <div class="col-md-7 card">
          <!-- Step 1: Shipment Details -->
          <div v-if="currentStep === 1" class="step-content">
              <div class="">
                  <h5 class="mb-1">What are you shipping?</h5>
                  <!-- Shipping Types Grid -->
                  <div class="shipping-types-grid mb-4">
                      <div v-for="(type, index) in shippingTypes" 
                           :key="index" 
                           class="shipping-type-item"
                           :class="{ 'active': selectedShippingType === type.id }"
                           @click="selectShippingType(type.id)">
                          <div class="icon-wrapper">
                              <i class="material-icons text-orange">{{ type.icon }}</i>
                          </div>
                          <div class="type-name">{{ type.name }}</div>
                      </div>
                  </div>
      
                  <div class="shipment-form mt-4">
                    <small class="">Dimensions</small>
                    <div class="row mb-4">
                      <div class="col-md-3">
                        <label class="form-label">Weight <span style="font-size: 10px;">(kg)</span></label>
                        <input type="number" class="form-control" v-model="weight" placeholder="Enter weight">
                      </div>
      
                      <div class="col-md-3">
                        <label for="" class="form-label">Length <span style="font-size: 10px;">(cm)</span></label>
                        <input type="number" class="form-control" v-model="length" placeholder="Length">
                      </div>
                      <div class="col-md-3">
                        <label for="" class="form-label">Width <span style="font-size: 10px;">(cm)</span></label>
                        <input type="number" class="form-control" v-model="width" placeholder="Width">
                      </div>
                      <div class="col-md-3">
                        <label for="" class="form-label">Height <span style="font-size: 10px;">(cm)</span></label>
                        <input type="number" class="form-control" v-model="height" placeholder="Height">
                      </div>
                    </div>
            
                    <!-- <div class="package-types mt-4">
                      <h5>Not sure about the sizes?</h5>
                      <div class="row g-3 mt-2">
                        <div class="col-md-4" v-for="(type, index) in packageTypes" :key="index">
                          <div class="package-type-card" @click="selectPackageType(type)">
                            <img :src="type.icon" :alt="type.name">
                            <div class="package-info">
                              <h6>{{ type.name }}</h6>
                              <small>{{ type.dimensions }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
              </div>
          </div>

          <!-- Step 2: Origin and Destination -->

          <div v-if="currentStep === 2" class="step-content">
              <div class=" py-4 pb-5 position-relative">
                <div class="position-absolute top-0 end-0">
                  <span class="fi fi-ke fs-5"></span>
                </div>

                  <h5 class="mb-3">I am shipping as a...</h5>
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link btn-sm active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Business</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link btn-sm btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Private Person</button>
                    </li>
                  </ul>
      
                  <div class="mt-4">
                    <div class="row g-4">
                      <div class="form-group">
                        
                        <p class="m-0">Shipping from</p>
                        <div class="row">
                          <div class="col-6">
                            <label for="" class="form-label" id="from-city">City</label>
                            <input type="text" id="from-city" class="form-control" v-model="fromLocation" placeholder="Enter city or region">
                          </div>
                          <div class="col-6">
                            <label for="" class="form-label" id="from-zip">ZIP code</label>
                            <input type="text" id="from-zip" class="form-control" v-model="fromZip" placeholder="Enter zip code">
                          </div>
                        </div>
                      </div>
              
                      <div class="form-group">
                        <p class="m-0">Delivering to</p>
                        <div class="row">
                          <div class="col-6">
                            <label class="form-label" id="to-city">City</label>
                            <input type="text" class="form-control" v-model="toLocation" placeholder="Enter city or region">
                          </div>
                          <div class="col-6">
                            <label for="" class="form-label" id="to-zip">Zip code</label>
                            <input type="text" class="form-control" v-model="toZip" placeholder="Enter zip code">
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="mt-4">
                      <button @click="nextStep" class="btn btn-dsm btn-primary">Shipment Details</button>
                    </div> -->
                  </div>
            
              </div>
          </div>
      

      
          <!-- Step 3: Quote Summary -->
          <div v-if="currentStep === 3" class="step-content">
            <div class="">
              <div class="card-ody">
                <h5 class="mb-3">Your quote</h5>
                <div class="row">
                  <div class="shipment-date mb-3">
                    <small>Shipment Date</small>
                    <p>{{ currentDate }}</p>
                  </div>
      
                  <div class="de">
                    <div class="d-flex align-items-center">
                      <div>
                        <!-- <i class="material-icons text-muted fs-6">directions_car</i> -->
                        <small class="mb-0">Estimated delivery</small>
                        <p> {{ deliveryDate }}</p>
                      </div>
                    </div>
                  </div>
      
                  <div class="quote-price mt-4">
                    <div class="d-flex justify-content-between align-items-center">
                      <small>No VAT charge</small>
                      <p class="mb-0">Ksh 1,498.63</p>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
      
          <!-- Step 4: Final Order Summary -->
          <div v-if="currentStep === 4" class="step-content">
            <div class="order-sumary">
              <div class="card-body">
                <h5 class="mb-4">Order summary</h5>
                
                <div class="summary-section mb-4">
                  <small class="section-title text-uppercase d-block">Shipping Details</small>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="detail-item">
                        <small class="text-capitalize text-muted">From</small>
                        <p class="mb-1">{{ fromZip }} - {{ fromLocation }}</p>
                        <div>
                          <span class="fi fi-ke me-2"></span>
                          <small class="text-capitalize text-muted">Kenya</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="detail-item">
                        <small class="text-muted">To</small>
                        <p class="mb-1">{{ toZip }} - {{ toLocation }}</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="summary-section mb-4">
                  <small class="section-title text-uppercase d-block">Package Information</small>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="detail-item">
                        <small class="text-capitalize text-muted">Weight</small>
                        <p>{{ weight }} Kgs</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="detail-item">
                        <small class="text-capitalize text-muted">Dimensions</small>
                        <p>{{ length }}cm × {{ width }}cm × {{ height }}cm</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="summary-section mb-4">
                  <small class="section-title text-uppercase d-block">Delivery Information</small>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="detail-item">
                        <small class="text-muted">Estimated Delivery</small>
                        <p>{{ deliveryDate }}</p>
                        <!-- <small class="text-muted">latest by end of day</small> -->
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="detail-item">
                        <label class="text-muted">Shipping Method</label>
                        <p>Express bus freight</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="summary-section mb-4">
                  <small class="section-title text-uppercase d-block">Cost Breakdown</small>
                  <div class="cost-items">
                    <div class="d-flex justify-content-between mb-2">
                      <small class="text-uppercase">Base Shipping Rate</small>
                      <small>Ksh 1,398.63</small>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <small class="text-uppercase">Insurance</small>
                      <small>Ksh 100.00</small>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <small class="text-uppercase">Fuel Surcharge</small>
                      <small>Ksh 0.00</small>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                      <strong>Total cost</strong>
                      <strong>Ksh 1,498.63</strong>
                    </div>
                  </div>
                </div>
      
                <div class="d-flex align-items-center gap-2 justify-content-end">
                  <button class="btn btn-sm btn-outline-dark border-0" @click="currentStep = 3">Back</button>
                  <button class="btn btn-sm btn-dark">Proceed to Payment</button>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Navigation Buttons -->
          <div class="navigation-buttons mt-4 gap-2 d-flex justify-content-end" v-if="currentStep < 4">
            <button class="btn btn-sm btn-outline-dark d-flex align-items-center gap-3 border-0" 
                    @click="prevStep" 
                    v-if="currentStep > 1">
                Previous
            </button>
            <button class="btn btn-sm btn-dark d-flex align-items-center gap-2"
                    @click="nextStep" 
                    v-if="currentStep <= 4">
                    {{ navigationButtonText() }}
                    <i class="material-icons">navigate_next</i>
            </button>
          </div>

        </div>
      </div>
    
  

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const steps = [ 'Shipment Details', 'Enter Destination', 'Get an Estimated Quote', 'Final Order Summary']
const currentStep = ref(1)
const shipperType = ref('business')

// Location details
const fromLocation = ref('')
const fromZip = ref('')
const toLocation = ref('')
const toZip = ref('')

// Package details
const weight = ref(0)
const length = ref(0)
const width = ref(0)
const height = ref(0)

// Step images
const stepImages = {
  1: "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=400",
  2: "https://images.pexels.com/photos/3856433/pexels-photo-3856433.jpeg?auto=compress&cs=tinysrgb&w=400", 
  3: "https://images.pexels.com/photos/4484149/pexels-photo-4484149.jpeg?auto=compress&cs=tinysrgb&w=400",
  4: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=400"
}

const currentStepImage = computed(() => {
  return stepImages[currentStep.value as keyof typeof stepImages]
})

const navigationButtonText = () => {
  if (currentStep.value === 1) {
    return 'Enter destination'
  }
  if (currentStep.value === 2) {
    return 'Get a quote'
  }
  if (currentStep.value === 3) {
    return 'View order summary'
  }
}
const packageTypes = [
  {
    name: 'A4 Envelope',
    dimensions: '12 x 9 x 1 in',
    icon: '@/assets/envelope-icon.png'
  },
  {
    name: 'One or two books',
    dimensions: '9 x 5 x 1 in',
    icon: '@/assets/book-icon.png'
  },
  {
    name: 'Small Kitchen Appliance',
    dimensions: '14 x 12 x 2.5 in',
    icon: '@/assets/appliance-icon.png'
  }
]

// Shipping types data
const shippingTypes = ref([
    { id: 'food', name: 'Food', icon: 'restaurant' },
    { id: 'flatbed', name: 'Flatbed', icon: 'view_agenda' },
    { id: 'dry-freight', name: 'Dry Freight', icon: 'inventory_2' },
    { id: 'agriculture', name: 'Agriculture', icon: 'agriculture' },
    { id: 'machinery', name: 'Machinery', icon: 'precision_manufacturing' },
    { id: 'dry-bulk', name: 'Dry Bulk', icon: 'inventory' },
    { id: 'vehicle', name: 'Car & Vehicle', icon: 'directions_car' },
    { id: 'international', name: 'International', icon: 'public' }
])

const selectedShippingType = ref('')

const selectShippingType = (typeId: string) => {
    selectedShippingType.value = typeId
}

// Date calculations
const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('en-US', { 
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

const deliveryDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + 3)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  })
})

// Navigation functions
const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

</script>

<style scoped lang="scss">
.card{
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
// .container{
//   max-width: 900px;
// }

p{
  font-weight: 500;
  font-size: 15px;
}

.nav-link{
  background-color: unset !important;
  color: black;
  font-weight: 500;
}

.nav-link.active{
  background-color: orange !important;
  color: white !important;

}


.form-label{
  padding-right: 3px;
  margin-bottom: -454px !important;
  display: inline-block;
  z-index: 44 !important;
  width: fit-content;
  white-space: nowrap;
  padding-left: 8px;
  margin-left: 5px;
  background-color: white !important;
  border: unset;
}

input{
  margin-top: -10px;
}

.step-item {
  flex: 1;
  z-index: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  background-color: #e9ecef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  color: #6c757d;
  border: 2px solid #dee2e6;
}


.step-item.active .step-number {
  background-color:orange;
  color: white;
  border: none;
}


.package-type-card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.package-type-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.package-info {
  margin-top: 0.5rem;
}

.package-info h6 {
  margin-bottom: 0.25rem;
}

.flag-icon {
  width: 20px;
  height: 15px;
  object-fit: contain;
}

.quote-summary {
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}


.section-title {
  // color: #495057;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.detail-item label {
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  display: block;
}

.detail-item p {
  font-size: 1rem;
  margin-bottom: 0;
  color: #212529;
}

.cost-items {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.total-cost {
  font-size: 1.25rem;
  color: #dc3545;
}

.total-cost strong {
  font-weight: 600;
}

.btn-primary {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-primary:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-outline-primary {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-primary:hover {
  background-color: #dc3545;
  color: white;
}

.shipping-types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.shipping-type-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &.active {
        border-color: var(--primary-color);
        background-color: rgba(var(--primary-color-rgb), 0.05);
    }
}

.icon-wrapper {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 50%;
    margin-bottom: 0.5rem;

    i {
        font-size: 1.5rem;
        color: var(--primary-color);
    }
}

.type-name {
    font-size: 0.9rem;
    text-align: center;
    color: #333;
}
</style>