import './CandidateModal.css'
import {LiaTimesSolid} from 'react-icons/lia'
import {BiSolidEnvelope} from 'react-icons/bi'
import {BsArrowRightShort, BsCheck2, BsTelephoneFill} from 'react-icons/bs'
import {PiHourglassBold} from 'react-icons/pi'
import user from '../../Assets/2.jpeg'
import {FaAirbnb, FaCopy} from 'react-icons/fa'
const CandidateModal = ({togglemodal, isdarkmode}) => {
    return ( 
        <div className="modal-background">
            <div className={isdarkmode ?"candidate-modal-dark":"candidate-modal"}>
                <div className="candidate-modal-inner">
                    <div className="candidate-modal-top">
                        <p>User Details</p>
                        <div className="modal-close" onClick={togglemodal}>
                            <LiaTimesSolid/>
                        </div>
                    </div>
                    <div className={isdarkmode ?"candidate-details-dark":"candidate-details"}>
                        <div className="candidate-details-top">
                            <img src={user}></img>
                            <p className='candidate-name'>Malaika Brown</p>
                        </div>
                        <div className="candidate-contact">
                            <div className="candidate-email">
                                <div className="email-icon">
                                    <BiSolidEnvelope/>
                                </div>
                                <div className="candidate-contact-inner">
                                    <p className='contact-head'>EMAIL</p>
                                    <p className='contact-body'>malaika.br@gmail.com</p>
                                </div>
                            </div>
                            <div className="candidate-phone">
                                <div className="phone-icon">
                                    <BsTelephoneFill/>
                                </div>
                                <div className="candidate-contact-inner">
                                    <p className='contact-head'>PHONE NUMBER</p>
                                    <p className='contact-body'>+11 5423-6548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isdarkmode ?"application-dark":"application"}>
                        <p className='application-title'>Transaction Details</p>
                        <div className="application-steps">
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete">
                                        <BsCheck2/>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title'>Payment</p>
                                        <p className='step-date'>March 20, 2023</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-pending">
                                        <PiHourglassBold/>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title'>Payment Screening</p>
                                        <p className='step-date'>March 20, 2023</p>
                                    </div>
                                </div>
                                <div className="step-review">
                                    <p>Under Review</p>
                                </div>
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-undone">
                                        <p>3</p>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title-2'>On The way</p>
                                    </div>
                                </div>
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-undone">
                                        <p>4</p>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title-2'>Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="candidate-modal-next">
                    <button>Copy Transaction <FaCopy/></button>
                </div>
            </div>
        </div>
    );
}
 
export default CandidateModal;