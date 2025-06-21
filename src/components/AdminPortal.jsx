import React, { useState, useEffect } from 'react';

const AdminPortal = () => {
  const [customizations, setCustomizations] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '' });
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  useEffect(() => {
    // Simulated API calls (replace with real fetch/axios calls)
    setCustomizations([{ id: 1, product: 'Widget', customizations: 'Color: Red' }]);
    setQuotes([{ id: 1, customer: 'John Doe', items: 'Widget x2', status: 'Pending' }]);
    setAdmins([{ id: 1, username: 'admin1' }]);
  }, []);

  const addAdmin = (e) => {
    e.preventDefault();
    setAdmins([...admins, { id: admins.length + 1, ...newAdmin }]);
    setNewAdmin({ username: '', password: '' });
  };

  const sendQuoteEmail = () => {
    if (selectedQuote && emailContent) {
      alert(`Email sent to ${selectedQuote.customer} with content: ${emailContent}`);
      setSelectedQuote(null);
      setEmailContent('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Portal</h1>

      {/* Admin Management */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Manage Admins</h2>
        <form onSubmit={addAdmin} className="mb-4">
          <input
            type="text"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
            placeholder="Username"
            className="border p-2 mr-2"
          />
          <input
            type="password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            placeholder="Password"
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2">Add Admin</button>
        </form>
        <ul>
          {admins.map(admin => (
            <li key={admin.id} className="border-b py-2">{admin.username}</li>
          ))}
        </ul>
      </div>

      {/* Product Customizations */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Product Customizations</h2>
        <ul>
          {customizations.map(custom => (
            <li key={custom.id} className="border-b py-2">{custom.product}: {custom.customizations}</li>
          ))}
        </ul>
      </div>

      {/* Quotation Requests */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Quotation Requests</h2>
        <ul>
          {quotes.map(quote => (
            <li key={quote.id} className="border-b py-2">
              {quote.customer} - {quote.items} [{quote.status}]
              <button
                onClick={() => setSelectedQuote(quote)}
                className="bg-green-500 text-white p-1 ml-2"
              >Send Quote</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Sending */}
      {selectedQuote && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Send Quote to {selectedQuote.customer}</h2>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            placeholder="Enter email content..."
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={sendQuoteEmail}
            className="bg-blue-500 text-white p-2"
          >Send Email</button>
        </div>
      )}
    </div>
  );
};

export default AdminPortal;