import React, { Component } from 'react';
function Services()
{
    return(
        <section className="services section__interne">
            <div className="grid elements">
                <div className="col-2 elments__visibles">
                    <div className="services__elt services__elt-marketplace">
                        <h2>For patients</h2>
                        <h1>Find a doctor, book a visit and solve any health-related doubt</h1>

                        <div>
                            <div className="selectionner">
                                <select data-id="domain-switcher">
                                    <option>Choose country</option>
                                    <option value="http://www.doctoraliar.com">Argentina</option>
                                    <option value="http://www.doctoralia.com.au">Australia</option>
                                    <option value="http://www.doctoralia.com.br">Brazil</option>
                                    <option value="http://www.doctoralia.cl">Chile</option>
                                    <option value="http://www.doctoralia.co">Colombia</option>
                                    <option value="http://www.znamylekar.cz">Czech</option>
                                    <option value="http://www.doctoralia-fr.com">France</option>
                                    <option value="http://www.miodottore.it">Italy</option>
                                    <option value="http://www.doctoralia.com.mx">Mexico</option>
                                    <option value="http://www.doctoralia.pe">Peru</option>
                                    <option value="http://www.znanylekarz.pl">Poland</option>
                                    <option value="http://www.doctoralia.com.pt">Portugal</option>
                                    <option value="http://www.doctoralia.es">Spain</option>
                                    <option value="http://www.doktortakvimi.com">Turkey</option>
                                    <option value="http://www.doctoralia.co.uk">UK</option>
                                </select>
                            </div>
                        </div>
                        <figure className="services__elt__ecran">
                            <img src="https://www.docplanner.com/img/screen-marketplace@2x.png" />
                        </figure>
                    </div>
                </div>

                <div className="col-2 elments__visibles">
                    <div className="services__elt services__elt-saas" style={{height: "392px"}}>
                        <h2>For doctors</h2>
                        <h1>Save time managing visits and cut no-shows by half</h1>
                        <figure className="services__elt__ecran services__elt__ecran-saas">
                            <img src="https://www.docplanner.com/img/screen-saas@2x.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>


    );
}
export default Services;