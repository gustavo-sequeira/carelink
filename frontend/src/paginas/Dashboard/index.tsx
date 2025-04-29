
import { Outlet, useNavigate } from "react-router-dom";
import MenuPrincipal from "../../componentes/MenuPrincipal"
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleMenuItemClick = (item: string) => {
        navigate('/dashboard/${item}');
    };
    return (
        <Container fluid>
        <Row>
        <MenuPrincipal onMenuItemClick={handleMenuItemClick} />
          <Col xs={9} md={10} className="p-3">
          <Outlet /> {/* Aqui os componentes internos aparecem -- <DashboardConteudo currentPage={currentPage} /> */}
          </Col>
        </Row>
      </Container>
    );
}

export default Dashboard