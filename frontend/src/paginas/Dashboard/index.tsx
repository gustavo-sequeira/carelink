import { useState } from "react";
import MenuPrincipal from "../../componentes/MenuPrincipal"
import { Col, Container, Row } from "react-bootstrap";
import DashboardConteudo from "../DashboardConteudo";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState<string>('home');

    const handleMenuItemClick = (item: string) => {
        setCurrentPage(item);
    };
    return (
        <Container fluid>
        <Row>
        <MenuPrincipal onMenuItemClick={handleMenuItemClick} />
          <Col xs={9} md={10} className="p-3">
            <DashboardConteudo currentPage={currentPage} />
          </Col>
        </Row>
      </Container>
    );
}

export default Dashboard