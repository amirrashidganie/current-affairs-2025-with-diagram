import { useState } from 'react';
import { 
  Users, Scale, Building, Vote, FileText, Shield, 
  Briefcase, Eye, ShieldAlert, ClipboardList, 
  Landmark, GraduationCap, Microscope, Trophy, 
  Wallet, Globe, ChevronRight, ChevronDown, 
  Lightbulb, BookOpen, BrainCircuit, RefreshCw
} from 'lucide-react';

const categories = [
  { id: 'constitutional', title: 'Constitutional Heads', icon: Users, type: 'flow', 
    acronym: 'DCM', full: 'Don\'t Call Me',
    story: 'President Droupadi hands VP crown to CP, who passes PM baton to Modi.',
    tip: '15th President + 15th PM = "Fifteen Duo"',
    data: [
      { role: 'President', name: 'Droupadi Murmu', extra: '15th' },
      { role: 'Vice President', name: 'CP Radhakrishnan', extra: 'Chairman RS' },
      { role: 'Prime Minister', name: 'Narendra Modi', extra: '15th' }
    ]
  },
  { id: 'judicial', title: 'Judicial Heads', icon: Scale, type: 'step',
    acronym: 'SVTP', full: 'Super Villain Takes Power',
    story: 'Sun (Suryakant) -> Attorney (Venkat) -> Solicitor (Tushar) -> Light (Prakash).',
    tip: 'Visualize a courtroom: Sun shines on Ram, pushing light.',
    data: [
      { role: 'Chief Justice', name: 'Justice Suryakant', extra: 'Sun-like' },
      { role: 'Attorney General', name: 'R. Venkataramani', extra: '16th' },
      { role: 'Solicitor General', name: 'Tushar Mehta', extra: 'Solicitor' },
      { role: 'NGT Chair', name: 'Justice Prakash', extra: 'Light' }
    ]
  },
  { id: 'parliament', title: 'Parliamentary Heads', icon: Building, type: 'comparison',
    acronym: 'Rajya: CHPMJ / Lok: ORU', full: 'Cool Heroes Play / Oh Really Unique',
    story: 'Upper: CP chairs, Harivansh deps, Pramod secs, Mallikarjun opposes, JP rules. Lower: Om speaks, Rahul opposes, Utpal secs.',
    tip: 'Upper = Complex (5 names), Lower = Simple (3 names)',
    data: {
      left: {
        title: 'Rajya Sabha (Upper)',
        items: [
          { role: 'Chairman', name: 'CP Radhakrishnan' },
          { role: 'Deputy', name: 'Harivansh N. Singh' },
          { role: 'Sec. Gen', name: 'Pramod C. Mody' },
          { role: 'Opposition', name: 'Mallikarjun Kharge' },
          { role: 'Leader', name: 'J.P. Nadda' }
        ]
      },
      right: {
        title: 'Lok Sabha (Lower)',
        items: [
          { role: 'Speaker', name: 'Om Birla' },
          { role: 'Opposition', name: 'Rahul Gandhi' },
          { role: 'Sec. Gen', name: 'Utpal Kumar Singh' }
        ]
      }
    }
  },
  { id: 'election', title: 'Election Commission', icon: Vote, type: 'tree',
    acronym: 'GVS', full: 'Great Victory Soon',
    story: 'Gyanesh (Knowledge) chief commissions Vivek (Alive) and Sukhbir (Happy).',
    tip: 'Gyan for votes, Vivek & Sukhbir count.',
    data: {
      root: { role: 'Chief Election Commissioner', name: 'Gyanesh Kumar', extra: '26th' },
      children: [
        { role: 'Commissioner', name: 'Vivek Joshi' },
        { role: 'Commissioner', name: 'Sukhbir Sandhu' }
      ]
    }
  },
  { id: 'audit', title: 'Audit Heads', icon: FileText, type: 'pair',
    acronym: 'KT', full: 'King Takes Audit',
    story: 'K. Sanjay Murthy audits, Ms. TCA Kalyani accounts.',
    tip: 'Rhyme "Kay-Tee Audit Free".',
    data: [
      { role: 'CAG', name: 'K. Sanjay Murthy' },
      { role: 'CGA', name: 'Ms. TCA Kalyani' }
    ]
  },
  { id: 'armed', title: 'Armed Forces', icon: Shield, type: 'hierarchy',
    acronym: 'DAADUR', full: 'Defend All Against Danger Under Radar',
    story: 'Droupadi commands Anil, who directs Air, Navy, Army, and Ops.',
    tip: 'Service Order: Supreme -> CDS -> Air (28) -> Navy (26) -> Army (30)',
    data: {
      role: 'Supreme Commander', name: 'Pres. Droupadi Murmu',
      child: {
        role: 'CDS', name: 'Lt. Gen Anil Chauhan',
        children: [
          { role: 'Air Chief', name: 'Amar Preet Singh', extra: '28th' },
          { role: 'Navy Chief', name: 'Dinesh K Tripathi', extra: '26th' },
          { role: 'Army Chief', name: 'Upendra Dwivedi', extra: '30th' },
          { role: 'DGMO', name: 'Rajiv Ghai', extra: 'Ops' }
        ]
      }
    }
  },
  { id: 'intelligence', title: 'Intelligence Heads', icon: Eye, type: 'grid',
    acronym: 'PP-HT-PSRA', full: 'Powerful People Hunt Threats...',
    story: 'Double P start, then H-T-P-S-R-A',
    tip: 'Group: Police (PP) -> Intel (HTP) -> Enforcement (SRA)',
    data: [
      { role: 'CVC', name: 'Praveen K. Srivastava' },
      { role: 'CBI', name: 'Praveen Sood' },
      { role: 'CIC', name: 'Hiralal Samaria' },
      { role: 'IB', name: 'Tapan Kumar Deka' },
      { role: 'RAW', name: 'Parag Jain' },
      { role: 'NIA', name: 'Sadanand Date' },
      { role: 'ED', name: 'Rahul Navin' },
      { role: 'NCB', name: 'Anurag Garg' }
    ]
  }
];

const DiagramFlow = ({ data, showNames }) => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
    {data.map((item, idx) => (
      <div key={idx} className="flex items-center">
        <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl shadow-sm w-48 text-center transition-all hover:shadow-md hover:border-blue-400">
          <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">{item.role}</div>
          <div className={`font-bold text-gray-800 ${showNames ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            {item.name}
          </div>
          {item.extra && <div className="text-xs text-gray-500 mt-1">{item.extra}</div>}
        </div>
        {idx < data.length - 1 && (
          <ChevronRight className="w-8 h-8 text-blue-300 hidden md:block" />
        )}
        {idx < data.length - 1 && (
          <ChevronDown className="w-8 h-8 text-blue-300 block md:hidden my-2" />
        )}
      </div>
    ))}
  </div>
);

const DiagramStep = ({ data, showNames }) => (
  <div className="flex flex-col items-center gap-4 py-4 max-w-md mx-auto">
    {data.map((item, idx) => (
      <div key={idx} className="w-full flex items-center relative">
        <div className="flex flex-col items-center mr-4">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border-2 border-indigo-200">
            {idx + 1}
          </div>
          {idx < data.length - 1 && <div className="h-12 w-0.5 bg-indigo-200 my-1"></div>}
        </div>
        <div className="flex-1 bg-white border border-indigo-100 p-4 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-indigo-500 uppercase">{item.role}</div>
          <div className={`font-medium text-gray-800 ${showNames ? '' : 'blur-sm select-none'}`}>{item.name}</div>
          <div className="text-xs text-gray-400 italic mt-1">{item.extra}</div>
        </div>
      </div>
    ))}
  </div>
);

const DiagramComparison = ({ data, showNames }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
    <div className="border-t-4 border-red-400 bg-red-50 p-4 rounded-b-lg">
      <h3 className="font-bold text-red-800 text-center mb-4 text-lg">{data.left.title}</h3>
      <div className="space-y-3">
        {data.left.items.map((item, idx) => (
          <div key={idx} className="bg-white p-3 rounded shadow-sm border border-red-100">
            <span className="text-xs font-bold text-red-500 block">{item.role}</span>
            <span className={showNames ? '' : 'opacity-0'}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t-4 border-green-400 bg-green-50 p-4 rounded-b-lg">
      <h3 className="font-bold text-green-800 text-center mb-4 text-lg">{data.right.title}</h3>
      <div className="space-y-3">
        {data.right.items.map((item, idx) => (
          <div key={idx} className="bg-white p-3 rounded shadow-sm border border-green-100">
            <span className="text-xs font-bold text-green-500 block">{item.role}</span>
            <span className={showNames ? '' : 'opacity-0'}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DiagramTree = ({ data, showNames }) => (
  <div className="flex flex-col items-center py-8">
    <div className="bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-md w-64 text-center mb-8 relative z-10">
      <div className="text-xs font-bold text-amber-700 uppercase mb-1">{data.root.role}</div>
      <div className={`font-bold text-amber-900 ${showNames ? '' : 'blur-sm'}`}>{data.root.name}</div>
    </div>
    
    <div className="flex gap-4 md:gap-12 relative">
      {/* Connector Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 w-full h-8 border-t-2 border-l-2 border-r-2 border-amber-200 rounded-t-xl"></div>
      
      {data.children.map((child, idx) => (
        <div key={idx} className="bg-white border border-amber-200 p-4 rounded-lg shadow-sm w-40 text-center relative z-10">
          <div className="text-xs font-bold text-gray-500 mb-1">{child.role}</div>
          <div className={`font-medium text-gray-800 ${showNames ? '' : 'opacity-0'}`}>{child.name}</div>
        </div>
      ))}
    </div>
  </div>
);

const DiagramHierarchy = ({ data, showNames }) => (
  <div className="flex flex-col items-center py-6 w-full">
    {/* Supreme */}
    <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded-lg w-64 text-center mb-6">
      <div className="text-xs font-bold text-purple-700">{data.role}</div>
      <div className={showNames ? '' : 'blur-md'}>{data.name}</div>
    </div>
    
    <div className="h-6 w-0.5 bg-purple-300 -mt-6 mb-0"></div>
    
    {/* CDS */}
    <div className="bg-purple-50 border border-purple-300 p-3 rounded-lg w-56 text-center mb-6 z-10">
      <div className="text-xs font-bold text-purple-700">{data.child.role}</div>
      <div className={showNames ? '' : 'blur-md'}>{data.child.name}</div>
    </div>

    <div className="h-6 w-0.5 bg-purple-300 -mt-6 mb-0"></div>
    
    {/* Forces */}
    <div className="flex flex-wrap justify-center gap-3 w-full border-t-2 border-purple-200 pt-6">
       {data.child.children.map((item, idx) => (
         <div key={idx} className="bg-white border-l-4 border-purple-400 p-3 shadow-sm w-36 text-sm">
           <div className="text-[10px] font-bold text-gray-500 uppercase">{item.role}</div>
           <div className={`font-medium ${showNames ? '' : 'opacity-0'}`}>{item.name}</div>
           <div className="text-[10px] text-purple-400 mt-1">{item.extra}</div>
         </div>
       ))}
    </div>
  </div>
);

const DiagramGrid = ({ data, showNames }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
    {data.map((item, idx) => (
      <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded text-center hover:bg-slate-100 transition-colors">
         <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-2 text-slate-600 font-bold text-xs">
           {item.role}
         </div>
         <div className={`text-sm font-medium ${showNames ? '' : 'blur-sm'}`}>{item.name}</div>
      </div>
    ))}
  </div>
);

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showNames, setShowNames] = useState(true);

  const renderDiagram = () => {
    switch (activeCategory.type) {
      case 'flow': return <DiagramFlow data={activeCategory.data} showNames={showNames} />;
      case 'step': return <DiagramStep data={activeCategory.data} showNames={showNames} />;
      case 'comparison': return <DiagramComparison data={activeCategory.data} showNames={showNames} />;
      case 'tree': return <DiagramTree data={activeCategory.data} showNames={showNames} />;
      case 'hierarchy': return <DiagramHierarchy data={activeCategory.data} showNames={showNames} />;
      case 'grid': return <DiagramGrid data={activeCategory.data} showNames={showNames} />;
      case 'pair': return <DiagramFlow data={activeCategory.data} showNames={showNames} />; 
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BrainCircuit className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Mnemonic Visualizer</h1>
              <p className="text-blue-200 text-sm">Master Current Affairs with Visual Memory</p>
            </div>
          </div>
          <button 
            onClick={() => setShowNames(!showNames)}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors border border-blue-500"
          >
            <RefreshCw className="w-4 h-4" />
            {showNames ? 'Hide Names (Test Mode)' : 'Show Names (Study Mode)'}
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation */}
        <nav className="lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all min-w-[200px] lg:min-w-0 border ${
                  isActive 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' 
                    : 'bg-white border-transparent text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                <span className="font-medium text-sm">{cat.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Main Content Area */}
        <main className="lg:w-6xl  flex-col gap-6">
          
          {/* Card: The Diagram */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <activeCategory.icon className="w-6 h-6 text-blue-500" />
                {activeCategory.title}
              </h2>
              <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {activeCategory.acronym}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-100 min-h-[250px] flex items-center justify-center p-4 overflow-x-auto">
               {renderDiagram()}
            </div>

            {/* Mnemonic Footer */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <div className="flex items-center gap-2 mb-2 text-indigo-700 font-bold text-sm">
                   <BookOpen className="w-4 h-4" />
                   Story & Acronym
                </div>
                <p className="text-indigo-900 font-medium mb-1">"{activeCategory.full}"</p>
                <p className="text-sm text-indigo-700/80">{activeCategory.story}</p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
                   <Lightbulb className="w-4 h-4" />
                   Memory Tip
                </div>
                <p className="text-sm text-emerald-800 italic">{activeCategory.tip}</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;

