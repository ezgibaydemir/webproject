import React, { useState } from "react";
import "./ez.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";

export default function App() {
  const [contact, setContact] = useState({
    Ad: "",
    Soyad: "",
    Posta:"",
    Dogum:"",
    Meslek:"",
    TelCep: "",
    TelEv: "",
    Telİs: "",
    AdEv: "",
    Adİs: "",
    AdOkul: "",
    Twit: "",
    Face: "",
    insta: "",
    linke: "",
    git: "",
  });
  const [contacts, setContacts] = useState([]);

  const saveContact = (e) => {
    e.preventDefault();
    if(contact.Ad === "" &&
      contact.Soyad === "" &&
      contact.Posta === "" &&
      contact.Dogum=== "" &&
      contact.Meslek === "" &&
      contact.TelCep === "" &&
      contact.TelEv === "" &&
      contact.Telİs === "" &&
      contact.AdEv === "" &&
      contact.Adİs === "" &&
      contact.AdOkul === "" &&
      contact.Twit === "" &&
      contact.Face === "" &&
      contact.insta === "" &&
      contact.linke === "" &&
      contact.git === "" )
      return;
    setContacts([...contacts, contact]);
    setContact({
      Ad: "",
      Soyad: "",
      Posta:"",
      Dogum:"",
      Meslek:"",
      TelCep: "",
      TelEv: "",
      Telİs: "",
      AdEv: "",
      Adİs: "",
      AdOkul: "",
      Twit: "",
      Face: "",
      insta: "",
      linke: "",
      git: "",
    })
  };

  const deleteContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  };

  const updateContact = (con, index) => {
    setContact(con)
    deleteContact(index);
  };

  return (
    <div className="body">
      <div className="baslık">
        <h1>ADRES DEFTERİ</h1>
        
      
        
      </div>
      <div align="center">
        <img src="icon4.png" alt="giriş resmi" width="300" height="250"></img>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <form onSubmit={saveContact}>
        <div>
        <div className="kisisel">
        <h2>Kişisel</h2>
          <div align="center">
          <img src="person.png" alt="telefon" width="70" height="70"></img>
          </div>
          
          <label>Ad:</label>
          <input
            type="text"
            value={contact.Ad}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Ad: e.target.value }))
            }
          />

          <label>Soyad:</label>
          <input
            type="text"
            value={contact.Soyad}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Soyad: e.target.value }))
            }
          />
          <label>E-posta:</label>
          <input
            type="email"
            value={contact.Posta}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Posta: e.target.value }))
            }
          />
          <label>Doğum Tarihi:</label>
          <input
            type="text"
            placeholder="GG.AA.YY"
            value={contact.Dogum}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Dogum: e.target.value }))
            }
          />
          <label>Meslek:</label>
          <input
            type="text"
            value={contact.Meslek}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Meslek: e.target.value }))
            }
          />
        </div>

        <div className="telefon">
        <h2>Telefon</h2>
          <div align="center">
          <img  src="phone.png" alt="phone" width="50" height="50"></img>
          </div>
          

          <label>Cep:</label>
          <input
            type="number"
            
            value={contact.TelCep}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, TelCep: e.target.value }))
            }
          />

          <label>Ev:</label>
          <input
            type="number"
            value={contact.TelEv}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, TelEv: e.target.value }))
            }
          />

          <label>İş:</label>
          <input
            type="number"
            value={contact.Telİs}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Telİs: e.target.value }))
            }
          />
        </div>

        <div className="adres">
        <h2>Adres</h2>
          <div align="center">
          <img src="address.png" alt="phone" width="50" height="50"></img>
          </div>
          
          <label>Ev:</label>
          <input
            type="text"
            value={contact.AdEv}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, AdEv: e.target.value }))
            }
          />

          <label>İş:</label>
          <input
            type="text"
            value={contact.Adİs}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Adİs: e.target.value }))
            }
          />

          <label>Okul:</label>
          <input
            type="text"
            value={contact.AdOkul}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, AdOkul: e.target.value }))
            }
          />
        </div>
        <div className="sosyal">
        <h2>Sosyal Medya</h2>
          <div align="center">
          <img src="share.png" alt="phone" width="70" height="70"></img>
          </div>
        
          <label>Twitter:</label>
          <input
            value={contact.Twit}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Twit: e.target.value }))
            }
          />

          <label>Facebook:</label>
          <input
            value={contact.Face}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, Face: e.target.value }))
            }
          />

          <label>Instagram:</label>
          <input
            value={contact.insta}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, insta: e.target.value }))
            }
          />

          <label>Linkedln'e:</label>
          <input
            value={contact.linke}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, linke: e.target.value }))
            }
          />

          <label>Github:</label>
          <input
            value={contact.git}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, git: e.target.value }))
            }
          />
          <br></br>
          <br></br>
        </div>
        </div>
        <div className="save">
        <button className="button" onClick={saveContact} type="submit">
          Kaydet
        </button>
        </div>
      </form>
      <br></br>
      <br></br>
      
      {contacts.map((contact, index) => {
        return (
          <table>
            <div style={{ backgroundColor: "#a0e396" }} key={contact.id}>
              <tr>
                <th>Ad Soyad</th>
                <th>E-posta</th>
                <th>Doğum Tarihi</th>
                <th>Meslek</th>
                <th>Cep Telefonu</th>
                <th>Ev Telefonu</th>
                <th>İş Telefonu</th>
                <th>Ev Adresi</th>
                <th>İş Adresi</th>
                <th>Okul Adresi</th>
                <th>Facebook Hesabı</th>
                <th>Twitter Hesabı</th>
                <th>Instagram Hesabı</th>
                <th>Linkedln'e Hesabı</th>
                <th>Github Hesabı</th>
              </tr>
              <tr>
                <td>
                  {contact.Ad} {contact.Soyad}
                </td>
                <td>{contact.Posta}</td>
                <td>{contact.Dogum}</td>
                <td>{contact.Meslek}</td>
                <td>{contact.TelCep}</td>
                <td>{contact.TelEv}</td>
                <td>{contact.Telİs}</td>
                <td>{contact.AdEv}</td>
                <td>{contact.Adİs}</td>
                <td>{contact.AdOkul}</td>
                <td>{contact.Twit}</td>
                <td>{contact.Face}</td>
                <td>{contact.insta}</td>
                <td>{contact.linke}</td>
                <td>{contact.git}</td>
              </tr>

              <button type="button" onClick={() => deleteContact(index)}>
                Sil
              </button>
              <button type="button" onClick={() => updateContact(contact, index)}>
                Güncelle
              </button>
            </div>
          </table>
        );
      })}
    </div>
  );
}
