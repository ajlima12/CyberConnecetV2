// JSX (App.js)
import React from 'react';
import './App.css';
import { FiUsers } from "react-icons/fi";
import Banner from "./images/CYBERCONNECTBANNER.png";
import Logo from "./images/CyberConnectLogo.png";
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { VscRemoteExplorer } from "react-icons/vsc";
import { PiInvoiceFill } from "react-icons/pi";
import { MdOutlineAppShortcut } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import SobreNos from './SobreNos'; 

// Componente para os botões
function Button({ title, icon }) {
  const IconComponent = icon;

  return (
    <div className="button">
      <IconComponent size={30} color="#27E400" />
      <span>{title}</span>
    </div>
  );
}

function Card({ title, description, icon, buttonText, price }) {
  const IconComponent = icon;

  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        {icon && <IconComponent size={50} color="#27E400" />}
        <div className="divider"></div>
        <p>{description}</p>
        <p className="price">A partir de: R$ {price}</p>
        <button className="rounded-button">{buttonText}</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-navbar">
            <div className="logo-container">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#login"><FiUsers size={25} color="#27E400" /></a></li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <div className="banner">
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <h2>Conheça os planos disponíveis</h2>
          </div>
          <div className="card-container">
            <Card
              title="Plano Básico - 500 mega de internet + TV por assinatura"
              description="Ideal para navegar na internet e usar redes sociais."
              icon={FaWifi}
              price="99,99"
              buttonText="Assine já"
            />
            <Card
              title="Plano TV por Assinatura - 500 canais ilimitados para toda família"
              description="Canais ilimitados para assistir quando e onde quiser"
              icon={PiTelevisionSimpleBold}
              price="99,99"
              buttonText="Assine já"
            />
            <Card
              title="Plano de Celular com 20gb + 600 canais por assinatura"
              description="Ideal para navegar na internet onde e quando quiser"
              icon={LuMonitorSmartphone}
              price="99,99"
              buttonText="Assine já"
            />
            <Card
              title="Plano Remoto - para todos que sofrem com conexão ruim "
              description="Ideal para programadores que trabalham em sua residência"
              icon={VscRemoteExplorer}
              price="99,99"
              buttonText="Assine já"
            />
          </div>
          <h2>Autoatendimento para clientes</h2>
          <p> Escolha um botão para seu autoatendimento cliente. </p>
          <div className="button-container">
            <div className="button-column">
              <Button title="2ª via de conta" icon={PiInvoiceFill} />
              <Button title="Ative o débito automático" icon={FaRegCreditCard } />
            </div>
            <div className="button-column">
              <Button title="App CyberConncet" icon={MdOutlineAppShortcut } />
              <Button title="Devolução de equipamento" icon={TbTruckDelivery} />
            </div>
            <div className="button-column">
              <Button title="Consulta de saldo" icon={MdOutlineAccountBalanceWallet} />
              <Button title="Ative a fatura Digital" icon={LiaFileInvoiceDollarSolid} />
              
            </div>
          </div>
          <Routes>
            <Route path="/sobre" element={<SobreNos />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content content">
            <div className="footer-item1">
              <img src={Logo} alt="Logo" width="150" height="auto" />
              <div className="footer-item1__links">
                <button className="animated-link">Portal de Privacidade</button>
                <button className="animated-link">Política de Privacidade</button>
              </div>
              <p className="animated-text">* Preços e ofertas válidas para novas assinaturas para a cidade de São Paulo. Valores válidos para débito em conta + fatura digital. Consulte condições e disponibilidade dos produtos e serviços para a sua cidade/região.</p>
            </div>
            <div className="footer-item2">
              <h1 className="animated-heading">Central de Atendimento</h1>
              <h2 className="animated-subheading">0800 123 4567</h2>
              <p className="animated-text">Canal exclusivo para atendimento ao cliente CyberConnect</p>
            </div>
            <div className="footer-item2">
              <h1 className="animated-heading">Dúvidas?</h1>
              <h2 className="animated-subheading">contato@cyberconnect.com</h2>
              <p className="animated-text">Envie-nos um e-mail</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
