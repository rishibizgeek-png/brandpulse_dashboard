// src/pages/Home.js
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function Home() {
  useEffect(() => {
    const brandPulseBlue = "#0da6f2";

    let mentionsChartInstance;
    let growthChartInstance;

    // Mentions Chart (Line)
    const mentionsCtx = document.getElementById("mentionsChart");
    if (mentionsCtx) {
      const ctx = mentionsCtx.getContext("2d");
      const mentionsGradient = ctx.createLinearGradient(0, 0, 0, 200);
      mentionsGradient.addColorStop(0, "rgba(13,166,242,0.28)");
      mentionsGradient.addColorStop(1, "rgba(13,166,242,0)");

      mentionsChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Mentions",
              data: [120, 150, 140, 170, 180, 200, 220],
              fill: true,
              backgroundColor: mentionsGradient,
              borderColor: brandPulseBlue,
              tension: 0.4,
              pointRadius: 3,
              pointBackgroundColor: brandPulseBlue,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#9CA3AF" }, grid: { display: false } },
            y: { ticks: { color: "#9CA3AF" }, grid: { color: "#1f2a30" } },
          },
        },
      });
    }

    // Growth Chart (Bar)
    const growthCtx = document.getElementById("growthChart");
    if (growthCtx) {
      const ctx = growthCtx.getContext("2d");
      growthChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Follower Growth",
              data: [200, 320, 280, 400, 360, 420, 480],
              backgroundColor: brandPulseBlue,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#9CA3AF" }, grid: { display: false } },
            y: { ticks: { color: "#9CA3AF" }, grid: { color: "#1f2a30" } },
          },
        },
      });
    }

    // ✅ Cleanup: destroy charts on unmount
    return () => {
      if (mentionsChartInstance) mentionsChartInstance.destroy();
      if (growthChartInstance) growthChartInstance.destroy();
    };
  }, []);

  return (
    <main className="flex-1 p-8 bg-[#101d23] text-white min-h-screen">
      {/* Header + Filters */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Home Dashboard</h1>
          <p className="text-white/70 mt-1">
            Overview of mentions, engagement, follower growth and reach
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="rounded-full bg-[#223c49] px-4 py-2 text-white text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Custom Range</option>
          </select>
          <select className="rounded-full bg-[#223c49] px-4 py-2 text-white text-sm">
            <option>All Platforms</option>
            <option>Twitter</option>
            <option>Facebook</option>
            <option>LinkedIn</option>
            <option>Reddit</option>
          </select>
          <select className="rounded-full bg-[#223c49] px-4 py-2 text-white text-sm">
            <option>All Message Types</option>
            <option>Post</option>
            <option>Comment</option>
            <option>DM/Message</option>
          </select>
          <select className="rounded-full bg-[#223c49] px-4 py-2 text-white text-sm">
            <option>All Sentiments</option>
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Positive Mentions</p>
          <p className="text-3xl font-bold text-green-400 mt-2">1,234</p>
          <p className="text-sm text-white/70 mt-1">Direct + Indirect</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Neutral Mentions</p>
          <p className="text-3xl font-bold text-white mt-2">5,678</p>
          <p className="text-sm text-white/70 mt-1">All channels</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Negative Mentions</p>
          <p className="text-3xl font-bold text-red-400 mt-2">910</p>
          <p className="text-sm text-white/70 mt-1">Requires attention</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Total Mentions</p>
          <p className="text-3xl font-bold text-white mt-2">7,822</p>
          <p className="text-sm text-white/70 mt-1">Combined channels</p>
        </div>

        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Follower Growth</p>
          <p className="text-3xl font-bold text-white mt-2">+2,345</p>
          <p className="text-sm text-white/70 mt-1">Net change</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Total Engagement</p>
          <p className="text-3xl font-bold text-white mt-2">15,678</p>
          <p className="text-sm text-white/70 mt-1">Likes + Comments + Shares</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Total Reach</p>
          <p className="text-3xl font-bold text-white mt-2">420,512</p>
          <p className="text-sm text-white/70 mt-1">Estimated unique users</p>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-white/70">Avg Engagement / Post</p>
          <p className="text-3xl font-bold text-white mt-2">245</p>
          <p className="text-sm text-white/70 mt-1">Engagements per post</p>
        </div>
      </section>

      {/* Charts */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <h3 className="text-white font-semibold">Total Mentions Over Time</h3>
          <canvas id="mentionsChart" className="mt-4 h-60"></canvas>
        </div>
        <div className="bg-[#182b34] p-6 rounded-2xl shadow-lg">
          <h3 className="text-white font-semibold">Follower Growth Trends</h3>
          <canvas id="growthChart" className="mt-4 h-60"></canvas>
        </div>
      </section>
    </main>
  );
}

export default Home;
