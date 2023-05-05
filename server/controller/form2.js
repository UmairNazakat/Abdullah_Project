import React from 'react';
import { useState } from 'react';

export default function Form() {
    const [formFields, setFormFields] = useState([])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const addFields = () => {
        
        let object = {
          name: '',
          value: ''
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }    

    return(
        <div className='app-one'>
        <section>
            <div className='register'>
                <div className='col-1'>
                    
                    

                    <form id='form' className='flex flex-col'>
                        <h4>Register Your Property</h4>
                         <span>Register and enjoy the service</span>
                        
                        <h4>Location & Purpose</h4>
                        <hr class="border"></hr>
                        <div>
                            <label>Select Property Type</label>
                            <input type='radio' id='house' name='property_type' value='House' style={{margin: "5px"}}/>
                            <label for='House'>House</label>
                            <input type='radio' id='flat' name='property_type' value='Flat' style={{margin: "5px"}}/>
                            <label for='Flat'>Flat</label>
                        </div>

                        <input type='text' placeholder='City' name='city'/>
                        <input type='text' placeholder='Location' name='location'/>

                        <h4>Price & Area</h4>
                        <hr class="border"></hr>

                        <div>
                            <label>Select Area Units</label><br/>
                            <input type='radio' id='squareMeter' name='area_units' value='Square Meter' style={{margin: "5px"}}/>
                            <label for='Square Meter'>Square Meter</label>
                            <input type='radio' id='squareFoot' name='area_units' value='Square Foot' style={{margin: "5px"}}/>
                            <label for='Square Foot'>Square Foot</label>
                        </div>

                        <input type='number' placeholder='Area Size' name='area'/>
                        <input type='number' placeholder='Price' name='price'/>

                        <div>
                            <label>Installment Available</label>
                            <input type='radio' id='yes' name='installment' value='Yes' style={{margin: "5px"}}/>
                            <label for='Yes'>Yes</label>
                            <input type='radio' id='no' name='installment' value='No' style={{margin: "5px"}}/>
                            <label for='No'>No</label>
                        </div>

                        <div>
                            <label>Ready For Possession</label>
                            <input type='radio' id='yes' name='possession' value='Yes' style={{margin: "5px"}}/>
                            <label for='Yes'>Yes</label>
                            <input type='radio' id='no' name='possession' value='No' style={{margin: "5px"}}/>
                            <label for='No'>No</label>
                        </div>
                        
                        <h4>Features & Amenities</h4>
                        <hr class="border"></hr>

                        <input type='number' placeholder='Bedrooms' name='bedrooms'/>
                        <input type='number' placeholder='Bathrooms' name='bathrooms'/>
                        {/* <input type='text' placeholder='Amenities & Features' name='features'/> */}
                        
                        <h4>Interior Details</h4>
                        
                        <div>
                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="interiorDetails1" name="equippedKitchen" value="Equipped Kitchen" style={{marginRight: "10px"}}/>
                                <label for="interiorDetails1" style={{marginRight: "25px"}}> Equipped Kitchen</label>
                            
                                <input type="checkbox" id="interiorDetails2" name="gym" value="Gym" style={{marginRight: "10px"}}/>
                                <label for="interiorDetails2" style={{marginRight: "25px"}}> Gym</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="interiorDetails3" name="laundry" value="Laundry" style={{marginRight: "10px"}}/>
                                <label for="interiorDetails3" style={{marginRight: "25px"}}> Laundry</label>
                           
                               <input type="checkbox" id="interiorDetails4" name="mediaRoom" value="Media Room" style={{marginRight: "10px"}}/>
                               <label for="interiorDetails4" style={{marginRight: "25px"}}> Media Room</label>
                            </div>
                        </div>

                        <h4>Outdoor Details</h4>
                        
                        <div>
                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="outdoorDetails1" name="backyard" value="Backyard" style={{marginRight: "10px"}}/>
                                <label for="outdoorDetails1" style={{marginRight: "25px"}}> Backyard</label>
                            
                                <input type="checkbox" id="outdoorDetails2" name="basketballCourt" value="Basketball court" style={{marginRight: "10px"}}/>
                                <label for="outdoorDetails2" style={{marginRight: "25px"}}> Basketball Court</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="outdoorDetails3" name="frontYard" value="Front yard" style={{marginRight: "10px"}}/>
                                <label for="outdoorDetails3" style={{marginRight: "25px"}}> Front yard</label>
                           
                               <input type="checkbox" id="outdoorDetails4" name="garageAttached" value="Garage Attached" style={{marginRight: "10px"}}/>
                               <label for="outdoorDetails4" style={{marginRight: "25px"}}> Garage Attached</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="outdoorDetails5" name="hotBath" value="Hot Bath" style={{marginRight: "10px"}}/>
                                <label for="outdoorDetails5" style={{marginRight: "25px"}}> Hot Bath</label>
                           
                               <input type="checkbox" id="outdoorDetails6" name="pool" value="Pool" style={{marginRight: "10px"}}/>
                               <label for="outdoorDetails6" style={{marginRight: "25px"}}> Pool</label>
                            </div>
                        </div>

                        <h4>Utilities</h4>
                        
                        <div>
                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="utility1" name="centralAir" value="Central Air" style={{marginRight: "10px"}}/>
                                <label for="utility1" style={{marginRight: "25px"}}> Central Air</label>
                            
                                <input type="checkbox" id="utility2" name="electricity" value="Electricity" style={{marginRight: "10px"}}/>
                                <label for="utility2" style={{marginRight: "25px"}}> Electricity</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="utility3" name="heating" value="Heating" style={{marginRight: "10px"}}/>
                                <label for="utility3" style={{marginRight: "25px"}}> Heating</label>
                           
                               <input type="checkbox" id="utility4" name="naturalGas" value="Natural Gas" style={{marginRight: "10px"}}/>
                               <label for="utility4" style={{marginRight: "25px"}}> Natural Gas</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="utility5" name="ventilation" value="Ventilation" style={{marginRight: "10px"}}/>
                                <label for="utility5" style={{marginRight: "25px"}}> Ventilation</label>
                           
                               <input type="checkbox" id="utility6" name="water" value="water" style={{marginRight: "10px"}}/>
                               <label for="utility6" style={{marginRight: "25px"}}> Water</label>
                            </div>
                        </div>
                                 
                        <h4>Other Features</h4>
                        
                        <div>
                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="feature1" name="chairAccessible" value="Chair Accessible" style={{marginRight: "10px"}}/>
                                <label for="feature1" style={{marginRight: "25px"}}> Chair Accessible</label>
                            
                                <input type="checkbox" id="feature2" name="elevator" value="Elevator" style={{marginRight: "10px"}}/>
                                <label for="feature2" style={{marginRight: "25px"}}> Elevator</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="feature3" name="fireplace" value="Fireplace" style={{marginRight: "10px"}}/>
                                <label for="feature3" style={{marginRight: "25px"}}> Fireplace</label>
                           
                               <input type="checkbox" id="feature4" name="smokeDetectors" value="Smoke Detectors" style={{marginRight: "10px"}}/>
                               <label for="feature4" style={{marginRight: "25px"}}> Smoke Detectors</label>
                            </div>

                            <div style={{marginBottom: "15px"}}>
                                <input type="checkbox" id="feature5" name="washerAndDryer" value="Washer and dryer" style={{marginRight: "10px"}}/>
                                <label for="feature5" style={{marginRight: "25px"}}> Washer and dryer</label>
                           
                               <input type="checkbox" id="feature6" name="wifi" value="WiFi" style={{marginRight: "10px"}}/>
                               <label for="feature6" style={{marginRight: "25px"}}> WiFi</label>
                            </div>
                        </div>                

                        <h4>Ad Information</h4>
                        <hr class="border"></hr>

                        <input type='text' placeholder='Title' name='title'/>
                        
                        <div>
                            <label for="description">Description</label>

                            <textarea id="description" name="description" rows="4" cols="50">
                                
                            </textarea>
                        </div>

                        <h4>Property Images & Videos</h4>
                        <hr class="border"></hr>

                        <label for="propertyImg">Property Image</label>
                        <input type='file' multiple="multiple" placeholder='Property Image' name='propertyImg'/>

                        <label for="propertyVideo">Property Video</label>
                        <input type='file' placeholder='Property Video' name='propertyVideo'/>

                        <h4>Contact Information</h4>
                        <hr class="border"></hr>

                        <input type='email' placeholder='Email' name='email'/>
                        <input type='tel' placeholder='Mobile' name='mobile'/>
                        <input type='tel' placeholder='Landline' name='Landline'/>

                        DYNAMIC FIELDS
                        {formFields.map((form, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        className='dynamic-input'
                                        name='name'
                                        placeholder='Field Name'
                                        onChange={event => handleFormChange(event, index)}
                                        value=""
                                    />
                                    <input
                                        className='dynamic-input'
                                        name='value'
                                        placeholder='Value'
                                        onChange={event => handleFormChange(event, index)}
                                        value=""
                                    />
                                <button type='button' className='btn-remove' onClick={() => removeFields(index)}>Remove</button>
                                    </div>
                        )
                        })}

                        <button type='button' className='btn' onClick={addFields}>Add More Fields</button>
                        <button className='btn'>Register</button>
                    </form>
                </div>
                <div className='col-2'></div>
            </div>
        </section>
        </div>
    )
}