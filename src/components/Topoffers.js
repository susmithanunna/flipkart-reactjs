import React from 'react'
import axios from 'axios';
import '../App';
import { useEffect, useState } from 'react';
function Topoffers() {
  const [products, setProducts] = useState([{}])
  useEffect(() => { axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products)) }, 0)
  console.log(products)
  return (
    <>
      {
        products.map((element, index) => {
          return (
            <>
              <div class="card float-start" style={{width: "18rem"}}>
                <img src={element.thumbnail} heigth="200" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{element.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{element.title}</li>
                  <li class="list-group-item">${element.price}</li>
                  <li class="list-group-item">rating:{element.rating}*</li>
                  <li class="list-group-item">Discount:{element.discountPercentage}%</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}
export default Topoffers;

