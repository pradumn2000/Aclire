import { useEffect, useRef } from "react";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getWeekLabels() {
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(DAYS[d.getDay()]);
  }
  return labels;
}

function aggregateData(casesData, dateFilter, customFrom, customTo) {
  const now = new Date();

  if (dateFilter === "today") {
    // Hour buckets 0–23
    const totalByHour = Array(24).fill(0);
    const discByHour  = Array(24).fill(0);
    casesData.forEach(c => {
      const d = new Date(c.created_at);
      if (isNaN(d)) return;
      if (d.toDateString() !== now.toDateString()) return;
      const h = d.getHours();
      totalByHour[h]++;
      if (c.status === "discrepancy" || c.discrepancy) discByHour[h]++;
    });
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    return { labels, total: totalByHour, disc: discByHour };
  }

  if (dateFilter === "week") {
    // Last 7 days
    const totalByDay = Array(7).fill(0);
    const discByDay  = Array(7).fill(0);
    casesData.forEach(c => {
      const d = new Date(c.created_at);
      if (isNaN(d)) return;
      for (let i = 0; i < 7; i++) {
        const day = new Date();
        day.setDate(now.getDate() - (6 - i));
        if (d.toDateString() === day.toDateString()) {
          totalByDay[i]++;
          if (c.status === "discrepancy" || c.discrepancy) discByDay[i]++;
        }
      }
    });
    return { labels: getWeekLabels(), total: totalByDay, disc: discByDay };
  }

  if (dateFilter === "month") {
    // All 12 months of current year
    const totalByMonth = Array(12).fill(0);
    const discByMonth  = Array(12).fill(0);
    casesData.forEach(c => {
      const d = new Date(c.created_at);
      if (isNaN(d) || d.getFullYear() !== now.getFullYear()) return;
      totalByMonth[d.getMonth()]++;
      if (c.status === "discrepancy" || c.discrepancy) discByMonth[d.getMonth()]++;
    });
    return { labels: MONTHS, total: totalByMonth, disc: discByMonth };
  }

  if (dateFilter === "custom") {
    // Day-by-day between customFrom and customTo
    if (!customFrom || !customTo) {
      // No range set yet → fall back to monthly view
      const totalByMonth = Array(12).fill(0);
      const discByMonth  = Array(12).fill(0);
      casesData.forEach(c => {
        const d = new Date(c.created_at);
        if (isNaN(d)) return;
        totalByMonth[d.getMonth()]++;
        if (c.status === "discrepancy" || c.discrepancy) discByMonth[d.getMonth()]++;
      });
      return { labels: MONTHS, total: totalByMonth, disc: discByMonth };
    }

    const from  = new Date(customFrom);
    const to    = new Date(customTo + "T23:59:59");
    const days  = Math.round((to - from) / 86400000) + 1;
    const labels      = [];
    const totalByDay  = [];
    const discByDay   = [];

    for (let i = 0; i < days; i++) {
      const day = new Date(from);
      day.setDate(from.getDate() + i);
      labels.push(`${day.getDate()} ${MONTHS[day.getMonth()]}`);
      totalByDay.push(0);
      discByDay.push(0);
    }

    casesData.forEach(c => {
      const d = new Date(c.created_at);
      if (isNaN(d) || d < from || d > to) return;
      const idx = Math.round((d - from) / 86400000);
      if (idx >= 0 && idx < days) {
        totalByDay[idx]++;
        if (c.status === "discrepancy" || c.discrepancy) discByDay[idx]++;
      }
    });

    return { labels, total: totalByDay, disc: discByDay };
  }

  return { labels: MONTHS, total: Array(12).fill(0), disc: Array(12).fill(0) };
}

export default function CaseTrendsChart({
  casesData  = [],
  label      = "This Month",
  vsText     = "▲ 14% vs last month",
  vsColor    = "#14d8a7",
  dateFilter = "month",
  customFrom = "",
  customTo   = "",
}) {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !window.Chart) return;

    const { labels, total, disc } = aggregateData(casesData, dateFilter, customFrom, customTo);

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new window.Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Total Cases",
            data: total,
            backgroundColor: "#028090",
            borderRadius: 3,
            borderSkipped: false,
            barPercentage: 0.55,
          },
          {
            label: "Discrepancies",
            data: disc,
            backgroundColor: "#ef4444",
            borderRadius: 3,
            borderSkipped: false,
            barPercentage: 0.55,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#64748b", font: { size: 12 }, boxWidth: 12, padding: 16 },
          },
          tooltip: {
            backgroundColor: "#1e293b",
            titleColor: "#fff",
            bodyColor: "#cbd5e1",
            padding: 10,
            cornerRadius: 6,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#94a3b8",
              font: { size: 11 },
              maxRotation: 45,
              autoSkip: true,
              maxTicksLimit: 14,
            },
          },
          y: {
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: { color: "#94a3b8", font: { size: 11 }, precision: 0 },
            beginAtZero: true,
          },
        },
      },
    });

    return () => { chartRef.current?.destroy(); };
  }, [casesData, dateFilter, customFrom, customTo]); // ← re-renders on every filter change

  return (
    <div className="up-table">
      <div style={{
        background: "#27348B", color: "#fff",
        padding: "14px 18px", fontWeight: 700,
        display: "flex", justifyContent: "space-between",
      }}>
        <span>CASE TRENDS — {label}</span>
        <span style={{ color: vsColor }}>{vsText}</span>
      </div>
      <div style={{ padding: "16px", height: "260px", background: "#fff" }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}