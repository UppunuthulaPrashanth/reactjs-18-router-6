import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div id="top-bar" className="top-bar-section top-bar-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="top-contact link-hover-white">
                
                <a
                  href="http://www.sbigh.com/"
                  title="Bahwan International Group (BIG)"
                  className="hlink"
                >
                  <i className="fa fa-home"></i>Home
                </a>
                <a href="tel:+968 24560111">
                  <i className="fa fa-phone"></i>+968 24560111
                </a>
                <a href="mailto:info@sbigh.com">
                  <i className="fa fa-envelope"></i>info@sbigh.com
                </a>
              </div>
              <div className="top-social-icon icons-hover-white">
                
                <a
                  href="https://www.facebook.com/bighrecruitment"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/17890751"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/BIGHRecruitment" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <span className="top-right-search">
                  <i className="icon-search"></i>
                  <form
                    name="search"
                    id="search"
                    method="post"
                    action="http://www.sbigh.com/search"
                    style={{display:"inline"}}
                  >
                    <input
                      placeholder="Search"
                      className="search-fld"
                      type="text"
                      name="keyword"
                      id="keyword"
                    />
                  </form>
                </span>
                <span className="lang">
                  <li className="dropdown">
                    
                    <a
                      href=""
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      
                      <img
                        src="http://www.sbigh.com/images/britain-flag.jpg"
                        alt=""
                        title=""
                      />
                      <b className="fa fa-angle-down"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="http://www.sbigh.com/arabic">
                          
                          <img
                            src="http://www.sbigh.com/images/oman-flag.jpg"
                            alt="Arabic"
                            title=""
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
