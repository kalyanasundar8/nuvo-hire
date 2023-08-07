import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

	// const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));

	
	
  return (
    <div className="main-content">

	<div className="page-content">

		
		<section className="bg-home3" id="home">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="mb-4 pb-3 me-lg-5">
							<h6 className="sub-title">We have 150,000+ live jobs</h6>
							<h1 className="display-5 fw-semibold mb-3">Thousand of Jobs is Waiting for you</h1>
							<p className="fs-18 text-muted mb-0">Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>
						</div>
						<form action="#">
							<div className="registration-form">
								<div className="row g-0">
									<div className="col-md-4">
										<div className="filter-search-form filter-border mt-3 mt-md-0">
											<i className="uil uil-briefcase-alt"></i>
											<input type="search" id="job-title" className="form-control filter-input-box" placeholder="Job, Company name..."/>
										</div>
									</div>
									<div className="col-md-4">
										<div className="filter-search-form mt-3 mt-md-0">
											<i className="uil uil-map-marker"></i>
											<select className="form-select home-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
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
									<div className="col-md-4">
										<div className="mt-3 mt-md-0 h-100">
											<button className="btn btn-primary submit-btn w-100 h-100" type="submit"><i className="uil uil-search me-1"></i> Find Job</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					
					<div className="col-lg-5">
						<div className="mt-5 mt-lg-0 ms-xl-5">
							<div className="quote-icon">
								<i className="mdi mdi-format-quote-open icon"></i>
								<i className="mdi mdi-format-quote-open icon-2 text-primary"></i>
							</div>
							<div className="swiper homeslider">
								
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="home-slide-box text-center">
											<img src="assets/images/home/img-02.png" alt="" className="img-fluid rounded-3"/>
											<div className="bg-overlay"></div>
											<div className="home-slide-content p-4">
												<h2 className="slide-para fw-normal text-white">" It looks perfect on all major browsers, tablets,
													and mobile devices."</h2>
												<h6 className="text-white">- MichaeL Drake</h6>
											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="home-slide-box text-center">
											<img src="assets/images/home/img-03.png" alt="" className="img-fluid rounded-3"/>
											<div className="bg-overlay"></div>
											<div className="home-slide-content p-4">
												<h2 className="slide-para fw-normal text-white">" This template is well organized and very easy to
													customize. "</h2>
												<h6 className="text-white">- Charles Dickens</h6>
											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="home-slide-box text-center">
											<img src="assets/images/home/img-04.png" alt="" className="img-fluid rounded-3"/>
											<div className="bg-overlay"></div>
											<div className="home-slide-content p-4">
												<h2 className="slide-para fw-normal text-white">" All your client websites if you are an agency or
													freelancer. "</h2>
												<h6 className="text-white">- Rebecca Swartz</h6>
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
		
		<section className="section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title text-center">
							<h3 className="title">Browser Jobs Categories </h3>
							<p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
								right freelancers.</p>
						</div>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-layers-alt"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">IT & Software</h5>
								</Link>
								<p className="text-muted mb-0">2024 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-airplay"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Technology</h5>
								</Link>
								<p className="text-muted mb-0">1250 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-bag"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Government</h5>
								</Link>
								<p className="text-muted mb-0">802 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-user-md"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Accounting / Finance</h5>
								</Link>
								<p className="text-muted mb-0">577 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-hospital"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Construction / Facilities</h5>
								</Link>
								<p className="text-muted mb-0">285 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-telegram-alt"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Tele-communications</h5>
								</Link>
								<p className="text-muted mb-0">495 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-scenery"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Design & Multimedia</h5>
								</Link>
								<p className="text-muted mb-0">1045 Jobs</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 mt-4 pt-2">
						<div className="popu-category-box rounded text-center">
							<div className="popu-category-icon icons-md">
								<i className="uim uim-android-alt"></i>
							</div>
							<div className="popu-category-content mt-4">
								<Link to="/job-categories" className="text-dark stretched-link">
									<h5 className="fs-18">Human Resource</h5>
								</Link>
								<p className="text-muted mb-0">1516 Jobs</p>
							</div>
						</div>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-lg-12">
						<div className="mt-5 text-center">
							<Link to="/job-categories" className="btn btn-primary btn-hover">Browse All Categories <i className="uil uil-arrow-right MS-1"></i></Link>
						</div>
					</div>
				</div>
			</div>
			
		</section>
		
		<section className="section bg-light">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title text-center mb-4 pb-2">
							<h4 className="title">New & Random Jobs</h4>
							<p className="text-muted mb-1">Post a job to tell us about your project. We'll quickly match you
								with the right freelancers.</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<ul className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4" id="pills-tab"
							role="tablist">
							<li className="nav-item" role="presentation">
								<button className="nav-link active" id="recent-jobs-tab" data-bs-toggle="pill"
									data-bs-target="#recent-jobs" type="button" role="tab" aria-controls="recent-jobs"
									aria-selected="true">Recent Jobs</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className="nav-link" id="featured-jobs-tab" data-bs-toggle="pill"
									data-bs-target="#featured-jobs" type="button" role="tab" aria-controls="featured-jobs"
									aria-selected="false">Featured Jobs</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className="nav-link" id="freelancer-tab" data-bs-toggle="pill"
									data-bs-target="#freelancer" type="button" role="tab" aria-controls="freelancer"
									aria-selected="false">Freelancer</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className="nav-link" id="part-time-tab" data-bs-toggle="pill"
									data-bs-target="#part-time" type="button" role="tab" aria-controls="part-time"
									aria-selected="false">Part Time</button>
							</li>
							<li className="nav-item" role="presentation">
								<button className="nav-link" id="full-time-tab" data-bs-toggle="pill"
									data-bs-target="#full-time" type="button" role="tab" aria-controls="full-time"
									aria-selected="false">Full Time</button>
							</li>
						</ul>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-lg-12">
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="recent-jobs" role="tabpanel"
								aria-labelledby="recent-jobs-tab">
								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Web Developer</Link>
													</h5>
													<p className="text-muted fs-14 mb-0">Web Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Oakridge Lane ssRichardson</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>1000-1200/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
													<span className="badge bg-info-subtle text-info fs-13 mt-1">Private</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 1
														- 2 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Business
															Associate</Link></h5>
													<p className="text-muted fs-14 mb-0">Pixel Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Dodge City, Louisiana</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>800-1800/m
													</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
													<span className="badge bg-info-subtle text-info fs-13 mt-1">Private</span>
													<span className="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 0
														- 1 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Digital Marketing
															Manager</Link></h5>
													<p className="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Phoenix, Arizona</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
													<span className="badge bg-info-subtle text-info fs-13 mt-1">Private</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span>
														4+ years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-lg-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Product
															Director</Link></h5>
													<p className="text-muted fs-14 mb-0">Creative Agency</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Escondido, California</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt">Full Time</span>
													<span className="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 2
														- 3 years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="text-center mt-4 pt-2">
									<Link to="/jobs" className="btn btn-primary">View More <i className="uil uil-arrow-right"></i></Link>
								</div>

							</div>
							

							<div className="tab-pane fade" id="featured-jobs" role="tabpanel"
								aria-labelledby="featured-jobs-tab">
								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Web Developer</Link>
													</h5>
													<p className="text-muted fs-14 mb-0">Web Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Oakridge Lane Richardson</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1000-1200/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
													<span className="badge bg-info-subtle text-info fs-13 mt">Private</span>
													<span className="badge bg-warning-subtle text-warning fs-13 mt-1">Urgent</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 1
														- 2 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Business
															Associate</Link></h5>
													<p className="text-muted fs-14 mb-0">Pixel Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Dodge City, Louisiana</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>800-1800/m </p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 0
														- 1 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Digital Marketing
															Manager</Link></h5>
													<p className="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Phoenix, Arizona</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span>
														4+ years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-lg-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Product
															Director</Link></h5>
													<p className="text-muted fs-14 mb-0">Creative Agency</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Escondido, California</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success    fs-13 mt-1">Full Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 2
														- 3 years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="text-center mt-4 pt-2">
									<Link to="/jobs.php" className="btn btn-primary">View More <i className="uil uil-arrow-right"></i></Link>
								</div>
							</div>
							

							<div className="tab-pane fade" id="freelancer" role="tabpanel" aria-labelledby="freelancer-tab">
								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Web Developer</Link>
													</h5>
													<p className="text-muted fs-14 mb-0">Web Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Oakridge Lane Richardson</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1000-1200/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 1
														- 2 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Business
															Associate</Link></h5>
													<p className="text-muted fs-14 mb-0">Pixel Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Dodge City, Louisiana</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>800-1800/m
													</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 0
														- 1 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Digital Marketing
															Manager</Link></h5>
													<p className="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Phoenix, Arizona</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span>
														4+ years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-lg-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Product
															Director</Link></h5>
													<p className="text-muted fs-14 mb-0">Creative Agency</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Escondido, California</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-primary-subtle text-primary fs-13 mt-1">Freelancer</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 2
														- 3 years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="text-center mt-4 pt-2">
									<Link to="/jobs.php" className="btn btn-primary">View More <i className="uil uil-arrow-right"></i></Link>
								</div>
							</div>
							

							<div className="tab-pane fade" id="part-time" role="tabpanel" aria-labelledby="part-time-tab">
								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Web Developer</Link>
													</h5>
													<p className="text-muted fs-14 mb-0">Web Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Oakridge Lane Richardson</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1000-1200/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 1
														- 2 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Business
															Associate</Link></h5>
													<p className="text-muted fs-14 mb-0">Pixel Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Dodge City, Louisiana</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>800-1800/m
													</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 0
														- 1 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
										
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
										
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Digital Marketing
															Manager</Link></h5>
													<p className="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0"> Phoenix, Arizona</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
										
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span>
														4+ years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-lg-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
										
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Product
															Director</Link></h5>
													<p className="text-muted fs-14 mb-0">Creative Agency</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Escondido, California</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-danger-subtle text-danger fs-13 mt-1">Part Time</span>
												</div>
											</div>
											
										</div>
									
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 2
														- 3 years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								
								<div className="text-center mt-4 pt-2">
									<Link to="/jobs.php" className="btn btn-primary">View More <i className="uil uil-arrow-right"></i></Link>
								</div>
							</div>
							

							<div className="tab-pane fade" id="full-time" role="tabpanel" aria-labelledby="full-time-tab">
								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-01.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Web Developer</Link>
													</h5>
													<p className="text-muted fs-14 mb-0">Web Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Oakridge Lane Richardson</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1000-1200/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
												</div>
											</div>
											
										</div>
									
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 1
														- 2 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
							

								<div className="job-box bookmark-post card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Business
															Associate</Link></h5>
													<p className="text-muted fs-14 mb-0">Pixel Technology pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Dodge City, Louisiana</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span className="text-primary">$</span>800-1800/m
													</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 0
														- 1 years</p>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-5">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Notes :</span>
														languages only differ in their grammar. </p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-md-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-03.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Digital Marketing
															Manager</Link></h5>
													<p className="text-muted fs-14 mb-0">Nuvo Hire Technology Pvt.Ltd</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Phoenix,  Arizona</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span>
														4+ years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="job-box card mt-4">
									<div className="bookmark-label text-center">
										<Link to="/javascript:void(0)" className="text-white align-middle"><i className="mdi mdi-star"></i></Link>
									</div>
									<div className="p-4">
										<div className="row align-items-center">
											<div className="col-md-2">
												<div className="text-center mb-4 mb-lg-0">
													<Link to="/company-details.php"><img src="assets/images/featured-job/img-04.png" alt="" className="img-fluid rounded-3"/></Link>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="mb-2 mb-md-0">
													<h5 className="fs-18 mb-1"><Link to="/job-details.php" className="text-dark">Product
															Director</Link></h5>
													<p className="text-muted fs-14 mb-0">Creative Agency</p>
												</div>
											</div>
											
											<div className="col-md-3">
												<div className="d-flex mb-2">
													<div className="flex-shrink-0">
														<i className="mdi mdi-map-marker text-primary me-1"></i>
													</div>
													<p className="text-muted mb-0">Escondido, California</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<p className="text-muted mb-2"><span
															className="text-primary">$</span>1500-2400/m</p>
												</div>
											</div>
											
											<div className="col-md-2">
												<div>
													<span className="badge bg-success-subtle text-success fs-13 mt-1">Full Time</span>
												</div>
											</div>
											
										</div>
										
									</div>
									<div className="p-3 bg-light">
										<div className="row justify-content-between">
											<div className="col-md-4">
												<div>
													<p className="text-muted mb-0"><span className="text-dark">Experience :</span> 2
														- 3 years</p>
												</div>
											</div>
											
											<div className="col-lg-2 col-md-3">
												<div className="text-start text-md-end">
													<Link to="/#applyNow" data-bs-toggle="modal" className="primary-link">Apply Now <i
															className="mdi mdi-chevron-double-right"></i></Link>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								

								<div className="text-center mt-4 pt-2">
									<Link to="/jobs.php" className="btn btn-primary">View More <i className="uil uil-arrow-right"></i></Link>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
				
			</div>
			
		</section>
		
		<section className="section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="section-title me-5">
							<h3 className="title">How It Work</h3>
							<p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
								right freelancers.</p>
							<div className="process-menu nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
								<Link className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
									<div className="d-flex">
										<div className="number flex-shrink-0">
											1
										</div>
										<div className="flex-grow-1 text-start ms-3">
											<h5 className="fs-18">Register an account</h5>
											<p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability
												is of great importance.</p>
										</div>
									</div>
								</Link>
								<Link className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
									<div className="d-flex">
										<div className="number flex-shrink-0">
											2
										</div>
										<div className="flex-grow-1 text-start ms-3">
											<h5 className="fs-18">Find your job</h5>
											<p className="text-muted mb-0">There are many variations of passages of avaibookmark-label, but the majority
												alteration in some form.</p>
										</div>
									</div>
								</Link>
								<Link className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
									<div className=" d-flex">
										<div className="number flex-shrink-0">
											3
										</div>
										<div className="flex-grow-1 text-start ms-3">
											<h5 className="fs-18">Apply for job</h5>
											<p className="text-muted mb-0">It is a long established fact that a reader will be distracted by the
												readable content of a page.</p>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="tab-content" id="v-pills-tabContent">
							<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
								<img src="assets/images/process-01.png" alt="" className="img-fluid"/>
							</div>
							<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
								<img src="assets/images/process-02.png" alt="" className="img-fluid"/>
							</div>
							<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
								<img src="assets/images/process-03.png" alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</section>
		
		<section className="section bg-light">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-7">
						<div className="text-center">
							<h2 className="text-primary mb-4">Browse Our <span className="text-warning fw-bold">5,000+</span> Latest
								Jobs</h2>
							<p className="text-muted">Post a job to tell us about your project. We'll quickly match you with
								the right freelancers.</p>
							<div className="mt-4 pt-2">
								<Link to="/" className="btn btn-primary btn-hover">Started Now <i className="uil uil-rocket align-middle"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	
		<section className="section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title text-center mb-4 pb-2">
							<h3 className="title mb-3">Happy Candidates</h3>
							<p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
								right freelancers.</p>
						</div>
					</div>
					
				</div>
				
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="swiper testimonialSlider pb-5">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="card testi-box">
										<div className="card-body">
											<div className="mb-4">
												<img src="assets/images/logo/mailchimp.svg" height="50" alt="" />
											</div>
											<p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
												Clear milestones, deadlines and fast work. Patience. Infinite patience. No
												shortcuts. Even if the client is being careless. "</p>
											<h5 className="mb-0">Jeffrey Montgomery</h5>
											<p className="text-muted mb-0">Product Manager</p>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="card testi-box">
										<div className="card-body">
											<div className="mb-4">
												<img src="assets/images/logo/wordpress.svg" height="50" alt="" />
											</div>
											<p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
												Clear milestones, deadlines and fast work. Patience. Infinite patience. No
												shortcuts. Even if the client is being careless. "</p>
											<h5 className="mb-0">Rebecca Swartz</h5>
											<p className="text-muted mb-0">Creative Designer</p>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="card testi-box">
										<div className="card-body">
											<div className="mb-4">
												<img src="assets/images/logo/instagram.svg" height="50" alt="" />
											</div>
											<p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
												Clear milestones, deadlines and fast work. Patience. Infinite patience. No
												shortcuts. Even if the client is being careless. "</p>
											<h5 className="mb-0">Charles Dickens</h5>
											<p className="text-muted mb-0">Store Assistant</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="swiper-pagination"></div>
						</div>
						
					</div>
					
				</div>
				
			</div>
		</section>
		
		<section className="section bg-light">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title text-center mb-5">
							<h3 className="title mb-3">Quick Career Tips</h3>
							<p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
								right freelancers.</p>
						</div>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="blog-box card p-2 mt-3">
							<div className="blog-img position-relative overflow-hidden">
								<img src="assets/images/blog/img-01.jpg" alt="" className="img-fluid"/>
								<div className="bg-overlay"></div>
								<div className="author">
									<p className=" mb-0"><i className="mdi mdi-account text-light"></i> <Link to="/javascript:void(0)"
											className="text-light user">Dirio Walls</Link></p>
									<p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i> 01 July, 2023</p>
								</div>
								<div className="likes">
									<ul className="list-unstyled mb-0">
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i
													className="mdi mdi-heart-outline me-1"></i> 33</Link></li>
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i
													className="mdi mdi-comment-outline me-1"></i> 08</Link></li>
									</ul>
								</div>
							</div>
							<div className="card-body">
								<Link to="/javascript:void(0)" className="primary-link">
									<h5 className="fs-17">How apps is the IT world ?</h5>
								</Link>
								<p className="text-muted">The final text is not yet avaibookmark-label. Dummy texts have Internet tend
									been in use by typesetters.</p>
								<Link to="/javascript:void(0)" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="blog-box card p-2 mt-3">
							<div className="blog-img position-relative overflow-hidden">
								<img src="assets/images/blog/img-02.jpg" alt="" className="img-fluid"/>
								<div className="bg-overlay"></div>
								<div className="author">
									<p className=" mb-0"><i className="mdi mdi-account text-light"></i> <Link to="/javascript:void(0)"
											className="text-light user">Brandon Carney</Link></p>
									<p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i> 25 June, 2023</p>
								</div>
								<div className="likes">
									<ul className="list-unstyled mb-0">
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i
													className="mdi mdi-heart-outline me-1"></i> 44</Link></li>
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i
													className="mdi mdi-comment-outline me-1"></i> 25</Link></li>
									</ul>
								</div>
							</div>
							<div className="card-body">
								<Link to="/javascript:void(0)" className="primary-link">
									<h5 className="fs-17">Smartest Applications for Business ?</h5>
								</Link>
								<p className="text-muted">Due to its widespread use as filler text for layouts, non-readability
									is of great importance: human perception.</p>
								<Link to="/javascript:void(0)" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="blog-box card p-2 mt-3">
							<div className="blog-img position-relative overflow-hidden">
								<img src="assets/images/blog/img-03.jpg" alt="" className="img-fluid"/>
								<div className="bg-overlay"></div>
								<div className="author">
									<p className=" mb-0"><i className="mdi mdi-account text-light"></i> <Link to="/javascript:void(0)"
											className="text-light user">William Mooneyhan</Link></p>
									<p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i> 16 March, 2023
									</p>
								</div>
								<div className="likes">
									<ul className="list-unstyled mb-0">
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i className="mdi mdi-heart-outline me-1"></i> 68</Link></li>
										<li className="list-inline-item"><Link to="/javascript:void(0)" className="text-white"><i className="mdi mdi-comment-outline me-1"></i> 20</Link></li>
									</ul>
								</div>
							</div>
							<div className="card-body">
								<Link to="/javascript:void(0)" className="primary-link">
									<h5 className="fs-17">Design your apps in your own way ?</h5>
								</Link>
								<p className="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters
									appear more frequently than others.</p>
								<Link to="/javascript:void(0)" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></Link>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</section>
		

		

		<div className="modal fade" id="applyNow" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-body p-5">
						<div className="text-center mb-4">
							<h5 className="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
						</div>
						<div className="position-absolute end-0 top-0 p-3">
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="mb-3">
							<label for="nameControlInput" className="form-label">Name</label>
							<input type="text" className="form-control" id="nameControlInput" placeholder="Enter your name"/>
						</div>
						<div className="mb-3">
							<label for="emailControlInput2" className="form-label">Email Address</label>
							<input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email"/>
						</div>
						<div className="mb-3">
							<label for="messageControlTextarea" className="form-label">Message</label>
							<textarea className="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
						</div>
						<div className="mb-4">
							<label className="form-label" for="inputGroupFile01">Resume Upload</label>
							<input type="file" className="form-control" id="inputGroupFile01"/>
						</div>
						<button type="submit" className="btn btn-primary w-100">Send Application</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>
  )
}
