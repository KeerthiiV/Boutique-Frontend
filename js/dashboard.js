const user = JSON.parse(localStorage.getItem('currentUser'));
if (!user) {window.location.href = 'login.html';}
  const pages = {
        // --- CLIENT PAGES ---
        home:`
                <div class="container-fluid px-4">
     <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold m-0" style="font-family: 'Playfair Display';">Welcome, ${user.email.split('@')[0]}</h2>
                <div class="position-relative">
                    <button class="btn btn-plum"><i class="bi bi-cart3 me-2"></i>Cart</button>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </div>
            </div>
    <div class="card p-0 border-0 shadow-sm overflow-hidden mb-5">
                <div class="row g-0 align-items-center">
                    <div class="col-md-2 bg-plum text-white text-center py-4" data-aos="fade-up" data-aos-delay="100">
                        <i class="bi bi-truck display-3"></i>
                    </div>
                    <div class="col-md-10 p-4 bg-white" data-aos="fade-up" data-aos-delay="200">
                        <div class="d-flex justify-content-between mb-2">
                            <h6 class="fw-bold m-0">Tracking Order #ELG-8821</h6>
                            <span class="text-plum fw-bold small">65% Completed</span>
                        </div>
                        <div class="progress mb-2" style="height: 10px;"><div class="progress-bar bg-plum" style="width: 65%" data-aos-delay="300"></div></div>
                        <div class="d-flex justify-content-between small text-muted" data-aos="fade-up" data-aos-delay="400">
                            <span>Status: In Transit</span>
                            <span>ETA: Tomorrow, 4:00 PM</span>
                        </div></div></div></div>
    <!-- Shop by Category -->
    <div class="row mb-5 text-center">
        <h5 class="fw-semibold mb-3">Shop by Category</h5>
        <div class="col-3" data-aos="fade-up" data-aos-delay="100">
            <img src="images/images (14).jpeg" class="rounded-circle mb-2" alt="Saree"><p class="small">Sarees</p>
        </div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="200">
            <img src="images/party.jpg" class="rounded-circle mb-2" alt="Party Wear">
            <p class="small">Party Wear</p>
        </div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="400">
            <img src="images/images (21).jpeg" class="rounded-circle mb-2" alt="Daily Wear">
            <p class="small">Daily Wear</p>
        </div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="500">
            <img src="images/wedding.jpg" class="rounded-circle mb-2" alt="Wedding">
            <p class="small">Wedding</p>
        </div>
    </div>
    <!-- Flash Sale -->
    <div class="row mb-5">
    <div class="col-12 px-0" data-aos="zoom-in">
        <div class="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden shadow-lg " 
             style="min-height: 450px; background-color: var(--accent-olive); border-radius: 8px;">
            <img src="images/bg.jpg" alt="Designer Couture" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.55;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(168, 246, 179, 0.47), rgba(0,0,0,0.4));"></div>
            <div class="position-relative z-1 px-4 text-white">
                <span class="badge rounded-pill mb-3 px-4 py-2" style="background-color: var(--accent-olive); letter-spacing: 3px; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.3);">LIMITED TIME OFFER</span> 
                <h1 class="display-3 fw-bold mb-3" style="font-family: 'Playfair Display'; letter-spacing: 4px;">⚡ FLASH SALE</h1>
                <div class="d-flex justify-content-center gap-3 mb-4 mt-2">
                    <div class="countdown-card">
                        <span id="hours" class="fs-2 fw-bold d-block">23</span>
                        <small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Hours</small>
                    </div>
                    <div class="countdown-card">
                        <span id="minutes" class="fs-2 fw-bold d-block">59</span>
                        <small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Mins</small>
                    </div>
                    <div class="countdown-card">
                        <span id="seconds" class="fs-2 fw-bold d-block">59</span>
                        <small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Secs</small>
                    </div>
                </div>
                <p class="fs-5 mb-4 text-uppercase fw-light" style="letter-spacing: 4px;">Flat <span class="fw-bold" style="color: #ffd700;">30% OFF</span> on Wedding Collection</p>
                <div class="d-flex gap-3 justify-content-center">
                    <button class="btn btn-light px-5 py-2 rounded-0 fw-bold text-plum shadow-sm">SHOP COLLECTION</button>
                    <button class="btn btn-outline-light px-4 py-2 rounded-0 fw-bold">CODE: STYLE30</button>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Trending Products -->
    <div class="row mb-5">
        <h5 class="fw-semibold mb-3" data-aos="fade-down">Trend Setters 🔥</h5>
        <div class="col-md-4" data-aos="fade-up">
            <div class="card shadow-hover h-100">
                <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80" class="card-img-top" style="height:400px;">
                <div class="card-body">
                    <h6 class="card-title">Designer Saree</h6>
                    <p class="small text-muted">⭐ 4.8 (320 reviews)</p>
                    <p class="fw-semibold">₹2,999</p>
                   <div class="product-actions-container">
                    <button class="btn btn-quick-purchase">Quick Purchase</button>
                    <button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button>
                   </div>
                </div>
            </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-hover h-100">
                <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80" class="card-img-top" style="height:400px;">
                <div class="card-body">
                    <h6 class="card-title">Party Wear Gown</h6>
                    <p class="small text-muted">⭐ 4.6 (210 reviews)</p>
                    <p class="fw-semibold">₹4,499</p>
                    <div class="product-actions-container">
                    <button class="btn btn-quick-purchase">Quick Purchase</button>
                    <button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card shadow-hover h-100">
                <img src="images/wed lehanga.jpg" class="card-img-top" style="height:400px;">
                <div class="card-body">
                    <h6 class="card-title">Wedding Lehenga</h6>
                    <p class="small text-muted">⭐ 4.9 (500+ reviews)</p>
                    <p class="fw-semibold">₹8,999</p>
                    <div class="product-actions-container">
                    <button class="btn btn-quick-purchase">Quick Purchase</button>
                    <button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button>
                </div></div></div></div></div>
<div class="row g-4 mb-5 pb-5">
    <div class="col-12 px-3">
        <div class="card border-0 overflow-hidden shadow-lg offer-banner-animated" style="border-radius: 12px; transition: transform 0.4s ease;">
            <div class="row g-0">
                <div class="col-md-3 d-none d-md-flex align-items-center justify-content-center position-relative" data-aos="fade-up" style="background: var(--seconadry-text); overflow: hidden;">
                    <i class="bi bi-stars text-white fs-1 opacity-25 floating-icon"></i>
                    <div class="shimmer-effect"></div>
                </div>
                <div class="col-md-9">
                    <div class="card-body p-4 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between " 
                         style="background: linear-gradient(90deg, var(--accent-olive) 0%, #80a035 100%); color: white;">
                        <div class="animate-text">
                            <h4 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 1px;">✨ Festive Luxe Edit</h4>
                            <p class="mb-0 small opacity-90">Unlock an extra 25% off your next purchase.</p>
                        </div>
                        <div class="mt-3 mt-md-0">
                            <div class="coupon-tag ">
                                <span class="small opacity-75 me-1" >CODE:</span> 
                                <span class="fw-bold" style="color: var(--primary-text);">STYLE25</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-7 mx-auto mt-5">
        <div class="card border-0 shadow-lg concierge-card-float p-2" style="border-radius: 25px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4);">
            <div class="card-body text-center py-4">
                <div class="position-relative mx-auto mb-4" style="width: 80px; height: 80px;">
                    <div class="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center w-100 h-100 border">
                        <i class="bi bi-chat-heart fs-2" style="color: var(--plum);"></i>
                    </div>
                    <span class="position-absolute top-0 end-0 translate-middle p-2 bg-success border border-light rounded-circle pulse-online"></span>
                </div>
                <h5 class="fw-bold text-plum mb-2" style="font-family: 'Playfair Display';">Boutique Concierge</h5>
                <p class="text-muted small px-lg-5 mb-4">
                    Our master stylists are currently online and ready to help you find the perfect fit.
                </p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <button class="btn btn-plum rounded-pill px-4 py-2 shadow transition-button"><i class="bi bi-whatsapp me-2"></i> START CHATTING</button>
                    <button class="btn btn-light  px-4 py-2">EMAIL US</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
        newarrivals: `
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold m-0" style="font-family: 'Playfair Display';">New Arrivals</h2>
                <div class="position-relative">
                    <button class="btn btn-plum"><i class="bi bi-cart3 me-2"></i>Cart</button>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </div>
            </div>
            <div class="row g-4 mb-5">
               <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/images (30).jpeg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Banarasi Silk Saree</h6>
                            <p class="text-plum fw-bold fs-5">₹12,500</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/AD804-1500x1500.jpg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Royal Wedding Lehanga</h6>
                            <p class="text-plum fw-bold fs-5">₹25,000</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/images (21).jpeg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Embroidered Ethnic Kurthi</h6>
                            <p class="text-plum fw-bold fs-5">₹5,000</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
             <div class="row g-4 mb-5">
               <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/princely-blue-printed-designer-gown-267246-1000x1375.jpg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Printed Designer Gown</h6>
                            <p class="text-plum fw-bold fs-5">₹3,500</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/images (23).jpeg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Churidar Material</h6>
                            <p class="text-plum fw-bold fs-5">₹2,500</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative">
                            <img src="images/images (14).jpeg" class="card-img-top" style="height:320px; object-fit:cover;">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span>
                        </div>
                        <div class="card-body text-center bg-white p-4">
                            <h6 class="fw-bold">Customised saree</h6>
                            <p class="text-plum fw-bold fs-5">₹5,000</p>
                            <button class="btn btn-plum w-100 rounded-0">Quick Purchase</button>
                        </div>
                    </div>
                </div>
            </div>`,

        myorders: `
    <div class="animate-fade-in">
    <div class="text-center mb-5">
        <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">My Orders</h2>
        <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
    </div>
    <div class="card border-0 shadow-sm" style="border-radius: 4px;">
        <div class="table-responsive">
            <table class="table align-middle mb-0 p-4 text-center">
                <thead style="background-color: #fcfcfc; border-bottom: 1px solid #eee;">
                    <tr class="text-uppercase small fw-bold" style="letter-spacing: 1px; color: var(--secondary-text);">
                        <th class="ps-4 py-3 border-0">Order ID</th>
                        <th class="ps-4 py-3 border-0">Date</th>
                        <th class="ps-4 py-3 border-0">Items</th>
                        <th class="ps-4 py-3 border-0">Total</th>
                        <th class="ps-4 py-3 border-0">Status</th>
                        <th class="ps-4 py-3 border-0 pe-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px dotted #eee;">
                        <td class="ps-4 py-4">
                            <span class="fw-bold" style="color: var(--plum);">#ORD1023</span>
                        </td>
                        <td class="text-secondary small">12 Jan 2026</td>
                        <td>3 Units</td>
                        <td class="fw-bold">₹1,899</td>
                        <td>
                            <span class="small text-uppercase fw-bold" style="color: #2e7d32; font-size: 0.7rem;">
                                 <i class="bi bi-circle-fill me-1" style="font-size: 0.4rem;"></i> Delivered
                            </span>
                        </td>
                        <td class=" ps-4 py-3 pe-4">
                            <button class="btn btn-sm btn-plum px-3 py-1" style="font-size: 0.75rem;">View</button>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px dotted #eee;">
                        <td class="ps-4 py-4">
                            <span class="fw-bold" style="color: var(--plum);">#ORD1024</span>
                        </td>
                        <td class="text-secondary small">15 Jan 2026</td>
                        <td>1 Unit</td>
                        <td class="fw-bold">₹799</td>
                        <td>
                            <span class="small text-uppercase fw-bold" style="color: #f57f17; font-size: 0.7rem;">
                                 <i class="bi bi-circle-fill me-1" style="font-size: 0.4rem;"></i> Processing
                            </span>
                        </td>
                        <td class="ps-4 py-3 pe-4">
                            <button class="btn btn-sm btn-outline-dark px-3 py-1" style="font-size: 0.75rem;">Track</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p class="text-center text-muted mt-4 small">Showing your recent purchases from the last 6 months.</p>
</div>`,
        trackorder: `
           <div class="container-fluid">
    <div class="row mb-4">
        <div class="col text-center" data-aos="fade-up">
            <h2 class="fw-semibold">Track Orders</h2>
            <p class="text-muted">Follow your order delivery status</p>
        </div>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">
            Order ID :#ORD1023
        </div>
        <div class="card-body" data-aos="fade-up" >
            <ul class="order-timeline">
                <li class="completed">
                    <span class="dot"></span>
                    <div>
                        <h6>Order Placed</h6>
                        <small>12 Jan 2026</small>
                    </div>
                </li>
                <li class="completed">
                    <span class="dot"></span>
                    <div>
                        <h6>Packed</h6>
                        <small>13 Jan 2026</small>
                    </div>
                </li>
                <li class="completed">
                    <span class="dot"></span>
                    <div>
                        <h6>Shipped</h6>
                        <small>16 Jan 2026</small>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Out for Delivery</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Delivered</h6>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">
            Order ID :#ORD1024
        </div>
        <div class="card-body" data-aos="fade-up">
            <ul class="order-timeline">
                <li class="completed">
                    <span class="dot"></span>
                    <div>
                        <h6>Order Placed</h6>
                        <small>12 Jan 2026</small>
                    </div>
                </li>
                <li class="current">
                    <span class="dot"></span>
                    <div>
                        <h6>Packed</h6>
                        <small>13 Jan 2026</small>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Shipped</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div><h6>Out for Delivery</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Delivered</h6>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">
            Order ID :#ORD1025
        </div>
        <div class="card-body" data-aos="fade-up">
            <ul class="order-timeline">
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Order Placed</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Packed</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Shipped</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Out for Delivery</h6>
                    </div>
                </li>
                <li>
                    <span class="dot"></span>
                    <div>
                        <h6>Delivered</h6>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>`,
offers:`
    <div class="animate-fade-in p-3">
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Exclusive Rewards</h2>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>
        <div class="row mb-5">
            <div class="col-12">
                <h5 class="fw-bold mb-4" style="font-family: 'Playfair Display'; color: var(--plum);"><i class="bi bi-ticket-perforated me-2"></i>Available Coupons</h5> 
                <div class="card border-0 mb-3 shadow-hover coupon-card"  data-aos="fade-up" data-aos-delay="100" >
                    <div class="card-body p-0 d-flex align-items-center">
                        <div class="bg-plum text-white p-4 text-center d-flex flex-column justify-content-center" style="min-width: 150px; border-right: 2px dashed #ffffff55;">
                            <h4 class="fw-bold mb-0">20%</h4>
                            <small class="opacity-75 text-uppercase" style="font-size:0.6rem;">Discount</small>
                        </div>
                        <div class="p-3 flex-grow-1 ps-4">
                            <h6 class="fw-bold mb-0">SAVE20</h6>
                            <p class="text-muted small mb-0">Valid on all Silk Saree collections above ₹1,499</p>
                        </div>
                        <div class="pe-4">
                            <button class="btn btn-plum rounded-0 px-4" onclick="copyCoupon('SAVE20', this)">Copy Code</button>
                        </div>
                    </div>
                </div>

                <div class="card border-0 mb-3 shadow-hover coupon-card"  data-aos="fade-up" data-aos-delay="200">
                    <div class="card-body p-0 d-flex align-items-center">
                        <div class="bg-olive text-white p-4 text-center d-flex flex-column justify-content-center" style="min-width: 150px; border-right: 2px dashed #ffffff55; background-color: var(--accent-olive);">
                            <h4 class="fw-bold mb-0">FREE</h4>
                            <small class="opacity-75 text-uppercase" style="font-size:0.6rem;">Shipping</small>
                        </div>
                        <div class="p-3 flex-grow-1 ps-4">
                            <h6 class="fw-bold mb-0">FREESHIP</h6>
                            <p class="text-muted small mb-0">Complimentary delivery for all prepaid orders this week.</p>
                        </div>
                        <div class="pe-4">
                            <button class="btn btn-plum rounded-0 px-4" onclick="copyCoupon('FREESHIP', this)">Copy Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-6"  data-aos="zoom-in">
                <div class="offer-banner position-relative overflow-hidden shadow" style="height: 250px; border-radius: 8px;">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" alt="Festive Sale">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4" style="background: linear-gradient(to right, rgba(75, 54, 72, 0.9), transparent);">
                        <div class="text-white">
                            <span class="badge mb-2" style="background: var(--accent-olive);">Season Special</span>
                            <h3 class="fw-bold" style="font-family: 'Playfair Display';">Festive Sale</h3>
                            <p class="small opacity-75">Up to 40% Off on Lehengas</p>
                            <button class="btn btn-light btn-sm rounded-0 px-3 mt-2">Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6"  data-aos="zoom-in" data-aos-delay="100">
                <div class="offer-banner position-relative overflow-hidden shadow" style="height: 250px; border-radius: 8px;">
                    <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" alt="Winter Collection">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4" style="background: linear-gradient(to right, rgba(107, 142, 35, 0.9), transparent);">
                        <div class="text-white">
                            <span class="badge mb-2" style="background: var(--accent-olive);">Exclusive</span>
                            <h3 class="fw-bold" style="font-family: 'Playfair Display';">Winter Edit</h3>
                            <p class="small opacity-75">Buy 2 Get 1 Free on Wraps & Shawls</p>
                            <button class="btn btn-light btn-sm rounded-0 px-3 mt-2">View Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="row mt-5">
    <div class="col-12"  data-aos="fade-up" data-aos-delay="100">
        <div class="hero-banner position-relative overflow-hidden shadow-lg" style="height: 300px; border-radius: 12px; background: #000;">
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=80" 
                 class="w-100 h-100 object-fit-cover opacity-50" alt="Clearance Sale">
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-5">
                <div class="animate-reveal">
                    <span class="text-white text-uppercase small mb-3 d-block" style="letter-spacing: 5px;">Limited Time Only</span>
                    <h1 class="display-4 fw-bold text-white mb-3" style="font-family: 'Playfair Display';">The Grand Clearance</h1>
                    <p class="text-white-50 fs-5 mb-4 mx-auto" style="max-width: 600px;">
                        Save up to <span class="text-white fw-bold">70% OFF</span> on selected Designer Collections. 
                        Once they're gone, they're gone.
                    </p>
                    <button class="btn btn-light btn-lg rounded-0 px-5 fw-bold text-plum hover-grow">Shop the Sale</button>
                </div>
            </div>
            <div style="position:absolute; top:20px; bottom:20px; left:20px; right:20px; border: 1px solid rgba(255,255,255,0.2); pointer-events:none;"></div>
        </div>
    </div>
</div>`,
    wishlist: `<div class="animate-fade-in p-3">  
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">My Wishlist</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Items you've fallen in love with</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 wishlist-item" data-aos="fade-up">
                <div class="card border-0 shadow-sm h-100 overflow-hidden">
                    <div class="position-relative product-container">
                        <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80" class="card-img-top object-fit-cover" alt="Floral Kurti" style="height: 300px;">
                        <div class="status-overlay position-absolute top-0 start-0 m-3">
                            <span class="badge rounded-pill bg-white text-success shadow-sm px-3 py-2" style="font-size: 0.65rem;">IN STOCK</span>
                        </div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm" title="Remove">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="card-body text-center p-4" data-aos="fade-up" data-aos-delay="100">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Floral Kurti</h6>
                        <p class="text-plum fw-bold mb-3">₹899</p>
                        <button class="btn btn-plum w-100 rounded-0 py-2 hover-grow">
                            <i class="bi bi-bag-plus me-2"></i>MOVE TO CART
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 wishlist-item" data-aos="fade-up" data-aos-delay="200" >
                <div class="card border-0 shadow-sm h-100 overflow-hidden">
                    <div class="position-relative product-container">
                        <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" class="card-img-top object-fit-cover" alt="Denim Jacket" style="height: 300px;">
                        <div class="status-overlay position-absolute top-0 start-0 m-3">
                            <span class="badge rounded-pill bg-white text-warning shadow-sm px-3 py-2" style="font-size: 0.65rem; color: #f57f17 !important;">LIMITED STOCK</span>
                        </div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="card-body text-center p-4">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Handloom double shade saree </h6>
                        <p class="text-plum fw-bold mb-3">₹1,499</p>
                        <button class="btn btn-plum w-100 rounded-0 py-2 hover-grow">
                            <i class="bi bi-bag-plus me-2"></i>MOVE TO CART
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 wishlist-item" data-aos="fade-up" data-aos-delay="300">
                <div class="card border-0 shadow-sm h-100 overflow-hidden opacity-75">
                    <div class="position-relative product-container">
                        <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80" class="card-img-top object-fit-cover grayscale" alt="Silk Saree" style="height: 300px; filter: grayscale(1);">
                        <div class="status-overlay position-absolute top-0 start-0 m-3">
                            <span class="badge rounded-pill bg-dark text-white shadow-sm px-3 py-2" style="font-size: 0.65rem;">OUT OF STOCK</span>
                        </div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="card-body text-center p-4">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Royal Silk Saree</h6>
                        <p class="text-muted mb-3">₹2,999</p>
                        <button class="btn btn-secondary w-100 rounded-0 py-2" disabled>NOTIFY ME</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
   address:`<div class="animate-fade-in p-3">    
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Shipping Addresses</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Where should we send your luxury pieces?</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>
        <div class="row mb-4">
            <div class="col text-end">
                <button class="btn btn-plum px-4 py-2 rounded-0 shadow-sm" style="font-size: 0.85rem; letter-spacing: 1px;">
                    <i class="bi bi-plus-lg me-2"></i>ADD NEW ADDRESS
                </button>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 address-item">
                <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden" 
                     style="border-top: 3px solid var(--accent-olive) !important;">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge rounded-pill px-3 py-2" 
                                  style="background-color: #f1f8e9; color: var(--accent-olive); font-size: 0.65rem; border: 1px solid var(--accent-olive);">
                                  <i class="bi bi-house-door-fill me-1"></i> DEFAULT HOME
                            </span>
                            <div class="dropdown">
                                <i class="bi bi-three-dots-vertical text-muted cursor-pointer" data-bs-toggle="dropdown"></i>
                            </div>
                        </div>
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display';">Keerthi V</h6>
                        <p class="card-text text-secondary small lh-lg">
                            12, MG Road<br>Bengaluru, Karnataka – 560001<br>
                            <span class="text-plum"><i class="bi bi-telephone me-2"></i>9876543210</span>
                        </p>
                        
                        <div class="d-flex gap-2 mt-4 pt-3 border-top">
                            <button class="btn btn-sm btn-outline-dark rounded-0 flex-grow-1" style="font-size: 0.75rem;">EDIT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.75rem;"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 address-item">
                <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden hover-border-plum">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge rounded-pill px-3 py-2 bg-light text-muted border" style="font-size: 0.65rem;">
                                <i class="bi bi-briefcase me-1"></i> OFFICE
                            </span>
                        </div>
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display';">Keerthi V</h6>
                        <p class="card-text text-secondary small lh-lg">
                            5th Floor, Tech Park<br>Chennai, Tamil Nadu – 600028<br>
                            <span class="text-plum"><i class="bi bi-telephone me-2"></i>9123456780</span>
                        </p>
                        <div class="d-flex gap-2 mt-4 pt-3 border-top">
                            <button class="btn btn-sm btn-outline-plum rounded-0 flex-grow-1" style="font-size: 0.75rem;">SET AS DEFAULT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.75rem;"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    paymentmethod:`<div class="animate-fade-in p-3">
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Payment Methods</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Your secure checkout preferences</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>

        <div class="row mb-4">
            <div class="col text-end">
                <button class="btn btn-plum px-4 py-2 rounded-0 shadow-sm" style="font-size: 0.85rem;">
                    <i class="bi bi-plus-lg me-2"></i>ADD NEW METHOD
                </button>
            </div>
        </div>

        <div class="row g-4">

            <div class="col-md-6 col-lg-4 payment-item">
    <div class="card border-0 shadow-sm h-100 overflow-hidden" 
         style="background: linear-gradient(135deg, var(--plum) 0%, #3a2a38 100%); border-radius: 12px; min-height: 220px;">
        
        <div class="card-body p-4 d-flex flex-column justify-content-between text-white">
            
            <div class="d-flex justify-content-between align-items-start">
                <i class="bi bi-chip fs-3" style="color: #ffd700 !important; opacity: 1;"></i>
                <span class="badge rounded-pill" style="background: rgba(255,255,255,0.2); color: black; border: 1px solid rgba(255,255,255,0.4); font-size: 0.6rem;">
                    DEFAULT
                </span>
            </div>
            
            <div class="my-3">
                <h5 class="mb-1 fw-normal text-black" style="letter-spacing: 4px; font-family: 'Courier New', monospace;">
                    **** **** **** 1234
                </h5>
                <small class="text-black-50 text-uppercase" style="font-size: 0.65rem;">
                    Debit Card • Exp 08/27
                </small>
            </div>
            
            <div class="d-flex justify-content-between align-items-center">
                <span class="small fw-bold text-black" style="letter-spacing: 1px;">KEERTHI V</span>
                <i class="bi bi-credit-card-2-front fs-4 text-black-50"></i>
            </div>
        </div>
        
        <div class="bg-white p-2 d-flex justify-content-center gap-3">
            <button class="btn btn-link btn-sm text-plum text-decoration-none fw-bold" style="font-size: 0.7rem; padding: 0;">EDIT</button>
            <span class="text-muted opacity-25">|</span>
            <button class="btn btn-link btn-sm text-danger text-decoration-none fw-bold" style="font-size: 0.7rem; padding: 0;">REMOVE</button>
        </div>
    </div>
</div>
            <div class="col-md-6 col-lg-4 payment-item">
                <div class="card border-0 shadow-sm h-100 overflow-hidden" style="background: linear-gradient(135deg, #636e72 0%, #2d3436 100%); color: white; border-radius: 12px;">
                    <div class="card-body p-4 d-flex flex-column justify-content-between" style="min-height: 200px;">
                        <div class="d-flex justify-content-between align-items-start">
                            <i class="bi bi-chip fs-3 text-white-50"></i>
                            <i class="bi bi-credit-card-2-front fs-4 opacity-50"></i>
                        </div>
                        <div class="my-3">
                            <h5 class="mb-1 fw-light" style="letter-spacing: 3px;">**** **** **** 9876</h5>
                            <small class="opacity-50 text-uppercase" style="font-size: 0.7rem;">Credit Card • Exp 11/26</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small fw-bold">KEERTHI V</span>
                            <span class="small opacity-75">MASTER</span>
                        </div>
                    </div>
                    <div class="bg-white p-2 d-flex justify-content-center gap-3">
                        <button class="btn btn-link btn-sm text-plum text-decoration-none fw-bold" style="font-size: 0.7rem;">SET DEFAULT</button>
                        <button class="btn btn-link btn-sm text-danger text-decoration-none fw-bold" style="font-size: 0.7rem;">REMOVE</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 payment-item">
                <div class="card border-0 shadow-sm h-100" style="background-color: #fcfdfa; border: 1px dashed var(--accent-olive) !important; border-radius: 12px;">
                    <div class="card-body p-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="mb-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; background: rgba(107, 142, 35, 0.1); color: var(--accent-olive);">
                            <i class="bi bi-qr-code-scan fs-3"></i>
                        </div>
                        <h6 class="fw-bold text-plum mb-1">UPI ID</h6>
                        <p class="text-muted small mb-3">keerthi@upi</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-outline-plum rounded-0 px-3" style="font-size: 0.7rem;">SET DEFAULT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.7rem;"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
notification:`
    <div class="animate-fade-in p-3">
        
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Notifications</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Your boutique activity & updates</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4 px-2">
            <span class="text-muted small">Showing 3 recent updates</span>
            <button class="btn btn-link text-plum fw-bold text-decoration-none small p-0" style="font-size: 0.75rem;">MARK ALL AS READ</button>
        </div>

        <div class="notification-container shadow-sm bg-white rounded-1">

            <div class="notif-item unread d-flex gap-3 p-4 border-bottom">
                <div class="notif-icon-circle bg-olive-light">
                    <i class="bi bi-box-seam" style="color: var(--accent-olive);"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Order Dispatched</h6>
                        <small class="text-muted" style="font-size: 0.7rem;">2 HOURS AGO</small>
                    </div>
                    <p class="mb-0 text-secondary small lh-base">
                        Your designer set <strong>#ORD1023</strong> is on the way! Our delivery partner is bringing your luxury parcel.
                    </p>
                </div>
                <div class="unread-dot"></div>
            </div>

            <div class="notif-item d-flex gap-3 p-4 border-bottom">
                <div class="notif-icon-circle bg-plum-light">
                    <i class="bi bi-stars text-plum"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Exclusive Reward</h6>
                        <small class="text-muted" style="font-size: 0.7rem;">YESTERDAY</small>
                    </div>
                    <p class="mb-0 text-secondary small lh-base">
                        Unlock 20% off on our New Arrivals with code <span class="text-plum fw-bold">STYLE20</span>. Valid for 48 hours.
                    </p>
                </div>
            </div>

            <div class="notif-item d-flex gap-3 p-4">
                <div class="notif-icon-circle bg-light">
                    <i class="bi bi-shield-check text-secondary"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Payment Confirmed</h6>
                        <small class="text-muted" style="font-size: 0.7rem;">2 DAYS AGO</small>
                    </div>
                    <p class="mb-0 text-secondary small lh-base">
                        We've received your payment of <strong>₹2,499</strong> for order #ORD1019. Your invoice is now available.
                    </p>
                </div>
            </div>
        </div>
    </div> `,

        // --- ADMIN PAGES ---
    adminhome: `
    <div class="container-fluid animate-fade-in p-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display';">Executive Overview</h2>
                <p class="text-muted small">Real-time data for Elegance Boutique</p>
            </div>
            <button class="btn btn-plum shadow-sm" onclick="window.print()">
                <i class="bi bi-download me-2"></i>Export Report
            </button>
        </div>

        <div class="row g-4 mb-5">
            <div class="col-md-3">
                <div class="card border-0 shadow-sm p-3 h-100 border-start border-plum border-4">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="text-muted small mb-1 fw-bold">TOTAL REVENUE</p>
                            <h3 class="fw-bold">₹4,25,890</h3>
                            <span class="text-success small"><i class="bi bi-arrow-up"></i> +12.5%</span>
                        </div>
                        <div class="text-plum fs-3"><i class="bi bi-currency-rupee"></i></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 shadow-sm p-3 h-100 border-start border-success border-4">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="text-muted small mb-1 fw-bold">ACTIVE ORDERS</p>
                            <h3 class="fw-bold">156</h3>
                            <span class="text-muted small">8 pending shipping</span>
                        </div>
                        <div class="text-success fs-3"><i class="bi bi-bag-check"></i></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 shadow-sm p-3 h-100 border-start border-warning border-4">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="text-muted small mb-1 fw-bold">NEW CUSTOMERS</p>
                            <h3 class="fw-bold">1,204</h3>
                            <span class="text-success small"><i class="bi bi-arrow-up"></i> +5%</span>
                        </div>
                        <div class="text-warning fs-3"><i class="bi bi-people"></i></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 shadow-sm p-3 h-100 border-start border-danger border-4">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="text-muted small mb-1 fw-bold">LOW STOCK ITEMS</p>
                            <h3 class="fw-bold">12</h3>
                            <span class="text-danger small">Requires attention</span>
                        </div>
                        <div class="text-danger fs-3"><i class="bi bi-exclamation-triangle"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-4">Sales Performance (Weekly)</h5>
                    <canvas id="salesChart" style="max-height: 300px;"></canvas>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-0 shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-4">Recent Transactions</h5>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item px-0 border-0 mb-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="mb-0 fw-bold">Silk Saree - Crimson</h6>
                                    <small class="text-muted">Order #8821 • 2 mins ago</small>
                                </div>
                                <span class="badge bg-success-subtle text-success">₹12,500</span>
                            </div>
                        </div>
                        <div class="list-group-item px-0 border-0 mb-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="mb-0 fw-bold">Designer Kurta</h6>
                                    <small class="text-muted">Order #8820 • 15 mins ago</small>
                                </div>
                                <span class="badge bg-success-subtle text-success">₹4,200</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-outline-plum btn-sm mt-auto" onclick="loadContent('allOrders')">View All Orders</button>
                </div>
            </div>
        </div>
    </div>`,
    };

    // 3. SIDEBAR MODULES
    const sidebarConfigs = {
    
    Admin: `
    <div class="d-flex flex-column p-3 sidebar-admin-custom" style="min-height: 100vh;">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link-dash active mb-1" onclick="loadContent('adminhome', this)"><i class="bi bi-house me-2"></i>Home</a>
            </li>
            <li>
                <a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#userMgmt"><i class="bi bi-people me-2"></i> User Management</a>
                <div class="collapse ps-3" id="userMgmt">
                    <a href="#" class="nav-link-dash small" onclick="loadContent('customers', this)">Customers</a>
                    <a href="#" class="nav-link-dash small" onclick="loadContent('salesStaff', this)">Sales Staff</a>
                    <a href="#" class="nav-link-dash small" onclick="loadContent('deliveryStaff', this)">Delivery Staff</a>
                </div>
            </li>
            <li>
                <a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#productMgmt"><i class="bi bi-box-seam me-2"></i> Products</a>
                <div class="collapse ps-3" id="productMgmt">
                    <a href="#" class="nav-link-dash small" onclick="loadContent('addProduct', this)">Add Product</a>
                    <a href="#" class="nav-link-dash small" onclick="loadContent('viewProducts', this)">View Products</a>
                </a>
            </li>
            <li>
                <a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#orderMgmt"><i class="bi bi-receipt me-2"></i> Orders</a>
                <div class="collapse ps-3" id="orderMgmt">
                    <a href="#" class="nav-link-dash small" onclick="loadContent('allOrders', this)">All Orders</a>
                    <a href="#" class="nav-link-dash small" onclick="loadContent('pendingOrders', this)">Pending</a>
                </div>
            </li>
            <li>
                <a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#reports"><i class="bi bi-bar-chart-line me-2"></i> Analytics</a>
                <div class="collapse ps-3" id="reports">
                    <a href="#" class="nav-link-dash small" onclick="loadContent('salesReport', this)">Sales Report</a>
                </div>
            </li>
        </ul>
    </div>`,
    
    Client: `
            <div class="px-3 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;">Market place</div>
            <a onclick="loadContent('home', this)" class="nav-link-dash"><i class="bi bi-house me-2"></i> Home</a>
            <a onclick="loadContent('newarrivals', this)" class="nav-link-dash active"><i class="bi bi-bag-heart me-2"></i> New Arrivals</a>
            <a onclick="loadContent('myorders', this)" class="nav-link-dash"><i class="bi bi-clock-history me-2"></i> My Orders</a>
            <a onclick="loadContent('trackorder', this)" class="nav-link-dash"><i class="bi bi-truck me-2"></i> Track Orders</a>
            <a onclick="loadContent('offers', this)" class="nav-link-dash"><i class="bi bi-tags me-2"></i> Offers / Coupons</a>
            <a onclick="loadContent('wishlist', this)" class="nav-link-dash"><i class="bi bi-heart me-2"></i> Wishlist</a>
            
            
            <div class="px-3 mt-4 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;">Settings</div>
            <a onclick="loadContent('address',this)" class="nav-link-dash"><i class="bi bi-geo-alt me-2"></i> Saved Addresses</a>
            <a onclick="loadContent('paymentmethod',this)" class="nav-link-dash"><i class="bi bi-wallet2 me-2"></i> Payment Methods</a>
            <a onclick="loadContent('notification',this)" class="nav-link-dash"><i class="bi bi-bell me-2"></i> Notifications</a>`
    };

    // 4. NAVIGATION LOGIC
    function loadContent(pageKey, element) {
        const contentArea = document.getElementById('dashboardContent');
        
        // 1. Swap HTML
        if (pages[pageKey]) {
            contentArea.innerHTML = pages[pageKey];
        } else {
            contentArea.innerHTML = `<h2 class="fw-bold">${pageKey.toUpperCase()}</h2><p>This module is coming soon.</p>`;
        }
        if (pageKey === 'home') {
        startCountdown();
    }

        // 2. Manage Active State for sidebar links
        document.querySelectorAll('.nav-link-dash').forEach(link => link.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        }
    }

function init() {
    const role = user.role || 'Client';
    document.getElementById('sidebarMenu').innerHTML = sidebarConfigs[role] || sidebarConfigs.Client;

    if (role === 'Admin') loadContent('adminhome');
    else if (role === 'Sales') loadContent('saleshome');
    else if (role === 'Delivery') loadContent('deliveryhome');
    else loadContent('home');
}
function startCountdown() {
    let totalSeconds = 24 * 60 * 60; // 24 hours
    
    // Clear any existing interval to prevent multiple timers running at once
    if (window.timerInterval) clearInterval(window.timerInterval);

    window.timerInterval = setInterval(() => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        const hEl = document.getElementById("hours");
        const mEl = document.getElementById("minutes");
        const sEl = document.getElementById("seconds");

        if(hEl && mEl && sEl) {
            hEl.innerText = h.toString().padStart(2, '0');
            mEl.innerText = m.toString().padStart(2, '0');
            sEl.innerText = s.toString().padStart(2, '0');
        } else {
            // If elements are gone (user moved to another page), stop the timer
            clearInterval(window.timerInterval);
        }
        
        totalSeconds--;
        if (totalSeconds < 0) clearInterval(window.timerInterval);
    }, 1000);
}


    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
   
function copyCoupon(code, btn) {
    navigator.clipboard.writeText(code);
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.classList.replace('btn-plum', 'btn-success');
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.replace('btn-success', 'btn-plum');
    }, 2000);
}


    init();