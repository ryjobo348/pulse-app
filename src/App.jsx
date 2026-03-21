import { useState, useEffect } from “react”;
import { createClient } from “@supabase/supabase-js”;

// ── Supabase client ─────────────────────────────────────────────────
const SUPABASE_URL  = “https://udijfrjpvnypzxxurvzo.supabase.co”;
const SUPABASE_ANON = “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaWpmcmpwdm55cHp4eHVydnpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMTcwNjAsImV4cCI6MjA4OTU5MzA2MH0.4fjFL3vQfEOSSInfrRlwJrxR3a4BlivMJzaQV2l-AB0”;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

// ── Constants ───────────────────────────────────────────────────────
const ICONS  = [“🔥”,“💧”,“📖”,“🏃”,“🧘”,“💪”,“🥗”,“😴”,“✍️”,“🎯”,“🎸”,“🌿”];
const COLORS = [”#FF4D4D”,”#FF8C42”,”#FFD166”,”#06D6A0”,”#118AB2”,”#A855F7”,”#EC4899”,”#14B8A6”,”#F59E0B”,”#6366F1”,”#10B981”,”#EF4444”];
const QUOTES = [
“Small steps daily become giant leaps yearly.”,
“Discipline is choosing what you want most over what you want now.”,
“The secret of your future is hidden in your daily routine.”,
“We are what we repeatedly do.”,
“Success is the sum of small efforts, repeated day in and day out.”,
];

function todayKey() { return new Date().toISOString().split(“T”)[0]; }
function genCode()  { return String(Math.floor(100000 + Math.random() * 900000)); }

function getStreak(logs, id) {
let s = 0; const t = new Date();
for (let i = 0; i < 365; i++) {
const d = new Date(t); d.setDate(t.getDate() - i);
if (logs[d.toISOString().split(“T”)[0]]?.[id]) s++; else break;
}
return s;
}
function getLast7(logs, id) {
return Array.from({length:7},(*,i)=>{ const d=new Date(); d.setDate(d.getDate()-(6-i)); return d.toISOString().split(“T”)[0]; }).map(k=>!!logs[k]?.[id]);
}
function getLast30Keys() {
return Array.from({length:30},(*,i)=>{ const d=new Date(); d.setDate(d.getDate()-(29-i)); return d.toISOString().split(“T”)[0]; });
}
function pwStrength(pw) {
if (!pw) return {label:””,color:“transparent”,width:“0%”};
let s=0;
if(pw.length>=6)s++; if(pw.length>=10)s++; if(/[A-Z]/.test(pw))s++; if(/[0-9]/.test(pw))s++; if(/[^A-Za-z0-9]/.test(pw))s++;
if(s<=1) return {label:“Weak”,  color:”#FF4D4D”,width:“25%”};
if(s<=2) return {label:“Fair”,  color:”#FF8C42”,width:“50%”};
if(s<=3) return {label:“Good”,  color:”#FFD166”,width:“75%”};
return           {label:“Strong”,color:”#06D6A0”,width:“100%”};
}

const EyeIcon = ({open}) => open
? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;

// ── CSS ─────────────────────────────────────────────────────────────
const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Playfair+Display:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{width:0} body{background:#0A0A0F} .orb{position:fixed;border-radius:50%;filter:blur(80px);opacity:.15;pointer-events:none;animation:float 8s ease-in-out infinite} @keyframes float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-28px) scale(1.05)}} @keyframes slideUp{from{transform:translateY(28px);opacity:0}to{transform:translateY(0);opacity:1}} @keyframes tickBounce{0%{transform:scale(1)}40%{transform:scale(1.4)}100%{transform:scale(1)}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes popIn{0%{transform:scale(0) rotate(-10deg);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}} @keyframes spin{to{transform:rotate(360deg)}} .slide-up{animation:slideUp .35s ease forwards} .fade-in{animation:fadeIn .3s ease forwards} .pop{animation:tickBounce .5s cubic-bezier(.34,1.56,.64,1)} .pop-in{animation:popIn .5s cubic-bezier(.34,1.56,.64,1) forwards} .spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite;display:inline-block} .field{background:#13131C;border:1.5px solid #2A2A3A;border-radius:14px;color:#F0EBE1;font-size:15px;font-family:'DM Sans',sans-serif;padding:13px 16px;width:100%;outline:none;transition:border-color .2s} .field:focus{border-color:#5A5AFF} .field::placeholder{color:#444460} .btn-primary{background:linear-gradient(135deg,#5A5AFF,#A855F7);border:none;border-radius:14px;color:#fff;font-size:15px;font-weight:600;font-family:'DM Sans',sans-serif;padding:14px;width:100%;cursor:pointer;transition:opacity .2s,transform .15s;letter-spacing:.3px;display:flex;align-items:center;justify-content:center;gap:8px} .btn-primary:hover{opacity:.9;transform:translateY(-1px)} .btn-primary:active{transform:scale(.98)} .btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none} .btn-ghost{background:none;border:1.5px solid #2A2A3A;border-radius:14px;color:#F0EBE1;font-size:15px;font-family:'DM Sans',sans-serif;padding:13px;width:100%;cursor:pointer;transition:border-color .2s,background .2s;display:flex;align-items:center;justify-content:center;gap:8px} .btn-ghost:hover{border-color:#5A5AFF;background:#1A1A2A} .btn-link{background:none;border:none;color:#5A5AFF;font-size:13px;font-family:'DM Sans',sans-serif;cursor:pointer;padding:0;transition:opacity .2s} .btn-link:hover{opacity:.75} .nav-btn{background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;color:#555570;font-size:11px;font-family:'DM Sans',sans-serif;transition:color .2s;padding:8px 16px} .nav-btn.active{color:#F0EBE1} .nav-btn svg{transition:transform .2s} .nav-btn:hover svg,.nav-btn.active svg{transform:translateY(-2px)} .habit-row{animation:slideUp .4s ease forwards;transition:background .2s,transform .15s} .habit-row:active{transform:scale(.97)} .check-btn{border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s cubic-bezier(.34,1.56,.64,1)} .check-btn:hover{transform:scale(1.12)} .tag{border-radius:8px;padding:8px 11px;cursor:pointer;font-size:20px;transition:transform .15s;border:2px solid transparent} .tag:hover{transform:scale(1.15)} .tag.selected{border-color:#F0EBE1;transform:scale(1.1);box-shadow:0 0 12px rgba(255,255,255,.2)} .ring-bg{fill:none;stroke:#1E1E2A;stroke-width:8} .ring-fill{fill:none;stroke-width:8;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .8s cubic-bezier(.4,0,.2,1)} .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.78);backdrop-filter:blur(8px);z-index:100;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s} .modal{background:#0F0F1A;border-radius:28px 28px 0 0;padding:28px 24px 52px;width:100%;max-width:430px;border-top:1px solid #2A2A3A;animation:slideUp .3s ease;max-height:90vh;overflow-y:auto} .pro-badge{background:linear-gradient(135deg,#FFD166,#FF8C42);color:#0A0A0F;font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;letter-spacing:.5px} .streak-day{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:11px;cursor:pointer;transition:all .2s;border:none;font-family:'DM Sans',sans-serif} .del-btn{background:none;border:none;cursor:pointer;color:#333350;font-size:18px;transition:color .2s,transform .15s;padding:4px 8px} .del-btn:hover{color:#FF4D4D;transform:scale(1.2)} .tab{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;padding:8px 16px;border-radius:99px;transition:all .2s;color:#666680} .tab.active{background:#1E1E2A;color:#F0EBE1;font-weight:600} .code-input{background:#13131C;border:2px solid #2A2A3A;border-radius:14px;color:#F0EBE1;font-size:26px;font-family:'DM Sans',sans-serif;padding:14px 16px;width:100%;outline:none;transition:border-color .2s;text-align:center;letter-spacing:12px;font-weight:700} .code-input:focus{border-color:#5A5AFF} .code-input::placeholder{letter-spacing:4px;font-size:15px;font-weight:400;color:#333350} .pw-wrap{position:relative;width:100%} .pw-wrap .field{padding-right:48px} .pw-eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#444460;transition:color .2s;display:flex;align-items:center;padding:4px} .pw-eye:hover{color:#A0A0D0} .info-box{background:#12122A;border:1px solid #3A3A66;border-radius:12px;padding:12px 14px;font-size:13px;color:#A0A0D0;line-height:1.6;white-space:pre-line} .err-box{background:#FF4D4D14;border:1px solid #FF4D4D44;border-radius:12px;padding:11px 14px;font-size:13px;color:#FF7070;line-height:1.5} .step-back{background:none;border:none;cursor:pointer;color:#555570;font-size:13px;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:5px;padding:0 0 18px 0;transition:color .2s} .step-back:hover{color:#F0EBE1} .strength-bar{height:4px;border-radius:99px;transition:all .4s;margin-top:6px} .skeleton{background:linear-gradient(90deg,#1A1A26 25%,#252535 50%,#1A1A26 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:16px} @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}`;

// ── App ─────────────────────────────────────────────────────────────
export default function App() {
const [user,    setUser]    = useState(null);
const [profile, setProfile] = useState(null); // subscription info
const [habits,  setHabits]  = useState([]);
const [logs,    setLogs]    = useState({});
const [loading, setLoading] = useState(true);
const [saving,  setSaving]  = useState(false);

const [view,    setView]    = useState(“home”);
const [modal,   setModal]   = useState(null);
const [editTarget,    setEditTarget]    = useState(null);
const [quoteIdx,      setQuoteIdx]      = useState(0);
const [animId,        setAnimId]        = useState(null);
const [confirmDelete, setConfirmDelete] = useState(false);
const today = todayKey();

const [form, setForm] = useState({ name:””, icon:“🔥”, color:COLORS[0] });

// Auth state
const [authMode,    setAuthMode]    = useState(“login”);
const [authStep,    setAuthStep]    = useState(“form”);
const [authForm,    setAuthForm]    = useState({ name:””, email:””, password:””, newPassword:”” });
const [authError,   setAuthError]   = useState(””);
const [authInfo,    setAuthInfo]    = useState(””);
const [authLoading, setAuthLoading] = useState(false);
const [resetInput,  setResetInput]  = useState(””);
const [showPw,      setShowPw]      = useState(false);
const [showNewPw,   setShowNewPw]   = useState(false);

// ── Boot: check if already logged in ──
useEffect(() => {
supabase.auth.getSession().then(({ data: { session } }) => {
if (session) { setUser(session.user); loadData(session.user.id); }
else setLoading(false);
});
const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
if (session) { setUser(session.user); loadData(session.user.id); }
else { setUser(null); setProfile(null); setHabits([]); setLogs({}); setLoading(false); }
});
return () => listener.subscription.unsubscribe();
}, []);

useEffect(() => {
const t = setInterval(() => setQuoteIdx(q => (q+1) % QUOTES.length), 6000);
return () => clearInterval(t);
}, []);

// ── Load all user data from Supabase ──
const loadData = async (userId) => {
setLoading(true);
try {
// Load habits
const { data: habitsData } = await supabase
.from(“habits”).select(”*”).eq(“user_id”, userId).order(“created_at”);
setHabits(habitsData || []);

```
  // Load logs for last 30 days
  const since = getLast30Keys()[0];
  const { data: logsData } = await supabase
    .from("habit_logs").select("*").eq("user_id", userId).gte("log_date", since);

  // Convert flat logs array → { dateKey: { habitId: true } }
  const logsMap = {};
  (logsData || []).forEach(l => {
    if (!logsMap[l.log_date]) logsMap[l.log_date] = {};
    logsMap[l.log_date][l.habit_id] = l.completed;
  });
  setLogs(logsMap);

  // Load subscription
  const { data: subData } = await supabase
    .from("subscriptions").select("*").eq("user_id", userId).single();
  setProfile(subData || { plan: "free" });
} catch (e) {
  console.error(e);
}
setLoading(false);
```

};

const isPro   = profile?.plan === “pro”;
const atLimit = !isPro && habits.length >= 3;

// ── Auth ──
const resetAuth = () => {
setAuthStep(“form”); setAuthError(””); setAuthInfo(””);
setResetInput(””); setShowPw(false); setShowNewPw(false); setAuthLoading(false);
};
const openAuth = (mode) => { setAuthMode(mode); resetAuth(); setModal(“auth”); };

const handleSignup = async () => {
setAuthError(””);
if (!authForm.name.trim())         return setAuthError(“Please enter your name.”);
if (!authForm.email.includes(”@”)) return setAuthError(“Enter a valid email address.”);
if (authForm.password.length < 6)  return setAuthError(“Password must be at least 6 characters.”);
setAuthLoading(true);
const { error } = await supabase.auth.signUp({
email: authForm.email.trim(),
password: authForm.password,
options: { data: { full_name: authForm.name.trim() } }
});
setAuthLoading(false);
if (error) return setAuthError(error.message);
setAuthInfo(`A verification email has been sent to:\n${authForm.email.trim()}\n\nClick the link in the email to verify your account, then come back and log in.`);
setAuthStep(“success”);
};

const handleLogin = async () => {
setAuthError(””);
if (!authForm.email || !authForm.password) return setAuthError(“Please fill in all fields.”);
setAuthLoading(true);
const { error } = await supabase.auth.signInWithPassword({
email: authForm.email.trim(),
password: authForm.password,
});
setAuthLoading(false);
if (error) return setAuthError(“Incorrect email or password.”);
setModal(null); resetAuth();
};

const handleForgotRequest = async () => {
setAuthError(””);
if (!authForm.email.includes(”@”)) return setAuthError(“Enter your account email address.”);
setAuthLoading(true);
const { error } = await supabase.auth.resetPasswordForEmail(authForm.email.trim());
setAuthLoading(false);
if (error) return setAuthError(error.message);
setAuthInfo(`A password reset link has been sent to:\n${authForm.email.trim()}\n\nCheck your inbox and follow the link to set a new password.`);
setAuthStep(“success”);
};

const logout = async () => {
await supabase.auth.signOut();
setModal(null); setConfirmDelete(false);
};

const deleteAccount = async () => {
// Delete all user data — Supabase cascades handle the rest
await supabase.from(“habits”).delete().eq(“user_id”, user.id);
await supabase.from(“subscriptions”).delete().eq(“user_id”, user.id);
await supabase.auth.signOut();
setConfirmDelete(false); setModal(null);
};

// ── Habits ──
const toggleHabit = async (id) => {
const done = !logs[today]?.[id];
if (done) { setAnimId(id); setTimeout(() => setAnimId(null), 700); }

```
// Optimistic update
setLogs(prev => ({...prev, [today]: {...(prev[today]||{}), [id]: done}}));

if (done) {
  await supabase.from("habit_logs").upsert({ habit_id:id, user_id:user.id, log_date:today, completed:true });
} else {
  await supabase.from("habit_logs").delete().match({ habit_id:id, log_date:today });
  setLogs(prev => { const d={...prev[today]}; delete d[id]; return {...prev,[today]:d}; });
}
```

};

const saveHabit = async () => {
if (!form.name.trim()) return;
setSaving(true);
if (editTarget) {
const { data } = await supabase.from(“habits”).update({ name:form.name, icon:form.icon, color:form.color }).eq(“id”, editTarget).select().single();
setHabits(prev => prev.map(h => h.id===editTarget ? data : h));
} else {
if (atLimit) { setModal(“upgrade”); setSaving(false); return; }
const { data } = await supabase.from(“habits”).insert({ name:form.name, icon:form.icon, color:form.color, user_id:user.id }).select().single();
setHabits(prev => […prev, data]);
}
setSaving(false);
setModal(null); setEditTarget(null); setForm({name:””,icon:“🔥”,color:COLORS[0]});
};

const openEdit = (h) => { setForm({name:h.name,icon:h.icon,color:h.color}); setEditTarget(h.id); setModal(“edit”); };

const deleteHabit = async (id) => {
setHabits(prev => prev.filter(h => h.id !== id));
await supabase.from(“habits”).delete().eq(“id”, id);
};

const toggleLogDay = async (habitId, dateKey) => {
const done = !logs[dateKey]?.[habitId];
setLogs(prev => { const d={…prev[dateKey]}; if(done) d[habitId]=true; else delete d[habitId]; return {…prev,[dateKey]:d}; });
if (done) await supabase.from(“habit_logs”).upsert({ habit_id:habitId, user_id:user.id, log_date:dateKey, completed:true });
else await supabase.from(“habit_logs”).delete().match({ habit_id:habitId, log_date:dateKey });
};

const completedToday = habits.filter(h => logs[today]?.[h.id]).length;
const pct = habits.length ? Math.round((completedToday/habits.length)*100) : 0;
const strength = pwStrength(authForm.password);
const userName = user?.user_metadata?.full_name || user?.email?.split(”@”)[0] || “You”;

// ── Loading screen ──
if (loading) return (
<div style={{minHeight:“100vh”,background:”#0A0A0F”,display:“flex”,alignItems:“center”,justifyContent:“center”,flexDirection:“column”,gap:16}}>
<style>{CSS}</style>
<div style={{fontFamily:“Playfair Display,serif”,fontSize:28,color:”#F0EBE1”,background:“linear-gradient(135deg,#F0EBE1,#A0A0C8)”,WebkitBackgroundClip:“text”,WebkitTextFillColor:“transparent”}}>Pulse</div>
<div className="spinner" style={{width:28,height:28}}/>
</div>
);

return (
<div style={{minHeight:“100vh”,background:”#0A0A0F”,fontFamily:”‘DM Sans’,sans-serif”,color:”#F0EBE1”,display:“flex”,flexDirection:“column”,alignItems:“center”,paddingBottom:110,position:“relative”,overflow:“hidden”}}>
<style>{CSS}</style>

```
  <div className="orb" style={{width:380,height:380,background:"#5A5AFF",top:-80,left:-100}}/>
  <div className="orb" style={{width:280,height:280,background:"#A855F7",top:220,right:-60,animationDelay:"3s"}}/>
  <div className="orb" style={{width:220,height:220,background:"#06D6A0",bottom:120,left:"35%",animationDelay:"5s"}}/>

  <div style={{width:"100%",maxWidth:430,padding:"0 20px",flex:1}}>

    {/* Header */}
    <div style={{paddingTop:56,paddingBottom:24,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
      <div>
        <div style={{fontSize:12,color:"#666680",letterSpacing:"2px",textTransform:"uppercase",marginBottom:5}}>
          {new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}
        </div>
        <h1 style={{fontFamily:"Playfair Display,serif",fontSize:32,fontWeight:700,lineHeight:1.1,background:"linear-gradient(135deg,#F0EBE1 30%,#A0A0C8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
          {completedToday===habits.length&&habits.length>0?"Perfect Day 🏆":"Pulse"}
        </h1>
      </div>
      <button onClick={()=>setModal("account")} style={{background:user?"linear-gradient(135deg,#5A5AFF,#A855F7)":"#1A1A26",border:user?"none":"1.5px solid #2A2A3A",borderRadius:"50%",width:42,height:42,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#F0EBE1",fontWeight:700,flexShrink:0,marginTop:4,boxShadow:user?"0 0 18px #5A5AFF55":"none",transition:"all .3s"}}>
        {user ? userName[0].toUpperCase() : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        )}
      </button>
    </div>

    {/* Not logged in nudge */}
    {!user && (
      <div style={{background:"#11111A",border:"1px solid #2A2A3A",borderRadius:18,padding:"18px 20px",marginBottom:22,display:"flex",gap:14,alignItems:"center"}}>
        <span style={{fontSize:28}}>👋</span>
        <div style={{flex:1}}>
          <div style={{fontWeight:600,fontSize:15,marginBottom:3}}>Sign in to save your data</div>
          <div style={{fontSize:12,color:"#666680"}}>Your habits are only stored locally until you create an account.</div>
        </div>
        <button onClick={()=>openAuth("signup")} style={{background:"linear-gradient(135deg,#5A5AFF,#A855F7)",border:"none",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:700,color:"#fff",cursor:"pointer",whiteSpace:"nowrap"}}>Sign Up</button>
      </div>
    )}

    {/* HOME */}
    {view==="home"&&(
      <div className="slide-up">
        {habits.length>0&&(
          <div style={{display:"flex",alignItems:"center",gap:20,background:"#11111A",borderRadius:22,padding:"18px 22px",marginBottom:24,border:"1px solid #1E1E2A"}}>
            <div style={{position:"relative",width:80,height:80,flexShrink:0}}>
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle className="ring-bg" cx="40" cy="40" r="32"/>
                <circle className="ring-fill" cx="40" cy="40" r="32" stroke={pct===100?"#06D6A0":"#5A5AFF"} strokeDasharray={`${2*Math.PI*32}`} strokeDashoffset={`${2*Math.PI*32*(1-pct/100)}`}/>
              </svg>
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:700}}>{pct}%</div>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:600,fontSize:17,marginBottom:4}}>{completedToday} / {habits.length} done</div>
              <div key={quoteIdx} style={{fontSize:12,color:"#888899",fontStyle:"italic",lineHeight:1.5,animation:"fadeIn .6s"}}>"{QUOTES[quoteIdx]}"</div>
            </div>
          </div>
        )}

        {!isPro&&habits.length>0&&(
          <div style={{background:"linear-gradient(135deg,#1A1A10,#1A1200)",border:"1px solid #FFD16633",borderRadius:16,padding:"12px 16px",marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontSize:20}}>⭐</span>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:"#FFD166"}}>Free Plan — {habits.length}/3 habits</div>
              <div style={{fontSize:11,color:"#888866"}}>Upgrade for unlimited habits & stats</div>
            </div>
            <button onClick={()=>setModal("upgrade")} style={{background:"linear-gradient(135deg,#FFD166,#FF8C42)",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:700,color:"#0A0A0F",cursor:"pointer"}}>Go Pro</button>
          </div>
        )}

        {habits.length===0?(
          <div style={{textAlign:"center",padding:"60px 0",color:"#444460"}}>
            <div style={{fontSize:48,marginBottom:14}}>✦</div>
            <div style={{fontSize:17,fontWeight:500,marginBottom:6,color:"#888898"}}>No habits yet</div>
            <div style={{fontSize:13}}>Tap below to start building your best self</div>
          </div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:11}}>
            {habits.map((h,i)=>{
              const done=!!logs[today]?.[h.id], streak=getStreak(logs,h.id), last7=getLast7(logs,h.id);
              return (
                <div key={h.id} className="habit-row" style={{animationDelay:`${i*55}ms`,background:done?`${h.color}18`:"#11111A",border:`1.5px solid ${done?h.color+"55":"#1E1E2A"}`,borderRadius:20,padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                  <button className={`check-btn ${animId===h.id?"pop":""}`} onClick={()=>toggleHabit(h.id)}
                    style={{width:44,height:44,borderRadius:13,background:done?h.color:"#1A1A26",boxShadow:done?`0 4px 18px ${h.color}55`:"none",fontSize:done?18:20,flexShrink:0}}>
                    {done?"✓":h.icon}
                  </button>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:15,marginBottom:4,textDecoration:done?"line-through":"none",color:done?"#666680":"#F0EBE1"}}>{h.name}</div>
                    <div style={{display:"flex",gap:4,alignItems:"center"}}>
                      {last7.map((d,j)=><div key={j} style={{width:8,height:8,borderRadius:"50%",background:d?h.color:"#2A2A3A",transition:"background .3s"}}/>)}
                      {streak>0&&<span style={{fontSize:11,color:h.color,marginLeft:5,fontWeight:600}}>🔥 {streak}d</span>}
                    </div>
                  </div>
                  <div style={{display:"flex",gap:2}}>
                    <button onClick={()=>{setEditTarget(h.id);setModal("streak");}} style={{background:"none",border:"none",cursor:"pointer",color:"#444460",fontSize:15,padding:"4px 6px",transition:"color .2s"}}
                      onMouseEnter={e=>e.target.style.color="#FFD166"} onMouseLeave={e=>e.target.style.color="#444460"}>📅</button>
                    <button onClick={()=>openEdit(h)} style={{background:"none",border:"none",cursor:"pointer",color:"#444460",fontSize:15,padding:"4px 6px",transition:"color .2s"}}
                      onMouseEnter={e=>e.target.style.color="#5A5AFF"} onMouseLeave={e=>e.target.style.color="#444460"}>✏️</button>
                    <button className="del-btn" onClick={()=>deleteHabit(h.id)}>×</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button onClick={()=>{if(atLimit){setModal("upgrade");}else{setForm({name:"",icon:"🔥",color:COLORS[0]});setEditTarget(null);setModal("add");}}}
          style={{marginTop:20,width:"100%",background:"#11111A",border:"1.5px dashed #2A2A3A",borderRadius:18,padding:16,color:"#555570",fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"border-color .2s,color .2s"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#5A5AFF";e.currentTarget.style.color="#F0EBE1"}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#2A2A3A";e.currentTarget.style.color="#555570"}}>
          <span style={{fontSize:20}}>+</span> Add New Habit {atLimit&&<span className="pro-badge">PRO</span>}
        </button>
      </div>
    )}

    {/* STATS */}
    {view==="stats"&&(
      <div className="slide-up">
        <h2 style={{fontFamily:"Playfair Display,serif",fontSize:26,marginBottom:22}}>Your Progress</h2>
        {!isPro?(
          <div style={{background:"#11111A",border:"1px solid #2A2A3A",borderRadius:22,padding:28,textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:12}}>📊</div>
            <div style={{fontFamily:"Playfair Display,serif",fontSize:20,marginBottom:8}}>Stats are Pro-only</div>
            <div style={{fontSize:13,color:"#666680",marginBottom:20,lineHeight:1.6}}>Unlock detailed 30-day heatmaps, completion rates, and streak analytics.</div>
            <button className="btn-primary" onClick={()=>setModal("upgrade")}>Unlock Stats — Go Pro</button>
          </div>
        ):habits.length===0?(
          <div style={{textAlign:"center",padding:"60px 0",color:"#444460",fontSize:14}}>Add habits to see your stats</div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {habits.map(h=>{
              const streak=getStreak(logs,h.id), total=Object.values(logs).filter(d=>d[h.id]).length;
              const last30=getLast30Keys().map(k=>!!logs[k]?.[h.id]), rate=Math.round((last30.filter(Boolean).length/30)*100);
              return (
                <div key={h.id} style={{background:"#11111A",border:"1px solid #1E1E2A",borderRadius:20,padding:"20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                    <span style={{fontSize:22}}>{h.icon}</span>
                    <div style={{flex:1}}><div style={{fontWeight:600,fontSize:15}}>{h.name}</div><div style={{fontSize:11,color:"#666680"}}>{total} total completions</div></div>
                    <div style={{textAlign:"right"}}><div style={{fontSize:22,fontWeight:700,color:h.color}}>{streak}</div><div style={{fontSize:10,color:"#666680"}}>day streak</div></div>
                  </div>
                  <div style={{marginBottom:10}}>
                    <div style={{fontSize:11,color:"#555570",marginBottom:7}}>Last 30 days</div>
                    <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>{last30.map((d,i)=><div key={i} style={{width:15,height:15,borderRadius:4,background:d?h.color:"#1E1E2A"}}/>)}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{height:5,flex:1,background:"#1E1E2A",borderRadius:99}}><div style={{height:"100%",width:`${rate}%`,background:`linear-gradient(90deg,${h.color},${h.color}AA)`,borderRadius:99,transition:"width .8s"}}/></div>
                    <span style={{fontSize:12,color:h.color,fontWeight:600}}>{rate}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    )}
  </div>

  {/* Nav */}
  <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"rgba(10,10,15,.9)",backdropFilter:"blur(20px)",borderTop:"1px solid #1E1E2A",display:"flex",justifyContent:"space-around",padding:"10px 0 20px"}}>
    <button className={`nav-btn ${view==="home"?"active":""}`} onClick={()=>setView("home")}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Today
    </button>
    <button className={`nav-btn ${view==="stats"?"active":""}`} onClick={()=>setView("stats")}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      Stats {!isPro&&<span className="pro-badge" style={{fontSize:8,padding:"1px 5px"}}>PRO</span>}
    </button>
  </div>

  {/* ══ MODALS ══════════════════════════════════════ */}

  {/* Add / Edit Habit */}
  {(modal==="add"||modal==="edit")&&(
    <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);setEditTarget(null);}}}>
      <div className="modal">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
          <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24}}>{modal==="edit"?"Edit Habit":"New Habit"}</h3>
          <button onClick={()=>{setModal(null);setEditTarget(null);}} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <input className="field" placeholder="Habit name..." value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&saveHabit()} autoFocus/>
          <div>
            <div style={{fontSize:11,color:"#666680",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>Icon</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>{ICONS.map(ic=><button key={ic} className={`tag ${form.icon===ic?"selected":""}`} style={{background:form.icon===ic?"#1E1E30":"#13131C"}} onClick={()=>setForm(f=>({...f,icon:ic}))}>{ic}</button>)}</div>
          </div>
          <div>
            <div style={{fontSize:11,color:"#666680",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>Color</div>
            <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>{COLORS.map(c=><button key={c} onClick={()=>setForm(f=>({...f,color:c}))} style={{width:30,height:30,borderRadius:"50%",background:c,border:"none",cursor:"pointer",outline:form.color===c?`3px solid ${c}`:"none",outlineOffset:3,transform:form.color===c?"scale(1.2)":"scale(1)",transition:"transform .15s"}}/>)}</div>
          </div>
          <button className="btn-primary" onClick={saveHabit} disabled={saving}>
            {saving&&<div className="spinner"/>}
            {modal==="edit"?"Save Changes":"+ Add Habit"}
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Streak Editor */}
  {modal==="streak"&&editTarget&&(()=>{
    const h=habits.find(x=>x.id===editTarget); if(!h) return null;
    return (
      <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
        <div className="modal">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <div><h3 style={{fontFamily:"Playfair Display,serif",fontSize:22}}>{h.icon} Edit Streak</h3><div style={{fontSize:12,color:"#666680",marginTop:2}}>Tap any day to toggle</div></div>
            <button onClick={()=>setModal(null)} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
          </div>
          <div style={{marginTop:18}}>
            <div style={{fontSize:11,color:"#555570",letterSpacing:"1px",textTransform:"uppercase",marginBottom:10}}>Last 30 Days</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {getLast30Keys().map(k=>{
                const done=!!logs[k]?.[h.id], label=new Date(k+"T12:00:00").getDate();
                return <button key={k} className="streak-day" onClick={()=>toggleLogDay(h.id,k)} style={{background:done?h.color:"#1A1A26",color:done?"#fff":"#555570",border:`1.5px solid ${done?h.color:"#2A2A3A"}`,fontWeight:done?700:400,boxShadow:done?`0 2px 8px ${h.color}44`:"none"}}>{label}</button>;
              })}
            </div>
          </div>
          <div style={{marginTop:18,background:"#13131C",borderRadius:14,padding:"12px 16px",display:"flex",justifyContent:"space-between"}}>
            {[{v:getStreak(logs,h.id),c:h.color,l:"Current streak"},{v:Object.values(logs).filter(d=>d[h.id]).length,c:"#F0EBE1",l:"Total days"},{v:`${Math.round((getLast30Keys().filter(k=>logs[k]?.[h.id]).length/30)*100)}%`,c:"#06D6A0",l:"30d rate"}].map(({v,c,l})=>(
              <div key={l} style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:700,color:c}}>{v}</div><div style={{fontSize:11,color:"#666680"}}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    );
  })()}

  {/* Upgrade */}
  {modal==="upgrade"&&(
    <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
      <div className="modal">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <h3 style={{fontFamily:"Playfair Display,serif",fontSize:26}}>Upgrade to Pro</h3>
          <button onClick={()=>setModal(null)} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
        </div>
        <p style={{fontSize:13,color:"#666680",marginBottom:22}}>Unlock your full potential.</p>
        <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:24}}>
          {[["✦","Unlimited habits","No more limits"],["📊","Advanced stats & heatmaps","30-day views & completion rates"],["📅","Streak editing","Fix any missed day"],["🔔","Reminders","Never break your chain"]].map(([ic,t,s])=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:14}}><span style={{fontSize:20,width:32,textAlign:"center"}}>{ic}</span><div><div style={{fontSize:14,fontWeight:600}}>{t}</div><div style={{fontSize:12,color:"#666680"}}>{s}</div></div></div>
          ))}
        </div>
        <div style={{display:"flex",gap:10,marginBottom:16}}>
          <div style={{flex:1,background:"#13131C",border:"1.5px solid #2A2A3A",borderRadius:16,padding:"16px 14px",textAlign:"center"}}>
            <div style={{fontSize:11,color:"#666680",marginBottom:4}}>MONTHLY</div>
            <div style={{fontSize:24,fontWeight:700}}>$4.99</div>
            <div style={{fontSize:11,color:"#666680"}}>per month</div>
          </div>
          <div style={{flex:1,background:"linear-gradient(135deg,#1A1240,#0D1A30)",border:"1.5px solid #5A5AFF",borderRadius:16,padding:"16px 14px",textAlign:"center",position:"relative"}}>
            <div style={{position:"absolute",top:-10,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#FFD166,#FF8C42)",borderRadius:99,padding:"2px 10px",fontSize:10,fontWeight:700,color:"#0A0A0F",whiteSpace:"nowrap"}}>BEST VALUE</div>
            <div style={{fontSize:11,color:"#888AC0",marginBottom:4}}>ANNUAL</div>
            <div style={{fontSize:24,fontWeight:700,color:"#A0A0FF"}}>$29.99</div>
            <div style={{fontSize:11,color:"#888AC0"}}>$2.50/month</div>
          </div>
        </div>
        <button className="btn-primary" onClick={()=>{if(!user){setModal("auth");return;}setModal(null);}}>
          {user?"Upgrade Now ✦":"Sign Up & Go Pro"}
        </button>
        <div style={{textAlign:"center",marginTop:10,fontSize:11,color:"#444460"}}>Cancel anytime • 7-day money-back guarantee</div>
      </div>
    </div>
  )}

  {/* Account */}
  {modal==="account"&&(
    <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);setConfirmDelete(false);}}}>
      <div className="modal">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24}}>Account</h3>
          <button onClick={()=>{setModal(null);setConfirmDelete(false);}} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
        </div>
        {user?(
          <div>
            <div style={{display:"flex",alignItems:"center",gap:16,background:"#13131C",borderRadius:18,padding:"18px 20px",marginBottom:18}}>
              <div style={{width:52,height:52,borderRadius:"50%",background:"linear-gradient(135deg,#5A5AFF,#A855F7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:700,flexShrink:0,boxShadow:"0 0 18px #5A5AFF55"}}>
                {userName[0].toUpperCase()}
              </div>
              <div>
                <div style={{fontWeight:600,fontSize:16}}>{userName}</div>
                <div style={{fontSize:12,color:"#666680"}}>{user.email}</div>
                <div style={{marginTop:5,display:"flex",gap:6,flexWrap:"wrap"}}>
                  {isPro?<span style={{background:"linear-gradient(135deg,#FFD166,#FF8C42)",color:"#0A0A0F",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>✦ PRO</span>:<span style={{background:"#1E1E2A",color:"#888898",fontSize:11,padding:"2px 8px",borderRadius:99}}>Free Plan</span>}
                  {user.email_confirmed_at&&<span style={{background:"#06D6A018",color:"#06D6A0",fontSize:11,padding:"2px 8px",borderRadius:99,border:"1px solid #06D6A033"}}>✓ Verified</span>}
                </div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {!isPro&&<button className="btn-primary" onClick={()=>setModal("upgrade")}>Upgrade to Pro ✦</button>}
              {isPro&&<div style={{background:"#13131C",borderRadius:14,padding:"14px 16px",fontSize:13,color:"#888898",textAlign:"center"}}>✦ Pro active — thank you for supporting Pulse!</div>}
              <button className="btn-ghost" onClick={logout}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Sign Out
              </button>
              {!confirmDelete?(
                <button onClick={()=>setConfirmDelete(true)} style={{background:"none",border:"none",color:"#555570",fontSize:13,cursor:"pointer",padding:"8px 0",transition:"color .2s"}}
                  onMouseEnter={e=>e.target.style.color="#FF4D4D"} onMouseLeave={e=>e.target.style.color="#555570"}>
                  Delete account
                </button>
              ):(
                <div style={{background:"#1A0A0A",border:"1.5px solid #FF4D4D44",borderRadius:16,padding:"16px 18px"}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#FF4D4D",marginBottom:6}}>⚠️ Delete account?</div>
                  <div style={{fontSize:12,color:"#888880",lineHeight:1.5,marginBottom:14}}>This permanently deletes your account, all habits, and streak history. This cannot be undone.</div>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={()=>setConfirmDelete(false)} style={{flex:1,background:"#1E1E2A",border:"none",borderRadius:10,color:"#F0EBE1",fontSize:13,fontWeight:600,padding:"10px",cursor:"pointer"}}>Cancel</button>
                    <button onClick={deleteAccount} style={{flex:1,background:"#FF4D4D",border:"none",borderRadius:10,color:"#fff",fontSize:13,fontWeight:700,padding:"10px",cursor:"pointer"}}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ):(
          <div>
            <div style={{textAlign:"center",marginBottom:22}}>
              <div style={{fontSize:40,marginBottom:10}}>👤</div>
              <div style={{fontSize:16,fontWeight:500,marginBottom:6}}>You're not signed in</div>
              <div style={{fontSize:13,color:"#666680",lineHeight:1.5}}>Create an account to sync habits and unlock Pro.</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <button className="btn-primary" onClick={()=>openAuth("signup")}>Create Account</button>
              <button className="btn-ghost" onClick={()=>openAuth("login")}>Log In</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )}

  {/* AUTH modal */}
  {modal==="auth"&&(
    <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);resetAuth();}}}>
      <div className="modal">

        {authStep==="form"&&(<>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
            <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24}}>{authMode==="signup"?"Create Account":"Welcome Back"}</h3>
            <button onClick={()=>{setModal(null);resetAuth();}} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
          </div>
          <div style={{display:"flex",background:"#13131C",borderRadius:12,padding:4,marginBottom:22}}>
            {["signup","login"].map(m=>(
              <button key={m} className={`tab ${authMode===m?"active":""}`} style={{flex:1}} onClick={()=>{setAuthMode(m);setAuthError("");}}>
                {m==="signup"?"Sign Up":"Log In"}
              </button>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {authMode==="signup"&&<input className="field" placeholder="Your name" value={authForm.name} onChange={e=>setAuthForm(f=>({...f,name:e.target.value}))} autoFocus/>}
            <input className="field" placeholder="Email address" type="email" value={authForm.email} onChange={e=>setAuthForm(f=>({...f,email:e.target.value}))}/>
            <div>
              <div className="pw-wrap">
                <input className="field" placeholder="Password (min. 6 characters)" type={showPw?"text":"password"} value={authForm.password} onChange={e=>setAuthForm(f=>({...f,password:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&(authMode==="signup"?handleSignup():handleLogin())}/>
                <button className="pw-eye" onClick={()=>setShowPw(v=>!v)} type="button"><EyeIcon open={showPw}/></button>
              </div>
              {authMode==="signup"&&authForm.password&&(
                <div style={{marginTop:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:11,color:"#555570"}}>Password strength</span><span style={{fontSize:11,color:strength.color,fontWeight:600}}>{strength.label}</span></div>
                  <div style={{height:4,background:"#1E1E2A",borderRadius:99}}><div className="strength-bar" style={{width:strength.width,background:strength.color}}/></div>
                </div>
              )}
            </div>
            {authMode==="login"&&(
              <div style={{textAlign:"right",marginTop:-4}}>
                <button className="btn-link" onClick={()=>{setAuthError("");setAuthStep("forgot");}}>Forgot password?</button>
              </div>
            )}
            {authError&&<div className="err-box">{authError}</div>}
            <button className="btn-primary" onClick={authMode==="signup"?handleSignup:handleLogin} disabled={authLoading} style={{marginTop:4}}>
              {authLoading&&<div className="spinner"/>}
              {authMode==="signup"?"Create Account":"Log In"}
            </button>
            <div style={{textAlign:"center",fontSize:12,color:"#444460"}}>
              {authMode==="signup"?"Already have an account? ":"Don't have an account? "}
              <button className="btn-link" onClick={()=>{setAuthMode(m=>m==="signup"?"login":"signup");setAuthError("");}}>
                {authMode==="signup"?"Log in":"Sign up"}
              </button>
            </div>
          </div>
        </>)}

        {authStep==="forgot"&&(<>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
            <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24}}>Reset Password</h3>
            <button onClick={()=>{setModal(null);resetAuth();}} style={{background:"none",border:"none",color:"#666680",fontSize:22,cursor:"pointer"}}>×</button>
          </div>
          <button className="step-back" onClick={()=>setAuthStep("form")}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to login
          </button>
          <div style={{fontSize:13,color:"#888899",lineHeight:1.6,marginBottom:20}}>Enter your email and we'll send you a reset link.</div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <input className="field" placeholder="Email address" type="email" value={authForm.email} onChange={e=>setAuthForm(f=>({...f,email:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&handleForgotRequest()} autoFocus/>
            {authError&&<div className="err-box">{authError}</div>}
            <button className="btn-primary" onClick={handleForgotRequest} disabled={authLoading}>
              {authLoading&&<div className="spinner"/>}
              Send Reset Link
            </button>
          </div>
        </>)}

        {authStep==="success"&&(
          <div style={{textAlign:"center",padding:"16px 0 8px"}}>
            <div className="pop-in" style={{fontSize:60,marginBottom:16,display:"inline-block"}}>
              {authMode==="signup"?"🎉":"✅"}
            </div>
            <h3 style={{fontFamily:"Playfair Display,serif",fontSize:26,marginBottom:10}}>
              {authMode==="signup"?"Check your email!":"Email sent!"}
            </h3>
            <div style={{fontSize:13,color:"#888899",lineHeight:1.7,marginBottom:28,whiteSpace:"pre-line"}}>{authInfo}</div>
            <button className="btn-primary" onClick={()=>{setModal(null);resetAuth();setAuthMode("login");}}>
              Back to Log In
            </button>
          </div>
        )}

      </div>
    </div>
  )}

</div>
```

);
}
