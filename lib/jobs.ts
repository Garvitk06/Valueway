export interface Job {
  id: string;
  title: string;
  industry: string;
  location: string;
  type: string;
  seniority: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [
  {
    id: "ai-engineer",
    title: "Senior AI Research Engineer",
    industry: "IT & Tech",
    location: "Remote (India)",
    type: "Full-time",
    seniority: "Senior",
    salary: "₹30L – ₹45L per annum",
    posted: "1 day ago",
    description: "Design, build, and optimize large-scale language models and agentic systems for automation architectures.",
    requirements: [
      "MS/PhD in Computer Science, AI, or equivalent quantitative field.",
      "3+ years of experience training and fine-tuning LLMs (Transformers, GPT, Claude).",
      "Proficiency in PyTorch, Python, and scalable training frameworks.",
      "Experience with vector databases and retrieval-augmented generation (RAG)."
    ],
    responsibilities: [
      "Develop innovative modeling algorithms and architectures for agentic workflows.",
      "Scale training pipelines across cluster environments on GCP/AWS.",
      "Collaborate with product and infrastructure teams to deploy model endpoints.",
      "Provide technical mentorship to junior members of the research group."
    ]
  },
  {
    id: "clinical-director",
    title: "Director of Clinical Operations",
    industry: "Healthcare",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    seniority: "Director",
    salary: "₹40L – ₹60L per annum",
    posted: "3 days ago",
    description: "Oversee clinical trial pipelines, regulatory compliance audits, and multi-center phase II/III research initiatives.",
    requirements: [
      "MD, PharmD, or PhD in Clinical Sciences or Life Sciences.",
      "8+ years of leadership experience in clinical operations within pharma or biotech.",
      "Deep understanding of CDSCO regulations, GCP, and international trial standards.",
      "Proven track record of managing multi-crore operational budgets."
    ],
    responsibilities: [
      "Direct the strategic planning, budget management, and operational execution of clinical trials.",
      "Liaise with regulatory bodies, Ethics Committees, and vendor partners.",
      "Lead and mentor clinical project managers and research coordinators.",
      "Ensure GCP quality and standard operating procedures are enforced."
    ]
  },
  {
    id: "fintech-lead",
    title: "Lead Blockchain Architect",
    industry: "BFSI",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    seniority: "Lead",
    salary: "₹35L – ₹55L per annum",
    posted: "2 days ago",
    description: "Architect and engineer secure smart contract platforms and distributed ledger APIs for asset tokenization.",
    requirements: [
      "Bachelor's degree in CS, Cryptography, or equivalent experience.",
      "4+ years building production-grade Solidity smart contracts and EVM integration.",
      "Thorough understanding of cryptographic primitives, zero-knowledge proofs, and consensus mechanisms.",
      "Experience with Rust, Go, or TypeScript."
    ],
    responsibilities: [
      "Architect core tokenization layer and liquidity protocol pools.",
      "Lead comprehensive smart contract security reviews and threat modeling sessions.",
      "Interface with financial compliance teams to guarantee protocol regulatory alignment.",
      "Publish public developer documentations and protocol technical specifications."
    ]
  },
  {
    id: "robotics-engineer",
    title: "Robotics Control Engineer",
    industry: "Manufacturing",
    location: "Gurugram, Haryana",
    type: "Contract",
    seniority: "Senior",
    salary: "₹12L – ₹18L per month (contract)",
    posted: "4 days ago",
    description: "Design kinematic controls and path-planning algorithms for automated warehouse robotics systems.",
    requirements: [
      "MS/PhD in Robotics, Mechatronics, or Mechanical Engineering.",
      "Expertise in ROS/ROS2, C++, and kinematic path-planning algorithms.",
      "Familiarity with simulation suites (Gazebo, Webots) and hardware-in-the-loop testing.",
      "Experience with sensor fusion models (LiDAR, IMU, cameras)."
    ],
    responsibilities: [
      "Develop and deploy advanced control loops for autonomous mobile robots (AMRs).",
      "Optimize localization algorithms for high-speed navigation in dynamic environments.",
      "Conduct physical hardware testing, sensor calibration, and debugging.",
      "Author test suites to validate robotics safety and performance metrics."
    ]
  },
  {
    id: "fmcg-marketing",
    title: "Global Brand Director",
    industry: "FMCG",
    location: "Noida, Uttar Pradesh",
    type: "Full-time",
    seniority: "Director",
    salary: "₹28L – ₹40L per annum",
    posted: "1 week ago",
    description: "Shape the global marketing strategy, product launches, and brand equity metrics for premium consumer goods divisions.",
    requirements: [
      "MBA or equivalent degree in Marketing, Business Administration.",
      "10+ years of brand management experience, with at least 4 years in a global FMCG role.",
      "Proven success leading major international product launches and campaigns.",
      "Strong analytical skills with a focus on marketing ROI and consumer analytics."
    ],
    responsibilities: [
      "Formulate long-term brand vision, marketing playbooks, and advertising assets.",
      "Manage multi-crore annual media budgets across digital and TV channels.",
      "Lead international cross-functional teams across research, packaging, and sales.",
      "Measure brand equity parameters, market share KPIs, and consumer sentiment."
    ]
  },
  {
    id: "ecommerce-product",
    title: "Principal Product Manager",
    industry: "Retail",
    location: "Remote (India)",
    type: "Full-time",
    seniority: "Senior",
    salary: "₹28L – ₹42L per annum",
    posted: "5 days ago",
    description: "Drive the strategic product vision for next-generation headless commerce shopping checkouts and logistics pipelines.",
    requirements: [
      "6+ years of product management experience focused on e-commerce or fintech platforms.",
      "Technical literacy with REST/GraphQL APIs, web performance metrics, and database scaling.",
      "Experience driving cross-functional development cycles (Agile/Scrum).",
      "Data-driven focus using tools like Mixpanel, Amplitude, or SQL."
    ],
    responsibilities: [
      "Own the product roadmap for checkouts, inventory synchronization, and logistics APIs.",
      "Author granular user stories, technical specs, and wireframes.",
      "Conduct user research and cohort testing to optimize purchase funnel conversions.",
      "Define and track product core KPIs (AOV, conversion rate, churn)."
    ]
  },
  {
    id: "quant-trader",
    title: "Senior Quantitative Trader",
    industry: "BFSI",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    seniority: "Senior",
    salary: "₹50L – ₹90L + Bonus per annum",
    posted: "6 days ago",
    description: "Develop, backtest, and deploy high-frequency algorithmic trading strategies in global futures and crypto markets.",
    requirements: [
      "Degree in Physics, Math, CS, or quantitative finance from a leading program.",
      "4+ years running profitable automated trading strategies.",
      "Exceptional Python/C++ skills, with experience managing vast time-series datasets.",
      "Solid understanding of statistical analysis, linear regression, and signal extraction."
    ],
    responsibilities: [
      "Formulate and backtest alpha-generating models using statistical and machine learning methods.",
      "Optimize real-time execution algorithms to minimize market impact and slippage.",
      "Manage portfolio risk metrics and risk-limits continuously.",
      "Work alongside hardware engineers to optimize low-latency trading infrastructure."
    ]
  },
  {
    id: "cloud-architect",
    title: "Principal Cloud Architect",
    industry: "IT & Tech",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    seniority: "Lead",
    salary: "₹38L – ₹55L per annum",
    posted: "1 week ago",
    description: "Lead the design, migration, and implementation of high-throughput Kubernetes systems and zero-trust cloud network security.",
    requirements: [
      "10+ years of engineering experience, with 5+ focused on cloud native systems.",
      "Expertise in Kubernetes (EKS/GKE), Terraform, and service meshes (Istio/Linkerd).",
      "Deep understanding of cloud security protocols, VPC routing, and IAM systems.",
      "Certifications: AWS Solutions Architect Professional or Google Cloud Professional Architect."
    ],
    responsibilities: [
      "Design multi-region cloud infrastructures targeting 99.99% uptime availability.",
      "Automate infrastructure provisioning using Infrastructure as Code (IaC).",
      "Conduct operational readiness audits and formulate disaster recovery parameters.",
      "Provide guidance to engineering teams on container orchestration best practices."
    ]
  },
  {
    id: "supply-chain-lead",
    title: "Lead Supply Chain Planner",
    industry: "FMCG",
    location: "New Delhi, Delhi",
    type: "Full-time",
    seniority: "Lead",
    salary: "₹18L – ₹28L per annum",
    posted: "3 days ago",
    description: "Coordinate regional sales, operations planning (S&OP), and inventory optimization for consumer product lines.",
    requirements: [
      "Bachelor's degree in Supply Chain, Logistics, or Operations Research.",
      "5+ years of experience planning regional supply chains, preferably in FMCG.",
      "Advanced proficiency in demand forecasting systems and ERP platforms (SAP/Oracle).",
      "Excellent negotiation and cross-cultural communication skills."
    ],
    responsibilities: [
      "Manage S&OP processes, align demand forecasts with factory production capacity.",
      "Optimize regional warehouse inventory volumes to reduce working capital requirements.",
      "Negotiate performance agreements with logistics providers and shipping partners.",
      "Implement predictive analytics to identify potential supply chain delays."
    ]
  },
  {
    id: "retail-analytics",
    title: "Retail Analytics Manager",
    industry: "Retail",
    location: "Pune, Maharashtra",
    type: "Full-time",
    seniority: "Mid",
    salary: "₹20L – ₹30L per annum",
    posted: "1 week ago",
    description: "Lead consumer behavior segmentation, pricing optimization modeling, and omni-channel purchase funnel analytics.",
    requirements: [
      "5+ years as a data analyst or analytics manager, preferably in a retail setting.",
      "Exceptional proficiency in SQL and BI tools (Tableau, Looker, PowerBI).",
      "Strong coding abilities in Python or R for statistical data modeling.",
      "Familiarity with marketing attribution models and cohort segmentation methods."
    ],
    responsibilities: [
      "Build and maintain user dashboard systems tracking buyer retention, AOV, and LTV.",
      "Conduct A/B testing on pricing models and digital landing layouts.",
      "Present segment insight reports and growth proposals to executive leaders.",
      "Formulate predictive churn indicators to design preventative marketing offers."
    ]
  }
];
