import React ,{useState, useEffect} from "react";
import "../../styles/userpage.css";
import { Button, Collapse, Card, CardBody } from 'reactstrap';


const Userpage = () =>{
    const [openPanel, setOpenPanel] = useState(null);
    const name = localStorage.getItem('username')
    const gmail = localStorage.getItem('gmail')

    const togglePanel = (panel) => {
        if (openPanel === panel) {
          setOpenPanel(null);
        } else {
          setOpenPanel(panel); 
        }
      };

    useEffect(()=>{
        togglePanel("Items")
    },[])
    return(
       <div className="container-fluid p-0">
            <div className="row p-0">
                <div className="col-md-11" id="user-wallpaper">
                    <img src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_1280.jpg" alt="user-wallpaper"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5" id="user-image">
                    <img src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg" alt="user-image" />
                </div>
                <div id="userInfo" className="col-md-8">
                        <div className="d-flex flex-row justify-content-between">
                            <h1>{name}</h1>
                            <div className="d-flex flex-column">
                                <button className="btn bg-light"> <i class="fa-solid fa-circle-check" style={{color: "#43af41"}}></i> Verified</button>
                                <div className="d-flex flex-row mt-2">
                                    <i class="fa-solid fa-star" style={{color: "#ffe561"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#ffe561"}}></i>
                                </div>
                               
                            </div>
                            
                        </div>
                        <h3 className="text-muted"><small>{gmail}</small></h3> 
                        <h4 className="text-muted"><small> Santutxu</small></h4>              
                </div>
                <div className="row d-flex aling-items-center justify-content-center">
                    <div className="col-md-11">
                        <div className="row">
                            <div className="row bg-light border py-2 mb-3 mx-0" id="collapseBtns">
                                <div className="col-md-3 ps-0">
                                    <Button color="secondary"  className="col-md-12" onClick={() => togglePanel('Items')}>
                                        Items
                                    </Button>
                                </div>
                                <div className="col-md-3">
                                    <Button color="secondary"  className="col-md-12" onClick={() => togglePanel('Exchange')}>
                                        Exchange
                                    </Button>
                                </div>
                                <div className="col-md-3">
                                    <Button color="secondary" className="col-md-12" onClick={() => togglePanel('Favorites')}>
                                        Favorites
                                    </Button>
                                </div>
                                <div className="col-md-3  pe-0">
                                    <Button color="secondary" className="col-md-12" onClick={() => togglePanel('AboutMe')}>
                                        About Me
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Collapse isOpen={openPanel === 'Items'}>
                            <Card>
                            <CardBody>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                            impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                             quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                             On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source
                              de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem
                               Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une
                                distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du
                                 français standard. De nombreuses suites logicielles de mise en page ou éditeurs de site
                                 s Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira 
                            </CardBody>
                            </Card>
                        </Collapse>

                        <Collapse isOpen={openPanel === 'Favorites'}>
                            <Card>
                            <CardBody>
                                Some placeholder content for the 'Favorites' panel.
                            </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={openPanel === 'Exchange'}>
                            <Card>
                            <CardBody>
                                Some placeholder content for the 'Favorites' panel.
                            </CardBody>
                            </Card>
                        </Collapse>

                        <Collapse isOpen={openPanel === 'AboutMe'}>
                            <Card>
                            <CardBody>
                                Some placeholder content for the 'About Me' panel.
                            </CardBody>
                            </Card>
                        </Collapse>
                        
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Userpage