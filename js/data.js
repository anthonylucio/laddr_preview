export const demoJobs = [
  {
    id:'job-1', title:'HR Operations Specialist', company:'Northstar Health', location:'Remote — California', work:'Remote', salaryMin:68000, salaryMax:82000,
    match:94, posted:'2 days ago', source:'Company careers',
    summary:'Own onboarding operations, employee lifecycle workflows, HRIS reporting, and cross-functional process improvement.',
    skills:['Onboarding','HR operations','HRIS','Reporting','Cross-functional coordination','Excel'],
    gaps:['Advanced HRIS reporting'],
    why:['Strong onboarding background','Experience coordinating employee lifecycle work','California-eligible remote role'],
    status:'recommended'
  },
  {
    id:'job-2', title:'People Operations Coordinator', company:'Morrow Labs', location:'Sacramento, CA', work:'Hybrid', salaryMin:61000, salaryMax:76000,
    match:91, posted:'1 day ago', source:'Greenhouse',
    summary:'Coordinate onboarding, maintain people systems, support benefits, and improve the employee experience across a growing team.',
    skills:['Onboarding','People operations','Benefits','HRIS','Employee experience'], gaps:[],
    why:['Direct overlap with onboarding work','Strong administrative fit','Local hybrid option'], status:'recommended'
  },
  {
    id:'job-3', title:'Onboarding Specialist', company:'CivicWorks', location:'Remote — US', work:'Remote', salaryMin:58000, salaryMax:72000,
    match:89, posted:'3 days ago', source:'Lever',
    summary:'Guide new hires from offer acceptance through day-one readiness while coordinating managers, IT, and payroll.',
    skills:['Onboarding','Stakeholder management','Employee communications','Process documentation'], gaps:[],
    why:['Very close functional match','Uses current experience directly','Remote work'], status:'recommended'
  },
  {
    id:'job-4', title:'HRIS Coordinator', company:'Juniper Foods', location:'Remote — Pacific', work:'Remote', salaryMin:72000, salaryMax:88000,
    match:82, posted:'4 days ago', source:'Company careers',
    summary:'Support HRIS configuration, reporting, audits, integrations, and workflow troubleshooting.',
    skills:['HRIS','Reporting','Excel','Data quality','Workflow configuration'], gaps:['HRIS configuration ownership','Advanced reporting'],
    why:['Adjacent step up','Existing HR operations foundation','Good salary-growth bridge'], status:'recommended'
  },
  {
    id:'job-5', title:'People Analytics Coordinator', company:'BrightField', location:'San Francisco, CA', work:'Hybrid', salaryMin:76000, salaryMax:93000,
    match:78, posted:'5 days ago', source:'Company careers',
    summary:'Build workforce reports, maintain people datasets, and help leaders understand hiring, retention, and onboarding trends.',
    skills:['Excel','Reporting','People data','SQL','Dashboards'], gaps:['SQL','Dashboard portfolio'],
    why:['Strong growth direction','Uses HR context plus analytics','Higher salary band'], status:'recommended'
  }
];

export const growthPaths = [
  {title:'HR Operations Specialist', range:'$68K–$82K', readiness:94, label:'Ready now'},
  {title:'HRIS Coordinator', range:'$72K–$88K', readiness:82, label:'Close'},
  {title:'People Analytics Coordinator', range:'$76K–$93K', readiness:78, label:'Close'},
  {title:'HRIS Analyst', range:'$84K–$105K', readiness:66, label:'Next level'}
];

export const seedState = {
  version:1,
  user:{
    name:'Alex', email:'alex@example.com', plan:'core', credits:5, creditsRollover:2, employed:false,
    targetRoles:['HR Operations Specialist','People Operations Coordinator','Onboarding Specialist'],
    location:'California', remotePreference:'Remote or hybrid', salaryTarget:70000,
    skills:['Onboarding','HR operations','Employee communications','Benefits','Excel','Process documentation','Stakeholder management'],
    summary:'HR operations and onboarding professional focused on clear processes, employee experience, and cross-functional coordination.'
  },
  profileComplete:78,
  jobs:demoJobs,
  applications:[
    {id:'app-1', jobId:'job-2', company:'Morrow Labs', title:'People Operations Coordinator', status:'Applied', date:'2026-10-01', next:'Follow up Oct 9', resume:'HR Operations v2'},
    {id:'app-2', jobId:'job-3', company:'CivicWorks', title:'Onboarding Specialist', status:'Interview', date:'2026-09-29', next:'Interview Oct 7', resume:'Onboarding v1'},
    {id:'app-3', jobId:null, company:'Wayfinder Labs', title:'HR Coordinator', status:'Follow-up', date:'2026-09-24', next:'Send follow-up', resume:'General Application'}
  ],
  resumes:[
    {id:'resume-master', name:'Master resume', type:'master', updated:'Today', uses:0, summary:'HR operations and onboarding professional with experience coordinating employee lifecycle processes and cross-functional stakeholders.', skills:['Onboarding','HR operations','Employee communications','Benefits','Excel','Process documentation']},
    {id:'resume-ops', name:'HR Operations v2', type:'tailored', updated:'3 days ago', uses:4, summary:'HR operations specialist with a focus on onboarding workflows, employee lifecycle operations, and process improvement.', skills:['HR operations','Onboarding','HRIS','Excel','Process documentation']},
    {id:'resume-onboarding', name:'Onboarding v1', type:'tailored', updated:'1 week ago', uses:3, summary:'Onboarding specialist experienced in coordinating managers, IT, payroll, and new hires from offer through day one.', skills:['Onboarding','Stakeholder management','Employee communications','Process documentation']}
  ],
  experiences:[
    {id:'exp-1', date:'2026-09-22', title:'Rebuilt onboarding checklist after a late process change', text:'A compliance requirement changed three days before a new-hire group started. I rebuilt the checklist, coordinated HR, IT and managers, and kept twelve new hires on schedule.', tags:['Adaptability','Stakeholder management','Process improvement'], star:{situation:'A compliance requirement changed three days before onboarding.', task:'Keep onboarding on schedule without losing required steps.', action:'Rebuilt the checklist and aligned HR, IT, and hiring managers on the new process.', result:'Twelve new hires started on time with the revised process documented for reuse.'}}
  ],
  weeklyPlan:[
    {id:'t1', text:'Review 5 tailored matches', done:true},
    {id:'t2', text:'Send follow-up to Wayfinder Labs', done:false},
    {id:'t3', text:'Tailor resume for HRIS Coordinator', done:false},
    {id:'t4', text:'Practice CivicWorks interview questions', done:false}
  ],
  activity:[
    {text:'5 new matches prepared', time:'Today'},
    {text:'CivicWorks moved to Interview', time:'Yesterday'},
    {text:'HR Operations v2 used for an application', time:'3 days ago'}
  ],
  settings:{emailDigest:true, reminders:true, weeklyDay:'Monday'}
};
