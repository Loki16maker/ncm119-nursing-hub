const examQuestions = [
      {
        id: 1,
        cog: "Knowledge",
        stem: "In 1958, Ida Jean Orlando formulated the Deliberative Nursing Process Theory. Which statement accurately captures Orlando’s view of the dynamic nurse-patient relationship?",
        options: [
          "A. The nurse’s primary duty is to execute physician orders without questioning the client’s emotional expressions.",
          "B. The patient's behavior stimulates a nursing reaction involving perception, thought, and feeling, which the nurse must validate with the patient before taking action.",
          "C. Patient care is strictly functional and task-oriented, focusing solely on biological homeostasis.",
          "D. Standardized institutional protocols should always override individualized patient expressions of distress."
        ],
        answer: 1,
        rationale: "Orlando’s (1958) Deliberative Nursing Process Theory highlights that patient distress arises from unmet needs. The nurse must validate observations and perceptions directly with the patient rather than taking automatic, unverified actions."
      },
      {
        id: 2,
        cog: "Comprehension",
        stem: "A 4th-year nursing student reviews the foundational steps of the Nursing Process: Assessment, Diagnosis, Planning, Implementation, and Evaluation (ADPIE). Which action represents the Planning phase?",
        options: [
          "A. Auscultating bilateral lung fields and identifying crackles in the lower bases.",
          "B. Formulating the nursing diagnosis of Impaired Gas Exchange related to alveolar fluid accumulation.",
          "C. Establishing a measurable client outcome: 'Client will maintain an oxygen saturation (SpO2) of 95% or higher on room air within 4 hours.'",
          "D. Administering 20 milligrams of intravenous furosemide as prescribed by the attending physician."
        ],
        answer: 2,
        rationale: "Setting measurable, time-oriented (SMART) client-centered goals and selecting nursing interventions constitutes the Planning phase of ADPIE."
      },
      {
        id: 3,
        cog: "Application",
        stem: "Evidence-Based Practice (EBP) is integrated into modern nursing care delivery systems. Which component is NOT part of the foundational triad of Evidence-Based Practice?",
        options: [
          "A. Best available scientific clinical research evidence.",
          "B. The individual nurse's clinical expertise and professional judgment.",
          "C. Client personal values, cultural preferences, and unique healthcare goals.",
          "D. Strict adherence to historical institutional traditions regardless of research findings."
        ],
        answer: 3,
        rationale: "Evidence-Based Practice (EBP) rejects blindly following tradition ('we've always done it this way') and combines research evidence, clinical expertise, and patient values."
      },
      {
        id: 4,
        cog: "Analysis",
        stem: "A newly graduated Registered Nurse (RN) notes that an elderly postoperative patient is moaning softly and guarding his abdomen. Rather than immediately injecting an opioid analgesic, the nurse asks, 'Mr. Reyes, are you experiencing abdominal pain, or are you feeling nauseated from the anesthesia?' The patient clarifies that he is severely nauseated. This interaction exemplifies:",
        options: [
          "A. Automatic, non-deliberative nursing action.",
          "B. Ida Jean Orlando’s deliberative validation of nursing perceptions.",
          "C. Breach of clinical nursing protocol.",
          "D. Functional task delegation."
        ],
        answer: 1,
        rationale: "The nurse validated her clinical perception with the client before acting, avoiding the erroneous administration of an opioid that would exacerbate postoperative nausea."
      },
      {
        id: 5,
        cog: "Comprehension",
        stem: "Why is the Nursing Process characterized as 'cyclical and dynamic' rather than a rigid linear checklist?",
        options: [
          "A. Because documentation can be skipped if the ward is busy.",
          "B. Because client evaluation continuously feeds new assessment data back into the system, leading to ongoing revisions of diagnoses and interventions.",
          "C. Because physicians must re-certify nursing diagnoses every 24 hours.",
          "D. Because the phases are interchangeable and may be performed in any random sequence."
        ],
        answer: 1,
        rationale: "The Nursing Process is continuous and cyclical; evaluation findings provide new assessment data that guide subsequent revisions to the plan of care."
      },
      {
        id: 6,
        cog: "Knowledge",
        stem: "A Nurse Manager on a 30-bed surgical unit uses a Patient Classification System (PCS). What is the primary objective of implementing a Patient Classification System?",
        options: [
          "A. To discipline nursing personnel who fail to complete charting on time.",
          "B. To objectively quantify patient care requirements in order to determine equitable staffing numbers and appropriate skill mix.",
          "C. To replace electronic health records with manual paper scoring sheets.",
          "D. To calculate hospital billing charges for medical doctor professional fees."
        ],
        answer: 1,
        rationale: "A Patient Classification System (PCS) objectively measures nursing care requirements to allocate staffing resources and skill mix equitably."
      },
      {
        id: 7,
        cog: "Comprehension",
        stem: "In healthcare management, how does a Factor Evaluation Patient Classification System (PCS) differ from a Prototype Evaluation Patient Classification System?",
        options: [
          "A. Factor systems assign discrete numerical point values to specific nursing tasks; Prototype systems classify patients into broad descriptive categories based on disease profiles.",
          "B. Factor systems are subjective, while Prototype systems are purely mathematical.",
          "C. Factor systems are used exclusively in outpatient clinics, whereas Prototype systems are used in intensive care units.",
          "D. Factor systems evaluate hospital financial revenue; Prototype systems evaluate patient satisfaction scores."
        ],
        answer: 0,
        rationale: "Factor systems sum points for discrete clinical tasks (e.g., IV starts, dressings); Prototype systems group patients into broad descriptive profiles."
      },
      {
        id: 8,
        cog: "Application",
        stem: "Under a standard four-level Patient Classification System (PCS), which assigned client should be categorized as Category I (Minimal Care / Self-Care)?",
        options: [
          "A. A 72-year-old client with ischemic stroke who requires total feeding and repositioning every 2 hours.",
          "B. A 24-year-old client admitted for 23-hour observation following a mild concussion, alert and oriented x 4, independent in Activities of Daily Living (ADLs).",
          "C. A 55-year-old client who underwent coronary artery bypass grafting requiring continuous invasive arterial line monitoring.",
          "D. A 40-year-old client with a complex surgical wound requiring negative-pressure wound therapy changes twice per shift."
        ],
        answer: 1,
        rationale: "Category I (Minimal Care / Self-Care) includes alert, stable clients who are independent in ADLs and require minimal nursing care (1–2 hours/day)."
      },
      {
        id: 9,
        cog: "Analysis",
        stem: "A Nurse Supervisor assesses unit staffing needs. Bed A holds a Category II patient needing 3.5 hours of care; Bed B holds a Category IV patient needing 14 hours of care; Bed C holds a Category III patient needing 7 hours of care. If one full-time Registered Nurse (RN) provides 7 productive hours of care per shift, how many Registered Nurses are needed for these three patients?",
        options: [
          "A. 1 Registered Nurse",
          "B. 2 Registered Nurses",
          "C. 3.5 Registered Nurses (rounded to 4 nurses)",
          "D. 7 Registered Nurses"
        ],
        answer: 2,
        rationale: "Total care hours = 3.5 + 14 + 7 = 24.5 hours. Dividing 24.5 by 7 productive hours/nurse yields 3.5 RNs, rounded to 4 nurses to maintain safe coverage."
      },
      {
        id: 10,
        cog: "Application",
        stem: "A Charge Nurse notes that a Patient Classification System (PCS) tool on the ward consistently under-predicts the actual nursing hours required because it only counts scheduled medication times and ignores unexpected patient emotional counseling and family education. This scenario illustrates which management limitation of a Patient Classification System?",
        options: [
          "A. The tool is excessively complex to calculate mathematically.",
          "B. The tool measures discrete physical tasks (Factor system) while failing to capture holistic, non-tangible nursing care interventions.",
          "C. The system violates patient confidentiality under the Health Insurance Portability and Accountability Act (HIPAA).",
          "D. Prototype systems cannot be integrated into digital charting platforms."
        ],
        answer: 1,
        rationale: "Factor systems easily measure observable physical tasks but struggle to quantify emotional support, patient counseling, and psychosocial interventions."
      },
      {
        id: 11,
        cog: "Knowledge",
        stem: "Which modality of care delivery is historically recognized as the oldest organized nursing delivery model, rooted in early private-duty nursing?",
        options: [
          "A. Team Nursing",
          "B. Functional Nursing",
          "C. Case Method / Total Patient Care (TPC)",
          "D. Modular Nursing"
        ],
        answer: 2,
        rationale: "The Case Method (Total Patient Care) is the oldest care delivery model, originating with Florence Nightingale and early private-duty nursing."
      },
      {
        id: 12,
        cog: "Comprehension",
        stem: "In the Case Method / Total Patient Care (TPC) delivery model, what is the exact span of responsibility and accountability held by the assigned Registered Nurse (RN)?",
        options: [
          "A. 24-hour continuous accountability from admission to discharge across all hospital shifts.",
          "B. Accountability limited strictly to the duration of the nurse’s assigned 8- to 12-hour work shift.",
          "C. Responsibility only for specialized tasks such as medication administration and sterile dressings.",
          "D. Administrative oversight of unlicensed personnel without providing direct physical bedside care."
        ],
        answer: 1,
        rationale: "Under Total Patient Care, the RN provides complete care for the assigned patient, but accountability is strictly limited to that specific 8- to 12-hour shift."
      },
      {
        id: 13,
        cog: "Application",
        stem: "In which clinical healthcare environment is the Case Method / Total Patient Care (TPC) model most appropriately and widely utilized today?",
        options: [
          "A. A long-term chronic nursing home rehabilitation ward.",
          "B. A mass COVID-19 outpatient vaccination center.",
          "C. An Intensive Care Unit (ICU) caring for an unstable mechanically ventilated patient.",
          "D. A general medical-surgical ward during a critical institutional nursing strike."
        ],
        answer: 2,
        rationale: "High-acuity, physiologically unstable patients in the ICU or PACU require continuous RN assessment and total care that cannot be fragmented."
      },
      {
        id: 14,
        cog: "Analysis",
        stem: "What is the principal operational disadvantage of the Case Method / Total Patient Care (TPC) modality from an institutional healthcare administrative perspective?",
        options: [
          "A. It results in fragmented, depersonalized patient care.",
          "B. It has the highest personnel cost because it requires an almost entirely Registered Nurse (RN) staff mix.",
          "C. It causes frequent communication breakdowns between the Team Leader and unlicensed aides.",
          "D. It requires extensive physical remodeling of the hospital ward into geographic modules."
        ],
        answer: 1,
        rationale: "TPC is the most expensive delivery system because all care (including baths and hygiene) is provided by Registered Nurses at higher salary costs."
      },
      {
        id: 15,
        cog: "Comprehension",
        stem: "A patient recovering in the Post-Anesthesia Care Unit (PACU) states, 'I love that my nurse stays right beside my bed, administers my intravenous medications, checks my vital signs every 15 minutes, and cleans my surgical site without handing me off to multiple strangers.' This patient is describing the benefits of which care delivery system?",
        options: [
          "A. Functional Nursing",
          "B. Team Nursing",
          "C. Case Method / Total Patient Care (TPC)",
          "D. Primary Nursing"
        ],
        answer: 2,
        rationale: "The patient describes one dedicated nurse providing all care unfragmented during that specific recovery shift, the definition of Total Patient Care."
      },
      {
        id: 16,
        cog: "Knowledge",
        stem: "During which historical era did Functional Nursing emerge as the dominant care delivery model, and what primary crisis spurred its rapid implementation across hospitals?",
        options: [
          "A. The 19th-century Crimean War due to sanitary infection crises.",
          "B. The 1930s Great Depression and World War II due to extreme nationwide Registered Nurse (RN) shortages.",
          "C. The 1970s civil rights movement due to changes in nursing education curriculum.",
          "D. The 1990s introduction of managed care and Health Maintenance Organizations (HMO)."
        ],
        answer: 1,
        rationale: "Severe RN shortages during the Great Depression and World War II prompted hospitals to adopt an industrial task-based division of labor using auxiliary staff."
      },
      {
        id: 17,
        cog: "Comprehension",
        stem: "In a hospital ward operating under Functional Nursing, how are daily clinical duties divided among the nursing personnel?",
        options: [
          "A. Patients are grouped by bed numbers and assigned to multidisciplinary teams.",
          "B. Specific tasks (e.g., vital signs, medication administration, hygiene, charting) are assigned to specific staff categories based on technical skill and licensure.",
          "C. One Registered Nurse (RN) provides all care for an assigned group of 4 patients for 24 hours.",
          "D. Patients self-direct their care and request assistance from floating aides."
        ],
        answer: 1,
        rationale: "Functional Nursing assigns tasks (medications, dressings, baths) to staff members across all ward patients, rather than assigning whole patients to nurses."
      },
      {
        id: 18,
        cog: "Application",
        stem: "A natural disaster strikes a coastal city, causing a sudden influx of 150 trauma patients into a 20-bed Emergency Department (ED). The Chief Nursing Officer (CNO) should immediately adopt which delivery modality to ensure rapid, survival-focused throughput?",
        options: [
          "A. Primary Nursing",
          "B. Case Method / Total Patient Care (TPC)",
          "C. Functional Nursing",
          "D. Modular Nursing"
        ],
        answer: 2,
        rationale: "In mass casualty incidents, Functional Nursing maximizes efficiency by assigning repetitive life-saving tasks (triage, IV insertion, wound bandaging) to dedicated staff."
      },
      {
        id: 19,
        cog: "Analysis",
        stem: "An elderly hospitalized client says to her visiting daughter: 'I am so confused. One person came in at 8:00 AM to give me pills, another person stuck my arm for blood at 8:30 AM, a third person gave me a sponge bath at 9:00 AM, and when I told the bath person my chest was hurting, she said that wasn't her job and she'd tell someone else.' This scenario illustrates which hallmark pitfall of Functional Nursing?",
        options: [
          "A. Prohibitive financial cost and over-utilization of Registered Nurses (RN).",
          "B. Severe fragmentation of patient care and diminished holistic assessment.",
          "C. Excessive nurse walking time across geographic pods.",
          "D. Conflict between the Primary Nurse and Associate Nurse."
        ],
        answer: 1,
        rationale: "Care fragmentation and depersonalization occur when care is segmented into isolated tasks, leading to missed holistic symptoms (such as acute chest pain)."
      },
      {
        id: 20,
        cog: "Comprehension",
        stem: "From a staff morale standpoint, why does long-term assignment to a Functional Nursing model frequently result in low job satisfaction among nursing professionals?",
        options: [
          "A. The work becomes repetitive, assembly-line, and monotonous, preventing nurses from seeing the holistic progress of their patients.",
          "B. The nurse is forced to remain on-call 24 hours a day for discharge planning.",
          "C. The model requires extensive collaborative time in morning and post-shift conferences.",
          "D. The model eliminates the authority of the Charge Nurse."
        ],
        answer: 0,
        rationale: "Performing repetitive isolated tasks (passing pills or doing vitals all shift) alienates professional nurses from holistic patient care, driving down morale."
      },
      {
        id: 21,
        cog: "Knowledge",
        stem: "Team Nursing was developed in the early 1950s under the leadership of which prominent nursing theorist and educator?",
        options: [
          "A. Florence Nightingale",
          "B. Marie Manthey",
          "C. Eleanor Lambertsen",
          "D. Ida Jean Orlando"
        ],
        answer: 2,
        rationale: "Eleanor Lambertsen developed Team Nursing at Columbia University in the 1950s to overcome the fragmentation of Functional Nursing."
      },
      {
        id: 22,
        cog: "Comprehension",
        stem: "What is the core philosophy that Eleanor Lambertsen sought to advance through the creation of Team Nursing?",
        options: [
          "A. To return exclusively to private-duty one-on-one nursing care.",
          "B. To overcome the fragmentation of Functional Nursing while utilizing a diverse skill mix of professional and ancillary personnel through democratic leadership.",
          "C. To replace bedside Registered Nurses (RN) with lower-cost Unlicensed Assistive Personnel (UAP).",
          "D. To eliminate physician involvement in acute patient recovery plans."
        ],
        answer: 1,
        rationale: "Team Nursing combines diverse personnel (RNs, LPNs, UAPs) under the clinical leadership of an RN to deliver comprehensive care through teamwork."
      },
      {
        id: 23,
        cog: "Application",
        stem: "In a 30-bed medical ward utilizing Team Nursing, the team consists of a Registered Nurse (RN) Team Leader, a Licensed Practical Nurse (LPN), and a Certified Nursing Assistant (CNA). Which assignment made by the Team Leader is MOST appropriate based on legal scope of practice?",
        options: [
          "A. Assigning the Certified Nursing Assistant (CNA) to assess an unstable post-cardiac catheterization client.",
          "B. Assigning the Licensed Practical Nurse (LPN) to administer routine scheduled oral antihypertensive medications and perform a clean dressing change.",
          "C. Assigning the Licensed Practical Nurse (LPN) to formulate the initial nursing care plan for a newly admitted diabetic ketoacidosis patient.",
          "D. Assigning the Certified Nursing Assistant (CNA) to perform discharge medication teaching."
        ],
        answer: 1,
        rationale: "Routine oral medications and simple dressing changes are well within the legal scope of practice for an LPN. Assessments, planning, and teaching require an RN."
      },
      {
        id: 24,
        cog: "Analysis",
        stem: "A Registered Nurse (RN) Team Leader arrives on duty and immediately starts handing out task sheets without gathering the team. At the end of the shift, three routine medications were omitted, and an abnormal blood glucose level was not reported. What critical leadership breakdown caused this failure?",
        options: [
          "A. The hospital did not utilize a Factor Evaluation Patient Classification System.",
          "B. The Team Leader failed to conduct a pre-shift Team Conference to clarify assignments, coordinate care, and establish open communication channels.",
          "C. The ward was not architecturally partitioned into Modular pods.",
          "D. The Primary Nurse failed to leave written instructions for off-shift Associate Nurses."
        ],
        answer: 1,
        rationale: "The Team Conference is the foundational communication mechanism of Team Nursing; without it, coordination collapses and care becomes fragmented."
      },
      {
        id: 25,
        cog: "Comprehension",
        stem: "Which of the following is considered a major institutional advantage of Team Nursing when implemented effectively?",
        options: [
          "A. It completely removes the need for Registered Nurses (RN) on the hospital floor.",
          "B. It fosters high team collaboration, maximizes the capabilities of diverse personnel, and improves job satisfaction through shared responsibility.",
          "C. It provides 24-hour total accountability by a single nurse from admission to discharge.",
          "D. It is the cheapest possible care delivery model available in modern healthcare."
        ],
        answer: 1,
        rationale: "Effective Team Nursing encourages collaboration, allows members to practice to their full scope, and fosters high satisfaction through democratic teamwork."
      },
      {
        id: 26,
        cog: "Knowledge",
        stem: "Modular Nursing, pioneered by Magargal, is fundamentally a structural and geographic adaptation of which traditional care delivery system?",
        options: [
          "A. Functional Nursing",
          "B. Case Method / Total Patient Care (TPC)",
          "C. Team Nursing",
          "D. Primary Nursing"
        ],
        answer: 2,
        rationale: "Modular Nursing adapts Team Nursing by organizing staff into small mini-teams assigned to specific geographic modules or patient room clusters."
      },
      {
        id: 27,
        cog: "Comprehension",
        stem: "What is the primary operational rationale for architecturally dividing a 40-bed hospital unit into small, localized 'modules' or 'pods' with dedicated mini-teams?",
        options: [
          "A. To isolate infectious patients from non-infectious patients permanently.",
          "B. To drastically reduce nurse travel time and walking distances between patient rooms, medication stations, and supply depots.",
          "C. To allow each module to be staffed by a different private health insurance corporation.",
          "D. To eliminate the need for physician rounds on the nursing ward."
        ],
        answer: 1,
        rationale: "Decentralizing staff and supplies into localized modules drastically cuts nurse transit and walking time, keeping nurses near the bedside."
      },
      {
        id: 28,
        cog: "Application",
        stem: "A hospital is designing a new orthopedic surgical pavilion. To implement Modular Nursing efficiently, which environmental design feature must the architects include?",
        options: [
          "A. A single central nursing station located 200 meters away from patient rooms.",
          "B. Decentralized mini-nurse stations and localized supply/medication storage pods situated directly adjacent to small clusters of 6 to 8 patient rooms.",
          "C. A single centralized supply warehouse requiring nurses to ride elevators for clean linens.",
          "D. A dormitory for off-shift Associate Nurses."
        ],
        answer: 1,
        rationale: "Modular Nursing requires decentralized architecture (mini-stations, local supply and medication pods) adjacent to patient room clusters."
      },
      {
        id: 29,
        cog: "Analysis",
        stem: "A Charge Nurse assesses a surgical floor operating under Modular Nursing. Module 1 has 8 stable postoperative appendectomy patients; Module 2 has 6 complex polytrauma patients requiring blood transfusions and surgical drain irrigations. The mini-team in Module 2 is overwhelmed, while Module 1 has completed charting early. What administrative adjustment should the Charge Nurse make?",
        options: [
          "A. Refuse to intervene because Modular teams must remain completely isolated.",
          "B. Rebalance staffing or float personnel dynamically across modules based on Patient Classification System (PCS) acuity data rather than fixed bed numbers.",
          "C. Immediately switch the entire hospital to Functional Nursing.",
          "D. Discharge the polytrauma patients early to reduce module workload."
        ],
        answer: 1,
        rationale: "The Charge Nurse must dynamically balance staff across pods based on clinical acuity rather than keeping rigid bed quotas that jeopardize safety."
      },
      {
        id: 30,
        cog: "Comprehension",
        stem: "What is a recognized disadvantage or limitation of Modular Nursing?",
        options: [
          "A. Patients experience total depersonalization similar to an assembly line.",
          "B. It requires specialized physical architectural layouts and decentralized equipment pods, which may be costly or impossible to retrofit into older hospital buildings.",
          "C. It requires nurses to be on-call 24 hours a day from admission to discharge.",
          "D. It eliminates all direct patient communication between nurses and physicians."
        ],
        answer: 1,
        rationale: "Retrofitting older long-corridor hospitals with decentralized pods and duplicate equipment is architecturally challenging and expensive."
      },
      {
        id: 31,
        cog: "Knowledge",
        stem: "Primary Nursing was conceptualized in the late 1960s at the University of Minnesota Hospital by which visionary nursing leader?",
        options: [
          "A. Eleanor Lambertsen",
          "B. Marie Manthey",
          "C. Ida Jean Orlando",
          "D. Dorothea Orem"
        ],
        answer: 1,
        rationale: "Marie Manthey created Primary Nursing in 1968–1970 to restore clinical accountability, professional autonomy, and nurse-patient continuity."
      },
      {
        id: 32,
        cog: "Comprehension",
        stem: "What is the defining, non-negotiable hallmark of Primary Nursing that sets it apart from all other traditional care delivery modalities?",
        options: [
          "A. Tasks are divided based on technical difficulty.",
          "B. The Primary Nurse assumes 24-hour continuous accountability for planning and coordinating the client's care from admission until discharge.",
          "C. The Primary Nurse is physically present at the patient's bedside for all 24 hours of every day.",
          "D. It is staffed exclusively by Unlicensed Assistive Personnel (UAP)."
        ],
        answer: 1,
        rationale: "24-hour total accountability by a single Primary RN from admission to discharge is the hallmark of Primary Nursing."
      },
      {
        id: 33,
        cog: "Application",
        stem: "In Primary Nursing, what is the professional role and responsibility of the Associate Nurse working the night shift while the Primary Nurse is at home resting?",
        options: [
          "A. The Associate Nurse discards the Primary Nurse’s care plan and writes a completely new plan based on night-shift preferences.",
          "B. The Associate Nurse executes the established comprehensive care plan created by the Primary Nurse and contacts the Primary Nurse for consultation if significant clinical revisions are needed.",
          "C. The Associate Nurse acts strictly as a task aide and performs only vital signs.",
          "D. The Associate Nurse discharges the patient if morning rounds have not begun."
        ],
        answer: 1,
        rationale: "Associate Nurses deliver direct care during off-shifts following the Primary Nurse's plan of care, preserving clinical continuity."
      },
      {
        id: 34,
        cog: "Analysis",
        stem: "A hospital Chief Financial Officer (CFO) questions the Director of Nursing regarding the high payroll expenditures of the oncology unit, which operates under Primary Nursing. What clinical evidence-based rationale should the Director of Nursing present to defend Primary Nursing?",
        options: [
          "A. Primary Nursing allows the hospital to hire fewer Registered Nurses (RN) and more nurse aides.",
          "B. Primary Nursing demonstrates superior continuity of care, significantly lower hospital-acquired infection rates, reduced complications, and the highest patient and nurse satisfaction ratings.",
          "C. Primary Nursing eliminates all medical doctor consultations, saving physician fees.",
          "D. Primary Nursing is the fastest method for triage during mass casualty incidents."
        ],
        answer: 1,
        rationale: "Research confirms that Primary Nursing reduces complications, prevents hospital-acquired injuries, shortens lengths of stay, and elevates satisfaction."
      },
      {
        id: 35,
        cog: "Comprehension",
        stem: "Which clinical patient population benefits MOST from the high continuity, personalized advocacy, and relationship-based care inherent in Primary Nursing?",
        options: [
          "A. Pediatric oncology patients undergoing multi-week cycles of intensive chemotherapy.",
          "B. Uncomplicated walk-in patients receiving routine tetanus boosters in an urgent care clinic.",
          "C. Healthy college students getting physical examinations at a university health center.",
          "D. Ambulatory outpatients presenting for routine screening lipid blood tests."
        ],
        answer: 0,
        rationale: "Long-term, high-acuity, emotionally vulnerable patients (such as pediatric oncology or burn patients) derive the greatest therapeutic benefit from Primary Nursing."
      },
      {
        id: 36,
        cog: "Knowledge",
        stem: "Nurse Case Management emerged prominently during the 1980s managed care era. What is the temporal scope of a Nurse Case Manager’s accountability?",
        options: [
          "A. One single 8-hour shift only.",
          "B. The 24-hour period immediately following a surgical operation.",
          "C. Across the entire episode of illness, spanning inpatient admission, acute stabilization, rehabilitation, and outpatient/home care.",
          "D. Limited strictly to the emergency room admission assessment."
        ],
        answer: 2,
        rationale: "Case Managers coordinate care across the entire episode of illness, following patients across acute, post-acute, and outpatient environments."
      },
      {
        id: 37,
        cog: "Comprehension",
        stem: "Which statement accurately describes the daily clinical practice of an Inpatient Nurse Case Manager?",
        options: [
          "A. The Case Manager provides bedside morning baths, distributes meal trays, and administers intravenous push medications.",
          "B. The Case Manager coordinates multidisciplinary services, facilitates timely discharge planning, tracks resource utilization, and liaises with health insurance payers.",
          "C. The Case Manager performs surgical incisions under the direct supervision of an orthopedic surgeon.",
          "D. The Case Manager assigns daily task schedules to ward nursing aides."
        ],
        answer: 1,
        rationale: "Case Managers do not provide direct bedside hygiene; they manage resources, negotiate with insurance, and organize multidisciplinary care and discharge."
      },
      {
        id: 38,
        cog: "Application",
        stem: "A Nurse Case Manager is reviewing a hospitalized patient with Congestive Heart Failure (CHF). The patient is clinically stable and ready for discharge but lacks transportation, cannot afford prescription oral diuretics, and lives alone. What is the PRIORITY case management intervention?",
        options: [
          "A. Extend the patient's acute hospital stay by 14 days without notifying insurance.",
          "B. Collaborate with the hospital Medical Social Worker (MSW) and pharmacy assistance programs to arrange subsidized medications, home health nursing visits, and community transit services before discharge.",
          "C. Instruct the patient to walk to the nearest public pharmacy upon discharge.",
          "D. Discontinue all prescribed medications to eliminate financial barriers."
        ],
        answer: 1,
        rationale: "Case Managers address Social Determinants of Health (SDOH) by coordinating social work, medication subsidies, and home health to prevent 30-day readmissions."
      },
      {
        id: 39,
        cog: "Comprehension",
        stem: "What is a Critical Pathway (also referred to as a Clinical Pathway or Care Map)?",
        options: [
          "A. A legal lawsuit filed against a hospital by a patient’s family.",
          "B. A multidisciplinary, evidence-based management plan that outlines the sequential timing of clinical interventions and expected recovery milestones for a specific diagnosis or surgical procedure.",
          "C. A private hospital ledger detailing nurse salary pay grades.",
          "D. An emergency evacuation map displayed on the hospital corridor wall."
        ],
        answer: 1,
        rationale: "Critical Pathways standardize clinical interventions along an hourly/daily timeline to achieve predictable outcomes and curb length of stay."
      },
      {
        id: 40,
        cog: "Analysis",
        stem: "A 68-year-old male is placed on a 4-day Critical Pathway following an elective unilateral Total Knee Arthroplasty (TKA). On Postoperative Day 2, the pathway benchmark states: 'Patient will ambulate 50 feet with a physical therapist using a walker.' During physical therapy, the patient experiences a sudden drop in blood pressure and diaphoresis, preventing ambulation. How should the Registered Nurse (RN) accurately document and handle this situation?",
        options: [
          "A. Document that the patient has met all pathway milestones to avoid billing penalties from the insurance provider.",
          "B. Document a Negative Variance in the clinical pathway records, initiate medical evaluation of the hypotension, and formulate appropriate nursing interventions to address the delay.",
          "C. Immediately tear up the critical pathway and switch the patient to Functional Nursing.",
          "D. Report the Physical Therapist to the hospital ethics board for medical malpractice."
        ],
        answer: 1,
        rationale: "Failing to meet a milestone is a Negative Variance. The RN must document the variance, determine the cause, and adjust nursing care safely."
      }
    ];
