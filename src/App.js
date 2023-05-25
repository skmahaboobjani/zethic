import React,{useState} from "react";

import "./App.css"; 

const Header = () => {
  return (
    <div>
    <header>
      <div className="left-side">
        <h1 style={{color:'#000000'}}>Discover<br/> Plots</h1>
      </div>
      <div className="right-side">
        <ul>
          <li>
            <select>
              <option value="projects">Projects</option>
            </select>
          </li>
          <li  style={{color:'#000000'}}>Agents</li>
          <li style={{color:'#000000'}} className="amenities-item">Amenities</li>
          <li  style={{color:'#000000'}} className="vertical-line-header"></li>
          <li  style={{color:'#000000'}} className="sign-in">Sign In</li>
          <li   style={{color:'#000000'}} className="schedule-call">Schedule a Call</li>
        </ul>
      </div>
    </header>
   
 
</div>
  );
};











const Sidebar = () => {
  return (
    <>
   
      <div className="outer-box">
      
        <div className="inner-box"
          style={{ backgroundImage: "url('https://ui-build-xi.vercel.app/static/media/Rectangle1.00644f019a28db707e3a.png')", backgroundSize: '40% 70%', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}
        >
          
          
            
           
            <h1 style={{  position: 'absolute', paddingTop: '10px', left:'35%',top:"150px", fontSize: '80px',color:'#000000' }}>Discover Your Perfect</h1>
            <h1  style={{ position: 'absolute', paddingTop: '2px', left:'45%',top:"270px", fontSize: '80px',color:'#000000' }}>Plot of Land.</h1>
            <p  style={{ position: 'absolute',  fontFamily:"Inter, sans-serif", fontWeight:'400',   paddingTop: '50px', left:'45%',top:"350px", fontSize: '40px',color:'#ababab'}}>starting at</p>
            <p  style={{ position: 'absolute', paddingTop: '2px', left:'45%',top:"410px", fontSize: '80px',color:'#fe6d3f' }}>₹3999</p>
            <p  style={{ position: 'absolute', paddingTop: '2px', left:'61%',top:"500px", fontSize: '40px',color:'#000000' }}>per.sqft</p>  
         
          

<div style={{ position: 'absolute', left: '45%', top: '650px', border: '1px solid #ababab', borderRadius: '4px', padding: '5px', width: '600px', display: 'flex', alignItems: 'center' }}>
  <input type="text" placeholder="Search area or location" style={{ flex: '1', padding: '10px', fontSize: '20px', border: 'none' }} />
 
  <select style={{ padding: '10px', fontSize: '20px' }}>
    <option value="budget">₹Budget</option>
   
  </select>
  <button style={{ padding: '10px 20px', fontSize: '20px', marginRight: '10px', color:'white', backgroundColor:'#fe6d3f' }}>Search</button>
</div>







         
          <div className="column">
  <p style={{ color: 'black',fontFamily:'Inter, sans-serif',position:'absolute' ,fontSize:'30px', top: '850px',left:'100px'}}>437k+</p>
  <p style={{ color: '#737373',position:'absolute' , top: '890px',left:'70px',fontFamily:'Inter, sans-serif;' }}>Happy Customers</p>
</div>

          <div className="column">
          <p style={{ color: 'black',fontFamily:'Inter, sans-serif',position:'absolute' ,fontSize:'30px', top: '750px',left:'340px'}}>340k+</p>
         <p style={{ color: '#737373',position:'absolute' , top: '790px',left:'300px',fontFamily:'Inter, sans-serif;' }}>Landmark Near Chennai</p>
          </div>
          <div className="column">

          <p style={{ color: 'black',fontFamily:'Inter, sans-serif',position:'absolute' ,fontSize:'30px', top: '800px',left:'540px'}}>4.3m+</p>
         <p style={{ color: '#737373',position:'absolute' , top: '850px',left:'540px',fontFamily:'Inter, sans-serif;' }}>sq.Feet Developed</p>
           
          </div>
         






<div style={{ display: 'flex' }}>
  <div style={{ position: 'relative', flex: '1', top: '750px', left: '150px' }}>
    <div style={{ backgroundImage: 'url("https://media.gettyimages.com/id/1316316537/photo/construction-frame-on-rural-landscape.jpg?s=612x612&w=gi&k=20&c=f2WQ4JyWKKlh94unZpvLDm05hDPUFZtf0dOqY6TsL8E=")', height: '240px', width: '200px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', top: '100px' }}></div>
  </div>
  <div style={{ position: 'relative', flex: '1', top: '750px', left: '180px' }}>
    <div style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHsQrW--McgmjI9fDaUWLo2RX8D4vEQpxykSzqCBHEkeOOuQh3qhVdY4mH3AQ8NuZ9HU&usqp=CAU")', backgroundRepeat: 'no-repeat', height: '240px', width: '200px', backgroundSize: 'cover', backgroundPosition: 'center', top: '100px' }}></div>
  </div>
  <p style={{ color: 'black', position: 'absolute', right: '70px', top: '750px', fontFamily: 'Inter, sans-serif' }}>
    <span style={{ color: '#fe6d3f', fontSize: '44px' }}>&#x2665;</span> Trending projects
  </p>
</div>
 </div>
      </div>
    </>
  );
};
const MainContent = () => {
  
  return (
    <main>
      <nav>
        <ul className="nav-links">
          <li>
            International Business Times
          </li>
          <li id="marketwatch" style={{ fontFamily: 'Verdana,Geneva,Tahoma,sans-serif', fontSize: "1.5rem", fontStyle: "italic" }}>
            MarketWatch
          </li>
          <li>
            Forbes
          </li>
          <li>
            Yahoo!
          </li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="card-row">
          <div className="card">
            <img className="rounded-image" src="https://assesment1-delta.vercel.app/Screenshot%202023-05-24%20140141.png" alt="Image 1" width="300" height="400" />
           
          </div>
          <div className="card">
            <img className="rounded-image" src="https://thumbs.dreamstime.com/b/sunset-above-road-roller-working-construction-site-new-79652896.jpg" alt="Image 2" width="300" height="400" />
           
          </div>
          <div className="card">
            <img className="rounded-image" src="https://www.lawtonok.gov/sites/default/files/styles/1024widthxfluidheight/public/2017-11/001.JPG?itok=WCg3dkWk" alt="Image 3" width="300" height="400" />
           
          </div>
          <div className="card">
            <img className="rounded-image" src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/Playground_Kashmiirirr_1.jpg" alt="Image 4" width="300" height="400" />
           
          </div>
        </div>
        <div className="explore-more">
        
            <p>--Explore More</p>
        
        
        </div>
       

      </div>
    </main>
  );
};



const Animations = () => {
  const [hoveredText, setHoveredText] = useState(null);

  const handleTextHover = (text) => {
    setHoveredText(text);
  };

  const handleTextLeave = () => {
    setHoveredText(null);
  };

  return (
    <div className="container">
      <h1 style={{ color: 'orange', textAlign:'center', marginBottom: '20px' }}>Projects Amenities</h1>
      <div className="text-container">
        <div
          className={`text ${hoveredText === 'text1' ? 'active' : ''}`}
          onMouseEnter={() => handleTextHover('text1')}
          onMouseLeave={handleTextLeave}
        >
          <h1 style={{ color: hoveredText === 'text1' ? 'blue' : 'black',textAlign:'center' }}>Children's Play Arena</h1>
        </div>
        <div
          className={`text ${hoveredText === 'text2' ? 'active' : ''}`}
          onMouseEnter={() => handleTextHover('text2')}
          onMouseLeave={handleTextLeave}
        >
          <h1 style={{ color: hoveredText === 'text2' ? 'blue' : 'black' ,textAlign:'center'}}>Street Lights</h1>
        </div>
        <div
          className={`text ${hoveredText === 'text3' ? 'active' : ''}`}
          onMouseEnter={() => handleTextHover('text3')}
          onMouseLeave={handleTextLeave}
        >
          <h1 style={{ color: hoveredText === 'text3' ? 'blue' : 'black' ,textAlign:'center'}}>24X7 Security</h1>
        </div>
        <div
          className={`text ${hoveredText === 'text4' ? 'active' : ''}`}
          onMouseEnter={() => handleTextHover('text4')}
          onMouseLeave={handleTextLeave}
        >
          <h1 style={{ color: hoveredText === 'text4' ? 'blue' : 'black',textAlign:'center' }}>Avenue Trees</h1>
        </div>
      </div>
    </div>
  );
};
const FeatureProjects = () => {
  const featureProjects = [
    'Egmore',
    'Koyambedu',
    'Sholinganallur',
    'Choolaimedu',
    'Grams Road',
    'Royapettah'
  ];

  return (
    <div className="feature-projects">
      {featureProjects.map((project, index) => (
        <span key={index} className="project">
          {project}
        </span>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div >
          <MainContent />
        
        </div>
        <Animations className={"mabu"} />
        
       
      </div>
    
    </div>
  );
};
export default App;