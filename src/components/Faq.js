import React from 'react'
import { Link } from 'react-router-dom'
export default function Faq() {
  
    return (


        <div className="page-content">

        <section className="page-title-box">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-center text-white">
                            <h3 className="mb-4">FAQ'S</h3>
                            <div className="page-next">
                                <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                                        <li className="breadcrumb-item"><a href="">Job Seeker</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"> FAQ'S </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                  
                </div>
               
            </div>
           
        </section>
      

      
        <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                    <path fill="" fill-opacity="1"
                        d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
        </div>
      


       
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <ul className="faq-menu nav nav-fill nav-pills justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="general-tab" data-bs-toggle="pill"
                                    data-bs-target="#generalTab" type="button" role="tab" aria-controls="generalTab"
                                    aria-selected="true">General</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="buying-tab" data-bs-toggle="pill"
                                    data-bs-target="#buyingTab" type="button" role="tab" aria-controls="buying"
                                    aria-selected="false">Buying</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="payment-tab" data-bs-toggle="pill"
                                    data-bs-target="#paymentTab" type="button" role="tab" aria-controls="payment"
                                    aria-selected="false">Payment</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="support-tab" data-bs-toggle="pill"
                                    data-bs-target="#supportTab" type="button" role="tab" aria-controls="support"
                                    aria-selected="false">Support</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
                <div className="row align-items-center mt-5">
                    <div className="col-lg-12">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="generalTab" role="tabpanel" aria-labelledby="general-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="general">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generalOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#general-one" aria-expanded="true"
                                                        aria-controls="general-one">
                                                        Where does it come from ?
                                                    </button>
                                                </h2>
                                                <div id="general-one" className="accordion-collapse collapse show"
                                                    aria-labelledby="generalOne" data-bs-parent="#general">
                                                    <div className="accordion-body text-muted ">
                                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generaltwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#general-two"
                                                        aria-expanded="false" aria-controls="general-two">
                                                        How Nuvo Hire Work ?
                                                    </button>
                                                </h2>
                                                <div id="general-two" className="accordion-collapse collapse"
                                                    aria-labelledby="generaltwo" data-bs-parent="#general">
                                                    <div className="accordion-body text-muted ">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generalthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#general-three"
                                                        aria-expanded="false" aria-controls="general-three">
                                                        What is your shipping policy?
                                                    </button>
                                                </h2>
                                                <div id="general-three" className="accordion-collapse collapse"
                                                    aria-labelledby="generalthree" data-bs-parent="#general">
                                                    <div className="accordion-body text-muted">
                                                        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="generalTwo">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generalfour">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#general-four" aria-expanded="true"
                                                        aria-controls="general-four">
                                                        Where To Place A FAQ Page
                                                    </button>
                                                </h2>
                                                <div id="general-four" className="accordion-collapse collapse show"
                                                    aria-labelledby="generalfour" data-bs-parent="#generalTwo">
                                                    <div className="accordion-body text-muted ">
                                                        Just as the name suggests, a FAQ page is all about simple questions and answers. Gather common questions your customers have asked from your support team and include them in the FAQ, Use categories to organize questions related to specific topics.
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generalfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#general-five"
                                                        aria-expanded="false" aria-controls="general-five">
                                                        Why do we use it ?
                                                    </button>
                                                </h2>
                                                <div id="general-five" className="accordion-collapse collapse"
                                                    aria-labelledby="generalfive" data-bs-parent="#generalTwo">
                                                    <div className="accordion-body text-muted ">
                                                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="generalsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#general-six"
                                                        aria-expanded="false" aria-controls="general-six">
                                                        Where can I get some ?
                                                    </button>
                                                </h2>
                                                <div id="general-six" className="accordion-collapse collapse"
                                                    aria-labelledby="generalsix" data-bs-parent="#generalTwo">
                                                    <div className="accordion-body text-muted ">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="buyingTab" role="tabpanel" aria-labelledby="buying-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="buying">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingone">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#buying-one" aria-expanded="true"
                                                        aria-controls="buying-one">
                                                        Where does it come from ?
                                                    </button>
                                                </h2>
                                                <div id="buying-one" className="accordion-collapse collapse show"
                                                    aria-labelledby="buyingone" data-bs-parent="#buying">
                                                    <div className="accordion-body text-muted">
                                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingtwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#buying-two"
                                                        aria-expanded="false" aria-controls="buying-two">
                                                        How Nuvo Hire Work ?
                                                    </button>
                                                </h2>
                                                <div id="buying-two" className="accordion-collapse collapse"
                                                    aria-labelledby="buyingtwo" data-bs-parent="#buying">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#buying-three"
                                                        aria-expanded="false" aria-controls="buying-three">
                                                        What is your shipping policy?
                                                    </button>
                                                </h2>
                                                <div id="buying-three" className="accordion-collapse collapse"
                                                    aria-labelledby="buyingthree" data-bs-parent="#buying">
                                                    <div className="accordion-body text-muted ">
                                                        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="buyingTwo">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingfour">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#buying-four" aria-expanded="true"
                                                        aria-controls="buying-four">
                                                        Where To Place A FAQ Page
                                                    </button>
                                                </h2>
                                                <div id="buying-four" className="accordion-collapse collapse show"
                                                    aria-labelledby="buyingfour" data-bs-parent="#buyingTwo">
                                                    <div className="accordion-body text-muted">
                                                        Just as the name suggests, a FAQ page is all about simple questions and answers. Gather common questions your customers have asked from your support team and include them in the FAQ, Use categories to organize questions related to specific topics.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#buying-five"
                                                        aria-expanded="false" aria-controls="buying-five">
                                                        Why do we use it ?
                                                    </button>
                                                </h2>
                                                <div id="buying-five" className="accordion-collapse collapse"
                                                    aria-labelledby="buyingfive" data-bs-parent="#buyingTwo">
                                                    <div className="accordion-body text-muted">
                                                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="buyingsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#buying-six"
                                                        aria-expanded="false" aria-controls="buying-six">
                                                        Where can I get some ?
                                                    </button>
                                                </h2>
                                                <div id="buying-six" className="accordion-collapse collapse"
                                                    aria-labelledby="buyingsix" data-bs-parent="#buyingTwo">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="paymentTab" role="tabpanel" aria-labelledby="payment-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="payment">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymentone">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#payment-one" aria-expanded="true"
                                                        aria-controls="payment-one">
                                                        Where does it come from ?
                                                    </button>
                                                </h2>
                                                <div id="payment-one" className="accordion-collapse collapse show"
                                                    aria-labelledby="paymentone" data-bs-parent="#payment">
                                                    <div className="accordion-body text-muted">
                                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymenttwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#payment-two"
                                                        aria-expanded="false" aria-controls="payment-two">
                                                        How Nuvo Hire Work ?
                                                    </button>
                                                </h2>
                                                <div id="payment-two" className="accordion-collapse collapse"
                                                    aria-labelledby="paymenttwo" data-bs-parent="#payment">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymentthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#payment-three"
                                                        aria-expanded="false" aria-controls="payment-three">
                                                        What is your shipping policy?
                                                    </button>
                                                </h2>
                                                <div id="payment-three" className="accordion-collapse collapse"
                                                    aria-labelledby="paymentthree" data-bs-parent="#payment">
                                                    <div className="accordion-body text-muted">
                                                        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="paymentTwo">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymentfour">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#payment-four" aria-expanded="true"
                                                        aria-controls="payment-four">
                                                        Where To Place A FAQ Page
                                                    </button>
                                                </h2>
                                                <div id="payment-four" className="accordion-collapse collapse show"
                                                    aria-labelledby="paymentfour" data-bs-parent="#paymentTwo">
                                                    <div className="accordion-body text-muted">
                                                        Just as the name suggests, a FAQ page is all about simple questions and answers. Gather common questions your customers have asked from your support team and include them in the FAQ, Use categories to organize questions related to specific topics.
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymentfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#payment-five"
                                                        aria-expanded="false" aria-controls="payment-five">
                                                        Why do we use it ?
                                                    </button>
                                                </h2>
                                                <div id="payment-five" className="accordion-collapse collapse"
                                                    aria-labelledby="paymentfive" data-bs-parent="#paymentTwo">
                                                    <div className="accordion-body text-muted">
                                                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="paymentsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#payment-six"
                                                        aria-expanded="false" aria-controls="payment-six">
                                                        Where can I get some ?
                                                    </button>
                                                </h2>
                                                <div id="payment-six" className="accordion-collapse collapse"
                                                    aria-labelledby="paymentsix" data-bs-parent="#paymentTwo">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="supportTab" role="tabpanel" aria-labelledby="support-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="support">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supportone">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#support-one" aria-expanded="true"
                                                        aria-controls="support-one">
                                                        Where does it come from ?
                                                    </button>
                                                </h2>
                                                <div id="support-one" className="accordion-collapse collapse show"
                                                    aria-labelledby="supportone" data-bs-parent="#support">
                                                    <div className="accordion-body text-muted">
                                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supporttwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#support-two"
                                                        aria-expanded="false" aria-controls="support-two">
                                                        How Nuvo Hire Work ?
                                                    </button>
                                                </h2>
                                                <div id="support-two" className="accordion-collapse collapse"
                                                    aria-labelledby="supporttwo" data-bs-parent="#support">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supportthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#support-three"
                                                        aria-expanded="false" aria-controls="support-three">
                                                        What is your shipping policy?
                                                    </button>
                                                </h2>
                                                <div id="support-three" className="accordion-collapse collapse"
                                                    aria-labelledby="supportthree" data-bs-parent="#support">
                                                    <div className="accordion-body text-muted">
                                                        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="accordion accordion-flush faq-box" id="supportTwo">
                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supportfour">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#support-four" aria-expanded="true"
                                                        aria-controls="support-four">
                                                        Where To Place A FAQ Page
                                                    </button>
                                                </h2>
                                                <div id="support-four" className="accordion-collapse collapse show"
                                                    aria-labelledby="supportfour" data-bs-parent="#supportTwo">
                                                    <div className="accordion-body text-muted">
                                                        Just as the name suggests, a FAQ page is all about simple questions and answers. Gather common questions your customers have asked from your support team and include them in the FAQ, Use categories to organize questions related to specific topics.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supportfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#support-five"
                                                        aria-expanded="false" aria-controls="support-five">
                                                        Why do we use it ?
                                                    </button>
                                                </h2>
                                                <div id="support-five" className="accordion-collapse collapse"
                                                    aria-labelledby="supportfive" data-bs-parent="#supportTwo">
                                                    <div className="accordion-body text-muted">
                                                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item mt-4 border-0">
                                                <h2 className="accordion-header" id="supportsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#support-six"
                                                        aria-expanded="false" aria-controls="support-six">
                                                        Where can I get some ?
                                                    </button>
                                                </h2>
                                                <div id="support-six" className="accordion-collapse collapse"
                                                    aria-labelledby="supportsix" data-bs-parent="#supportTwo">
                                                    <div className="accordion-body text-muted">
                                                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center mt-5">
                            <a href="contact.php" className="btn btn-primary btn-hover mt-2"><i className="uil uil-phone"></i> Contact Us</a>
                            <a href="" className="btn btn-warning btn-hover mt-2 ms-md-2"><i className="uil uil-envelope"></i> Email Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

    </div>
 

    )
}
