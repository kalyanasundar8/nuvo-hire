import React from 'react'
import { Link } from 'react-router-dom'
import useScrollToTop from './useScrollToTop';

export default function Jobs() {
    useScrollToTop();

    return (
        <div class="page-content">

            <section class="page-title-box">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="text-center text-white">
                                <h3 class="mb-4">Job List</h3>
                                <div class="page-next">
                                    <nav class="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol class="breadcrumb justify-content-center">
                                            <li class="breadcrumb-item"> <Link to="index.php">Home</Link></li>
                                            <li class="breadcrumb-item"> <Link to="">Pages</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page"> Job List </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <div class="position-relative" style={{ zIndex: 1 }}>
                <div class="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="me-lg-5">
                                <div class="job-list-header">
                                    <form action="#">
                                        <div class="row g-2">
                                            <div class="col-lg-3 col-md-6">
                                                <div class="filler-job-form">
                                                    <i class="uil uil-briefcase-alt"></i>
                                                    <input type="search" class="form-control filter-job-input-box" id="exampleFormControlInput1" placeholder="Job, company... " />
                                                </div>
                                            </div>

                                            <div class="col-lg-3 col-md-6">
                                                <div class="filler-job-form">
                                                    <i class="uil uil-location-point"></i>
                                                    <select class="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AX">&Aring;land Islands</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua and Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia, Plurinational State of</option>
                                                        <option value="BA">Bosnia and Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BV">Bouvet Island</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CG">Congo</option>
                                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="CI">C&ocirc;te d'Ivoire</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="TF">French Southern Territories</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">Heard Island and McDonald Islands</option>
                                                        <option value="VA">Holy See (Vatican City State)</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran, Islamic Republic of</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                                        <option value="KR">Korea, Republic of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao People's Democratic Republic</option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libyan Arab Jamahiriya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macao</option>
                                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia, Federated States of</option>
                                                        <option value="MD">Moldova, Republic of</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="AN">Netherlands Antilles</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PS">Palestinian Territory, Occupied</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RE">R&eacute;union</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barth&eacute;lemy</option>
                                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                        <option value="KN">Saint Kitts and Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="MF">Saint Martin (French part)</option>
                                                        <option value="PM">Saint Pierre and Miquelon</option>
                                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome and Principe</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syrian Arab Republic</option>
                                                        <option value="TW">Taiwan, Province of China</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania, United Republic of</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TL">Timor-Leste</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad and Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks and Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="UM">United States Minor Outlying Islands</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                        <option value="VN">Viet Nam</option>
                                                        <option value="VG">Virgin Islands, British</option>
                                                        <option value="VI">Virgin Islands, U.S.</option>
                                                        <option value="WF">Wallis and Futuna</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-lg-3 col-md-6">
                                                <div class="filler-job-form">
                                                    <i class="uil uil-clipboard-notes"></i>
                                                    <select class="form-select " data-trigger name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                                                        <option value="4">Accounting</option>
                                                        <option value="1">IT & Software</option>
                                                        <option value="3">Marketing</option>
                                                        <option value="5">Banking</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-lg-3 col-md-6">
                                                <Link to="" class="btn btn-primary w-100"><i class="uil uil-filter"></i> Fliter</Link>
                                            </div>

                                        </div>

                                    </form>
                                </div>

                                <div class="wedget-popular-title mt-4">
                                    <h6>Popular</h6>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <div class="popular-box d-flex align-items-center">
                                                <div class="number flex-shrink-0 me-2">
                                                    20
                                                </div>
                                                <Link to="" class="primary-link stretched-link">
                                                    <h6 class="fs-14 mb-0">UI/UX designer</h6>
                                                </Link>
                                            </div>
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="popular-box d-flex align-items-center">
                                                <div class="number flex-shrink-0 me-2">
                                                    18
                                                </div>
                                                <Link to="" class="primary-link stretched-link">
                                                    <h6 class="fs-14 mb-0">HR manager</h6>
                                                </Link>
                                            </div>
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="popular-box d-flex align-items-center">
                                                <div class="number flex-shrink-0 me-2">
                                                    10
                                                </div>
                                                <Link to="" class="primary-link stretched-link">
                                                    <h6 class="fs-14 mb-0">Product manager</h6>
                                                </Link>
                                            </div>
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="popular-box d-flex align-items-center">
                                                <div class="number flex-shrink-0 me-2">
                                                    15
                                                </div>
                                                <Link to="" class="primary-link stretched-link">
                                                    <h6 class="fs-14 mb-0">Sales manager</h6>
                                                </Link>
                                            </div>
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="popular-box d-flex align-items-center">
                                                <div class="number flex-shrink-0 me-2">
                                                    28
                                                </div>
                                                <Link to="" class="primary-link stretched-link">
                                                    <h6 class="fs-14 mb-0">Developer</h6>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div>
                                    <div class="job-box card mt-5">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted"> Escondido,California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 3 min ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2
                                                            - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div class="text-start text-md-end">
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box bookmark-post card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-md-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Digital Marketing
                                                            Manager</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Phoenix, Arizona</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 15 min ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
                                                        <span class="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
                                                        <span class="badge bg-primary-subtle text-primary fs-13 mt-1">Freelance</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span>
                                                            4+ years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div>
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 37 min ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-info-subtle text-info fs-13 mt-1">Internship</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2
                                                            - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div class="text-start text-md-end">
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 50 min ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-primary-subtle text-primary fs-13 mt-1">Freelance</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2 - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div class="text-start text-md-end">
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box bookmark-post card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-05.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 1 month ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2 - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div>
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-06.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 2 month ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-primary-subtle text-primary fs-13 mt-1">Freelance</span>
                                                        <span class="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2 - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div>
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-07.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 1 month ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
                                                        <span class="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2 - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div>
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                    <div class="job-box card mt-4">
                                        <div class="bookmark-label text-center">
                                            <Link to="" class="align-middle text-white"><i class="mdi mdi-star"></i></Link>
                                        </div>
                                        <div class="p-4">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="text-center mb-4 mb-lg-0">
                                                        <Link to="company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" class="img-fluid rounded-3" /></Link>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="mb-2 mb-md-0">
                                                        <h5 class="fs-18 mb-0"> <Link to="/job-detail" class="text-dark">Product
                                                            Director</Link></h5>
                                                        <p class="text-muted fs-14 mb-0">Creative Agency</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="d-flex mb-2">
                                                        <div class="flex-shrink-0">
                                                            <i class="mdi mdi-map-marker text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0">Escondido, California</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div class="d-flex mb-0">
                                                        <div class="flex-shrink-0">
                                                            <i class="uil uil-clock-three text-primary me-1"></i>
                                                        </div>
                                                        <p class="text-muted mb-0"> 3 month ago</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <div>
                                                        <span class="badge bg-info-subtle text-info  fs-13 mt-1">Internship</span>
                                                        <span class="badge bg-primary-subtle text-primary fs-13 mt-1">Private</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="row justify-content-between">
                                                <div class="col-md-4">
                                                    <div>
                                                        <p class="text-muted mb-0"><span class="text-dark">Experience :</span> 2 - 3 years</p>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-3">
                                                    <div>
                                                        <Link to="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                </div>

                                <div class="row">
                                    <div class="col-lg-12 mt-4 pt-2">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination job-pagination mb-0 justify-content-center">
                                                <li class="page-item disabled">
                                                    <Link class="page-link" to="" tabindex="-1">
                                                        <i class="mdi mdi-chevron-double-left fs-15"></i>
                                                    </Link>
                                                </li>
                                                <li class="page-item active"> <Link class="page-link" to="">1</Link></li>
                                                <li class="page-item"> <Link class="page-link" to="">2</Link></li>
                                                <li class="page-item"> <Link class="page-link" to="">3</Link></li>
                                                <li class="page-item"> <Link class="page-link" to="">4</Link></li>
                                                <li class="page-item">
                                                    <Link class="page-link" to="">
                                                        <i class="mdi mdi-chevron-double-right fs-15"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div class="col-lg-3">
                            <div class="side-bar mt-5 mt-lg-0">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="locationOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="true" aria-controls="location">
                                                Location
                                            </button>
                                        </h2>
                                        <div id="location" class="accordion-collapse collapse show" aria-labelledby="locationOne">
                                            <div class="accordion-body">
                                                <div class="side-title">
                                                    <div class="mb-3">
                                                        <form class="position-relative">
                                                            <input class="form-control" type="search" placeholder="Search..." />
                                                            <button class="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2" type="submit"><span class="mdi mdi-magnify text-muted"></span></button>
                                                        </form>
                                                    </div>
                                                    <div class="area-range">
                                                        <div class="form-label mb-3">Area Range: <span class="example-val mt-2" id="slider1-span">9.00</span> miles</div>
                                                        <div id="slider1" class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mt-4">
                                        <h2 class="accordion-header" id="experienceOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience" aria-expanded="true" aria-controls="experience">
                                                Work experience
                                            </button>
                                        </h2>
                                        <div id="experience" class="accordion-collapse collapse show" aria-labelledby="experienceOne">
                                            <div class="accordion-body">
                                                <div class="side-title">
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked1">No experience</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked2">0-3 years</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked3">3-6 years</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked4">More than 6 years</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header" id="jobType">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#jobtype" aria-expanded="false" aria-controls="jobtype">
                                                Type of employment
                                            </button>
                                        </h2>
                                        <div id="jobtype" class="accordion-collapse collapse show" aria-labelledby="jobType">
                                            <div class="accordion-body">
                                                <div class="side-title">
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                                                        <label class="form-check-label ms-2 text-muted" for="flexRadioDefault6">
                                                            Freelance
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexRadioDefault2">
                                                            Full Time
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexRadioDefault3">
                                                            Internship
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexRadioDefault4">
                                                            Part Time
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header" id="datePosted">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dateposted" aria-expanded="false" aria-controls="dateposted">
                                                Date Posted
                                            </button>
                                        </h2>
                                        <div id="dateposted" class="accordion-collapse collapse show" aria-labelledby="datePosted">
                                            <div class="accordion-body">
                                                <div class="side-title form-check-all">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="checkAll" value="" />
                                                        <label class="form-check-label ms-2 text-muted" for="checkAll">
                                                            All
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked5" checked />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked5">
                                                            Last Hour
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked6" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked6">
                                                            Last 24 hours
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked7" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked7">
                                                            Last 7 days
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked8" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked8">
                                                            Last 14 days
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" name="datePosted" value="last" id="flexCheckChecked9" />
                                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked9">
                                                            Last 30 days
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header" id="tagCloud">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagcloud" aria-expanded="false" aria-controls="tagcloud">
                                                Tags Cloud
                                            </button>
                                        </h2>
                                        <div id="tagcloud" class="accordion-collapse collapse show" aria-labelledby="tagCloud">
                                            <div class="accordion-body">
                                                <div class="side-title">
                                                    <Link to="" class="badge tag-cloud fs-13 mt-2">design</Link>
                                                    <Link to="" class="badge tag-cloud fs-13 mt-2">marketing</Link>
                                                    <Link to="" class="badge tag-cloud fs-13 mt-2">business</Link>
                                                    <Link to="" class="badge tag-cloud fs-13 mt-2">developer</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>

                </div>

            </section>



            <div class="modal fade" id="applyNow" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <div class="text-center mb-4">
                                <h5 class="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
                            </div>
                            <div class="position-absolute end-0 top-0 p-3">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="mb-3">
                                <label for="nameControlInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="nameControlInput" placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="emailControlInput2" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="emailControlInput2" placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="messageControlTextarea" class="form-label">Message</label>
                                <textarea class="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="inputGroupFile01">Resume Upload</label>
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Application</button>
                        </div>
                    </div>
                </div>
            </div>]

        </div>
    )
}