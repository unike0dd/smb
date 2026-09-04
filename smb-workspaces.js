(() => {
  const $ = id => document.getElementById(id);
  const toast = message => {
    const target = $("toast");
    if (!target) return;
    target.textContent = message;
    target.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => target.classList.remove("show"), 2300);
  };

  const DATA = {
    talentacquisition: {
      title: "Talent Acquisition workspace",
      description: "One accountable path from authorized sourcing through signed contract and onboarding handoff.",
      tabs: ["Search & Sourcing", "Candidates", "Interviews", "Recruiting", "Hiring"],
      actions: ["Add candidate", "Create job", "Schedule interview"],
      stats: [["Candidates received", "128", "+18 this month"], ["In progress", "42", "11 need review"], ["Interviews", "19", "6 this week"], ["Offers awaiting approval", "4", "2 due today"]],
      tasks: [["Confirm candidate information", "Ana Torres · Warehouse Associate", "Due today"], ["Complete interview scorecard", "Marco Silva · Operations Lead", "Pending"], ["Submit for Hiring Review", "Lucía Vega · Data Analyst", "Approval required"], ["Review recruiter visibility consent", "7 sourced candidates", "Restricted"]],
      fields: ["Candidate", "Position", "Candidate source", "Assigned recruiter", "Current stage", "Consent status"],
      groups: [["Freelancers", "24 authorized profiles"], ["IndependentHR", "17 authorized profiles"], ["HR Pro", "31 authorized profiles"], ["SMBs", "14 authorized profiles"], ["Direct applicants", "36 applications"], ["Employee referrals", "6 referrals"]],
      stages: ["Received", "Under review", "Potential candidate", "Information confirmation", "Interest confirmed", "Interview requested", "Interview scheduled", "Interview completed", "Approved to recruit", "Hiring review", "Offer approval", "Offer sent", "Offer accepted", "Contract signed", "Onboarding", "Hired", "Not selected", "Withdrawn", "Archived"],
      records: [["Ana Torres", "Direct applicant · Warehouse Associate", "Information confirmation"], ["Marco Silva", "IndependentHR · Operations Lead", "Interview scheduled"], ["Lucía Vega", "Employee referral · Data Analyst", "Hiring review"]]
    },
    onboarding: {
      title: "Onboarding workspace",
      description: "Coordinate people, training, documents, access and equipment before final readiness approval.",
      tabs: ["New Employees", "Onboarding Plans", "Training", "Equipment & Access", "Documents", "Readiness Approvals", "Reports"],
      actions: ["Start onboarding", "Add training", "Issue equipment"],
      stats: [["New employees", "8", "3 start this week"], ["Plans on track", "6", "75%"], ["Training pending", "11", "4 overdue"], ["Ready for approval", "3", "Final review"]],
      tasks: [["Confirm first-week plan", "Lucía Vega · Starts Sep 8", "Due today"], ["Record laptop issued", "Asset GS-2048", "Pending"], ["Complete data-protection training", "Marco Silva", "Overdue"], ["Final readiness approval", "Ana Torres", "Approval required"]],
      fields: ["Employee", "Position", "Start date", "Manager", "Onboarding owner", "Trainer", "HR Manager", "Completion percentage"],
      groups: [["Required documents", "6 of 7 complete"], ["Required training", "4 of 6 complete"], ["Systems access", "3 requests pending"], ["Equipment", "2 items to issue"], ["Exceptions", "1 open exception"], ["Final readiness", "Awaiting HR"]],
      records: [["Lucía Vega", "Data Analyst · Sep 8", "72% complete"], ["Ana Torres", "Warehouse Associate · Sep 10", "Ready for approval"], ["Marco Silva", "Operations Lead · Sep 15", "Training pending"]]
    },
    employees: {
      title: "Employees workspace",
      description: "Employment records, organization, schedules, leave, benefits and performance with permission-aware access.",
      tabs: ["Employee Directory", "Employment Details", "Organization", "Time & Attendance", "Leave", "Benefits", "Performance", "Documents"],
      actions: ["Add employee", "Request leave", "Create review"],
      stats: [["Active employees", "68", "+5 this month"], ["Absent today", "6", "9% of team"], ["Leave requests", "7", "3 awaiting review"], ["Reviews due", "9", "This month"]],
      tasks: [["Review ordinary leave", "Sofía Ramírez · Sep 11", "Manager review"], ["Confirm schedule change", "Luis Mendoza · Temporary", "Pending"], ["Acknowledge benefit update", "Customer Team", "12 remaining"], ["Complete performance review", "Morgan Lee", "Due Sep 18"]],
      fields: ["Employee ID", "Legal name", "Preferred name", "Work email", "Position", "Department", "Manager", "Employment status"],
      groups: [["Work schedules", "61 standard · 7 custom"], ["Vacation", "43 requests YTD"], ["Sick leave", "18 requests YTD"], ["Study leave", "5 active arrangements"], ["Benefits eligible", "64 employees"], ["Restricted compensation", "Owner and HR only"]],
      records: [["Sofía Ramírez", "Supervisor · Operations", "Active"], ["Luis Mendoza", "Staff · Customer Team", "Active"], ["Morgan Lee", "Management Admin", "Active"]]
    },
    businessapprovals: {
      title: "Approvals workspace",
      description: "A central, action-specific queue for requests, decisions, authentication evidence and audit references.",
      tabs: ["Pending My Approval", "Submitted by Me", "Approved", "Rejected", "Expired", "Cancelled", "Full History"],
      actions: ["New approval request", "Export history"],
      stats: [["Pending", "12", "4 high priority"], ["Due today", "5", "2 hiring"], ["Approved this month", "38", "94% on time"], ["Rejected", "3", "Reasons recorded"]],
      tasks: [["Salary change", "HR + SMB Owner", "High risk"], ["Hiring decision", "Hiring Manager + HR", "Due today"], ["Delegate appointment", "SMB Owner", "Authentication required"], ["Equipment return", "Employee + Manager", "Acknowledgment"]],
      fields: ["Request type", "Subject", "Requested change", "Previous value", "Proposed value", "Required approver", "Risk level", "Due date"],
      groups: [["Ordinary leave", "Supervisor or Manager"], ["Extended leave", "Manager and HR"], ["Salary change", "HR and SMB Owner"], ["Hiring decision", "Hiring Manager and HR"], ["RBAC promotion", "Management + Owner final"], ["Contract acceptance", "Signer + authorized company signer"]],
      records: [["APR-1042", "Hiring decision · Lucía Vega", "Pending HR"], ["APR-1041", "Ordinary leave · Sofía Ramírez", "Manager approved"], ["APR-1039", "Delegate appointment · Morgan Lee", "Owner authentication"]]
    },
    documents: {
      title: "Documents workspace",
      description: "Separate reusable templates from generated, person-specific records with complete version and delivery history.",
      tabs: ["Generated Documents", "Templates", "Contracts", "Employment Letters", "Onboarding", "Invoices", "Client Reports"],
      actions: ["Upload document", "Create template", "Generate PDF"],
      stats: [["Awaiting signature", "5", "2 expire soon"], ["Sent this month", "42", "96% delivered"], ["Templates", "18", "3 updated"], ["Expiring", "7", "Within 30 days"]],
      tasks: [["Send employment contract", "Lucía Vega · v2", "Ready"], ["Review offer-letter template", "HR Standard · v6", "Due Sep 12"], ["Confirm signed contract", "Ana Torres", "Awaiting signature"], ["Renew client service agreement", "Northstar", "Expires soon"]],
      fields: ["Document type", "Owner", "Related person or client", "Version", "Status", "Expiration date"],
      groups: [["Interview invitations", "8 templates"], ["Progression notices", "4 templates"], ["Offer letters", "6 generated"], ["Employment contracts", "5 awaiting signature"], ["Benefits summaries", "3 current"], ["Invoices", "12 this month"]],
      records: [["Employment Contract — Lucía Vega", "v2 · Sent by Elena Park", "Awaiting signature"], ["Interview Invitation — Ana Torres", "v1 · Viewed Sep 2", "Viewed"], ["Northstar Invoice INV-208", "PDF · Sent Sep 1", "Delivered"]]
    },
    directory: {
      title: "People Directory workspace",
      description: "Permission-aware contact records for the people who participate in work, hiring and client relationships.",
      tabs: ["Employees", "Managers", "Supervisors", "HR Staff", "Recruiters", "Interviewers", "Delegates", "Candidates", "Clients", "Billing Contacts"],
      actions: ["Add person", "Export directory"],
      stats: [["Employees", "68", "64 contactable"], ["Authorized staff", "14", "2 delegates"], ["Candidates", "42", "Consent-filtered"], ["Client contacts", "11", "4 billing contacts"]],
      tasks: [["Verify alternate contact", "Luis Mendoza", "Pending"], ["Review candidate visibility", "7 candidate profiles", "Restricted"], ["Update billing contact", "Northstar", "Due today"], ["Deactivate former delegate", "Access ended Sep 1", "Owner approval"]],
      fields: ["Contact type", "Full name", "Role", "Work email", "Phone", "Organization", "Visibility", "Status"],
      groups: [["Employees", "68 records"], ["Managers", "7 records"], ["HR staff", "4 records"], ["Recruiters", "5 records"], ["Authorized delegates", "2 active"], ["Billing contacts", "4 records"]],
      records: [["Sofía Ramírez", "Supervisor · Operations", "Visible"], ["Elena Park", "SMB Owner", "Restricted"], ["Dana Ruiz", "Northstar · Billing", "Client contact"]]
    },
    clientbilling: {
      title: "Clients & Billing workspace",
      description: "Keep client operations, service agreements, open positions, invoices and payment status clearly separated.",
      tabs: ["Clients", "Service Agreements", "Open Positions", "Candidates Submitted", "Draft Invoices", "Sent", "Paid", "Overdue", "Credit Notes"],
      actions: ["Add client", "Create invoice", "Generate PDF"],
      stats: [["Active clients", "11", "+2 this quarter"], ["Open invoices", "$18.6k", "6 invoices"], ["Paid MTD", "$42.8k", "+12%"], ["Overdue", "$3.2k", "2 invoices"]],
      tasks: [["Approve draft invoice", "INV-209 · Northstar", "$6,400"], ["Send payment reminder", "INV-201 · Brightline", "8 days overdue"], ["Renew service agreement", "Atlas", "Expires Sep 30"], ["Confirm billing contact", "Northstar", "Pending"]],
      fields: ["Client", "Billing contact", "Invoice number", "Issue date", "Due date", "Currency", "Amount", "Status"],
      groups: [["Draft invoices", "3 · $12.4k"], ["Approved invoices", "2 · $8.1k"], ["Sent invoices", "6 · $18.6k"], ["Paid invoices", "14 · $42.8k"], ["Overdue invoices", "2 · $3.2k"], ["Credit notes", "1 · $480"]],
      records: [["Northstar", "3 open positions · INV-209", "Draft invoice"], ["Atlas", "1 open position · Agreement renewal", "Needs action"], ["Brightline", "INV-201 · 8 days overdue", "Overdue"]]
    },
    businessanalytics: {
      title: "Reports & Analytics workspace",
      description: "Recruiting, onboarding, workforce and management-finance reporting with consistent filters and defensible metrics.",
      tabs: ["Recruiting Funnel", "Onboarding", "Workforce", "Financial Overview", "Month to Date", "Year to Date", "Milestones"],
      actions: ["Create report", "Export PDF", "Save view"],
      stats: [["Time to interview", "6.2 days", "-1.1 days"], ["Time to hire", "24 days", "On target"], ["Offer acceptance", "84%", "+4 points"], ["Onboarding completion", "91%", "+3 points"]],
      tasks: [["Review source performance", "IndependentHR leads conversion", "This month"], ["Investigate withdrawal rate", "Operations candidates", "Needs review"], ["Publish MTD report", "Management reporting", "Due Sep 5"], ["Update hiring milestone", "Warehouse expansion", "68% complete"]],
      fields: ["Date range", "Department", "Position", "Recruiter", "Candidate source", "Hiring manager", "Location", "Employment type"],
      groups: [["Revenue MTD", "$48.6k"], ["Expenses MTD", "$31.2k"], ["Payroll summary", "$24.8k"], ["Accounts receivable", "$18.6k"], ["Client billing", "11 active clients"], ["Milestones", "7 of 10 on track"]],
      records: [["Recruiting performance", "Candidates through offer acceptance", "Updated today"], ["Onboarding readiness", "Training, equipment and approvals", "Updated today"], ["Financial overview", "Management reporting only", "Updated Sep 1"]]
    },
    settings: {
      title: "Settings workspace",
      description: "Business identity, personal profile, security, delegates, permissions and accountable activity history.",
      tabs: ["Business Profile", "My Profile", "Security", "Delegates", "Permissions", "Activity"],
      actions: ["Save settings", "Add delegate"],
      stats: [["MFA coverage", "92%", "2 accounts pending"], ["Active delegates", "2", "Owner approved"], ["Active sessions", "6", "3 trusted devices"], ["Permission changes", "4", "This month"]],
      tasks: [["Enable MFA", "2 privileged accounts", "High priority"], ["Review delegate hours", "Morgan Lee", "Owner approval"], ["Confirm recovery methods", "SMB Owner account", "Due today"], ["Review permission change", "Sofía Ramírez", "Audit ready"]],
      fields: ["Business name", "Legal business name", "Tax number", "Primary business email", "Business phone", "Timezone", "Currency", "Address"],
      groups: [["Business Profile", "Legal and operating identity"], ["My Profile", "Name, username and recovery"], ["Security", "MFA, sessions and trusted devices"], ["Delegates", "Scope, dates and owner approval"], ["Permissions", "Role-based access controls"], ["Activity", "Login, approval and account history"]],
      records: [["Morgan Lee", "Delegate · Mon–Fri 08:00–17:00", "Active"], ["Sofía Ramírez", "Permission change · Hiring requested", "Owner review"], ["Session GS-8821", "Trusted device · Signed in Sep 2", "Active"]]
    }
  };

  const stageMarkup = stages => `<div class="pipeline">${stages.map((stage, index) => `<div class="pipeline-stage"><b>${String(index + 1).padStart(2, "0")}</b><span>${stage}</span></div>`).join("")}</div>`;
  const tilesMarkup = groups => `<div class="group-grid">${groups.map(group => `<article class="group-tile"><b>${group[0]}</b><span>${group[1]}</span></article>`).join("")}</div>`;
  const statsMarkup = stats => `<section class="workspace-summary">${stats.map(item => `<article><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></article>`).join("")}</section>`;
  const tasksMarkup = tasks => `<div class="task-list">${tasks.map((task, index) => `<article class="workspace-task"><div class="workspace-task-main"><b>${task[0]}</b><small>${task[1]}</small></div><div class="workspace-task-actions"><span class="status-chip ${/risk|restricted|overdue/i.test(task[2]) ? "restricted" : /pending|approval|due/i.test(task[2]) ? "pending" : ""}">${task[2]}</span><button class="mini-action" type="button" data-workspace-action="${task[0]}">Open</button>${index === tasks.length - 1 ? '<button class="mini-action danger" type="button" data-workspace-action="Archive request opened">Archive</button>' : ""}</div></article>`).join("")}</div>`;
  const recordsMarkup = records => `<div class="record-list">${records.map(record => `<article class="workspace-record"><div class="workspace-record-main"><b>${record[0]}</b><small>${record[1]}</small></div><span class="status-chip">${record[2]}</span></article>`).join("")}</div>`;
  const fieldsMarkup = (fields, tab) => `<form class="workspace-form"><div class="field-grid">${fields.map((field, index) => `<label>${field}${index === fields.length - 1 ? `<select aria-label="${field}"><option>Select</option><option>Active</option><option>Pending</option><option>Restricted</option></select>` : `<input type="text" aria-label="${field}" placeholder="${field}">`}</label>`).join("")}</div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Save ${tab} record</button></div></form>`;

  const funnelMarkup = () => {
    const values = [["128", "Received"], ["82", "Qualified"], ["61", "Confirmed"], ["44", "Interviewed"], ["29", "Approved"], ["18", "Offers"], ["15", "Accepted"], ["12", "Onboarded"]];
    return `<div class="funnel">${values.map(item => `<div class="funnel-step"><b>${item[0]}</b><span>${item[1]}</span></div>`).join("")}</div>`;
  };
  const chartMarkup = () => `<div class="bar-chart">${[["Confirmation rate", 74], ["Interview completion", 88], ["Interview → approval", 66], ["Offer acceptance", 84], ["Onboarding completion", 91]].map(item => `<div class="bar-row"><span>${item[0]}</span><div class="bar-track"><div class="bar-fill" style="width:${item[1]}%"></div></div><b>${item[1]}%</b></div>`).join("")}</div>`;
  const approvalMarkup = () => `<div class="approval-chain"><div class="approval-step done">Requester<br>Submitted</div><div class="approval-step done">Manager<br>Approved</div><div class="approval-step current">HR Manager<br>Reviewing</div><div class="approval-step">SMB Owner<br>When required</div><div class="approval-step">Audit<br>Recorded</div></div>`;

  const PEOPLE = {
    "Director": [["Elena Park", "Director"]],
    "Managers": [["Morgan Lee", "Manager"], ["Maggie Alvarez", "Manager"]],
    "Supervisors": [["Sofia Ramirez", "Supervisor"], ["Carlos Mendez", "Supervisor"]],
    "Staff": [["Ana Torres", "Staff"], ["Marco Silva", "Staff"], ["Lucia Vega", "Staff"], ["Luther McVeil", "Staff"], ["Art McDwell", "Staff"], ["Dana Ruiz", "Staff"], ["Nora Patel", "Staff"], ["James Okafor", "Staff"], ["Mia Chen", "Staff"], ["Owen Brooks", "Staff"], ["Isabel Costa", "Staff"], ["Noah Williams", "Staff"], ["Aisha Khan", "Staff"], ["Mateo Herrera", "Staff"], ["Emma Laurent", "Staff"], ["Daniel Kim", "Staff"], ["Valentina Rojas", "Staff"], ["Samuel Reed", "Staff"], ["Priya Nair", "Staff"], ["Gabriel Santos", "Staff"]]
  };
  const TEAMS = ["Operations & Fulfillment", "Customer & Growth"];
  const USERS = Object.values(PEOPLE).flat().map(([name, role], index) => ({
    id: `GS-${String(index + 1).padStart(3, "0")}`,
    name,
    role,
    team: TEAMS[index % 2],
    status: index === 23 ? "Invited" : "Active",
    mfa: role === "Staff" ? index % 4 !== 0 : true,
    device: index % 3 === 0 ? "Managed device" : "Approved devices"
  }));
  const compactOption = (title, help, action = "Manage") => `<article class="setting-option"><div><b>${title}</b><small class="option-guide">What to do: ${help}</small></div><button type="button" data-workspace-action="${title} opened">${action}</button></article>`;
  const settingsField = (label, type = "text", note = "") => `<label class="settings-field"><span>${label}</span><input type="${type}" aria-label="${label}" ${type === "password" ? 'autocomplete="current-password"' : ""} placeholder="${label}">${note ? `<small>${note}</small>` : ""}</label>`;
  const settingsSelect = (label, options, note = "") => `<label class="settings-field"><span>${label}</span><select aria-label="${label}"><option value="">Select ${label.toLowerCase()}</option>${options.map(option => `<option>${option}</option>`).join("")}</select>${note ? `<small>${note}</small>` : ""}</label>`;
  const permissionHelp = (label, help) => `<span class="permission-label">${label}<button class="permission-help" type="button" aria-label="About ${label} permission" data-help="${help}">?</button></span>`;
  const APP_SCREENS = ["Overview", "Orders", "Talent Acquisition", "Onboarding", "Employees", "Business Approvals", "Documents", "People Directory", "Clients & Billing", "Reports & Analytics", "Payroll", "Settings"];
  const permissionMatrix = () => `<div class="permission-matrix" role="group" aria-label="Application screen permissions"><div class="permission-row permission-head"><strong>Application screen</strong>${[["Read", "View records on this screen."], ["Write", "Create or edit records on this screen."], ["Approve", "Make an authorized business decision on this screen."], ["Audit", "Review protected history and evidence for this screen."]].map(item => permissionHelp(item[0], item[1])).join("")}</div>${APP_SCREENS.map((screen, row) => `<div class="permission-row"><strong>${screen}</strong>${["Read", "Write", "Approve", "Audit"].map((permission, column) => `<label><span class="sr-only">${permission} ${screen}</span><input type="checkbox" aria-label="${permission} access to ${screen}" ${column === 0 && row < 8 ? "checked" : ""}></label>`).join("")}</div>`).join("")}</div>`;
  const expandableSection = (id, title, purpose, content, open = false) => `<details class="settings-section-card" id="${id}" ${open ? "open" : ""}><summary><span><strong>${title}</strong><small>${purpose}</small></span><b aria-hidden="true">+</b></summary><div class="settings-section-body">${content}</div></details>`;
  const personRows = () => USERS.slice(0, 10).map((user, index) => {
    const reportsTo = user.role === "Director" ? "—" : user.role === "Manager" ? USERS.find(item => item.role === "Director").name : user.role === "Supervisor" ? USERS.filter(item => item.role === "Manager")[index % 2].name : USERS.filter(item => item.role === "Supervisor")[index % 2].name;
    return `<button class="people-table-row ${index === 0 ? "selected" : ""}" type="button" data-person-index="${index}" data-person-name="${user.name}" data-person-email="${user.name.toLowerCase().replace(" ", ".")}@business.com" data-person-reports="${reportsTo}" data-person-search="${user.name.toLowerCase()} ${user.role.toLowerCase()} ${user.team.toLowerCase()}" data-person-role="${user.role}" data-person-team="${user.team}"><span class="person-cell"><i>${user.name.split(" ").map(part => part[0]).join("").slice(0, 2)}</i><span><strong>${user.name}</strong><small>${user.name.toLowerCase().replace(" ", ".")}@business.com</small></span></span><span><em class="role-badge role-${user.role.toLowerCase()}">${user.role}</em></span><span>${user.team}</span><span>${reportsTo}</span><span><i class="status-dot"></i>${user.status}</span><b aria-hidden="true">⋮</b></button>`;
  }).join("");
  const settingsMarkup = () => {
    const profile = `<p class="section-purpose">Purpose: manage the signed-in person’s identity, authentication and delegated access.</p><form class="settings-form"><div class="settings-fields">${settingsField("First name")}${settingsField("Last name")}${settingsField("Current password", "password", "Used only for recent reauthentication; never saved in the profile.")}</div><div class="settings-action-list">${compactOption("Access Delegated", "Review who may act on assigned work and revoke unnecessary access.", "Review")}${compactOption("MFA", "Enroll and verify a second authentication factor.", "Configure")}${compactOption("Devices", "Review trusted devices and revoke unfamiliar sessions.", "Review")}</div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Save My Profile</button></div></form>`;
    const business = `<p class="section-purpose">Purpose: maintain the organization’s operating identity and confirm sensitive changes.</p><form class="settings-form"><div class="settings-fields">${settingsField("Business name")}${settingsField("Tax ID")}${settingsField("Address")}${settingsField("Phone", "tel")}${settingsField("Business authorization password", "password", "Short-lived owner reauthentication only. It is never stored as business data.")}</div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Verify &amp; Save Business Profile</button></div></form>`;
    const employee = `<p class="section-purpose">Purpose: create an employee record and define where the person reports before granting application privileges.</p><form class="settings-form"><div class="settings-fields">${settingsField("First name")}${settingsField("Last name")}${settingsField("Address")}${settingsField("Email", "email")}${settingsField("Phone", "tel")}${settingsSelect("Team (optional)", TEAMS)}${settingsSelect("Supervisor (optional)", USERS.filter(user => user.role === "Supervisor").map(user => user.name))}${settingsSelect("Manager (optional)", USERS.filter(user => user.role === "Manager").map(user => user.name))}${settingsSelect("Director (optional)", USERS.filter(user => user.role === "Director").map(user => user.name))}${settingsField("Salary", "number", "Restricted compensation data; access is controlled separately.")}${settingsField("Business authorization password", "password", "Reauthenticates the owner for this request; never added to the employee record.")}</div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Verify &amp; Add Employee</button></div></form>`;
    const access = `<p class="section-purpose">Purpose: keep every application-screen privilege in one RBAC control center.</p><form class="settings-form"><div class="settings-fields compact">${settingsSelect("Employee", USERS.map(user => `${user.name} · ${user.role}`))}${settingsSelect("Role template", ["Director", "Manager", "Supervisor", "Staff"])}${settingsSelect("Team", TEAMS)}${settingsSelect("Device policy", ["Approved devices", "Managed devices only", "Blocked"])}${settingsField("Approved working hours")}${settingsSelect("Approved working week", ["Monday–Friday", "Monday–Saturday", "Custom schedule"])}</div>${permissionMatrix()}<div class="rbac-note"><strong>RBAC boundary</strong><span>Checking a box submits a permission request. It does not grant access until the owner’s authenticated approval is validated by the backend and recorded in the audit history.</span></div><div class="form-actions"><button class="workspace-button" type="reset">Reset changes</button><button class="workspace-button primary-action" type="submit">Request Owner Approval</button></div></form>`;
    const contract = `<p class="section-purpose">Purpose: issue the employee invitation and contract, then record acceptance status.</p><form class="settings-form"><div class="settings-fields compact">${settingsSelect("Employee", USERS.map(user => user.name))}${settingsSelect("Contract template", ["Permanent employment", "Fixed term", "Part-time", "Contractor"])}${settingsField("Invitation expiry", "date")}${settingsField("Contract effective date", "date")}</div><div class="settings-checks"><label><input type="checkbox"> Invitation and contract are ready for e-signature and acceptance</label><label><input type="checkbox"> Send invitation and contract</label><fieldset><legend>Contract signed and confirmed as accepted</legend><label><input type="radio" name="contractAccepted" value="yes"> Yes</label><label><input type="radio" name="contractAccepted" value="no"> No</label></fieldset></div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Send for E-signature</button></div></form>`;
    const approval = `<p class="section-purpose">Purpose: require the owner to authorize application and screen access using fresh identity evidence.</p><form class="settings-form"><div class="settings-fields compact">${settingsSelect("Employee access request", USERS.map(user => `${user.name} · ${user.role}`))}${settingsField("Owner password", "password", "Verified by the authentication service and never stored or logged.")}</div><div class="approval-evidence"><label><input type="checkbox"> <span><strong>MFA verified</strong><small>Require a valid second factor.</small></span></label><label><input type="checkbox"> <span><strong>Device authenticated</strong><small>Confirm an approved or managed device.</small></span></label><label><input type="checkbox"> <span><strong>OAuth reauthentication</strong><small>Confirm identity through the approved provider when applicable.</small></span></label></div><div class="form-actions"><button class="workspace-button" type="reset">Reject</button><button class="workspace-button primary-action" type="submit">Owner Approves Access</button></div></form>`;
    const reset = `<p class="section-purpose">Purpose: locate the employee and send a safe password-reset email without viewing or setting their password.</p><form class="settings-form"><div class="settings-fields compact">${settingsField("Business authorization password", "password", "Confirms authorization to initiate the reset request; never stored.")}${settingsField("Search employee")}${settingsField("Password reset email", "email")}</div><div class="form-actions"><button class="workspace-button" type="reset">Cancel</button><button class="workspace-button primary-action" type="submit">Send Password Reset</button></div></form>`;
    const people = `<section class="people-access"><header class="people-access-head"><div><span class="settings-crumb">Settings / People &amp; Access</span><h3>People &amp; Access</h3><p>Manage who has access, their roles, and who they report to. Keep access accurate, up to date and easy to review.</p></div><div class="people-tools"><label><span class="sr-only">Search people</span><input id="peopleSearch" type="search" placeholder="Search people"></label><button class="people-add" id="openEmployeeWizard" type="button">＋ Add employee</button><select id="peopleTeamFilter" aria-label="Filter by team"><option value="">All teams</option>${TEAMS.map(team => `<option>${team}</option>`).join("")}</select><select id="peopleRoleFilter" aria-label="Filter by role"><option value="">All roles</option><option>Director</option><option>Manager</option><option>Supervisor</option><option>Staff</option></select></div></header><div class="people-counts"><span>♙ <strong>25</strong> total</span><i></i><span><strong>1</strong> director</span><i></i><span><strong>2</strong> managers</span><i></i><span><strong>2</strong> supervisors</span><i></i><span><strong>20</strong> staff</span><small>As of Sep 4, 2026</small></div><div class="people-table"><div class="people-table-head"><span>Name</span><span>Role</span><span>Team</span><span>Reports to</span><span>Status</span><span></span></div><div id="peopleRows">${personRows()}</div><footer><span>Showing 1 to 10 of 25</span><span>10 per page　 ‹　<b>1</b>　2　3　›</span></footer></div></section><aside class="person-detail" id="personDetail"><header><span class="detail-avatar" id="detailAvatar">EP</span><span><h3 id="detailName">Elena Park</h3><p id="detailEmail">elena.park@business.com</p><small><i class="status-dot"></i> Active</small></span></header><nav><button class="active" type="button">Overview</button><button type="button">Access</button><button type="button">Activity</button><button type="button">Notes</button></nav><div class="detail-list"><article><span>Role</span><strong id="detailRole">Director</strong><small>Role-based access is limited by approved screen permissions.</small></article><article><span>Team</span><strong id="detailTeam">Operations &amp; Fulfillment</strong></article><article><span>Reports to</span><strong id="detailReports">Business Owner</strong></article><article><span>Working hours</span><strong>Mon–Fri, 9:00 AM–5:30 PM</strong></article><article><span>Contract status</span><strong>Permanent · Confirmed</strong></article><article><span>Security requirements</span><strong>MFA required · Managed device</strong></article><article><span>Owner approval</span><strong class="approved-text">Approved</strong></article></div><button class="review-access" type="button" data-open-access>Review access　›</button></aside>`;
    const accordion = `${expandableSection("profile-panel", "My Profile", "Personal identity, password, delegation, MFA and devices.", profile, true)}${expandableSection("business-panel", "Business Profile", "Business identity, contact information and protected confirmation.", business)}${expandableSection("access-panel", "App Access & RBAC", "All screen privileges, working hours and role-based access.", access)}${expandableSection("contracts-panel", "Contract & Invitation", "E-signature, delivery and acceptance confirmation.", contract)}${expandableSection("approval-panel", "Owner Approval", "Password, MFA, device and OAuth reauthentication evidence.", approval)}${expandableSection("reset-panel", "Employee Password Reset", "Search an employee and send a secure reset email.", reset)}`;
    const wizard = `<div class="employee-wizard" id="employeeWizard" hidden><div class="wizard-dialog"><button class="wizard-close" id="closeEmployeeWizard" type="button" aria-label="Close employee setup">×</button><header><h3>Add employee</h3><div class="wizard-steps" id="wizardSteps"><span class="active" data-wizard-step="1">1<small>Details</small></span><i></i><span data-wizard-step="2">2<small>Reporting &amp; team</small></span><i></i><span data-wizard-step="3">3<small>Access</small></span><i></i><span data-wizard-step="4">4<small>Review &amp; invite</small></span></div></header><div class="wizard-clean-grid"><main><section class="wizard-panel active" data-wizard-panel="1"><span>Step 1 of 4</span><h3>Employee details</h3><p>Add the employee’s identity and contact information.</p><div class="settings-fields">${settingsField("First name")}${settingsField("Last name")}${settingsField("Address")}${settingsField("Email", "email")}${settingsField("Phone", "tel")}${settingsField("Salary", "number", "Restricted compensation data.")}</div></section><section class="wizard-panel" data-wizard-panel="2"><span>Step 2 of 4</span><h3>Reporting &amp; team</h3><p>Choose an optional team and reporting line.</p><div class="settings-fields">${settingsSelect("Team (optional)", TEAMS)}${settingsSelect("Supervisor (optional)", USERS.filter(user => user.role === "Supervisor").map(user => user.name))}${settingsSelect("Manager (optional)", USERS.filter(user => user.role === "Manager").map(user => user.name))}${settingsSelect("Director (optional)", USERS.filter(user => user.role === "Director").map(user => user.name))}</div></section><section class="wizard-panel" data-wizard-panel="3"><span>Step 3 of 4</span><h3>Set access &amp; working hours</h3><p>Apply a role preset, then adjust screen access where needed.</p><div class="role-presets"><button class="active" type="button"><strong>Manager</strong><small>Full operational access</small></button><button type="button"><strong>Supervisor</strong><small>Oversees teams and operations</small></button><button type="button"><strong>Staff</strong><small>Limited to assigned tasks</small></button></div>${permissionMatrix()}<div class="settings-fields compact wizard-hours">${settingsField("Approved working hours")}${settingsSelect("Approved working week", ["Monday–Friday", "Monday–Saturday", "Custom schedule"])}${settingsSelect("Device policy", ["Approved devices", "Managed devices only", "Blocked"])}</div></section><section class="wizard-panel" data-wizard-panel="4"><span>Step 4 of 4</span><h3>Review &amp; invite</h3><p>Confirm the contract, security requirements and owner authorization before sending.</p><div class="settings-checks"><label><input type="checkbox"> Contract is ready for e-signature</label><label><input type="checkbox"> MFA required</label><label><input type="checkbox"> Managed device required</label><label><input type="checkbox"> Owner approval confirmed</label></div>${settingsField("Business authorization password", "password", "Short-lived reauthentication only; never stored.")}</section><footer class="wizard-actions"><button type="button" id="wizardBack">Back</button><span></span><button type="button" id="wizardDraft">Save draft</button><button class="primary" type="button" id="wizardNext">Continue</button></footer></main><aside class="wizard-summary"><h3>Employee summary</h3><div class="summary-person"><span>LA</span><div><strong>New employee</strong><small>Invitation not sent</small></div></div><dl><div><dt>Reports to</dt><dd>Not selected</dd></div><div><dt>Team</dt><dd>Not selected</dd></div><div><dt>Contract</dt><dd>Required</dd></div><div><dt>Security</dt><dd>MFA · Managed device</dd></div></dl><div class="risk-summary"><strong>Access risk check</strong><span>Permission level <b>Low risk</b></span><span>Approve permissions <b class="moderate">Moderate</b></span><span>Sensitive areas <b>Low risk</b></span></div></aside></div></div></div>`;
    return `<div class="settings-sample-shell"><nav class="settings-sample-nav"><button type="button" data-settings-view="account">♢ <span>Account &amp; Security</span></button><button type="button" data-settings-view="business">▦ <span>Business Profile</span></button><button class="active" type="button" data-settings-view="people">♙ <span>People &amp; Access</span></button><button type="button" data-settings-view="audit">♧ <span>Audit &amp; Alerts</span></button><button type="button" data-settings-view="sessions">♧ <span>Sessions &amp; Support</span></button><button type="button" data-settings-view="operations">▣ <span>Operations &amp; Delivery</span></button><button type="button" data-settings-view="data">ↄ <span>Data &amp; Integrations</span></button></nav><div class="settings-view active" data-settings-panel="people">${people}</div><div class="settings-view" data-settings-panel="account">${accordion}</div><div class="settings-view" data-settings-panel="business">${expandableSection("business-profile", "Business Profile", "Business identity and protected confirmation.", business, true)}</div><div class="settings-view" data-settings-panel="audit">${expandableSection("audit-alerts", "Audit &amp; Alerts", "Review access decisions, security events and notification history.", approval, true)}</div><div class="settings-view" data-settings-panel="sessions">${expandableSection("sessions-support", "Sessions &amp; Support", "Review trusted devices, sessions and account recovery.", `${profile}${reset}`, true)}</div><div class="settings-view" data-settings-panel="operations">${expandableSection("operations-delivery", "Operations &amp; Delivery", "Working hours, teams, contracts and delivery controls.", `${employee}${contract}`, true)}</div><div class="settings-view" data-settings-panel="data">${expandableSection("data-integrations", "Data &amp; Integrations", "Control application areas and integration access under RBAC.", access, true)}</div></div>${wizard}`;
  };

  let clientReturnFocus = null;
  const openClientForm = trigger => {
    const modal = $("clientModal");
    if (!modal) return;
    clientReturnFocus = trigger || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("client-modal-open");
    requestAnimationFrame(() => modal.querySelector('input[name="businessName"]')?.focus());
  };
  const closeClientForm = () => {
    const modal = $("clientModal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("client-modal-open");
    clientReturnFocus?.focus?.();
  };

  const specialCard = (screen, data) => {
    if (screen === "talentacquisition") return `<article class="workspace-card full"><div class="workspace-card-head"><h3>Authoritative candidate pipeline</h3><span>19 controlled stages</span></div>${stageMarkup(data.stages)}<div class="security-note">Candidate retrieval is limited to profiles with active recruiter-visibility consent and data-sharing authorization.</div></article>`;
    if (screen === "businessapprovals") return `<article class="workspace-card full"><div class="workspace-card-head"><h3>Approval chain preview</h3><span>Action-specific</span></div>${approvalMarkup()}<div class="prototype-lock">Sensitive approvals require a trusted backend, authenticated tenant membership, exact permission, step-up authentication and an immutable audit event. Passwords are never emailed or written to audit logs.</div></article>`;
    if (screen === "businessanalytics") return `<article class="workspace-card full"><div class="workspace-card-head"><h3>Recruiting-to-onboarding funnel</h3><span>Current period</span></div>${funnelMarkup()}</article><article class="workspace-card"><h3>Conversion performance</h3><p>Interviewed, potential, approved and completed outcomes.</p>${chartMarkup()}</article>`;
    if (screen === "settings") return `<article class="workspace-card full"><div class="workspace-card-head"><h3>Security and authorization boundary</h3><span>Backend required</span></div><div class="security-note">Interface visibility is guidance only. Production access must validate the authenticated user, tenant membership, role, exact permission, account and session state, MFA, ownership, approval status and audit event—and fail closed.</div></article>`;
    return "";
  };

  const render = (screen, requestedTab) => {
    const host = $("sectionWorkspace");
    const metrics = $("metrics");
    const dashboard = document.querySelector(".dashboard-grid");
    const staff = $("staffAccess");
    if (!host) return;
    const isOverview = screen === "overview";
    host.classList.toggle("active", !isOverview);
    metrics.hidden = !isOverview;
    if (dashboard) dashboard.hidden = !isOverview;
    staff.hidden = !(screen === "settings" && requestedTab === "staff-setting");
    if (isOverview) { host.innerHTML = ""; return; }
    const data = DATA[screen];
    if (!data) return;
    if (screen === "settings") {
      const setting = requestedTab || "my-profile";
      host.dataset.screen = screen;
      host.dataset.tab = setting;
      host.innerHTML = `<div class="workspace-shell"><header class="workspace-toolbar"><div><h2>Settings</h2><p>Open a section to manage profiles, employees, application access, contracts, approvals and account recovery.</p></div></header>${settingsMarkup(setting)}</div>`;
      host.querySelectorAll("[data-settings-section]").forEach(button => button.addEventListener("click", () => render("settings", button.dataset.settingsSection)));
      host.querySelectorAll("[data-workspace-action]").forEach(button => button.addEventListener("click", () => {
        if (button.classList.contains("danger-action") && !window.confirm("Delete this staff access record? This protected request requires owner authorization.")) return;
        toast(button.classList.contains("danger-action") ? "Deletion request prepared for owner authorization" : `${button.dataset.workspaceAction} opened`);
      }));
      host.querySelectorAll("[data-settings-view]").forEach(button => button.addEventListener("click", () => {
        host.querySelectorAll("[data-settings-view]").forEach(item => item.classList.toggle("active", item === button));
        host.querySelectorAll("[data-settings-panel]").forEach(panel => panel.classList.toggle("active", panel.dataset.settingsPanel === button.dataset.settingsView));
      }));
      const wizard = $("employeeWizard");
      let wizardStep = 1;
      const showWizardStep = step => {
        wizardStep = Math.max(1, Math.min(4, step));
        wizard?.querySelectorAll("[data-wizard-step]").forEach(item => item.classList.toggle("active", Number(item.dataset.wizardStep) <= wizardStep));
        wizard?.querySelectorAll("[data-wizard-panel]").forEach(panel => panel.classList.toggle("active", Number(panel.dataset.wizardPanel) === wizardStep));
        const next = $("wizardNext");
        if (next) next.textContent = wizardStep === 4 ? "Review invitation" : "Continue";
        const back = $("wizardBack");
        if (back) back.disabled = wizardStep === 1;
      };
      $("openEmployeeWizard")?.addEventListener("click", () => { wizard.hidden = false; document.body.classList.add("employee-wizard-open"); showWizardStep(1); });
      $("closeEmployeeWizard")?.addEventListener("click", () => { wizard.hidden = true; document.body.classList.remove("employee-wizard-open"); });
      wizard?.addEventListener("click", event => { if (event.target === wizard) { wizard.hidden = true; document.body.classList.remove("employee-wizard-open"); } });
      host.querySelectorAll("[data-open-access]").forEach(button => button.addEventListener("click", () => { wizard.hidden = false; document.body.classList.add("employee-wizard-open"); showWizardStep(3); }));
      $("wizardNext")?.addEventListener("click", () => wizardStep === 4 ? toast("Invitation prepared for owner-authorized review") : showWizardStep(wizardStep + 1));
      $("wizardBack")?.addEventListener("click", () => showWizardStep(wizardStep - 1));
      $("wizardDraft")?.addEventListener("click", () => toast("Employee setup draft saved locally for backend integration"));
      const searchPeople = $("peopleSearch"), teamFilter = $("peopleTeamFilter"), roleFilter = $("peopleRoleFilter");
      const filterPeople = () => host.querySelectorAll("[data-person-index]").forEach(row => {
        const query = searchPeople.value.trim().toLowerCase();
        row.hidden = Boolean((query && !row.dataset.personSearch.includes(query)) || (teamFilter.value && row.dataset.personTeam !== teamFilter.value) || (roleFilter.value && row.dataset.personRole !== roleFilter.value));
      });
      [searchPeople, teamFilter, roleFilter].forEach(control => control?.addEventListener("input", filterPeople));
      host.querySelectorAll("[data-person-index]").forEach(row => row.addEventListener("click", () => {
        host.querySelectorAll("[data-person-index]").forEach(item => item.classList.toggle("selected", item === row));
        $("detailName").textContent = row.dataset.personName;
        $("detailEmail").textContent = row.dataset.personEmail;
        $("detailRole").textContent = row.dataset.personRole;
        $("detailTeam").textContent = row.dataset.personTeam;
        $("detailReports").textContent = row.dataset.personReports;
        $("detailAvatar").textContent = row.dataset.personName.split(" ").map(part => part[0]).join("").slice(0, 2);
      }));
      host.querySelectorAll(".workspace-form").forEach(form => form.addEventListener("submit", event => { event.preventDefault(); toast("Settings request prepared for backend validation"); }));
      return;
    }
    const tab = requestedTab && data.tabs.includes(requestedTab) ? requestedTab : data.tabs[0];
    host.dataset.screen = screen;
    host.dataset.tab = tab;
    const reportingFilters = screen === "businessanalytics" ? `<div class="filter-row">${data.fields.map(field => `<select aria-label="${field}"><option>${field}: All</option></select>`).join("")}</div>` : "";
    host.innerHTML = `<div class="workspace-shell"><header class="workspace-toolbar"><div><h2>${data.title}</h2><p>${data.description}</p></div><div class="workspace-actions">${data.actions.map((action, index) => `<button class="workspace-button ${index === 0 ? "primary-action" : ""}" type="button" data-workspace-action="${action}">${action}</button>`).join("")}</div></header><nav class="workspace-tabs" aria-label="${data.title} sections">${data.tabs.map(name => `<button class="workspace-tab ${name === tab ? "active" : ""}" type="button" data-workspace-tab="${name}">${name}</button>`).join("")}</nav>${statsMarkup(data.stats)}${reportingFilters}<section class="workspace-grid">${specialCard(screen, data)}<article class="workspace-card"><div class="workspace-card-head"><h3>${tab} tasks</h3><span>${data.tasks.length} active</span></div>${tasksMarkup(data.tasks)}</article><article class="workspace-card"><h3>${tab} categories</h3><p>Use these groups to filter and organize this workspace.</p>${tilesMarkup(data.groups)}</article><article class="workspace-card full"><div class="workspace-card-head"><h3>${tab} records</h3><span>Recent activity</span></div>${recordsMarkup(data.records)}</article><article class="workspace-card full"><h3>Add or update ${tab.toLowerCase()}</h3><p>Prototype fields are available for workflow design. Saving creates a local interface event until the trusted backend is connected.</p>${fieldsMarkup(data.fields, tab)}</article>${screen === "directory" ? '<article class="workspace-card full"><div class="prototype-lock">Personal contacts, candidate records, salary, medical documents and client billing details require separate permissions. Ordinary staff access is not implied.</div></article>' : ""}</section></div>`;
    host.querySelectorAll("[data-workspace-tab]").forEach(button => button.addEventListener("click", () => render(screen, button.dataset.workspaceTab)));
    host.querySelectorAll("[data-workspace-action]").forEach(button => button.addEventListener("click", () => button.dataset.workspaceAction === "Add client" ? openClientForm(button) : toast(`${button.dataset.workspaceAction} opened`)));
    host.querySelectorAll(".workspace-form").forEach(form => form.addEventListener("submit", event => { event.preventDefault(); toast(`${tab} request prepared for backend validation`); }));
  };

  window.renderSmbWorkspace = render;
  const active = document.querySelector("[data-screen].active")?.dataset.screen || "overview";
  render(active);
  $("sideNav")?.addEventListener("click", event => {
    const button = event.target.closest("[data-screen]");
    if (button) {
      setTimeout(() => render(button.dataset.screen), 0);
      if (window.matchMedia("(max-width: 720px)").matches) setSidebar(false);
    }
  });

  const app = $("dashboardApp"), menuToggle = $("menuToggle"), backdrop = $("menuBackdrop");
  const setSidebar = open => {
    if (!app || !menuToggle) return;
    app.classList.toggle("sidebar-collapsed", !open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", `${open ? "Close" : "Open"} navigation menu`);
    if (backdrop) backdrop.hidden = !(open && window.matchMedia("(max-width: 720px)").matches);
  };
  setSidebar(!window.matchMedia("(max-width: 720px)").matches);
  menuToggle?.addEventListener("click", () => setSidebar(menuToggle.getAttribute("aria-expanded") !== "true"));
  backdrop?.addEventListener("click", () => setSidebar(false));
  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 720px)").matches && backdrop) backdrop.hidden = true;
  });

  document.addEventListener("click", event => {
    const trigger = event.target.closest('[data-action="Add client opened"]');
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    openClientForm(trigger);
  }, true);
  $("clientModal")?.addEventListener("click", event => {
    if (event.target === event.currentTarget || event.target.closest("[data-close-client]")) closeClientForm();
  });
  $("copyPrimaryContact")?.addEventListener("change", event => {
    if (!event.target.checked) return;
    const form = $("clientForm");
    form.elements.billingName.value = form.elements.contactName.value;
    form.elements.billingEmail.value = form.elements.contactEmail.value;
  });
  $("clientForm")?.addEventListener("submit", event => {
    event.preventDefault();
    toast("Client record prepared for secure backend validation");
    event.currentTarget.reset();
    closeClientForm();
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!$("clientModal")?.hidden) closeClientForm();
    else if (window.matchMedia("(max-width: 720px)").matches) setSidebar(false);
  });
})();
