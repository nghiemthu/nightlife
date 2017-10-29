import React from 'react';

class Footer extends React.Component {
  render() {
    
    const textClass = (this.props.isDark) ? 'dark-text' : null; 
    
    return (
      <footer className='none-margin'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-10 mx-auto">
              <a href="#" className={textClass}>Linkedin </a>
              <span className={textClass}>|</span> 
              <a href="#" className={textClass}> GitHub</a>
              <p className="copyright text-muted">Copyright &copy; Thu Nghiem 2017</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;