/**
 * ADEEP GROUP - Master Interactive Application Logic
 * Comprehensive Product Database & CDMO Inquiry Portal
 */

// Complete Verified Product Basket from Official ADEEP Technical Dossiers
const PRODUCTS_DATA = [
  // Commercial APIs
  {
    id: "mirtazapine",
    name: "Mirtazapine",
    category: "commercial-api",
    cas: "61337-89-1",
    therapy: "Anti depressant",
    targetApi: "Direct Finished API",
    status: "Commercial Scale",
    statusClass: "status-commercial",
    compliance: "WHO-GMP Certified, cGMP Compliant",
    details: "Tetracyclic antidepressant used primarily in major depressive disorder. Manufactured via proprietary route ensuring high purity and low residual solvent profile."
  },
  {
    id: "brivaracetam",
    name: "Brivaracetam",
    category: "commercial-api",
    cas: "357336-20-0",
    therapy: "Anti convulsant",
    targetApi: "Direct Finished API",
    status: "Commercial Scale",
    statusClass: "status-commercial",
    compliance: "WHO-GMP Certified, cGMP Compliant, Chiral Purity >99.5%",
    details: "High-affinity synaptic vesicle protein 2A (SV2A) ligand for refractory partial-onset seizures. Produced via high-yield chiral resolution and enzyme-assisted synthesis."
  },
  {
    id: "phenylephrine-hcl",
    name: "Phenylephrine HCl",
    category: "commercial-api",
    cas: "61-76-7",
    therapy: "De-congestant",
    targetApi: "Direct Finished API",
    status: "Commercial Scale",
    statusClass: "status-commercial",
    compliance: "WHO-GMP, IP/BP/USP Grade",
    details: "Selective alpha-1 adrenergic receptor agonist widely used as an oral and nasal decongestant. Reliable commercial availability in multi-ton batch runs."
  },
  {
    id: "bilastine",
    name: "Bilastine",
    category: "commercial-api",
    cas: "202189-78-4",
    therapy: "Anti histamine",
    targetApi: "Direct Finished API",
    status: "Commercial Scale",
    statusClass: "status-commercial",
    compliance: "WHO-GMP, cGMP Compliant",
    details: "Second-generation non-sedating antihistamine for allergic rhinoconjunctivitis and urticaria. Highly pure crystalline API with complete backward intermediate integration."
  },
  {
    id: "duloxetine-hcl",
    name: "Duloxetine HCl",
    category: "commercial-api",
    cas: "136434-34-9",
    therapy: "Anti depressant",
    targetApi: "Direct Finished API",
    status: "Commercial Scale",
    statusClass: "status-commercial",
    compliance: "WHO-GMP Certified, High Enantiomeric Purity",
    details: "Serotonin-norepinephrine reuptake inhibitor (SNRI) for major depressive disorder and diabetic peripheral neuropathic pain."
  },

  // APIs Under Development (R&D Pipeline)
  {
    id: "moxifloxacin-hcl",
    name: "Moxifloxacin HCl",
    category: "pipeline-api",
    cas: "186826-86-8",
    therapy: "Anti bacterial",
    targetApi: "R&D Pipeline API",
    status: "Under Development",
    statusClass: "status-development",
    compliance: "Pilot Scale / Validation Phase",
    details: "Fourth-generation fluoroquinolone synthetic antibacterial agent with potent broad-spectrum activity against respiratory pathogens."
  },
  {
    id: "dextromethorphan-hbr",
    name: "Dextromethorphan HBr",
    category: "pipeline-api",
    cas: "6700-34-1",
    therapy: "Anti tussives",
    targetApi: "R&D Pipeline API",
    status: "Under Development",
    statusClass: "status-development",
    compliance: "Process Optimization",
    details: "Centrally acting non-opioid antitussive drug. Green catalytic route under development to achieve superior cost efficiency."
  },
  {
    id: "levodopa",
    name: "Levodopa",
    category: "pipeline-api",
    cas: "59-92-7",
    therapy: "Parkinsons",
    targetApi: "R&D Pipeline API",
    status: "Under Development",
    statusClass: "status-development",
    compliance: "Process Scaling & PLI Support",
    details: "Dopamine precursor and frontline medication for Parkinson's disease. Scaled under Make in India import-substitution directives."
  },
  {
    id: "cabergoline",
    name: "Cabergoline",
    category: "pipeline-api",
    cas: "81409-90-7",
    therapy: "Parkinsons",
    targetApi: "R&D Pipeline API",
    status: "Under Development",
    statusClass: "status-development",
    compliance: "High Potency R&D Suite",
    details: "Potent dopamine D2 receptor agonist for hyperprolactinemia and adjunctive therapy in Parkinsonian syndromes."
  },
  {
    id: "dorzolamide",
    name: "Dorzolamide",
    category: "pipeline-api",
    cas: "120279-96-1",
    therapy: "Glaucoma",
    targetApi: "R&D Pipeline API",
    status: "Under Development",
    statusClass: "status-development",
    compliance: "Scale-up Phase",
    details: "Carbonic anhydrase inhibitor reducing intraocular pressure in open-angle glaucoma and ocular hypertension."
  },

  // Key Intermediates (Official Technical Dossiers)
  {
    id: "inter-brivaracetam-1",
    name: "(R)-4-propyldihydrofuran-2(3H)-one",
    category: "intermediate",
    cas: "63095-51-2",
    therapy: "Anti convulsant",
    targetApi: "Brivaracetam",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "cGMP / Export Grade",
    details: "Critical chiral lactone intermediate for Brivaracetam. Synthesized with enzyme-catalyzed resolution delivering >99.8% enantiomeric excess."
  },
  {
    id: "inter-mirtazapine-1",
    name: "1-(3-Hydroxymethylpyridyl-2)-2-phenyl-4-methylpiperazine",
    category: "intermediate",
    cas: "61337-89-1",
    therapy: "Anti depressant",
    targetApi: "Mirtazapine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Commercial Multiton Scale",
    details: "Key pen-ultimate intermediate in the synthesis of Mirtazapine. High assay purity >99.0%."
  },
  {
    id: "inter-mirtazapine-2",
    name: "1-(3-Carboxypyridyl-2)-2-phenyl-4-methylpiperazine",
    category: "intermediate",
    cas: "61338-13-4",
    therapy: "Anti depressant",
    targetApi: "Mirtazapine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Commercial Multiton Scale",
    details: "Advanced synthetic intermediate for Mirtazapine offering consistent crystalline stability and clean impurity profile."
  },
  {
    id: "inter-mirtazapine-3",
    name: "N-methyl-3-phenylpiperazine",
    category: "intermediate",
    cas: "5271-27-2",
    therapy: "Anti depressant",
    targetApi: "Mirtazapine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Commercial Multiton Scale",
    details: "Fundamental starting core piperazine scaffold for central nervous system therapies."
  },
  {
    id: "inter-linagliptin-1",
    name: "(R)-3-(Boc-amino)piperidine",
    category: "intermediate",
    cas: "309956-78-3",
    therapy: "Anti diabetic",
    targetApi: "Linagliptin",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Chiral Specification >99.5%",
    details: "Key chiral amine intermediate utilized in DPP-4 inhibitor Linagliptin synthesis."
  },
  {
    id: "inter-dulox-3",
    name: "(S)-3-(Methylamino)-1-(2-thienyl)-1-propanol",
    category: "intermediate",
    cas: "116539-55-0",
    therapy: "Anti depressant",
    targetApi: "Duloxetine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Biocatalytic Pathway Available",
    details: "Advanced thiophene chiral building block for Duloxetine HCl."
  },
  {
    id: "inter-dulox-2",
    name: "(S)-N,N-dimethyl-3-hydroxy-3-(2-thienyl)propanamine",
    category: "intermediate",
    cas: "132335-44-5",
    therapy: "Anti depressant",
    targetApi: "Duloxetine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Chiral Resolution Grade",
    details: "Key chiral amino alcohol intermediate for Duloxetine."
  },
  {
    id: "inter-dulox-1",
    name: "1-Fluoronaphthalene",
    category: "intermediate",
    cas: "321-38-0",
    therapy: "Anti depressant",
    targetApi: "Duloxetine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Distillation Purity >99.2%",
    details: "Aromatic fluorinated coupling reagent for antidepressant synthesis."
  },
  {
    id: "inter-labetalol-1",
    name: "5-Bromoacetyl salicylamide",
    category: "intermediate",
    cas: "73866-23-6",
    therapy: "Cardiovascular",
    targetApi: "Labetalol",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "High Volume Production",
    details: "Core haloacetyl building block for Labetalol synthesis with low halogenated byproduct limits."
  },
  {
    id: "inter-dextro-1",
    name: "3-Methoxymorphinan",
    category: "intermediate",
    cas: "1531-25-5",
    therapy: "Anti tussives",
    targetApi: "Dextromethorphan",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Controlled Synthesis Protocol",
    details: "Tetracyclic core skeleton intermediate for Dextromethorphan synthesis."
  },
  {
    id: "inter-moxifloxacin-1",
    name: "(S,S)-2,8-Diazabicyclo Nonane",
    category: "intermediate",
    cas: "151213-40-0",
    therapy: "Anti bacterial",
    targetApi: "Moxifloxacin",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Bicyclic Bridge Architecture",
    details: "Chiral bicyclic amine side chain essential for the broad antibacterial spectrum of Moxifloxacin."
  },
  {
    id: "inter-entacapone-1",
    name: "3,4-Dihydroxy-5-nitrobenzaldehyde",
    category: "intermediate",
    cas: "116313-85-0",
    therapy: "Parkinsons",
    targetApi: "Entacapone",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "cGMP Intermediates",
    details: "Key catechol aldehyde intermediate for Entacapone COMT inhibitor synthesis."
  },
  {
    id: "inter-entacapone-2",
    name: "N,N-Diethyl-2-cyanoacetoacemide",
    category: "intermediate",
    cas: "26391-06-0",
    therapy: "Parkinsons",
    targetApi: "Entacapone",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "High Yield Synthesis",
    details: "Cyanoacetamide coupling agent condensation partner for Parkinson's intermediate synthesis."
  },
  {
    id: "inter-lopinavir-1",
    name: "2,6-Dimethyl phenoxy acetyl chloride",
    category: "intermediate",
    cas: "20143-48-0",
    therapy: "Anti viral (HIV)",
    targetApi: "Lopinavir",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Acyl Chloride Acylation Grade",
    details: "Protease inhibitor synthetic precursor with strict moisture control specs."
  },
  {
    id: "inter-dorzolamide-1",
    name: "(4S)-4-Acetamide-5,6-Dihydro-6-Methyl-2-Sulfonamide-Thio[2,3-B]",
    category: "intermediate",
    cas: "147200-03-1",
    therapy: "Glaucoma",
    targetApi: "Dorzolamide",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Chiral Thienothiopyran Ring",
    details: "Advanced sulfonamide intermediate with defined stereochemistry for ocular APIs."
  },
  {
    id: "inter-dorzolamide-2",
    name: "N-[(4S,6S)-6-Methyl-7,7-dioxo-5,6-dihydro-4H-thieno[2,3-b] thio",
    category: "intermediate",
    cas: "147086-83-7",
    therapy: "Glaucoma",
    targetApi: "Dorzolamide",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Stereoselective Quality",
    details: "Sulfone thienothiophene intermediate for carbonic anhydrase inhibitors."
  },
  {
    id: "inter-dorzolamide-3",
    name: "(4R,6S)-5,6-dihydro-4-hydroxy-6-methylthieno[2,3-b]thiopyran-7,7",
    category: "intermediate",
    cas: "147128-77-6",
    therapy: "Glaucoma",
    targetApi: "Dorzolamide",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Chiral Stereoselective Intermediate",
    details: "Key chiral hydroxythienothiopyran precursor for Dorzolamide ocular formulation synthesis."
  },
  {
    id: "inter-glimepiride-1",
    name: "Trans-4-Methycyclohexyl Isocyanate",
    category: "intermediate",
    cas: "32175-00-1",
    therapy: "Anti diabetic",
    targetApi: "Glimepiride",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Stereoisomeric Pure Trans",
    details: "Pure trans-isomer isocyanate coupling component for Glimepiride."
  },
  {
    id: "inter-glimepiride-2",
    name: "2-Phenylethyl Isocyanate",
    category: "intermediate",
    cas: "1943-82-4",
    therapy: "Anti diabetic",
    targetApi: "Glimepiride",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "High Reactivity Grade",
    details: "Isocyanate precursor used in sulfonylurea synthesis."
  },
  {
    id: "inter-bilastine-1",
    name: "Methyl-2-(4-(2-chloroethyl)phenyl)-2-methylpropanoate",
    category: "intermediate",
    cas: "1181267-33-3",
    therapy: "Anti histamine",
    targetApi: "Bilastine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Commercial Multiton Scale",
    details: "Chloride alkylating arm for Bilastine antihistamine synthesis."
  },
  {
    id: "inter-bilastine-2",
    name: "1-(2-Ethoxyethyl)-2-(piperidin-4-yl)-1H-benzo[d]imidazole HCl",
    category: "intermediate",
    cas: "1841081-72-8",
    therapy: "Anti histamine",
    targetApi: "Bilastine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "High Purity Salt Form",
    details: "Benzimidazole piperidine core for Bilastine coupling."
  },
  {
    id: "inter-bilastine-3",
    name: "Bilastine methyl ester",
    category: "intermediate",
    cas: "1181267-38-8",
    therapy: "Anti histamine",
    targetApi: "Bilastine",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Penultimate Intermediate",
    details: "Direct precursor to Bilastine prior to final hydrolysis."
  },
  {
    id: "inter-linagliptin-2",
    name: "(R)-3-aminopiperidine dihydrochloride",
    category: "intermediate",
    cas: "334618-23-4",
    therapy: "Anti diabetic",
    targetApi: "Linagliptin",
    status: "Commercial Intermediate",
    statusClass: "status-intermediate",
    compliance: "Strict Optical Purity",
    details: "De-protected chiral piperidine salt for DPP-4 antidiabetic molecule synthesis."
  },

  // Speciality Chemicals
  {
    id: "n-butyl-lithium",
    name: "n-Butyl Lithium",
    category: "speciality",
    cas: "109-72-8",
    therapy: "Speciality Chemical",
    targetApi: "Organometallic Synthesis Reagent",
    status: "Speciality Reagent",
    statusClass: "status-commercial",
    compliance: "Strict Inert Packaging / Quality Assured",
    details: "Strong organolithium base and initiator for stereospecific polymerizations and complex pharmaceutical organometallic reactions."
  }
];

// Facilities Detailed Information
const FACILITIES_DATA = {
  unit1: {
    title: "Unit 1 - Kolhar Industrial Area, Bidar",
    badge: "Adeep Life Sciences Private Limited",
    status: "● Operational Commercial Flagship",
    location: "Plot no 131/A-1, 130 C&D, Kolhar Industrial Area, Bidar – 585401, Karnataka, India",
    desc: "Our primary large-scale commercial API and intermediate synthesis facility. Features high-capacity glass-lined and stainless steel reaction trains, computerized SCADA process controls, cleanroom powder finishing suites, and zero liquid discharge (ZLD) effluent facilities.",
    focus: "Commercial APIs (Mirtazapine, Brivaracetam, Duloxetine) & Multiton Intermediates",
    certs: "WHO-GMP, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018",
    safety: "Zero Liquid Discharge (ZLD), automated gas scrubbers & solvent recovery",
    tag: "WHO-GMP Certified Facility",
    img: "assets/plant_facility.jpg"
  },
  unit2: {
    title: "Unit 2 - YSRJ Mega Industrial Hub, Kadapa",
    badge: "Adeep Life Sciences Private Limited",
    status: "● Mega Expansion (Under Construction)",
    location: "APIIC Plot no 27A, YSRJ Mega Industrial Hub, Kopparthi, Kadapa, YSR Dist., Andhra Pradesh, India",
    desc: "A massive state-of-the-art expansion engineered specifically for high-volume biocatalysis and continuous flow chemistry. Designed from ground up to comply with global cGMP and EU-GMP regulatory benchmarks, accelerating India's national self-reliance in pharmaceuticals under the PLI scheme.",
    focus: "Mega-scale green biocatalytic API blocks & import-substitution molecules",
    certs: "Architected for cGMP, EU-GMP, WHO-GMP & ISO Integrated Systems",
    safety: "Green engineering, solar energy integration, advanced containment suites",
    tag: "Next-Gen Mega Hub",
    img: "assets/plant_facility.jpg"
  },
  unit3: {
    title: "Unit 3 - Adeep Laboratories Private Limited",
    badge: "Adeep Laboratories Private Limited",
    status: "● Operating Subsidiary Unit",
    location: "APIIC Plot no 162, YSRJ Mega Industrial Hub, Kopparthi, Kadapa, YSR Dist., Andhra Pradesh, India",
    desc: "Dedicated to the synthesis of specialized, high-purity chemical intermediates and custom contract development. Equipped with flexible production modules that enable seamless pilot-to-commercial scale-up of novel chemical pathways.",
    focus: "Complex heterocyclic intermediates, halogenations, chiral building blocks",
    certs: "cGMP Compliant, ISO 9001:2015, ISO 14001:2015",
    safety: "Advanced automated safety valves, toxic gas monitoring, full thermal abatement",
    tag: "High-Spec Intermediates Hub",
    img: "assets/plant_facility.jpg"
  },
  unit4: {
    title: "ADEEP Technology Center - Hyderabad",
    badge: "ADEEP Technology Center (Central R&D Hub)",
    status: "● Operational Central R&D Facility",
    location: "Hyderabad Industrial Pharma Corridor, Telangana, India",
    desc: "ADEEP's central research and technology powerhouse driving innovative route scouting, process chemistry, biocatalytic pathways, and ICH-compliant analytical method development supporting all manufacturing units.",
    focus: "Process chemistry, route design, impurity profiling, and analytical research",
    certs: "GLP Protocols, Schedule M, cGMP Quality Standards",
    safety: "World-class audit track record with zero critical observations",
    tag: "Central R&D & Innovation Hub",
    img: "assets/hero_lab.jpg"
  },
  unitRnd: {
    title: "ADEEP Technology Center - Hyderabad",
    badge: "ADEEP Technology Center (Central R&D Hub)",
    status: "● Operational Central R&D Facility",
    location: "Hyderabad Industrial Pharma Corridor, Telangana, India",
    desc: "ADEEP's central research and technology powerhouse driving innovative route scouting, process chemistry, biocatalytic pathways, and ICH-compliant analytical method development supporting all manufacturing units.",
    focus: "Process chemistry, route design, impurity profiling, and analytical research",
    certs: "GLP Protocols, Schedule M, cGMP Quality Standards",
    safety: "World-class audit track record with zero critical observations",
    tag: "Central R&D & Innovation Hub",
    img: "assets/hero_lab.jpg"
  }
};

// State Management
let currentFilterCategory = "all";
let currentTherapyFilter = "";
let currentSearchQuery = "";
let inquiryBasket = [];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  try { initNavigation(); } catch (e) { console.error("initNavigation error:", e); }
  try { initSplashScreen(); } catch (e) { console.error("initSplashScreen error:", e); }
  try { initHeroSlider(); } catch (e) { console.error("initHeroSlider error:", e); }
  try { initProductCounts(); } catch (e) { console.error("initProductCounts error:", e); }
  try { renderProductsTable(); } catch (e) { console.error("renderProductsTable error:", e); }
  try { initSearchAndFilters(); } catch (e) { console.error("initSearchAndFilters error:", e); }
  try { initCartDrawer(); } catch (e) { console.error("initCartDrawer error:", e); }
  try { initRfqForm(); } catch (e) { console.error("initRfqForm error:", e); }
  try { initFacilityTabs(); } catch (e) { console.error("initFacilityTabs error:", e); }
  try { initCounters(); } catch (e) { console.error("initCounters error:", e); }
  try { initProductDetailModal(); } catch (e) { console.error("initProductDetailModal error:", e); }
});

// Update Category Counter Badges
function initProductCounts() {
  const countAllEl = document.getElementById("countAll");
  if (!countAllEl) return;

  const countAll = PRODUCTS_DATA.length;
  const countComm = PRODUCTS_DATA.filter(p => p.category === "commercial-api").length;
  const countPipe = PRODUCTS_DATA.filter(p => p.category === "pipeline-api").length;
  const countInter = PRODUCTS_DATA.filter(p => p.category === "intermediate").length;
  const countSpec = PRODUCTS_DATA.filter(p => p.category === "speciality").length;

  countAllEl.textContent = countAll;
  if (document.getElementById("countComm")) document.getElementById("countComm").textContent = countComm;
  if (document.getElementById("countPipe")) document.getElementById("countPipe").textContent = countPipe;
  if (document.getElementById("countInter")) document.getElementById("countInter").textContent = countInter;
  if (document.getElementById("countSpec")) document.getElementById("countSpec").textContent = countSpec;
}

// Render Products Table
function renderProductsTable() {
  const tbody = document.getElementById("productTableBody");
  if (!tbody) return;
  const emptyState = document.getElementById("emptyState");

  const filtered = PRODUCTS_DATA.filter(item => {
    // Category match
    const catMatch = (currentFilterCategory === "all") || 
      (item.category === currentFilterCategory) ||
      (currentFilterCategory === "custom-synthesis" && (item.category === "speciality" || (item.details && item.details.toLowerCase().includes("synthesis"))));
    
    // Therapy match
    const therapyMatch = !currentTherapyFilter || 
      (item.therapy && item.therapy.toLowerCase().includes(currentTherapyFilter.toLowerCase()));

    // Search query match
    let searchMatch = true;
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase().trim();
      const inName = item.name.toLowerCase().includes(q);
      const inCas = item.cas.toLowerCase().includes(q);
      const inTherapy = item.therapy ? item.therapy.toLowerCase().includes(q) : false;
      const inTarget = item.targetApi ? item.targetApi.toLowerCase().includes(q) : false;
      searchMatch = inName || inCas || inTherapy || inTarget;
    }

    return catMatch && therapyMatch && searchMatch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  let html = "";

  filtered.forEach(item => {
    const isAdded = inquiryBasket.some(b => b.id === item.id);
    const catDisplayName = {
      "commercial-api": "Commercial API",
      "pipeline-api": "R&D Pipeline API",
      "intermediate": "Intermediate",
      "speciality": "Speciality Chemical"
    }[item.category] || "Pharmaceutical";

    html += `
      <tr>
        <td class="product-name-cell">
          <strong>${item.name}</strong>
          <small>${catDisplayName}</small>
        </td>
        <td>
          <span class="tag">${catDisplayName}</span>
        </td>
        <td>
          <span class="cas-badge">${item.cas}</span>
        </td>
        <td>
          <div><strong>${item.therapy}</strong></div>
          <small style="color:#64748b;">Target: ${item.targetApi}</small>
        </td>
        <td>
          <span class="status-pill ${item.statusClass}">${item.status}</span>
        </td>
        <td class="text-right">
          <div class="table-action-group">
            <button class="table-btn table-btn-inquire" onclick="toggleInquiryItem('${item.id}')">
              ${isAdded ? "✓ Added" : "+ Inquire"}
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// Search and Filter Handling
function initSearchAndFilters() {
  const searchInput = document.getElementById("productSearchInput");
  const catTabs = document.querySelectorAll(".cat-tab");
  const chips = document.querySelectorAll("#therapyChips .chip");
  const resetBtn = document.getElementById("resetFiltersBtn");
  const clearBtn = document.getElementById("clearSearchBtn");

  window.applyProductCategoryFilter = function(category) {
    currentFilterCategory = category || "all";
    catTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === currentFilterCategory));
    renderProductsTable();
  };

  // Parse URL search params (e.g. ?category=commercial-api)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("category");
  if (catParam) {
    currentFilterCategory = catParam;
    catTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === catParam));
  }
  const therapyParam = urlParams.get("therapy");
  if (therapyParam) {
    currentTherapyFilter = therapyParam;
    chips.forEach(c => c.classList.toggle("active", c.getAttribute("data-filter") && c.getAttribute("data-filter").toLowerCase() === therapyParam.toLowerCase()));
  }

  if (catParam || therapyParam) {
    renderProductsTable();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = currentSearchQuery ? "block" : "none";
      renderProductsTable();
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentSearchQuery = "";
        clearBtn.style.display = "none";
        searchInput.focus();
        renderProductsTable();
      });
    }
  }

  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilterCategory = tab.getAttribute("data-category");
      renderProductsTable();
    });
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentTherapyFilter = chip.getAttribute("data-filter");
      renderProductsTable();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      currentFilterCategory = "all";
      currentTherapyFilter = "";
      if (clearBtn) clearBtn.style.display = "none";

      catTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === "all"));
      chips.forEach(c => c.classList.toggle("active", c.getAttribute("data-filter") === ""));
      renderProductsTable();
    });
  }

  // Quick inquiry buttons from Flagship cards
  document.querySelectorAll(".add-to-inquiry-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-id");
      const matched = PRODUCTS_DATA.find(p => p.name.toUpperCase().includes(pId) || p.id.toUpperCase().includes(pId));
      if (matched) {
        addToCart(matched);
        openCart();
      } else {
        addToCart({ id: pId.toLowerCase(), name: pId, cas: "Commercial Grade", category: "commercial-api" });
        openCart();
      }
    });
  });

  // Download Product List Button
  const downloadBtn = document.getElementById("downloadBrochureBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      exportProductCatalog();
    });
  }
}

// Generate Printable / Downloadable Product List
function exportProductCatalog() {
  const printWindow = window.open("", "_blank");
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  let catalogHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>ADEEP GROUP - Official Product Catalog (APIs & Intermediates)</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #1e293b; }
        .header { border-bottom: 3px solid #008763; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 26px; font-weight: 800; color: #008763; }
        .sublogo { font-size: 11px; letter-spacing: 2px; color: #e88b12; }
        .doc-title { text-align: right; }
        h1 { margin: 0; font-size: 22px; color: #0f172a; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
        th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }
        th { background: #f1f5f9; color: #334155; }
        .tag { font-family: monospace; background: #f8fafc; padding: 2px 6px; border-radius: 4px; font-weight: 600; }
        .footer { margin-top: 40px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo">ADEEP GROUP</div>
          <div class="sublogo">EXCELLENCY IN CHEMISTRY</div>
        </div>
        <div class="doc-title">
          <h1>Product Basket (APIs &amp; Intermediates)</h1>
          <small>Document Date: ${dateStr} • WHO-GMP &amp; cGMP Compliant</small>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Molecule / Intermediate Name</th>
            <th>Category</th>
            <th>CAS Number</th>
            <th>Therapeutic Area / Target API</th>
            <th>Regulatory Status</th>
          </tr>
        </thead>
        <tbody>
  `;

  PRODUCTS_DATA.forEach((p, idx) => {
    catalogHtml += `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${p.name}</strong></td>
        <td>${p.category.toUpperCase()}</td>
        <td><span class="tag">${p.cas}</span></td>
        <td>${p.therapy} ${p.targetApi ? `(${p.targetApi})` : ""}</td>
        <td>${p.status}</td>
      </tr>
    `;
  });

  catalogHtml += `
        </tbody>
      </table>
      <div class="footer">
        ADEEP GROUP | #1501, Asian Sun City, Kondapur, Hyderabad - 500084, India | Phone: +91 9515114455 | Email: srujanreddyn@adeepgroup.com
      </div>
      <script>window.print();</script>
    </body>
    </html>
  `;

  printWindow.document.write(catalogHtml);
  printWindow.document.close();
}

// Global Filter Helper for Footer Links
window.filterByTherapy = function(therapyName) {
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) {
    searchInput.value = "";
    currentSearchQuery = "";
  }
  const chips = document.querySelectorAll("#therapyChips .chip");
  chips.forEach(c => {
    c.classList.toggle("active", c.getAttribute("data-filter") === therapyName);
  });
  currentTherapyFilter = therapyName;
  currentFilterCategory = "all";
  renderProductsTable();
};

// Inquiry Cart & Slide-Over Drawer
function initCartDrawer() {
  const cartBtn = document.getElementById("cartOpenBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const proceedBtn = document.getElementById("proceedToRfqBtn");

  if (!cartBtn || !cartDrawer) return;

  cartBtn.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      inquiryBasket = [];
      updateCartUI();
      renderProductsTable();
      showToast("Inquiry basket cleared.");
    });
  }

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      closeCart();
      const rfqSec = document.getElementById("inquiry");
      if (rfqSec) {
        rfqSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

window.closeCart = function() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
};

window.toggleInquiryItem = function(productId) {
  const index = inquiryBasket.findIndex(item => item.id === productId);
  if (index > -1) {
    inquiryBasket.splice(index, 1);
    showToast("Removed from inquiry basket.");
  } else {
    const item = PRODUCTS_DATA.find(p => p.id === productId);
    if (item) {
      inquiryBasket.push(item);
      showToast(`Added ${item.name} to inquiry basket!`);
    }
  }
  updateCartUI();
  renderProductsTable();
};

function addToCart(item) {
  if (!inquiryBasket.some(b => b.id === item.id)) {
    inquiryBasket.push(item);
    showToast(`Added ${item.name} to inquiry basket!`);
    updateCartUI();
    renderProductsTable();
  }
}

function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const drawerCount = document.getElementById("drawerCartCount");
  const cartBody = document.getElementById("cartItemsList");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartFooter = document.getElementById("cartFooter");
  const bpTags = document.getElementById("bpTags");

  const total = inquiryBasket.length;
  cartCount.textContent = total;
  drawerCount.textContent = `${total} Molecule${total === 1 ? "" : "s"}`;

  if (total === 0) {
    cartEmpty.style.display = "block";
    cartBody.innerHTML = "";
    cartFooter.style.display = "none";
    if (bpTags) {
      bpTags.innerHTML = `<span class="bp-placeholder">No molecules selected yet. Select from the product table or enter below.</span>`;
    }
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "flex";

  // Build items list in drawer
  let itemsHtml = "";
  let formTagsHtml = "";

  inquiryBasket.forEach(item => {
    itemsHtml += `
      <div class="cart-item-row">
        <div class="ci-info">
          <strong>${item.name}</strong>
          <small>CAS: ${item.cas} • ${item.therapy}</small>
        </div>
        <button class="ci-remove" onclick="toggleInquiryItem('${item.id}')" title="Remove">✕</button>
      </div>
    `;

    formTagsHtml += `
      <span class="bp-tag">
        ${item.name}
        <span class="bp-remove" onclick="toggleInquiryItem('${item.id}')">✕</span>
      </span>
    `;
  });

  cartBody.innerHTML = itemsHtml;
  if (bpTags) {
    bpTags.innerHTML = formTagsHtml;
  }
}

// Facility Explorer Tabs
function initFacilityTabs() {
  const tabs = document.querySelectorAll(".fac-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const facKey = tab.getAttribute("data-fac");
      switchFacility(facKey);
    });
  });

  // Copy address buttons
  document.querySelectorAll(".copy-address-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const addr = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(addr).then(() => {
        showToast("Address copied to clipboard!");
      });
    });
  });
}

window.switchFacility = function(key) {
  const data = FACILITIES_DATA[key];
  if (!data) return;

  const tabs = document.querySelectorAll(".fac-tab");
  tabs.forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-fac") === key);
  });

  document.getElementById("facTitle").textContent = data.title;
  document.getElementById("facBadge").textContent = data.badge;
  document.getElementById("facStatus").textContent = data.status;
  document.getElementById("facLocation").innerHTML = `
    <svg viewBox="0 0 24 24" class="icon-sm"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    ${data.location}
  `;
  document.getElementById("facDesc").textContent = data.desc;
  document.getElementById("facTag").textContent = data.tag;
  document.getElementById("facImg").src = data.img;

  const specsContainer = document.getElementById("facSpecs");
  specsContainer.innerHTML = `
    <div class="spec-row">
      <span class="spec-key">Primary Focus:</span>
      <span class="spec-val">${data.focus}</span>
    </div>
    <div class="spec-row">
      <span class="spec-key">Certifications:</span>
      <span class="spec-val">${data.certs}</span>
    </div>
    <div class="spec-row">
      <span class="spec-key">Safety & ESG:</span>
      <span class="spec-val">${data.safety}</span>
    </div>
  `;

  const copyBtn = document.querySelector(".copy-address-btn");
  if (copyBtn) {
    copyBtn.setAttribute("data-copy", data.location);
  }

  // Smooth scroll to display if clicked from summary
  const display = document.getElementById("facilityDisplay");
  if (display) {
    display.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

// Molecule Detail Modal
function initProductDetailModal() {
  const overlay = document.getElementById("productModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");
  const closeAction = document.getElementById("modalCloseAction");

  if (!overlay) return;

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeAction) closeAction.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

window.openProductModal = function(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.textContent = p.name;
  const catEl = document.getElementById("modalCat");
  if (catEl) catEl.textContent = p.category.replace("-", " ").toUpperCase();
  const casEl = document.getElementById("modalCas");
  if (casEl) casEl.textContent = p.cas;
  const indEl = document.getElementById("modalIndication");
  if (indEl) indEl.textContent = p.therapy;
  const targetEl = document.getElementById("modalTarget");
  if (targetEl) targetEl.textContent = p.targetApi || "Direct Finished Molecule";
  const compEl = document.getElementById("modalCompliance");
  if (compEl) compEl.textContent = p.compliance || "WHO-GMP Compliant & cGMP Verified";



  const modalInquireBtn = document.getElementById("modalInquireBtn");
  if (modalInquireBtn) {
    const isAdded = inquiryBasket.some(b => b.id === p.id);
    modalInquireBtn.textContent = isAdded ? "Remove from Basket" : "Add to Inquiry Basket";

    modalInquireBtn.onclick = () => {
      toggleInquiryItem(p.id);
      closeModal();
    };
  }

  const overlay = document.getElementById("productModalOverlay");
  if (overlay) overlay.classList.add("active");
};

function closeModal() {
  const overlay = document.getElementById("productModalOverlay");
  if (overlay) overlay.classList.remove("active");
}

// RFQ Form Submission & Validation
function initRfqForm() {
  const form = document.getElementById("rfqForm");
  if (!form) return;
  const successAlert = document.getElementById("formSuccessAlert");
  const resetBtn = document.getElementById("resetRfqBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rfqName") ? document.getElementById("rfqName").value : "";
    const company = document.getElementById("rfqCompany") ? document.getElementById("rfqCompany").value : "";
    const email = document.getElementById("rfqEmail") ? document.getElementById("rfqEmail").value : "";
    const phone = document.getElementById("rfqPhone") ? document.getElementById("rfqPhone").value : "";
    const requirement = document.getElementById("rfqRequirement") ? document.getElementById("rfqRequirement").value : "";
    const extraMolecule = document.getElementById("rfqMolecule") ? document.getElementById("rfqMolecule").value : "";
    const message = document.getElementById("rfqMessage") ? document.getElementById("rfqMessage").value : "";

    const basketMolecules = inquiryBasket.map(m => m.name).join(", ");
    const finalMolecules = [basketMolecules, extraMolecule].filter(Boolean).join(" | ") || "General Commercial Inquiries";

    console.log("Submitting RFQ:", {
      name, company, email, phone, requirement, molecules: finalMolecules, message
    });

    form.style.display = "none";
    if (successAlert) successAlert.style.display = "block";
    showToast("Quotation request dispatched successfully!");
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      form.style.display = "block";
      if (successAlert) successAlert.style.display = "none";
      inquiryBasket = [];
      updateCartUI();
      renderProductsTable();
    });
  }
}

// Animated Statistics Counter on Scroll
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  let hasRun = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 1500;
      const step = Math.ceil(target / (duration / 30));
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 30);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
      hasRun = true;
      runCounters();
    }
  }, { threshold: 0.2 });

  const metricsStrip = document.querySelector(".hero-metrics-strip");
  if (metricsStrip) {
    observer.observe(metricsStrip);
  }
}

// Mobile Navigation Toggle & Smooth Scrolling & Dropdown Interaction
function initNavigation() {
  const toggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      navMenu.classList.toggle("active");
    });
  }

  // Desktop and mobile dropdown interaction
  document.querySelectorAll(".nav-item-dropdown").forEach(dropdown => {
    const toggleBtn = dropdown.querySelector(".nav-dropdown-toggle");
    const menu = dropdown.querySelector(".nav-dropdown-menu");
    let leaveTimeout = null;
    
    // Desktop hover with seamless bridge & 400ms grace debounce
    const openDropdown = () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
        leaveTimeout = null;
      }
      dropdown.classList.remove("closed");
      if (window.innerWidth > 1100) {
        // Close other dropdowns
        document.querySelectorAll(".nav-item-dropdown").forEach(other => {
          if (other !== dropdown) {
            other.classList.remove("open");
          }
        });
        dropdown.classList.add("open");
      }
    };

    const closeDropdown = () => {
      if (window.innerWidth > 1100) {
        if (leaveTimeout) clearTimeout(leaveTimeout);
        leaveTimeout = setTimeout(() => {
          dropdown.classList.remove("open");
          dropdown.classList.remove("closed");
        }, 400); // 400ms grace period prevents closing when moving cursor down
      }
    };

    dropdown.addEventListener("mouseenter", openDropdown);
    dropdown.addEventListener("mouseleave", closeDropdown);

    if (menu) {
      menu.addEventListener("mouseenter", openDropdown);
      menu.addEventListener("mouseleave", closeDropdown);
    }

    // Touch / click toggle for mobile
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 1100) {
          e.preventDefault();
          dropdown.classList.toggle("open");
        }
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item-dropdown")) {
      document.querySelectorAll(".nav-item-dropdown").forEach(d => {
        d.classList.remove("open");
        d.classList.remove("closed");
      });
    }
  });

  // Universal click handler for navigation links and dropdown items
  document.querySelectorAll(".nav-link:not(.nav-dropdown-toggle), .dropdown-item").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname.replace(/\/$/, "");
      const currentFile = currentPath.split("/").pop() || "index.html";

      // Close mobile menu if open
      if (navMenu) {
        navMenu.classList.remove("active");
        navMenu.classList.remove("open");
      }

      // Immediately dismiss dropdown
      const parentDropdown = link.closest(".nav-item-dropdown");
      if (parentDropdown) {
        parentDropdown.classList.remove("open");
        parentDropdown.classList.add("closed");
        setTimeout(() => {
          parentDropdown.classList.remove("closed");
        }, 300);
      }

      // 1. Handle in-page category filter on products.html
      if (href.includes("products.html?category=") || href.startsWith("?category=")) {
        if (currentFile === "products.html") {
          e.preventDefault();
          const targetUrl = new URL(href, window.location.href);
          const cat = targetUrl.searchParams.get("category");
          if (cat && typeof window.applyProductCategoryFilter === "function") {
            window.applyProductCategoryFilter(cat);
            window.history.pushState(null, null, href);
            const tableEl = document.getElementById("productsTable") || document.getElementById("productSearchInput");
            if (tableEl) tableEl.scrollIntoView({ behavior: "smooth" });
          }
          return;
        }
      }

      // 2. Handle hash scrolling on the current page
      if (href.includes("#")) {
        const parts = href.split("#");
        const linkFile = parts[0].split("/").pop();
        const hash = "#" + parts[1];

        // Is this target on the current page?
        const isCurrentPage = (!linkFile || linkFile === "" || linkFile === currentFile || (currentFile === "" && linkFile === "index.html"));

        if (isCurrentPage) {
          e.preventDefault();
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, null, hash);
          } else {
            if (hash === "#overview" || hash === "#top") {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, null, hash);
            }
          }
          return;
        }
      } else {
        // If clicking link without hash that points to current page, scroll to top
        const linkFile = href.split("?")[0].split("/").pop();
        if (linkFile === currentFile && !href.includes("?")) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    });
  });

  // Handle URL hash on initial page load (with delay for layout & splash screen)
  function handleInitialHash() {
    if (window.location.hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    }
  }

  handleInitialHash();
  window.addEventListener("splashComplete", handleInitialHash);
}

// Toast Alert System
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span style="color:#34d399; font-weight:800;">✓</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Hero 5-Image Background Slider (Quest Pharma Style)
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  const heroSection = document.getElementById("hero");
  const splash = document.getElementById("siteSplashScreen");

  if (!slides.length) return;

  let currentIdx = 0;
  let autoPlayTimer = null;
  const slideDuration = 3000; // 3 seconds per slide

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIdx = index;
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      showSlide(currentIdx + 1);
    }, slideDuration);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Dots navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-slide"), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Next / Prev controls
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentIdx - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentIdx + 1);
      startAutoPlay();
    });
  }

  // Pause on hover, resume on mouse leave
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", () => {
      if (!splash || splash.classList.contains("splash-hidden") || splash.style.display === "none") {
        startAutoPlay();
      }
    });
  }

  // ALWAYS guarantee Slide 0 (first image) is shown first
  showSlide(0);
  window.showHeroSlide = showSlide;

  let hasStarted = false;
  function startSliderWhenVisible() {
    if (hasStarted) return;
    hasStarted = true;
    showSlide(0); // Explicitly ensure first image is displayed when site opens
    startAutoPlay();
  }

  window.startHeroSlider = startSliderWhenVisible;

  // Check if splash screen is actively visible
  const isSplashActive = splash && !splash.classList.contains("splash-hidden") && splash.style.display !== "none";

  if (isSplashActive) {
    // Wait until splash screen is finished before starting rotation timer
    window.addEventListener("splashComplete", startSliderWhenVisible, { once: true });

    const observer = new MutationObserver(() => {
      if (splash.classList.contains("splash-hidden") || splash.style.display === "none") {
        observer.disconnect();
        startSliderWhenVisible();
      }
    });
    observer.observe(splash, { attributes: true, attributeFilter: ["class", "style"] });

    setTimeout(() => {
      if (!hasStarted) startSliderWhenVisible();
    }, 5000);
  } else {
    // No splash screen active, start immediately from slide 0
    startSliderWhenVisible();
  }
}

// ── Premium Biocatalytic Splash Screen Loader ──────────────────────
function initSplashScreen() {
  if (window.__splashInitialized) return;
  window.__splashInitialized = true;

  const splash = document.getElementById("siteSplashScreen");
  if (!splash) return;

  const bar = document.getElementById("splashProgressBar");
  const pct = document.getElementById("splashPercentage");
  const text = document.getElementById("splashTelemetryText");
  const skipBtn = document.getElementById("splashSkipBtn");

  const telemetryMessages = [
    "Initializing green biocatalytic synthesis...",
    "Calibrating continuous multi-ton reactors...",
    "Loading commercial API frameworks...",
    "Verifying WHO-GMP & cGMP quality parameters...",
    "Ready for excellence • Welcome to ADEEP Group"
  ];

  let progress = 0;
  let msgIdx = 0;
  let finished = false;

  function finishSplash() {
    if (finished) return;
    finished = true;
    splash.classList.add("splash-hidden");
    window.dispatchEvent(new CustomEvent("splashComplete"));
    if (typeof window.startHeroSlider === "function") {
      window.startHeroSlider();
    }
    setTimeout(() => {
      splash.style.display = "none";
    }, 800);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", finishSplash);
  }

  // Telemetry cycle at readable speed (850ms)
  const textInterval = setInterval(() => {
    if (finished) { clearInterval(textInterval); return; }
    msgIdx = (msgIdx + 1) % telemetryMessages.length;
    if (text) {
      text.style.opacity = "0";
      text.style.transform = "translateY(4px)";
      setTimeout(() => {
        text.textContent = telemetryMessages[msgIdx];
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
      }, 180);
    }
  }, 850);

  // Smooth Progress animation (0% -> 100% in ~3.3 seconds)
  const progressInterval = setInterval(() => {
    if (finished) { clearInterval(progressInterval); return; }
    progress += 0.9;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      clearInterval(textInterval);
      if (bar) bar.style.width = "100%";
      if (pct) pct.textContent = "100%";
      if (text) text.textContent = "Ready for excellence • Welcome to ADEEP Group";
      setTimeout(finishSplash, 400);
    } else {
      if (bar) bar.style.width = `${progress}%`;
      if (pct) pct.textContent = `${Math.round(progress)}%`;
    }
  }, 30);
}

