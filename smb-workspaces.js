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

  const SETTINGS_SECTIONS = [
    ["General", [["business-profile", "Business Profile"], ["my-profile", "My Profile"], ["security", "Security"]]],
    ["Configuration", [["staff-setting", "Staff Setting"], ["promotion", "Promotion", "Enabled"]]],
    ["Delegate", [["delegate-staff", "Staff Setting"], ["delegate-management", "Management"], ["delegate-workspace", "Workspace"], ["delegate-task", "Task"], ["delegate-activity", "Activity"]]]
  ];
  const employeeRows = (management = false) => (management ? [
    ["Morgan Lee", "Management Admin", "Administration · Approvals · Reports"],
    ["Elena Park", "SMB Owner", "Owner authorization · Full audit"]
  ] : [
    ["Sofía Ramírez", "Supervisor", "Team · Schedules"],
    ["Luis Mendoza", "Staff", "Tasks · Documents"]
  ]).map(person => `<article class="settings-person"><div><strong>${person[0]}</strong><small>${person[1]}</small></div><span>${person[2]}</span><button type="button" data-workspace-action="Review ${person[0]} RBAC">Review RBAC</button></article>`).join("");
  const settingsPane = key => {
    if (key === "business-profile") return `<h3>Business Profile</h3><p>Manage the legal and operating identity used throughout this business workspace.</p>${fieldsMarkup(["Business name", "Legal business name", "Tax number", "Primary business email", "Business phone", "Timezone", "Currency", "Address"], "Business Profile")}`;
    if (key === "my-profile") return `<h3>My Profile</h3><p>Manage the signed-in owner’s personal and recovery information.</p>${fieldsMarkup(["First name", "Last name", "Username", "Work email", "Phone", "Job title"], "My Profile")}`;
    if (key === "security") return `<h3>Security</h3><p>Review account protection, recovery methods and active access.</p><div class="settings-options"><label><span><b>Multi-factor authentication</b><small>Required for privileged roles</small></span><input type="checkbox" checked></label><label><span><b>Trusted devices</b><small>6 active sessions</small></span><button type="button" data-workspace-action="Trusted devices opened">Review</button></label><label><span><b>Recovery methods</b><small>Owner confirmation required</small></span><button type="button" data-workspace-action="Recovery methods opened">Review</button></label></div>`;
    if (key === "staff-setting") return `<h3>Configuration · Staff Setting</h3><p>Staff are listed by employee first name, last name and assigned RBACs. Use the detailed controls below to configure access.</p>${employeeRows()}`;
    if (key === "promotion") return `<div class="workspace-card-head"><div><h3>Configuration · Promotion</h3><p>Promotion configuration is enabled. Every promotion requires final SMB Owner authorization.</p></div><label class="settings-enabled"><input type="checkbox" checked> Enabled</label></div>${employeeRows(true)}`;
    if (key === "delegate-staff") return `<h3>Delegate · Staff Setting</h3><p>Assign limited staff delegation by employee name, last name and exact RBAC scope.</p>${employeeRows()}`;
    if (key === "delegate-management") return `<h3>Delegate · Management</h3><p>Management delegation requires manual owner review and a defined expiration.</p>${employeeRows(true)}`;
    if (key === "delegate-workspace") return `<h3>Delegate · Workspace</h3><p>Choose which workspaces an approved delegate may enter.</p><div class="settings-options">${["Talent Acquisition", "Onboarding", "Employees", "Documents", "People Directory", "Reports & Analytics"].map(name => `<label><span><b>${name}</b><small>Delegated workspace access</small></span><input type="checkbox"></label>`).join("")}</div>`;
    if (key === "delegate-task") return `<h3>Delegate · Task</h3><p>Control whether delegates can view, create, update or complete assigned tasks.</p><div class="permission-set">${["View", "Create", "Update", "Complete", "Reassign"].map((name, i) => `<label class="permission-toggle"><input type="checkbox" ${i < 2 ? "checked" : ""}> ${name}</label>`).join("")}</div>`;
    return `<h3>Delegate · Activity</h3><p>Review accountable delegate actions and authorization history.</p>${recordsMarkup([["Morgan Lee", "Viewed employee workspace · Sep 3", "Recorded"], ["Sofía Ramírez", "Updated assigned task · Sep 2", "Recorded"], ["Luis Mendoza", "Document access requested · Sep 2", "Owner review"]])}`;
  };
  const settingsMarkup = active => `<div class="settings-layout"><nav class="settings-tree" aria-label="Settings sections">${SETTINGS_SECTIONS.map(group => `<section><h3>${group[0]}</h3>${group[1].map(item => `<button class="${item[0] === active ? "active" : ""}" type="button" data-settings-section="${item[0]}"><span>${item[1]}</span>${item[2] ? `<em>${item[2]}</em>` : ""}<b>›</b></button>`).join("")}</section>`).join("")}</nav><article class="workspace-card settings-pane">${settingsPane(active)}</article></div>`;

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
    dashboard.hidden = !isOverview;
    staff.hidden = !(screen === "settings" && requestedTab === "staff-setting");
    if (isOverview) { host.innerHTML = ""; return; }
    const data = DATA[screen];
    if (!data) return;
    if (screen === "settings") {
      const setting = requestedTab || "business-profile";
      host.dataset.screen = screen;
      host.dataset.tab = setting;
      host.innerHTML = `<div class="workspace-shell"><header class="workspace-toolbar"><div><h2>Settings</h2><p>Business profile, personal profile, security, staff configuration and delegated access.</p></div></header>${settingsMarkup(setting)}<article class="workspace-card"><div class="security-note">Interface controls do not grant authority. Production access must validate identity, tenant membership, exact permission, MFA, owner approval and the audit event through the trusted backend.</div></article></div>`;
      host.querySelectorAll("[data-settings-section]").forEach(button => button.addEventListener("click", () => render("settings", button.dataset.settingsSection)));
      host.querySelectorAll("[data-workspace-action]").forEach(button => button.addEventListener("click", () => toast(`${button.dataset.workspaceAction} opened`)));
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
