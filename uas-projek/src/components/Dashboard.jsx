import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/dashboard.css'; // Pastikan untuk menyesuaikan path ini sesuai dengan struktur folder Anda
import Logo from '../assets/logo (2).png';
import Share from '../assets/share.png';
import Edit from '../assets/edit.png';

function Dashboard() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [links, setLinks] = useState([]); // State untuk daftar tautan
  const Username = 'Sahid'; 
  const Inisial =  Username.charAt(0).toUpperCase(); // Mengambil huruf pertama dari username dan mengubahnya menjadi huruf kapital
  const handleAddLink = () => {
    if (title && link) {
      setLinks([...links, { title, link }]); // Tambahkan tautan baru ke daftar
      setTitle(''); // Kosongkan input judul
      setLink(''); // Kosongkan input link
    }
  };

  const handleEditLink = (index) => {
    const selectedLink = links[index];
    setTitle(selectedLink.title); // Isi input dengan data yang akan diedit
    setLink(selectedLink.link);
    handleRemoveLink(index); // Hapus tautan lama
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index); // Hapus tautan berdasarkan index
    setLinks(updatedLinks);
  };

  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand logo-wrap" href="#">
              <h1 className="profile" style={{ color: 'white' }}>{Inisial}</h1>
              <small>Sahidvespa</small>
            </a>
            <div>
              <img src={Logo} className="logo" alt="Logo" />
            </div>
            <div className="Share">
              <img src={Share} alt="Share" className="logo-Share" />
              <button style={{ border: 'none' }}>Share</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="container">
            <div className="col d-flex justify-content-center my-5">
              <h1 className="mx-1 profile-inmain">S</h1>
              <div>
                <span>@Sahid</span>
                <br />
                <small>Add bio</small>
              </div>
            </div>
            <div className="col d-flex justify-content-center my-5">
              <img src={Edit} alt="Edit" />
            </div>
          </div>
          <div className="container input">
            <div className="col-10 row d-flex justify-content-center card-input">
              <div className="add-link-container">
                <h1 className="add-link-title">Tambah tautan</h1>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="judul..."
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      placeholder="https://..."
                      className="input-link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                    <button className="btn-add" onClick={handleAddLink}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 row d-flex justify-content-center card-input">
              <div className="link-results">
                {links.map((item, index) => (
                  <div key={index} className="link-item">
                    <h3>{item.title}</h3>
                    <a href={item.link}>{item.link}</a>
                    <div className="d-flex">
                      <button className="btn-edit" onClick={() => handleEditLink(index)}>Edit</button>
                      <button className="btn-remove" onClick={() => handleRemoveLink(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;