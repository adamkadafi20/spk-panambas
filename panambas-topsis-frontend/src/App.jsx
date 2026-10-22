import { useMemo, useState } from "react";
import {
  Sprout, LayoutDashboard, Leaf, SlidersHorizontal, ClipboardList, Settings,
  Search, Bell, ChevronDown, ArrowUpRight, ArrowRight, Plus, MoreHorizontal,
  LogOut, Menu, X, Sun, Droplets, ThermometerSun, Wind, CheckCircle2,
  CircleHelp, Filter, Download, Pencil, Trash2, Eye, Sparkles, ShieldCheck,
  Clock3, Gauge, Home, ChevronRight, CircleUserRound, BarChart3, Check
} from "lucide-react";

const plants = [
  { id: "PL-001", name: "Monstera Deliciosa", subtitle: "Swiss Cheese Plant", type: "Tropis", light: "Tidak langsung", water: "Sedang", humidity: "Tinggi", score: 0.92, color: "sage", price: "Rp185.000", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85", description: "Daun ikonik berlubang, memberi kesan tropis dan statement pada ruangan." },
  { id: "PL-002", name: "Sansevieria", subtitle: "Lidah Mertua", type: "Sukulen", light: "Rendah–terang", water: "Rendah", humidity: "Rendah", score: 0.87, color: "olive", price: "Rp95.000", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b9a?auto=format&fit=crop&w=800&q=85", description: "Tangguh, perawatan mudah, dan cocok untuk sudut ruangan dengan cahaya terbatas." },
  { id: "PL-003", name: "ZZ Plant", subtitle: "Zamioculcas zamiifolia", type: "Tropis", light: "Rendah", water: "Rendah", humidity: "Sedang", score: 0.81, color: "mint", price: "Rp125.000", image: "https://images.unsplash.com/photo-1632207691143-643e2b6b6a4b?auto=format&fit=crop&w=800&q=85", description: "Daun mengilap dengan karakter minimalis, ideal untuk pemula dan ruang kerja." },
  { id: "PL-004", name: "Peace Lily", subtitle: "Spathiphyllum", type: "Berbunga", light: "Tidak langsung", water: "Tinggi", humidity: "Tinggi", score: 0.78, color: "cream", price: "Rp145.000", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85", description: "Tanaman berdaun rimbun dengan bunga putih yang menenangkan." },
  { id: "PL-005", name: "Pothos Golden", subtitle: "Epipremnum aureum", type: "Merambat", light: "Sedang", water: "Sedang", humidity: "Sedang", score: 0.74, color: "gold", price: "Rp75.000", image: "https://images.unsplash.com/photo-1616690248187-3b1b4f8c4a2b?auto=format&fit=crop&w=800&q=85", description: "Tanaman menjuntai yang adaptif, cocok untuk rak atau pot gantung." },
  { id: "PL-006", name: "Calathea Orbifolia", subtitle: "Prayer Plant", type: "Tropis", light: "Tidak langsung", water: "Sedang", humidity: "Tinggi", score: 0.69, color: "sage", price: "Rp210.000", image: "https://images.unsplash.com/photo-1597055181300-a8b6be5c7d5b?auto=format&fit=crop&w=800&q=85", description: "Corak daun artistik untuk menghadirkan aksen premium di dalam ruangan." },
];

const criteriaSeed = [
  { id: "C1", name: "Intensitas Cahaya", code: "CAHAYA", type: "Benefit", weight: 0.30, scale: "1–5", note: "Kecocokan tanaman dengan cahaya ruangan" },
  { id: "C2", name: "Kelembapan Ruangan", code: "LEMBAP", type: "Benefit", weight: 0.22, scale: "1–5", note: "Kebutuhan kelembapan relatif" },
  { id: "C3", name: "Frekuensi Penyiraman", code: "SIRAM", type: "Cost", weight: 0.20, scale: "1–5", note: "Semakin rendah kebutuhan, semakin baik" },
  { id: "C4", name: "Suhu Ruangan", code: "SUHU", type: "Benefit", weight: 0.16, scale: "1–5", note: "Toleransi terhadap suhu ruangan" },
  { id: "C5", name: "Kemudahan Perawatan", code: "RAWAT", type: "Benefit", weight: 0.12, scale: "1–5", note: "Kemudahan perawatan sehari-hari" },
];

const matrixSeed = [
  { id: "PL-001", name: "Monstera Deliciosa", values: [4, 4, 3, 4, 3] },
  { id: "PL-002", name: "Sansevieria", values: [5, 2, 1, 5, 5] },
  { id: "PL-003", name: "ZZ Plant", values: [2, 3, 1, 4, 5] },
  { id: "PL-004", name: "Peace Lily", values: [3, 5, 4, 4, 3] },
  { id: "PL-005", name: "Pothos Golden", values: [3, 3, 3, 4, 4] },
];

const navGroups = [
  { label: "WORKSPACE", items: [
    { id: "overview", label: "Ringkasan", icon: LayoutDashboard },
    { id: "catalog", label: "Katalog tanaman", icon: Leaf },
    { id: "recommendation", label: "Rekomendasi TOPSIS", icon: Sparkles },
  ]},
  { label: "PENGELOLAAN", items: [
    { id: "criteria", label: "Kriteria & bobot", icon: SlidersHorizontal },
    { id: "plants", label: "Data tanaman", icon: Sprout },
    { id: "matrix", label: "Matriks keputusan", icon: ClipboardList },
  ]},
];

function cn(...classes) { return classes.filter(Boolean).join(" "); }

function Brand() {
  return <div className="flex items-center gap-3 px-2">
    <div className="brand-mark"><Sprout size={22} strokeWidth={2.4} /></div>
    <div><div className="text-[17px] font-extrabold tracking-tight text-white">panambas<span className="text-lime-300">.</span></div><div className="text-[10px] uppercase tracking-[.22em] text-white/45">Plant intelligence</div></div>
  </div>;
}

function Sidebar({ page, setPage, role, setRole, mobileOpen, setMobileOpen }) {
  return <>
    {mobileOpen && <button className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Tutup menu" />}
    <aside className={cn("sidebar", mobileOpen ? "sidebar-open" : "")}>
      <div className="px-5 pt-7 pb-8"><Brand /></div>
      <div className="mx-5 mb-6 rounded-2xl border border-white/10 bg-white/[.045] p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300/15 text-lime-300"><Leaf size={17}/></div>
          <div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold text-white">Panambas Studio</div><div className="mt-0.5 text-[10px] text-white/45">Workspace utama</div></div>
          <ChevronDown size={14} className="text-white/45"/>
        </div>
      </div>
      {navGroups.map((group) => <div key={group.label} className="mb-7 px-3">
        <div className="mb-2 px-3 text-[9px] font-bold tracking-[.2em] text-white/35">{group.label}</div>
        {group.items.map((item) => {
          const Icon = item.icon;
          return <button key={item.id} onClick={() => { setPage(item.id); setMobileOpen(false); }} className={cn("nav-item", page === item.id && "nav-item-active")}>
            <Icon size={17} strokeWidth={1.8}/><span>{item.label}</span>{item.id === "recommendation" && <span className="ml-auto rounded-md bg-lime-300/15 px-1.5 py-0.5 text-[9px] font-bold text-lime-300">AI</span>}
          </button>;
        })}
      </div>)}
      <div className="mx-5 mt-auto mb-5 rounded-2xl bg-gradient-to-br from-[#203c2b] to-[#18271d] p-4">
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-lime-300 text-forest-950"><Sparkles size={16}/></div>
        <div className="text-xs font-bold text-white">Plant smarter.</div><div className="mt-1 text-[10px] leading-relaxed text-white/55">Rekomendasi yang tepat untuk setiap sudut ruang.</div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-lime-300"/></div>
        <div className="mt-2 flex justify-between text-[9px] text-white/45"><span>Data tanaman</span><span>72%</span></div>
      </div>
      <div className="border-t border-white/10 p-4">
        <button onClick={() => setRole(role === "admin" ? "customer" : "admin")} className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-white/[.06]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lime-200"><CircleUserRound size={18}/></div>
          <div className="min-w-0 flex-1"><div className="text-xs font-semibold text-white">{role === "admin" ? "Admin Panambas" : "Pelanggan Demo"}</div><div className="mt-0.5 text-[10px] text-white/45">{role === "admin" ? "Administrator" : "Customer preview"}</div></div>
          <ChevronDown size={14} className="text-white/40"/>
        </button>
      </div>
    </aside>
  </>;
}

function Header({ title, subtitle, setMobileOpen, role }) {
  return <header className="topbar">
    <div className="flex min-w-0 items-center gap-3">
      <button className="icon-button lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Buka menu"><Menu size={19}/></button>
      <div className="min-w-0"><div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-stone-400"><span>Panambas</span><ChevronRight size={11}/><span className="text-stone-600">{title}</span></div><h1 className="mt-1 truncate text-lg font-bold tracking-tight text-stone-900">{subtitle}</h1></div>
    </div>
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="hidden items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 text-[11px] text-stone-500 md:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>{role === "admin" ? "Mode pengelola" : "Mode pelanggan"}</div>
      <button className="icon-button relative" aria-label="Notifikasi"><Bell size={17}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-lime-500 ring-2 ring-white"/></button>
      <div className="hidden h-8 w-px bg-stone-200 sm:block"/>
      <button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-stone-100"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-forest-900 text-[10px] font-bold text-lime-200">{role === "admin" ? "AP" : "PD"}</div><div className="hidden text-left sm:block"><div className="text-[11px] font-bold text-stone-800">{role === "admin" ? "Admin Panambas" : "Pelanggan Demo"}</div><div className="text-[9px] text-stone-400">{role === "admin" ? "Administrator" : "Pengunjung"}</div></div><ChevronDown size={13} className="hidden text-stone-400 sm:block"/></button>
    </div>
  </header>;
}

function StatCard({ label, value, change, icon: Icon, tint = "green", note }) {
  return <div className="stat-card">
    <div className="flex items-start justify-between gap-3"><div><div className="text-xs font-medium text-stone-500">{label}</div><div className="mt-2 text-[28px] font-extrabold tracking-[-.05em] text-stone-900">{value}</div></div><div className={cn("flex h-10 w-10 items-center justify-center rounded-2xl", tint === "green" ? "bg-emerald-50 text-emerald-700" : tint === "dark" ? "bg-forest-900 text-lime-300" : "bg-amber-50 text-amber-700")}><Icon size={19}/></div></div>
    <div className="mt-4 flex items-center gap-2 text-[10px]"><span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-1 font-bold text-emerald-700"><ArrowUpRight size={11}/>{change}</span><span className="text-stone-400">{note || "dibanding bulan lalu"}</span></div>
  </div>;
}

function SectionHeading({ eyebrow, title, description, action, onAction }) {
  return <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><div className="mb-1 text-[9px] font-bold uppercase tracking-[.2em] text-emerald-700">{eyebrow}</div><h2 className="text-[17px] font-bold tracking-tight text-stone-900">{title}</h2>{description && <p className="mt-1 text-xs text-stone-500">{description}</p>}</div>{action && <button className="primary-button" onClick={onAction}>{action === "Tambah tanaman" || action === "Tambah kriteria" ? <Plus size={15}/> : <ArrowRight size={14} />}{action}</button>}</div>;
}

function PlantCard({ plant, onDetail, compact = false }) {
  return <article className="plant-card group">
    <div className="plant-image-wrap">
      <img src={plant.image} alt={plant.name} className="plant-image" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.classList.add("image-fallback"); }}/>
      <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/85 px-2.5 py-1 text-[9px] font-bold text-forest-800 backdrop-blur">{plant.type}</span>
      {plant.score && <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-forest-950/90 px-2 py-1 text-[10px] font-bold text-lime-200"><Sparkles size={11}/>{Math.round(plant.score * 100)}%</span>}
      <button onClick={() => onDetail(plant)} className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-forest-900 opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100" aria-label={`Lihat ${plant.name}`}><ArrowUpRight size={17}/></button>
    </div>
    <div className="p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[.14em] text-stone-400">{plant.id}</div>
      <h3 className="mt-1 text-sm font-bold text-stone-900">{plant.name}</h3><p className="mt-0.5 text-[10px] text-stone-500">{plant.subtitle}</p>
      {!compact && <div className="mt-4 grid grid-cols-3 gap-2 border-t border-stone-100 pt-3">
        <div><Sun size={13} className="mb-1 text-amber-500"/><div className="text-[9px] text-stone-400">Cahaya</div><div className="mt-0.5 text-[10px] font-semibold text-stone-700">{plant.light}</div></div>
        <div><Droplets size={13} className="mb-1 text-sky-500"/><div className="text-[9px] text-stone-400">Air</div><div className="mt-0.5 text-[10px] font-semibold text-stone-700">{plant.water}</div></div>
        <div><Wind size={13} className="mb-1 text-emerald-600"/><div className="text-[9px] text-stone-400">Lembap</div><div className="mt-0.5 text-[10px] font-semibold text-stone-700">{plant.humidity}</div></div>
      </div>}
      <div className="mt-4 flex items-center justify-between"><span className="text-xs font-extrabold text-stone-900">{plant.price}</span><button onClick={() => onDetail(plant)} className="text-[10px] font-bold text-emerald-700 hover:text-emerald-900">Detail <ArrowRight size={11} className="ml-1 inline"/></button></div>
    </div>
  </article>;
}

function Overview({ setPage, role, onDetail, criteria }) {
  return <div className="space-y-7">
    <div className="hero-panel">
      <div className="relative z-10 max-w-xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-200/20 bg-lime-200/10 px-3 py-1.5 text-[10px] font-semibold text-lime-200"><Sparkles size={13}/> SMART INDOOR PLANT MATCHING</div>
        <h2 className="max-w-lg text-[28px] font-bold leading-[1.12] tracking-[-.04em] text-white sm:text-[36px]">Temukan tanaman yang <span className="text-lime-300">tumbuh baik</span> di ruangmu.</h2>
        <p className="mt-3 max-w-md text-xs leading-6 text-white/60">Rekomendasi tanaman hias indoor yang disesuaikan dengan kondisi ruangan melalui metode pengambilan keputusan TOPSIS.</p>
        <div className="mt-6 flex flex-wrap gap-2"><button onClick={() => setPage("recommendation")} className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-xs font-extrabold text-forest-950 transition hover:bg-lime-200">Mulai rekomendasi <ArrowRight size={14}/></button><button onClick={() => setPage("catalog")} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-xs font-semibold text-white hover:bg-white/10">Jelajahi katalog</button></div>
      </div>
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-plant-art"><div className="art-glow"/><img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=90" alt="Monstera plant decoration" onError={(e) => e.currentTarget.style.display = "none"}/><div className="floating-note"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-200 text-forest-950"><CheckCircle2 size={16}/></div><div><div className="text-[10px] font-bold text-white">Match optimal</div><div className="mt-0.5 text-[9px] text-white/50">Monstera · 92% cocok</div></div></div></div>
      <div className="hero-bottom-label"><span className="h-1.5 w-1.5 rounded-full bg-lime-300"/><span>BOTANICAL INTELLIGENCE / 01</span></div>
    </div>
    {role === "admin" ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Total tanaman" value="24" change="+12%" icon={Leaf} note="vs. periode lalu"/>
      <StatCard label="Kriteria aktif" value={String(criteria.length).padStart(2, "0")} change="Stabil" icon={SlidersHorizontal} tint="dark" note="digunakan TOPSIS"/>
      <StatCard label="Rekomendasi dibuat" value="1.284" change="+18,4%" icon={Sparkles} note="dalam 30 hari"/>
      <StatCard label="Akurasi data" value="98,2%" change="+2,1%" icon={Gauge} tint="gold" note="kelengkapan matriks"/>
    </div> : <div className="grid gap-4 sm:grid-cols-3">
      <StatCard label="Pilihan tanaman" value="24+" change="Terbaru" icon={Leaf} note="koleksi indoor"/>
      <StatCard label="Kriteria penilaian" value={String(criteria.length).padStart(2, "0")} change="TOPSIS" icon={SlidersHorizontal} tint="dark" note="dipakai untuk pencocokan"/>
      <StatCard label="Profil ruangan" value="5 min" change="Mudah" icon={Clock3} tint="gold" note="untuk mulai rekomendasi"/>
    </div>}
    <div>
      <SectionHeading eyebrow="Pilihan kurator" title="Tanaman yang sedang diminati" description="Pilihan populer untuk menyegarkan ruang indoor." action="Lihat semua" onAction={() => setPage("catalog")}/>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{plants.slice(0, 3).map((plant) => <PlantCard key={plant.id} plant={plant} onDetail={onDetail}/>)}</div>
    </div>
    {role === "admin" && <div className="grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
      <div className="panel-card"><SectionHeading eyebrow="Aktivitas sistem" title="Aktivitas terbaru"/><div className="space-y-4">{[
        ["Matriks keputusan diperbarui","Sansevieria · skor kemudahan perawatan","10 menit lalu",Pencil],
        ["Alternatif tanaman ditambahkan","Calathea Orbifolia","1 jam lalu",Plus],
        ["Bobot kriteria disesuaikan","Intensitas cahaya · 0,30","Kemarin",SlidersHorizontal],
      ].map(([title, desc, time, Icon]) => <div key={title} className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600"><Icon size={15}/></div><div className="min-w-0 flex-1"><div className="text-xs font-bold text-stone-800">{title}</div><div className="mt-1 text-[10px] text-stone-500">{desc}</div></div><div className="whitespace-nowrap text-[9px] text-stone-400">{time}</div></div>)}</div></div>
      <div className="panel-card"><SectionHeading eyebrow="Sistem rekomendasi" title="Kesehatan data"/><div className="mb-4 flex items-center justify-between"><span className="text-xs text-stone-500">Kelengkapan matriks</span><span className="text-sm font-extrabold text-forest-800">98,2%</span></div><div className="h-2 overflow-hidden rounded-full bg-stone-100"><div className="h-full w-[98.2%] rounded-full bg-emerald-600"/></div><div className="mt-5 space-y-3">{[["Data alternatif","24 tanaman"],["Kriteria terdefinisi",`${criteria.length} kriteria`],["Skor matriks","120 / 125 nilai"]].map(([a,b]) => <div key={a} className="flex items-center justify-between text-[11px]"><span className="text-stone-500">{a}</span><span className="font-semibold text-stone-700">{b}</span></div>)}</div></div>
    </div>}
  </div>;
}

function Catalog({ onDetail, query, setQuery }) {
  const [filter, setFilter] = useState("Semua");
  const shown = plants.filter(p => (filter === "Semua" || p.type === filter) && `${p.name} ${p.subtitle}`.toLowerCase().includes(query.toLowerCase()));
  return <div>
    <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-center">
      <div><div className="text-sm font-bold text-stone-900">Koleksi tanaman indoor</div><p className="mt-1 text-[11px] text-stone-500">Kenali karakter tanaman sebelum menentukan pilihan.</p></div>
      <div className="relative w-full sm:max-w-xs"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"/><input value={query} onChange={e => setQuery(e.target.value)} className="form-input pl-9" placeholder="Cari tanaman..."/></div>
    </div>
    <div className="mb-5 flex flex-wrap items-center gap-2"><Filter size={14} className="mr-1 text-stone-400"/>{["Semua", "Tropis", "Sukulen", "Berbunga", "Merambat"].map(f => <button key={f} onClick={() => setFilter(f)} className={cn("filter-chip", filter === f && "filter-chip-active")}>{f}</button>)}<span className="ml-auto text-[10px] text-stone-400">{shown.length} tanaman</span></div>
    {shown.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{shown.map(p => <PlantCard key={p.id} plant={p} onDetail={onDetail}/>)}</div> : <div className="panel-card py-14 text-center"><Leaf className="mx-auto mb-3 text-stone-300" size={28}/><p className="text-sm font-semibold text-stone-700">Tanaman tidak ditemukan</p><p className="mt-1 text-xs text-stone-400">Coba kata kunci atau kategori lain.</p></div>}
  </div>;
}

function Recommendation({ criteria, onDetail }) {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState({ light: "Sedang", humidity: "Sedang", watering: "Mingguan", temperature: "Normal", care: "Mudah" });
  const [done, setDone] = useState(false);
  const update = (key, value) => { setRoom(prev => ({ ...prev, [key]: value })); setDone(false); };
  const ranked = useMemo(() => {
    const base = plants.slice(0, 5).map((p, i) => {
      let score = p.score;
      if (room.light === "Rendah" && ["Sansevieria", "ZZ Plant"].includes(p.name)) score += .08;
      if (room.watering === "Jarang" && ["Sansevieria", "ZZ Plant"].includes(p.name)) score += .06;
      if (room.humidity === "Tinggi" && ["Peace Lily", "Monstera Deliciosa"].includes(p.name)) score += .04;
      if (room.care === "Pemula" && ["Sansevieria", "ZZ Plant"].includes(p.name)) score += .04;
      return { ...p, score: Math.min(score, .99) };
    });
    return base.sort((a,b) => b.score - a.score);
  }, [room]);
  const fields = [
    { key: "light", title: "Intensitas cahaya", desc: "Seberapa terang ruangan pada siang hari?", icon: Sun, options: ["Rendah", "Sedang", "Terang"] },
    { key: "humidity", title: "Kelembapan ruangan", desc: "Kondisi udara di dalam ruangan.", icon: Droplets, options: ["Rendah", "Sedang", "Tinggi"] },
    { key: "watering", title: "Frekuensi penyiraman", desc: "Seberapa sering kamu bisa menyiram tanaman?", icon: Droplets, options: ["Jarang", "Mingguan", "Sering"] },
    { key: "temperature", title: "Suhu ruangan", desc: "Perkiraan suhu rata-rata ruangan.", icon: ThermometerSun, options: ["Sejuk", "Normal", "Hangat"] },
    { key: "care", title: "Pengalaman merawat", desc: "Pilih tingkat perawatan yang nyaman.", icon: Sprout, options: ["Pemula", "Menengah", "Berpengalaman"] },
  ];
  return <div className="grid items-start gap-5 xl:grid-cols-[.9fr_1.1fr]">
    <div className="panel-card">
      <div className="mb-5 flex items-start justify-between"><div><div className="eyebrow">PERSONAL PLANT MATCH</div><h2 className="mt-1 text-lg font-bold text-stone-900">Profil kondisi ruangan</h2><p className="mt-1 text-xs leading-5 text-stone-500">Isi preferensi di bawah untuk mendapatkan rekomendasi tanaman yang paling sesuai.</p></div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-900 text-lime-300"><SlidersHorizontal size={20}/></div></div>
      <div className="mb-6 flex items-center gap-2"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100"><div className="h-full w-full rounded-full bg-emerald-600"/></div><div className="text-[10px] font-semibold text-stone-500">5 dari 5 preferensi</div></div>
      <div className="space-y-5">{fields.map(({ key, title, desc, icon: Icon, options }, i) => <div key={key} className="border-b border-stone-100 pb-5 last:border-0 last:pb-0"><div className="mb-3 flex items-start gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600"><Icon size={15}/></div><div><div className="text-xs font-bold text-stone-800">{i+1}. {title}</div><div className="mt-1 text-[10px] text-stone-400">{desc}</div></div></div><div className="grid grid-cols-3 gap-2">{options.map(opt => <button key={opt} onClick={() => update(key,opt)} className={cn("choice-option", room[key] === opt && "choice-option-active")}>{room[key] === opt && <Check size={12}/>}<span>{opt}</span></button>)}</div></div>)}</div>
      <button onClick={() => { setDone(true); setStep(2); }} className="primary-button mt-6 w-full justify-center py-3.5">Hitung rekomendasi <Sparkles size={15}/></button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[9px] text-stone-400"><ShieldCheck size={12}/> Data preferensi hanya untuk simulasi front-end</p>
    </div>
    <div className="space-y-5">
      <div className="result-banner"><div className="relative z-10"><div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-lime-200"><Sparkles size={12}/> TOPSIS engine preview</div><h2 className="mt-3 text-xl font-bold text-white">Hasil yang cocok untukmu.</h2><p className="mt-1 max-w-md text-[11px] leading-5 text-white/55">Peringkat simulasi berdasarkan preferensi ruangan dan skor alternatif dummy.</p></div><div className="result-watermark"><Sprout size={92}/></div></div>
      {done && <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-[10px] font-semibold text-emerald-800"><CheckCircle2 size={15}/> Preferensi tersimpan untuk simulasi. Peringkat diperbarui.</div>}
      <div className="panel-card">
        <div className="mb-4 flex items-center justify-between"><div><div className="eyebrow">RANKING / 01—05</div><h3 className="mt-1 text-sm font-bold text-stone-900">Peringkat tanaman</h3></div><span className="rounded-lg bg-stone-100 px-2.5 py-1.5 text-[9px] font-bold text-stone-500">TOPSIS • Dummy</span></div>
        <div className="space-y-3">{ranked.map((p, i) => <button key={p.id} onClick={() => onDetail(p)} className={cn("rank-row", i === 0 && "rank-row-top")}><div className={cn("rank-number", i === 0 && "rank-number-top")}>{String(i+1).padStart(2,"0")}</div><img src={p.image} alt="" className="h-12 w-12 rounded-xl object-cover" onError={e => e.currentTarget.style.opacity = 0}/><div className="min-w-0 flex-1 text-left"><div className="truncate text-xs font-bold text-stone-800">{p.name}</div><div className="mt-1 text-[9px] text-stone-400">{p.subtitle}</div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-emerald-600" style={{ width: `${p.score*100}%` }}/></div></div><div className="ml-2 text-right"><div className={cn("text-sm font-extrabold", i === 0 ? "text-emerald-700" : "text-stone-800")}>{p.score.toFixed(2)}</div><div className="mt-1 text-[9px] text-stone-400">Preferensi</div></div><ChevronRight size={14} className="ml-1 text-stone-300"/></button>)}</div>
        <div className="mt-4 rounded-xl bg-stone-50 p-3"><div className="flex items-start gap-2"><CircleHelp size={14} className="mt-0.5 shrink-0 text-stone-400"/><p className="text-[10px] leading-5 text-stone-500">Nilai preferensi pada layar ini merupakan data dummy untuk preview UI, bukan hasil perhitungan ilmiah final. Implementasi TOPSIS penuh ditetapkan pada tahap backend/logic berikutnya.</p></div></div>
      </div>
    </div>
  </div>;
}

function Criteria({ criteria, setCriteria, showToast }) {
  const [modal, setModal] = useState(null);
  const [draft, setDraft] = useState({ name: "", code: "", type: "Benefit", weight: "0.10", scale: "1–5", note: "" });
  const open = (item) => { setDraft(item ? { ...item, weight: String(item.weight) } : { name: "", code: "", type: "Benefit", weight: "0.10", scale: "1–5", note: "" }); setModal(item || "new"); };
  const save = () => {
    if (!draft.name.trim() || !draft.code.trim()) return;
    if (modal === "new") setCriteria(prev => [...prev, { ...draft, id: `C${Date.now().toString().slice(-3)}`, weight: Number(draft.weight) }]);
    else setCriteria(prev => prev.map(c => c.id === modal.id ? { ...draft, id: modal.id, weight: Number(draft.weight) } : c));
    setModal(null); showToast("Data kriteria berhasil diperbarui (dummy).");
  };
  const remove = (id) => { setCriteria(prev => prev.filter(c => c.id !== id)); showToast("Kriteria dihapus dari data dummy."); };
  return <div>
    <div className="grid gap-4 sm:grid-cols-3"><StatCard label="Total kriteria" value={criteria.length} change="Aktif" icon={SlidersHorizontal} note="parameter penilaian"/><StatCard label="Total bobot" value={`${criteria.reduce((s,c)=>s+Number(c.weight),0).toFixed(2)}`} change="Normalisasi" icon={Gauge} tint="dark" note="idealnya bernilai 1,00"/><StatCard label="Jenis kriteria" value={new Set(criteria.map(c=>c.type)).size} change="Benefit / Cost" icon={BarChart3} tint="gold" note="arah preferensi"/></div>
    <div className="panel-card mt-5">
      <SectionHeading eyebrow="Konfigurasi penilaian" title="Kriteria & bobot" description="Kelola parameter yang digunakan untuk menghitung rekomendasi." action="Tambah kriteria" onAction={() => open(null)}/>
      <div className="table-wrap"><table className="data-table"><thead><tr><th>Kriteria</th><th>Kode</th><th>Atribut</th><th>Bobot</th><th>Skala</th><th className="text-right">Aksi</th></tr></thead><tbody>{criteria.map(c => <tr key={c.id}><td><div className="font-bold text-stone-800">{c.name}</div><div className="mt-1 text-[10px] text-stone-400">{c.note}</div></td><td><span className="rounded-md bg-stone-100 px-2 py-1 text-[10px] font-bold text-stone-600">{c.code}</span></td><td><span className={cn("rounded-full px-2.5 py-1 text-[9px] font-bold", c.type === "Benefit" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700")}>{c.type}</span></td><td><div className="font-extrabold text-stone-800">{Number(c.weight).toFixed(2)}</div><div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-emerald-600" style={{width:`${Number(c.weight)*100}%`}}/></div></td><td className="text-stone-500">{c.scale}</td><td><div className="flex justify-end gap-1"><button className="table-icon" onClick={() => open(c)} aria-label="Edit"><Pencil size={14}/></button><button className="table-icon hover:!bg-red-50 hover:!text-red-600" onClick={() => remove(c.id)} aria-label="Hapus"><Trash2 size={14}/></button></div></td></tr>)}</tbody></table></div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] text-stone-400"><span>Menampilkan {criteria.length} kriteria</span><span className="flex items-center gap-1"><CircleHelp size={12}/> Total bobot ideal: 1,00</span></div>
    </div>
    {modal && <Modal title={modal === "new" ? "Tambah kriteria" : "Edit kriteria"} onClose={() => setModal(null)}><div className="grid gap-4 sm:grid-cols-2"><Field label="Nama kriteria"><input className="form-input" value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} placeholder="Contoh: Intensitas cahaya"/></Field><Field label="Kode"><input className="form-input" value={draft.code} onChange={e=>setDraft({...draft,code:e.target.value.toUpperCase()})} placeholder="CAHAYA"/></Field><Field label="Jenis"><select className="form-input" value={draft.type} onChange={e=>setDraft({...draft,type:e.target.value})}><option>Benefit</option><option>Cost</option></select></Field><Field label="Bobot (0–1)"><input className="form-input" type="number" min="0" max="1" step=".01" value={draft.weight} onChange={e=>setDraft({...draft,weight:e.target.value})}/></Field><Field label="Skala"><select className="form-input" value={draft.scale} onChange={e=>setDraft({...draft,scale:e.target.value})}><option>1–5</option><option>1–10</option></select></Field><Field label="Deskripsi"><input className="form-input" value={draft.note} onChange={e=>setDraft({...draft,note:e.target.value})} placeholder="Keterangan kriteria"/></Field></div><div className="mt-6 flex justify-end gap-2"><button className="secondary-button" onClick={()=>setModal(null)}>Batal</button><button className="primary-button" onClick={save}>Simpan data</button></div></Modal>}
  </div>;
}

function PlantManagement({ showToast, onDetail }) {
  const [rows, setRows] = useState(plants);
  const [modal, setModal] = useState(null);
  const [draft, setDraft] = useState({ name: "", subtitle: "", type: "Tropis", light: "Sedang", water: "Sedang", humidity: "Sedang", price: "Rp100.000", image: "" });
  const [query, setQuery] = useState("");
  const open = item => { setDraft(item ? { ...item } : { name:"",subtitle:"",type:"Tropis",light:"Sedang",water:"Sedang",humidity:"Sedang",price:"Rp100.000",image:"" }); setModal(item || "new"); };
  const save = () => {
    if (!draft.name.trim()) return;
    if (modal === "new") setRows(prev => [{...draft,id:`PL-${String(Date.now()).slice(-3)}`,score:.72},...prev]);
    else setRows(prev => prev.map(p => p.id === modal.id ? {...draft,id:modal.id,score:modal.score} : p));
    setModal(null); showToast("Data tanaman diperbarui (dummy).");
  };
  const filtered = rows.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  return <div className="panel-card">
    <SectionHeading eyebrow="Inventaris katalog" title="Manajemen data tanaman" description="Kelola alternatif tanaman yang menjadi kandidat rekomendasi." action="Tambah tanaman" onAction={() => open(null)}/>
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div className="relative w-full max-w-xs"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"/><input className="form-input pl-9" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari nama tanaman..."/></div><button onClick={()=>showToast("Ekspor CSV belum aktif pada preview.")} className="secondary-button"><Download size={14}/> Ekspor</button></div>
    <div className="table-wrap"><table className="data-table"><thead><tr><th>Tanaman</th><th>Kategori</th><th>Cahaya</th><th>Air</th><th>Harga dummy</th><th>Status</th><th className="text-right">Aksi</th></tr></thead><tbody>{filtered.map(p=><tr key={p.id}><td><div className="flex items-center gap-3"><img src={p.image} alt="" className="h-10 w-10 rounded-xl object-cover" onError={e=>e.currentTarget.style.opacity=0}/><div><div className="font-bold text-stone-800">{p.name}</div><div className="mt-1 text-[10px] text-stone-400">{p.id}</div></div></div></td><td>{p.type}</td><td>{p.light}</td><td>{p.water}</td><td className="font-semibold">{p.price}</td><td><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>Aktif</span></td><td><div className="flex justify-end gap-1"><button className="table-icon" onClick={()=>onDetail(p)} aria-label="Detail"><Eye size={14}/></button><button className="table-icon" onClick={()=>open(p)} aria-label="Edit"><Pencil size={14}/></button><button className="table-icon hover:!bg-red-50 hover:!text-red-600" onClick={()=>{setRows(prev=>prev.filter(r=>r.id!==p.id));showToast("Tanaman dihapus dari data dummy.");}} aria-label="Hapus"><Trash2 size={14}/></button></div></td></tr>)}</tbody></table></div>
    {modal && <Modal title={modal === "new" ? "Tambah tanaman" : "Edit tanaman"} onClose={()=>setModal(null)}><div className="grid gap-4 sm:grid-cols-2"><Field label="Nama tanaman"><input className="form-input" value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/></Field><Field label="Nama ilmiah / subtitle"><input className="form-input" value={draft.subtitle} onChange={e=>setDraft({...draft,subtitle:e.target.value})}/></Field><Field label="Kategori"><select className="form-input" value={draft.type} onChange={e=>setDraft({...draft,type:e.target.value})}>{["Tropis","Sukulen","Berbunga","Merambat"].map(x=><option key={x}>{x}</option>)}</select></Field><Field label="Harga dummy"><input className="form-input" value={draft.price} onChange={e=>setDraft({...draft,price:e.target.value})}/></Field><Field label="Cahaya"><select className="form-input" value={draft.light} onChange={e=>setDraft({...draft,light:e.target.value})}>{["Rendah","Sedang","Terang","Tidak langsung","Rendah–terang"].map(x=><option key={x}>{x}</option>)}</select></Field><Field label="Penyiraman"><select className="form-input" value={draft.water} onChange={e=>setDraft({...draft,water:e.target.value})}>{["Rendah","Sedang","Tinggi"].map(x=><option key={x}>{x}</option>)}</select></Field><Field label="Kelembapan"><select className="form-input" value={draft.humidity} onChange={e=>setDraft({...draft,humidity:e.target.value})}>{["Rendah","Sedang","Tinggi"].map(x=><option key={x}>{x}</option>)}</select></Field><Field label="URL gambar"><input className="form-input" value={draft.image} onChange={e=>setDraft({...draft,image:e.target.value})} placeholder="https://..."/></Field></div><div className="mt-6 flex justify-end gap-2"><button className="secondary-button" onClick={()=>setModal(null)}>Batal</button><button className="primary-button" onClick={save}>Simpan tanaman</button></div></Modal>}
  </div>;
}

function Matrix({ criteria, showToast }) {
  const [matrix, setMatrix] = useState(matrixSeed);
  const [edit, setEdit] = useState(false);
  const update = (row, col, value) => setMatrix(prev => prev.map((r,i) => i === row ? {...r,values:r.values.map((v,j)=>j===col ? Number(value) : v)} : r));
  return <div className="space-y-5">
    <div className="grid gap-4 sm:grid-cols-3"><StatCard label="Alternatif terisi" value={matrix.length} change="100%" icon={Leaf} note="tanaman dengan nilai"/><StatCard label="Total sel nilai" value={matrix.length*criteria.length} change="Lengkap" icon={ClipboardList} tint="dark" note="sel matriks dummy"/><StatCard label="Skala penilaian" value="1–5" change="Ordinal" icon={Gauge} tint="gold" note="nilai tiap kriteria"/></div>
    <div className="panel-card"><SectionHeading eyebrow="Decision matrix" title="Matriks keputusan" description="Nilai performa setiap alternatif untuk masing-masing kriteria."/><div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-stone-50 p-3"><div className="flex items-start gap-2"><div className="mt-0.5 rounded-lg bg-white p-2 text-emerald-700"><CircleHelp size={15}/></div><div><div className="text-[11px] font-bold text-stone-700">Mode input skor</div><div className="mt-1 text-[10px] text-stone-500">Gunakan skala 1–5. Data hanya tersimpan di state browser.</div></div></div><button className={edit ? "primary-button" : "secondary-button"} onClick={()=>{if(edit)showToast("Matriks disimpan pada state preview.");setEdit(!edit)}}>{edit ? <Check size={14}/> : <Pencil size={14} />}{edit ? "Simpan perubahan" : "Edit matriks"}</button></div>
      <div className="table-wrap"><table className="data-table matrix-table"><thead><tr><th>Alternatif</th>{criteria.map(c=><th key={c.id} className="text-center"><div>{c.code}</div><div className="mt-1 font-normal normal-case tracking-normal text-stone-400">{c.weight.toFixed(2)}</div></th>)}</tr></thead><tbody>{matrix.map((r,i)=><tr key={r.id}><td><div className="font-bold text-stone-800">{r.name}</div><div className="mt-1 text-[10px] text-stone-400">{r.id}</div></td>{criteria.map((c,j)=><td key={c.id} className="text-center">{edit ? <select className="matrix-select" value={r.values[j] || 1} onChange={e=>update(i,j,e.target.value)}>{[1,2,3,4,5].map(v=><option key={v} value={v}>{v}</option>)}</select> : <span className={cn("matrix-value", r.values[j] >= 4 ? "matrix-high" : r.values[j] <= 2 ? "matrix-low" : "matrix-mid")}>{r.values[j] || "—"}</span>}</td>)}</tr>)}</tbody></table></div>
      <div className="mt-5 flex flex-wrap items-center gap-4 text-[10px] text-stone-500"><span className="flex items-center gap-1.5"><i className="legend-dot bg-emerald-500"/> Skor tinggi (4–5)</span><span className="flex items-center gap-1.5"><i className="legend-dot bg-amber-400"/> Skor sedang (3)</span><span className="flex items-center gap-1.5"><i className="legend-dot bg-stone-300"/> Skor rendah (1–2)</span></div>
    </div>
    <div className="panel-card"><div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-lime-300"><BarChart3 size={18}/></div><div><h3 className="text-sm font-bold text-stone-800">Catatan metode TOPSIS</h3><p className="mt-1 max-w-3xl text-xs leading-6 text-stone-500">Tahap pengembangan berikutnya perlu menerapkan normalisasi matriks, pembobotan, penentuan solusi ideal positif dan negatif, perhitungan jarak, serta nilai preferensi. Layar ini hanya menyediakan input data matriks dummy; nilai ranking belum dihitung dari tabel ini.</p></div></div></div>
  </div>;
}

function Modal({ title, children, onClose }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/55 p-4 backdrop-blur-sm" onClick={onClose}><div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7" onClick={e=>e.stopPropagation()}><div className="mb-5 flex items-center justify-between"><h3 className="text-base font-bold text-stone-900">{title}</h3><button className="icon-button" onClick={onClose} aria-label="Tutup"><X size={16}/></button></div>{children}</div></div>;
}
function Field({ label, children }) { return <label className="block"><span className="mb-1.5 block text-[10px] font-bold text-stone-600">{label}</span>{children}</label>; }

function DetailModal({ plant, onClose }) {
  if (!plant) return null;
  return <Modal title="Detail tanaman" onClose={onClose}><div className="grid gap-5 sm:grid-cols-[.8fr_1.2fr]"><img src={plant.image} alt={plant.name} className="h-52 w-full rounded-2xl object-cover sm:h-full" onError={e=>e.currentTarget.style.opacity=0}/><div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-700">{plant.type}</span><h3 className="mt-3 text-xl font-extrabold tracking-tight text-stone-900">{plant.name}</h3><p className="mt-1 text-xs italic text-stone-400">{plant.subtitle}</p><p className="mt-4 text-xs leading-6 text-stone-600">{plant.description || "Informasi tanaman akan dilengkapi pada tahap pengembangan data."}</p><div className="mt-4 grid grid-cols-3 gap-2">{[["Cahaya",plant.light,Sun],["Penyiraman",plant.water,Droplets],["Kelembapan",plant.humidity,Wind]].map(([k,v,I])=><div key={k} className="rounded-xl bg-stone-50 p-3"><I size={14} className="mb-2 text-emerald-700"/><div className="text-[9px] text-stone-400">{k}</div><div className="mt-1 text-[10px] font-bold text-stone-700">{v}</div></div>)}</div><div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4"><div className="text-sm font-extrabold text-stone-900">{plant.price}</div><button onClick={onClose} className="primary-button">Tutup detail</button></div></div></div></Modal>;
}

function LoginModal({ onClose, onLogin }) {
  const [email,setEmail]=useState("admin@panambas.id");
  const [password,setPassword]=useState("panambas123");
  return <Modal title="Masuk ke Panambas" onClose={onClose}><div className="mx-auto max-w-sm"><div className="mb-5 text-center"><div className="brand-mark mx-auto mb-3"><Sprout size={22}/></div><h3 className="text-lg font-extrabold text-stone-900">Selamat datang kembali</h3><p className="mt-1 text-xs text-stone-500">Demo autentikasi front-end · tanpa server</p></div><form onSubmit={e=>{e.preventDefault();onLogin(email.includes("admin")?"admin":"customer");onClose();}} className="space-y-4"><Field label="Email"><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></Field><Field label="Kata sandi"><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></Field><button className="primary-button w-full justify-center py-3" type="submit">Masuk <ArrowRight size={14}/></button></form><div className="mt-4 rounded-xl bg-stone-50 p-3 text-[10px] leading-5 text-stone-500"><b className="text-stone-700">Akun demo:</b> email berisi kata “admin” membuka mode admin; email lain membuka mode pelanggan. Validasi hanya simulasi UI.</div></div></Modal>;
}

export default function App() {
  const [page,setPage] = useState("overview");
  const [role,setRole] = useState("admin");
  const [mobileOpen,setMobileOpen] = useState(false);
  const [criteria,setCriteria] = useState(criteriaSeed);
  const [query,setQuery] = useState("");
  const [detail,setDetail] = useState(null);
  const [loginOpen,setLoginOpen] = useState(false);
  const [toast,setToast] = useState("");
  const [showLogout,setShowLogout] = useState(false);
  const showToast = (msg) => { setToast(msg); window.setTimeout(()=>setToast(""),2600); };
  const pageMeta = {
    overview:["Workspace","Ringkasan sistem"], catalog:["Eksplorasi","Katalog tanaman hias"], recommendation:["Smart matching","Rekomendasi TOPSIS"], criteria:["Konfigurasi","Kriteria & bobot"], plants:["Inventaris","Manajemen data tanaman"], matrix:["Pengolahan data","Matriks keputusan"]
  };
  const renderPage = () => {
    if(page === "catalog") return <Catalog onDetail={setDetail} query={query} setQuery={setQuery}/>;
    if(page === "recommendation") return <Recommendation criteria={criteria} onDetail={setDetail}/>;
    if(page === "criteria") return <Criteria criteria={criteria} setCriteria={setCriteria} showToast={showToast}/>;
    if(page === "plants") return <PlantManagement showToast={showToast} onDetail={setDetail}/>;
    if(page === "matrix") return <Matrix criteria={criteria} showToast={showToast}/>;
    return <Overview setPage={setPage} role={role} onDetail={setDetail} criteria={criteria}/>;
  };
  return <div className="app-shell">
    <Sidebar page={page} setPage={setPage} role={role} setRole={setRole} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
    <main className="main-area"><Header title={pageMeta[page][0]} subtitle={pageMeta[page][1]} setMobileOpen={setMobileOpen} role={role}/>
      <div className="page-content"><div className="mb-5 flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2 text-[10px] text-stone-400"><Home size={12}/><span>Workspace</span><ChevronRight size={11}/><span className="font-semibold text-stone-600">{pageMeta[page][1]}</span></div><div className="flex items-center gap-2"><span className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-stone-500">PREVIEW / DUMMY DATA</span><button className="secondary-button !px-3 !py-1.5 !text-[10px]" onClick={()=>setLoginOpen(true)}><CircleUserRound size={13}/> Login</button><button className="secondary-button !px-3 !py-1.5 !text-[10px]" onClick={()=>{setRole("customer");showToast("Mode pelanggan aktif.");}}><LogOut size={13}/> Logout</button></div></div>{renderPage()}<footer className="mt-10 flex flex-col justify-between gap-2 border-t border-stone-200/80 py-5 text-[9px] text-stone-400 sm:flex-row"><span>© 2026 Panambas Plant Intelligence. Front-end prototype.</span><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/> Sistem berjalan dengan data simulasi</span></footer></div>
    </main>
    {detail && <DetailModal plant={detail} onClose={()=>setDetail(null)}/>}
    {loginOpen && <LoginModal onClose={()=>setLoginOpen(false)} onLogin={r=>{setRole(r);showToast(`Mode ${r === "admin" ? "admin" : "pelanggan"} aktif.`);}}/>}
    {toast && <div className="toast"><CheckCircle2 size={16}/>{toast}</div>}
  </div>;
}
