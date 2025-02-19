<template>
    <div class="py-1">
      <div class="container">
        <div class="text-center mb-4">
          <!-- <h2 class="fw-bold display-6 mb-4 text-muted">Complete your shipment in 3 easy steps</h2> -->
          <h5 class="fw-bold text-muted">Get your package delivered in {{ steps.length }} easy steps</h5>
        </div>
  
        <!-- Progress Steps -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="d-flex justify-content-between position-relative align-items-center">
              <div v-for="(step, index) in steps" :key="index" 
                   class="step-item text-center position-relative" 
                   :class="{ 'active': currentStep >= index + 1 }">
                <div class="step-number">{{ index + 1 }}</div>
                <small class="text-muted text-capitdalize">{{ step }}</small>
              </div>
              <div class="progress-line"></div>
            </div>
          </div>
        </div>
    
        <!-- <div class="row g-lg-5 g-md-5 g-sm-0"> -->
        <div class="row g-0">
          <div class="col-md-5">
            <div class="h-100 step-image-container">
              <img :src="currentStepImage" :alt="`Step ${currentStep} shipping process`" width="100%" height="100%" style=" object-fit: cover;" class="rounded">
            </div>
          </div>
          <div class="col-md-7 card">
            <!-- Step 1: Delivery address -->
            <div v-if="currentStep === 1" class="step-content">
                <div class=" py-4 pb-5 position-relative">
                  <div class="position-absolute top-0 end-0">
                    <span class="fi fi-ke fs-5"></span>
                  </div>
  
                    <h5 class="mb-3">I am shipping as a...</h5>
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                      <li @click="shippingDetails.customer.type = 'business'" class="nav-item" role="presentation">
                          <button @click="shippingDetails.customer.type = 'business'" class="nav-link btn-sm active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Business</button>
                      </li>
                      <li @click="shippingDetails.customer.type = 'private'" class="nav-item" role="presentation">
                          <button @click="shippingDetails.customer.type = 'private'" class="nav-link btn-sm btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Private Person</button>
                      </li>
                    </ul>
        
                    <div class="mt-5">
                      <div class="row g-4">
                        <div class="col-md-6 form-group">
                          
                          <h6 class="">Pick-up address</h6>
                          <div class="row">
                            <div class="my-2">
                              <label for="" class="form-label" id="from-region">County</label>
                              <select name="" id="from-region" v-model="shippingDetails.pickup.region" class="form-select">
                                <option value="" disabled selected>Select county</option>
                                <option v-for="(value, key) in places" :value="key">{{ key }}</option>
                              </select>
                            </div>
                            <div class="my-2">
                              <label for="" class="form-label" id="from-region">Location</label>
                              <select name="" id="from-region" v-model="shippingDetails.pickup.city" class="form-select">
                                <option value="" disabled selected>Select location</option>
                                <option
                                v-for="(value, key) in places[shippingDetails.pickup.region]"
                                :value="key">{{ key }}</option>
                              </select>
                            </div>
                            <div class="my-2">
                              <template v-if="shippingDetails.pickup.region && shippingDetails.pickup.city">
                                <label for="" class="form-label" id="from-region">Area</label>
                                <select name="" id="from-region" v-model="shippingDetails.pickup.constituent" class="form-select">
                                  <option value="" disabled selected>Select area</option>
                                  <option
                                  v-for="(value, key) in places[shippingDetails.pickup.region]?.[shippingDetails.pickup.city]"
                                  :value="key">{{ key }}</option>
                                </select>
                              </template>
                            </div>
                          </div>
                        </div>
                
                        <div class="col-md-6 form-group">
                          <h6 class="">Delivery address</h6>
                          <div class="row">
                            <div class="my-2">
                              <label for="" class="form-label" id="from-region">County</label>
                              <select name="" id="from-region" v-model="shippingDetails.destination.region" class="form-select">
                                <option value="" disabled selected>Select county</option>
                                <option v-for="(value, key) in places" :value="key">{{ key }}</option>
                              </select>
                            </div>
                            <div class="my-2">
                              <label for="" class="form-label" id="from-region">Location</label>
                              <select name="" id="from-region" v-model="shippingDetails.destination.city" class="form-select">
                                <option value="" disabled selected>Select location</option>
                                <option v-for="(value, key) in places[shippingDetails.destination.region]" :value="key">{{ key }}</option>
                              </select>
                            </div>
                            <div class="my-2">
                              <template v-if="shippingDetails.destination.region && shippingDetails.destination.city">
                                <label for="" class="form-label" id="from-region">Area</label>
                                <select name="" id="from-region" v-model="shippingDetails.destination.constituent" class="form-select">
                                  <option value="" disabled selected>Select area</option>
                                  <option 
                                  v-for="(value, key) in places[shippingDetails.destination.region]?.[shippingDetails.destination.city]"
                                  :value="key">{{ key }}</option>
                                </select>
                              </template>
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
  
            <!-- Step 2: Package details -->
            <div v-if="currentStep === 2" class="step-content">
                <div class="">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-1">What are you shipping?</h5>
                    <!-- Shipping Types Grid -->
                     <!-- <div class="mt-4">
                      <input type="text" disabled v-model="searchQuery" class="form-control" placeholder="Search for a package type">
                     </div> -->
                  </div>
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <label for="">Package type</label>
                        <select name="" id="" class="form-select" v-model="shippingDetails.package.type" @change="handleShippingTypeChange">
                            <option selected disabled value="">Select type of package</option>
                            <option v-for="(option, index) in filteredShippingTypes" :key="index" :value="option.id">{{ option.name }}</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label class="form-lbel">Weight <span style="font-size: 10px;">(kg)</span></label>
                        <select name="" id="" class="form-select" v-model="shippingDetails.package.weight">
                          <option selected disabled value="0">Select weight</option>
                          <option v-for="(option, index) in weightOptions" :key="index" :value="option.value">{{ option.label }}</option>
                        </select>
                      
                      </div>

                      </div>
                      <!-- if user selects 'other' as shipping type -->
                      <div v-if="shippingDetails.package.type.toLowerCase() === 'other'" class="shipping-type-iem col-12">
                        <textarea name="" class="form-control w-100" placeholder="Please describe your package" id=""></textarea>
                      </div>
                    
                </div>
            </div>

            <!-- Step 3: Quote Summary -->
            <div v-if="currentStep === 3" class="step-content">
              <div class="">
                <div class="card-ody">
                  <h5 class="mb-3">How to reach you</h5>
                  <div class="row">
                    <div class="col-6">
                      <label for="" class="formlabel" id="name">Name</label>
                      <input type="text" id="name" class="form-control" v-model="shippingDetails.customer.name" placeholder="Your name">
                    </div>
                    <div class="col-6">
                      <label for="" class="form-lael" id="mobile">Mobile</label>
                      <input type="text" id="mobile" class="form-control" v-model="shippingDetails.customer.mobile" placeholder="Your phone number">
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
                          <p class="mb-1">{{ shippingDetails.pickup.region }} > {{ shippingDetails.pickup.city }} > {{ shippingDetails.pickup.constituent }}</p>
                          <div>
                            <span class="fi fi-ke me-2"></span>
                            <small class="text-capitalize text-muted">Kenya</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="detail-item">
                          <small class="text-muted">To</small>
                          <p class="mb-1">{{ shippingDetails.destination.region }} > {{ shippingDetails.destination.city }} > {{ shippingDetails.destination.constituent }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class="summary-section mb-4">
                    <small class="section-title text-uppercase d-block">Package Information</small>
                    <div class="row g-3">
                      <div class="">
                        <div class="col-md-6 detail-item">
                          <small class="text-capitalize text-muted">Type</small>
                          <p>{{ shippingDetails.package.type }}</p>
                        </div>
                        <div class="col-md-6 detail-item">
                          <small class="text-capitalize text-muted">Weight</small>
                          <p>{{ shippingDetails.package.weight }} Kgs</p>
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
                          <p>Van / Truck / Rider</p>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class="summary-section mb-4">
                    <small class="section-title text-uppercase d-block">Cost Breakdown</small>
                    <div class="cost-items">
                      <div class="d-flex justify-content-between mb-2">
                        <small class="text-uppercase">Cost</small>
                        <small>Ksh {{ places[shippingDetails.destination.region]?.[shippingDetails.destination.city]?.[shippingDetails.destination.constituent] }}</small>
                      </div>
                      <div class="d-flex justify-content-between mb-2">
                        <small class="text-uppercase">Tax</small>
                      <small>Ksh 0.00</small>
                      </div>
                      <hr>
                      <div class="d-flex justify-content-between">
                        <strong>Total cost</strong>
                        <strong>Ksh {{ places[shippingDetails.destination.region]?.[shippingDetails.destination.city]?.[shippingDetails.destination.constituent] }}.00</strong>
                      </div>
                    </div>
                  </div>
        
                  <div class="d-flex align-items-center gap-2 justify-content-end">
                    <button class="btn btn-sm btn-outline-dark border-0" @click="currentStep = 3">Back</button>
                  <!-- <a href="#" @click="whatsappCheckout()" target="_blank" id="chat-on-whatsapp-btn" class="text-decoration-none">
                    <button class="btn btn-sm btn-dark">Proceed to Payment</button>
                  </a> -->
                  <div class="order-onw-wrp">
                    <a
                      @click="whatsappCheckout()"
                      id="chat-on-whatsapp-btn"
                      target="_blank"
                    >
                      <!-- href="#" -->
                      <div>
                        <svg
                          fill="#ffffff"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <title>whatsapp</title>
                            <path
                              d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"
                            ></path>
                          </g>
                        </svg>
                        <span>checkout on WhatsApp</span>
                      </div>
                    </a>
                  </div>
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
  import { ref, computed, watch } from 'vue'
  import {useToast} from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';

  const toast = useToast();
  

  const steps = [ 'Delivery address', 'Package details', 'Your details', 'Final order summary']
  const currentStep = ref(1)
  
  const shippingDetails = ref({
    customer: {
      type: 'business',
      mobile: '',
      name: ''
    },
    pickup: {
      region: '',
      city: '',
      constituent: '',
    },
    destination: {
      region: '',
      city: '',
      constituent: '',
    },
    package: {
      type: '',
      weight: 0,
    },
    price: '',
  })

  const searchQuery = ref('');
  
  // Step images
  const stepImages = {
    1: "/WhatsApp Image 2025-02-18 at 21.48.52 (2).jpeg",
    2: "/WhatsApp Image 2025-02-18 at 21.48.51 (1).jpeg", 
    3: "/WhatsApp Image 2025-02-18 at 21.48.50 (1).jpeg",
    4: "/WhatsApp Image 2025-02-18 at 21.48.52.jpeg"
  }
  
  
  const weightOptions = ref([
    {label: "0-10 kgs", value: "0-10"},
    {label: "10-20 kgs", value: "10-20"},
    {label: "20-30 kgs", value: "20-30"},
    {label: "30-40 kgs", value: "30-40"},
    {label: "40-50 kgs", value: "40-50"},
    {label: "50-60 kgs", value: "50-60"},
    {label: "60-70 kgs", value: "60-70"},
    {label: "70-80 kgs", value: "70-80"},
    {label: "80-90 kgs", value: "80-90"},
    {label: "90-100 kgs", value: "90-100"},
    {label: "Above 100 kgs", value: "Above 100"},
  ])
  
  // Shipping types data
  const shippingTypes = ref([
      { id: 'food', name: 'Food'},
      { id: 'office errands', name: 'office errands'},
      { id: 'parcels', name: 'parcels'},
      { id: 'shopping', name: 'shopping'},
      { id: 'dry-clearning', name: 'dry clearning'},
      { id: 'agriculture', name: 'agriculture'},
  ])
  
  
  const currentStepImage = computed(() => {
    return stepImages[currentStep.value as keyof typeof stepImages]
  })
  
  const navigationButtonText = () => {
    if (currentStep.value === 1) {
      return 'Package details'
    }
    if (currentStep.value === 2) {
      return 'Your details'
    }
    if (currentStep.value === 3) {
      return 'View order summary'
    }
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

  // Computed property for filtering
const filteredShippingTypes = computed(() => {
  return shippingTypes.value.filter((type) =>
    type.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


  // Navigation functions
  const nextStep = () => {
    
    if (checkStepCompletion()) {
      toast.warning("Please fill all the required fields", { position: 'top-right', duration: 3000, dismissible: true, queue: true})
      return
    } 

    if (currentStep.value < 4) {
      currentStep.value++
    }
  }
  
  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }
  

  const checkStepCompletion = () => {
    if (currentStep.value === 1) {
      return shippingDetails.value.pickup.region === '' || shippingDetails.value.pickup.city === '' || shippingDetails.value.pickup.constituent === '' || shippingDetails.value.destination.region === '' || shippingDetails.value.destination.city === '' || shippingDetails.value.destination.constituent === ''
    }
    else if (currentStep.value === 2) {
      return shippingDetails.value.package.type === '' || shippingDetails.value.package.weight === null
    }
    else if (currentStep.value === 3) {
      return shippingDetails.value.customer.name === '' || shippingDetails.value.customer.mobile === ''
    }
  }

  const selectedShippingTypeDetails = ref(null);

  // Function to handle select change event
const handleShippingTypeChange = () => {
  const selectedType = shippingTypes.value.find(type => type.id === shippingDetails.value.package.type);
  if (selectedType) {
    shippingDetails.value.package.type = selectedType.name;
  }
};

// Watch for changes in selectedShippingType and auto-update details
watch(shippingDetails.value.package, (newValue) => {
  handleShippingTypeChange();
});

function whatsappCheckout() {
  const details = shippingDetails.value; // Get the latest shipping details

  let message = "🚚 *New Shipping Request*\n\n";
  message += `👤 *Customer Type*: ${details.customer.type || "N/A"}\n`;
  message += `📱 *Customer Details*: ${details.customer.name} - ${details.customer.mobile}\n\n`;

  message += `📍 *Pickup Location*:\n`;
  message += `   ${details.pickup.region} - ${details.pickup.city} - ${details.pickup.constituent}\n`;
  // message += `   - *City*: ${details.pickup.city || "N/A"}\n`;
  // message += `   - *ZIP Code*: ${details.pickup.zip || "N/A"}\n\n`;

  message += `📍 *Destination*:\n`;
  message += `   ${details.destination.region} - ${details.destination.city} - ${details.destination.constituent}\n`;
  // message += `   - *City*: ${details.destination.city || "N/A"}\n`;
  // message += `   - *ZIP Code*: ${details.destination.zip || "N/A"}\n\n`;

  message += `📦 *Package Details*:\n`;
  message += `   - *Type*: ${details.package.type || "N/A"}\n`;
  message += `   - *Weight*: ${details.package.weight ? details.package.weight + " kg" : "N/A"}\n\n`;

  message += `*Estimated Price: Ksh ${places.value[shippingDetails.value.destination.region]?.[shippingDetails.value.destination.city]?.[shippingDetails.value.destination.constituent]}`;

  // message += "Thank you for choosing our service! We look forward to assisting you. 🚛";

  // console.log(message)
  // Encode message for WhatsApp URL
  let encodedMessage = encodeURIComponent(message);
  let whatsappLink = "https://wa.me/+254758163164?text=" + encodedMessage;

  // Update the button link if it exists
  const orderOnWhatsappBtn = document.getElementById("chat-on-whatsapp-btn") as HTMLAnchorElement;
  if (orderOnWhatsappBtn) {
    // orderOnWhatsappBtn.setAttribute('href', whatsappLink)
    orderOnWhatsappBtn.href = whatsappLink;
  } else {
    alert("Order on WhatsApp element not found.");
  }
}



  const places = ref<{ [key: string]: any }>({
    Nairobi: {
  "CBD": {
    "University Way/ Uhuru Highway": 150,
    "Kirinyaga Rd/ Haile Selassie": 150,
    "Ronald Ngala/ Railway": 150
  },
  "INDUSTRIAL AREA": {
    "DT Dobie/ GK Prisons": 400,
    "Kenya Wines/ Rd, A, B, C/ Likoni Rd": 450,
    "Ronald Ngala/ Railway": 150
  },
  "MOMBASA ROAD": {
    "Nyayo/ Stadium/ Bunyala": 350,
    "Nairobi West/ South B&C/Capital Centre": 450,
    "Sameer/ GM/ Imara/ Daima": 450,
    "Southfield/ Mall/ Panari/ Hotel/ Cabanas": 450,
    "Airport North Rd": 500,
    "JKIA/ GateWay Mall/ Syokimau": 750,
    "Mlolongo/ Athi River/ Kitengela": 1100
  },
  "JUJA ROAD": {
    "Kariokor/ Pangani/ Pumwani": 350,
    "Eastleigh/ Mathare": 350,
    "Huruma/ Raunda": 450
  },
  "KANGUNDO ROAD": {
    "Caltex": 450,
    "Umoja/ Kayole/ Obama": 550,
    "Mihango/ Saika": 600,
    "Njiru/ Utawala": 850
  },
  "WAIYAKI WAY": {
    "Chiromo/ Riverside": 300,
    "Westlands/ Westgate/ ABC": 300,
    "Kangemi/ Loresho": 400,
    "Kitsuru/ Upper Kabete": 450,
    "Spring Valley/ Peponi Rd": 450,
    "Thigiri/ Lower Kabete/ Kabete Rd": 450,
    "Uthiru": 500,
    "Kinoo": 500,
    "Kikuyu": 700
  },
  "JOGOO ROAD": {
    "Gikomba": 300,
    "City Stadium": 350,
    "Shauri/ Moyo/ Makadara/ Bahati": 350,
    "Makangri/ Mbotelo/ Herria/ Lumumba/ Jericho": 400,
    "Buruburu/ Uhuru/ Estate": 450
  },
  "LANG’ATA ROAD": {
    "Nairobi West": 350,
    "Madaraka/ T-Mall/ Strathmore Mbagathi": 350,
    "Highrise/ Ngumo": 350,
    "Wilson/ Lang’ata/ Carnivore": 450,
    "Galleria": 650,
    "Ongata Rongai": 900
  },
  "LIMURU ROAD": {
    "Ojijo Rd/ Parklands/ Agakhan/ Oshwal": 300,
    "Highridge/ Mpaka Road": 300,
    "UNEP/ Gigiri/ Village Market": 450,
    "Runda/ Ruaka/ Nyari": 550,
    "Banana/ Ndenderu": 700,
    "Limuru Town": 1500
  },
  "KIAMBU ROAD": {
    "DCI/ Balm Estate": 350,
    "Muthaiga/ North/Ridgeways/ Fourways": 450,
    "Delta/ Muthithi/ Thindigua/Edenville": 500,
    "Kirigiti/ Kiambu Town": 700
  },
  "NGONG ROAD": {
    "Upperhill/ Community": 300,
    "KNH/ Hurlingham/ Kilimani": 300,
    "Kileleshwa/ Adams/ Arcade/ Lavington": 350,
    "Junction Mall/ Kibra": 450,
    "Dagoretti Corner": 500,
    "Jamuhuri/ Kawangware/ Wanyee/ Race course": 550,
    "Karen": 700,
    "Ngong’": 1000,
    "Kiserian": 1100
  },
  "OUTERING ROAD": {
    "Lucky Summer/ BabaDogo": 450,
    "Kariobangi North/ Mtindwa": 450,
    "Pioneer Estate/ Kariobangi/ Donholm": 450,
    "Savannah/ Tassia/ Fedha/ Nyayo gate B": 550,
    "Komarock/ Baraka": 550,
    "Nyayo Estate gate D": 550
  }
    },
    Kiambu: {
      "THIKA ROAD": {
    "Ngara": 250,
    "Pangani": 300,
    "Drive Inn": 350,
    "Allsops": 350,
    "Roasters/ Garden City/ USIU/ Thome": 400,
    "TRM/ Lumumba Drive/ Kasarani": 450,
    "Githurai 44, 45/ Mwiki": 550,
    "Kahawa Sukari/ Wendani": 550,
    "Ruiru Bypass/ Ruiru Town": 650,
    "Kenyatta Rd/ Juja": 900,
    "Thika Town": 1100
  },
    }
  })
  </script>
  
  <style scoped lang="scss">


.container{
  max-width: 1400px;
  margin: auto;
}

  .card{
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

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
    margin-bottom: 0;
    width: fit-content;
    white-space: nowrap;
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

//order on whatsapp btn
.order-onw-wrp {
  cursor: pointer;
  a {
    width: 100%;
    text-decoration: none;

    div {
      border-radius: 1px;
      padding: 5px 10px;
      background-color: #25d366;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      text-transform: capitalize;
      font-size: 14px;
      color: white;
      svg {
        color: white;
        fill: white;
        stroke: white;
        height:17px;
        width: 17px;
        margin-right: 7px;
      }
    }
  }
}
  @media screen and (max-width:700px) {
    .step-image-container{
      display: none;
    }
  }
  </style>