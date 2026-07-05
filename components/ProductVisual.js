const baseCard = {
  position: "absolute", inset: 0, overflow: "hidden",
  display: "flex", flexDirection: "column",
  fontFamily: "'Cairo', 'Segoe UI', sans-serif",
  direction: "rtl", padding: "18px 20px",
};

const Glow = ({ color, style = {} }) => (
  <div style={{
    position: "absolute", borderRadius: "50%",
    width: "220px", height: "220px",
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    pointerEvents: "none",
    ...style,
  }} />
);

const Tag = ({ color, bg, border, children }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: "6px",
    background: bg, color, border: `1px solid ${border}`,
    padding: "4px 12px", borderRadius: "100px",
    fontSize: "11px", fontWeight: "700", marginBottom: "10px",
    width: "fit-content",
  }}>
    {children}
  </div>
);

const Brand = () => (
  <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.18)", letterSpacing: "1px", marginTop: "8px" }}>
    أدوات مالية احترافية بالعربي
  </div>
);

const StatGrid = ({ items, accent }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
    {items.map(([num, lbl], i) => (
      <div key={i} style={{ background: `${accent}12`, border: `1px solid ${accent}20`, borderRadius: "8px", padding: "8px 10px" }}>
        <div style={{ fontSize: "15px", fontWeight: "900", color: accent, lineHeight: "1" }}>{num}</div>
        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>{lbl}</div>
      </div>
    ))}
  </div>
);

// ─── 1. مخطط الميزانية — Navy/Gold ───────────────────────────────
function BudgetCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(145deg,#0d1b2a,#1a2d45)", border: "1px solid rgba(212,175,55,0.2)", justifyContent: "space-between" }}>
      <Glow color="rgba(212,175,55,0.08)" style={{ top: "-70px", right: "-70px" }} />
      <div style={{ position: "relative" }}>
        <Tag color="#d4af37" bg="rgba(212,175,55,0.15)" border="rgba(212,175,55,0.3)">💡 اكتشاف مهم</Tag>
        <div style={{ fontSize: "18px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "12px" }}>
          لماذا تختفي <span style={{ color: "#d4af37" }}>فلوسك</span> كل شهر؟
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {["7 من 10 بدون ميزانية واضحة", "90% لا يعرفون صافي ثروتهم", "المشكلة في النظام — لا الراتب"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "10px", color: "rgba(255,255,255,0.65)" }}>
              <span style={{ color: "#e74c3c", flexShrink: 0 }}>✗</span>{t}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: "#0d1b2a", padding: "8px 16px", borderRadius: "10px", fontSize: "11px", fontWeight: "700", width: "fit-content", marginBottom: "8px" }}>
          مخطط الميزانية الشخصية ←
        </div>
        <Brand />
      </div>
    </div>
  );
}

// ─── 2. حاسبة القروض — Deep Green ────────────────────────────────
function LoanCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(145deg,#051a10,#0d2e1a)", border: "1px solid rgba(46,213,115,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(46,213,115,0.06)" style={{ bottom: "-60px", right: "-60px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "48px", fontWeight: "900", color: "#2ed573", lineHeight: "1", marginBottom: "2px" }}>18,400</div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginBottom: "14px" }}>
          ريال — الفرق بين أرخص وأغلى بنك
        </div>
        <div style={{ fontSize: "15px", fontWeight: "700", color: "white", lineHeight: "1.5", marginBottom: "8px" }}>
          نفس المبلغ. نفس المدة.<br />فرق يصل لـ 18 ألف ريال.
        </div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", lineHeight: "1.65" }}>
          قارن 6 بنوك بمعدل APR الحقيقي قبل أي توقيع.
        </div>
      </div>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(46,213,115,0.1)", color: "#2ed573", border: "1px solid rgba(46,213,115,0.25)", padding: "7px 14px", borderRadius: "100px", fontSize: "10px", fontWeight: "600", marginBottom: "8px" }}>
          📊 حاسبة القروض ومقارنة البنوك
        </div>
        <Brand />
      </div>
    </div>
  );
}

// ─── 3. أدوات المطعم — Dark Comparison ───────────────────────────
function RestaurantCard() {
  return (
    <div style={{ ...baseCard, background: "#0f0f0f", border: "1px solid #1e1e1e", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: "10px", color: "#555", letterSpacing: "2px", marginBottom: "10px" }}>المقارنة الحقيقية</div>
        <div style={{ fontSize: "17px", fontWeight: "800", color: "white", marginBottom: "14px", lineHeight: "1.4" }}>
          صاحب المطعم<br />قبل وبعد
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <div style={{ background: "rgba(231,76,60,0.07)", border: "1px solid rgba(231,76,60,0.2)", borderRadius: "12px", padding: "10px" }}>
            <div style={{ fontSize: "9px", fontWeight: "700", color: "#e74c3c", letterSpacing: "1px", marginBottom: "8px" }}>قبل الأداة</div>
            {["تسعير بالحدس", "ما يعرف food cost", "يشتغل ويخسر"].map((t, i) => (
              <div key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.55)", marginBottom: "5px" }}>✗ {t}</div>
            ))}
          </div>
          <div style={{ background: "rgba(46,213,115,0.07)", border: "1px solid rgba(46,213,115,0.2)", borderRadius: "12px", padding: "10px" }}>
            <div style={{ fontSize: "9px", fontWeight: "700", color: "#2ed573", letterSpacing: "1px", marginBottom: "8px" }}>بعد الأداة</div>
            {["food cost لكل طبق", "هامش ربح واضح", "نقطة تعادل محسوبة"].map((t, i) => (
              <div key={i} style={{ fontSize: "9px", color: "rgba(255,255,255,0.55)", marginBottom: "5px" }}>✓ {t}</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", borderTop: "1px solid #1e1e1e", paddingTop: "10px", marginBottom: "4px" }}>
          أدوات تخطيط وإدارة المطعم والمقهى
        </div>
        <Brand />
      </div>
    </div>
  );
}

// ─── 4. تحليل أسهم تداول — Purple Features ───────────────────────
function StocksCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(145deg,#0e0620,#1a0e35)", border: "1px solid rgba(139,92,246,0.2)", justifyContent: "space-between" }}>
      <Glow color="rgba(139,92,246,0.07)" style={{ top: "-80px", right: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#8b5cf6", letterSpacing: "2px", marginBottom: "10px" }}>حزمة المستثمر السعودي</div>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "14px" }}>
          كل ما تحتاجه<br />لقرار استثماري صح
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { icon: "📈", text: "فارز أسهم تداول + فحص شرعي" },
            { icon: "🏠", text: "Cap Rate، NOI، DSCR" },
            { icon: "💰", text: "محفظة أسهم + عقار + ذهب" },
            { icon: "🧮", text: "كل الصيغ محققة آلياً" },
          ].map(({ icon, text }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div style={{ width: "22px", height: "22px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", flexShrink: 0 }}>
                {icon}
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", paddingTop: "3px" }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
      <Brand />
    </div>
  );
}

// ─── 5. مخطط التقاعد FIRE — Dark Thread ──────────────────────────
function FireCard() {
  return (
    <div style={{ ...baseCard, background: "#111317", border: "1px solid #222", justifyContent: "space-between" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", paddingBottom: "12px", borderBottom: "1px solid #222" }}>
          <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg,#1da1f2,#0077b5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
            📊
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "white" }}>أدوات مالية</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)" }}>@seedaal_tools</div>
          </div>
          <div style={{ marginRight: "auto", background: "rgba(29,161,242,0.1)", border: "1px solid rgba(29,161,242,0.2)", color: "#1da1f2", padding: "3px 10px", borderRadius: "100px", fontSize: "9px", fontWeight: "600" }}>
            Thread 🧵
          </div>
        </div>
        <div style={{ fontSize: "13px", color: "white", lineHeight: "1.6", marginBottom: "12px", fontWeight: "600" }}>
          كيف تحسب <span style={{ color: "#1da1f2" }}>عمرك التقاعدي</span> بدقة؟ 👇
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "التقاعد ليس عمر 60 — بل رقم محدد في البنك",
            "رقم التقاعد = مصاريفك × 25 (قاعدة FIRE)",
            "لو مصاريفك 120k ريال — تحتاج 3 مليون",
            "الملف يحسب التضخم + الزكاة + محاكاة 30 سنة",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", fontSize: "10px", color: "rgba(255,255,255,0.6)", lineHeight: "1.5" }}>
              <span style={{ color: "#1da1f2", fontWeight: "700", flexShrink: 0 }}>{i + 1}</span>
              {t}
            </div>
          ))}
        </div>
      </div>
      <Brand />
    </div>
  );
}

// ─── 6. تحليل التجارة الإلكترونية — Teal ────────────────────────
function EcomCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#040f12,#071a1f)", border: "1px solid rgba(6,182,212,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(6,182,212,0.07)" style={{ top: "-80px", right: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#06b6d4", letterSpacing: "2px", marginBottom: "8px" }}>أدوات التجارة الإلكترونية</div>
        <Tag color="#06b6d4" bg="rgba(6,182,212,0.12)" border="rgba(6,182,212,0.25)">🛒 تحليل متجرك</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "10px" }}>
          أي منتج يحقق<br /><span style={{ color: "#06b6d4" }}>80% من ربحك؟</span>
        </div>
      </div>
      <StatGrid accent="#06b6d4" items={[["ABC", "تصنيف المنتجات"], ["RFM", "تحليل العملاء"], ["∞", "إدارة المخزون"], ["📈", "خطة النمو"]]} />
      <Brand />
    </div>
  );
}

// ─── 7. إدارة العقارات المؤجرة — Amber ───────────────────────────
function PropCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#100c00,#1c1500)", border: "1px solid rgba(245,158,11,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(245,158,11,0.07)" style={{ bottom: "-80px", left: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#f59e0b", letterSpacing: "2px", marginBottom: "8px" }}>إدارة العقارات المؤجرة</div>
        <Tag color="#f59e0b" bg="rgba(245,158,11,0.12)" border="rgba(245,158,11,0.25)">🏠 محفظتك العقارية</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "12px" }}>
          كل عقاراتك<br /><span style={{ color: "#f59e0b" }}>في مكان واحد</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {["سجل مستأجرين كامل مع تواريخ العقود", "تتبع تحصيل الإيجارات شهرياً", "تحليل العائد الفعلي بعد المصاريف"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "10px", color: "rgba(255,255,255,0.65)" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f59e0b", flexShrink: 0, marginTop: "4px" }} />
              {t}
            </div>
          ))}
        </div>
      </div>
      <Brand />
    </div>
  );
}

// ─── 8. حزمة الهندسة — Indigo ────────────────────────────────────
function EngCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#030812,#060f20)", border: "1px solid rgba(99,102,241,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(99,102,241,0.07)" style={{ top: "-80px", left: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#6366f1", letterSpacing: "2px", marginBottom: "8px" }}>هندسة وإدارة مشاريع</div>
        <Tag color="#6366f1" bg="rgba(99,102,241,0.12)" border="rgba(99,102,241,0.25)">🏗️ حزمة المشاريع</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "10px" }}>
          أنجز مشروعك<br /><span style={{ color: "#6366f1" }}>في الوقت والميزانية</span>
        </div>
      </div>
      <StatGrid accent="#6366f1" items={[["BOQ", "جدول الكميات"], ["📅", "مخطط جانت"], ["✔", "فحص الجودة"], ["⚠", "سجل المخاطر"]]} />
      <Brand />
    </div>
  );
}

// ─── 9. أدوات الفريلانسر — Purple Neon ───────────────────────────
function FreeCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#0a0315,#110522)", border: "1px solid rgba(168,85,247,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(168,85,247,0.07)" style={{ bottom: "-80px", right: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#a855f7", letterSpacing: "2px", marginBottom: "8px" }}>الفريلانسر والعمل الحر</div>
        <Tag color="#a855f7" bg="rgba(168,85,247,0.12)" border="rgba(168,85,247,0.25)">💼 إدارة دخلك</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "10px" }}>
          كم تستحق<br /><span style={{ color: "#a855f7" }}>ساعتك فعلاً؟</span>
        </div>
      </div>
      <StatGrid accent="#a855f7" items={[["⏱", "سعر الساعة"], ["📁", "متابعة المشاريع"], ["P&L", "أرباح وخسائر"], ["👤", "تحليل العملاء"]]} />
      <Brand />
    </div>
  );
}

// ─── 10. حزمة وثائق الأعمال — Emerald ───────────────────────────
function BizCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#010f08,#031a0e)", border: "1px solid rgba(16,185,129,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(16,185,129,0.07)" style={{ top: "-80px", right: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#10b981", letterSpacing: "2px", marginBottom: "8px" }}>وثائق الأعمال الاحترافية</div>
        <Tag color="#10b981" bg="rgba(16,185,129,0.12)" border="rgba(16,185,129,0.25)">📄 حزمة جاهزة</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "12px" }}>
          وثيقة واحدة<br /><span style={{ color: "#10b981" }}>قد تحسم صفقة</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {["خطة عمل كاملة للمستثمرين", "دراسة جدوى بأرقام حقيقية", "نماذج عقود عمل جاهزة", "مؤشرات KPIs لقياس الأداء"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "10px", color: "rgba(255,255,255,0.65)" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", flexShrink: 0, marginTop: "4px" }} />
              {t}
            </div>
          ))}
        </div>
      </div>
      <Brand />
    </div>
  );
}

// ─── 11. أدوات VAT والزكاة — Red Warning ─────────────────────────
function VatCard() {
  return (
    <div style={{ ...baseCard, background: "linear-gradient(150deg,#100404,#1a0707)", border: "1px solid rgba(239,68,68,0.15)", justifyContent: "space-between" }}>
      <Glow color="rgba(239,68,68,0.07)" style={{ top: "-80px", left: "-80px" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: "10px", fontWeight: "600", color: "#ef4444", letterSpacing: "2px", marginBottom: "8px" }}>ضريبة القيمة المضافة والزكاة</div>
        <Tag color="#ef4444" bg="rgba(239,68,68,0.12)" border="rgba(239,68,68,0.25)">⚠️ امتثال ضريبي</Tag>
        <div style={{ fontSize: "17px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "10px" }}>
          الغرامة تصل<br /><span style={{ color: "#ef4444" }}>25% من المبلغ</span>
        </div>
      </div>
      <StatGrid accent="#ef4444" items={[["VAT", "حاسبة دقيقة"], ["🗓", "تقويم الامتثال"], ["📑", "إقرار ربعي"], ["☪", "زكاة الشركات"]]} />
      <Brand />
    </div>
  );
}

// ─── Generic Category Fallback ────────────────────────────────────
const THEMES = {
  "personal-finance": { bg: "linear-gradient(145deg,#0d1b2a,#1a2d45)", accent: "#d4af37", glow: "rgba(212,175,55,0.08)" },
  "investment":       { bg: "linear-gradient(145deg,#0e0620,#1a0e35)", accent: "#8b5cf6", glow: "rgba(139,92,246,0.08)" },
  "real-estate":      { bg: "linear-gradient(145deg,#100c00,#1c1500)", accent: "#f59e0b", glow: "rgba(245,158,11,0.08)" },
  "business":         { bg: "linear-gradient(145deg,#010f08,#031a0e)", accent: "#10b981", glow: "rgba(16,185,129,0.08)" },
  "specialized":      { bg: "linear-gradient(145deg,#030812,#060f20)", accent: "#6366f1", glow: "rgba(99,102,241,0.08)" },
  "life-events":      { bg: "linear-gradient(145deg,#120a1a,#1e0f2a)", accent: "#ec4899", glow: "rgba(236,72,153,0.08)" },
};

function CategoryFallback({ product }) {
  const t = THEMES[product.category] || THEMES["personal-finance"];
  const shortName = product.name.length > 30 ? product.name.slice(0, 30) + "…" : product.name;
  return (
    <div style={{ ...baseCard, background: t.bg, border: `1px solid ${t.accent}30`, justifyContent: "space-between" }}>
      <Glow color={t.glow} style={{ top: "-60px", right: "-60px" }} />
      <div style={{ position: "relative" }}>
        <div style={{
          display: "inline-block",
          background: `${t.accent}20`, color: t.accent,
          border: `1px solid ${t.accent}40`,
          padding: "4px 12px", borderRadius: "100px",
          fontSize: "10px", fontWeight: "600", marginBottom: "10px",
        }}>
          {product.icon} أداة {product.category === "personal-finance" ? "مالية" :
            product.category === "investment" ? "استثمار" :
            product.category === "real-estate" ? "عقارية" :
            product.category === "business" ? "أعمال" :
            product.category === "specialized" ? "متخصصة" : "تخطيط"}
        </div>
        <div style={{ fontSize: "16px", fontWeight: "900", color: "white", lineHeight: "1.35", marginBottom: "10px" }}>
          {shortName}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", flex: 1, alignContent: "start" }}>
        {product.features.slice(0, 4).map((f, i) => (
          <div key={i} style={{ background: `${t.accent}0d`, border: `1px solid ${t.accent}20`, borderRadius: "8px", padding: "8px 10px" }}>
            <div style={{ fontSize: "12px", color: t.accent, lineHeight: "1" }}>✓</div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>
              {f.length > 22 ? f.slice(0, 22) + "…" : f}
            </div>
          </div>
        ))}
      </div>
      <Brand />
    </div>
  );
}

// ─── Card Map ─────────────────────────────────────────────────────
const CARD_MAP = {
  "personal-budget-planner":   BudgetCard,
  "loan-bank-comparison":      LoanCard,
  "restaurant-management":     RestaurantCard,
  "tadawul-stocks-analysis":   StocksCard,
  "retirement-fire-planner":   FireCard,
  "ecommerce-analytics":       EcomCard,
  "rental-property-management": PropCard,
  "engineering-project-bundle": EngCard,
  "freelancer-tools":          FreeCard,
  "business-docs-bundle":      BizCard,
  "vat-tax-planning":          VatCard,
};

export default function ProductVisual({ product }) {
  const Card = CARD_MAP[product.id];
  if (Card) return <Card />;
  return <CategoryFallback product={product} />;
}
