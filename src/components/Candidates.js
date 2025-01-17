import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { candidateList } from "../services/JobService";

export default function Candidates() {
  const [candidate, setCandidate] = useState([]);

  const candidateListing = async () => {
    try {
      const response = await candidateList();
      console.log(response);
      setCandidate(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    candidateListing();
  }, []);

  return (
    <div class="page-content">
      {/* Start home */}
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">Candidate List</h3>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* end home */}

      {/* START SHAPE */}
      <div class="position-relative" style={{ zIndex: 1 }}>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE */}

      {/* START JOB-LIST */}
      <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="candidate-list-widgets mb-4">
                <form action="#">
                  <div class="row g-2">
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-briefcase-alt"></i>
                        <input
                          type="search"
                          class="form-control filter-job-input-box"
                          id="exampleFormControlInput1"
                          placeholder="Job, Company name... "
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-location-point"></i>
                        <select
                          class="form-select"
                          data-trigger
                          name="choices-single-location"
                          id="choices-single-location"
                          aria-label="Default select example"
                        >
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
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
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
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
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
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
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
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
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
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libyan Arab Jamahiriya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
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
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
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
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
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
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
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
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
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
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
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
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
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
                    {/*end col*/}
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-clipboard-notes"></i>
                        <select
                          class="form-select "
                          data-trigger
                          name="choices-single-categories"
                          id="choices-single-categories"
                          aria-label="Default select example"
                        >
                          <option value="4">Accounting</option>
                          <option value="1">IT & Software</option>
                          <option value="3">Marketing</option>
                          <option value="5">Banking</option>
                        </select>
                      </div>
                    </div>
                    {/*end col*/}
                    <div class="col-lg-3">
                      <div>
                        <Link to="" class="btn btn-primary">
                          <i class="uil uil-filter"></i> Filter
                        </Link>
                        <Link to="" class="btn btn-success ms-2">
                          <i class="uil uil-cog"></i> Advance
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                </form>
                {/*end form*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="mb-3 mb-lg-0">
                <h6 class="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
              </div>
            </div>
            {/*end col*/}

            <div class="col-lg-4">
              <div class="candidate-list-widgets">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="selection-widget">
                      <select
                        class="form-select"
                        data-trigger
                        name="choices-single-filter-orderby"
                        id="choices-single-filter-orderby"
                        aria-label="Default select example"
                      >
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="selection-widget mt-2 mt-lg-0">
                      <select
                        class="form-select"
                        data-trigger
                        name="choices-candidate-page"
                        id="choices-candidate-page"
                        aria-label="Default select example"
                      >
                        <option value="df">All</option>
                        <option value="ne">8 per Page</option>
                        <option value="ne">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/*end candidate-list-widgets*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div class="row">
            <div class="col-lg-12">
              <div class="candidate-list">
                {Array.isArray(candidate) && candidate.length > 0
                  ? candidate.map((list) => (
                      <div
                        class="candidate-list-box card mt-4"
                        key={list.user_id}
                      >
                        <div class="card-body p-4">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <div class="candidate-list-images">
                                <Link to="">
                                  <img
                                    src={list.avatar}
                                    alt=""
                                    class="avatar-md img-thumbnail rounded-circle"
                                  />
                                </Link>
                              </div>
                            </div>
                            {/*end col*/}

                            <div class="col-lg-5">
                              <div class="candidate-list-content mt-3 mt-lg-0">
                                <h5 class="fs-19 mb-0">
                                  <Link
                                    to="/candidate-detail"
                                    class="primary-link"
                                  >
                                    {list.name}
                                  </Link>{" "}
                                  {/* <span class="badge bg-success ms-1">
                                    <i class="mdi mdi-star align-middle"></i>{" "}
                                    4.8
                                  </span> */}
                                </h5>
                                <p class="text-muted mb-2">
                                  {list.designation && list.designation.name}
                                </p>
                                <ul class="list-inline mb-0 text-muted">
                                  <li class="list-inline-item">
                                    <i class="mdi mdi-map-marker"></i>
                                    {list.current_location ? list.current_location : "Location not disclosed"}
                                  </li>
                                  <li class="list-inline-item">
                                    <i class="uil uil-wallet"></i>{" "}
                                    {list.salary_range ? list.salary_range && list.salary_range.name : "Not disclosed"}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}

                            <div class="col-lg-4">
                              {Array.isArray(list.skills) &&
                              list.skills.length > 0
                                ? list.skills.map((skill) => (
                                    <span
                                      class="badge bg-success-subtle text-success fs-14 mt-1"
                                      key={skill.id}
                                    >
                                      {skill.name}
                                    </span>
                                  ))
                                : ""}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div class="favorite-icon">
                            <Link to="">
                              <i class="uil uil-heart-alt fs-18"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
              {/*end candidate-list*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div class="row">
            <div class="col-lg-12 mt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination job-pagination mb-0 justify-content-center">
                  <li class="page-item disabled">
                    <Link class="page-link" to="" tabindex="-1">
                      <i class="mdi mdi-chevron-double-left fs-15"></i>
                    </Link>
                  </li>
                  <li class="page-item active">
                    <Link class="page-link" to="">
                      1
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="">
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="">
                      4
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="">
                      <i class="mdi mdi-chevron-double-right fs-15"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/*end col*/}
          </div>
          {/* end row */}
        </div>
        {/*end container*/}
      </section>
      {/* END JOB-LIST */}
    </div>
  );
}
