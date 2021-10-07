import styled from "styled-components"
import { Link } from "react-router-dom";
import { ListItem } from "../../data";
import "./productList.css";
import { useState } from "react";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const Brand = styled.span`
color: #767890;
font-size: 14px;
font-weight: 600;
`;

const ProductList = () => {
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
  
  return (
    <>
    <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          {/* <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select> */}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    <div className="product-list-container">
      {ListItem.map((item) => {
        return (
          <Link to="/product-view" style={{textDecoration: "none", color:"#000"}} key={item.id}>
          <div className="product-item">
            <img src={item.img} alt="" />
            <div className="info">
              <span className="title">{item.title}</span>
              <div className="stars">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
              <span className="price">&#x20B9; {item.price}</span>
              <Brand>Xioami</Brand>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default ProductList;
