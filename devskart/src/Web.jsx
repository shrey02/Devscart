import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from './Row'
import Card from './Card'

const Web = () => {
    const cards = [
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        },
        {
            id: Math.random()*10,
            src:"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            title: "Web Developer Bootcamp",
            desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/the-web-developer-bootcamp/"
            
        }
        ];
    let arr = [];
    for(let i=0;i<cards.length-4;i+=4) {
        arr.push(
            <Row>
                <Card key={cards[i].id} src={cards[i].src} title={cards[i].title} desc={cards[i].desc} price={cards[i].price} cutprice={cards[i].cutprice} rating={cards[i].rating} view = {cards[i].view} />
                <Card key={cards[i+1].id} src={cards[i+1].src} title={cards[i+1].title} desc={cards[i+1].desc} price={cards[i+1].price} cutprice={cards[i+1].cutprice} rating={cards[i+1].rating} view = {cards[i+1].view} />
                <Card key={cards[i+2].id} src={cards[i+2].src} title={cards[i+2].title} desc={cards[i+2].desc} price={cards[i+2].price} cutprice={cards[i+2].cutprice} rating={cards[i+2].rating} view = {cards[i+2].view} />
                <Card key={cards[i+3].id} src={cards[i+3].src} title={cards[i+3].title} desc={cards[i+3].desc} price={cards[i+3].price} cutprice={cards[i+3].cutprice} rating={cards[i+3].rating} view = {cards[i+3].view} />
            </Row>
        )
    }
  
  return (
    <div className="App">
      <h1 className="text-center text-dark my-4">WEB DEVELOPMENT</h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          {arr}
        </div>
      </div>
    </div>
  );
};
export default Web;
