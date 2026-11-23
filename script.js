/**
 * ============================================================================
 * STAYNEST - PREMIUM HOSTEL & PG MANAGEMENT PLATFORM
 * JavaScript Engine: Vanilla JS (Modular, Clean, Commented)
 * Academic Project: First-Year B.Tech Web Development
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA REPOSITORIES & SAMPLE STORAGE
  // ==========================================================================

  // Comprehensive Room Database for Details Modal
  const ROOM_DETAILS_DATA = {
    'room-1': {
      title: 'Single Sharing Deluxe Suite',
      type: 'Single Sharing (Private)',
      rent: '₹16,500 / month',
      securityDeposit: '₹15,000 (Refundable upon checkout)',
      status: 'Available (1 Bed Left)',
      statusClass: 'status-available',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      description: 'Our premier private accommodation specifically tailored for students and research scholars who require uninterrupted focus and personal solitude. Featuring high ceilings, full natural ventilation, and acoustic isolation.',
      dimensions: '14 ft x 12 ft (168 sq. ft.)',
      balcony: 'Yes (Attached private garden-facing balcony)',
      bathroom: 'Attached Luxury Washroom with 25L Instant Geyser',
      ac: '1.5 Ton 5-Star Dual Inverter Split AC',
      inclusions: [
        '4 Fresh Daily Chef-Prepared Meals',
        'High-Speed 300 Mbps Gigabit Mesh Wi-Fi',
        'Daily Room Cleaning & Bathroom Sanitization',
        'Twice-Weekly Laundry & Steam Ironing',
        '100% DG Set Power Backup (Runs AC & Wi-Fi)',
        'Personal Digital Locker & Wooden Wardrobe',
        'Ergonomic High-Back Study Chair & Large Desk',
        'Orthopaedic Spine-Care Memory Foam Mattress'
      ]
    },
    'room-2': {
      title: 'Double Sharing Studio',
      type: 'Double Sharing (Twin Sharing)',
      rent: '₹10,800 / month',
      securityDeposit: '₹10,000 (Refundable)',
      status: 'Available (3 Beds Left)',
      statusClass: 'status-available',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
      description: 'The golden balance between vibrant companionship and study focus. Each student is provided an independent corner with a dedicated study station, bookshelves, and secure storage.',
      dimensions: '18 ft x 14 ft (252 sq. ft.)',
      balcony: 'Shared Balcony with West Wing View',
      bathroom: 'Attached Modern Washroom with Solar + Electric Geyser',
      ac: '2.0 Ton Smart Inverter AC',
      inclusions: [
        '4 Daily Fresh Meals (Breakfast, Lunch, Snacks, Dinner)',
        '300 Mbps Wi-Fi with Zero Latency Gaming Support',
        'Daily Room Mopping and Garbage Clearance',
        'Weekly Laundry Service (Up to 15 clothes/week)',
        '2 Independent Wooden Study Pods with LED Lamps',
        '2 Independent Wardrobes with Individual Keys',
        '24x7 Hot Water Supply in Attached Washroom',
        'Biometric Corridor & Wing Access'
      ]
    },
    'room-3': {
      title: 'Triple Sharing Classic',
      type: 'Triple Sharing (Trio Room)',
      rent: '₹8,200 / month',
      securityDeposit: '₹8,000 (Refundable)',
      status: 'Filling Fast (2 Beds Left)',
      statusClass: 'status-filling',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4570?auto=format&fit=crop&w=900&q=80',
      description: 'An energetic, collaborative room setup beloved by engineering project groups and coding peers. Generous open floor area ensures zero clutter.',
      dimensions: '22 ft x 16 ft (352 sq. ft.)',
      balcony: 'Large French Window with Courtyard View',
      bathroom: 'Attached Multi-Cubicle Bathroom',
      ac: 'High-Capacity Air Conditioned Wing',
      inclusions: [
        'All 4 Daily Nutritious Meals Included',
        'Continuous Wi-Fi 6 Mesh Coverage',
        '3 Individual Single Beds with Storage Underneath',
        '3 Separate Wardrobes with Security Padlocks',
        '3 Study Tables with Pin-up Boards',
        'Daily Professional Housekeeping',
        'Drinking Water RO Dispensers on Floor',
        'Access to 24/7 Silent Study Lounges'
      ]
    },
    'room-4': {
      title: 'Four Sharing Quad',
      type: 'Four Sharing (Quad Room)',
      rent: '₹6,200 / month',
      securityDeposit: '₹6,000 (Refundable)',
      status: 'Available (4 Beds Left)',
      statusClass: 'status-available',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
      description: 'Maximum cost-efficiency for budget-conscious students without any compromise on sanitation, security, nutrition, and comfort. Includes large individual lockers.',
      dimensions: '26 ft x 18 ft (468 sq. ft.)',
      balcony: 'Wide Corridor Balcony Access',
      bathroom: 'Spacious Attached Washroom with Dual Basins',
      ac: 'Equipped with High-Flow BLDC Energy Fans (AC optional)',
      inclusions: [
        'Complete 4-Meal Plan (North & South Indian)',
        '300 Mbps Unlimited Internet for Academics',
        '4 Heavy-Gauge Steel Lockers with Padlocks',
        '4 Sturdy Single Wooden Beds with Foam Mattresses',
        'Daily Sweeping and Wet Mopping Service',
        'Free Automated Laundry Machine Access',
        'Full Power Backup for Fans, Lights & Sockets',
        '24x7 Security Guards & CCTV Surveillance'
      ]
    },
    'room-5': {
      title: 'Single Executive Penthouse',
      type: 'Single Sharing (Penthouse Floor)',
      rent: '₹18,500 / month',
      securityDeposit: '₹18,000 (Refundable)',
      status: 'Occupied (Waitlist Open)',
      statusClass: 'status-occupied',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80',
      description: 'Top-tier luxury student suite featuring a private sunset balcony, sound-insulated acoustics, private mini-refrigerator, 43-inch smart television, and luxury recliner chair.',
      dimensions: '16 ft x 15 ft (240 sq. ft.)',
      balcony: 'Private Panoramic Sunset Terrace',
      bathroom: 'Designer Attached Bathroom with Glass Shower Partition',
      ac: 'Silent Multi-Inverter Air Conditioner',
      inclusions: [
        'VIP Dining Pass with In-Room Dining Support',
        'High-Speed Dedicated 500 Mbps Wi-Fi SSID',
        'Mini-Refrigerator & Smart TV included',
        'Executive Recliner & Electric Sit-Stand Desk',
        'Daily Housekeeping with Linen Change',
        'Unlimited Laundry and Express Pressing',
        'Free Access to Gymnasium & PS5 Gaming Arena',
        'Dedicated Covered Two-Wheeler Parking Slot'
      ]
    },
    'room-6': {
      title: 'Double Sharing Premium AC',
      type: 'Double Sharing (Premium Wing)',
      rent: '₹12,500 / month',
      securityDeposit: '₹12,000 (Refundable)',
      status: 'Available (2 Beds Left)',
      statusClass: 'status-available',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
      description: 'Upgraded twin suite situated in the quietest sector of the residence. Comes with wooden floor finishes, ambient warm LED task lighting, and enlarged wardrobe spaces.',
      dimensions: '20 ft x 15 ft (300 sq. ft.)',
      balcony: 'Attached Balcony with Green Park View',
      bathroom: 'Attached Luxury Washroom with Premium Ceramic Fittings',
      ac: '1.5 Ton Split AC with Sleep Mode',
      inclusions: [
        'Full 4-Meal Dining Package + Evening Snacks',
        '300 Mbps Mesh Wi-Fi 6 Coverage',
        'Sound-Proof Double Glazed Acoustic Windows',
        'Full Wooden Wardrobes with Mirror & Shoe Rack',
        'Ergonomic Mesh Study Chairs with Lumbar Support',
        'Daily Housekeeping & Sanitized Linen Supply',
        'In-House Doctor Consultation Assistance',
        '100% Automatic Generator Power Backup'
      ]
    }
  };

  // Seed Default Demonstration Tickets in localStorage if not already present
  const DEFAULT_COMPLAINTS = [
    {
      id: 'SN-TKT-1082',
      name: 'Aditya Kumar',
      room: 'B-304',
      category: 'Wi-Fi & Internet',
      priority: 'High',
      description: 'Corridor Wi-Fi access point resets frequently in the evening during online coding lectures.',
      date: 'Today, 10:15 AM',
      status: 'in-progress',
      technician: 'Manoj Verma (Network Operations)',
      eta: 'Within 90 mins',
      stepIndex: 3 // 1: Submitted, 2: Assigned, 3: In Progress, 4: Resolved
    },
    {
      id: 'SN-TKT-0941',
      name: 'Priya Nair',
      room: 'A-102',
      category: 'Electricity & AC',
      priority: 'Normal',
      description: 'AC remote control batteries required replacement. Device not responding to thermostat adjustments.',
      date: 'Yesterday, 04:30 PM',
      status: 'resolved',
      technician: 'Suresh Chand (HVAC Team)',
      eta: 'Completed Successfully',
      stepIndex: 4
    },
    {
      id: 'SN-TKT-1150',
      name: 'Rohan Mehta',
      room: 'C-215',
      category: 'Cleanliness & Housekeeping',
      priority: 'Normal',
      description: 'Requested afternoon deep bathroom scrubbing and sanitization ahead of parent weekend visit.',
      date: 'Today, 01:20 PM',
      status: 'pending',
      technician: 'Kamala Devi (Housekeeping Head)',
      eta: 'Scheduled for 3:30 PM',
      stepIndex: 2
    }
  ];

  function initLocalStorageData() {
    if (!localStorage.getItem('staynest_complaints')) {
      localStorage.setItem('staynest_complaints', JSON.stringify(DEFAULT_COMPLAINTS));
    }
    if (!localStorage.getItem('staynest_enquiries')) {
      localStorage.setItem('staynest_enquiries', JSON.stringify([]));
    }
  }
  initLocalStorageData();

  function getStoredComplaints() {
    try {
      return JSON.parse(localStorage.getItem('staynest_complaints')) || DEFAULT_COMPLAINTS;
    } catch (e) {
      return DEFAULT_COMPLAINTS;
    }
  }

  function saveStoredComplaints(complaints) {
    try {
      localStorage.setItem('staynest_complaints', JSON.stringify(complaints));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }


  // ==========================================================================
  // 2. HEADER, STICKY NAVIGATION & MOBILE DRAWER
  // ==========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link, #drawerEnquireBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const closeBannerBtn = document.getElementById('closeBannerBtn');
  const currentYearSpan = document.getElementById('currentYear');

  // Set current year dynamically
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Dismiss Top Banner
  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', () => {
      const banner = closeBannerBtn.closest('.academic-banner');
      if (banner) {
        banner.style.display = 'none';
      }
    });
  }

  // Sticky Header & Back to top button visibility on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    highlightActiveNavLink();
  });

  // Smooth Scroll to Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Mobile Menu Controls
  function openMobileMenu() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Active Link Highlighting using Section Offsets
  const sections = document.querySelectorAll('section[id], header[id="home"]');

  function highlightActiveNavLink() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }


  // ==========================================================================
  // 3. HERO QUICK FILTER ASSISTANT
  // ==========================================================================
  const heroFilterBtn = document.getElementById('heroFilterBtn');
  const heroRoomTypeSelect = document.getElementById('heroRoomType');
  const heroAcSelect = document.getElementById('heroAc');

  if (heroFilterBtn) {
    heroFilterBtn.addEventListener('click', () => {
      const selectedType = heroRoomTypeSelect.value;
      const selectedAc = heroAcSelect.value;

      // Scroll to rooms section smoothly
      const roomsSection = document.getElementById('rooms');
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Sync with room filter buttons
      const targetFilterBtn = document.querySelector(`.type-filter-buttons .filter-btn[data-filter="${selectedType}"]`);
      if (targetFilterBtn) {
        document.querySelectorAll('.type-filter-buttons .filter-btn').forEach(b => b.classList.remove('active'));
        targetFilterBtn.classList.add('active');
      }

      // Apply filtering logic with optional AC filter
      filterAndSortRooms(selectedType, 'all', 'default', selectedAc);
    });
  }


  // ==========================================================================
  // 4. AVAILABLE ROOMS FILTERING, SORTING & INTERACTIVE MODAL
  // ==========================================================================
  const roomFilterButtons = document.querySelectorAll('.type-filter-buttons .filter-btn');
  const availabilityFilterSelect = document.getElementById('availabilityFilter');
  const priceSortSelect = document.getElementById('priceSort');
  const roomsGrid = document.getElementById('roomsGrid');
  const roomCards = Array.from(document.querySelectorAll('.room-card'));
  const noRoomsMsg = document.getElementById('noRoomsMsg');
  const resetRoomFiltersBtn = document.getElementById('resetRoomFiltersBtn');
  const countAllSpan = document.getElementById('countAll');

  if (countAllSpan) {
    countAllSpan.textContent = roomCards.length;
  }

  let currentTypeFilter = 'all';
  let currentAvailFilter = 'all';
  let currentSort = 'default';

  function filterAndSortRooms(type = currentTypeFilter, availability = currentAvailFilter, sort = currentSort, acFilter = 'all') {
    currentTypeFilter = type;
    currentAvailFilter = availability;
    currentSort = sort;

    let visibleCount = 0;

    // Filter cards
    roomCards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardStatus = card.getAttribute('data-status');
      const cardAc = card.getAttribute('data-ac');

      let matchesType = (type === 'all' || cardType === type);
      let matchesAvail = (availability === 'all' || cardStatus === availability);
      let matchesAc = (acFilter === 'all' || cardAc === (acFilter === 'ac' ? 'yes' : 'no'));

      if (matchesType && matchesAvail && matchesAc) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Sort visible cards
    let sortedCards = [...roomCards];
    if (sort === 'low-high') {
      sortedCards.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
    } else if (sort === 'high-low') {
      sortedCards.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
    }

    // Re-append sorted cards
    sortedCards.forEach(card => roomsGrid.appendChild(card));

    // Show/hide empty state
    if (visibleCount === 0) {
      noRoomsMsg.style.display = 'block';
    } else {
      noRoomsMsg.style.display = 'none';
    }
  }

  // Type filter buttons
  roomFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roomFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndSortRooms(btn.getAttribute('data-filter'), availabilityFilterSelect.value, priceSortSelect.value);
    });
  });

  // Availability filter dropdown
  if (availabilityFilterSelect) {
    availabilityFilterSelect.addEventListener('change', () => {
      filterAndSortRooms(currentTypeFilter, availabilityFilterSelect.value, priceSortSelect.value);
    });
  }

  // Price sort dropdown
  if (priceSortSelect) {
    priceSortSelect.addEventListener('change', () => {
      filterAndSortRooms(currentTypeFilter, availabilityFilterSelect.value, priceSortSelect.value);
    });
  }

  // Reset filters button
  if (resetRoomFiltersBtn) {
    resetRoomFiltersBtn.addEventListener('click', () => {
      roomFilterButtons.forEach(b => b.classList.remove('active'));
      document.querySelector('.type-filter-buttons .filter-btn[data-filter="all"]').classList.add('active');
      availabilityFilterSelect.value = 'all';
      priceSortSelect.value = 'default';
      filterAndSortRooms('all', 'all', 'default');
    });
  }

  // "Enquire Now" Buttons on Room Cards -> Auto fill room type and scroll to enquiry form
  document.querySelectorAll('.enquire-room-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomName = btn.getAttribute('data-room-name');
      const enquiryDropdown = document.getElementById('enqRoomType');
      const enquirySection = document.getElementById('enquiry');

      if (enquiryDropdown) {
        // Find matching option
        for (let i = 0; i < enquiryDropdown.options.length; i++) {
          if (enquiryDropdown.options[i].text.includes(roomName) || roomName.includes(enquiryDropdown.options[i].value.split(' ')[0])) {
            enquiryDropdown.selectedIndex = i;
            break;
          }
        }
      }

      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
        // Pulse the dropdown to indicate it was preselected
        if (enquiryDropdown) {
          setTimeout(() => {
            enquiryDropdown.focus();
            enquiryDropdown.classList.add('pulse-focus');
            setTimeout(() => enquiryDropdown.classList.remove('pulse-focus'), 1000);
          }, 600);
        }
      }
    });
  });

  // Room Details Modal Logic
  const roomDetailsModal = document.getElementById('roomDetailsModal');
  const closeRoomModalBtn = document.getElementById('closeRoomModalBtn');
  const roomModalContent = document.getElementById('roomModalContent');

  function openRoomDetailsModal(roomId) {
    const data = ROOM_DETAILS_DATA[roomId];
    if (!data) return;

    roomModalContent.innerHTML = `
      <div class="room-modal-grid">
        <div class="room-modal-img-col">
          <img src="${data.image}" alt="${data.title}">
          <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span class="room-status-badge ${data.statusClass}" style="position: static; display: inline-flex;">
              <i class="fa-solid fa-circle-check"></i> ${data.status}
            </span>
            <span class="room-badge badge-bestseller" style="position: static; display: inline-flex;">
              <i class="fa-solid fa-compass"></i> Verified Dimensions
            </span>
          </div>
        </div>
        <div class="room-modal-info-col">
          <span class="badge-academic" style="margin-bottom: 0.5rem;"><i class="fa-solid fa-bed"></i> ${data.type}</span>
          <h3 id="modalRoomTitle">${data.title}</h3>
          <div class="room-modal-price">${data.rent}</div>
          <p style="font-size: 0.88rem; color: var(--charcoal-600); margin-bottom: 1.25rem; line-height: 1.55;">${data.description}</p>
          
          <div class="room-modal-specs">
            <div><strong>Carpet Area:</strong> <br><span style="color: var(--charcoal-500);">${data.dimensions}</span></div>
            <div><strong>Washroom:</strong> <br><span style="color: var(--charcoal-500);">${data.bathroom}</span></div>
            <div><strong>Balcony:</strong> <br><span style="color: var(--charcoal-500);">${data.balcony}</span></div>
            <div><strong>Security Deposit:</strong> <br><span style="color: var(--emerald-700); font-weight: 600;">${data.securityDeposit}</span></div>
          </div>

          <div class="room-modal-inclusions">
            <h4>Key Amenities Included with Bed:</h4>
            <ul>
              ${data.inclusions.map(inc => `<li><i class="fa-solid fa-check"></i> ${inc}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-top: 1.75rem; display: flex; gap: 0.85rem;">
            <button class="btn btn-emerald btn-block" id="modalEnquireBtn" data-room-name="${data.title}">
              <i class="fa-regular fa-paper-plane"></i> Reserve This Bed
            </button>
          </div>
        </div>
      </div>
    `;

    roomDetailsModal.classList.add('open');
    roomDetailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook the enquire button inside modal
    const modalEnquireBtn = document.getElementById('modalEnquireBtn');
    if (modalEnquireBtn) {
      modalEnquireBtn.addEventListener('click', () => {
        closeRoomDetailsModal();
        const enquiryDropdown = document.getElementById('enqRoomType');
        const enquirySection = document.getElementById('enquiry');
        if (enquiryDropdown) {
          for (let i = 0; i < enquiryDropdown.options.length; i++) {
            if (enquiryDropdown.options[i].text.includes(data.title)) {
              enquiryDropdown.selectedIndex = i;
              break;
            }
          }
        }
        if (enquirySection) {
          enquirySection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  function closeRoomDetailsModal() {
    roomDetailsModal.classList.remove('open');
    roomDetailsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const roomId = btn.getAttribute('data-room-id');
      openRoomDetailsModal(roomId);
    });
  });

  if (closeRoomModalBtn) {
    closeRoomModalBtn.addEventListener('click', closeRoomDetailsModal);
  }

  if (roomDetailsModal) {
    roomDetailsModal.addEventListener('click', (e) => {
      if (e.target === roomDetailsModal) {
        closeRoomDetailsModal();
      }
    });
  }


  // ==========================================================================
  // 5. WEEKLY FOOD MENU SWITCHER
  // ==========================================================================
  const dayTabs = document.querySelectorAll('.menu-tabs-wrapper .day-tab');
  const dayPanels = document.querySelectorAll('.day-menu-panel');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetDay = tab.getAttribute('data-day');

      // Update tab active state
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panel active state
      dayPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `menu-${targetDay}`) {
          panel.classList.add('active');
        }
      });
    });
  });

  // Optional: Automatically switch to today's day of week on initial load
  function autoSelectTodayMenu() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayIndex = new Date().getDay();
    const todayName = days[todayIndex];

    const todayTab = document.querySelector(`.menu-tabs-wrapper .day-tab[data-day="${todayName}"]`);
    if (todayTab) {
      dayTabs.forEach(t => t.classList.remove('active'));
      todayTab.classList.add('active');

      dayPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `menu-${todayName}`) {
          panel.classList.add('active');
        }
      });
    }
  }
  autoSelectTodayMenu();


  // ==========================================================================
  // 6. HOSTEL RULES ACCORDION
  // ==========================================================================
  const ruleCards = document.querySelectorAll('.rule-accordion-card');

  ruleCards.forEach(card => {
    const header = card.querySelector('.rule-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');

        // Close other accordions for clean single view
        ruleCards.forEach(c => c.classList.remove('active'));

        if (!isOpen) {
          card.classList.add('active');
        }
      });
    }
  });


  // ==========================================================================
  // 7. PHOTO GALLERY FILTER & LIGHTBOX MODAL
  // ==========================================================================
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryLightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  // Filter gallery items
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // Lightbox Data extraction
  const galleryDataList = [];
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const tag = item.querySelector('.gallery-tag');
    const title = item.querySelector('.gallery-overlay h4');
    const desc = item.querySelector('.gallery-overlay p');

    galleryDataList.push({
      src: img ? img.src : '',
      alt: img ? img.alt : '',
      tag: tag ? tag.textContent : 'Campus',
      title: title ? title.textContent : 'STAYNEST Life',
      desc: desc ? desc.textContent : ''
    });

    // Clicking card opens lightbox
    const card = item.querySelector('.gallery-card');
    if (card) {
      card.addEventListener('click', () => openLightbox(index));
    }
  });

  let currentLightboxIndex = 0;

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    galleryLightbox.classList.add('open');
    galleryLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    const current = galleryDataList[currentLightboxIndex];
    if (!current) return;

    lightboxImg.src = current.src;
    lightboxImg.alt = current.alt;
    lightboxTag.textContent = current.tag;
    lightboxTitle.textContent = current.title;
    lightboxDesc.textContent = current.desc;
  }

  function closeLightbox() {
    galleryLightbox.classList.remove('open');
    galleryLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryDataList.length) % galleryDataList.length;
    updateLightboxContent();
  }

  function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryDataList.length;
    updateLightboxContent();
  }

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);

  if (galleryLightbox) {
    galleryLightbox.addEventListener('click', (e) => {
      if (e.target === galleryLightbox) closeLightbox();
    });
  }


  // ==========================================================================
  // 8. ENQUIRY / BOOKING REQUEST FORM VALIDATION & CONFIRMATION
  // ==========================================================================
  const enquiryForm = document.getElementById('enquiryForm');
  const enqFullName = document.getElementById('enqFullName');
  const enqEmail = document.getElementById('enqEmail');
  const enqPhone = document.getElementById('enqPhone');
  const enqRoomType = document.getElementById('enqRoomType');
  const enqJoiningDate = document.getElementById('enqJoiningDate');
  const enqCollege = document.getElementById('enqCollege');
  const enqMessage = document.getElementById('enqMessage');

  // Set min date on datepicker to today
  if (enqJoiningDate) {
    const todayStr = new Date().toISOString().split('T')[0];
    enqJoiningDate.setAttribute('min', todayStr);
    // Default to 1 week from today
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    enqJoiningDate.value = nextWeek.toISOString().split('T')[0];
  }

  // Success Modal Elements
  const enquirySuccessModal = document.getElementById('enquirySuccessModal');
  const closeEnquiryModalBtn = document.getElementById('closeEnquiryModalBtn');
  const closeEnquiryOkBtn = document.getElementById('closeEnquiryOkBtn');
  const enqTokenBadge = document.getElementById('enqTokenBadge');
  const enqConfirmedName = document.getElementById('enqConfirmedName');
  const enqConfirmedRoom = document.getElementById('enqConfirmedRoom');
  const enqConfirmedDate = document.getElementById('enqConfirmedDate');
  const enqConfirmedPhone = document.getElementById('enqConfirmedPhone');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateIndianPhone(phone) {
    const re = /^[6-9]\d{9}$/;
    return re.test(String(phone).trim());
  }

  function setFieldError(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const formGroup = field.closest('.form-group');
    if (formGroup) {
      if (hasError) {
        formGroup.classList.add('has-error');
      } else {
        formGroup.classList.remove('has-error');
      }
    }
  }

  // Clear errors on user input
  [enqFullName, enqEmail, enqPhone, enqRoomType, enqJoiningDate].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        setFieldError(field.id, false);
      });
      field.addEventListener('change', () => {
        setFieldError(field.id, false);
      });
    }
  });

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!enqFullName.value.trim() || enqFullName.value.trim().length < 3) {
        setFieldError('enqFullName', true);
        isValid = false;
      } else {
        setFieldError('enqFullName', false);
      }

      // Validate Email
      if (!validateEmail(enqEmail.value.trim())) {
        setFieldError('enqEmail', true);
        isValid = false;
      } else {
        setFieldError('enqEmail', false);
      }

      // Validate Phone
      if (!validateIndianPhone(enqPhone.value.trim())) {
        setFieldError('enqPhone', true);
        isValid = false;
      } else {
        setFieldError('enqPhone', false);
      }

      // Validate Room Type
      if (!enqRoomType.value) {
        setFieldError('enqRoomType', true);
        isValid = false;
      } else {
        setFieldError('enqRoomType', false);
      }

      // Validate Joining Date
      if (!enqJoiningDate.value) {
        setFieldError('enqJoiningDate', true);
        isValid = false;
      } else {
        setFieldError('enqJoiningDate', false);
      }

      if (!isValid) {
        // Focus first invalid element
        const firstError = enquiryForm.querySelector('.has-error input, .has-error select');
        if (firstError) firstError.focus();
        return;
      }

      // Generate Reference Token
      const randomTokenNum = Math.floor(1000 + Math.random() * 9000);
      const token = `SN-ENQ-${new Date().getFullYear()}-${randomTokenNum}`;

      // Populate confirmation modal
      enqTokenBadge.textContent = `DEMO TOKEN: ${token}`;
      enqConfirmedName.textContent = enqFullName.value.trim();
      enqConfirmedRoom.textContent = enqRoomType.value;
      enqConfirmedDate.textContent = enqJoiningDate.value;
      enqConfirmedPhone.textContent = `+91 ${enqPhone.value.trim()}`;

      // Save to demo localStorage
      const newEnquiry = {
        token: token,
        name: enqFullName.value.trim(),
        email: enqEmail.value.trim(),
        phone: enqPhone.value.trim(),
        room: enqRoomType.value,
        date: enqJoiningDate.value,
        college: enqCollege ? enqCollege.value.trim() : '',
        message: enqMessage ? enqMessage.value.trim() : '',
        createdAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('staynest_enquiries')) || [];
        stored.push(newEnquiry);
        localStorage.setItem('staynest_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Open Confirmation Modal
      enquirySuccessModal.classList.add('open');
      enquirySuccessModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Reset Form fields
      enquiryForm.reset();
    });
  }

  function closeEnquiryModal() {
    enquirySuccessModal.classList.remove('open');
    enquirySuccessModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeEnquiryModalBtn) closeEnquiryModalBtn.addEventListener('click', closeEnquiryModal);
  if (closeEnquiryOkBtn) closeEnquiryOkBtn.addEventListener('click', closeEnquiryModal);

  if (enquirySuccessModal) {
    enquirySuccessModal.addEventListener('click', (e) => {
      if (e.target === enquirySuccessModal) closeEnquiryModal();
    });
  }


  // ==========================================================================
  // 9. COMPLAINT & SUPPORT SYSTEM (GRIEVANCE ENGINE)
  // ==========================================================================
  const complaintForm = document.getElementById('complaintForm');
  const compStudentName = document.getElementById('compStudentName');
  const compRoomNo = document.getElementById('compRoomNo');
  const compCategory = document.getElementById('compCategory');
  const compPriority = document.getElementById('compPriority');
  const compDescription = document.getElementById('compDescription');

  // Complaint Success Modal Elements
  const complaintSuccessModal = document.getElementById('complaintSuccessModal');
  const closeComplaintModalBtn = document.getElementById('closeComplaintModalBtn');
  const closeComplaintOkBtn = document.getElementById('closeComplaintOkBtn');
  const viewTrackTicketBtn = document.getElementById('viewTrackTicketBtn');
  const compTokenBadge = document.getElementById('compTokenBadge');
  const compConfirmedName = document.getElementById('compConfirmedName');
  const compConfirmedRoom = document.getElementById('compConfirmedRoom');
  const compConfirmedCat = document.getElementById('compConfirmedCat');

  // Complaint Status Card Elements
  const trackTicketInput = document.getElementById('trackTicketInput');
  const trackTicketBtn = document.getElementById('trackTicketBtn');
  const displayTicketId = document.getElementById('displayTicketId');
  const displayTicketBadge = document.getElementById('displayTicketBadge');
  const displayStudent = document.getElementById('displayStudent');
  const displayRoom = document.getElementById('displayRoom');
  const displayCategory = document.getElementById('displayCategory');
  const displayTime = document.getElementById('displayTime');
  const displayDescription = document.getElementById('displayDescription');
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');
  const sampleTicketButtons = document.querySelectorAll('.sample-ticket-btn');

  let activeTrackingTicketId = 'SN-TKT-1082';

  // Clear complaint input errors
  [compStudentName, compRoomNo, compCategory, compDescription].forEach(field => {
    if (field) {
      field.addEventListener('input', () => setFieldError(field.id, false));
      field.addEventListener('change', () => setFieldError(field.id, false));
    }
  });

  // Submit Complaint Form
  if (complaintForm) {
    complaintForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      if (!compStudentName.value.trim() || compStudentName.value.trim().length < 3) {
        setFieldError('compStudentName', true);
        isValid = false;
      } else {
        setFieldError('compStudentName', false);
      }

      if (!compRoomNo.value.trim()) {
        setFieldError('compRoomNo', true);
        isValid = false;
      } else {
        setFieldError('compRoomNo', false);
      }

      if (!compCategory.value) {
        setFieldError('compCategory', true);
        isValid = false;
      } else {
        setFieldError('compCategory', false);
      }

      if (!compDescription.value.trim() || compDescription.value.trim().length < 10) {
        setFieldError('compDescription', true);
        isValid = false;
      } else {
        setFieldError('compDescription', false);
      }

      if (!isValid) {
        const firstError = complaintForm.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Generate Unique Ticket Reference ID
      const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `SN-TKT-${randomTicketNum}`;
      activeTrackingTicketId = ticketId;

      const newTicket = {
        id: ticketId,
        name: compStudentName.value.trim(),
        room: compRoomNo.value.trim().toUpperCase(),
        category: compCategory.value,
        priority: compPriority.value,
        description: compDescription.value.trim(),
        date: 'Just now',
        status: 'in-progress',
        technician: 'Rameshwar Lal (Duty Warden)',
        eta: 'Estimated resolution within 3 hours',
        stepIndex: 2
      };

      // Save into complaints array
      const complaints = getStoredComplaints();
      complaints.unshift(newTicket);
      saveStoredComplaints(complaints);

      // Populate Success Modal
      compTokenBadge.textContent = `TICKET REF: ${ticketId}`;
      compConfirmedName.textContent = newTicket.name;
      compConfirmedRoom.textContent = newTicket.room;
      compConfirmedCat.textContent = newTicket.category;

      // Show Modal
      complaintSuccessModal.classList.add('open');
      complaintSuccessModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Reset form
      complaintForm.reset();
    });
  }

  function closeComplaintModal() {
    complaintSuccessModal.classList.remove('open');
    complaintSuccessModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeComplaintModalBtn) closeComplaintModalBtn.addEventListener('click', closeComplaintModal);
  if (closeComplaintOkBtn) closeComplaintOkBtn.addEventListener('click', closeComplaintModal);

  if (viewTrackTicketBtn) {
    viewTrackTicketBtn.addEventListener('click', () => {
      closeComplaintModal();
      renderComplaintStatus(activeTrackingTicketId);
      // Smooth scroll to tracking card
      const trackerBox = document.querySelector('.complaint-status-box');
      if (trackerBox) trackerBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (complaintSuccessModal) {
    complaintSuccessModal.addEventListener('click', (e) => {
      if (e.target === complaintSuccessModal) closeComplaintModal();
    });
  }

  // Render Ticket Status in Tracker Card
  function renderComplaintStatus(ticketId) {
    const complaints = getStoredComplaints();
    const cleanId = ticketId.trim().toUpperCase();

    const ticket = complaints.find(c => c.id.toUpperCase() === cleanId);

    if (!ticket) {
      alert(`Ticket "${ticketId}" was not found in the demonstration database. Please check the ID or select one of the sample tickets.`);
      return;
    }

    displayTicketId.textContent = ticket.id;
    displayStudent.textContent = ticket.name;
    displayRoom.textContent = ticket.room;
    displayCategory.textContent = ticket.category;
    displayTime.textContent = ticket.date;
    displayDescription.textContent = ticket.description;

    // Status Badge & Stepper update
    if (ticket.status === 'resolved') {
      displayTicketBadge.className = 'ticket-badge-status badge-resolved';
      displayTicketBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resolved';
      updateStepper(4);
    } else if (ticket.status === 'in-progress') {
      displayTicketBadge.className = 'ticket-badge-status badge-in-progress';
      displayTicketBadge.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin"></i> In Progress';
      updateStepper(3);
    } else {
      displayTicketBadge.className = 'ticket-badge-status badge-pending';
      displayTicketBadge.innerHTML = '<i class="fa-solid fa-clock"></i> Assigned / Review';
      updateStepper(2);
    }

    // Technician Note
    const techEl = document.querySelector('.ticket-tech-assigned');
    if (techEl) {
      techEl.innerHTML = `<i class="fa-solid fa-screwdriver-wrench text-emerald"></i> <span>Assigned Staff: <strong>${ticket.technician}</strong> • ${ticket.eta}</span>`;
    }

    if (trackTicketInput) {
      trackTicketInput.value = ticket.id;
    }
  }

  function updateStepper(step) {
    // Reset all
    [step1, step2, step3, step4].forEach(s => {
      s.className = 'step-item';
    });
    [line1, line2, line3].forEach(l => {
      l.classList.remove('active');
    });

    if (step >= 1) {
      step1.classList.add('completed');
    }
    if (step >= 2) {
      line1.classList.add('active');
      if (step === 2) step2.classList.add('in-progress');
      else step2.classList.add('completed');
    }
    if (step >= 3) {
      line2.classList.add('active');
      if (step === 3) step3.classList.add('in-progress');
      else step3.classList.add('completed');
    }
    if (step >= 4) {
      line3.classList.add('active');
      step4.classList.add('completed');
    }
  }

  // Handle manual track button
  if (trackTicketBtn) {
    trackTicketBtn.addEventListener('click', () => {
      const val = trackTicketInput.value;
      if (val) renderComplaintStatus(val);
      else alert('Please enter a valid ticket reference ID (e.g. SN-TKT-1082)');
    });
  }

  if (trackTicketInput) {
    trackTicketInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        trackTicketBtn.click();
      }
    });
  }

  // Handle Quick Sample Ticket Buttons
  sampleTicketButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tid = btn.getAttribute('data-tid');
      if (tid) renderComplaintStatus(tid);
    });
  });


  // ==========================================================================
  // 10. QUICK TOUR CALLBACK FORM SIMULATION
  // ==========================================================================
  const callbackForm = document.getElementById('callbackForm');
  const callbackPhone = document.getElementById('callbackPhone');
  const callbackFeedback = document.getElementById('callbackFeedback');

  if (callbackForm) {
    callbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = callbackPhone.value.trim();

      if (!validateIndianPhone(phone)) {
        callbackFeedback.className = 'callback-feedback error';
        callbackFeedback.textContent = 'Please enter a valid 10-digit mobile number.';
        return;
      }

      callbackFeedback.className = 'callback-feedback success';
      callbackFeedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Request received! Campus guide will call ${phone} within 15 minutes.`;
      callbackPhone.value = '';

      setTimeout(() => {
        callbackFeedback.textContent = '';
      }, 7000);
    });
  }


  // ==========================================================================
  // 11. KEYBOARD ACCESSIBILITY (ESCAPE KEY CLOSES ALL MODALS)
  // ==========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (roomDetailsModal && roomDetailsModal.classList.contains('open')) {
        closeRoomDetailsModal();
      }
      if (enquirySuccessModal && enquirySuccessModal.classList.contains('open')) {
        closeEnquiryModal();
      }
      if (complaintSuccessModal && complaintSuccessModal.classList.contains('open')) {
        closeComplaintModal();
      }
      if (galleryLightbox && galleryLightbox.classList.contains('open')) {
        closeLightbox();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    } else if (e.key === 'ArrowLeft' && galleryLightbox && galleryLightbox.classList.contains('open')) {
      prevLightbox();
    } else if (e.key === 'ArrowRight' && galleryLightbox && galleryLightbox.classList.contains('open')) {
      nextLightbox();
    }
  });

  console.log('STAYNEST Accommodation Portal initialized successfully.');
});
