const user = JSON.parse(localStorage.getItem('currentUser'));
if (!user) {window.location.href = 'login.html';}

  const pages = {
        home:`<div class="container-fluid px-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold text-olive-drab mb-1">Welcome, ${user.email.split('@')[0]}</h4>
                <div class="position-relative">
                    <button class="btn btn-plum"><i class="bi bi-cart3 me-2"></i>Cart</button>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </div></div>
                <div class="card p-0 border-0 shadow-sm overflow-hidden mb-5">
                <div class="row g-0 align-items-center">
                    <div class="col-md-2 bg-plum text-white text-center py-4" data-aos="fade-up" data-aos-delay="100"><i class="bi bi-truck display-3"></i></div>
                    <div class="col-md-10 p-4 bg-white" data-aos="fade-up" data-aos-delay="200">
                        <div class="d-flex justify-content-between mb-2"> <h6 class="fw-bold m-0">Tracking Order #ELG-8821</h6><span class="text-plum fw-bold small">65% Completed</span></div>
                        <div class="progress mb-2" style="height: 10px;"><div class="progress-bar bg-plum" style="width: 65%" data-aos-delay="300"></div></div>
                        <div class="d-flex justify-content-between small text-muted" data-aos="fade-up" data-aos-delay="400"><span>Status: In Transit</span><span>ETA: Tomorrow, 4:00 PM</span>
                        </div></div></div></div>
    <div class="row mb-5 text-center"><h5 class="fw-semibold mb-3">Shop by Category</h5>
        <div class="col-3" data-aos="fade-up" data-aos-delay="100"><img src="images/images (14).jpeg" class="rounded-circle mb-2" alt="Saree"><p class="small">Sarees</p></div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="200"><img src="images/party.jpg" class="rounded-circle mb-2" alt="Party Wear"><p class="small">Party Wear</p></div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="400"><img src="images/images (21).jpeg" class="rounded-circle mb-2" alt="Daily Wear"><p class="small">Daily Wear</p></div>
        <div class="col-3" data-aos="fade-up" data-aos-delay="500"><img src="images/wedding.jpg" class="rounded-circle mb-2" alt="Wedding"><p class="small">Wedding</p></div>
    </div>
    <div class="row mb-5">
    <div class="col-12 px-0" data-aos="zoom-in">
        <div class="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden shadow-lg " style="min-height: 450px; background-color: var(--accent-olive); border-radius: 8px;">
            <img src="images/bg.jpg" alt="Designer Couture" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.55;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(168, 246, 179, 0.47), rgba(0,0,0,0.4));"></div>
            <div class="position-relative z-1 px-4 text-white"><span class="badge rounded-pill mb-3 px-4 py-2" style="background-color: var(--accent-olive); letter-spacing: 3px; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.3);">LIMITED TIME OFFER</span> <h1 class="display-3 fw-bold mb-3" style="font-family: 'Playfair Display'; letter-spacing: 4px;">⚡ FLASH SALE</h1>
                <div class="d-flex justify-content-center gap-3 mb-4 mt-2">
                    <div class="countdown-card"><span id="hours" class="fs-2 fw-bold d-block">23</span><small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Hours</small></div>
                    <div class="countdown-card"><span id="minutes" class="fs-2 fw-bold d-block">59</span><small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Mins</small></div>
                    <div class="countdown-card"><span id="seconds" class="fs-2 fw-bold d-block">59</span><small class="text-uppercase" style="font-size: 0.6rem; letter-spacing: 1px;">Secs</small></div>
                </div>
                <p class="fs-5 mb-4 text-uppercase fw-light" style="letter-spacing: 4px;">Flat <span class="fw-bold" style="color: #ffd700;">30% OFF</span> on Wedding Collection</p>
                <div class="d-flex gap-3 justify-content-center"><button class="btn btn-light px-5 py-2 rounded-0 fw-bold text-plum shadow-sm">SHOP COLLECTION</button><button class="btn btn-outline-light px-4 py-2 rounded-0 fw-bold">CODE: STYLE30</button>
                </div></div></div></div></div>
    <div class="row mb-5">
        <h5 class="fw-semibold mb-3" data-aos="fade-down">Trend Setters 🔥</h5>
        <div class="col-md-4" data-aos="fade-up">
            <div class="card shadow-hover h-100"><img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80" class="card-img-top" style="height:400px;">
                <div class="card-body"><h6 class="card-title">Designer Saree</h6><p class="small text-muted">⭐ 4.8 (320 reviews)</p><p class="fw-semibold">₹2,999</p>
                   <div class="product-actions-container"><button class="btn btn-quick-purchase">Quick Purchase</button><button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button></div>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-hover h-100"><img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80" class="card-img-top" style="height:400px;">
                <div class="card-body"><h6 class="card-title">Party Wear Gown</h6><p class="small text-muted">⭐ 4.6 (210 reviews)</p><p class="fw-semibold">₹4,499</p>
                    <div class="product-actions-container"><button class="btn btn-quick-purchase">Quick Purchase</button><button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button></div>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card shadow-hover h-100"><img src="images/wed lehanga.jpg" class="card-img-top" style="height:400px;">
                <div class="card-body"><h6 class="card-title">Wedding Lehenga</h6><p class="small text-muted">⭐ 4.9 (500+ reviews)</p><p class="fw-semibold">₹8,999</p>
                    <div class="product-actions-container"><button class="btn btn-quick-purchase">Quick Purchase</button><button class="btn btn-wishlist-outline"><i class="bi bi-heart"></i></button></div>
                </div></div></div></div>
<div class="row g-4 mb-5 pb-5">
    <div class="col-12 px-3">
        <div class="card border-0 overflow-hidden shadow-lg offer-banner-animated" style="border-radius: 12px; transition: transform 0.4s ease;">
            <div class="row g-0">
                <div class="col-md-3 d-none d-md-flex align-items-center justify-content-center position-relative" data-aos="fade-up" style="background: var(--seconadry-text); overflow: hidden;"><i class="bi bi-stars text-white fs-1 opacity-25 floating-icon"></i>
                    <div class="shimmer-effect"></div>
                </div>
                <div class="col-md-9">
                    <div class="card-body p-4 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between " style="background: linear-gradient(90deg, var(--accent-olive) 0%, #80a035 100%); color: white;">
                        <div class="animate-text"><h4 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 1px;">✨ Festive Luxe Edit</h4><p class="mb-0 small opacity-90">Unlock an extra 25% off your next purchase.</p></div>
                        <div class="mt-3 mt-md-0">
                            <div class="coupon-tag "><span class="small opacity-75 me-1" >CODE:</span> <span class="fw-bold" style="color: var(--primary-text);">STYLE25</span></div>
                        </div></div></div></div></div></div>
    <div class="col-md-7 mx-auto mt-5">
        <div class="card border-0 shadow-lg concierge-card-float p-2" style="border-radius: 25px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4);">
            <div class="card-body text-center py-4">
                <div class="position-relative mx-auto mb-4" style="width: 80px; height: 80px;">
                    <div class="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center w-100 h-100 border"><i class="bi bi-chat-heart fs-2" style="color: var(--plum);"></i></div>
                    <span class="position-absolute top-0 end-0 translate-middle p-2 bg-success border border-light rounded-circle pulse-online"></span></div>
                <h5 class="fw-bold text-plum mb-2" style="font-family: 'Playfair Display';">Help & Support</h5>
                <p class="text-muted small px-lg-5 mb-4">Our master stylists are currently online and ready to help you find the perfect fit.</p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <button class="btn btn-plum rounded-pill px-4 py-2 shadow transition-button"><i class="bi bi-whatsapp me-2"></i> START CHATTING</button><button class="btn btn-light  px-4 py-2">EMAIL US</button></div>
            </div></div></div></div>`,
        newarrivals: `<div class="d-flex justify-content-between align-items-center mb-4"  data-aos="fade-up"><h4 class="fw-bold text-olive-drab mb-1">NEW ARRIVALS</h4>
                <div class="position-relative"><button class="btn btn-plum"><i class="bi bi-cart3 me-2"></i>Cart</button><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span></div>
            </div>
            <div class="row g-4 mb-5">
               <div class="col-md-4"  data-aos="fade-up">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/images (30).jpeg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Banarasi Silk Saree</h6><p class="text-plum fw-bold fs-5">₹12,500</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div>
                <div class="col-md-4"  data-aos="fade-up" data-aos-delay="100">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/AD804-1500x1500.jpg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Royal Wedding Lehanga</h6><p class="text-plum fw-bold fs-5">₹25,000</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div>
                <div class="col-md-4"  data-aos="fade-up" data-aos-delay="200">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/images (21).jpeg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Embroidered Ethnic Kurthi</h6><p class="text-plum fw-bold fs-5">₹5,000</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div></div>
             <div class="row g-4 mb-5">
               <div class="col-md-4"  data-aos="fade-up" data-aos-delay="300">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/princely-blue-printed-designer-gown-267246-1000x1375.jpg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Printed Designer Gown</h6><p class="text-plum fw-bold fs-5">₹3,500</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/images (23).jpeg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Churidar Material</h6><p class="text-plum fw-bold fs-5">₹2,500</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div>
                <div class="col-md-4"  data-aos="fade-up" data-aos-delay="500">
                    <div class="card h-100 border-0 shadow-hover overflow-hidden">
                        <div class="position-relative"><img src="images/images (14).jpeg" class="card-img-top" style="height:320px; object-fit:cover;"><span class="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-0 px-3 py-2 shadow-sm">NEW</span></div>
                        <div class="card-body text-center bg-white p-4"><h6 class="fw-bold">Customised saree</h6><p class="text-plum fw-bold fs-5">₹5,000</p><button class="btn btn-plum w-100 rounded-0">Quick Purchase</button></div>
                    </div></div></div>`,

        myorders: `<div class="container-fluid">
    <div class="text-center mb-5">
        <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up">My Orders</h2>
        <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
    </div>
    <div class="card border-0 shadow-sm" style="border-radius: 4px;"  data-aos="fade-up">
        <div class="table-responsive"  data-aos="fade-up" data-aos-delay="100">
            <table class="table align-middle mb-0 p-4 text-center">
                <thead style="background-color: #fcfcfc; border-bottom: 1px solid #eee;"><tr class="text-uppercase small fw-bold" style="letter-spacing: 1px; color: var(--secondary-text);">
                        <th class="ps-4 py-3 border-0">Order ID</th><th class="ps-4 py-3 border-0">Date</th><th class="ps-4 py-3 border-0">Items</th><th class="ps-4 py-3 border-0">Total</th><th class="ps-4 py-3 border-0">Status</th><th class="ps-4 py-3 border-0 pe-4">Action</th></tr>
                </thead>
                <tbody><tr style="border-bottom: 1px dotted #eee;">
                        <td class="ps-4 py-4"><span class="fw-bold" style="color: var(--plum);">#ORD1023</span></td><td class="text-secondary small">12 Jan 2026</td><td>3 Units</td><td class="fw-bold">₹1,899</td>
                        <td><span class="small text-uppercase fw-bold" style="color: #2e7d32; font-size: 0.7rem;"><i class="bi bi-circle-fill me-1" style="font-size: 0.4rem;"></i> Delivered</span></td>
                        <td class=" ps-4 py-3 pe-4"><button class="btn btn-sm btn-plum px-3 py-1" style="font-size: 0.75rem;">View</button></td></tr>
                    <tr style="border-bottom: 1px dotted #eee;">
                        <td class="ps-4 py-4"><span class="fw-bold" style="color: var(--plum);">#ORD1024</span></td><td class="text-secondary small">15 Jan 2026</td><td>1 Unit</td><td class="fw-bold">₹799</td>
                        <td><span class="small text-uppercase fw-bold" style="color: #f57f17; font-size: 0.7rem;"><i class="bi bi-circle-fill me-1" style="font-size: 0.4rem;"></i> Processing</span></td>
                        <td class="ps-4 py-3 pe-4"><button class="btn btn-sm btn-outline-dark px-3 py-1" style="font-size: 0.75rem;">Track</button></td></tr>
                </tbody></table></div></div>
    <p class="text-center text-muted mt-4 small">Showing your recent purchases from the last 6 months.</p></div>`,
        trackorder: `<div class="container-fluid">
    <div class="row mb-4">
        <div class="col text-center" data-aos="fade-up"><h2 class="fw-semibold">Track Orders</h2>
        <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Follow your order delivery status</p>
        <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px; margin-bottom:25px;"></div>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">Order ID :#ORD1023</div>
        <div class="card-body" data-aos="fade-up" >
            <ul class="order-timeline">
                <li class="completed"><span class="dot"></span><div><h6>Order Placed</h6><small>12 Jan 2026</small></div></li>
                <li class="completed"><span class="dot"></span><div><h6>Packed</h6><small>13 Jan 2026</small></div></li>
                <li class="completed"><span class="dot"></span><div><h6>Shipped</h6><small>16 Jan 2026</small></div></li>
                <li><span class="dot"></span><div><h6>Out for Delivery</h6></div></li>
                <li><span class="dot"></span><div><h6>Delivered</h6></div></li></ul>
        </div></div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">Order ID :#ORD1024</div>
        <div class="card-body" data-aos="fade-up">
            <ul class="order-timeline">
                <li class="completed"><span class="dot"></span><div><h6>Order Placed</h6><small>12 Jan 2026</small></div></li>
                <li class="current"><span class="dot"></span><div><h6>Packed</h6><small>13 Jan 2026</small></div></li>
                <li><span class="dot"></span><div><h6>Shipped</h6></div></li>
                <li><span class="dot"></span><div><h6>Out for Delivery</h6></div></li>
                <li><span class="dot"></span><div><h6>Delivered</h6></div></li></ul>
        </div></div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-semibold">Order ID :#ORD1025</div>
        <div class="card-body" data-aos="fade-up">
            <ul class="order-timeline">
                <li><span class="dot"></span><div><h6>Order Placed</h6></div></li>
                <li><span class="dot"></span><div><h6>Packed</h6></div></li>
                <li><span class="dot"></span><div><h6>Shipped</h6></div></li>
                <li><span class="dot"></span><div><h6>Out for Delivery</h6></div></li>
                <li><span class="dot"></span><div><h6>Delivered</h6></div></li></ul>
        </div></div></div>`,
    offers:`<div class="animate-fade-in p-3">
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
                            <h4 class="fw-bold mb-0">20%</h4><small class="opacity-75 text-uppercase" style="font-size:0.6rem;">Discount</small></div>
                        <div class="p-3 flex-grow-1 ps-4"><h6 class="fw-bold mb-0">SAVE20</h6><p class="text-muted small mb-0">Valid on all Silk Saree collections above ₹1,499</p></div>
                        <div class="pe-4"><button class="btn btn-plum rounded-0 px-4" onclick="copyCoupon('SAVE20', this)">Copy Code</button></div>
                    </div></div>
                <div class="card border-0 mb-3 shadow-hover coupon-card"  data-aos="fade-up" data-aos-delay="200">
                    <div class="card-body p-0 d-flex align-items-center">
                        <div class="bg-olive text-white p-4 text-center d-flex flex-column justify-content-center" style="min-width: 150px; border-right: 2px dashed #ffffff55; background-color: var(--accent-olive);">
                            <h4 class="fw-bold mb-0">FREE</h4><small class="opacity-75 text-uppercase" style="font-size:0.6rem;">Shipping</small></div>
                        <div class="p-3 flex-grow-1 ps-4"><h6 class="fw-bold mb-0">FREESHIP</h6><p class="text-muted small mb-0">Complimentary delivery for all prepaid orders this week.</p></div>
                        <div class="pe-4"><button class="btn btn-plum rounded-0 px-4" onclick="copyCoupon('FREESHIP', this)">Copy Code</button></div>
                    </div></div></div></div>
        <div class="row g-4">
            <div class="col-md-6"  data-aos="zoom-in">
                <div class="offer-banner position-relative overflow-hidden shadow" style="height: 250px; border-radius: 8px;">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" alt="Festive Sale">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4" style="background: linear-gradient(to right, rgba(75, 54, 72, 0.9), transparent);">
                        <div class="text-white">
                            <span class="badge mb-2" style="background: var(--accent-olive);">Season Special</span><h3 class="fw-bold" style="font-family: 'Playfair Display';">Festive Sale</h3>
                            <p class="small opacity-75">Up to 40% Off on Lehengas</p><button class="btn btn-light btn-sm rounded-0 px-3 mt-2">Explore Now</button></div>
                    </div></div></div>
            <div class="col-md-6"  data-aos="zoom-in" data-aos-delay="100">
                <div class="offer-banner position-relative overflow-hidden shadow" style="height: 250px; border-radius: 8px;">
                    <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" alt="Winter Collection">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4" style="background: linear-gradient(to right, rgba(107, 142, 35, 0.9), transparent);">
                        <div class="text-white">
                            <span class="badge mb-2" style="background: var(--accent-olive);">Exclusive</span><h3 class="fw-bold" style="font-family: 'Playfair Display';">Winter Edit</h3>
                            <p class="small opacity-75">Buy 2 Get 1 Free on Wraps & Shawls</p><button class="btn btn-light btn-sm rounded-0 px-3 mt-2">View Edit</button></div>
                    </div></div></div></div></div>
<div class="row mt-5">
    <div class="col-12"  data-aos="fade-up" data-aos-delay="100">
        <div class="hero-banner position-relative overflow-hidden shadow-lg" style="height: 300px; border-radius: 12px; background: #000;">
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=80" 
                 class="w-100 h-100 object-fit-cover opacity-50" alt="Clearance Sale">
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-5">
                <div class="animate-reveal">
                    <span class="text-white text-uppercase small mb-3 d-block" style="letter-spacing: 5px;">Limited Time Only</span>
                    <h1 class="display-4 fw-bold text-white mb-3" style="font-family: 'Playfair Display';">The Grand Clearance</h1>
                    <p class="text-white-50 fs-5 mb-4 mx-auto" style="max-width: 600px;">Save up to <span class="text-white fw-bold">70% OFF</span> on selected Designer Collections. 
                        Once they're gone, they're gone.</p>
                    <button class="btn btn-light btn-lg rounded-0 px-5 fw-bold text-plum hover-grow">Shop the Sale</button>
                </div></div>
            <div style="position:absolute; top:20px; bottom:20px; left:20px; right:20px; border: 1px solid rgba(255,255,255,0.2); pointer-events:none;"></div>
        </div></div></div>`,

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
                        <div class="status-overlay position-absolute top-0 start-0 m-3"><span class="badge rounded-pill bg-white text-success shadow-sm px-3 py-2" style="font-size: 0.65rem;">IN STOCK</span></div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm" title="Remove"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="card-body text-center p-4" data-aos="fade-up" data-aos-delay="100">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Floral Kurti</h6><p class="text-plum fw-bold mb-3">₹899</p>
                        <button class="btn btn-plum w-100 rounded-0 py-2 hover-grow"><i class="bi bi-bag-plus me-2"></i>MOVE TO CART</button>
                    </div></div></div>
            <div class="col-md-6 col-lg-4 wishlist-item" data-aos="fade-up" data-aos-delay="200" >
                <div class="card border-0 shadow-sm h-100 overflow-hidden">
                    <div class="position-relative product-container">
                        <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" class="card-img-top object-fit-cover" alt="Denim Jacket" style="height: 300px;">
                        <div class="status-overlay position-absolute top-0 start-0 m-3"><span class="badge rounded-pill bg-white text-warning shadow-sm px-3 py-2" style="font-size: 0.65rem; color: #f57f17 !important;">LIMITED STOCK</span></div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="card-body text-center p-4">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Handloom double shade saree </h6>
                        <p class="text-plum fw-bold mb-3">₹1,499</p>
                        <button class="btn btn-plum w-100 rounded-0 py-2 hover-grow"><i class="bi bi-bag-plus me-2"></i>MOVE TO CART</button>
                    </div></div></div>
            <div class="col-md-6 col-lg-4 wishlist-item" data-aos="fade-up" data-aos-delay="300">
                <div class="card border-0 shadow-sm h-100 overflow-hidden opacity-75">
                    <div class="position-relative product-container">
                        <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80" class="card-img-top object-fit-cover grayscale" alt="Silk Saree" style="height: 300px; filter: grayscale(1);">
                        <div class="status-overlay position-absolute top-0 start-0 m-3"><span class="badge rounded-pill bg-dark text-white shadow-sm px-3 py-2" style="font-size: 0.65rem;">OUT OF STOCK</span></div>
                        <button class="remove-btn position-absolute top-0 end-0 m-3 btn btn-light btn-sm rounded-circle shadow-sm"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="card-body text-center p-4">
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display'; font-size: 1.1rem;">Royal Silk Saree</h6>
                        <p class="text-muted mb-3">₹2,999</p><button class="btn btn-secondary w-100 rounded-0 py-2" disabled>NOTIFY ME</button>
                    </div></div></div></div></div>`,
   address:`<div class="animate-fade-in p-3">    
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Shipping Addresses</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Where should we send your luxury pieces?</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>
        <div class="row mb-4">
            <div class="col text-end">
                <button class="btn btn-plum px-4 py-2 rounded-0 shadow-sm" style="font-size: 0.85rem; letter-spacing: 1px;"><i class="bi bi-plus-lg me-2"></i>ADD NEW ADDRESS</button>
            </div></div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 address-item">
                <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden" style="border-top: 3px solid var(--accent-olive) !important;">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge rounded-pill px-3 py-2" style="background-color: #f1f8e9; color: var(--accent-olive); font-size: 0.65rem; border: 1px solid var(--accent-olive);">
                                  <i class="bi bi-house-door-fill me-1"></i> DEFAULT HOME</span>
                            <div class="dropdown"><i class="bi bi-three-dots-vertical text-muted cursor-pointer" data-bs-toggle="dropdown"></i></div>
                        </div>
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display';">Keerthi V</h6>
                        <p class="card-text text-secondary small lh-lg">12, MG Road<br>Bengaluru, Karnataka – 560001<br>
                            <span class="text-plum"><i class="bi bi-telephone me-2"></i>9876543210</span></p>
                        <div class="d-flex gap-2 mt-4 pt-3 border-top"><button class="btn btn-sm btn-outline-dark rounded-0 flex-grow-1" style="font-size: 0.75rem;">EDIT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.75rem;"><i class="bi bi-trash"></i></button>
                        </div></div></div></div>
            <div class="col-md-6 col-lg-4 address-item">
                <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden hover-border-plum">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge rounded-pill px-3 py-2 bg-light text-muted border" style="font-size: 0.65rem;"><i class="bi bi-briefcase me-1"></i> OFFICE</span>
                        </div>
                        <h6 class="fw-bold mb-1" style="font-family: 'Playfair Display';">Keerthi V</h6>
                        <p class="card-text text-secondary small lh-lg">5th Floor, Tech Park<br>Chennai, Tamil Nadu – 600028<br>
                            <span class="text-plum"><i class="bi bi-telephone me-2"></i>9123456780</span></p>
                        <div class="d-flex gap-2 mt-4 pt-3 border-top">
                            <button class="btn btn-sm btn-outline-plum rounded-0 flex-grow-1" style="font-size: 0.75rem;">SET AS DEFAULT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.75rem;"><i class="bi bi-trash"></i></button>
                        </div></div></div></div></div></div>`,
    paymentmethod:`<div class="animate-fade-in p-3">
        <div class="text-center mb-5">
            <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Payment Methods</h2>
            <p class="text-muted small text-uppercase" style="letter-spacing: 2px;">Your secure checkout preferences</p>
            <div class="mx-auto" style="width: 40px; height: 1px; background-color: var(--accent-olive); margin-top: 10px;"></div>
        </div>
        <div class="row mb-4">
            <div class="col text-end"><button class="btn btn-plum px-4 py-2 rounded-0 shadow-sm" style="font-size: 0.85rem;"><i class="bi bi-plus-lg me-2"></i>ADD NEW METHOD</button>
            </div></div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 payment-item">
    <div class="card border-0 shadow-sm h-100 overflow-hidden" style="background: linear-gradient(135deg, var(--plum) 0%, #3a2a38 100%); border-radius: 12px; min-height: 220px;">
        <div class="card-body p-4 d-flex flex-column justify-content-between text-white"> 
            <div class="d-flex justify-content-between align-items-start"><i class="bi bi-chip fs-3" style="color: #ffd700 !important; opacity: 1;"></i>
                <span class="badge rounded-pill" style="background: rgba(255,255,255,0.2); color: black; border: 1px solid rgba(255,255,255,0.4); font-size: 0.6rem;">DEFAULT</span>
            </div>
            <div class="my-3">
                <h5 class="mb-1 fw-normal text-black" style="letter-spacing: 4px; font-family: 'Courier New', monospace;">**** **** **** 1234</h5>
                <small class="text-black-50 text-uppercase" style="font-size: 0.65rem;">Debit Card • Exp 08/27</small>
            </div>
            <div class="d-flex justify-content-between align-items-center"><span class="small fw-bold text-black" style="letter-spacing: 1px;">KEERTHI V</span><i class="bi bi-credit-card-2-front fs-4 text-black-50"></i></div>
        </div>
        <div class="bg-white p-2 d-flex justify-content-center gap-3">
            <button class="btn btn-link btn-sm text-plum text-decoration-none fw-bold" style="font-size: 0.7rem; padding: 0;">EDIT</button>
            <span class="text-muted opacity-25">|</span><button class="btn btn-link btn-sm text-danger text-decoration-none fw-bold" style="font-size: 0.7rem; padding: 0;">REMOVE</button>
        </div></div></div>
            <div class="col-md-6 col-lg-4 payment-item">
                <div class="card border-0 shadow-sm h-100 overflow-hidden" style="background: linear-gradient(135deg, #636e72 0%, #2d3436 100%); color: white; border-radius: 12px;">
                    <div class="card-body p-4 d-flex flex-column justify-content-between" style="min-height: 200px;">
                        <div class="d-flex justify-content-between align-items-start"><i class="bi bi-chip fs-3 text-white-50"></i><i class="bi bi-credit-card-2-front fs-4 opacity-50"></i></div>
                        <div class="my-3"><h5 class="mb-1 fw-light" style="letter-spacing: 3px;">**** **** **** 9876</h5><small class="opacity-50 text-uppercase" style="font-size: 0.7rem;">Credit Card • Exp 11/26</small></div>
                        <div class="d-flex justify-content-between align-items-center"><span class="small fw-bold">KEERTHI V</span><span class="small opacity-75">MASTER</span></div>
                    </div>
                    <div class="bg-white p-2 d-flex justify-content-center gap-3">
                        <button class="btn btn-link btn-sm text-plum text-decoration-none fw-bold" style="font-size: 0.7rem;">SET DEFAULT</button>
                        <button class="btn btn-link btn-sm text-danger text-decoration-none fw-bold" style="font-size: 0.7rem;">REMOVE</button>
                    </div></div></div>
            <div class="col-md-6 col-lg-4 payment-item">
                <div class="card border-0 shadow-sm h-100" style="background-color: #fcfdfa; border: 1px dashed var(--accent-olive) !important; border-radius: 12px;">
                    <div class="card-body p-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="mb-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; background: rgba(107, 142, 35, 0.1); color: var(--accent-olive);"><i class="bi bi-qr-code-scan fs-3"></i></div>
                        <h6 class="fw-bold text-plum mb-1">UPI ID</h6><p class="text-muted small mb-3">keerthi@upi</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-outline-plum rounded-0 px-3" style="font-size: 0.7rem;">SET DEFAULT</button>
                            <button class="btn btn-sm btn-outline-danger rounded-0 px-3" style="font-size: 0.7rem;"><i class="bi bi-trash"></i></button>
                        </div></div></div></div></div></div>`,
notification:`<div class="animate-fade-in p-3">        
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
                <div class="notif-icon-circle bg-olive-light"><i class="bi bi-box-seam" style="color: var(--accent-olive);"></i></div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Order Dispatched</h6>
                        <small class="text-muted" style="font-size: 0.7rem;">2 HOURS AGO</small></div>
                    <p class="mb-0 text-secondary small lh-base">Your designer set <strong>#ORD1023</strong> is on the way! Our delivery partner is bringing your luxury parcel.</p>
                </div>
                <div class="unread-dot"></div>
            </div>
            <div class="notif-item d-flex gap-3 p-4 border-bottom">
                <div class="notif-icon-circle bg-plum-light"><i class="bi bi-stars text-plum"></i></div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start"><h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Exclusive Reward</h6><small class="text-muted" style="font-size: 0.7rem;">YESTERDAY</small></div>
                    <p class="mb-0 text-secondary small lh-base">Unlock 20% off on our New Arrivals with code <span class="text-plum fw-bold">STYLE20</span>. Valid for 48 hours.</p>
                </div></div>
            <div class="notif-item d-flex gap-3 p-4">
                <div class="notif-icon-circle bg-light"><i class="bi bi-shield-check text-secondary"></i></div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1 fw-bold" style="font-family: 'Playfair Display';">Payment Confirmed</h6>
                        <small class="text-muted" style="font-size: 0.7rem;">2 DAYS AGO</small></div>
                    <p class="mb-0 text-secondary small lh-base">We've received your payment of <strong>₹2,499</strong> for order #ORD1019. Your invoice is now available.</p>
                </div></div></div></div> `,

  adminhome :`<div class="container-fluid">
<div class=" animate-fade-in d-flex justify-content-between align-items-center mb-4">
  <div>
    <h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Admin Dashboard</h2>
    <small class="text-muted text-uppercase" style="letter-spacing: 2px;">Overview of system activities</small>
  </div>
  <button class="btn btn-plum shadow-sm px-4" onclick="window.print()"><i class="bi bi-file-earmark-pdf me-2"></i>Export Analytics</button>
</div>
<div class="row g-3 mb-4">
<div class="col-lg-3 col-md-6" data-aos="fade-up">
    <div class="card border-0 shadow-sm">
    <div class="card-body">
      <small class="text-muted mb-1">Total Revenue</small>
      <h4 class="fw-bold mt-1">₹4,85,200</h4>
      <small class="text-success">▲ 12% this month</small>
    </div></div></div>
<div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="card border-0 shadow-sm mb-1">
    <div class="card-body">
      <small class="text-muted">Total Clients</small>
      <h4 class="fw-bold mt-1">860</h4>
      <small class="text-info">+18 new</small>
    </div></div></div>
  <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Orders</small>
      <h4 class="fw-bold mt-1">1,240</h4>
      <small class="text-warning">20 pending</small>
    </div></div></div>
  <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Low Stock Items</small>
      <h4 class="fw-bold mt-1">6</h4>
      <small class="text-danger">Needs attention</small>
    </div></div></div></div>
<div class="row g-3 mb-4">
  <div class="col-lg-8" data-aos="zoom-in">
    <div class="card border-0 shadow-sm h-100"><div class="card-body">
      <h6 class="fw-bold mb-3">Recent Orders</h6>
      <div class="table-responsive">
      <table class="table align-middle table-sm">
        <thead class="table-light">
          <tr><th>Order ID</th><th>Client</th><th>Amount</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>#ORD102</td><td>Keerthi</td><td>₹3,200</td><td><span class="badge bg-warning text-dark">Pending</span></td><td><button class="btn btn-sm btn-outline-primary">View</button></td></tr>
          <tr><td>#ORD101</td><td>Ananya</td><td>₹2,450</td><td><span class="badge bg-info">Shipped</span></td><td><button class="btn btn-sm btn-outline-primary">View</button></td></tr>
          <tr><td>#ORD100</td><td>Ravi</td><td>₹4,800</td><td><span class="badge bg-success">Delivered</span></td><td><button class="btn btn-sm btn-outline-primary">View</button></td></tr>
        </tbody></table>
    </div></div></div></div>
  <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
    <div class="card border-0 shadow-sm mb-4 h-100"><div class="card-body">
      <h6 class="fw-bold mb-3">Order status</h6>
      <p class="mb-2">Pending <span class="float-end fw-bold"> 18 </span></p>
      <p class="mb-2">Delivered <span class="float-end fw-bold"> 260 </span></p>
      <p class="mb-2">Cancelled <span class="float-end fw-bold"> 32</span></p>
    </div></div></div></div>
    <div class="card border-0 shadow-sm mb-4" data-aos="fade-up"><div class="card-body">
      <h6 class="fw-bold mb-3">Low Stock Alert</h6>
      <table class="table align-middle table-sm ">
      <thead class="table-light"><tr>
      <th>Product</th><th>Stock</th><th>Status</th></tr></thead>
      <tbody><tr>
      <td>Designer Kurthi </td><td>3</td><td><span class="badge bg-warning text-dark">Low </span></td></tr>
      <tr><td>Designer Silk Saree</td><td>0</td><td><span class="badge bg-danger">Out of stock </span></td></tr>
      </tbody></table>
    </div></div>
      <div class="row g-3 mb-4">
    <div class="col-md-6" data-aos="fade-right">
        <div class="card shadow-sm border-0 h-100"><div class="card-body">
            <h6 class="fw-bold mb-3">Reuqests</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item small">Return request - ORD106</li><li class="list-group-item small">Cancel order - ORD099</li>
            </ul></div></div></div>
    <div class="col-md-6" data-aos="fade-left" data-aos-delay="100">
        <div class="card shadow-sm border-0 h-100"><div class="card-body">
            <h6 class="fw-bold mb-3">Recent Notifications</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item small">New order placed</li><li class="list-group-item small">Low Stock alert</li>
            </ul></div></div></div></div>
  <div class="row g-3 mb-4">
  <div class="col-lg-9" data-aos="zoom-in">
  <div class="card shadow-sm border-0 mb-4">
    <div class="card-body">
        <h6 class="fw-bold mb-3">Sales Overview</h6>
        <div class="sales-chart-box">
            <canvas id="adminSalesChart" height="100"></canvas>
        </div></div></div></div>
  <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
    <div class="card shadow-sm border-0">
    <div class="card-body">
        <h6 class="fw-bold mb-3">Quick Actions</h6>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-plus-circle me-1"></i><span>Add Product</span></button>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-bag-check me-1"></i><span>View Orders</span></button>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-people me-1"></i><span>Manage user</span></button>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-bar-chart me-1"></i><span>Reports</span></button>
      </div></div></div></div>`,
   
clients:`<div class="container-fluid animate-fade-in p-4">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5" data-aos="fade-up">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Client Diectory</h2>
        <div class="mx-auto" style="width: 40px; height: 2px; background-color: var(--accent-olive); margin-top: 10px;"></div></div>
        <div class="mt-3 mt-md-0" data-aos="fade-up" data-aos-delay="100"><button class="btn btn-plum shadow-sm px-4"><i class="bi bi-person-plus me-2"></i>Register New Client</button>
        </div></div>
    <div class="row g-4 mb-5">
        <div class="col-md-4" data-aos="fade-up">
            <div class="card border-0 shadow-sm p-3 admin-card" style="background: linear-gradient(135deg, #fff 0%, #f9fbf7 100%);">
                <div class="d-flex align-items-center">
                    <div class="icon-shape bg-plum-light text-plum me-3" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background-color: rgba(75, 54, 72, 0.1);"><i class="bi bi-people fs-4"></i></div>
                    <div><p class="text-muted small fw-bold mb-0">TOTAL CLIENTS</p><h3 class="fw-bold mb-0">860</h3></div>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card border-0 shadow-sm p-3 admin-card">
                <div class="d-flex align-items-center">
                    <div class="icon-shape bg-success-light text-success me-3" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background-color: #eafaf1;"><i class="bi bi-shield-check fs-4"></i></div>
                    <div><p class="text-muted small fw-bold mb-0">ACTIVE USERS</p><h3 class="fw-bold mb-0 text-success">812</h3></div>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card border-0 shadow-sm p-3 admin-card">
                <div class="d-flex align-items-center">
                    <div class="icon-shape bg-danger-light text-danger me-3" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background-color: #fdeded;"><i class="bi bi-slash-circle fs-4"></i></div>
                    <div><p class="text-muted small fw-bold mb-0">BLOCKED</p><h3 class="fw-bold mb-0 text-danger">4</h3></div>
                </div></div></div></div>
    <div class="card border-0 shadow-sm overflow-hidden">
        <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="col-md-6" data-aos="fade-up"><h5 class="fw-bold m-0">Client Records</h5></div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="input-group">
            <span class="input-group-text bg-light border-0"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control bg-light border-0 shadow-none" placeholder="Search..."></div></div>
    </div>
        <div class="table-responsive" data-aos="fade-up" data-aos-delay="200">
            <table class="table table-hover align-middle mb-0">
                <thead class="table-light">
                    <tr class="text-muted small text-uppercase">
                        <th>Name</th><th>Email</th><th>Contact No.</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody><tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img src="https://ui-avatars.com/api/?name=Keerthi+V&background=4B3648&color=fff" class="rounded-circle me-3" width="40">
                                <div>
                                    <div class="fw-bold text-dark">Keerthi V</div>
                                    <div class="small text-muted">ID: #C001</div></div>
                            </div></td>
                        <td>keerthi@gmail.com</td>
                        <td><div class="small text-muted"><i class="bi bi-phone me-2"></i>+91 98765 43210</div></td>
                        <td><span class="badge rounded-pill bg-success-subtle text-success px-3 py-2">ACTIVE</span></td>
                        <td>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewClientModal">View</button>
                                <button class="btn btn-danger btn-sm ">Block</button></td></tr>
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img src="https://ui-avatars.com/api/?name=Ravi+Kumar&background=A3B18A&color=fff" class="rounded-circle me-3" width="40">
                                <div>
                                    <div class="fw-bold text-dark">Ravi Kumar</div>
                                    <div class="small text-muted">ID: #C003</div>
                                </div></div></td>
                        <td>ravi@gmail.com</td>
                        <td><div class="small text-muted"><i class="bi bi-phone me-2"></i>+91 90011 22334</div></td>
                        <td><span class="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">BLOCKED</span></td>
                        <td>
                       <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewClientModal">View</button>
                        <button class="btn btn-danger btn-sm ">Block</button></td></tr>
                    </tbody></table></div>
        <div class="card-footer bg-white p-4 border-0 text-center"><button class="btn btn-outline-secondary btn-sm px-4">Load More Clients</button></div>
    </div></div>`,
    salesStaff:`<div class="container-fluid animate-fade-in p-4">
<div class="d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
  <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Sales Staff</h2>
  <small class="text-muted" style="letter-spacing: 2px;">Manage sales team accounts and performance</small></div>
  <div class="mt-3 mt-md-0" data-aos="fade-up" data-aos-delay="100"><button class="btn btn-plum shadow-sm px-4"><i class="bi bi-person-plus me-2"></i>Register New Staff</button>
        </div></div>
<div class="row g-3 mb-4">
  <div class="col-md-4" data-aos="fade-up">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Total Sales Staff</small>
      <h4 class="fw-bold">24</h4>
    </div></div>
  </div>
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Active Staff</small>
      <h4 class="fw-bold text-success">21</h4>
    </div></div>
  </div>
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Inactive Staff</small>
      <h4 class="fw-bold text-danger">3</h4>
    </div></div></div></div>
<div class="card border-0 shadow-sm" data-aos="fade-up">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="col-md-6" data-aos="fade-up"><h5 class="fw-bold m-0">Sales Staff Records</h5></div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="input-group">
            <span class="input-group-text bg-light border-0"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control bg-light border-0 shadow-none" placeholder="Search..."></div></div>
    </div>
    <table class="table justify-content-center" data-aos="fade-up">
      <thead class="table-light">
        <tr>
          <th>Staff ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Orders Handled</th><th>Status</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>S001</td><td>Rahul Sharma</td><td>rahul@elegance.com</td><td>9876543210</td><td>145</td><td><span class="badge bg-success">Active</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-danger me-2">Disable</button></td></tr>
        <tr>
          <td>S002</td><td>Meera Nair</td><td>meera@elegance.com</td><td>9123456789</td><td>98</td><td><span class="badge bg-success">Active</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-danger">Disable</button></td></tr>
        <tr>
          <td>S003</td><td>Amit Kumar</td><td>amit@elegance.com</td><td>9001122334</td><td>42</td><td><span class="badge bg-secondary">Inactive</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-success">Enable</button></td></tr>
      </tbody></table>
      </div></div></div>`,
deliveryStaff: `<div class="container-fluid animate-fade-in p-4">
<div class="d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
    <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Delivery Staff Directory</h2>
    <small class="text-muted" style="letter-spacing: 2px;">Manage delivery team accounts and performance</small></div>
   <div class="mt-3 mt-md-0" data-aos="fade-up" data-aos-delay="100"><button class="btn btn-plum shadow-sm px-4"><i class="bi bi-person-plus me-2"></i>Register New Staff</button>
        </div></div>
<div class="row g-3 mb-4">
  <div class="col-md-4" data-aos="fade-up">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Total Delivery Staff</small>
      <h4 class="fw-bold">18</h4>
    </div></div></div>
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">Available</small>
      <h4 class="fw-bold text-success">12</h4>
    </div></div></div>
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
    <div class="card border-0 shadow-sm"><div class="card-body">
      <small class="text-muted">On Delivery</small>
      <h4 class="fw-bold text-warning">6</h4>
    </div></div></div></div>
<div class="card border-0 shadow-sm">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="col-md-6" data-aos="fade-up"><h5 class="fw-bold m-0">Delivery Staff Records</h5></div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="input-group">
            <span class="input-group-text bg-light border-0"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control bg-light border-0 shadow-none" placeholder="Search..."></div></div>
    </div>
    <table class="table align-middle" data-aos="fade-up">
      <thead class="table-light">
        <tr>
          <th>Staff ID</th><th>Name</th><th>Phone</th><th>Vehicle</th><th>Orders Delivered</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>D001</td><td>Suresh</td><td>9876543210</td><td>Bike</td><td>320</td><td><span class="badge bg-success">Available</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-danger">Disable</button></td></tr>
        <tr>
          <td>D002</td><td>Karthik</td><td>9123456789</td><td>Scooter</td><td>210</td><td><span class="badge bg-warning">On Delivery</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-danger">Disable</button></td></tr>
        <tr>
          <td>D003</td><td>Manoj</td><td>9001122334</td><td>Bike</td><td>98</td><td><span class="badge bg-secondary">Inactive</span></td>
          <td><button class="btn btn-sm btn-outline-primary me-2">View</button><button class="btn btn-sm btn-outline-success">Enable</button></td>
        </tr>
      </tbody></table>
  </div></div></div>`,
viewproducts:`<div class="container-fluid animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
    <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Product Details</h2>
    <div class="mx-auto" style="width: 40px; height: 2px; background-color: var(--accent-olive); margin-top: 10px;"></div></div></div>
<div class="row mb-4">
    <div class="col-md-4" data-aos="fade-up">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Total Products</h6><h3 class="fw-bold">1000</h3>
            </div></div></div>
    <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Low Stock</h6>
                <h3 class="fw-bold text-warning">6</h3>
            </div></div></div>
    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Out of Stock</h6>
                <h3 class="fw-bold text-danger">3</h3>
            </div></div></div></div>
<div class="card shadow-sm mb-4" data-aos="zoom-in">
    <div class="card-header fw-semibold">ADD / UPDATE PRODUCT</div>
    <div class="card-body" style="background-color:white;"> 
        <form>
            <div class="row">
                <div class="col-md-6 mb-3"><label class="form-label">Product Name</label><input type="text" class="form-control" placeholder="Enter product name"></div>
                <div class="col-md-3 mb-3">
                    <label class="form-label">Category</label>
                    <select class="form-select">
                        <option selected>Select category</option>
                        <option>Designer</option>
                        <option>Pre Designed</option>
                        <option>Customised</option>
                    </select></div>
            <div class="col-md-3 mb-3"><label class="form-label">Price</label><input type="number" class="form-control" placeholder="Price"></div>
            <div class="col-md-3 mb-3"><label class="form-label">Stock Quantity</label><input type="number" class="form-control" placeholder="Stock"></div>
            <div class="col-md-5 mb-3"><label class="form-label">Product Image</label><input type="file" class="form-control"></div>
            <div class="col-md-12 mb-3"><label class="form-label">Description</label><textarea class="form-control" row="2" placeholder="OPtional description"></textarea></div>
        </div>
        <div class="text-end"><button type="reset" class="btn btn-secondary me-2">Reset</button><button type="submit" class="btn btn-primary">Add Product</button></div>
    </form></div></div>
<div class="card shadow-sm" data-aos="fade-up">
    <div class="card-header fw-semibold">Product List</div>
    <div class="card-body table-responsive">
        <table class="table table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Image</th><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="images/casual.jpg" class="image-fluid rounded" style="height:100px;"></td>
                    <td>women Kurthi</td><td>Casual</td><td>12,000</td><td>15</td><td><span class="badge bg-success">Available</span></td>
                    <td><button class="btn btn-sm btn-warning me-1">Edit</button><button class="btn btn-sm btn-danger me-1">Delete</button></td>
                </tr>
                <tr>
                    <td><img src="images/image_original_zoom.jpeg" class="img-fluid rounded" style="height:100px;"></td>
                    <td>Saree</td><td>Designer</td><td>20,000</td><td>100</td><td><span class="badge bg-success">Available</span></td>
                    <td><button class="btn btn-sm btn-warning me-1">Edit</button><button class="btn btn-sm btn-danger me-1">Delete</button></td>
                </tr>
                <tr>
                    <td><img src="images/lehanga.jpg" class="img-fluid rounded" style="height:100px;"></td>
                    <td> Lehanga</td><td>Party wear</td><td>12,00</td><td>15</td><td><span class="badge bg-success">Available</span></td>
                    <td><button class="btn btn-sm btn-warning me-1">Edit</button><button class="btn btn-sm btn-danger me-1">Delete</button></td>
                </tr>
            </tbody></table>
    </div></div></div>`,
    allorders:`<div class="container-fluid animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
    <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Order Details</h2>
    <div class="mx-auto" style="width: 40px; height: 2px; background-color: var(--accent-olive); margin-top: 10px;"></div></div>
</div>
<div class="row mb-4">
    <div class="col-md-4" data-aos="fade-up">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Total Orders</h6>
                <h3 class="fw-bold">180</h3>
            </div></div></div>
    <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Pending Orders</h6>
                <h3 class="fw-bold text-warning">22</h3>
            </div></div></div>
    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h6 class="text-muted">Delivered Orders</h6>
                <h3 class="fw-bold text-danger">140</h3>
            </div></div></div></div>
<ul class="nav nav-tabs mb-3" role="tablist">
    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#allOrders" data-aos="zoom-in" data-aos-delay="200">All Orders</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#pendingOrders" data-aos="zoom-in" data-aos-delay="200">Pending Orders</button></li></ul>
<div class="tab-content">
    <div class="tab-pane fade show active" id="allOrders">
        <div class="card shadow-sm">
            <div class="card-header fw-semibold">All Orders</div>
            <div class="card-body table-responsive" data-aos="zoom-in">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                       <tr>
                    <th>Oder ID</th><th>Client</th><th>Date</th><th>Amount</th><th>Payment</th><th>Status</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#ORD1019</td><td>Jona</td><td>22 Jan 2026</td><td>2,500</td><td>Online</td>
                    <td><span class="badge bg-success text-white">Success</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>
                </tr>
                <tr>
                    <td>#ORD1018</td><td>Keerthana</td><td>22 Jan 2026</td><td>7000</td><td>Online</td>
                    <td><span class="badge bg-warning text-dark">Pending</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>
                </tr>
                <tr>
                    <td>#ORD1017</td><td>Chaithanya</td><td>22 Jan 2026</td><td>2,000</td><td>Online</td>
                    <td><span class="badge bg-warning text-dark">Pending</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>   
                </tr>
                <tr>
                    <td>#ORD1016</td><td>Anju</td><td>20 Jan 2026</td><td>1,000</td><td>Online</td>
                    <td><span class="badge bg-success text-white">Success</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>
                </tr>
                <tr>
                    <td>#ORD1015</td><td>Merlin</td><td>20 Jan 2026</td><td>800</td><td>Online</td>
                    <td><span class="badge bg-success text-white">Success</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>
                </tr>
            </tbody>
        </table>
    </div></div></div>
<div class="tab-pane fade" id="pendingOrders">
    <div class="card shadow-sm">
            <div class="card-header fw-semibold">Pending Orders</div>
            <div class="card-body table-responsive" >
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                       <tr>
                    <th>Oder ID</th><th>Client</th><th>Date</th><th>Amount</th><th>Payment</th><th>Status</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#ORD1018</td><td>Keerthana</td><td>22 Jan 2026</td><td>7000</td><td>Online</td>
                    <td><span class="badge bg-warning text-dark">Pending</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>
                </tr>
                <tr>
                    <td>#ORD1017</td><td>Chaithanya</td><td>22 Jan 2026</td><td>2,000</td><td>Online</td>
                    <td><span class="badge bg-warning text-dark">Pending</span></td>
                    <td><button class="btn btn-sm btn-primary">View</button></td>  
                </tr>
            </tbody>
        </table>
    </div></div></div></div></div>`,
    transaction:`<div class="container-fluid animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
    <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);">Transaction Management</h2>
    <small class="text-muted text-uppercase" style="letter-spacing: 2px;">Monitor all customer payments and transaction statuses</small></div>
</div>
<div class="row g-3 mb-4">
    <div class="col-md-3" data-aos="fade-up">
        <div class="card shadow-sm text-center">
            <div class="card-body"><h6 class="text-muted">Total Revenue</h6><h4 class="fw-bold text-success">&#8377;2,45,000</h4></div>
        </div></div>
    <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div class="card shadow-sm text-center">
            <div class="card-body"><h6 class="text-muted">Succesful Payments</h6><h3 class="fw-bold text-primary">320</h3></div>
        </div></div>
    <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div class="card shadow-sm text-center">
            <div class="card-body"><h6 class="text-muted"> Pending Transctions</h6><h3 class="fw-bold text-warning">12</h3></div>
        </div></div>
    <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div class="card shadow-sm text-center">
            <div class="card-body"><h6 class="text-muted"> Failed / Refunded</h6><h3 class="fw-bold text-danger">8</h3></div>
        </div></div></div>
<div class="card shadow-sm mb-4" data-aos="fade-up">
    <div class="card-body">
            <div class="row g-3">
                <div class="col-md-3"><input type="text" class="form-control" placeholder="Transction/Order ID"></div>
                <div class="col-md-3">
                    <select class="form-select">
                        <option selected>status</option><option>Successful</option><option>Pending</option><option>Failed</option><option>Refunded</option>
                    </select>
                </div>
            <div class="col-md-3">
                <select class="form-select">
                        <option selected>Payment Method</option><option>UPI</option><option>Card</option><option>Net Banking</option><option><CODe></CODe></option>
                    </select>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary w-100"><i class="bi bi-search"></i>Search</button></div>
        </div></div></div>
<div class="card shadow-sm" data-aos="fade-up">
    <div class="card-header fw-bold"><i class="bi bi-clock-history"></i> Transaction History</div>
    <div class="card-body table-responsive">
        <table class="table table-borded table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Transaction ID</th><th>Order ID</th><th>Client</th><th>Amount</th><th>Payment Method</th><th>Status</th><th>Date</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>TXN001</td><td>#ORD103</td><td>Anju</td><td>&#8377;1,250</td><td>UPI</td>
                    <td><span class="badge bg-success">Successful</span></td><td>20 Jan 2026</td>
                    <td><button class="btn btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button></td>
                </tr>
                <tr>
                    <td>TXN002</td><td>#ORD104</td><td>Maria</td><td>&#8377;5,100</td><td>Card</td>
                    <td><span class="badge bg-warning">Pending</span></td><td>20 Jan 2026</td>
                    <td><button class="btn btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button></td>
                </tr>
                <tr>
                    <td>TXN003</td><td>#ORD106</td><td>Chaithanya</td><td>&#8377;9,000</td><td>Net Banking</td>
                    <td><span class="badge bg-danger">Failed</span></td><td>20 Jan 2026</td>
                    <td><button class="btn btn-sm btn-outline-danger"><i class="bi bi-arrow-counterclockwise"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div></div>`,
    clientReport:`<div class="container-fluid mt-4 animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);" data-aos="fade-up"><i class="bi bi-people"></i> Client Report</h2>
        <p class="text-muted" style="letter-spacing: 2px;"  data-aos="fade-up" data-aos-delay="100">This report provides insights into client activity and purchasing behaviour</p></div>
        <button class="btn btn-plum shadow-sm px-4" onclick="window.print()"><i class="bi bi-file-earmark-pdf me-2"></i>Export to PDF</button>
    </div>
    <div class="card shadow-sm mb-4"  data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-table"></i> Client Report Details</div>
        <div class="card-body table-responsive"  data-aos="fade-up" data-aos-delay="100">
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Name</th><th>Email</th><th>Total Orders</th><th>Amount Spent</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chaithanya</td><td>chaithu@gmail.com</td><td>10</td><td>&#8377;29,000</td><td><span class="badge bg-success ">Active</span>  </td>
                    </tr>
                    <tr>
                        <td>Anju</td><td>anjur@gmail.com</td><td>6</td><td>&#8377;6,000</td><td><span class="badge bg-success ">Active</span>  </td>
                    </tr>
                    <tr>
                        <td>Malavika</td><td>malu@gmail.com</td><td>30</td><td>&#8377;2,65,000</td><td><span class="badge bg-success ">Active</span>  </td>
                    </tr>
                    <tr>
                        <td>Shradha</td><td>shrad@gmail.com</td><td>1</td><td>&#8377;2,000</td><td><span class="badge bg-secondary ">Inactive</span>  </td>
                    </tr>
                </tbody>
            </table>
        </div></div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-bar-chart"></i> Client Order Analysis</div>
        <div class="card-body">
        <div class="sales-chart-box"><canvas id="clientReportChart" height="120"></canvas></div></div>
    </div></div>`,
    salesReport:`<div class="container-fluid mt-4 animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);" data-aos="fade-up"><i class="bi bi-bar-chart-line"></i> Sales Report</h2>
        <p class="text-muted" style="letter-spacing: 2px;" data-aos="fade-up" data-aos-delay="100">This report provides insights into sales performance and revenue trends</p></div>
        <button class="btn btn-plum shadow-sm px-4" onclick="window.print()"><i class="bi bi-file-earmark-pdf me-2"></i>Export to PDF</button>
    </div>
    <div class="card shadow-sm mb-4">
        <div class="card-header fw-bold" data-aos="fade-up"><i class="bi bi-table"></i> Sales Report Details</div>
        <div class="card-body table-responsive" data-aos="fade-up" data-aos-delay="100">
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Date</th><th>Client Name</th><th>Payment Method</th><th>Order Status</th><th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ORD1001</td><td>20 Jan 2026</td><td>Chaithanya</td><td>UPI</td><td><span class="badge bg-success ">Delivered</span>  </td><td>&#8377; 2,000</td>
                    </tr>
                    <tr>
                        <td>ORD1002</td><td>21 Jan 2026</td><td>Anju</td><td>Card</td><td><span class="badge bg-warning ">Pending</span>  </td><td>&#8377; 3,500</td>
                    </tr>
                    <tr>
                        <td>ORD1003</td><td>21 Jan 2026 </td><td>Malavika</td><td>Net</td><td><span class="badge bg-danger ">Cancelled</span>  </td><td>&#8377; 5,000</td>
                    </tr>
                </tbody>
            </table>
        </div></div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold">
            <i class="bi bi-graph-up"></i> Revenue Analysis</div>
        <div class="card-body">
            <canvas id="salesReportChart" height="120"></canvas>
        </div>
    </div></div>`,
    noti:`<div class="container-fluid mt-4 animate-fade-in p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);" data-aos="fade-up"><i class="bi bi-bell"></i> Notifications</h2>
        <button class="btn btn-outline-primary btn-sm"><i class="bi bi-check2-all"></i> Mark All as Read </button>
    </div>
    <div class="row mb-3 g-3">
        <div class="col-md-3" data-aos="fade-up">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6>New Notifications</h6><h4 class="fw-bold text-warning">5</h4></div>
            </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <h6>Read Notifications</h6><h4 class="fw-bold text-success">20</h4></div>
            </div>
        </div></div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-list-ul"></i> Recent Notifications</div>
        <div class="card-body list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div><i class="bi bi-bag me-2 text-warning"></i>Order #ORD1021 is Pending</div>
                <small class="text-muted">20 Jan 2026</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div><i class="bi bi-exclamation-triangle me-2 text-danger"></i>Low stock alert: Designer Silk Saree</div>
                <small class="text-muted">21 Jan 2026</small></a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div><i class="bi bi-person-plus me-2 text-primary"></i>New client registered: Keerthi</div>
                <small class="text-muted">21 Jan 2026</small>
            </a>
        </div></div></div>`,
saleshome:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-speedometer2"></i> Sales Dashboard</h2>
        <p class="text-muted" style="letter-spacing: 2px;" data-aos="fade-up" data-aos-delay="100">Overview of assigned orders and sales performance</p></div>
    </div>
    <div class="row g-3 mb-4">
        <div class="col-md-3" data-aos="fade-up">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-box-seam fs-2 text-primary"></i>
                    <h6 class="mt-2">Assigned Orders</h6><h4 class="fw-bold">24</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-hourglass-split fs-2 text-warning"></i>
                    <h6 class="mt-2">Pending Orders</h6><h4 class="fw-bold">6</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-check-circle fs-2 text-success"></i>
                    <h6 class="mt-2">Completed Orders</h6><h4 class="fw-bold">18</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-currency-rupee fs-2 text-dark"></i>
                    <h6 class="mt-2">Today’s Sales</h6><h4 class="fw-bold">₹18,450</h4>
                </div></div></div></div>
    <div class="row mb-4">
        <div class="col-md-8" data-aos="fade-up">
            <div class="card shadow-sm">
                <div class="card-header fw-bold"><i class="bi bi-list-ul"></i> Recent Orders</div>
                <div class="card-body table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>Order ID</th><th>Client</th><th>Amount</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#ORD102</td><td>Keerthi</td><td>₹3,200</td><td><span class="badge bg-warning">Pending</span></td></tr>
                            <tr>
                                <td>#ORD101</td><td>Anu</td><td>₹5,600</td><td><span class="badge bg-success">Completed</span></td></tr>
                            <tr>
                                <td>#ORD100</td><td>Ravi</td><td>₹2,150</td><td><span class="badge bg-success">Completed</span></td></tr>
                        </tbody>
                    </table>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up">
            <div class="card shadow-sm">
                <div class="card-header fw-bold"><i class="bi bi-bell"></i> Notifications</div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="bi bi-box"></i> New order assigned</li>
                        <li class="list-group-item"><i class="bi bi-cash"></i> Payment confirmed</li>
                        <li class="list-group-item"><i class="bi bi-x-circle"></i> Order cancelled</li>
                    </ul></div></div></div></div>
  <div class="row g-3 mb-4">
  <div class="col-lg-9" data-aos="zoom-in">
  <div class="card shadow-sm border-0 mb-4">
    <div class="card-body">
        <h6 class="fw-bold mb-3"> Sales Performance</h6>
        <div class="sales-chart-box">
            <canvas id="salesHomeChart" height="100"></canvas>
        </div></div></div></div>
  <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
    <div class="card shadow-sm border-0">
    <div class="card-body">
        <h6 class="fw-bold mb-3">Quick Actions</h6>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-hourglass-split"></i><span> View Pending Orders</span></button>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-receipt"></i><span> Create Invoice</span></button>
        <button class="btn btn-outline-secondary btn-sm mb-2"><i class="bi bi-people me-1"></i><span> View Clients</span></button>
      </div></div></div></div>`,
      orders:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-box-seam"></i> Orders Management</h2>
        <p class="text-muted" style="letter-spacing:2px;" data-aos="fade-up" data-aos-delay="100">Manage and process all assigned customer orders.</p></div>
        <select class="form-select w-auto">
            <option selected>All Orders</option><option>Pending</option><option>Completed</option><option>Cancelled</option>
        </select>
    </div>
        <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-list-check"></i> Assigned Orders</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Client</th><th>Products</th><th>Amount</th><th>Payment</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD105</td><td>Keerthi</td><td>Kurtis (2)</td><td>₹3,200</td>
                        <td><span class="badge bg-success">Paid</span></td>
                        <td><span class="badge bg-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-primary"><i class="bi bi-eye"></i></button>
                            <button class="btn btn-sm btn-success"><i class="bi bi-check-circle"></i></button></td></tr>
                    <tr>
                        <td>#ORD104</td><td>Anu</td><td>Saree (1)</td><td>₹5,600</td>
                        <td><span class="badge bg-success">Paid</span></td>
                        <td><span class="badge bg-success">Completed</span></td>
                        <td><button class="btn btn-sm btn-secondary"><i class="bi bi-eye"></i></button></td></tr>
                    <tr>
                        <td>#ORD103</td><td>Reena</td><td>Lehanga (1)</td><td>₹2,150</td>
                        <td><span class="badge bg-danger">Unpaid</span></td>
                        <td><span class="badge bg-danger">Cancelled</span></td>
                        <td><button class="btn btn-sm btn-secondary"><i class="bi bi-eye"></i></button></td></tr>
                </tbody>
            </table>
        </div></div></div>`,
        pendingorders:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-hourglass-split"></i> Pending Orders</h2>
        <p class="text-muted"style="letter-spacing:2px;" data-aos="fade-up" data-aos-delay="100">Orders that require action due to payment, stock, or verification issues.</p></div>
        <span class="badge bg-warning fs-6" data-aos="fade-up" data-aos-delay="100">2 Pending Orders</span>
    </div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-clock-history"></i> Pending Order List</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Client</th><th>Product</th><th>Amount</th><th>Reason</th><th>Expected Date</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD110</td><td>Keerthi</td><td>Kurtis (2)</td><td>₹3,200</td>
                        <td><span class="badge bg-danger">Payment Pending</span></td><td>25 Jan 2026</td>
                        <td><button class="btn btn-sm btn-success me-1"><i class="bi bi-check-circle"></i></button>
                            <button class="btn btn-sm btn-warning me-1"><i class="bi bi-pause-circle"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="bi bi-x-circle"></i></button></td>
                    </tr>
                    <tr>
                        <td>#ORD109</td><td>Anu</td><td>Saree (1)</td><td>₹5,600</td>
                        <td><span class="badge bg-warning text-dark">Stock Issue</span></td><td>27 Jan 2026</td>
                        <td><button class="btn btn-sm btn-success me-1"><i class="bi bi-check-circle"></i></button>
                            <button class="btn btn-sm btn-warning me-1"><i class="bi bi-pause-circle"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="bi bi-x-circle"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div></div></div>`,
clientdetail:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-people"></i> Clients</h2>
        <p class="text-muted mb-0" data-aos="fade-up" data-aos-delay="100" style="letter-spacing:2px;">View customer details and communicate regarding orders</p></div>
        <div class="input-group w-25" data-aos="fade-up" data-aos-delay="100"><span class="input-group-text"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control" placeholder="Search client"></div>
    </div>
    <div class="row g-3 mb-4">
        <div class="col-md-4" data-aos="fade-up">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-person-check fs-2 text-success"></i>
                    <h6 class="mt-2">Active Clients</h6><h4 class="fw-bold">18</h4>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-person-plus fs-2 text-primary"></i>
                    <h6 class="mt-2">New Clients (This Month)</h6><h4 class="fw-bold">5</h4>
                </div></div></div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-arrow-repeat fs-2 text-warning"></i>
                    <h6 class="mt-2">Repeat Customers</h6><h4 class="fw-bold">11</h4>
                </div></div></div></div></div>
    <div class="card shadow-sm mb-mt-4" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-card-list"></i> Client List</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Client ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Total Orders</th><th>Last Order</th><th>Status</th><th>Action</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                    <tr>
                        <td>C001</td><td>Keerthi</td><td>keerthi@gmail.com</td><td>9876543210</td><td>8</td><td>20 Jan 2026</td><td><span class="badge bg-success">Active</span></td>
                        <td><button class="btn btn-sm btn-primary me-1"><i class="bi bi-eye"></i></button>
                            <button class="btn btn-sm btn-success"><i class="bi bi-telephone"></i></button></td>
                    </tr>
                    <tr>
                        <td>C002</td><td>Anu</td><td>anu@gmail.com</td><td>9123456780</td><td>3</td><td>18 Jan 2026</td><td><span class="badge bg-success">Active</span></td>
                        <td><button class="btn btn-sm btn-primary me-1"><i class="bi bi-eye"></i></button>
                            <button class="btn btn-sm btn-success"><i class="bi bi-telephone"></i></button></td>
                    </tr>
                    <tr>
                        <td>C003</td><td>Ravi</td><td>ravi@gmail.com</td><td>9001122334</td><td>0</td><td>  - </td><td><span class="badge bg-secondary">Inactive</span></td>
                        <td><button class="btn btn-sm btn-primary me-1"><i class="bi bi-eye"></i></button>
                            <button class="btn btn-sm btn-success"><i class="bi bi-telephone"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div></div> `,
    transactions:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-credit-card"></i> Transactions</h2>
        <p class="text-muted mb-0" data-aos="fade-up" data-aos-delay="100" style="letter-spacing:2px:">View and track customer payment transactions </p></div>
        <select class="form-select w-auto" data-aos="fade-up" data-aos-delay="100"><option selected>All Payments</option><option>Paid</option><option>Pending</option><option>Failed</option></select>
    </div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-receipt"></i> Transaction History</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Transaction ID</th><th>Order ID</th><th>Client</th><th>Payment Mode</th><th>Amount</th><th>Status</th><th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TXN501</td><td>#ORD105</td><td>Keerthi</td><td>UPI</td><td>₹3,200</td><td><span class="badge bg-success">Paid</span></td><td>20 Jan 2026</td>
                    </tr>
                    <tr>
                        <td>TXN502</td><td>#ORD106</td><td>Anu</td><td>Credit Card</td><td>₹5,600</td><td><span class="badge bg-success">Paid</span></td><td>19 Jan 2026</td>
                    </tr>
                    <tr>
                        <td>TXN503</td><td>#ORD107</td><td>Ravi</td><td>Cash on Delivery</td><td>₹2,150</td><td><span class="badge bg-warning text-dark">Pending</span></td><td>18 Jan 2026</td>
                    </tr>
                    <tr>
                        <td>TXN504</td><td>#ORD108</td><td>Meena</td><td>Debit Card</td><td>₹4,800</td><td><span class="badge bg-danger">Failed</span></td><td>18 Jan 2026</td>
                    </tr>
                </tbody>
            </table>
        </div></div></div>`,
offersproducts:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-tags"></i> Offers & New Products</h2>
        <p class="text-muted" data-aos="fade-up" data-aos-delay="100" style-"letter-spacing:2px;">Manage promotional offers and newly launched products</p></div>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-megaphone"></i> Active Offers</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Offer ID</th><th>Offer Name</th><th>Discount</th><th>Valid Till</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>OFF101</td><td>New Year Sale</td><td>30%</td><td>31 Jan 2026</td><td><span class="badge bg-success">Active</span></td>
                    </tr>
                    <tr>
                        <td>OFF102</td><td>Festive Combo</td><td>20%</td><td>25 Jan 2026</td><td><span class="badge bg-success">Active</span></td>
                    </tr>
                    <tr>
                        <td>OFF103</td><td>Clearance Sale</td><td>40%</td><td>15 Jan 2026</td><td><span class="badge bg-secondary">Expired</span></td>
                    </tr>
                </tbody>
            </table>
        </div></div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-box-seam"></i> Newly Added Products</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Product ID</th><th>Product Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Launch Date</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P201</td><td>Silk Saree</td><td>Traditional Wear</td><td>₹6,500</td><td>15</td><td>20 Jan 2026</td><td><span class="badge bg-success">Available</span></td>
                    </tr>
                    <tr>
                        <td>P202</td><td>Designer Kurti</td><td>Ethnic Wear</td><td>₹2,800</td><td>25</td><td>18 Jan 2026</td><td><span class="badge bg-success">Available</span></td>
                    </tr>
                    <tr>
                        <td>P203</td><td>Party Gown</td><td>Western Wear</td><td>₹4,200</td><td>0</td><td>15 Jan 2026</td><td><span class="badge bg-danger">Out of Stock</span></td>
                    </tr>
                </tbody>
            </table>
    </div></div></div>`,
salesreport:`<div class="container-fluid mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h2 class="fw-bold" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-graph-up-arrow"></i> Sales Report</h2>
        <p class="text-muted" data-aos="fade-up" data-aos-delay="100">Overview of sales performance and revenue generated by sales staff.</p></div>
        <button class="btn btn-outline-danger" data-aos="fade-up" data-aos-delay="100"><i class="bi bi-file-earmark-pdf"></i> Export to PDF</button>
    </div>
    <div class="card shadow-sm mb-4" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-table"></i> Sales Report Details</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Sales ID</th><th>Sales Staff</th><th>Total Orders</th><th>Total Sales</th><th>Commission</th><th>Performance</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S001</td><td>Arjun</td><td>18</td><td>₹42,000</td><td>₹4,200</td>
                        <td><span class="badge bg-success">Excellent</span></td></tr>
                    <tr>
                        <td>S002</td><td>Divya</td><td>12</td><td>₹28,500</td><td>₹2,850</td>
                        <td><span class="badge bg-primary">Good</span></td></tr>
                    <tr>
                        <td>S003</td><td>Kiran</td><td>6</td><td>₹14,000</td><td>₹1,400</td>
                        <td><span class="badge bg-warning text-dark">Average</span></td></tr>
                </tbody>
            </table>
        </div></div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-bar-chart-fill"></i> Sales Performance Chart</div>
        <div class="card-body">
            <canvas id="salechart" height="120"></canvas>
        </div></div></div>`,

    notifications:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold"style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"data-aos="fade-up">Notifications</h2>
    </div>
    <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold">Recent Notifications</div>
        <div class="card-body p-0">
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-bag-check-fill text-primary me-2"></i>New order <strong>#ORD310</strong> placed by client</span>
                    <span><span class="badge bg-danger me-2">New</span><small class="text-muted">5 mins ago</small></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-currency-rupee text-success me-2"></i>Payment received for order <strong>#ORD301</strong></span>
                    <small class="text-muted">30 mins ago</small>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>Low stock alert for <strong>Wireless Headphones</strong></span>
                    <small class="text-muted">2 hours ago</small>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-megaphone-fill text-info me-2"></i>Admin added a new discount offer</span>
                    <small class="text-muted">Yesterday</small>
                </li>
            </ul>
        </div></div></div>`,

deliveryhome:`<div class="container-fluid animate-fade-in mt-4">
<div class="d-flex justify-content-between align-items-center mb-3">
    <div><h2 class="fw-bold mb-1" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-truck"></i> Delivery Dashboard</h4></div>
</div>
    <div class="row mb-4">
        <div class="col-md-3" data-aos="fade-up">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-box-seam fs-2 text-primary"></i>
                    <h6 class="mt-2">Assigned Orders</h6>
                    <h4 class="fw-bold">3</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-hourglass-split fs-2 text-warning"></i>
                    <h6 class="mt-2">Pending Deliveries</h6>
                    <h4 class="fw-bold">2</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-truck fs-2 text-info"></i>
                    <h6 class="mt-2">Out for Delivery</h6>
                    <h4 class="fw-bold">1</h4>
                </div></div></div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div class="card shadow-sm text-center">
                <div class="card-body">
                    <i class="bi bi-check-circle fs-2 text-success"></i>
                    <h6 class="mt-2">Delivered Today</h6>
                    <h4 class="fw-bold">1</h4>
                </div></div></div></div>
    <div class="card shadow-sm mb-4">
        <div class="card-header fw-bold"><i class="bi bi-list-check"></i> Today’s Deliveries</div>
        <div class="card-body table-responsive" data-aos="fade-up">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Customer</th><th>Address</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD102</td><td>Anu</td><td>Chennai</td>
                        <td><span class="badge bg-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-primary"> View</button></td></tr>
                    <tr>
                        <td>#ORD108</td><td>Ravi</td><td>Coimbatore</td>
                        <td><span class="badge bg-info">Out for Delivery</span></td>
                        <td><button class="btn btn-sm btn-primary"> View</button></td></tr>
                    <tr>
                        <td>#ORD110</td><td>Keerthi</td><td>Madurai</td>
                        <td><span class="badge bg-success">Delivered</span></td>
                        <td><button class="btn btn-sm btn-secondary" disabled> Completed</button></td></tr>
                </tbody>
            </table>
        </div></div>
    <div class="row">
    <div class="col-lg-5" data-aos="fade-up">
    <div class="card shadow-sm">
        <div class="card-header fw-bold"><i class="bi bi-lightning-charge"></i> Quick Actions</div>
        <div class="card-body">
            <button class="btn btn-outline-primary me-2 mb-2"><i class="bi bi-geo-alt"></i> View Route</button>
            <button class="btn btn-outline-success me-2 mb-2"><i class="bi bi-check2-circle"></i> Mark as Delivered</button>
            <button class="btn btn-outline-warning me-2 mb-2"><i class="bi bi-telephone"></i> Contact Customer</button>
        </div></div></div></div></div>`,

    assignedOrders:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-box-seam"></i> Assigned Orders</h2></div>
        <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold"><i class="bi bi-list-task"></i> Orders Assigned to You</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Customer Name</th><th>Delivery Address</th><th>Order Date</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD201</td><td>Keerthi</td><td>Chennai</td><td>20 Jan 2026</td>
                        <td><span class="badge bg-warning">Assigned</span></td>
                        <td><button class="btn btn-sm btn-primary">Start Delivery</button></td></tr>
                    <tr>
                        <td>#ORD204</td><td>Anu</td><td>Coimbatore</td><td>21 Jan 2026</td>
                        <td><span class="badge bg-info">Out for Delivery</span></td>
                        <td><button class="btn btn-sm btn-secondary" disabled>In Progress</button></td></tr>
                    <tr>
                        <td>#ORD209</td><td>Ravi</td><td>Madurai</td><td>21 Jan 2026</td>
                        <td><span class="badge bg-warning">Assigned</span></td>
                        <td><button class="btn btn-sm btn-primary">Start Delivery</button></td></tr>
                </tbody>
            </table>
        </div></div></div>`,

    pendingDeliveries:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
         <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-hourglass-split"></i> Pending Deliveries</h2>
    </div>
        <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold">Pending Delivery Orders</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Customer</th><th>Phone</th><th>Address</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD301</td><td>Anu</td><td>9876543210</td><td>Chennai</td>
                        <td><span class="badge bg-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-success">Mark Delivered</button></td></tr>
                    <tr>
                        <td>#ORD305</td><td>Ravi</td><td>9123456780</td><td>Madurai</td>
                        <td><span class="badge bg-info">Out for Delivery</span></td>
                        <td><button class="btn btn-sm btn-success">Mark Delivered</button></td></tr>
                </tbody>
            </table>
        </div></div></div>`,

    completedDeliveries:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"><i class="bi bi-check-circle"></i> Completed Deliveries</h2>
    </div>
        <div class="card shadow-sm" data-aos="fade-up">
        <div class="card-header fw-bold">Delivery History</div>
        <div class="card-body table-responsive">
            <table class="table table-bordered align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Order ID</th><th>Customer</th><th>Delivery Date</th><th>Payment Mode</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD250</td><td>Keerthi</td><td>20 Jan 2026</td><td>Online</td>
                        <td><span class="badge bg-success">Delivered</span></td></tr>
                    <tr>
                        <td>#ORD248</td><td>Anu</td><td>19 Jan 2026</td><td>Cash</td>
                        <td><span class="badge bg-success">Delivered</span></td></tr>
                </tbody>
            </table>
        </div></div></div>`,

    deliveryStatus:`<div class="container-fluid animate-fade-in mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"> Update Delivery Status</h2>
    </div>
        <div class="card shadow-sm" data-aos="fade-up" >
        <div class="card-header fw-bold">Update Order Status</div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label class="form-label">Order ID</label>
                    <select class="form-select">
                        <option>#ORD301</option>
                        <option>#ORD305</option>
                        <option>#ORD310</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Delivery Status</label>
                    <select class="form-select">
                        <option>Out for Delivery</option>
                        <option>Delivered</option>
                        <option>Failed</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Remarks (Optional)</label>
                    <textarea class="form-control" rows="3"></textarea></div>
                <button class="btn btn-primary"><i class="bi bi-save"></i> Update Status</button>
            </form>
        </div></div></div>` ,

    deliveryNotifications:`<div class="container-fluid animate-fade-in  mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
         <h2 class="fw-bold mb-4" style="font-family: 'Playfair Display'; letter-spacing: 2px; color: var(--plum);"  data-aos="fade-up"> Notifications</h2>
    </div>
        <div class="card shadow-sm" data-aos="fade-up" >
        <div class="card-header fw-bold">Recent Notifications</div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-box-seam text-primary me-2"></i>New order #ORD310 assigned</span>
                    <small class="text-muted">5 mins ago</small></li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-geo-alt text-warning me-2"></i>Address updated for order #ORD301</span>
                    <small class="text-muted">1 hour ago</small></li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i class="bi bi-check-circle text-success me-2"></i>Order #ORD250 delivered successfully</span>
                    <small class="text-muted">Yesterday</small></li>
            </ul>
        </div></div></div>`

    };

    // 3. SIDEBAR MODULES
    const sidebarConfigs = {
    Admin: `
    <div class="d-flex flex-column p-3 sidebar-admin-custom" style="min-height: 100vh;">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item"><a href="#" class="nav-link-dash active mb-1" onclick="loadContent('adminhome', this)"><i class="bi bi-house me-2"></i> Home </a></li>
            <li><a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#userMgmt"><i class="bi bi-people me-2"></i> User Management </a>
                <div class="collapse ps-3" id="userMgmt"><a href="#" class="nav-link-dash small" onclick="loadContent('clients', this)">Clients </a><a href="#" class="nav-link-dash small" onclick="loadContent('salesStaff', this)">Sales Staff </a><a href="#" class="nav-link-dash small" onclick="loadContent('deliveryStaff', this)">Delivery Staff </a></div></li>
            <li class="nav-item"><a href="#" class="nav-link-dash active mb-1" onclick="loadContent('viewproducts', this)"><i class="bi bi-house me-2"></i> Products </a></li>
            <li class="nav-item"><a href="#" class="nav-link-dash active mb-1" onclick="loadContent('allorders', this)"><i class="bi bi-box-seam me-2"></i> Orders </a></li>
            <li class="nav-item"><a href="#" class="nav-link-dash active mb-1" onclick="loadContent('transaction', this)"><i class="bi bi-credit-card me-2"></i> Transactions </a></li>
            <li><a class="nav-link-dash dropdown-toggle-custom mb-1" data-bs-toggle="collapse" href="#reports"><i class="bi bi-bar-chart-line me-2"></i> Analytics </a>
                <div class="collapse ps-3" id="reports"><a href="#" class="nav-link-dash small" onclick="loadContent('clientReport', this)">Client Report</a><a href="#" class="nav-link-dash small" onclick="loadContent('salesReport', this)">Sales Report</a></div></li>
            <li class="nav-item"><a href="#" class="nav-link-dash active mb-1" onclick="loadContent('noti', this)"><i class="bi bi-bell me-2"></i> Notifications </a></li>
        </ul></div>`,
    
    Client: `
            <div class="px-3 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;">Market place</div>
            <a onclick="loadContent('home', this)" class="nav-link-dash"><i class="bi bi-house me-2"></i> Home</a>
            <a onclick="loadContent('newarrivals', this)" class="nav-link-dash"><i class="bi bi-bag-heart me-2"></i> New Arrivals</a>
            <a onclick="loadContent('myorders', this)" class="nav-link-dash"><i class="bi bi-clock-history me-2"></i> My Orders</a>
            <a onclick="loadContent('trackorder', this)" class="nav-link-dash"><i class="bi bi-truck me-2"></i> Track Orders</a>
            <a onclick="loadContent('offers', this)" class="nav-link-dash"><i class="bi bi-tags me-2"></i> Offers / Coupons</a>
            <a onclick="loadContent('wishlist', this)" class="nav-link-dash"><i class="bi bi-heart me-2"></i> Wishlist</a>
            <div class="px-3 mt-4 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;">Settings</div>
            <a onclick="loadContent('address',this)" class="nav-link-dash"><i class="bi bi-geo-alt me-2"></i> Saved Addresses</a>
            <a onclick="loadContent('paymentmethod',this)" class="nav-link-dash"><i class="bi bi-wallet2 me-2"></i> Payment Methods</a>
            <a onclick="loadContent('notification',this)" class="nav-link-dash"><i class="bi bi-bell me-2"></i> Notifications</a>`,
    
    Sales:`<div class="px-3 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;"> DASHBOARD</div>
        <a href="#" onclick="loadContent('saleshome', this)" class="nav-link-dash"><i class="bi bi-house me-2"></i> Home</a></li>
        <a href="#" onclick="loadContent('orders', this)" class="nav-link-dash"><i class="bi bi-box-seam me-2"></i> Orders Management</a></li>
        <a href="#" onclick="loadContent('pendingorders', this)" class="nav-link-dash"><i class="bi bi-hourglass-split me-2"></i> Pending Orders</a></li>
        <a href="#" onclick="loadContent('clientdetail', this)" class="nav-link-dash"><i class="bi bi-people me-2"></i> Clients</a></li>
        <a href="#" onclick="loadContent('transactions', this)" class="nav-link-dash"><i class="bi bi-credit-card me-2"></i> Transactions</a></li>
        <a href="#" onclick="loadContent('offersproducts', this)" class="nav-link-dash"><i class="bi bi-tags me-2"></i> Offers & Products</a></li>
        <a href="#" onclick="loadContent('salesreport', this)" class="nav-link-dash"><i class="bi bi-bar-chart me-2"></i> Sales Report</a></li>
        <a href="#" onclick="loadContent('notifications', this)" class="nav-link-dash"><i class="bi bi-bell me-2"></i> Notifications</a></li>
    </div>`,
    Delivery:`<div class="px-3 mb-2 small text-uppercase opacity-50 fw-bold" style="font-size: 0.7rem;"> DASHBOARD</div>
        <a href="#" class="nav-link-dash" onclick="loadContent('deliveryhome', this)"><i class="bi bi-house me-2"></i> Home</a></li>
        <a href="#" class="nav-link-dash" onclick="loadContent('assignedOrders', this)"><i class="bi bi-box-seam me-2"></i> Assigned Orders</a></li>
        <a href="#" class="nav-link-dash" onclick="loadContent('pendingDeliveries', this)"><i class="bi bi-hourglass-split "></i> Pending Deliveries</a></li>
        <a href="#" class="nav-link-dash" onclick="loadContent('completedDeliveries', this)"><i class="bi bi-check-circle "></i> Completed Deliveries</a></li>
        <a href="#" class="nav-link-dash" onclick="loadContent('deliveryStatus', this)"><i class="bi bi-arrow-repeat me-2"></i> Update Status</a></li>
        <a href="#" class="nav-link-dash" onclick="loadContent('deliveryNotifications', this)"><i class="bi bi-bell me-2"></i> Notifications</a></li>
    </div>`
    };

    // 4. NAVIGATION LOGIC
    function loadContent(pageKey, element) {
  const contentArea = document.getElementById("dashboardContent");
  contentArea.innerHTML = pages[pageKey] || "<h3>Coming Soon</h3>";

  document.querySelectorAll('.nav-link-dash').forEach(l => l.classList.remove('active'));
  if (element) element.classList.add('active');

  if (pageKey === "adminhome") {
    initAdminSalesChart();
  }
  else if (pageKey === "saleshome") {
    initSalesHomeChart();
  }
  else if (pageKey === "salesReport") {
    initSalesReportChart();
  }
  else if (pageKey === "clientReport") {
    initClientReportChart();
  }
  else if(pageKey === "salesreport"){
    initSalesChart();
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
        } else {// If elements are gone (user moved to another page), stop the timer
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
function loadpage(page){
    const container=document.getElementById("main-content");
    container.innerHTML=pages[page];
    if (page === 'clientReport') {
        initClientChart();
    }
    if (page === 'adminhome') {
        initSalesOverviewChart();
    }
    if(page==='salesReport'){
        initStaffPerformanceChart(); // This handles the "two more" charts
    }
    if(page==='salesreport'){
        initSalesHomeChart();
    }
}
function initClientReportChart() {
  const ctx = document.getElementById("clientReportChart");
  if (!ctx) return;
  destroyChart();

  activeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Chaithanya","Anju","Malavika","Shradha"],
      datasets: [{
        label: "Orders",
        data: [10,6,30,1]
      }]
    }
  });
}
 function initSalesChart(){
    const ctx = document.getElementById("salechart");
  if (!ctx) return;
  destroyChart();

  activeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Chaithanya","Anju","Malavika","Shradha"],
      datasets: [{
        label: "Orders",
        data: [10,6,30,1]
      }]
    }
  });
 }

function initAdminSalesChart() {
  const ctx = document.getElementById("adminSalesChart");
  if (!ctx) return;
  destroyChart();

  activeChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun"],
      datasets: [{
        label: "Total Sales",
        data: [12000, 19000, 15000, 22000, 18000, 25000],
        borderWidth: 2
      }]
    }
  });
}
function initSalesHomeChart() {
  const ctx = document.getElementById("salesHomeChart");
  if (!ctx) return;
  destroyChart();

  activeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat"],
      datasets: [{
        label: "Daily Sales",
        data: [5000,7000,6000,9000,8000,11000]
      }]
    }
  });
}
function initSalesReportChart() {
  const ctx = document.getElementById("salesReportChart");
  if (!ctx) return;
  destroyChart();

  activeChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1","Week 2","Week 3","Week 4"],
      datasets: [{
        label: "Weekly Revenue",
        data: [45000,52000,48000,61000]
      }]
    }
  });
}

let activeChart = null;

function destroyChart() {
  if (activeChart) {
    activeChart.destroy();
    activeChart = null;
  }
}

init();