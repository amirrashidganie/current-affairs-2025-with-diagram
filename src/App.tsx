import React, { useState, useMemo } from 'react';

// --- ICONS (Using lucide-react equivalents via inline SVGs) ---
const IconUsers = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const IconScale = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>);
const IconBuilding = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>);
const IconVote = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" /><path d="M22 19H2" /></svg>);
const IconFileText = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>);
const IconShield = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>);
const IconEye = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>);
const IconBriefcase = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const IconTrendingUp = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 10.5 12.5 5 18" /><polyline points="18 7 22 7 22 11" /></svg>);
const IconGavel = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5-5c1.1-1.1 1.1-2.9 0-4-1.1-1.1-2.9-1.1-4 0l-5 5" /><path d="M13 12L3 22l4-4 10-10" /></svg>);
const IconLandPlot = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>);
const IconBookOpen = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const IconDna = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.8 2a2 2 0 0 0-1.8 1H9.8a2 2 0 0 0-1.8-1H2v20h5.5c-.3-1.6 0-3.3 1.3-4.6 1.6-1.6 4-1.8 5.6 0 1.2 1.2 1.5 2.8 1.3 4.6H22V2h-5.2Z" /><path d="M12 10a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4Z" /><path d="M12 18a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg>);
const IconFootballs = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10c-3 0-5.7 1.8-8 4-2.3-2.2-5-4-8-4a6 6 0 0 0 0 12c3 0 5.7-1.8 8-4 2.3 2.2 5 4 8 4a6 6 0 0 0 0-12Z" /><path d="M12 13v-3a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3" /><path d="M12 13h10" /></svg>);
const IconDollarSign = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
const IconGlobe = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>);
const IconRefreshCw = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>);
const IconChevronRight = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>);
const IconChevronDown = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>);
const IconZap = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20V8H5L13 2v12h6L11 20z" /></svg>);
const IconGrid = (props:any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>);

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

// --- MASTER DATA SET ---
const categories = [
  {
    id: 'constitutional', title: '1. Constitutional Heads (DCM)', icon: IconUsers, type: 'flow',
    story: "Story & Acronym:\n\"Don't Call Me\"\n\nPresident Droupadi hands VP crown to CP, who passes PM baton to Modi.\n\nMemory Tip:\n15th President + 15th PM = \"Fifteen Duo\"",
    trick: "Story: \"Don't Call Me\" (DCM) | Tip: \"Fifteen Duo\"",
    data: [
      { role: 'President of India', name: 'Smt. Droupadi Murmu', extra: 'D - 15th' },
      { role: 'Vice President of India', name: 'CP Radhakrishnan', extra: 'C - Chairman RS' },
      { role: 'Prime Minister of India', name: 'Shri Narendra Modi', extra: 'M - 15th' }
    ]
  },
  {
    id: 'judicial', title: '2. Judicial Heads', icon: IconScale, type: 'table',
    story: 'Story: " \"CAST\" your vote for the Sun (Surya), Voice (Venkataramani), Truth (Tushar), and Peace (Prakash)." | Tip: "S-V-T-P"',
    trick: "Story: CAST your vote for Sun, Voice, Truth, and Peace | Tip: S-V-T-P",
    data: [
      { role: 'Chief Justice, Supreme Court', name: 'Justice Suryakant' },
      { role: 'Attorney General of India', name: 'R. Vankataramani', extra: '16th' },
      { role: 'Solicitor General of India', name: 'Tushar Mehta' },
      { role: 'Chairperson, National Green Tribunal', name: 'Justice Prakash Shrivastava' }
    ]
  },
  {
    id: 'parliament', title: '3. Parliamentary Heads', icon: IconBuilding, type: 'table',
    story: 'Rajya (Upper) vs. Lok (Lower) leaders: VP CP Radhakrishnan chairs the Rajya Sabha, while Om Birla speaks for the Lok Sabha.',
    trick: "Rajya (CP) vs. Lok (Om Birla)",
    data: [
      { role: 'Speaker, Rajya Sabha', name: 'CP Radhakrishnan', extra: '(Vice President of India)' },
      { role: 'Deputy Speaker, Rajya Sabha', name: 'Harivansh Narayan Singh' },
      { role: 'Secretary General, Rajya Sabha', name: 'Pramod Chandra Mody' },
      { role: 'Leader of Opposition, Rajya Sabha', name: 'Mallikarjun Kharge' },
      { role: 'Leader of ruling party, Rajya Sabha', name: 'J.P Nadda' },
      { role: 'Speaker, Lok Sabha (18th)', name: 'Om Birla', extra: '18th' },
      { role: 'Leader of Opposition, Lok Sabha', name: 'Rahul Gandhi' },
      { role: 'Secretary General, Lok Sabha', name: 'Utpal Kumar Singh' }
    ]
  },
  {
    id: 'election', title: '4. Election Commission', icon: IconVote, type: 'table',
    story: 'Gyanesh (Knowledge) chief commissions Vivek and Sukhbir to count votes.',
    trick: "Gyanesh (Chief) + Vivek & Sukhbir",
    data: [
      { role: 'Chief Election Commissioner', name: 'Gyanesh Kumar', extra: '26th' },
      { role: 'Election Commissioners', name: 'Vivek Joshi, Sukhbir Sandhu' }
    ]
  },
  {
    id: 'audit', title: '5. Audit Heads', icon: IconFileText, type: 'table',
    story: 'K. Sanjay Murthy handles the Audit (CAG), while Ms. TCA Kalyani handles Accounts (CGA).',
    trick: "CAG (Sanjay Murthy) / CGA (Kalyani)",
    data: [
      { role: 'Comptroller and Auditor General (CAG)', name: 'K. Sanjay Murthy' },
      { role: 'Comptroller General of Accounts (CGA)', name: 'Ms TCA Kalyani' }
    ]
  },
  {
    id: 'armed', title: '6. Armed Forces Hierarchy', icon: IconShield, type: 'hierarchy',
    story: 'President Droupadi commands CDS Anil Chauhan, who directs Air, Navy, and Army Chiefs.',
    trick: "Droupadi -> CDS Anil Chauhan",
    data: {
      role: 'Supreme Commander', name: 'President Smt. Droupadi Murmu',
      child: {
        role: 'CDS (2nd)', name: 'Lt. General Anil Chauhan',
        children: [
          { role: 'Air Chief (28th)', name: 'Amar Preet Singh' },
          { role: 'Navy Chief (26th)', name: 'Dinesh Kumat Tripathi' },
          { role: 'Army Chief (30th)', name: 'Upendra Dwivedi' },
          { role: 'DGMO', name: 'Rajiv Ghai' }
        ]
      }
    }
  },
  {
    id: 'secretaries', title: '7. Secretaries & Advisors', icon: IconBriefcase, type: 'table',
    story: 'Top Secretaries (Cabinet, Home, Defence, Foreign, Finance) and key PMO/Security advisors (NSA Doval, PS Misra).',
    trick: "Top Secretaries & NSA Doval",
    data: [
      { role: 'Cabinet Secretary', name: 'T.V Somnathan' },
      { role: 'Adviser, Prime Minister', name: 'Traun Kapoor, Amit Khare' },
      { role: 'Principal Secretary, Prime Minister', name: 'Pramod Kumar Mishra, Shaktikanta Das' },
      { role: 'Defence Finance Secretary', name: 'Shri Rajesh Kumar Singh' },
      { role: 'Foreign Secretary', name: 'Vikram Misri', extra: '35th' },
      { role: 'Finance Secretary', name: 'Ajay Seth' },
      { role: 'Defence Secretary', name: 'Rajesh Kumar Singh' },
      { role: 'Revenue Secretary', name: 'Shri Arvind Shrivastava' },
      { role: 'National Security Adviser (NSA)', name: 'Ajit Doval' },
      { role: 'Chief Economic Advisor', name: 'Anantha Nageswaram' },
      { role: 'Principal Scientific Adviser', name: 'Ajay Kumar Sood' }
    ]
  },
  {
    id: 'intelligence', title: '8. Intelligence & Investigation', icon: IconEye, type: 'table',
    story: 'CVC and CBI (Praveen x2) lead the large group of intelligence heads (IB, RAW, NIA, ED, NCB).',
    trick: "Praveen x2 (CVC/CBI)",
    data: [
      { role: 'Central Vigilance Commissioner, CVC', name: 'Praveen Kumar Srivastava' },
      { role: 'Director, CBI', name: 'Praveen Sood' },
      { role: 'Chief Information Commissioner', name: 'Hiralal Samaria' },
      { role: 'Head, Intelligence Bureau (IB)', name: 'Tapan Kumar Deka' },
      { role: 'Head, Research and Analysis Wing (RAW)', name: 'Parag Jain' },
      { role: 'DG, National Investigation Agency (NIA)', name: 'Sadanand Date' },
      { role: 'Director, Enforcement Directorate (ED)', name: 'Rahul Navin' },
      { role: 'DG, Narcotics Control Bureau (NCB)', name: 'Anurag Garg' }
    ]
  },
  {
    id: 'paramilitary', title: '9. Paramilitary Forces', icon: IconShield, type: 'table',
    story: 'SSB (Singhal), BSF (Chaudhary), CRPF (GP Singh), CISF (Ranjan), NSG (Srinivasan), and others managing borders and internal security.',
    trick: "SSB (Singhal), BSF (Chaudhary), CRPF (GP Singh)",
    data: [
      { role: 'DG, Sashastra Seema Bal (SSB)', name: 'Shri Sanjay Singhal, IPS' },
      { role: 'DG, Border Security Force (BSF)', name: 'Daljit Singh Chaudhary' },
      { role: 'DG, CRPF', name: 'Shri G P Singh' },
      { role: 'DG, Central Industrial Security Force (CISF)', name: 'Praveer Ranjan' },
      { role: 'DG, National Security Guard (NSG)', name: 'B. Srinivasan' },
      { role: 'Director, Special Protection Group (SPG)', name: 'Alok Sharma' },
      { role: 'Additional Director General, ITBP', name: 'Praveen Kumar' },
      { role: 'DG, National Cadet Corps (NCC)', name: 'Lt Gen Virendra Vats' },
      { role: 'Director General, Indian Coast Guard (ICG)', name: 'S. Paramesh' },
      { role: 'DG, National Disaster Relief Force (NDRF)', name: 'Piyush Anand' },
      { role: 'DG, Assam Rifles', name: 'Vikas Lakhera' },
      { role: 'DG, Railway Protection Force (RPF)', name: 'Ms. Sonali Mishra' }
    ]
  },
  {
    id: 'commissions', title: '10. Commissions & Tribunals', icon: IconGavel, type: 'table',
    story: 'NITI Ayog Trio (PM, Suman, BVR), UPSC (Ajay), 16th Finance (Panagariya), and other social justice commissions.',
    trick: "NITI Trio + 16th Finance (Panagariya)",
    data: [
      { role: 'Chairman, NITI Ayog', name: 'Prime Minister Narendra Modi' },
      { role: 'Deputy Chairman, NITI Ayog', name: 'Suman Kumar Bery' },
      { role: 'CEO, NITI Ayog', name: 'B. V. R. Subrahmanyam' },
      { role: 'Chairperson, UPSC', name: 'Ajay Kumar' },
      { role: 'Chairman, 22nd Law Commission', name: 'Rituraj Awasthi' },
      { role: 'Chairperson, National Commission for Women', name: 'Vijaya Rahatkar' },
      { role: 'Chairman, National Backward Classes Commission', name: 'Hansraj Gangaram Ahir' },
      { role: 'Chairman, Staff Selection Commission (SSC)', name: 'S. Gopalakrishnan' },
      { role: 'Chairman, 7th Pay Commission', name: 'Ashok Kumar Mathur' },
      { role: 'Chairperson, Lokpal', name: 'Ajay Manikrao Khanwilkar' },
      { role: 'Chairman, 16th Finance Commission', name: 'Arvind Panagariya' },
      { role: 'Chairman, Competition Commission of India (CCI)', name: 'Ravneet Kaur' },
      { role: 'Chairman, National Commission for ST', name: 'Antar Singh Arya' },
      { role: 'Chairman, National Commission for SC', name: 'Kishor Makwana' },
      { role: 'Chairman, NHRC', name: 'V. Ramasubramanian', extra: '9th' },
      { role: 'Chairman, National Commission for Minorities', name: 'Iqbal Singh Lalpura' }
    ]
  },
  {
    id: 'boards', title: '11. Boards & Authorities', icon: IconLandPlot, type: 'table',
    story: 'Railway Board (Satish) leads, supported by regulators like SEBI (Tuhin) and TRAI (Anil Lahoti), and tax boards (CBDT/CBIC).',
    trick: "Railway (Satish) + Regulators (SEBI, TRAI)",
    data: [
      { role: 'Chairman and CEO of the Railway Board', name: 'Satish Kumar' },
      { role: 'Chairman, SEBI', name: 'Tuhin Kanata Pandey' },
      { role: 'CEO, Central Board of Films Certification', name: 'Ravindra Bhakar' },
      { role: 'Chairman, Bureau of Civil Aviation Security', name: 'Rajesh Nirwan' },
      { role: 'Chairman, CBDT', name: 'Ravi Agarwal' },
      { role: 'Chairman, Central Board of Indirect taxes and Customs (CBIC)', name: 'Vivek Chaturvedi' },
      { role: 'Chairman, National Dairy Development Board', name: 'Meenesh Shah' },
      { role: 'DG, Border Roads Organisation', name: 'Raghu Srinivasan' },
      { role: 'Chairman, PNGRB', name: 'Anil Kumar Jain' },
      { role: 'Chairman, TRAI', name: 'Anil Kumar Lahoti' },
      { role: 'CEO, UIDAI', name: 'Bhuvnesh Kumar' },
      { role: 'Registrar General & Census Commissioner of India', name: 'MK Narayan' },
      { role: 'Chairman, Public Accounts Committee', name: 'K.C. Venugopal' },
      { role: 'Chairman, Estimates Committee', name: 'Dr. Sanjay Jaiswal' },
      { role: 'Chairman, NHAI', name: 'Santosh Kumar Yadav' }
    ]
  },
  {
    id: 'education', title: '12. Educational & Academic', icon: IconBookOpen, type: 'table',
    story: 'UGC (Vineet) and CBSE (Rahul) regulate, while key universities (DU, JNU, BHU) and institutions (NCERT, Nalanda) have their respective heads.',
    trick: "UGC (Vineet) & CBSE (Rahul)",
    data: [
      { role: 'Chairman, UGC', name: 'Vineet Joshi' },
      { role: 'VC, University of Delhi', name: 'Yogesh Singh' },
      { role: 'Vice Chancellor, JNU', name: 'Shantisree Dulipudi Pandit' },
      { role: 'Vice Chancellor, BHU', name: 'Prof. Ajit Kumar Chaturvedi' },
      { role: 'Chancellor, Nalanda University', name: 'Arvind Pangariya' },
      { role: 'Chancellor, Gatishakti University', name: 'Ashwini Vaishnav' },
      { role: 'Director, NCERT', name: 'Dinesh Prasad Saklani' },
      { role: 'Chairman, CBSE', name: 'Rahul Singh' },
      { role: 'President, Sahitya Akademi', name: 'Madhav Kaushik' },
      { role: 'President, Sangeet Natak Akademi', name: 'Dr. Sandhya Purecha' },
      { role: 'President, Lalit Kala Akademi', name: 'Prof. V. Ngdas' }
    ]
  },
  {
    id: 'science', title: '13. Scientific Research', icon: IconDna, type: 'table',
    story: 'ISRO (Narayanan) leads space; AEC/AERB manage atomic energy; DRDO (Kamat) and CSIR (Kalasielvi) handle R&D.',
    trick: "ISRO (Narayanan), DRDO (Kamat), CSIR (Kalasielvi)",
    data: [
      { role: 'Chairman, ISRO', name: 'Dr. V. Narayanan' },
      { role: 'Chairman, Atomic Energy Commission (AEC)', name: 'A.K Mohanty' },
      { role: 'Chairman, Atomic Energy Regulatory Board (AERB)', name: 'Dinesh Kumar Shukla' },
      { role: 'Director, Bhabha Atomic Research Center (BARC)', name: 'Vivek Bhasin' },
      { role: 'Chairman, Defence Research Development Organization (DRDO)', name: 'Samir V. Kamat' },
      { role: 'Director General, Council of Scientific and Industrial Research (CSIR)', name: 'Nallathamby Kalasielvi' },
      { role: 'Director, Vikram Sarabhai Space Center', name: 'Shri Rajarajan A' }
    ]
  },
  {
    id: 'sports', title: '14. Sports Organizations', icon: IconFootballs, type: 'table',
    story: 'Global bodies (ICC, FIFA) and National bodies (BCCI, WFI, IOA, SAI) and their leaders.',
    trick: "ICC, FIFA, BCCI, IOA Leaders",
    data: [
      { role: 'Chairman, ICC', name: 'Jay Shah', extra: '(India)' },
      { role: 'President, Olympic Council of Asia (OCA)', name: 'Kirsty Coventry', extra: '(Zimbabwe)' },
      { role: 'President, International Athletic Federation (IAAF)', name: 'Sebastian Coe', extra: '(UK)' },
      { role: 'President, Indian Weightlifting Federation', name: 'Sahdev Yadav' },
      { role: 'President, International Hockey Federation (FIH)', name: 'Mohammad Tayyab Ikram' },
      { role: 'President, FIFA', name: 'Gianni Infantino', extra: '(Italy/Switzerland)' },
      { role: 'President, International Boxing Association Athletes Committee', name: 'Lovlina Borgohain' },
      { role: 'President, BCCI', name: 'Mithun Manhas' },
      { role: 'Test Captain, BCCI', name: 'Shubman Gill' },
      { role: 'Head Coach, Indian Cricket Men Team', name: 'Gautam Gambhir' },
      { role: 'Director General, Sports Authority of India (SAI)', name: 'Dr. Mansukh Mandaviya' },
      { role: 'President, Wrestling Federation of India (WFI)', name: 'Sanjay Singh' },
      { role: 'Chief, All India Football Confederation (AIFF)', name: 'Kalyan Chaubey' },
      { role: 'President, Hockey India', name: 'Dilip Tirkey' },
      { role: 'President, Indian Olympic Association (IOA)', name: 'PT Usha' }
    ]
  },
  {
    id: 'banking', title: '15. Banking & Finance Officials', icon: IconDollarSign, type: 'table',
    story: 'RBI Governor (Sanjay Malhotra) and his deputies, and heads of major Indian banks (SBI, PNB, ICICI, HDFC).',
    trick: "RBI Governor (Sanjay Malhotra) + Major Banks",
    data: [
      { role: 'Governor, Reserve Bank of India (RBI)', name: 'Sanjay Malhotra', extra: '26th' },
      { role: 'Deputy Governor, RBI', name: 'Poonam Gupta, Swaminathan Janakiraman, T Rabi Shankar, M. Rajeshwar Rao' },
      { role: 'State Bank of India (Chairman)', name: 'Challa Srinivasulu Setty' },
      { role: 'Punjab National Bank (PNB)', name: 'Ashok Chandra' },
      { role: 'ICICI Bank', name: 'Sandeep Bakshi' },
      { role: 'HDFC Bank (CEO)', name: 'Shashidhar Jagdisha' }
    ]
  },
  {
    id: 'global', title: '16. International Orgs & CEOs', icon: IconGlobe, type: 'table',
    story: 'UN (Guterres), World Bank (Banga), UNESCO (Azoulay), and the top tech giants (Google, Apple, Microsoft, SpaceX).',
    trick: "UN (Guterres) + World Bank (Banga) + Tech CEOs",
    data: [
      { role: 'Secretary-General, United Nations', name: 'Antonio Guterres', extra: '(Portugal)' },
      { role: '14th President, World Bank (IBRD)', name: 'Ajay Banga' },
      { role: 'Director General, UNESCO', name: 'Audre Azoulay', extra: '(France)' },
      { role: 'Google CEO', name: 'Sunder Pichai' },
      { role: 'Apple CEO', name: 'Tim Cook' },
      { role: 'Microsoft (CEO)', name: 'Satya Nadella' },
      { role: 'Tata Sons/Trust CEO', name: 'Natarajan Chandrasekaran/Siddharth Sharma' },
      { role: 'TCS CEO', name: 'K. Krittivasan' },
      { role: 'Infosys CEO', name: 'Salil Parekh' },
      { role: 'Open AI CEO', name: 'Sam Altman' },
      { role: 'SpaceX CEO', name: 'Elon Musk' },
      { role: 'YouTube CEO', name: 'Neil Mohan' },
      { role: 'Instagram CEO', name: 'Kevin Systrom' },
      { role: 'Facebook CEO', name: 'Mark Zuckerberg' },
      { role: 'Twitter CEO', name: 'Linda Yaccarino' },
      { role: 'Flipkart CEO', name: 'Kalyan Krishnamurthy' }
    ]
  },
];

// --- DIAGRAM COMPONENTS ---

// 1. Flow Diagram (Used for Constitutional Heads)
const DiagramFlow = ({ data, showNames }:any) => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 overflow-x-auto w-full">
    {data.map((item:any, idx:any) => (
      <div key={idx} className="flex items-center flex-col md:flex-row">
        <div className="flex flex-col justify-center bg-blue-50 border-2 border-blue-200 p-4 rounded-xl shadow-md w-48 text-center min-h-20">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{item.role}</div>
          <div className={`font-bold text-gray-800 transition-opacity min-h-[1.5rem] text-sm ${showNames ? '' : 'blur-sm select-none'}`}>
            {item.name}
          </div>
          {item.extra && <div className="text-xs text-gray-500 mt-1">{item.extra}</div>}
        </div>
        {idx < data.length - 1 && (
          <IconChevronRight className="w-8 h-8 text-blue-300 hidden md:block" />
        )}
        {idx < data.length - 1 && (
          <IconChevronDown className="w-8 h-8 text-blue-300 block md:hidden my-2" />
        )}
      </div>
    ))}
  </div>
);

// 2. Hierarchy Diagram (Used for Armed Forces)
const DiagramHierarchy = ({ data, showNames }: any) => (
  <div className="flex flex-col items-center py-6 w-full">
    {/* Supreme Commander */}
    <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded-lg w-64 text-center mb-6 shadow-md">
      <div className="text-xs font-bold text-purple-700">{data.role}</div>
      <div className={`transition-all font-medium text-gray-800 ${showNames ? '' : 'blur-sm'}`}>{data.name}</div>
    </div>

    <div className="h-6 w-0.5 bg-purple-300 -mt-6 mb-0"></div>

    {/* CDS */}
    <div className="bg-purple-50 border border-purple-300 p-3 rounded-lg w-56 text-center mb-6 z-10 shadow-sm">
      <div className="text-xs font-bold text-purple-700">{data.child.role}</div>
      <div className={`transition-all font-medium text-gray-800 ${showNames ? '' : 'blur-sm'}`}>{data.child.name}</div>
    </div>

    <div className="h-6 w-0.5 bg-purple-300 -mt-6 mb-0"></div>

    {/* Forces */}
    <div className="flex flex-wrap justify-center gap-3 w-full border-t-2 border-purple-200 pt-6">
      {data.child.children.map((item:any, idx:any) => (
        <div key={idx} className="bg-white border-l-4 border-purple-400 p-3 shadow-sm w-36 text-sm mb-2 rounded-md">
          <div className="text-[10px] font-bold text-gray-500 uppercase">{item.role}</div>
          <div className={`font-medium transition-opacity text-gray-800 ${showNames ? '' : 'opacity-0'}`}>{item.name}</div>
        </div>
      ))}
    </div>
  </div>
);

// 3. Universal Table (Used for the remaining 14 categories)
const DiagramTable = ({ data, showNames }:any) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-1/12 hidden md:table-cell">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-5/12">Post / Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider w-6/12">Head Name</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((item:any, index:any) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 hidden md:table-cell">
                {index + 1}
              </td>
              <td className="px-4 md:px-6 py-4 text-sm font-medium text-gray-900">
                <div className="font-semibold text-base">{item.role}</div>
                {item.extra && <div className="text-xs text-blue-400">{item.extra}</div>}
              </td>
              <td className="px-4 md:px-6 py-4 text-sm text-gray-700">
                <div className={`font-medium transition-all ${showNames ? '' : 'blur-sm select-none'}`}>
                  {item.name}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// // --- Mnemonic Quick Reference Card Component ---
// const MnemonicQuickReference = ({ categories, setActiveCategory }) => (
//   <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 mb-6">
//     <h3 className="text-xl font-extrabold flex items-center gap-3 text-gray-800 mb-4 border-b pb-3">
//       <IconZap className="w-5 h-5 text-red-500" />
//       Quick-Reference Tricks Section
//     </h3>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {categories.map((cat) => (
//         <button
//           key={cat.id}
//           onClick={() => setActiveCategory(cat)}
//           className="p-3 bg-red-50 hover:bg-red-100 rounded-lg text-left transition-colors border-l-4 border-red-300 shadow-sm group"
//         >
//           <div className="text-xs font-semibold text-red-600 uppercase mb-1 flex items-center gap-1 group-hover:text-red-700">
//             <IconGrid className="w-3 h-3 text-red-400" />
//             {cat.title}
//           </div>
//           <p className="text-sm font-medium text-gray-800 leading-tight">
//             {cat.trick}
//           </p>
//         </button>
//       ))}
//     </div>
//     <p className="text-xs text-gray-500 italic mt-4">Click any card above to jump to that category's detailed data.</p>
//   </div>
// );


// --- MAIN APP ---
const App = () => {
  // Default to Constitutional Heads
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showNames, setShowNames] = useState(true);

  const renderDiagram = useMemo(() => {
    switch (activeCategory.type) {
      case 'flow':
        return <DiagramFlow data={activeCategory.data} showNames={showNames} />;
      case 'hierarchy':
        return <DiagramHierarchy data={activeCategory.data} showNames={showNames} />;
      case 'table':
      default:
        return <DiagramTable data={activeCategory.data} showNames={showNames} />;
    }
  }, [activeCategory, showNames]);

  const ActiveIcon = activeCategory.icon;

  return (
    <div className="min-h-screen bg-gray-600 text-gray-800 font-sans pb-10">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <IconTrendingUp className="w-8 h-8 text-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold">National & Global Who's Who Database</h1>
              <p className="text-indigo-200 text-sm">16 Categories for Current Affairs Mastery</p>
            </div>
          </div>
          <button
            onClick={() => setShowNames(!showNames)}
            className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-full transition-colors border border-indigo-500 font-semibold shadow-md text-sm"
          >
            <IconRefreshCw className="w-4 h-4" />
            {showNames ? 'Hide Names (Test Mode)' : 'Show Names (Study Mode)'}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">

        {/* Sidebar Navigation */}
        <nav className="lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide border-b lg:border-none border-gray-200">
          <style jsx>{`
                /* Custom scrollbar hiding for clean UI */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all lg:min-w-0 border ${isActive
                    ? 'bg-gray-200 border-indigo-200 text-indigo-700 shadow-sm ring-1 ring-indigo-300 font-bold'
                    : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-100 hover:shadow-xs'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-500' : 'text-gray-400'}`} />
                <span className="font-medium text-sm">{cat.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Main Content Area */}
        <main className="lg:w-3/4 flex flex-col gap-6">

          {/* NEW: Mnemonic Quick Reference */}
          {/* <MnemonicQuickReference categories={categories} setActiveCategory={setActiveCategory} /> */}

          {/* Card: The Diagram/Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2 border-b pb-4">
              <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-3 text-gray-800">
                <ActiveIcon className="w-6 h-6 text-indigo-600" />
                {activeCategory.title}
              </h2>
            </div>

            {/* Visualizer Area (Diagram/Table) */}
            <div className=" flex flex-col items-center justify-start p-2 md:p-0 overflow-x-auto">
              {renderDiagram}
            </div>

            {/* Mnemonic Footer */}
            <div className="mt-6 bg-gray-50 p-4 rounded-xl border border-green-100 shadow-md">
              <div className="flex items-center text-orange-600 gap-2 mb-2 font-bold text-sm uppercase tracking-wide">
                <IconBookOpen className="w-4 h-4" />
                Mnemonic Story/Focus (Detailed)
              </div>
              <p className="text-sm text-purple-600 font-bold leading-relaxed whitespace-pre-line">{activeCategory.story}</p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;


