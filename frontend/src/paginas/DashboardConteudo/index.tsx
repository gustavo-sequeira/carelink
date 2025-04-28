import React from 'react';

interface DashboardContentProps {
  currentPage: string;
}

const DashboardConteudo: React.FC<DashboardContentProps> = ({ currentPage }) => {
  switch (currentPage) {
    case 'home':
      return <div>🏠 Home Content</div>;
    case 'profile':
      return <div>👤 Profile Content</div>;
    case 'settings':
      return <div>⚙️ Settings Content</div>;
    default:
      return <div>📂 Select a menu item</div>;
  }
};

export default DashboardConteudo;
