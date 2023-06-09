import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'react-bootstrap/Image';

const CustomModel = (props) =>
{
  const [showMe, setShowMe] = useState(false);
  const [showSampleImg, setShowSamplImg] = useState(false);
 
  const showExample = () => {
    setShowMe(!showMe);
    setShowSamplImg(false);
  };
  const hideExample = () => {
    setShowMe(!showMe);
    setShowSamplImg(!showSampleImg);
  };
  const closeModal = () => {
    props.setIsModalOpen(false);
    setShowMe(false);
    setShowSamplImg(false);
  };
  return (
      <Modal className="box" isOpen={props.isModalOpen} onRequestClose={closeModal}>
          <div>
              <h1>To access the health status from your browser:</h1>
              <p onMouseOver={showExample} onMouseLeave={hideExample}>Type the pod url followed by <span className='box_special'>/health/ready</span></p>
              <p className={showMe ? '' : 'hideMe'} ><span className='box_special'> Ex: </span>http://sdsmapi-client-web-am1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/live</p>
              <Image className={showSampleImg ? '' : 'hideMe'} src="sample.png"/>
          </div>
      </Modal>
)}
; export default CustomModel;