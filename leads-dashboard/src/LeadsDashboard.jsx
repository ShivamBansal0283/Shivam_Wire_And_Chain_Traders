import { useEffect, useState } from 'react';
import API from './api';
import { logout } from './auth';
import COMPANY_INFO from './config';

export default function LeadsDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest'); // newest or attended

  const fetchInquiries = () => {
    const query = [
      statusFilter !== 'all' ? `status=${statusFilter}` : '',
      sortBy === 'attended' ? 'sort=attended' : ''
    ]
      .filter(Boolean)
      .join('&');

    API.get(`/inquiry${query ? '?' + query : ''}`)
      .then(res => setInquiries(res.data))
      .catch(() => logout());
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, sortBy]);

  const handleToggleAttend = async (id, attended) => {
    try {
      await API.patch(`/inquiry/${id}/attend`, { attended: !attended });
      fetchInquiries(); // refresh list
    } catch (err) {
      console.error('Failed to update attended status', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Leads Dashboard</h2>
      <button onClick={logout} className="btn btn-danger mb-3">Logout</button>

      <div className="mb-3 d-flex align-items-center gap-3">
        <div>
          <label className="form-label me-2"><strong>Filter:</strong></label>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="form-select w-auto d-inline-block"
          >
            <option value="all">All</option>
            <option value="attended">Attended</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div>
          <label className="form-label me-2"><strong>Sort by:</strong></label>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="form-select w-auto d-inline-block"
          >
            <option value="newest">Newest First</option>
            <option value="attended">Recently Attended</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th><th>Phone</th><th>Company</th><th>Wire Size</th><th>Qty</th><th>City</th><th>Date</th><th>Status</th><th>Action</th><th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map(i => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.phone}</td>
              <td>{i.company}</td>
              <td>{i.wireSize}</td>
              <td>{i.quantity}</td>
              <td>{i.city}</td>
              <td>{new Date(i.createdAt).toLocaleString()}</td>
              <td>
                {i.attended ? (
                  <span className="badge bg-success">Attended</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pending</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => handleToggleAttend(i.id, i.attended)}
                >
                  Mark {i.attended ? 'Pending' : 'Attended'}
                </button>
              </td>
              <td>
                <a
                  href={`https://wa.me/91${i.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                    `Thank you for contacting ${COMPANY_INFO.name}. 

Please let us know your requirements or questions here. You can also visit our website at ${COMPANY_INFO.website} or call us at ${COMPANY_INFO.phone}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-success"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}