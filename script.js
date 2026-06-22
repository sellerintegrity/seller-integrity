/* ==========================================================================
   SELLER INTEGRITY V15: GLOBAL DATA ARCHITECTURE (DRY)
   ========================================================================== */
   
const guardianData = {
    'reinstator': { 
        name: 'The Reinstator', div: 'Recovery Division', color: 'var(--accent-gold)', 
        threats: [{n: 'Account Suspensions', l: 100}, {n: 'Section 3', l: 85}, {n: 'Appeals', l: 90}, {n: 'Funds Held', l: 70}], 
        mission: 'Restoring suspended Amazon accounts through strategic investigation and structural appeals.', 
        docs: ['Original Performance Notification', 'Root Cause Evidence', 'Historical Case Logs'] 
    },
    'investigator': { 
        name: 'The Investigator', div: 'Recovery Division', color: 'var(--g-cyan)', 
        threats: [{n: 'Section 3', l: 100}, {n: 'Fraud Forensics', l: 95}, {n: 'Forged Docs', l: 90}, {n: 'Dropshipping', l: 85}], 
        mission: 'Analyzing complex Amazon notifications and account history to discover true root causes behind severe Section 3 blocks.', 
        docs: ['365-Day Commercial Ledger', 'Supplier Verification', 'Tracking Audits'] 
    },
    'nexus': { 
        name: 'The Nexus', div: 'Recovery Division', color: 'var(--g-purple)', 
        threats: [{n: 'Related Accounts', l: 100}, {n: 'Identity Ops', l: 90}, {n: 'Global Linkage', l: 85}, {n: 'Verification', l: 60}], 
        mission: 'Untangling complex account associations and resolving related account suspensions to clarify identity separation.', 
        docs: ['Corporate Structuring Docs', 'Affidavits of Separation', 'Banking Artifacts'] 
    },
    'guardian': { 
        name: 'The Guardian', div: 'Compliance Division', color: 'var(--g-crimson)', 
        threats: [{n: 'IP Complaints', l: 100}, {n: 'Trademarks', l: 95}, {n: 'Rights Disputes', l: 90}, {n: 'Counterfeits', l: 85}], 
        mission: 'Protecting listings and account health from debilitating intellectual property, trademark, and copyright complaints.', 
        docs: ['Letters of Authorization', 'Retraction Agreements', 'Licensing Contracts'] 
    },
    'verifier': { 
        name: 'The Verifier', div: 'Authenticity Division', color: 'var(--g-silver)', 
        threats: [{n: 'Inform Act', l: 100}, {n: 'KYC Checks', l: 95}, {n: 'Invoice Audits', l: 90}, {n: 'Identity', l: 95}], 
        mission: 'Resolving inauthentic complaints and verification issues through careful supply chain mapping and document review.', 
        docs: ['Government IDs', 'Notarized Utility Bills', 'Supply Chain Maps'] 
    },
    'architect': { 
        name: 'The Architect', div: 'Growth Division', color: 'var(--g-royal)', 
        threats: [{n: 'Brand Registry', l: 100}, {n: 'Catalog Ops', l: 90}, {n: 'Risk Audits', l: 85}, {n: 'Account Health', l: 80}], 
        mission: 'Establishing a foundational compliance matrix focused on structural business strategy and sustainable expansion.', 
        docs: ['Brand Certificates', 'GS1 Validation', 'Account Health Maps'] 
    }
};

const processData = {
    1: { phase: 'PHASE 01', time: '1 Business Day', title: 'Intelligence Intake', desc: 'We review your performance notifications, account health history, enforcement actions, and supporting documentation.' },
    2: { phase: 'PHASE 02', time: '1-3 Days', title: 'Evidence Audit', desc: 'We identify weaknesses, missing documentation, policy conflicts, and structural compliance gaps.' },
    3: { phase: 'PHASE 03', time: 'Same Day', title: 'Guardian Assignment', desc: 'Your case is assigned to the specialist best suited for your account situation.' },
    4: { phase: 'PHASE 04', time: '2-5 Days', title: 'Strategy Deployment', desc: 'We build a customized roadmap designed specifically for your account history and enforcement issue.' },
    5: { phase: 'PHASE 05', time: 'Case Dependent', title: 'Case Execution', desc: 'Appeals, documentation packages, escalation paths, and supporting evidence are prepared and submitted.' },
    6: { phase: 'PHASE 06', time: 'Ongoing', title: 'Future Protection', desc: 'Once the issue is resolved, we help reduce future compliance risks through operational guidance.' }
};

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
       2. AMAZON ACCOUNT INTELLIGENCE SCAN™
       ========================================= */
    let selectedIssue = null;
    let selectedStatus = null;
    let selectedMarket = null;
    
    window.globalDiagIssue = null; 
    window.globalDiagStatus = null;
    window.globalDiagMarket = null;
    
    const issueCards = document.querySelectorAll('#diag-q1 .i-card');
    const statusCards = document.querySelectorAll('#diag-q2 .i-card');
    const marketChips = document.querySelectorAll('#diag-q3 .m-chip');
    
    const runScanBtn = document.getElementById('run-scan-btn');
    const scanContainer = document.getElementById('scan-action-container');
    const reportPanel = document.getElementById('diagnostic-report');

    function generateReport() {
        if (!selectedIssue || !selectedStatus || !selectedMarket) return;

        let gName = "THE ADVISOR", severity = "MODERATE", complexity = "MODERATE", score = 50;
        let docs = ['Performance Notification', 'Historical Logs'];
        let missingDocs = ['✗ Custom Strategic Review'];
        let presentDocs = ['✓ Account Audit'];
        let fillClass = "fill-silver";

        if(selectedIssue === 'suspension') {
            gName = "THE REINSTATOR"; complexity = "HIGH"; score = 68;
            docs = ['Original Performance Notification', 'Root Cause Evidence', 'Supplier Invoices'];
            missingDocs = ['✗ Root Cause Explanation', '✗ Preventative Measures'];
            presentDocs = ['✓ Initial Notification'];
        } else if (selectedIssue === 'section3') {
            gName = "THE INVESTIGATOR"; complexity = "SEVERE"; score = 45;
            docs = ['365-Day Commercial Ledger', 'Supplier Verification', 'Tracking Audits'];
            missingDocs = ['✗ Ledger Verification', '✗ Tracking Cross-Check'];
            presentDocs = ['✓ Suspension Notice'];
        } else if (selectedIssue === 'related') {
            gName = "THE NEXUS"; complexity = "HIGH"; score = 55;
            docs = ['Corporate Structuring Docs', 'Affidavits of Separation', 'Banking Artifacts'];
            missingDocs = ['✗ Identity Separation Proof', '✗ Entity Documentation'];
            presentDocs = ['✓ Enforcement Notice'];
        } else if (selectedIssue === 'ip') {
            gName = "THE GUARDIAN"; complexity = "MODERATE"; score = 72;
            docs = ['Letters of Authorization', 'Retraction Agreements', 'Licensing Contracts'];
            missingDocs = ['✗ Valid LOA', '✗ Rights Owner Contact'];
            presentDocs = ['✓ ASIN Warning'];
        } else if (selectedIssue === 'inauthentic' || selectedIssue === 'verification') {
            gName = "THE VERIFIER"; complexity = "HIGH"; score = 80;
            docs = ['Government IDs', 'Notarized Utility Bills', 'Supply Chain Maps'];
            missingDocs = ['✗ Certified Translations', '✗ Formatted Invoices'];
            presentDocs = ['✓ Identification Docs'];
        } else if (selectedIssue === 'growth' || selectedIssue === 'grow') {
            gName = "THE ARCHITECT"; complexity = "LOW"; score = 90;
            docs = ['Brand Certificates', 'GS1 Validation', 'Account Health Maps'];
            missingDocs = ['✗ Advanced Mapping'];
            presentDocs = ['✓ Current Catalog', '✓ Basic Operations'];
        } else if (selectedIssue === 'other') {
            gName = "THE ADVISOR"; complexity = "EVALUATING"; score = 0;
            docs = ['Performance Notification', 'Historical Logs'];
            missingDocs = ['✗ Custom Strategic Review'];
            presentDocs = ['✓ Initial Audit Request'];
        }

        if(selectedStatus === 'deactivated') { severity = "CRITICAL"; fillClass = "fill-crimson"; }
        else if(selectedStatus === 'funds-held' || selectedStatus === 'blocked') { severity = "HIGH"; fillClass = "fill-gold"; }
        else if(selectedStatus === 'review') { severity = "MODERATE"; fillClass = "fill-blue"; }
        else if(selectedStatus === 'active') { severity = "LOW"; fillClass = "fill-silver"; }
        else { severity = "EVALUATING"; fillClass = "fill-silver"; }

        let barCount = 10; let fillCount = 0;
        if(severity === "CRITICAL") fillCount = 10;
        if(severity === "HIGH") fillCount = 8;
        if(severity === "MODERATE") fillCount = 5;
        if(severity === "LOW") fillCount = 3;

        let sBarsHtml = "";
        for(let i=0; i<barCount; i++) {
            if(i < fillCount) {
                sBarsHtml += `<div class="s-bar ${fillClass}"></div>`;
            } else {
                sBarsHtml += `<div class="s-bar"></div>`;
            }
        }

        document.getElementById('out-guardian').innerText = gName;
        document.getElementById('out-risk').innerText = severity;
        
        const riskTextEl = document.getElementById('out-risk');
        riskTextEl.className = 'text-white font-bold'; 
        if(severity === "CRITICAL") riskTextEl.classList.add('text-crimson');
        else if(severity === "HIGH") riskTextEl.classList.add('text-gold');
        else if(severity === "MODERATE") riskTextEl.style.color = 'var(--accent-blue)';
        else riskTextEl.style.color = 'var(--accent-silver)';

        document.getElementById('out-sev-bars').innerHTML = sBarsHtml;
        document.getElementById('out-complexity').innerText = complexity;
        document.getElementById('out-score').innerText = score;

        const docsUl = document.getElementById('out-docs');
        docsUl.innerHTML = '';
        docs.forEach(item => { docsUl.innerHTML += `<li>${item}</li>`; });

        const missingDiv = document.getElementById('out-missing-docs');
        let mHtml = `<div class="text-white mb-1 font-bold">Current Elements:</div>`;
        missingDocs.forEach(item => { mHtml += `<div class="text-crimson mb-1">${item}</div>`; });
        presentDocs.forEach(item => { mHtml += `<div style="color: #22c55e;">${item}</div>`; });
        missingDiv.innerHTML = mHtml;
    }

    // Auto-update report if already visible
    issueCards.forEach(card => {
        card.addEventListener('click', () => {
            issueCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedIssue = card.getAttribute('data-issue');
            window.globalDiagIssue = selectedIssue;
            if (!reportPanel.classList.contains('hidden')) generateReport();
        });
    });

    statusCards.forEach(card => {
        card.addEventListener('click', () => {
            statusCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedStatus = card.getAttribute('data-status');
            window.globalDiagStatus = selectedStatus;
            if (!reportPanel.classList.contains('hidden')) generateReport();
        });
    });

    marketChips.forEach(chip => {
        chip.addEventListener('click', () => {
            marketChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedMarket = chip.getAttribute('data-market');
            window.globalDiagMarket = selectedMarket;
            if (!reportPanel.classList.contains('hidden')) generateReport();
        });
    });

    if (runScanBtn) {
        runScanBtn.addEventListener('click', () => {
            if (!selectedIssue || !selectedStatus || !selectedMarket) {
                alert("Please select your Issue, Status, and Marketplace to run the Intelligence Scan.");
                return;
            }
            generateReport();
            scanContainer.style.display = 'none';
            reportPanel.classList.remove('hidden');
        });
    }

    /* =========================================
       3. LIVING GUARDIAN COMMAND CENTER 
       ========================================= */

    let currentRingAngle = 0;
    let targetRingAngle = 0;
    let isFocusing = false;
    const ringElement = document.getElementById('orbit-ring');
    const coreElement = document.getElementById('orbit-core');
    const radarSweep = document.getElementById('command-radar');
    const contentPanel = document.getElementById('panel-actual-content');
    const overlay = document.getElementById('deploy-overlay');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateOrbit() {
        if (prefersReducedMotion) return;
        
        if (isFocusing) {
            currentRingAngle += (targetRingAngle - currentRingAngle) * 0.08;
            if (Math.abs(targetRingAngle - currentRingAngle) < 0.5) {
                currentRingAngle = targetRingAngle;
                isFocusing = false;
            }
        } else {
            currentRingAngle -= 0.04; 
        }

        if (ringElement) {
            ringElement.style.setProperty('--ring-angle', `${currentRingAngle}deg`);
        }
        requestAnimationFrame(animateOrbit);
    }
    
    if (!prefersReducedMotion) {
        requestAnimationFrame(animateOrbit);
    }

    function updateGuardianPanel(key, nodeAngle) {
        const data = guardianData[key];
        if(!data) return;

        contentPanel.classList.add('fade-out');
        radarSweep.classList.add('fast');
        
        coreElement.style.borderColor = data.color;
        coreElement.style.boxShadow = `0 0 30px ${data.color}`;

        targetRingAngle = -nodeAngle;
        let diff = (targetRingAngle - currentRingAngle) % 360;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        targetRingAngle = currentRingAngle + diff;
        isFocusing = true;
        
        if (prefersReducedMotion) {
            ringElement.style.setProperty('--ring-angle', `${targetRingAngle}deg`);
        }

        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('hidden');
            
            document.getElementById('panel-name').innerText = `${data.name.toUpperCase()} DEPLOYED`;
            document.getElementById('panel-div').innerText = data.div.toUpperCase();

            let threatsHTML = '';
            data.threats.forEach(t => {
                threatsHTML += `
                    <div class="threat-row">
                        <div class="threat-label">${t.n}</div>
                        <div class="threat-bar-bg">
                            <div class="threat-fill" style="width: 0%; background: ${data.color}; box-shadow: 0 0 10px ${data.color};" data-width="${t.l}%"></div>
                        </div>
                    </div>
                `;
            });
            document.getElementById('panel-threats').innerHTML = threatsHTML;

            document.getElementById('panel-mission').innerText = data.mission;
            
            const docsUl = document.getElementById('panel-docs-orbit');
            if(docsUl) {
                docsUl.innerHTML = '';
                data.docs.forEach(item => { docsUl.innerHTML += `<li>${item}</li>`; });
            }
            
            const deployBtns = document.querySelectorAll('.deploy-btn');
            deployBtns.forEach(btn => {
                btn.setAttribute('data-auto', data.threats[1].n === 'Section 3' ? 'Section 3' : data.threats[0].n === 'IP Complaints' ? 'IP Claim' : data.threats[0].n === 'Related Accounts' ? 'Related Account' : data.threats[0].n === 'Account Suspensions' ? 'Suspension' : data.threats[0].n === 'Inform Act' ? 'Verification' : 'Growth');
            });

            contentPanel.classList.remove('fade-out');

            setTimeout(() => {
                document.querySelectorAll('.threat-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }, 50);

        }, 600);

        setTimeout(() => { radarSweep.classList.remove('fast'); }, 2000);
    }

    const orbitNodes = document.querySelectorAll('.orbit-node');
    orbitNodes.forEach(node => {
        node.addEventListener('click', () => {
            orbitNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            updateGuardianPanel(node.getAttribute('data-guardian'), parseFloat(node.getAttribute('data-angle')));
        });
    });

    // Initialize Default State
    setTimeout(() => {
        const defaultNode = document.querySelector('.orbit-node.active');
        if (defaultNode) {
            const key = defaultNode.getAttribute('data-guardian');
            const data = guardianData[key];
            
            let threatsHTML = '';
            data.threats.forEach(t => {
                threatsHTML += `
                    <div class="threat-row">
                        <div class="threat-label">${t.n}</div>
                        <div class="threat-bar-bg">
                            <div class="threat-fill" style="width: ${t.l}%; background: ${data.color}; box-shadow: 0 0 10px ${data.color};"></div>
                        </div>
                    </div>
                `;
            });
            document.getElementById('panel-threats').innerHTML = threatsHTML;
            
            const docsUl = document.getElementById('panel-docs-orbit');
            if(docsUl) {
                docsUl.innerHTML = '';
                data.docs.forEach(item => { docsUl.innerHTML += `<li>${item}</li>`; });
            }
        }
    }, 100);

    /* =========================================
       4. GLOBAL BLUR / CLICK-AWAY LISTENER
       ========================================= */
    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.m-chip') || e.target.closest('.i-card')) {
            return;
        }

        const cmdLayout = document.querySelector('.circular-layout');
        if (cmdLayout && !cmdLayout.contains(e.target)) {
            if (contentPanel && !contentPanel.classList.contains('fade-out')) {
                contentPanel.classList.add('fade-out');
                orbitNodes.forEach(n => n.classList.remove('active'));
                if (coreElement) {
                    coreElement.style.borderColor = 'var(--accent-gold)';
                    coreElement.style.boxShadow = '0 0 20px rgba(212, 166, 79, 0.2)';
                }
                isFocusing = false; 
            }
        }
    });

    /* =========================================
       5. THE SELLER INTEGRITY PROCESS (Timeline)
       ========================================= */
    const processNodes = document.querySelectorAll('.t-node');
    const processFill = document.getElementById('t-fill');
    const pPanel = document.getElementById('t-panel');
    const pPhase = document.getElementById('p-phase');
    const pTime = document.getElementById('p-time');
    const pTitle = document.getElementById('p-title');
    const pDesc = document.getElementById('p-desc');

    processNodes.forEach((node, index) => {
        ['mouseenter', 'click', 'touchstart'].forEach(evt => {
            node.addEventListener(evt, (e) => {
                processNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');

                const progress = (index / (processNodes.length - 1)) * 100;
                if(window.innerWidth > 768) {
                    processFill.style.width = `${progress}%`;
                    processFill.style.height = `100%`;
                } else {
                    processFill.style.height = `${progress}%`;
                    processFill.style.width = `100%`;
                }

                pPanel.classList.add('fade-out');
                
                setTimeout(() => {
                    const data = processData[index + 1];
                    pPhase.innerText = data.phase;
                    pTime.innerText = data.time;
                    pTitle.innerText = data.title;
                    pDesc.innerText = data.desc;
                    
                    pPanel.classList.remove('fade-out');
                }, 300);
            }, { passive: true });
        });
    });

    /* =========================================
       6. REQUEST SPECIALIST REVIEW (Form Logic)
       ========================================= */
    window.currentStep = 1;
    const totalSteps = 4;

    window.updateForm = function() {
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.add('hidden');
            step.classList.remove('active');
            if (parseInt(step.getAttribute('data-step')) === window.currentStep) {
                step.classList.remove('hidden');
                step.classList.add('active');
            }
        });
        const progressFill = document.getElementById('form-progress');
        const stepNumText = document.getElementById('step-num');
        if(progressFill) progressFill.style.width = `${(window.currentStep / totalSteps) * 100}%`;
        if(stepNumText) stepNumText.innerText = window.currentStep;
    }

    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStepDiv = document.querySelector(`.form-step[data-step="${window.currentStep}"]`);
            if(!currentStepDiv) return;

            let isValid = true;
            
            const radioGroup = currentStepDiv.querySelector('.radio-group');
            if (radioGroup) {
                const visibleRadios = Array.from(radioGroup.querySelectorAll('input[type="radio"]')).filter(r => r.closest('label').offsetParent !== null);
                const anyChecked = visibleRadios.some(r => r.checked);
                if (!anyChecked && visibleRadios.length > 0) {
                    isValid = false;
                }
            }

            const textInputs = currentStepDiv.querySelectorAll('input[required], textarea[required], select[required]');
            textInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if(isValid) {
                if (window.currentStep < totalSteps) { 
                    window.currentStep++; 
                    window.updateForm(); 
                }
            } else {
                alert("Please complete the required selection to proceed.");
            }
        });
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.currentStep > 1) { 
                window.currentStep--; 
                window.updateForm(); 
            }
        });
    });

    /* =========================================
       7. DATA SYNC (Deploy Link Overrides)
       ========================================= */
    function syncDiagnosticToForm(presetIssue) {
        let maxStep = 1;

        const issueVal = presetIssue || window.globalDiagIssue;
        if (issueVal) {
            const issueMap = {
                'suspension': 'Suspension',
                'section3': 'Section 3',
                'related': 'Related Account',
                'ip': 'IP Claim',
                'inauthentic': 'Inauthentic',
                'verification': 'Verification',
                'growth': 'Growth',
                'grow': 'Growth',
                'other': 'Other'
            };
            const mappedIssue = issueMap[issueVal] || issueVal;
            const input = document.querySelector(`input[name="issue"][value="${mappedIssue}"]`);
            if (input) { 
                input.checked = true; 
                maxStep = 2; 
            }
        }

        if (window.globalDiagMarket) {
            const marketMap = { 'US': 'US', 'EU': 'EU', 'UK': 'UK', 'India': 'India', 'Canada': 'Canada', 'Global': 'Global' };
            const mappedMarket = marketMap[window.globalDiagMarket] || 'Global';
            const input = document.querySelector(`input[name="marketplace"][value="${mappedMarket}"]`);
            if (input) { 
                input.checked = true; 
                if(maxStep === 2) maxStep = 3; 
            }
        }

        if (window.globalDiagStatus) {
            const statusMap = { 'deactivated': 'Deactivated', 'funds-held': 'Funds Held', 'blocked': 'Listings Blocked', 'active': 'Active', 'review': 'Under Review', 'other': 'Other' };
            const mappedStatus = statusMap[window.globalDiagStatus] || 'Other';
            const input = document.querySelector(`input[name="urgency"][value="${mappedStatus}"]`);
            if (input) { 
                input.checked = true; 
                if(maxStep === 3) maxStep = 4; 
            }
        }

        window.currentStep = maxStep;
        window.updateForm();
    }

    document.querySelectorAll('a[href="#review-form"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hasAttribute('data-auto')) {
                syncDiagnosticToForm(link.getAttribute('data-auto'));
            } else {
                syncDiagnosticToForm();
            }
        });
    });

    /* =========================================
       8. MAGNETIC BUTTONS 
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
       9. MOBILE BOTTOM NAV HIGHLIGHTING
       ========================================= */
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item:not(.mobile-nav-cta)');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    /* =========================================
       10. TERMINAL TYPEWRITER EFFECT
       ========================================= */
    const terminalSection = document.querySelector('.terminal-footer');
    const typeWriterEl = document.getElementById('typewriter-text');
    let hasTyped = false;

    const messages = [
        "Establishing Connection...",
        "Connecting...",
        "Connection Secured.",
        "GUARDIAN NETWORK ONLINE."
    ];

    function typeSequence() {
        if (hasTyped || !typeWriterEl) return;
        hasTyped = true;
        
        let msgIndex = 0;
        
        function typeMsg() {
            if (msgIndex >= messages.length) return;
            const fullMsg = messages[msgIndex];
            let charIndex = 0;
            typeWriterEl.innerText = "";
            
            function typeChar() {
                if (charIndex < fullMsg.length) {
                    typeWriterEl.innerText += fullMsg.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 35); 
                } else {
                    msgIndex++;
                    setTimeout(typeMsg, msgIndex === messages.length ? 0 : 800); 
                }
            }
            typeChar();
        }
        typeMsg();
    }

    if (terminalSection && window.IntersectionObserver) {
        const terminalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeSequence, 500);
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        terminalObserver.observe(terminalSection);
    }

});
