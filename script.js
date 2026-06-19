document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SCROLL REVEAL ANIMATION
       ========================================= */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
    
    revealElements.forEach(el => revealObserver.observe(el));

    /* =========================================
       2. EMERGENCY CASE DIAGNOSTIC (Toggle & Re-Generate)
       ========================================= */
    let selectedIssue = null;
    let selectedStatus = null;
    // Expose globally so review-form links can grab it
    window.selectedIssue = null; 
    
    const issueCards = document.querySelectorAll('#diag-q1 .i-card');
    const statusCards = document.querySelectorAll('#diag-q2 .i-card');
    const reportContainer = document.getElementById('diagnostic-report');

    function checkDiagnosticComplete() {
        if (selectedIssue && selectedStatus) {
            
            let guardian = "The Advisor", risk = "Moderate", action = "Policy Review", docs = "Performance Notifications";
            
            if(selectedIssue === 'suspension') {
                guardian = "The Reinstator"; risk = "Critical"; action = "Immediate Appeal Development"; docs = "Root Cause Proof & Plan of Action";
            } else if (selectedIssue === 'section3') {
                guardian = "The Investigator"; risk = "Severe"; action = "Documentation Audit"; docs = "365-Day Invoices, Tracking Validation";
            } else if (selectedIssue === 'related') {
                guardian = "The Nexus"; risk = "Critical"; action = "Identity Clarification Brief"; docs = "Corporate Structuring Docs, Affidavits";
            } else if (selectedIssue === 'ip') {
                guardian = "The Guardian"; risk = "High"; action = "Rights Owner Dispute"; docs = "LOA, Invoices, Retraction";
            } else if (selectedIssue === 'verification') {
                guardian = "The Steward"; risk = "High"; action = "KYC Validation Structuring"; docs = "Gov ID, Utility Bill, Licensing";
            } else if (selectedIssue === 'growth') {
                guardian = "The Architect"; risk = "Moderate"; action = "Structural Scaling & Optimization"; docs = "Brand Certificates, GS1 Validation";
            }

            if(selectedStatus === 'deactivated') { risk = "Critical"; }

            document.getElementById('rep-guardian').innerText = `Assigned Guardian: ${guardian}`;
            document.getElementById('rep-risk').innerText = risk;
            
            let riskClass = 'theme-crimson font-bold';
            if(risk === 'High') riskClass = 'theme-royal font-bold';
            else if(risk === 'Moderate') riskClass = 'theme-gold font-bold';
            document.getElementById('rep-risk').className = riskClass;

            document.getElementById('rep-docs').innerText = docs;
            document.getElementById('rep-action').innerText = action;

            let strategyText = `Do not submit a generic appeal. We must audit historical performance notifications related to your ${selectedIssue} issue, construct a data-driven root cause narrative, and map out compliant preventative measures before submission.`;
            if(selectedIssue === 'section3') strategyText = "Section 3 investigations require flawless supply chain tracking. Do not submit retail receipts. We must compile a verifiable 365-day commercial ledger.";
            else if(selectedIssue === 'related') strategyText = "You must identify the exact overlapping data point (IP, banking, permissions) before Amazon will accept an appeal for reinstatement. We will conduct a structural audit.";
            else if(selectedIssue === 'growth') strategyText = "Brand registry and catalog issues require a foundational compliance matrix. We will review your catalog mapping and structural business strategy to unlock sustainable expansion.";
            
            document.getElementById('rep-strategy').innerText = strategyText;

            reportContainer.classList.remove('hidden');
            
            setTimeout(() => {
                reportContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            reportContainer.classList.add('hidden');
        }
    }

    issueCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                selectedIssue = null;
                window.selectedIssue = null;
                checkDiagnosticComplete();
            } else {
                issueCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                selectedIssue = card.getAttribute('data-issue');
                window.selectedIssue = selectedIssue;
                
                if (selectedIssue && selectedStatus) {
                    reportContainer.classList.add('hidden');
                    setTimeout(() => { checkDiagnosticComplete(); }, 200);
                } else {
                    checkDiagnosticComplete();
                }
            }
        });
    });

    statusCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                selectedStatus = null;
                checkDiagnosticComplete();
            } else {
                statusCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                selectedStatus = card.getAttribute('data-status');
                
                if (selectedIssue && selectedStatus) {
                    reportContainer.classList.add('hidden');
                    setTimeout(() => { checkDiagnosticComplete(); }, 200);
                } else {
                    checkDiagnosticComplete();
                }
            }
        });
    });

    /* =========================================
       3. CIRCULAR GUARDIAN COMMAND CENTER (Radial Logic)
       ========================================= */
    const guardianData = {
        'g-reinstator': { name: 'The Reinstator', div: 'Recovery Division', divClass: 'theme-crimson', mission: 'Restoring suspended Amazon accounts through strategic investigation, documentation reviews, and appeal strategies.', best: ['Account Suspensions', 'Appeals & Reinstatements', 'Section 3 Reviews'] },
        'g-nexus': { name: 'The Nexus', div: 'Recovery Division', divClass: 'theme-crimson', mission: 'Untangling complex account associations and resolving related account suspensions to clarify identity separation.', best: ['Related Accounts', 'Identity Overlaps', 'Multiple Account Policies'] },
        'g-guardian': { name: 'The Guardian', div: 'Compliance Division', divClass: 'theme-blue', mission: 'Protecting listings and account health from debilitating intellectual property, trademark, and copyright complaints.', best: ['IP Complaints', 'Copyright/Trademark', 'Rights Owner Disputes'] },
        'g-verifier': { name: 'The Verifier', div: 'Authenticity Division', divClass: 'theme-silver', mission: 'Resolving inauthentic complaints and verification issues through careful supply chain mapping and document review.', best: ['Inauthentic Claims', 'Invoice Reviews', 'Verification Issues'] },
        'g-architect': { name: 'The Architect', div: 'Growth Division', divClass: 'theme-gold', mission: 'Establishing a foundational compliance matrix focused on structural business strategy and sustainable expansion.', best: ['Account Health Bottlenecks', 'Structural Compliance Gaps', 'Listing Optimization'] },
        'g-investigator': { name: 'The Investigator', div: 'Recovery Division', divClass: 'theme-crimson', mission: 'Analyzing complex Amazon notifications and account history to discover true root causes behind severe Section 3 blocks.', best: ['Section 3 Enforcement', 'Dropshipping Violations', 'Fraud Investigations'] }
    };

    function updateGuardianPanel(key) {
        const data = guardianData[key];
        if(!data) return;

        document.getElementById('panel-name').innerText = data.name;
        const divEl = document.getElementById('panel-division');
        divEl.innerText = data.div;
        divEl.className = `badge ${data.divClass}`;

        document.getElementById('panel-mission').innerText = data.mission;
        
        const bestUl = document.getElementById('panel-best');
        bestUl.innerHTML = '';
        data.best.forEach(item => { bestUl.innerHTML += `<li>${item}</li>`; });
    }

    const orbitNodes = document.querySelectorAll('.orbit-node');
    orbitNodes.forEach(node => {
        node.addEventListener('click', () => {
            orbitNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            updateGuardianPanel(node.getAttribute('data-guardian'));
        });
    });

    if(window.innerWidth <= 768) {
        const circLayout = document.querySelector('.circular-layout');
        const mNavHTML = `
            <div class="mobile-nexus-select" style="display:flex; overflow-x:auto; gap:10px; margin-bottom:15px; scrollbar-width:none; padding-bottom:10px;">
                <button class="mobile-guardian-btn active" data-guardian="g-reinstator">The Reinstator</button>
                <button class="mobile-guardian-btn" data-guardian="g-investigator">The Investigator</button>
                <button class="mobile-guardian-btn" data-guardian="g-nexus">The Nexus</button>
                <button class="mobile-guardian-btn" data-guardian="g-guardian">The Guardian</button>
                <button class="mobile-guardian-btn" data-guardian="g-verifier">The Verifier</button>
            </div>
        `;
        circLayout.insertAdjacentHTML('afterbegin', mNavHTML);

        const mBtns = document.querySelectorAll('.mobile-guardian-btn');
        mBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                mBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateGuardianPanel(btn.getAttribute('data-guardian'));
            });
        });
    }

    /* =========================================
       4. CASE INTELLIGENCE TABS
       ========================================= */
    const caseData = {
        'suspension': {
            img: 'images/R-1.jpg',
            prob: 'Account suspended due to ODR velocity mismatch. Funds frozen.',
            inv: 'Identified a logistical bottleneck causing late shipments during Q4.',
            strat: 'Drafted a structural POA outlining new 3PL integration and inventory buffering.',
            out: 'Account restored within 72 hours.',
            quote: '"Helped us navigate a difficult suspension and get back to selling. The clarity they provided was exactly what we needed."',
            client: '- US MARKETPLACE SELLER'
        },
        'section3': {
            img: 'images/R-4.jpg',
            prob: 'Section 3 enforcement for dropshipping code of conduct.',
            inv: 'Traced conflicting tracking data back to supplier software glitch.',
            strat: 'Compiled a 365-day commercial ledger proving physical possession.',
            out: 'Section 3 cleared. All funds disbursed.',
            quote: '"We were stuck on a Section 3 review for weeks. Seller Integrity structured our evidence perfectly."',
            client: '- WHOLESALE SELLER'
        },
        'ip': {
            img: 'images/R-3.jpg',
            prob: 'Top performing ASIN blocked due to competitor trademark strike.',
            inv: 'Discovered invalid trademark registration class weaponized by the claimant.',
            strat: 'Submitted Letter of Authorization and invalidation legal brief.',
            out: 'Listing restored. Account health returned to 100%.',
            quote: '"They resolved an IP complaint that was threatening to shut down our top product overnight."',
            client: '- PRIVATE LABEL BRAND'
        },
        'verification': {
            img: 'images/R-2.jpg',
            prob: 'Inform Act KYC rejection halting disbursements.',
            inv: 'Address formatting mismatch between local tax documents and Seller Central.',
            strat: 'Executed certified document translation and structural alignment.',
            out: 'Profile Approved. Account Secured.',
            quote: '"Professional, responsive, and extremely knowledgeable about internal Amazon verification policies."',
            client: '- INTERNATIONAL BRAND OWNER'
        }
    };

    const caseTabs = document.querySelectorAll('.c-tab');
    caseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            caseTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const key = tab.getAttribute('data-case');
            const data = caseData[key];

            const imgEl = document.getElementById('case-img');
            imgEl.style.opacity = 0;
            setTimeout(() => {
                imgEl.src = data.img;
                imgEl.style.opacity = 0.8;
            }, 200);

            document.getElementById('c-prob').innerText = data.prob;
            document.getElementById('c-inv').innerText = data.inv;
            document.getElementById('c-strat').innerText = data.strat;
            document.getElementById('c-out').innerText = data.out;
            document.getElementById('c-quote').innerText = data.quote;
            document.getElementById('c-client').innerText = data.client;
        });
    });

    /* =========================================
       5. REQUEST SPECIALIST REVIEW (Form)
       ========================================= */
    let currentStep = 1;
    const totalSteps = 4;
    const formSteps = document.querySelectorAll('.form-step');
    const progressFill = document.getElementById('form-progress');
    const stepNumText = document.getElementById('step-num');

    function updateForm() {
        formSteps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.getAttribute('data-step')) === currentStep) {
                step.classList.add('active');
            }
        });
        if(progressFill) progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;
        if(stepNumText) stepNumText.innerText = currentStep;
    }

    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStepDiv = document.querySelector(`.form-step[data-step="${currentStep}"]`);
            const inputs = currentStepDiv.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if(input.type === 'radio') {
                    if(!document.querySelector(`input[name="${input.name}"]:checked`)) isValid = false;
                } else if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if(isValid) {
                if (currentStep < totalSteps) { currentStep++; updateForm(); }
            } else {
                alert("Please complete the required selection to proceed.");
            }
        });
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) { currentStep--; updateForm(); }
        });
    });

    /* =========================================
       6. MAGNETIC BUTTONS (Desktop Hover)
       ========================================= */
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            if(window.innerWidth > 768) {
                const position = btn.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            }
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    /* =========================================
       7. MOBILE BOTTOM NAV HIGHLIGHTING
       ========================================= */
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item:not(.mobile-nav-cta)');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    /* =========================================
       8. AUTO-SELECT FORM OPTIONS (INTELLIGENCE CONNECTION)
       ========================================= */
    document.querySelectorAll('a[href="#review-form"]').forEach(link => {
        link.addEventListener('click', (e) => {
            let autoAdvance = false;

            // Scenario A: Clicked from Guardian Panel
            if (link.closest('#guardians')) {
                const activeGuardian = document.querySelector('.orbit-node.active') || document.querySelector('.mobile-guardian-btn.active');
                if(activeGuardian) {
                    const gId = activeGuardian.getAttribute('data-guardian');
                    const gMap = {
                        'g-reinstator': 'Suspension',
                        'g-investigator': 'Section 3',
                        'g-nexus': 'Suspension',
                        'g-guardian': 'IP Claim',
                        'g-verifier': 'Growth',
                        'g-architect': 'Growth'
                    };
                    const issueInput = document.querySelector(`input[name="issue"][value="${gMap[gId]}"]`);
                    if (issueInput) {
                        issueInput.checked = true;
                        autoAdvance = true;
                    }
                }
            } 
            // Scenario B: Clicked from Diagnostic Results
            else if (link.closest('#matcher-result')) {
                if (window.selectedIssue) {
                    const issueMap = {
                        'suspension': 'Suspension',
                        'section3': 'Section 3',
                        'related': 'Suspension',
                        'ip': 'IP Claim',
                        'verification': 'Growth',
                        'growth': 'Growth'
                    };
                    const issueInput = document.querySelector(`input[name="issue"][value="${issueMap[window.selectedIssue]}"]`);
                    if (issueInput) {
                        issueInput.checked = true;
                        autoAdvance = true;
                    }
                }
                if (selectedStatus) {
                    const statusMap = {
                        'deactivated': 'Critical',
                        'at-risk': 'Medium',
                        'listings': 'High',
                        'active': 'Medium'
                    };
                    const urgencyInput = document.querySelector(`input[name="urgency"][value="${statusMap[selectedStatus]}"]`);
                    if (urgencyInput) urgencyInput.checked = true;
                }
            }

            // Auto-advance
            if (autoAdvance && currentStep === 1) {
                currentStep = 2;
                updateForm();
            }
        });
    });
});
