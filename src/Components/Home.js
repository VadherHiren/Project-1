import React from 'react'
import { FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";


function Home() {
  return (
    <div className=''>
      {/* <!-- Hero Section Begin --> */}
      <div className=''>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  {/* <i className="fa fa-bars"></i> */}
                  <span>All departments</span>
                </div>
                <ul>
                  <li><a href="#">Cat-1</a></li>
                  <li><a href="#">Cat-2</a></li>
                  <li><a href="#">Cat-3</a></li>
                  <li><a href="#">Cat-4</a></li>
                  <li><a href="#">Cat-5</a></li>
                  <li><a href="#">Cat-6</a></li>
                  <li><a href="#">Cat-7</a></li>
                  <li><a href="#">Cat-8</a></li>
                  <li><a href="#">Cat-9</a></li>
                  <li><a href="#">Cat-10</a></li>
                  <li><a href="#">Cat-11</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?"/>
                      <button type="submit" className="site-btn">SEARCH</button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                  <FaPhoneAlt />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+91 9876543210</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg set-bg-img" data-setbg="img/hero/banner.jpg">
                <div className="hero__text">
                  <span>New Arrival</span>
                  <h2>Perfume <br />100% pure</h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      {/* <!-- Hero Section End --> */}

      {/* <!-- Categories Section Begin --> */}
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="col-lg-3">
                <div className="categories__item set-bg set-bg-img" data-setbg="./img/categories/cat-1.jpg">
                  <h5><a href="#">New Arrivals</a></h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="./img/categories/cat-2.jpg">
                  <h5><a href="#">Perfume Cat-1</a></h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="./img/categories/cat-3.jpg">
                  <h5><a href="#">Perfume cat-2</a></h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="./img/categories/cat-4.jpg">
                  <h5><a href="#">Perfume cat-3</a></h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="./img/categories/cat-5.jpg">
                  <h5><a href="#">Perfume cat-4</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section End --> */}

      {/* <!-- Featured Section Begin --> */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".oranges">Without Gas</li>
                  <li data-filter=".fresh-meat">Womens Perfume</li>
                  <li data-filter=".vegetables">Mans Perfume</li>
                  <li data-filter=".fastfood">Kids</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div className="featured__item__pic set-bg featured-product-img" data-setbg="img/featured/feature-1.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i2" data-setbg="img/featured/feature-2.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i3" data-setbg="img/featured/feature-3.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i4" data-setbg="img/featured/feature-4.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i5" data-setbg="img/featured/feature-5.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i6" data-setbg="img/featured/feature-6.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i7" data-setbg="img/featured/feature-7.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div className="featured__item__pic set-bg f-p-i8" data-setbg="img/featured/feature-8.jpg">
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaRetweet /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured Section End --> */}

      {/* <!-- Banner Begin --> */}
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img className='banner__pic-img' src="./images/ban-1.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img className='banner__pic-img' src="./images/ban-4.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}


{/* //////////////////// not use */}
      {/* <!-- Latest Product Section Begin --> */}
      {/* <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg./" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-2.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-3.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-2.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-3.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Review Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="./img/latest-product/lp-1.jpg" alt=""/>
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Latest Product Section End --> */}

      {/* <!-- Blog Section Begin --> */}
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img className='blog-img' src="./images/blog-img-1.jpg" alt=""/>
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><CiCalendar /> May 4,2019</li>
                    <li><FaRegComment /> 5</li>
                  </ul>
                  <h5><a href="#">Purple Men Perfume</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img className='blog-img' src="./images/blog-img-2.jpg" alt=""/>
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><CiCalendar /> May 4,2019</li>
                    <li><FaRegComment /> 5</li>
                  </ul>
                  <h5><a href="#">Orange Women Perfume</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img className='blog-img' src="./images/blog-img-3.jpg" alt=""/>
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li><CiCalendar /> May 4,2019</li>
                    <li><FaRegComment /> 5</li>
                  </ul>
                  <h5><a href="#">Blue Women Perfume</a></h5>
                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}
    </div>
  )
}

export default Home
