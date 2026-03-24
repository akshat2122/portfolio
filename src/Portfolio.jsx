import { useState, useEffect } from "react";

// ============ CONFIG ============
const PHOTO = "/headshot.jpg";
const RESUME_URL = "https://drive.google.com/file/d/10ay_LiQsFB3SG5I5UuxyADcTLbY1uGsY/view?usp=sharing";
const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1P8WXAPlqkvBOz7Rs4r7NaSAOXd1IYdOg?usp=sharing";
const LINKEDIN = "https://www.linkedin.com/in/akshat-sharma-8894ab138/";

// ============ PROJECTS ============
const PROJECTS = [
  { id:1, title:"Revenue Optimization & ROI Analytics Dashboard", cat:"Business Analysis", date:"Sep 2024 – Jan 2026",
    tags:["Excel","Power BI","ROI Analysis","P&L Tracking","Automation"],
    problem:"Clients at Media Levelling had no visibility into which marketing channels were driving revenue and which were wasting budget. Reporting was manual, inconsistent, and took days to compile.",
    action:"Designed and built automated ROI tracking dashboards in Excel and Power BI for 50+ clients. Created channel-level P&L views that broke down performance by platform (Google, Meta, SEO, Email). Implemented automated data pipelines that replaced manual reporting workflows.",
    impact:"Improved average client ROI by 30% by reallocating spend to high-return channels. Reduced reporting time by 40%, freeing capacity for strategic analysis.",
    businessValue:"This is core business analyst work — identifying where money is wasted, building systems to track performance, and giving decision-makers data to act fast.",
    metrics:{"Clients":"50+","ROI Lift":"30%","Time Saved":"40%"}, status:"done" },

  { id:2, title:"Digital Business Strategy & Revenue Monetization Analysis", cat:"Strategy & Consulting", date:"2024 – 2025",
    tags:["Monetization","Strategy","Revenue Streams","Conversion Analysis"],
    problem:"Sapphire Media Ltd was struggling to monetize its audience effectively. Existing revenue streams were underperforming, and the company lacked a framework to evaluate new opportunities.",
    action:"Led a full monetization analysis. Evaluated visitor data and engagement metrics to identify 3 untapped revenue streams. Designed a hyper-personalized news app concept. Built a podcast monetization framework with influencer partnerships. Delivered email conversion optimization recommendations.",
    impact:"Identified revenue opportunities worth an estimated 25% increase in annual revenue. Email optimization improved open rates by 18%.",
    businessValue:"Strategic thinking in action — analyzing a business, finding gaps, and recommending actionable solutions backed by data.",
    metrics:{"Revenue Uplift":"25%","Email Lift":"18%","New Streams":"3"}, status:"done" },

  { id:3, title:"Rolls-Royce Holdings — Full Financial Analysis & Valuation", cat:"Financial Modeling", date:"Mar 2026",
    tags:["Excel","Valuation","SWOT","Ratio Analysis","6-Year P&L"],
    problem:"A complex aerospace & defence conglomerate with €18.9B revenue across 3 segments required an investment-ready analysis to evaluate its transformation trajectory.",
    action:"Built a 7-sheet dynamic Excel model covering income statement, segment breakdown, 15+ financial ratios, stock performance, SWOT framework, and strategic outlook aligned with 2028 targets.",
    impact:"Delivered a model with 108 interconnected formulas. Identified 17% upside potential based on operating margin expansion.",
    businessValue:"The type of analysis that supports investment committee decisions — answers 'should we invest?' with data, not opinion.",
    metrics:{"Sheets":"7","Formulas":"108","Years":"6","Charts":"5"}, status:"done" },

  { id:4, title:"LVMH — DCF Valuation with Scenario & Sensitivity Analysis", cat:"Financial Modeling", date:"Mar 2026",
    tags:["DCF","WACC","CAPM","Sensitivity Analysis","Luxury Sector"],
    problem:"Required a rigorous DCF model for the world's largest luxury company (€84.7B revenue) to determine intrinsic value versus market price.",
    action:"Built a 4-sheet DCF model with CAPM-based WACC (8.5%), 5-year revenue projection, free cash flow buildup, Gordon Growth terminal value, and a 30-cell sensitivity matrix.",
    impact:"Base case suggests 17% upside (€680 vs €580 market). Three scenarios: Bear €420 | Base €680 | Bull €950. 93 formulas, zero errors.",
    businessValue:"DCF valuation is the #1 skill tested in finance interviews. This demonstrates end-to-end capability from assumptions to a defensible price target.",
    metrics:{"Sheets":"4","Formulas":"93","Scenarios":"3"}, status:"done" },

  { id:5, title:"US Investment Banking — Competitive Intelligence Dashboard", cat:"Industry Analysis", date:"Mar 2026",
    tags:["Data Visualization","JPMorgan","Goldman Sachs","SEC Filings"],
    problem:"No single tool existed to compare Big 4 US banks across revenue, profitability, IB fees, and competitive positioning.",
    action:"Designed an interactive dashboard with 6 analytical tabs, toggleable bank filters, and 8 charts — sourced from FY 2024 SEC filings and earnings releases.",
    impact:"Enables instant multi-dimensional comparison. Reveals JPM dominance in retail + IB, GS leadership in trading revenue.",
    businessValue:"Competitive intelligence used by strategy teams at banks and consulting firms. Demonstrates ability to synthesize complex data into actionable insights.",
    metrics:{"Banks":"4","Charts":"8","Tabs":"6"}, status:"done" },

  { id:6, title:"CAC 40 Quantitative Stock Screener — Python", cat:"Data Analysis", date:"Mar 2026",
    tags:["Python","pandas","Sharpe Ratio","Correlation","Risk Analysis"],
    problem:"Needed a systematic approach to screen 15 major French stocks across risk, return, and diversification metrics.",
    action:"Built a Python analysis pipeline that calculates annualized returns, volatility, Sharpe ratios, correlation matrices, and rolling risk — generating 6 publication-quality charts.",
    impact:"Identified Hermès (Sharpe 1.52) and Safran as top risk-adjusted performers. Correlation analysis revealed optimal diversification pairs.",
    businessValue:"Quantitative analysis methodology used by portfolio managers and risk analysts at European asset management firms.",
    metrics:{"Stocks":"15","Charts":"6","Sectors":"7"}, status:"done" },
];

// ============ ACHIEVEMENTS ============
const ACHIEVEMENTS = [
  { metric:"30%", desc:"Average ROI improvement delivered for 50+ clients through data-driven ad spend optimization and channel-level performance tracking at Media Levelling." },
  { metric:"40%", desc:"Reduction in reporting time by replacing manual processes with automated Excel and Power BI dashboards — saving hours per week across client accounts." },
  { metric:"50+", desc:"Clients served as co-founder of a digital marketing and social media agency — managing budgets, tracking revenue, and optimizing campaign performance." },
  { metric:"200+", desc:"Dynamic Excel formulas built across 6 financial models — including DCF valuations, ratio analysis, and income statement projections." },
  { metric:"6", desc:"End-to-end analytical projects completed spanning financial modeling, industry analysis, Python-based stock screening, and ESG research." },
];

// ============ WHAT I BRING ============
const STRENGTHS = [
  { title:"Financial Analysis", desc:"I build financial models that answer business questions — DCF valuations, P&L analysis, ratio benchmarking, and revenue forecasting. Not just spreadsheets. Decision-making tools." },
  { title:"Data & Automation", desc:"Python, SQL, Excel (advanced), Power BI. I don't just analyze data — I automate the process. Dashboards that update themselves. Reports that used to take days now take minutes." },
  { title:"Business Thinking", desc:"Co-founding an agency taught me what no textbook covers: how to manage real client budgets, optimize real ad spend, and translate data into actions that move revenue." },
  { title:"European Readiness", desc:"Studied in India and France. Managed international clients. CFA candidate. Fluent in English and Hindi, B1 French. Ready for Luxembourg's multilingual business environment." },
];

// ============ EXPERIENCE ============
const EXPERIENCE = [
  { role:"Co-Founder & Revenue Analyst", company:"Media Levelling", type:"Digital Marketing & Social Media Agency", loc:"Jaipur, India", period:"Sep 2024 – Jan 2026", url:"https://media-levelling.com",
    bullets:["Co-founded a digital marketing and social media agency with consulting elements, serving 50+ entrepreneur clients across paid media, SEO, and lead generation","Managed client-level P&L tracking and ad spend allocation — drove 30% average ROI improvement across client portfolio","Built automated reporting dashboards in Excel & Power BI, eliminating 40% of manual reporting overhead","Implemented end-to-end invoicing automation, reducing payment cycle from 14 days to 3 days"] },
  { role:"Business Strategy Consultant", company:"Sapphire Media Ltd", type:"CMAPS — Universal AI University", loc:"India", period:"2024 – 2025",
    bullets:["Led monetization analysis for a digital media company — identified 3 untapped revenue streams worth an estimated 25% revenue increase","Designed a hyper-personalized news app concept with mood-based curation and multi-language support","Built a podcast monetization framework with influencer partnership model and projected ad revenue","Delivered conversion funnel optimization recommendations that improved email open rates by 18%"] },
  { role:"Customer Service Associate", company:"Amazon Development Center", type:"International Operations", loc:"Jaipur, India", period:"Aug 2022 – Jan 2023",
    bullets:["Analyzed performance KPIs and CRM data across India & Japan markets, identifying workflow patterns that reduced average handle time","Trained and onboarded 12+ new associates, contributing to measurable improvement in team quality metrics"] },
];

const EDUCATION = [
  { degree:"MSc Financial Analysis", school:"INSEEC MSc & MBA, Paris", period:"2025–2026", detail:"Valuation · DCF · Financial Markets · Forecasting · IFRS/GAAP · Thesis: ESG & Market Valuation" },
  { degree:"MBA Finance", school:"Universal AI University, India", period:"2024–2025", detail:"Corporate Finance · Financial Strategy · Investment Banking" },
  { degree:"B.Tech Electronics & Communication", school:"JECRC, Jaipur", period:"2018–2022", detail:"Engineering foundation: statistics, programming, systems thinking" },
];

const SKILLS = {
  "Finance & Analysis":["Financial Modeling","DCF Valuation","Ratio Analysis","P&L Management","Budget & Revenue Tracking","ROI Optimization","ESG Analysis","IFRS/GAAP"],
  "Data & Tools":["Python (pandas, NumPy, matplotlib)","SQL","Excel (Pivots, VLOOKUP, Macros, VBA)","Power BI","Tableau","Google Analytics","Statistical Analysis","Regression"],
  "Business Skills":["Business Analysis","Revenue Optimization","Competitive Intelligence","Market Research","Client Budget Management","Process Automation","Stakeholder Reporting","Strategic Consulting"],
};

const CERTS = ["CFA Level 1 Candidate","DataScientest Data Analysis (Paris)","Bloomberg Finance Fundamentals","J.P. Morgan Investment Banking","Google Data Analytics Professional","Fintech Law & Policy (France)"];

// ============ COMPONENT ============
export default function Portfolio() {
  const [scrollY,setScrollY]=useState(0);
  const [loaded,setLoaded]=useState(false);
  const [selP,setSelP]=useState(null);
  const [expIdx,setExpIdx]=useState(0);
  const [filter,setFilter]=useState("All");

  useEffect(()=>{setTimeout(()=>setLoaded(true),150);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const go=(id)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const cats=["All",...new Set(PROJECTS.map(p=>p.cat))];
  const filtered=filter==="All"?PROJECTS:PROJECTS.filter(p=>p.cat===filter);

  return (
    <div style={{fontFamily:"'Source Serif 4',Georgia,serif",background:"#FAFBFC",color:"#1a1a2e",minHeight:"100vh",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}::selection{background:#2563EB;color:#fff}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#1B3A5C;border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .pc{cursor:pointer;transition:all .4s cubic-bezier(.23,1,.32,1);background:#fff;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden}.pc:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,.08);border-color:#2563EB}
        .fb{font-family:'Inter',sans-serif;font-size:12px;font-weight:500;padding:6px 16px;border:1px solid #E2E8F0;background:#fff;color:#64748B;border-radius:20px;cursor:pointer;transition:all .2s}.fb:hover{border-color:#2563EB;color:#2563EB}.fb.a{background:#0D1B2A;color:#fff;border-color:#0D1B2A}
        .mo{position:fixed;inset:0;background:rgba(13,27,42,.6);backdrop-filter:blur(6px);z-index:1000;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s}
        .md{background:#fff;border-radius:12px;max-width:740px;width:92%;max-height:88vh;overflow-y:auto;position:relative;animation:fadeUp .4s;box-shadow:0 24px 64px rgba(0,0,0,.15)}
        .cb{position:absolute;top:16px;right:16px;background:#F0F4F8;border:none;color:#666;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;z-index:10}.cb:hover{background:#0D1B2A;color:#fff}
        .tg{font-family:'Inter',sans-serif;font-size:10px;font-weight:600;padding:3px 10px;background:#EEF2F7;color:#2563EB;border-radius:3px;display:inline-block}
        .et{font-family:'Inter',sans-serif;font-size:13px;font-weight:500;padding:10px 20px;border:none;cursor:pointer;background:transparent;color:#94A3B8;border-left:3px solid transparent;text-align:left;display:block;width:100%;transition:all .2s}.et:hover{color:#0D1B2A;background:#F8FAFC}.et.a{color:#0D1B2A;border-left-color:#2563EB;background:#EEF2F7;font-weight:600}
      `}</style>

      {/* ====== NAVBAR ====== */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"12px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>40?"rgba(250,251,252,.97)":"transparent",backdropFilter:scrollY>40?"blur(16px)":"none",borderBottom:scrollY>40?"1px solid #E2E8F0":"1px solid transparent",transition:"all .4s"}}>
        <div style={{fontFamily:"'Source Serif 4',serif",fontSize:20,fontWeight:700,color:"#0D1B2A"}}>Akshat Sharma</div>
        <div style={{display:"flex",gap:20,alignItems:"center"}}>
          {["Projects","Achievements","Strengths","Experience","Skills","Contact"].map(s=><button key={s} onClick={()=>go(s.toLowerCase())} style={{fontFamily:"'Inter'",fontSize:12,fontWeight:500,color:"#64748B",background:"none",border:"none",cursor:"pointer"}}>{s}</button>)}
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:11,fontWeight:700,padding:"8px 20px",background:"#0D1B2A",color:"#fff",border:"none",borderRadius:5,cursor:"pointer"}}>LinkedIn</button></a>
        </div>
      </nav>

      {/* ====== 1. HERO ====== */}
      <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"0 48px",background:"linear-gradient(165deg,#0D1B2A 0%,#1B3A5C 40%,#274C77 100%)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 1px 1px,rgba(255,255,255,.02) 1px,transparent 0)",backgroundSize:"40px 40px"}}/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:72,alignItems:"center",maxWidth:1100,width:"100%",margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{opacity:loaded?1:0,animation:loaded?"fadeUp .7s ease forwards":"none"}}>
            <div style={{fontFamily:"'Fira Code'",fontSize:12,letterSpacing:2,color:"#64B5F6",textTransform:"uppercase",marginBottom:20}}>Finance & Business Analyst · CFA Level 1 Candidate</div>
            <h1 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(38px,5vw,58px)",fontWeight:700,color:"#fff",lineHeight:1.12,letterSpacing:-1,marginBottom:18}}>Akshat Sharma</h1>
            <p style={{fontFamily:"'Inter'",fontSize:16,color:"rgba(255,255,255,.8)",maxWidth:520,marginBottom:10,lineHeight:1.7}}>I use data to drive revenue, optimize performance, and support strategic decision-making.</p>
            <p style={{fontFamily:"'Inter'",fontSize:13,color:"rgba(255,255,255,.4)",maxWidth:520,marginBottom:32}}>MSc Financial Analysis (INSEEC Paris) · Seeking Finance & Business Analyst roles in Luxembourg & Europe · EU Work Authorization</p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <button onClick={()=>go("projects")} style={{fontFamily:"'Inter'",fontSize:12,fontWeight:700,padding:"12px 28px",background:"#2563EB",color:"#fff",border:"none",borderRadius:6,cursor:"pointer"}}>View My Work</button>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:700,padding:"12px 28px",background:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,.3)",borderRadius:6,cursor:"pointer"}}>Download CV</button></a>
              <a href={DRIVE_FOLDER} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:600,padding:"12px 28px",background:"transparent",color:"rgba(255,255,255,.45)",border:"1.5px solid rgba(255,255,255,.1)",borderRadius:6,cursor:"pointer"}}>All Project Files</button></a>
            </div>
            <div style={{display:"flex",gap:40,marginTop:48,paddingTop:24,borderTop:"1px solid rgba(255,255,255,.08)"}}>
              {[{n:"6",l:"Analytical Projects"},{n:"50+",l:"Clients Served"},{n:"30%",l:"Avg ROI Lift"},{n:"200+",l:"Formulas Built"}].map((s,i)=><div key={i}><div style={{fontFamily:"'Source Serif 4'",fontSize:22,fontWeight:700,color:"#64B5F6"}}>{s.n}</div><div style={{fontFamily:"'Inter'",fontSize:10,color:"rgba(255,255,255,.3)",letterSpacing:1.5,textTransform:"uppercase",marginTop:2}}>{s.l}</div></div>)}
            </div>
          </div>
          <div style={{opacity:loaded?1:0,animation:loaded?"fadeUp .7s ease .2s forwards":"none"}}>
            <div style={{position:"relative"}}><div style={{width:270,height:270,borderRadius:12,overflow:"hidden",border:"3px solid rgba(100,180,255,.12)",boxShadow:"0 24px 64px rgba(0,0,0,.3)"}}><img src={PHOTO} alt="Akshat Sharma" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
              <div style={{position:"absolute",bottom:-12,right:-12,background:"#fff",borderRadius:8,padding:"7px 12px",boxShadow:"0 8px 24px rgba(0,0,0,.1)",display:"flex",alignItems:"center",gap:5}}><div style={{width:7,height:7,borderRadius:"50%",background:"#22C55E"}}/><span style={{fontFamily:"'Inter'",fontSize:11,fontWeight:600,color:"#0D1B2A"}}>Available in Luxembourg & EU</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2. ABOUT ====== */}
      <section style={{padding:"80px 48px",background:"#fff",borderBottom:"1px solid #E2E8F0"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2563EB",fontWeight:500,marginBottom:8}}>About</div>
          <h2 style={{fontFamily:"'Source Serif 4'",fontSize:28,fontWeight:700,color:"#0D1B2A",marginBottom:24}}>Data-Driven Analyst. Business-Focused Problem Solver.</h2>
          <p style={{fontFamily:"'Inter'",fontSize:14,color:"#475569",lineHeight:1.9,marginBottom:16}}>I am a Finance & Business Analyst focused on data-driven decision-making, revenue optimization, and business performance. I co-founded Media Levelling, a digital marketing and social media agency with consulting elements, where I worked with 50+ clients across paid media, SEO, and lead generation. I managed client budgets, tracked revenue by channel, improved average ROI by 30%, and reduced reporting time by 40% by building automated dashboards in Excel and Power BI.</p>
          <p style={{fontFamily:"'Inter'",fontSize:14,color:"#475569",lineHeight:1.9,marginBottom:16}}>My foundation combines hands-on business experience with formal financial training — MSc Financial Analysis at INSEEC Paris, CFA Level 1 candidacy, and an engineering degree that gives me Python fluency, SQL proficiency, and the analytical discipline to build financial models with 200+ dynamic formulas.</p>
          <p style={{fontFamily:"'Inter'",fontSize:13,color:"#94A3B8",lineHeight:1.8}}>I am currently seeking Finance Analyst, Business Analyst, and Data Analyst opportunities in Luxembourg and across Europe. I bring a rare combination: someone who understands business operations, financial analysis, and data — and can connect all three to improve performance.</p>
        </div>
      </section>

      {/* ====== 3. PROJECTS ====== */}
      <section id="projects" style={{padding:"100px 48px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2563EB",fontWeight:500,marginBottom:8}}>Portfolio</div>
        <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(28px,3.5vw,38px)",fontWeight:700,color:"#0D1B2A",marginBottom:32}}>Projects & Analysis</h2>
        <div style={{display:"flex",gap:8,marginBottom:28,flexWrap:"wrap"}}>{cats.map(c=><button key={c} className={`fb ${filter===c?"a":""}`} onClick={()=>setFilter(c)}>{c}</button>)}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:20}}>
          {filtered.map(p=>(
            <div key={p.id} className="pc" onClick={()=>setSelP(p)}>
              <div style={{height:4,background:"#2563EB"}}/>
              <div style={{padding:26}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><span className="tg">{p.cat}</span><span style={{fontFamily:"'Inter'",fontSize:11,color:"#94A3B8"}}>{p.date}</span></div>
                <h3 style={{fontFamily:"'Source Serif 4'",fontSize:17,fontWeight:600,color:"#0D1B2A",marginBottom:10,lineHeight:1.35}}>{p.title}</h3>
                <p style={{fontFamily:"'Inter'",fontSize:12.5,color:"#64748B",lineHeight:1.65,marginBottom:14}}>{p.impact}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{p.tags.slice(0,4).map(t=><span key={t} style={{fontFamily:"'Inter'",fontSize:10,color:"#94A3B8",padding:"2px 8px",border:"1px solid #E2E8F0",borderRadius:3}}>{t}</span>)}</div>
                {Object.keys(p.metrics).length>0&&<div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(Object.keys(p.metrics).length,4)},1fr)`,gap:8,paddingTop:16,marginTop:14,borderTop:"1px solid #F1F5F9"}}>
                  {Object.entries(p.metrics).map(([k,v])=><div key={k} style={{textAlign:"center"}}><div style={{fontFamily:"'Source Serif 4'",fontSize:17,fontWeight:700,color:"#2563EB"}}>{v}</div><div style={{fontFamily:"'Inter'",fontSize:9,color:"#94A3B8",textTransform:"uppercase",letterSpacing:1,marginTop:2}}>{k}</div></div>)}
                </div>}
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:36}}><a href={DRIVE_FOLDER} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:13,fontWeight:600,padding:"12px 28px",background:"#F0F4F8",color:"#0D1B2A",border:"1px solid #E2E8F0",borderRadius:6,cursor:"pointer"}}>View All Files on Google Drive</button></a></div>
      </section>

      {/* ====== 4. KEY ACHIEVEMENTS ====== */}
      <section id="achievements" style={{padding:"100px 48px",background:"#0D1B2A"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#64B5F6",fontWeight:500,marginBottom:8}}>Track Record</div>
          <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(28px,3.5vw,38px)",fontWeight:700,color:"#fff",marginBottom:40}}>Key Achievements</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:20}}>
            {ACHIEVEMENTS.map((a,i)=><div key={i} style={{padding:28,borderRadius:8,border:"1px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.03)"}}>
              <div style={{fontFamily:"'Source Serif 4'",fontSize:32,fontWeight:700,color:"#64B5F6",marginBottom:8}}>{a.metric}</div>
              <p style={{fontFamily:"'Inter'",fontSize:13,color:"rgba(255,255,255,.55)",lineHeight:1.65}}>{a.desc}</p>
            </div>)}
          </div>
        </div>
      </section>

      {/* ====== 5. WHAT I BRING ====== */}
      <section id="strengths" style={{padding:"100px 48px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2563EB",fontWeight:500,marginBottom:8}}>Why Me</div>
        <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(28px,3.5vw,38px)",fontWeight:700,color:"#0D1B2A",marginBottom:40}}>What I Bring to the Table</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}}>
          {STRENGTHS.map((s,i)=><div key={i} style={{background:"#fff",borderRadius:8,border:"1px solid #E2E8F0",padding:28}}>
            <h3 style={{fontFamily:"'Inter'",fontSize:15,fontWeight:700,color:"#0D1B2A",marginBottom:10}}>{s.title}</h3>
            <p style={{fontFamily:"'Inter'",fontSize:13,color:"#64748B",lineHeight:1.7}}>{s.desc}</p>
          </div>)}
        </div>
      </section>

      {/* ====== 6. EXPERIENCE & EDUCATION ====== */}
      <section id="experience" style={{padding:"100px 48px",background:"#F0F4F8"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2563EB",fontWeight:500,marginBottom:8}}>Career</div>
          <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(28px,3.5vw,38px)",fontWeight:700,color:"#0D1B2A",marginBottom:32}}>Experience & Education</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}>
            <div>
              <h3 style={{fontFamily:"'Inter'",fontSize:13,fontWeight:700,color:"#0D1B2A",textTransform:"uppercase",letterSpacing:1.5,marginBottom:14}}>Professional</h3>
              <div style={{background:"#fff",borderRadius:8,border:"1px solid #E2E8F0",overflow:"hidden",display:"grid",gridTemplateColumns:"170px 1fr"}}>
                <div style={{borderRight:"1px solid #E2E8F0",paddingTop:6}}>{EXPERIENCE.map((e,i)=><button key={i} className={`et ${expIdx===i?"a":""}`} onClick={()=>setExpIdx(i)}>{e.company}</button>)}</div>
                <div style={{padding:22}}>
                  <h3 style={{fontSize:16,fontWeight:600,color:"#0D1B2A",marginBottom:3}}>{EXPERIENCE[expIdx].role}</h3>
                  <div style={{fontFamily:"'Inter'",fontSize:12.5,color:"#2563EB",fontWeight:500,marginBottom:2}}>
                    {EXPERIENCE[expIdx].url?<a href={EXPERIENCE[expIdx].url} target="_blank" rel="noopener noreferrer" style={{color:"#2563EB",textDecoration:"none"}}>{EXPERIENCE[expIdx].company} ↗</a>:EXPERIENCE[expIdx].company}
                    {EXPERIENCE[expIdx].type?` — ${EXPERIENCE[expIdx].type}`:""}
                  </div>
                  <div style={{fontFamily:"'Fira Code'",fontSize:11,color:"#94A3B8",marginBottom:16}}>{EXPERIENCE[expIdx].period} · {EXPERIENCE[expIdx].loc}</div>
                  {EXPERIENCE[expIdx].bullets.map((b,i)=><div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:6}}><div style={{width:4,height:4,borderRadius:"50%",background:"#2563EB",marginTop:6,flexShrink:0}}/><p style={{fontFamily:"'Inter'",fontSize:12.5,color:"#475569",lineHeight:1.6}}>{b}</p></div>)}
                </div>
              </div>
            </div>
            <div>
              <h3 style={{fontFamily:"'Inter'",fontSize:13,fontWeight:700,color:"#0D1B2A",textTransform:"uppercase",letterSpacing:1.5,marginBottom:14}}>Education</h3>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {EDUCATION.map((e,i)=><div key={i} style={{background:"#fff",borderRadius:8,border:"1px solid #E2E8F0",padding:18}}><div style={{fontFamily:"'Fira Code'",fontSize:10,color:"#2563EB",letterSpacing:1,marginBottom:3}}>{e.period}</div><h4 style={{fontSize:15,fontWeight:600,color:"#0D1B2A",marginBottom:2}}>{e.degree}</h4><div style={{fontFamily:"'Inter'",fontSize:12.5,color:"#2563EB",fontWeight:500,marginBottom:3}}>{e.school}</div>{e.detail&&<p style={{fontFamily:"'Inter'",fontSize:11,color:"#94A3B8"}}>{e.detail}</p>}</div>)}
              </div>
              <h3 style={{fontFamily:"'Inter'",fontSize:13,fontWeight:700,color:"#0D1B2A",textTransform:"uppercase",letterSpacing:1.5,marginTop:20,marginBottom:10}}>Certifications</h3>
              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{CERTS.map(c=><div key={c} style={{fontFamily:"'Inter'",fontSize:11,fontWeight:500,padding:"5px 12px",background:"#fff",border:"1px solid #E2E8F0",borderRadius:4,color:"#2563EB"}}>{c}</div>)}</div>
              <h3 style={{fontFamily:"'Inter'",fontSize:13,fontWeight:700,color:"#0D1B2A",textTransform:"uppercase",letterSpacing:1.5,marginTop:20,marginBottom:10}}>Languages</h3>
              <div style={{display:"flex",gap:10}}>{[{l:"English",v:"Fluent"},{l:"French",v:"B1"},{l:"Hindi",v:"Fluent"}].map(l=><div key={l.l} style={{background:"#fff",borderRadius:8,border:"1px solid #E2E8F0",padding:"8px 16px",textAlign:"center",flex:1}}><div style={{fontFamily:"'Inter'",fontSize:13,fontWeight:600,color:"#0D1B2A"}}>{l.l}</div><div style={{fontFamily:"'Fira Code'",fontSize:10,color:"#94A3B8",marginTop:1}}>{l.v}</div></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 7. SKILLS ====== */}
      <section id="skills" style={{padding:"100px 48px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2563EB",fontWeight:500,marginBottom:8}}>Expertise</div>
        <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(28px,3.5vw,38px)",fontWeight:700,color:"#0D1B2A",marginBottom:32}}>Skills & Tools</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>{Object.entries(SKILLS).map(([cat,skills])=><div key={cat} style={{background:"#fff",borderRadius:8,border:"1px solid #E2E8F0",padding:24}}><h3 style={{fontFamily:"'Inter'",fontSize:12,fontWeight:700,color:"#2563EB",marginBottom:12,textTransform:"uppercase",letterSpacing:1.2}}>{cat}</h3><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{skills.map(s=><span key={s} style={{fontFamily:"'Inter'",fontSize:11.5,fontWeight:500,padding:"5px 12px",background:"#F0F4F8",color:"#334155",borderRadius:20}}>{s}</span>)}</div></div>)}</div>
      </section>

      {/* ====== 8. CTA ====== */}
      <section id="contact" style={{padding:"100px 48px",background:"linear-gradient(165deg,#0D1B2A,#1B3A5C)",textAlign:"center"}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <div style={{fontFamily:"'Fira Code'",fontSize:11,letterSpacing:3,color:"#64B5F6",textTransform:"uppercase",marginBottom:12}}>Let's Connect</div>
          <h2 style={{fontFamily:"'Source Serif 4'",fontSize:"clamp(26px,3.5vw,36px)",fontWeight:700,color:"#fff",marginBottom:14,lineHeight:1.3}}>Seeking Finance & Business Analyst Opportunities in Luxembourg & Europe</h2>
          <p style={{fontFamily:"'Inter'",fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.8,marginBottom:8}}>I bring financial modeling expertise, data analytics proficiency, and a track record of delivering measurable business results — from 30% ROI improvement to automated reporting systems that saved 40% of manual effort.</p>
          <p style={{fontFamily:"'Fira Code'",fontSize:11,color:"rgba(255,255,255,.25)",marginBottom:32}}>EU Work Authorization · Available to relocate for the right opportunity</p>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="mailto:akshatsharma212205@gmail.com" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:700,padding:"12px 24px",background:"#2563EB",color:"#fff",border:"none",borderRadius:6,cursor:"pointer"}}>akshatsharma212205@gmail.com</button></a>
            <a href="tel:+33758396897" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:600,padding:"12px 24px",background:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,.2)",borderRadius:6,cursor:"pointer"}}>+33 758 396 897</button></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:600,padding:"12px 24px",background:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,.2)",borderRadius:6,cursor:"pointer"}}>LinkedIn</button></a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button style={{fontFamily:"'Inter'",fontSize:12,fontWeight:600,padding:"12px 24px",background:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,.2)",borderRadius:6,cursor:"pointer"}}>Download CV</button></a>
          </div>
        </div>
        <div style={{fontFamily:"'Inter'",fontSize:10,color:"rgba(255,255,255,.1)",marginTop:60}}>Akshat Sharma · Finance & Business Analyst · © {new Date().getFullYear()}</div>
      </section>

      {/* ====== PROJECT MODAL ====== */}
      {selP&&<div className="mo" onClick={e=>e.target===e.currentTarget&&setSelP(null)}><div className="md"><button className="cb" onClick={()=>setSelP(null)}>✕</button><div style={{height:4,background:"#2563EB"}}/><div style={{padding:"28px 36px"}}>
        <div style={{display:"flex",gap:8,marginBottom:14}}><span className="tg">{selP.cat}</span><span style={{fontFamily:"'Inter'",fontSize:11,color:"#94A3B8",alignSelf:"center"}}>{selP.date}</span></div>
        <h2 style={{fontFamily:"'Source Serif 4'",fontSize:22,fontWeight:700,color:"#0D1B2A",marginBottom:20,lineHeight:1.3}}>{selP.title}</h2>
        {[{label:"THE PROBLEM",text:selP.problem,color:"#EF4444"},{label:"WHAT I DID",text:selP.action,color:"#2563EB"},{label:"THE IMPACT",text:selP.impact,color:"#22C55E"},{label:"BUSINESS VALUE",text:selP.businessValue,color:"#0D1B2A"}].map(s=>s.text?<div key={s.label} style={{marginBottom:16}}><div style={{fontFamily:"'Inter'",fontSize:10,fontWeight:700,color:s.color,letterSpacing:1.5,marginBottom:6}}>{s.label}</div><p style={{fontFamily:"'Inter'",fontSize:13.5,color:"#475569",lineHeight:1.7}}>{s.text}</p></div>:null)}
        {Object.keys(selP.metrics).length>0&&<div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(Object.keys(selP.metrics).length,4)},1fr)`,gap:10,marginTop:8}}>{Object.entries(selP.metrics).map(([k,v])=><div key={k} style={{textAlign:"center",padding:14,background:"#F8FAFC",borderRadius:6}}><div style={{fontFamily:"'Source Serif 4'",fontSize:20,fontWeight:700,color:"#2563EB"}}>{v}</div><div style={{fontFamily:"'Inter'",fontSize:9,color:"#94A3B8",textTransform:"uppercase",letterSpacing:1,marginTop:2}}>{k}</div></div>)}</div>}
      </div></div></div>}
    </div>
  );
}
