// --- O-LEVEL CHEMISTRY STUDY BUDDY DATA ---
const chemistryData = {
  molten: {
    title: "1. Electrolysis of Molten Sodium Chloride",
    steps: {
      1: {
        heading: "Step 1: Ions Present in Solution",
        content: "<p><b>Ions present:</b> Sodium ions (Na⁺) and Chloride ions (Cl⁻).</p><p>[Placeholder: Note that no water molecules are present because it is in a molten liquid state.]</p>",
        caption: "Graphics: Both Na⁺ and Cl⁻ ions move freely in liquid state.",
        animationClass: ""
      },
      2: {
        heading: "Step 2: Reaction at Anode (+)",
        content: "<p><b>Anode reaction:</b> Chloride ions migrate to the anode to lose electrons (oxidation).</p><p><b>Half-equation:</b> 2Cl⁻ → Cl₂ + 2e⁻</p>",
        caption: "Graphics: Negative Cl⁻ ions moving towards the positive Anode (+).",
        animationClass: "animate-anode"
      },
      3: {
        heading: "Step 3: Reaction at Cathode (-)",
        content: "<p><b>Cathode reaction:</b> Sodium ions migrate to the cathode to gain electrons (reduction).</p><p><b>Half-equation:</b> Na⁺ + e⁻ → Na</p>",
        caption: "Graphics: Positive Na⁺ ions moving towards the negative Cathode (-).",
        animationClass: "animate-cathode"
      },
      4: {
        heading: "Step 4: Overall Equation & Observations",
        content: "<p><b>Overall Equation:</b> 2NaCl(l) → 2Na(l) + Cl₂(g)</p><p><b>Observations:</b> Pale green gas produced at Anode; silvery liquid metal formed at Cathode.</p>",
        caption: "Graphics: Gas bubbles evolving at Anode & metal deposit at Cathode.",
        animationClass: "animate-both"
      }
    }
  },
  dilute: {
    title: "2. Electrolysis of Dilute Aqueous Sodium Chloride",
    steps: {
      1: {
        heading: "Step 1: Ions Present in Solution",
        content: "<p><b>Ions present:</b> Na⁺, Cl⁻, H⁺, OH⁻ (from water ionization).</p><p>[Placeholder: Explain four ions present in dilute aqueous state.]</p>",
        caption: "Graphics: Mixture of aqueous ions floating in electrolyte.",
        animationClass: ""
      },
      2: {
        heading: "Step 2: Reaction at Anode (+)",
        content: "<p><b>Anode reaction:</b> OH⁻ ions are selectively discharged over Cl⁻ ions because OH⁻ is lower in the reactivity series.</p><p><b>Half-equation:</b> 4OH⁻ → 2H₂O + O₂ + 4e⁻</p>",
        caption: "Graphics: Hydroxide ions migrating to Anode.",
        animationClass: "animate-anode"
      },
      3: {
        heading: "Step 3: Reaction at Cathode (-)",
        content: "<p><b>Cathode reaction:</b> H⁺ ions are selectively discharged over Na⁺ ions.</p><p><b>Half-equation:</b> 2H⁺ + 2e⁻ → H₂</p>",
        caption: "Graphics: Hydrogen ions migrating to Cathode.",
        animationClass: "animate-cathode"
      },
      4: {
        heading: "Step 4: Overall Equation & Observations",
        content: "<p><b>Observations:</b> Colourless gas (O₂) at Anode; colourless gas (H₂) at Cathode.</p><p>[Placeholder: Explain why solution becomes alkaline/NaOH left behind.]</p>",
        caption: "Graphics: Gas bubbles formed on both electrodes.",
        animationClass: "animate-both"
      }
    }
  },
  concentrated: {
    title: "3. Electrolysis of Concentrated Aqueous Sodium Chloride",
    steps: {
      1: {
        heading: "Step 1: Ions Present in Solution",
        content: "<p><b>Ions present:</b> Na⁺, Cl⁻, H⁺, OH⁻ (high concentration of Cl⁻).</p><p>[Placeholder: Explain the concentration effect.]</p>",
        caption: "Graphics: High concentration of Cl⁻ ions illustrated.",
        animationClass: ""
      },
      2: {
        heading: "Step 2: Reaction at Anode (+)",
        content: "<p><b>Anode reaction:</b> Cl⁻ ions are selectively discharged due to high concentration.</p><p><b>Half-equation:</b> 2Cl⁻ → Cl₂ + 2e⁻</p>",
        caption: "Graphics: Concentrated Cl⁻ ions migrating to Anode.",
        animationClass: "animate-anode"
      },
      3: {
        heading: "Step 3: Reaction at Cathode (-)",
        content: "<p><b>Cathode reaction:</b> H⁺ ions are selectively discharged over Na⁺ ions.</p><p><b>Half-equation:</b> 2H⁺ + 2e⁻ → H₂</p>",
        caption: "Graphics: H⁺ ions migrating to Cathode.",
        animationClass: "animate-cathode"
      },
      4: {
        heading: "Step 4: Overall Equation & Observations",
        content: "<p><b>Observations:</b> Yellow-green gas (Cl₂) at Anode; Effervescence of H₂ gas at Cathode.</p>",
        caption: "Graphics: Chlorine gas at Anode & Hydrogen gas at Cathode.",
        animationClass: "animate-both"
      }
    }
  }
};

// --- APP STATE ---
let currentBlock = "molten";
let currentStep = 1;

// --- DOM ELEMENTS ---
const blockBtns = document.querySelectorAll(".block-btn");
const stepBtns = document.querySelectorAll(".step-btn");
const blockTitle = document.getElementById("block-title");
const stepHeading = document.getElementById("step-heading");
const stepContent = document.getElementById("step-content");
const animationCaption = document.getElementById("animation-caption");
const animationBox = document.getElementById("animation-box");

// --- RENDER FUNCTION ---
function updateView() {
  const activeData = chemistryData[currentBlock];
  const stepData = activeData.steps[currentStep];

  // Update Headings & Content
  blockTitle.textContent = activeData.title;
  stepHeading.textContent = stepData.heading;
  stepContent.innerHTML = stepData.content;
  animationCaption.textContent = stepData.caption;

  // Update Active Buttons UI
  blockBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.block === currentBlock);
  });

  stepBtns.forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.step) === currentStep);
  });

  // Apply Animation Class to Graphic Area
  animationBox.className = "animation-container " + stepData.animationClass;
}

// --- EVENT LISTENERS ---
blockBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentBlock = btn.dataset.block;
    currentStep = 1; // Reset to step 1 when changing block
    updateView();
  });
});

stepBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep = parseInt(btn.dataset.step);
    updateView();
  });
});

// Initial Load
updateView();