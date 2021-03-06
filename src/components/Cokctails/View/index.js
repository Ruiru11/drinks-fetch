/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "antd";
import HeaderItem from "../../header";
import DetailView from "../View/details";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCockTail } from "../../../redux/actions";

const { Content, Footer } = Layout;

const CockTailPreview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cocktail);
  const [ingredients, setIngredients] = useState([]);

  const mapIngredients = () => {
    const updated = [];
    console.log("data", data);
    if (data && data.length > 0) {
      Object.keys(data).filter((prop) => {
        const index = prop.indexOf("strIngredient");
        if (index === 0 && data[prop]) {
          updated.push(data[prop]);
        }
      });
      setIngredients(updated);
    }
  };

  useEffect(() => {
    dispatch(fetchCockTail(id));
  }, [dispatch]);
  useEffect(() => {
    mapIngredients();
  }, [data]);
  console.log("ingredients", ingredients);
  return (
    <Layout className="layout">
      <HeaderItem />
      <Content style={{ marginTop: "30px", marginLeft: "30px" }}>
        <DetailView data={data} ingredients={ingredients} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        You love to drink? So do we ..Hold your glasses up
      </Footer>
    </Layout>
  );
};
export default CockTailPreview;
