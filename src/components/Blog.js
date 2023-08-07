import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() 
{
  
    return (
        <div className="page-content">

                   
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Blog</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                                            <li className="breadcrumb-item"><a href="">Job Seeker</a></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Blog </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                  
                </div>
              
            </section>
                   
            <div className="position-relative" style={{zIndex: 1}}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
                    
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="mb-4">
                                <h4>Latest & Trending Blog Post</h4>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                                <a href="blog-details.php"><img src="assets/images/blog/img-04.jpg" alt="Blog" className="img-fluid blog-img" /></a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                           
                            <article className="post position-relative">
                                <div className="post ms-lg-4">
                                    <p className="text-muted mb-2"><b>Product</b> - Aug 01, 2023</p>
                                    <h5 className="mb-3"><a href="blog-details.php" className="primary-link">Do traditional landing pages work for Saas startups?</a></h5>
                                    <p className="text-muted">
                                        Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/user/img-01.jpg" alt="" className="avatar-sm rounded-circle"/>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">James Lemire </h6></a>
                                            <p className="text-muted mb-0">Product Manager</p>
                                        </div>
                                    </div>    
                                </div>
                            </article>
                            
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div>
                                <h4>All Blog Post</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <article className="post position-relative mt-4">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-06.jpg" alt="" className="img-fluid blog-img" /></a>
                                </div>
                                <p className="text-muted mb-2"><b>Fashion</b> - July 29, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">A day in the of a professional fashion designer</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-02.jpg" alt="" className="avatar-sm rounded-circle"/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Rebecca Swartz</h6></a>
                                        <p className="text-muted mb-0">Fashion Designer</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="post position-relative mt-lg-4 mt-5">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-05.jpg" alt="" className="img-fluid blog-img"/></a>
                                </div>
                                <p className="text-muted mb-2"><b>Business</b> - July 25, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">Stack designer Olivia Murphy offers freelancing advice</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-03.jpg" alt="" className="avatar-sm rounded-circle"/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Olivia Murphy</h6></a>
                                        <p className="text-muted mb-0">Product Leader</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <article className="post position-relative mt-5">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-07.jpg" alt="" className="img-fluid blog-img"/></a>
                                </div>
                                <p className="text-muted mb-2"><b>Business</b> - July 25, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">Manage white space in responsive layouts ?</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-03.jpg" alt="" className="avatar-sm rounded-circle"/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Olivia Murphy</h6></a>
                                        <p className="text-muted mb-0">Product Leader</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="post position-relative mt-5">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-08.jpg" alt="" className="img-fluid blog-img"/></a>
                                </div>
                                <p className="text-muted mb-2"><b>Development</b> - July 29, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">How to get creative in your work ?</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-02.jpg" alt="" className="avatar-sm rounded-circle"/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Rebecca Swartz</h6></a>
                                        <p className="text-muted mb-0">Fashion Designer</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <article className="post position-relative mt-5">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-09.jpg" alt="" className="img-fluid blog-img"/></a>
                                </div>
                                <p className="text-muted mb-2"><b>Business</b> - July 25, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">What planning process needs ?</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-03.jpg" alt="" className="avatar-sm rounded-circle"/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Olivia Murphy</h6></a>
                                        <p className="text-muted mb-0">Product Leader</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="post position-relative mt-5">
                                <div className="post-preview overflow-hidden mb-3 rounded-3">
                                    <a href="blog-details.php"><img src="assets/images/blog/img-10.jpg" alt="" className="img-fluid blog-img"/></a>
                                </div>
                                <p className="text-muted mb-2"><b>Development</b> - July 29, 2023</p>
                                <h5 className="mb-3"><a href="blog-details.php" className="primary-link">How to become a best sale marketer in a year!</a></h5>
                                <p className="text-muted">
                                    Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.
                                </p>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/user/img-02.jpg" alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="blog-author.php" className="primary-link"><h6 className="fs-16 mb-0">Rebecca Swartz</h6></a>
                                        <p className="text-muted mb-0">Fashion Designer</p>
                                    </div>
                                </div> 
                            </article>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination job-pagination mb-0 justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="" tabindex="-1">
                                            <i className="mdi mdi-chevron-double-left fs-15"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="">1</a></li>
                                    <li className="page-item"><a className="page-link" href="">2</a></li>
                                    <li className="page-item"><a className="page-link" href="">3</a></li>
                                    <li className="page-item"><a className="page-link" href="">4</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="">
                                            <i className="mdi mdi-chevron-double-right fs-15"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
                    

        </div>
    )
}