const unabridgedUnits = {
      u0: {
        title: "Orientation & Core Pillars of Care Delivery",
        content: `
          <h2>Welcome & Pedagogical Orientation</h2>
          <p>As a 4th-year nursing student preparing for graduation, your clinical leadership rotations, and licensure examinations (such as the <strong>Philippine Nursing Licensure Examination [PNLE]</strong> or the <strong>National Council Licensure Examination for Registered Nurses [NCLEX-RN]</strong>), <strong>Nursing Care Delivery Systems</strong> is one of the most vital modules in <strong>NCM 119 (Nursing Leadership and Management)</strong>.</p>
          
          <div class="highlight-box">
            <strong>Core Definition:</strong> A <strong>Nursing Care Delivery System (NCDS)</strong> or <strong>Patient Care Delivery System (PCDS)</strong> is the structural framework, organization, and clinical philosophy by which nursing care is coordinated, delegated, and delivered to patients. It determines <strong>who does what</strong>, <strong>who makes clinical decisions</strong>, and <strong>who is ultimately accountable</strong> for patient outcomes.
          </div>

          <h3>The Four Institutional Pillars of Care Delivery</h3>
          <p>Every hospital or clinical ward selects and designs its delivery model based on four core organizational pillars:</p>
          
          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🩺 Pillar 1: Patient Population & Acuity</div>
                <span class="badge badge-primary">Acuity Level</span>
              </div>
              <p class="flow-desc">How physiologically unstable are the patients? What are their dependency needs (e.g., critical septic shock in an Intensive Care Unit needing 1:1 care vs. stable ambulatory check-ups)?</p>
            </div>

            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">👥 Pillar 2: Staff Mix & Qualifications</div>
                <span class="badge badge-purple">Human Resources</span>
              </div>
              <p class="flow-desc">What proportion of the nursing workforce consists of Registered Nurses (RNs), Licensed Practical Nurses (LPNs/LVNs), and Unlicensed Assistive Personnel (UAPs)?</p>
            </div>

            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🏛️ Pillar 3: Economic & Architectural Resources</div>
                <span class="badge badge-warning">Environment</span>
              </div>
              <p class="flow-desc">What is the hospital operating budget, supply chain, and physical floor plan (e.g., sprawling 100-meter hallways vs. decentralized pod architectures)?</p>
            </div>

            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🎯 Pillar 4: Organizational Philosophy</div>
                <span class="badge badge-success">Leadership</span>
              </div>
              <p class="flow-desc">Does hospital executive leadership prioritize industrial cost-efficiency, rapid emergency throughput, professional nurse autonomy, or holistic continuity of care?</p>
            </div>
          </div>
        `
      },
      u1: {
        title: "Unit 1: Foundations of Nursing Process & Ida Jean Orlando",
        content: `
          <h2>Unit 1: Foundations of Nursing Process & Ida Jean Orlando</h2>
          
          <div class="highlight-box">
            <strong>Historical Milestone:</strong> In <strong>1958, Ida Jean Orlando</strong> formulated the <strong>Dynamic Nurse-Patient Relationship</strong> and Deliberative Nursing Process Theory, creating the scientific problem-solving framework that defines modern professional nursing.
          </div>

          <h3>1.1 Orlando's Deliberative Nursing Process Theory (1958)</h3>
          <p>Orlando observed that patients enter healthcare settings with feelings of helplessness and distress caused by unmet physical or psychological needs they cannot fulfill independently. When a patient exhibits distress, their verbal or non-verbal behavior triggers an internal reaction within the nurse.</p>
          
          <!-- VISUAL STEPPER COMPONENT REPLACING BROKEN ASCII -->
          <div class="flow-container">
            <div class="flow-step-card">
              <div class="flow-header">
                <div class="flow-title">👤 Stage 1: Patient Behavior (The Trigger)</div>
                <span class="badge badge-warning">Client Distress</span>
              </div>
              <p class="flow-desc">The patient exhibits verbal or non-verbal cues: groaning, grimacing, holding their abdomen, or restlessness.</p>
            </div>

            <div class="flow-connector">⬇️ Stimulates Internal Nursing Reaction</div>

            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🧠 Stage 2: Three-Part Internal Nursing Reaction</div>
                <span class="badge badge-primary">Internal Process</span>
              </div>
              <p class="flow-desc">Before taking action, the nurse experiences three sequential mental phases:</p>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>👁️ 1. Perception:</strong>
                  <div>Nurse visually observes abdominal guarding and hears soft moaning.</div>
                </div>
                <div class="flow-subcard">
                  <strong>💭 2. Thought:</strong>
                  <div>Nurse thinks: <em>"The patient may be in severe surgical pain."</em></div>
                </div>
                <div class="flow-subcard">
                  <strong>❤️ 3. Feeling:</strong>
                  <div>Nurse experiences empathy and professional urgency to relieve distress.</div>
                </div>
              </div>
            </div>

            <div class="flow-connector">⬇️ The Mandatory Validation Step</div>

            <div class="flow-step-card" style="border: 2px solid var(--accent-warning);">
              <div class="flow-header">
                <div class="flow-title">❓ Stage 3: The Deliberative Inquiry (Validation)</div>
                <span class="badge badge-warning">Non-Negotiable Rule</span>
              </div>
              <p class="flow-desc">
                The nurse <strong>MUST NOT act automatically</strong> (e.g., injecting an opioid without asking). Instead, the nurse openly validates perceptions with the client:<br>
                <strong style="color: var(--accent-primary); font-size: 1.05rem;">"Mr. Reyes, are you experiencing abdominal incision pain, or are you feeling nauseated from the anesthesia?"</strong>
              </p>
            </div>

            <div class="flow-connector">⬇️ Patient Confirms Need</div>

            <div class="flow-step-card success-state">
              <div class="flow-header">
                <div class="flow-title">✅ Stage 4: Accurate & Safe Clinical Outcome</div>
                <span class="badge badge-success">Goal Met</span>
              </div>
              <p class="flow-desc">
                <strong>Patient clarifies:</strong> <em>"I don't have pain, but I am violently nauseated!"</em><br>
                <strong>Accurate Action:</strong> The nurse administers the prescribed intravenous antiemetic (ondansetron). Giving an opioid without validating would have worsened the nausea and caused vomiting.
              </p>
            </div>
          </div>

          <p><strong>The Non-Negotiable Deliberative Rule:</strong> Orlando demonstrated that nurses must never assume what client behavior means. Automatic, unverified actions result in medical errors and increased distress.</p>

          <h3>1.2 The Five Cyclic Phases of the Nursing Process (ADPIE)</h3>
          <p>The Nursing Process is a continuous, cyclic scientific framework:</p>
          <ul>
            <li><strong>Assessment (A):</strong> Systematic, continuous collection of subjective and objective data. <em>Leadership Rule: Initial and complex nursing assessments can NEVER be delegated to assistive personnel.</em></li>
            <li><strong>Diagnosis (D):</strong> Clinical judgments regarding human responses to actual or potential health conditions, standardized via NANDA International (NANDA-I).</li>
            <li><strong>Planning (P):</strong> Setting measurable, time-oriented (SMART) client goals and prioritizing nursing care strategies.</li>
            <li><strong>Implementation (I):</strong> The execution of direct nursing interventions, medications, and appropriate task delegation.</li>
            <li><strong>Evaluation (E):</strong> Ongoing reassessment comparing the patient's actual status against expected SMART benchmarks.</li>
          </ul>

          <h3>1.3 The Tripartite Evidence-Based Practice (EBP) Framework</h3>
          <p>Modern nursing delivery systems synthesize three core components:</p>
          <ol>
            <li><strong>Best Available Scientific Clinical Research Evidence:</strong> Systematic reviews and clinical guidelines.</li>
            <li><strong>Individual Nurse's Clinical Expertise:</strong> Practical diagnostic acumen acquired over years of practice.</li>
            <li><strong>Patient Personal Values & Preferences:</strong> Unique cultural beliefs, religious practices, and personal goals.</li>
          </ol>
        `
      },
      u2: {
        title: "Unit 2: Patient Classification Systems (PCS) & Workload Balancing",
        content: `
          <h2>Unit 2: Patient Classification Systems (PCS) & Workload Balancing</h2>
          
          <div class="highlight-box">
            <strong>Definition:</strong> A <strong>Patient Classification System (PCS)</strong> is an objective, standardized management tool used to categorize patients according to their assessed care requirements and nursing dependency over a specific time period (usually a 24-hour shift cycle).
          </div>

          <h3>2.1 Why PCS Matters to Nursing Leadership</h3>
          <p>Bed count alone does <strong>not</strong> reflect nursing workload. Twenty post-operative cardiac bypass patients require radically more nursing hours than twenty stable ambulatory medical patients. A Patient Classification System provides the mathematical and clinical justification to match nurse staffing to true patient workload, preventing nurse burnout and ensuring patient safety.</p>

          <h3>2.2 Factor Evaluation vs. Prototype Evaluation Systems</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>Evaluation System</th>
                <th>Methodology</th>
                <th>Core Strengths</th>
                <th>Recognized Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Factor Evaluation System</strong></td>
                <td>Assigns discrete numerical point values or standard minutes to specific nursing care tasks (e.g., starting an Intravenous [IV] line = 15 pts; tracheostomy suctioning = 20 pts; oral medications = 5 pts). Total points correlate with acuity category.</td>
                <td>High objective precision; mathematical justification for shift-by-shift staffing.</td>
                <td>Easily counts physical, motor tasks but fails to capture holistic emotional support, family crisis counseling, and health teaching time.</td>
              </tr>
              <tr>
                <td><strong>Prototype Evaluation System</strong></td>
                <td>Classifies patients into broad descriptive categories based on disease severity, diagnosis, and general care needs (e.g., "Standard Post-Op Day 1 Patient").</td>
                <td>Fast, practical, and easy to complete during busy shift handoffs.</td>
                <td>Less granular; assumes all patients with the same diagnosis have identical recovery trajectories.</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 The Four Standard Acuity Categories</h3>
          <ul>
            <li><strong>Category I: Minimal Care / Self-Care (1–2 Nursing Hours/Day)</strong>
              <br>• <em>Profile:</em> Clinically stable, alert and oriented $\times 4$. Capable of performing independent Activities of Daily Living (ADLs). Admitted for observation, diagnostic testing, or scheduled minor elective discharge.
            </li>
            <li><strong>Category II: Moderate / Intermediate Care (3–5 Nursing Hours/Day)</strong>
              <br>• <em>Profile:</em> Partially dependent in ADLs (needs assistance with ambulation or hygiene). Requires vital signs monitoring every 4 hours, scheduled oral or intravenous medications, and routine wound dressings.
            </li>
            <li><strong>Category III: Maximum / Acute Care (6–9 Nursing Hours/Day)</strong>
              <br>• <em>Profile:</em> Bedbound, completely dependent in ADLs. Requires complex wound dressings (e.g., negative-pressure wound therapy), frequent IV piggyback infusions, continuous telemetry monitoring, chest tube management, or hourly intake/output tracking.
            </li>
            <li><strong>Category IV: Critical / Intensive Care (12–24 Nursing Hours/Day)</strong>
              <br>• <em>Profile:</em> Hemodynamically unstable, mechanically ventilated on continuous life-support. Requires continuous titration of multiple vasoactive intravenous infusions, hourly arterial blood gas sampling, and continuous bedside surveillance (1:1 or 1:2 nurse-to-patient ratio).
            </li>
          </ul>

          <h3>2.4 Staffing Calculation Formula (Visual Calculator Card)</h3>
          
          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🧮 Step 1: Calculate Total Nursing Care Hours Needed</div>
                <span class="badge badge-primary">Mathematical Formula</span>
              </div>
              <p class="flow-desc" style="font-family: monospace; font-size: 1rem; color: var(--accent-primary);">
                Total Care Hours = ∑ (Number of Patients in Category × Required Care Hours)
              </p>
            </div>

            <div class="flow-step-card">
              <div class="flow-header">
                <div class="flow-title">📊 Step 2: Calculate Required Staffing (Full-Time Equivalents)</div>
                <span class="badge badge-purple">Staffing Ratio</span>
              </div>
              <p class="flow-desc" style="font-family: monospace; font-size: 1rem; color: var(--accent-purple);">
                Required Nurses = Total Nursing Care Hours Needed / Productive Hours Per Nurse (e.g., 7 hrs)
              </p>
            </div>

            <div class="flow-step-card success-state">
              <div class="flow-header">
                <div class="flow-title">💡 Worked Clinical Example: 12-Bed Telemetry Ward</div>
                <span class="badge badge-success">Practical Application</span>
              </div>
              <p class="flow-desc">
                • 4 Category I Patients (4 × 1.5 hrs = <strong>6 hrs</strong>)<br>
                • 6 Category II Patients (6 × 4.0 hrs = <strong>24 hrs</strong>)<br>
                • 2 Category IV Patients (2 × 12.0 hrs = <strong>24 hrs</strong>)<br>
                <strong>Total Care Hours Needed:</strong> 6 + 24 + 24 = <strong>54 Hours</strong><br>
                <strong>Required Registered Nurses:</strong> 54 hrs ÷ 7 productive hours/nurse = <strong>7.71</strong> $\rightarrow$ <strong>8 Nurses Needed</strong>.
              </p>
            </div>
          </div>
        `
      },
      u3: {
        title: "Unit 3: Traditional Care Delivery Modalities (All 5 Systems)",
        content: `
          <h2>Unit 3: Traditional Care Delivery Modalities</h2>
          <p>Traditional modalities developed across the 20th century in response to social crises, economic depressions, wars, and nurse staffing shortages. The traditional modalities comprise five distinct systems:</p>

          <!-- VISUAL TIMELINE COMPONENT -->
          <div class="flow-container">
            <div class="flow-step-card">
              <div class="flow-header">
                <div class="flow-title">⏳ 20th Century Historical Progression of Modalities</div>
                <span class="badge badge-primary">Historical Evolution</span>
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>19th C – 1920s</strong>
                  <div>Case Method / Total Patient Care (Oldest - Private Duty)</div>
                </div>
                <div class="flow-subcard">
                  <strong>1930s – 1940s</strong>
                  <div>Functional Nursing (Great Depression & WWII Task Model)</div>
                </div>
                <div class="flow-subcard">
                  <strong>1950s</strong>
                  <div>Team Nursing (Eleanor Lambertsen Democratic Mix)</div>
                </div>
                <div class="flow-subcard">
                  <strong>Late 1960s – 70s</strong>
                  <div>Primary Nursing (Marie Manthey 24-hr Model)</div>
                </div>
                <div class="flow-subcard">
                  <strong>1980s</strong>
                  <div>Modular Nursing (Magargal Geographic Pods)</div>
                </div>
              </div>
            </div>
          </div>

          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">

          <h3>3.1 Case Method / Total Patient Care (TPC)</h3>
          <h4>Historical Origin & Structure</h4>
          <p>The <strong>Case Method</strong> is the <strong>oldest method of nursing care delivery</strong>. Originating with Florence Nightingale and 1920s private-duty nursing, nurses cared for patients in private homes or individual hospital suites. In modern hospitals, it is known as <strong>Total Patient Care (TPC)</strong>. One Registered Nurse (RN) is assigned 100% responsibility for all nursing care needed by one or two patients during an <strong>8- to 12-hour work shift</strong>.</p>

          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🏥 Direct Shift Assignment Model</div>
                <span class="badge badge-primary">1:1 or 1:2 Direct Care</span>
              </div>
              <p class="flow-desc">
                <strong>[ Registered Nurse (RN) ]</strong> ── Direct Total Care ──> <strong>[ Assigned Patient(s) ]</strong><br>
                <em>Scope of Care:</em> Medications, Vital Signs, Personal Hygiene/Baths, Sterile Dressings, Emotional Counseling, and Documentation. No assistive delegation.
              </p>
            </div>
          </div>

          <h4>Hallmark Clinical Settings</h4>
          <p>Intensive Care Units (ICU), Post-Anesthesia Care Units (PACU), Labor & Delivery (L&D), and Cardiac Catheterization Recovery suites.</p>

          <h4>Merits (Advantages):</h4>
          <ul>
            <li><strong>Holistic & Comprehensive Care:</strong> The nurse observes subtle changes in physical and emotional status during continuous, unfragmented bedside interaction.</li>
            <li><strong>Clear Accountability for the Shift:</strong> If an order is missed or an adverse reaction occurs, responsibility rests unequivocally on that assigned nurse.</li>
            <li><strong>High Patient Satisfaction:</strong> Patients enjoy knowing exactly who their nurse is without multiple strangers entering their room.</li>
          </ul>

          <h4>Demerits (Disadvantages):</h4>
          <ul>
            <li><strong>Highest Labor Cost:</strong> Requires an almost 100% Registered Nurse workforce, making it the most expensive delivery system.</li>
            <li><strong>Shift-by-Shift Fragmentation:</strong> While continuity is high <em>during</em> a shift, care can become disjointed over a 5-day stay if different nurses with varying care approaches rotate each day.</li>
          </ul>

          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">

          <h3>3.2 Functional Nursing</h3>
          <h4>Historical Origin & Structure</h4>
          <p>Developed in the <strong>1930s in the United States</strong> during the Great Depression and World War II, hospitals faced severe Registered Nurse shortages. Nursing borrowed industrial efficiency principles from Henry Ford’s automotive assembly lines: <strong>the work of the ward was divided by task rather than by patient</strong>.</p>

          <!-- VISUAL HIERARCHY CARD REPLACING ASCII -->
          <div class="flow-container">
            <div class="flow-step-card">
              <div class="flow-header">
                <div class="flow-title">🏭 Industrial Assembly-Line Task Distribution</div>
                <span class="badge badge-purple">Task-Oriented</span>
              </div>
              <div style="text-align: center; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.75rem;">
                [ Ward Charge Nurse / Nurse Manager ]
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>💊 LPN / LVN Role:</strong>
                  <div>Passes oral (PO) medications and performs basic sterile wound treatments for all 30 patients.</div>
                </div>
                <div class="flow-subcard">
                  <strong>🩺 Registered Nurse (RN):</strong>
                  <div>Conducts admission assessments, writes care plans, and transcribes physician orders.</div>
                </div>
                <div class="flow-subcard">
                  <strong>🩹 Nursing Aide 1:</strong>
                  <div>Measures vital signs and assists with hygiene/sponge baths for all patients.</div>
                </div>
                <div class="flow-subcard">
                  <strong>🛏️ Nursing Aide 2:</strong>
                  <div>Changes bed linens, distributes meal trays, and stocks supplies.</div>
                </div>
              </div>
              <div style="text-align: center; margin-top: 0.75rem; color: var(--text-muted); font-size: 0.88rem;">
                ⬇️ All separate tasks converge on <strong>All Assigned Ward Patients</strong>
              </div>
            </div>
          </div>

          <h4>Merits (Advantages):</h4>
          <ul>
            <li><strong>Extreme Operational Efficiency:</strong> Workers become exceptionally fast and proficient at their specific repetitive task.</li>
            <li><strong>Economical & Cost-Effective:</strong> Allows a hospital ward to operate with very few RNs supported by lower-wage assistive personnel.</li>
            <li><strong>Invaluable in Surges & Disasters:</strong> In mass casualty incidents, natural disasters, and field triage, functional nursing enables rapid processing of huge patient volumes.</li>
          </ul>

          <h4>Demerits (Disadvantages):</h4>
          <ul>
            <li><strong>Severe Fragmentation of Care:</strong> The patient is treated as an assembly of disjointed body systems rather than an integrated human being.</li>
            <li><strong>Missed Subtle Holistic Changes:</strong> An aide noting skin pallor during a bath may not connect it to the medication given by the LPN or internal bleeding.</li>
            <li><strong>Patient Anxiety & Insecurity:</strong> Patients cannot identify "their nurse" because five different individuals enter their room for separate tasks.</li>
            <li><strong>Worker Monotony & Low Morale:</strong> Performing repetitive tasks all shift causes high burnout and vocational dissatisfaction.</li>
          </ul>

          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">

          <h3>3.3 Team Nursing</h3>
          <h4>Historical Origin & Structure</h4>
          <p>Introduced in the <strong>1950s</strong> by <strong>Eleanor Lambertsen</strong> at Teachers College, Columbia University, Team Nursing was designed to overcome the impersonal fragmentation of Functional Nursing while continuing to utilize a diverse staff mix (RNs, LPNs, UAPs).</p>

          <!-- VISUAL TEAM HIERARCHY -->
          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">👥 Team Nursing Hierarchy & Collaboration</div>
                <span class="badge badge-primary">Democratic Leadership</span>
              </div>
              <div style="text-align: center; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
                [ Ward Nurse Manager ]
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard" style="border-top: 3px solid var(--accent-primary);">
                  <strong>⭐ Team A Leader (RN):</strong>
                  <div>Directs RN, LPN, and CNA caring for <strong>Patient Group A</strong> (Beds 1–15). Leads Team Conferences.</div>
                </div>
                <div class="flow-subcard" style="border-top: 3px solid var(--accent-secondary);">
                  <strong>⭐ Team B Leader (RN):</strong>
                  <div>Directs RN, LPN, and CNA caring for <strong>Patient Group B</strong> (Beds 16–30). Leads Team Conferences.</div>
                </div>
              </div>
            </div>
          </div>

          <h4>The Non-Negotiable Cornerstone: Team Conferences</h4>
          <p>Eleanor Lambertsen established that the <strong>Pre-Shift and Post-Shift Team Conference</strong> is the indispensable core of Team Nursing. The RN Team Leader reviews client needs, delegates assignments based on legal scope of practice and competence, and leads collaborative debriefings. Without team conferences, Team Nursing collapses into disorganized Functional Nursing.</p>

          <h4>Merits (Advantages):</h4>
          <ul>
            <li><strong>Collaborative Synergy:</strong> Blends professional RN judgment with technical practical skills of assistive personnel.</li>
            <li><strong>Democratic Leadership & High Morale:</strong> Open communication and shared problem-solving empower team members.</li>
            <li><strong>Comprehensive Care at Balanced Cost:</strong> Provides higher continuity and satisfaction than functional nursing without the prohibitive cost of all-RN staffing.</li>
          </ul>

          <h4>Demerits (Disadvantages):</h4>
          <ul>
            <li><strong>Heavy Dependence on Leadership Competence:</strong> If the RN Team Leader lacks delegation, conflict-resolution, or communication skills, care suffers.</li>
            <li><strong>Time-Consuming Conferences:</strong> Coordinating schedules and conducting conferences takes time away from direct bedside nursing.</li>
          </ul>

          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">

          <h3>3.4 Modular Nursing (District Nursing)</h3>
          <h4>Historical Origin & Structure</h4>
          <p>Developed in the <strong>1980s by Magargal and colleagues</strong>, Modular Nursing is a direct geographic adaptation of Team Nursing. In sprawling hospitals, nurses waste hours walking back and forth along long hallways. Modular Nursing solves this by <strong>dividing the floor into geographic clusters or 'modules/pods'</strong> (e.g., Pod 1 = Rooms 101–108; Pod 2 = Rooms 109–116).</p>

          <div class="flow-container">
            <div class="flow-step-card">
              <div class="flow-header">
                <div class="flow-title">📍 Decentralized Geographic Pod Structure</div>
                <span class="badge badge-warning">Minimizes Walking Time</span>
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>Module 1 (Rooms 101–108):</strong>
                  <div>Dedicated Mini-Team (1 RN + 1 LPN/CNA), local med dispenser, local clean linen station.</div>
                </div>
                <div class="flow-subcard">
                  <strong>Module 2 (Rooms 109–116):</strong>
                  <div>Dedicated Mini-Team (1 RN + 1 LPN/CNA), local med dispenser, local clean linen station.</div>
                </div>
                <div class="flow-subcard">
                  <strong>Module 3 (Rooms 117–124):</strong>
                  <div>Dedicated Mini-Team (1 RN + 1 LPN/CNA), local med dispenser, local clean linen station.</div>
                </div>
              </div>
            </div>
          </div>

          <h4>Merits (Advantages):</h4>
          <ul>
            <li><strong>Dramatically Reduces Walking Time:</strong> Keeps the mini-team physically adjacent to patient rooms, maximizing direct bedside care hours.</li>
            <li><strong>Rapid Call Light Response:</strong> Because nursing stations are decentralized right outside patient rooms, nurses detect emergencies immediately.</li>
          </ul>

          <h4>Demerits (Disadvantages):</h4>
          <ul>
            <li><strong>Architectural Retrofit Costs:</strong> Older, long single-corridor hospitals require capital-intensive renovations to install decentralized pods and duplicate supplies.</li>
            <li><strong>Silo Effect:</strong> Mini-teams in one pod may be unaware that an adjacent pod is experiencing a cardiac arrest crisis unless communication protocols are robust.</li>
          </ul>

          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">

          <h3>3.5 Primary Nursing</h3>
          <h4>Historical Origin & Structure</h4>
          <p>Conceived in the <strong>late 1960s</strong> at the University of Minnesota Hospitals by <strong>Marie Manthey</strong>, Primary Nursing was designed to restore professional autonomy, decentralization, and registered nurse accountability. A single Registered Nurse (the <strong>Primary Nurse</strong>) assumes <strong>continuous 24-hour accountability</strong> for planning, coordinating, and evaluating the individualized care of a patient <strong>from admission through discharge</strong>.</p>

          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🌟 The 24-Hour Accountability Hub (Marie Manthey)</div>
                <span class="badge badge-success">Admission to Discharge</span>
              </div>
              <div style="text-align: center; padding: 0.75rem; background: rgba(14, 165, 233, 0.15); border-radius: 8px; margin-bottom: 0.75rem;">
                <strong style="color: var(--accent-primary); font-size: 1.1rem;">[ Primary Registered Nurse ]</strong><br>
                <span>Formulates 24-hour Nursing Care Plan from Admission to Discharge</span>
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>🔄 Associate Nurses:</strong>
                  <div>Deliver direct care during off-shifts (night shift, days off), strictly implementing the Primary Nurse's plan.</div>
                </div>
                <div class="flow-subcard">
                  <strong>🩺 Multidisciplinary Team:</strong>
                  <div>Attending physicians, physical therapists, and dietitians communicate directly with the Primary Nurse.</div>
                </div>
                <div class="flow-subcard">
                  <strong>❤️ Patient & Family:</strong>
                  <div>Experience continuous, trusted clinical advocacy with a single identifiable primary clinician.</div>
                </div>
              </div>
            </div>
          </div>

          <h4>Merits (Advantages):</h4>
          <ul>
            <li><strong>Highest Continuity of Care:</strong> One nurse knows the patient's comprehensive clinical baseline, eliminating missed symptoms.</li>
            <li><strong>Unmatched Patient and Family Satisfaction:</strong> Establishes deep therapeutic rapport and mutual trust.</li>
            <li><strong>Lower Complications & Shorter Length of Stay:</strong> Continuous evaluation catches clinical deterioration early.</li>
          </ul>

          <h4>Demerits (Disadvantages):</h4>
          <ul>
            <li><strong>High Personnel Costs:</strong> Requires an all-RN staffing model, placing heavy demands on hospital payroll.</li>
            <li><strong>Psychological Stress & Burnout:</strong> 24-hour accountability can create emotional burden and difficulty disengaging during off-duty hours.</li>
          </ul>
        `
      },
      u4: {
        title: "Unit 4: Advanced Modalities (Case Management & Critical Pathways)",
        content: `
          <h2>Unit 4: Advanced Modalities (Case Management & Critical Pathways)</h2>
          <p>In response to modern healthcare economic pressures (managed care, capitation, Diagnosis-Related Groups [DRGs], and rising hospital expenditures), nursing leadership developed advanced multidisciplinary models focusing on <strong>system-wide care coordination across entire episodes of illness</strong>.</p>

          <h3>4.1 Nurse Case Management</h3>
          <p><strong>Nursing Case Management</strong> is a collaborative, interdisciplinary healthcare delivery strategy that assesses, plans, implements, coordinates, monitors, and evaluates patient care options and services across an <strong>entire episode of illness</strong> (from pre-admission through acute inpatient stay to discharge, rehabilitation, home care, or hospice).</p>

          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🌐 The Care Continuum Trajectory</div>
                <span class="badge badge-primary">Episode of Illness</span>
              </div>
              <div style="text-align: center; padding: 0.5rem; color: var(--accent-warning); font-weight: 700;">
                [ Pre-Admission / Onset of Illness ] ──> [ Acute Hospitalization ] ──> [ Post-Acute / Resolution ]
              </div>
              <div style="text-align: center; padding: 0.85rem; background: rgba(16, 185, 129, 0.15); border-radius: 8px; margin: 0.75rem 0;">
                <strong style="color: var(--accent-secondary); font-size: 1.1rem;">NURSE CASE MANAGER (Systems Coordinator)</strong><br>
                <span>Oversees clinical milestones, prevents 30-day readmissions, and liaises with insurance payers</span>
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard">
                  <strong>Patient & Family:</strong>
                  <div>Holistic counseling, education, and addressing Social Determinants of Health (SDOH).</div>
                </div>
                <div class="flow-subcard">
                  <strong>Interprofessional Team:</strong>
                  <div>Aligns physicians, physical/speech therapy, pharmacy, and medical social work.</div>
                </div>
                <div class="flow-subcard">
                  <strong>Post-Acute Services:</strong>
                  <div>Coordinates home health nursing, hospice, durable medical equipment, and rehabilitation.</div>
                </div>
              </div>
            </div>
          </div>

          <h4>The Nurse Case Manager Role</h4>
          <p>Unlike bedside clinical nurses who provide shift-based hands-on physical care, the <strong>Nurse Case Manager</strong> is a systems-level clinical coordinator. The Case Manager targets high-risk, high-cost, or chronically ill patient populations (e.g., Congestive Heart Failure [CHF], stroke, brittle diabetes, major trauma, total joint replacements), addresses Social Determinants of Health (SDOH), negotiates with insurance payers to avoid claim denials, and coordinates post-discharge care to prevent costly 30-day hospital readmissions.</p>

          <h3>4.2 Critical Pathways (Care Maps)</h3>
          <p><strong>Critical Pathways</strong> (also called <strong>Clinical Pathways</strong> or <strong>Care Maps</strong>) are structured, multidisciplinary, timeline-based protocols outlining the optimal sequence, timing, and nature of interventions by all healthcare team members for a specific diagnosis or surgical procedure.</p>
          <p>Critical pathways operationalize Case Management: if Case Management is the overarching <strong>strategy</strong>, Critical Pathways are the tactical <strong>blueprint</strong>.</p>

          <h4>Sample Total Hip Arthroplasty (THA) Critical Pathway Grid:</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>Clinical Dimension</th>
                <th>Pre-Operative (Day 0)</th>
                <th>Post-Operative (Day 1)</th>
                <th>Post-Operative (Day 2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clinical Assessment</strong></td>
                <td>Pre-op baseline, ECG, complete blood count</td>
                <td>Surgical incision check, vital signs q4h</td>
                <td>Readiness for discharge assessment</td>
              </tr>
              <tr>
                <td><strong>Medications</strong></td>
                <td>Prophylactic IV Cefazolin within 60 min</td>
                <td>Stepdown to oral analgesics, LMWH</td>
                <td>Oral pain management, subcutaneous LMWH</td>
              </tr>
              <tr>
                <td><strong>Activity & Physical Therapy</strong></td>
                <td>Crutch-walking education, deep breathing</td>
                <td>Dangle at bedside, transfer to chair</td>
                <td>Ambulate 50 feet with walker</td>
              </tr>
              <tr>
                <td><strong>Dietary Progression</strong></td>
                <td>NPO past midnight</td>
                <td>Clear liquids progressing to regular</td>
                <td>Full regular diet</td>
              </tr>
              <tr>
                <td><strong>Discharge Planning</strong></td>
                <td>Confirm family home support</td>
                <td>Review home safety with physical therapy</td>
                <td>Discharge home with home health PT</td>
              </tr>
            </tbody>
          </table>

          <h3>4.3 Clinical Pathway Variances (CRITICAL BOARD CONCEPT)</h3>
          <p>A <strong>Variance</strong> is any deviation, unexpected clinical finding, or delay that causes a patient to depart from the established critical pathway timeline:</p>
          <ul>
            <li><strong>Positive Variance:</strong> The patient achieves a milestone earlier than scheduled (e.g., extubated 6 hours ahead of projection, or Foley catheter removed on Day 1 instead of Day 2).</li>
            <li><strong>Negative Variance:</strong> The patient fails to meet a scheduled milestone or suffers an unexpected clinical complication (e.g., postoperative hypotension prevents scheduled physical therapy ambulation, or a surgical site infection develops).</li>
            <li><strong>Clinical Nursing Action on Negative Variance:</strong> The Registered Nurse must immediately <strong>document the variance, notify the healthcare provider, initiate physiological assessment of the underlying etiology, and adapt the nursing care plan</strong> to safeguard patient outcomes.</li>
          </ul>
        `
      },
      u5: {
        title: "Unit 5: Clinical Cases & Decision Framework",
        content: `
          <h2>Unit 5: Clinical Management Decision-Making Framework & Cases</h2>
          <p>To achieve 100% on nursing leadership examinations, you must know how to select the right delivery system for any real-world clinical vignette.</p>

          <div class="flow-container">
            <div class="flow-step-card active-state">
              <div class="flow-header">
                <div class="flow-title">🧭 Step-by-Step Clinical Decision Algorithm</div>
                <span class="badge badge-primary">Board Exam Strategy</span>
              </div>
              <div class="flow-subgrid">
                <div class="flow-subcard" style="border-left: 3px solid var(--accent-primary);">
                  <strong>❓ Condition 1: High Acuity / 1:1 Care</strong>
                  <div>Is the client critically ill, unstable, in ICU, PACU, or L&D?<br>👉 <strong>Total Patient Care (Case Method)</strong></div>
                </div>
                <div class="flow-subcard" style="border-left: 3px solid var(--accent-danger);">
                  <strong>❓ Condition 2: Disaster / Mass Casualty</strong>
                  <div>Is there a massive influx of trauma patients or acute nurse deficit?<br>👉 <strong>Functional Nursing (Assembly-Line)</strong></div>
                </div>
                <div class="flow-subcard" style="border-left: 3px solid var(--accent-warning);">
                  <strong>❓ Condition 3: Diverse Staff Mix in Pods</strong>
                  <div>Do you have RNs, LPNs, and aides working in geographic clusters?<br>👉 <strong>Modular Nursing</strong></div>
                </div>
                <div class="flow-subcard" style="border-left: 3px solid var(--accent-secondary);">
                  <strong>❓ Condition 4: Diverse Staff Mix on Standard Ward</strong>
                  <div>Do you have RNs, LPNs, and aides needing democratic team coordination?<br>👉 <strong>Team Nursing (Eleanor Lambertsen)</strong></div>
                </div>
                <div class="flow-subcard" style="border-left: 3px solid var(--accent-purple);">
                  <strong>❓ Condition 5: All-RN Staff Seeking 24-Hr Ownership</strong>
                  <div>Do you have an all-RN staff in long-term acute care (Oncology, Pediatrics)?<br>👉 <strong>Primary Nursing (Marie Manthey)</strong></div>
                </div>
              </div>
            </div>
          </div>

          <h3>Real-World Clinical Case Studies</h3>
          
          <h4>Case 1: The Critical ICU Post-Op Patient</h4>
          <p><strong>Scenario:</strong> A 58-year-old male post-triple coronary artery bypass graft arrives in the Intensive Care Unit intubated, with an arterial line, pulmonary artery catheter, and 3 continuous vasoactive infusions. Which care delivery modality is mandatory?</p>
          <div class="highlight-box">
            <strong>Management Solution:</strong> <strong>Case Method / Total Patient Care (TPC)</strong>. The patient is physiologically unstable (Category IV Acuity). Care cannot be fragmented or delegated to assistive personnel. One Registered Nurse must provide 100% holistic care during the shift.
          </div>

          <h4>Case 2: Mass Casualty Highway Bus Crash</h4>
          <p><strong>Scenario:</strong> A tour bus rolls over on the highway, sending 45 acute polytrauma patients simultaneously into a 12-bed Emergency Department staffed by 4 RNs and 4 aides. Which modality should the Charge Nurse activate?</p>
          <div class="highlight-box">
            <strong>Management Solution:</strong> <strong>Functional Nursing</strong>. Immediate survival throughput requires assembly-line division of labor: Nurse 1 tags triage, Nurse 2 establishes airway access, Nurse 3 inserts large-bore IV lines, and Aides transport and apply pressure dressings.
          </div>

          <h4>Case 3: Sprawling 40-Bed Surgical Ward with High Nurse Fatigue</h4>
          <p><strong>Scenario:</strong> A hospital floor plan features long, 100-meter corridors. Nurses log 12,000 steps per shift running for linens and medications, causing delayed call-bell response times. Staff mix includes RNs, LPNs, and aides. What structural shift is indicated?</p>
          <div class="highlight-box">
            <strong>Management Solution:</strong> <strong>Modular Nursing</strong>. Partition the ward into geographic pods of 8 rooms each, stationing a mini-team (1 RN + 1 LPN/UAP) with localized medication carts and linen stations directly inside each pod.
          </div>

          <h4>Case 4: Complex Pediatric Oncology Ward</h4>
          <p><strong>Scenario:</strong> Children with acute lymphoblastic leukemia undergo 6-week continuous chemotherapy regimens requiring intense family education, complex central venous catheter maintenance, and emotional counseling. Which model is the gold standard?</p>
          <div class="highlight-box">
            <strong>Management Solution:</strong> <strong>Primary Nursing (Marie Manthey)</strong>. One Primary Registered Nurse maintains 24-hour total accountability from admission to discharge, forging therapeutic trust, minimizing infection risks, and coordinating multidisciplinary care.
          </div>
        `
      }
    };
