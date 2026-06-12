import Sidebar from "./Sidebar";
import Header from "./Header";

// TODO: replace with GET /api/clients/:id/invoices
const MOCK_INVOICES = [
  { id: "INV-1042", period: "May 2026", checks: 38, amount: 13860, status: "Paid", dueDate: "2026-06-05" },
  { id: "INV-1051", period: "Jun 2026", checks: 21, amount: 7980,  status: "Due",  dueDate: "2026-07-05" },
];

export default function ClientBilling() {
  const totalDue = MOCK_INVOICES
    .filter((i) => i.status === "Due")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total"><h4>{MOCK_INVOICES.length}</h4><p>Invoices</p></div>
              <div className="card-inner-dash bdr-progress"><h4>₹{totalDue.toLocaleString()}</h4><p>Amount Due</p></div>
              <div className="card-inner-dash bdr-com"><h4>{MOCK_INVOICES.filter(i => i.status === "Paid").length}</h4><p>Paid</p></div>
            </div>

            <div className="down-table" style={{ marginTop: "20px" }}>
              <div style={{ background: "var(--primary-color)", padding: "12px 16px", borderRadius: "10px 10px 0 0" }}>
                <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 700, margin: 0 }}>BILLING & INVOICES</h3>
              </div>
              <table>
                <thead>
                  <tr><th>Invoice</th><th>Period</th><th>Checks</th><th>Amount</th><th>Due Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {MOCK_INVOICES.map((inv) => (
                    <tr key={inv.id}>
                      <td style={{ fontWeight: 600 }}>{inv.id}</td>
                      <td>{inv.period}</td>
                      <td>{inv.checks}</td>
                      <td>₹{inv.amount.toLocaleString()}</td>
                      <td>{inv.dueDate}</td>
                      <td>
                        <span className={`status ${inv.status === "Paid" ? "completed" : "in-progress"}`}
                          style={{ width: "auto", padding: "4px 10px", fontSize: "11px" }}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}