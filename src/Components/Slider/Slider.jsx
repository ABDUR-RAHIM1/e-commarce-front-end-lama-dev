import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
function Slider() {
    return (
        <div className="sliderContainer">
                <Carousel variant="dark">
            <Carousel.Item>
                <div className="sldieWrap" style={{backgroundColor :"#bac3cc", color :"black"}}>
                    <div className="slderImg">
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2018/03/01/14/48/woman-3190829_1280.jpg"
                            alt="First slide"
                        />
                    </div>
                    <div className="sliderCaption">
                        <h1>cels Winter</h1>
                        <h3 style={{color:"black"}}>Super Deal On in Winter Products</h3>
                        <button className='btn btn-primary my-3'>Shop Now</button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="sldieWrap" style={{backgroundColor :"rgb(188 172 159)", color :"black"}}>
                    <div className="slderImg">
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/10/15/02/08/girl-from-behind-1741699_640.jpg"
                            alt="First slide"
                        />
                    </div>
                    <div className="sliderCaption">
                        <h1>cels Winter</h1>
                        <h3>Super Deal On in Winter Products</h3>
                        <button className='btn btn-primary my-3'>Shop Now</button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="sldieWrap" style={{backgroundColor :"#3d7284", color :"white"}}>
                    <div className="slderImg">
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2018/01/01/10/48/design-3053883_640.jpg"
                            alt="First slide"
                        />
                    </div>
                    <div className="sliderCaption">
                        <h1>cels Winter</h1>
                        <h3>Super Deal On in Winter Products</h3>
                        <button className='btn btn-primary my-3'>Shop Now</button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Slider;