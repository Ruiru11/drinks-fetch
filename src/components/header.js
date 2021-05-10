import { Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderItem = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentPath = pathname === "/custom" ? ["custom"] : ["hero"];
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={currentPath}>
        <Menu.Item key="hero">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="custom">
          <Link to="/custom">Custom Drinks</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderItem;
